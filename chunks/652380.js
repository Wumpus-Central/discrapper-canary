n.d(t, {
    Z: () => z,
    b: () => L
}),
    n(388685),
    n(314940);
var r = n(255367),
    s = n(73800),
    o = n(512722),
    a = n.n(o),
    i = n(278074),
    l = n(754700),
    c = n(887003),
    u = n(742635),
    d = n(458708),
    p = n(481060),
    m = n(70956),
    f = n(497505),
    g = n(918701),
    x = n(210724),
    h = n(130653),
    b = n(415104),
    j = n(78826),
    _ = n(37303),
    v = n(134483),
    y = n(683650),
    C = n(920916),
    O = n(341907),
    E = n(478977),
    S = n(456799),
    w = n(210851),
    P = n(602683),
    T = n(916028),
    N = n(749912),
    A = n(815183),
    R = n(899457),
    k = n(409667);
function B(e, t, n) {
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
function I(e) {
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
                B(e, t, n[t]);
            });
    }
    return e;
}
function q(e, t) {
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
let D = ['png', 'gif', 'webp'],
    Q = [...D, 'jpg', 'jpeg'],
    V = Array.from(new Set([...Q, 'gif', 'mp4', 'webm']));
function L(e) {
    var t, n;
    return {
        code: 'PREVIEW-MODE-CODE',
        tier: 0,
        platform: f.y$.CROSS_PLATFORM,
        userId: '123',
        questId: e.id,
        claimedAt: null != (n = null == (t = e.userStatus) ? void 0 : t.claimedAt) ? n : ''
    };
}
function M() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { streamProgressSeconds: t = 0, completedAt: n = null, enrolledAt: r = null, claimedAt: s = null } = e;
    return {
        userId: '123',
        questId: '1193992107035983872',
        enrolledAt: r,
        completedAt: n,
        claimedAt: s,
        claimedTier: null,
        lastStreamHeartbeatAt: null,
        streamProgressSeconds: t,
        dismissedQuestContent: 0,
        progress: {}
    };
}
let W = '1193992107035983872',
    Z = {
        id: W,
        preview: !0,
        config: {
            id: W,
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
                type: u.L.FIRST_PARTY,
                joinOperator: d.r.AND,
                tasks: {
                    [l.X.PLAY_ON_DESKTOP]: {
                        eventName: l.X.PLAY_ON_DESKTOP,
                        target: 300,
                        externalIds: []
                    }
                }
            },
            taskConfigV2: {
                joinOperator: d.r.AND,
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
function U() {
    var e, t, o, u, d, B, L, W;
    let [U, H] = s.useState(Z),
        z = s.useCallback((e) => {
            H(q(I({}, e), { preview: !0 }));
        }, []),
        [F, X] = s.useState(R.a.UNENROLLED),
        [K, Y] = s.useState(!1),
        [G, J] = s.useState(!1),
        [$, ee] = s.useState(null),
        et =
            ((W = U.config),
            (0, i.EQ)(W)
                .with({ configVersion: 2 }, (e) => e.rewardsConfig.rewards)
                .exhaustive());
    function en(e, t) {
        if ('hero' === e || 'questBarHero' === e || 'gameTile' === e || 'logotype' === e || 'heroVideo' === e || 'questBarHeroVideo' === e) {
            var n, r;
            z(
                q(I({}, U), {
                    config:
                        ((n = U.config),
                        (r = { [e]: t }),
                        (0, i.EQ)(n)
                            .with({ configVersion: 2 }, (e) => q(I({}, e), { assets: I({}, e.assets, r) }))
                            .exhaustive())
                })
            );
        }
    }
    function er(e, t) {
        let n = U.config.taskConfigV2.tasks,
            r = n[l.X.WATCH_VIDEO];
        if (null == r) return;
        let s = I({}, r.assets);
        switch (e) {
            case 'videoPlayerVideo':
                s.video = { url: t };
                break;
            case 'videoPlayerVideoLowRes':
                s.videoLowRes = { url: t };
                break;
            case 'videoPlayerThumbnail':
                s.video = q(I({}, s.video), { thumbnail: t });
                break;
            default:
                return;
        }
        z(q(I({}, U), { config: q(I({}, U.config), { taskConfigV2: q(I({}, U.config.taskConfigV2), { tasks: q(I({}, n), { [l.X.WATCH_VIDEO]: q(I({}, r), { assets: s }) }) }) }) }));
    }
    function es(e, t) {
        var n, r, s;
        z(
            q(I({}, U), {
                config: q(I({}, U.config), {
                    videoMetadata: q(I({}, U.config.videoMetadata), {
                        messages: null != (s = null == (n = U.config.videoMetadata) ? void 0 : n.messages) ? s : {},
                        assets: q(I({}, null == (r = U.config.videoMetadata) ? void 0 : r.assets), { [e]: t })
                    })
                })
            })
        );
    }
    function eo(e, t) {
        if ('questName' === e || 'gameTitle' === e || 'gamePublisher' === e) {
            var n, r;
            z(
                q(I({}, U), {
                    config:
                        ((n = U.config),
                        (r = { [e]: t }),
                        (0, i.EQ)(n)
                            .with({ configVersion: 2 }, (e) => q(I({}, e), { messages: I({}, e.messages, r) }))
                            .exhaustive())
                })
            );
        }
    }
    function ea(e, t) {
        let n = U.config.taskConfigV2.tasks,
            r = n[l.X.WATCH_VIDEO];
        if (null == r) return;
        let s = q(I({}, r.messages), { [e]: t });
        z(q(I({}, U), { config: q(I({}, U.config), { taskConfigV2: q(I({}, U.config.taskConfigV2), { tasks: q(I({}, n), { [l.X.WATCH_VIDEO]: q(I({}, r), { messages: s }) }) }) }) }));
    }
    function ei(e, t, n) {
        if ('name' === e || 'nameWithArticle' === e) {
            var r, s;
            z(
                q(I({}, U), {
                    config:
                        ((r = U.config),
                        (s = { [e]: t }),
                        (0, i.EQ)(r)
                            .with({ configVersion: 2 }, (e) => q(I({}, e), { rewardsConfig: q(I({}, e.rewardsConfig), { rewards: e.rewardsConfig.rewards.map((e, t) => (t === n ? q(I({}, e), { messages: I({}, e.messages, s) }) : e)) }) }))
                            .exhaustive())
                })
            );
        }
    }
    function el(e, t) {
        z(q(I({}, U), { config: q(I({}, U.config), { colors: q(I({}, U.config.colors), { [e]: t }) }) }));
    }
    function ec() {
        (0, g.Xv)(U.config)
            ? (0, C.m)(U, f.jn.GIFT_INVENTORY_FOR_YOU, !0)
            : (0, O.openQuestsRewardCodeModal)({
                  questId: U.id,
                  questContent: f.jn.GIFT_INVENTORY_FOR_YOU,
                  preview: !0,
                  previewQuest: U,
                  sourceQuestContent: f.jn.INTERNAL_PREVIEW_TOOL
              });
    }
    let eu = s.useMemo(() => {
            for (let [e, t] of Object.entries(U.config.taskConfigV2.tasks)) if (null != t.target) return t.target;
            return 10 * m.Z.Seconds.MINUTE;
        }, [U.config.taskConfigV2.tasks]),
        ed = s.useMemo(() => l.X.WATCH_VIDEO in U.config.taskConfigV2.tasks, [U.config.taskConfigV2.tasks]);
    a()(!1 !== U.preview && null != U.preview, 'Preview config must have property preview: true');
    let ep = U.config.taskConfigV2.tasks[l.X.WATCH_VIDEO];
    return (0, r.jsxs)('div', {
        children: [
            (0, r.jsx)(p.X6q, {
                variant: 'heading-lg/bold',
                className: k.heading,
                children: 'Quest Preview Tool'
            }),
            (0, r.jsx)('div', {
                className: k.fields,
                children: (0, r.jsx)(T.Z, {
                    onSelect: function (e) {
                        ee(e),
                            null != e &&
                                (X(
                                    (function (e) {
                                        if (null == e.userStatus) return R.a.UNENROLLED;
                                        if (null != e.userStatus.claimedAt) return R.a.CLAIMED;
                                        if (null != e.userStatus.completedAt) return R.a.COMPLETED_100;
                                        let t = (0, g.il)(e),
                                            n = t.progressSeconds,
                                            r = t.targetSeconds;
                                        return n / r >= 1 ? R.a.COMPLETED_100 : n / r >= 0.75 ? R.a.COMPLETED_75 : n / r >= 0.5 ? R.a.COMPLETED_50 : n / r >= 0.25 ? R.a.COMPLETED_25 : R.a.ENROLLED;
                                    })(e)
                                ),
                                z(e));
                    },
                    quest: $
                })
            }),
            (0, r.jsx)(p.X6q, {
                variant: 'heading-md/semibold',
                className: k.subheading,
                children: 'Task Config'
            }),
            (0, r.jsx)('div', {
                className: k.fields,
                children: (0, r.jsx)(N.Z, {
                    taskDuration: eu,
                    taskConfigV2: U.config.taskConfigV2,
                    onSelect: function (e) {
                        z(q(I({}, U), { config: q(I({}, U.config), { taskConfigV2: e }) }));
                    }
                })
            }),
            (0, r.jsx)(p.X6q, {
                variant: 'heading-md/semibold',
                className: k.subheading,
                children: 'Messages'
            }),
            (0, r.jsxs)('div', {
                className: k.fields,
                children: [
                    (0, r.jsx)(P.Z, {
                        title: 'Quest Name',
                        assetKey: 'questName',
                        onMessageChange: eo,
                        initialValue: U.config.messages.questName
                    }),
                    (0, r.jsx)(P.Z, {
                        title: 'Game Title',
                        assetKey: 'gameTitle',
                        onMessageChange: eo,
                        initialValue: U.config.messages.gameTitle
                    }),
                    (0, r.jsx)(P.Z, {
                        title: 'Game Publisher',
                        assetKey: 'gamePublisher',
                        onMessageChange: eo,
                        initialValue: U.config.messages.gamePublisher
                    }),
                    ed &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(P.Z, {
                                    title: 'Video Title',
                                    assetKey: 'videoTitle',
                                    onMessageChange: ea,
                                    initialValue: null == ep ? void 0 : ep.messages.videoTitle
                                }),
                                (0, r.jsx)(P.Z, {
                                    title: 'End CTA Title',
                                    assetKey: 'videoEndCtaTitle',
                                    onMessageChange: ea,
                                    initialValue: null == ep ? void 0 : ep.messages.videoEndCtaTitle
                                }),
                                (0, r.jsx)(P.Z, {
                                    title: 'End CTA Subtitle',
                                    assetKey: 'videoEndCtaSubtitle',
                                    onMessageChange: ea,
                                    initialValue: null == ep ? void 0 : ep.messages.videoEndCtaSubtitle
                                })
                            ]
                        })
                ]
            }),
            (0, r.jsx)(p.X6q, {
                variant: 'heading-md/semibold',
                className: k.subheading,
                children: 'Assets'
            }),
            (0, r.jsxs)('div', {
                className: k.fields,
                children: [
                    (0, r.jsx)(w.Z, {
                        title: 'Hero',
                        assetKey: 'hero',
                        onFileChange: en,
                        filters: V,
                        initialValue: U.config.assets.hero
                    }),
                    (0, r.jsx)(w.Z, {
                        title: 'Hero Video (optional)',
                        assetKey: 'heroVideo',
                        onFileChange: en,
                        filters: V,
                        initialValue: null != (B = U.config.assets.heroVideo) ? B : void 0
                    }),
                    (0, r.jsx)(w.Z, {
                        title: 'Quest Bar Hero',
                        assetKey: 'questBarHero',
                        onFileChange: en,
                        filters: V,
                        initialValue: U.config.assets.questBarHero
                    }),
                    (0, r.jsx)(w.Z, {
                        title: 'Quest Bar Hero Video (optional)',
                        assetKey: 'questBarHeroVideo',
                        onFileChange: en,
                        filters: V,
                        initialValue: null != (L = U.config.assets.questBarHeroVideo) ? L : void 0
                    }),
                    (0, r.jsx)(w.Z, {
                        title: 'Game Tile',
                        assetKey: 'gameTile',
                        onFileChange: en,
                        filters: [...Q, 'svg'],
                        initialValue: U.config.assets.gameTile
                    }),
                    (0, r.jsx)(w.Z, {
                        title: 'Logotype',
                        assetKey: 'logotype',
                        onFileChange: en,
                        filters: [...D, 'svg'],
                        initialValue: U.config.assets.logotype
                    }),
                    ed &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(w.Z, {
                                    title: 'Quest Video',
                                    assetKey: 'videoPlayerVideo',
                                    onFileChange: er,
                                    filters: V,
                                    initialValue: null == ep ? void 0 : ep.assets.video.url
                                }),
                                (0, r.jsx)(w.Z, {
                                    title: 'Quest Video (Low Resolution)',
                                    assetKey: 'videoPlayerVideoLowRes',
                                    onFileChange: er,
                                    filters: V,
                                    initialValue: null == ep || null == (e = ep.assets.videoLowRes) ? void 0 : e.url
                                }),
                                (0, r.jsx)(w.Z, {
                                    title: 'Video Player Thumbnail (optional)',
                                    assetKey: 'videoPlayerThumbnail',
                                    onFileChange: er,
                                    filters: Q,
                                    initialValue: null == ep ? void 0 : ep.assets.video.thumbnail
                                }),
                                (0, r.jsx)(w.Z, {
                                    title: 'Quest Bar Preview Video (optional)',
                                    assetKey: 'questBarPreviewVideo',
                                    onFileChange: es,
                                    filters: V,
                                    initialValue: null == (t = U.config.videoMetadata) ? void 0 : t.assets.questBarPreviewVideo
                                }),
                                (0, r.jsx)(w.Z, {
                                    title: 'Quest Home Video (optional)',
                                    assetKey: 'questHomeVideo',
                                    onFileChange: es,
                                    filters: V,
                                    initialValue: null == (o = U.config.videoMetadata) ? void 0 : o.assets.questHomeVideo
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
                            (0, r.jsxs)(p.X6q, {
                                variant: 'heading-md/semibold',
                                className: k.subheading,
                                children: ['Reward #', t + 1]
                            }),
                            (0, r.jsxs)('div', {
                                className: k.fields,
                                children: [
                                    (0, r.jsx)(P.Z, {
                                        title: 'Name',
                                        assetKey: 'name',
                                        onMessageChange: (e, n) => ei(e, n, t),
                                        initialValue: e.messages.name
                                    }),
                                    (0, r.jsx)(P.Z, {
                                        title: 'Name With Article',
                                        assetKey: 'nameWithArticle',
                                        onMessageChange: (e, n) => ei(e, n, t),
                                        initialValue: e.messages.nameWithArticle
                                    }),
                                    e.type !== c.w.VIRTUAL_CURRENCY &&
                                        (0, r.jsx)(w.Z, {
                                            title: 'Asset',
                                            assetKey: 'asset',
                                            onFileChange: (e, n) =>
                                                (function (e, t, n) {
                                                    if ('asset' === e) {
                                                        var r;
                                                        z(
                                                            q(I({}, U), {
                                                                config:
                                                                    ((r = U.config),
                                                                    (0, i.EQ)(r)
                                                                        .with({ configVersion: 2 }, (e) =>
                                                                            q(I({}, e), {
                                                                                rewardsConfig: q(I({}, e.rewardsConfig), {
                                                                                    rewards: e.rewardsConfig.rewards.map((e, r) =>
                                                                                        r === n
                                                                                            ? q(I({}, e), {
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
                                            filters: V,
                                            initialValue: e.asset
                                        }),
                                    (0, r.jsxs)(p.xJW, {
                                        children: [
                                            (0, r.jsx)(p.vwX, { children: 'Claim Modal' }),
                                            (0, r.jsx)(p.zxk, {
                                                color: p.Ttl.BRAND,
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
            (0, r.jsx)(p.X6q, {
                variant: 'heading-md/semibold',
                className: k.subheading,
                children: 'Colors & Quest States'
            }),
            (0, r.jsxs)('div', {
                className: k.fields,
                children: [
                    (0, r.jsxs)('div', {
                        className: k.fields,
                        style: { marginBottom: 0 },
                        children: [
                            (0, r.jsx)(E.Z, {
                                title: 'Primary',
                                colorKey: 'primary',
                                onChange: el,
                                value: U.config.colors.primary
                            }),
                            (0, r.jsx)(E.Z, {
                                title: 'Secondary',
                                colorKey: 'secondary',
                                onChange: el,
                                value: U.config.colors.secondary
                            })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        className: k.fields,
                        children: (0, r.jsx)(A.Z, {})
                    }),
                    (0, r.jsx)(R.Z, {
                        onChange: function (e) {
                            switch ((X(e), e)) {
                                case R.a.UNENROLLED:
                                    z(q(I({}, U), { userStatus: null }));
                                    break;
                                case R.a.ENROLLED:
                                    z(q(I({}, U), { userStatus: M({ enrolledAt: new Date().toISOString() }) }));
                                    break;
                                case R.a.COMPLETED_25:
                                    z(
                                        q(I({}, U), {
                                            userStatus: M({
                                                enrolledAt: new Date().toISOString(),
                                                streamProgressSeconds: 0.25 * eu
                                            })
                                        })
                                    );
                                    break;
                                case R.a.COMPLETED_50:
                                    z(
                                        q(I({}, U), {
                                            userStatus: M({
                                                enrolledAt: new Date().toISOString(),
                                                streamProgressSeconds: 0.5 * eu
                                            })
                                        })
                                    );
                                    break;
                                case R.a.COMPLETED_75:
                                    z(
                                        q(I({}, U), {
                                            userStatus: M({
                                                enrolledAt: new Date().toISOString(),
                                                streamProgressSeconds: 0.75 * eu
                                            })
                                        })
                                    );
                                    break;
                                case R.a.COMPLETED_100:
                                    z(
                                        q(I({}, U), {
                                            userStatus: M({
                                                completedAt: new Date().toISOString(),
                                                enrolledAt: new Date().toISOString(),
                                                streamProgressSeconds: eu
                                            })
                                        })
                                    );
                                    break;
                                case R.a.CLAIMED:
                                    z(
                                        q(I({}, U), {
                                            userStatus: M({
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
            (0, r.jsx)(p.X6q, {
                variant: 'heading-lg/bold',
                className: k.heading,
                children: 'Component Previews'
            }),
            (0, r.jsxs)('div', {
                className: k.componentPreviews,
                children: [
                    (0, r.jsxs)(S.Z, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(p.vwX, { children: 'Quest Bar' }),
                            (0, r.jsxs)('div', {
                                className: k.questBarPreviewWrapper,
                                children: [
                                    (null == (u = U.userStatus) ? void 0 : u.claimedAt) != null &&
                                        (0, r.jsx)(p.Text, {
                                            color: 'text-secondary',
                                            variant: 'text-sm/normal',
                                            children: 'The Quest Bar is hidden when the user has claimed the reward.'
                                        }),
                                    (0, r.jsx)('div', {
                                        className: k.questBarPreview,
                                        children: (0, r.jsx)(j.p, {
                                            isPreview: !0,
                                            source: 'preview',
                                            questId: '0',
                                            children: (0, r.jsx)(h.Z, { children: (0, r.jsx)(x.P, { quest: U }) })
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
                                    quest: U,
                                    className: k.questTile,
                                    questContent: f.jn.QUEST_HOME_DESKTOP,
                                    contentPosition: 0,
                                    rowIndex: 0,
                                    sourceQuestContent: f.jn.INTERNAL_PREVIEW_TOOL
                                })
                            })
                        ]
                    }),
                    (0, r.jsxs)(S.Z, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(p.vwX, { children: 'Channel Call Header' }),
                            (null == (d = U.userStatus) ? void 0 : d.claimedAt) != null &&
                                (0, r.jsx)(p.Text, {
                                    color: 'text-secondary',
                                    variant: 'text-sm/normal',
                                    children: 'The Quest Channel Call Header is hidden when the user has claimed the reward.'
                                }),
                            (0, r.jsx)('div', {
                                className: k.questBarPreviewWrapper,
                                children: (0, r.jsx)(j.p, {
                                    isPreview: !0,
                                    source: 'preview',
                                    questId: '0',
                                    children: (0, r.jsx)('div', {
                                        className: k.questChannelCallHeaderPreview,
                                        children: (0, r.jsx)(v.Z, {
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
                        className: k.toggleSwitch,
                        children: (0, r.jsx)(p.xJW, {
                            children: (0, r.jsx)(p.j7V, {
                                value: K,
                                onChange: function (e) {
                                    Y(e);
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
                            G
                                ? (0, r.jsx)(y.o, { questId: U.id })
                                : (0, r.jsx)(
                                      _.Z,
                                      {
                                          quest: U,
                                          location: f.jn.QUESTS_EMBED,
                                          sourceQuestContent: f.jn.INTERNAL_PREVIEW_TOOL
                                      },
                                      U.id
                                  )
                        ]
                    }),
                    (0, r.jsx)('div', {
                        className: k.toggleSwitch,
                        children: (0, r.jsx)(p.xJW, {
                            children: (0, r.jsx)(p.j7V, {
                                value: G,
                                onChange: J,
                                hideBorder: !0,
                                children: 'Invalid Quests Embed:'
                            })
                        })
                    }),
                    ed &&
                        (0, r.jsxs)(S.Z, {
                            withBorder: !0,
                            allowClicks: !0,
                            children: [
                                (0, r.jsx)(p.vwX, { children: 'Video Player' }),
                                (0, r.jsx)(p.zxk, {
                                    onClick: () => {
                                        (0, p.ZDy)(async () => {
                                            let { default: e } = await Promise.all([n.e('66816'), n.e('32249'), n.e('63942')]).then(n.bind(n, 536687));
                                            return (t) => {
                                                var n;
                                                return (0, r.jsx)(
                                                    e,
                                                    q(I({}, t), {
                                                        openStartClockTime: performance.now(),
                                                        videoSessionId: 'fake-quest-session-id',
                                                        questId: null != (n = U.id) ? n : 'fake-quest-id',
                                                        overrideQuest: U,
                                                        autoplay: !0,
                                                        sourceQuestContent: f.jn.INTERNAL_PREVIEW_TOOL
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
class H extends s.Component {
    componentDidCatch(e) {
        this.setState({ error: e });
    }
    render() {
        let { error: e, renderKey: t } = this.state;
        return null != e
            ? (0, r.jsxs)('div', {
                  className: k.errorBoundary,
                  children: [
                      (0, r.jsx)(p.P4T, { className: k.errorBoundaryIcon }),
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
                              className: k.errorMessageWrapper,
                              children: (0, r.jsx)('code', {
                                  className: k.errorMessage,
                                  children: e.message
                              })
                          })
                  ]
              })
            : (0, r.jsx)(U, {}, t);
    }
    constructor(...e) {
        super(...e),
            B(this, 'state', {
                error: null,
                renderKey: 0
            }),
            B(this, 'handleResetState', () => {
                this.setState((e) => ({
                    error: null,
                    renderKey: e.renderKey + 1
                }));
            });
    }
}
let z = H;
