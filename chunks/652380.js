n.d(t, {
    Z: () => V,
    b: () => O
}),
    n(47120),
    n(627341);
var s = n(200651),
    r = n(192379),
    a = n(278074),
    o = n(754700),
    i = n(887003),
    l = n(742635),
    c = n(458708),
    d = n(481060),
    u = n(70956),
    p = n(497505),
    m = n(918701),
    x = n(210724),
    h = n(130653),
    g = n(415104),
    f = n(78826),
    v = n(37303),
    _ = n(134483),
    C = n(683650),
    j = n(920916),
    b = n(341907),
    T = n(478977),
    E = n(456799),
    S = n(210851),
    N = n(602683),
    y = n(916028),
    w = n(749912),
    A = n(815183),
    B = n(899457),
    R = n(102787);
function P(e, t, n) {
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
let k = ['png', 'gif', 'webp'],
    q = [...k, 'jpg', 'jpeg'],
    I = Array.from(new Set([...q, 'gif', 'mp4', 'webm']));
function O(e) {
    var t, n;
    return {
        code: 'PREVIEW-MODE-CODE',
        tier: 0,
        platform: p.y$.CROSS_PLATFORM,
        userId: '123',
        questId: e.id,
        claimedAt: null !== (n = null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedAt) && void 0 !== n ? n : ''
    };
}
function M() {
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
let D = '1193992107035983872',
    L = {
        id: D,
        preview: !0,
        config: {
            id: D,
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
                        type: i.w.REWARD_CODE,
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
                type: l.L.FIRST_PARTY,
                joinOperator: c.r.AND,
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
function Z() {
    var e, t, i, l, c, P, O, D, Z, W, V, Q, U, H;
    let [z, F] = r.useState(L),
        [X, K] = r.useState(B.a.UNENROLLED),
        [Y, G] = r.useState(!1),
        [J, $] = r.useState(!1),
        [ee, et] = r.useState(null),
        en =
            ((H = z.config),
            (0, a.EQ)(H)
                .with({ configVersion: 2 }, (e) => e.rewardsConfig.rewards)
                .exhaustive());
    function es(e, t) {
        var n, s;
        ('hero' === e || 'questBarHero' === e || 'gameTile' === e || 'logotype' === e || 'heroVideo' === e || 'questBarHeroVideo' === e) &&
            F({
                ...z,
                config:
                    ((n = z.config),
                    (s = { [e]: t }),
                    (0, a.EQ)(n)
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
    function er(e, t) {
        var n, s, r;
        F({
            ...z,
            config: {
                ...z.config,
                videoMetadata: {
                    ...z.config.videoMetadata,
                    messages: null !== (r = null === (n = z.config.videoMetadata) || void 0 === n ? void 0 : n.messages) && void 0 !== r ? r : {},
                    assets: {
                        ...(null === (s = z.config.videoMetadata) || void 0 === s ? void 0 : s.assets),
                        [e]: t
                    }
                }
            }
        });
    }
    function ea(e, t) {
        var n, s;
        ('questName' === e || 'gameTitle' === e || 'gamePublisher' === e) &&
            F({
                ...z,
                config:
                    ((n = z.config),
                    (s = { [e]: t }),
                    (0, a.EQ)(n)
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
    function eo(e, t) {
        var n, s, r;
        F({
            ...z,
            config: {
                ...z.config,
                videoMetadata: {
                    ...z.config.videoMetadata,
                    assets: null !== (r = null === (n = z.config.videoMetadata) || void 0 === n ? void 0 : n.assets) && void 0 !== r ? r : {},
                    messages: {
                        ...(null === (s = z.config.videoMetadata) || void 0 === s ? void 0 : s.messages),
                        [e]: t
                    }
                }
            }
        });
    }
    function ei(e, t, n) {
        var s, r;
        ('name' === e || 'nameWithArticle' === e) &&
            F({
                ...z,
                config:
                    ((s = z.config),
                    (r = { [e]: t }),
                    (0, a.EQ)(s)
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
    function el(e, t) {
        F({
            ...z,
            config: {
                ...z.config,
                colors: {
                    ...z.config.colors,
                    [e]: t
                }
            }
        });
    }
    function ec() {
        (0, m.Xv)(z.config)
            ? (0, j.m)(z, p.jn.GIFT_INVENTORY_FOR_YOU, !0)
            : (0, b.openQuestsRewardCodeModal)({
                  questId: z.id,
                  location: p.jn.GIFT_INVENTORY_FOR_YOU,
                  preview: !0,
                  previewQuest: z
              });
    }
    let ed = r.useMemo(() => {
            for (let [e, t] of Object.entries(z.config.taskConfig.tasks)) if (null != t.target) return t.target;
            return 10 * u.Z.Seconds.MINUTE;
        }, [z.config.taskConfig.tasks]),
        eu = r.useMemo(() => o.X.WATCH_VIDEO in z.config.taskConfig.tasks, [z.config.taskConfig.tasks]);
    return (0, s.jsxs)('div', {
        children: [
            (0, s.jsx)(d.X6q, {
                variant: 'heading-lg/bold',
                className: R.heading,
                children: 'Quest Preview Tool'
            }),
            (0, s.jsx)('div', {
                className: R.fields,
                children: (0, s.jsx)(y.Z, {
                    onSelect: function (e) {
                        et(e),
                            null != e &&
                                (K(
                                    (function (e) {
                                        if (null == e.userStatus) return B.a.UNENROLLED;
                                        if (null != e.userStatus.claimedAt) return B.a.CLAIMED;
                                        if (null != e.userStatus.completedAt) return B.a.COMPLETED_100;
                                        let t = (0, m.il)(e),
                                            n = t.progressSeconds,
                                            s = t.targetSeconds;
                                        return n / s >= 1 ? B.a.COMPLETED_100 : n / s >= 0.75 ? B.a.COMPLETED_75 : n / s >= 0.5 ? B.a.COMPLETED_50 : n / s >= 0.25 ? B.a.COMPLETED_25 : B.a.ENROLLED;
                                    })(e)
                                ),
                                F(e));
                    },
                    quest: ee
                })
            }),
            (0, s.jsx)(d.X6q, {
                variant: 'heading-md/semibold',
                className: R.subheading,
                children: 'Task Config'
            }),
            (0, s.jsx)('div', {
                className: R.fields,
                children: (0, s.jsx)(w.Z, {
                    taskDuration: ed,
                    taskConfig: z.config.taskConfig,
                    onSelect: function (e) {
                        F({
                            ...z,
                            config: {
                                ...z.config,
                                taskConfig: e
                            }
                        });
                    }
                })
            }),
            (0, s.jsx)(d.X6q, {
                variant: 'heading-md/semibold',
                className: R.subheading,
                children: 'Messages'
            }),
            (0, s.jsxs)('div', {
                className: R.fields,
                children: [
                    (0, s.jsx)(N.Z, {
                        title: 'Quest Name',
                        assetKey: 'questName',
                        onMessageChange: ea,
                        initialValue: z.config.messages.questName
                    }),
                    (0, s.jsx)(N.Z, {
                        title: 'Game Title',
                        assetKey: 'gameTitle',
                        onMessageChange: ea,
                        initialValue: z.config.messages.gameTitle
                    }),
                    (0, s.jsx)(N.Z, {
                        title: 'Game Publisher',
                        assetKey: 'gamePublisher',
                        onMessageChange: ea,
                        initialValue: z.config.messages.gamePublisher
                    }),
                    eu &&
                        (0, s.jsxs)(s.Fragment, {
                            children: [
                                (0, s.jsx)(N.Z, {
                                    title: 'Video Title',
                                    assetKey: 'videoTitle',
                                    onMessageChange: eo,
                                    initialValue: null === (e = z.config.videoMetadata) || void 0 === e ? void 0 : e.messages.videoTitle
                                }),
                                (0, s.jsx)(N.Z, {
                                    title: 'End CTA Title',
                                    assetKey: 'videoEndCtaTitle',
                                    onMessageChange: eo,
                                    initialValue: null === (t = z.config.videoMetadata) || void 0 === t ? void 0 : t.messages.videoEndCtaTitle
                                }),
                                (0, s.jsx)(N.Z, {
                                    title: 'End CTA Subtitle',
                                    assetKey: 'videoEndCtaSubtitle',
                                    onMessageChange: eo,
                                    initialValue: null === (i = z.config.videoMetadata) || void 0 === i ? void 0 : i.messages.videoEndCtaSubtitle
                                })
                            ]
                        })
                ]
            }),
            (0, s.jsx)(d.X6q, {
                variant: 'heading-md/semibold',
                className: R.subheading,
                children: 'Assets'
            }),
            (0, s.jsxs)('div', {
                className: R.fields,
                children: [
                    (0, s.jsx)(S.Z, {
                        title: 'Hero',
                        assetKey: 'hero',
                        onFileChange: es,
                        filters: I,
                        initialValue: z.config.assets.hero
                    }),
                    (0, s.jsx)(S.Z, {
                        title: 'Hero Video (optional)',
                        assetKey: 'heroVideo',
                        onFileChange: es,
                        filters: I,
                        initialValue: null !== (Q = z.config.assets.heroVideo) && void 0 !== Q ? Q : void 0
                    }),
                    (0, s.jsx)(S.Z, {
                        title: 'Quest Bar Hero',
                        assetKey: 'questBarHero',
                        onFileChange: es,
                        filters: I,
                        initialValue: z.config.assets.questBarHero
                    }),
                    (0, s.jsx)(S.Z, {
                        title: 'Quest Bar Hero Video (optional)',
                        assetKey: 'questBarHeroVideo',
                        onFileChange: es,
                        filters: I,
                        initialValue: null !== (U = z.config.assets.questBarHeroVideo) && void 0 !== U ? U : void 0
                    }),
                    (0, s.jsx)(S.Z, {
                        title: 'Game Tile',
                        assetKey: 'gameTile',
                        onFileChange: es,
                        filters: [...q, 'svg'],
                        initialValue: z.config.assets.gameTile
                    }),
                    (0, s.jsx)(S.Z, {
                        title: 'Logotype',
                        assetKey: 'logotype',
                        onFileChange: es,
                        filters: [...k, 'svg'],
                        initialValue: z.config.assets.logotype
                    }),
                    eu &&
                        (0, s.jsxs)(s.Fragment, {
                            children: [
                                (0, s.jsx)(S.Z, {
                                    title: 'Quest Video',
                                    assetKey: 'videoPlayerVideo',
                                    onFileChange: er,
                                    filters: I,
                                    initialValue: null === (l = z.config.videoMetadata) || void 0 === l ? void 0 : l.assets.videoPlayerVideo
                                }),
                                (0, s.jsx)(S.Z, {
                                    title: 'Quest Video (Low Resolution)',
                                    assetKey: 'videoPlayerVideoLowRes',
                                    onFileChange: er,
                                    filters: I,
                                    initialValue: null === (c = z.config.videoMetadata) || void 0 === c ? void 0 : c.assets.videoPlayerVideoLowRes
                                }),
                                (0, s.jsx)(S.Z, {
                                    title: 'Video Player Thumbnail (optional)',
                                    assetKey: 'videoPlayerThumbnail',
                                    onFileChange: er,
                                    filters: q,
                                    initialValue: null === (O = z.config.videoMetadata) || void 0 === O ? void 0 : null === (P = O.assets) || void 0 === P ? void 0 : P.videoPlayerThumbnail
                                }),
                                (0, s.jsx)(S.Z, {
                                    title: 'Quest Bar Preview Video (optional)',
                                    assetKey: 'questBarPreviewVideo',
                                    onFileChange: er,
                                    filters: I,
                                    initialValue: null === (D = z.config.videoMetadata) || void 0 === D ? void 0 : D.assets.questBarPreviewVideo
                                }),
                                (0, s.jsx)(S.Z, {
                                    title: 'Quest Home Video (optional)',
                                    assetKey: 'questHomeVideo',
                                    onFileChange: er,
                                    filters: I,
                                    initialValue: null === (Z = z.config.videoMetadata) || void 0 === Z ? void 0 : Z.assets.questHomeVideo
                                })
                            ]
                        })
                ]
            }),
            en.map((e, t) =>
                (0, s.jsxs)(
                    'div',
                    {
                        children: [
                            (0, s.jsxs)(d.X6q, {
                                variant: 'heading-md/semibold',
                                className: R.subheading,
                                children: ['Reward #', t + 1]
                            }),
                            (0, s.jsxs)('div', {
                                className: R.fields,
                                children: [
                                    (0, s.jsx)(N.Z, {
                                        title: 'Name',
                                        assetKey: 'name',
                                        onMessageChange: (e, n) => ei(e, n, t),
                                        initialValue: e.messages.name
                                    }),
                                    (0, s.jsx)(N.Z, {
                                        title: 'Name With Article',
                                        assetKey: 'nameWithArticle',
                                        onMessageChange: (e, n) => ei(e, n, t),
                                        initialValue: e.messages.nameWithArticle
                                    }),
                                    (0, s.jsx)(S.Z, {
                                        title: 'Asset',
                                        assetKey: 'asset',
                                        onFileChange: (e, n) =>
                                            (function (e, t, n) {
                                                var s;
                                                'asset' === e &&
                                                    F({
                                                        ...z,
                                                        config:
                                                            ((s = z.config),
                                                            (0, a.EQ)(s)
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
                                        filters: I,
                                        initialValue: e.asset
                                    }),
                                    (0, s.jsxs)(d.xJW, {
                                        children: [
                                            (0, s.jsx)(d.vwX, { children: 'Claim Modal' }),
                                            (0, s.jsx)(d.zxk, {
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
            (0, s.jsx)(d.X6q, {
                variant: 'heading-md/semibold',
                className: R.subheading,
                children: 'Colors & Quest States'
            }),
            (0, s.jsxs)('div', {
                className: R.fields,
                children: [
                    (0, s.jsxs)('div', {
                        className: R.fields,
                        style: { marginBottom: 0 },
                        children: [
                            (0, s.jsx)(T.Z, {
                                title: 'Primary',
                                colorKey: 'primary',
                                onChange: el,
                                value: z.config.colors.primary
                            }),
                            (0, s.jsx)(T.Z, {
                                title: 'Secondary',
                                colorKey: 'secondary',
                                onChange: el,
                                value: z.config.colors.secondary
                            })
                        ]
                    }),
                    (0, s.jsx)('div', {
                        className: R.fields,
                        children: (0, s.jsx)(A.Z, {})
                    }),
                    (0, s.jsx)(B.Z, {
                        onChange: function (e) {
                            switch ((K(e), e)) {
                                case B.a.UNENROLLED:
                                    F({
                                        ...z,
                                        userStatus: null
                                    });
                                    break;
                                case B.a.ENROLLED:
                                    F({
                                        ...z,
                                        userStatus: M({ enrolledAt: new Date().toISOString() })
                                    });
                                    break;
                                case B.a.COMPLETED_25:
                                    F({
                                        ...z,
                                        userStatus: M({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.25 * ed
                                        })
                                    });
                                    break;
                                case B.a.COMPLETED_50:
                                    F({
                                        ...z,
                                        userStatus: M({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.5 * ed
                                        })
                                    });
                                    break;
                                case B.a.COMPLETED_75:
                                    F({
                                        ...z,
                                        userStatus: M({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.75 * ed
                                        })
                                    });
                                    break;
                                case B.a.COMPLETED_100:
                                    F({
                                        ...z,
                                        userStatus: M({
                                            completedAt: new Date().toISOString(),
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: ed
                                        })
                                    });
                                    break;
                                case B.a.CLAIMED:
                                    F({
                                        ...z,
                                        userStatus: M({
                                            claimedAt: new Date().toISOString(),
                                            completedAt: new Date().toISOString(),
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: ed
                                        })
                                    });
                            }
                        },
                        value: X
                    })
                ]
            }),
            (0, s.jsx)(d.X6q, {
                variant: 'heading-lg/bold',
                className: R.heading,
                children: 'Component Previews'
            }),
            (0, s.jsxs)('div', {
                className: R.componentPreviews,
                children: [
                    (0, s.jsxs)(E.Z, {
                        withBorder: !0,
                        children: [
                            (0, s.jsx)(d.vwX, { children: 'Quest Bar' }),
                            (0, s.jsxs)('div', {
                                className: R.questBarPreviewWrapper,
                                children: [
                                    (null === (W = z.userStatus) || void 0 === W ? void 0 : W.claimedAt) != null &&
                                        (0, s.jsx)(d.Text, {
                                            color: 'text-secondary',
                                            variant: 'text-sm/normal',
                                            children: 'The Quest Bar is hidden when the user has claimed the reward.'
                                        }),
                                    (0, s.jsx)('div', {
                                        className: R.questBarPreview,
                                        children: (0, s.jsx)(f.p, {
                                            isPreview: !0,
                                            source: 'preview',
                                            questId: '0',
                                            children: (0, s.jsx)(h.Z, { children: (0, s.jsx)(x.P, { quest: z }) })
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, s.jsxs)(E.Z, {
                        withBorder: !0,
                        children: [
                            (0, s.jsx)(d.vwX, { children: 'Quest Home Card' }),
                            (0, s.jsx)(f.p, {
                                isPreview: !0,
                                source: 'preview',
                                questId: '0',
                                children: (0, s.jsx)(g.Z, {
                                    quest: z,
                                    className: R.questTile,
                                    questContent: p.jn.QUEST_HOME_DESKTOP,
                                    contentPosition: 0,
                                    rowIndex: 0
                                })
                            })
                        ]
                    }),
                    (0, s.jsxs)(E.Z, {
                        withBorder: !0,
                        children: [
                            (0, s.jsx)(d.vwX, { children: 'Channel Call Header' }),
                            (null === (V = z.userStatus) || void 0 === V ? void 0 : V.claimedAt) != null &&
                                (0, s.jsx)(d.Text, {
                                    color: 'text-secondary',
                                    variant: 'text-sm/normal',
                                    children: 'The Quest Channel Call Header is hidden when the user has claimed the reward.'
                                }),
                            (0, s.jsx)('div', {
                                className: R.questBarPreviewWrapper,
                                children: (0, s.jsx)(f.p, {
                                    isPreview: !0,
                                    source: 'preview',
                                    questId: '0',
                                    children: (0, s.jsx)('div', {
                                        className: R.questChannelCallHeaderPreview,
                                        children: (0, s.jsx)(_.Z, {
                                            channelId: '123',
                                            previewQuest: z,
                                            isParticipatingOverride: Y
                                        })
                                    })
                                })
                            })
                        ]
                    }),
                    (0, s.jsx)('div', {
                        className: R.toggleSwitch,
                        children: (0, s.jsx)(d.xJW, {
                            children: (0, s.jsx)(d.j7V, {
                                value: Y,
                                onChange: function (e) {
                                    G(e);
                                },
                                hideBorder: !0,
                                children: 'Is Participating:'
                            })
                        })
                    }),
                    (0, s.jsxs)(E.Z, {
                        withBorder: !0,
                        children: [
                            (0, s.jsx)(d.vwX, { children: 'Quest Card Embed' }),
                            J
                                ? (0, s.jsx)(C.o, {})
                                : (0, s.jsx)(
                                      v.Z,
                                      {
                                          quest: z,
                                          location: p.jn.QUESTS_EMBED
                                      },
                                      z.id
                                  )
                        ]
                    }),
                    (0, s.jsx)('div', {
                        className: R.toggleSwitch,
                        children: (0, s.jsx)(d.xJW, {
                            children: (0, s.jsx)(d.j7V, {
                                value: J,
                                onChange: $,
                                hideBorder: !0,
                                children: 'Invalid Quests Embed:'
                            })
                        })
                    }),
                    eu &&
                        (0, s.jsxs)(E.Z, {
                            withBorder: !0,
                            allowClicks: !0,
                            children: [
                                (0, s.jsx)(d.vwX, { children: 'Video Player' }),
                                (0, s.jsx)(d.zxk, {
                                    onClick: () => {
                                        (0, d.ZDy)(async () => {
                                            let { default: e } = await Promise.all([n.e('29976'), n.e('32249'), n.e('30414')]).then(n.bind(n, 536687));
                                            return (t) => {
                                                var n;
                                                return (0, s.jsx)(e, {
                                                    ...t,
                                                    startTime: 0,
                                                    videoSessionId: 'fake-quest-session-id',
                                                    questId: null !== (n = z.id) && void 0 !== n ? n : 'fake-quest-id',
                                                    overrideQuest: z,
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
    });
}
class W extends r.Component {
    componentDidCatch(e) {
        this.setState({ error: e });
    }
    render() {
        let { error: e, renderKey: t } = this.state;
        return null != e
            ? (0, s.jsxs)('div', {
                  className: R.errorBoundary,
                  children: [
                      (0, s.jsx)(d.P4T, { className: R.errorBoundaryIcon }),
                      (0, s.jsx)(d.X6q, {
                          variant: 'heading-lg/semibold',
                          children: 'Something broke in the Quest preview tool :('
                      }),
                      (0, s.jsx)(d.zxk, {
                          color: d.Ttl.PRIMARY,
                          onClick: this.handleResetState,
                          children: 'Reset'
                      }),
                      null != e.message &&
                          (0, s.jsx)(d.Zbd, {
                              className: R.errorMessageWrapper,
                              children: (0, s.jsx)('code', {
                                  className: R.errorMessage,
                                  children: e.message
                              })
                          })
                  ]
              })
            : (0, s.jsx)(Z, {}, t);
    }
    constructor(...e) {
        super(...e),
            P(this, 'state', {
                error: null,
                renderKey: 0
            }),
            P(this, 'handleResetState', () => {
                this.setState((e) => ({
                    error: null,
                    renderKey: e.renderKey + 1
                }));
            });
    }
}
let V = W;
