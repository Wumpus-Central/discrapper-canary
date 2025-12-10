n.d(t, {
    Em: () => l,
    HO: () => c,
    TB: () => s,
    lx: () => h,
});
let r = new (n(710845).Z)("mp4box"),
    i = {
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
function a(e) {
    if (e.startsWith("avc1")) return "H.264/AVC";
    if (e.startsWith("hev1") || e.startsWith("hvc1")) return "H.265/HEVC";
    if (e.startsWith("vp08")) return "VP8";
    if (e.startsWith("vp09")) return "VP9";
    if (e.startsWith("av01")) return "AV1";
    return e;
}
function o(e) {
    if (e.startsWith("mp4a.40.2")) return "AAC-LC";
    if (e.startsWith("mp4a.40.5")) return "HE-AAC";
    if (e.startsWith("mp4a.40.29")) return "HE-AACv2";
    if (e.startsWith("mp4a.40")) return "AAC";
    if ("opus" === e) return "Opus";
    else if ("vorbis" === e) return "Vorbis";
    return e;
}
function s(e) {
    return null === e
        ? "N/A"
        : e < 1000
          ? "".concat(e, " bps")
          : e < 1000000
            ? "".concat((e / 1000).toFixed(1), " Kbps")
            : "".concat((e / 1000000).toFixed(2), " Mbps");
}
function l(e) {
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
function c(e) {
    return null === e ? "N/A" : e < 1000 ? "".concat(e, " Hz") : "".concat((e / 1000).toFixed(1), " kHz");
}
function u(e) {
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
function d(e) {
    let t = e;
    if (null != t.nb_samples && null != t.duration && null != t.timescale && 0 !== t.timescale) {
        let e = t.duration / t.timescale;
        if (e > 0) return Math.round(t.nb_samples / e);
    }
    return null;
}
let f = 524288,
    p = 524288,
    _ = 5000,
    m = 5000;
async function h(e) {
    try {
        let t;
        if ("undefined" == typeof fetch) return i;
        let { default: s } = await n.e("32990").then(n.t.bind(n, 735630, 19)),
            l = null;
        try {
            let t = await fetch(e, { method: "HEAD" });
            if (t.ok) {
                let e = t.headers.get("Content-Length");
                null != e && (l = parseInt(e, 10));
            }
        } catch (e) {}
        try {
            t = await fetch(e, {
                method: "GET",
                headers: { Range: "bytes=0-".concat(f - 1) },
            });
        } catch (e) {
            return r.warn("Range request failed, likely CORS issue:", e), i;
        }
        if (!t.ok && 206 !== t.status) return r.warn("Unexpected response status:", t.status), i;
        if ("opaque" === t.type) return r.warn("Opaque response, CORS headers may be missing"), i;
        let c = await t.arrayBuffer(),
            h = s.createFile();
        return new Promise((t) => {
            let n = !1,
                s = !1,
                g = null,
                E = null,
                b = () => {
                    n || ((n = !0), clearTimeout(y), null != E && clearTimeout(E), t(i));
                },
                y = setTimeout(() => {
                    r.warn("Timeout after", _, "ms, moov atom not found"), b();
                }, _);
            (h.onReady = (e) => {
                var r, i, s, l, c, f, p, _, m, h, g, b, O, v, S;
                if (n) return;
                (n = !0), clearTimeout(y), null != E && clearTimeout(E);
                let I = e.videoTracks[0],
                    T = e.audioTracks[0],
                    C = {
                        videoCodec: null != (c = null == I ? void 0 : I.codec) ? c : null,
                        audioCodec: null != (f = null == T ? void 0 : T.codec) ? f : null,
                        videoCodecDescription: null != I ? a(I.codec) : null,
                        audioCodecDescription: null != T ? o(T.codec) : null,
                        videoBitrate: null != (p = null == I ? void 0 : I.bitrate) ? p : null,
                        audioBitrate: null != (_ = null == T ? void 0 : T.bitrate) ? _ : null,
                        audioChannels:
                            null != (m = null == T || null == (r = T.audio) ? void 0 : r.channel_count) ? m : null,
                        audioSampleRate:
                            null != (h = null == T || null == (i = T.audio) ? void 0 : i.sample_rate) ? h : null,
                        frameRate: null != I ? d(I) : null,
                        videoWidth: null != (g = null == I || null == (s = I.video) ? void 0 : s.width) ? g : null,
                        videoHeight: null != (b = null == I || null == (l = I.video) ? void 0 : l.height) ? b : null,
                        isProgressive: null != (O = e.isProgressive) ? O : null,
                        isFragmented: null != (v = e.isFragmented) ? v : null,
                        containerFormat: u(null != (S = e.brands) ? S : []),
                    };
                t(C);
            }),
                (h.onError = () => {
                    b();
                }),
                (h.onSeek = async (t) => {
                    if (n || s || null == l || !(l > f)) {
                        if (s) {
                            if (null != g && performance.now() - g < m) return;
                            b();
                            return;
                        }
                    } else {
                        (s = !0), r.log("Fetching end chunk for moov atom");
                        try {
                            let t = await fetch(e, {
                                method: "GET",
                                headers: { Range: "bytes=".concat(l - p, "-").concat(l - 1) },
                            });
                            if (t.ok || 206 === t.status) {
                                let e,
                                    n = await t.arrayBuffer();
                                200 === t.status && n.byteLength === l
                                    ? ((n = n.slice(l - p)), (e = Math.max(0, l - p)))
                                    : (e = 206 === t.status ? Math.max(0, l - p) : 0);
                                let i = n;
                                i.fileStart = e;
                                try {
                                    h.appendBuffer(i), h.flush(), (g = performance.now());
                                    return;
                                } catch (e) {
                                    r.warn("Failed to append end chunk:", e), b();
                                    return;
                                }
                            }
                        } catch (e) {
                            r.warn("Failed to fetch end chunk:", e);
                        }
                        b();
                        return;
                    }
                    (null == l || l <= f) && b();
                });
            let O = c;
            O.fileStart = 0;
            try {
                h.appendBuffer(O),
                    h.flush(),
                    (E = setTimeout(() => {
                        n ||
                            s ||
                            null == h.onSeek ||
                            h.onSeek({
                                offset: 0,
                                isLast: !1,
                            });
                    }, 500));
            } catch (e) {
                b();
            }
        });
    } catch (e) {
        return i;
    }
}
