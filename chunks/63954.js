s.d(t, {
    Z: () => Y,
    b: () => M,
}),
    s(388685),
    s(314940);
var n = s(951288),
    r = s(647438),
    a = s(512722),
    i = s.n(a),
    l = s(278074),
    o = s(754700),
    c = s(887003),
    u = s(820827),
    d = s(458708),
    g = s(481060),
    f = s(509212),
    h = s(497505),
    m = s(210724),
    v = s(130653),
    p = s(415104),
    j = s(478977),
    O = s(456799),
    x = s(210851),
    y = s(602683),
    b = s(916028),
    P = s(749912),
    w = s(815183),
    E = s(899457),
    C = s(110560),
    S = s(78826),
    T = s(37303),
    N = s(134483),
    _ = s(683650),
    V = s(70956),
    A = s(188764);
function D(e, t, s) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: s,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = s),
        e
    );
}
function L(e) {
    for (var t = 1; t < arguments.length; t++) {
        var s = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(s);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(s).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(s, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                D(e, t, s[t]);
            });
    }
    return e;
}
function k(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var s = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      s.push.apply(s, n);
                  }
                  return s;
              })(Object(t)).forEach(function (s) {
                  Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(t, s));
              }),
        e
    );
}
let R = ["png", "gif", "webp"],
    I = [...R, "jpg", "jpeg"],
    X = Array.from(new Set([...I, "gif", "mp4", "webm"]));
