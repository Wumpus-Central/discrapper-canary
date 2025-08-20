n.d(t, {
    Z: () => ee,
    b: () => V,
}),
    n(388685),
    n(314940);
var r = n(951288),
    i = n(647438),
    a = n(512722),
    o = n.n(a),
    s = n(278074),
    l = n(754700),
    c = n(887003),
    u = n(820827),
    d = n(458708),
    f = n(481060),
    _ = n(70956),
    p = n(509212),
    h = n(497505),
    m = n(210724),
    g = n(130653),
    E = n(415104),
    b = n(110560),
    y = n(78826),
    O = n(37303),
    v = n(134483),
    I = n(683650),
    T = n(920916),
    S = n(478977),
    A = n(456799),
    C = n(210851),
    N = n(602683),
    R = n(916028),
    P = n(749912),
    w = n(815183),
    D = n(899457),
    x = n(301188);
function L(e, t, n) {
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
function j(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                L(e, t, n[t]);
            });
    }
    return e;
}
function M(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function k(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : M(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let U = 10,
    G = ["png", "gif", "webp"],
    B = [...G, "jpg", "jpeg"],
    Z = Array.from(new Set([...B, "gif", "mp4", "webm"]));
function V(e) {
    var t, n;
    return {
        code: "PREVIEW-MODE-CODE",
        tier: 0,
        platform: h.y$.CROSS_PLATFORM,
        userId: "123",
        questId: e.id,
        claimedAt: null != (n = null == (t = e.userStatus) ? void 0 : t.claimedAt) ? n : "",
    };
}
function F(e) {
    return (0, s.EQ)(e)
        .with({ configVersion: 2 }, (e) => e.rewardsConfig.rewards)
        .exhaustive();
}
function H(e, t) {
    return (0, s.EQ)(e)
        .with({ configVersion: 2 }, (e) => k(j({}, e), { assets: j({}, e.assets, t) }))
        .exhaustive();
}
function Y(e, t, n) {
    return (0, s.EQ)(e)
        .with({ configVersion: 2 }, (e) =>
            k(j({}, e), {
                rewardsConfig: k(j({}, e.rewardsConfig), {
                    rewards: e.rewardsConfig.rewards.map((e, r) =>
                        r === n
                            ? k(j({}, e), {
                                  asset: t,
                                  skuId: "",
                              })
                            : e,
                    ),
                }),
            }),
        )
        .exhaustive();
}
function W(e, t) {
    return (0, s.EQ)(e)
        .with({ configVersion: 2 }, (e) => k(j({}, e), { messages: j({}, e.messages, t) }))
        .exhaustive();
}
function K(e, t, n) {
    return (0, s.EQ)(e)
        .with({ configVersion: 2 }, (e) =>
            k(j({}, e), {
                rewardsConfig: k(j({}, e.rewardsConfig), {
                    rewards: e.rewardsConfig.rewards.map((e, r) =>
                        r === n ? k(j({}, e), { messages: j({}, e.messages, t) }) : e,
                    ),
                }),
            }),
        )
        .exhaustive();
}
function z() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { streamProgressSeconds: t = 0, completedAt: n = null, enrolledAt: r = null, claimedAt: i = null } = e;
    return {
        userId: "123",
        questId: "1193992107035983872",
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
function q(e) {
    if (null == e.userStatus) return D.a.UNENROLLED;
    if (null != e.userStatus.claimedAt) return D.a.CLAIMED;
    if (null != e.userStatus.completedAt) return D.a.COMPLETED_100;
    let t = (0, p.il)(e),
        n = t.progressSeconds,
        r = t.targetSeconds;
    return n / r >= 1
        ? D.a.COMPLETED_100
        : n / r >= 0.75
          ? D.a.COMPLETED_75
          : n / r >= 0.5
            ? D.a.COMPLETED_50
            : n / r >= 0.25
              ? D.a.COMPLETED_25
              : D.a.ENROLLED;
}
let X = "1193992107035983872",
    Q = {
        id: X,
        preview: !0,
        config: {
            id: X,
            configVersion: 2,
            startsAt: "2024-01-01T00:00:00+00:00",
            expiresAt: "2030-01-01T00:00:00+00:00",
            application: {
                link: "https://discord.com/",
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
                        type: c.w.REWARD_CODE,
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
                joinOperator: d.r.AND,
                tasks: {
                    [l.X.PLAY_ON_DESKTOP]: {
                        type: l.X.PLAY_ON_DESKTOP,
                        target: 300,
                    },
                },
            },
            features: [],
            sharePolicy: u.X.SHAREABLE_EVERYWHERE,
        },
        userStatus: null,
        targetedContent: [],
    };
function J() {
    var e, t, a, s, u, d, L;
    let [M, V] = i.useState(Q),
        X = i.useCallback((e) => {
            V(k(j({}, e), { preview: !0 }));
        }, []),
        [J, $] = i.useState(D.a.UNENROLLED),
        [ee, et] = i.useState(!1),
        [en, er] = i.useState(!1),
        [ei, ea] = i.useState(null),
        eo = "123",
        es = F(M.config);
    function el(e) {
        switch (($(e), e)) {
            case D.a.UNENROLLED:
                X(k(j({}, M), { userStatus: null }));
                break;
            case D.a.ENROLLED:
                X(k(j({}, M), { userStatus: z({ enrolledAt: new Date().toISOString() }) }));
                break;
            case D.a.COMPLETED_25:
                X(
                    k(j({}, M), {
                        userStatus: z({
                            enrolledAt: new Date().toISOString(),
                            streamProgressSeconds: 0.25 * eO,
                        }),
                    }),
                );
                break;
            case D.a.COMPLETED_50:
                X(
                    k(j({}, M), {
                        userStatus: z({
                            enrolledAt: new Date().toISOString(),
                            streamProgressSeconds: 0.5 * eO,
                        }),
                    }),
                );
                break;
            case D.a.COMPLETED_75:
                X(
                    k(j({}, M), {
                        userStatus: z({
                            enrolledAt: new Date().toISOString(),
                            streamProgressSeconds: 0.75 * eO,
                        }),
                    }),
                );
                break;
            case D.a.COMPLETED_100:
                X(
                    k(j({}, M), {
                        userStatus: z({
                            completedAt: new Date().toISOString(),
                            enrolledAt: new Date().toISOString(),
                            streamProgressSeconds: eO,
                        }),
                    }),
                );
                break;
            case D.a.CLAIMED:
                X(
                    k(j({}, M), {
                        userStatus: z({
                            claimedAt: new Date().toISOString(),
                            completedAt: new Date().toISOString(),
                            enrolledAt: new Date().toISOString(),
                            streamProgressSeconds: eO,
                        }),
                    }),
                );
        }
    }
    function ec(e, t) {
        ("hero" === e ||
            "questBarHero" === e ||
            "gameTile" === e ||
            "logotype" === e ||
            "heroVideo" === e ||
            "questBarHeroVideo" === e) &&
            X(k(j({}, M), { config: H(M.config, { [e]: t }) }));
    }
    function eu(e, t) {
        let n = M.config.taskConfigV2.tasks,
            r = n[l.X.WATCH_VIDEO];
        if (null == r) return;
        let i = j({}, r.assets);
        switch (e) {
            case "videoPlayerVideo":
                i.video = { url: t };
                break;
            case "videoPlayerVideoLowRes":
                i.videoLowRes = { url: t };
                break;
            case "videoPlayerThumbnail":
                i.video = k(j({}, i.video), { thumbnail: t });
                break;
            default:
                return;
        }
        X(
            k(j({}, M), {
                config: k(j({}, M.config), {
                    taskConfigV2: k(j({}, M.config.taskConfigV2), {
                        tasks: k(j({}, n), { [l.X.WATCH_VIDEO]: k(j({}, r), { assets: i }) }),
                    }),
                }),
            }),
        );
    }
    function ed(e, t) {
        var n, r, i;
        X(
            k(j({}, M), {
                config: k(j({}, M.config), {
                    videoMetadata: k(j({}, M.config.videoMetadata), {
                        messages: null != (i = null == (n = M.config.videoMetadata) ? void 0 : n.messages) ? i : {},
                        assets: k(j({}, null == (r = M.config.videoMetadata) ? void 0 : r.assets), { [e]: t }),
                    }),
                }),
            }),
        );
    }
    function ef(e, t, n) {
        "asset" === e && X(k(j({}, M), { config: Y(M.config, t, n) }));
    }
    function e_(e, t) {
        ("questName" === e || "gameTitle" === e || "gamePublisher" === e) &&
            X(k(j({}, M), { config: W(M.config, { [e]: t }) }));
    }
    function ep(e, t) {
        let n = M.config.taskConfigV2.tasks,
            r = n[l.X.WATCH_VIDEO];
        if (null == r) return;
        let i = k(j({}, r.messages), { [e]: t });
        X(
            k(j({}, M), {
                config: k(j({}, M.config), {
                    taskConfigV2: k(j({}, M.config.taskConfigV2), {
                        tasks: k(j({}, n), { [l.X.WATCH_VIDEO]: k(j({}, r), { messages: i }) }),
                    }),
                }),
            }),
        );
    }
    function eh(e, t, n) {
        ("name" === e || "nameWithArticle" === e) && X(k(j({}, M), { config: K(M.config, { [e]: t }, n) }));
    }
    function em(e, t) {
        X(k(j({}, M), { config: k(j({}, M.config), { colors: k(j({}, M.config.colors), { [e]: t }) }) }));
    }
    function eg(e) {
        et(e);
    }
    function eE(e) {
        ea(e), null != e && ($(q(e)), X(e));
    }
    function eb() {
        (0, p.Xv)(M.config)
            ? (0, T.m)(M, h.jn.GIFT_INVENTORY_FOR_YOU, !0)
            : (0, b.openQuestsRewardCodeModal)({
                  questId: M.id,
                  questContent: h.jn.GIFT_INVENTORY_FOR_YOU,
                  preview: !0,
                  previewQuest: M,
                  sourceQuestContent: h.jn.INTERNAL_PREVIEW_TOOL,
              });
    }
    function ey(e) {
        X(k(j({}, M), { config: k(j({}, M.config), { taskConfigV2: e }) }));
    }
    let eO = i.useMemo(() => {
            for (let [e, t] of Object.entries(M.config.taskConfigV2.tasks)) if (null != t.target) return t.target;
            return U * _.Z.Seconds.MINUTE;
        }, [M.config.taskConfigV2.tasks]),
        ev = i.useMemo(() => l.X.WATCH_VIDEO in M.config.taskConfigV2.tasks, [M.config.taskConfigV2.tasks]);
    o()(!1 !== M.preview && null != M.preview, "Preview config must have property preview: true");
    let eI = M.config.taskConfigV2.tasks[l.X.WATCH_VIDEO];
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(f.X6q, {
                variant: "heading-lg/bold",
                className: x.heading,
                children: "Quest Preview Tool",
            }),
            (0, r.jsx)("div", {
                className: x.fields,
                children: (0, r.jsx)(R.Z, {
                    onSelect: eE,
                    quest: ei,
                }),
            }),
            (0, r.jsx)(f.X6q, {
                variant: "heading-md/semibold",
                className: x.subheading,
                children: "Task Config",
            }),
            (0, r.jsx)("div", {
                className: x.fields,
                children: (0, r.jsx)(P.Z, {
                    taskDuration: eO,
                    taskConfigV2: M.config.taskConfigV2,
                    onSelect: ey,
                }),
            }),
            (0, r.jsx)(f.X6q, {
                variant: "heading-md/semibold",
                className: x.subheading,
                children: "Messages",
            }),
            (0, r.jsxs)("div", {
                className: x.fields,
                children: [
                    (0, r.jsx)(N.Z, {
                        title: "Quest Name",
                        assetKey: "questName",
                        onMessageChange: e_,
                        initialValue: M.config.messages.questName,
                    }),
                    (0, r.jsx)(N.Z, {
                        title: "Game Title",
                        assetKey: "gameTitle",
                        onMessageChange: e_,
                        initialValue: M.config.messages.gameTitle,
                    }),
                    (0, r.jsx)(N.Z, {
                        title: "Game Publisher",
                        assetKey: "gamePublisher",
                        onMessageChange: e_,
                        initialValue: M.config.messages.gamePublisher,
                    }),
                    ev &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(N.Z, {
                                    title: "Video Title",
                                    assetKey: "videoTitle",
                                    onMessageChange: ep,
                                    initialValue: null == eI ? void 0 : eI.messages.videoTitle,
                                }),
                                (0, r.jsx)(N.Z, {
                                    title: "End CTA Title",
                                    assetKey: "videoEndCtaTitle",
                                    onMessageChange: ep,
                                    initialValue: null == eI ? void 0 : eI.messages.videoEndCtaTitle,
                                }),
                                (0, r.jsx)(N.Z, {
                                    title: "End CTA Subtitle",
                                    assetKey: "videoEndCtaSubtitle",
                                    onMessageChange: ep,
                                    initialValue: null == eI ? void 0 : eI.messages.videoEndCtaSubtitle,
                                }),
                            ],
                        }),
                ],
            }),
            (0, r.jsx)(f.X6q, {
                variant: "heading-md/semibold",
                className: x.subheading,
                children: "Assets",
            }),
            (0, r.jsxs)("div", {
                className: x.fields,
                children: [
                    (0, r.jsx)(C.Z, {
                        title: "Hero",
                        assetKey: "hero",
                        onFileChange: ec,
                        filters: Z,
                        initialValue: M.config.assets.hero,
                    }),
                    (0, r.jsx)(C.Z, {
                        title: "Hero Video (optional)",
                        assetKey: "heroVideo",
                        onFileChange: ec,
                        filters: Z,
                        initialValue: null != (d = M.config.assets.heroVideo) ? d : void 0,
                    }),
                    (0, r.jsx)(C.Z, {
                        title: "Quest Bar Hero",
                        assetKey: "questBarHero",
                        onFileChange: ec,
                        filters: Z,
                        initialValue: M.config.assets.questBarHero,
                    }),
                    (0, r.jsx)(C.Z, {
                        title: "Quest Bar Hero Video (optional)",
                        assetKey: "questBarHeroVideo",
                        onFileChange: ec,
                        filters: Z,
                        initialValue: null != (L = M.config.assets.questBarHeroVideo) ? L : void 0,
                    }),
                    (0, r.jsx)(C.Z, {
                        title: "Game Tile",
                        assetKey: "gameTile",
                        onFileChange: ec,
                        filters: [...B, "svg"],
                        initialValue: M.config.assets.gameTile,
                    }),
                    (0, r.jsx)(C.Z, {
                        title: "Logotype",
                        assetKey: "logotype",
                        onFileChange: ec,
                        filters: [...G, "svg"],
                        initialValue: M.config.assets.logotype,
                    }),
                    ev &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(C.Z, {
                                    title: "Quest Video",
                                    assetKey: "videoPlayerVideo",
                                    onFileChange: eu,
                                    filters: Z,
                                    initialValue: null == eI ? void 0 : eI.assets.video.url,
                                }),
                                (0, r.jsx)(C.Z, {
                                    title: "Quest Video (Low Resolution)",
                                    assetKey: "videoPlayerVideoLowRes",
                                    onFileChange: eu,
                                    filters: Z,
                                    initialValue: null == eI || null == (e = eI.assets.videoLowRes) ? void 0 : e.url,
                                }),
                                (0, r.jsx)(C.Z, {
                                    title: "Video Player Thumbnail (optional)",
                                    assetKey: "videoPlayerThumbnail",
                                    onFileChange: eu,
                                    filters: B,
                                    initialValue: null == eI ? void 0 : eI.assets.video.thumbnail,
                                }),
                                (0, r.jsx)(C.Z, {
                                    title: "Quest Bar Preview Video (optional)",
                                    assetKey: "questBarPreviewVideo",
                                    onFileChange: ed,
                                    filters: Z,
                                    initialValue:
                                        null == (t = M.config.videoMetadata) ? void 0 : t.assets.questBarPreviewVideo,
                                }),
                                (0, r.jsx)(C.Z, {
                                    title: "Quest Home Video (optional)",
                                    assetKey: "questHomeVideo",
                                    onFileChange: ed,
                                    filters: Z,
                                    initialValue:
                                        null == (a = M.config.videoMetadata) ? void 0 : a.assets.questHomeVideo,
                                }),
                            ],
                        }),
                ],
            }),
            es.map((e, t) =>
                (0, r.jsxs)(
                    "div",
                    {
                        children: [
                            (0, r.jsxs)(f.X6q, {
                                variant: "heading-md/semibold",
                                className: x.subheading,
                                children: ["Reward #", t + 1],
                            }),
                            (0, r.jsxs)("div", {
                                className: x.fields,
                                children: [
                                    (0, r.jsx)(N.Z, {
                                        title: "Name",
                                        assetKey: "name",
                                        onMessageChange: (e, n) => eh(e, n, t),
                                        initialValue: e.messages.name,
                                    }),
                                    (0, r.jsx)(N.Z, {
                                        title: "Name With Article",
                                        assetKey: "nameWithArticle",
                                        onMessageChange: (e, n) => eh(e, n, t),
                                        initialValue: e.messages.nameWithArticle,
                                    }),
                                    e.type !== c.w.VIRTUAL_CURRENCY &&
                                        (0, r.jsx)(C.Z, {
                                            title: "Asset",
                                            assetKey: "asset",
                                            onFileChange: (e, n) => ef(e, n, t),
                                            filters: Z,
                                            initialValue: e.asset,
                                        }),
                                    (0, r.jsxs)(f.xJW, {
                                        children: [
                                            (0, r.jsx)(f.vwX, { children: "Claim Modal" }),
                                            (0, r.jsx)(f.zxk, {
                                                variant: "primary",
                                                text: "Open Reward Modal",
                                                onClick: eb,
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
            (0, r.jsx)(f.X6q, {
                variant: "heading-md/semibold",
                className: x.subheading,
                children: "Colors & Quest States",
            }),
            (0, r.jsxs)("div", {
                className: x.fields,
                children: [
                    (0, r.jsxs)("div", {
                        className: x.fields,
                        style: { marginBottom: 0 },
                        children: [
                            (0, r.jsx)(S.Z, {
                                title: "Primary",
                                colorKey: "primary",
                                onChange: em,
                                value: M.config.colors.primary,
                            }),
                            (0, r.jsx)(S.Z, {
                                title: "Secondary",
                                colorKey: "secondary",
                                onChange: em,
                                value: M.config.colors.secondary,
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: x.fields,
                        children: (0, r.jsx)(w.Z, {}),
                    }),
                    (0, r.jsx)(D.Z, {
                        onChange: el,
                        value: J,
                    }),
                ],
            }),
            (0, r.jsx)(f.X6q, {
                variant: "heading-lg/bold",
                className: x.heading,
                children: "Component Previews",
            }),
            (0, r.jsxs)("div", {
                className: x.componentPreviews,
                children: [
                    (0, r.jsxs)(A.Z, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(f.vwX, { children: "Quest Bar" }),
                            (0, r.jsxs)("div", {
                                className: x.questBarPreviewWrapper,
                                children: [
                                    (null == (s = M.userStatus) ? void 0 : s.claimedAt) != null &&
                                        (0, r.jsx)(f.Text, {
                                            color: "text-secondary",
                                            variant: "text-sm/normal",
                                            children: "The Quest Bar is hidden when the user has claimed the reward.",
                                        }),
                                    (0, r.jsx)("div", {
                                        className: x.questBarPreview,
                                        children: (0, r.jsx)(y.p, {
                                            isPreview: !0,
                                            source: "preview",
                                            questId: "0",
                                            children: (0, r.jsx)(g.Z, { children: (0, r.jsx)(m.P, { quest: M }) }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsxs)(A.Z, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(f.vwX, { children: "Quest Home Card" }),
                            (0, r.jsx)(y.p, {
                                isPreview: !0,
                                source: "preview",
                                questId: "0",
                                children: (0, r.jsx)(E.Z, {
                                    quest: M,
                                    className: x.questTile,
                                    questContent: h.jn.QUEST_HOME_DESKTOP,
                                    contentPosition: 0,
                                    rowIndex: 0,
                                    sourceQuestContent: h.jn.INTERNAL_PREVIEW_TOOL,
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsxs)(A.Z, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(f.vwX, { children: "Channel Call Header" }),
                            (null == (u = M.userStatus) ? void 0 : u.claimedAt) != null &&
                                (0, r.jsx)(f.Text, {
                                    color: "text-secondary",
                                    variant: "text-sm/normal",
                                    children:
                                        "The Quest Channel Call Header is hidden when the user has claimed the reward.",
                                }),
                            (0, r.jsx)("div", {
                                className: x.questBarPreviewWrapper,
                                children: (0, r.jsx)(y.p, {
                                    isPreview: !0,
                                    source: "preview",
                                    questId: "0",
                                    children: (0, r.jsx)("div", {
                                        className: x.questChannelCallHeaderPreview,
                                        children: (0, r.jsx)(v.Z, {
                                            channelId: eo,
                                            previewQuest: M,
                                            isParticipatingOverride: ee,
                                        }),
                                    }),
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: x.toggleSwitch,
                        children: (0, r.jsx)(f.xJW, {
                            children: (0, r.jsx)(f.j7V, {
                                value: ee,
                                onChange: eg,
                                hideBorder: !0,
                                children: "Is Participating:",
                            }),
                        }),
                    }),
                    (0, r.jsxs)(A.Z, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(f.vwX, { children: "Quest Card Embed" }),
                            en
                                ? (0, r.jsx)(I.o, { questId: M.id })
                                : (0, r.jsx)(
                                      O.Z,
                                      {
                                          quest: M,
                                          location: h.jn.QUESTS_EMBED,
                                          sourceQuestContent: h.jn.INTERNAL_PREVIEW_TOOL,
                                      },
                                      M.id,
                                  ),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: x.toggleSwitch,
                        children: (0, r.jsx)(f.xJW, {
                            children: (0, r.jsx)(f.j7V, {
                                value: en,
                                onChange: er,
                                hideBorder: !0,
                                children: "Invalid Quests Embed:",
                            }),
                        }),
                    }),
                    ev &&
                        (0, r.jsxs)(A.Z, {
                            withBorder: !0,
                            allowClicks: !0,
                            children: [
                                (0, r.jsx)(f.vwX, { children: "Video Player" }),
                                (0, r.jsx)(f.zxk, {
                                    variant: "primary",
                                    text: "Open Video Player Modal",
                                    onClick: () => {
                                        (0, f.ZDy)(async () => {
                                            let { default: e } = await Promise.all([n.e("66816"), n.e("32249")]).then(
                                                n.bind(n, 536687),
                                            );
                                            return (t) => {
                                                var n;
                                                return (0, r.jsx)(
                                                    e,
                                                    k(j({}, t), {
                                                        openStartClockTime: performance.now(),
                                                        videoSessionId: "fake-quest-session-id",
                                                        questId: null != (n = M.id) ? n : "fake-quest-id",
                                                        overrideQuest: M,
                                                        autoplay: !0,
                                                        sourceQuestContent: h.jn.INTERNAL_PREVIEW_TOOL,
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
class $ extends i.Component {
    componentDidCatch(e) {
        this.setState({ error: e });
    }
    render() {
        let { error: e, renderKey: t } = this.state;
        return null != e
            ? (0, r.jsxs)("div", {
                  className: x.errorBoundary,
                  children: [
                      (0, r.jsx)(f.Mgn, { className: x.errorBoundaryIcon }),
                      (0, r.jsx)(f.X6q, {
                          variant: "heading-lg/semibold",
                          children: "Something broke in the Quest preview tool :(",
                      }),
                      (0, r.jsx)(f.zxk, {
                          variant: "secondary",
                          text: "Reset",
                          onClick: this.handleResetState,
                      }),
                      null != e.message &&
                          (0, r.jsx)(f.Zbd, {
                              className: x.errorMessageWrapper,
                              children: (0, r.jsx)("code", {
                                  className: x.errorMessage,
                                  children: e.message,
                              }),
                          }),
                  ],
              })
            : (0, r.jsx)(J, {}, t);
    }
    constructor(...e) {
        super(...e),
            L(this, "state", {
                error: null,
                renderKey: 0,
            }),
            L(this, "handleResetState", () => {
                this.setState((e) => ({
                    error: null,
                    renderKey: e.renderKey + 1,
                }));
            });
    }
}
let ee = $;
