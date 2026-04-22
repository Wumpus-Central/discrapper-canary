a.d(t, { A: () => J }), a(801541);
var n = a(627968),
    l = a(64700),
    i = a(284009),
    s = a.n(i),
    r = a(889137),
    o = a(412703),
    d = a(440703),
    c = a(267548),
    u = a(668824),
    m = a(573613),
    h = a(534514),
    p = a(331322),
    x = a(821609),
    g = a(834730),
    v = a(243721),
    b = a(192308),
    _ = a(695366),
    f = a(359778),
    j = a(341915),
    A = a(92246),
    y = a(792620),
    C = a(241124),
    E = a(947926),
    S = a(717695),
    N = a(164203),
    k = a(127219),
    I = a(438038),
    D = a(439075),
    T = a(223344),
    w = a(589939),
    O = a(443960),
    R = a(899860),
    L = a(633581),
    M = a(508575),
    P = a(847807),
    U = a(364329),
    B = a(545986),
    G = a(927813),
    F = a(359923);
let V = ["png", "gif", "webp"],
    $ = [...V, "jpg", "jpeg"],
    W = Array.from(new Set([...$, "gif", "mp4", "webm"]));
function H() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { streamProgressSeconds: t = 0, completedAt: a = null, enrolledAt: n = null, claimedAt: l = null } = e;
    return {
        userId: "123",
        questId: "1193992107035983872",
        enrolledAt: n,
        completedAt: a,
        claimedAt: l,
        claimedTier: null,
        lastStreamHeartbeatAt: null,
        streamProgressSeconds: t,
        dismissedQuestContent: 0,
        progress: {},
    };
}
let z = "1193992107035983872",
    K = {
        id: z,
        preview: !0,
        config: {
            id: z,
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
function Y() {
    var e;
    let [t, i] = l.useState(K),
        c = l.useCallback((e) => {
            i({ ...e, preview: !0 });
        }, []),
        [u, _] = l.useState(U.b.UNENROLLED),
        [f, z] = l.useState(!1),
        [Y, q] = l.useState(!1),
        [J, Q] = l.useState(null),
        X =
            ((e = t.config),
            (0, r.YW)(e)
                .with({ configVersion: 2 }, (e) => e.rewardsConfig.rewards)
                .exhaustive());
    function Z(e, a) {
        if (
            "hero" === e ||
            "questBarHero" === e ||
            "gameTile" === e ||
            "logotype" === e ||
            "heroVideo" === e ||
            "questBarHeroVideo" === e
        ) {
            var n, l;
            c({
                ...t,
                config:
                    ((n = t.config),
                    (l = { [e]: a }),
                    (0, r.YW)(n)
                        .with({ configVersion: 2 }, (e) => ({ ...e, assets: { ...e.assets, ...l } }))
                        .exhaustive()),
            });
        }
    }
    function ee(e, a) {
        let n = t.config.taskConfigV2.tasks,
            l = n[o.n.WATCH_VIDEO];
        if (null == l) return;
        let i = { ...l.assets };
        switch (e) {
            case "videoPlayerVideo":
                i.video = { url: a };
                break;
            case "videoPlayerVideoLowRes":
                i.videoLowRes = { url: a };
                break;
            case "videoPlayerThumbnail":
                i.video = { ...i.video, thumbnail: a };
                break;
            default:
                return;
        }
        c({
            ...t,
            config: {
                ...t.config,
                taskConfigV2: { ...t.config.taskConfigV2, tasks: { ...n, [o.n.WATCH_VIDEO]: { ...l, assets: i } } },
            },
        });
    }
    function et(e, a) {
        if ("questName" === e || "gameTitle" === e || "gamePublisher" === e) {
            var n, l;
            c({
                ...t,
                config:
                    ((n = t.config),
                    (l = { [e]: a }),
                    (0, r.YW)(n)
                        .with({ configVersion: 2 }, (e) => ({ ...e, messages: { ...e.messages, ...l } }))
                        .exhaustive()),
            });
        }
    }
    function ea(e, a, n) {
        if ("name" === e || "nameWithArticle" === e) {
            var l, i;
            c({
                ...t,
                config:
                    ((l = t.config),
                    (i = { [e]: a }),
                    (0, r.YW)(l)
                        .with({ configVersion: 2 }, (e) => ({
                            ...e,
                            rewardsConfig: {
                                ...e.rewardsConfig,
                                rewards: e.rewardsConfig.rewards.map((e, t) =>
                                    t === n ? { ...e, messages: { ...e.messages, ...i } } : e,
                                ),
                            },
                        }))
                        .exhaustive()),
            });
        }
    }
    function en(e, a) {
        c({ ...t, config: { ...t.config, colors: { ...t.config.colors, [e]: a } } });
    }
    function el() {
        (0, A.tU)(t.config) && (0, B.hJ)(t, j.uF.GIFT_INVENTORY_FOR_YOU, j.uF.INTERNAL_PREVIEW_TOOL, !0);
    }
    let ei = l.useMemo(() => {
            for (let [e, a] of Object.entries(t.config.taskConfigV2.tasks)) if (null != a.target) return a.target;
            return 10 * G.A.Seconds.MINUTE;
        }, [t.config.taskConfigV2.tasks]),
        es = l.useMemo(() => o.n.WATCH_VIDEO in t.config.taskConfigV2.tasks, [t.config.taskConfigV2.tasks]);
    s()(!1 !== t.preview && null != t.preview, "Preview config must have property preview: true");
    let er = t.config.taskConfigV2.tasks[o.n.WATCH_VIDEO];
    return (0, n.jsxs)(m.Ip, {
        className: F.kL,
        children: [
            (0, n.jsx)(h.D, { variant: "heading-lg/bold", className: F.R_, children: "Quest Preview Tool" }),
            (0, n.jsx)("div", {
                className: F.OA,
                children: (0, n.jsx)(L.A, {
                    onSelect: function (e) {
                        Q(e),
                            null == e ||
                                (_(
                                    (function (e) {
                                        if (null == e.userStatus) return U.b.UNENROLLED;
                                        if (null != e.userStatus.claimedAt) return U.b.CLAIMED;
                                        if (null != e.userStatus.completedAt) return U.b.COMPLETED_100;
                                        let t = (0, y.Yh)(e),
                                            a = t.progressSeconds,
                                            n = t.targetSeconds;
                                        return a / n >= 1
                                            ? U.b.COMPLETED_100
                                            : a / n >= 0.75
                                              ? U.b.COMPLETED_75
                                              : a / n >= 0.5
                                                ? U.b.COMPLETED_50
                                                : a / n >= 0.25
                                                  ? U.b.COMPLETED_25
                                                  : U.b.ENROLLED;
                                    })(e),
                                ),
                                c(e));
                    },
                    quest: J,
                }),
            }),
            (0, n.jsx)(h.D, { variant: "heading-md/semibold", className: F.fV, children: "Task Config" }),
            (0, n.jsx)("div", {
                className: F.OA,
                children: (0, n.jsx)(M.A, {
                    taskDuration: ei,
                    taskConfigV2: t.config.taskConfigV2,
                    onSelect: function (e) {
                        c({ ...t, config: { ...t.config, taskConfigV2: e } });
                    },
                }),
            }),
            (0, n.jsx)(h.D, { variant: "heading-md/semibold", className: F.fV, children: "Messages" }),
            (0, n.jsxs)("div", {
                className: F.OA,
                children: [
                    (0, n.jsx)(R.A, {
                        title: "Quest Name",
                        assetKey: "questName",
                        onMessageChange: et,
                        initialValue: t.config.messages.questName,
                    }),
                    (0, n.jsx)(R.A, {
                        title: "Game Title",
                        assetKey: "gameTitle",
                        onMessageChange: et,
                        initialValue: t.config.messages.gameTitle,
                    }),
                    (0, n.jsx)(R.A, {
                        title: "Game Publisher",
                        assetKey: "gamePublisher",
                        onMessageChange: et,
                        initialValue: t.config.messages.gamePublisher,
                    }),
                    es &&
                        (0, n.jsx)(R.A, {
                            title: "Video Title",
                            assetKey: "videoTitle",
                            onMessageChange: function (e, a) {
                                let n = t.config.taskConfigV2.tasks,
                                    l = n[o.n.WATCH_VIDEO];
                                if (null == l) return;
                                let i = { ...l.messages, [e]: a };
                                c({
                                    ...t,
                                    config: {
                                        ...t.config,
                                        taskConfigV2: {
                                            ...t.config.taskConfigV2,
                                            tasks: { ...n, [o.n.WATCH_VIDEO]: { ...l, messages: i } },
                                        },
                                    },
                                });
                            },
                            initialValue: er?.messages.videoTitle,
                        }),
                ],
            }),
            (0, n.jsx)(h.D, { variant: "heading-md/semibold", className: F.fV, children: "Assets" }),
            (0, n.jsxs)("div", {
                className: F.OA,
                children: [
                    (0, n.jsx)(O.A, {
                        title: "Hero",
                        assetKey: "hero",
                        onFileChange: Z,
                        filters: W,
                        initialValue: t.config.assets.hero,
                    }),
                    (0, n.jsx)(O.A, {
                        title: "Hero Video (optional)",
                        assetKey: "heroVideo",
                        onFileChange: Z,
                        filters: W,
                        initialValue: t.config.assets.heroVideo ?? void 0,
                    }),
                    (0, n.jsx)(O.A, {
                        title: "Quest Bar Hero",
                        assetKey: "questBarHero",
                        onFileChange: Z,
                        filters: W,
                        initialValue: t.config.assets.questBarHero,
                    }),
                    (0, n.jsx)(O.A, {
                        title: "Quest Bar Hero Video (optional)",
                        assetKey: "questBarHeroVideo",
                        onFileChange: Z,
                        filters: W,
                        initialValue: t.config.assets.questBarHeroVideo ?? void 0,
                    }),
                    (0, n.jsx)(O.A, {
                        title: "Game Tile",
                        assetKey: "gameTile",
                        onFileChange: Z,
                        filters: [...$, "svg"],
                        initialValue: t.config.assets.gameTile,
                    }),
                    (0, n.jsx)(O.A, {
                        title: "Logotype",
                        assetKey: "logotype",
                        onFileChange: Z,
                        filters: [...V, "svg"],
                        initialValue: t.config.assets.logotype,
                    }),
                    es &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(O.A, {
                                    title: "Quest Video",
                                    assetKey: "videoPlayerVideo",
                                    onFileChange: ee,
                                    filters: W,
                                    initialValue: er?.assets.video.url,
                                }),
                                (0, n.jsx)(O.A, {
                                    title: "Quest Video (Low Resolution)",
                                    assetKey: "videoPlayerVideoLowRes",
                                    onFileChange: ee,
                                    filters: W,
                                    initialValue: er?.assets.videoLowRes?.url,
                                }),
                                (0, n.jsx)(O.A, {
                                    title: "Video Player Thumbnail (optional)",
                                    assetKey: "videoPlayerThumbnail",
                                    onFileChange: ee,
                                    filters: $,
                                    initialValue: er?.assets.video.thumbnail,
                                }),
                            ],
                        }),
                ],
            }),
            X.map((e, a) =>
                (0, n.jsxs)(
                    "div",
                    {
                        children: [
                            (0, n.jsxs)(h.D, {
                                variant: "heading-md/semibold",
                                className: F.fV,
                                children: ["Reward #", a + 1],
                            }),
                            (0, n.jsxs)("div", {
                                className: F.OA,
                                children: [
                                    (0, n.jsx)(R.A, {
                                        title: "Name",
                                        assetKey: "name",
                                        onMessageChange: (e, t) => ea(e, t, a),
                                        initialValue: e.messages.name,
                                    }),
                                    (0, n.jsx)(R.A, {
                                        title: "Name With Article",
                                        assetKey: "nameWithArticle",
                                        onMessageChange: (e, t) => ea(e, t, a),
                                        initialValue: e.messages.nameWithArticle,
                                    }),
                                    e.type !== d.l.VIRTUAL_CURRENCY &&
                                        (0, n.jsx)(O.A, {
                                            title: "Asset",
                                            assetKey: "asset",
                                            onFileChange: (e, n) =>
                                                (function (e, a, n) {
                                                    if ("asset" === e) {
                                                        var l;
                                                        c({
                                                            ...t,
                                                            config:
                                                                ((l = t.config),
                                                                (0, r.YW)(l)
                                                                    .with({ configVersion: 2 }, (e) => ({
                                                                        ...e,
                                                                        rewardsConfig: {
                                                                            ...e.rewardsConfig,
                                                                            rewards: e.rewardsConfig.rewards.map(
                                                                                (e, t) =>
                                                                                    t === n
                                                                                        ? { ...e, asset: a, skuId: "" }
                                                                                        : e,
                                                                            ),
                                                                        },
                                                                    }))
                                                                    .exhaustive()),
                                                        });
                                                    }
                                                })(e, n, a),
                                            filters: W,
                                            initialValue: e.asset,
                                        }),
                                    (0, n.jsxs)(p.B, {
                                        direction: "vertical",
                                        gap: 8,
                                        children: [
                                            (0, n.jsx)(h.D, {
                                                variant: "heading-sm/semibold",
                                                children: "Claim Modal",
                                            }),
                                            (0, n.jsx)(x.$, {
                                                variant: "primary",
                                                text: "Open Reward Modal",
                                                onClick: el,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    },
                    a,
                ),
            ),
            (0, n.jsx)(h.D, { variant: "heading-md/semibold", className: F.fV, children: "Colors & Quest States" }),
            (0, n.jsxs)("div", {
                className: F.OA,
                children: [
                    (0, n.jsxs)("div", {
                        className: F.OA,
                        style: { marginBottom: 0 },
                        children: [
                            (0, n.jsx)(T.A, {
                                title: "Primary",
                                colorKey: "primary",
                                onChange: en,
                                value: t.config.colors.primary,
                            }),
                            (0, n.jsx)(T.A, {
                                title: "Secondary",
                                colorKey: "secondary",
                                onChange: en,
                                value: t.config.colors.secondary,
                            }),
                        ],
                    }),
                    (0, n.jsx)("div", { className: F.OA, children: (0, n.jsx)(P.A, {}) }),
                    (0, n.jsx)(U.A, {
                        onChange: function (e) {
                            switch ((_(e), e)) {
                                case U.b.UNENROLLED:
                                    c({ ...t, userStatus: null });
                                    break;
                                case U.b.ENROLLED:
                                    c({ ...t, userStatus: H({ enrolledAt: new Date().toISOString() }) });
                                    break;
                                case U.b.COMPLETED_25:
                                    c({
                                        ...t,
                                        userStatus: H({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.25 * ei,
                                        }),
                                    });
                                    break;
                                case U.b.COMPLETED_50:
                                    c({
                                        ...t,
                                        userStatus: H({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.5 * ei,
                                        }),
                                    });
                                    break;
                                case U.b.COMPLETED_75:
                                    c({
                                        ...t,
                                        userStatus: H({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.75 * ei,
                                        }),
                                    });
                                    break;
                                case U.b.COMPLETED_100:
                                    c({
                                        ...t,
                                        userStatus: H({
                                            completedAt: new Date().toISOString(),
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: ei,
                                        }),
                                    });
                                    break;
                                case U.b.CLAIMED:
                                    c({
                                        ...t,
                                        userStatus: H({
                                            claimedAt: new Date().toISOString(),
                                            completedAt: new Date().toISOString(),
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: ei,
                                        }),
                                    });
                            }
                        },
                        value: u,
                    }),
                ],
            }),
            (0, n.jsx)(h.D, { variant: "heading-lg/bold", className: F.R_, children: "Component Previews" }),
            (0, n.jsxs)("div", {
                className: F.$$,
                children: [
                    (0, n.jsxs)(w.A, {
                        withBorder: !0,
                        children: [
                            (0, n.jsx)(h.D, { variant: "heading-sm/semibold", children: "Quest Bar" }),
                            (0, n.jsxs)("div", {
                                className: F.l4,
                                children: [
                                    t.userStatus?.claimedAt != null &&
                                        (0, n.jsx)(g.E, {
                                            color: "text-subtle",
                                            variant: "text-sm/normal",
                                            children: "The Quest Bar is hidden when the user has claimed the reward.",
                                        }),
                                    (0, n.jsx)("div", {
                                        className: F.ok,
                                        children: (0, n.jsx)(C.jY, {
                                            isPreview: !0,
                                            source: "preview",
                                            questId: "0",
                                            children: (0, n.jsx)(S.A, { children: (0, n.jsx)(E.Y, { quest: t }) }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, n.jsxs)(w.A, {
                        withBorder: !0,
                        children: [
                            (0, n.jsx)(h.D, { variant: "heading-sm/semibold", children: "Quest Home Card" }),
                            (0, n.jsx)(C.jY, {
                                isPreview: !0,
                                source: "preview",
                                questId: "0",
                                children: (0, n.jsx)(D.A, {
                                    quest: t,
                                    className: F.d,
                                    questContent: j.uF.QUEST_HOME_DESKTOP,
                                    contentPosition: 0,
                                    rowIndex: 0,
                                    sourceQuestContent: j.uF.INTERNAL_PREVIEW_TOOL,
                                }),
                            }),
                        ],
                    }),
                    (0, n.jsxs)(w.A, {
                        withBorder: !0,
                        children: [
                            (0, n.jsx)(h.D, { variant: "heading-sm/semibold", children: "Channel Call Header" }),
                            t.userStatus?.claimedAt != null &&
                                (0, n.jsx)(g.E, {
                                    color: "text-subtle",
                                    variant: "text-sm/normal",
                                    children:
                                        "The Quest Channel Call Header is hidden when the user has claimed the reward.",
                                }),
                            (0, n.jsx)("div", {
                                className: F.l4,
                                children: (0, n.jsx)(C.jY, {
                                    isPreview: !0,
                                    source: "preview",
                                    questId: "0",
                                    children: (0, n.jsx)("div", {
                                        className: F.Jr,
                                        children: (0, n.jsx)(N.A, {
                                            channelId: "123",
                                            previewQuest: t,
                                            isParticipatingOverride: f,
                                        }),
                                    }),
                                }),
                            }),
                        ],
                    }),
                    (0, n.jsx)("div", {
                        className: F.NY,
                        children: (0, n.jsx)(v.d, {
                            label: "Is Participating:",
                            checked: f,
                            onChange: function (e) {
                                z(e);
                            },
                        }),
                    }),
                    (0, n.jsxs)(w.A, {
                        withBorder: !0,
                        children: [
                            (0, n.jsx)(h.D, { variant: "heading-sm/semibold", children: "Quest Card Embed" }),
                            Y
                                ? (0, n.jsx)(k.l, { questId: t.id })
                                : (0, n.jsx)(
                                      I.R,
                                      {
                                          quest: t,
                                          location: j.uF.QUESTS_EMBED,
                                          sourceQuestContent: j.uF.INTERNAL_PREVIEW_TOOL,
                                      },
                                      t.id,
                                  ),
                        ],
                    }),
                    (0, n.jsx)("div", {
                        className: F.NY,
                        children: (0, n.jsx)(v.d, { label: "Invalid Quests Embed:", checked: Y, onChange: q }),
                    }),
                    es &&
                        (0, n.jsxs)(w.A, {
                            withBorder: !0,
                            allowClicks: !0,
                            children: [
                                (0, n.jsx)(h.D, { variant: "heading-sm/semibold", children: "Video Player" }),
                                (0, n.jsx)(x.$, {
                                    variant: "primary",
                                    text: "Open Video Player Modal",
                                    onClick: () => {
                                        let e = performance.now();
                                        (0, b.openModalLazy)(async () => {
                                            let { default: l } = await Promise.all([
                                                a.e("92868"),
                                                a.e("19482"),
                                                a.e("7634"),
                                                a.e("44842"),
                                            ]).then(a.bind(a, 201257));
                                            return (a) =>
                                                (0, n.jsx)(l, {
                                                    ...a,
                                                    openStartClockTime: e,
                                                    videoSessionId: "fake-quest-session-id",
                                                    questId: t.id ?? "fake-quest-id",
                                                    overrideQuest: t,
                                                    autoplay: !0,
                                                    sourceQuestContent: j.uF.INTERNAL_PREVIEW_TOOL,
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
class q extends l.Component {
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
            ? (0, n.jsxs)("div", {
                  className: F.TA,
                  children: [
                      (0, n.jsx)(_.E, { className: F.Yw }),
                      (0, n.jsx)(h.D, {
                          variant: "heading-lg/semibold",
                          children: "Something broke in the Quest preview tool :(",
                      }),
                      (0, n.jsx)(x.$, { variant: "secondary", text: "Reset", onClick: this.handleResetState }),
                      null != e.message &&
                          (0, n.jsx)(f.Z, {
                              className: F.Fx,
                              children: (0, n.jsx)("code", { className: F.gJ, children: e.message }),
                          }),
                  ],
              })
            : (0, n.jsx)(Y, {}, t);
    }
}
let J = q;
