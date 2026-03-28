n.d(t, { A: () => V }), n(801541);
var a = n(627968),
    i = n(64700),
    s = n(284009),
    l = n.n(s),
    r = n(889137),
    o = n(412703),
    d = n(440703),
    c = n(267548),
    u = n(668824),
    m = n(397927),
    h = n(341915),
    x = n(92246),
    p = n(792620),
    g = n(241124),
    _ = n(947926),
    f = n(717695),
    v = n(164203),
    b = n(127219),
    j = n(438038),
    A = n(439075),
    C = n(223344),
    y = n(589939),
    T = n(443960),
    S = n(899860),
    E = n(633581),
    N = n(508575),
    I = n(847807),
    k = n(364329),
    O = n(545986),
    R = n(927813),
    w = n(163459);
let D = ["png", "gif", "webp"],
    P = [...D, "jpg", "jpeg"],
    M = Array.from(new Set([...P, "gif", "mp4", "webm"]));
function L() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { streamProgressSeconds: t = 0, completedAt: n = null, enrolledAt: a = null, claimedAt: i = null } = e;
    return {
        userId: "123",
        questId: "1193992107035983872",
        enrolledAt: a,
        completedAt: n,
        claimedAt: i,
        claimedTier: null,
        lastStreamHeartbeatAt: null,
        streamProgressSeconds: t,
        dismissedQuestContent: 0,
        progress: {},
    };
}
let U = "1193992107035983872",
    B = {
        id: U,
        preview: !0,
        config: {
            id: U,
            configVersion: 2,
            startsAt: "2024-01-01T00:00:00+00:00",
            expiresAt: "2030-01-01T00:00:00+00:00",
            application: { id: "123", name: "Sky Runners" },
            messages: { questName: "Sky Runners", gameTitle: "Sky Runners", gamePublisher: "Discord" },
            colors: { primary: "#B377F3", secondary: "#5865F2" },
            rewardsConfig: {
                assignmentMethod: 1,
                rewards: [
                    {
                        skuId: "",
                        asset: "reward.png",
                        assetVideo: null,
                        type: d.l.REWARD_CODE,
                        messages: {
                            name: "Orange Buddy Jetpack",
                            nameWithArticle: "an Orange Buddy Jetpack",
                            redemptionInstructionsByPlatform: {
                                0: "This code can be used on any platform!",
                                1: "Redeem your code on your Xbox.",
                                2: "Redeem your code on your Playstation.",
                                3: "Redeem your code on your Switch.",
                                4: "Redeem your code on your PC.",
                            },
                        },
                    },
                ],
                rewardsExpireAt: "2030-01-01T00:00:00+00:00",
                platforms: [0, 4, 2, 3, 1],
            },
            assets: {
                hero: "hero.png",
                heroVideo: null,
                questBarHero: "quests_bar_hero.webm",
                questBarHeroVideo: null,
                gameTile: "game_tile.png",
                logotype: "game_logotype.png",
                questBarHeroBlurhash: null,
            },
            taskConfigV2: {
                joinOperator: u.K.AND,
                tasks: { [o.n.PLAY_ON_DESKTOP]: { type: o.n.PLAY_ON_DESKTOP, target: 300 } },
            },
            features: [],
            sharePolicy: c.i.SHAREABLE_EVERYWHERE,
            ctaConfig: { link: "https://discord.com/", buttonLabel: "Learn More" },
        },
        userStatus: null,
        targetedContent: [],
    };
