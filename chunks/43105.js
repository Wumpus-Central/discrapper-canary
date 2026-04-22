"use strict";
n.d(t, { At: () => r, BZ: () => s, K: () => o, YQ: () => a });
let i = new (n(626584).A)("mp4box"),
    l = {
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
    return null === e
        ? "N/A"
        : e < 1e3
          ? `${e} bps`
          : e < 1e6
            ? `${(e / 1e3).toFixed(1)} Kbps`
            : `${(e / 1e6).toFixed(2)} Mbps`;
}
function r(e) {
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
function a(e) {
    return null === e ? "N/A" : e < 1e3 ? `${e} Hz` : `${(e / 1e3).toFixed(1)} kHz`;
}
async function o(e) {
    try {
        let t;
        if ("u" < typeof fetch) return l;
        let { default: s } = await n.e("25777").then(n.t.bind(n, 293384, 19)),
            r = null;
        try {
            let t = await fetch(e, { method: "HEAD" });
            if (t.ok) {
                let e = t.headers.get("Content-Length");
                null != e && (r = parseInt(e, 10));
            }
        } catch {}
        try {
            t = await fetch(e, { method: "GET", headers: { Range: "bytes=0-524287" } });
        } catch (e) {
            return i.warn("Range request failed, likely CORS issue:", e), l;
        }
        if (!t.ok && 206 !== t.status) return i.warn("Unexpected response status:", t.status), l;
        if ("opaque" === t.type) return i.warn("Opaque response, CORS headers may be missing"), l;
        let a = await t.arrayBuffer(),
            o = s.createFile();
        return new Promise((t) => {
            let n = !1,
                s = !1,
                c = null,
                u = null,
                d = () => {
                    n || ((n = !0), clearTimeout(h), null != u && clearTimeout(u), t(l));
                },
                h = setTimeout(() => {
                    i.warn("Timeout after", 5e3, "ms, moov atom not found"), d();
                }, 5e3);
            (o.onReady = (e) => {
                if (n) return;
                (n = !0), clearTimeout(h), null != u && clearTimeout(u);
                let i = e.videoTracks[0],
                    l = e.audioTracks[0],
                    s = {
                        videoCodec: i?.codec ?? null,
                        audioCodec: l?.codec ?? null,
                        videoCodecDescription:
                            null != i
                                ? (function (e) {
                                      if (e.startsWith("avc1")) return "H.264/AVC";
                                      if (e.startsWith("hev1") || e.startsWith("hvc1")) return "H.265/HEVC";
                                      if (e.startsWith("vp08")) return "VP8";
                                      if (e.startsWith("vp09")) return "VP9";
                                      if (e.startsWith("av01")) return "AV1";
                                      return e;
                                  })(i.codec)
                                : null,
                        audioCodecDescription:
                            null != l
                                ? (function (e) {
                                      if (e.startsWith("mp4a.40.2")) return "AAC-LC";
                                      if (e.startsWith("mp4a.40.5")) return "HE-AAC";
                                      if (e.startsWith("mp4a.40.29")) return "HE-AACv2";
                                      if (e.startsWith("mp4a.40")) return "AAC";
                                      if ("opus" === e) return "Opus";
                                      else if ("vorbis" === e) return "Vorbis";
                                      return e;
                                  })(l.codec)
                                : null,
                        videoBitrate: i?.bitrate ?? null,
                        audioBitrate: l?.bitrate ?? null,
                        audioChannels: l?.audio?.channel_count ?? null,
                        audioSampleRate: l?.audio?.sample_rate ?? null,
                        frameRate:
                            null != i
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
                                  })(i)
                                : null,
                        videoWidth: i?.video?.width ?? null,
                        videoHeight: i?.video?.height ?? null,
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
                t(s);
            }),
                (o.onError = () => {
                    d();
                }),
                (o.onSeek = async (t) => {
                    if (n || s || null == r || !(r > 524288)) {
                        if (s) {
                            if (null != c && performance.now() - c < 5e3) return;
                            d();
                            return;
                        }
                    } else {
                        (s = !0), i.log("Fetching end chunk for moov atom");
                        try {
                            let t = await fetch(e, {
                                method: "GET",
                                headers: { Range: `bytes=${r - 524288}-${r - 1}` },
                            });
                            if (t.ok || 206 === t.status) {
                                let e,
                                    n = await t.arrayBuffer();
                                200 === t.status && n.byteLength === r
                                    ? ((n = n.slice(r - 524288)), (e = Math.max(0, r - 524288)))
                                    : (e = 206 === t.status ? Math.max(0, r - 524288) : 0);
                                let l = n;
                                l.fileStart = e;
                                try {
                                    o.appendBuffer(l), o.flush(), (c = performance.now());
                                    return;
                                } catch (e) {
                                    i.warn("Failed to append end chunk:", e), d();
                                    return;
                                }
                            }
                        } catch (e) {
                            i.warn("Failed to fetch end chunk:", e);
                        }
                        d();
                        return;
                    }
                    (null == r || r <= 524288) && d();
                }),
                (a.fileStart = 0);
            try {
                o.appendBuffer(a),
                    o.flush(),
                    (u = setTimeout(() => {
                        n || s || null == o.onSeek || o.onSeek({ offset: 0, isLast: !1 });
                    }, 500));
            } catch (e) {
                d();
            }
        });
    } catch (e) {
        return l;
    }
}
