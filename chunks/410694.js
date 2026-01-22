n.d(t, { J: () => C }), n(321073), n(457529), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(435371),
    s = n(397927),
    o = n(957565),
    l = n(265486),
    c = n(640192);
function u(e) {
    return isFinite(e) ? e.toFixed(1) + "s" : "Live";
}
function d(e) {
    return null === e ? "N/A" : "".concat(e, " fps");
}
function f(e, t) {
    let n = [];
    return (!0 === e && n.push("Progressive"), !0 === t && n.push("Fragmented"), 0 === n.length)
        ? "Standard"
        : n.join(", ");
}
let p = "Stats for Nerds",
    _ = "Close",
    h = "Copy to JSON",
    m = "Copied!",
    g = "Resolution",
    E = "Viewport",
    b = "Video",
    y = "Audio",
    O = "Audio Channels",
    A = "Container",
    v = "Format",
    S = "Buffer Health",
    I = "Error";
function T(e) {
    var t, n, r, i, a, s, o, l, c, u, d, f, p, _, h;
    return JSON.stringify(
        {
            media: {
                video: {
                    codec:
                        null != (t = null == (r = e.codecInfo) ? void 0 : r.videoCodecDescription)
                            ? t
                            : null == (i = e.codecInfo)
                              ? void 0
                              : i.videoCodec,
                    codecRaw: null == (a = e.codecInfo) ? void 0 : a.videoCodec,
                    bitRate:
                        (null == (s = e.codecInfo) ? void 0 : s.videoBitrate) != null
                            ? Math.round(e.codecInfo.videoBitrate)
                            : null,
                    frameRate: e.frameRate,
                    width: e.videoWidth,
                    height: e.videoHeight,
                },
                audio: {
                    codec:
                        null != (n = null == (o = e.codecInfo) ? void 0 : o.audioCodecDescription)
                            ? n
                            : null == (l = e.codecInfo)
                              ? void 0
                              : l.audioCodec,
                    codecRaw: null == (c = e.codecInfo) ? void 0 : c.audioCodec,
                    bitRate:
                        (null == (u = e.codecInfo) ? void 0 : u.audioBitrate) != null
                            ? Math.round(e.codecInfo.audioBitrate)
                            : null,
                    channels: null == (d = e.codecInfo) ? void 0 : d.audioChannels,
                    sampleRate: null == (f = e.codecInfo) ? void 0 : f.audioSampleRate,
                },
                fileSizeBytes: e.fileSizeBytes,
                durationSeconds: e.duration,
                containerFormat: null == (p = e.codecInfo) ? void 0 : p.containerFormat,
                isProgressive: null == (_ = e.codecInfo) ? void 0 : _.isProgressive,
                isFragmented: null == (h = e.codecInfo) ? void 0 : h.isFragmented,
            },
            playback: {
                viewportWidth: e.viewportWidth,
                viewportHeight: e.viewportHeight,
                currentTimeSeconds: e.currentTime,
                bufferedSeconds: e.bufferedSeconds,
                droppedFrames: e.droppedFrames,
                totalDecodedFrames: e.totalFrames,
                droppedFramesPercent:
                    null != e.droppedFramesPercent ? parseFloat(e.droppedFramesPercent.toFixed(2)) : null,
                errorCode: e.errorCode,
                errorMessage: e.errorMessage,
            },
        },
        null,
        2,
    );
}
function C(e) {
    var t, n, C, N, R, w, P, D, x, L, j, M;
    let { stats: k, onClose: U } = e,
        [G, V] = i.useState(!1),
        F = i.useRef(null);
    i.useEffect(
        () => () => {
            null != F.current && clearTimeout(F.current);
        },
        [],
    );
    let B = i.useCallback(() => {
        let e = T(k);
        (0, o.C)(
            e,
            () => {
                V(!0),
                    null != F.current && clearTimeout(F.current),
                    (F.current = window.setTimeout(() => {
                        V(!1), (F.current = null);
                    }, 2000));
            },
            () => {},
        );
    }, [k]);
    return (0, r.jsxs)("div", {
        className: c.gP,
        children: [
            (0, r.jsxs)("div", {
                className: c.wx,
                children: [
                    (0, r.jsx)("div", {
                        className: c.DD,
                        children: p,
                    }),
                    (0, r.jsxs)("div", {
                        className: c.Pz,
                        children: [
                            (0, r.jsx)(a.m_, {
                                text: G ? m : h,
                                children: (0, r.jsx)(s.DUT, {
                                    className: c.cL,
                                    onClick: B,
                                    "aria-label": G ? m : h,
                                    focusProps: { offset: 2 },
                                    children: (0, r.jsx)(s.TdU, {
                                        size: "md",
                                        color: "currentColor",
                                    }),
                                }),
                            }),
                            (0, r.jsx)(a.m_, {
                                text: _,
                                children: (0, r.jsx)(s.DUT, {
                                    className: c.b,
                                    onClick: U,
                                    "aria-label": _,
                                    focusProps: { offset: 2 },
                                    children: (0, r.jsx)(s.PGe, {
                                        size: "md",
                                        color: "currentColor",
                                    }),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: c.Qs,
                children: [
                    (null == (P = k.codecInfo) ? void 0 : P.containerFormat) != null &&
                        (0, r.jsxs)("div", {
                            className: c.N8,
                            children: [
                                (0, r.jsx)("span", {
                                    className: c.Zh,
                                    children: A,
                                }),
                                (0, r.jsx)("span", {
                                    className: c.cR,
                                    children: k.codecInfo.containerFormat,
                                }),
                            ],
                        }),
                    ((null == (D = k.codecInfo) ? void 0 : D.isProgressive) != null ||
                        (null == (x = k.codecInfo) ? void 0 : x.isFragmented) != null) &&
                        (0, r.jsxs)("div", {
                            className: c.N8,
                            children: [
                                (0, r.jsx)("span", {
                                    className: c.Zh,
                                    children: v,
                                }),
                                (0, r.jsx)("span", {
                                    className: c.cR,
                                    children: f(
                                        null != (t = k.codecInfo.isProgressive) ? t : null,
                                        null != (n = k.codecInfo.isFragmented) ? n : null,
                                    ),
                                }),
                            ],
                        }),
                    null != k.codecInfo &&
                        (0, r.jsxs)("div", {
                            className: c.N8,
                            children: [
                                (0, r.jsx)("span", {
                                    className: c.Zh,
                                    children: g,
                                }),
                                (0, r.jsxs)("span", {
                                    className: c.cR,
                                    children: [
                                        k.resolution,
                                        " @ ",
                                        d(k.frameRate),
                                        k.droppedFrames > 0 && " (".concat(k.droppedFrames, " dropped)"),
                                    ],
                                }),
                            ],
                        }),
                    null != k.codecInfo &&
                        (0, r.jsxs)("div", {
                            className: c.N8,
                            children: [
                                (0, r.jsx)("span", {
                                    className: c.Zh,
                                    children: E,
                                }),
                                (0, r.jsxs)("span", {
                                    className: c.cR,
                                    children: [k.viewportWidth, "x", k.viewportHeight],
                                }),
                            ],
                        }),
                    (null == (L = k.codecInfo) ? void 0 : L.videoCodec) != null &&
                        (0, r.jsxs)("div", {
                            className: c.N8,
                            children: [
                                (0, r.jsx)("span", {
                                    className: c.Zh,
                                    children: b,
                                }),
                                (0, r.jsxs)("span", {
                                    className: c.cR,
                                    children: [
                                        null !=
                                        (C =
                                            null != (N = k.codecInfo.videoCodecDescription)
                                                ? N
                                                : k.codecInfo.videoCodec)
                                            ? C
                                            : "Unknown",
                                        null != k.codecInfo.videoBitrate &&
                                            " @ ".concat((0, l.BZ)(k.codecInfo.videoBitrate)),
                                    ],
                                }),
                            ],
                        }),
                    (null == (j = k.codecInfo) ? void 0 : j.audioCodec) != null &&
                        (0, r.jsxs)("div", {
                            className: c.N8,
                            children: [
                                (0, r.jsx)("span", {
                                    className: c.Zh,
                                    children: y,
                                }),
                                (0, r.jsxs)("span", {
                                    className: c.cR,
                                    children: [
                                        null !=
                                        (R =
                                            null != (w = k.codecInfo.audioCodecDescription)
                                                ? w
                                                : k.codecInfo.audioCodec)
                                            ? R
                                            : "Unknown",
                                        null != k.codecInfo.audioBitrate &&
                                            " @ ".concat((0, l.BZ)(k.codecInfo.audioBitrate)),
                                    ],
                                }),
                            ],
                        }),
                    (null == (M = k.codecInfo) ? void 0 : M.audioChannels) != null &&
                        (0, r.jsxs)("div", {
                            className: c.N8,
                            children: [
                                (0, r.jsx)("span", {
                                    className: c.Zh,
                                    children: O,
                                }),
                                (0, r.jsxs)("span", {
                                    className: c.cR,
                                    children: [
                                        (0, l.At)(k.codecInfo.audioChannels),
                                        null != k.codecInfo.audioSampleRate &&
                                            " @ ".concat((0, l.YQ)(k.codecInfo.audioSampleRate)),
                                    ],
                                }),
                            ],
                        }),
                    (0, r.jsxs)("div", {
                        className: c.N8,
                        children: [
                            (0, r.jsx)("span", {
                                className: c.Zh,
                                children: S,
                            }),
                            (0, r.jsx)("span", {
                                className: c.cR,
                                children: u(k.bufferedSeconds),
                            }),
                        ],
                    }),
                    null !== k.errorCode &&
                        (0, r.jsx)("div", {
                            className: c.K6,
                            children: (0, r.jsxs)("div", {
                                className: c.N8,
                                children: [
                                    (0, r.jsx)("span", {
                                        className: c.Zh,
                                        children: I,
                                    }),
                                    (0, r.jsxs)("span", {
                                        className: c.cR,
                                        children: [k.errorCode, null !== k.errorMessage && ": ".concat(k.errorMessage)],
                                    }),
                                ],
                            }),
                        }),
                ],
            }),
        ],
    });
}
