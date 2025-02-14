n.d(t, {
    Z: () => U,
    b: () => L
}),
    n(47120),
    n(627341);
var s = n(200651),
    r = n(192379),
    a = n(512722),
    o = n.n(a),
    i = n(278074),
    l = n(754700),
    c = n(887003),
    d = n(742635),
    u = n(458708),
    p = n(481060),
    m = n(70956),
    x = n(497505),
    h = n(918701),
    g = n(210724),
    f = n(130653),
    v = n(415104),
    _ = n(78826),
    C = n(37303),
    j = n(134483),
    b = n(683650),
    T = n(920916),
    E = n(341907),
    S = n(478977),
    N = n(456799),
    y = n(210851),
    w = n(602683),
    A = n(916028),
    B = n(749912),
    R = n(815183),
    P = n(899457),
    k = n(970533);
function q(e, t, n) {
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
let I = ['png', 'gif', 'webp'],
    O = [...I, 'jpg', 'jpeg'],
    M = Array.from(new Set([...O, 'gif', 'mp4', 'webm']));
function L(e) {
    var t, n;
    return {
        code: 'PREVIEW-MODE-CODE',
        tier: 0,
        platform: x.y$.CROSS_PLATFORM,
        userId: '123',
        questId: e.id,
        claimedAt: null !== (n = null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedAt) && void 0 !== n ? n : ''
    };
}
function D() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { streamProgressSeconds: t = 0, completedAt: n = null, enrolledAt: s = null, claimedAt: r = null } = e;
    return {
        userId: '123',
        questId: '1193992107035983872',
        enrolledAt: s,
        completedAt: n,
        claimedAt: r,
        claimedTier: null,
        lastStreamHeartbeatAt: null,
        streamProgressSeconds: t,
        dismissedQuestContent: 0,
        progress: {}
    };
}
let Z = '1193992107035983872',
    W = {
        id: Z,
        preview: !0,
        config: {
            id: Z,
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
function V() {
    var e, t, a, c, d, u, q, L, Z, V, Q, U, H, z;
    let [F, X] = r.useState(W),
        K = r.useCallback((e) => {
            X({
                ...e,
                preview: !0
            });
        }, []),
        [Y, G] = r.useState(P.a.UNENROLLED),
        [J, $] = r.useState(!1),
        [ee, et] = r.useState(!1),
        [en, es] = r.useState(null),
        er =
            ((z = F.config),
            (0, i.EQ)(z)
                .with({ configVersion: 2 }, (e) => e.rewardsConfig.rewards)
                .exhaustive());
    function ea(e, t) {
        var n, s;
        ('hero' === e || 'questBarHero' === e || 'gameTile' === e || 'logotype' === e || 'heroVideo' === e || 'questBarHeroVideo' === e) &&
            K({
                ...F,
                config:
                    ((n = F.config),
                    (s = { [e]: t }),
                    (0, i.EQ)(n)
                        .with({ configVersion: 2 }, (e) => ({
                            ...e,
                            assets: {
                                ...e.assets,
                                ...s
                            }
                        }))
                        .exhaustive())
            });
    }
    function eo(e, t) {
        var n, s, r;
        K({
            ...F,
            config: {
                ...F.config,
                videoMetadata: {
                    ...F.config.videoMetadata,
                    messages: null !== (r = null === (n = F.config.videoMetadata) || void 0 === n ? void 0 : n.messages) && void 0 !== r ? r : {},
                    assets: {
                        ...(null === (s = F.config.videoMetadata) || void 0 === s ? void 0 : s.assets),
                        [e]: t
                    }
                }
            }
        });
    }
    function ei(e, t) {
        var n, s;
        ('questName' === e || 'gameTitle' === e || 'gamePublisher' === e) &&
            K({
                ...F,
                config:
                    ((n = F.config),
                    (s = { [e]: t }),
                    (0, i.EQ)(n)
                        .with({ configVersion: 2 }, (e) => ({
                            ...e,
                            messages: {
                                ...e.messages,
                                ...s
                            }
                        }))
                        .exhaustive())
            });
    }
    function el(e, t) {
        var n, s, r;
        K({
            ...F,
            config: {
                ...F.config,
                videoMetadata: {
                    ...F.config.videoMetadata,
                    assets: null !== (r = null === (n = F.config.videoMetadata) || void 0 === n ? void 0 : n.assets) && void 0 !== r ? r : {},
                    messages: {
                        ...(null === (s = F.config.videoMetadata) || void 0 === s ? void 0 : s.messages),
                        [e]: t
                    }
                }
            }
        });
    }
    function ec(e, t, n) {
        var s, r;
        ('name' === e || 'nameWithArticle' === e) &&
            K({
                ...F,
                config:
                    ((s = F.config),
                    (r = { [e]: t }),
                    (0, i.EQ)(s)
                        .with({ configVersion: 2 }, (e) => ({
                            ...e,
                            rewardsConfig: {
                                ...e.rewardsConfig,
                                rewards: e.rewardsConfig.rewards.map((e, t) =>
                                    t === n
                                        ? {
                                              ...e,
                                              messages: {
                                                  ...e.messages,
                                                  ...r
                                              }
                                          }
                                        : e
                                )
                            }
                        }))
                        .exhaustive())
            });
    }
    function ed(e, t) {
        K({
            ...F,
            config: {
                ...F.config,
                colors: {
                    ...F.config.colors,
                    [e]: t
                }
            }
        });
    }
    function eu() {
        (0, h.Xv)(F.config)
            ? (0, T.m)(F, x.jn.GIFT_INVENTORY_FOR_YOU, !0)
            : (0, E.openQuestsRewardCodeModal)({
                  questId: F.id,
                  location: x.jn.GIFT_INVENTORY_FOR_YOU,
                  preview: !0,
                  previewQuest: F
              });
    }
    let ep = r.useMemo(() => {
            for (let [e, t] of Object.entries(F.config.taskConfig.tasks)) if (null != t.target) return t.target;
            return 10 * m.Z.Seconds.MINUTE;
        }, [F.config.taskConfig.tasks]),
        em = r.useMemo(() => l.X.WATCH_VIDEO in F.config.taskConfig.tasks, [F.config.taskConfig.tasks]);
    return (
        o()(!1 !== F.preview && null != F.preview, 'Preview config must have property preview: true'),
        (0, s.jsxs)('div', {
            children: [
                (0, s.jsx)(p.X6q, {
                    variant: 'heading-lg/bold',
                    className: k.heading,
                    children: 'Quest Preview Tool'
                }),
                (0, s.jsx)('div', {
                    className: k.fields,
                    children: (0, s.jsx)(A.Z, {
                        onSelect: function (e) {
                            es(e),
                                null != e &&
                                    (G(
                                        (function (e) {
                                            if (null == e.userStatus) return P.a.UNENROLLED;
                                            if (null != e.userStatus.claimedAt) return P.a.CLAIMED;
                                            if (null != e.userStatus.completedAt) return P.a.COMPLETED_100;
                                            let t = (0, h.il)(e),
                                                n = t.progressSeconds,
                                                s = t.targetSeconds;
                                            return n / s >= 1 ? P.a.COMPLETED_100 : n / s >= 0.75 ? P.a.COMPLETED_75 : n / s >= 0.5 ? P.a.COMPLETED_50 : n / s >= 0.25 ? P.a.COMPLETED_25 : P.a.ENROLLED;
                                        })(e)
                                    ),
                                    K(e));
                        },
                        quest: en
                    })
                }),
                (0, s.jsx)(p.X6q, {
                    variant: 'heading-md/semibold',
                    className: k.subheading,
                    children: 'Task Config'
                }),
                (0, s.jsx)('div', {
                    className: k.fields,
                    children: (0, s.jsx)(B.Z, {
                        taskDuration: ep,
                        taskConfig: F.config.taskConfig,
                        onSelect: function (e) {
                            K({
                                ...F,
                                config: {
                                    ...F.config,
                                    taskConfig: e
                                }
                            });
                        }
                    })
                }),
                (0, s.jsx)(p.X6q, {
                    variant: 'heading-md/semibold',
                    className: k.subheading,
                    children: 'Messages'
                }),
                (0, s.jsxs)('div', {
                    className: k.fields,
                    children: [
                        (0, s.jsx)(w.Z, {
                            title: 'Quest Name',
                            assetKey: 'questName',
                            onMessageChange: ei,
                            initialValue: F.config.messages.questName
                        }),
                        (0, s.jsx)(w.Z, {
                            title: 'Game Title',
                            assetKey: 'gameTitle',
                            onMessageChange: ei,
                            initialValue: F.config.messages.gameTitle
                        }),
                        (0, s.jsx)(w.Z, {
                            title: 'Game Publisher',
                            assetKey: 'gamePublisher',
                            onMessageChange: ei,
                            initialValue: F.config.messages.gamePublisher
                        }),
                        em &&
                            (0, s.jsxs)(s.Fragment, {
                                children: [
                                    (0, s.jsx)(w.Z, {
                                        title: 'Video Title',
                                        assetKey: 'videoTitle',
                                        onMessageChange: el,
                                        initialValue: null === (e = F.config.videoMetadata) || void 0 === e ? void 0 : e.messages.videoTitle
                                    }),
                                    (0, s.jsx)(w.Z, {
                                        title: 'End CTA Title',
                                        assetKey: 'videoEndCtaTitle',
                                        onMessageChange: el,
                                        initialValue: null === (t = F.config.videoMetadata) || void 0 === t ? void 0 : t.messages.videoEndCtaTitle
                                    }),
                                    (0, s.jsx)(w.Z, {
                                        title: 'End CTA Subtitle',
                                        assetKey: 'videoEndCtaSubtitle',
                                        onMessageChange: el,
                                        initialValue: null === (a = F.config.videoMetadata) || void 0 === a ? void 0 : a.messages.videoEndCtaSubtitle
                                    })
                                ]
                            })
                    ]
                }),
                (0, s.jsx)(p.X6q, {
                    variant: 'heading-md/semibold',
                    className: k.subheading,
                    children: 'Assets'
                }),
                (0, s.jsxs)('div', {
                    className: k.fields,
                    children: [
                        (0, s.jsx)(y.Z, {
                            title: 'Hero',
                            assetKey: 'hero',
                            onFileChange: ea,
                            filters: M,
                            initialValue: F.config.assets.hero
                        }),
                        (0, s.jsx)(y.Z, {
                            title: 'Hero Video (optional)',
                            assetKey: 'heroVideo',
                            onFileChange: ea,
                            filters: M,
                            initialValue: null !== (U = F.config.assets.heroVideo) && void 0 !== U ? U : void 0
                        }),
                        (0, s.jsx)(y.Z, {
                            title: 'Quest Bar Hero',
                            assetKey: 'questBarHero',
                            onFileChange: ea,
                            filters: M,
                            initialValue: F.config.assets.questBarHero
                        }),
                        (0, s.jsx)(y.Z, {
                            title: 'Quest Bar Hero Video (optional)',
                            assetKey: 'questBarHeroVideo',
                            onFileChange: ea,
                            filters: M,
                            initialValue: null !== (H = F.config.assets.questBarHeroVideo) && void 0 !== H ? H : void 0
                        }),
                        (0, s.jsx)(y.Z, {
                            title: 'Game Tile',
                            assetKey: 'gameTile',
                            onFileChange: ea,
                            filters: [...O, 'svg'],
                            initialValue: F.config.assets.gameTile
                        }),
                        (0, s.jsx)(y.Z, {
                            title: 'Logotype',
                            assetKey: 'logotype',
                            onFileChange: ea,
                            filters: [...I, 'svg'],
                            initialValue: F.config.assets.logotype
                        }),
                        em &&
                            (0, s.jsxs)(s.Fragment, {
                                children: [
                                    (0, s.jsx)(y.Z, {
                                        title: 'Quest Video',
                                        assetKey: 'videoPlayerVideo',
                                        onFileChange: eo,
                                        filters: M,
                                        initialValue: null === (c = F.config.videoMetadata) || void 0 === c ? void 0 : c.assets.videoPlayerVideo
                                    }),
                                    (0, s.jsx)(y.Z, {
                                        title: 'Quest Video (Low Resolution)',
                                        assetKey: 'videoPlayerVideoLowRes',
                                        onFileChange: eo,
                                        filters: M,
                                        initialValue: null === (d = F.config.videoMetadata) || void 0 === d ? void 0 : d.assets.videoPlayerVideoLowRes
                                    }),
                                    (0, s.jsx)(y.Z, {
                                        title: 'Video Player Thumbnail (optional)',
                                        assetKey: 'videoPlayerThumbnail',
                                        onFileChange: eo,
                                        filters: O,
                                        initialValue: null === (q = F.config.videoMetadata) || void 0 === q ? void 0 : null === (u = q.assets) || void 0 === u ? void 0 : u.videoPlayerThumbnail
                                    }),
                                    (0, s.jsx)(y.Z, {
                                        title: 'Quest Bar Preview Video (optional)',
                                        assetKey: 'questBarPreviewVideo',
                                        onFileChange: eo,
                                        filters: M,
                                        initialValue: null === (L = F.config.videoMetadata) || void 0 === L ? void 0 : L.assets.questBarPreviewVideo
                                    }),
                                    (0, s.jsx)(y.Z, {
                                        title: 'Quest Home Video (optional)',
                                        assetKey: 'questHomeVideo',
                                        onFileChange: eo,
                                        filters: M,
                                        initialValue: null === (Z = F.config.videoMetadata) || void 0 === Z ? void 0 : Z.assets.questHomeVideo
                                    })
                                ]
                            })
                    ]
                }),
                er.map((e, t) =>
                    (0, s.jsxs)(
                        'div',
                        {
                            children: [
                                (0, s.jsxs)(p.X6q, {
                                    variant: 'heading-md/semibold',
                                    className: k.subheading,
                                    children: ['Reward #', t + 1]
                                }),
                                (0, s.jsxs)('div', {
                                    className: k.fields,
                                    children: [
                                        (0, s.jsx)(w.Z, {
                                            title: 'Name',
                                            assetKey: 'name',
                                            onMessageChange: (e, n) => ec(e, n, t),
                                            initialValue: e.messages.name
                                        }),
                                        (0, s.jsx)(w.Z, {
                                            title: 'Name With Article',
                                            assetKey: 'nameWithArticle',
                                            onMessageChange: (e, n) => ec(e, n, t),
                                            initialValue: e.messages.nameWithArticle
                                        }),
                                        (0, s.jsx)(y.Z, {
                                            title: 'Asset',
                                            assetKey: 'asset',
                                            onFileChange: (e, n) =>
                                                (function (e, t, n) {
                                                    var s;
                                                    'asset' === e &&
                                                        K({
                                                            ...F,
                                                            config:
                                                                ((s = F.config),
                                                                (0, i.EQ)(s)
                                                                    .with({ configVersion: 2 }, (e) => ({
                                                                        ...e,
                                                                        rewardsConfig: {
                                                                            ...e.rewardsConfig,
                                                                            rewards: e.rewardsConfig.rewards.map((e, s) =>
                                                                                s === n
                                                                                    ? {
                                                                                          ...e,
                                                                                          asset: t,
                                                                                          skuId: ''
                                                                                      }
                                                                                    : e
                                                                            )
                                                                        }
                                                                    }))
                                                                    .exhaustive())
                                                        });
                                                })(e, n, t),
                                            filters: M,
                                            initialValue: e.asset
                                        }),
                                        (0, s.jsxs)(p.xJW, {
                                            children: [
                                                (0, s.jsx)(p.vwX, { children: 'Claim Modal' }),
                                                (0, s.jsx)(p.zxk, {
                                                    color: p.Ttl.BRAND,
                                                    onClick: eu,
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
                (0, s.jsx)(p.X6q, {
                    variant: 'heading-md/semibold',
                    className: k.subheading,
                    children: 'Colors & Quest States'
                }),
                (0, s.jsxs)('div', {
                    className: k.fields,
                    children: [
                        (0, s.jsxs)('div', {
                            className: k.fields,
                            style: { marginBottom: 0 },
                            children: [
                                (0, s.jsx)(S.Z, {
                                    title: 'Primary',
                                    colorKey: 'primary',
                                    onChange: ed,
                                    value: F.config.colors.primary
                                }),
                                (0, s.jsx)(S.Z, {
                                    title: 'Secondary',
                                    colorKey: 'secondary',
                                    onChange: ed,
                                    value: F.config.colors.secondary
                                })
                            ]
                        }),
                        (0, s.jsx)('div', {
                            className: k.fields,
                            children: (0, s.jsx)(R.Z, {})
                        }),
                        (0, s.jsx)(P.Z, {
                            onChange: function (e) {
                                switch ((G(e), e)) {
                                    case P.a.UNENROLLED:
                                        K({
                                            ...F,
                                            userStatus: null
                                        });
                                        break;
                                    case P.a.ENROLLED:
                                        K({
                                            ...F,
                                            userStatus: D({ enrolledAt: new Date().toISOString() })
                                        });
                                        break;
                                    case P.a.COMPLETED_25:
                                        K({
                                            ...F,
                                            userStatus: D({
                                                enrolledAt: new Date().toISOString(),
                                                streamProgressSeconds: 0.25 * ep
                                            })
                                        });
                                        break;
                                    case P.a.COMPLETED_50:
                                        K({
                                            ...F,
                                            userStatus: D({
                                                enrolledAt: new Date().toISOString(),
                                                streamProgressSeconds: 0.5 * ep
                                            })
                                        });
                                        break;
                                    case P.a.COMPLETED_75:
                                        K({
                                            ...F,
                                            userStatus: D({
                                                enrolledAt: new Date().toISOString(),
                                                streamProgressSeconds: 0.75 * ep
                                            })
                                        });
                                        break;
                                    case P.a.COMPLETED_100:
                                        K({
                                            ...F,
                                            userStatus: D({
                                                completedAt: new Date().toISOString(),
                                                enrolledAt: new Date().toISOString(),
                                                streamProgressSeconds: ep
                                            })
                                        });
                                        break;
                                    case P.a.CLAIMED:
                                        K({
                                            ...F,
                                            userStatus: D({
                                                claimedAt: new Date().toISOString(),
                                                completedAt: new Date().toISOString(),
                                                enrolledAt: new Date().toISOString(),
                                                streamProgressSeconds: ep
                                            })
                                        });
                                }
                            },
                            value: Y
                        })
                    ]
                }),
                (0, s.jsx)(p.X6q, {
                    variant: 'heading-lg/bold',
                    className: k.heading,
                    children: 'Component Previews'
                }),
                (0, s.jsxs)('div', {
                    className: k.componentPreviews,
                    children: [
                        (0, s.jsxs)(N.Z, {
                            withBorder: !0,
                            children: [
                                (0, s.jsx)(p.vwX, { children: 'Quest Bar' }),
                                (0, s.jsxs)('div', {
                                    className: k.questBarPreviewWrapper,
                                    children: [
                                        (null === (V = F.userStatus) || void 0 === V ? void 0 : V.claimedAt) != null &&
                                            (0, s.jsx)(p.Text, {
                                                color: 'text-secondary',
                                                variant: 'text-sm/normal',
                                                children: 'The Quest Bar is hidden when the user has claimed the reward.'
                                            }),
                                        (0, s.jsx)('div', {
                                            className: k.questBarPreview,
                                            children: (0, s.jsx)(_.p, {
                                                isPreview: !0,
                                                source: 'preview',
                                                questId: '0',
                                                children: (0, s.jsx)(f.Z, { children: (0, s.jsx)(g.P, { quest: F }) })
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, s.jsxs)(N.Z, {
                            withBorder: !0,
                            children: [
                                (0, s.jsx)(p.vwX, { children: 'Quest Home Card' }),
                                (0, s.jsx)(_.p, {
                                    isPreview: !0,
                                    source: 'preview',
                                    questId: '0',
                                    children: (0, s.jsx)(v.Z, {
                                        quest: F,
                                        className: k.questTile,
                                        questContent: x.jn.QUEST_HOME_DESKTOP,
                                        contentPosition: 0,
                                        rowIndex: 0
                                    })
                                })
                            ]
                        }),
                        (0, s.jsxs)(N.Z, {
                            withBorder: !0,
                            children: [
                                (0, s.jsx)(p.vwX, { children: 'Channel Call Header' }),
                                (null === (Q = F.userStatus) || void 0 === Q ? void 0 : Q.claimedAt) != null &&
                                    (0, s.jsx)(p.Text, {
                                        color: 'text-secondary',
                                        variant: 'text-sm/normal',
                                        children: 'The Quest Channel Call Header is hidden when the user has claimed the reward.'
                                    }),
                                (0, s.jsx)('div', {
                                    className: k.questBarPreviewWrapper,
                                    children: (0, s.jsx)(_.p, {
                                        isPreview: !0,
                                        source: 'preview',
                                        questId: '0',
                                        children: (0, s.jsx)('div', {
                                            className: k.questChannelCallHeaderPreview,
                                            children: (0, s.jsx)(j.Z, {
                                                channelId: '123',
                                                previewQuest: F,
                                                isParticipatingOverride: J
                                            })
                                        })
                                    })
                                })
                            ]
                        }),
                        (0, s.jsx)('div', {
                            className: k.toggleSwitch,
                            children: (0, s.jsx)(p.xJW, {
                                children: (0, s.jsx)(p.j7V, {
                                    value: J,
                                    onChange: function (e) {
                                        $(e);
                                    },
                                    hideBorder: !0,
                                    children: 'Is Participating:'
                                })
                            })
                        }),
                        (0, s.jsxs)(N.Z, {
                            withBorder: !0,
                            children: [
                                (0, s.jsx)(p.vwX, { children: 'Quest Card Embed' }),
                                ee
                                    ? (0, s.jsx)(b.o, {})
                                    : (0, s.jsx)(
                                          C.Z,
                                          {
                                              quest: F,
                                              location: x.jn.QUESTS_EMBED
                                          },
                                          F.id
                                      )
                            ]
                        }),
                        (0, s.jsx)('div', {
                            className: k.toggleSwitch,
                            children: (0, s.jsx)(p.xJW, {
                                children: (0, s.jsx)(p.j7V, {
                                    value: ee,
                                    onChange: et,
                                    hideBorder: !0,
                                    children: 'Invalid Quests Embed:'
                                })
                            })
                        }),
                        em &&
                            (0, s.jsxs)(N.Z, {
                                withBorder: !0,
                                allowClicks: !0,
                                children: [
                                    (0, s.jsx)(p.vwX, { children: 'Video Player' }),
                                    (0, s.jsx)(p.zxk, {
                                        onClick: () => {
                                            (0, p.ZDy)(async () => {
                                                let { default: e } = await Promise.all([n.e('29976'), n.e('32249'), n.e('67877')]).then(n.bind(n, 536687));
                                                return (t) => {
                                                    var n;
                                                    return (0, s.jsx)(e, {
                                                        ...t,
                                                        startTime: 0,
                                                        videoSessionId: 'fake-quest-session-id',
                                                        questId: null !== (n = F.id) && void 0 !== n ? n : 'fake-quest-id',
                                                        overrideQuest: F,
                                                        autoplay: !0
                                                    });
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
class Q extends r.Component {
    componentDidCatch(e) {
        this.setState({ error: e });
    }
    render() {
        let { error: e, renderKey: t } = this.state;
        return null != e
            ? (0, s.jsxs)('div', {
                  className: k.errorBoundary,
                  children: [
                      (0, s.jsx)(p.P4T, { className: k.errorBoundaryIcon }),
                      (0, s.jsx)(p.X6q, {
                          variant: 'heading-lg/semibold',
                          children: 'Something broke in the Quest preview tool :('
                      }),
                      (0, s.jsx)(p.zxk, {
                          color: p.Ttl.PRIMARY,
                          onClick: this.handleResetState,
                          children: 'Reset'
                      }),
                      null != e.message &&
                          (0, s.jsx)(p.Zbd, {
                              className: k.errorMessageWrapper,
                              children: (0, s.jsx)('code', {
                                  className: k.errorMessage,
                                  children: e.message
                              })
                          })
                  ]
              })
            : (0, s.jsx)(V, {}, t);
    }
    constructor(...e) {
        super(...e),
            q(this, 'state', {
                error: null,
                renderKey: 0
            }),
            q(this, 'handleResetState', () => {
                this.setState((e) => ({
                    error: null,
                    renderKey: e.renderKey + 1
                }));
            });
    }
}
let U = Q;
