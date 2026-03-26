n.d(t, { DX: () => m, _v: () => x, cs: () => y, ec: () => v, kK: () => g, sn: () => C });
var r = n(627968),
    a = n(64700),
    o = n(412703),
    i = n(440703),
    s = n(267548),
    l = n(668824),
    d = n(397927),
    u = n(341915),
    c = n(73473),
    p = n(839727),
    _ = n(795068),
    f = n(652215),
    b = n(784018);
function m(e) {
    let {
        url: t,
        width: n = 640,
        height: r = 360,
        target: a = 60,
        videoTitle: i = "Test Video Quest",
        transcript: s,
    } = e;
    return {
        type: o.n.WATCH_VIDEO,
        target: a,
        assets: { video: { url: t, width: n, height: r, transcript: s } },
        messages: { videoTitle: i },
    };
}
function g() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { streamProgressSeconds: t = 0, completedAt: n = null, enrolledAt: r = null, claimedAt: a = null } = e;
    return {
        userId: "123",
        questId: S,
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
let S = `playground-video-quest-${Date.now()}`;
function v(e) {
    return {
        id: S,
        preview: !0,
        config: {
            id: S,
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
                heroVideo: b.kz,
                questBarHero: "",
                questBarHeroVideo: null,
                questBarHeroBlurhash: null,
                gameTile: "",
                logotype: "",
            },
            taskConfigV2: { joinOperator: l.K.AND, tasks: { [o.n.WATCH_VIDEO]: e } },
            features: [],
            sharePolicy: s.i.SHAREABLE_EVERYWHERE,
            ctaConfig: { link: "https://discord.com/", buttonLabel: "Learn More" },
        },
        userStatus: g({ enrolledAt: new Date().toISOString() }),
        targetedContent: [u.uF.QUEST_HOME_DESKTOP],
    };
}
function C(e) {
    let {
            quest: t,
            isPortrait: n,
            children: o,
            isFullscreenEnabled: i = !1,
            useNewStyling: s = !1,
            setIsFullscreenEnabled: l = f.tEg,
        } = e,
        d = a.useMemo(
            () => ({
                quest: t,
                sourceQuestContent: u.uF.INTERNAL_PREVIEW_TOOL,
                videoSessionId: "playground-session",
                isPortrait: n,
                onClose: f.tEg,
                isFullscreenEnabled: i,
                setIsFullscreenEnabled: l,
                useNewProgressBarStyling: s,
            }),
            [t, n, i, l, s],
        ),
        p = a.useMemo(() => ({ questConfig: t.config }), [t.config]);
    return (0, r.jsx)(c.R, {
        questOrQuests: t,
        questContent: u.uF.VIDEO_MODAL,
        sourceQuestContent: u.uF.INTERNAL_PREVIEW_TOOL,
        children: (e, t) =>
            (0, r.jsx)(_.l.Provider, { value: p, children: (0, r.jsx)(_.a.Provider, { value: d, children: o }) }),
    });
}
function h(e) {
    let { orientation: t, autoplay: n, questCompleted: o, useNewStyling: i, videoUrl: s } = e,
        l = "portrait" === t,
        [u, c] = a.useState(!1),
        _ = m({
            url: s,
            width: l ? 360 : 640,
            height: l ? 640 : 360,
            videoTitle: l ? "Test Portrait Video" : "Test Landscape Video",
            transcript: "transcript.txt",
        }),
        b = v(_),
        S = o
            ? {
                  ...b,
                  userStatus: g({
                      enrolledAt: b.userStatus?.enrolledAt ?? null,
                      completedAt: b.userStatus?.enrolledAt ?? null,
                      streamProgressSeconds: _.target,
                  }),
              }
            : b;
    return (0, r.jsx)("div", {
        style: {
            width: l ? "400px" : "100%",
            maxWidth: l ? void 0 : "800px",
            height: l ? "700px" : "500px",
            backgroundColor: "#1e1f22",
            borderRadius: "8px",
            overflow: "hidden",
            "--custom-footer-horizontal-padding": "20px",
        },
        children: (0, r.jsx)(C, {
            quest: S,
            isPortrait: l,
            isFullscreenEnabled: u,
            setIsFullscreenEnabled: c,
            useNewStyling: i,
            children: (0, r.jsx)(p.A, {
                targetTimeSec: _.target,
                parentTransitionState: d.ip4.ENTERED,
                onOptimisticProgressUpdate: f.tEg,
                autoplay: n,
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
        videoUrl: { label: "Video URL", type: "text", defaultValue: b.kz },
    },
    y = {
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
