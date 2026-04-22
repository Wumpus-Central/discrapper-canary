a.d(t, { AZ: () => x });
var n = a(627968),
    r = a(64700),
    i = a(517738),
    l = a(231723),
    o = a(717421),
    s = a(834730),
    d = a(664111),
    c = a(831056),
    u = a(784018);
let p = "https://cdn.discordapp.com/assets/og_img_discord_home.png";
function m(e) {
    let { orientation: t, thumbnailUrl: a, onReplay: r } = e;
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
                        onCTAClick: r,
                        orientation: t,
                    }),
                ],
            }),
        ],
    });
}
function h(e) {
    let {
            orientation: t,
            autoplay: a,
            maxSeekableTimeSec: i,
            videoUrl: o,
            poster: s,
            showEndScreen: c,
            active: h,
            autoHideVolumeSlider: v,
            sizing: _,
            persistPlayhead: g,
        } = e,
        [f, b] = r.useState(0),
        x = r.useMemo(() => {
            if (null == o || "" === o) return o;
            let e = o.includes("?") ? "&" : "?";
            return 0 === f ? o : `${o}${e}_cb=${f}`;
        }, [o, f]);
    return (0, n.jsxs)("div", {
        style: { display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" },
        children: [
            (0, n.jsx)("button", {
                onClick: () => b((e) => e + 1),
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
                    d.default,
                    {
                        src: x,
                        poster: s,
                        active: h,
                        autoFocus: !h,
                        autoplay: a,
                        orientation: t,
                        maxSeekableTimeSec: i > 0 ? i : void 0,
                        autoHideVolumeSlider: v,
                        persistPlayhead: g,
                        parentTransitionState: l.ip.ENTERED,
                        onProgressUpdate: () => {},
                        onEnded: () => {},
                        onError: () => {},
                        transcriptText: o === u.Im ? u.LI : u.pQ,
                        renderEndScreen: c
                            ? (e) => {
                                  let { replay: a } = e;
                                  return (0, n.jsx)(m, { orientation: t, thumbnailUrl: p, onReplay: a });
                              }
                            : void 0,
                    },
                    `${String(h)}-${f}`,
                ),
            }),
        ],
    });
}
let v = {
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
    _ = {
        name: "Landscape",
        id: "landscape-video-generic",
        component: h,
        controls: { ...v, orientation: { ...v.orientation, defaultValue: "landscape" } },
    },
    g = {
        name: "Portrait",
        id: "portrait-video-generic",
        component: h,
        controls: { ...v, orientation: { ...v.orientation, defaultValue: "portrait" } },
    },
    f = {
        name: "HLS",
        id: "hls-video-generic",
        component: h,
        controls: {
            ...v,
            orientation: { ...v.orientation, defaultValue: "landscape" },
            videoUrl: { ...v.videoUrl, defaultValue: u.Im },
        },
    },
    b = { tension: 500, friction: 30, clamp: !0 },
    x = {
        title: "Discord Video Player (Generic)",
        stories: [
            _,
            g,
            f,
            {
                name: "Timeline Indicators",
                id: "timeline-indicators-generic",
                component: function (e) {
                    let { orientation: t, autoplay: a, maxSeekableTimeSec: c, videoUrl: u, indicatorTimeSec: p } = e,
                        m = (function (e) {
                            let [t, a] = r.useState(null),
                                [l, d] = r.useState(null),
                                c = r.useRef(null),
                                [{ expansion: u }, p] = (0, o.z)(() => ({
                                    expansion: 0,
                                    config: b,
                                    onRest: () => {
                                        null == c.current && d(null);
                                    },
                                })),
                                m = r.useCallback(
                                    (e) => {
                                        (c.current = e),
                                            null != e ? (d(e), p({ expansion: 4 })) : p({ expansion: 0 }),
                                            a(e);
                                    },
                                    [p],
                                ),
                                h = r.useMemo(() => [{ index: 0, timeSec: e, widthPx: 32, gapPx: 4 }], [e]),
                                v = r.useCallback(
                                    (e, t) => {
                                        let a = l === e.index;
                                        return (0, n.jsx)(
                                            i.animated.div,
                                            {
                                                "data-testid": "timeline-indicator",
                                                onMouseEnter: () => m(e.index),
                                                onMouseLeave: () => m(null),
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
                                    [m, l, u],
                                );
                            return {
                                indicators: h,
                                animatingIndex: l,
                                expansionSpring: u,
                                hoverExpansionPx: 4,
                                renderIndicator: v,
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
                            parentTransitionState: l.ip.ENTERED,
                            timelineIndicatorConfig: m,
                        }),
                    });
                },
                controls: {
                    orientation: v.orientation,
                    autoplay: v.autoplay,
                    maxSeekableTimeSec: v.maxSeekableTimeSec,
                    videoUrl: v.videoUrl,
                    indicatorTimeSec: { label: "Indicator Time (sec)", type: "number", defaultValue: 15 },
                },
            },
        ],
    };
