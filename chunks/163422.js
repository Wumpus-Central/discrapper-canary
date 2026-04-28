o.r(t), o.d(t, { videoQuestCollection: () => X, playgroundConfig: () => Z });
var a = o(782134),
    i = o(627968),
    n = o(64700),
    r = o(519244),
    l = o(831544),
    s = o(231723),
    d = o(717421),
    u = o(834730),
    c = o(664111),
    p = o(831056),
    m = o(784018);
let x = "https://cdn.discordapp.com/assets/og_img_discord_home.png";
function g(e) {
    let { orientation: t, thumbnailUrl: o, onReplay: a } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(p.nY, { url: o }),
            (0, i.jsx)(p.KP, {}),
            (0, i.jsxs)(p.zj, {
                orientation: t,
                children: [
                    (0, i.jsx)(p.Kb, { url: o, orientation: t }),
                    (0, i.jsx)(p.lx, {
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
function f(e) {
    let {
            orientation: t,
            autoplay: o,
            maxSeekableTimeSec: a,
            videoUrl: r,
            poster: d,
            showEndScreen: u,
            active: p,
            autoHideVolumeSlider: f,
            numExtraButtons: h,
            sizing: b,
            persistPlayhead: v,
        } = e,
        [y, S] = n.useState(0),
        E = n.useMemo(() => {
            if (null == r || "" === r) return r;
            let e = r.includes("?") ? "&" : "?";
            return 0 === y ? r : `${r}${e}_cb=${y}`;
        }, [r, y]),
        V = n.useMemo(
            () =>
                Array.from({ length: h }, (e, t) => ({
                    id: `extra-button-${t}`,
                    label: `Extra Button ${t + 1}`,
                    iconComponent: l.c,
                    onClick: () => {
                        console.log(`Extra Button ${t + 1} clicked`);
                    },
                })),
            [h],
        );
    return (0, i.jsxs)("div", {
        style: { display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" },
        children: [
            (0, i.jsx)("button", {
                onClick: () => S((e) => e + 1),
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
            (0, i.jsx)("div", {
                style:
                    "video" === b
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
                children: (0, i.jsx)(
                    c.default,
                    {
                        src: E,
                        poster: d,
                        active: p,
                        autoFocus: !p,
                        autoplay: o,
                        extraButtons: V,
                        orientation: t,
                        maxSeekableTimeSec: a > 0 ? a : void 0,
                        autoHideVolumeSlider: f,
                        persistPlayhead: v,
                        parentTransitionState: s.ip.ENTERED,
                        onProgressUpdate: () => {},
                        onEnded: () => {},
                        onError: () => {},
                        transcriptText: r === m.Im ? m.LI : m.pQ,
                        renderEndScreen: u
                            ? (e) => {
                                  let { replay: o } = e;
                                  return (0, i.jsx)(g, { orientation: t, thumbnailUrl: x, onReplay: o });
                              }
                            : void 0,
                    },
                    `${String(p)}-${y}`,
                ),
            }),
        ],
    });
}
let h = {
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
        videoUrl: { label: "Video URL", type: "text", defaultValue: m.kz },
        poster: { label: "Poster URL", type: "text", defaultValue: x },
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
        numExtraButtons: { label: "Extra Buttons", type: "number", defaultValue: 0 },
    },
    b = {
        name: "Landscape",
        id: "landscape-video-generic",
        component: f,
        controls: { ...h, orientation: { ...h.orientation, defaultValue: "landscape" } },
    },
    v = {
        name: "Portrait",
        id: "portrait-video-generic",
        component: f,
        controls: { ...h, orientation: { ...h.orientation, defaultValue: "portrait" } },
    },
    y = {
        name: "HLS",
        id: "hls-video-generic",
        component: f,
        controls: {
            ...h,
            orientation: { ...h.orientation, defaultValue: "landscape" },
            videoUrl: { ...h.videoUrl, defaultValue: m.Im },
        },
    },
    S = { tension: 500, friction: 30, clamp: !0 },
    E = {
        name: "Timeline Indicators",
        id: "timeline-indicators-generic",
        component: function (e) {
            let { orientation: t, autoplay: o, maxSeekableTimeSec: a, videoUrl: l, indicatorTimeSec: p } = e,
                m = (function (e) {
                    let [t, o] = n.useState(null),
                        [a, l] = n.useState(null),
                        s = n.useRef(null),
                        [{ expansion: c }, p] = (0, d.z)(() => ({
                            expansion: 0,
                            config: S,
                            onRest: () => {
                                null == s.current && l(null);
                            },
                        })),
                        m = n.useCallback(
                            (e) => {
                                (s.current = e), null != e ? (l(e), p({ expansion: 4 })) : p({ expansion: 0 }), o(e);
                            },
                            [p],
                        ),
                        x = n.useMemo(() => [{ index: 0, timeSec: e, widthPx: 32, gapPx: 4 }], [e]),
                        g = n.useCallback(
                            (e, t) => {
                                let o = a === e.index;
                                return (0, i.jsx)(
                                    r.animated.div,
                                    {
                                        "data-testid": "timeline-indicator",
                                        onMouseEnter: () => m(e.index),
                                        onMouseLeave: () => m(null),
                                        style: {
                                            position: "absolute",
                                            left: o ? c.to((t) => e.leftPx - t) : e.leftPx,
                                            top: "50%",
                                            transform: "translateY(-50%)",
                                            width: o ? c.to((e) => `${32 + 2 * e}px`) : 32,
                                            height: o ? c.to((e) => `${32 + 2 * e}px`) : 32,
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
                                        children: (0, i.jsx)(u.E, {
                                            variant: "text-xs/semibold",
                                            color: "always-white",
                                            children: "R",
                                        }),
                                    },
                                    `indicator-${e.index}`,
                                );
                            },
                            [m, a, c],
                        );
                    return {
                        indicators: x,
                        animatingIndex: a,
                        expansionSpring: c,
                        hoverExpansionPx: 4,
                        renderIndicator: g,
                    };
                })(p);
            return (0, i.jsx)("div", {
                style: {
                    width: "landscape" === t ? "640px" : "360px",
                    height: "landscape" === t ? "360px" : "640px",
                    margin: "0 auto",
                },
                children: (0, i.jsx)(c.default, {
                    src: l,
                    autoplay: o,
                    orientation: t,
                    maxSeekableTimeSec: a > 0 ? a : void 0,
                    parentTransitionState: s.ip.ENTERED,
                    timelineIndicatorConfig: m,
                }),
            });
        },
        controls: {
            orientation: h.orientation,
            autoplay: h.autoplay,
            maxSeekableTimeSec: h.maxSeekableTimeSec,
            videoUrl: h.videoUrl,
            indicatorTimeSec: { label: "Indicator Time (sec)", type: "number", defaultValue: 15 },
        },
    };
var V = o(405670),
    T = o(441512),
    P = o(412703),
    A = o(440703),
    w = o(267548),
    C = o(668824),
    L = o(507107),
    R = o(73473),
    j = o(55759),
    I = o(795068),
    O = o(654487),
    U = o(652215);
function k(e) {
    let {
        url: t,
        width: o = 640,
        height: a = 360,
        target: i = 60,
        videoTitle: n = "Test Video Quest",
        transcript: r,
    } = e;
    return {
        type: P.n.WATCH_VIDEO,
        target: i,
        assets: { video: { url: t, width: o, height: a, transcript: r } },
        messages: { videoTitle: n },
    };
}
function _() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { streamProgressSeconds: t = 0, completedAt: o = null, enrolledAt: a = null, claimedAt: i = null } = e;
    return {
        userId: "123",
        questId: D,
        enrolledAt: a,
        completedAt: o,
        claimedAt: i,
        claimedTier: null,
        lastStreamHeartbeatAt: null,
        streamProgressSeconds: t,
        dismissedQuestContent: 0,
        progress: {},
    };
}
let D = `playground-video-quest-${Date.now()}`;
function Q(e) {
    return {
        id: D,
        preview: !0,
        config: {
            id: D,
            configVersion: 2,
            startsAt: "2024-01-01T00:00:00+00:00",
            expiresAt: "2030-01-01T00:00:00+00:00",
            application: { id: "123", name: "Video Quest Playground" },
            messages: { questName: "Video Quest Playground", gameTitle: "Test Game", gamePublisher: "Discord" },
            colors: { primary: "#5865F2", secondary: "#3BA55C" },
            rewardsConfig: {
                assignmentMethod: 1,
                rewards: [
                    {
                        skuId: "",
                        type: A.l.VIRTUAL_CURRENCY,
                        orbQuantity: 200,
                        messages: {
                            name: "Test Reward",
                            nameWithArticle: "a Test Reward",
                            redemptionInstructionsByPlatform: {},
                        },
                    },
                ],
                rewardsExpireAt: "2030-01-01T00:00:00+00:00",
                platforms: [L.pY.CROSS_PLATFORM],
            },
            assets: {
                hero: "",
                heroVideo: m.kz,
                questBarHero: "",
                questBarHeroVideo: null,
                questBarHeroBlurhash: null,
                gameTile: "",
                logotype: "",
            },
            taskConfigV2: { joinOperator: C.K.AND, tasks: { [P.n.WATCH_VIDEO]: e } },
            features: [],
            sharePolicy: w.i.SHAREABLE_EVERYWHERE,
            ctaConfig: { link: "https://discord.com/", buttonLabel: "Learn More" },
        },
        userStatus: _({ enrolledAt: new Date().toISOString() }),
        targetedContent: [L.uF.QUEST_HOME_DESKTOP],
    };
}
function z(e) {
    let {
            quest: t,
            isPortrait: o,
            children: a,
            isFullscreenEnabled: r = !1,
            useNewStyling: l = !1,
            setIsFullscreenEnabled: s = U.tEg,
        } = e,
        d = n.useMemo(
            () => ({
                quest: t,
                sourceQuestContent: L.uF.INTERNAL_PREVIEW_TOOL,
                videoSessionId: "playground-session",
                isPortrait: o,
                onClose: U.tEg,
                isFullscreenEnabled: r,
                setIsFullscreenEnabled: s,
                useNewProgressBarStyling: l,
                maxProgressSec: 0,
                targetSec: 0,
            }),
            [t, o, r, s, l],
        ),
        u = n.useMemo(() => ({ questConfig: t.config }), [t.config]);
    return (0, i.jsx)(R.R, {
        questOrQuests: t,
        questContent: L.uF.VIDEO_MODAL,
        sourceQuestContent: L.uF.INTERNAL_PREVIEW_TOOL,
        children: (e, t) =>
            (0, i.jsx)(I.l.Provider, { value: u, children: (0, i.jsx)(I.a.Provider, { value: d, children: a }) }),
    });
}
function F(e) {
    let {
            orientation: t,
            autoplay: o,
            questCompleted: a,
            fullEpisode: r,
            targetTimeSec: l,
            useNewStyling: d,
            videoUrl: u,
        } = e,
        c = "portrait" === t,
        [p, m] = n.useState(!1),
        x = k({
            url: u,
            width: c ? 360 : 640,
            height: c ? 640 : 360,
            target: l,
            videoTitle: c ? "Test Portrait Video" : "Test Landscape Video",
            transcript: "transcript.txt",
        }),
        g = Q(x),
        f = n.useRef(!1);
    f.current || ((f.current = !0), V.Kr.getState().clearState()),
        r && (g.config.features = [O.Li.FULL_EPISODE_VIDEO_QUEST]);
    let h = a
        ? {
              ...g,
              userStatus: _({
                  enrolledAt: g.userStatus?.enrolledAt ?? null,
                  completedAt: g.userStatus?.enrolledAt ?? null,
                  streamProgressSeconds: x.target,
              }),
          }
        : g;
    return (0, i.jsx)("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            width: c ? "400px" : "100%",
            maxWidth: c ? void 0 : "800px",
            height: c ? "700px" : "500px",
            backgroundColor: "#1e1f22",
            borderRadius: "8px",
            overflow: "hidden",
            "--custom-footer-horizontal-padding": "20px",
        },
        children: (0, i.jsx)(z, {
            quest: h,
            isPortrait: c,
            isFullscreenEnabled: p,
            setIsFullscreenEnabled: m,
            useNewStyling: d,
            children: (0, i.jsx)(j.A, {
                targetTimeSec: x.target,
                parentTransitionState: s.ip.ENTERED,
                onOptimisticProgressUpdate: U.tEg,
                autoplay: o,
                autoFocus: !1,
                openedAtMs: 0,
                orientation: t,
                videoUrlOverride: u,
            }),
        }),
    });
}
let M = {
        orientation: {
            label: "Orientation",
            type: "select",
            options: [
                { label: "Landscape", value: "landscape" },
                { label: "Portrait", value: "portrait" },
            ],
            defaultValue: "landscape",
        },
        questCompleted: { label: "Quest Completed", type: "boolean", defaultValue: !1 },
        fullEpisode: { label: "Full Episode (shows reward indicator)", type: "boolean", defaultValue: !1 },
        targetTimeSec: { label: "Target Time (sec)", type: "number", defaultValue: 15 },
        useNewStyling: { label: "Use New Styling", type: "boolean", defaultValue: !0 },
        videoUrl: { label: "Video URL", type: "text", defaultValue: m.kz },
    },
    N = {
        name: "Landscape",
        id: "landscape-video",
        component: F,
        controls: { ...M, orientation: { ...M.orientation, defaultValue: "landscape" } },
    },
    q = {
        name: "Portrait",
        id: "portrait-video",
        component: F,
        controls: { ...M, orientation: { ...M.orientation, defaultValue: "portrait" } },
    },
    B =
        'Quest completion is server-driven. In the playground, crossing the reward indicator won\'t flip to the completed state — toggle "Quest Completed" to preview that UI.',
    H = {
        marginTop: "12px",
        padding: "8px 12px",
        fontSize: "12px",
        lineHeight: 1.4,
        color: "var(--text-muted)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "6px",
    };
function $(e, t) {
    return "video" === e
        ? { width: t ? "360px" : "640px", height: t ? "640px" : "360px", margin: "0 auto" }
        : {
              display: "flex",
              flexDirection: "column",
              width: t ? "400px" : "100%",
              maxWidth: t ? void 0 : "800px",
              height: t ? "700px" : "500px",
              backgroundColor: "#1e1f22",
              borderRadius: "8px",
              overflow: "hidden",
          };
}
function W(e) {
    let {
            orientation: t,
            autoplay: o,
            questCompleted: a,
            fullEpisode: r,
            targetTimeSec: l,
            videoUrl: d,
            sizing: u,
        } = e,
        c = "portrait" === t,
        p = k({
            url: d,
            width: c ? 360 : 640,
            height: c ? 640 : 360,
            target: l,
            videoTitle: c ? "Test Portrait Video" : "Test Landscape Video",
            transcript: "transcript.txt",
        }),
        m = Q(p),
        x = n.useRef(!1);
    x.current || ((x.current = !0), V.Kr.getState().clearState()),
        n.useEffect(() => {
            let e = document.querySelector('[data-testid="discord-web-video-player-video"]');
            if (null == e) return;
            let t = () => {
                e.currentTime = 0;
            };
            if (!(e.readyState >= 1))
                return (
                    e.addEventListener("loadedmetadata", t, { once: !0 }),
                    () => e.removeEventListener("loadedmetadata", t)
                );
            t();
        }, []),
        r && (m.config.features = [O.Li.FULL_EPISODE_VIDEO_QUEST]);
    let g = a
        ? {
              ...m,
              userStatus: _({
                  enrolledAt: m.userStatus?.enrolledAt ?? null,
                  completedAt: m.userStatus?.enrolledAt ?? null,
                  streamProgressSeconds: p.target,
              }),
          }
        : m;
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)("div", {
                style: $(u, c),
                children: (0, i.jsx)(z, {
                    quest: g,
                    isPortrait: c,
                    children: (0, i.jsx)(T.A, {
                        targetTimeSec: p.target,
                        parentTransitionState: s.ip.ENTERED,
                        onOptimisticProgressUpdate: U.tEg,
                        autoplay: o,
                        autoFocus: !1,
                        openedAtMs: 0,
                        orientation: t,
                        videoUrlOverride: d,
                    }),
                }),
            }),
            r && !a && (0, i.jsx)("div", { style: H, children: B }),
        ],
    });
}
let { useNewStyling: K, ...Y } = M,
    G = { label: "Full Episode (shows reward indicator)", type: "boolean", defaultValue: !1 },
    J = {
        label: "Container sizing",
        type: "select",
        options: [
            { label: "Video size (640\xd7360 / 360\xd7640)", value: "video" },
            { label: "Modal context (800\xd7500)", value: "modal" },
        ],
        defaultValue: "modal",
    },
    X = {
        id: "video-quest",
        name: "Video Player",
        groups: [
            { title: "Discord Video Player (Generic)", stories: [b, v, y, E] },
            {
                title: "Composed Quest Player",
                stories: [
                    {
                        name: "Landscape",
                        id: "landscape-video-composed",
                        component: W,
                        controls: {
                            ...Y,
                            orientation: { ...M.orientation, defaultValue: "landscape" },
                            fullEpisode: G,
                            sizing: J,
                        },
                    },
                    {
                        name: "Portrait",
                        id: "portrait-video-composed",
                        component: W,
                        controls: {
                            ...Y,
                            orientation: { ...M.orientation, defaultValue: "portrait" },
                            fullEpisode: G,
                            sizing: J,
                        },
                    },
                    {
                        name: "Landscape — Autoplay",
                        id: "landscape-video-composed-autoplay",
                        component: W,
                        controls: {
                            ...Y,
                            orientation: { ...M.orientation, defaultValue: "landscape" },
                            autoplay: { label: "Autoplay", type: "boolean", defaultValue: !0 },
                            fullEpisode: G,
                            sizing: J,
                        },
                    },
                    {
                        name: "Landscape — Progress Persistence",
                        id: "landscape-video-composed-persistence",
                        component: function (e) {
                            let {
                                    orientation: t,
                                    autoplay: o,
                                    questCompleted: a,
                                    fullEpisode: n,
                                    targetTimeSec: r,
                                    videoUrl: l,
                                    sizing: d,
                                } = e,
                                u = "portrait" === t,
                                c = k({
                                    url: l,
                                    width: u ? 360 : 640,
                                    height: u ? 640 : 360,
                                    target: r,
                                    videoTitle: u ? "Test Portrait Video" : "Test Landscape Video",
                                    transcript: "transcript.txt",
                                }),
                                p = Q(c);
                            n && (p.config.features = [O.Li.FULL_EPISODE_VIDEO_QUEST]);
                            let m = a
                                ? {
                                      ...p,
                                      userStatus: _({
                                          enrolledAt: p.userStatus?.enrolledAt ?? null,
                                          completedAt: p.userStatus?.enrolledAt ?? null,
                                          streamProgressSeconds: c.target,
                                      }),
                                  }
                                : p;
                            return (0, i.jsxs)("div", {
                                children: [
                                    (0, i.jsx)("div", {
                                        style: $(d, !1),
                                        children: (0, i.jsx)(z, {
                                            quest: m,
                                            isPortrait: !1,
                                            children: (0, i.jsx)(T.A, {
                                                targetTimeSec: c.target,
                                                parentTransitionState: s.ip.ENTERED,
                                                onOptimisticProgressUpdate: U.tEg,
                                                autoplay: o,
                                                autoFocus: !1,
                                                openedAtMs: 0,
                                                orientation: t,
                                                videoUrlOverride: l,
                                            }),
                                        }),
                                    }),
                                    n && !a && (0, i.jsx)("div", { style: H, children: B }),
                                ],
                            });
                        },
                        controls: {
                            ...Y,
                            orientation: { ...M.orientation, defaultValue: "landscape" },
                            fullEpisode: G,
                            sizing: J,
                        },
                    },
                ],
            },
            { title: "Legacy Quest Player", stories: [N, q] },
        ],
        tags: ["Video Player", "Quests"],
        IconComponent: a.u,
    },
    Z = { playgroundBaseUrl: "video-quest", collections: [X] };
