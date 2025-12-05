n.d(t, { _: () => R }), n(539854), n(49124), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(572004),
    s = n(105801),
    l = n(414726);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function p(e) {
    return isFinite(e) ? e.toFixed(1) + "s" : "Live";
}
function _(e) {
    return null === e ? "N/A" : "".concat(e, " fps");
}
function m(e, t) {
    let n = [];
    return (!0 === e && n.push("Progressive"), !0 === t && n.push("Fragmented"), 0 === n.length)
        ? "Standard"
        : n.join(", ");
}
let h = "Stats for Nerds",
    g = "Close",
    E = "Copy to JSON",
    b = "Copied!",
    y = "Resolution",
    O = "Viewport",
    v = "Video",
    S = "Audio",
    I = "Audio Channels",
    T = "Container",
    A = "Format",
    C = "Buffer Health",
    N = "Error";
function P(e) {
    var t, n, r, i, a, o, s, l, c, u, d, f, p, _, m;
    return JSON.stringify(
        {
            media: {
                video: {
                    codec:
                        null != (_ = null == (t = e.codecInfo) ? void 0 : t.videoCodecDescription)
                            ? _
                            : null == (n = e.codecInfo)
                              ? void 0
                              : n.videoCodec,
                    codecRaw: null == (r = e.codecInfo) ? void 0 : r.videoCodec,
                    bitRate:
                        (null == (i = e.codecInfo) ? void 0 : i.videoBitrate) != null
                            ? Math.round(e.codecInfo.videoBitrate)
                            : null,
                    frameRate: e.frameRate,
                    width: e.videoWidth,
                    height: e.videoHeight,
                },
                audio: {
                    codec:
                        null != (m = null == (a = e.codecInfo) ? void 0 : a.audioCodecDescription)
                            ? m
                            : null == (o = e.codecInfo)
                              ? void 0
                              : o.audioCodec,
                    codecRaw: null == (s = e.codecInfo) ? void 0 : s.audioCodec,
                    bitRate:
                        (null == (l = e.codecInfo) ? void 0 : l.audioBitrate) != null
                            ? Math.round(e.codecInfo.audioBitrate)
                            : null,
                    channels: null == (c = e.codecInfo) ? void 0 : c.audioChannels,
                    sampleRate: null == (u = e.codecInfo) ? void 0 : u.audioSampleRate,
                },
                fileSizeBytes: e.fileSizeBytes,
                durationSeconds: e.duration,
                containerFormat: null == (d = e.codecInfo) ? void 0 : d.containerFormat,
                isProgressive: null == (f = e.codecInfo) ? void 0 : f.isProgressive,
                isFragmented: null == (p = e.codecInfo) ? void 0 : p.isFragmented,
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
function R(e) {
    var t, n, c, d, R, w, D, x, L, j, M, k;
    let { stats: U, onClose: G } = e,
        [Z, B] = i.useState(!1),
        F = i.useRef(null);
    i.useEffect(
        () => () => {
            null != F.current && clearTimeout(F.current);
        },
        [],
    );
    let V = i.useCallback(() => {
        let e = P(U);
        (0, o.JG)(
            e,
            () => {
                B(!0),
                    null != F.current && clearTimeout(F.current),
                    (F.current = window.setTimeout(() => {
                        B(!1), (F.current = null);
                    }, 2000));
            },
            () => {},
        );
    }, [U]);
    return (0, r.jsxs)("div", {
        className: l.statsOverlay,
        children: [
            (0, r.jsxs)("div", {
                className: l.header,
                children: [
                    (0, r.jsx)("div", {
                        className: l.title,
                        children: h,
                    }),
                    (0, r.jsxs)("div", {
                        className: l.headerButtons,
                        children: [
                            (0, r.jsx)(a.aML, {
                                "data-migration-pending": !0,
                                text: Z ? b : E,
                                children: (e) =>
                                    (0, r.jsx)(
                                        "div",
                                        f(u({}, e), {
                                            children: (0, r.jsx)(a.P3F, {
                                                className: l.copyButton,
                                                onClick: V,
                                                "aria-label": Z ? b : E,
                                                focusProps: { offset: 2 },
                                                children: (0, r.jsx)(a.TIy, {
                                                    size: "md",
                                                    color: "currentColor",
                                                }),
                                            }),
                                        }),
                                    ),
                            }),
                            (0, r.jsx)(a.aML, {
                                "data-migration-pending": !0,
                                text: g,
                                children: (e) =>
                                    (0, r.jsx)(
                                        "div",
                                        f(u({}, e), {
                                            children: (0, r.jsx)(a.P3F, {
                                                className: l.closeButton,
                                                onClick: G,
                                                "aria-label": g,
                                                focusProps: { offset: 2 },
                                                children: (0, r.jsx)(a.Dio, {
                                                    size: "md",
                                                    color: "currentColor",
                                                }),
                                            }),
                                        }),
                                    ),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: l.content,
                children: [
                    (null == (t = U.codecInfo) ? void 0 : t.containerFormat) != null &&
                        (0, r.jsxs)("div", {
                            className: l.statRow,
                            children: [
                                (0, r.jsx)("span", {
                                    className: l.statLabel,
                                    children: T,
                                }),
                                (0, r.jsx)("span", {
                                    className: l.statValue,
                                    children: U.codecInfo.containerFormat,
                                }),
                            ],
                        }),
                    ((null == (n = U.codecInfo) ? void 0 : n.isProgressive) != null ||
                        (null == (c = U.codecInfo) ? void 0 : c.isFragmented) != null) &&
                        (0, r.jsxs)("div", {
                            className: l.statRow,
                            children: [
                                (0, r.jsx)("span", {
                                    className: l.statLabel,
                                    children: A,
                                }),
                                (0, r.jsx)("span", {
                                    className: l.statValue,
                                    children: m(
                                        null != (D = U.codecInfo.isProgressive) ? D : null,
                                        null != (x = U.codecInfo.isFragmented) ? x : null,
                                    ),
                                }),
                            ],
                        }),
                    null != U.codecInfo &&
                        (0, r.jsxs)("div", {
                            className: l.statRow,
                            children: [
                                (0, r.jsx)("span", {
                                    className: l.statLabel,
                                    children: y,
                                }),
                                (0, r.jsxs)("span", {
                                    className: l.statValue,
                                    children: [
                                        U.resolution,
                                        " @ ",
                                        _(U.frameRate),
                                        U.droppedFrames > 0 && " (".concat(U.droppedFrames, " dropped)"),
                                    ],
                                }),
                            ],
                        }),
                    null != U.codecInfo &&
                        (0, r.jsxs)("div", {
                            className: l.statRow,
                            children: [
                                (0, r.jsx)("span", {
                                    className: l.statLabel,
                                    children: O,
                                }),
                                (0, r.jsxs)("span", {
                                    className: l.statValue,
                                    children: [U.viewportWidth, "x", U.viewportHeight],
                                }),
                            ],
                        }),
                    (null == (d = U.codecInfo) ? void 0 : d.videoCodec) != null &&
                        (0, r.jsxs)("div", {
                            className: l.statRow,
                            children: [
                                (0, r.jsx)("span", {
                                    className: l.statLabel,
                                    children: v,
                                }),
                                (0, r.jsxs)("span", {
                                    className: l.statValue,
                                    children: [
                                        null !=
                                        (j =
                                            null != (L = U.codecInfo.videoCodecDescription)
                                                ? L
                                                : U.codecInfo.videoCodec)
                                            ? j
                                            : "Unknown",
                                        null != U.codecInfo.videoBitrate &&
                                            " @ ".concat((0, s.TB)(U.codecInfo.videoBitrate)),
                                    ],
                                }),
                            ],
                        }),
                    (null == (R = U.codecInfo) ? void 0 : R.audioCodec) != null &&
                        (0, r.jsxs)("div", {
                            className: l.statRow,
                            children: [
                                (0, r.jsx)("span", {
                                    className: l.statLabel,
                                    children: S,
                                }),
                                (0, r.jsxs)("span", {
                                    className: l.statValue,
                                    children: [
                                        null !=
                                        (k =
                                            null != (M = U.codecInfo.audioCodecDescription)
                                                ? M
                                                : U.codecInfo.audioCodec)
                                            ? k
                                            : "Unknown",
                                        null != U.codecInfo.audioBitrate &&
                                            " @ ".concat((0, s.TB)(U.codecInfo.audioBitrate)),
                                    ],
                                }),
                            ],
                        }),
                    (null == (w = U.codecInfo) ? void 0 : w.audioChannels) != null &&
                        (0, r.jsxs)("div", {
                            className: l.statRow,
                            children: [
                                (0, r.jsx)("span", {
                                    className: l.statLabel,
                                    children: I,
                                }),
                                (0, r.jsxs)("span", {
                                    className: l.statValue,
                                    children: [
                                        (0, s.Em)(U.codecInfo.audioChannels),
                                        null != U.codecInfo.audioSampleRate &&
                                            " @ ".concat((0, s.HO)(U.codecInfo.audioSampleRate)),
                                    ],
                                }),
                            ],
                        }),
                    (0, r.jsxs)("div", {
                        className: l.statRow,
                        children: [
                            (0, r.jsx)("span", {
                                className: l.statLabel,
                                children: C,
                            }),
                            (0, r.jsx)("span", {
                                className: l.statValue,
                                children: p(U.bufferedSeconds),
                            }),
                        ],
                    }),
                    null !== U.errorCode &&
                        (0, r.jsx)("div", {
                            className: l.errorSection,
                            children: (0, r.jsxs)("div", {
                                className: l.statRow,
                                children: [
                                    (0, r.jsx)("span", {
                                        className: l.statLabel,
                                        children: N,
                                    }),
                                    (0, r.jsxs)("span", {
                                        className: l.statValue,
                                        children: [U.errorCode, null !== U.errorMessage && ": ".concat(U.errorMessage)],
                                    }),
                                ],
                            }),
                        }),
                ],
            }),
        ],
    });
}
