a.d(t, { DX: () => v, _v: () => T, cs: () => P, ec: () => f, kK: () => x, sn: () => S });
var n = a(627968),
    o = a(64700),
    r = a(412703),
    i = a(440703),
    l = a(267548),
    s = a(668824),
    d = a(231723),
    c = a(341915),
    u = a(405670),
    p = a(73473),
    b = a(839727),
    m = a(795068),
    _ = a(654487),
    g = a(652215),
    h = a(784018);
function v(e) {
    let {
        url: t,
        width: a = 640,
        height: n = 360,
        target: o = 60,
        videoTitle: i = "Test Video Quest",
        transcript: l,
    } = e;
    return {
        type: r.n.WATCH_VIDEO,
        target: o,
        assets: { video: { url: t, width: a, height: n, transcript: l } },
        messages: { videoTitle: i },
    };
}
function x() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { streamProgressSeconds: t = 0, completedAt: a = null, enrolledAt: n = null, claimedAt: o = null } = e;
    return {
        userId: "123",
        questId: y,
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
let y = `playground-video-quest-${Date.now()}`;
function f(e) {
    return {
        id: y,
        preview: !0,
        config: {
            id: y,
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
                        type: i.l.VIRTUAL_CURRENCY,
                        orbQuantity: 200,
                        messages: {
                            name: "Test Reward",
                            nameWithArticle: "a Test Reward",
                            redemptionInstructionsByPlatform: {},
                        },
                    },
                ],
                rewardsExpireAt: "2030-01-01T00:00:00+00:00",
                platforms: [c.pY.CROSS_PLATFORM],
            },
            assets: {
                hero: "",
                heroVideo: h.kz,
                questBarHero: "",
                questBarHeroVideo: null,
                questBarHeroBlurhash: null,
                gameTile: "",
                logotype: "",
            },
            taskConfigV2: { joinOperator: s.K.AND, tasks: { [r.n.WATCH_VIDEO]: e } },
            features: [],
            sharePolicy: l.i.SHAREABLE_EVERYWHERE,
            ctaConfig: { link: "https://discord.com/", buttonLabel: "Learn More" },
        },
        userStatus: x({ enrolledAt: new Date().toISOString() }),
        targetedContent: [c.uF.QUEST_HOME_DESKTOP],
    };
}
function S(e) {
    let {
            quest: t,
            isPortrait: a,
            children: r,
            isFullscreenEnabled: i = !1,
            useNewStyling: l = !1,
            setIsFullscreenEnabled: s = g.tEg,
        } = e,
        d = o.useMemo(
            () => ({
                quest: t,
                sourceQuestContent: c.uF.INTERNAL_PREVIEW_TOOL,
                videoSessionId: "playground-session",
                isPortrait: a,
                onClose: g.tEg,
                isFullscreenEnabled: i,
                setIsFullscreenEnabled: s,
                useNewProgressBarStyling: l,
                progressSec: 0,
                targetSec: 0,
            }),
            [t, a, i, s, l],
        ),
        u = o.useMemo(() => ({ questConfig: t.config }), [t.config]);
    return (0, n.jsx)(p.R, {
        questOrQuests: t,
        questContent: c.uF.VIDEO_MODAL,
        sourceQuestContent: c.uF.INTERNAL_PREVIEW_TOOL,
        children: (e, t) =>
            (0, n.jsx)(m.l.Provider, { value: u, children: (0, n.jsx)(m.a.Provider, { value: d, children: r }) }),
    });
}
function C(e) {
    let {
            orientation: t,
            autoplay: a,
            questCompleted: r,
            fullEpisode: i,
            targetTimeSec: l,
            useNewStyling: s,
            videoUrl: c,
        } = e,
        p = "portrait" === t,
        [m, h] = o.useState(!1),
        y = v({
            url: c,
            width: p ? 360 : 640,
            height: p ? 640 : 360,
            target: l,
            videoTitle: p ? "Test Portrait Video" : "Test Landscape Video",
            transcript: "transcript.txt",
        }),
        C = f(y),
        T = o.useRef(!1);
    T.current || ((T.current = !0), u.Kr.getState().clearState()),
        i && (C.config.features = [_.Li.FULL_EPISODE_VIDEO_QUEST]);
    let P = r
        ? {
              ...C,
              userStatus: x({
                  enrolledAt: C.userStatus?.enrolledAt ?? null,
                  completedAt: C.userStatus?.enrolledAt ?? null,
                  streamProgressSeconds: y.target,
              }),
          }
        : C;
    return (0, n.jsx)("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            width: p ? "400px" : "100%",
            maxWidth: p ? void 0 : "800px",
            height: p ? "700px" : "500px",
            backgroundColor: "#1e1f22",
            borderRadius: "8px",
            overflow: "hidden",
            "--custom-footer-horizontal-padding": "20px",
        },
        children: (0, n.jsx)(S, {
            quest: P,
            isPortrait: p,
            isFullscreenEnabled: m,
            setIsFullscreenEnabled: h,
            useNewStyling: s,
            children: (0, n.jsx)(b.A, {
                targetTimeSec: y.target,
                parentTransitionState: d.ip.ENTERED,
                onOptimisticProgressUpdate: g.tEg,
                autoplay: a,
                autoFocus: !1,
                openedAtMs: 0,
                orientation: t,
                videoUrlOverride: c,
            }),
        }),
    });
}
let T = {
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
        videoUrl: { label: "Video URL", type: "text", defaultValue: h.kz },
    },
    P = {
        title: "Legacy Quest Player",
        stories: [
            {
                name: "Landscape",
                id: "landscape-video",
                component: C,
                controls: { ...T, orientation: { ...T.orientation, defaultValue: "landscape" } },
            },
            {
                name: "Portrait",
                id: "portrait-video",
                component: C,
                controls: { ...T, orientation: { ...T.orientation, defaultValue: "portrait" } },
            },
        ],
    };
