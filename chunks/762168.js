r.d(t, { cs: () => y });
var o = r(627968),
    a = r(64700),
    n = r(412703),
    i = r(440703),
    s = r(267548),
    l = r(668824),
    d = r(397927),
    _ = r(104473),
    c = r(341915),
    p = r(73473),
    u = r(717415),
    f = r(471535),
    b = r(652215);
function m() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { streamProgressSeconds: t = 0, completedAt: r = null, enrolledAt: o = null, claimedAt: a = null } = e;
    return {
        userId: "123",
        questId: g,
        enrolledAt: o,
        completedAt: r,
        claimedAt: a,
        claimedTier: null,
        lastStreamHeartbeatAt: null,
        streamProgressSeconds: t,
        dismissedQuestContent: 0,
        progress: {},
    };
}
let g = `playground-video-quest-${Date.now()}`;
function C(e) {
    let {
            quest: t,
            isPortrait: r,
            children: n,
            isFullscreenEnabled: i,
            useNewStyling: s,
            setIsFullscreenEnabled: l,
        } = e,
        d = a.useMemo(
            () => ({
                quest: t,
                sourceQuestContent: c.uF.INTERNAL_PREVIEW_TOOL,
                videoSessionId: "playground-session",
                isPortrait: r,
                onClose: b.tEg,
                isFullscreenEnabled: i,
                setIsFullscreenEnabled: l,
                useNewProgressBarStyling: s,
            }),
            [t, r, i, l, s],
        ),
        _ = a.useMemo(() => ({ questConfig: t.config }), [t.config]);
    return (0, o.jsx)(p.R, {
        questOrQuests: t,
        questContent: c.uF.VIDEO_MODAL,
        sourceQuestContent: c.uF.INTERNAL_PREVIEW_TOOL,
        children: (e, t) =>
            (0, o.jsx)(u.VideoQuestConfigContext.Provider, {
                value: _,
                children: (0, o.jsx)(u.VideoQuestModalContext.Provider, { value: d, children: n }),
            }),
    });
}
function v(e) {
    let { orientation: t, autoplay: r, questCompleted: p, useNewStyling: u, videoUrl: v } = e,
        h = "portrait" === t,
        [y, S] = a.useState(!1),
        x = (function (e) {
            let { url: t, width: r = 640, height: o = 360, target: a = 60, videoTitle: i = "Test Video Quest" } = e;
            return {
                type: n.n.WATCH_VIDEO,
                target: a,
                assets: { video: { url: t, width: r, height: o } },
                messages: { videoTitle: i },
            };
        })({
            url: v,
            width: h ? 360 : 640,
            height: h ? 640 : 360,
            videoTitle: h ? "Test Portrait Video" : "Test Landscape Video",
        }),
        T = {
            id: g,
            preview: !0,
            config: {
                id: g,
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
                            asset: "",
                            assetVideo: null,
                            type: i.l.REWARD_CODE,
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
                    heroVideo: _.kz,
                    questBarHero: "",
                    questBarHeroVideo: null,
                    questBarHeroBlurhash: null,
                    gameTile: "",
                    logotype: "",
                },
                taskConfigV2: { joinOperator: l.K.AND, tasks: { [n.n.WATCH_VIDEO]: x } },
                features: [],
                sharePolicy: s.i.SHAREABLE_EVERYWHERE,
                ctaConfig: { link: "https://discord.com/", buttonLabel: "Learn More" },
            },
            userStatus: m({ enrolledAt: new Date().toISOString() }),
            targetedContent: [c.uF.QUEST_HOME_DESKTOP],
        },
        P = p
            ? {
                  ...T,
                  userStatus: m({
                      enrolledAt: T.userStatus?.enrolledAt ?? null,
                      completedAt: T.userStatus?.enrolledAt ?? null,
                      streamProgressSeconds: x.target,
                  }),
              }
            : T;
    return (0, o.jsx)("div", {
        style: {
            width: h ? "400px" : "800px",
            height: h ? "700px" : "500px",
            backgroundColor: "#1e1f22",
            borderRadius: "8px",
            overflow: "hidden",
            "--custom-footer-horizontal-padding": "20px",
        },
        children: (0, o.jsx)(C, {
            quest: P,
            isPortrait: h,
            isFullscreenEnabled: y,
            setIsFullscreenEnabled: S,
            useNewStyling: u,
            children: (0, o.jsx)(f.A, {
                targetTimeSec: x.target,
                parentTransitionState: d.ip4.ENTERED,
                onOptimisticProgressUpdate: b.tEg,
                autoplay: r,
                performanceClockStartTime: 0,
                orientation: t,
                videoUrlOverride: v,
            }),
        }),
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
        questCompleted: { label: "Quest Completed", type: "boolean", defaultValue: !1 },
        useNewStyling: { label: "Use New Styling", type: "boolean", defaultValue: !1 },
        videoUrl: { label: "Video URL", type: "text", defaultValue: _.kz },
    },
    y = {
        title: "Video Player",
        stories: [
            {
                name: "Landscape Video (Quests)",
                id: "landscape-video",
                component: v,
                controls: { ...h, orientation: { ...h.orientation, defaultValue: "landscape" } },
            },
            {
                name: "Portrait Video (Quests)",
                id: "portrait-video",
                component: v,
                controls: { ...h, orientation: { ...h.orientation, defaultValue: "portrait" } },
            },
        ],
    };
