n.d(t, { Z: () => X }), n(47120), n(627341);
var s = n(200651),
    r = n(192379),
    a = n(120356),
    o = n.n(a),
    i = n(642128),
    l = n(278074),
    c = n(442837),
    d = n(692547),
    u = n(481060),
    p = n(70097),
    m = n(617136),
    x = n(272008),
    h = n(113434),
    g = n(569984),
    f = n(497505),
    v = n(918701),
    _ = n(184299),
    C = n(467628),
    j = n(373370),
    b = n(475595),
    T = n(720293),
    E = n(566078),
    S = n(65443),
    N = n(644646),
    y = n(78826),
    w = n(64141),
    A = n(341907),
    B = n(693900),
    R = n(164495),
    P = n(759853),
    k = n(205511),
    q = n(710235),
    I = n(694802),
    O = n(95985),
    M = n(50476),
    D = n(46140),
    L = n(743294),
    Z = n(388032),
    W = n(748628);
function V(e) {
    var t;
    let { quest: n, onClick: a, reducedMotion: i } = e,
        [l, c] = r.useState(!1),
        m = r.useRef(null),
        x = (0, T.z)(T.i.QUEST_BAR_PREVIEW_VIDEO, n),
        h = (0, T.z)(T.i.VIDEO_PLAYER_THUMBNAIL, n),
        g = (0, _.km)((e) => e.getVideoProgressState);
    r.useEffect(() => {
        null != m.current && (i && l && (m.current.currentTime = 0), m.current.play());
    }, [m, l, i]);
    let f = g(n.id),
        v = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null && f === _.iw.COMPLETED,
        C = !v && (!i || l);
    return (0, s.jsxs)(u.P3F, {
        className: W.videoQuestPreviewCont,
        onClick: a,
        onMouseEnter: () => {
            i && !l && c(!0);
        },
        onMouseLeave: () => {
            i && l && c(!1);
        },
        children: [
            null != h &&
                (0, s.jsx)('img', {
                    alt: '',
                    src: h.url,
                    className: W.assetBodyVideoPreviewMedia
                }),
            null != x
                ? (0, s.jsx)(p.Z, {
                      ref: m,
                      autoPlay: !0,
                      poster: null == h ? void 0 : h.url,
                      loop: !0,
                      muted: !0,
                      playsInline: !0,
                      className: o()(W.assetBodyVideoPreviewVideo, { [W.assetBodyVideoPreviewVisible]: C }),
                      controls: !1,
                      children: (0, s.jsx)('source', {
                          src: x.url,
                          type: x.mimetype
                      })
                  })
                : null,
            (0, s.jsx)('div', {
                className: W.previewPlayButtonCont,
                children: v
                    ? (0, s.jsx)(u.Oe7, {
                          color: d.Z.colors.WHITE,
                          className: W.previewPlayButton
                      })
                    : (0, s.jsx)(u.o1U, {
                          color: d.Z.colors.WHITE,
                          className: W.previewPlayButton
                      })
            })
        ]
    });
}
function Q(e) {
    let { quest: t } = e;
    return (0, s.jsx)(N.Z, {
        className: o()(W.rewardTile, W.hiddenRewardTile),
        learnMoreStyle: 'text',
        quest: t,
        questContent: f.jn.QUEST_BAR_V2,
        location: D.dr.QUESTS_BAR
    });
}
function U(e) {
    let { quest: t, taskDetails: n } = e,
        a = r.useMemo(() => E.r.build(t.config), [t.config]);
    return (0, s.jsxs)('ul', {
        children: [
            (0, s.jsx)(u.Text, {
                className: W.description,
                tag: 'li',
                variant: 'text-xs/normal',
                children: (0, j.DD)({
                    quest: t,
                    location: D.dr.QUESTS_BAR,
                    questContent: f.jn.QUEST_BAR_V2,
                    taskDetails: n
                })
            }),
            (0, s.jsx)(u.Text, {
                className: W.description,
                tag: 'li',
                variant: 'text-xs/normal',
                children: Z.intl.formatToPlainString(Z.t['W8/b3d'], { rewardName: a.defaultReward.messages.name })
            })
        ]
    });
}
function H(e) {
    return (0, s.jsx)(u.Text, {
        className: W.description,
        variant: 'text-xs/normal',
        children: (0, j.DD)({
            quest: e.quest,
            location: D.dr.QUESTS_BAR,
            questContent: f.jn.QUEST_BAR_V2,
            taskDetails: e.taskDetails
        })
    });
}
function z(e) {
    let { quest: t, taskDetails: n, expansionSpring: a, isInteractable: l, reducedMotion: d, containerRef: m, isExpanded: x, onAcceptQuest: h } = e,
        f = (0, c.e7)([g.Z], () => g.Z.isEnrolling(t.id), [t]),
        _ = r.useMemo(() => (0, b.fh)(t, b.eC.QUEST_BAR_HERO), [t]),
        T = r.useRef(null);
    r.useEffect(() => {
        null != T.current && (d && x ? (T.current.pause(), (T.current.currentTime = 0)) : !d && x && T.current.play());
    }, [d, x]);
    let E = (0, C.j)({ location: D.dr.QUESTS_BAR }),
        N = (0, v.Kr)(t.config),
        w = (0, j.mK)(t.config),
        A = (0, j.CR)({
            quest: t,
            location: D.dr.QUESTS_BAR
        });
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)('div', {
                children: (0, s.jsxs)('div', {
                    className: o()(W.questPromoContent, { [W.questPromoContentWithCopySimplification]: E }),
                    ref: m,
                    children: [
                        (0, s.jsxs)('div', {
                            className: W.details,
                            children: [
                                (0, s.jsx)(Q, { quest: t }),
                                (0, s.jsx)(u.X6q, {
                                    className: W.title,
                                    color: 'header-primary',
                                    variant: 'heading-md/medium',
                                    children: Z.intl.format(Z.t.EQa7oq, { questName: t.config.messages.questName })
                                }),
                                E
                                    ? (0, s.jsx)(U, {
                                          quest: t,
                                          taskDetails: n
                                      })
                                    : (0, s.jsx)(H, {
                                          quest: t,
                                          taskDetails: n
                                      })
                            ]
                        }),
                        (0, s.jsx)(u.ua7, {
                            'aria-label': ''.concat(Z.intl.formatToPlainString(Z.t.coKAb2, { rewardsDuration: N })).concat(null != w ? ' \u2022 '.concat(w) : ''),
                            text:
                                null != N &&
                                E &&
                                (0, s.jsx)(S.Z, {
                                    quest: t,
                                    orientation: 'stack',
                                    withPremiumHighlight: !1
                                }),
                            shouldShow: null != N && E,
                            children: (e) =>
                                (0, s.jsx)(u.zxk, {
                                    ...e,
                                    wrapperClassName: W.cta,
                                    color: u.zxk.Colors.BRAND,
                                    fullWidth: !0,
                                    onClick: l ? h : void 0,
                                    size: u.zxk.Sizes.SMALL,
                                    submitting: f,
                                    children: A
                                })
                        })
                    ]
                })
            }),
            (0, s.jsxs)(i.animated.div, {
                className: W.heroAssetWrapper,
                style: {
                    backdropFilter: a.to([0, 1], [5, 0]).to((e) => 'blur('.concat(e, 'px)')),
                    filter: a.to([0, 1], [0.8, 1]).to((e) => 'brightness('.concat(e, ')'))
                },
                children: [
                    (0, s.jsx)(i.animated.div, {
                        className: W.heroAssetDarken,
                        style: {
                            opacity: a.to([0, 1], [1, 0])
                        }
                    }),
                    (0, s.jsx)(i.animated.div, {
                        className: W.heroAssetTint,
                        style: {
                            backgroundColor: t.config.colors.primary,
                            opacity: a.to([0, 1], [1, 0])
                        }
                    }),
                    _.isAnimated
                        ? (0, s.jsx)(y.Fl, {
                              id: 'QuestBarV2ContentExpanded_heroAnimated',
                              children: (e) => {
                                  var t;
                                  return (
                                      null != e.current && (T.current = e.current),
                                      (0, s.jsx)(p.Z, {
                                          ref: e,
                                          autoPlay: !d && x,
                                          loop: !0,
                                          muted: !0,
                                          playsInline: !0,
                                          className: W.heroAsset,
                                          controls: !1,
                                          children: (0, s.jsx)('source', {
                                              src: _.url,
                                              type: null !== (t = _.mimetype) && void 0 !== t ? t : void 0
                                          })
                                      })
                                  );
                              }
                          })
                        : (0, s.jsx)(y.Fl, {
                              id: 'QuestBarV2ContentExpanded_heroStatic',
                              children: (e) =>
                                  (0, s.jsx)('img', {
                                      ref: e,
                                      alt: '',
                                      className: W.heroAsset,
                                      src: _.url
                                  })
                          }),
                    (0, s.jsx)(i.animated.div, {
                        className: W.legibilityGradient,
                        style: {
                            opacity: a.to({
                                range: [0, 1],
                                output: [0, 1]
                            })
                        }
                    })
                ]
            })
        ]
    });
}
function F(e) {
    var t;
    let { quest: n, taskDetails: a, expansionSpring: c, overlayRef: d, isExpanded: p, reducedMotion: m, containerRef: x, onCtxMenuOpen: g, onCtxMenuClose: _, onCtxMenuSelect: j } = e,
        b = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        T = a.percentComplete > 0,
        E = (0, h.z)(n),
        [S, N, y] = (0, h.me)(n, a),
        Q = r.useRef(null),
        U = (0, h.B6)(n.config.expiresAt),
        H = (0, h._s)({ quest: n }),
        z = (0, v.q8)(n),
        F = r.useCallback(() => {
            (0, A.openVideoQuestModal)(n);
        }, [n]),
        X = (0, C.j)({ location: D.dr.QUESTS_BAR });
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(i.animated.div, {
                className: o()(W.postEnrollmentBackground, W.postEnrollmentBackgroundCollapsed),
                style: {
                    backgroundImage: 'linear-gradient(90deg, '.concat(L.aY, ', ').concat(L.v6, ')'),
                    opacity: c.to({
                        range: [0, 1],
                        output: [1, 0]
                    })
                }
            }),
            (0, s.jsxs)('div', {
                className: W.questAcceptedContent,
                ref: x,
                children: [
                    (0, s.jsxs)('div', {
                        className: W.questAcceptedHeader,
                        children: [
                            (0, s.jsx)(u.Text, {
                                variant: 'text-xxs/medium',
                                className: o()(W.flex, W.headerText),
                                children: Z.intl.format(Z.t['pX+fmp'], { expirationDate: U })
                            }),
                            (0, s.jsx)(w.r, {
                                onOpen: g,
                                onClose: _,
                                onSelect: j,
                                questContent: f.jn.QUEST_BAR_V2,
                                quest: n,
                                shouldShowDisclosure: !1,
                                showShareLink: !0,
                                children: (e) =>
                                    (0, s.jsx)(u.P3F, {
                                        ...e,
                                        className: W.submenuWrapper,
                                        'aria-label': Z.intl.string(Z.t.DEoVWV),
                                        children: (0, s.jsx)(u.xhG, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: o()(W.submenuIcon, W.interactiveNormal)
                                        })
                                    })
                            })
                        ]
                    }),
                    (0, s.jsx)('div', { className: W.divider }),
                    (0, s.jsx)(P.Z, {
                        expansionSpring: c,
                        overlayRef: d,
                        progressBarRef: Q,
                        quest: n,
                        isExpanded: p
                    }),
                    (0, s.jsx)(O.Z, {
                        contentLocation: 'expanded',
                        quest: n,
                        progressBarRef: Q,
                        isExpanded: !0,
                        taskDetails: a,
                        activeScreen: S
                    }),
                    (0, s.jsx)(B.n, {
                        children:
                            (!b || X) &&
                            !(0, v.Gd)(n) &&
                            (0, l.EQ)(S)
                                .with(f.LI.SELECT, () =>
                                    (0, s.jsx)(M.Z, {
                                        onConsole: () => y(D.cd.CONSOLE),
                                        onDesktop: () => y(D.cd.DESKTOP)
                                    })
                                )
                                .with(f.LI.DESKTOP, () =>
                                    (0, s.jsxs)(s.Fragment, {
                                        children: [
                                            X &&
                                                (0, s.jsx)(q.Z, {
                                                    quest: n,
                                                    taskDetails: a
                                                }),
                                            (0, s.jsx)(I.Z, { quest: n })
                                        ]
                                    })
                                )
                                .with(f.LI.CONSOLE, () =>
                                    (0, s.jsx)(k.Z, {
                                        quest: n,
                                        taskDetails: a
                                    })
                                )
                                .exhaustive()
                    }),
                    (0, s.jsxs)(B.n, {
                        children: [
                            z &&
                                (0, s.jsx)(V, {
                                    quest: n,
                                    onClick: F,
                                    reducedMotion: m
                                }),
                            (0, s.jsx)(R.yD, {
                                quest: n,
                                useReducedMotion: m,
                                isExpanded: p,
                                awaitingConsoleConnections: H,
                                hasMadeProgress: T,
                                isProgressing: E,
                                activeScreen: S,
                                showBackButton: S !== f.LI.SELECT && N.length > 1 && !T && !E,
                                onBack: () => y(null),
                                taskDetails: a
                            })
                        ]
                    })
                ]
            }),
            (0, s.jsx)('div', {
                className: o()(W.postEnrollmentBackground, W.postEnrollmentBackgroundExpanded),
                style: { backgroundImage: 'linear-gradient(90deg, '.concat(L.aY, ', ').concat(L.v6, ')') }
            })
        ]
    });
}
let X = r.forwardRef(function (e, t) {
    var n;
    let { children: a, className: l, collapsedHeight: c, isExpanded: d, isExpansionAnimationComplete: u, expansionSpring: p, onCtxMenuOpen: h, onCtxMenuClose: g, onCtxMenuSelect: _, overlayRef: C, quest: j, useReducedMotion: b, taskDetails: T } = e,
        E = (0, v.q8)(j),
        S = r.useCallback(() => {
            (0, x.AH)(j.id, {
                questContent: f.jn.QUEST_BAR_V2,
                questContentCTA: m.jZ.ACCEPT_QUEST
            }),
                E && (0, A.openVideoQuestModal)(j);
        }, [j, E]),
        N = (null === (n = j.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null,
        y = d && u;
    return (0, s.jsxs)(i.animated.div, {
        'aria-hidden': !y,
        className: o()(l, W.contentExpanded, {
            [W.contentInteractable]: y,
            [W.contentExpandedAccepted]: N
        }),
        style: {
            transform: (0, i.to)(
                [
                    p.to({
                        range: [0, 1],
                        output: [0, -100]
                    }),
                    p.to({
                        range: [0, 1],
                        output: [0, c]
                    })
                ],
                (e, t) => 'translateY(calc('.concat(e, '% + ').concat(t, 'px))')
            )
        },
        children: [
            a,
            (0, s.jsx)(i.animated.div, {
                style: { opacity: 1 },
                children: N
                    ? (0, s.jsx)(F, {
                          quest: j,
                          taskDetails: T,
                          expansionSpring: p,
                          overlayRef: C,
                          isExpanded: d,
                          reducedMotion: b,
                          onCtxMenuOpen: h,
                          onCtxMenuClose: g,
                          onCtxMenuSelect: _,
                          containerRef: t
                      })
                    : (0, s.jsx)(z, {
                          quest: j,
                          taskDetails: T,
                          expansionSpring: p,
                          isInteractable: y,
                          reducedMotion: b,
                          containerRef: t,
                          isExpanded: d,
                          onAcceptQuest: S
                      })
            })
        ]
    });
});
