(a.r(t), a.d(t, { videoQuestCollection: () => et, playgroundConfig: () => ea }));
var l = a(782134),
    o = a(477900),
    i = a(582128),
    n = a(682176),
    r = a(784018);
let s = {
    name: "Clips Player",
    id: "clips-player",
    component: function (e) {
        let {
                videoUrl: t,
                posterUrl: a,
                minWidth: l,
                maxWidth: r,
                maxHeight: s,
                active: d,
                autoPlay: u,
                autoMute: p,
                allowFullScreen: c,
                embed: m,
                fillContainer: x,
                showTextContent: h,
                showParticipants: g,
            } = e,
            b = i.useMemo(
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
        return (0, o.jsx)("div", {
            style: x ? { width: "100%", height: "500px" } : { display: "flex", justifyContent: "center" },
            children: (0, o.jsx)(n.A, {
                attachment: b,
                src: t,
                posterUrl: a,
                active: d,
                autoPlay: u,
                autoMute: p,
                allowFullScreen: c,
                embed: m,
                fillContainer: x,
                minWidth: l,
                maxWidth: 0 === r ? void 0 : r,
                maxHeight: 0 === s ? void 0 : s,
                showTextContent: h,
                showParticipants: g,
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
var d = a(231723),
    u = a(664111),
    p = a(3451),
    c = a(49870);
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
    originalUrl: { label: "Original URL", type: "text", defaultValue: r.kz },
    originalDurationSec: { label: "Master timeline length (sec)", type: "number", defaultValue: 30 },
    subUrl: {
        label: "Clip URL (both clips)",
        type: "text",
        defaultValue: "https://cdn.discordapp.com/assets/media_channel/admin_edu_scientist_wumpus.mp4",
    },
    clipAStartSec: { label: "Clip A start (sec)", type: "number", defaultValue: 8 },
    clipADurationSec: { label: "Clip A length (sec)", type: "number", defaultValue: 6 },
    clipBStartSec: { label: "Clip B start (sec)", type: "number", defaultValue: 18 },
    clipBDurationSec: { label: "Clip B length (sec)", type: "number", defaultValue: 8 },
};
var x = a(479669),
    h = a(831544),
    g = a(717421),
    b = a(834730),
    f = a(831056);
let y = "https://cdn.discordapp.com/assets/og_img_discord_home.png";
function v(e) {
    let { orientation: t, thumbnailUrl: a, onReplay: l } = e;
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsx)(f.nY, { url: a }),
            (0, o.jsx)(f.KP, {}),
            (0, o.jsxs)(f.zj, {
                orientation: t,
                children: [
                    (0, o.jsx)(f.Kb, { url: a, orientation: t }),
                    (0, o.jsx)(f.lx, {
                        title: "Watch Again",
                        subtitle: "Replay this video",
                        ctaBtnLabel: "Replay",
                        onCTAClick: l,
                        orientation: t,
                    }),
                ],
            }),
        ],
    });
}
function S(e) {
    let {
            orientation: t,
            autoplay: a,
            maxSeekableTimeSec: l,
            videoUrl: n,
            poster: s,
            showEndScreen: p,
            initialActive: c,
            autoHideVolumeSlider: m,
            numExtraButtons: x,
            sizing: g,
            persistPlayhead: b,
            hideFullScreenBtn: f,
        } = e,
        [S, V] = i.useState(0),
        E = i.useMemo(() => {
            if (null == n || "" === n) return n;
            let e = n.includes("?") ? "&" : "?";
            return 0 === S ? n : `${n}${e}_cb=${S}`;
        }, [n, S]),
        T = i.useMemo(
            () =>
                Array.from({ length: x }, (e, t) => ({
                    id: `extra-button-${t}`,
                    label: `Extra Button ${t + 1}`,
                    iconComponent: h.MicrophoneIcon,
                    onClick: () => {
                        console.log(`Extra Button ${t + 1} clicked`);
                    },
                })),
            [x],
        );
    return (0, o.jsxs)("div", {
        style: { display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" },
        children: [
            (0, o.jsx)("button", {
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
                    u.default,
                    {
                        src: E,
                        poster: s,
                        initialActive: c,
                        autoplay: a,
                        extraButtons: T,
                        hideFullScreenBtn: f,
                        orientation: t,
                        maxSeekableTimeSec: l > 0 ? l : void 0,
                        autoHideVolumeSlider: m,
                        persistPlayhead: b,
                        parentTransitionState: d.ip.ENTERED,
                        onProgressUpdate: () => {},
                        onEnded: () => {},
                        onError: () => {},
                        transcriptText: n === r.Im ? r.LI : r.pQ,
                        renderEndScreen: p
                            ? (e) => {
                                  let { replay: a } = e;
                                  return (0, o.jsx)(v, { orientation: t, thumbnailUrl: y, onReplay: a });
                              }
                            : void 0,
                    },
                    `${String(c)}-${S}`,
                ),
            }),
        ],
    });
}
let V = {
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
        poster: { label: "Poster URL", type: "text", defaultValue: y },
        showEndScreen: { label: "Show End Screen", type: "boolean", defaultValue: !0 },
        initialActive: { label: "Initially Active", type: "boolean", defaultValue: !0 },
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
    E = {
        name: "Landscape",
        id: "landscape-video-generic",
        component: S,
        controls: { ...V, orientation: { ...V.orientation, defaultValue: "landscape" } },
    },
    T = {
        name: "Portrait",
        id: "portrait-video-generic",
        component: S,
        controls: { ...V, orientation: { ...V.orientation, defaultValue: "portrait" } },
    },
    A = {
        name: "HLS",
        id: "hls-video-generic",
        component: S,
        controls: {
            ...V,
            orientation: { ...V.orientation, defaultValue: "landscape" },
            videoUrl: { ...V.videoUrl, defaultValue: r.Im },
        },
    },
    P = { tension: 500, friction: 30, clamp: !0 },
    w = {
        name: "Timeline Indicators",
        id: "timeline-indicators-generic",
        component: function (e) {
            let { orientation: t, autoplay: a, maxSeekableTimeSec: l, videoUrl: n, indicatorTimeSec: r } = e,
                s = (function (e) {
                    let [t, a] = i.useState(null),
                        [l, n] = i.useState(null),
                        r = i.useRef(null),
                        [{ expansion: s }, d] = (0, g.z)(() => ({
                            expansion: 0,
                            config: P,
                            onRest: () => {
                                null == r.current && n(null);
                            },
                        })),
                        u = i.useCallback(
                            (e) => {
                                ((r.current = e), null != e ? (n(e), d({ expansion: 4 })) : d({ expansion: 0 }), a(e));
                            },
                            [d],
                        ),
                        p = i.useMemo(() => [{ index: 0, timeSec: e, widthPx: 32, gapPx: 4 }], [e]),
                        c = i.useCallback(
                            (e, t) => {
                                let a = l === e.index;
                                return (0, o.jsx)(
                                    x.animated.div,
                                    {
                                        "data-testid": "timeline-indicator",
                                        onMouseEnter: () => u(e.index),
                                        onMouseLeave: () => u(null),
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
                                        children: (0, o.jsx)(b.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-overlay-light",
                                            children: "R",
                                        }),
                                    },
                                    `indicator-${e.index}`,
                                );
                            },
                            [u, l, s],
                        );
                    return {
                        indicators: p,
                        animatingIndex: l,
                        expansionSpring: s,
                        hoverExpansionPx: 4,
                        renderIndicator: c,
                    };
                })(r);
            return (0, o.jsx)("div", {
                style: {
                    width: "landscape" === t ? "640px" : "360px",
                    height: "landscape" === t ? "360px" : "640px",
                    margin: "0 auto",
                },
                children: (0, o.jsx)(u.default, {
                    src: n,
                    autoplay: a,
                    orientation: t,
                    maxSeekableTimeSec: l > 0 ? l : void 0,
                    parentTransitionState: d.ip.ENTERED,
                    timelineIndicatorConfig: s,
                }),
            });
        },
        controls: {
            orientation: V.orientation,
            autoplay: V.autoplay,
            maxSeekableTimeSec: V.maxSeekableTimeSec,
            videoUrl: V.videoUrl,
            indicatorTimeSec: { label: "Indicator Time (sec)", type: "number", defaultValue: 15 },
        },
    };
var C = a(405670),
    _ = a(441512),
    L = a(412703),
    R = a(440703),
    U = a(267548),
    j = a(668824),
    k = a(738822),
    I = a(73473),
    D = a(55759),
    O = a(795068),
    M = a(190107),
    F = a(652215);
function z(e) {
    let {
        url: t,
        width: a = 640,
        height: l = 360,
        target: o = 60,
        videoTitle: i = "Test Video Quest",
        transcript: n,
    } = e;
    return {
        type: L.n.WATCH_VIDEO,
        target: o,
        assets: { video: { url: t, width: a, height: l, transcript: n } },
        messages: { videoTitle: i },
    };
}
function B() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { streamProgressSeconds: t = 0, completedAt: a = null, enrolledAt: l = null, claimedAt: o = null } = e;
    return {
        userId: "123",
        questId: Q,
        enrolledAt: l,
        completedAt: a,
        claimedAt: o,
        claimedTier: null,
        lastStreamHeartbeatAt: null,
        streamProgressSeconds: t,
        dismissedQuestContent: 0,
        progress: {},
    };
}
let Q = `playground-video-quest-${Date.now()}`;
function W(e) {
    return {
        id: Q,
        preview: !0,
        config: {
            id: Q,
            configVersion: 2,
            startsAt: "2024-01-01T00:00:00+00:00",
            expiresAt: "2030-01-01T00:00:00+00:00",
            messages: { questName: "Video Quest Playground", gameTitle: "Test Game", gamePublisher: "Discord" },
            colors: { primary: "#5865F2", secondary: "#3BA55C" },
            rewardsConfig: {
                assignmentMethod: 1,
                rewards: [
                    {
                        skuId: "",
                        type: R.l.VIRTUAL_CURRENCY,
                        orbQuantity: 200,
                        messages: {
                            name: "Test Reward",
                            nameWithArticle: "a Test Reward",
                            redemptionInstructionsByPlatform: {},
                        },
                    },
                ],
                rewardsExpireAt: "2030-01-01T00:00:00+00:00",
                platforms: [k.pY.CROSS_PLATFORM],
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
            taskConfigV2: { joinOperator: j.K.AND, tasks: { [L.n.WATCH_VIDEO]: e } },
            features: [],
            sharePolicy: U.i.SHAREABLE_EVERYWHERE,
            ctaConfig: { link: "https://discord.com/", buttonLabel: "Learn More" },
        },
        userStatus: B({ enrolledAt: new Date().toISOString() }),
        targetedContent: [k.uF.QUEST_HOME_DESKTOP],
    };
}
function H(e) {
    let { quest: t, isPortrait: a, children: l, isFullscreenEnabled: n = !1, setIsFullscreenEnabled: r = F.tEg } = e,
        s = i.useMemo(
            () => ({
                quest: t,
                sourceQuestContent: k.uF.INTERNAL_PREVIEW_TOOL,
                videoSessionId: "playground-session",
                isPortrait: a,
                onClose: F.tEg,
                isFullscreenEnabled: n,
                setIsFullscreenEnabled: r,
                maxProgressSec: 0,
                targetSec: 0,
            }),
            [t, a, n, r],
        ),
        d = i.useMemo(() => ({ questConfig: t.config }), [t.config]);
    return (0, o.jsx)(I.R, {
        questOrQuests: t,
        questContent: k.uF.VIDEO_MODAL,
        sourceQuestContent: k.uF.INTERNAL_PREVIEW_TOOL,
        children: (e, t) =>
            (0, o.jsx)(O.l.Provider, { value: d, children: (0, o.jsx)(O.a.Provider, { value: s, children: l }) }),
    });
}
function q(e) {
    let { orientation: t, autoplay: a, questCompleted: l, fullEpisode: n, targetTimeSec: r, videoUrl: s } = e,
        u = "portrait" === t,
        [p, c] = i.useState(!1),
        m = z({
            url: s,
            width: u ? 360 : 640,
            height: u ? 640 : 360,
            target: r,
            videoTitle: u ? "Test Portrait Video" : "Test Landscape Video",
            transcript: "transcript.txt",
        }),
        x = W(m),
        h = i.useRef(!1);
    (h.current || ((h.current = !0), C.Kr.getState().clearState()),
        n && (x.config.features = [M.Li.FULL_EPISODE_VIDEO_QUEST]));
    let g = l
        ? {
              ...x,
              userStatus: B({
                  enrolledAt: x.userStatus?.enrolledAt ?? null,
                  completedAt: x.userStatus?.enrolledAt ?? null,
                  streamProgressSeconds: m.target,
              }),
          }
        : x;
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
        children: (0, o.jsx)(H, {
            quest: g,
            isPortrait: u,
            isFullscreenEnabled: p,
            setIsFullscreenEnabled: c,
            children: (0, o.jsx)(D.A, {
                targetTimeSec: m.target,
                parentTransitionState: d.ip.ENTERED,
                onOptimisticProgressUpdate: F.tEg,
                autoplay: a,
                autoFocus: !1,
                openedAtMs: 0,
                orientation: t,
                videoUrlOverride: s,
            }),
        }),
    });
}
let N = {
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
        videoUrl: { label: "Video URL", type: "text", defaultValue: r.kz },
    },
    $ = {
        name: "Landscape",
        id: "landscape-video",
        component: q,
        controls: { ...N, orientation: { ...N.orientation, defaultValue: "landscape" } },
    },
    K = {
        name: "Portrait",
        id: "portrait-video",
        component: q,
        controls: { ...N, orientation: { ...N.orientation, defaultValue: "portrait" } },
    },
    Y =
        'Quest completion is server-driven. In the playground, crossing the reward indicator won\'t flip to the completed state \u2014 toggle "Quest Completed" to preview that UI.',
    G = {
        marginTop: "12px",
        padding: "8px 12px",
        fontSize: "12px",
        lineHeight: 1.4,
        color: "var(--text-muted)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "6px",
    };
