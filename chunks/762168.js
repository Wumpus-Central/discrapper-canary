r.d(t, { DX: () => m, _v: () => x, cs: () => T, ec: () => v, kK: () => g, sn: () => S });
var o = r(627968),
    a = r(64700),
    n = r(412703),
    i = r(440703),
    s = r(267548),
    l = r(668824),
    d = r(397927),
    _ = r(104473),
    u = r(341915),
    c = r(73473),
    p = r(717415),
    f = r(471535),
    b = r(652215);
function m(e) {
    let { url: t, width: r = 640, height: o = 360, target: a = 60, videoTitle: i = "Test Video Quest" } = e;
    return {
        type: n.n.WATCH_VIDEO,
        target: a,
        assets: { video: { url: t, width: r, height: o } },
        messages: { videoTitle: i },
    };
}
function g() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { streamProgressSeconds: t = 0, completedAt: r = null, enrolledAt: o = null, claimedAt: a = null } = e;
    return {
        userId: "123",
        questId: C,
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
let C = `playground-video-quest-${Date.now()}`;
function v(e) {
    return {
        id: C,
        preview: !0,
        config: {
            id: C,
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
                platforms: [u.pY.CROSS_PLATFORM],
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
            taskConfigV2: { joinOperator: l.K.AND, tasks: { [n.n.WATCH_VIDEO]: e } },
            features: [],
            sharePolicy: s.i.SHAREABLE_EVERYWHERE,
            ctaConfig: { link: "https://discord.com/", buttonLabel: "Learn More" },
        },
        userStatus: g({ enrolledAt: new Date().toISOString() }),
        targetedContent: [u.uF.QUEST_HOME_DESKTOP],
    };
}
function S(e) {
    let {
            quest: t,
            isPortrait: r,
            children: n,
            isFullscreenEnabled: i = !1,
            useNewStyling: s = !1,
            setIsFullscreenEnabled: l = b.tEg,
        } = e,
        d = a.useMemo(
            () => ({
                quest: t,
                sourceQuestContent: u.uF.INTERNAL_PREVIEW_TOOL,
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
    return (0, o.jsx)(c.R, {
        questOrQuests: t,
        questContent: u.uF.VIDEO_MODAL,
        sourceQuestContent: u.uF.INTERNAL_PREVIEW_TOOL,
        children: (e, t) =>
            (0, o.jsx)(p.VideoQuestConfigContext.Provider, {
                value: _,
                children: (0, o.jsx)(p.VideoQuestModalContext.Provider, { value: d, children: n }),
            }),
    });
}
function h(e) {
    let { orientation: t, autoplay: r, questCompleted: n, useNewStyling: i, videoUrl: s } = e,
        l = "portrait" === t,
        [_, u] = a.useState(!1),
        c = m({
            url: s,
            width: l ? 360 : 640,
            height: l ? 640 : 360,
            videoTitle: l ? "Test Portrait Video" : "Test Landscape Video",
        }),
        p = v(c),
        C = n
            ? {
                  ...p,
                  userStatus: g({
                      enrolledAt: p.userStatus?.enrolledAt ?? null,
                      completedAt: p.userStatus?.enrolledAt ?? null,
                      streamProgressSeconds: c.target,
                  }),
              }
            : p;
    return (0, o.jsx)("div", {
        style: {
            width: l ? "400px" : "100%",
            maxWidth: l ? void 0 : "800px",
            height: l ? "700px" : "500px",
            backgroundColor: "#1e1f22",
            borderRadius: "8px",
            overflow: "hidden",
            "--custom-footer-horizontal-padding": "20px",
        },
        children: (0, o.jsx)(S, {
            quest: C,
            isPortrait: l,
            isFullscreenEnabled: _,
            setIsFullscreenEnabled: u,
            useNewStyling: i,
            children: (0, o.jsx)(f.A, {
                targetTimeSec: c.target,
                parentTransitionState: d.ip4.ENTERED,
                onOptimisticProgressUpdate: b.tEg,
                autoplay: r,
                performanceClockStartTime: 0,
                orientation: t,
                videoUrlOverride: s,
            }),
        }),
    });
}
let x = {
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
    T = {
        title: "Video Player",
        stories: [
            {
                name: "Landscape Video (Quests)",
                id: "landscape-video",
                component: h,
                controls: { ...x, orientation: { ...x.orientation, defaultValue: "landscape" } },
            },
            {
                name: "Portrait Video (Quests)",
                id: "portrait-video",
                component: h,
                controls: { ...x, orientation: { ...x.orientation, defaultValue: "portrait" } },
            },
        ],
    };