function M(e) {
    var t, s;
    return {
        code: "PREVIEW-MODE-CODE",
        tier: 0,
        platform: h.y$.CROSS_PLATFORM,
        userId: "123",
        questId: e.id,
        claimedAt: null != (s = null == (t = e.userStatus) ? void 0 : t.claimedAt) ? s : "",
    };
}
function Z() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { streamProgressSeconds: t = 0, completedAt: s = null, enrolledAt: n = null, claimedAt: r = null } = e;
    return {
        userId: "123",
        questId: "1193992107035983872",
        enrolledAt: n,
        completedAt: s,
        claimedAt: r,
        claimedTier: null,
        lastStreamHeartbeatAt: null,
        streamProgressSeconds: t,
        dismissedQuestContent: 0,
        progress: {},
    };
}
let q = "1193992107035983872",
    B = {
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
                    [o.X.PLAY_ON_DESKTOP]: {
                        type: o.X.PLAY_ON_DESKTOP,
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
function K() {
    var e, t, a, u, d, D, M, q;
    let [K, W] = r.useState(B),
        Y = r.useCallback((e) => {
            W(k(L({}, e), { preview: !0 }));
        }, []),
        [H, Q] = r.useState(E.a.UNENROLLED),
        [F, U] = r.useState(!1),
        [J, z] = r.useState(!1),
        [G, $] = r.useState(null),
        ee =
            ((q = K.config),
            (0, l.EQ)(q)
                .with({ configVersion: 2 }, (e) => e.rewardsConfig.rewards)
                .exhaustive());
    function et(e, t) {
        if (
            "hero" === e ||
            "questBarHero" === e ||
            "gameTile" === e ||
            "logotype" === e ||
            "heroVideo" === e ||
            "questBarHeroVideo" === e
        ) {
            var s, n;
            Y(
                k(L({}, K), {
                    config:
                        ((s = K.config),
                        (n = { [e]: t }),
                        (0, l.EQ)(s)
                            .with({ configVersion: 2 }, (e) => k(L({}, e), { assets: L({}, e.assets, n) }))
                            .exhaustive()),
                }),
            );
        }
    }
    function es(e, t) {
        let s = K.config.taskConfigV2.tasks,
            n = s[o.X.WATCH_VIDEO];
        if (null == n) return;
        let r = L({}, n.assets);
        switch (e) {
            case "videoPlayerVideo":
                r.video = { url: t };
                break;
            case "videoPlayerVideoLowRes":
                r.videoLowRes = { url: t };
                break;
            case "videoPlayerThumbnail":
                r.video = k(L({}, r.video), { thumbnail: t });
                break;
            default:
                return;
        }
        Y(
            k(L({}, K), {
                config: k(L({}, K.config), {
                    taskConfigV2: k(L({}, K.config.taskConfigV2), {
                        tasks: k(L({}, s), { [o.X.WATCH_VIDEO]: k(L({}, n), { assets: r }) }),
                    }),
                }),
            }),
        );
    }
    function en(e, t) {
        var s, n, r;
        Y(
            k(L({}, K), {
                config: k(L({}, K.config), {
                    videoMetadata: k(L({}, K.config.videoMetadata), {
                        messages: null != (r = null == (s = K.config.videoMetadata) ? void 0 : s.messages) ? r : {},
                        assets: k(L({}, null == (n = K.config.videoMetadata) ? void 0 : n.assets), { [e]: t }),
                    }),
                }),
            }),
        );
    }
    function er(e, t) {
        if ("questName" === e || "gameTitle" === e || "gamePublisher" === e) {
            var s, n;
            Y(
                k(L({}, K), {
                    config:
                        ((s = K.config),
                        (n = { [e]: t }),
                        (0, l.EQ)(s)
                            .with({ configVersion: 2 }, (e) => k(L({}, e), { messages: L({}, e.messages, n) }))
                            .exhaustive()),
                }),
            );
        }
    }
    function ea(e, t) {
        let s = K.config.taskConfigV2.tasks,
            n = s[o.X.WATCH_VIDEO];
        if (null == n) return;
        let r = k(L({}, n.messages), { [e]: t });
        Y(
            k(L({}, K), {
                config: k(L({}, K.config), {
                    taskConfigV2: k(L({}, K.config.taskConfigV2), {
                        tasks: k(L({}, s), { [o.X.WATCH_VIDEO]: k(L({}, n), { messages: r }) }),
                    }),
                }),
            }),
        );
    }
    function ei(e, t, s) {
        if ("name" === e || "nameWithArticle" === e) {
            var n, r;
            Y(
                k(L({}, K), {
                    config:
                        ((n = K.config),
                        (r = { [e]: t }),
                        (0, l.EQ)(n)
                            .with({ configVersion: 2 }, (e) =>
                                k(L({}, e), {
                                    rewardsConfig: k(L({}, e.rewardsConfig), {
                                        rewards: e.rewardsConfig.rewards.map((e, t) =>
                                            t === s ? k(L({}, e), { messages: L({}, e.messages, r) }) : e,
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
        Y(k(L({}, K), { config: k(L({}, K.config), { colors: k(L({}, K.config.colors), { [e]: t }) }) }));
    }
    function eo() {
        (0, f.Xv)(K.config)
            ? (0, C.openQuestCollectibleRewardModal)(K, h.jn.GIFT_INVENTORY_FOR_YOU, !0)
            : (0, C.openQuestsRewardCodeModal)({
                  quest: K,
                  questContent: h.jn.GIFT_INVENTORY_FOR_YOU,
                  preview: !0,
                  previewQuest: K,
                  sourceQuestContent: h.jn.INTERNAL_PREVIEW_TOOL,
              });
    }
    let ec = r.useMemo(() => {
            for (let [e, t] of Object.entries(K.config.taskConfigV2.tasks)) if (null != t.target) return t.target;
            return 10 * V.Z.Seconds.MINUTE;
        }, [K.config.taskConfigV2.tasks]),
        eu = r.useMemo(() => o.X.WATCH_VIDEO in K.config.taskConfigV2.tasks, [K.config.taskConfigV2.tasks]);
    i()(!1 !== K.preview && null != K.preview, "Preview config must have property preview: true");
    let ed = K.config.taskConfigV2.tasks[o.X.WATCH_VIDEO];
    return (0, n.jsxs)(g.zJl, {
        className: A.container,
        children: [
            (0, n.jsx)(g.X6q, {
                variant: "heading-lg/bold",
                className: A.heading,
                children: "Quest Preview Tool",
            }),
            (0, n.jsx)("div", {
                className: A.fields,
                children: (0, n.jsx)(b.Z, {
                    onSelect: function (e) {
                        $(e),
                            null != e &&
                                (Q(
                                    (function (e) {
                                        if (null == e.userStatus) return E.a.UNENROLLED;
                                        if (null != e.userStatus.claimedAt) return E.a.CLAIMED;
                                        if (null != e.userStatus.completedAt) return E.a.COMPLETED_100;
                                        let t = (0, f.il)(e),
                                            s = t.progressSeconds,
                                            n = t.targetSeconds;
                                        return s / n >= 1
                                            ? E.a.COMPLETED_100
                                            : s / n >= 0.75
                                              ? E.a.COMPLETED_75
                                              : s / n >= 0.5
                                                ? E.a.COMPLETED_50
                                                : s / n >= 0.25
                                                  ? E.a.COMPLETED_25
                                                  : E.a.ENROLLED;
                                    })(e),
                                ),
                                Y(e));
                    },
                    quest: G,
                }),
            }),
            (0, n.jsx)(g.X6q, {
                variant: "heading-md/semibold",
                className: A.subheading,
                children: "Task Config",
            }),
            (0, n.jsx)("div", {
                className: A.fields,
                children: (0, n.jsx)(P.Z, {
                    taskDuration: ec,
                    taskConfigV2: K.config.taskConfigV2,
                    onSelect: function (e) {
                        Y(k(L({}, K), { config: k(L({}, K.config), { taskConfigV2: e }) }));
                    },
                }),
            }),
            (0, n.jsx)(g.X6q, {
                variant: "heading-md/semibold",
                className: A.subheading,
                children: "Messages",
            }),
            (0, n.jsxs)("div", {
                className: A.fields,
                children: [
                    (0, n.jsx)(y.Z, {
                        title: "Quest Name",
                        assetKey: "questName",
                        onMessageChange: er,
                        initialValue: K.config.messages.questName,
                    }),
                    (0, n.jsx)(y.Z, {
                        title: "Game Title",
                        assetKey: "gameTitle",
                        onMessageChange: er,
                        initialValue: K.config.messages.gameTitle,
                    }),
                    (0, n.jsx)(y.Z, {
                        title: "Game Publisher",
                        assetKey: "gamePublisher",
                        onMessageChange: er,
                        initialValue: K.config.messages.gamePublisher,
                    }),
                    eu &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(y.Z, {
                                    title: "Video Title",
                                    assetKey: "videoTitle",
                                    onMessageChange: ea,
                                    initialValue: null == ed ? void 0 : ed.messages.videoTitle,
                                }),
                                (0, n.jsx)(y.Z, {
                                    title: "End CTA Title",
                                    assetKey: "videoEndCtaTitle",
                                    onMessageChange: ea,
                                    initialValue: null == ed ? void 0 : ed.messages.videoEndCtaTitle,
                                }),
                                (0, n.jsx)(y.Z, {
                                    title: "End CTA Subtitle",
                                    assetKey: "videoEndCtaSubtitle",
                                    onMessageChange: ea,
                                    initialValue: null == ed ? void 0 : ed.messages.videoEndCtaSubtitle,
                                }),
                            ],
                        }),
                ],
            }),
            (0, n.jsx)(g.X6q, {
                variant: "heading-md/semibold",
                className: A.subheading,
                children: "Assets",
            }),
            (0, n.jsxs)("div", {
                className: A.fields,
                children: [
                    (0, n.jsx)(x.Z, {
                        title: "Hero",
                        assetKey: "hero",
                        onFileChange: et,
                        filters: X,
                        initialValue: K.config.assets.hero,
                    }),
                    (0, n.jsx)(x.Z, {
                        title: "Hero Video (optional)",
                        assetKey: "heroVideo",
                        onFileChange: et,
                        filters: X,
                        initialValue: null != (D = K.config.assets.heroVideo) ? D : void 0,
                    }),
                    (0, n.jsx)(x.Z, {
                        title: "Quest Bar Hero",
                        assetKey: "questBarHero",
                        onFileChange: et,
                        filters: X,
                        initialValue: K.config.assets.questBarHero,
                    }),
                    (0, n.jsx)(x.Z, {
                        title: "Quest Bar Hero Video (optional)",
                        assetKey: "questBarHeroVideo",
                        onFileChange: et,
                        filters: X,
                        initialValue: null != (M = K.config.assets.questBarHeroVideo) ? M : void 0,
                    }),
                    (0, n.jsx)(x.Z, {
                        title: "Game Tile",
                        assetKey: "gameTile",
                        onFileChange: et,
                        filters: [...I, "svg"],
                        initialValue: K.config.assets.gameTile,
                    }),
                    (0, n.jsx)(x.Z, {
                        title: "Logotype",
                        assetKey: "logotype",
                        onFileChange: et,
                        filters: [...R, "svg"],
                        initialValue: K.config.assets.logotype,
                    }),
                    eu &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(x.Z, {
                                    title: "Quest Video",
                                    assetKey: "videoPlayerVideo",
                                    onFileChange: es,
                                    filters: X,
                                    initialValue: null == ed ? void 0 : ed.assets.video.url,
                                }),
                                (0, n.jsx)(x.Z, {
                                    title: "Quest Video (Low Resolution)",
                                    assetKey: "videoPlayerVideoLowRes",
                                    onFileChange: es,
                                    filters: X,
                                    initialValue: null == ed || null == (e = ed.assets.videoLowRes) ? void 0 : e.url,
                                }),
                                (0, n.jsx)(x.Z, {
                                    title: "Video Player Thumbnail (optional)",
                                    assetKey: "videoPlayerThumbnail",
                                    onFileChange: es,
                                    filters: I,
                                    initialValue: null == ed ? void 0 : ed.assets.video.thumbnail,
                                }),
                                (0, n.jsx)(x.Z, {
                                    title: "Quest Bar Preview Video (optional)",
                                    assetKey: "questBarPreviewVideo",
                                    onFileChange: en,
                                    filters: X,
                                    initialValue:
                                        null == (t = K.config.videoMetadata) ? void 0 : t.assets.questBarPreviewVideo,
                                }),
                                (0, n.jsx)(x.Z, {
                                    title: "Quest Home Video (optional)",
                                    assetKey: "questHomeVideo",
                                    onFileChange: en,
                                    filters: X,
                                    initialValue:
                                        null == (a = K.config.videoMetadata) ? void 0 : a.assets.questHomeVideo,
                                }),
                            ],
                        }),
                ],
            }),
            ee.map((e, t) =>
                (0, n.jsxs)(
                    "div",
                    {
                        children: [
                            (0, n.jsxs)(g.X6q, {
                                variant: "heading-md/semibold",
                                className: A.subheading,
                                children: ["Reward #", t + 1],
                            }),
                            (0, n.jsxs)("div", {
                                className: A.fields,
                                children: [
                                    (0, n.jsx)(y.Z, {
                                        title: "Name",
                                        assetKey: "name",
                                        onMessageChange: (e, s) => ei(e, s, t),
                                        initialValue: e.messages.name,
                                    }),
                                    (0, n.jsx)(y.Z, {
                                        title: "Name With Article",
                                        assetKey: "nameWithArticle",
                                        onMessageChange: (e, s) => ei(e, s, t),
                                        initialValue: e.messages.nameWithArticle,
                                    }),
                                    e.type !== c.w.VIRTUAL_CURRENCY &&
                                        (0, n.jsx)(x.Z, {
                                            title: "Asset",
                                            assetKey: "asset",
                                            onFileChange: (e, s) =>
                                                (function (e, t, s) {
                                                    if ("asset" === e) {
                                                        var n;
                                                        Y(
                                                            k(L({}, K), {
                                                                config:
                                                                    ((n = K.config),
                                                                    (0, l.EQ)(n)
                                                                        .with({ configVersion: 2 }, (e) =>
                                                                            k(L({}, e), {
                                                                                rewardsConfig: k(
                                                                                    L({}, e.rewardsConfig),
                                                                                    {
                                                                                        rewards:
                                                                                            e.rewardsConfig.rewards.map(
                                                                                                (e, n) =>
                                                                                                    n === s
                                                                                                        ? k(L({}, e), {
                                                                                                              asset: t,
                                                                                                              skuId: "",
                                                                                                          })
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
                                                })(e, s, t),
                                            filters: X,
                                            initialValue: e.asset,
                                        }),
                                    (0, n.jsxs)(g.xJW, {
                                        children: [
                                            (0, n.jsx)(g.vwX, { children: "Claim Modal" }),
                                            (0, n.jsx)(g.zxk, {
                                                variant: "primary",
                                                text: "Open Reward Modal",
                                                onClick: eo,
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
            (0, n.jsx)(g.X6q, {
                variant: "heading-md/semibold",
                className: A.subheading,
                children: "Colors & Quest States",
            }),
            (0, n.jsxs)("div", {
                className: A.fields,
                children: [
                    (0, n.jsxs)("div", {
                        className: A.fields,
                        style: { marginBottom: 0 },
                        children: [
                            (0, n.jsx)(j.Z, {
                                title: "Primary",
                                colorKey: "primary",
                                onChange: el,
                                value: K.config.colors.primary,
                            }),
                            (0, n.jsx)(j.Z, {
                                title: "Secondary",
                                colorKey: "secondary",
                                onChange: el,
                                value: K.config.colors.secondary,
                            }),
                        ],
                    }),
                    (0, n.jsx)("div", {
                        className: A.fields,
                        children: (0, n.jsx)(w.Z, {}),
                    }),
                    (0, n.jsx)(E.Z, {
                        onChange: function (e) {
                            switch ((Q(e), e)) {
                                case E.a.UNENROLLED:
                                    Y(k(L({}, K), { userStatus: null }));
                                    break;
                                case E.a.ENROLLED:
                                    Y(k(L({}, K), { userStatus: Z({ enrolledAt: new Date().toISOString() }) }));
                                    break;
                                case E.a.COMPLETED_25:
                                    Y(
                                        k(L({}, K), {
                                            userStatus: Z({
                                                enrolledAt: new Date().toISOString(),
                                                streamProgressSeconds: 0.25 * ec,
                                            }),
                                        }),
                                    );
                                    break;
                                case E.a.COMPLETED_50:
                                    Y(
                                        k(L({}, K), {
                                            userStatus: Z({
                                                enrolledAt: new Date().toISOString(),
                                                streamProgressSeconds: 0.5 * ec,
                                            }),
                                        }),
                                    );
                                    break;
                                case E.a.COMPLETED_75:
                                    Y(
                                        k(L({}, K), {
                                            userStatus: Z({
                                                enrolledAt: new Date().toISOString(),
                                                streamProgressSeconds: 0.75 * ec,
                                            }),
                                        }),
                                    );
                                    break;
                                case E.a.COMPLETED_100:
                                    Y(
                                        k(L({}, K), {
                                            userStatus: Z({
                                                completedAt: new Date().toISOString(),
                                                enrolledAt: new Date().toISOString(),
                                                streamProgressSeconds: ec,
                                            }),
                                        }),
                                    );
                                    break;
                                case E.a.CLAIMED:
                                    Y(
                                        k(L({}, K), {
                                            userStatus: Z({
                                                claimedAt: new Date().toISOString(),
                                                completedAt: new Date().toISOString(),
                                                enrolledAt: new Date().toISOString(),
                                                streamProgressSeconds: ec,
                                            }),
                                        }),
                                    );
                            }
                        },
                        value: H,
                    }),
                ],
            }),
            (0, n.jsx)(g.X6q, {
                variant: "heading-lg/bold",
                className: A.heading,
                children: "Component Previews",
            }),
            (0, n.jsxs)("div", {
                className: A.componentPreviews,
                children: [
                    (0, n.jsxs)(O.Z, {
                        withBorder: !0,
                        children: [
                            (0, n.jsx)(g.vwX, { children: "Quest Bar" }),
                            (0, n.jsxs)("div", {
                                className: A.questBarPreviewWrapper,
                                children: [
                                    (null == (u = K.userStatus) ? void 0 : u.claimedAt) != null &&
                                        (0, n.jsx)(g.Text, {
                                            color: "text-secondary",
                                            variant: "text-sm/normal",
                                            children: "The Quest Bar is hidden when the user has claimed the reward.",
                                        }),
                                    (0, n.jsx)("div", {
                                        className: A.questBarPreview,
                                        children: (0, n.jsx)(S.p, {
                                            isPreview: !0,
                                            source: "preview",
                                            questId: "0",
                                            children: (0, n.jsx)(v.Z, { children: (0, n.jsx)(m.P, { quest: K }) }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, n.jsxs)(O.Z, {
                        withBorder: !0,
                        children: [
                            (0, n.jsx)(g.vwX, { children: "Quest Home Card" }),
                            (0, n.jsx)(S.p, {
                                isPreview: !0,
                                source: "preview",
                                questId: "0",
                                children: (0, n.jsx)(p.Z, {
                                    quest: K,
                                    className: A.questTile,
                                    questContent: h.jn.QUEST_HOME_DESKTOP,
                                    contentPosition: 0,
                                    rowIndex: 0,
                                    sourceQuestContent: h.jn.INTERNAL_PREVIEW_TOOL,
                                }),
                            }),
                        ],
                    }),
                    (0, n.jsxs)(O.Z, {
                        withBorder: !0,
                        children: [
                            (0, n.jsx)(g.vwX, { children: "Channel Call Header" }),
                            (null == (d = K.userStatus) ? void 0 : d.claimedAt) != null &&
                                (0, n.jsx)(g.Text, {
                                    color: "text-secondary",
                                    variant: "text-sm/normal",
                                    children:
                                        "The Quest Channel Call Header is hidden when the user has claimed the reward.",
                                }),
                            (0, n.jsx)("div", {
                                className: A.questBarPreviewWrapper,
                                children: (0, n.jsx)(S.p, {
                                    isPreview: !0,
                                    source: "preview",
                                    questId: "0",
                                    children: (0, n.jsx)("div", {
                                        className: A.questChannelCallHeaderPreview,
                                        children: (0, n.jsx)(N.Z, {
                                            channelId: "123",
                                            previewQuest: K,
                                            isParticipatingOverride: F,
                                        }),
                                    }),
                                }),
                            }),
                        ],
                    }),
                    (0, n.jsx)("div", {
                        className: A.toggleSwitch,
                        children: (0, n.jsx)(g.xJW, {
                            children: (0, n.jsx)(g.j7V, {
                                value: F,
                                onChange: function (e) {
                                    U(e);
                                },
                                hideBorder: !0,
                                children: "Is Participating:",
                            }),
                        }),
                    }),
                    (0, n.jsxs)(O.Z, {
                        withBorder: !0,
                        children: [
                            (0, n.jsx)(g.vwX, { children: "Quest Card Embed" }),
                            J
                                ? (0, n.jsx)(_.o, { questId: K.id })
                                : (0, n.jsx)(
                                      T.Z,
                                      {
                                          quest: K,
                                          location: h.jn.QUESTS_EMBED,
                                          sourceQuestContent: h.jn.INTERNAL_PREVIEW_TOOL,
                                      },
                                      K.id,
                                  ),
                        ],
                    }),
                    (0, n.jsx)("div", {
                        className: A.toggleSwitch,
                        children: (0, n.jsx)(g.xJW, {
                            children: (0, n.jsx)(g.j7V, {
                                value: J,
                                onChange: z,
                                hideBorder: !0,
                                children: "Invalid Quests Embed:",
                            }),
                        }),
                    }),
                    eu &&
                        (0, n.jsxs)(O.Z, {
                            withBorder: !0,
                            allowClicks: !0,
                            children: [
                                (0, n.jsx)(g.vwX, { children: "Video Player" }),
                                (0, n.jsx)(g.zxk, {
                                    variant: "primary",
                                    text: "Open Video Player Modal",
                                    onClick: () => {
                                        (0, g.ZDy)(async () => {
                                            let { default: e } = await Promise.all([s.e("90648"), s.e("32249")]).then(
                                                s.bind(s, 536687),
                                            );
                                            return (t) => {
                                                var s;
                                                return (0, n.jsx)(
                                                    e,
                                                    k(L({}, t), {
                                                        openStartClockTime: performance.now(),
                                                        videoSessionId: "fake-quest-session-id",
                                                        questId: null != (s = K.id) ? s : "fake-quest-id",
                                                        overrideQuest: K,
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
class W extends r.Component {
    componentDidCatch(e) {
        this.setState({ error: e });
    }
    render() {
        let { error: e, renderKey: t } = this.state;
        return null != e
            ? (0, n.jsxs)("div", {
                  className: A.errorBoundary,
                  children: [
                      (0, n.jsx)(g.Mgn, { className: A.errorBoundaryIcon }),
                      (0, n.jsx)(g.X6q, {
                          variant: "heading-lg/semibold",
                          children: "Something broke in the Quest preview tool :(",
                      }),
                      (0, n.jsx)(g.zxk, {
                          variant: "secondary",
                          text: "Reset",
                          onClick: this.handleResetState,
                      }),
                      null != e.message &&
                          (0, n.jsx)(g.Zbd, {
                              className: A.errorMessageWrapper,
                              children: (0, n.jsx)("code", {
                                  className: A.errorMessage,
                                  children: e.message,
                              }),
                          }),
                  ],
              })
            : (0, n.jsx)(K, {}, t);
    }
    constructor(...e) {
        super(...e),
            D(this, "state", {
                error: null,
                renderKey: 0,
            }),
            D(this, "handleResetState", () => {
                this.setState((e) => ({
                    error: null,
                    renderKey: e.renderKey + 1,
                }));
            });
    }
}
let Y = W;
