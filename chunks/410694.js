"use strict";
n.d(t, { J: () => h }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(990078),
    a = n(939249),
    o = n(624479),
    l = n(789645),
    u = n(957565),
    c = n(43105),
    d = n(239957);
let _ = "Close",
    f = "Copy to JSON",
    p = "Copied!";
function h(e) {
    var t, n, h, E;
    let m,
        { stats: g, onClose: A } = e,
        [I, T] = i.useState(!1),
        S = i.useRef(null);
    i.useEffect(
        () => () => {
            null != S.current && clearTimeout(S.current);
        },
        [],
    );
    let y = i.useCallback(() => {
        let e = JSON.stringify(
            {
                media: {
                    video: {
                        codec: g.codecInfo?.videoCodecDescription ?? g.codecInfo?.videoCodec,
                        codecRaw: g.codecInfo?.videoCodec,
                        bitRate: g.codecInfo?.videoBitrate != null ? Math.round(g.codecInfo.videoBitrate) : null,
                        frameRate: g.frameRate,
                        width: g.videoWidth,
                        height: g.videoHeight,
                    },
                    audio: {
                        codec: g.codecInfo?.audioCodecDescription ?? g.codecInfo?.audioCodec,
                        codecRaw: g.codecInfo?.audioCodec,
                        bitRate: g.codecInfo?.audioBitrate != null ? Math.round(g.codecInfo.audioBitrate) : null,
                        channels: g.codecInfo?.audioChannels,
                        sampleRate: g.codecInfo?.audioSampleRate,
                    },
                    fileSizeBytes: g.fileSizeBytes,
                    durationSeconds: g.duration,
                    containerFormat: g.codecInfo?.containerFormat,
                    isProgressive: g.codecInfo?.isProgressive,
                    isFragmented: g.codecInfo?.isFragmented,
                },
                playback: {
                    viewportWidth: g.viewportWidth,
                    viewportHeight: g.viewportHeight,
                    currentTimeSeconds: g.currentTime,
                    bufferedSeconds: g.bufferedSeconds,
                    droppedFrames: g.droppedFrames,
                    totalDecodedFrames: g.totalFrames,
                    droppedFramesPercent:
                        null != g.droppedFramesPercent ? parseFloat(g.droppedFramesPercent.toFixed(2)) : null,
                    errorCode: g.errorCode,
                    errorMessage: g.errorMessage,
                },
            },
            null,
            2,
        );
        (0, u.C)(
            e,
            () => {
                T(!0),
                    null != S.current && clearTimeout(S.current),
                    (S.current = window.setTimeout(() => {
                        T(!1), (S.current = null);
                    }, 2e3));
            },
            () => {},
        );
    }, [g]);
    return (0, r.jsxs)("div", {
        className: d.gP,
        children: [
            (0, r.jsxs)("div", {
                className: d.wx,
                children: [
                    (0, r.jsx)("div", { className: d.DD, children: "Stats for Nerds" }),
                    (0, r.jsxs)("div", {
                        className: d.Pz,
                        children: [
                            (0, r.jsx)(s.m, {
                                text: I ? p : f,
                                children: (0, r.jsx)(a.D, {
                                    className: d.cL,
                                    onClick: y,
                                    "aria-label": I ? p : f,
                                    focusProps: { offset: 2 },
                                    children: (0, r.jsx)(o.T, { size: "md", color: "currentColor" }),
                                }),
                            }),
                            (0, r.jsx)(s.m, {
                                text: _,
                                children: (0, r.jsx)(a.D, {
                                    className: d.b,
                                    onClick: A,
                                    "aria-label": _,
                                    focusProps: { offset: 2 },
                                    children: (0, r.jsx)(l.P, { size: "md", color: "currentColor" }),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: d.Qs,
                children: [
                    g.codecInfo?.containerFormat != null &&
                        (0, r.jsxs)("div", {
                            className: d.N8,
                            children: [
                                (0, r.jsx)("span", { className: d.Zh, children: "Container" }),
                                (0, r.jsx)("span", { className: d.cR, children: g.codecInfo.containerFormat }),
                            ],
                        }),
                    (g.codecInfo?.isProgressive != null || g.codecInfo?.isFragmented != null) &&
                        (0, r.jsxs)("div", {
                            className: d.N8,
                            children: [
                                (0, r.jsx)("span", { className: d.Zh, children: "Format" }),
                                (0, r.jsx)("span", {
                                    className: d.cR,
                                    children:
                                        ((t = g.codecInfo.isProgressive ?? null),
                                        (n = g.codecInfo.isFragmented ?? null),
                                        (m = []),
                                        (!0 === t && m.push("Progressive"),
                                        !0 === n && m.push("Fragmented"),
                                        0 === m.length)
                                            ? "Standard"
                                            : m.join(", ")),
                                }),
                            ],
                        }),
                    null != g.codecInfo &&
                        (0, r.jsxs)("div", {
                            className: d.N8,
                            children: [
                                (0, r.jsx)("span", { className: d.Zh, children: "Resolution" }),
                                (0, r.jsxs)("span", {
                                    className: d.cR,
                                    children: [
                                        g.resolution,
                                        " @ ",
                                        null === (h = g.frameRate) ? "N/A" : `${h} fps`,
                                        g.droppedFrames > 0 && ` (${g.droppedFrames} dropped)`,
                                    ],
                                }),
                            ],
                        }),
                    null != g.codecInfo &&
                        (0, r.jsxs)("div", {
                            className: d.N8,
                            children: [
                                (0, r.jsx)("span", { className: d.Zh, children: "Viewport" }),
                                (0, r.jsxs)("span", {
                                    className: d.cR,
                                    children: [g.viewportWidth, "x", g.viewportHeight],
                                }),
                            ],
                        }),
                    g.codecInfo?.videoCodec != null &&
                        (0, r.jsxs)("div", {
                            className: d.N8,
                            children: [
                                (0, r.jsx)("span", { className: d.Zh, children: "Video" }),
                                (0, r.jsxs)("span", {
                                    className: d.cR,
                                    children: [
                                        g.codecInfo.videoCodecDescription ?? g.codecInfo.videoCodec ?? "Unknown",
                                        null != g.codecInfo.videoBitrate && ` @ ${(0, c.BZ)(g.codecInfo.videoBitrate)}`,
                                    ],
                                }),
                            ],
                        }),
                    g.codecInfo?.audioCodec != null &&
                        (0, r.jsxs)("div", {
                            className: d.N8,
                            children: [
                                (0, r.jsx)("span", { className: d.Zh, children: "Audio" }),
                                (0, r.jsxs)("span", {
                                    className: d.cR,
                                    children: [
                                        g.codecInfo.audioCodecDescription ?? g.codecInfo.audioCodec ?? "Unknown",
                                        null != g.codecInfo.audioBitrate && ` @ ${(0, c.BZ)(g.codecInfo.audioBitrate)}`,
                                    ],
                                }),
                            ],
                        }),
                    g.codecInfo?.audioChannels != null &&
                        (0, r.jsxs)("div", {
                            className: d.N8,
                            children: [
                                (0, r.jsx)("span", { className: d.Zh, children: "Audio Channels" }),
                                (0, r.jsxs)("span", {
                                    className: d.cR,
                                    children: [
                                        (0, c.At)(g.codecInfo.audioChannels),
                                        null != g.codecInfo.audioSampleRate &&
                                            ` @ ${(0, c.YQ)(g.codecInfo.audioSampleRate)}`,
                                    ],
                                }),
                            ],
                        }),
                    (0, r.jsxs)("div", {
                        className: d.N8,
                        children: [
                            (0, r.jsx)("span", { className: d.Zh, children: "Buffer Health" }),
                            (0, r.jsx)("span", {
                                className: d.cR,
                                children: isFinite((E = g.bufferedSeconds)) ? E.toFixed(1) + "s" : "Live",
                            }),
                        ],
                    }),
                    null !== g.errorCode &&
                        (0, r.jsx)("div", {
                            className: d.K6,
                            children: (0, r.jsxs)("div", {
                                className: d.N8,
                                children: [
                                    (0, r.jsx)("span", { className: d.Zh, children: "Error" }),
                                    (0, r.jsxs)("span", {
                                        className: d.cR,
                                        children: [g.errorCode, null !== g.errorMessage && `: ${g.errorMessage}`],
                                    }),
                                ],
                            }),
                        }),
                ],
            }),
        ],
    });
}
