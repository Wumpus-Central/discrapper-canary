n.d(t, {
    Z: () => H,
    b: () => V,
}),
    n(388685),
    n(314940);
var r = n(951288),
    s = n(647438),
    o = n(512722),
    a = n.n(o),
    i = n(278074),
    l = n(754700),
    c = n(887003),
    d = n(820827),
    u = n(458708),
    p = n(481060),
    m = n(509212),
    g = n(497505),
    f = n(210724),
    h = n(130653),
    x = n(415104),
    _ = n(478977),
    b = n(456799),
    j = n(210851),
    v = n(602683),
    C = n(916028),
    y = n(749912),
    O = n(815183),
    E = n(899457),
    S = n(110560),
    T = n(78826),
    w = n(37303),
    P = n(134483),
    N = n(683650),
    A = n(70956),
    R = n(745776);
function B(e, t, n) {
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
function k(e) {
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
                B(e, t, n[t]);
            });
    }
    return e;
}
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let q = ["png", "gif", "webp"],
    D = [...q, "jpg", "jpeg"],
    L = Array.from(new Set([...D, "gif", "mp4", "webm"]));
function V(e) {
    var t, n;
    return {
        code: "PREVIEW-MODE-CODE",
        tier: 0,
        platform: g.y$.CROSS_PLATFORM,
        userId: "123",
        questId: e.id,
        claimedAt: null != (n = null == (t = e.userStatus) ? void 0 : t.claimedAt) ? n : "",
    };
}
function Q() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { streamProgressSeconds: t = 0, completedAt: n = null, enrolledAt: r = null, claimedAt: s = null } = e;
    return {
        userId: "123",
        questId: "1193992107035983872",
        enrolledAt: r,
        completedAt: n,
        claimedAt: s,
        claimedTier: null,
        lastStreamHeartbeatAt: null,
        streamProgressSeconds: t,
        dismissedQuestContent: 0,
        progress: {},
    };
}
let M = "1193992107035983872",
    W = {
        id: M,
        preview: !0,
        config: {
            id: M,
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
                joinOperator: u.r.AND,
                tasks: {
                    [l.X.PLAY_ON_DESKTOP]: {
                        type: l.X.PLAY_ON_DESKTOP,
                        target: 300,
                    },
                },
            },
            features: [],
            sharePolicy: d.X.SHAREABLE_EVERYWHERE,
        },
        userStatus: null,
        targetedContent: [],
    };
