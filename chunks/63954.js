n.d(t, {
    Z: () => z,
    b: () => V,
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
    m = n(49436),
    g = n(115179),
    f = n(254579),
    h = n(455357),
    x = n(210724),
    _ = n(130653),
    b = n(801604),
    j = n(557843),
    v = n(686834),
    C = n(415104),
    y = n(478977),
    E = n(456799),
    O = n(210851),
    S = n(602683),
    T = n(916028),
    w = n(749912),
    P = n(815183),
    N = n(899457),
    R = n(110560),
    A = n(70956),
    B = n(188764);
function k(e, t, n) {
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
function I(e) {
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
                k(e, t, n[t]);
            });
    }
    return e;
}
function D(e, t) {
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
    L = [...q, "jpg", "jpeg"],
    Q = Array.from(new Set([...L, "gif", "mp4", "webm"]));
function V(e) {
    var t, n;
    return {
        code: "PREVIEW-MODE-CODE",
        tier: 0,
        platform: m.y$.CROSS_PLATFORM,
        userId: "123",
        questId: e.id,
        claimedAt: null != (n = null == (t = e.userStatus) ? void 0 : t.claimedAt) ? n : "",
    };
}
function M() {
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
let W = "1193992107035983872",
    Z = {
        id: W,
        preview: !0,
        config: {
            id: W,
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
            ctaConfig: {
                link: "https://discord.com/",
                buttonLabel: "Learn More",
            },
        },
        userStatus: null,
        targetedContent: [],
    };
function U() {
    var e, t, o, d, u, k;
    let [V, W] = s.useState(Z),
        U = s.useCallback((e) => {
            W(D(I({}, e), { preview: !0 }));
        }, []),
        [H, z] = s.useState(N.a.UNENROLLED),
        [F, G] = s.useState(!1),
        [K, X] = s.useState(!1),
        [Y, J] = s.useState(null),
        $ =
            ((k = V.config),
            (0, i.EQ)(k)
                .with({ configVersion: 2 }, (e) => e.rewardsConfig.rewards)
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
            var n, r;
            U(
                D(I({}, V), {
                    config:
                        ((n = V.config),
                        (r = { [e]: t }),
                        (0, i.EQ)(n)
                            .with({ configVersion: 2 }, (e) => D(I({}, e), { assets: I({}, e.assets, r) }))
                            .exhaustive()),
                }),
            );
        }
    }
    function et(e, t) {
        let n = V.config.taskConfigV2.tasks,
            r = n[l.X.WATCH_VIDEO];
        if (null == r) return;
        let s = I({}, r.assets);
        switch (e) {
            case "videoPlayerVideo":
                s.video = { url: t };
                break;
            case "videoPlayerVideoLowRes":
                s.videoLowRes = { url: t };
                break;
            case "videoPlayerThumbnail":
                s.video = D(I({}, s.video), { thumbnail: t });
                break;
            default:
                return;
        }
        U(
            D(I({}, V), {
                config: D(I({}, V.config), {
                    taskConfigV2: D(I({}, V.config.taskConfigV2), {
                        tasks: D(I({}, n), { [l.X.WATCH_VIDEO]: D(I({}, r), { assets: s }) }),
                    }),
                }),
            }),
        );
    }
    function en(e, t) {
        if ("questName" === e || "gameTitle" === e || "gamePublisher" === e) {
            var n, r;
            U(
                D(I({}, V), {
                    config:
                        ((n = V.config),
                        (r = { [e]: t }),
                        (0, i.EQ)(n)
                            .with({ configVersion: 2 }, (e) => D(I({}, e), { messages: I({}, e.messages, r) }))
                            .exhaustive()),
                }),
            );
        }
    }
    function er(e, t, n) {
        if ("name" === e || "nameWithArticle" === e) {
            var r, s;
            U(
                D(I({}, V), {
                    config:
                        ((r = V.config),
                        (s = { [e]: t }),
                        (0, i.EQ)(r)
                            .with({ configVersion: 2 }, (e) =>
                                D(I({}, e), {
                                    rewardsConfig: D(I({}, e.rewardsConfig), {
                                        rewards: e.rewardsConfig.rewards.map((e, t) =>
                                            t === n ? D(I({}, e), { messages: I({}, e.messages, s) }) : e,
                                        ),
                                    }),
                                }),
                            )
                            .exhaustive()),
                }),
            );
        }
    }
    function es(e, t) {
        U(D(I({}, V), { config: D(I({}, V.config), { colors: D(I({}, V.config.colors), { [e]: t }) }) }));
    }
    function eo() {
        (0, g.Xv)(V.config)
            ? (0, R.openQuestCollectibleRewardModal)(V, m.jn.GIFT_INVENTORY_FOR_YOU, m.jn.INTERNAL_PREVIEW_TOOL, !0)
            : (0, R.openQuestsRewardCodeModal)({
                  quest: V,
                  questContent: m.jn.GIFT_INVENTORY_FOR_YOU,
                  preview: !0,
                  previewQuest: V,
                  sourceQuestContent: m.jn.INTERNAL_PREVIEW_TOOL,
              });
    }
    let ea = s.useMemo(() => {
            for (let [e, t] of Object.entries(V.config.taskConfigV2.tasks)) if (null != t.target) return t.target;
            return 10 * A.Z.Seconds.MINUTE;
        }, [V.config.taskConfigV2.tasks]),
        ei = s.useMemo(() => l.X.WATCH_VIDEO in V.config.taskConfigV2.tasks, [V.config.taskConfigV2.tasks]);
    a()(!1 !== V.preview && null != V.preview, "Preview config must have property preview: true");
    let el = V.config.taskConfigV2.tasks[l.X.WATCH_VIDEO];
    return (0, r.jsxs)(p.zJl, {
        className: B.container,
        children: [
            (0, r.jsx)(p.Heading, {
                variant: "heading-lg/bold",
                className: B.heading,
                children: "Quest Preview Tool",
            }),
            (0, r.jsx)("div", {
                className: B.fields,
                children: (0, r.jsx)(T.Z, {
                    onSelect: function (e) {
                        J(e),
                            null != e &&
                                (z(
                                    (function (e) {
                                        if (null == e.userStatus) return N.a.UNENROLLED;
                                        if (null != e.userStatus.claimedAt) return N.a.CLAIMED;
                                        if (null != e.userStatus.completedAt) return N.a.COMPLETED_100;
                                        let t = (0, f.il)(e),
                                            n = t.progressSeconds,
                                            r = t.targetSeconds;
                                        return n / r >= 1
                                            ? N.a.COMPLETED_100
                                            : n / r >= 0.75
                                              ? N.a.COMPLETED_75
                                              : n / r >= 0.5
                                                ? N.a.COMPLETED_50
                                                : n / r >= 0.25
                                                  ? N.a.COMPLETED_25
                                                  : N.a.ENROLLED;
                                    })(e),
                                ),
                                U(e));
                    },
                    quest: Y,
                }),
            }),
            (0, r.jsx)(p.Heading, {
                variant: "heading-md/semibold",
                className: B.subheading,
                children: "Task Config",
            }),
            (0, r.jsx)("div", {
                className: B.fields,
                children: (0, r.jsx)(w.Z, {
                    taskDuration: ea,
                    taskConfigV2: V.config.taskConfigV2,
                    onSelect: function (e) {
                        U(D(I({}, V), { config: D(I({}, V.config), { taskConfigV2: e }) }));
                    },
                }),
            }),
            (0, r.jsx)(p.Heading, {
                variant: "heading-md/semibold",
                className: B.subheading,
                children: "Messages",
            }),
            (0, r.jsxs)("div", {
                className: B.fields,
                children: [
                    (0, r.jsx)(S.Z, {
                        title: "Quest Name",
                        assetKey: "questName",
                        onMessageChange: en,
                        initialValue: V.config.messages.questName,
                    }),
                    (0, r.jsx)(S.Z, {
                        title: "Game Title",
                        assetKey: "gameTitle",
                        onMessageChange: en,
                        initialValue: V.config.messages.gameTitle,
                    }),
                    (0, r.jsx)(S.Z, {
                        title: "Game Publisher",
                        assetKey: "gamePublisher",
                        onMessageChange: en,
                        initialValue: V.config.messages.gamePublisher,
                    }),
                    ei &&
                        (0, r.jsx)(S.Z, {
                            title: "Video Title",
                            assetKey: "videoTitle",
                            onMessageChange: function (e, t) {
                                let n = V.config.taskConfigV2.tasks,
                                    r = n[l.X.WATCH_VIDEO];
                                if (null == r) return;
                                let s = D(I({}, r.messages), { [e]: t });
                                U(
                                    D(I({}, V), {
                                        config: D(I({}, V.config), {
                                            taskConfigV2: D(I({}, V.config.taskConfigV2), {
                                                tasks: D(I({}, n), { [l.X.WATCH_VIDEO]: D(I({}, r), { messages: s }) }),
                                            }),
                                        }),
                                    }),
                                );
                            },
                            initialValue: null == el ? void 0 : el.messages.videoTitle,
                        }),
                ],
            }),
            (0, r.jsx)(p.Heading, {
                variant: "heading-md/semibold",
                className: B.subheading,
                children: "Assets",
            }),
            (0, r.jsxs)("div", {
                className: B.fields,
                children: [
                    (0, r.jsx)(O.Z, {
                        title: "Hero",
                        assetKey: "hero",
                        onFileChange: ee,
                        filters: Q,
                        initialValue: V.config.assets.hero,
                    }),
                    (0, r.jsx)(O.Z, {
                        title: "Hero Video (optional)",
                        assetKey: "heroVideo",
                        onFileChange: ee,
                        filters: Q,
                        initialValue: null != (d = V.config.assets.heroVideo) ? d : void 0,
                    }),
                    (0, r.jsx)(O.Z, {
                        title: "Quest Bar Hero",
                        assetKey: "questBarHero",
                        onFileChange: ee,
                        filters: Q,
                        initialValue: V.config.assets.questBarHero,
                    }),
                    (0, r.jsx)(O.Z, {
                        title: "Quest Bar Hero Video (optional)",
                        assetKey: "questBarHeroVideo",
                        onFileChange: ee,
                        filters: Q,
                        initialValue: null != (u = V.config.assets.questBarHeroVideo) ? u : void 0,
                    }),
                    (0, r.jsx)(O.Z, {
                        title: "Game Tile",
                        assetKey: "gameTile",
                        onFileChange: ee,
                        filters: [...L, "svg"],
                        initialValue: V.config.assets.gameTile,
                    }),
                    (0, r.jsx)(O.Z, {
                        title: "Logotype",
                        assetKey: "logotype",
                        onFileChange: ee,
                        filters: [...q, "svg"],
                        initialValue: V.config.assets.logotype,
                    }),
                    ei &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(O.Z, {
                                    title: "Quest Video",
                                    assetKey: "videoPlayerVideo",
                                    onFileChange: et,
                                    filters: Q,
                                    initialValue: null == el ? void 0 : el.assets.video.url,
                                }),
                                (0, r.jsx)(O.Z, {
                                    title: "Quest Video (Low Resolution)",
                                    assetKey: "videoPlayerVideoLowRes",
                                    onFileChange: et,
                                    filters: Q,
                                    initialValue: null == el || null == (e = el.assets.videoLowRes) ? void 0 : e.url,
                                }),
                                (0, r.jsx)(O.Z, {
                                    title: "Video Player Thumbnail (optional)",
                                    assetKey: "videoPlayerThumbnail",
                                    onFileChange: et,
                                    filters: L,
                                    initialValue: null == el ? void 0 : el.assets.video.thumbnail,
                                }),
                            ],
                        }),
                ],
            }),
            $.map((e, t) =>
                (0, r.jsxs)(
                    "div",
                    {
                        children: [
                            (0, r.jsxs)(p.Heading, {
                                variant: "heading-md/semibold",
                                className: B.subheading,
                                children: ["Reward #", t + 1],
                            }),
                            (0, r.jsxs)("div", {
                                className: B.fields,
                                children: [
                                    (0, r.jsx)(S.Z, {
                                        title: "Name",
                                        assetKey: "name",
                                        onMessageChange: (e, n) => er(e, n, t),
                                        initialValue: e.messages.name,
                                    }),
                                    (0, r.jsx)(S.Z, {
                                        title: "Name With Article",
                                        assetKey: "nameWithArticle",
                                        onMessageChange: (e, n) => er(e, n, t),
                                        initialValue: e.messages.nameWithArticle,
                                    }),
                                    e.type !== c.w.VIRTUAL_CURRENCY &&
                                        (0, r.jsx)(O.Z, {
                                            title: "Asset",
                                            assetKey: "asset",
                                            onFileChange: (e, n) =>
                                                (function (e, t, n) {
                                                    if ("asset" === e) {
                                                        var r;
                                                        U(
                                                            D(I({}, V), {
                                                                config:
                                                                    ((r = V.config),
                                                                    (0, i.EQ)(r)
                                                                        .with({ configVersion: 2 }, (e) =>
                                                                            D(I({}, e), {
                                                                                rewardsConfig: D(
                                                                                    I({}, e.rewardsConfig),
                                                                                    {
                                                                                        rewards:
                                                                                            e.rewardsConfig.rewards.map(
                                                                                                (e, r) =>
                                                                                                    r === n
                                                                                                        ? D(I({}, e), {
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
                                            filters: Q,
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
            (0, r.jsx)(p.Heading, {
                variant: "heading-md/semibold",
                className: B.subheading,
                children: "Colors & Quest States",
            }),
            (0, r.jsxs)("div", {
                className: B.fields,
                children: [
                    (0, r.jsxs)("div", {
                        className: B.fields,
                        style: { marginBottom: 0 },
                        children: [
                            (0, r.jsx)(y.Z, {
                                title: "Primary",
                                colorKey: "primary",
                                onChange: es,
                                value: V.config.colors.primary,
                            }),
                            (0, r.jsx)(y.Z, {
                                title: "Secondary",
                                colorKey: "secondary",
                                onChange: es,
                                value: V.config.colors.secondary,
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: B.fields,
                        children: (0, r.jsx)(P.Z, {}),
                    }),
                    (0, r.jsx)(N.Z, {
                        onChange: function (e) {
                            switch ((z(e), e)) {
                                case N.a.UNENROLLED:
                                    U(D(I({}, V), { userStatus: null }));
                                    break;
                                case N.a.ENROLLED:
                                    U(D(I({}, V), { userStatus: M({ enrolledAt: new Date().toISOString() }) }));
                                    break;
                                case N.a.COMPLETED_25:
                                    U(
                                        D(I({}, V), {
                                            userStatus: M({
                                                enrolledAt: new Date().toISOString(),
                                                streamProgressSeconds: 0.25 * ea,
                                            }),
                                        }),
                                    );
                                    break;
                                case N.a.COMPLETED_50:
                                    U(
                                        D(I({}, V), {
                                            userStatus: M({
                                                enrolledAt: new Date().toISOString(),
                                                streamProgressSeconds: 0.5 * ea,
                                            }),
                                        }),
                                    );
                                    break;
                                case N.a.COMPLETED_75:
                                    U(
                                        D(I({}, V), {
                                            userStatus: M({
                                                enrolledAt: new Date().toISOString(),
                                                streamProgressSeconds: 0.75 * ea,
                                            }),
                                        }),
                                    );
                                    break;
                                case N.a.COMPLETED_100:
                                    U(
                                        D(I({}, V), {
                                            userStatus: M({
                                                completedAt: new Date().toISOString(),
                                                enrolledAt: new Date().toISOString(),
                                                streamProgressSeconds: ea,
                                            }),
                                        }),
                                    );
                                    break;
                                case N.a.CLAIMED:
                                    U(
                                        D(I({}, V), {
                                            userStatus: M({
                                                claimedAt: new Date().toISOString(),
                                                completedAt: new Date().toISOString(),
                                                enrolledAt: new Date().toISOString(),
                                                streamProgressSeconds: ea,
                                            }),
                                        }),
                                    );
                            }
                        },
                        value: H,
                    }),
                ],
            }),
            (0, r.jsx)(p.Heading, {
                variant: "heading-lg/bold",
                className: B.heading,
                children: "Component Previews",
            }),
            (0, r.jsxs)("div", {
                className: B.componentPreviews,
                children: [
                    (0, r.jsxs)(E.Z, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(p.Heading, {
                                variant: "heading-sm/semibold",
                                children: "Quest Bar",
                            }),
                            (0, r.jsxs)("div", {
                                className: B.questBarPreviewWrapper,
                                children: [
                                    (null == (t = V.userStatus) ? void 0 : t.claimedAt) != null &&
                                        (0, r.jsx)(p.Text, {
                                            color: "text-subtle",
                                            variant: "text-sm/normal",
                                            children: "The Quest Bar is hidden when the user has claimed the reward.",
                                        }),
                                    (0, r.jsx)("div", {
                                        className: B.questBarPreview,
                                        children: (0, r.jsx)(h.x8, {
                                            isPreview: !0,
                                            source: "preview",
                                            questId: "0",
                                            children: (0, r.jsx)(_.Z, { children: (0, r.jsx)(x.P, { quest: V }) }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsxs)(E.Z, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(p.Heading, {
                                variant: "heading-sm/semibold",
                                children: "Quest Home Card",
                            }),
                            (0, r.jsx)(h.x8, {
                                isPreview: !0,
                                source: "preview",
                                questId: "0",
                                children: (0, r.jsx)(C.Z, {
                                    quest: V,
                                    className: B.questTile,
                                    questContent: m.jn.QUEST_HOME_DESKTOP,
                                    contentPosition: 0,
                                    rowIndex: 0,
                                    sourceQuestContent: m.jn.INTERNAL_PREVIEW_TOOL,
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsxs)(E.Z, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(p.Heading, {
                                variant: "heading-sm/semibold",
                                children: "Channel Call Header",
                            }),
                            (null == (o = V.userStatus) ? void 0 : o.claimedAt) != null &&
                                (0, r.jsx)(p.Text, {
                                    color: "text-subtle",
                                    variant: "text-sm/normal",
                                    children:
                                        "The Quest Channel Call Header is hidden when the user has claimed the reward.",
                                }),
                            (0, r.jsx)("div", {
                                className: B.questBarPreviewWrapper,
                                children: (0, r.jsx)(h.x8, {
                                    isPreview: !0,
                                    source: "preview",
                                    questId: "0",
                                    children: (0, r.jsx)("div", {
                                        className: B.questChannelCallHeaderPreview,
                                        children: (0, r.jsx)(b.Z, {
                                            channelId: "123",
                                            previewQuest: V,
                                            isParticipatingOverride: F,
                                        }),
                                    }),
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: B.toggleSwitch,
                        children: (0, r.jsx)(p.rsf, {
                            label: "Is Participating:",
                            checked: F,
                            onChange: function (e) {
                                G(e);
                            },
                        }),
                    }),
                    (0, r.jsxs)(E.Z, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(p.Heading, {
                                variant: "heading-sm/semibold",
                                children: "Quest Card Embed",
                            }),
                            K
                                ? (0, r.jsx)(j.W, { questId: V.id })
                                : (0, r.jsx)(
                                      v.X,
                                      {
                                          quest: V,
                                          location: m.jn.QUESTS_EMBED,
                                          sourceQuestContent: m.jn.INTERNAL_PREVIEW_TOOL,
                                      },
                                      V.id,
                                  ),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: B.toggleSwitch,
                        children: (0, r.jsx)(p.rsf, {
                            label: "Invalid Quests Embed:",
                            checked: K,
                            onChange: X,
                        }),
                    }),
                    ei &&
                        (0, r.jsxs)(E.Z, {
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
                                                    D(I({}, t), {
                                                        openStartClockTime: performance.now(),
                                                        videoSessionId: "fake-quest-session-id",
                                                        questId: null != (n = V.id) ? n : "fake-quest-id",
                                                        overrideQuest: V,
                                                        autoplay: !0,
                                                        sourceQuestContent: m.jn.INTERNAL_PREVIEW_TOOL,
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
class H extends s.Component {
    componentDidCatch(e) {
        this.setState({ error: e });
    }
    render() {
        let { error: e, renderKey: t } = this.state;
        return null != e
            ? (0, r.jsxs)("div", {
                  className: B.errorBoundary,
                  children: [
                      (0, r.jsx)(p.Mgn, { className: B.errorBoundaryIcon }),
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
                              className: B.errorMessageWrapper,
                              children: (0, r.jsx)("code", {
                                  className: B.errorMessage,
                                  children: e.message,
                              }),
                          }),
                  ],
              })
            : (0, r.jsx)(U, {}, t);
    }
    constructor(...e) {
        super(...e),
            k(this, "state", {
                error: null,
                renderKey: 0,
            }),
            k(this, "handleResetState", () => {
                this.setState((e) => ({
                    error: null,
                    renderKey: e.renderKey + 1,
                }));
            });
    }
}
let z = H;
