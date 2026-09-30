(o.d(s, { VideoStatsOverlay: () => N }), o(321073));
var c = o(477900),
    d = o(582128),
    a = o(834730),
    n = o(866665),
    r = o(939249),
    i = o(624479),
    l = o(789645),
    t = o(957565),
    u = o(265486),
    h = o(183714);
let m = "Close",
    p = "Copy to JSON",
    f = "Copied!";
function N(e) {
    var s, o, N, x;
    let v,
        { stats: j, onClose: I } = e,
        [C, F] = d.useState(!1),
        g = d.useRef(null);
    d.useEffect(
        () => () => {
            null != g.current && clearTimeout(g.current);
        },
        [],
    );
    let R = d.useCallback(() => {
        let e = JSON.stringify(
            {
                media: {
                    video: {
                        codec: j.codecInfo?.videoCodecDescription ?? j.codecInfo?.videoCodec,
                        codecRaw: j.codecInfo?.videoCodec,
                        bitRate: j.codecInfo?.videoBitrate != null ? Math.round(j.codecInfo.videoBitrate) : null,
                        frameRate: j.frameRate,
                        width: j.videoWidth,
                        height: j.videoHeight,
                    },
                    audio: {
                        codec: j.codecInfo?.audioCodecDescription ?? j.codecInfo?.audioCodec,
                        codecRaw: j.codecInfo?.audioCodec,
                        bitRate: j.codecInfo?.audioBitrate != null ? Math.round(j.codecInfo.audioBitrate) : null,
                        channels: j.codecInfo?.audioChannels,
                        sampleRate: j.codecInfo?.audioSampleRate,
                    },
                    fileSizeBytes: j.fileSizeBytes,
                    durationSeconds: j.duration,
                    containerFormat: j.codecInfo?.containerFormat,
                    isProgressive: j.codecInfo?.isProgressive,
                    isFragmented: j.codecInfo?.isFragmented,
                },
                playback: {
                    viewportWidth: j.viewportWidth,
                    viewportHeight: j.viewportHeight,
                    currentTimeSeconds: j.currentTime,
                    bufferedSeconds: j.bufferedSeconds,
                    droppedFrames: j.droppedFrames,
                    totalDecodedFrames: j.totalFrames,
                    droppedFramesPercent:
                        null != j.droppedFramesPercent ? parseFloat(j.droppedFramesPercent.toFixed(2)) : null,
                    errorCode: j.errorCode,
                    errorMessage: j.errorMessage,
                },
            },
            null,
            2,
        );
        (0, t.C)(
            e,
            () => {
                (F(!0),
                    null != g.current && clearTimeout(g.current),
                    (g.current = window.setTimeout(() => {
                        (F(!1), (g.current = null));
                    }, 2e3)));
            },
            () => {},
        );
    }, [j]);
    return (0, c.jsxs)("div", {
        className: h.gP,
        children: [
            (0, c.jsxs)("div", {
                className: h.wx,
                children: [
                    (0, c.jsx)(a.E, { variant: "text-md/bold", color: "none", children: "Stats for Nerds" }),
                    (0, c.jsxs)("div", {
                        className: h.Pz,
                        children: [
                            (0, c.jsx)(n.m, {
                                text: C ? f : p,
                                children: (0, c.jsx)(r.D, {
                                    className: h.cL,
                                    onClick: R,
                                    "aria-label": C ? f : p,
                                    focusProps: { offset: 2 },
                                    children: (0, c.jsx)(i.CopyIcon, { size: "md", color: "currentColor" }),
                                }),
                            }),
                            (0, c.jsx)(n.m, {
                                text: m,
                                children: (0, c.jsx)(r.D, {
                                    className: h.b,
                                    onClick: I,
                                    "aria-label": m,
                                    focusProps: { offset: 2 },
                                    children: (0, c.jsx)(l.P, { size: "md", color: "currentColor" }),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, c.jsxs)("div", {
                className: h.Qs,
                children: [
                    j.codecInfo?.containerFormat != null &&
                        (0, c.jsxs)("div", {
                            className: h.N8,
                            children: [
                                (0, c.jsx)("span", { className: h.Zh, children: "Container" }),
                                (0, c.jsx)("span", { className: h.cR, children: j.codecInfo.containerFormat }),
                            ],
                        }),
                    (j.codecInfo?.isProgressive != null || j.codecInfo?.isFragmented != null) &&
                        (0, c.jsxs)("div", {
                            className: h.N8,
                            children: [
                                (0, c.jsx)("span", { className: h.Zh, children: "Format" }),
                                (0, c.jsx)("span", {
                                    className: h.cR,
                                    children:
                                        ((s = j.codecInfo.isProgressive ?? null),
                                        (o = j.codecInfo.isFragmented ?? null),
                                        (v = []),
                                        (!0 === s && v.push("Progressive"),
                                        !0 === o && v.push("Fragmented"),
                                        0 === v.length)
                                            ? "Standard"
                                            : v.join(", ")),
                                }),
                            ],
                        }),
                    null != j.codecInfo &&
                        (0, c.jsxs)("div", {
                            className: h.N8,
                            children: [
                                (0, c.jsx)("span", { className: h.Zh, children: "Resolution" }),
                                (0, c.jsxs)("span", {
                                    className: h.cR,
                                    children: [
                                        j.resolution,
                                        " @ ",
                                        null === (N = j.frameRate) ? "N/A" : `${N} fps`,
                                        j.droppedFrames > 0 && ` (${j.droppedFrames} dropped)`,
                                    ],
                                }),
                            ],
                        }),
                    null != j.codecInfo &&
                        (0, c.jsxs)("div", {
                            className: h.N8,
                            children: [
                                (0, c.jsx)("span", { className: h.Zh, children: "Viewport" }),
                                (0, c.jsxs)("span", {
                                    className: h.cR,
                                    children: [j.viewportWidth, "x", j.viewportHeight],
                                }),
                            ],
                        }),
                    j.codecInfo?.videoCodec != null &&
                        (0, c.jsxs)("div", {
                            className: h.N8,
                            children: [
                                (0, c.jsx)("span", { className: h.Zh, children: "Video" }),
                                (0, c.jsxs)("span", {
                                    className: h.cR,
                                    children: [
                                        j.codecInfo.videoCodecDescription ?? j.codecInfo.videoCodec ?? "Unknown",
                                        null != j.codecInfo.videoBitrate && ` @ ${(0, u.BZ)(j.codecInfo.videoBitrate)}`,
                                    ],
                                }),
                            ],
                        }),
                    j.codecInfo?.audioCodec != null &&
                        (0, c.jsxs)("div", {
                            className: h.N8,
                            children: [
                                (0, c.jsx)("span", { className: h.Zh, children: "Audio" }),
                                (0, c.jsxs)("span", {
                                    className: h.cR,
                                    children: [
                                        j.codecInfo.audioCodecDescription ?? j.codecInfo.audioCodec ?? "Unknown",
                                        null != j.codecInfo.audioBitrate && ` @ ${(0, u.BZ)(j.codecInfo.audioBitrate)}`,
                                    ],
                                }),
                            ],
                        }),
                    j.codecInfo?.audioChannels != null &&
                        (0, c.jsxs)("div", {
                            className: h.N8,
                            children: [
                                (0, c.jsx)("span", { className: h.Zh, children: "Audio Channels" }),
                                (0, c.jsxs)("span", {
                                    className: h.cR,
                                    children: [
                                        (0, u.At)(j.codecInfo.audioChannels),
                                        null != j.codecInfo.audioSampleRate &&
                                            ` @ ${(0, u.YQ)(j.codecInfo.audioSampleRate)}`,
                                    ],
                                }),
                            ],
                        }),
                    (0, c.jsxs)("div", {
                        className: h.N8,
                        children: [
                            (0, c.jsx)("span", { className: h.Zh, children: "Buffer Health" }),
                            (0, c.jsx)("span", {
                                className: h.cR,
                                children: isFinite((x = j.bufferedSeconds)) ? x.toFixed(1) + "s" : "Live",
                            }),
                        ],
                    }),
                    null !== j.errorCode &&
                        (0, c.jsx)("div", {
                            className: h.K6,
                            children: (0, c.jsxs)("div", {
                                className: h.N8,
                                children: [
                                    (0, c.jsx)("span", { className: h.Zh, children: "Error" }),
                                    (0, c.jsxs)("span", {
                                        className: h.cR,
                                        children: [j.errorCode, null !== j.errorMessage && `: ${j.errorMessage}`],
                                    }),
                                ],
                            }),
                        }),
                ],
            }),
        ],
    });
}
