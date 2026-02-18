"use strict";
n.d(t, { At: () => l, BZ: () => o, K: () => m, YQ: () => u });
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
function s(e) {
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
        : e < 1e3
          ? `${e} bps`
          : e < 1e6
            ? `${(e / 1e3).toFixed(1)} Kbps`
            : `${(e / 1e6).toFixed(2)} Mbps`;
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
            return `${e} channels`;
    }
}
function u(e) {
    return null === e ? "N/A" : e < 1e3 ? `${e} Hz` : `${(e / 1e3).toFixed(1)} kHz`;
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
    return `MP4 (${t})`;
}
function d(e) {
    let t = e;
    if (null != t.nb_samples && null != t.duration && null != t.timescale && 0 !== t.timescale) {
        let e = t.duration / t.timescale;
        if (e > 0) return Math.round(t.nb_samples / e);
    }
    return null;
}
let _ = 524288,
    f = 524288,
    p = 5e3,
    h = 5e3;
async function m(e) {
    try {
        let t;
        if ("u" < typeof fetch) return i;
        let { default: o } = await n.e("25777").then(n.t.bind(n, 293384, 19)),
            l = null;
        try {
            let t = await fetch(e, { method: "HEAD" });
            if (t.ok) {
                let e = t.headers.get("Content-Length");
                null != e && (l = parseInt(e, 10));
            }
        } catch {}
        try {
            t = await fetch(e, { method: "GET", headers: { Range: `bytes=0-${_ - 1}` } });
        } catch (e) {
            return r.warn("Range request failed, likely CORS issue:", e), i;
        }
        if (!t.ok && 206 !== t.status) return r.warn("Unexpected response status:", t.status), i;
        if ("opaque" === t.type) return r.warn("Opaque response, CORS headers may be missing"), i;
        let u = await t.arrayBuffer(),
            m = o.createFile();
        return new Promise((t) => {
            let n = !1,
                o = !1,
                E = null,
                g = null,
                A = () => {
                    n || ((n = !0), clearTimeout(I), null != g && clearTimeout(g), t(i));
                },
                I = setTimeout(() => {
                    r.warn("Timeout after", p, "ms, moov atom not found"), A();
                }, p);
            (m.onReady = (e) => {
                if (n) return;
                (n = !0), clearTimeout(I), null != g && clearTimeout(g);
                let r = e.videoTracks[0],
                    i = e.audioTracks[0],
                    o = {
                        videoCodec: r?.codec ?? null,
                        audioCodec: i?.codec ?? null,
                        videoCodecDescription: null != r ? s(r.codec) : null,
                        audioCodecDescription: null != i ? a(i.codec) : null,
                        videoBitrate: r?.bitrate ?? null,
                        audioBitrate: i?.bitrate ?? null,
                        audioChannels: i?.audio?.channel_count ?? null,
                        audioSampleRate: i?.audio?.sample_rate ?? null,
                        frameRate: null != r ? d(r) : null,
                        videoWidth: r?.video?.width ?? null,
                        videoHeight: r?.video?.height ?? null,
                        isProgressive: e.isProgressive ?? null,
                        isFragmented: e.isFragmented ?? null,
                        containerFormat: c(e.brands ?? []),
                    };
                t(o);
            }),
                (m.onError = () => {
                    A();
                }),
                (m.onSeek = async (t) => {
                    if (n || o || null == l || !(l > _)) {
                        if (o) {
                            if (null != E && performance.now() - E < h) return;
                            A();
                            return;
                        }
                    } else {
                        (o = !0), r.log("Fetching end chunk for moov atom");
                        try {
                            let t = await fetch(e, { method: "GET", headers: { Range: `bytes=${l - f}-${l - 1}` } });
                            if (t.ok || 206 === t.status) {
                                let e,
                                    n = await t.arrayBuffer();
                                200 === t.status && n.byteLength === l
                                    ? ((n = n.slice(l - f)), (e = Math.max(0, l - f)))
                                    : (e = 206 === t.status ? Math.max(0, l - f) : 0);
                                let i = n;
                                i.fileStart = e;
                                try {
                                    m.appendBuffer(i), m.flush(), (E = performance.now());
                                    return;
                                } catch (e) {
                                    r.warn("Failed to append end chunk:", e), A();
                                    return;
                                }
                            }
                        } catch (e) {
                            r.warn("Failed to fetch end chunk:", e);
                        }
                        A();
                        return;
                    }
                    (null == l || l <= _) && A();
                });
            let T = u;
            T.fileStart = 0;
            try {
                m.appendBuffer(T),
                    m.flush(),
                    (g = setTimeout(() => {
                        n || o || null == m.onSeek || m.onSeek({ offset: 0, isLast: !1 });
                    }, 500));
            } catch (e) {
                A();
            }
        });
    } catch (e) {
        return i;
    }
}
