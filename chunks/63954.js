n.d(t, {
    Z: () => H,
    b: () => Q,
}),
    n(388685),
    n(314940);
var r = n(54381),
    s = n(473749),
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
    b = n(478977),
    _ = n(456799),
    j = n(210851),
    v = n(602683),
    C = n(916028),
    y = n(749912),
    E = n(815183),
    O = n(899457),
    S = n(110560),
    T = n(78826),
    w = n(134483),
    P = n(683650),
    N = n(752367),
    A = n(70956),
    R = n(188764);
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
let D = ["png", "gif", "webp"],
    q = [...D, "jpg", "jpeg"],
    L = Array.from(new Set([...q, "gif", "mp4", "webm"]));
function Q(e) {
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
function V() {
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
    Z = {
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
function W() {
    var e, t, o, d, u, B, Q, M;
    let [W, U] = s.useState(Z),
        H = s.useCallback((e) => {
            U(I(k({}, e), { preview: !0 }));
        }, []),
        [F, z] = s.useState(O.a.UNENROLLED),
        [G, K] = s.useState(!1),
        [X, Y] = s.useState(!1),
        [J, $] = s.useState(null),
        ee =
            ((M = W.config),
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
                I(k({}, W), {
                    config:
                        ((n = W.config),
                        (r = { [e]: t }),
                        (0, i.EQ)(n)
                            .with({ configVersion: 2 }, (e) => I(k({}, e), { assets: k({}, e.assets, r) }))
                            .exhaustive()),
                }),
            );
        }
    }
    function en(e, t) {
        let n = W.config.taskConfigV2.tasks,
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
            I(k({}, W), {
                config: I(k({}, W.config), {
                    taskConfigV2: I(k({}, W.config.taskConfigV2), {
                        tasks: I(k({}, n), { [l.X.WATCH_VIDEO]: I(k({}, r), { assets: s }) }),
                    }),
                }),
            }),
        );
    }
    function er(e, t) {
        var n, r, s;
        H(
            I(k({}, W), {
                config: I(k({}, W.config), {
                    videoMetadata: I(k({}, W.config.videoMetadata), {
                        messages: null != (s = null == (n = W.config.videoMetadata) ? void 0 : n.messages) ? s : {},
                        assets: I(k({}, null == (r = W.config.videoMetadata) ? void 0 : r.assets), { [e]: t }),
                    }),
                }),
            }),
        );
    }
    function es(e, t) {
        if ("questName" === e || "gameTitle" === e || "gamePublisher" === e) {
            var n, r;
            H(
                I(k({}, W), {
                    config:
                        ((n = W.config),
                        (r = { [e]: t }),
                        (0, i.EQ)(n)
                            .with({ configVersion: 2 }, (e) => I(k({}, e), { messages: k({}, e.messages, r) }))
                            .exhaustive()),
                }),
            );
        }
    }
    function eo(e, t) {
        let n = W.config.taskConfigV2.tasks,
            r = n[l.X.WATCH_VIDEO];
        if (null == r) return;
        let s = I(k({}, r.messages), { [e]: t });
        H(
            I(k({}, W), {
                config: I(k({}, W.config), {
                    taskConfigV2: I(k({}, W.config.taskConfigV2), {
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
                I(k({}, W), {
                    config:
                        ((r = W.config),
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
        H(I(k({}, W), { config: I(k({}, W.config), { colors: I(k({}, W.config.colors), { [e]: t }) }) }));
    }
    function el() {
        (0, m.Xv)(W.config)
            ? (0, S.openQuestCollectibleRewardModal)(W, g.jn.GIFT_INVENTORY_FOR_YOU, g.jn.INTERNAL_PREVIEW_TOOL, !0)
            : (0, S.openQuestsRewardCodeModal)({
                  quest: W,
                  questContent: g.jn.GIFT_INVENTORY_FOR_YOU,
                  preview: !0,
                  previewQuest: W,
                  sourceQuestContent: g.jn.INTERNAL_PREVIEW_TOOL,
              });
    }
    let ec = s.useMemo(() => {
            for (let [e, t] of Object.entries(W.config.taskConfigV2.tasks)) if (null != t.target) return t.target;
            return 10 * A.Z.Seconds.MINUTE;
        }, [W.config.taskConfigV2.tasks]),
        ed = s.useMemo(() => l.X.WATCH_VIDEO in W.config.taskConfigV2.tasks, [W.config.taskConfigV2.tasks]);
    a()(!1 !== W.preview && null != W.preview, "Preview config must have property preview: true");
    let eu = W.config.taskConfigV2.tasks[l.X.WATCH_VIDEO];
    return (0, r.jsxs)(p.zJl, {
        className: R.container,
        children: [
            (0, r.jsx)(p.Heading, {
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
                                (z(
                                    (function (e) {
                                        if (null == e.userStatus) return O.a.UNENROLLED;
                                        if (null != e.userStatus.claimedAt) return O.a.CLAIMED;
                                        if (null != e.userStatus.completedAt) return O.a.COMPLETED_100;
                                        let t = (0, m.il)(e),
                                            n = t.progressSeconds,
                                            r = t.targetSeconds;
                                        return n / r >= 1
                                            ? O.a.COMPLETED_100
                                            : n / r >= 0.75
                                              ? O.a.COMPLETED_75
                                              : n / r >= 0.5
                                                ? O.a.COMPLETED_50
                                                : n / r >= 0.25
                                                  ? O.a.COMPLETED_25
                                                  : O.a.ENROLLED;
                                    })(e),
                                ),
                                H(e));
                    },
                    quest: J,
                }),
            }),
            (0, r.jsx)(p.Heading, {
                variant: "heading-md/semibold",
                className: R.subheading,
                children: "Task Config",
            }),
            (0, r.jsx)("div", {
                className: R.fields,
                children: (0, r.jsx)(y.Z, {
                    taskDuration: ec,
                    taskConfigV2: W.config.taskConfigV2,
                    onSelect: function (e) {
                        H(I(k({}, W), { config: I(k({}, W.config), { taskConfigV2: e }) }));
                    },
                }),
            }),
            (0, r.jsx)(p.Heading, {
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
                        initialValue: W.config.messages.questName,
                    }),
                    (0, r.jsx)(v.Z, {
                        title: "Game Title",
                        assetKey: "gameTitle",
                        onMessageChange: es,
                        initialValue: W.config.messages.gameTitle,
                    }),
                    (0, r.jsx)(v.Z, {
                        title: "Game Publisher",
                        assetKey: "gamePublisher",
                        onMessageChange: es,
                        initialValue: W.config.messages.gamePublisher,
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
            (0, r.jsx)(p.Heading, {
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
                        initialValue: W.config.assets.hero,
                    }),
                    (0, r.jsx)(j.Z, {
                        title: "Hero Video (optional)",
                        assetKey: "heroVideo",
                        onFileChange: et,
                        filters: L,
                        initialValue: null != (B = W.config.assets.heroVideo) ? B : void 0,
                    }),
                    (0, r.jsx)(j.Z, {
                        title: "Quest Bar Hero",
                        assetKey: "questBarHero",
                        onFileChange: et,
                        filters: L,
                        initialValue: W.config.assets.questBarHero,
                    }),
                    (0, r.jsx)(j.Z, {
                        title: "Quest Bar Hero Video (optional)",
                        assetKey: "questBarHeroVideo",
                        onFileChange: et,
                        filters: L,
                        initialValue: null != (Q = W.config.assets.questBarHeroVideo) ? Q : void 0,
                    }),
                    (0, r.jsx)(j.Z, {
                        title: "Game Tile",
                        assetKey: "gameTile",
                        onFileChange: et,
                        filters: [...q, "svg"],
                        initialValue: W.config.assets.gameTile,
                    }),
                    (0, r.jsx)(j.Z, {
                        title: "Logotype",
                        assetKey: "logotype",
                        onFileChange: et,
                        filters: [...D, "svg"],
                        initialValue: W.config.assets.logotype,
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
                                    filters: q,
                                    initialValue: null == eu ? void 0 : eu.assets.video.thumbnail,
                                }),
                                (0, r.jsx)(j.Z, {
                                    title: "Quest Bar Preview Video (optional)",
                                    assetKey: "questBarPreviewVideo",
                                    onFileChange: er,
                                    filters: L,
                                    initialValue:
                                        null == (t = W.config.videoMetadata) ? void 0 : t.assets.questBarPreviewVideo,
                                }),
                                (0, r.jsx)(j.Z, {
                                    title: "Quest Home Video (optional)",
                                    assetKey: "questHomeVideo",
                                    onFileChange: er,
                                    filters: L,
                                    initialValue:
                                        null == (o = W.config.videoMetadata) ? void 0 : o.assets.questHomeVideo,
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
                            (0, r.jsxs)(p.Heading, {
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
                                                            I(k({}, W), {
                                                                config:
                                                                    ((r = W.config),
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
                                    (0, r.jsxs)(p.Kqy, {
                                        direction: "vertical",
                                        gap: 8,
                                        children: [
                                            (0, r.jsx)(p.Heading, {
                                                variant: "heading-sm/semibold",
                                                children: "Claim Modal",
                                            }),
                                            (0, r.jsx)(p.Button, {
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
            (0, r.jsx)(p.Heading, {
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
                            (0, r.jsx)(b.Z, {
                                title: "Primary",
                                colorKey: "primary",
                                onChange: ei,
                                value: W.config.colors.primary,
                            }),
                            (0, r.jsx)(b.Z, {
                                title: "Secondary",
                                colorKey: "secondary",
                                onChange: ei,
                                value: W.config.colors.secondary,
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: R.fields,
                        children: (0, r.jsx)(E.Z, {}),
                    }),
                    (0, r.jsx)(O.Z, {
                        onChange: function (e) {
                            switch ((z(e), e)) {
                                case O.a.UNENROLLED:
                                    H(I(k({}, W), { userStatus: null }));
                                    break;
                                case O.a.ENROLLED:
                                    H(I(k({}, W), { userStatus: V({ enrolledAt: new Date().toISOString() }) }));
                                    break;
                                case O.a.COMPLETED_25:
                                    H(
                                        I(k({}, W), {
                                            userStatus: V({
                                                enrolledAt: new Date().toISOString(),
                                                streamProgressSeconds: 0.25 * ec,
                                            }),
                                        }),
                                    );
                                    break;
                                case O.a.COMPLETED_50:
                                    H(
                                        I(k({}, W), {
                                            userStatus: V({
                                                enrolledAt: new Date().toISOString(),
                                                streamProgressSeconds: 0.5 * ec,
                                            }),
                                        }),
                                    );
                                    break;
                                case O.a.COMPLETED_75:
                                    H(
                                        I(k({}, W), {
                                            userStatus: V({
                                                enrolledAt: new Date().toISOString(),
                                                streamProgressSeconds: 0.75 * ec,
                                            }),
                                        }),
                                    );
                                    break;
                                case O.a.COMPLETED_100:
                                    H(
                                        I(k({}, W), {
                                            userStatus: V({
                                                completedAt: new Date().toISOString(),
                                                enrolledAt: new Date().toISOString(),
                                                streamProgressSeconds: ec,
                                            }),
                                        }),
                                    );
                                    break;
                                case O.a.CLAIMED:
                                    H(
                                        I(k({}, W), {
                                            userStatus: V({
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
            (0, r.jsx)(p.Heading, {
                variant: "heading-lg/bold",
                className: R.heading,
                children: "Component Previews",
            }),
            (0, r.jsxs)("div", {
                className: R.componentPreviews,
                children: [
                    (0, r.jsxs)(_.Z, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(p.Heading, {
                                variant: "heading-sm/semibold",
                                children: "Quest Bar",
                            }),
                            (0, r.jsxs)("div", {
                                className: R.questBarPreviewWrapper,
                                children: [
                                    (null == (d = W.userStatus) ? void 0 : d.claimedAt) != null &&
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
                                            children: (0, r.jsx)(h.Z, { children: (0, r.jsx)(f.P, { quest: W }) }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsxs)(_.Z, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(p.Heading, {
                                variant: "heading-sm/semibold",
                                children: "Quest Home Card",
                            }),
                            (0, r.jsx)(T.p, {
                                isPreview: !0,
                                source: "preview",
                                questId: "0",
                                children: (0, r.jsx)(x.Z, {
                                    quest: W,
                                    className: R.questTile,
                                    questContent: g.jn.QUEST_HOME_DESKTOP,
                                    contentPosition: 0,
                                    rowIndex: 0,
                                    sourceQuestContent: g.jn.INTERNAL_PREVIEW_TOOL,
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsxs)(_.Z, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(p.Heading, {
                                variant: "heading-sm/semibold",
                                children: "Channel Call Header",
                            }),
                            (null == (u = W.userStatus) ? void 0 : u.claimedAt) != null &&
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
                                        children: (0, r.jsx)(w.Z, {
                                            channelId: "123",
                                            previewQuest: W,
                                            isParticipatingOverride: G,
                                        }),
                                    }),
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: R.toggleSwitch,
                        children: (0, r.jsx)(p.rsf, {
                            label: "Is Participating:",
                            checked: G,
                            onChange: function (e) {
                                K(e);
                            },
                        }),
                    }),
                    (0, r.jsxs)(_.Z, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(p.Heading, {
                                variant: "heading-sm/semibold",
                                children: "Quest Card Embed",
                            }),
                            X
                                ? (0, r.jsx)(P.o, { questId: W.id })
                                : (0, r.jsx)(
                                      N.X,
                                      {
                                          quest: W,
                                          location: g.jn.QUESTS_EMBED,
                                          sourceQuestContent: g.jn.INTERNAL_PREVIEW_TOOL,
                                      },
                                      W.id,
                                  ),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: R.toggleSwitch,
                        children: (0, r.jsx)(p.rsf, {
                            label: "Invalid Quests Embed:",
                            checked: X,
                            onChange: Y,
                        }),
                    }),
                    ed &&
                        (0, r.jsxs)(_.Z, {
                            withBorder: !0,
                            allowClicks: !0,
                            children: [
                                (0, r.jsx)(p.Heading, {
                                    variant: "heading-sm/semibold",
                                    children: "Video Player",
                                }),
                                (0, r.jsx)(p.Button, {
                                    variant: "primary",
                                    text: "Open Video Player Modal",
                                    onClick: () => {
                                        (0, p.ZDy)(async () => {
                                            let { default: e } = await Promise.all([
                                                n.e("13193"),
                                                n.e("75909"),
                                                n.e("67230"),
                                            ]).then(n.bind(n, 215113));
                                            return (t) => {
                                                var n;
                                                return (0, r.jsx)(
                                                    e,
                                                    I(k({}, t), {
                                                        openStartClockTime: performance.now(),
                                                        videoSessionId: "fake-quest-session-id",
                                                        questId: null != (n = W.id) ? n : "fake-quest-id",
                                                        overrideQuest: W,
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
                      (0, r.jsx)(p.Heading, {
                          variant: "heading-lg/semibold",
                          children: "Something broke in the Quest preview tool :(",
                      }),
                      (0, r.jsx)(p.Button, {
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
            : (0, r.jsx)(W, {}, t);
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
