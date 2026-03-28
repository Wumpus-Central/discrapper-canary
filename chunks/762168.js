n.d(t, { DX: () => S, _v: () => y, cs: () => T, ec: () => C, kK: () => g, sn: () => h });
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
    f = n(654487),
    m = n(652215),
    b = n(784018);
function S(e) {
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
        questId: v,
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
let v = `playground-video-quest-${Date.now()}`;
function C(e) {
    return {
        id: v,
        preview: !0,
        config: {
            id: v,
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
function h(e) {
    let {
            quest: t,
            isPortrait: n,
            children: o,
            isFullscreenEnabled: i = !1,
            useNewStyling: s = !1,
            setIsFullscreenEnabled: l = m.tEg,
        } = e,
        d = a.useMemo(
            () => ({
                quest: t,
                sourceQuestContent: u.uF.INTERNAL_PREVIEW_TOOL,
                videoSessionId: "playground-session",
                isPortrait: n,
                onClose: m.tEg,
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
function x(e) {
    let {
            orientation: t,
            autoplay: n,
            questCompleted: o,
            fullEpisode: i,
            targetTimeSec: s,
            useNewStyling: l,
            videoUrl: u,
        } = e,
        c = "portrait" === t,
        [_, b] = a.useState(!1),
        v = S({
            url: u,
            width: c ? 360 : 640,
            height: c ? 640 : 360,
            target: s,
            videoTitle: c ? "Test Portrait Video" : "Test Landscape Video",
            transcript: "transcript.txt",
        }),
        x = C(v);
    i && (x.config.features = [f.Li.FULL_EPISODE_VIDEO_QUEST]);
    let y = o
        ? {
              ...x,
              userStatus: g({
                  enrolledAt: x.userStatus?.enrolledAt ?? null,
                  completedAt: x.userStatus?.enrolledAt ?? null,
                  streamProgressSeconds: v.target,
              }),
          }
        : x;
    return (0, r.jsx)("div", {
        style: {
            width: c ? "400px" : "100%",
            maxWidth: c ? void 0 : "800px",
            height: c ? "700px" : "500px",
            backgroundColor: "#1e1f22",
            borderRadius: "8px",
            overflow: "hidden",
            "--custom-footer-horizontal-padding": "20px",
        },
        children: (0, r.jsx)(h, {
            quest: y,
            isPortrait: c,
            isFullscreenEnabled: _,
            setIsFullscreenEnabled: b,
            useNewStyling: l,
            children: (0, r.jsx)(p.A, {
                targetTimeSec: v.target,
                parentTransitionState: d.ip4.ENTERED,
                onOptimisticProgressUpdate: m.tEg,
                autoplay: n,
                performanceClockStartTime: 0,
                orientation: t,
                videoUrlOverride: u,
            }),
        }),
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
        questCompleted: { label: "Quest Completed", type: "boolean", defaultValue: !1 },
        fullEpisode: { label: "Full Episode (shows reward indicator)", type: "boolean", defaultValue: !1 },
        targetTimeSec: { label: "Target Time (sec)", type: "number", defaultValue: 15 },
        useNewStyling: { label: "Use New Styling", type: "boolean", defaultValue: !1 },
        videoUrl: { label: "Video URL", type: "text", defaultValue: b.kz },
    },
    T = {
        title: "Video Player",
        stories: [
            {
                name: "Landscape Video (Quests)",
                id: "landscape-video",
                component: x,
                controls: { ...y, orientation: { ...y.orientation, defaultValue: "landscape" } },
            },
            {
                name: "Portrait Video (Quests)",
                id: "portrait-video",
                component: x,
                controls: { ...y, orientation: { ...y.orientation, defaultValue: "portrait" } },
            },
        ],
    };
