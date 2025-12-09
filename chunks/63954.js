n.d(t, { Z: () => W }), n(388685), n(314940);
var a = n(54381),
    r = n(473749),
    i = n(512722),
    l = n.n(i),
    s = n(278074),
    o = n(754700),
    c = n(887003),
    d = n(820827),
    u = n(458708),
    m = n(481060),
    p = n(49436),
    h = n(115179),
    x = n(254579),
    f = n(455357),
    g = n(210724),
    b = n(130653),
    v = n(801604),
    j = n(557843),
    _ = n(686834),
    y = n(415104),
    C = n(478977),
    S = n(456799),
    E = n(210851),
    O = n(602683),
    T = n(916028),
    N = n(749912),
    P = n(815183),
    w = n(899457),
    I = n(110560),
    k = n(70956),
    R = n(188764);
function A(e, t, n) {
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
                A(e, t, n[t]);
            });
    }
    return e;
}
function Z(e, t) {
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
    M = [...L, "jpg", "jpeg"],
    U = Array.from(new Set([...M, "gif", "mp4", "webm"]));
function B() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { streamProgressSeconds: t = 0, completedAt: n = null, enrolledAt: a = null, claimedAt: r = null } = e;
    return {
        userId: "123",
        questId: "1193992107035983872",
        enrolledAt: a,
        completedAt: n,
        claimedAt: r,
        claimedTier: null,
        lastStreamHeartbeatAt: null,
        streamProgressSeconds: t,
        dismissedQuestContent: 0,
        progress: {},
    };
}
let F = "1193992107035983872",
    G = {
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
                    [o.X.PLAY_ON_DESKTOP]: {
                        type: o.X.PLAY_ON_DESKTOP,
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
function V() {
    var e, t, i, d, u, A;
    let [F, V] = r.useState(G),
        H = r.useCallback((e) => {
            V(Z(D({}, e), { preview: !0 }));
        }, []),
        [W, z] = r.useState(w.a.UNENROLLED),
        [K, q] = r.useState(!1),
        [Q, Y] = r.useState(!1),
        [X, J] = r.useState(null),
        $ =
            ((A = F.config),
            (0, s.EQ)(A)
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
            var n, a;
            H(
                Z(D({}, F), {
                    config:
                        ((n = F.config),
                        (a = { [e]: t }),
                        (0, s.EQ)(n)
                            .with({ configVersion: 2 }, (e) => Z(D({}, e), { assets: D({}, e.assets, a) }))
                            .exhaustive()),
                }),
            );
        }
    }
    function et(e, t) {
        let n = F.config.taskConfigV2.tasks,
            a = n[o.X.WATCH_VIDEO];
        if (null == a) return;
        let r = D({}, a.assets);
        switch (e) {
            case "videoPlayerVideo":
                r.video = { url: t };
                break;
            case "videoPlayerVideoLowRes":
                r.videoLowRes = { url: t };
                break;
            case "videoPlayerThumbnail":
                r.video = Z(D({}, r.video), { thumbnail: t });
                break;
            default:
                return;
        }
        H(
            Z(D({}, F), {
                config: Z(D({}, F.config), {
                    taskConfigV2: Z(D({}, F.config.taskConfigV2), {
                        tasks: Z(D({}, n), { [o.X.WATCH_VIDEO]: Z(D({}, a), { assets: r }) }),
                    }),
                }),
            }),
        );
    }
    function en(e, t) {
        if ("questName" === e || "gameTitle" === e || "gamePublisher" === e) {
            var n, a;
            H(
                Z(D({}, F), {
                    config:
                        ((n = F.config),
                        (a = { [e]: t }),
                        (0, s.EQ)(n)
                            .with({ configVersion: 2 }, (e) => Z(D({}, e), { messages: D({}, e.messages, a) }))
                            .exhaustive()),
                }),
            );
        }
    }
    function ea(e, t, n) {
        if ("name" === e || "nameWithArticle" === e) {
            var a, r;
            H(
                Z(D({}, F), {
                    config:
                        ((a = F.config),
                        (r = { [e]: t }),
                        (0, s.EQ)(a)
                            .with({ configVersion: 2 }, (e) =>
                                Z(D({}, e), {
                                    rewardsConfig: Z(D({}, e.rewardsConfig), {
                                        rewards: e.rewardsConfig.rewards.map((e, t) =>
                                            t === n ? Z(D({}, e), { messages: D({}, e.messages, r) }) : e,
                                        ),
                                    }),
                                }),
                            )
                            .exhaustive()),
                }),
            );
        }
    }
    function er(e, t) {
        H(Z(D({}, F), { config: Z(D({}, F.config), { colors: Z(D({}, F.config.colors), { [e]: t }) }) }));
    }
    function ei() {
        (0, h.Xv)(F.config) &&
            (0, I.openQuestCollectibleRewardModal)(F, p.jn.GIFT_INVENTORY_FOR_YOU, p.jn.INTERNAL_PREVIEW_TOOL, !0);
    }
    let el = r.useMemo(() => {
            for (let [e, t] of Object.entries(F.config.taskConfigV2.tasks)) if (null != t.target) return t.target;
            return 10 * k.Z.Seconds.MINUTE;
        }, [F.config.taskConfigV2.tasks]),
        es = r.useMemo(() => o.X.WATCH_VIDEO in F.config.taskConfigV2.tasks, [F.config.taskConfigV2.tasks]);
    l()(!1 !== F.preview && null != F.preview, "Preview config must have property preview: true");
    let eo = F.config.taskConfigV2.tasks[o.X.WATCH_VIDEO];
    return (0, a.jsxs)(m.zJl, {
        className: R.container,
        children: [
            (0, a.jsx)(m.Heading, {
                variant: "heading-lg/bold",
                className: R.heading,
                children: "Quest Preview Tool",
            }),
            (0, a.jsx)("div", {
                className: R.fields,
                children: (0, a.jsx)(T.Z, {
                    onSelect: function (e) {
                        J(e),
                            null != e &&
                                (z(
                                    (function (e) {
                                        if (null == e.userStatus) return w.a.UNENROLLED;
                                        if (null != e.userStatus.claimedAt) return w.a.CLAIMED;
                                        if (null != e.userStatus.completedAt) return w.a.COMPLETED_100;
                                        let t = (0, x.il)(e),
                                            n = t.progressSeconds,
                                            a = t.targetSeconds;
                                        return n / a >= 1
                                            ? w.a.COMPLETED_100
                                            : n / a >= 0.75
                                              ? w.a.COMPLETED_75
                                              : n / a >= 0.5
                                                ? w.a.COMPLETED_50
                                                : n / a >= 0.25
                                                  ? w.a.COMPLETED_25
                                                  : w.a.ENROLLED;
                                    })(e),
                                ),
                                H(e));
                    },
                    quest: X,
                }),
            }),
            (0, a.jsx)(m.Heading, {
                variant: "heading-md/semibold",
                className: R.subheading,
                children: "Task Config",
            }),
            (0, a.jsx)("div", {
                className: R.fields,
                children: (0, a.jsx)(N.Z, {
                    taskDuration: el,
                    taskConfigV2: F.config.taskConfigV2,
                    onSelect: function (e) {
                        H(Z(D({}, F), { config: Z(D({}, F.config), { taskConfigV2: e }) }));
                    },
                }),
            }),
            (0, a.jsx)(m.Heading, {
                variant: "heading-md/semibold",
                className: R.subheading,
                children: "Messages",
            }),
            (0, a.jsxs)("div", {
                className: R.fields,
                children: [
                    (0, a.jsx)(O.Z, {
                        title: "Quest Name",
                        assetKey: "questName",
                        onMessageChange: en,
                        initialValue: F.config.messages.questName,
                    }),
                    (0, a.jsx)(O.Z, {
                        title: "Game Title",
                        assetKey: "gameTitle",
                        onMessageChange: en,
                        initialValue: F.config.messages.gameTitle,
                    }),
                    (0, a.jsx)(O.Z, {
                        title: "Game Publisher",
                        assetKey: "gamePublisher",
                        onMessageChange: en,
                        initialValue: F.config.messages.gamePublisher,
                    }),
                    es &&
                        (0, a.jsx)(O.Z, {
                            title: "Video Title",
                            assetKey: "videoTitle",
                            onMessageChange: function (e, t) {
                                let n = F.config.taskConfigV2.tasks,
                                    a = n[o.X.WATCH_VIDEO];
                                if (null == a) return;
                                let r = Z(D({}, a.messages), { [e]: t });
                                H(
                                    Z(D({}, F), {
                                        config: Z(D({}, F.config), {
                                            taskConfigV2: Z(D({}, F.config.taskConfigV2), {
                                                tasks: Z(D({}, n), { [o.X.WATCH_VIDEO]: Z(D({}, a), { messages: r }) }),
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
                className: R.subheading,
                children: "Assets",
            }),
            (0, a.jsxs)("div", {
                className: R.fields,
                children: [
                    (0, a.jsx)(E.Z, {
                        title: "Hero",
                        assetKey: "hero",
                        onFileChange: ee,
                        filters: U,
                        initialValue: F.config.assets.hero,
                    }),
                    (0, a.jsx)(E.Z, {
                        title: "Hero Video (optional)",
                        assetKey: "heroVideo",
                        onFileChange: ee,
                        filters: U,
                        initialValue: null != (d = F.config.assets.heroVideo) ? d : void 0,
                    }),
                    (0, a.jsx)(E.Z, {
                        title: "Quest Bar Hero",
                        assetKey: "questBarHero",
                        onFileChange: ee,
                        filters: U,
                        initialValue: F.config.assets.questBarHero,
                    }),
                    (0, a.jsx)(E.Z, {
                        title: "Quest Bar Hero Video (optional)",
                        assetKey: "questBarHeroVideo",
                        onFileChange: ee,
                        filters: U,
                        initialValue: null != (u = F.config.assets.questBarHeroVideo) ? u : void 0,
                    }),
                    (0, a.jsx)(E.Z, {
                        title: "Game Tile",
                        assetKey: "gameTile",
                        onFileChange: ee,
                        filters: [...M, "svg"],
                        initialValue: F.config.assets.gameTile,
                    }),
                    (0, a.jsx)(E.Z, {
                        title: "Logotype",
                        assetKey: "logotype",
                        onFileChange: ee,
                        filters: [...L, "svg"],
                        initialValue: F.config.assets.logotype,
                    }),
                    es &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(E.Z, {
                                    title: "Quest Video",
                                    assetKey: "videoPlayerVideo",
                                    onFileChange: et,
                                    filters: U,
                                    initialValue: null == eo ? void 0 : eo.assets.video.url,
                                }),
                                (0, a.jsx)(E.Z, {
                                    title: "Quest Video (Low Resolution)",
                                    assetKey: "videoPlayerVideoLowRes",
                                    onFileChange: et,
                                    filters: U,
                                    initialValue: null == eo || null == (e = eo.assets.videoLowRes) ? void 0 : e.url,
                                }),
                                (0, a.jsx)(E.Z, {
                                    title: "Video Player Thumbnail (optional)",
                                    assetKey: "videoPlayerThumbnail",
                                    onFileChange: et,
                                    filters: M,
                                    initialValue: null == eo ? void 0 : eo.assets.video.thumbnail,
                                }),
                            ],
                        }),
                ],
            }),
            $.map((e, t) =>
                (0, a.jsxs)(
                    "div",
                    {
                        children: [
                            (0, a.jsxs)(m.Heading, {
                                variant: "heading-md/semibold",
                                className: R.subheading,
                                children: ["Reward #", t + 1],
                            }),
                            (0, a.jsxs)("div", {
                                className: R.fields,
                                children: [
                                    (0, a.jsx)(O.Z, {
                                        title: "Name",
                                        assetKey: "name",
                                        onMessageChange: (e, n) => ea(e, n, t),
                                        initialValue: e.messages.name,
                                    }),
                                    (0, a.jsx)(O.Z, {
                                        title: "Name With Article",
                                        assetKey: "nameWithArticle",
                                        onMessageChange: (e, n) => ea(e, n, t),
                                        initialValue: e.messages.nameWithArticle,
                                    }),
                                    e.type !== c.w.VIRTUAL_CURRENCY &&
                                        (0, a.jsx)(E.Z, {
                                            title: "Asset",
                                            assetKey: "asset",
                                            onFileChange: (e, n) =>
                                                (function (e, t, n) {
                                                    if ("asset" === e) {
                                                        var a;
                                                        H(
                                                            Z(D({}, F), {
                                                                config:
                                                                    ((a = F.config),
                                                                    (0, s.EQ)(a)
                                                                        .with({ configVersion: 2 }, (e) =>
                                                                            Z(D({}, e), {
                                                                                rewardsConfig: Z(
                                                                                    D({}, e.rewardsConfig),
                                                                                    {
                                                                                        rewards:
                                                                                            e.rewardsConfig.rewards.map(
                                                                                                (e, a) =>
                                                                                                    a === n
                                                                                                        ? Z(D({}, e), {
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
                                            filters: U,
                                            initialValue: e.asset,
                                        }),
                                    (0, a.jsxs)(m.Kqy, {
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
                className: R.subheading,
                children: "Colors & Quest States",
            }),
            (0, a.jsxs)("div", {
                className: R.fields,
                children: [
                    (0, a.jsxs)("div", {
                        className: R.fields,
                        style: { marginBottom: 0 },
                        children: [
                            (0, a.jsx)(C.Z, {
                                title: "Primary",
                                colorKey: "primary",
                                onChange: er,
                                value: F.config.colors.primary,
                            }),
                            (0, a.jsx)(C.Z, {
                                title: "Secondary",
                                colorKey: "secondary",
                                onChange: er,
                                value: F.config.colors.secondary,
                            }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: R.fields,
                        children: (0, a.jsx)(P.Z, {}),
                    }),
                    (0, a.jsx)(w.Z, {
                        onChange: function (e) {
                            switch ((z(e), e)) {
                                case w.a.UNENROLLED:
                                    H(Z(D({}, F), { userStatus: null }));
                                    break;
                                case w.a.ENROLLED:
                                    H(Z(D({}, F), { userStatus: B({ enrolledAt: new Date().toISOString() }) }));
                                    break;
                                case w.a.COMPLETED_25:
                                    H(
                                        Z(D({}, F), {
                                            userStatus: B({
                                                enrolledAt: new Date().toISOString(),
                                                streamProgressSeconds: 0.25 * el,
                                            }),
                                        }),
                                    );
                                    break;
                                case w.a.COMPLETED_50:
                                    H(
                                        Z(D({}, F), {
                                            userStatus: B({
                                                enrolledAt: new Date().toISOString(),
                                                streamProgressSeconds: 0.5 * el,
                                            }),
                                        }),
                                    );
                                    break;
                                case w.a.COMPLETED_75:
                                    H(
                                        Z(D({}, F), {
                                            userStatus: B({
                                                enrolledAt: new Date().toISOString(),
                                                streamProgressSeconds: 0.75 * el,
                                            }),
                                        }),
                                    );
                                    break;
                                case w.a.COMPLETED_100:
                                    H(
                                        Z(D({}, F), {
                                            userStatus: B({
                                                completedAt: new Date().toISOString(),
                                                enrolledAt: new Date().toISOString(),
                                                streamProgressSeconds: el,
                                            }),
                                        }),
                                    );
                                    break;
                                case w.a.CLAIMED:
                                    H(
                                        Z(D({}, F), {
                                            userStatus: B({
                                                claimedAt: new Date().toISOString(),
                                                completedAt: new Date().toISOString(),
                                                enrolledAt: new Date().toISOString(),
                                                streamProgressSeconds: el,
                                            }),
                                        }),
                                    );
                            }
                        },
                        value: W,
                    }),
                ],
            }),
            (0, a.jsx)(m.Heading, {
                variant: "heading-lg/bold",
                className: R.heading,
                children: "Component Previews",
            }),
            (0, a.jsxs)("div", {
                className: R.componentPreviews,
                children: [
                    (0, a.jsxs)(S.Z, {
                        withBorder: !0,
                        children: [
                            (0, a.jsx)(m.Heading, {
                                variant: "heading-sm/semibold",
                                children: "Quest Bar",
                            }),
                            (0, a.jsxs)("div", {
                                className: R.questBarPreviewWrapper,
                                children: [
                                    (null == (t = F.userStatus) ? void 0 : t.claimedAt) != null &&
                                        (0, a.jsx)(m.Text, {
                                            color: "text-subtle",
                                            variant: "text-sm/normal",
                                            children: "The Quest Bar is hidden when the user has claimed the reward.",
                                        }),
                                    (0, a.jsx)("div", {
                                        className: R.questBarPreview,
                                        children: (0, a.jsx)(f.x8, {
                                            isPreview: !0,
                                            source: "preview",
                                            questId: "0",
                                            children: (0, a.jsx)(b.Z, { children: (0, a.jsx)(g.P, { quest: F }) }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, a.jsxs)(S.Z, {
                        withBorder: !0,
                        children: [
                            (0, a.jsx)(m.Heading, {
                                variant: "heading-sm/semibold",
                                children: "Quest Home Card",
                            }),
                            (0, a.jsx)(f.x8, {
                                isPreview: !0,
                                source: "preview",
                                questId: "0",
                                children: (0, a.jsx)(y.Z, {
                                    quest: F,
                                    className: R.questTile,
                                    questContent: p.jn.QUEST_HOME_DESKTOP,
                                    contentPosition: 0,
                                    rowIndex: 0,
                                    sourceQuestContent: p.jn.INTERNAL_PREVIEW_TOOL,
                                }),
                            }),
                        ],
                    }),
                    (0, a.jsxs)(S.Z, {
                        withBorder: !0,
                        children: [
                            (0, a.jsx)(m.Heading, {
                                variant: "heading-sm/semibold",
                                children: "Channel Call Header",
                            }),
                            (null == (i = F.userStatus) ? void 0 : i.claimedAt) != null &&
                                (0, a.jsx)(m.Text, {
                                    color: "text-subtle",
                                    variant: "text-sm/normal",
                                    children:
                                        "The Quest Channel Call Header is hidden when the user has claimed the reward.",
                                }),
                            (0, a.jsx)("div", {
                                className: R.questBarPreviewWrapper,
                                children: (0, a.jsx)(f.x8, {
                                    isPreview: !0,
                                    source: "preview",
                                    questId: "0",
                                    children: (0, a.jsx)("div", {
                                        className: R.questChannelCallHeaderPreview,
                                        children: (0, a.jsx)(v.Z, {
                                            channelId: "123",
                                            previewQuest: F,
                                            isParticipatingOverride: K,
                                        }),
                                    }),
                                }),
                            }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: R.toggleSwitch,
                        children: (0, a.jsx)(m.rsf, {
                            label: "Is Participating:",
                            checked: K,
                            onChange: function (e) {
                                q(e);
                            },
                        }),
                    }),
                    (0, a.jsxs)(S.Z, {
                        withBorder: !0,
                        children: [
                            (0, a.jsx)(m.Heading, {
                                variant: "heading-sm/semibold",
                                children: "Quest Card Embed",
                            }),
                            Q
                                ? (0, a.jsx)(j.W, { questId: F.id })
                                : (0, a.jsx)(
                                      _.X,
                                      {
                                          quest: F,
                                          location: p.jn.QUESTS_EMBED,
                                          sourceQuestContent: p.jn.INTERNAL_PREVIEW_TOOL,
                                      },
                                      F.id,
                                  ),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: R.toggleSwitch,
                        children: (0, a.jsx)(m.rsf, {
                            label: "Invalid Quests Embed:",
                            checked: Q,
                            onChange: Y,
                        }),
                    }),
                    es &&
                        (0, a.jsxs)(S.Z, {
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
                                        (0, m.ZDy)(async () => {
                                            let { default: e } = await Promise.all([
                                                n.e("13193"),
                                                n.e("75909"),
                                                n.e("67230"),
                                            ]).then(n.bind(n, 215113));
                                            return (t) => {
                                                var n;
                                                return (0, a.jsx)(
                                                    e,
                                                    Z(D({}, t), {
                                                        openStartClockTime: performance.now(),
                                                        videoSessionId: "fake-quest-session-id",
                                                        questId: null != (n = F.id) ? n : "fake-quest-id",
                                                        overrideQuest: F,
                                                        autoplay: !0,
                                                        sourceQuestContent: p.jn.INTERNAL_PREVIEW_TOOL,
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
class H extends r.Component {
    componentDidCatch(e) {
        this.setState({ error: e });
    }
    render() {
        let { error: e, renderKey: t } = this.state;
        return null != e
            ? (0, a.jsxs)("div", {
                  className: R.errorBoundary,
                  children: [
                      (0, a.jsx)(m.Mgn, { className: R.errorBoundaryIcon }),
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
                          (0, a.jsx)(m.Zbd, {
                              className: R.errorMessageWrapper,
                              children: (0, a.jsx)("code", {
                                  className: R.errorMessage,
                                  children: e.message,
                              }),
                          }),
                  ],
              })
            : (0, a.jsx)(V, {}, t);
    }
    constructor(...e) {
        super(...e),
            A(this, "state", {
                error: null,
                renderKey: 0,
            }),
            A(this, "handleResetState", () => {
                this.setState((e) => ({
                    error: null,
                    renderKey: e.renderKey + 1,
                }));
            });
    }
}
let W = H;
