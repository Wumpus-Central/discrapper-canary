a.r(t), a.d(t, { videoQuestCollection: () => ee, playgroundConfig: () => et });
var o = a(782134),
    l = a(627968),
    i = a(64700),
    n = a(373863),
    r = a(784018);
let s = {
    name: "Clips Player",
    id: "clips-player",
    component: function (e) {
        let {
                videoUrl: t,
                posterUrl: a,
                minWidth: o,
                maxWidth: r,
                maxHeight: s,
                active: d,
                autoPlay: u,
                autoMute: p,
                allowFullScreen: c,
                embed: m,
                fillContainer: x,
                showTextContent: g,
                showParticipants: h,
            } = e,
            f = i.useMemo(
                () => ({
                    id: "playground-clip",
                    url: t,
                    proxy_url: t,
                    filename: "playground-clip.mp4",
                    size: 0,
                    width: 1920,
                    height: 1080,
                    content_type: "video/mp4",
                    title: "Playground Clip",
                    clip_created_at: new Date().toISOString(),
                }),
                [t],
            );
        return (0, l.jsx)("div", {
            style: x ? { width: "100%", height: "500px" } : { display: "flex", justifyContent: "center" },
            children: (0, l.jsx)(n.A, {
                attachment: f,
                src: t,
                posterUrl: a,
                active: d,
                autoPlay: u,
                autoMute: p,
                allowFullScreen: c,
                embed: m,
                fillContainer: x,
                minWidth: o,
                maxWidth: 0 === r ? void 0 : r,
                maxHeight: 0 === s ? void 0 : s,
                showTextContent: g,
                showParticipants: h,
            }),
        });
    },
    controls: {
        videoUrl: { label: "Video URL", type: "text", defaultValue: r.kz },
        posterUrl: {
            label: "Poster URL",
            type: "text",
            defaultValue: "https://cdn.discordapp.com/assets/og_img_discord_home.png",
        },
        minWidth: { label: "Min Width (px)", type: "number", defaultValue: 500 },
        maxWidth: { label: "Max Width (px, 0 = unrestricted)", type: "number", defaultValue: 800 },
        maxHeight: { label: "Max Height (px, 0 = unrestricted)", type: "number", defaultValue: 500 },
        active: { label: "Active", type: "boolean", defaultValue: !0 },
        autoPlay: { label: "Autoplay", type: "boolean", defaultValue: !1 },
        autoMute: { label: "Auto-mute", type: "boolean", defaultValue: !1 },
        allowFullScreen: { label: "Allow Fullscreen", type: "boolean", defaultValue: !0 },
        embed: { label: "Embed mode", type: "boolean", defaultValue: !1 },
        fillContainer: { label: "Fill Container", type: "boolean", defaultValue: !1 },
        showTextContent: { label: "Show Text Content", type: "boolean", defaultValue: !0 },
        showParticipants: { label: "Show Participants", type: "boolean", defaultValue: !0 },
    },
};
var d = a(873174),
    u = a(831544),
    p = a(231723),
    c = a(717421),
    m = a(834730),
    x = a(664111),
    g = a(831056);
