"use strict";
n.d(t, { J: () => R }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(435371),
    a = n(397927),
    o = n(957565),
    l = n(43105),
    u = n(90358);
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
    p = "Close",
    h = "Copy to JSON",
    m = "Copied!",
    E = "Resolution",
    g = "Viewport",
    A = "Video",
    I = "Audio",
    T = "Audio Channels",
    S = "Container",
    y = "Format",
    v = "Buffer Health",
    N = "Error";
function C(e) {
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
        b = i.useRef(null);
    i.useEffect(
        () => () => {
            null != b.current && clearTimeout(b.current);
        },
        [],
    );
    let D = i.useCallback(() => {
        let e = C(t);
        (0, o.C)(
            e,
            () => {
                O(!0),
                    null != b.current && clearTimeout(b.current),
                    (b.current = window.setTimeout(() => {
                        O(!1), (b.current = null);
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
                            (0, r.jsx)(s.m_, {
                                text: R ? m : h,
                                children: (0, r.jsx)(a.DUT, {
                                    className: u.cL,
                                    onClick: D,
                                    "aria-label": R ? m : h,
                                    focusProps: { offset: 2 },
                                    children: (0, r.jsx)(a.TdU, { size: "md", color: "currentColor" }),
                                }),
                            }),
                            (0, r.jsx)(s.m_, {
                                text: p,
                                children: (0, r.jsx)(a.DUT, {
                                    className: u.b,
                                    onClick: n,
                                    "aria-label": p,
                                    focusProps: { offset: 2 },
                                    children: (0, r.jsx)(a.PGe, { size: "md", color: "currentColor" }),
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
                                (0, r.jsx)("span", { className: u.Zh, children: y }),
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
                                (0, r.jsx)("span", { className: u.Zh, children: g }),
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
                                (0, r.jsx)("span", { className: u.Zh, children: A }),
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
                                (0, r.jsx)("span", { className: u.Zh, children: I }),
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
                                (0, r.jsx)("span", { className: u.Zh, children: T }),
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
                            (0, r.jsx)("span", { className: u.Zh, children: v }),
                            (0, r.jsx)("span", { className: u.cR, children: c(t.bufferedSeconds) }),
                        ],
                    }),
                    null !== t.errorCode &&
                        (0, r.jsx)("div", {
                            className: u.K6,
                            children: (0, r.jsxs)("div", {
                                className: u.N8,
                                children: [
                                    (0, r.jsx)("span", { className: u.Zh, children: N }),
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
