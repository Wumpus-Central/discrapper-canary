n.d(t, { AZ: () => S });
var r = n(627968),
    a = n(64700),
    o = n(497766),
    i = n(397927),
    s = n(476066),
    l = n(6503),
    d = n(784018);
let u = "https://cdn.discordapp.com/assets/og_img_discord_home.png";
function c(e) {
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
    let {
        orientation: t,
        autoplay: n,
        seekForwardRestricted: a,
        videoUrl: o,
        poster: l,
        showEndScreen: p,
        active: _,
    } = e;
    return (0, r.jsx)("div", {
        style: {
            width: "landscape" === t ? "640px" : "360px",
            height: "landscape" === t ? "360px" : "640px",
            margin: "0 auto",
            backgroundColor: "#000",
        },
        children: (0, r.jsx)(
            s.A,
            {
                src: o,
                poster: l,
                active: _,
                autoplay: n,
                orientation: t,
                seekForwardRestricted: a,
                parentTransitionState: i.ip4.ENTERED,
                targetTimeSec: 1 / 0,
                onOptimisticProgressUpdate: () => {},
                performanceClockStartTime: 0,
                onProgressUpdate: () => {},
                onEnded: () => {},
                onError: () => {},
                transcriptText: o === d.Im ? d.LI : d.pQ,
                renderEndScreen: p
                    ? (e) => {
                          let { replay: n } = e;
                          return (0, r.jsx)(c, { orientation: t, thumbnailUrl: u, onReplay: n });
                      }
                    : void 0,
            },
            String(_),
        ),
    });
}
let _ = {
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
        seekForwardRestricted: { label: "Restrict Seek Forward", type: "boolean", defaultValue: !1 },
        videoUrl: { label: "Video URL", type: "text", defaultValue: d.kz },
        poster: { label: "Poster URL", type: "text", defaultValue: u },
        showEndScreen: { label: "Show End Screen", type: "boolean", defaultValue: !0 },
        active: { label: "Active", type: "boolean", defaultValue: !0 },
    },
    f = {
        name: "Landscape Video (Generic)",
        id: "landscape-video-generic",
        component: p,
        controls: { ..._, orientation: { ..._.orientation, defaultValue: "landscape" } },
    },
    b = {
        name: "Portrait Video (Generic)",
        id: "portrait-video-generic",
        component: p,
        controls: { ..._, orientation: { ..._.orientation, defaultValue: "portrait" } },
    },
    m = {
        name: "HLS Video (Generic)",
        id: "hls-video-generic",
        component: p,
        controls: {
            ..._,
            orientation: { ..._.orientation, defaultValue: "landscape" },
            videoUrl: { ..._.videoUrl, defaultValue: d.Im },
        },
    },
    g = { tension: 500, friction: 30, clamp: !0 },
    S = {
        title: "Discord Video Player (Generic)",
        stories: [
            f,
            b,
            m,
            {
                name: "Timeline Indicators (Generic)",
                id: "timeline-indicators-generic",
                component: function (e) {
                    let { orientation: t, autoplay: n, seekForwardRestricted: l, videoUrl: d, indicatorTimeSec: u } = e,
                        c = (function (e) {
                            let [t, n] = a.useState(null),
                                [s, l] = a.useState(null),
                                d = a.useRef(null),
                                [{ expansion: u }, c] = (0, i.zhh)(() => ({
                                    expansion: 0,
                                    config: g,
                                    onRest: () => {
                                        null == d.current && l(null);
                                    },
                                })),
                                p = a.useCallback(
                                    (e) => {
                                        (d.current = e),
                                            null != e ? (l(e), c({ expansion: 4 })) : c({ expansion: 0 }),
                                            n(e);
                                    },
                                    [c],
                                ),
                                _ = a.useMemo(() => [{ index: 0, timeSec: e, widthPx: 32, gapPx: 4 }], [e]),
                                f = a.useCallback(
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
                                                    left: n ? u.to((t) => e.leftPx - t) : e.leftPx,
                                                    top: "50%",
                                                    transform: "translateY(-50%)",
                                                    width: n ? u.to((e) => `${32 + 2 * e}px`) : 32,
                                                    height: n ? u.to((e) => `${32 + 2 * e}px`) : 32,
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
                                    [p, s, u],
                                );
                            return {
                                indicators: _,
                                animatingIndex: s,
                                expansionSpring: u,
                                hoverExpansionPx: 4,
                                renderIndicator: f,
                            };
                        })(u);
                    return (0, r.jsx)("div", {
                        style: {
                            width: "landscape" === t ? "640px" : "360px",
                            height: "landscape" === t ? "360px" : "640px",
                            margin: "0 auto",
                            backgroundColor: "#000",
                        },
                        children: (0, r.jsx)(s.A, {
                            src: d,
                            autoplay: n,
                            orientation: t,
                            seekForwardRestricted: l,
                            parentTransitionState: i.ip4.ENTERED,
                            targetTimeSec: 1 / 0,
                            onOptimisticProgressUpdate: () => {},
                            performanceClockStartTime: 0,
                            timelineIndicatorConfig: c,
                        }),
                    });
                },
                controls: {
                    orientation: _.orientation,
                    autoplay: _.autoplay,
                    seekForwardRestricted: _.seekForwardRestricted,
                    videoUrl: _.videoUrl,
                    indicatorTimeSec: { label: "Indicator Time (sec)", type: "number", defaultValue: 15 },
                },
            },
        ],
    };
