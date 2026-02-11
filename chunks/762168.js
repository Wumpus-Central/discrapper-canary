"use strict";
n.d(t, { cs: () => v });
var r = n(627968),
    i = n(64700),
    a = n(412703),
    s = n(440703),
    o = n(267548),
    l = n(668824),
    u = n(397927),
    c = n(341915),
    d = n(73473),
    _ = n(717415),
    f = n(471535),
    h = n(652215);
let p = "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4";
function g(e) {
    let { url: t, width: n = 640, height: r = 360, target: i = 60, videoTitle: s = "Test Video Quest" } = e;
    return {
        type: a.n.WATCH_VIDEO,
        target: i,
        assets: { video: { url: t, width: n, height: r } },
        messages: { videoTitle: s },
    };
}
function E() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { streamProgressSeconds: t = 0, completedAt: n = null, enrolledAt: r = null, claimedAt: i = null } = e;
    return {
        userId: "123",
        questId: A,
        enrolledAt: r,
        completedAt: n,
        claimedAt: i,
        claimedTier: null,
        lastStreamHeartbeatAt: null,
        streamProgressSeconds: t,
        dismissedQuestContent: 0,
        progress: {},
    };
}
let A = `playground-video-quest-${Date.now()}`;
function I(e) {
    return {
        id: A,
        preview: !0,
        config: {
            id: A,
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
                        type: s.l.REWARD_CODE,
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
                heroVideo: p,
                questBarHero: "",
                questBarHeroVideo: null,
                questBarHeroBlurhash: null,
                gameTile: "",
                logotype: "",
            },
            taskConfigV2: { joinOperator: l.K.AND, tasks: { [a.n.WATCH_VIDEO]: e } },
            features: [],
            sharePolicy: o.i.SHAREABLE_EVERYWHERE,
            ctaConfig: { link: "https://discord.com/", buttonLabel: "Learn More" },
        },
        userStatus: E({ enrolledAt: new Date().toISOString() }),
        targetedContent: [c.uF.QUEST_HOME_DESKTOP],
    };
}
function T(e) {
    let { quest: t, isPortrait: n, children: a } = e,
        s = i.useMemo(
            () => ({
                quest: t,
                sourceQuestContent: c.uF.INTERNAL_PREVIEW_TOOL,
                videoSessionId: "playground-session",
                isPortrait: n,
                onClose: h.tEg,
            }),
            [t, n],
        ),
        o = i.useMemo(() => ({ questConfig: t.config }), [t.config]);
    return (0, r.jsx)(d.R, {
        questOrQuests: t,
        questContent: c.uF.VIDEO_MODAL,
        sourceQuestContent: c.uF.INTERNAL_PREVIEW_TOOL,
        children: (e, t) =>
            (0, r.jsx)(_.VideoQuestConfigContext.Provider, {
                value: o,
                children: (0, r.jsx)(_.VideoQuestModalContext.Provider, { value: s, children: a }),
            }),
    });
}
function y(e) {
    let { orientation: t, autoplay: n, questCompleted: i, videoUrl: a } = e,
        s = "portrait" === t,
        o = g({
            url: a,
            width: s ? 360 : 640,
            height: s ? 640 : 360,
            videoTitle: s ? "Test Portrait Video" : "Test Landscape Video",
        }),
        l = I(o),
        c = i
            ? {
                  ...l,
                  userStatus: E({
                      enrolledAt: l.userStatus?.enrolledAt ?? null,
                      completedAt: l.userStatus?.enrolledAt ?? null,
                      streamProgressSeconds: o.target,
                  }),
              }
            : l;
    return (0, r.jsx)("div", {
        style: {
            width: s ? "400px" : "800px",
            height: s ? "700px" : "500px",
            backgroundColor: "#1e1f22",
            borderRadius: "8px",
            overflow: "hidden",
        },
        children: (0, r.jsx)(T, {
            quest: c,
            isPortrait: s,
            children: (0, r.jsx)(f.A, {
                videoTask: o,
                parentTransitionState: u.ip4.ENTERED,
                onOptimisticProgressUpdate: h.tEg,
                autoplay: n,
                performanceClockStartTime: 0,
                orientation: t,
                videoUrlOverride: a,
            }),
        }),
    });
}
let S = {
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
        videoUrl: { label: "Video URL", type: "text", defaultValue: p },
    },
    v = {
        title: "Video Player",
        stories: [
            {
                name: "Landscape Video",
                id: "landscape-video",
                component: y,
                controls: { ...S, orientation: { ...S.orientation, defaultValue: "landscape" } },
            },
            {
                name: "Portrait Video",
                id: "portrait-video",
                component: y,
                controls: { ...S, orientation: { ...S.orientation, defaultValue: "portrait" } },
            },
        ],
    };
