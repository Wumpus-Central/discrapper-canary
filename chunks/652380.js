a.d(s, {
    Z: () => H,
    b: () => I
}),
    a(47120),
    a(627341);
var i = a(200651),
    t = a(192379),
    n = a(512722),
    l = a.n(n),
    r = a(278074),
    o = a(754700),
    d = a(887003),
    c = a(742635),
    u = a(458708),
    g = a(481060),
    h = a(70956),
    v = a(497505),
    m = a(918701),
    f = a(210724),
    x = a(130653),
    j = a(415104),
    p = a(78826),
    C = a(37303),
    P = a(134483),
    S = a(683650),
    w = a(920916),
    E = a(341907),
    T = a(478977),
    y = a(456799),
    O = a(210851),
    N = a(602683),
    b = a(916028),
    R = a(749912),
    D = a(815183),
    A = a(899457),
    L = a(970533);
function _(e, s, a) {
    return (
        s in e
            ? Object.defineProperty(e, s, {
                  value: a,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[s] = a),
        e
    );
}
let k = ['png', 'gif', 'webp'],
    M = [...k, 'jpg', 'jpeg'],
    V = Array.from(new Set([...M, 'gif', 'mp4', 'webm']));
function I(e) {
    var s, a;
    return {
        code: 'PREVIEW-MODE-CODE',
        tier: 0,
        platform: v.y$.CROSS_PLATFORM,
        userId: '123',
        questId: e.id,
        claimedAt: null !== (a = null === (s = e.userStatus) || void 0 === s ? void 0 : s.claimedAt) && void 0 !== a ? a : ''
    };
}
function Z() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { streamProgressSeconds: s = 0, completedAt: a = null, enrolledAt: i = null, claimedAt: t = null } = e;
    return {
        userId: '123',
        questId: '1193992107035983872',
        enrolledAt: i,
        completedAt: a,
        claimedAt: t,
        claimedTier: null,
        lastStreamHeartbeatAt: null,
        streamProgressSeconds: s,
        dismissedQuestContent: 0,
        progress: {}
    };
}
let B = '1193992107035983872',
    X = {
        id: B,
        preview: !0,
        config: {
            id: B,
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
                        type: d.w.REWARD_CODE,
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
                type: c.L.FIRST_PARTY,
                joinOperator: u.r.AND,
                tasks: {
                    [o.X.PLAY_ON_DESKTOP]: {
                        eventName: o.X.PLAY_ON_DESKTOP,
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
function q() {
    var e, s, n, d, c, u, _, I, B, q, K, H, Q, W;
    let [F, Y] = t.useState(X),
        U = t.useCallback((e) => {
            Y({
                ...e,
                preview: !0
            });
        }, []),
        [J, z] = t.useState(A.a.UNENROLLED),
        [G, $] = t.useState(!1),
        [ee, es] = t.useState(!1),
        [ea, ei] = t.useState(null),
        et =
            ((W = F.config),
            (0, r.EQ)(W)
                .with({ configVersion: 2 }, (e) => e.rewardsConfig.rewards)
                .exhaustive());
    function en(e, s) {
        var a, i;
        ('hero' === e || 'questBarHero' === e || 'gameTile' === e || 'logotype' === e || 'heroVideo' === e || 'questBarHeroVideo' === e) &&
            U({
                ...F,
                config:
                    ((a = F.config),
                    (i = { [e]: s }),
                    (0, r.EQ)(a)
                        .with({ configVersion: 2 }, (e) => ({
                            ...e,
                            assets: {
                                ...e.assets,
                                ...i
                            }
                        }))
                        .exhaustive())
            });
    }
    function el(e, s) {
        var a, i, t;
        U({
            ...F,
            config: {
                ...F.config,
                videoMetadata: {
                    ...F.config.videoMetadata,
                    messages: null !== (t = null === (a = F.config.videoMetadata) || void 0 === a ? void 0 : a.messages) && void 0 !== t ? t : {},
                    assets: {
                        ...(null === (i = F.config.videoMetadata) || void 0 === i ? void 0 : i.assets),
                        [e]: s
                    }
                }
            }
        });
    }
    function er(e, s) {
        var a, i;
        ('questName' === e || 'gameTitle' === e || 'gamePublisher' === e) &&
            U({
                ...F,
                config:
                    ((a = F.config),
                    (i = { [e]: s }),
                    (0, r.EQ)(a)
                        .with({ configVersion: 2 }, (e) => ({
                            ...e,
                            messages: {
                                ...e.messages,
                                ...i
                            }
                        }))
                        .exhaustive())
            });
    }
    function eo(e, s) {
        var a, i, t;
        U({
            ...F,
            config: {
                ...F.config,
                videoMetadata: {
                    ...F.config.videoMetadata,
                    assets: null !== (t = null === (a = F.config.videoMetadata) || void 0 === a ? void 0 : a.assets) && void 0 !== t ? t : {},
                    messages: {
                        ...(null === (i = F.config.videoMetadata) || void 0 === i ? void 0 : i.messages),
                        [e]: s
                    }
                }
            }
        });
    }
    function ed(e, s, a) {
        var i, t;
        ('name' === e || 'nameWithArticle' === e) &&
            U({
                ...F,
                config:
                    ((i = F.config),
                    (t = { [e]: s }),
                    (0, r.EQ)(i)
                        .with({ configVersion: 2 }, (e) => ({
                            ...e,
                            rewardsConfig: {
                                ...e.rewardsConfig,
                                rewards: e.rewardsConfig.rewards.map((e, s) =>
                                    s === a
                                        ? {
                                              ...e,
                                              messages: {
                                                  ...e.messages,
                                                  ...t
                                              }
                                          }
                                        : e
                                )
                            }
                        }))
                        .exhaustive())
            });
    }
    function ec(e, s) {
        U({
            ...F,
            config: {
                ...F.config,
                colors: {
                    ...F.config.colors,
                    [e]: s
                }
            }
        });
    }
    function eu() {
        (0, m.Xv)(F.config)
            ? (0, w.m)(F, v.jn.GIFT_INVENTORY_FOR_YOU, !0)
            : (0, E.openQuestsRewardCodeModal)({
                  questId: F.id,
                  location: v.jn.GIFT_INVENTORY_FOR_YOU,
                  preview: !0,
                  previewQuest: F
              });
    }
    let eg = t.useMemo(() => {
            for (let [e, s] of Object.entries(F.config.taskConfig.tasks)) if (null != s.target) return s.target;
            return 10 * h.Z.Seconds.MINUTE;
        }, [F.config.taskConfig.tasks]),
        eh = t.useMemo(() => o.X.WATCH_VIDEO in F.config.taskConfig.tasks, [F.config.taskConfig.tasks]);
    return (
        l()(!1 !== F.preview && null != F.preview, 'Preview config must have property preview: true'),
        (0, i.jsxs)('div', {
            children: [
                (0, i.jsx)(g.X6q, {
                    variant: 'heading-lg/bold',
                    className: L.heading,
                    children: 'Quest Preview Tool'
                }),
                (0, i.jsx)('div', {
                    className: L.fields,
                    children: (0, i.jsx)(b.Z, {
                        onSelect: function (e) {
                            ei(e),
                                null != e &&
                                    (z(
                                        (function (e) {
                                            if (null == e.userStatus) return A.a.UNENROLLED;
                                            if (null != e.userStatus.claimedAt) return A.a.CLAIMED;
                                            if (null != e.userStatus.completedAt) return A.a.COMPLETED_100;
                                            let s = (0, m.il)(e),
                                                a = s.progressSeconds,
                                                i = s.targetSeconds;
                                            return a / i >= 1 ? A.a.COMPLETED_100 : a / i >= 0.75 ? A.a.COMPLETED_75 : a / i >= 0.5 ? A.a.COMPLETED_50 : a / i >= 0.25 ? A.a.COMPLETED_25 : A.a.ENROLLED;
                                        })(e)
                                    ),
                                    U(e));
                        },
                        quest: ea
                    })
                }),
                (0, i.jsx)(g.X6q, {
                    variant: 'heading-md/semibold',
                    className: L.subheading,
                    children: 'Task Config'
                }),
                (0, i.jsx)('div', {
                    className: L.fields,
                    children: (0, i.jsx)(R.Z, {
                        taskDuration: eg,
                        taskConfig: F.config.taskConfig,
                        onSelect: function (e) {
                            U({
                                ...F,
                                config: {
                                    ...F.config,
                                    taskConfig: e
                                }
                            });
                        }
                    })
                }),
                (0, i.jsx)(g.X6q, {
                    variant: 'heading-md/semibold',
                    className: L.subheading,
                    children: 'Messages'
                }),
                (0, i.jsxs)('div', {
                    className: L.fields,
                    children: [
                        (0, i.jsx)(N.Z, {
                            title: 'Quest Name',
                            assetKey: 'questName',
                            onMessageChange: er,
                            initialValue: F.config.messages.questName
                        }),
                        (0, i.jsx)(N.Z, {
                            title: 'Game Title',
                            assetKey: 'gameTitle',
                            onMessageChange: er,
                            initialValue: F.config.messages.gameTitle
                        }),
                        (0, i.jsx)(N.Z, {
                            title: 'Game Publisher',
                            assetKey: 'gamePublisher',
                            onMessageChange: er,
                            initialValue: F.config.messages.gamePublisher
                        }),
                        eh &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(N.Z, {
                                        title: 'Video Title',
                                        assetKey: 'videoTitle',
                                        onMessageChange: eo,
                                        initialValue: null === (e = F.config.videoMetadata) || void 0 === e ? void 0 : e.messages.videoTitle
                                    }),
                                    (0, i.jsx)(N.Z, {
                                        title: 'End CTA Title',
                                        assetKey: 'videoEndCtaTitle',
                                        onMessageChange: eo,
                                        initialValue: null === (s = F.config.videoMetadata) || void 0 === s ? void 0 : s.messages.videoEndCtaTitle
                                    }),
                                    (0, i.jsx)(N.Z, {
                                        title: 'End CTA Subtitle',
                                        assetKey: 'videoEndCtaSubtitle',
                                        onMessageChange: eo,
                                        initialValue: null === (n = F.config.videoMetadata) || void 0 === n ? void 0 : n.messages.videoEndCtaSubtitle
                                    })
                                ]
                            })
                    ]
                }),
                (0, i.jsx)(g.X6q, {
                    variant: 'heading-md/semibold',
                    className: L.subheading,
                    children: 'Assets'
                }),
                (0, i.jsxs)('div', {
                    className: L.fields,
                    children: [
                        (0, i.jsx)(O.Z, {
                            title: 'Hero',
                            assetKey: 'hero',
                            onFileChange: en,
                            filters: V,
                            initialValue: F.config.assets.hero
                        }),
                        (0, i.jsx)(O.Z, {
                            title: 'Hero Video (optional)',
                            assetKey: 'heroVideo',
                            onFileChange: en,
                            filters: V,
                            initialValue: null !== (H = F.config.assets.heroVideo) && void 0 !== H ? H : void 0
                        }),
                        (0, i.jsx)(O.Z, {
                            title: 'Quest Bar Hero',
                            assetKey: 'questBarHero',
                            onFileChange: en,
                            filters: V,
                            initialValue: F.config.assets.questBarHero
                        }),
                        (0, i.jsx)(O.Z, {
                            title: 'Quest Bar Hero Video (optional)',
                            assetKey: 'questBarHeroVideo',
                            onFileChange: en,
                            filters: V,
                            initialValue: null !== (Q = F.config.assets.questBarHeroVideo) && void 0 !== Q ? Q : void 0
                        }),
                        (0, i.jsx)(O.Z, {
                            title: 'Game Tile',
                            assetKey: 'gameTile',
                            onFileChange: en,
                            filters: [...M, 'svg'],
                            initialValue: F.config.assets.gameTile
                        }),
                        (0, i.jsx)(O.Z, {
                            title: 'Logotype',
                            assetKey: 'logotype',
                            onFileChange: en,
                            filters: [...k, 'svg'],
                            initialValue: F.config.assets.logotype
                        }),
                        eh &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(O.Z, {
                                        title: 'Quest Video',
                                        assetKey: 'videoPlayerVideo',
                                        onFileChange: el,
                                        filters: V,
                                        initialValue: null === (d = F.config.videoMetadata) || void 0 === d ? void 0 : d.assets.videoPlayerVideo
                                    }),
                                    (0, i.jsx)(O.Z, {
                                        title: 'Quest Video (Low Resolution)',
                                        assetKey: 'videoPlayerVideoLowRes',
                                        onFileChange: el,
                                        filters: V,
                                        initialValue: null === (c = F.config.videoMetadata) || void 0 === c ? void 0 : c.assets.videoPlayerVideoLowRes
                                    }),
                                    (0, i.jsx)(O.Z, {
                                        title: 'Video Player Thumbnail (optional)',
                                        assetKey: 'videoPlayerThumbnail',
                                        onFileChange: el,
                                        filters: M,
                                        initialValue: null === (_ = F.config.videoMetadata) || void 0 === _ ? void 0 : null === (u = _.assets) || void 0 === u ? void 0 : u.videoPlayerThumbnail
                                    }),
                                    (0, i.jsx)(O.Z, {
                                        title: 'Quest Bar Preview Video (optional)',
                                        assetKey: 'questBarPreviewVideo',
                                        onFileChange: el,
                                        filters: V,
                                        initialValue: null === (I = F.config.videoMetadata) || void 0 === I ? void 0 : I.assets.questBarPreviewVideo
                                    }),
                                    (0, i.jsx)(O.Z, {
                                        title: 'Quest Home Video (optional)',
                                        assetKey: 'questHomeVideo',
                                        onFileChange: el,
                                        filters: V,
                                        initialValue: null === (B = F.config.videoMetadata) || void 0 === B ? void 0 : B.assets.questHomeVideo
                                    })
                                ]
                            })
                    ]
                }),
                et.map((e, s) =>
                    (0, i.jsxs)(
                        'div',
                        {
                            children: [
                                (0, i.jsxs)(g.X6q, {
                                    variant: 'heading-md/semibold',
                                    className: L.subheading,
                                    children: ['Reward #', s + 1]
                                }),
                                (0, i.jsxs)('div', {
                                    className: L.fields,
                                    children: [
                                        (0, i.jsx)(N.Z, {
                                            title: 'Name',
                                            assetKey: 'name',
                                            onMessageChange: (e, a) => ed(e, a, s),
                                            initialValue: e.messages.name
                                        }),
                                        (0, i.jsx)(N.Z, {
                                            title: 'Name With Article',
                                            assetKey: 'nameWithArticle',
                                            onMessageChange: (e, a) => ed(e, a, s),
                                            initialValue: e.messages.nameWithArticle
                                        }),
                                        (0, i.jsx)(O.Z, {
                                            title: 'Asset',
                                            assetKey: 'asset',
                                            onFileChange: (e, a) =>
                                                (function (e, s, a) {
                                                    var i;
                                                    'asset' === e &&
                                                        U({
                                                            ...F,
                                                            config:
                                                                ((i = F.config),
                                                                (0, r.EQ)(i)
                                                                    .with({ configVersion: 2 }, (e) => ({
                                                                        ...e,
                                                                        rewardsConfig: {
                                                                            ...e.rewardsConfig,
                                                                            rewards: e.rewardsConfig.rewards.map((e, i) =>
                                                                                i === a
                                                                                    ? {
                                                                                          ...e,
                                                                                          asset: s,
                                                                                          skuId: ''
                                                                                      }
                                                                                    : e
                                                                            )
                                                                        }
                                                                    }))
                                                                    .exhaustive())
                                                        });
                                                })(e, a, s),
                                            filters: V,
                                            initialValue: e.asset
                                        }),
                                        (0, i.jsxs)(g.xJW, {
                                            children: [
                                                (0, i.jsx)(g.vwX, { children: 'Claim Modal' }),
                                                (0, i.jsx)(g.zxk, {
                                                    color: g.Ttl.BRAND,
                                                    onClick: eu,
                                                    children: 'Open Reward Modal'
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        },
                        s
                    )
                ),
                (0, i.jsx)(g.X6q, {
                    variant: 'heading-md/semibold',
                    className: L.subheading,
                    children: 'Colors & Quest States'
                }),
                (0, i.jsxs)('div', {
                    className: L.fields,
                    children: [
                        (0, i.jsxs)('div', {
                            className: L.fields,
                            style: { marginBottom: 0 },
                            children: [
                                (0, i.jsx)(T.Z, {
                                    title: 'Primary',
                                    colorKey: 'primary',
                                    onChange: ec,
                                    value: F.config.colors.primary
                                }),
                                (0, i.jsx)(T.Z, {
                                    title: 'Secondary',
                                    colorKey: 'secondary',
                                    onChange: ec,
                                    value: F.config.colors.secondary
                                })
                            ]
                        }),
                        (0, i.jsx)('div', {
                            className: L.fields,
                            children: (0, i.jsx)(D.Z, {})
                        }),
                        (0, i.jsx)(A.Z, {
                            onChange: function (e) {
                                switch ((z(e), e)) {
                                    case A.a.UNENROLLED:
                                        U({
                                            ...F,
                                            userStatus: null
                                        });
                                        break;
                                    case A.a.ENROLLED:
                                        U({
                                            ...F,
                                            userStatus: Z({ enrolledAt: new Date().toISOString() })
                                        });
                                        break;
                                    case A.a.COMPLETED_25:
                                        U({
                                            ...F,
                                            userStatus: Z({
                                                enrolledAt: new Date().toISOString(),
                                                streamProgressSeconds: 0.25 * eg
                                            })
                                        });
                                        break;
                                    case A.a.COMPLETED_50:
                                        U({
                                            ...F,
                                            userStatus: Z({
                                                enrolledAt: new Date().toISOString(),
                                                streamProgressSeconds: 0.5 * eg
                                            })
                                        });
                                        break;
                                    case A.a.COMPLETED_75:
                                        U({
                                            ...F,
                                            userStatus: Z({
                                                enrolledAt: new Date().toISOString(),
                                                streamProgressSeconds: 0.75 * eg
                                            })
                                        });
                                        break;
                                    case A.a.COMPLETED_100:
                                        U({
                                            ...F,
                                            userStatus: Z({
                                                completedAt: new Date().toISOString(),
                                                enrolledAt: new Date().toISOString(),
                                                streamProgressSeconds: eg
                                            })
                                        });
                                        break;
                                    case A.a.CLAIMED:
                                        U({
                                            ...F,
                                            userStatus: Z({
                                                claimedAt: new Date().toISOString(),
                                                completedAt: new Date().toISOString(),
                                                enrolledAt: new Date().toISOString(),
                                                streamProgressSeconds: eg
                                            })
                                        });
                                }
                            },
                            value: J
                        })
                    ]
                }),
                (0, i.jsx)(g.X6q, {
                    variant: 'heading-lg/bold',
                    className: L.heading,
                    children: 'Component Previews'
                }),
                (0, i.jsxs)('div', {
                    className: L.componentPreviews,
                    children: [
                        (0, i.jsxs)(y.Z, {
                            withBorder: !0,
                            children: [
                                (0, i.jsx)(g.vwX, { children: 'Quest Bar' }),
                                (0, i.jsxs)('div', {
                                    className: L.questBarPreviewWrapper,
                                    children: [
                                        (null === (q = F.userStatus) || void 0 === q ? void 0 : q.claimedAt) != null &&
                                            (0, i.jsx)(g.Text, {
                                                color: 'text-secondary',
                                                variant: 'text-sm/normal',
                                                children: 'The Quest Bar is hidden when the user has claimed the reward.'
                                            }),
                                        (0, i.jsx)('div', {
                                            className: L.questBarPreview,
                                            children: (0, i.jsx)(p.p, {
                                                isPreview: !0,
                                                source: 'preview',
                                                questId: '0',
                                                children: (0, i.jsx)(x.Z, { children: (0, i.jsx)(f.P, { quest: F }) })
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, i.jsxs)(y.Z, {
                            withBorder: !0,
                            children: [
                                (0, i.jsx)(g.vwX, { children: 'Quest Home Card' }),
                                (0, i.jsx)(p.p, {
                                    isPreview: !0,
                                    source: 'preview',
                                    questId: '0',
                                    children: (0, i.jsx)(j.Z, {
                                        quest: F,
                                        className: L.questTile,
                                        questContent: v.jn.QUEST_HOME_DESKTOP,
                                        contentPosition: 0,
                                        rowIndex: 0
                                    })
                                })
                            ]
                        }),
                        (0, i.jsxs)(y.Z, {
                            withBorder: !0,
                            children: [
                                (0, i.jsx)(g.vwX, { children: 'Channel Call Header' }),
                                (null === (K = F.userStatus) || void 0 === K ? void 0 : K.claimedAt) != null &&
                                    (0, i.jsx)(g.Text, {
                                        color: 'text-secondary',
                                        variant: 'text-sm/normal',
                                        children: 'The Quest Channel Call Header is hidden when the user has claimed the reward.'
                                    }),
                                (0, i.jsx)('div', {
                                    className: L.questBarPreviewWrapper,
                                    children: (0, i.jsx)(p.p, {
                                        isPreview: !0,
                                        source: 'preview',
                                        questId: '0',
                                        children: (0, i.jsx)('div', {
                                            className: L.questChannelCallHeaderPreview,
                                            children: (0, i.jsx)(P.Z, {
                                                channelId: '123',
                                                previewQuest: F,
                                                isParticipatingOverride: G
                                            })
                                        })
                                    })
                                })
                            ]
                        }),
                        (0, i.jsx)('div', {
                            className: L.toggleSwitch,
                            children: (0, i.jsx)(g.xJW, {
                                children: (0, i.jsx)(g.j7V, {
                                    value: G,
                                    onChange: function (e) {
                                        $(e);
                                    },
                                    hideBorder: !0,
                                    children: 'Is Participating:'
                                })
                            })
                        }),
                        (0, i.jsxs)(y.Z, {
                            withBorder: !0,
                            children: [
                                (0, i.jsx)(g.vwX, { children: 'Quest Card Embed' }),
                                ee
                                    ? (0, i.jsx)(S.o, {})
                                    : (0, i.jsx)(
                                          C.Z,
                                          {
                                              quest: F,
                                              location: v.jn.QUESTS_EMBED
                                          },
                                          F.id
                                      )
                            ]
                        }),
                        (0, i.jsx)('div', {
                            className: L.toggleSwitch,
                            children: (0, i.jsx)(g.xJW, {
                                children: (0, i.jsx)(g.j7V, {
                                    value: ee,
                                    onChange: es,
                                    hideBorder: !0,
                                    children: 'Invalid Quests Embed:'
                                })
                            })
                        }),
                        eh &&
                            (0, i.jsxs)(y.Z, {
                                withBorder: !0,
                                allowClicks: !0,
                                children: [
                                    (0, i.jsx)(g.vwX, { children: 'Video Player' }),
                                    (0, i.jsx)(g.zxk, {
                                        onClick: () => {
                                            (0, g.ZDy)(async () => {
                                                let { default: e } = await Promise.all([a.e('29976'), a.e('32249'), a.e('67877')]).then(a.bind(a, 536687));
                                                return (s) => {
                                                    var a;
                                                    return (0, i.jsx)(e, {
                                                        ...s,
                                                        startTime: 0,
                                                        videoSessionId: 'fake-quest-session-id',
                                                        questId: null !== (a = F.id) && void 0 !== a ? a : 'fake-quest-id',
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
class K extends t.Component {
    componentDidCatch(e) {
        this.setState({ error: e });
    }
    render() {
        let { error: e, renderKey: s } = this.state;
        return null != e
            ? (0, i.jsxs)('div', {
                  className: L.errorBoundary,
                  children: [
                      (0, i.jsx)(g.P4T, { className: L.errorBoundaryIcon }),
                      (0, i.jsx)(g.X6q, {
                          variant: 'heading-lg/semibold',
                          children: 'Something broke in the Quest preview tool :('
                      }),
                      (0, i.jsx)(g.zxk, {
                          color: g.Ttl.PRIMARY,
                          onClick: this.handleResetState,
                          children: 'Reset'
                      }),
                      null != e.message &&
                          (0, i.jsx)(g.Zbd, {
                              className: L.errorMessageWrapper,
                              children: (0, i.jsx)('code', {
                                  className: L.errorMessage,
                                  children: e.message
                              })
                          })
                  ]
              })
            : (0, i.jsx)(q, {}, s);
    }
    constructor(...e) {
        super(...e),
            _(this, 'state', {
                error: null,
                renderKey: 0
            }),
            _(this, 'handleResetState', () => {
                this.setState((e) => ({
                    error: null,
                    renderKey: e.renderKey + 1
                }));
            });
    }
}
let H = K;