function Z() {
    var e, t, o, d, u, B, V, M;
    let [Z, U] = s.useState(W),
        H = s.useCallback((e) => {
            U(I(k({}, e), { preview: !0 }));
        }, []),
        [F, X] = s.useState(E.a.UNENROLLED),
        [z, G] = s.useState(!1),
        [K, Y] = s.useState(!1),
        [J, $] = s.useState(null),
        ee =
            ((M = Z.config),
            (0, i.EQ)(M)
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
            var n, r;
            H(
                I(k({}, Z), {
                    config:
                        ((n = Z.config),
                        (r = { [e]: t }),
                        (0, i.EQ)(n)
                            .with({ configVersion: 2 }, (e) => I(k({}, e), { assets: k({}, e.assets, r) }))
                            .exhaustive()),
                }),
            );
        }
    }
    function en(e, t) {
        let n = Z.config.taskConfigV2.tasks,
            r = n[l.X.WATCH_VIDEO];
        if (null == r) return;
        let s = k({}, r.assets);
        switch (e) {
            case "videoPlayerVideo":
                s.video = { url: t };
                break;
            case "videoPlayerVideoLowRes":
                s.videoLowRes = { url: t };
                break;
            case "videoPlayerThumbnail":
                s.video = I(k({}, s.video), { thumbnail: t });
                break;
            default:
                return;
        }
        H(
            I(k({}, Z), {
                config: I(k({}, Z.config), {
                    taskConfigV2: I(k({}, Z.config.taskConfigV2), {
                        tasks: I(k({}, n), { [l.X.WATCH_VIDEO]: I(k({}, r), { assets: s }) }),
                    }),
                }),
            }),
        );
    }
    function er(e, t) {
        var n, r, s;
        H(
            I(k({}, Z), {
                config: I(k({}, Z.config), {
                    videoMetadata: I(k({}, Z.config.videoMetadata), {
                        messages: null != (s = null == (n = Z.config.videoMetadata) ? void 0 : n.messages) ? s : {},
                        assets: I(k({}, null == (r = Z.config.videoMetadata) ? void 0 : r.assets), { [e]: t }),
                    }),
                }),
            }),
        );
    }
    function es(e, t) {
        if ("questName" === e || "gameTitle" === e || "gamePublisher" === e) {
            var n, r;
            H(
                I(k({}, Z), {
                    config:
                        ((n = Z.config),
                        (r = { [e]: t }),
                        (0, i.EQ)(n)
                            .with({ configVersion: 2 }, (e) => I(k({}, e), { messages: k({}, e.messages, r) }))
                            .exhaustive()),
                }),
            );
        }
    }
    function eo(e, t) {
        let n = Z.config.taskConfigV2.tasks,
            r = n[l.X.WATCH_VIDEO];
        if (null == r) return;
        let s = I(k({}, r.messages), { [e]: t });
        H(
            I(k({}, Z), {
                config: I(k({}, Z.config), {
                    taskConfigV2: I(k({}, Z.config.taskConfigV2), {
                        tasks: I(k({}, n), { [l.X.WATCH_VIDEO]: I(k({}, r), { messages: s }) }),
                    }),
                }),
            }),
        );
    }
    function ea(e, t, n) {
        if ("name" === e || "nameWithArticle" === e) {
            var r, s;
            H(
                I(k({}, Z), {
                    config:
                        ((r = Z.config),
                        (s = { [e]: t }),
                        (0, i.EQ)(r)
                            .with({ configVersion: 2 }, (e) =>
                                I(k({}, e), {
                                    rewardsConfig: I(k({}, e.rewardsConfig), {
                                        rewards: e.rewardsConfig.rewards.map((e, t) =>
                                            t === n ? I(k({}, e), { messages: k({}, e.messages, s) }) : e,
                                        ),
                                    }),
                                }),
                            )
                            .exhaustive()),
                }),
            );
        }
    }
    function ei(e, t) {
        H(I(k({}, Z), { config: I(k({}, Z.config), { colors: I(k({}, Z.config.colors), { [e]: t }) }) }));
    }
    function el() {
        (0, m.Xv)(Z.config)
            ? (0, S.openQuestCollectibleRewardModal)(Z, g.jn.GIFT_INVENTORY_FOR_YOU, g.jn.INTERNAL_PREVIEW_TOOL, !0)
            : (0, S.openQuestsRewardCodeModal)({
                  quest: Z,
                  questContent: g.jn.GIFT_INVENTORY_FOR_YOU,
                  preview: !0,
                  previewQuest: Z,
                  sourceQuestContent: g.jn.INTERNAL_PREVIEW_TOOL,
              });
    }
    let ec = s.useMemo(() => {
            for (let [e, t] of Object.entries(Z.config.taskConfigV2.tasks)) if (null != t.target) return t.target;
            return 10 * A.Z.Seconds.MINUTE;
        }, [Z.config.taskConfigV2.tasks]),
        ed = s.useMemo(() => l.X.WATCH_VIDEO in Z.config.taskConfigV2.tasks, [Z.config.taskConfigV2.tasks]);
    a()(!1 !== Z.preview && null != Z.preview, "Preview config must have property preview: true");
    let eu = Z.config.taskConfigV2.tasks[l.X.WATCH_VIDEO];
    return (0, r.jsxs)(p.zJl, {
        className: R.container,
        children: [
            (0, r.jsx)(p.X6q, {
                variant: "heading-lg/bold",
                className: R.heading,
                children: "Quest Preview Tool",
            }),
            (0, r.jsx)("div", {
                className: R.fields,
                children: (0, r.jsx)(C.Z, {
                    onSelect: function (e) {
                        $(e),
                            null != e &&
                                (X(
                                    (function (e) {
                                        if (null == e.userStatus) return E.a.UNENROLLED;
                                        if (null != e.userStatus.claimedAt) return E.a.CLAIMED;
                                        if (null != e.userStatus.completedAt) return E.a.COMPLETED_100;
                                        let t = (0, m.il)(e),
                                            n = t.progressSeconds,
                                            r = t.targetSeconds;
                                        return n / r >= 1
                                            ? E.a.COMPLETED_100
                                            : n / r >= 0.75
                                              ? E.a.COMPLETED_75
                                              : n / r >= 0.5
                                                ? E.a.COMPLETED_50
                                                : n / r >= 0.25
                                                  ? E.a.COMPLETED_25
                                                  : E.a.ENROLLED;
                                    })(e),
                                ),
                                H(e));
                    },
                    quest: J,
                }),
            }),
            (0, r.jsx)(p.X6q, {
                variant: "heading-md/semibold",
                className: R.subheading,
                children: "Task Config",
            }),
            (0, r.jsx)("div", {
                className: R.fields,
                children: (0, r.jsx)(y.Z, {
                    taskDuration: ec,
                    taskConfigV2: Z.config.taskConfigV2,
                    onSelect: function (e) {
                        H(I(k({}, Z), { config: I(k({}, Z.config), { taskConfigV2: e }) }));
                    },
                }),
            }),
            (0, r.jsx)(p.X6q, {
                variant: "heading-md/semibold",
                className: R.subheading,
                children: "Messages",
            }),
            (0, r.jsxs)("div", {
                className: R.fields,
                children: [
                    (0, r.jsx)(v.Z, {
                        title: "Quest Name",
                        assetKey: "questName",
                        onMessageChange: es,
                        initialValue: Z.config.messages.questName,
                    }),
                    (0, r.jsx)(v.Z, {
                        title: "Game Title",
                        assetKey: "gameTitle",
                        onMessageChange: es,
                        initialValue: Z.config.messages.gameTitle,
                    }),
                    (0, r.jsx)(v.Z, {
                        title: "Game Publisher",
                        assetKey: "gamePublisher",
                        onMessageChange: es,
                        initialValue: Z.config.messages.gamePublisher,
                    }),
                    ed &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(v.Z, {
                                    title: "Video Title",
                                    assetKey: "videoTitle",
                                    onMessageChange: eo,
                                    initialValue: null == eu ? void 0 : eu.messages.videoTitle,
                                }),
                                (0, r.jsx)(v.Z, {
                                    title: "End CTA Title",
                                    assetKey: "videoEndCtaTitle",
                                    onMessageChange: eo,
                                    initialValue: null == eu ? void 0 : eu.messages.videoEndCtaTitle,
                                }),
                                (0, r.jsx)(v.Z, {
                                    title: "End CTA Subtitle",
                                    assetKey: "videoEndCtaSubtitle",
                                    onMessageChange: eo,
                                    initialValue: null == eu ? void 0 : eu.messages.videoEndCtaSubtitle,
                                }),
                            ],
                        }),
                ],
            }),
            (0, r.jsx)(p.X6q, {
                variant: "heading-md/semibold",
                className: R.subheading,
                children: "Assets",
            }),
            (0, r.jsxs)("div", {
                className: R.fields,
                children: [
                    (0, r.jsx)(j.Z, {
                        title: "Hero",
                        assetKey: "hero",
                        onFileChange: et,
                        filters: L,
                        initialValue: Z.config.assets.hero,
                    }),
                    (0, r.jsx)(j.Z, {
                        title: "Hero Video (optional)",
                        assetKey: "heroVideo",
                        onFileChange: et,
                        filters: L,
                        initialValue: null != (B = Z.config.assets.heroVideo) ? B : void 0,
                    }),
                    (0, r.jsx)(j.Z, {
                        title: "Quest Bar Hero",
                        assetKey: "questBarHero",
                        onFileChange: et,
                        filters: L,
                        initialValue: Z.config.assets.questBarHero,
                    }),
                    (0, r.jsx)(j.Z, {
                        title: "Quest Bar Hero Video (optional)",
                        assetKey: "questBarHeroVideo",
                        onFileChange: et,
                        filters: L,
                        initialValue: null != (V = Z.config.assets.questBarHeroVideo) ? V : void 0,
                    }),
                    (0, r.jsx)(j.Z, {
                        title: "Game Tile",
                        assetKey: "gameTile",
                        onFileChange: et,
                        filters: [...D, "svg"],
                        initialValue: Z.config.assets.gameTile,
                    }),
                    (0, r.jsx)(j.Z, {
                        title: "Logotype",
                        assetKey: "logotype",
                        onFileChange: et,
                        filters: [...q, "svg"],
                        initialValue: Z.config.assets.logotype,
                    }),
                    ed &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(j.Z, {
                                    title: "Quest Video",
                                    assetKey: "videoPlayerVideo",
                                    onFileChange: en,
                                    filters: L,
                                    initialValue: null == eu ? void 0 : eu.assets.video.url,
                                }),
                                (0, r.jsx)(j.Z, {
                                    title: "Quest Video (Low Resolution)",
                                    assetKey: "videoPlayerVideoLowRes",
                                    onFileChange: en,
                                    filters: L,
                                    initialValue: null == eu || null == (e = eu.assets.videoLowRes) ? void 0 : e.url,
                                }),
                                (0, r.jsx)(j.Z, {
                                    title: "Video Player Thumbnail (optional)",
                                    assetKey: "videoPlayerThumbnail",
                                    onFileChange: en,
                                    filters: D,
                                    initialValue: null == eu ? void 0 : eu.assets.video.thumbnail,
                                }),
                                (0, r.jsx)(j.Z, {
                                    title: "Quest Bar Preview Video (optional)",
                                    assetKey: "questBarPreviewVideo",
                                    onFileChange: er,
                                    filters: L,
                                    initialValue:
                                        null == (t = Z.config.videoMetadata) ? void 0 : t.assets.questBarPreviewVideo,
                                }),
                                (0, r.jsx)(j.Z, {
                                    title: "Quest Home Video (optional)",
                                    assetKey: "questHomeVideo",
                                    onFileChange: er,
                                    filters: L,
                                    initialValue:
                                        null == (o = Z.config.videoMetadata) ? void 0 : o.assets.questHomeVideo,
                                }),
                            ],
                        }),
                ],
            }),
            ee.map((e, t) =>
                (0, r.jsxs)(
                    "div",
                    {
                        children: [
                            (0, r.jsxs)(p.X6q, {
                                variant: "heading-md/semibold",
                                className: R.subheading,
                                children: ["Reward #", t + 1],
                            }),
                            (0, r.jsxs)("div", {
                                className: R.fields,
                                children: [
                                    (0, r.jsx)(v.Z, {
                                        title: "Name",
                                        assetKey: "name",
                                        onMessageChange: (e, n) => ea(e, n, t),
                                        initialValue: e.messages.name,
                                    }),
                                    (0, r.jsx)(v.Z, {
                                        title: "Name With Article",
                                        assetKey: "nameWithArticle",
                                        onMessageChange: (e, n) => ea(e, n, t),
                                        initialValue: e.messages.nameWithArticle,
                                    }),
                                    e.type !== c.w.VIRTUAL_CURRENCY &&
                                        (0, r.jsx)(j.Z, {
                                            title: "Asset",
                                            assetKey: "asset",
                                            onFileChange: (e, n) =>
                                                (function (e, t, n) {
                                                    if ("asset" === e) {
                                                        var r;
                                                        H(
                                                            I(k({}, Z), {
                                                                config:
                                                                    ((r = Z.config),
                                                                    (0, i.EQ)(r)
                                                                        .with({ configVersion: 2 }, (e) =>
                                                                            I(k({}, e), {
                                                                                rewardsConfig: I(
                                                                                    k({}, e.rewardsConfig),
                                                                                    {
                                                                                        rewards:
                                                                                            e.rewardsConfig.rewards.map(
                                                                                                (e, r) =>
                                                                                                    r === n
                                                                                                        ? I(k({}, e), {
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
                                                })(e, n, t),
                                            filters: L,
                                            initialValue: e.asset,
                                        }),
                                    (0, r.jsxs)(p.xJW, {
                                        children: [
                                            (0, r.jsx)(p.vwX, { children: "Claim Modal" }),
                                            (0, r.jsx)(p.zxk, {
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
                    t,
                ),
            ),
            (0, r.jsx)(p.X6q, {
                variant: "heading-md/semibold",
                className: R.subheading,
                children: "Colors & Quest States",
            }),
            (0, r.jsxs)("div", {
                className: R.fields,
                children: [
                    (0, r.jsxs)("div", {
                        className: R.fields,
                        style: { marginBottom: 0 },
                        children: [
                            (0, r.jsx)(_.Z, {
                                title: "Primary",
                                colorKey: "primary",
                                onChange: ei,
                                value: Z.config.colors.primary,
                            }),
                            (0, r.jsx)(_.Z, {
                                title: "Secondary",
                                colorKey: "secondary",
                                onChange: ei,
                                value: Z.config.colors.secondary,
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: R.fields,
                        children: (0, r.jsx)(O.Z, {}),
                    }),
                    (0, r.jsx)(E.Z, {
                        onChange: function (e) {
                            switch ((X(e), e)) {
                                case E.a.UNENROLLED:
                                    H(I(k({}, Z), { userStatus: null }));
                                    break;
                                case E.a.ENROLLED:
                                    H(I(k({}, Z), { userStatus: Q({ enrolledAt: new Date().toISOString() }) }));
                                    break;
                                case E.a.COMPLETED_25:
                                    H(
                                        I(k({}, Z), {
                                            userStatus: Q({
                                                enrolledAt: new Date().toISOString(),
                                                streamProgressSeconds: 0.25 * ec,
                                            }),
                                        }),
                                    );
                                    break;
                                case E.a.COMPLETED_50:
                                    H(
                                        I(k({}, Z), {
                                            userStatus: Q({
                                                enrolledAt: new Date().toISOString(),
                                                streamProgressSeconds: 0.5 * ec,
                                            }),
                                        }),
                                    );
                                    break;
                                case E.a.COMPLETED_75:
                                    H(
                                        I(k({}, Z), {
                                            userStatus: Q({
                                                enrolledAt: new Date().toISOString(),
                                                streamProgressSeconds: 0.75 * ec,
                                            }),
                                        }),
                                    );
                                    break;
                                case E.a.COMPLETED_100:
                                    H(
                                        I(k({}, Z), {
                                            userStatus: Q({
                                                completedAt: new Date().toISOString(),
                                                enrolledAt: new Date().toISOString(),
                                                streamProgressSeconds: ec,
                                            }),
                                        }),
                                    );
                                    break;
                                case E.a.CLAIMED:
                                    H(
                                        I(k({}, Z), {
                                            userStatus: Q({
                                                claimedAt: new Date().toISOString(),
                                                completedAt: new Date().toISOString(),
                                                enrolledAt: new Date().toISOString(),
                                                streamProgressSeconds: ec,
                                            }),
                                        }),
                                    );
                            }
                        },
                        value: F,
                    }),
                ],
            }),
            (0, r.jsx)(p.X6q, {
                variant: "heading-lg/bold",
                className: R.heading,
                children: "Component Previews",
            }),
            (0, r.jsxs)("div", {
                className: R.componentPreviews,
                children: [
                    (0, r.jsxs)(b.Z, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(p.vwX, { children: "Quest Bar" }),
                            (0, r.jsxs)("div", {
                                className: R.questBarPreviewWrapper,
                                children: [
                                    (null == (d = Z.userStatus) ? void 0 : d.claimedAt) != null &&
                                        (0, r.jsx)(p.Text, {
                                            color: "text-secondary",
                                            variant: "text-sm/normal",
                                            children: "The Quest Bar is hidden when the user has claimed the reward.",
                                        }),
                                    (0, r.jsx)("div", {
                                        className: R.questBarPreview,
                                        children: (0, r.jsx)(T.p, {
                                            isPreview: !0,
                                            source: "preview",
                                            questId: "0",
                                            children: (0, r.jsx)(h.Z, { children: (0, r.jsx)(f.P, { quest: Z }) }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsxs)(b.Z, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(p.vwX, { children: "Quest Home Card" }),
                            (0, r.jsx)(T.p, {
                                isPreview: !0,
                                source: "preview",
                                questId: "0",
                                children: (0, r.jsx)(x.Z, {
                                    quest: Z,
                                    className: R.questTile,
                                    questContent: g.jn.QUEST_HOME_DESKTOP,
                                    contentPosition: 0,
                                    rowIndex: 0,
                                    sourceQuestContent: g.jn.INTERNAL_PREVIEW_TOOL,
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsxs)(b.Z, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(p.vwX, { children: "Channel Call Header" }),
                            (null == (u = Z.userStatus) ? void 0 : u.claimedAt) != null &&
                                (0, r.jsx)(p.Text, {
                                    color: "text-secondary",
                                    variant: "text-sm/normal",
                                    children:
                                        "The Quest Channel Call Header is hidden when the user has claimed the reward.",
                                }),
                            (0, r.jsx)("div", {
                                className: R.questBarPreviewWrapper,
                                children: (0, r.jsx)(T.p, {
                                    isPreview: !0,
                                    source: "preview",
                                    questId: "0",
                                    children: (0, r.jsx)("div", {
                                        className: R.questChannelCallHeaderPreview,
                                        children: (0, r.jsx)(P.Z, {
                                            channelId: "123",
                                            previewQuest: Z,
                                            isParticipatingOverride: z,
                                        }),
                                    }),
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: R.toggleSwitch,
                        children: (0, r.jsx)(p.xJW, {
                            children: (0, r.jsx)(p.rsf, {
                                label: "Is Participating:",
                                checked: z,
                                onChange: function (e) {
                                    G(e);
                                },
                            }),
                        }),
                    }),
                    (0, r.jsxs)(b.Z, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(p.vwX, { children: "Quest Card Embed" }),
                            K
                                ? (0, r.jsx)(N.o, { questId: Z.id })
                                : (0, r.jsx)(
                                      w.Z,
                                      {
                                          quest: Z,
                                          location: g.jn.QUESTS_EMBED,
                                          sourceQuestContent: g.jn.INTERNAL_PREVIEW_TOOL,
                                      },
                                      Z.id,
                                  ),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: R.toggleSwitch,
                        children: (0, r.jsx)(p.xJW, {
                            children: (0, r.jsx)(p.rsf, {
                                label: "Invalid Quests Embed:",
                                checked: K,
                                onChange: Y,
                            }),
                        }),
                    }),
                    ed &&
                        (0, r.jsxs)(b.Z, {
                            withBorder: !0,
                            allowClicks: !0,
                            children: [
                                (0, r.jsx)(p.vwX, { children: "Video Player" }),
                                (0, r.jsx)(p.zxk, {
                                    variant: "primary",
                                    text: "Open Video Player Modal",
                                    onClick: () => {
                                        (0, p.ZDy)(async () => {
                                            let { default: e } = await Promise.all([
                                                n.e("11416"),
                                                n.e("32249"),
                                                n.e("32587"),
                                            ]).then(n.bind(n, 536687));
                                            return (t) => {
                                                var n;
                                                return (0, r.jsx)(
                                                    e,
                                                    I(k({}, t), {
                                                        openStartClockTime: performance.now(),
                                                        videoSessionId: "fake-quest-session-id",
                                                        questId: null != (n = Z.id) ? n : "fake-quest-id",
                                                        overrideQuest: Z,
                                                        autoplay: !0,
                                                        sourceQuestContent: g.jn.INTERNAL_PREVIEW_TOOL,
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
class U extends s.Component {
    componentDidCatch(e) {
        this.setState({ error: e });
    }
    render() {
        let { error: e, renderKey: t } = this.state;
        return null != e
            ? (0, r.jsxs)("div", {
                  className: R.errorBoundary,
                  children: [
                      (0, r.jsx)(p.Mgn, { className: R.errorBoundaryIcon }),
                      (0, r.jsx)(p.X6q, {
                          variant: "heading-lg/semibold",
                          children: "Something broke in the Quest preview tool :(",
                      }),
                      (0, r.jsx)(p.zxk, {
                          variant: "secondary",
                          text: "Reset",
                          onClick: this.handleResetState,
                      }),
                      null != e.message &&
                          (0, r.jsx)(p.Zbd, {
                              className: R.errorMessageWrapper,
                              children: (0, r.jsx)("code", {
                                  className: R.errorMessage,
                                  children: e.message,
                              }),
                          }),
                  ],
              })
            : (0, r.jsx)(Z, {}, t);
    }
    constructor(...e) {
        super(...e),
            B(this, "state", {
                error: null,
                renderKey: 0,
            }),
            B(this, "handleResetState", () => {
                this.setState((e) => ({
                    error: null,
                    renderKey: e.renderKey + 1,
                }));
            });
    }
}
let H = U;
