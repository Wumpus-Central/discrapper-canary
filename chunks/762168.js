n.d(t, { DX: () => f, _v: () => T, cs: () => E, ec: () => C, kK: () => v, sn: () => x });
var r = n(627968),
    a = n(64700),
    o = n(412703),
    i = n(440703),
    l = n(267548),
    s = n(668824),
    c = n(397927),
    d = n(341915),
    u = n(405670),
    p = n(73473),
    m = n(839727),
    b = n(795068),
    _ = n(654487),
    g = n(652215),
    S = n(784018);
function f(e) {
    let {
        url: t,
        width: n = 640,
        height: r = 360,
        target: a = 60,
        videoTitle: i = "Test Video Quest",
        transcript: l,
    } = e;
    return {
        type: o.n.WATCH_VIDEO,
        target: a,
        assets: { video: { url: t, width: n, height: r, transcript: l } },
        messages: { videoTitle: i },
    };
}
function v() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { streamProgressSeconds: t = 0, completedAt: n = null, enrolledAt: r = null, claimedAt: a = null } = e;
    return {
        userId: "123",
        questId: h,
        enrolledAt: r,
        completedAt: n,
        claimedAt: a,
        claimedTier: null,
        lastStreamHeartbeatAt: null,
        streamProgressSeconds: t,
        dismissedQuestContent: 0,
        progress: {},
    };
}
let h = `playground-video-quest-${Date.now()}`;
function C(e) {
    return {
        id: h,
        preview: !0,
        config: {
            id: h,
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
                platforms: [d.pY.CROSS_PLATFORM],
            },
            assets: {
                hero: "",
                heroVideo: S.kz,
                questBarHero: "",
                questBarHeroVideo: null,
                questBarHeroBlurhash: null,
                gameTile: "",
                logotype: "",
            },
            taskConfigV2: { joinOperator: s.K.AND, tasks: { [o.n.WATCH_VIDEO]: e } },
            features: [],
            sharePolicy: l.i.SHAREABLE_EVERYWHERE,
            ctaConfig: { link: "https://discord.com/", buttonLabel: "Learn More" },
        },
        userStatus: v({ enrolledAt: new Date().toISOString() }),
        targetedContent: [d.uF.QUEST_HOME_DESKTOP],
    };
}
function x(e) {
    let {
            quest: t,
            isPortrait: n,
            children: o,
            isFullscreenEnabled: i = !1,
            useNewStyling: l = !1,
            setIsFullscreenEnabled: s = g.tEg,
        } = e,
        c = a.useMemo(
            () => ({
                quest: t,
                sourceQuestContent: d.uF.INTERNAL_PREVIEW_TOOL,
                videoSessionId: "playground-session",
                isPortrait: n,
                onClose: g.tEg,
                isFullscreenEnabled: i,
                setIsFullscreenEnabled: s,
                useNewProgressBarStyling: l,
                progressSec: 0,
                targetSec: 0,
            }),
            [t, n, i, s, l],
        ),
        u = a.useMemo(() => ({ questConfig: t.config }), [t.config]);
    return (0, r.jsx)(p.R, {
        questOrQuests: t,
        questContent: d.uF.VIDEO_MODAL,
        sourceQuestContent: d.uF.INTERNAL_PREVIEW_TOOL,
        children: (e, t) =>
            (0, r.jsx)(b.l.Provider, { value: u, children: (0, r.jsx)(b.a.Provider, { value: c, children: o }) }),
    });
}
function y(e) {
    let {
            orientation: t,
            autoplay: n,
            questCompleted: o,
            fullEpisode: i,
            targetTimeSec: l,
            useNewStyling: s,
            videoUrl: d,
        } = e,
        p = "portrait" === t,
        [b, S] = a.useState(!1),
        h = f({
            url: d,
            width: p ? 360 : 640,
            height: p ? 640 : 360,
            target: l,
            videoTitle: p ? "Test Portrait Video" : "Test Landscape Video",
            transcript: "transcript.txt",
        }),
        y = C(h),
        T = a.useRef(!1);
    T.current || ((T.current = !0), u.Kr.getState().clearState()),
        i && (y.config.features = [_.Li.FULL_EPISODE_VIDEO_QUEST]);
    let E = o
        ? {
              ...y,
              userStatus: v({
                  enrolledAt: y.userStatus?.enrolledAt ?? null,
                  completedAt: y.userStatus?.enrolledAt ?? null,
                  streamProgressSeconds: h.target,
              }),
          }
        : y;
    return (0, r.jsx)("div", {
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
        children: (0, r.jsx)(x, {
            quest: E,
            isPortrait: p,
            isFullscreenEnabled: b,
            setIsFullscreenEnabled: S,
            useNewStyling: s,
            children: (0, r.jsx)(m.A, {
                targetTimeSec: h.target,
                parentTransitionState: c.ip4.ENTERED,
                onOptimisticProgressUpdate: g.tEg,
                autoplay: n,
                autoFocus: !1,
                performanceClockStartTime: 0,
                orientation: t,
                videoUrlOverride: d,
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
        useNewStyling: { label: "Use New Styling", type: "boolean", defaultValue: !1 },
        videoUrl: { label: "Video URL", type: "text", defaultValue: S.kz },
    },
    E = {
        title: "Legacy Quest Player",
        stories: [
            {
                name: "Landscape",
                id: "landscape-video",
                component: y,
                controls: { ...T, orientation: { ...T.orientation, defaultValue: "landscape" } },
            },
            {
                name: "Portrait",
                id: "portrait-video",
                component: y,
                controls: { ...T, orientation: { ...T.orientation, defaultValue: "portrait" } },
            },
        ],
    };
