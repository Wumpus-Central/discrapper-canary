a.d(t, { DX: () => f, _v: () => w, cs: () => S, ec: () => E, kK: () => b, sn: () => T });
var n = a(627968),
    r = a(64700),
    i = a(412703),
    l = a(440703),
    o = a(267548),
    s = a(668824),
    d = a(231723),
    c = a(341915),
    u = a(405670),
    p = a(73473),
    m = a(839727),
    h = a(795068),
    v = a(654487),
    _ = a(652215),
    g = a(784018);
function f(e) {
    let {
        url: t,
        width: a = 640,
        height: n = 360,
        target: r = 60,
        videoTitle: l = "Test Video Quest",
        transcript: o,
    } = e;
    return {
        type: i.n.WATCH_VIDEO,
        target: r,
        assets: { video: { url: t, width: a, height: n, transcript: o } },
        messages: { videoTitle: l },
    };
}
function b() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { streamProgressSeconds: t = 0, completedAt: a = null, enrolledAt: n = null, claimedAt: r = null } = e;
    return {
        userId: "123",
        questId: x,
        enrolledAt: n,
        completedAt: a,
        claimedAt: r,
        claimedTier: null,
        lastStreamHeartbeatAt: null,
        streamProgressSeconds: t,
        dismissedQuestContent: 0,
        progress: {},
    };
}
let x = `playground-video-quest-${Date.now()}`;
function E(e) {
    return {
        id: x,
        preview: !0,
        config: {
            id: x,
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
                        type: l.l.VIRTUAL_CURRENCY,
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
                heroVideo: g.kz,
                questBarHero: "",
                questBarHeroVideo: null,
                questBarHeroBlurhash: null,
                gameTile: "",
                logotype: "",
            },
            taskConfigV2: { joinOperator: s.K.AND, tasks: { [i.n.WATCH_VIDEO]: e } },
            features: [],
            sharePolicy: o.i.SHAREABLE_EVERYWHERE,
            ctaConfig: { link: "https://discord.com/", buttonLabel: "Learn More" },
        },
        userStatus: b({ enrolledAt: new Date().toISOString() }),
        targetedContent: [c.uF.QUEST_HOME_DESKTOP],
    };
}
function T(e) {
    let {
            quest: t,
            isPortrait: a,
            children: i,
            isFullscreenEnabled: l = !1,
            useNewStyling: o = !1,
            setIsFullscreenEnabled: s = _.tEg,
        } = e,
        d = r.useMemo(
            () => ({
                quest: t,
                sourceQuestContent: c.uF.INTERNAL_PREVIEW_TOOL,
                videoSessionId: "playground-session",
                isPortrait: a,
                onClose: _.tEg,
                isFullscreenEnabled: l,
                setIsFullscreenEnabled: s,
                useNewProgressBarStyling: o,
                progressSec: 0,
                targetSec: 0,
            }),
            [t, a, l, s, o],
        ),
        u = r.useMemo(() => ({ questConfig: t.config }), [t.config]);
    return (0, n.jsx)(p.R, {
        questOrQuests: t,
        questContent: c.uF.VIDEO_MODAL,
        sourceQuestContent: c.uF.INTERNAL_PREVIEW_TOOL,
        children: (e, t) =>
            (0, n.jsx)(h.l.Provider, { value: u, children: (0, n.jsx)(h.a.Provider, { value: d, children: i }) }),
    });
}
function y(e) {
    let {
            orientation: t,
            autoplay: a,
            questCompleted: i,
            fullEpisode: l,
            targetTimeSec: o,
            useNewStyling: s,
            videoUrl: c,
        } = e,
        p = "portrait" === t,
        [h, g] = r.useState(!1),
        x = f({
            url: c,
            width: p ? 360 : 640,
            height: p ? 640 : 360,
            target: o,
            videoTitle: p ? "Test Portrait Video" : "Test Landscape Video",
            transcript: "transcript.txt",
        }),
        y = E(x),
        w = r.useRef(!1);
    w.current || ((w.current = !0), u.Kr.getState().clearState()),
        l && (y.config.features = [v.Li.FULL_EPISODE_VIDEO_QUEST]);
    let S = i
        ? {
              ...y,
              userStatus: b({
                  enrolledAt: y.userStatus?.enrolledAt ?? null,
                  completedAt: y.userStatus?.enrolledAt ?? null,
                  streamProgressSeconds: x.target,
              }),
          }
        : y;
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
        children: (0, n.jsx)(T, {
            quest: S,
            isPortrait: p,
            isFullscreenEnabled: h,
            setIsFullscreenEnabled: g,
            useNewStyling: s,
            children: (0, n.jsx)(m.A, {
                targetTimeSec: x.target,
                parentTransitionState: d.ip.ENTERED,
                onOptimisticProgressUpdate: _.tEg,
                autoplay: a,
                autoFocus: !1,
                openedAtMs: 0,
                orientation: t,
                videoUrlOverride: c,
            }),
        }),
    });
}
let w = {
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
        videoUrl: { label: "Video URL", type: "text", defaultValue: g.kz },
    },
    S = {
        title: "Legacy Quest Player",
        stories: [
            {
                name: "Landscape",
                id: "landscape-video",
                component: y,
                controls: { ...w, orientation: { ...w.orientation, defaultValue: "landscape" } },
            },
            {
                name: "Portrait",
                id: "portrait-video",
                component: y,
                controls: { ...w, orientation: { ...w.orientation, defaultValue: "portrait" } },
            },
        ],
    };