let h = "https://cdn.discordapp.com/assets/og_img_discord_home.png";
function f(e) {
    let { orientation: t, thumbnailUrl: a, onReplay: o } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(g.nY, { url: a }),
            (0, l.jsx)(g.KP, {}),
            (0, l.jsxs)(g.zj, {
                orientation: t,
                children: [
                    (0, l.jsx)(g.Kb, { url: a, orientation: t }),
                    (0, l.jsx)(g.lx, {
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
function b(e) {
    let {
            orientation: t,
            autoplay: a,
            maxSeekableTimeSec: o,
            videoUrl: n,
            poster: s,
            showEndScreen: d,
            active: c,
            autoHideVolumeSlider: m,
            numExtraButtons: g,
            sizing: b,
            persistPlayhead: y,
            hideFullScreenBtn: v,
        } = e,
        [S, V] = i.useState(0),
        E = i.useMemo(() => {
            if (null == n || "" === n) return n;
            let e = n.includes("?") ? "&" : "?";
            return 0 === S ? n : `${n}${e}_cb=${S}`;
        }, [n, S]),
        T = i.useMemo(
            () =>
                Array.from({ length: g }, (e, t) => ({
                    id: `extra-button-${t}`,
                    label: `Extra Button ${t + 1}`,
                    iconComponent: u.c,
                    onClick: () => {
                        console.log(`Extra Button ${t + 1} clicked`);
                    },
                })),
            [g],
        );
    return (0, l.jsxs)("div", {
        style: { display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" },
        children: [
            (0, l.jsx)("button", {
                onClick: () => V((e) => e + 1),
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
            (0, l.jsx)("div", {
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
                children: (0, l.jsx)(
                    x.default,
                    {
                        src: E,
                        poster: s,
                        active: c,
                        autoFocus: !c,
                        autoplay: a,
                        extraButtons: T,
                        hideFullScreenBtn: v,
                        orientation: t,
                        maxSeekableTimeSec: o > 0 ? o : void 0,
                        autoHideVolumeSlider: m,
                        persistPlayhead: y,
                        parentTransitionState: p.ip.ENTERED,
                        onProgressUpdate: () => {},
                        onEnded: () => {},
                        onError: () => {},
                        transcriptText: n === r.Im ? r.LI : r.pQ,
                        renderEndScreen: d
                            ? (e) => {
                                  let { replay: a } = e;
                                  return (0, l.jsx)(f, { orientation: t, thumbnailUrl: h, onReplay: a });
                              }
                            : void 0,
                    },
                    `${String(c)}-${S}`,
                ),
            }),
        ],
    });
}
let y = {
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
        videoUrl: { label: "Video URL", type: "text", defaultValue: r.kz },
        poster: { label: "Poster URL", type: "text", defaultValue: h },
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
        hideFullScreenBtn: { label: "Hide Fullscreen Button", type: "boolean", defaultValue: !1 },
    },
    v = {
        name: "Landscape",
        id: "landscape-video-generic",
        component: b,
        controls: { ...y, orientation: { ...y.orientation, defaultValue: "landscape" } },
    },
    S = {
        name: "Portrait",
        id: "portrait-video-generic",
        component: b,
        controls: { ...y, orientation: { ...y.orientation, defaultValue: "portrait" } },
    },
    V = {
        name: "HLS",
        id: "hls-video-generic",
        component: b,
        controls: {
            ...y,
            orientation: { ...y.orientation, defaultValue: "landscape" },
            videoUrl: { ...y.videoUrl, defaultValue: r.Im },
        },
    },
    E = { tension: 500, friction: 30, clamp: !0 },
    T = {
        name: "Timeline Indicators",
        id: "timeline-indicators-generic",
        component: function (e) {
            let { orientation: t, autoplay: a, maxSeekableTimeSec: o, videoUrl: n, indicatorTimeSec: r } = e,
                s = (function (e) {
                    let [t, a] = i.useState(null),
                        [o, n] = i.useState(null),
                        r = i.useRef(null),
                        [{ expansion: s }, u] = (0, c.z)(() => ({
                            expansion: 0,
                            config: E,
                            onRest: () => {
                                null == r.current && n(null);
                            },
                        })),
                        p = i.useCallback(
                            (e) => {
                                (r.current = e), null != e ? (n(e), u({ expansion: 4 })) : u({ expansion: 0 }), a(e);
                            },
                            [u],
                        ),
                        x = i.useMemo(() => [{ index: 0, timeSec: e, widthPx: 32, gapPx: 4 }], [e]),
                        g = i.useCallback(
                            (e, t) => {
                                let a = o === e.index;
                                return (0, l.jsx)(
                                    d.animated.div,
                                    {
                                        "data-testid": "timeline-indicator",
                                        onMouseEnter: () => p(e.index),
                                        onMouseLeave: () => p(null),
                                        style: {
                                            position: "absolute",
                                            left: a ? s.to((t) => e.leftPx - t) : e.leftPx,
                                            top: "50%",
                                            transform: "translateY(-50%)",
                                            width: a ? s.to((e) => `${32 + 2 * e}px`) : 32,
                                            height: a ? s.to((e) => `${32 + 2 * e}px`) : 32,
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
                                        children: (0, l.jsx)(m.E, {
                                            variant: "text-xs/semibold",
                                            color: "always-white",
                                            children: "R",
                                        }),
                                    },
                                    `indicator-${e.index}`,
                                );
                            },
                            [p, o, s],
                        );
                    return {
                        indicators: x,
                        animatingIndex: o,
                        expansionSpring: s,
                        hoverExpansionPx: 4,
                        renderIndicator: g,
                    };
                })(r);
            return (0, l.jsx)("div", {
                style: {
                    width: "landscape" === t ? "640px" : "360px",
                    height: "landscape" === t ? "360px" : "640px",
                    margin: "0 auto",
                },
                children: (0, l.jsx)(x.default, {
                    src: n,
                    autoplay: a,
                    orientation: t,
                    maxSeekableTimeSec: o > 0 ? o : void 0,
                    parentTransitionState: p.ip.ENTERED,
                    timelineIndicatorConfig: s,
                }),
            });
        },
        controls: {
            orientation: y.orientation,
            autoplay: y.autoplay,
            maxSeekableTimeSec: y.maxSeekableTimeSec,
            videoUrl: y.videoUrl,
            indicatorTimeSec: { label: "Indicator Time (sec)", type: "number", defaultValue: 15 },
        },
    };
var P = a(405670),
    w = a(441512),
    C = a(412703),
    A = a(440703),
    L = a(267548),
    R = a(668824),
    j = a(507107),
    I = a(73473),
    U = a(55759),
    _ = a(795068),
    O = a(190107),
    k = a(652215);
function D(e) {
    let {
        url: t,
        width: a = 640,
        height: o = 360,
        target: l = 60,
        videoTitle: i = "Test Video Quest",
        transcript: n,
    } = e;
    return {
        type: C.n.WATCH_VIDEO,
        target: l,
        assets: { video: { url: t, width: a, height: o, transcript: n } },
        messages: { videoTitle: i },
    };
}
function F() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { streamProgressSeconds: t = 0, completedAt: a = null, enrolledAt: o = null, claimedAt: l = null } = e;
    return {
        userId: "123",
        questId: M,
        enrolledAt: o,
        completedAt: a,
        claimedAt: l,
        claimedTier: null,
        lastStreamHeartbeatAt: null,
        streamProgressSeconds: t,
        dismissedQuestContent: 0,
        progress: {},
    };
}
let M = `playground-video-quest-${Date.now()}`;
function z(e) {
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
                platforms: [j.pY.CROSS_PLATFORM],
            },
            assets: {
                hero: "",
                heroVideo: r.kz,
                questBarHero: "",
                questBarHeroVideo: null,
                questBarHeroBlurhash: null,
                gameTile: "",
                logotype: "",
            },
            taskConfigV2: { joinOperator: R.K.AND, tasks: { [C.n.WATCH_VIDEO]: e } },
            features: [],
            sharePolicy: L.i.SHAREABLE_EVERYWHERE,
            ctaConfig: { link: "https://discord.com/", buttonLabel: "Learn More" },
        },
        userStatus: F({ enrolledAt: new Date().toISOString() }),
        targetedContent: [j.uF.QUEST_HOME_DESKTOP],
    };
}
function Q(e) {
    let {
            quest: t,
            isPortrait: a,
            children: o,
            isFullscreenEnabled: n = !1,
            useNewStyling: r = !1,
            setIsFullscreenEnabled: s = k.tEg,
        } = e,
        d = i.useMemo(
            () => ({
                quest: t,
                sourceQuestContent: j.uF.INTERNAL_PREVIEW_TOOL,
                videoSessionId: "playground-session",
                isPortrait: a,
                onClose: k.tEg,
                isFullscreenEnabled: n,
                setIsFullscreenEnabled: s,
                useNewProgressBarStyling: r,
                maxProgressSec: 0,
                targetSec: 0,
            }),
            [t, a, n, s, r],
        ),
        u = i.useMemo(() => ({ questConfig: t.config }), [t.config]);
    return (0, l.jsx)(I.R, {
        questOrQuests: t,
        questContent: j.uF.VIDEO_MODAL,
        sourceQuestContent: j.uF.INTERNAL_PREVIEW_TOOL,
        children: (e, t) =>
            (0, l.jsx)(_.l.Provider, { value: u, children: (0, l.jsx)(_.a.Provider, { value: d, children: o }) }),
    });
}
function B(e) {
    let {
            orientation: t,
            autoplay: a,
            questCompleted: o,
            fullEpisode: n,
            targetTimeSec: r,
            useNewStyling: s,
            videoUrl: d,
        } = e,
        u = "portrait" === t,
        [c, m] = i.useState(!1),
        x = D({
            url: d,
            width: u ? 360 : 640,
            height: u ? 640 : 360,
            target: r,
            videoTitle: u ? "Test Portrait Video" : "Test Landscape Video",
            transcript: "transcript.txt",
        }),
        g = z(x),
        h = i.useRef(!1);
    h.current || ((h.current = !0), P.Kr.getState().clearState()),
        n && (g.config.features = [O.Li.FULL_EPISODE_VIDEO_QUEST]);
    let f = o
        ? {
              ...g,
              userStatus: F({
                  enrolledAt: g.userStatus?.enrolledAt ?? null,
                  completedAt: g.userStatus?.enrolledAt ?? null,
                  streamProgressSeconds: x.target,
              }),
          }
        : g;
    return (0, l.jsx)("div", {
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
        children: (0, l.jsx)(Q, {
            quest: f,
            isPortrait: u,
            isFullscreenEnabled: c,
            setIsFullscreenEnabled: m,
            useNewStyling: s,
            children: (0, l.jsx)(U.A, {
                targetTimeSec: x.target,
                parentTransitionState: p.ip.ENTERED,
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
let H = {
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
        videoUrl: { label: "Video URL", type: "text", defaultValue: r.kz },
    },
    N = {
        name: "Landscape",
        id: "landscape-video",
        component: B,
        controls: { ...H, orientation: { ...H.orientation, defaultValue: "landscape" } },
    },
    q = {
        name: "Portrait",
        id: "portrait-video",
        component: B,
        controls: { ...H, orientation: { ...H.orientation, defaultValue: "portrait" } },
    },
    W =
        'Quest completion is server-driven. In the playground, crossing the reward indicator won\'t flip to the completed state \u2014 toggle "Quest Completed" to preview that UI.',
    $ = {
        marginTop: "12px",
        padding: "8px 12px",
        fontSize: "12px",
        lineHeight: 1.4,
        color: "var(--text-muted)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "6px",
    };
function K(e, t) {
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
function Y(e) {
    let {
            orientation: t,
            autoplay: a,
            questCompleted: o,
            fullEpisode: n,
            targetTimeSec: r,
            videoUrl: s,
            sizing: d,
        } = e,
        u = "portrait" === t,
        c = D({
            url: s,
            width: u ? 360 : 640,
            height: u ? 640 : 360,
            target: r,
            videoTitle: u ? "Test Portrait Video" : "Test Landscape Video",
            transcript: "transcript.txt",
        }),
        m = z(c),
        x = i.useRef(!1);
    x.current || ((x.current = !0), P.Kr.getState().clearState()),
        i.useEffect(() => {
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
        n && (m.config.features = [O.Li.FULL_EPISODE_VIDEO_QUEST]);
    let g = o
        ? {
              ...m,
              userStatus: F({
                  enrolledAt: m.userStatus?.enrolledAt ?? null,
                  completedAt: m.userStatus?.enrolledAt ?? null,
                  streamProgressSeconds: c.target,
              }),
          }
        : m;
    return (0, l.jsxs)("div", {
        children: [
            (0, l.jsx)("div", {
                style: K(d, u),
                children: (0, l.jsx)(Q, {
                    quest: g,
                    isPortrait: u,
                    children: (0, l.jsx)(w.A, {
                        targetTimeSec: c.target,
                        parentTransitionState: p.ip.ENTERED,
                        onOptimisticProgressUpdate: k.tEg,
                        autoplay: a,
                        autoFocus: !1,
                        openedAtMs: 0,
                        orientation: t,
                        videoUrlOverride: s,
                    }),
                }),
            }),
            n && !o && (0, l.jsx)("div", { style: $, children: W }),
        ],
    });
}
let { useNewStyling: G, ...J } = H,
    X = { label: "Full Episode (shows reward indicator)", type: "boolean", defaultValue: !1 },
    Z = {
        label: "Container sizing",
        type: "select",
        options: [
            { label: "Video size (640\xd7360 / 360\xd7640)", value: "video" },
            { label: "Modal context (800\xd7500)", value: "modal" },
        ],
        defaultValue: "modal",
    },
    ee = {
        id: "video-quest",
        name: "Video Player",
        groups: [
            { title: "Discord Video Player (Generic)", stories: [v, S, V, T] },
            { title: "Clips Player", stories: [s] },
            {
                title: "Composed Quest Player",
                stories: [
                    {
                        name: "Landscape",
                        id: "landscape-video-composed",
                        component: Y,
                        controls: {
                            ...J,
                            orientation: { ...H.orientation, defaultValue: "landscape" },
                            fullEpisode: X,
                            sizing: Z,
                        },
                    },
                    {
                        name: "Portrait",
                        id: "portrait-video-composed",
                        component: Y,
                        controls: {
                            ...J,
                            orientation: { ...H.orientation, defaultValue: "portrait" },
                            fullEpisode: X,
                            sizing: Z,
                        },
                    },
                    {
                        name: "Landscape \u2014 Autoplay",
                        id: "landscape-video-composed-autoplay",
                        component: Y,
                        controls: {
                            ...J,
                            orientation: { ...H.orientation, defaultValue: "landscape" },
                            autoplay: { label: "Autoplay", type: "boolean", defaultValue: !0 },
                            fullEpisode: X,
                            sizing: Z,
                        },
                    },
                    {
                        name: "Landscape \u2014 Progress Persistence",
                        id: "landscape-video-composed-persistence",
                        component: function (e) {
                            let {
                                    orientation: t,
                                    autoplay: a,
                                    questCompleted: o,
                                    fullEpisode: i,
                                    targetTimeSec: n,
                                    videoUrl: r,
                                    sizing: s,
                                } = e,
                                d = "portrait" === t,
                                u = D({
                                    url: r,
                                    width: d ? 360 : 640,
                                    height: d ? 640 : 360,
                                    target: n,
                                    videoTitle: d ? "Test Portrait Video" : "Test Landscape Video",
                                    transcript: "transcript.txt",
                                }),
                                c = z(u);
                            i && (c.config.features = [O.Li.FULL_EPISODE_VIDEO_QUEST]);
                            let m = o
                                ? {
                                      ...c,
                                      userStatus: F({
                                          enrolledAt: c.userStatus?.enrolledAt ?? null,
                                          completedAt: c.userStatus?.enrolledAt ?? null,
                                          streamProgressSeconds: u.target,
                                      }),
                                  }
                                : c;
                            return (0, l.jsxs)("div", {
                                children: [
                                    (0, l.jsx)("div", {
                                        style: K(s, !1),
                                        children: (0, l.jsx)(Q, {
                                            quest: m,
                                            isPortrait: !1,
                                            children: (0, l.jsx)(w.A, {
                                                targetTimeSec: u.target,
                                                parentTransitionState: p.ip.ENTERED,
                                                onOptimisticProgressUpdate: k.tEg,
                                                autoplay: a,
                                                autoFocus: !1,
                                                openedAtMs: 0,
                                                orientation: t,
                                                videoUrlOverride: r,
                                            }),
                                        }),
                                    }),
                                    i && !o && (0, l.jsx)("div", { style: $, children: W }),
                                ],
                            });
                        },
                        controls: {
                            ...J,
                            orientation: { ...H.orientation, defaultValue: "landscape" },
                            fullEpisode: X,
                            sizing: Z,
                        },
                    },
                ],
            },
            { title: "Legacy Quest Player", stories: [N, q] },
        ],
        tags: ["Video Player", "Quests"],
        IconComponent: o.u,
    },
    et = { playgroundBaseUrl: "video-quest", collections: [ee] };
