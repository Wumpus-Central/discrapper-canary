i.d(t, { At: () => s, BZ: () => r, K: () => u, YQ: () => l });
let a = new (i(626584).A)("mp4box"),
    n = {
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
function r(e) {
    return null === e
        ? "N/A"
        : e < 1e3
          ? `${e} bps`
          : e < 1e6
            ? `${(e / 1e3).toFixed(1)} Kbps`
            : `${(e / 1e6).toFixed(2)} Mbps`;
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
            return `${e} channels`;
    }
}
function l(e) {
    return null === e ? "N/A" : e < 1e3 ? `${e} Hz` : `${(e / 1e3).toFixed(1)} kHz`;
}
function o(e, t) {
    return fetch(e, { ...t, cache: "no-store" });
}
async function u(e) {
    try {
        let t;
        if ("u" < typeof fetch) return n;
        let { default: r } = await i.e("25777").then(i.t.bind(i, 293384, 19)),
            s = null;
        try {
            let t = await o(e, { method: "HEAD" });
            if (t.ok) {
                let e = t.headers.get("Content-Length");
                null != e && (s = parseInt(e, 10));
            }
        } catch {}
        try {
            t = await o(e, { method: "GET", headers: { Range: "bytes=0-524287" } });
        } catch (e) {
            return (a.warn("Range request failed, likely CORS issue:", e), n);
        }
        if (!t.ok && 206 !== t.status) return (a.warn("Unexpected response status:", t.status), n);
        if ("opaque" === t.type) return (a.warn("Opaque response, CORS headers may be missing"), n);
        let l = await t.arrayBuffer(),
            u = r.createFile();
        return new Promise((t) => {
            let i = !1,
                r = !1,
                d = null,
                h = null;
            function c() {
                i || ((i = !0), clearTimeout(f), null != h && clearTimeout(h), t(n));
            }
            let f = setTimeout(() => {
                (a.warn("Timeout after", 5e3, "ms, moov atom not found"), c());
            }, 5e3);
            ((u.onReady = (e) => {
                if (i) return;
                ((i = !0), clearTimeout(f), null != h && clearTimeout(h));
                let a = e.videoTracks[0],
                    n = e.audioTracks[0],
                    r = {
                        videoCodec: a?.codec ?? null,
                        audioCodec: n?.codec ?? null,
                        videoCodecDescription:
                            null != a
                                ? (function (e) {
                                      if (e.startsWith("avc1")) return "H.264/AVC";
                                      if (e.startsWith("hev1") || e.startsWith("hvc1")) return "H.265/HEVC";
                                      if (e.startsWith("vp08")) return "VP8";
                                      if (e.startsWith("vp09")) return "VP9";
                                      if (e.startsWith("av01")) return "AV1";
                                      return e;
                                  })(a.codec)
                                : null,
                        audioCodecDescription:
                            null != n
                                ? (function (e) {
                                      if (e.startsWith("mp4a.40.2")) return "AAC-LC";
                                      if (e.startsWith("mp4a.40.5")) return "HE-AAC";
                                      if (e.startsWith("mp4a.40.29")) return "HE-AACv2";
                                      if (e.startsWith("mp4a.40")) return "AAC";
                                      if ("opus" === e) return "Opus";
                                      else if ("vorbis" === e) return "Vorbis";
                                      return e;
                                  })(n.codec)
                                : null,
                        videoBitrate: a?.bitrate ?? null,
                        audioBitrate: n?.bitrate ?? null,
                        audioChannels: n?.audio?.channel_count ?? null,
                        audioSampleRate: n?.audio?.sample_rate ?? null,
                        frameRate:
                            null != a
                                ? (function (e) {
                                      if (
                                          null != e.nb_samples &&
                                          null != e.duration &&
                                          null != e.timescale &&
                                          0 !== e.timescale
                                      ) {
                                          let t = e.duration / e.timescale;
                                          if (t > 0) return Math.round(e.nb_samples / t);
                                      }
                                      return null;
                                  })(a)
                                : null,
                        videoWidth: a?.video?.width ?? null,
                        videoHeight: a?.video?.height ?? null,
                        isProgressive: e.isProgressive ?? null,
                        isFragmented: e.isFragmented ?? null,
                        containerFormat: (function (e) {
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
                            return `MP4 (${t})`;
                        })(e.brands ?? []),
                    };
                t(r);
            }),
                (u.onError = () => {
                    c();
                }),
                (u.onSeek = async (t) => {
                    if (i || r || null == s || !(s > 524288)) {
                        if (r) {
                            if (null != d && performance.now() - d < 5e3) return;
                            c();
                            return;
                        }
                    } else {
                        ((r = !0), a.log("Fetching end chunk for moov atom"));
                        try {
                            let t = await o(e, { method: "GET", headers: { Range: `bytes=${s - 524288}-${s - 1}` } });
                            if (t.ok || 206 === t.status) {
                                let e,
                                    i = await t.arrayBuffer();
                                200 === t.status && i.byteLength === s
                                    ? ((i = i.slice(s - 524288)), (e = Math.max(0, s - 524288)))
                                    : (e = 206 === t.status ? Math.max(0, s - 524288) : 0);
                                let n = i;
                                n.fileStart = e;
                                try {
                                    (u.appendBuffer(n), u.flush(), (d = performance.now()));
                                    return;
                                } catch (e) {
                                    (a.warn("Failed to append end chunk:", e), c());
                                    return;
                                }
                            }
                        } catch (e) {
                            a.warn("Failed to fetch end chunk:", e);
                        }
                        c();
                        return;
                    }
                    (null == s || s <= 524288) && c();
                }),
                (l.fileStart = 0));
            try {
                (u.appendBuffer(l),
                    u.flush(),
                    (h = setTimeout(() => {
                        i || r || null == u.onSeek || u.onSeek({ offset: 0, isLast: !1 });
                    }, 500)));
            } catch (e) {
                c();
            }
        });
    } catch (e) {
        return n;
    }
}
