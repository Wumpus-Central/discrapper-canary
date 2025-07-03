(n.d(t, {
    Z: () => H,
    b: () => V
}),
    n(388685),
    n(314940));
var r = n(255367),
    o = n(73800),
    s = n(512722),
    a = n.n(s),
    i = n(278074),
    l = n(754700),
    c = n(887003),
    u = n(458708),
    d = n(481060),
    p = n(70956),
    m = n(497505),
    f = n(918701),
    g = n(210724),
    x = n(130653),
    h = n(415104),
    b = n(78826),
    j = n(37303),
    _ = n(134483),
    v = n(683650),
    y = n(920916),
    C = n(341907),
    O = n(478977),
    E = n(456799),
    S = n(210851),
    w = n(602683),
    P = n(916028),
    T = n(749912),
    N = n(815183),
    A = n(899457),
    R = n(409667);
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
function B(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                k(e, t, n[t]);
            }));
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
let q = ['png', 'gif', 'webp'],
    D = [...q, 'jpg', 'jpeg'],
    Q = Array.from(new Set([...D, 'gif', 'mp4', 'webm']));
function V(e) {
    var t, n;
    return {
        code: 'PREVIEW-MODE-CODE',
        tier: 0,
        platform: m.y$.CROSS_PLATFORM,
        userId: '123',
        questId: e.id,
        claimedAt: null != (n = null == (t = e.userStatus) ? void 0 : t.claimedAt) ? n : ''
    };
}
function L() {
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
let M = '1193992107035983872',
    W = {
        id: M,
        preview: !0,
        config: {
            id: M,
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
            taskConfigV2: {
                joinOperator: u.r.AND,
                tasks: {
                    [l.X.PLAY_ON_DESKTOP]: {
                        type: l.X.PLAY_ON_DESKTOP,
                        target: 300
                    }
                }
            },
            features: []
        },
        userStatus: null,
        targetedContent: []
    };
function Z() {
    var e, t, s, u, k, V, M, Z;
    let [U, H] = o.useState(W),
        z = o.useCallback((e) => {
            H(I(B({}, e), { preview: !0 }));
        }, []),
        [F, X] = o.useState(A.a.UNENROLLED),
        [K, Y] = o.useState(!1),
        [G, J] = o.useState(!1),
        [$, ee] = o.useState(null),
        et =
            ((Z = U.config),
            (0, i.EQ)(Z)
                .with({ configVersion: 2 }, (e) => e.rewardsConfig.rewards)
                .exhaustive());
    function en(e, t) {
        if ('hero' === e || 'questBarHero' === e || 'gameTile' === e || 'logotype' === e || 'heroVideo' === e || 'questBarHeroVideo' === e) {
            var n, r;
            z(
                I(B({}, U), {
                    config:
                        ((n = U.config),
                        (r = { [e]: t }),
                        (0, i.EQ)(n)
                            .with({ configVersion: 2 }, (e) => I(B({}, e), { assets: B({}, e.assets, r) }))
                            .exhaustive())
                })
            );
        }
    }
    function er(e, t) {
        let n = U.config.taskConfigV2.tasks,
            r = n[l.X.WATCH_VIDEO];
        if (null == r) return;
        let o = B({}, r.assets);
        switch (e) {
            case 'videoPlayerVideo':
                o.video = { url: t };
                break;
            case 'videoPlayerVideoLowRes':
                o.videoLowRes = { url: t };
                break;
            case 'videoPlayerThumbnail':
                o.video = I(B({}, o.video), { thumbnail: t });
                break;
            default:
                return;
        }
        z(I(B({}, U), { config: I(B({}, U.config), { taskConfigV2: I(B({}, U.config.taskConfigV2), { tasks: I(B({}, n), { [l.X.WATCH_VIDEO]: I(B({}, r), { assets: o }) }) }) }) }));
    }
    function eo(e, t) {
        var n, r, o;
        z(
            I(B({}, U), {
                config: I(B({}, U.config), {
                    videoMetadata: I(B({}, U.config.videoMetadata), {
                        messages: null != (o = null == (n = U.config.videoMetadata) ? void 0 : n.messages) ? o : {},
                        assets: I(B({}, null == (r = U.config.videoMetadata) ? void 0 : r.assets), { [e]: t })
                    })
                })
            })
        );
    }
    function es(e, t) {
        if ('questName' === e || 'gameTitle' === e || 'gamePublisher' === e) {
            var n, r;
            z(
                I(B({}, U), {
                    config:
                        ((n = U.config),
                        (r = { [e]: t }),
                        (0, i.EQ)(n)
                            .with({ configVersion: 2 }, (e) => I(B({}, e), { messages: B({}, e.messages, r) }))
                            .exhaustive())
                })
            );
        }
    }
    function ea(e, t) {
        let n = U.config.taskConfigV2.tasks,
            r = n[l.X.WATCH_VIDEO];
        if (null == r) return;
        let o = I(B({}, r.messages), { [e]: t });
        z(I(B({}, U), { config: I(B({}, U.config), { taskConfigV2: I(B({}, U.config.taskConfigV2), { tasks: I(B({}, n), { [l.X.WATCH_VIDEO]: I(B({}, r), { messages: o }) }) }) }) }));
    }
    function ei(e, t, n) {
        if ('name' === e || 'nameWithArticle' === e) {
            var r, o;
            z(
                I(B({}, U), {
                    config:
                        ((r = U.config),
                        (o = { [e]: t }),
                        (0, i.EQ)(r)
                            .with({ configVersion: 2 }, (e) => I(B({}, e), { rewardsConfig: I(B({}, e.rewardsConfig), { rewards: e.rewardsConfig.rewards.map((e, t) => (t === n ? I(B({}, e), { messages: B({}, e.messages, o) }) : e)) }) }))
                            .exhaustive())
                })
            );
        }
    }
    function el(e, t) {
        z(I(B({}, U), { config: I(B({}, U.config), { colors: I(B({}, U.config.colors), { [e]: t }) }) }));
    }
    function ec() {
        (0, f.Xv)(U.config)
            ? (0, y.m)(U, m.jn.GIFT_INVENTORY_FOR_YOU, !0)
            : (0, C.openQuestsRewardCodeModal)({
                  questId: U.id,
                  questContent: m.jn.GIFT_INVENTORY_FOR_YOU,
                  preview: !0,
                  previewQuest: U,
                  sourceQuestContent: m.jn.INTERNAL_PREVIEW_TOOL
              });
    }
    let eu = o.useMemo(() => {
            for (let [e, t] of Object.entries(U.config.taskConfigV2.tasks)) if (null != t.target) return t.target;
            return 10 * p.Z.Seconds.MINUTE;
        }, [U.config.taskConfigV2.tasks]),
        ed = o.useMemo(() => l.X.WATCH_VIDEO in U.config.taskConfigV2.tasks, [U.config.taskConfigV2.tasks]);
    a()(!1 !== U.preview && null != U.preview, 'Preview config must have property preview: true');
    let ep = U.config.taskConfigV2.tasks[l.X.WATCH_VIDEO];
    return (0, r.jsxs)('div', {
        children: [
            (0, r.jsx)(d.X6q, {
                variant: 'heading-lg/bold',
                className: R.heading,
                children: 'Quest Preview Tool'
            }),
            (0, r.jsx)('div', {
                className: R.fields,
                children: (0, r.jsx)(P.Z, {
                    onSelect: function (e) {
                        (ee(e),
                            null != e &&
                                (X(
                                    (function (e) {
                                        if (null == e.userStatus) return A.a.UNENROLLED;
                                        if (null != e.userStatus.claimedAt) return A.a.CLAIMED;
                                        if (null != e.userStatus.completedAt) return A.a.COMPLETED_100;
                                        let t = (0, f.il)(e),
                                            n = t.progressSeconds,
                                            r = t.targetSeconds;
                                        return n / r >= 1 ? A.a.COMPLETED_100 : n / r >= 0.75 ? A.a.COMPLETED_75 : n / r >= 0.5 ? A.a.COMPLETED_50 : n / r >= 0.25 ? A.a.COMPLETED_25 : A.a.ENROLLED;
                                    })(e)
                                ),
                                z(e)));
                    },
                    quest: $
                })
            }),
            (0, r.jsx)(d.X6q, {
                variant: 'heading-md/semibold',
                className: R.subheading,
                children: 'Task Config'
            }),
            (0, r.jsx)('div', {
                className: R.fields,
                children: (0, r.jsx)(T.Z, {
                    taskDuration: eu,
                    taskConfigV2: U.config.taskConfigV2,
                    onSelect: function (e) {
                        z(I(B({}, U), { config: I(B({}, U.config), { taskConfigV2: e }) }));
                    }
                })
            }),
            (0, r.jsx)(d.X6q, {
                variant: 'heading-md/semibold',
                className: R.subheading,
                children: 'Messages'
            }),
            (0, r.jsxs)('div', {
                className: R.fields,
                children: [
                    (0, r.jsx)(w.Z, {
                        title: 'Quest Name',
                        assetKey: 'questName',
                        onMessageChange: es,
                        initialValue: U.config.messages.questName
                    }),
                    (0, r.jsx)(w.Z, {
                        title: 'Game Title',
                        assetKey: 'gameTitle',
                        onMessageChange: es,
                        initialValue: U.config.messages.gameTitle
                    }),
                    (0, r.jsx)(w.Z, {
                        title: 'Game Publisher',
                        assetKey: 'gamePublisher',
                        onMessageChange: es,
                        initialValue: U.config.messages.gamePublisher
                    }),
                    ed &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(w.Z, {
                                    title: 'Video Title',
                                    assetKey: 'videoTitle',
                                    onMessageChange: ea,
                                    initialValue: null == ep ? void 0 : ep.messages.videoTitle
                                }),
                                (0, r.jsx)(w.Z, {
                                    title: 'End CTA Title',
                                    assetKey: 'videoEndCtaTitle',
                                    onMessageChange: ea,
                                    initialValue: null == ep ? void 0 : ep.messages.videoEndCtaTitle
                                }),
                                (0, r.jsx)(w.Z, {
                                    title: 'End CTA Subtitle',
                                    assetKey: 'videoEndCtaSubtitle',
                                    onMessageChange: ea,
                                    initialValue: null == ep ? void 0 : ep.messages.videoEndCtaSubtitle
                                })
                            ]
                        })
                ]
            }),
            (0, r.jsx)(d.X6q, {
                variant: 'heading-md/semibold',
                className: R.subheading,
                children: 'Assets'
            }),
            (0, r.jsxs)('div', {
                className: R.fields,
                children: [
                    (0, r.jsx)(S.Z, {
                        title: 'Hero',
                        assetKey: 'hero',
                        onFileChange: en,
                        filters: Q,
                        initialValue: U.config.assets.hero
                    }),
                    (0, r.jsx)(S.Z, {
                        title: 'Hero Video (optional)',
                        assetKey: 'heroVideo',
                        onFileChange: en,
                        filters: Q,
                        initialValue: null != (V = U.config.assets.heroVideo) ? V : void 0
                    }),
                    (0, r.jsx)(S.Z, {
                        title: 'Quest Bar Hero',
                        assetKey: 'questBarHero',
                        onFileChange: en,
                        filters: Q,
                        initialValue: U.config.assets.questBarHero
                    }),
                    (0, r.jsx)(S.Z, {
                        title: 'Quest Bar Hero Video (optional)',
                        assetKey: 'questBarHeroVideo',
                        onFileChange: en,
                        filters: Q,
                        initialValue: null != (M = U.config.assets.questBarHeroVideo) ? M : void 0
                    }),
                    (0, r.jsx)(S.Z, {
                        title: 'Game Tile',
                        assetKey: 'gameTile',
                        onFileChange: en,
                        filters: [...D, 'svg'],
                        initialValue: U.config.assets.gameTile
                    }),
                    (0, r.jsx)(S.Z, {
                        title: 'Logotype',
                        assetKey: 'logotype',
                        onFileChange: en,
                        filters: [...q, 'svg'],
                        initialValue: U.config.assets.logotype
                    }),
                    ed &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(S.Z, {
                                    title: 'Quest Video',
                                    assetKey: 'videoPlayerVideo',
                                    onFileChange: er,
                                    filters: Q,
                                    initialValue: null == ep ? void 0 : ep.assets.video.url
                                }),
                                (0, r.jsx)(S.Z, {
                                    title: 'Quest Video (Low Resolution)',
                                    assetKey: 'videoPlayerVideoLowRes',
                                    onFileChange: er,
                                    filters: Q,
                                    initialValue: null == ep || null == (e = ep.assets.videoLowRes) ? void 0 : e.url
                                }),
                                (0, r.jsx)(S.Z, {
                                    title: 'Video Player Thumbnail (optional)',
                                    assetKey: 'videoPlayerThumbnail',
                                    onFileChange: er,
                                    filters: D,
                                    initialValue: null == ep ? void 0 : ep.assets.video.thumbnail
                                }),
                                (0, r.jsx)(S.Z, {
                                    title: 'Quest Bar Preview Video (optional)',
                                    assetKey: 'questBarPreviewVideo',
                                    onFileChange: eo,
                                    filters: Q,
                                    initialValue: null == (t = U.config.videoMetadata) ? void 0 : t.assets.questBarPreviewVideo
                                }),
                                (0, r.jsx)(S.Z, {
                                    title: 'Quest Home Video (optional)',
                                    assetKey: 'questHomeVideo',
                                    onFileChange: eo,
                                    filters: Q,
                                    initialValue: null == (s = U.config.videoMetadata) ? void 0 : s.assets.questHomeVideo
                                })
                            ]
                        })
                ]
            }),
            et.map((e, t) =>
                (0, r.jsxs)(
                    'div',
                    {
                        children: [
                            (0, r.jsxs)(d.X6q, {
                                variant: 'heading-md/semibold',
                                className: R.subheading,
                                children: ['Reward #', t + 1]
                            }),
                            (0, r.jsxs)('div', {
                                className: R.fields,
                                children: [
                                    (0, r.jsx)(w.Z, {
                                        title: 'Name',
                                        assetKey: 'name',
                                        onMessageChange: (e, n) => ei(e, n, t),
                                        initialValue: e.messages.name
                                    }),
                                    (0, r.jsx)(w.Z, {
                                        title: 'Name With Article',
                                        assetKey: 'nameWithArticle',
                                        onMessageChange: (e, n) => ei(e, n, t),
                                        initialValue: e.messages.nameWithArticle
                                    }),
                                    e.type !== c.w.VIRTUAL_CURRENCY &&
                                        (0, r.jsx)(S.Z, {
                                            title: 'Asset',
                                            assetKey: 'asset',
                                            onFileChange: (e, n) =>
                                                (function (e, t, n) {
                                                    if ('asset' === e) {
                                                        var r;
                                                        z(
                                                            I(B({}, U), {
                                                                config:
                                                                    ((r = U.config),
                                                                    (0, i.EQ)(r)
                                                                        .with({ configVersion: 2 }, (e) =>
                                                                            I(B({}, e), {
                                                                                rewardsConfig: I(B({}, e.rewardsConfig), {
                                                                                    rewards: e.rewardsConfig.rewards.map((e, r) =>
                                                                                        r === n
                                                                                            ? I(B({}, e), {
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
                                                    }
                                                })(e, n, t),
                                            filters: Q,
                                            initialValue: e.asset
                                        }),
                                    (0, r.jsxs)(d.xJW, {
                                        children: [
                                            (0, r.jsx)(d.vwX, { children: 'Claim Modal' }),
                                            (0, r.jsx)(d.zxk, {
                                                color: d.Ttl.BRAND,
                                                onClick: ec,
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
            (0, r.jsx)(d.X6q, {
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
                            (0, r.jsx)(O.Z, {
                                title: 'Primary',
                                colorKey: 'primary',
                                onChange: el,
                                value: U.config.colors.primary
                            }),
                            (0, r.jsx)(O.Z, {
                                title: 'Secondary',
                                colorKey: 'secondary',
                                onChange: el,
                                value: U.config.colors.secondary
                            })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        className: R.fields,
                        children: (0, r.jsx)(N.Z, {})
                    }),
                    (0, r.jsx)(A.Z, {
                        onChange: function (e) {
                            switch ((X(e), e)) {
                                case A.a.UNENROLLED:
                                    z(I(B({}, U), { userStatus: null }));
                                    break;
                                case A.a.ENROLLED:
                                    z(I(B({}, U), { userStatus: L({ enrolledAt: new Date().toISOString() }) }));
                                    break;
                                case A.a.COMPLETED_25:
                                    z(
                                        I(B({}, U), {
                                            userStatus: L({
                                                enrolledAt: new Date().toISOString(),
                                                streamProgressSeconds: 0.25 * eu
                                            })
                                        })
                                    );
                                    break;
                                case A.a.COMPLETED_50:
                                    z(
                                        I(B({}, U), {
                                            userStatus: L({
                                                enrolledAt: new Date().toISOString(),
                                                streamProgressSeconds: 0.5 * eu
                                            })
                                        })
                                    );
                                    break;
                                case A.a.COMPLETED_75:
                                    z(
                                        I(B({}, U), {
                                            userStatus: L({
                                                enrolledAt: new Date().toISOString(),
                                                streamProgressSeconds: 0.75 * eu
                                            })
                                        })
                                    );
                                    break;
                                case A.a.COMPLETED_100:
                                    z(
                                        I(B({}, U), {
                                            userStatus: L({
                                                completedAt: new Date().toISOString(),
                                                enrolledAt: new Date().toISOString(),
                                                streamProgressSeconds: eu
                                            })
                                        })
                                    );
                                    break;
                                case A.a.CLAIMED:
                                    z(
                                        I(B({}, U), {
                                            userStatus: L({
                                                claimedAt: new Date().toISOString(),
                                                completedAt: new Date().toISOString(),
                                                enrolledAt: new Date().toISOString(),
                                                streamProgressSeconds: eu
                                            })
                                        })
                                    );
                            }
                        },
                        value: F
                    })
                ]
            }),
            (0, r.jsx)(d.X6q, {
                variant: 'heading-lg/bold',
                className: R.heading,
                children: 'Component Previews'
            }),
            (0, r.jsxs)('div', {
                className: R.componentPreviews,
                children: [
                    (0, r.jsxs)(E.Z, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(d.vwX, { children: 'Quest Bar' }),
                            (0, r.jsxs)('div', {
                                className: R.questBarPreviewWrapper,
                                children: [
                                    (null == (u = U.userStatus) ? void 0 : u.claimedAt) != null &&
                                        (0, r.jsx)(d.Text, {
                                            color: 'text-secondary',
                                            variant: 'text-sm/normal',
                                            children: 'The Quest Bar is hidden when the user has claimed the reward.'
                                        }),
                                    (0, r.jsx)('div', {
                                        className: R.questBarPreview,
                                        children: (0, r.jsx)(b.p, {
                                            isPreview: !0,
                                            source: 'preview',
                                            questId: '0',
                                            children: (0, r.jsx)(x.Z, { children: (0, r.jsx)(g.P, { quest: U }) })
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, r.jsxs)(E.Z, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(d.vwX, { children: 'Quest Home Card' }),
                            (0, r.jsx)(b.p, {
                                isPreview: !0,
                                source: 'preview',
                                questId: '0',
                                children: (0, r.jsx)(h.Z, {
                                    quest: U,
                                    className: R.questTile,
                                    questContent: m.jn.QUEST_HOME_DESKTOP,
                                    contentPosition: 0,
                                    rowIndex: 0,
                                    sourceQuestContent: m.jn.INTERNAL_PREVIEW_TOOL
                                })
                            })
                        ]
                    }),
                    (0, r.jsxs)(E.Z, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(d.vwX, { children: 'Channel Call Header' }),
                            (null == (k = U.userStatus) ? void 0 : k.claimedAt) != null &&
                                (0, r.jsx)(d.Text, {
                                    color: 'text-secondary',
                                    variant: 'text-sm/normal',
                                    children: 'The Quest Channel Call Header is hidden when the user has claimed the reward.'
                                }),
                            (0, r.jsx)('div', {
                                className: R.questBarPreviewWrapper,
                                children: (0, r.jsx)(b.p, {
                                    isPreview: !0,
                                    source: 'preview',
                                    questId: '0',
                                    children: (0, r.jsx)('div', {
                                        className: R.questChannelCallHeaderPreview,
                                        children: (0, r.jsx)(_.Z, {
                                            channelId: '123',
                                            previewQuest: U,
                                            isParticipatingOverride: K
                                        })
                                    })
                                })
                            })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        className: R.toggleSwitch,
                        children: (0, r.jsx)(d.xJW, {
                            children: (0, r.jsx)(d.j7V, {
                                value: K,
                                onChange: function (e) {
                                    Y(e);
                                },
                                hideBorder: !0,
                                children: 'Is Participating:'
                            })
                        })
                    }),
                    (0, r.jsxs)(E.Z, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(d.vwX, { children: 'Quest Card Embed' }),
                            G
                                ? (0, r.jsx)(v.o, { questId: U.id })
                                : (0, r.jsx)(
                                      j.Z,
                                      {
                                          quest: U,
                                          location: m.jn.QUESTS_EMBED,
                                          sourceQuestContent: m.jn.INTERNAL_PREVIEW_TOOL
                                      },
                                      U.id
                                  )
                        ]
                    }),
                    (0, r.jsx)('div', {
                        className: R.toggleSwitch,
                        children: (0, r.jsx)(d.xJW, {
                            children: (0, r.jsx)(d.j7V, {
                                value: G,
                                onChange: J,
                                hideBorder: !0,
                                children: 'Invalid Quests Embed:'
                            })
                        })
                    }),
                    ed &&
                        (0, r.jsxs)(E.Z, {
                            withBorder: !0,
                            allowClicks: !0,
                            children: [
                                (0, r.jsx)(d.vwX, { children: 'Video Player' }),
                                (0, r.jsx)(d.zxk, {
                                    onClick: () => {
                                        (0, d.ZDy)(async () => {
                                            let { default: e } = await Promise.all([n.e('66816'), n.e('32249'), n.e('63942')]).then(n.bind(n, 536687));
                                            return (t) => {
                                                var n;
                                                return (0, r.jsx)(
                                                    e,
                                                    I(B({}, t), {
                                                        openStartClockTime: performance.now(),
                                                        videoSessionId: 'fake-quest-session-id',
                                                        questId: null != (n = U.id) ? n : 'fake-quest-id',
                                                        overrideQuest: U,
                                                        autoplay: !0,
                                                        sourceQuestContent: m.jn.INTERNAL_PREVIEW_TOOL
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
    });
}
class U extends o.Component {
    componentDidCatch(e) {
        this.setState({ error: e });
    }
    render() {
        let { error: e, renderKey: t } = this.state;
        return null != e
            ? (0, r.jsxs)('div', {
                  className: R.errorBoundary,
                  children: [
                      (0, r.jsx)(d.P4T, { className: R.errorBoundaryIcon }),
                      (0, r.jsx)(d.X6q, {
                          variant: 'heading-lg/semibold',
                          children: 'Something broke in the Quest preview tool :('
                      }),
                      (0, r.jsx)(d.zxk, {
                          color: d.Ttl.PRIMARY,
                          onClick: this.handleResetState,
                          children: 'Reset'
                      }),
                      null != e.message &&
                          (0, r.jsx)(d.Zbd, {
                              className: R.errorMessageWrapper,
                              children: (0, r.jsx)('code', {
                                  className: R.errorMessage,
                                  children: e.message
                              })
                          })
                  ]
              })
            : (0, r.jsx)(Z, {}, t);
    }
    constructor(...e) {
        (super(...e),
            k(this, 'state', {
                error: null,
                renderKey: 0
            }),
            k(this, 'handleResetState', () => {
                this.setState((e) => ({
                    error: null,
                    renderKey: e.renderKey + 1
                }));
            }));
    }
}
let H = U;