function J(e, t) {
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
function X(e) {
    let {
            orientation: t,
            autoplay: a,
            questCompleted: l,
            fullEpisode: n,
            targetTimeSec: r,
            videoUrl: s,
            sizing: u,
        } = e,
        p = "portrait" === t,
        c = z({
            url: s,
            width: p ? 360 : 640,
            height: p ? 640 : 360,
            target: r,
            videoTitle: p ? "Test Portrait Video" : "Test Landscape Video",
            transcript: "transcript.txt",
        }),
        m = W(c),
        x = i.useRef(!1);
    (x.current || ((x.current = !0), C.Kr.getState().clearState()),
        i.useEffect(() => {
            let e = document.querySelector('[data-testid="discord-web-video-player-video"]');
            if (null != e)
                if (!(e.readyState >= 1))
                    return (
                        e.addEventListener("loadedmetadata", t, { once: !0 }),
                        () => e.removeEventListener("loadedmetadata", t)
                    );
                else t();
            function t() {
                null != e && (e.currentTime = 0);
            }
        }, []),
        n && (m.config.features = [M.Li.FULL_EPISODE_VIDEO_QUEST]));
    let h = l
        ? {
              ...m,
              userStatus: B({
                  enrolledAt: m.userStatus?.enrolledAt ?? null,
                  completedAt: m.userStatus?.enrolledAt ?? null,
                  streamProgressSeconds: c.target,
              }),
          }
        : m;
    return (0, o.jsxs)("div", {
        children: [
            (0, o.jsx)("div", {
                style: J(u, p),
                children: (0, o.jsx)(H, {
                    quest: h,
                    isPortrait: p,
                    children: (0, o.jsx)(_.A, {
                        targetTimeSec: c.target,
                        parentTransitionState: d.ip.ENTERED,
                        onOptimisticProgressUpdate: F.tEg,
                        autoplay: a,
                        autoFocus: !1,
                        openedAtMs: 0,
                        orientation: t,
                        videoUrlOverride: s,
                    }),
                }),
            }),
            n && !l && (0, o.jsx)("div", { style: G, children: Y }),
        ],
    });
}
let Z = { label: "Full Episode (shows reward indicator)", type: "boolean", defaultValue: !1 },
    ee = {
        label: "Container sizing",
        type: "select",
        options: [
            { label: "Video size (640\xd7360 / 360\xd7640)", value: "video" },
            { label: "Modal context (800\xd7500)", value: "modal" },
        ],
        defaultValue: "modal",
    },
    et = {
        id: "video-quest",
        name: "Video Player",
        groups: [
            { title: "Discord Video Player (Generic)", stories: [E, T, A, w] },
            {
                title: "Discord Multi Video Player (Experimental)",
                stories: [
                    {
                        name: "Multi Video (POV switching)",
                        id: "multi-video-player",
                        docs: "Demonstrates `renderVideo`. The player is handed a renderer that mounts several clips as one continuous timeline \u2014 its scrubber, clock and seek buttons keep working in master-timeline seconds, and it is told nothing about the extra sources. Pick a POV circle to switch; playback returns to the original when a clip runs out or you seek outside its window.",
                        component: function (e) {
                            let {
                                    orientation: t,
                                    autoplay: a,
                                    originalUrl: l,
                                    originalDurationSec: n,
                                    subUrl: r,
                                    clipAStartSec: s,
                                    clipADurationSec: m,
                                    clipBStartSec: x,
                                    clipBDurationSec: h,
                                } = e,
                                g = i.useMemo(
                                    () => ({
                                        id: "original",
                                        url: l,
                                        durationSec: n,
                                        poster: "https://cdn.discordapp.com/assets/og_img_discord_home.png",
                                        owner: { avatarUrl: p.A.DEFAULT_AVATARS["0"], name: "Wumpus" },
                                    }),
                                    [l, n],
                                ),
                                b = i.useMemo(
                                    () => [
                                        {
                                            id: "clip-a",
                                            url: r,
                                            startSec: s,
                                            durationSec: m,
                                            poster: "https://cdn.discordapp.com/assets/activities/krunker_strike_poster.jpg",
                                            owner: { avatarUrl: p.A.DEFAULT_AVATARS["1"], name: "Clyde" },
                                        },
                                        {
                                            id: "clip-b",
                                            url: r,
                                            startSec: x,
                                            durationSec: h,
                                            poster: "https://cdn.discordapp.com/assets/activities/platform/activities_pipfab_tutorial_redesign.png",
                                            owner: { avatarUrl: p.A.DEFAULT_AVATARS["2"], name: "Nelly" },
                                        },
                                    ],
                                    [r, s, m, x, h],
                                );
                            return (0, o.jsx)("div", {
                                style: {
                                    maxWidth: "landscape" === t ? "800px" : void 0,
                                    width: "landscape" === t ? "640px" : "360px",
                                    height: "landscape" === t ? "360px" : "640px",
                                    margin: "0 auto",
                                    backgroundColor: "#1e1f22",
                                    borderRadius: "8px",
                                    overflow: "hidden",
                                },
                                children: (0, o.jsx)(
                                    u.default,
                                    {
                                        parentTransitionState: d.ip.ENTERED,
                                        orientation: t,
                                        autoplay: a,
                                        src: g.url,
                                        poster: g.poster,
                                        renderVideo: (e) => (0, o.jsx)(c.A, { ...e, original: g, subSources: b }),
                                    },
                                    `${l}-${n}`,
                                ),
                            });
                        },
                        controls: m,
                    },
                ],
            },
            { title: "Clips Player", stories: [s] },
            {
                title: "Composed Quest Player",
                stories: [
                    {
                        name: "Landscape",
                        id: "landscape-video-composed",
                        component: X,
                        controls: {
                            ...N,
                            orientation: { ...N.orientation, defaultValue: "landscape" },
                            fullEpisode: Z,
                            sizing: ee,
                        },
                    },
                    {
                        name: "Portrait",
                        id: "portrait-video-composed",
                        component: X,
                        controls: {
                            ...N,
                            orientation: { ...N.orientation, defaultValue: "portrait" },
                            fullEpisode: Z,
                            sizing: ee,
                        },
                    },
                    {
                        name: "Landscape \u2014 Autoplay",
                        id: "landscape-video-composed-autoplay",
                        component: X,
                        controls: {
                            ...N,
                            orientation: { ...N.orientation, defaultValue: "landscape" },
                            autoplay: { label: "Autoplay", type: "boolean", defaultValue: !0 },
                            fullEpisode: Z,
                            sizing: ee,
                        },
                    },
                    {
                        name: "Landscape \u2014 Progress Persistence",
                        id: "landscape-video-composed-persistence",
                        component: function (e) {
                            let {
                                    orientation: t,
                                    autoplay: a,
                                    questCompleted: l,
                                    fullEpisode: i,
                                    targetTimeSec: n,
                                    videoUrl: r,
                                    sizing: s,
                                } = e,
                                u = "portrait" === t,
                                p = z({
                                    url: r,
                                    width: u ? 360 : 640,
                                    height: u ? 640 : 360,
                                    target: n,
                                    videoTitle: u ? "Test Portrait Video" : "Test Landscape Video",
                                    transcript: "transcript.txt",
                                }),
                                c = W(p);
                            i && (c.config.features = [M.Li.FULL_EPISODE_VIDEO_QUEST]);
                            let m = l
                                ? {
                                      ...c,
                                      userStatus: B({
                                          enrolledAt: c.userStatus?.enrolledAt ?? null,
                                          completedAt: c.userStatus?.enrolledAt ?? null,
                                          streamProgressSeconds: p.target,
                                      }),
                                  }
                                : c;
                            return (0, o.jsxs)("div", {
                                children: [
                                    (0, o.jsx)("div", {
                                        style: J(s, !1),
                                        children: (0, o.jsx)(H, {
                                            quest: m,
                                            isPortrait: !1,
                                            children: (0, o.jsx)(_.A, {
                                                targetTimeSec: p.target,
                                                parentTransitionState: d.ip.ENTERED,
                                                onOptimisticProgressUpdate: F.tEg,
                                                autoplay: a,
                                                autoFocus: !1,
                                                openedAtMs: 0,
                                                orientation: t,
                                                videoUrlOverride: r,
                                            }),
                                        }),
                                    }),
                                    i && !l && (0, o.jsx)("div", { style: G, children: Y }),
                                ],
                            });
                        },
                        controls: {
                            ...N,
                            orientation: { ...N.orientation, defaultValue: "landscape" },
                            fullEpisode: Z,
                            sizing: ee,
                        },
                    },
                ],
            },
            { title: "Legacy Quest Player", stories: [$, K] },
        ],
        tags: ["Video Player", "Quests"],
        IconComponent: l.PlayIcon,
    },
    ea = { playgroundBaseUrl: "video-quest", collections: [et] };
