"use strict";
n.d(t, { J: () => R }), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(435371),
    s = n(397927),
    o = n(957565),
    l = n(265486),
    u = n(640192);
function c(e) {
    return isFinite(e) ? e.toFixed(1) + "s" : "Live";
}
function d(e) {
    return null === e ? "N/A" : `${e} fps`;
}
function _(e, t) {
    let n = [];
    return (!0 === e && n.push("Progressive"), !0 === t && n.push("Fragmented"), 0 === n.length)
        ? "Standard"
        : n.join(", ");
}
let f = "Stats for Nerds",
    h = "Close",
    p = "Copy to JSON",
    g = "Copied!",
    E = "Resolution",
    A = "Viewport",
    I = "Video",
    T = "Audio",
    y = "Audio Channels",
    S = "Container",
    v = "Format",
    C = "Buffer Health",
    b = "Error";
function N(e) {
    return JSON.stringify(
        {
            media: {
                video: {
                    codec: e.codecInfo?.videoCodecDescription ?? e.codecInfo?.videoCodec,
                    codecRaw: e.codecInfo?.videoCodec,
                    bitRate: e.codecInfo?.videoBitrate != null ? Math.round(e.codecInfo.videoBitrate) : null,
                    frameRate: e.frameRate,
                    width: e.videoWidth,
                    height: e.videoHeight,
                },
                audio: {
                    codec: e.codecInfo?.audioCodecDescription ?? e.codecInfo?.audioCodec,
                    codecRaw: e.codecInfo?.audioCodec,
                    bitRate: e.codecInfo?.audioBitrate != null ? Math.round(e.codecInfo.audioBitrate) : null,
                    channels: e.codecInfo?.audioChannels,
                    sampleRate: e.codecInfo?.audioSampleRate,
                },
                fileSizeBytes: e.fileSizeBytes,
                durationSeconds: e.duration,
                containerFormat: e.codecInfo?.containerFormat,
                isProgressive: e.codecInfo?.isProgressive,
                isFragmented: e.codecInfo?.isFragmented,
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
    let { stats: t, onClose: n } = e,
        [R, O] = i.useState(!1),
        D = i.useRef(null);
    i.useEffect(
        () => () => {
            null != D.current && clearTimeout(D.current);
        },
        [],
    );
    let L = i.useCallback(() => {
        let e = N(t);
        (0, o.C)(
            e,
            () => {
                O(!0),
                    null != D.current && clearTimeout(D.current),
                    (D.current = window.setTimeout(() => {
                        O(!1), (D.current = null);
                    }, 2e3));
            },
            () => {},
        );
    }, [t]);
    return (0, r.jsxs)("div", {
        className: u.gP,
        children: [
            (0, r.jsxs)("div", {
                className: u.wx,
                children: [
                    (0, r.jsx)("div", { className: u.DD, children: f }),
                    (0, r.jsxs)("div", {
                        className: u.Pz,
                        children: [
                            (0, r.jsx)(a.m_, {
                                text: R ? g : p,
                                children: (0, r.jsx)(s.DUT, {
                                    className: u.cL,
                                    onClick: L,
                                    "aria-label": R ? g : p,
                                    focusProps: { offset: 2 },
                                    children: (0, r.jsx)(s.TdU, { size: "md", color: "currentColor" }),
                                }),
                            }),
                            (0, r.jsx)(a.m_, {
                                text: h,
                                children: (0, r.jsx)(s.DUT, {
                                    className: u.b,
                                    onClick: n,
                                    "aria-label": h,
                                    focusProps: { offset: 2 },
                                    children: (0, r.jsx)(s.PGe, { size: "md", color: "currentColor" }),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: u.Qs,
                children: [
                    t.codecInfo?.containerFormat != null &&
                        (0, r.jsxs)("div", {
                            className: u.N8,
                            children: [
                                (0, r.jsx)("span", { className: u.Zh, children: S }),
                                (0, r.jsx)("span", { className: u.cR, children: t.codecInfo.containerFormat }),
                            ],
                        }),
                    (t.codecInfo?.isProgressive != null || t.codecInfo?.isFragmented != null) &&
                        (0, r.jsxs)("div", {
                            className: u.N8,
                            children: [
                                (0, r.jsx)("span", { className: u.Zh, children: v }),
                                (0, r.jsx)("span", {
                                    className: u.cR,
                                    children: _(t.codecInfo.isProgressive ?? null, t.codecInfo.isFragmented ?? null),
                                }),
                            ],
                        }),
                    null != t.codecInfo &&
                        (0, r.jsxs)("div", {
                            className: u.N8,
                            children: [
                                (0, r.jsx)("span", { className: u.Zh, children: E }),
                                (0, r.jsxs)("span", {
                                    className: u.cR,
                                    children: [
                                        t.resolution,
                                        " @ ",
                                        d(t.frameRate),
                                        t.droppedFrames > 0 && ` (${t.droppedFrames} dropped)`,
                                    ],
                                }),
                            ],
                        }),
                    null != t.codecInfo &&
                        (0, r.jsxs)("div", {
                            className: u.N8,
                            children: [
                                (0, r.jsx)("span", { className: u.Zh, children: A }),
                                (0, r.jsxs)("span", {
                                    className: u.cR,
                                    children: [t.viewportWidth, "x", t.viewportHeight],
                                }),
                            ],
                        }),
                    t.codecInfo?.videoCodec != null &&
                        (0, r.jsxs)("div", {
                            className: u.N8,
                            children: [
                                (0, r.jsx)("span", { className: u.Zh, children: I }),
                                (0, r.jsxs)("span", {
                                    className: u.cR,
                                    children: [
                                        t.codecInfo.videoCodecDescription ?? t.codecInfo.videoCodec ?? "Unknown",
                                        null != t.codecInfo.videoBitrate && ` @ ${(0, l.BZ)(t.codecInfo.videoBitrate)}`,
                                    ],
                                }),
                            ],
                        }),
                    t.codecInfo?.audioCodec != null &&
                        (0, r.jsxs)("div", {
                            className: u.N8,
                            children: [
                                (0, r.jsx)("span", { className: u.Zh, children: T }),
                                (0, r.jsxs)("span", {
                                    className: u.cR,
                                    children: [
                                        t.codecInfo.audioCodecDescription ?? t.codecInfo.audioCodec ?? "Unknown",
                                        null != t.codecInfo.audioBitrate && ` @ ${(0, l.BZ)(t.codecInfo.audioBitrate)}`,
                                    ],
                                }),
                            ],
                        }),
                    t.codecInfo?.audioChannels != null &&
                        (0, r.jsxs)("div", {
                            className: u.N8,
                            children: [
                                (0, r.jsx)("span", { className: u.Zh, children: y }),
                                (0, r.jsxs)("span", {
                                    className: u.cR,
                                    children: [
                                        (0, l.At)(t.codecInfo.audioChannels),
                                        null != t.codecInfo.audioSampleRate &&
                                            ` @ ${(0, l.YQ)(t.codecInfo.audioSampleRate)}`,
                                    ],
                                }),
                            ],
                        }),
                    (0, r.jsxs)("div", {
                        className: u.N8,
                        children: [
                            (0, r.jsx)("span", { className: u.Zh, children: C }),
                            (0, r.jsx)("span", { className: u.cR, children: c(t.bufferedSeconds) }),
                        ],
                    }),
                    null !== t.errorCode &&
                        (0, r.jsx)("div", {
                            className: u.K6,
                            children: (0, r.jsxs)("div", {
                                className: u.N8,
                                children: [
                                    (0, r.jsx)("span", { className: u.Zh, children: b }),
                                    (0, r.jsxs)("span", {
                                        className: u.cR,
                                        children: [t.errorCode, null !== t.errorMessage && `: ${t.errorMessage}`],
                                    }),
                                ],
                            }),
                        }),
                ],
            }),
        ],
    });
}
