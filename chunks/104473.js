a.d(t, { AZ: () => y });
var n = a(627968),
    o = a(64700),
    r = a(419354),
    i = a(231723),
    l = a(717421),
    s = a(834730),
    d = a(664111),
    c = a(831056),
    u = a(784018);
let p = "https://cdn.discordapp.com/assets/og_img_discord_home.png";
function b(e) {
    let { orientation: t, thumbnailUrl: a, onReplay: o } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(c.nY, { url: a }),
            (0, n.jsx)(c.KP, {}),
            (0, n.jsxs)(c.zj, {
                orientation: t,
                children: [
                    (0, n.jsx)(c.Kb, { url: a, orientation: t }),
                    (0, n.jsx)(c.lx, {
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
function m(e) {
    let {
            orientation: t,
            autoplay: a,
            maxSeekableTimeSec: r,
            videoUrl: l,
            poster: s,
            showEndScreen: c,
            active: m,
            autoHideVolumeSlider: _,
            sizing: g,
            persistPlayhead: h,
        } = e,
        [v, x] = o.useState(0),
        y = o.useMemo(() => {
            if (null == l || "" === l) return l;
            let e = l.includes("?") ? "&" : "?";
            return 0 === v ? l : `${l}${e}_cb=${v}`;
        }, [l, v]);
    return (0, n.jsxs)("div", {
        style: { display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" },
        children: [
            (0, n.jsx)("button", {
                onClick: () => x((e) => e + 1),
                style: {
                    padding: "6px 14px",
                    cursor: "pointer",
                    fontSize: "13px",
                    borderRadius: "4px",
                    border: "1px solid #555",
                    background: "#2b2d31",
                    color: "#dbdee1",
                },
                children: "Clear Cache & Reload",
            }),
            (0, n.jsx)("div", {
                style:
                    "video" === g
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
                    d.default,
                    {
                        src: y,
                        poster: s,
                        active: m,
                        autoFocus: !m,
                        autoplay: a,
                        orientation: t,
                        maxSeekableTimeSec: r > 0 ? r : void 0,
                        autoHideVolumeSlider: _,
                        persistPlayhead: h,
                        parentTransitionState: i.ip.ENTERED,
                        onProgressUpdate: () => {},
                        onEnded: () => {},
                        onError: () => {},
                        transcriptText: l === u.Im ? u.LI : u.pQ,
                        renderEndScreen: c
                            ? (e) => {
                                  let { replay: a } = e;
                                  return (0, n.jsx)(b, { orientation: t, thumbnailUrl: p, onReplay: a });
                              }
                            : void 0,
                    },
                    `${String(m)}-${v}`,
                ),
            }),
        ],
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
        maxSeekableTimeSec: { label: "Max Seekable Time (sec, 0 = unrestricted)", type: "number", defaultValue: 0 },
        videoUrl: { label: "Video URL", type: "text", defaultValue: u.kz },
        poster: { label: "Poster URL", type: "text", defaultValue: p },
        showEndScreen: { label: "Show End Screen", type: "boolean", defaultValue: !0 },
        active: { label: "Active", type: "boolean", defaultValue: !0 },
        autoHideVolumeSlider: { label: "Auto-hide Volume Slider", type: "boolean", defaultValue: !1 },
        persistPlayhead: { label: "Persist Playhead", type: "boolean", defaultValue: !0 },
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
    g = {
        name: "Landscape",
        id: "landscape-video-generic",
        component: m,
        controls: { ..._, orientation: { ..._.orientation, defaultValue: "landscape" } },
    },
    h = {
        name: "Portrait",
        id: "portrait-video-generic",
        component: m,
        controls: { ..._, orientation: { ..._.orientation, defaultValue: "portrait" } },
    },
    v = {
        name: "HLS",
        id: "hls-video-generic",
        component: m,
        controls: {
            ..._,
            orientation: { ..._.orientation, defaultValue: "landscape" },
            videoUrl: { ..._.videoUrl, defaultValue: u.Im },
        },
    },
    x = { tension: 500, friction: 30, clamp: !0 },
    y = {
        title: "Discord Video Player (Generic)",
        stories: [
            g,
            h,
            v,
            {
                name: "Timeline Indicators",
                id: "timeline-indicators-generic",
                component: function (e) {
                    let { orientation: t, autoplay: a, maxSeekableTimeSec: c, videoUrl: u, indicatorTimeSec: p } = e,
                        b = (function (e) {
                            let [t, a] = o.useState(null),
                                [i, d] = o.useState(null),
                                c = o.useRef(null),
                                [{ expansion: u }, p] = (0, l.z)(() => ({
                                    expansion: 0,
                                    config: x,
                                    onRest: () => {
                                        null == c.current && d(null);
                                    },
                                })),
                                b = o.useCallback(
                                    (e) => {
                                        (c.current = e),
                                            null != e ? (d(e), p({ expansion: 4 })) : p({ expansion: 0 }),
                                            a(e);
                                    },
                                    [p],
                                ),
                                m = o.useMemo(() => [{ index: 0, timeSec: e, widthPx: 32, gapPx: 4 }], [e]),
                                _ = o.useCallback(
                                    (e, t) => {
                                        let a = i === e.index;
                                        return (0, n.jsx)(
                                            r.animated.div,
                                            {
                                                "data-testid": "timeline-indicator",
                                                onMouseEnter: () => b(e.index),
                                                onMouseLeave: () => b(null),
                                                style: {
                                                    position: "absolute",
                                                    left: a ? u.to((t) => e.leftPx - t) : e.leftPx,
                                                    top: "50%",
                                                    transform: "translateY(-50%)",
                                                    width: a ? u.to((e) => `${32 + 2 * e}px`) : 32,
                                                    height: a ? u.to((e) => `${32 + 2 * e}px`) : 32,
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
                                                children: (0, n.jsx)(s.E, {
                                                    variant: "text-xs/semibold",
                                                    color: "always-white",
                                                    children: "R",
                                                }),
                                            },
                                            `indicator-${e.index}`,
                                        );
                                    },
                                    [b, i, u],
                                );
                            return {
                                indicators: m,
                                animatingIndex: i,
                                expansionSpring: u,
                                hoverExpansionPx: 4,
                                renderIndicator: _,
                            };
                        })(p);
                    return (0, n.jsx)("div", {
                        style: {
                            width: "landscape" === t ? "640px" : "360px",
                            height: "landscape" === t ? "360px" : "640px",
                            margin: "0 auto",
                        },
                        children: (0, n.jsx)(d.default, {
                            src: u,
                            autoplay: a,
                            orientation: t,
                            maxSeekableTimeSec: c > 0 ? c : void 0,
                            parentTransitionState: i.ip.ENTERED,
                            timelineIndicatorConfig: b,
                        }),
                    });
                },
                controls: {
                    orientation: _.orientation,
                    autoplay: _.autoplay,
                    maxSeekableTimeSec: _.maxSeekableTimeSec,
                    videoUrl: _.videoUrl,
                    indicatorTimeSec: { label: "Indicator Time (sec)", type: "number", defaultValue: 15 },
                },
            },
        ],
    };
