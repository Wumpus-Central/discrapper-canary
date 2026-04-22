"use strict";
n.d(t, { J: () => f }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(990078),
    r = n(939249),
    a = n(624479),
    o = n(789645),
    c = n(957565),
    u = n(43105),
    d = n(239957);
let h = "Close",
    m = "Copy to JSON",
    p = "Copied!";
function f(e) {
    var t, n, f, g;
    let _,
        { stats: x, onClose: A } = e,
        [C, E] = l.useState(!1),
        I = l.useRef(null);
    l.useEffect(
        () => () => {
            null != I.current && clearTimeout(I.current);
        },
        [],
    );
    let v = l.useCallback(() => {
        let e = JSON.stringify(
            {
                media: {
                    video: {
                        codec: x.codecInfo?.videoCodecDescription ?? x.codecInfo?.videoCodec,
                        codecRaw: x.codecInfo?.videoCodec,
                        bitRate: x.codecInfo?.videoBitrate != null ? Math.round(x.codecInfo.videoBitrate) : null,
                        frameRate: x.frameRate,
                        width: x.videoWidth,
                        height: x.videoHeight,
                    },
                    audio: {
                        codec: x.codecInfo?.audioCodecDescription ?? x.codecInfo?.audioCodec,
                        codecRaw: x.codecInfo?.audioCodec,
                        bitRate: x.codecInfo?.audioBitrate != null ? Math.round(x.codecInfo.audioBitrate) : null,
                        channels: x.codecInfo?.audioChannels,
                        sampleRate: x.codecInfo?.audioSampleRate,
                    },
                    fileSizeBytes: x.fileSizeBytes,
                    durationSeconds: x.duration,
                    containerFormat: x.codecInfo?.containerFormat,
                    isProgressive: x.codecInfo?.isProgressive,
                    isFragmented: x.codecInfo?.isFragmented,
                },
                playback: {
                    viewportWidth: x.viewportWidth,
                    viewportHeight: x.viewportHeight,
                    currentTimeSeconds: x.currentTime,
                    bufferedSeconds: x.bufferedSeconds,
                    droppedFrames: x.droppedFrames,
                    totalDecodedFrames: x.totalFrames,
                    droppedFramesPercent:
                        null != x.droppedFramesPercent ? parseFloat(x.droppedFramesPercent.toFixed(2)) : null,
                    errorCode: x.errorCode,
                    errorMessage: x.errorMessage,
                },
            },
            null,
            2,
        );
        (0, c.C)(
            e,
            () => {
                E(!0),
                    null != I.current && clearTimeout(I.current),
                    (I.current = window.setTimeout(() => {
                        E(!1), (I.current = null);
                    }, 2e3));
            },
            () => {},
        );
    }, [x]);
    return (0, i.jsxs)("div", {
        className: d.gP,
        children: [
            (0, i.jsxs)("div", {
                className: d.wx,
                children: [
                    (0, i.jsx)("div", { className: d.DD, children: "Stats for Nerds" }),
                    (0, i.jsxs)("div", {
                        className: d.Pz,
                        children: [
                            (0, i.jsx)(s.m, {
                                text: C ? p : m,
                                children: (0, i.jsx)(r.D, {
                                    className: d.cL,
                                    onClick: v,
                                    "aria-label": C ? p : m,
                                    focusProps: { offset: 2 },
                                    children: (0, i.jsx)(a.T, { size: "md", color: "currentColor" }),
                                }),
                            }),
                            (0, i.jsx)(s.m, {
                                text: h,
                                children: (0, i.jsx)(r.D, {
                                    className: d.b,
                                    onClick: A,
                                    "aria-label": h,
                                    focusProps: { offset: 2 },
                                    children: (0, i.jsx)(o.P, { size: "md", color: "currentColor" }),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: d.Qs,
                children: [
                    x.codecInfo?.containerFormat != null &&
                        (0, i.jsxs)("div", {
                            className: d.N8,
                            children: [
                                (0, i.jsx)("span", { className: d.Zh, children: "Container" }),
                                (0, i.jsx)("span", { className: d.cR, children: x.codecInfo.containerFormat }),
                            ],
                        }),
                    (x.codecInfo?.isProgressive != null || x.codecInfo?.isFragmented != null) &&
                        (0, i.jsxs)("div", {
                            className: d.N8,
                            children: [
                                (0, i.jsx)("span", { className: d.Zh, children: "Format" }),
                                (0, i.jsx)("span", {
                                    className: d.cR,
                                    children:
                                        ((t = x.codecInfo.isProgressive ?? null),
                                        (n = x.codecInfo.isFragmented ?? null),
                                        (_ = []),
                                        (!0 === t && _.push("Progressive"),
                                        !0 === n && _.push("Fragmented"),
                                        0 === _.length)
                                            ? "Standard"
                                            : _.join(", ")),
                                }),
                            ],
                        }),
                    null != x.codecInfo &&
                        (0, i.jsxs)("div", {
                            className: d.N8,
                            children: [
                                (0, i.jsx)("span", { className: d.Zh, children: "Resolution" }),
                                (0, i.jsxs)("span", {
                                    className: d.cR,
                                    children: [
                                        x.resolution,
                                        " @ ",
                                        null === (f = x.frameRate) ? "N/A" : `${f} fps`,
                                        x.droppedFrames > 0 && ` (${x.droppedFrames} dropped)`,
                                    ],
                                }),
                            ],
                        }),
                    null != x.codecInfo &&
                        (0, i.jsxs)("div", {
                            className: d.N8,
                            children: [
                                (0, i.jsx)("span", { className: d.Zh, children: "Viewport" }),
                                (0, i.jsxs)("span", {
                                    className: d.cR,
                                    children: [x.viewportWidth, "x", x.viewportHeight],
                                }),
                            ],
                        }),
                    x.codecInfo?.videoCodec != null &&
                        (0, i.jsxs)("div", {
                            className: d.N8,
                            children: [
                                (0, i.jsx)("span", { className: d.Zh, children: "Video" }),
                                (0, i.jsxs)("span", {
                                    className: d.cR,
                                    children: [
                                        x.codecInfo.videoCodecDescription ?? x.codecInfo.videoCodec ?? "Unknown",
                                        null != x.codecInfo.videoBitrate && ` @ ${(0, u.BZ)(x.codecInfo.videoBitrate)}`,
                                    ],
                                }),
                            ],
                        }),
                    x.codecInfo?.audioCodec != null &&
                        (0, i.jsxs)("div", {
                            className: d.N8,
                            children: [
                                (0, i.jsx)("span", { className: d.Zh, children: "Audio" }),
                                (0, i.jsxs)("span", {
                                    className: d.cR,
                                    children: [
                                        x.codecInfo.audioCodecDescription ?? x.codecInfo.audioCodec ?? "Unknown",
                                        null != x.codecInfo.audioBitrate && ` @ ${(0, u.BZ)(x.codecInfo.audioBitrate)}`,
                                    ],
                                }),
                            ],
                        }),
                    x.codecInfo?.audioChannels != null &&
                        (0, i.jsxs)("div", {
                            className: d.N8,
                            children: [
                                (0, i.jsx)("span", { className: d.Zh, children: "Audio Channels" }),
                                (0, i.jsxs)("span", {
                                    className: d.cR,
                                    children: [
                                        (0, u.At)(x.codecInfo.audioChannels),
                                        null != x.codecInfo.audioSampleRate &&
                                            ` @ ${(0, u.YQ)(x.codecInfo.audioSampleRate)}`,
                                    ],
                                }),
                            ],
                        }),
                    (0, i.jsxs)("div", {
                        className: d.N8,
                        children: [
                            (0, i.jsx)("span", { className: d.Zh, children: "Buffer Health" }),
                            (0, i.jsx)("span", {
                                className: d.cR,
                                children: isFinite((g = x.bufferedSeconds)) ? g.toFixed(1) + "s" : "Live",
                            }),
                        ],
                    }),
                    null !== x.errorCode &&
                        (0, i.jsx)("div", {
                            className: d.K6,
                            children: (0, i.jsxs)("div", {
                                className: d.N8,
                                children: [
                                    (0, i.jsx)("span", { className: d.Zh, children: "Error" }),
                                    (0, i.jsxs)("span", {
                                        className: d.cR,
                                        children: [x.errorCode, null !== x.errorMessage && `: ${x.errorMessage}`],
                                    }),
                                ],
                            }),
                        }),
                ],
            }),
        ],
    });
}