function G() {
    var e;
    let [t, s] = i.useState(B),
        c = i.useCallback((e) => {
            s({ ...e, preview: !0 });
        }, []),
        [u, U] = i.useState(k.b.UNENROLLED),
        [G, F] = i.useState(!1),
        [V, W] = i.useState(!1),
        [H, K] = i.useState(null),
        z =
            ((e = t.config),
            (0, r.YW)(e)
                .with({ configVersion: 2 }, (e) => e.rewardsConfig.rewards)
                .exhaustive());
    function $(e, n) {
        if (
            "hero" === e ||
            "questBarHero" === e ||
            "gameTile" === e ||
            "logotype" === e ||
            "heroVideo" === e ||
            "questBarHeroVideo" === e
        ) {
            var a, i;
            c({
                ...t,
                config:
                    ((a = t.config),
                    (i = { [e]: n }),
                    (0, r.YW)(a)
                        .with({ configVersion: 2 }, (e) => ({ ...e, assets: { ...e.assets, ...i } }))
                        .exhaustive()),
            });
        }
    }
    function q(e, n) {
        let a = t.config.taskConfigV2.tasks,
            i = a[o.n.WATCH_VIDEO];
        if (null == i) return;
        let s = { ...i.assets };
        switch (e) {
            case "videoPlayerVideo":
                s.video = { url: n };
                break;
            case "videoPlayerVideoLowRes":
                s.videoLowRes = { url: n };
                break;
            case "videoPlayerThumbnail":
                s.video = { ...s.video, thumbnail: n };
                break;
            default:
                return;
        }
        c({
            ...t,
            config: {
                ...t.config,
                taskConfigV2: { ...t.config.taskConfigV2, tasks: { ...a, [o.n.WATCH_VIDEO]: { ...i, assets: s } } },
            },
        });
    }
    function Q(e, n) {
        if ("questName" === e || "gameTitle" === e || "gamePublisher" === e) {
            var a, i;
            c({
                ...t,
                config:
                    ((a = t.config),
                    (i = { [e]: n }),
                    (0, r.YW)(a)
                        .with({ configVersion: 2 }, (e) => ({ ...e, messages: { ...e.messages, ...i } }))
                        .exhaustive()),
            });
        }
    }
    function Y(e, n, a) {
        if ("name" === e || "nameWithArticle" === e) {
            var i, s;
            c({
                ...t,
                config:
                    ((i = t.config),
                    (s = { [e]: n }),
                    (0, r.YW)(i)
                        .with({ configVersion: 2 }, (e) => ({
                            ...e,
                            rewardsConfig: {
                                ...e.rewardsConfig,
                                rewards: e.rewardsConfig.rewards.map((e, t) =>
                                    t === a ? { ...e, messages: { ...e.messages, ...s } } : e,
                                ),
                            },
                        }))
                        .exhaustive()),
            });
        }
    }
    function J(e, n) {
        c({ ...t, config: { ...t.config, colors: { ...t.config.colors, [e]: n } } });
    }
    function X() {
        (0, x.tU)(t.config) && (0, O.hJ)(t, h.uF.GIFT_INVENTORY_FOR_YOU, h.uF.INTERNAL_PREVIEW_TOOL, !0);
    }
    let Z = i.useMemo(() => {
            for (let [e, n] of Object.entries(t.config.taskConfigV2.tasks)) if (null != n.target) return n.target;
            return 10 * R.A.Seconds.MINUTE;
        }, [t.config.taskConfigV2.tasks]),
        ee = i.useMemo(() => o.n.WATCH_VIDEO in t.config.taskConfigV2.tasks, [t.config.taskConfigV2.tasks]);
    l()(!1 !== t.preview && null != t.preview, "Preview config must have property preview: true");
    let et = t.config.taskConfigV2.tasks[o.n.WATCH_VIDEO];
    return (0, a.jsxs)(m.IpV, {
        className: w.kL,
        children: [
            (0, a.jsx)(m.Heading, { variant: "heading-lg/bold", className: w.R_, children: "Quest Preview Tool" }),
            (0, a.jsx)("div", {
                className: w.OA,
                children: (0, a.jsx)(E.A, {
                    onSelect: function (e) {
                        K(e),
                            null == e ||
                                (U(
                                    (function (e) {
                                        if (null == e.userStatus) return k.b.UNENROLLED;
                                        if (null != e.userStatus.claimedAt) return k.b.CLAIMED;
                                        if (null != e.userStatus.completedAt) return k.b.COMPLETED_100;
                                        let t = (0, p.Yh)(e),
                                            n = t.progressSeconds,
                                            a = t.targetSeconds;
                                        return n / a >= 1
                                            ? k.b.COMPLETED_100
                                            : n / a >= 0.75
                                              ? k.b.COMPLETED_75
                                              : n / a >= 0.5
                                                ? k.b.COMPLETED_50
                                                : n / a >= 0.25
                                                  ? k.b.COMPLETED_25
                                                  : k.b.ENROLLED;
                                    })(e),
                                ),
                                c(e));
                    },
                    quest: H,
                }),
            }),
            (0, a.jsx)(m.Heading, { variant: "heading-md/semibold", className: w.fV, children: "Task Config" }),
            (0, a.jsx)("div", {
                className: w.OA,
                children: (0, a.jsx)(N.A, {
                    taskDuration: Z,
                    taskConfigV2: t.config.taskConfigV2,
                    onSelect: function (e) {
                        c({ ...t, config: { ...t.config, taskConfigV2: e } });
                    },
                }),
            }),
            (0, a.jsx)(m.Heading, { variant: "heading-md/semibold", className: w.fV, children: "Messages" }),
            (0, a.jsxs)("div", {
                className: w.OA,
                children: [
                    (0, a.jsx)(S.A, {
                        title: "Quest Name",
                        assetKey: "questName",
                        onMessageChange: Q,
                        initialValue: t.config.messages.questName,
                    }),
                    (0, a.jsx)(S.A, {
                        title: "Game Title",
                        assetKey: "gameTitle",
                        onMessageChange: Q,
                        initialValue: t.config.messages.gameTitle,
                    }),
                    (0, a.jsx)(S.A, {
                        title: "Game Publisher",
                        assetKey: "gamePublisher",
                        onMessageChange: Q,
                        initialValue: t.config.messages.gamePublisher,
                    }),
                    ee &&
                        (0, a.jsx)(S.A, {
                            title: "Video Title",
                            assetKey: "videoTitle",
                            onMessageChange: function (e, n) {
                                let a = t.config.taskConfigV2.tasks,
                                    i = a[o.n.WATCH_VIDEO];
                                if (null == i) return;
                                let s = { ...i.messages, [e]: n };
                                c({
                                    ...t,
                                    config: {
                                        ...t.config,
                                        taskConfigV2: {
                                            ...t.config.taskConfigV2,
                                            tasks: { ...a, [o.n.WATCH_VIDEO]: { ...i, messages: s } },
                                        },
                                    },
                                });
                            },
                            initialValue: et?.messages.videoTitle,
                        }),
                ],
            }),
            (0, a.jsx)(m.Heading, { variant: "heading-md/semibold", className: w.fV, children: "Assets" }),
            (0, a.jsxs)("div", {
                className: w.OA,
                children: [
                    (0, a.jsx)(T.A, {
                        title: "Hero",
                        assetKey: "hero",
                        onFileChange: $,
                        filters: M,
                        initialValue: t.config.assets.hero,
                    }),
                    (0, a.jsx)(T.A, {
                        title: "Hero Video (optional)",
                        assetKey: "heroVideo",
                        onFileChange: $,
                        filters: M,
                        initialValue: t.config.assets.heroVideo ?? void 0,
                    }),
                    (0, a.jsx)(T.A, {
                        title: "Quest Bar Hero",
                        assetKey: "questBarHero",
                        onFileChange: $,
                        filters: M,
                        initialValue: t.config.assets.questBarHero,
                    }),
                    (0, a.jsx)(T.A, {
                        title: "Quest Bar Hero Video (optional)",
                        assetKey: "questBarHeroVideo",
                        onFileChange: $,
                        filters: M,
                        initialValue: t.config.assets.questBarHeroVideo ?? void 0,
                    }),
                    (0, a.jsx)(T.A, {
                        title: "Game Tile",
                        assetKey: "gameTile",
                        onFileChange: $,
                        filters: [...P, "svg"],
                        initialValue: t.config.assets.gameTile,
                    }),
                    (0, a.jsx)(T.A, {
                        title: "Logotype",
                        assetKey: "logotype",
                        onFileChange: $,
                        filters: [...D, "svg"],
                        initialValue: t.config.assets.logotype,
                    }),
                    ee &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(T.A, {
                                    title: "Quest Video",
                                    assetKey: "videoPlayerVideo",
                                    onFileChange: q,
                                    filters: M,
                                    initialValue: et?.assets.video.url,
                                }),
                                (0, a.jsx)(T.A, {
                                    title: "Quest Video (Low Resolution)",
                                    assetKey: "videoPlayerVideoLowRes",
                                    onFileChange: q,
                                    filters: M,
                                    initialValue: et?.assets.videoLowRes?.url,
                                }),
                                (0, a.jsx)(T.A, {
                                    title: "Video Player Thumbnail (optional)",
                                    assetKey: "videoPlayerThumbnail",
                                    onFileChange: q,
                                    filters: P,
                                    initialValue: et?.assets.video.thumbnail,
                                }),
                            ],
                        }),
                ],
            }),
            z.map((e, n) =>
                (0, a.jsxs)(
                    "div",
                    {
                        children: [
                            (0, a.jsxs)(m.Heading, {
                                variant: "heading-md/semibold",
                                className: w.fV,
                                children: ["Reward #", n + 1],
                            }),
                            (0, a.jsxs)("div", {
                                className: w.OA,
                                children: [
                                    (0, a.jsx)(S.A, {
                                        title: "Name",
                                        assetKey: "name",
                                        onMessageChange: (e, t) => Y(e, t, n),
                                        initialValue: e.messages.name,
                                    }),
                                    (0, a.jsx)(S.A, {
                                        title: "Name With Article",
                                        assetKey: "nameWithArticle",
                                        onMessageChange: (e, t) => Y(e, t, n),
                                        initialValue: e.messages.nameWithArticle,
                                    }),
                                    e.type !== d.l.VIRTUAL_CURRENCY &&
                                        (0, a.jsx)(T.A, {
                                            title: "Asset",
                                            assetKey: "asset",
                                            onFileChange: (e, a) =>
                                                (function (e, n, a) {
                                                    if ("asset" === e) {
                                                        var i;
                                                        c({
                                                            ...t,
                                                            config:
                                                                ((i = t.config),
                                                                (0, r.YW)(i)
                                                                    .with({ configVersion: 2 }, (e) => ({
                                                                        ...e,
                                                                        rewardsConfig: {
                                                                            ...e.rewardsConfig,
                                                                            rewards: e.rewardsConfig.rewards.map(
                                                                                (e, t) =>
                                                                                    t === a
                                                                                        ? { ...e, asset: n, skuId: "" }
                                                                                        : e,
                                                                            ),
                                                                        },
                                                                    }))
                                                                    .exhaustive()),
                                                        });
                                                    }
                                                })(e, a, n),
                                            filters: M,
                                            initialValue: e.asset,
                                        }),
                                    (0, a.jsxs)(m.BJc, {
                                        direction: "vertical",
                                        gap: 8,
                                        children: [
                                            (0, a.jsx)(m.Heading, {
                                                variant: "heading-sm/semibold",
                                                children: "Claim Modal",
                                            }),
                                            (0, a.jsx)(m.Button, {
                                                variant: "primary",
                                                text: "Open Reward Modal",
                                                onClick: X,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    },
                    n,
                ),
            ),
            (0, a.jsx)(m.Heading, {
                variant: "heading-md/semibold",
                className: w.fV,
                children: "Colors & Quest States",
            }),
            (0, a.jsxs)("div", {
                className: w.OA,
                children: [
                    (0, a.jsxs)("div", {
                        className: w.OA,
                        style: { marginBottom: 0 },
                        children: [
                            (0, a.jsx)(C.A, {
                                title: "Primary",
                                colorKey: "primary",
                                onChange: J,
                                value: t.config.colors.primary,
                            }),
                            (0, a.jsx)(C.A, {
                                title: "Secondary",
                                colorKey: "secondary",
                                onChange: J,
                                value: t.config.colors.secondary,
                            }),
                        ],
                    }),
                    (0, a.jsx)("div", { className: w.OA, children: (0, a.jsx)(I.A, {}) }),
                    (0, a.jsx)(k.A, {
                        onChange: function (e) {
                            switch ((U(e), e)) {
                                case k.b.UNENROLLED:
                                    c({ ...t, userStatus: null });
                                    break;
                                case k.b.ENROLLED:
                                    c({ ...t, userStatus: L({ enrolledAt: new Date().toISOString() }) });
                                    break;
                                case k.b.COMPLETED_25:
                                    c({
                                        ...t,
                                        userStatus: L({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.25 * Z,
                                        }),
                                    });
                                    break;
                                case k.b.COMPLETED_50:
                                    c({
                                        ...t,
                                        userStatus: L({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.5 * Z,
                                        }),
                                    });
                                    break;
                                case k.b.COMPLETED_75:
                                    c({
                                        ...t,
                                        userStatus: L({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.75 * Z,
                                        }),
                                    });
                                    break;
                                case k.b.COMPLETED_100:
                                    c({
                                        ...t,
                                        userStatus: L({
                                            completedAt: new Date().toISOString(),
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: Z,
                                        }),
                                    });
                                    break;
                                case k.b.CLAIMED:
                                    c({
                                        ...t,
                                        userStatus: L({
                                            claimedAt: new Date().toISOString(),
                                            completedAt: new Date().toISOString(),
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: Z,
                                        }),
                                    });
                            }
                        },
                        value: u,
                    }),
                ],
            }),
            (0, a.jsx)(m.Heading, { variant: "heading-lg/bold", className: w.R_, children: "Component Previews" }),
            (0, a.jsxs)("div", {
                className: w.$$,
                children: [
                    (0, a.jsxs)(y.A, {
                        withBorder: !0,
                        children: [
                            (0, a.jsx)(m.Heading, { variant: "heading-sm/semibold", children: "Quest Bar" }),
                            (0, a.jsxs)("div", {
                                className: w.l4,
                                children: [
                                    t.userStatus?.claimedAt != null &&
                                        (0, a.jsx)(m.Text, {
                                            color: "text-subtle",
                                            variant: "text-sm/normal",
                                            children: "The Quest Bar is hidden when the user has claimed the reward.",
                                        }),
                                    (0, a.jsx)("div", {
                                        className: w.ok,
                                        children: (0, a.jsx)(g.jY, {
                                            isPreview: !0,
                                            source: "preview",
                                            questId: "0",
                                            children: (0, a.jsx)(f.A, { children: (0, a.jsx)(_.Y, { quest: t }) }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, a.jsxs)(y.A, {
                        withBorder: !0,
                        children: [
                            (0, a.jsx)(m.Heading, { variant: "heading-sm/semibold", children: "Quest Home Card" }),
                            (0, a.jsx)(g.jY, {
                                isPreview: !0,
                                source: "preview",
                                questId: "0",
                                children: (0, a.jsx)(A.A, {
                                    quest: t,
                                    className: w.d,
                                    questContent: h.uF.QUEST_HOME_DESKTOP,
                                    contentPosition: 0,
                                    rowIndex: 0,
                                    sourceQuestContent: h.uF.INTERNAL_PREVIEW_TOOL,
                                }),
                            }),
                        ],
                    }),
                    (0, a.jsxs)(y.A, {
                        withBorder: !0,
                        children: [
                            (0, a.jsx)(m.Heading, { variant: "heading-sm/semibold", children: "Channel Call Header" }),
                            t.userStatus?.claimedAt != null &&
                                (0, a.jsx)(m.Text, {
                                    color: "text-subtle",
                                    variant: "text-sm/normal",
                                    children:
                                        "The Quest Channel Call Header is hidden when the user has claimed the reward.",
                                }),
                            (0, a.jsx)("div", {
                                className: w.l4,
                                children: (0, a.jsx)(g.jY, {
                                    isPreview: !0,
                                    source: "preview",
                                    questId: "0",
                                    children: (0, a.jsx)("div", {
                                        className: w.Jr,
                                        children: (0, a.jsx)(v.A, {
                                            channelId: "123",
                                            previewQuest: t,
                                            isParticipatingOverride: G,
                                        }),
                                    }),
                                }),
                            }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: w.NY,
                        children: (0, a.jsx)(m.dOG, {
                            label: "Is Participating:",
                            checked: G,
                            onChange: function (e) {
                                F(e);
                            },
                        }),
                    }),
                    (0, a.jsxs)(y.A, {
                        withBorder: !0,
                        children: [
                            (0, a.jsx)(m.Heading, { variant: "heading-sm/semibold", children: "Quest Card Embed" }),
                            V
                                ? (0, a.jsx)(b.l, { questId: t.id })
                                : (0, a.jsx)(
                                      j.R,
                                      {
                                          quest: t,
                                          location: h.uF.QUESTS_EMBED,
                                          sourceQuestContent: h.uF.INTERNAL_PREVIEW_TOOL,
                                      },
                                      t.id,
                                  ),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: w.NY,
                        children: (0, a.jsx)(m.dOG, { label: "Invalid Quests Embed:", checked: V, onChange: W }),
                    }),
                    ee &&
                        (0, a.jsxs)(y.A, {
                            withBorder: !0,
                            allowClicks: !0,
                            children: [
                                (0, a.jsx)(m.Heading, { variant: "heading-sm/semibold", children: "Video Player" }),
                                (0, a.jsx)(m.Button, {
                                    variant: "primary",
                                    text: "Open Video Player Modal",
                                    onClick: () => {
                                        (0, m.mMO)(async () => {
                                            let { default: e } = await Promise.all([
                                                n.e("92868"),
                                                n.e("29636"),
                                                n.e("7634"),
                                                n.e("5501"),
                                            ]).then(n.bind(n, 201257));
                                            return (n) =>
                                                (0, a.jsx)(e, {
                                                    ...n,
                                                    openStartClockTime: performance.now(),
                                                    videoSessionId: "fake-quest-session-id",
                                                    questId: t.id ?? "fake-quest-id",
                                                    overrideQuest: t,
                                                    autoplay: !0,
                                                    sourceQuestContent: h.uF.INTERNAL_PREVIEW_TOOL,
                                                });
                                        });
                                    },
                                }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
class F extends i.Component {
    state = { error: null, renderKey: 0 };
    componentDidCatch(e) {
        this.setState({ error: e });
    }
    handleResetState = () => {
        this.setState((e) => ({ error: null, renderKey: e.renderKey + 1 }));
    };
    render() {
        let { error: e, renderKey: t } = this.state;
        return null != e
            ? (0, a.jsxs)("div", {
                  className: w.TA,
                  children: [
                      (0, a.jsx)(m.EpV, { className: w.Yw }),
                      (0, a.jsx)(m.Heading, {
                          variant: "heading-lg/semibold",
                          children: "Something broke in the Quest preview tool :(",
                      }),
                      (0, a.jsx)(m.Button, { variant: "secondary", text: "Reset", onClick: this.handleResetState }),
                      null != e.message &&
                          (0, a.jsx)(m.ZpM, {
                              className: w.Fx,
                              children: (0, a.jsx)("code", { className: w.gJ, children: e.message }),
                          }),
                  ],
              })
            : (0, a.jsx)(G, {}, t);
    }
}
let V = F;
