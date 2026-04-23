a.r(t), a.d(t, { videoQuestCollection: () => K, playgroundConfig: () => Z });
var n = a(782134),
    o = a(627968),
    r = a(64700),
    i = a(419354),
    l = a(231723),
    s = a(717421),
    d = a(834730),
    c = a(664111),
    u = a(831056),
    p = a(784018);
let b = "https://cdn.discordapp.com/assets/og_img_discord_home.png";
function m(e) {
    let { orientation: t, thumbnailUrl: a, onReplay: n } = e;
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsx)(u.nY, { url: a }),
            (0, o.jsx)(u.KP, {}),
            (0, o.jsxs)(u.zj, {
                orientation: t,
                children: [
                    (0, o.jsx)(u.Kb, { url: a, orientation: t }),
                    (0, o.jsx)(u.lx, {
                        title: "Watch Again",
                        subtitle: "Replay this video",
                        ctaBtnLabel: "Replay",
                        onCTAClick: n,
                        orientation: t,
                    }),
                ],
            }),
        ],
    });
}
function _(e) {
    let {
            orientation: t,
            autoplay: a,
            maxSeekableTimeSec: n,
            videoUrl: i,
            poster: s,
            showEndScreen: d,
            active: u,
            autoHideVolumeSlider: _,
            sizing: g,
            persistPlayhead: h,
        } = e,
        [x, v] = r.useState(0),
        f = r.useMemo(() => {
            if (null == i || "" === i) return i;
            let e = i.includes("?") ? "&" : "?";
            return 0 === x ? i : `${i}${e}_cb=${x}`;
        }, [i, x]);
    return (0, o.jsxs)("div", {
        style: { display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" },
        children: [
            (0, o.jsx)("button", {
                onClick: () => v((e) => e + 1),
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
            (0, o.jsx)("div", {
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
                children: (0, o.jsx)(
                    c.default,
                    {
                        src: f,
                        poster: s,
                        active: u,
                        autoFocus: !u,
                        autoplay: a,
                        orientation: t,
                        maxSeekableTimeSec: n > 0 ? n : void 0,
                        autoHideVolumeSlider: _,
                        persistPlayhead: h,
                        parentTransitionState: l.ip.ENTERED,
                        onProgressUpdate: () => {},
                        onEnded: () => {},
                        onError: () => {},
                        transcriptText: i === p.Im ? p.LI : p.pQ,
                        renderEndScreen: d
                            ? (e) => {
                                  let { replay: a } = e;
                                  return (0, o.jsx)(m, { orientation: t, thumbnailUrl: b, onReplay: a });
                              }
                            : void 0,
                    },
                    `${String(u)}-${x}`,
                ),
            }),
        ],
    });
}
let g = {
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
        videoUrl: { label: "Video URL", type: "text", defaultValue: p.kz },
        poster: { label: "Poster URL", type: "text", defaultValue: b },
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
    h = {
        name: "Landscape",
        id: "landscape-video-generic",
        component: _,
        controls: { ...g, orientation: { ...g.orientation, defaultValue: "landscape" } },
    },
    x = {
        name: "Portrait",
        id: "portrait-video-generic",
        component: _,
        controls: { ...g, orientation: { ...g.orientation, defaultValue: "portrait" } },
    },
    v = {
        name: "HLS",
        id: "hls-video-generic",
        component: _,
        controls: {
            ...g,
            orientation: { ...g.orientation, defaultValue: "landscape" },
            videoUrl: { ...g.videoUrl, defaultValue: p.Im },
        },
    },
    f = { tension: 500, friction: 30, clamp: !0 },
    y = {
        name: "Timeline Indicators",
        id: "timeline-indicators-generic",
        component: function (e) {
            let { orientation: t, autoplay: a, maxSeekableTimeSec: n, videoUrl: u, indicatorTimeSec: p } = e,
                b = (function (e) {
                    let [t, a] = r.useState(null),
                        [n, l] = r.useState(null),
                        c = r.useRef(null),
                        [{ expansion: u }, p] = (0, s.z)(() => ({
                            expansion: 0,
                            config: f,
                            onRest: () => {
                                null == c.current && l(null);
                            },
                        })),
                        b = r.useCallback(
                            (e) => {
                                (c.current = e), null != e ? (l(e), p({ expansion: 4 })) : p({ expansion: 0 }), a(e);
                            },
                            [p],
                        ),
                        m = r.useMemo(() => [{ index: 0, timeSec: e, widthPx: 32, gapPx: 4 }], [e]),
                        _ = r.useCallback(
                            (e, t) => {
                                let a = n === e.index;
                                return (0, o.jsx)(
                                    i.animated.div,
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
                                        children: (0, o.jsx)(d.E, {
                                            variant: "text-xs/semibold",
                                            color: "always-white",
                                            children: "R",
                                        }),
                                    },
                                    `indicator-${e.index}`,
                                );
                            },
                            [b, n, u],
                        );
                    return {
                        indicators: m,
                        animatingIndex: n,
                        expansionSpring: u,
                        hoverExpansionPx: 4,
                        renderIndicator: _,
                    };
                })(p);
            return (0, o.jsx)("div", {
                style: {
                    width: "landscape" === t ? "640px" : "360px",
                    height: "landscape" === t ? "360px" : "640px",
                    margin: "0 auto",
                },
                children: (0, o.jsx)(c.default, {
                    src: u,
                    autoplay: a,
                    orientation: t,
                    maxSeekableTimeSec: n > 0 ? n : void 0,
                    parentTransitionState: l.ip.ENTERED,
                    timelineIndicatorConfig: b,
                }),
            });
        },
        controls: {
            orientation: g.orientation,
            autoplay: g.autoplay,
            maxSeekableTimeSec: g.maxSeekableTimeSec,
            videoUrl: g.videoUrl,
            indicatorTimeSec: { label: "Indicator Time (sec)", type: "number", defaultValue: 15 },
        },
    };
var S = a(405670),
    C = a(441512),
    T = a(412703),
    P = a(440703),
    E = a(267548),
    V = a(668824),
    I = a(507107),
    w = a(73473),
    R = a(55759),
    A = a(795068),
    L = a(654487),
    k = a(652215);
function O(e) {
    let {
        url: t,
        width: a = 640,
        height: n = 360,
        target: o = 60,
        videoTitle: r = "Test Video Quest",
        transcript: i,
    } = e;
    return {
        type: T.n.WATCH_VIDEO,
        target: o,
        assets: { video: { url: t, width: a, height: n, transcript: i } },
        messages: { videoTitle: r },
    };
}
function j() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { streamProgressSeconds: t = 0, completedAt: a = null, enrolledAt: n = null, claimedAt: o = null } = e;
    return {
        userId: "123",
        questId: M,
        enrolledAt: n,
        completedAt: a,
        claimedAt: o,
        claimedTier: null,
        lastStreamHeartbeatAt: null,
        streamProgressSeconds: t,
        dismissedQuestContent: 0,
        progress: {},
    };
}
let M = `playground-video-quest-${Date.now()}`;
function B(e) {
    return {
        id: M,
        preview: !0,
        config: {
            id: M,
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
                        type: P.l.VIRTUAL_CURRENCY,
                        orbQuantity: 200,
                        messages: {
                            name: "Test Reward",
                            nameWithArticle: "a Test Reward",
                            redemptionInstructionsByPlatform: {},
                        },
                    },
                ],
                rewardsExpireAt: "2030-01-01T00:00:00+00:00",
                platforms: [I.pY.CROSS_PLATFORM],
            },
            assets: {
                hero: "",
                heroVideo: p.kz,
                questBarHero: "",
                questBarHeroVideo: null,
                questBarHeroBlurhash: null,
                gameTile: "",
                logotype: "",
            },
            taskConfigV2: { joinOperator: V.K.AND, tasks: { [T.n.WATCH_VIDEO]: e } },
            features: [],
            sharePolicy: E.i.SHAREABLE_EVERYWHERE,
            ctaConfig: { link: "https://discord.com/", buttonLabel: "Learn More" },
        },
        userStatus: j({ enrolledAt: new Date().toISOString() }),
        targetedContent: [I.uF.QUEST_HOME_DESKTOP],
    };
}
function D(e) {
    let {
            quest: t,
            isPortrait: a,
            children: n,
            isFullscreenEnabled: i = !1,
            useNewStyling: l = !1,
            setIsFullscreenEnabled: s = k.tEg,
        } = e,
        d = r.useMemo(
            () => ({
                quest: t,
                sourceQuestContent: I.uF.INTERNAL_PREVIEW_TOOL,
                videoSessionId: "playground-session",
                isPortrait: a,
                onClose: k.tEg,
                isFullscreenEnabled: i,
                setIsFullscreenEnabled: s,
                useNewProgressBarStyling: l,
                progressSec: 0,
                targetSec: 0,
            }),
            [t, a, i, s, l],
        ),
        c = r.useMemo(() => ({ questConfig: t.config }), [t.config]);
    return (0, o.jsx)(w.R, {
        questOrQuests: t,
        questContent: I.uF.VIDEO_MODAL,
        sourceQuestContent: I.uF.INTERNAL_PREVIEW_TOOL,
        children: (e, t) =>
            (0, o.jsx)(A.l.Provider, { value: c, children: (0, o.jsx)(A.a.Provider, { value: d, children: n }) }),
    });
}
function U(e) {
    let {
            orientation: t,
            autoplay: a,
            questCompleted: n,
            fullEpisode: i,
            targetTimeSec: s,
            useNewStyling: d,
            videoUrl: c,
        } = e,
        u = "portrait" === t,
        [p, b] = r.useState(!1),
        m = O({
            url: c,
            width: u ? 360 : 640,
            height: u ? 640 : 360,
            target: s,
            videoTitle: u ? "Test Portrait Video" : "Test Landscape Video",
            transcript: "transcript.txt",
        }),
        _ = B(m),
        g = r.useRef(!1);
    g.current || ((g.current = !0), S.Kr.getState().clearState()),
        i && (_.config.features = [L.Li.FULL_EPISODE_VIDEO_QUEST]);
    let h = n
        ? {
              ..._,
              userStatus: j({
                  enrolledAt: _.userStatus?.enrolledAt ?? null,
                  completedAt: _.userStatus?.enrolledAt ?? null,
                  streamProgressSeconds: m.target,
              }),
          }
        : _;
    return (0, o.jsx)("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            width: u ? "400px" : "100%",
            maxWidth: u ? void 0 : "800px",
            height: u ? "700px" : "500px",
            backgroundColor: "#1e1f22",
            borderRadius: "8px",
            overflow: "hidden",
            "--custom-footer-horizontal-padding": "20px",
        },
        children: (0, o.jsx)(D, {
            quest: h,
            isPortrait: u,
            isFullscreenEnabled: p,
            setIsFullscreenEnabled: b,
            useNewStyling: d,
            children: (0, o.jsx)(R.A, {
                targetTimeSec: m.target,
                parentTransitionState: l.ip.ENTERED,
                onOptimisticProgressUpdate: k.tEg,
                autoplay: a,
                autoFocus: !1,
                openedAtMs: 0,
                orientation: t,
                videoUrlOverride: c,
            }),
        }),
    });
}
let F = {
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
        videoUrl: { label: "Video URL", type: "text", defaultValue: p.kz },
    },
    z = {
        name: "Landscape",
        id: "landscape-video",
        component: U,
        controls: { ...F, orientation: { ...F.orientation, defaultValue: "landscape" } },
    },
    H = {
        name: "Portrait",
        id: "portrait-video",
        component: U,
        controls: { ...F, orientation: { ...F.orientation, defaultValue: "portrait" } },
    };
