n.d(t, { AZ: () => f });
var r = n(627968),
    a = n(64700),
    o = n(687498),
    i = n(397927),
    l = n(664111),
    s = n(831056),
    c = n(784018);
let d = "https://cdn.discordapp.com/assets/og_img_discord_home.png";
function u(e) {
    let { orientation: t, thumbnailUrl: n, onReplay: a } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.nY, { url: n }),
            (0, r.jsx)(s.KP, {}),
            (0, r.jsxs)(s.zj, {
                orientation: t,
                children: [
                    (0, r.jsx)(s.Kb, { url: n, orientation: t }),
                    (0, r.jsx)(s.lx, {
                        title: "Watch Again",
                        subtitle: "Replay this video",
                        ctaBtnLabel: "Replay",
                        onCTAClick: a,
                        orientation: t,
                    }),
                ],
            }),
        ],
    });
}
function p(e) {
    let { orientation: t, autoplay: n, maxSeekableTimeSec: a, videoUrl: o, poster: s, showEndScreen: p, active: m } = e;
    return (0, r.jsx)("div", {
        style: {
            width: "landscape" === t ? "640px" : "360px",
            height: "landscape" === t ? "360px" : "640px",
            margin: "0 auto",
        },
        children: (0, r.jsx)(
            l.A,
            {
                src: o,
                poster: s,
                active: m,
                autoplay: n,
                orientation: t,
                maxSeekableTimeSec: a > 0 ? a : void 0,
                parentTransitionState: i.ip4.ENTERED,
                targetTimeSec: 1 / 0,
                onOptimisticProgressUpdate: () => {},
                performanceClockStartTime: 0,
                onProgressUpdate: () => {},
                onEnded: () => {},
                onError: () => {},
                transcriptText: o === c.Im ? c.LI : c.pQ,
                renderEndScreen: p
                    ? (e) => {
                          let { replay: n } = e;
                          return (0, r.jsx)(u, { orientation: t, thumbnailUrl: d, onReplay: n });
                      }
                    : void 0,
            },
            String(m),
        ),
    });
}
let m = {
        orientation: {
            label: "Orientation",
            type: "select",
            options: [
                { label: "Landscape", value: "landscape" },
                { label: "Portrait", value: "portrait" },
            ],
            defaultValue: "landscape",
        },
        autoplay: { label: "Autoplay", type: "boolean", defaultValue: !1 },
        maxSeekableTimeSec: { label: "Max Seekable Time (sec, 0 = unrestricted)", type: "number", defaultValue: 0 },
        videoUrl: { label: "Video URL", type: "text", defaultValue: c.kz },
        poster: { label: "Poster URL", type: "text", defaultValue: d },
        showEndScreen: { label: "Show End Screen", type: "boolean", defaultValue: !0 },
        active: { label: "Active", type: "boolean", defaultValue: !0 },
    },
    b = {
        name: "Landscape",
        id: "landscape-video-generic",
        component: p,
        controls: { ...m, orientation: { ...m.orientation, defaultValue: "landscape" } },
    },
    _ = {
        name: "Portrait",
        id: "portrait-video-generic",
        component: p,
        controls: { ...m, orientation: { ...m.orientation, defaultValue: "portrait" } },
    },
    g = {
        name: "HLS",
        id: "hls-video-generic",
        component: p,
        controls: {
            ...m,
            orientation: { ...m.orientation, defaultValue: "landscape" },
            videoUrl: { ...m.videoUrl, defaultValue: c.Im },
        },
    },
    S = { tension: 500, friction: 30, clamp: !0 },
    f = {
        title: "Discord Video Player (Generic)",
        stories: [
            b,
            _,
            g,
            {
                name: "Timeline Indicators",
                id: "timeline-indicators-generic",
                component: function (e) {
                    let { orientation: t, autoplay: n, maxSeekableTimeSec: s, videoUrl: c, indicatorTimeSec: d } = e,
                        u = (function (e) {
                            let [t, n] = a.useState(null),
                                [l, s] = a.useState(null),
                                c = a.useRef(null),
                                [{ expansion: d }, u] = (0, i.zhh)(() => ({
                                    expansion: 0,
                                    config: S,
                                    onRest: () => {
                                        null == c.current && s(null);
                                    },
                                })),
                                p = a.useCallback(
                                    (e) => {
                                        (c.current = e),
                                            null != e ? (s(e), u({ expansion: 4 })) : u({ expansion: 0 }),
                                            n(e);
                                    },
                                    [u],
                                ),
                                m = a.useMemo(() => [{ index: 0, timeSec: e, widthPx: 32, gapPx: 4 }], [e]),
                                b = a.useCallback(
                                    (e, t) => {
                                        let n = l === e.index;
                                        return (0, r.jsx)(
                                            o.animated.div,
                                            {
                                                "data-testid": "timeline-indicator",
                                                onMouseEnter: () => p(e.index),
                                                onMouseLeave: () => p(null),
                                                style: {
                                                    position: "absolute",
                                                    left: n ? d.to((t) => e.leftPx - t) : e.leftPx,
                                                    top: "50%",
                                                    transform: "translateY(-50%)",
                                                    width: n ? d.to((e) => `${32 + 2 * e}px`) : 32,
                                                    height: n ? d.to((e) => `${32 + 2 * e}px`) : 32,
                                                    boxSizing: "border-box",
                                                    borderRadius: "50%",
                                                    backgroundColor: "#3ba55c",
                                                    border: "2px solid white",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    cursor: "pointer",
                                                    zIndex: 1,
                                                },
                                                children: (0, r.jsx)(i.Text, {
                                                    variant: "text-xs/semibold",
                                                    color: "always-white",
                                                    children: "R",
                                                }),
                                            },
                                            `indicator-${e.index}`,
                                        );
                                    },
                                    [p, l, d],
                                );
                            return {
                                indicators: m,
                                animatingIndex: l,
                                expansionSpring: d,
                                hoverExpansionPx: 4,
                                renderIndicator: b,
                            };
                        })(d);
                    return (0, r.jsx)("div", {
                        style: {
                            width: "landscape" === t ? "640px" : "360px",
                            height: "landscape" === t ? "360px" : "640px",
                            margin: "0 auto",
                        },
                        children: (0, r.jsx)(l.A, {
                            src: c,
                            autoplay: n,
                            orientation: t,
                            maxSeekableTimeSec: s > 0 ? s : void 0,
                            parentTransitionState: i.ip4.ENTERED,
                            targetTimeSec: 1 / 0,
                            onOptimisticProgressUpdate: () => {},
                            performanceClockStartTime: 0,
                            timelineIndicatorConfig: u,
                        }),
                    });
                },
                controls: {
                    orientation: m.orientation,
                    autoplay: m.autoplay,
                    maxSeekableTimeSec: m.maxSeekableTimeSec,
                    videoUrl: m.videoUrl,
                    indicatorTimeSec: { label: "Indicator Time (sec)", type: "number", defaultValue: 15 },
                },
            },
        ],
    };
