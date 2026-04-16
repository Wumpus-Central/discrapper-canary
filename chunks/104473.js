a.d(t, { AZ: () => f });
var n = a(627968),
    o = a(64700),
    r = a(407045),
    i = a(397927),
    l = a(664111),
    s = a(831056),
    d = a(784018);
let c = "https://cdn.discordapp.com/assets/og_img_discord_home.png";
function u(e) {
    let { orientation: t, thumbnailUrl: a, onReplay: o } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(s.nY, { url: a }),
            (0, n.jsx)(s.KP, {}),
            (0, n.jsxs)(s.zj, {
                orientation: t,
                children: [
                    (0, n.jsx)(s.Kb, { url: a, orientation: t }),
                    (0, n.jsx)(s.lx, {
                        title: "Watch Again",
                        subtitle: "Replay this video",
                        ctaBtnLabel: "Replay",
                        onCTAClick: o,
                        orientation: t,
                    }),
                ],
            }),
        ],
    });
}
function p(e) {
    let {
        orientation: t,
        autoplay: a,
        maxSeekableTimeSec: o,
        videoUrl: r,
        poster: s,
        showEndScreen: p,
        active: m,
        autoHideVolumeSlider: b,
        sizing: _,
    } = e;
    return (0, n.jsx)("div", {
        style:
            "video" === _
                ? {
                      width: "landscape" === t ? "640px" : "360px",
                      height: "landscape" === t ? "360px" : "640px",
                      margin: "0 auto",
                  }
                : {
                      display: "flex",
                      flexDirection: "column",
                      width: "portrait" === t ? "400px" : "100%",
                      maxWidth: "portrait" === t ? void 0 : "800px",
                      height: "portrait" === t ? "700px" : "500px",
                      backgroundColor: "#1e1f22",
                      borderRadius: "8px",
                      overflow: "hidden",
                  },
        children: (0, n.jsx)(
            l.A,
            {
                src: r,
                poster: s,
                active: m,
                autoplay: a,
                orientation: t,
                maxSeekableTimeSec: o > 0 ? o : void 0,
                autoHideVolumeSlider: b,
                parentTransitionState: i.ip4.ENTERED,
                targetTimeSec: 1 / 0,
                onOptimisticProgressUpdate: () => {},
                performanceClockStartTime: 0,
                onProgressUpdate: () => {},
                onEnded: () => {},
                onError: () => {},
                transcriptText: r === d.Im ? d.LI : d.pQ,
                renderEndScreen: p
                    ? (e) => {
                          let { replay: a } = e;
                          return (0, n.jsx)(u, { orientation: t, thumbnailUrl: c, onReplay: a });
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
        videoUrl: { label: "Video URL", type: "text", defaultValue: d.kz },
        poster: { label: "Poster URL", type: "text", defaultValue: c },
        showEndScreen: { label: "Show End Screen", type: "boolean", defaultValue: !0 },
        active: { label: "Active", type: "boolean", defaultValue: !0 },
        autoHideVolumeSlider: { label: "Auto-hide Volume Slider", type: "boolean", defaultValue: !1 },
        sizing: {
            label: "Container sizing",
            type: "select",
            options: [
                { label: "Modal context (800\xd7500)", value: "modal" },
                { label: "Video size (640\xd7360 / 360\xd7640)", value: "video" },
            ],
            defaultValue: "modal",
        },
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
            videoUrl: { ...m.videoUrl, defaultValue: d.Im },
        },
    },
    v = { tension: 500, friction: 30, clamp: !0 },
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
                    let { orientation: t, autoplay: a, maxSeekableTimeSec: s, videoUrl: d, indicatorTimeSec: c } = e,
                        u = (function (e) {
                            let [t, a] = o.useState(null),
                                [l, s] = o.useState(null),
                                d = o.useRef(null),
                                [{ expansion: c }, u] = (0, i.zhh)(() => ({
                                    expansion: 0,
                                    config: v,
                                    onRest: () => {
                                        null == d.current && s(null);
                                    },
                                })),
                                p = o.useCallback(
                                    (e) => {
                                        (d.current = e),
                                            null != e ? (s(e), u({ expansion: 4 })) : u({ expansion: 0 }),
                                            a(e);
                                    },
                                    [u],
                                ),
                                m = o.useMemo(() => [{ index: 0, timeSec: e, widthPx: 32, gapPx: 4 }], [e]),
                                b = o.useCallback(
                                    (e, t) => {
                                        let a = l === e.index;
                                        return (0, n.jsx)(
                                            r.animated.div,
                                            {
                                                "data-testid": "timeline-indicator",
                                                onMouseEnter: () => p(e.index),
                                                onMouseLeave: () => p(null),
                                                style: {
                                                    position: "absolute",
                                                    left: a ? c.to((t) => e.leftPx - t) : e.leftPx,
                                                    top: "50%",
                                                    transform: "translateY(-50%)",
                                                    width: a ? c.to((e) => `${32 + 2 * e}px`) : 32,
                                                    height: a ? c.to((e) => `${32 + 2 * e}px`) : 32,
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
                                                children: (0, n.jsx)(i.Text, {
                                                    variant: "text-xs/semibold",
                                                    color: "always-white",
                                                    children: "R",
                                                }),
                                            },
                                            `indicator-${e.index}`,
                                        );
                                    },
                                    [p, l, c],
                                );
                            return {
                                indicators: m,
                                animatingIndex: l,
                                expansionSpring: c,
                                hoverExpansionPx: 4,
                                renderIndicator: b,
                            };
                        })(c);
                    return (0, n.jsx)("div", {
                        style: {
                            width: "landscape" === t ? "640px" : "360px",
                            height: "landscape" === t ? "360px" : "640px",
                            margin: "0 auto",
                        },
                        children: (0, n.jsx)(l.A, {
                            src: d,
                            autoplay: a,
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
