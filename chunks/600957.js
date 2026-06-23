r(321073), r(393431), r(532706), r(42231), r(232424), r(949626), r(767709), r(65162);
let o = null;
async function n(e, t, r, o) {
    let n,
        { videoTrack: a, syncSamples: i, description: l } = e,
        s = a.timescale,
        c = i.map((e) => e.cts / s),
        f = new Map(),
        u = new Map();
    for (let e = 0; e < t.length; e++) {
        let r =
                i[
                    (function (e, t) {
                        let r = 0,
                            o = Math.abs(e[0] - t);
                        for (let n = 1; n < e.length; n++) {
                            let a = Math.abs(e[n] - t);
                            a < o && ((o = a), (r = n));
                        }
                        return r;
                    })(c, t[e])
                ],
            o = Math.round((r.cts / s) * 1e6);
        u.set(o, r);
        let n = f.get(o) ?? [];
        n.push(e), f.set(o, n);
    }
    let d = Array(t.length),
        p = [],
        h = new VideoDecoder({
            output: (e) => {
                let t = f.get(e.timestamp);
                async function n() {
                    try {
                        if (null == t) return;
                        for (let n of t)
                            d[n] = await createImageBitmap(e, {
                                resizeWidth: r,
                                resizeHeight: o,
                                resizeQuality: "low",
                            });
                    } finally {
                        e.close();
                    }
                }
                p.push(n());
            },
            error: (e) => {
                n = e instanceof Error ? e : Error(String(e));
            },
        });
    try {
        for (let [e, t] of (h.configure({ codec: a.codec, description: l }), u.entries()))
            h.decode(
                new EncodedVideoChunk({
                    type: "key",
                    timestamp: e,
                    duration: t.duration > 0 ? Math.round((t.duration / s) * 1e6) : void 0,
                    data: t.data,
                }),
            );
        if ((await h.flush(), await Promise.all(p), null != n)) throw n;
    } catch (e) {
        for (let e of d) e?.close();
        throw e;
    } finally {
        "closed" !== h.state && h.close();
    }
    return d;
}
self.addEventListener("message", async (e) => {
    let { data: t } = e;
    if ("init" === t.type) {
        var a;
        return void ((a = t.videoBuffer),
        (o = r
            .e("25777")
            .then(r.t.bind(r, 293384, 19))
            .then((e) => {
                let t = e.default;
                return new Promise((e, r) => {
                    let o = t.createFile();
                    a.fileStart = 0;
                    let n = null,
                        i = null,
                        l = 0,
                        s = [],
                        c = 0,
                        f = !1;
                    function u(e) {
                        f || ((f = !0), r(e));
                    }
                    (o.onError = (e) => u(Error(`mp4box error: ${e}`))),
                        (o.onReady = (e) => {
                            let r = e.videoTracks[0];
                            null == r
                                ? u(Error("no video track found"))
                                : ((n = r),
                                    (l = r.nb_samples),
                                    null ==
                                        (i = (function (e, t, r) {
                                            let o = e.getTrackById(t)?.mdia?.minf?.stbl?.stsd?.entries;
                                            if (null == o) return null;
                                            for (let e of o) {
                                                let t = e.avcC ?? e.hvcC ?? e.vpcC ?? e.av1C;
                                                if (null != t && "function" == typeof t.write) {
                                                    let e = new r(void 0, 0, r.BIG_ENDIAN);
                                                    return t.write(e), new Uint8Array(e.buffer, 8);
                                                }
                                            }
                                            return null;
                                        })(o, r.id, t.DataStream)))
                                  ? u(Error("no codec description (avcC/hvcC/vpcC/av1C) found on video track"))
                                  : (o.setExtractionOptions(r.id, null, { nbSamples: 1 / 0 }), o.start());
                        }),
                        (o.onSamples = (t, r, o) => {
                            for (let e of o) e.is_sync && s.push(e);
                            if (((c += o.length), null != n && null != i && c >= l)) {
                                var a;
                                if (0 === s.length) return void u(Error("no sync samples found in video track"));
                                (a = { videoTrack: n, syncSamples: s, description: i }), f || ((f = !0), e(a));
                            }
                        }),
                        o.appendBuffer(a),
                        o.flush();
                });
            })))
            .then((e) => {
                let t = { type: "ready", width: e.videoTrack.video.width, height: e.videoTrack.video.height };
                self.postMessage(t);
            })
            .catch((e) => {
                let t = { type: "error", message: e instanceof Error ? e.message : String(e) };
                self.postMessage(t);
            });
    }
    let { requestId: i, timestamps: l, previewWidth: s, previewHeight: c } = t;
    try {
        if (null == o) throw Error("worker received extract before init");
        let e = await o,
            t = await n(e, l, s, c);
        self.postMessage({ type: "thumbnails", requestId: i, bitmaps: t }, t);
    } catch (t) {
        let e = { type: "error", requestId: i, message: t instanceof Error ? t.message : String(t) };
        self.postMessage(e);
    }
});