function N(e, t) {
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
            autoplay: a,
            questCompleted: n,
            fullEpisode: i,
            targetTimeSec: s,
            videoUrl: d,
            sizing: c,
        } = e,
        u = "portrait" === t,
        p = O({
            url: d,
            width: u ? 360 : 640,
            height: u ? 640 : 360,
            target: s,
            videoTitle: u ? "Test Portrait Video" : "Test Landscape Video",
            transcript: "transcript.txt",
        }),
        b = B(p),
        m = r.useRef(!1);
    m.current || ((m.current = !0), S.Kr.getState().clearState()),
        r.useEffect(() => {
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
        i && (b.config.features = [L.Li.FULL_EPISODE_VIDEO_QUEST]);
    let _ = n
        ? {
              ...b,
              userStatus: j({
                  enrolledAt: b.userStatus?.enrolledAt ?? null,
                  completedAt: b.userStatus?.enrolledAt ?? null,
                  streamProgressSeconds: p.target,
              }),
          }
        : b;
    return (0, o.jsx)("div", {
        style: N(c, u),
        children: (0, o.jsx)(D, {
            quest: _,
            isPortrait: u,
            children: (0, o.jsx)(C.A, {
                targetTimeSec: p.target,
                parentTransitionState: l.ip.ENTERED,
                onOptimisticProgressUpdate: k.tEg,
                autoplay: a,
                autoFocus: !1,
                openedAtMs: 0,
                orientation: t,
                videoUrlOverride: d,
            }),
        }),
    });
}
let { useNewStyling: q, ...Q } = F,
    G = { label: "Full Episode (shows reward indicator)", type: "boolean", defaultValue: !1 },
    $ = {
        label: "Container sizing",
        type: "select",
        options: [
            { label: "Video size (640\xd7360 / 360\xd7640)", value: "video" },
            { label: "Modal context (800\xd7500)", value: "modal" },
        ],
        defaultValue: "modal",
    },
    K = {
        id: "video-quest",
        name: "Video Player",
        groups: [
            { title: "Discord Video Player (Generic)", stories: [h, x, v, y] },
            {
                title: "Composed Quest Player",
                stories: [
                    {
                        name: "Landscape",
                        id: "landscape-video-composed",
                        component: W,
                        controls: {
                            ...Q,
                            orientation: { ...F.orientation, defaultValue: "landscape" },
                            fullEpisode: G,
                            sizing: $,
                        },
                    },
                    {
                        name: "Portrait",
                        id: "portrait-video-composed",
                        component: W,
                        controls: {
                            ...Q,
                            orientation: { ...F.orientation, defaultValue: "portrait" },
                            fullEpisode: G,
                            sizing: $,
                        },
                    },
                    {
                        name: "Landscape — Autoplay",
                        id: "landscape-video-composed-autoplay",
                        component: W,
                        controls: {
                            ...Q,
                            orientation: { ...F.orientation, defaultValue: "landscape" },
                            autoplay: { label: "Autoplay", type: "boolean", defaultValue: !0 },
                            fullEpisode: G,
                            sizing: $,
                        },
                    },
                    {
                        name: "Landscape — Progress Persistence",
                        id: "landscape-video-composed-persistence",
                        component: function (e) {
                            let {
                                    orientation: t,
                                    autoplay: a,
                                    questCompleted: n,
                                    fullEpisode: r,
                                    targetTimeSec: i,
                                    videoUrl: s,
                                    sizing: d,
                                } = e,
                                c = "portrait" === t,
                                u = O({
                                    url: s,
                                    width: c ? 360 : 640,
                                    height: c ? 640 : 360,
                                    target: i,
                                    videoTitle: c ? "Test Portrait Video" : "Test Landscape Video",
                                    transcript: "transcript.txt",
                                }),
                                p = B(u);
                            r && (p.config.features = [L.Li.FULL_EPISODE_VIDEO_QUEST]);
                            let b = n
                                ? {
                                      ...p,
                                      userStatus: j({
                                          enrolledAt: p.userStatus?.enrolledAt ?? null,
                                          completedAt: p.userStatus?.enrolledAt ?? null,
                                          streamProgressSeconds: u.target,
                                      }),
                                  }
                                : p;
                            return (0, o.jsx)("div", {
                                style: N(d, !1),
                                children: (0, o.jsx)(D, {
                                    quest: b,
                                    isPortrait: !1,
                                    children: (0, o.jsx)(C.A, {
                                        targetTimeSec: u.target,
                                        parentTransitionState: l.ip.ENTERED,
                                        onOptimisticProgressUpdate: k.tEg,
                                        autoplay: a,
                                        autoFocus: !1,
                                        openedAtMs: 0,
                                        orientation: t,
                                        videoUrlOverride: s,
                                    }),
                                }),
                            });
                        },
                        controls: {
                            ...Q,
                            orientation: { ...F.orientation, defaultValue: "landscape" },
                            fullEpisode: G,
                            sizing: $,
                        },
                    },
                ],
            },
            { title: "Legacy Quest Player", stories: [z, H] },
        ],
        tags: ["Video Player", "Quests"],
        IconComponent: n.u,
    },
    Z = { playgroundBaseUrl: "video-quest", collections: [K] };
