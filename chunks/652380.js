n.d(t, {
    Z: () => $,
    b: () => Z,
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
    T = n(478977),
    S = n(456799),
    A = n(210851),
    C = n(602683),
    N = n(916028),
    R = n(749912),
    P = n(815183),
    w = n(899457),
    D = n(99542);
function x(e, t, n) {
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
function L(e) {
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
                x(e, t, n[t]);
            });
    }
    return e;
}
function j(e, t) {
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
function M(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : j(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let k = 10,
    U = ["png", "gif", "webp"],
    G = [...U, "jpg", "jpeg"],
    B = Array.from(new Set([...G, "gif", "mp4", "webm"]));
function Z(e) {
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
function V(e, t) {
    return (0, s.EQ)(e)
        .with({ configVersion: 2 }, (e) => M(L({}, e), { assets: L({}, e.assets, t) }))
        .exhaustive();
}
function H(e, t, n) {
    return (0, s.EQ)(e)
        .with({ configVersion: 2 }, (e) =>
            M(L({}, e), {
                rewardsConfig: M(L({}, e.rewardsConfig), {
                    rewards: e.rewardsConfig.rewards.map((e, r) =>
                        r === n
                            ? M(L({}, e), {
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
function Y(e, t) {
    return (0, s.EQ)(e)
        .with({ configVersion: 2 }, (e) => M(L({}, e), { messages: L({}, e.messages, t) }))
        .exhaustive();
}
function W(e, t, n) {
    return (0, s.EQ)(e)
        .with({ configVersion: 2 }, (e) =>
            M(L({}, e), {
                rewardsConfig: M(L({}, e.rewardsConfig), {
                    rewards: e.rewardsConfig.rewards.map((e, r) =>
                        r === n ? M(L({}, e), { messages: L({}, e.messages, t) }) : e,
                    ),
                }),
            }),
        )
        .exhaustive();
}
function K() {
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
function z(e) {
    if (null == e.userStatus) return w.a.UNENROLLED;
    if (null != e.userStatus.claimedAt) return w.a.CLAIMED;
    if (null != e.userStatus.completedAt) return w.a.COMPLETED_100;
    let t = (0, p.il)(e),
        n = t.progressSeconds,
        r = t.targetSeconds;
    return n / r >= 1
        ? w.a.COMPLETED_100
        : n / r >= 0.75
          ? w.a.COMPLETED_75
          : n / r >= 0.5
            ? w.a.COMPLETED_50
            : n / r >= 0.25
              ? w.a.COMPLETED_25
              : w.a.ENROLLED;
}
let q = "1193992107035983872",
    X = {
        id: q,
        preview: !0,
        config: {
            id: q,
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
function Q() {
    var e, t, a, s, u, d, x;
    let [j, Z] = i.useState(X),
        q = i.useCallback((e) => {
            Z(M(L({}, e), { preview: !0 }));
        }, []),
        [Q, J] = i.useState(w.a.UNENROLLED),
        [$, ee] = i.useState(!1),
        [et, en] = i.useState(!1),
        [er, ei] = i.useState(null),
        ea = "123",
        eo = F(j.config);
    function es(e) {
        switch ((J(e), e)) {
            case w.a.UNENROLLED:
                q(M(L({}, j), { userStatus: null }));
                break;
            case w.a.ENROLLED:
                q(M(L({}, j), { userStatus: K({ enrolledAt: new Date().toISOString() }) }));
                break;
            case w.a.COMPLETED_25:
                q(
                    M(L({}, j), {
                        userStatus: K({
                            enrolledAt: new Date().toISOString(),
                            streamProgressSeconds: 0.25 * ey,
                        }),
                    }),
                );
                break;
            case w.a.COMPLETED_50:
                q(
                    M(L({}, j), {
                        userStatus: K({
                            enrolledAt: new Date().toISOString(),
                            streamProgressSeconds: 0.5 * ey,
                        }),
                    }),
                );
                break;
            case w.a.COMPLETED_75:
                q(
                    M(L({}, j), {
                        userStatus: K({
                            enrolledAt: new Date().toISOString(),
                            streamProgressSeconds: 0.75 * ey,
                        }),
                    }),
                );
                break;
            case w.a.COMPLETED_100:
                q(
                    M(L({}, j), {
                        userStatus: K({
                            completedAt: new Date().toISOString(),
                            enrolledAt: new Date().toISOString(),
                            streamProgressSeconds: ey,
                        }),
                    }),
                );
                break;
            case w.a.CLAIMED:
                q(
                    M(L({}, j), {
                        userStatus: K({
                            claimedAt: new Date().toISOString(),
                            completedAt: new Date().toISOString(),
                            enrolledAt: new Date().toISOString(),
                            streamProgressSeconds: ey,
                        }),
                    }),
                );
        }
    }
    function el(e, t) {
        ("hero" === e ||
            "questBarHero" === e ||
            "gameTile" === e ||
            "logotype" === e ||
            "heroVideo" === e ||
            "questBarHeroVideo" === e) &&
            q(M(L({}, j), { config: V(j.config, { [e]: t }) }));
    }
    function ec(e, t) {
        let n = j.config.taskConfigV2.tasks,
            r = n[l.X.WATCH_VIDEO];
        if (null == r) return;
        let i = L({}, r.assets);
        switch (e) {
            case "videoPlayerVideo":
                i.video = { url: t };
                break;
            case "videoPlayerVideoLowRes":
                i.videoLowRes = { url: t };
                break;
            case "videoPlayerThumbnail":
                i.video = M(L({}, i.video), { thumbnail: t });
                break;
            default:
                return;
        }
        q(
            M(L({}, j), {
                config: M(L({}, j.config), {
                    taskConfigV2: M(L({}, j.config.taskConfigV2), {
                        tasks: M(L({}, n), { [l.X.WATCH_VIDEO]: M(L({}, r), { assets: i }) }),
                    }),
                }),
            }),
        );
    }
    function eu(e, t) {
        var n, r, i;
        q(
            M(L({}, j), {
                config: M(L({}, j.config), {
                    videoMetadata: M(L({}, j.config.videoMetadata), {
                        messages: null != (i = null == (n = j.config.videoMetadata) ? void 0 : n.messages) ? i : {},
                        assets: M(L({}, null == (r = j.config.videoMetadata) ? void 0 : r.assets), { [e]: t }),
                    }),
                }),
            }),
        );
    }
    function ed(e, t, n) {
        "asset" === e && q(M(L({}, j), { config: H(j.config, t, n) }));
    }
    function ef(e, t) {
        ("questName" === e || "gameTitle" === e || "gamePublisher" === e) &&
            q(M(L({}, j), { config: Y(j.config, { [e]: t }) }));
    }
    function e_(e, t) {
        let n = j.config.taskConfigV2.tasks,
            r = n[l.X.WATCH_VIDEO];
        if (null == r) return;
        let i = M(L({}, r.messages), { [e]: t });
        q(
            M(L({}, j), {
                config: M(L({}, j.config), {
                    taskConfigV2: M(L({}, j.config.taskConfigV2), {
                        tasks: M(L({}, n), { [l.X.WATCH_VIDEO]: M(L({}, r), { messages: i }) }),
                    }),
                }),
            }),
        );
    }
    function ep(e, t, n) {
        ("name" === e || "nameWithArticle" === e) && q(M(L({}, j), { config: W(j.config, { [e]: t }, n) }));
    }
    function eh(e, t) {
        q(M(L({}, j), { config: M(L({}, j.config), { colors: M(L({}, j.config.colors), { [e]: t }) }) }));
    }
    function em(e) {
        ee(e);
    }
    function eg(e) {
        ei(e), null != e && (J(z(e)), q(e));
    }
    function eE() {
        (0, p.Xv)(j.config)
            ? (0, b.openQuestCollectibleRewardModal)(j, h.jn.GIFT_INVENTORY_FOR_YOU, !0)
            : (0, b.openQuestsRewardCodeModal)({
                  quest: j,
                  questContent: h.jn.GIFT_INVENTORY_FOR_YOU,
                  preview: !0,
                  previewQuest: j,
                  sourceQuestContent: h.jn.INTERNAL_PREVIEW_TOOL,
              });
    }
    function eb(e) {
        q(M(L({}, j), { config: M(L({}, j.config), { taskConfigV2: e }) }));
    }
    let ey = i.useMemo(() => {
            for (let [e, t] of Object.entries(j.config.taskConfigV2.tasks)) if (null != t.target) return t.target;
            return k * _.Z.Seconds.MINUTE;
        }, [j.config.taskConfigV2.tasks]),
        eO = i.useMemo(() => l.X.WATCH_VIDEO in j.config.taskConfigV2.tasks, [j.config.taskConfigV2.tasks]);
    o()(!1 !== j.preview && null != j.preview, "Preview config must have property preview: true");
    let ev = j.config.taskConfigV2.tasks[l.X.WATCH_VIDEO];
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(f.X6q, {
                variant: "heading-lg/bold",
                className: D.heading,
                children: "Quest Preview Tool",
            }),
            (0, r.jsx)("div", {
                className: D.fields,
                children: (0, r.jsx)(N.Z, {
                    onSelect: eg,
                    quest: er,
                }),
            }),
            (0, r.jsx)(f.X6q, {
                variant: "heading-md/semibold",
                className: D.subheading,
                children: "Task Config",
            }),
            (0, r.jsx)("div", {
                className: D.fields,
                children: (0, r.jsx)(R.Z, {
                    taskDuration: ey,
                    taskConfigV2: j.config.taskConfigV2,
                    onSelect: eb,
                }),
            }),
            (0, r.jsx)(f.X6q, {
                variant: "heading-md/semibold",
                className: D.subheading,
                children: "Messages",
            }),
            (0, r.jsxs)("div", {
                className: D.fields,
                children: [
                    (0, r.jsx)(C.Z, {
                        title: "Quest Name",
                        assetKey: "questName",
                        onMessageChange: ef,
                        initialValue: j.config.messages.questName,
                    }),
                    (0, r.jsx)(C.Z, {
                        title: "Game Title",
                        assetKey: "gameTitle",
                        onMessageChange: ef,
                        initialValue: j.config.messages.gameTitle,
                    }),
                    (0, r.jsx)(C.Z, {
                        title: "Game Publisher",
                        assetKey: "gamePublisher",
                        onMessageChange: ef,
                        initialValue: j.config.messages.gamePublisher,
                    }),
                    eO &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(C.Z, {
                                    title: "Video Title",
                                    assetKey: "videoTitle",
                                    onMessageChange: e_,
                                    initialValue: null == ev ? void 0 : ev.messages.videoTitle,
                                }),
                                (0, r.jsx)(C.Z, {
                                    title: "End CTA Title",
                                    assetKey: "videoEndCtaTitle",
                                    onMessageChange: e_,
                                    initialValue: null == ev ? void 0 : ev.messages.videoEndCtaTitle,
                                }),
                                (0, r.jsx)(C.Z, {
                                    title: "End CTA Subtitle",
                                    assetKey: "videoEndCtaSubtitle",
                                    onMessageChange: e_,
                                    initialValue: null == ev ? void 0 : ev.messages.videoEndCtaSubtitle,
                                }),
                            ],
                        }),
                ],
            }),
            (0, r.jsx)(f.X6q, {
                variant: "heading-md/semibold",
                className: D.subheading,
                children: "Assets",
            }),
            (0, r.jsxs)("div", {
                className: D.fields,
                children: [
                    (0, r.jsx)(A.Z, {
                        title: "Hero",
                        assetKey: "hero",
                        onFileChange: el,
                        filters: B,
                        initialValue: j.config.assets.hero,
                    }),
                    (0, r.jsx)(A.Z, {
                        title: "Hero Video (optional)",
                        assetKey: "heroVideo",
                        onFileChange: el,
                        filters: B,
                        initialValue: null != (d = j.config.assets.heroVideo) ? d : void 0,
                    }),
                    (0, r.jsx)(A.Z, {
                        title: "Quest Bar Hero",
                        assetKey: "questBarHero",
                        onFileChange: el,
                        filters: B,
                        initialValue: j.config.assets.questBarHero,
                    }),
                    (0, r.jsx)(A.Z, {
                        title: "Quest Bar Hero Video (optional)",
                        assetKey: "questBarHeroVideo",
                        onFileChange: el,
                        filters: B,
                        initialValue: null != (x = j.config.assets.questBarHeroVideo) ? x : void 0,
                    }),
                    (0, r.jsx)(A.Z, {
                        title: "Game Tile",
                        assetKey: "gameTile",
                        onFileChange: el,
                        filters: [...G, "svg"],
                        initialValue: j.config.assets.gameTile,
                    }),
                    (0, r.jsx)(A.Z, {
                        title: "Logotype",
                        assetKey: "logotype",
                        onFileChange: el,
                        filters: [...U, "svg"],
                        initialValue: j.config.assets.logotype,
                    }),
                    eO &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(A.Z, {
                                    title: "Quest Video",
                                    assetKey: "videoPlayerVideo",
                                    onFileChange: ec,
                                    filters: B,
                                    initialValue: null == ev ? void 0 : ev.assets.video.url,
                                }),
                                (0, r.jsx)(A.Z, {
                                    title: "Quest Video (Low Resolution)",
                                    assetKey: "videoPlayerVideoLowRes",
                                    onFileChange: ec,
                                    filters: B,
                                    initialValue: null == ev || null == (e = ev.assets.videoLowRes) ? void 0 : e.url,
                                }),
                                (0, r.jsx)(A.Z, {
                                    title: "Video Player Thumbnail (optional)",
                                    assetKey: "videoPlayerThumbnail",
                                    onFileChange: ec,
                                    filters: G,
                                    initialValue: null == ev ? void 0 : ev.assets.video.thumbnail,
                                }),
                                (0, r.jsx)(A.Z, {
                                    title: "Quest Bar Preview Video (optional)",
                                    assetKey: "questBarPreviewVideo",
                                    onFileChange: eu,
                                    filters: B,
                                    initialValue:
                                        null == (t = j.config.videoMetadata) ? void 0 : t.assets.questBarPreviewVideo,
                                }),
                                (0, r.jsx)(A.Z, {
                                    title: "Quest Home Video (optional)",
                                    assetKey: "questHomeVideo",
                                    onFileChange: eu,
                                    filters: B,
                                    initialValue:
                                        null == (a = j.config.videoMetadata) ? void 0 : a.assets.questHomeVideo,
                                }),
                            ],
                        }),
                ],
            }),
            eo.map((e, t) =>
                (0, r.jsxs)(
                    "div",
                    {
                        children: [
                            (0, r.jsxs)(f.X6q, {
                                variant: "heading-md/semibold",
                                className: D.subheading,
                                children: ["Reward #", t + 1],
                            }),
                            (0, r.jsxs)("div", {
                                className: D.fields,
                                children: [
                                    (0, r.jsx)(C.Z, {
                                        title: "Name",
                                        assetKey: "name",
                                        onMessageChange: (e, n) => ep(e, n, t),
                                        initialValue: e.messages.name,
                                    }),
                                    (0, r.jsx)(C.Z, {
                                        title: "Name With Article",
                                        assetKey: "nameWithArticle",
                                        onMessageChange: (e, n) => ep(e, n, t),
                                        initialValue: e.messages.nameWithArticle,
                                    }),
                                    e.type !== c.w.VIRTUAL_CURRENCY &&
                                        (0, r.jsx)(A.Z, {
                                            title: "Asset",
                                            assetKey: "asset",
                                            onFileChange: (e, n) => ed(e, n, t),
                                            filters: B,
                                            initialValue: e.asset,
                                        }),
                                    (0, r.jsxs)(f.xJW, {
                                        children: [
                                            (0, r.jsx)(f.vwX, { children: "Claim Modal" }),
                                            (0, r.jsx)(f.zxk, {
                                                variant: "primary",
                                                text: "Open Reward Modal",
                                                onClick: eE,
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
                className: D.subheading,
                children: "Colors & Quest States",
            }),
            (0, r.jsxs)("div", {
                className: D.fields,
                children: [
                    (0, r.jsxs)("div", {
                        className: D.fields,
                        style: { marginBottom: 0 },
                        children: [
                            (0, r.jsx)(T.Z, {
                                title: "Primary",
                                colorKey: "primary",
                                onChange: eh,
                                value: j.config.colors.primary,
                            }),
                            (0, r.jsx)(T.Z, {
                                title: "Secondary",
                                colorKey: "secondary",
                                onChange: eh,
                                value: j.config.colors.secondary,
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: D.fields,
                        children: (0, r.jsx)(P.Z, {}),
                    }),
                    (0, r.jsx)(w.Z, {
                        onChange: es,
                        value: Q,
                    }),
                ],
            }),
            (0, r.jsx)(f.X6q, {
                variant: "heading-lg/bold",
                className: D.heading,
                children: "Component Previews",
            }),
            (0, r.jsxs)("div", {
                className: D.componentPreviews,
                children: [
                    (0, r.jsxs)(S.Z, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(f.vwX, { children: "Quest Bar" }),
                            (0, r.jsxs)("div", {
                                className: D.questBarPreviewWrapper,
                                children: [
                                    (null == (s = j.userStatus) ? void 0 : s.claimedAt) != null &&
                                        (0, r.jsx)(f.Text, {
                                            color: "text-secondary",
                                            variant: "text-sm/normal",
                                            children: "The Quest Bar is hidden when the user has claimed the reward.",
                                        }),
                                    (0, r.jsx)("div", {
                                        className: D.questBarPreview,
                                        children: (0, r.jsx)(y.p, {
                                            isPreview: !0,
                                            source: "preview",
                                            questId: "0",
                                            children: (0, r.jsx)(g.Z, { children: (0, r.jsx)(m.P, { quest: j }) }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsxs)(S.Z, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(f.vwX, { children: "Quest Home Card" }),
                            (0, r.jsx)(y.p, {
                                isPreview: !0,
                                source: "preview",
                                questId: "0",
                                children: (0, r.jsx)(E.Z, {
                                    quest: j,
                                    className: D.questTile,
                                    questContent: h.jn.QUEST_HOME_DESKTOP,
                                    contentPosition: 0,
                                    rowIndex: 0,
                                    sourceQuestContent: h.jn.INTERNAL_PREVIEW_TOOL,
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsxs)(S.Z, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(f.vwX, { children: "Channel Call Header" }),
                            (null == (u = j.userStatus) ? void 0 : u.claimedAt) != null &&
                                (0, r.jsx)(f.Text, {
                                    color: "text-secondary",
                                    variant: "text-sm/normal",
                                    children:
                                        "The Quest Channel Call Header is hidden when the user has claimed the reward.",
                                }),
                            (0, r.jsx)("div", {
                                className: D.questBarPreviewWrapper,
                                children: (0, r.jsx)(y.p, {
                                    isPreview: !0,
                                    source: "preview",
                                    questId: "0",
                                    children: (0, r.jsx)("div", {
                                        className: D.questChannelCallHeaderPreview,
                                        children: (0, r.jsx)(v.Z, {
                                            channelId: ea,
                                            previewQuest: j,
                                            isParticipatingOverride: $,
                                        }),
                                    }),
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: D.toggleSwitch,
                        children: (0, r.jsx)(f.xJW, {
                            children: (0, r.jsx)(f.j7V, {
                                value: $,
                                onChange: em,
                                hideBorder: !0,
                                children: "Is Participating:",
                            }),
                        }),
                    }),
                    (0, r.jsxs)(S.Z, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(f.vwX, { children: "Quest Card Embed" }),
                            et
                                ? (0, r.jsx)(I.o, { questId: j.id })
                                : (0, r.jsx)(
                                      O.Z,
                                      {
                                          quest: j,
                                          location: h.jn.QUESTS_EMBED,
                                          sourceQuestContent: h.jn.INTERNAL_PREVIEW_TOOL,
                                      },
                                      j.id,
                                  ),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: D.toggleSwitch,
                        children: (0, r.jsx)(f.xJW, {
                            children: (0, r.jsx)(f.j7V, {
                                value: et,
                                onChange: en,
                                hideBorder: !0,
                                children: "Invalid Quests Embed:",
                            }),
                        }),
                    }),
                    eO &&
                        (0, r.jsxs)(S.Z, {
                            withBorder: !0,
                            allowClicks: !0,
                            children: [
                                (0, r.jsx)(f.vwX, { children: "Video Player" }),
                                (0, r.jsx)(f.zxk, {
                                    variant: "primary",
                                    text: "Open Video Player Modal",
                                    onClick: () => {
                                        (0, f.ZDy)(async () => {
                                            let { default: e } = await Promise.all([n.e("90648"), n.e("32249")]).then(
                                                n.bind(n, 536687),
                                            );
                                            return (t) => {
                                                var n;
                                                return (0, r.jsx)(
                                                    e,
                                                    M(L({}, t), {
                                                        openStartClockTime: performance.now(),
                                                        videoSessionId: "fake-quest-session-id",
                                                        questId: null != (n = j.id) ? n : "fake-quest-id",
                                                        overrideQuest: j,
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
class J extends i.Component {
    componentDidCatch(e) {
        this.setState({ error: e });
    }
    render() {
        let { error: e, renderKey: t } = this.state;
        return null != e
            ? (0, r.jsxs)("div", {
                  className: D.errorBoundary,
                  children: [
                      (0, r.jsx)(f.Mgn, { className: D.errorBoundaryIcon }),
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
                              className: D.errorMessageWrapper,
                              children: (0, r.jsx)("code", {
                                  className: D.errorMessage,
                                  children: e.message,
                              }),
                          }),
                  ],
              })
            : (0, r.jsx)(Q, {}, t);
    }
    constructor(...e) {
        super(...e),
            x(this, "state", {
                error: null,
                renderKey: 0,
            }),
            x(this, "handleResetState", () => {
                this.setState((e) => ({
                    error: null,
                    renderKey: e.renderKey + 1,
                }));
            });
    }
}
let $ = J;
