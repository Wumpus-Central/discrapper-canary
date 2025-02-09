n.d(t, { Z: () => G }), n(47120), n(627341);
var r = n(200651),
    o = n(192379),
    s = n(120356),
    a = n.n(s),
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
    _ = n(918701),
    C = n(184299),
    v = n(467628),
    j = n(373370),
    b = n(475595),
    T = n(720293),
    E = n(566078),
    N = n(65443),
    S = n(644646),
    y = n(78826),
    A = n(670638),
    B = n(341907),
    R = n(693900),
    w = n(164495),
    q = n(759853),
    k = n(205511),
    P = n(710235),
    I = n(694802),
    O = n(95985),
    M = n(50476),
    W = n(46140),
    D = n(743294),
    L = n(388032),
    Q = n(476216);
function Z(e) {
    var t;
    let { quest: n, onClick: s, reducedMotion: i } = e,
        [l, c] = o.useState(!1),
        m = o.useRef(null),
        x = (0, T.z)(T.i.QUEST_BAR_PREVIEW_VIDEO, n),
        h = (0, T.z)(T.i.VIDEO_PLAYER_THUMBNAIL, n),
        g = (0, C.km)((e) => e.getVideoProgressState);
    o.useEffect(() => {
        null != m.current && (i && l && (m.current.currentTime = 0), m.current.play());
    }, [m, l, i]);
    let f = g(n.id),
        _ = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null && f === C.iw.COMPLETED,
        v = !_ && (!i || l);
    return (0, r.jsxs)(u.P3F, {
        className: Q.videoQuestPreviewCont,
        onClick: s,
        onMouseEnter: () => {
            i && !l && c(!0);
        },
        onMouseLeave: () => {
            i && l && c(!1);
        },
        children: [
            null != h &&
                (0, r.jsx)('img', {
                    alt: '',
                    src: h.url,
                    className: Q.assetBodyVideoPreviewMedia
                }),
            null != x
                ? (0, r.jsx)(p.Z, {
                      ref: m,
                      autoPlay: !0,
                      poster: null == h ? void 0 : h.url,
                      loop: !0,
                      muted: !0,
                      playsInline: !0,
                      className: a()(Q.assetBodyVideoPreviewVideo, { [Q.assetBodyVideoPreviewVisible]: v }),
                      controls: !1,
                      children: (0, r.jsx)('source', {
                          src: x.url,
                          type: x.mimetype
                      })
                  })
                : null,
            (0, r.jsx)('div', {
                className: Q.previewPlayButtonCont,
                children: _
                    ? (0, r.jsx)(u.Oe7, {
                          color: d.Z.colors.WHITE,
                          className: Q.previewPlayButton
                      })
                    : (0, r.jsx)(u.o1U, {
                          color: d.Z.colors.WHITE,
                          className: Q.previewPlayButton
                      })
            })
        ]
    });
}
function U(e) {
    let { quest: t } = e;
    return (0, r.jsx)(S.Z, {
        className: a()(Q.rewardTile, Q.hiddenRewardTile),
        learnMoreStyle: 'text',
        quest: t,
        questContent: f.jn.QUEST_BAR_V2,
        location: W.dr.QUESTS_BAR
    });
}
function V(e) {
    let { quest: t, taskDetails: n } = e,
        s = o.useMemo(() => E.r.build(t.config), [t.config]);
    return (0, r.jsxs)('ul', {
        children: [
            (0, r.jsx)(u.Text, {
                className: Q.description,
                tag: 'li',
                variant: 'text-xs/normal',
                children: (0, j.DD)({
                    quest: t,
                    location: W.dr.QUESTS_BAR,
                    questContent: f.jn.QUEST_BAR_V2,
                    taskDetails: n
                })
            }),
            (0, r.jsx)(u.Text, {
                className: Q.description,
                tag: 'li',
                variant: 'text-xs/normal',
                children: L.intl.formatToPlainString(L.t['W8/b3d'], { rewardName: s.defaultReward.messages.name })
            })
        ]
    });
}
function H(e) {
    return (0, r.jsx)(u.Text, {
        className: Q.description,
        variant: 'text-xs/normal',
        children: (0, j.DD)({
            quest: e.quest,
            location: W.dr.QUESTS_BAR,
            questContent: f.jn.QUEST_BAR_V2,
            taskDetails: e.taskDetails
        })
    });
}
function z(e) {
    let { quest: t, taskDetails: n, expansionSpring: s, isInteractable: l, reducedMotion: d, containerRef: m, isExpanded: x, onAcceptQuest: h } = e,
        f = (0, c.e7)([g.Z], () => g.Z.isEnrolling(t.id), [t]),
        C = o.useMemo(() => (0, b.fh)(t, b.eC.QUEST_BAR_HERO), [t]),
        T = o.useRef(null);
    o.useEffect(() => {
        null != T.current && (d && x ? (T.current.pause(), (T.current.currentTime = 0)) : !d && x && T.current.play());
    }, [d, x]);
    let E = (0, v.j)({ location: W.dr.QUESTS_BAR }),
        S = (0, _.Kr)(t.config),
        A = (0, j.mK)(t.config),
        B = (0, j.CR)({
            quest: t,
            location: W.dr.QUESTS_BAR
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', {
                children: (0, r.jsxs)('div', {
                    className: a()(Q.questPromoContent, { [Q.questPromoContentWithCopySimplification]: E }),
                    ref: m,
                    children: [
                        (0, r.jsxs)('div', {
                            className: Q.details,
                            children: [
                                (0, r.jsx)(U, { quest: t }),
                                (0, r.jsx)(u.X6q, {
                                    className: Q.title,
                                    color: 'header-primary',
                                    variant: 'heading-md/medium',
                                    children: L.intl.format(L.t.EQa7oq, { questName: t.config.messages.questName })
                                }),
                                E
                                    ? (0, r.jsx)(V, {
                                          quest: t,
                                          taskDetails: n
                                      })
                                    : (0, r.jsx)(H, {
                                          quest: t,
                                          taskDetails: n
                                      })
                            ]
                        }),
                        (0, r.jsx)(u.ua7, {
                            'aria-label': ''.concat(L.intl.formatToPlainString(L.t.coKAb2, { rewardsDuration: S })).concat(null != A ? ' \u2022 '.concat(A) : ''),
                            text:
                                null != S &&
                                E &&
                                (0, r.jsx)(N.Z, {
                                    quest: t,
                                    orientation: 'stack',
                                    withPremiumHighlight: !1
                                }),
                            shouldShow: null != S && E,
                            children: (e) =>
                                (0, r.jsx)(u.zxk, {
                                    ...e,
                                    wrapperClassName: Q.cta,
                                    color: u.zxk.Colors.BRAND,
                                    fullWidth: !0,
                                    onClick: l ? h : void 0,
                                    size: u.zxk.Sizes.SMALL,
                                    submitting: f,
                                    children: B
                                })
                        })
                    ]
                })
            }),
            (0, r.jsxs)(i.animated.div, {
                className: Q.heroAssetWrapper,
                style: {
                    backdropFilter: s.to([0, 1], [5, 0]).to((e) => 'blur('.concat(e, 'px)')),
                    filter: s.to([0, 1], [0.8, 1]).to((e) => 'brightness('.concat(e, ')'))
                },
                children: [
                    (0, r.jsx)(i.animated.div, {
                        className: Q.heroAssetDarken,
                        style: {
                            opacity: s.to([0, 1], [1, 0])
                        }
                    }),
                    (0, r.jsx)(i.animated.div, {
                        className: Q.heroAssetTint,
                        style: {
                            backgroundColor: t.config.colors.primary,
                            opacity: s.to([0, 1], [1, 0])
                        }
                    }),
                    C.isAnimated
                        ? (0, r.jsx)(y.Fl, {
                              id: 'QuestBarV2ContentExpanded_heroAnimated',
                              children: (e) => {
                                  var t;
                                  return (
                                      null != e.current && (T.current = e.current),
                                      (0, r.jsx)(p.Z, {
                                          ref: e,
                                          autoPlay: !d && x,
                                          loop: !0,
                                          muted: !0,
                                          playsInline: !0,
                                          className: Q.heroAsset,
                                          controls: !1,
                                          children: (0, r.jsx)('source', {
                                              src: C.url,
                                              type: null !== (t = C.mimetype) && void 0 !== t ? t : void 0
                                          })
                                      })
                                  );
                              }
                          })
                        : (0, r.jsx)(y.Fl, {
                              id: 'QuestBarV2ContentExpanded_heroStatic',
                              children: (e) =>
                                  (0, r.jsx)('img', {
                                      ref: e,
                                      alt: '',
                                      className: Q.heroAsset,
                                      src: C.url
                                  })
                          }),
                    (0, r.jsx)(i.animated.div, {
                        className: Q.legibilityGradient,
                        style: {
                            opacity: s.to({
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
    let { quest: n, taskDetails: s, expansionSpring: c, overlayRef: d, isExpanded: p, reducedMotion: m, containerRef: x, onCtxMenuOpen: g, onCtxMenuClose: C, onCtxMenuSelect: j } = e,
        b = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        T = s.percentComplete > 0,
        E = (0, h.z)(n),
        [N, S, y] = (0, h.me)(n, s),
        U = o.useRef(null),
        V = (0, h.B6)(n.config.expiresAt),
        H = (0, h._s)({ quest: n }),
        z = (0, _.q8)(n),
        F = o.useCallback(() => {
            (0, B.openVideoQuestModal)(n);
        }, [n]),
        G = (0, v.j)({ location: W.dr.QUESTS_BAR });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i.animated.div, {
                className: a()(Q.postEnrollmentBackground, Q.postEnrollmentBackgroundCollapsed),
                style: {
                    backgroundImage: 'linear-gradient(90deg, '.concat(D.aY, ', ').concat(D.v6, ')'),
                    opacity: c.to({
                        range: [0, 1],
                        output: [1, 0]
                    })
                }
            }),
            (0, r.jsxs)('div', {
                className: Q.questAcceptedContent,
                ref: x,
                children: [
                    (0, r.jsxs)('div', {
                        className: Q.questAcceptedHeader,
                        children: [
                            (0, r.jsx)(u.Text, {
                                variant: 'text-xxs/medium',
                                className: a()(Q.flex, Q.headerText),
                                children: L.intl.format(L.t['pX+fmp'], { expirationDate: V })
                            }),
                            (0, r.jsx)(A.r, {
                                onOpen: g,
                                onClose: C,
                                onSelect: j,
                                questContent: f.jn.QUEST_BAR_V2,
                                quest: n,
                                shouldShowDisclosure: !1,
                                showShareLink: !0,
                                children: (e) =>
                                    (0, r.jsx)(u.P3F, {
                                        ...e,
                                        className: Q.submenuWrapper,
                                        'aria-label': L.intl.string(L.t.DEoVWV),
                                        children: (0, r.jsx)(u.xhG, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: a()(Q.submenuIcon, Q.interactiveNormal)
                                        })
                                    })
                            })
                        ]
                    }),
                    (0, r.jsx)('div', { className: Q.divider }),
                    (0, r.jsx)(q.Z, {
                        expansionSpring: c,
                        overlayRef: d,
                        progressBarRef: U,
                        quest: n,
                        isExpanded: p
                    }),
                    (0, r.jsx)(O.Z, {
                        contentLocation: 'expanded',
                        quest: n,
                        progressBarRef: U,
                        isExpanded: !0,
                        taskDetails: s,
                        activeScreen: N
                    }),
                    (0, r.jsx)(R.n, {
                        children:
                            (!b || G) &&
                            !(0, _.Gd)(n) &&
                            (0, l.EQ)(N)
                                .with(f.LI.SELECT, () =>
                                    (0, r.jsx)(M.Z, {
                                        onConsole: () => y(W.cd.CONSOLE),
                                        onDesktop: () => y(W.cd.DESKTOP)
                                    })
                                )
                                .with(f.LI.DESKTOP, () =>
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            G &&
                                                (0, r.jsx)(P.Z, {
                                                    quest: n,
                                                    taskDetails: s
                                                }),
                                            (0, r.jsx)(I.Z, { quest: n })
                                        ]
                                    })
                                )
                                .with(f.LI.CONSOLE, () =>
                                    (0, r.jsx)(k.Z, {
                                        quest: n,
                                        taskDetails: s
                                    })
                                )
                                .exhaustive()
                    }),
                    (0, r.jsxs)(R.n, {
                        children: [
                            z &&
                                (0, r.jsx)(Z, {
                                    quest: n,
                                    onClick: F,
                                    reducedMotion: m
                                }),
                            (0, r.jsx)(w.yD, {
                                quest: n,
                                useReducedMotion: m,
                                isExpanded: p,
                                awaitingConsoleConnections: H,
                                hasMadeProgress: T,
                                isProgressing: E,
                                activeScreen: N,
                                showBackButton: N !== f.LI.SELECT && S.length > 1 && !T && !E,
                                onBack: () => y(null),
                                taskDetails: s
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: a()(Q.postEnrollmentBackground, Q.postEnrollmentBackgroundExpanded),
                style: { backgroundImage: 'linear-gradient(90deg, '.concat(D.aY, ', ').concat(D.v6, ')') }
            })
        ]
    });
}
let G = o.forwardRef(function (e, t) {
    var n;
    let { children: s, className: l, collapsedHeight: c, isExpanded: d, isExpansionAnimationComplete: u, expansionSpring: p, onCtxMenuOpen: h, onCtxMenuClose: g, onCtxMenuSelect: C, overlayRef: v, quest: j, useReducedMotion: b, taskDetails: T } = e,
        E = (0, _.q8)(j),
        N = o.useCallback(() => {
            (0, x.AH)(j.id, {
                questContent: f.jn.QUEST_BAR_V2,
                questContentCTA: m.jZ.ACCEPT_QUEST
            }),
                E && (0, B.openVideoQuestModal)(j);
        }, [j, E]),
        S = (null === (n = j.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null,
        y = d && u;
    return (0, r.jsxs)(i.animated.div, {
        'aria-hidden': !y,
        className: a()(l, Q.contentExpanded, {
            [Q.contentInteractable]: y,
            [Q.contentExpandedAccepted]: S
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
            s,
            (0, r.jsx)(i.animated.div, {
                style: { opacity: 1 },
                children: S
                    ? (0, r.jsx)(F, {
                          quest: j,
                          taskDetails: T,
                          expansionSpring: p,
                          overlayRef: v,
                          isExpanded: d,
                          reducedMotion: b,
                          onCtxMenuOpen: h,
                          onCtxMenuClose: g,
                          onCtxMenuSelect: C,
                          containerRef: t
                      })
                    : (0, r.jsx)(z, {
                          quest: j,
                          taskDetails: T,
                          expansionSpring: p,
                          isInteractable: y,
                          reducedMotion: b,
                          containerRef: t,
                          isExpanded: d,
                          onAcceptQuest: N
                      })
            })
        ]
    });
});
