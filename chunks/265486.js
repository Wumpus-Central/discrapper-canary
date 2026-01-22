n.d(t, {
    At: () => l,
    BZ: () => o,
    K: () => m,
    YQ: () => c,
});
let r = new (n(626584).A)("mp4box"),
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

function s(e) {
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
        : e < 1e3
          ? "".concat(e, " bps")
          : e < 1e6
            ? "".concat((e / 1e3).toFixed(1), " Kbps")
            : "".concat((e / 1e6).toFixed(2), " Mbps");
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
    return null === e ? "N/A" : e < 1e3 ? "".concat(e, " Hz") : "".concat((e / 1e3).toFixed(1), " kHz");
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
    _ = 5e3,
    h = 5e3;
async function m(e) {
    try {
        let t;
        if ("u" < typeof fetch) return i;
        let { default: o } = await n.e("25777").then(n.t.bind(n, 293384, 19)),
            l = null;
        try {
            let t = await fetch(e, {
                method: "HEAD",
            });
            if (t.ok) {
                let e = t.headers.get("Content-Length");
                null != e && (l = parseInt(e, 10));
            }
        } catch (e) {}
        try {
            t = await fetch(e, {
                method: "GET",
                headers: {
                    Range: "bytes=0-".concat(f - 1),
                },
            });
        } catch (e) {
            return r.warn("Range request failed, likely CORS issue:", e), i;
        }
        if (!t.ok && 206 !== t.status) return r.warn("Unexpected response status:", t.status), i;
        if ("opaque" === t.type) return r.warn("Opaque response, CORS headers may be missing"), i;
        let c = await t.arrayBuffer(),
            m = o.createFile();
        return new Promise((t) => {
            let n = !1,
                o = !1,
                g = null,
                E = null,
                b = () => {
                    n || ((n = !0), clearTimeout(y), null != E && clearTimeout(E), t(i));
                },
                y = setTimeout(() => {
                    r.warn("Timeout after", _, "ms, moov atom not found"), b();
                }, _);
            (m.onReady = (e) => {
                var r, i, o, l, c, f, p, _, h, m, g, b, O, A, v;
                if (n) return;
                (n = !0), clearTimeout(y), null != E && clearTimeout(E);
                let S = e.videoTracks[0],
                    I = e.audioTracks[0],
                    T = {
                        videoCodec: null != (r = null == S ? void 0 : S.codec) ? r : null,
                        audioCodec: null != (i = null == I ? void 0 : I.codec) ? i : null,
                        videoCodecDescription: null != S ? a(S.codec) : null,
                        audioCodecDescription: null != I ? s(I.codec) : null,
                        videoBitrate: null != (o = null == S ? void 0 : S.bitrate) ? o : null,
                        audioBitrate: null != (l = null == I ? void 0 : I.bitrate) ? l : null,
                        audioChannels:
                            null != (c = null == I || null == (b = I.audio) ? void 0 : b.channel_count) ? c : null,
                        audioSampleRate:
                            null != (f = null == I || null == (O = I.audio) ? void 0 : O.sample_rate) ? f : null,
                        frameRate: null != S ? d(S) : null,
                        videoWidth: null != (p = null == S || null == (A = S.video) ? void 0 : A.width) ? p : null,
                        videoHeight: null != (_ = null == S || null == (v = S.video) ? void 0 : v.height) ? _ : null,
                        isProgressive: null != (h = e.isProgressive) ? h : null,
                        isFragmented: null != (m = e.isFragmented) ? m : null,
                        containerFormat: u(null != (g = e.brands) ? g : []),
                    };
                t(T);
            }),
                (m.onError = () => {
                    b();
                }),
                (m.onSeek = async (t) => {
                    if (n || o || null == l || !(l > f)) {
                        if (o) {
                            if (null != g && performance.now() - g < h) return;
                            b();
                            return;
                        }
                    } else {
                        (o = !0), r.log("Fetching end chunk for moov atom");
                        try {
                            let t = await fetch(e, {
                                method: "GET",
                                headers: {
                                    Range: "bytes=".concat(l - p, "-").concat(l - 1),
                                },
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
                                    m.appendBuffer(i), m.flush(), (g = performance.now());
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
                m.appendBuffer(O),
                    m.flush(),
                    (E = setTimeout(() => {
                        n ||
                            o ||
                            null == m.onSeek ||
                            m.onSeek({
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
