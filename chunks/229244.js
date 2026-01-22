n.d(t, {
    A: () => K,
}),
    n(896048),
    n(801541);
var a = n(627968),
    l = n(64700),
    i = n(284009),
    r = n.n(i),
    s = n(889137),
    o = n(412703),
    c = n(440703),
    d = n(267548),
    u = n(668824),
    m = n(397927),
    p = n(341915),
    h = n(92246),
    f = n(792620),
    x = n(241124),
    b = n(947926),
    g = n(717695),
    v = n(164203),
    j = n(127219),
    y = n(438038),
    _ = n(439075),
    A = n(223344),
    C = n(589939),
    S = n(443960),
    O = n(899860),
    E = n(633581),
    N = n(508575),
    T = n(847807),
    I = n(364329),
    w = n(545986),
    k = n(927813),
    P = n(350246);

function R(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function D(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            a.forEach(function (t) {
                R(e, t, n[t]);
            });
    }
    return e;
}

function M(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var a = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, a);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let L = ["png", "gif", "webp"],
    U = [...L, "jpg", "jpeg"],
    B = Array.from(new Set([...U, "gif", "mp4", "webm"]));

function G() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { streamProgressSeconds: t = 0, completedAt: n = null, enrolledAt: a = null, claimedAt: l = null } = e;
    return {
        userId: "123",
        questId: "1193992107035983872",
        enrolledAt: a,
        completedAt: n,
        claimedAt: l,
        claimedTier: null,
        lastStreamHeartbeatAt: null,
        streamProgressSeconds: t,
        dismissedQuestContent: 0,
        progress: {},
    };
}
let F = "1193992107035983872",
    V = {
        id: F,
        preview: !0,
        config: {
            id: F,
            configVersion: 2,
            startsAt: "2024-01-01T00:00:00+00:00",
            expiresAt: "2030-01-01T00:00:00+00:00",
            application: {
                id: "123",
                name: "Sky Runners",
            },
            messages: {
                questName: "Sky Runners",
                gameTitle: "Sky Runners",
                gamePublisher: "Discord",
            },
            colors: {
                primary: "#B377F3",
                secondary: "#5865F2",
            },
            rewardsConfig: {
                assignmentMethod: 1,
                rewards: [
                    {
                        skuId: "",
                        asset: "reward.png",
                        assetVideo: null,
                        type: c.l.REWARD_CODE,
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
            },
            taskConfigV2: {
                joinOperator: u.K.AND,
                tasks: {
                    [o.n.PLAY_ON_DESKTOP]: {
                        type: o.n.PLAY_ON_DESKTOP,
                        target: 300,
                    },
                },
            },
            features: [],
            sharePolicy: d.i.SHAREABLE_EVERYWHERE,
            ctaConfig: {
                link: "https://discord.com/",
                buttonLabel: "Learn More",
            },
        },
        userStatus: null,
        targetedContent: [],
    };

function H() {
    var e, t, i, d, u, R;
    let [F, H] = l.useState(V),
        W = l.useCallback((e) => {
            H(
                M(D({}, e), {
                    preview: !0,
                }),
            );
        }, []),
        [K, z] = l.useState(I.b.UNENROLLED),
        [q, Q] = l.useState(!1),
        [Y, J] = l.useState(!1),
        [X, $] = l.useState(null),
        Z =
            ((R = F.config),
            (0, s.YW)(R)
                .with(
                    {
                        configVersion: 2,
                    },
                    (e) => e.rewardsConfig.rewards,
                )
                .exhaustive());

    function ee(e, t) {
        if (
            "hero" === e ||
            "questBarHero" === e ||
            "gameTile" === e ||
            "logotype" === e ||
            "heroVideo" === e ||
            "questBarHeroVideo" === e
        ) {
            var n, a;
            W(
                M(D({}, F), {
                    config:
                        ((n = F.config),
                        (a = {
                            [e]: t,
                        }),
                        (0, s.YW)(n)
                            .with(
                                {
                                    configVersion: 2,
                                },
                                (e) =>
                                    M(D({}, e), {
                                        assets: D({}, e.assets, a),
                                    }),
                            )
                            .exhaustive()),
                }),
            );
        }
    }

    function et(e, t) {
        let n = F.config.taskConfigV2.tasks,
            a = n[o.n.WATCH_VIDEO];
        if (null == a) return;
        let l = D({}, a.assets);
        switch (e) {
            case "videoPlayerVideo":
                l.video = {
                    url: t,
                };
                break;
            case "videoPlayerVideoLowRes":
                l.videoLowRes = {
                    url: t,
                };
                break;
            case "videoPlayerThumbnail":
                l.video = M(D({}, l.video), {
                    thumbnail: t,
                });
                break;
            default:
                return;
        }
        W(
            M(D({}, F), {
                config: M(D({}, F.config), {
                    taskConfigV2: M(D({}, F.config.taskConfigV2), {
                        tasks: M(D({}, n), {
                            [o.n.WATCH_VIDEO]: M(D({}, a), {
                                assets: l,
                            }),
                        }),
                    }),
                }),
            }),
        );
    }

    function en(e, t) {
        if ("questName" === e || "gameTitle" === e || "gamePublisher" === e) {
            var n, a;
            W(
                M(D({}, F), {
                    config:
                        ((n = F.config),
                        (a = {
                            [e]: t,
                        }),
                        (0, s.YW)(n)
                            .with(
                                {
                                    configVersion: 2,
                                },
                                (e) =>
                                    M(D({}, e), {
                                        messages: D({}, e.messages, a),
                                    }),
                            )
                            .exhaustive()),
                }),
            );
        }
    }

    function ea(e, t, n) {
        if ("name" === e || "nameWithArticle" === e) {
            var a, l;
            W(
                M(D({}, F), {
                    config:
                        ((a = F.config),
                        (l = {
                            [e]: t,
                        }),
                        (0, s.YW)(a)
                            .with(
                                {
                                    configVersion: 2,
                                },
                                (e) =>
                                    M(D({}, e), {
                                        rewardsConfig: M(D({}, e.rewardsConfig), {
                                            rewards: e.rewardsConfig.rewards.map((e, t) =>
                                                t === n
                                                    ? M(D({}, e), {
                                                          messages: D({}, e.messages, l),
                                                      })
                                                    : e,
                                            ),
                                        }),
                                    }),
                            )
                            .exhaustive()),
                }),
            );
        }
    }

    function el(e, t) {
        W(
            M(D({}, F), {
                config: M(D({}, F.config), {
                    colors: M(D({}, F.config.colors), {
                        [e]: t,
                    }),
                }),
            }),
        );
    }

    function ei() {
        (0, h.tU)(F.config) && (0, w.hJ)(F, p.uF.GIFT_INVENTORY_FOR_YOU, p.uF.INTERNAL_PREVIEW_TOOL, !0);
    }
    let er = l.useMemo(() => {
            for (let [e, t] of Object.entries(F.config.taskConfigV2.tasks)) if (null != t.target) return t.target;
            return 10 * k.A.Seconds.MINUTE;
        }, [F.config.taskConfigV2.tasks]),
        es = l.useMemo(() => o.n.WATCH_VIDEO in F.config.taskConfigV2.tasks, [F.config.taskConfigV2.tasks]);
    r()(!1 !== F.preview && null != F.preview, "Preview config must have property preview: true");
    let eo = F.config.taskConfigV2.tasks[o.n.WATCH_VIDEO];
    return (0, a.jsxs)(m.IpV, {
        className: P.kL,
        children: [
            (0, a.jsx)(m.Heading, {
                variant: "heading-lg/bold",
                className: P.R_,
                children: "Quest Preview Tool",
            }),
            (0, a.jsx)("div", {
                className: P.OA,
                children: (0, a.jsx)(E.A, {
                    onSelect: function (e) {
                        $(e),
                            null == e ||
                                (z(
                                    (function (e) {
                                        if (null == e.userStatus) return I.b.UNENROLLED;
                                        if (null != e.userStatus.claimedAt) return I.b.CLAIMED;
                                        if (null != e.userStatus.completedAt) return I.b.COMPLETED_100;
                                        let t = (0, f.Yh)(e),
                                            n = t.progressSeconds,
                                            a = t.targetSeconds;
                                        return n / a >= 1
                                            ? I.b.COMPLETED_100
                                            : n / a >= 0.75
                                              ? I.b.COMPLETED_75
                                              : n / a >= 0.5
                                                ? I.b.COMPLETED_50
                                                : n / a >= 0.25
                                                  ? I.b.COMPLETED_25
                                                  : I.b.ENROLLED;
                                    })(e),
                                ),
                                W(e));
                    },
                    quest: X,
                }),
            }),
            (0, a.jsx)(m.Heading, {
                variant: "heading-md/semibold",
                className: P.fV,
                children: "Task Config",
            }),
            (0, a.jsx)("div", {
                className: P.OA,
                children: (0, a.jsx)(N.A, {
                    taskDuration: er,
                    taskConfigV2: F.config.taskConfigV2,
                    onSelect: function (e) {
                        W(
                            M(D({}, F), {
                                config: M(D({}, F.config), {
                                    taskConfigV2: e,
                                }),
                            }),
                        );
                    },
                }),
            }),
            (0, a.jsx)(m.Heading, {
                variant: "heading-md/semibold",
                className: P.fV,
                children: "Messages",
            }),
            (0, a.jsxs)("div", {
                className: P.OA,
                children: [
                    (0, a.jsx)(O.A, {
                        title: "Quest Name",
                        assetKey: "questName",
                        onMessageChange: en,
                        initialValue: F.config.messages.questName,
                    }),
                    (0, a.jsx)(O.A, {
                        title: "Game Title",
                        assetKey: "gameTitle",
                        onMessageChange: en,
                        initialValue: F.config.messages.gameTitle,
                    }),
                    (0, a.jsx)(O.A, {
                        title: "Game Publisher",
                        assetKey: "gamePublisher",
                        onMessageChange: en,
                        initialValue: F.config.messages.gamePublisher,
                    }),
                    es &&
                        (0, a.jsx)(O.A, {
                            title: "Video Title",
                            assetKey: "videoTitle",
                            onMessageChange: function (e, t) {
                                let n = F.config.taskConfigV2.tasks,
                                    a = n[o.n.WATCH_VIDEO];
                                if (null == a) return;
                                let l = M(D({}, a.messages), {
                                    [e]: t,
                                });
                                W(
                                    M(D({}, F), {
                                        config: M(D({}, F.config), {
                                            taskConfigV2: M(D({}, F.config.taskConfigV2), {
                                                tasks: M(D({}, n), {
                                                    [o.n.WATCH_VIDEO]: M(D({}, a), {
                                                        messages: l,
                                                    }),
                                                }),
                                            }),
                                        }),
                                    }),
                                );
                            },
                            initialValue: null == eo ? void 0 : eo.messages.videoTitle,
                        }),
                ],
            }),
            (0, a.jsx)(m.Heading, {
                variant: "heading-md/semibold",
                className: P.fV,
                children: "Assets",
            }),
            (0, a.jsxs)("div", {
                className: P.OA,
                children: [
                    (0, a.jsx)(S.A, {
                        title: "Hero",
                        assetKey: "hero",
                        onFileChange: ee,
                        filters: B,
                        initialValue: F.config.assets.hero,
                    }),
                    (0, a.jsx)(S.A, {
                        title: "Hero Video (optional)",
                        assetKey: "heroVideo",
                        onFileChange: ee,
                        filters: B,
                        initialValue: null != (e = F.config.assets.heroVideo) ? e : void 0,
                    }),
                    (0, a.jsx)(S.A, {
                        title: "Quest Bar Hero",
                        assetKey: "questBarHero",
                        onFileChange: ee,
                        filters: B,
                        initialValue: F.config.assets.questBarHero,
                    }),
                    (0, a.jsx)(S.A, {
                        title: "Quest Bar Hero Video (optional)",
                        assetKey: "questBarHeroVideo",
                        onFileChange: ee,
                        filters: B,
                        initialValue: null != (t = F.config.assets.questBarHeroVideo) ? t : void 0,
                    }),
                    (0, a.jsx)(S.A, {
                        title: "Game Tile",
                        assetKey: "gameTile",
                        onFileChange: ee,
                        filters: [...U, "svg"],
                        initialValue: F.config.assets.gameTile,
                    }),
                    (0, a.jsx)(S.A, {
                        title: "Logotype",
                        assetKey: "logotype",
                        onFileChange: ee,
                        filters: [...L, "svg"],
                        initialValue: F.config.assets.logotype,
                    }),
                    es &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(S.A, {
                                    title: "Quest Video",
                                    assetKey: "videoPlayerVideo",
                                    onFileChange: et,
                                    filters: B,
                                    initialValue: null == eo ? void 0 : eo.assets.video.url,
                                }),
                                (0, a.jsx)(S.A, {
                                    title: "Quest Video (Low Resolution)",
                                    assetKey: "videoPlayerVideoLowRes",
                                    onFileChange: et,
                                    filters: B,
                                    initialValue: null == eo || null == (i = eo.assets.videoLowRes) ? void 0 : i.url,
                                }),
                                (0, a.jsx)(S.A, {
                                    title: "Video Player Thumbnail (optional)",
                                    assetKey: "videoPlayerThumbnail",
                                    onFileChange: et,
                                    filters: U,
                                    initialValue: null == eo ? void 0 : eo.assets.video.thumbnail,
                                }),
                            ],
                        }),
                ],
            }),
            Z.map((e, t) =>
                (0, a.jsxs)(
                    "div",
                    {
                        children: [
                            (0, a.jsxs)(m.Heading, {
                                variant: "heading-md/semibold",
                                className: P.fV,
                                children: ["Reward #", t + 1],
                            }),
                            (0, a.jsxs)("div", {
                                className: P.OA,
                                children: [
                                    (0, a.jsx)(O.A, {
                                        title: "Name",
                                        assetKey: "name",
                                        onMessageChange: (e, n) => ea(e, n, t),
                                        initialValue: e.messages.name,
                                    }),
                                    (0, a.jsx)(O.A, {
                                        title: "Name With Article",
                                        assetKey: "nameWithArticle",
                                        onMessageChange: (e, n) => ea(e, n, t),
                                        initialValue: e.messages.nameWithArticle,
                                    }),
                                    e.type !== c.l.VIRTUAL_CURRENCY &&
                                        (0, a.jsx)(S.A, {
                                            title: "Asset",
                                            assetKey: "asset",
                                            onFileChange: (e, n) =>
                                                (function (e, t, n) {
                                                    if ("asset" === e) {
                                                        var a;
                                                        W(
                                                            M(D({}, F), {
                                                                config:
                                                                    ((a = F.config),
                                                                    (0, s.YW)(a)
                                                                        .with(
                                                                            {
                                                                                configVersion: 2,
                                                                            },
                                                                            (e) =>
                                                                                M(D({}, e), {
                                                                                    rewardsConfig: M(
                                                                                        D({}, e.rewardsConfig),
                                                                                        {
                                                                                            rewards:
                                                                                                e.rewardsConfig.rewards.map(
                                                                                                    (e, a) =>
                                                                                                        a === n
                                                                                                            ? M(
                                                                                                                  D(
                                                                                                                      {},
                                                                                                                      e,
                                                                                                                  ),
                                                                                                                  {
                                                                                                                      asset: t,
                                                                                                                      skuId: "",
                                                                                                                  },
                                                                                                              )
                                                                                                            : e,
                                                                                                ),
                                                                                        },
                                                                                    ),
                                                                                }),
                                                                        )
                                                                        .exhaustive()),
                                                            }),
                                                        );
                                                    }
                                                })(e, n, t),
                                            filters: B,
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
                                                onClick: ei,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    },
                    t,
                ),
            ),
            (0, a.jsx)(m.Heading, {
                variant: "heading-md/semibold",
                className: P.fV,
                children: "Colors & Quest States",
            }),
            (0, a.jsxs)("div", {
                className: P.OA,
                children: [
                    (0, a.jsxs)("div", {
                        className: P.OA,
                        style: {
                            marginBottom: 0,
                        },
                        children: [
                            (0, a.jsx)(A.A, {
                                title: "Primary",
                                colorKey: "primary",
                                onChange: el,
                                value: F.config.colors.primary,
                            }),
                            (0, a.jsx)(A.A, {
                                title: "Secondary",
                                colorKey: "secondary",
                                onChange: el,
                                value: F.config.colors.secondary,
                            }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: P.OA,
                        children: (0, a.jsx)(T.A, {}),
                    }),
                    (0, a.jsx)(I.A, {
                        onChange: function (e) {
                            switch ((z(e), e)) {
                                case I.b.UNENROLLED:
                                    W(
                                        M(D({}, F), {
                                            userStatus: null,
                                        }),
                                    );
                                    break;
                                case I.b.ENROLLED:
                                    W(
                                        M(D({}, F), {
                                            userStatus: G({
                                                enrolledAt: new Date().toISOString(),
                                            }),
                                        }),
                                    );
                                    break;
                                case I.b.COMPLETED_25:
                                    W(
                                        M(D({}, F), {
                                            userStatus: G({
                                                enrolledAt: new Date().toISOString(),
                                                streamProgressSeconds: 0.25 * er,
                                            }),
                                        }),
                                    );
                                    break;
                                case I.b.COMPLETED_50:
                                    W(
                                        M(D({}, F), {
                                            userStatus: G({
                                                enrolledAt: new Date().toISOString(),
                                                streamProgressSeconds: 0.5 * er,
                                            }),
                                        }),
                                    );
                                    break;
                                case I.b.COMPLETED_75:
                                    W(
                                        M(D({}, F), {
                                            userStatus: G({
                                                enrolledAt: new Date().toISOString(),
                                                streamProgressSeconds: 0.75 * er,
                                            }),
                                        }),
                                    );
                                    break;
                                case I.b.COMPLETED_100:
                                    W(
                                        M(D({}, F), {
                                            userStatus: G({
                                                completedAt: new Date().toISOString(),
                                                enrolledAt: new Date().toISOString(),
                                                streamProgressSeconds: er,
                                            }),
                                        }),
                                    );
                                    break;
                                case I.b.CLAIMED:
                                    W(
                                        M(D({}, F), {
                                            userStatus: G({
                                                claimedAt: new Date().toISOString(),
                                                completedAt: new Date().toISOString(),
                                                enrolledAt: new Date().toISOString(),
                                                streamProgressSeconds: er,
                                            }),
                                        }),
                                    );
                            }
                        },
                        value: K,
                    }),
                ],
            }),
            (0, a.jsx)(m.Heading, {
                variant: "heading-lg/bold",
                className: P.R_,
                children: "Component Previews",
            }),
            (0, a.jsxs)("div", {
                className: P.$$,
                children: [
                    (0, a.jsxs)(C.A, {
                        withBorder: !0,
                        children: [
                            (0, a.jsx)(m.Heading, {
                                variant: "heading-sm/semibold",
                                children: "Quest Bar",
                            }),
                            (0, a.jsxs)("div", {
                                className: P.l4,
                                children: [
                                    (null == (d = F.userStatus) ? void 0 : d.claimedAt) != null &&
                                        (0, a.jsx)(m.Text, {
                                            color: "text-subtle",
                                            variant: "text-sm/normal",
                                            children: "The Quest Bar is hidden when the user has claimed the reward.",
                                        }),
                                    (0, a.jsx)("div", {
                                        className: P.ok,
                                        children: (0, a.jsx)(x.jY, {
                                            isPreview: !0,
                                            source: "preview",
                                            questId: "0",
                                            children: (0, a.jsx)(g.A, {
                                                children: (0, a.jsx)(b.Y, {
                                                    quest: F,
                                                }),
                                            }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, a.jsxs)(C.A, {
                        withBorder: !0,
                        children: [
                            (0, a.jsx)(m.Heading, {
                                variant: "heading-sm/semibold",
                                children: "Quest Home Card",
                            }),
                            (0, a.jsx)(x.jY, {
                                isPreview: !0,
                                source: "preview",
                                questId: "0",
                                children: (0, a.jsx)(_.A, {
                                    quest: F,
                                    className: P.d,
                                    questContent: p.uF.QUEST_HOME_DESKTOP,
                                    contentPosition: 0,
                                    rowIndex: 0,
                                    sourceQuestContent: p.uF.INTERNAL_PREVIEW_TOOL,
                                }),
                            }),
                        ],
                    }),
                    (0, a.jsxs)(C.A, {
                        withBorder: !0,
                        children: [
                            (0, a.jsx)(m.Heading, {
                                variant: "heading-sm/semibold",
                                children: "Channel Call Header",
                            }),
                            (null == (u = F.userStatus) ? void 0 : u.claimedAt) != null &&
                                (0, a.jsx)(m.Text, {
                                    color: "text-subtle",
                                    variant: "text-sm/normal",
                                    children:
                                        "The Quest Channel Call Header is hidden when the user has claimed the reward.",
                                }),
                            (0, a.jsx)("div", {
                                className: P.l4,
                                children: (0, a.jsx)(x.jY, {
                                    isPreview: !0,
                                    source: "preview",
                                    questId: "0",
                                    children: (0, a.jsx)("div", {
                                        className: P.Jr,
                                        children: (0, a.jsx)(v.A, {
                                            channelId: "123",
                                            previewQuest: F,
                                            isParticipatingOverride: q,
                                        }),
                                    }),
                                }),
                            }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: P.NY,
                        children: (0, a.jsx)(m.dOG, {
                            label: "Is Participating:",
                            checked: q,
                            onChange: function (e) {
                                Q(e);
                            },
                        }),
                    }),
                    (0, a.jsxs)(C.A, {
                        withBorder: !0,
                        children: [
                            (0, a.jsx)(m.Heading, {
                                variant: "heading-sm/semibold",
                                children: "Quest Card Embed",
                            }),
                            Y
                                ? (0, a.jsx)(j.l, {
                                      questId: F.id,
                                  })
                                : (0, a.jsx)(
                                      y.R,
                                      {
                                          quest: F,
                                          location: p.uF.QUESTS_EMBED,
                                          sourceQuestContent: p.uF.INTERNAL_PREVIEW_TOOL,
                                      },
                                      F.id,
                                  ),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: P.NY,
                        children: (0, a.jsx)(m.dOG, {
                            label: "Invalid Quests Embed:",
                            checked: Y,
                            onChange: J,
                        }),
                    }),
                    es &&
                        (0, a.jsxs)(C.A, {
                            withBorder: !0,
                            allowClicks: !0,
                            children: [
                                (0, a.jsx)(m.Heading, {
                                    variant: "heading-sm/semibold",
                                    children: "Video Player",
                                }),
                                (0, a.jsx)(m.Button, {
                                    variant: "primary",
                                    text: "Open Video Player Modal",
                                    onClick: () => {
                                        (0, m.mMO)(async () => {
                                            let { default: e } = await Promise.all([
                                                n.e("35584"),
                                                n.e("23628"),
                                                n.e("18728"),
                                            ]).then(n.bind(n, 717415));
                                            return (t) => {
                                                var n;
                                                return (0, a.jsx)(
                                                    e,
                                                    M(D({}, t), {
                                                        openStartClockTime: performance.now(),
                                                        videoSessionId: "fake-quest-session-id",
                                                        questId: null != (n = F.id) ? n : "fake-quest-id",
                                                        overrideQuest: F,
                                                        autoplay: !0,
                                                        sourceQuestContent: p.uF.INTERNAL_PREVIEW_TOOL,
                                                    }),
                                                );
                                            };
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
class W extends l.Component {
    componentDidCatch(e) {
        this.setState({
            error: e,
        });
    }
    render() {
        let { error: e, renderKey: t } = this.state;
        return null != e
            ? (0, a.jsxs)("div", {
                  className: P.TA,
                  children: [
                      (0, a.jsx)(m.EpV, {
                          className: P.Yw,
                      }),
                      (0, a.jsx)(m.Heading, {
                          variant: "heading-lg/semibold",
                          children: "Something broke in the Quest preview tool :(",
                      }),
                      (0, a.jsx)(m.Button, {
                          variant: "secondary",
                          text: "Reset",
                          onClick: this.handleResetState,
                      }),
                      null != e.message &&
                          (0, a.jsx)(m.ZpM, {
                              className: P.Fx,
                              children: (0, a.jsx)("code", {
                                  className: P.gJ,
                                  children: e.message,
                              }),
                          }),
                  ],
              })
            : (0, a.jsx)(H, {}, t);
    }
    constructor(...e) {
        super(...e),
            R(this, "state", {
                error: null,
                renderKey: 0,
            }),
            R(this, "handleResetState", () => {
                this.setState((e) => ({
                    error: null,
                    renderKey: e.renderKey + 1,
                }));
            });
    }
}
let K = W;
