n.d(t, {
    Em: () => s,
    HO: () => l,
    TB: () => o,
    lx: () => _,
});
let r = {
    videoCodec: null,
    audioCodec: null,
    videoCodecDescription: null,
    audioCodecDescription: null,
    videoBitrate: null,
    audioBitrate: null,
    audioChannels: null,
    audioSampleRate: null,
    frameRate: null,
    videoWidth: null,
    videoHeight: null,
    isProgressive: null,
    isFragmented: null,
    containerFormat: null,
};
function i(e) {
    if (e.startsWith("avc1")) return "H.264/AVC";
    if (e.startsWith("hev1") || e.startsWith("hvc1")) return "H.265/HEVC";
    if (e.startsWith("vp08")) return "VP8";
    if (e.startsWith("vp09")) return "VP9";
    if (e.startsWith("av01")) return "AV1";
    return e;
}
function a(e) {
    if (e.startsWith("mp4a.40.2")) return "AAC-LC";
    if (e.startsWith("mp4a.40.5")) return "HE-AAC";
    if (e.startsWith("mp4a.40.29")) return "HE-AACv2";
    if (e.startsWith("mp4a.40")) return "AAC";
    if ("opus" === e) return "Opus";
    else if ("vorbis" === e) return "Vorbis";
    return e;
}
function o(e) {
    return null === e
        ? "N/A"
        : e < 1000
          ? "".concat(e, " bps")
          : e < 1000000
            ? "".concat((e / 1000).toFixed(1), " Kbps")
            : "".concat((e / 1000000).toFixed(2), " Mbps");
}
function s(e) {
    if (null === e) return "N/A";
    switch (e) {
        case 1:
            return "Mono";
        case 2:
            return "Stereo";
        case 6:
            return "5.1 Surround";
        case 8:
            return "7.1 Surround";
        default:
            return "".concat(e, " channels");
    }
}
function l(e) {
    return null === e ? "N/A" : e < 1000 ? "".concat(e, " Hz") : "".concat((e / 1000).toFixed(1), " kHz");
}
function c(e) {
    if (0 === e.length) return "MP4";
    let t = e[0];
    if ("isom" === t) return "MP4 (ISO Base Media)";
    if ("mp41" === t) return "MP4 v1";
    if ("mp42" === t) return "MP4 v2";
    if (t.startsWith("M4V")) return "M4V (iTunes Video)";
    if (t.startsWith("M4A")) return "M4A (iTunes Audio)";
    else if (t.startsWith("qt")) return "QuickTime";
    else if ("dash" === t) return "DASH";
    else if ("iso5" === t) return "MP4 (ISO/IEC 14496-12:2005)";
    else if ("iso6" === t) return "MP4 (ISO/IEC 14496-12:2012)";
    return "MP4 (".concat(t, ")");
}
function u(e) {
    let t = e;
    if (null != t.nb_samples && null != t.duration && null != t.timescale && 0 !== t.timescale) {
        let e = t.duration / t.timescale;
        if (e > 0) return Math.round(t.nb_samples / e);
    }
    return null;
}
let d = 524288,
    f = 524288,
    p = 5000;
async function _(e) {
    try {
        let t;
        if ("undefined" == typeof fetch) return r;
        let { default: o } = await n.e("32990").then(n.t.bind(n, 735630, 19)),
            s = null;
        try {
            let t = await fetch(e, { method: "HEAD" });
            if (t.ok) {
                let e = t.headers.get("Content-Length");
                null != e && (s = parseInt(e, 10));
            }
        } catch (e) {}
        try {
            t = await fetch(e, {
                method: "GET",
                headers: { Range: "bytes=0-".concat(d - 1) },
            });
        } catch (e) {
            return r;
        }
        if ((!t.ok && 206 !== t.status) || "opaque" === t.type) return r;
        let l = await t.arrayBuffer(),
            _ = o.createFile();
        return new Promise((t) => {
            let n = !1,
                o = !1,
                m = setTimeout(() => {
                    o || ((o = !0), t(r));
                }, p);
            (_.onReady = (e) => {
                var r, s, l, d, f, p, _, h, g, E, b, y, O, v, S;
                if (o) return;
                (o = !0), clearTimeout(m), (n = !0);
                let I = e.videoTracks[0],
                    T = e.audioTracks[0],
                    A = {
                        videoCodec: null != (f = null == I ? void 0 : I.codec) ? f : null,
                        audioCodec: null != (p = null == T ? void 0 : T.codec) ? p : null,
                        videoCodecDescription: null != I ? i(I.codec) : null,
                        audioCodecDescription: null != T ? a(T.codec) : null,
                        videoBitrate: null != (_ = null == I ? void 0 : I.bitrate) ? _ : null,
                        audioBitrate: null != (h = null == T ? void 0 : T.bitrate) ? h : null,
                        audioChannels:
                            null != (g = null == T || null == (r = T.audio) ? void 0 : r.channel_count) ? g : null,
                        audioSampleRate:
                            null != (E = null == T || null == (s = T.audio) ? void 0 : s.sample_rate) ? E : null,
                        frameRate: null != I ? u(I) : null,
                        videoWidth: null != (b = null == I || null == (l = I.video) ? void 0 : l.width) ? b : null,
                        videoHeight: null != (y = null == I || null == (d = I.video) ? void 0 : d.height) ? y : null,
                        isProgressive: null != (O = e.isProgressive) ? O : null,
                        isFragmented: null != (v = e.isFragmented) ? v : null,
                        containerFormat: c(null != (S = e.brands) ? S : []),
                    };
                t(A);
            }),
                (_.onError = () => {
                    o || ((o = !0), clearTimeout(m), t(r));
                }),
                (_.onSeek = async (i) => {
                    if (!n && null != s && s > d)
                        try {
                            let n = await fetch(e, {
                                method: "GET",
                                headers: { Range: "bytes=".concat(s - f, "-").concat(s - 1) },
                            });
                            if (n.ok || 206 === n.status) {
                                let e = await n.arrayBuffer();
                                e.fileStart = s - f;
                                try {
                                    _.appendBuffer(e), _.flush();
                                } catch (e) {
                                    o || ((o = !0), clearTimeout(m), t(r));
                                }
                                return;
                            }
                        } catch (e) {}
                    n || o || ((o = !0), clearTimeout(m), t(r));
                });
            let h = l;
            h.fileStart = 0;
            try {
                _.appendBuffer(h), _.flush();
            } catch (e) {
                o || ((o = !0), clearTimeout(m), t(r));
            }
        });
    } catch (e) {
        return r;
    }
}
