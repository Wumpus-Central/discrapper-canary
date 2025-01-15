n.d(t, {
    b: function () {
        return q;
    }
}),
    n(47120),
    n(627341);
var o = n(200651),
    r = n(192379),
    s = n(278074),
    a = n(754700),
    i = n(887003),
    l = n(742635),
    c = n(458708),
    d = n(481060),
    u = n(70956),
    p = n(497505),
    m = n(918701),
    x = n(210724),
    g = n(130653),
    h = n(415104),
    f = n(78826),
    v = n(37303),
    C = n(134483),
    j = n(683650),
    _ = n(920916),
    T = n(341907),
    E = n(478977),
    S = n(456799),
    b = n(210851),
    N = n(602683),
    B = n(916028),
    y = n(749912),
    A = n(815183),
    w = n(899457),
    R = n(280400);
function I(e, t, n) {
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
let P = ['png', 'gif', 'webp'],
    k = [...P, 'jpg', 'jpeg'],
    O = Array.from(new Set([...k, 'gif', 'mp4', 'webm']));
function q(e) {
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
        { streamProgressSeconds: t = 0, completedAt: n = null, enrolledAt: o = null, claimedAt: r = null } = e;
    return {
        userId: '123',
        questId: '1193992107035983872',
        enrolledAt: o,
        completedAt: n,
        claimedAt: r,
        claimedTier: null,
        lastStreamHeartbeatAt: null,
        streamProgressSeconds: t,
        dismissedQuestContent: 0,
        progress: {}
    };
}
let L = '1193992107035983872',
    D = {
        id: L,
        preview: !0,
        config: {
            id: L,
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
                    [a.X.PLAY_ON_DESKTOP]: {
                        eventName: a.X.PLAY_ON_DESKTOP,
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
    var e, t, i, l, c, I, q, L, Z, V, W, H, Q, U;
    let [F, K] = r.useState(D),
        [z, Y] = r.useState(w.a.UNENROLLED),
        [G, X] = r.useState(!1),
        [J, $] = r.useState(!1),
        [ee, et] = r.useState(null);
    let en =
        ((U = F.config),
        (0, s.EQ)(U)
            .with({ configVersion: 2 }, (e) => e.rewardsConfig.rewards)
            .exhaustive());
    function eo(e, t) {
        var n, o;
        if ('hero' === e || 'questBarHero' === e || 'gameTile' === e || 'logotype' === e || 'heroVideo' === e || 'questBarHeroVideo' === e)
            K({
                ...F,
                config:
                    ((n = F.config),
                    (o = { [e]: t }),
                    (0, s.EQ)(n)
                        .with({ configVersion: 2 }, (e) => ({
                            ...e,
                            assets: {
                                ...e.assets,
                                ...o
                            }
                        }))
                        .exhaustive())
            });
    }
    function er(e, t) {
        var n, o, r;
        K({
            ...F,
            config: {
                ...F.config,
                videoMetadata: {
                    ...F.config.videoMetadata,
                    messages: null !== (r = null === (n = F.config.videoMetadata) || void 0 === n ? void 0 : n.messages) && void 0 !== r ? r : {},
                    assets: {
                        ...(null === (o = F.config.videoMetadata) || void 0 === o ? void 0 : o.assets),
                        [e]: t
                    }
                }
            }
        });
    }
    function es(e, t) {
        var n, o;
        if ('questName' === e || 'gameTitle' === e || 'gamePublisher' === e)
            K({
                ...F,
                config:
                    ((n = F.config),
                    (o = { [e]: t }),
                    (0, s.EQ)(n)
                        .with({ configVersion: 2 }, (e) => ({
                            ...e,
                            messages: {
                                ...e.messages,
                                ...o
                            }
                        }))
                        .exhaustive())
            });
    }
    function ea(e, t) {
        var n, o, r;
        K({
            ...F,
            config: {
                ...F.config,
                videoMetadata: {
                    ...F.config.videoMetadata,
                    assets: null !== (r = null === (n = F.config.videoMetadata) || void 0 === n ? void 0 : n.assets) && void 0 !== r ? r : {},
                    messages: {
                        ...(null === (o = F.config.videoMetadata) || void 0 === o ? void 0 : o.messages),
                        [e]: t
                    }
                }
            }
        });
    }
    function ei(e, t, n) {
        var o, r, a;
        if ('name' === e || 'nameWithArticle' === e)
            K({
                ...F,
                config:
                    ((o = F.config),
                    (r = { [e]: t }),
                    (a = n),
                    (0, s.EQ)(o)
                        .with({ configVersion: 2 }, (e) => ({
                            ...e,
                            rewardsConfig: {
                                ...e.rewardsConfig,
                                rewards: e.rewardsConfig.rewards.map((e, t) =>
                                    t === a
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
    function ec() {
        (0, m.Xv)(F.config)
            ? (0, _.openCollectibleRewardModal)(F, p.jn.GIFT_INVENTORY_FOR_YOU, !0)
            : (0, T.openQuestsRewardCodeModal)({
                  questId: F.id,
                  location: p.jn.GIFT_INVENTORY_FOR_YOU,
                  preview: !0,
                  previewQuest: F
              });
    }
    let ed = r.useMemo(() => {
            for (let [e, t] of Object.entries(F.config.taskConfig.tasks)) if (null != t.target) return t.target;
            return 10 * u.Z.Seconds.MINUTE;
        }, [F.config.taskConfig.tasks]),
        eu = r.useMemo(() => a.X.WATCH_VIDEO in F.config.taskConfig.tasks, [F.config.taskConfig.tasks]);
    return (0, o.jsxs)('div', {
        children: [
            (0, o.jsx)(d.Heading, {
                variant: 'heading-lg/bold',
                className: R.heading,
                children: 'Quest Preview Tool'
            }),
            (0, o.jsx)('div', {
                className: R.fields,
                children: (0, o.jsx)(B.Z, {
                    onSelect: function (e) {
                        if ((et(e), null != e))
                            Y(
                                (function (e) {
                                    if (null == e.userStatus) return w.a.UNENROLLED;
                                    if (null != e.userStatus.claimedAt) return w.a.CLAIMED;
                                    if (null != e.userStatus.completedAt) return w.a.COMPLETED_100;
                                    let t = (0, m.il)(e),
                                        n = t.progressSeconds,
                                        o = t.targetSeconds;
                                    return n / o >= 1 ? w.a.COMPLETED_100 : n / o >= 0.75 ? w.a.COMPLETED_75 : n / o >= 0.5 ? w.a.COMPLETED_50 : n / o >= 0.25 ? w.a.COMPLETED_25 : w.a.ENROLLED;
                                })(e)
                            ),
                                K(e);
                    },
                    quest: ee
                })
            }),
            (0, o.jsx)(d.Heading, {
                variant: 'heading-md/semibold',
                className: R.subheading,
                children: 'Task Config'
            }),
            (0, o.jsx)('div', {
                className: R.fields,
                children: (0, o.jsx)(y.Z, {
                    taskDuration: ed,
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
            (0, o.jsx)(d.Heading, {
                variant: 'heading-md/semibold',
                className: R.subheading,
                children: 'Messages'
            }),
            (0, o.jsxs)('div', {
                className: R.fields,
                children: [
                    (0, o.jsx)(N.Z, {
                        title: 'Quest Name',
                        assetKey: 'questName',
                        onMessageChange: es,
                        initialValue: F.config.messages.questName
                    }),
                    (0, o.jsx)(N.Z, {
                        title: 'Game Title',
                        assetKey: 'gameTitle',
                        onMessageChange: es,
                        initialValue: F.config.messages.gameTitle
                    }),
                    (0, o.jsx)(N.Z, {
                        title: 'Game Publisher',
                        assetKey: 'gamePublisher',
                        onMessageChange: es,
                        initialValue: F.config.messages.gamePublisher
                    }),
                    eu &&
                        (0, o.jsxs)(o.Fragment, {
                            children: [
                                (0, o.jsx)(N.Z, {
                                    title: 'Video Title',
                                    assetKey: 'videoTitle',
                                    onMessageChange: ea,
                                    initialValue: null === (e = F.config.videoMetadata) || void 0 === e ? void 0 : e.messages.videoTitle
                                }),
                                (0, o.jsx)(N.Z, {
                                    title: 'End CTA Title',
                                    assetKey: 'videoEndCtaTitle',
                                    onMessageChange: ea,
                                    initialValue: null === (t = F.config.videoMetadata) || void 0 === t ? void 0 : t.messages.videoEndCtaTitle
                                }),
                                (0, o.jsx)(N.Z, {
                                    title: 'End CTA Subtitle',
                                    assetKey: 'videoEndCtaSubtitle',
                                    onMessageChange: ea,
                                    initialValue: null === (i = F.config.videoMetadata) || void 0 === i ? void 0 : i.messages.videoEndCtaSubtitle
                                })
                            ]
                        })
                ]
            }),
            (0, o.jsx)(d.Heading, {
                variant: 'heading-md/semibold',
                className: R.subheading,
                children: 'Assets'
            }),
            (0, o.jsxs)('div', {
                className: R.fields,
                children: [
                    (0, o.jsx)(b.Z, {
                        title: 'Hero',
                        assetKey: 'hero',
                        onFileChange: eo,
                        filters: O,
                        initialValue: F.config.assets.hero
                    }),
                    (0, o.jsx)(b.Z, {
                        title: 'Hero Video (optional)',
                        assetKey: 'heroVideo',
                        onFileChange: eo,
                        filters: O,
                        initialValue: null !== (H = F.config.assets.heroVideo) && void 0 !== H ? H : void 0
                    }),
                    (0, o.jsx)(b.Z, {
                        title: 'Quest Bar Hero',
                        assetKey: 'questBarHero',
                        onFileChange: eo,
                        filters: O,
                        initialValue: F.config.assets.questBarHero
                    }),
                    (0, o.jsx)(b.Z, {
                        title: 'Quest Bar Hero Video (optional)',
                        assetKey: 'questBarHeroVideo',
                        onFileChange: eo,
                        filters: O,
                        initialValue: null !== (Q = F.config.assets.questBarHeroVideo) && void 0 !== Q ? Q : void 0
                    }),
                    (0, o.jsx)(b.Z, {
                        title: 'Game Tile',
                        assetKey: 'gameTile',
                        onFileChange: eo,
                        filters: [...k, 'svg'],
                        initialValue: F.config.assets.gameTile
                    }),
                    (0, o.jsx)(b.Z, {
                        title: 'Logotype',
                        assetKey: 'logotype',
                        onFileChange: eo,
                        filters: [...P, 'svg'],
                        initialValue: F.config.assets.logotype
                    }),
                    eu &&
                        (0, o.jsxs)(o.Fragment, {
                            children: [
                                (0, o.jsx)(b.Z, {
                                    title: 'Quest Video',
                                    assetKey: 'videoPlayerVideo',
                                    onFileChange: er,
                                    filters: O,
                                    initialValue: null === (l = F.config.videoMetadata) || void 0 === l ? void 0 : l.assets.videoPlayerVideo
                                }),
                                (0, o.jsx)(b.Z, {
                                    title: 'Quest Video (Low Resolution)',
                                    assetKey: 'videoPlayerVideoLowRes',
                                    onFileChange: er,
                                    filters: O,
                                    initialValue: null === (c = F.config.videoMetadata) || void 0 === c ? void 0 : c.assets.videoPlayerVideoLowRes
                                }),
                                (0, o.jsx)(b.Z, {
                                    title: 'Video Player Thumbnail (optional)',
                                    assetKey: 'videoPlayerThumbnail',
                                    onFileChange: er,
                                    filters: k,
                                    initialValue: null === (q = F.config.videoMetadata) || void 0 === q ? void 0 : null === (I = q.assets) || void 0 === I ? void 0 : I.videoPlayerThumbnail
                                }),
                                (0, o.jsx)(b.Z, {
                                    title: 'Quest Bar Preview Video (optional)',
                                    assetKey: 'questBarPreviewVideo',
                                    onFileChange: er,
                                    filters: O,
                                    initialValue: null === (L = F.config.videoMetadata) || void 0 === L ? void 0 : L.assets.questBarPreviewVideo
                                }),
                                (0, o.jsx)(b.Z, {
                                    title: 'Quest Home Video (optional)',
                                    assetKey: 'questHomeVideo',
                                    onFileChange: er,
                                    filters: O,
                                    initialValue: null === (Z = F.config.videoMetadata) || void 0 === Z ? void 0 : Z.assets.questHomeVideo
                                })
                            ]
                        })
                ]
            }),
            en.map((e, t) =>
                (0, o.jsxs)(
                    'div',
                    {
                        children: [
                            (0, o.jsxs)(d.Heading, {
                                variant: 'heading-md/semibold',
                                className: R.subheading,
                                children: ['Reward #', t + 1]
                            }),
                            (0, o.jsxs)('div', {
                                className: R.fields,
                                children: [
                                    (0, o.jsx)(N.Z, {
                                        title: 'Name',
                                        assetKey: 'name',
                                        onMessageChange: (e, n) => ei(e, n, t),
                                        initialValue: e.messages.name
                                    }),
                                    (0, o.jsx)(N.Z, {
                                        title: 'Name With Article',
                                        assetKey: 'nameWithArticle',
                                        onMessageChange: (e, n) => ei(e, n, t),
                                        initialValue: e.messages.nameWithArticle
                                    }),
                                    (0, o.jsx)(b.Z, {
                                        title: 'Asset',
                                        assetKey: 'asset',
                                        onFileChange: (e, n) =>
                                            (function (e, t, n) {
                                                var o, r, a;
                                                if ('asset' === e)
                                                    K({
                                                        ...F,
                                                        config:
                                                            ((o = F.config),
                                                            (r = t),
                                                            (a = n),
                                                            (0, s.EQ)(o)
                                                                .with({ configVersion: 2 }, (e) => ({
                                                                    ...e,
                                                                    rewardsConfig: {
                                                                        ...e.rewardsConfig,
                                                                        rewards: e.rewardsConfig.rewards.map((e, t) =>
                                                                            t === a
                                                                                ? {
                                                                                      ...e,
                                                                                      asset: r,
                                                                                      skuId: ''
                                                                                  }
                                                                                : e
                                                                        )
                                                                    }
                                                                }))
                                                                .exhaustive())
                                                    });
                                            })(e, n, t),
                                        filters: O,
                                        initialValue: e.asset
                                    }),
                                    (0, o.jsxs)(d.FormItem, {
                                        children: [
                                            (0, o.jsx)(d.FormTitle, { children: 'Claim Modal' }),
                                            (0, o.jsx)(d.Button, {
                                                color: d.ButtonColors.BRAND,
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
            (0, o.jsx)(d.Heading, {
                variant: 'heading-md/semibold',
                className: R.subheading,
                children: 'Colors & Quest States'
            }),
            (0, o.jsxs)('div', {
                className: R.fields,
                children: [
                    (0, o.jsxs)('div', {
                        className: R.fields,
                        style: { marginBottom: 0 },
                        children: [
                            (0, o.jsx)(E.Z, {
                                title: 'Primary',
                                colorKey: 'primary',
                                onChange: el,
                                value: F.config.colors.primary
                            }),
                            (0, o.jsx)(E.Z, {
                                title: 'Secondary',
                                colorKey: 'secondary',
                                onChange: el,
                                value: F.config.colors.secondary
                            })
                        ]
                    }),
                    (0, o.jsx)('div', {
                        className: R.fields,
                        children: (0, o.jsx)(A.Z, {})
                    }),
                    (0, o.jsx)(w.Z, {
                        onChange: function (e) {
                            switch ((Y(e), e)) {
                                case w.a.UNENROLLED:
                                    K({
                                        ...F,
                                        userStatus: null
                                    });
                                    break;
                                case w.a.ENROLLED:
                                    K({
                                        ...F,
                                        userStatus: M({ enrolledAt: new Date().toISOString() })
                                    });
                                    break;
                                case w.a.COMPLETED_25:
                                    K({
                                        ...F,
                                        userStatus: M({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.25 * ed
                                        })
                                    });
                                    break;
                                case w.a.COMPLETED_50:
                                    K({
                                        ...F,
                                        userStatus: M({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.5 * ed
                                        })
                                    });
                                    break;
                                case w.a.COMPLETED_75:
                                    K({
                                        ...F,
                                        userStatus: M({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.75 * ed
                                        })
                                    });
                                    break;
                                case w.a.COMPLETED_100:
                                    K({
                                        ...F,
                                        userStatus: M({
                                            completedAt: new Date().toISOString(),
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: ed
                                        })
                                    });
                                    break;
                                case w.a.CLAIMED:
                                    K({
                                        ...F,
                                        userStatus: M({
                                            claimedAt: new Date().toISOString(),
                                            completedAt: new Date().toISOString(),
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: ed
                                        })
                                    });
                            }
                        },
                        value: z
                    })
                ]
            }),
            (0, o.jsx)(d.Heading, {
                variant: 'heading-lg/bold',
                className: R.heading,
                children: 'Component Previews'
            }),
            (0, o.jsxs)('div', {
                className: R.componentPreviews,
                children: [
                    (0, o.jsxs)(S.Z, {
                        withBorder: !0,
                        children: [
                            (0, o.jsx)(d.FormTitle, { children: 'Quest Bar' }),
                            (0, o.jsxs)('div', {
                                className: R.questBarPreviewWrapper,
                                children: [
                                    (null === (V = F.userStatus) || void 0 === V ? void 0 : V.claimedAt) != null &&
                                        (0, o.jsx)(d.Text, {
                                            color: 'text-secondary',
                                            variant: 'text-sm/normal',
                                            children: 'The Quest Bar is hidden when the user has claimed the reward.'
                                        }),
                                    (0, o.jsx)('div', {
                                        className: R.questBarPreview,
                                        children: (0, o.jsx)(f.p, {
                                            isPreview: !0,
                                            source: 'preview',
                                            questId: '0',
                                            children: (0, o.jsx)(g.Z, { children: (0, o.jsx)(x.P, { quest: F }) })
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, o.jsxs)(S.Z, {
                        withBorder: !0,
                        children: [
                            (0, o.jsx)(d.FormTitle, { children: 'Quest Home Card' }),
                            (0, o.jsx)(f.p, {
                                isPreview: !0,
                                source: 'preview',
                                questId: '0',
                                children: (0, o.jsx)(h.Z, {
                                    quest: F,
                                    className: R.questTile,
                                    questContent: p.jn.QUEST_HOME_DESKTOP,
                                    contentPosition: 0,
                                    rowIndex: 0
                                })
                            })
                        ]
                    }),
                    (0, o.jsxs)(S.Z, {
                        withBorder: !0,
                        children: [
                            (0, o.jsx)(d.FormTitle, { children: 'Channel Call Header' }),
                            (null === (W = F.userStatus) || void 0 === W ? void 0 : W.claimedAt) != null &&
                                (0, o.jsx)(d.Text, {
                                    color: 'text-secondary',
                                    variant: 'text-sm/normal',
                                    children: 'The Quest Channel Call Header is hidden when the user has claimed the reward.'
                                }),
                            (0, o.jsx)('div', {
                                className: R.questBarPreviewWrapper,
                                children: (0, o.jsx)(f.p, {
                                    isPreview: !0,
                                    source: 'preview',
                                    questId: '0',
                                    children: (0, o.jsx)('div', {
                                        className: R.questChannelCallHeaderPreview,
                                        children: (0, o.jsx)(C.Z, {
                                            channelId: '123',
                                            previewQuest: F,
                                            isParticipatingOverride: G
                                        })
                                    })
                                })
                            })
                        ]
                    }),
                    (0, o.jsx)('div', {
                        className: R.toggleSwitch,
                        children: (0, o.jsx)(d.FormItem, {
                            children: (0, o.jsx)(d.FormSwitch, {
                                value: G,
                                onChange: function (e) {
                                    X(e);
                                },
                                hideBorder: !0,
                                children: 'Is Participating:'
                            })
                        })
                    }),
                    (0, o.jsxs)(S.Z, {
                        withBorder: !0,
                        children: [
                            (0, o.jsx)(d.FormTitle, { children: 'Quest Card Embed' }),
                            J
                                ? (0, o.jsx)(j.o, {})
                                : (0, o.jsx)(
                                      v.Z,
                                      {
                                          quest: F,
                                          location: p.jn.QUESTS_EMBED
                                      },
                                      F.id
                                  )
                        ]
                    }),
                    (0, o.jsx)('div', {
                        className: R.toggleSwitch,
                        children: (0, o.jsx)(d.FormItem, {
                            children: (0, o.jsx)(d.FormSwitch, {
                                value: J,
                                onChange: $,
                                hideBorder: !0,
                                children: 'Invalid Quests Embed:'
                            })
                        })
                    }),
                    eu &&
                        (0, o.jsxs)(S.Z, {
                            withBorder: !0,
                            allowClicks: !0,
                            children: [
                                (0, o.jsx)(d.FormTitle, { children: 'Video Player' }),
                                (0, o.jsx)(d.Button, {
                                    onClick: () => {
                                        (0, d.openModalLazy)(async () => {
                                            let { default: e } = await Promise.all([n.e('30816'), n.e('32249'), n.e('34738')]).then(n.bind(n, 536687));
                                            return (t) => {
                                                var n;
                                                return (0, o.jsx)(e, {
                                                    ...t,
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
    });
}
class V extends r.Component {
    componentDidCatch(e) {
        this.setState({ error: e });
    }
    render() {
        let { error: e, renderKey: t } = this.state;
        return null != e
            ? (0, o.jsxs)('div', {
                  className: R.errorBoundary,
                  children: [
                      (0, o.jsx)(d.CircleWarningIcon, { className: R.errorBoundaryIcon }),
                      (0, o.jsx)(d.Heading, {
                          variant: 'heading-lg/semibold',
                          children: 'Something broke in the Quest preview tool :('
                      }),
                      (0, o.jsx)(d.Button, {
                          color: d.ButtonColors.PRIMARY,
                          onClick: this.handleResetState,
                          children: 'Reset'
                      }),
                      null != e.message &&
                          (0, o.jsx)(d.Card, {
                              className: R.errorMessageWrapper,
                              children: (0, o.jsx)('code', {
                                  className: R.errorMessage,
                                  children: e.message
                              })
                          })
                  ]
              })
            : (0, o.jsx)(Z, {}, t);
    }
    constructor(...e) {
        super(...e),
            I(this, 'state', {
                error: null,
                renderKey: 0
            }),
            I(this, 'handleResetState', () => {
                this.setState((e) => ({
                    error: null,
                    renderKey: e.renderKey + 1
                }));
            });
    }
}
t.Z = V;
