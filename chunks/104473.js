n.d(t, { AZ: () => f });
var r = n(627968),
    a = n(64700),
    o = n(382222),
    i = n(397927),
    s = n(664111),
    l = n(831056),
    c = n(784018);
let d = "https://cdn.discordapp.com/assets/og_img_discord_home.png";
function u(e) {
    let { orientation: t, thumbnailUrl: n, onReplay: a } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.nY, { url: n }),
            (0, r.jsx)(l.KP, {}),
            (0, r.jsxs)(l.zj, {
                orientation: t,
                children: [
                    (0, r.jsx)(l.Kb, { url: n, orientation: t }),
                    (0, r.jsx)(l.lx, {
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
    let { orientation: t, autoplay: n, maxSeekableTimeSec: a, videoUrl: o, poster: l, showEndScreen: p, active: m } = e;
    return (0, r.jsx)("div", {
        style: {
            width: "landscape" === t ? "640px" : "360px",
            height: "landscape" === t ? "360px" : "640px",
            margin: "0 auto",
        },
        children: (0, r.jsx)(
            s.A,
            {
                src: o,
                poster: l,
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
        name: "Landscape Video (Generic)",
        id: "landscape-video-generic",
        component: p,
        controls: { ...m, orientation: { ...m.orientation, defaultValue: "landscape" } },
    },
    _ = {
        name: "Portrait Video (Generic)",
        id: "portrait-video-generic",
        component: p,
        controls: { ...m, orientation: { ...m.orientation, defaultValue: "portrait" } },
    },
    S = {
        name: "HLS Video (Generic)",
        id: "hls-video-generic",
        component: p,
        controls: {
            ...m,
            orientation: { ...m.orientation, defaultValue: "landscape" },
            videoUrl: { ...m.videoUrl, defaultValue: c.Im },
        },
    },
    g = { tension: 500, friction: 30, clamp: !0 },
    f = {
        title: "Discord Video Player (Generic)",
        stories: [
            b,
            _,
            S,
            {
                name: "Timeline Indicators (Generic)",
                id: "timeline-indicators-generic",
                component: function (e) {
                    let { orientation: t, autoplay: n, maxSeekableTimeSec: l, videoUrl: c, indicatorTimeSec: d } = e,
                        u = (function (e) {
                            let [t, n] = a.useState(null),
                                [s, l] = a.useState(null),
                                c = a.useRef(null),
                                [{ expansion: d }, u] = (0, i.zhh)(() => ({
                                    expansion: 0,
                                    config: g,
                                    onRest: () => {
                                        null == c.current && l(null);
                                    },
                                })),
                                p = a.useCallback(
                                    (e) => {
                                        (c.current = e),
                                            null != e ? (l(e), u({ expansion: 4 })) : u({ expansion: 0 }),
                                            n(e);
                                    },
                                    [u],
                                ),
                                m = a.useMemo(() => [{ index: 0, timeSec: e, widthPx: 32, gapPx: 4 }], [e]),
                                b = a.useCallback(
                                    (e, t) => {
                                        let n = s === e.index;
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
                                    [p, s, d],
                                );
                            return {
                                indicators: m,
                                animatingIndex: s,
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
                        children: (0, r.jsx)(s.A, {
                            src: c,
                            autoplay: n,
                            orientation: t,
                            maxSeekableTimeSec: l > 0 ? l : void 0,
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
