n.d(t, {
    Z: () => z,
    b: () => L
}),
    n(47120),
    n(627341);
var r = n(200651),
    o = n(192379),
    s = n(512722),
    a = n.n(s),
    i = n(278074),
    l = n(754700),
    c = n(887003),
    d = n(742635),
    u = n(458708),
    p = n(481060),
    m = n(70956),
    f = n(497505),
    g = n(918701),
    x = n(210724),
    h = n(130653),
    b = n(415104),
    j = n(78826),
    v = n(37303),
    y = n(134483),
    _ = n(683650),
    C = n(920916),
    O = n(341907),
    w = n(478977),
    S = n(456799),
    P = n(210851),
    N = n(602683),
    E = n(916028),
    T = n(749912),
    A = n(815183),
    B = n(899457),
    R = n(475526);
function k(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function q(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
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
let W = ['png', 'gif', 'webp'],
    I = [...W, 'jpg', 'jpeg'],
    M = Array.from(new Set([...I, 'gif', 'mp4', 'webm']));
function L(e) {
    var t, n;
    return {
        code: 'PREVIEW-MODE-CODE',
        tier: 0,
        platform: f.y$.CROSS_PLATFORM,
        userId: '123',
        questId: e.id,
        claimedAt: null !== (n = null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedAt) && void 0 !== n ? n : ''
    };
}
function Z() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { streamProgressSeconds: t = 0, completedAt: n = null, enrolledAt: r = null, claimedAt: o = null } = e;
    return {
        userId: '123',
        questId: '1193992107035983872',
        enrolledAt: r,
        completedAt: n,
        claimedAt: o,
        claimedTier: null,
        lastStreamHeartbeatAt: null,
        streamProgressSeconds: t,
        dismissedQuestContent: 0,
        progress: {}
    };
}
let V = '1193992107035983872',
    Q = {
        id: V,
        preview: !0,
        config: {
            id: V,
            configVersion: 2,
            startsAt: '2024-01-01T00:00:00+00:00',
            expiresAt: '2030-01-01T00:00:00+00:00',
            application: {
                link: 'https://discord.com/',
                id: '123',
                name: 'Sky Runners'
            },
            messages: {
                questName: 'Sky Runners',
                gameTitle: 'Sky Runners',
                gamePublisher: 'Discord'
            },
            colors: {
                primary: '#B377F3',
                secondary: '#5865F2'
            },
            rewardsConfig: {
                assignmentMethod: 1,
                rewards: [
                    {
                        skuId: '',
                        asset: 'reward.png',
                        assetVideo: null,
                        type: c.w.REWARD_CODE,
                        messages: {
                            name: 'Orange Buddy Jetpack',
                            nameWithArticle: 'an Orange Buddy Jetpack',
                            redemptionInstructionsByPlatform: {
                                0: 'This code can be used on any platform!',
                                1: 'Redeem your code on your Xbox.',
                                2: 'Redeem your code on your Playstation.',
                                3: 'Redeem your code on your Switch.',
                                4: 'Redeem your code on your PC.'
                            }
                        }
                    }
                ],
                rewardsExpireAt: '2030-01-01T00:00:00+00:00',
                platforms: [0, 4, 2, 3, 1]
            },
            assets: {
                hero: 'hero.png',
                heroVideo: null,
                questBarHero: 'quests_bar_hero.webm',
                questBarHeroVideo: null,
                gameTile: 'game_tile.png',
                logotype: 'game_logotype.png'
            },
            taskConfig: {
                type: d.L.FIRST_PARTY,
                joinOperator: u.r.AND,
                tasks: {
                    [l.X.PLAY_ON_DESKTOP]: {
                        eventName: l.X.PLAY_ON_DESKTOP,
                        target: 300,
                        externalIds: []
                    }
                }
            },
            features: []
        },
        userStatus: null,
        targetedContent: []
    };
function U() {
    var e, t, s, c, d, u, k, L, V, U, H, z, F, X;
    let [K, Y] = o.useState(Q),
        G = o.useCallback((e) => {
            Y(D(q({}, e), { preview: !0 }));
        }, []),
        [J, $] = o.useState(B.a.UNENROLLED),
        [ee, et] = o.useState(!1),
        [en, er] = o.useState(!1),
        [eo, es] = o.useState(null),
        ea =
            ((X = K.config),
            (0, i.EQ)(X)
                .with({ configVersion: 2 }, (e) => e.rewardsConfig.rewards)
                .exhaustive());
    function ei(e, t) {
        var n, r;
        ('hero' === e || 'questBarHero' === e || 'gameTile' === e || 'logotype' === e || 'heroVideo' === e || 'questBarHeroVideo' === e) &&
            G(
                D(q({}, K), {
                    config:
                        ((n = K.config),
                        (r = { [e]: t }),
                        (0, i.EQ)(n)
                            .with({ configVersion: 2 }, (e) => D(q({}, e), { assets: q({}, e.assets, r) }))
                            .exhaustive())
                })
            );
    }
    function el(e, t) {
        var n, r, o;
        G(
            D(q({}, K), {
                config: D(q({}, K.config), {
                    videoMetadata: D(q({}, K.config.videoMetadata), {
                        messages: null !== (o = null === (n = K.config.videoMetadata) || void 0 === n ? void 0 : n.messages) && void 0 !== o ? o : {},
                        assets: D(q({}, null === (r = K.config.videoMetadata) || void 0 === r ? void 0 : r.assets), { [e]: t })
                    })
                })
            })
        );
    }
    function ec(e, t) {
        var n, r;
        ('questName' === e || 'gameTitle' === e || 'gamePublisher' === e) &&
            G(
                D(q({}, K), {
                    config:
                        ((n = K.config),
                        (r = { [e]: t }),
                        (0, i.EQ)(n)
                            .with({ configVersion: 2 }, (e) => D(q({}, e), { messages: q({}, e.messages, r) }))
                            .exhaustive())
                })
            );
    }
    function ed(e, t) {
        var n, r, o;
        G(
            D(q({}, K), {
                config: D(q({}, K.config), {
                    videoMetadata: D(q({}, K.config.videoMetadata), {
                        assets: null !== (o = null === (n = K.config.videoMetadata) || void 0 === n ? void 0 : n.assets) && void 0 !== o ? o : {},
                        messages: D(q({}, null === (r = K.config.videoMetadata) || void 0 === r ? void 0 : r.messages), { [e]: t })
                    })
                })
            })
        );
    }
    function eu(e, t, n) {
        var r, o;
        ('name' === e || 'nameWithArticle' === e) &&
            G(
                D(q({}, K), {
                    config:
                        ((r = K.config),
                        (o = { [e]: t }),
                        (0, i.EQ)(r)
                            .with({ configVersion: 2 }, (e) => D(q({}, e), { rewardsConfig: D(q({}, e.rewardsConfig), { rewards: e.rewardsConfig.rewards.map((e, t) => (t === n ? D(q({}, e), { messages: q({}, e.messages, o) }) : e)) }) }))
                            .exhaustive())
                })
            );
    }
    function ep(e, t) {
        G(D(q({}, K), { config: D(q({}, K.config), { colors: D(q({}, K.config.colors), { [e]: t }) }) }));
    }
    function em() {
        (0, g.Xv)(K.config)
            ? (0, C.m)(K, f.jn.GIFT_INVENTORY_FOR_YOU, !0)
            : (0, O.openQuestsRewardCodeModal)({
                  questId: K.id,
                  location: f.jn.GIFT_INVENTORY_FOR_YOU,
                  preview: !0,
                  previewQuest: K
              });
    }
    let ef = o.useMemo(() => {
            for (let [e, t] of Object.entries(K.config.taskConfig.tasks)) if (null != t.target) return t.target;
            return 10 * m.Z.Seconds.MINUTE;
        }, [K.config.taskConfig.tasks]),
        eg = o.useMemo(() => l.X.WATCH_VIDEO in K.config.taskConfig.tasks, [K.config.taskConfig.tasks]);
    return (
        a()(!1 !== K.preview && null != K.preview, 'Preview config must have property preview: true'),
        (0, r.jsxs)('div', {
            children: [
                (0, r.jsx)(p.X6q, {
                    variant: 'heading-lg/bold',
                    className: R.heading,
                    children: 'Quest Preview Tool'
                }),
                (0, r.jsx)('div', {
                    className: R.fields,
                    children: (0, r.jsx)(E.Z, {
                        onSelect: function (e) {
                            es(e),
                                null != e &&
                                    ($(
                                        (function (e) {
                                            if (null == e.userStatus) return B.a.UNENROLLED;
                                            if (null != e.userStatus.claimedAt) return B.a.CLAIMED;
                                            if (null != e.userStatus.completedAt) return B.a.COMPLETED_100;
                                            let t = (0, g.il)(e),
                                                n = t.progressSeconds,
                                                r = t.targetSeconds;
                                            return n / r >= 1 ? B.a.COMPLETED_100 : n / r >= 0.75 ? B.a.COMPLETED_75 : n / r >= 0.5 ? B.a.COMPLETED_50 : n / r >= 0.25 ? B.a.COMPLETED_25 : B.a.ENROLLED;
                                        })(e)
                                    ),
                                    G(e));
                        },
                        quest: eo
                    })
                }),
                (0, r.jsx)(p.X6q, {
                    variant: 'heading-md/semibold',
                    className: R.subheading,
                    children: 'Task Config'
                }),
                (0, r.jsx)('div', {
                    className: R.fields,
                    children: (0, r.jsx)(T.Z, {
                        taskDuration: ef,
                        taskConfig: K.config.taskConfig,
                        onSelect: function (e) {
                            G(D(q({}, K), { config: D(q({}, K.config), { taskConfig: e }) }));
                        }
                    })
                }),
                (0, r.jsx)(p.X6q, {
                    variant: 'heading-md/semibold',
                    className: R.subheading,
                    children: 'Messages'
                }),
                (0, r.jsxs)('div', {
                    className: R.fields,
                    children: [
                        (0, r.jsx)(N.Z, {
                            title: 'Quest Name',
                            assetKey: 'questName',
                            onMessageChange: ec,
                            initialValue: K.config.messages.questName
                        }),
                        (0, r.jsx)(N.Z, {
                            title: 'Game Title',
                            assetKey: 'gameTitle',
                            onMessageChange: ec,
                            initialValue: K.config.messages.gameTitle
                        }),
                        (0, r.jsx)(N.Z, {
                            title: 'Game Publisher',
                            assetKey: 'gamePublisher',
                            onMessageChange: ec,
                            initialValue: K.config.messages.gamePublisher
                        }),
                        eg &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(N.Z, {
                                        title: 'Video Title',
                                        assetKey: 'videoTitle',
                                        onMessageChange: ed,
                                        initialValue: null === (e = K.config.videoMetadata) || void 0 === e ? void 0 : e.messages.videoTitle
                                    }),
                                    (0, r.jsx)(N.Z, {
                                        title: 'End CTA Title',
                                        assetKey: 'videoEndCtaTitle',
                                        onMessageChange: ed,
                                        initialValue: null === (t = K.config.videoMetadata) || void 0 === t ? void 0 : t.messages.videoEndCtaTitle
                                    }),
                                    (0, r.jsx)(N.Z, {
                                        title: 'End CTA Subtitle',
                                        assetKey: 'videoEndCtaSubtitle',
                                        onMessageChange: ed,
                                        initialValue: null === (s = K.config.videoMetadata) || void 0 === s ? void 0 : s.messages.videoEndCtaSubtitle
                                    })
                                ]
                            })
                    ]
                }),
                (0, r.jsx)(p.X6q, {
                    variant: 'heading-md/semibold',
                    className: R.subheading,
                    children: 'Assets'
                }),
                (0, r.jsxs)('div', {
                    className: R.fields,
                    children: [
                        (0, r.jsx)(P.Z, {
                            title: 'Hero',
                            assetKey: 'hero',
                            onFileChange: ei,
                            filters: M,
                            initialValue: K.config.assets.hero
                        }),
                        (0, r.jsx)(P.Z, {
                            title: 'Hero Video (optional)',
                            assetKey: 'heroVideo',
                            onFileChange: ei,
                            filters: M,
                            initialValue: null !== (z = K.config.assets.heroVideo) && void 0 !== z ? z : void 0
                        }),
                        (0, r.jsx)(P.Z, {
                            title: 'Quest Bar Hero',
                            assetKey: 'questBarHero',
                            onFileChange: ei,
                            filters: M,
                            initialValue: K.config.assets.questBarHero
                        }),
                        (0, r.jsx)(P.Z, {
                            title: 'Quest Bar Hero Video (optional)',
                            assetKey: 'questBarHeroVideo',
                            onFileChange: ei,
                            filters: M,
                            initialValue: null !== (F = K.config.assets.questBarHeroVideo) && void 0 !== F ? F : void 0
                        }),
                        (0, r.jsx)(P.Z, {
                            title: 'Game Tile',
                            assetKey: 'gameTile',
                            onFileChange: ei,
                            filters: [...I, 'svg'],
                            initialValue: K.config.assets.gameTile
                        }),
                        (0, r.jsx)(P.Z, {
                            title: 'Logotype',
                            assetKey: 'logotype',
                            onFileChange: ei,
                            filters: [...W, 'svg'],
                            initialValue: K.config.assets.logotype
                        }),
                        eg &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(P.Z, {
                                        title: 'Quest Video',
                                        assetKey: 'videoPlayerVideo',
                                        onFileChange: el,
                                        filters: M,
                                        initialValue: null === (c = K.config.videoMetadata) || void 0 === c ? void 0 : c.assets.videoPlayerVideo
                                    }),
                                    (0, r.jsx)(P.Z, {
                                        title: 'Quest Video (Low Resolution)',
                                        assetKey: 'videoPlayerVideoLowRes',
                                        onFileChange: el,
                                        filters: M,
                                        initialValue: null === (d = K.config.videoMetadata) || void 0 === d ? void 0 : d.assets.videoPlayerVideoLowRes
                                    }),
                                    (0, r.jsx)(P.Z, {
                                        title: 'Video Player Thumbnail (optional)',
                                        assetKey: 'videoPlayerThumbnail',
                                        onFileChange: el,
                                        filters: I,
                                        initialValue: null === (k = K.config.videoMetadata) || void 0 === k ? void 0 : null === (u = k.assets) || void 0 === u ? void 0 : u.videoPlayerThumbnail
                                    }),
                                    (0, r.jsx)(P.Z, {
                                        title: 'Quest Bar Preview Video (optional)',
                                        assetKey: 'questBarPreviewVideo',
                                        onFileChange: el,
                                        filters: M,
                                        initialValue: null === (L = K.config.videoMetadata) || void 0 === L ? void 0 : L.assets.questBarPreviewVideo
                                    }),
                                    (0, r.jsx)(P.Z, {
                                        title: 'Quest Home Video (optional)',
                                        assetKey: 'questHomeVideo',
                                        onFileChange: el,
                                        filters: M,
                                        initialValue: null === (V = K.config.videoMetadata) || void 0 === V ? void 0 : V.assets.questHomeVideo
                                    })
                                ]
                            })
                    ]
                }),
                ea.map((e, t) =>
                    (0, r.jsxs)(
                        'div',
                        {
                            children: [
                                (0, r.jsxs)(p.X6q, {
                                    variant: 'heading-md/semibold',
                                    className: R.subheading,
                                    children: ['Reward #', t + 1]
                                }),
                                (0, r.jsxs)('div', {
                                    className: R.fields,
                                    children: [
                                        (0, r.jsx)(N.Z, {
                                            title: 'Name',
                                            assetKey: 'name',
                                            onMessageChange: (e, n) => eu(e, n, t),
                                            initialValue: e.messages.name
                                        }),
                                        (0, r.jsx)(N.Z, {
                                            title: 'Name With Article',
                                            assetKey: 'nameWithArticle',
                                            onMessageChange: (e, n) => eu(e, n, t),
                                            initialValue: e.messages.nameWithArticle
                                        }),
                                        (0, r.jsx)(P.Z, {
                                            title: 'Asset',
                                            assetKey: 'asset',
                                            onFileChange: (e, n) =>
                                                (function (e, t, n) {
                                                    var r;
                                                    'asset' === e &&
                                                        G(
                                                            D(q({}, K), {
                                                                config:
                                                                    ((r = K.config),
                                                                    (0, i.EQ)(r)
                                                                        .with({ configVersion: 2 }, (e) =>
                                                                            D(q({}, e), {
                                                                                rewardsConfig: D(q({}, e.rewardsConfig), {
                                                                                    rewards: e.rewardsConfig.rewards.map((e, r) =>
                                                                                        r === n
                                                                                            ? D(q({}, e), {
                                                                                                  asset: t,
                                                                                                  skuId: ''
                                                                                              })
                                                                                            : e
                                                                                    )
                                                                                })
                                                                            })
                                                                        )
                                                                        .exhaustive())
                                                            })
                                                        );
                                                })(e, n, t),
                                            filters: M,
                                            initialValue: e.asset
                                        }),
                                        (0, r.jsxs)(p.xJW, {
                                            children: [
                                                (0, r.jsx)(p.vwX, { children: 'Claim Modal' }),
                                                (0, r.jsx)(p.zxk, {
                                                    color: p.Ttl.BRAND,
                                                    onClick: em,
                                                    children: 'Open Reward Modal'
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        },
                        t
                    )
                ),
                (0, r.jsx)(p.X6q, {
                    variant: 'heading-md/semibold',
                    className: R.subheading,
                    children: 'Colors & Quest States'
                }),
                (0, r.jsxs)('div', {
                    className: R.fields,
                    children: [
                        (0, r.jsxs)('div', {
                            className: R.fields,
                            style: { marginBottom: 0 },
                            children: [
                                (0, r.jsx)(w.Z, {
                                    title: 'Primary',
                                    colorKey: 'primary',
                                    onChange: ep,
                                    value: K.config.colors.primary
                                }),
                                (0, r.jsx)(w.Z, {
                                    title: 'Secondary',
                                    colorKey: 'secondary',
                                    onChange: ep,
                                    value: K.config.colors.secondary
                                })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: R.fields,
                            children: (0, r.jsx)(A.Z, {})
                        }),
                        (0, r.jsx)(B.Z, {
                            onChange: function (e) {
                                switch (($(e), e)) {
                                    case B.a.UNENROLLED:
                                        G(D(q({}, K), { userStatus: null }));
                                        break;
                                    case B.a.ENROLLED:
                                        G(D(q({}, K), { userStatus: Z({ enrolledAt: new Date().toISOString() }) }));
                                        break;
                                    case B.a.COMPLETED_25:
                                        G(
                                            D(q({}, K), {
                                                userStatus: Z({
                                                    enrolledAt: new Date().toISOString(),
                                                    streamProgressSeconds: 0.25 * ef
                                                })
                                            })
                                        );
                                        break;
                                    case B.a.COMPLETED_50:
                                        G(
                                            D(q({}, K), {
                                                userStatus: Z({
                                                    enrolledAt: new Date().toISOString(),
                                                    streamProgressSeconds: 0.5 * ef
                                                })
                                            })
                                        );
                                        break;
                                    case B.a.COMPLETED_75:
                                        G(
                                            D(q({}, K), {
                                                userStatus: Z({
                                                    enrolledAt: new Date().toISOString(),
                                                    streamProgressSeconds: 0.75 * ef
                                                })
                                            })
                                        );
                                        break;
                                    case B.a.COMPLETED_100:
                                        G(
                                            D(q({}, K), {
                                                userStatus: Z({
                                                    completedAt: new Date().toISOString(),
                                                    enrolledAt: new Date().toISOString(),
                                                    streamProgressSeconds: ef
                                                })
                                            })
                                        );
                                        break;
                                    case B.a.CLAIMED:
                                        G(
                                            D(q({}, K), {
                                                userStatus: Z({
                                                    claimedAt: new Date().toISOString(),
                                                    completedAt: new Date().toISOString(),
                                                    enrolledAt: new Date().toISOString(),
                                                    streamProgressSeconds: ef
                                                })
                                            })
                                        );
                                }
                            },
                            value: J
                        })
                    ]
                }),
                (0, r.jsx)(p.X6q, {
                    variant: 'heading-lg/bold',
                    className: R.heading,
                    children: 'Component Previews'
                }),
                (0, r.jsxs)('div', {
                    className: R.componentPreviews,
                    children: [
                        (0, r.jsxs)(S.Z, {
                            withBorder: !0,
                            children: [
                                (0, r.jsx)(p.vwX, { children: 'Quest Bar' }),
                                (0, r.jsxs)('div', {
                                    className: R.questBarPreviewWrapper,
                                    children: [
                                        (null === (U = K.userStatus) || void 0 === U ? void 0 : U.claimedAt) != null &&
                                            (0, r.jsx)(p.Text, {
                                                color: 'text-secondary',
                                                variant: 'text-sm/normal',
                                                children: 'The Quest Bar is hidden when the user has claimed the reward.'
                                            }),
                                        (0, r.jsx)('div', {
                                            className: R.questBarPreview,
                                            children: (0, r.jsx)(j.p, {
                                                isPreview: !0,
                                                source: 'preview',
                                                questId: '0',
                                                children: (0, r.jsx)(h.Z, { children: (0, r.jsx)(x.P, { quest: K }) })
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, r.jsxs)(S.Z, {
                            withBorder: !0,
                            children: [
                                (0, r.jsx)(p.vwX, { children: 'Quest Home Card' }),
                                (0, r.jsx)(j.p, {
                                    isPreview: !0,
                                    source: 'preview',
                                    questId: '0',
                                    children: (0, r.jsx)(b.Z, {
                                        quest: K,
                                        className: R.questTile,
                                        questContent: f.jn.QUEST_HOME_DESKTOP,
                                        contentPosition: 0,
                                        rowIndex: 0
                                    })
                                })
                            ]
                        }),
                        (0, r.jsxs)(S.Z, {
                            withBorder: !0,
                            children: [
                                (0, r.jsx)(p.vwX, { children: 'Channel Call Header' }),
                                (null === (H = K.userStatus) || void 0 === H ? void 0 : H.claimedAt) != null &&
                                    (0, r.jsx)(p.Text, {
                                        color: 'text-secondary',
                                        variant: 'text-sm/normal',
                                        children: 'The Quest Channel Call Header is hidden when the user has claimed the reward.'
                                    }),
                                (0, r.jsx)('div', {
                                    className: R.questBarPreviewWrapper,
                                    children: (0, r.jsx)(j.p, {
                                        isPreview: !0,
                                        source: 'preview',
                                        questId: '0',
                                        children: (0, r.jsx)('div', {
                                            className: R.questChannelCallHeaderPreview,
                                            children: (0, r.jsx)(y.Z, {
                                                channelId: '123',
                                                previewQuest: K,
                                                isParticipatingOverride: ee
                                            })
                                        })
                                    })
                                })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: R.toggleSwitch,
                            children: (0, r.jsx)(p.xJW, {
                                children: (0, r.jsx)(p.j7V, {
                                    value: ee,
                                    onChange: function (e) {
                                        et(e);
                                    },
                                    hideBorder: !0,
                                    children: 'Is Participating:'
                                })
                            })
                        }),
                        (0, r.jsxs)(S.Z, {
                            withBorder: !0,
                            children: [
                                (0, r.jsx)(p.vwX, { children: 'Quest Card Embed' }),
                                en
                                    ? (0, r.jsx)(_.o, {})
                                    : (0, r.jsx)(
                                          v.Z,
                                          {
                                              quest: K,
                                              location: f.jn.QUESTS_EMBED
                                          },
                                          K.id
                                      )
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: R.toggleSwitch,
                            children: (0, r.jsx)(p.xJW, {
                                children: (0, r.jsx)(p.j7V, {
                                    value: en,
                                    onChange: er,
                                    hideBorder: !0,
                                    children: 'Invalid Quests Embed:'
                                })
                            })
                        }),
                        eg &&
                            (0, r.jsxs)(S.Z, {
                                withBorder: !0,
                                allowClicks: !0,
                                children: [
                                    (0, r.jsx)(p.vwX, { children: 'Video Player' }),
                                    (0, r.jsx)(p.zxk, {
                                        onClick: () => {
                                            (0, p.ZDy)(async () => {
                                                let { default: e } = await Promise.all([n.e('29976'), n.e('32249'), n.e('44597')]).then(n.bind(n, 536687));
                                                return (t) => {
                                                    var n;
                                                    return (0, r.jsx)(
                                                        e,
                                                        D(q({}, t), {
                                                            startTime: 0,
                                                            videoSessionId: 'fake-quest-session-id',
                                                            questId: null !== (n = K.id) && void 0 !== n ? n : 'fake-quest-id',
                                                            overrideQuest: K,
                                                            autoplay: !0
                                                        })
                                                    );
                                                };
                                            });
                                        },
                                        children: 'Open Video Player Modal'
                                    })
                                ]
                            })
                    ]
                })
            ]
        })
    );
}
class H extends o.Component {
    componentDidCatch(e) {
        this.setState({ error: e });
    }
    render() {
        let { error: e, renderKey: t } = this.state;
        return null != e
            ? (0, r.jsxs)('div', {
                  className: R.errorBoundary,
                  children: [
                      (0, r.jsx)(p.P4T, { className: R.errorBoundaryIcon }),
                      (0, r.jsx)(p.X6q, {
                          variant: 'heading-lg/semibold',
                          children: 'Something broke in the Quest preview tool :('
                      }),
                      (0, r.jsx)(p.zxk, {
                          color: p.Ttl.PRIMARY,
                          onClick: this.handleResetState,
                          children: 'Reset'
                      }),
                      null != e.message &&
                          (0, r.jsx)(p.Zbd, {
                              className: R.errorMessageWrapper,
                              children: (0, r.jsx)('code', {
                                  className: R.errorMessage,
                                  children: e.message
                              })
                          })
                  ]
              })
            : (0, r.jsx)(U, {}, t);
    }
    constructor(...e) {
        super(...e),
            k(this, 'state', {
                error: null,
                renderKey: 0
            }),
            k(this, 'handleResetState', () => {
                this.setState((e) => ({
                    error: null,
                    renderKey: e.renderKey + 1
                }));
            });
    }
}
let z = H;
