n.d(t, { Z: () => J }), n(388685), n(953529), n(314940);
var r = n(255367),
    s = n(73800),
    o = n(120356),
    a = n.n(o),
    i = n(524979),
    l = n(278074),
    c = n(754700),
    u = n(442837),
    d = n(692547),
    p = n(481060),
    m = n(70097),
    f = n(617136),
    g = n(272008),
    x = n(113434),
    h = n(569984),
    b = n(497505),
    j = n(918701),
    v = n(184299),
    _ = n(192023),
    y = n(467628),
    O = n(373370),
    C = n(475595),
    w = n(720293),
    S = n(566078),
    E = n(65443),
    P = n(644646),
    T = n(78826),
    N = n(670638),
    A = n(341907),
    R = n(693900),
    k = n(164495),
    B = n(759853),
    q = n(205511),
    I = n(710235),
    D = n(694802),
    L = n(95985),
    M = n(50476),
    V = n(46140),
    W = n(743294),
    Z = n(388032),
    Q = n(921183);
function H(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function U(e, t) {
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
function z(e) {
    var t, n;
    let { quest: o, onClick: i, reducedMotion: l, isExpanded: u } = e,
        [f, g] = s.useState(!1),
        x = s.useRef(null),
        h = (0, C.fh)(o, C.eC.QUEST_BAR_HERO_VIDEO),
        b = (0, w.z0)(o, c.X.WATCH_VIDEO, w.n1.VIDEO, w.O.THUMBNAIL),
        j = (0, v.km)((e) => e.getVideoProgressState);
    s.useEffect(() => {
        null != x.current && (u && (!l || f) ? ((x.current.currentTime = 0), x.current.play()) : x.current.pause());
    }, [x, f, l, u]);
    let _ = j(o.id),
        y = (null == (t = o.userStatus) ? void 0 : t.completedAt) != null && _ === v.iw.COMPLETED,
        O = !y && (!l || f);
    return (0, r.jsxs)(p.P3F, {
        className: Q.videoQuestPreviewCont,
        onClick: i,
        onMouseEnter: () => {
            l && !f && g(!0);
        },
        onMouseLeave: () => {
            l && f && g(!1);
        },
        children: [
            null != b &&
                (0, r.jsx)('img', {
                    alt: '',
                    src: b.url,
                    className: Q.assetBodyVideoPreviewMedia
                }),
            null != h
                ? (0, r.jsx)(m.Z, {
                      ref: x,
                      autoPlay: !1,
                      poster: null == b ? void 0 : b.url,
                      loop: !0,
                      muted: !0,
                      playsInline: !0,
                      className: a()(Q.assetBodyVideoPreviewVideo, { [Q.assetBodyVideoPreviewVisible]: O }),
                      controls: !1,
                      children: (0, r.jsx)('source', {
                          src: h.url,
                          type: null != (n = h.mimetype) ? n : void 0
                      })
                  })
                : null,
            (0, r.jsx)('div', {
                className: Q.previewPlayButtonCont,
                children: y
                    ? (0, r.jsx)(p.Oe7, {
                          color: d.Z.colors.WHITE,
                          className: Q.previewPlayButton
                      })
                    : (0, r.jsx)(p.o1U, {
                          color: d.Z.colors.WHITE,
                          className: Q.previewPlayButton
                      })
            })
        ]
    });
}
function F(e) {
    let { quest: t } = e;
    return (0, r.jsx)(P.Z, {
        className: a()(Q.rewardTile, Q.hiddenRewardTile),
        learnMoreStyle: 'text',
        quest: t,
        questContent: b.jn.QUEST_BAR_V2,
        location: V.dr.QUESTS_BAR
    });
}
function X(e) {
    let { quest: t, taskDetails: n } = e,
        o = s.useMemo(() => S.r.build(t.config), [t.config]);
    return (0, r.jsxs)('ul', {
        children: [
            (0, r.jsx)(p.Text, {
                className: Q.description,
                tag: 'li',
                variant: 'text-xs/normal',
                children: (0, O.DD)({
                    quest: t,
                    location: V.dr.QUESTS_BAR,
                    questContent: b.jn.QUEST_BAR_V2,
                    taskDetails: n
                })
            }),
            (0, r.jsx)(p.Text, {
                className: Q.description,
                tag: 'li',
                variant: 'text-xs/normal',
                children: Z.intl.formatToPlainString(Z.t['W8/b3d'], { rewardName: o.defaultRewardName })
            })
        ]
    });
}
function K(e) {
    return (0, r.jsx)(p.Text, {
        className: Q.description,
        variant: 'text-xs/normal',
        children: (0, O.DD)({
            quest: e.quest,
            location: V.dr.QUESTS_BAR,
            questContent: b.jn.QUEST_BAR_V2,
            taskDetails: e.taskDetails
        })
    });
}
function Y(e) {
    let { quest: t, taskDetails: n, expansionSpring: o, isInteractable: l, reducedMotion: c, containerRef: d, isExpanded: f, onAcceptQuest: g } = e,
        x = (0, u.e7)([h.Z], () => h.Z.isEnrolling(t.id), [t]),
        b = s.useMemo(() => (0, C.fh)(t, C.eC.QUEST_BAR_HERO), [t]),
        v = s.useRef(null);
    s.useEffect(() => {
        null == v.current || c || (f ? ((v.current.currentTime = 0), v.current.play()) : v.current.pause());
    }, [c, f]);
    let w = (0, y.j)({ location: V.dr.QUESTS_BAR }),
        S = (0, j.Kr)(t.config),
        P = (0, O.mK)(t.config),
        N = (0, O.CR)({
            quest: t,
            location: V.dr.QUESTS_BAR
        }),
        A = (0, _.h)({
            location: V.dr.QUESTS_BAR,
            questConfig: t.config
        }),
        R = s.useMemo(() => (0, C.fh)(t, C.eC.HERO_IMAGE), [t]),
        k = s.useMemo(() => (null == R ? {} : { backgroundImage: 'url('.concat(R.url, ')') }), [R]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', {
                children: (0, r.jsxs)('div', {
                    className: a()(Q.questPromoContent, { [Q.questPromoContentWithCopySimplification]: w }),
                    ref: d,
                    children: [
                        (0, r.jsxs)('div', {
                            className: Q.details,
                            children: [
                                (0, r.jsx)(F, { quest: t }),
                                (0, r.jsx)(p.X6q, {
                                    className: Q.title,
                                    color: 'header-primary',
                                    variant: 'heading-md/medium',
                                    children: Z.intl.format(Z.t.EQa7oq, { questName: t.config.messages.questName })
                                }),
                                w
                                    ? (0, r.jsx)(X, {
                                          quest: t,
                                          taskDetails: n
                                      })
                                    : (0, r.jsx)(K, {
                                          quest: t,
                                          taskDetails: n
                                      })
                            ]
                        }),
                        (0, r.jsx)(p.ua7, {
                            'aria-label': ''.concat(Z.intl.formatToPlainString(Z.t.coKAb2, { rewardsDuration: S })).concat(null != P ? ' \u2022 '.concat(P) : ''),
                            text:
                                null != S &&
                                w &&
                                (0, r.jsx)(E.Z, {
                                    quest: t,
                                    orientation: 'stack',
                                    withPremiumHighlight: !1
                                }),
                            shouldShow: null != S && w,
                            children: (e) =>
                                (0, r.jsx)(
                                    p.zxk,
                                    U(H({}, e), {
                                        wrapperClassName: Q.cta,
                                        color: p.zxk.Colors.BRAND,
                                        fullWidth: !0,
                                        onClick: l ? g : void 0,
                                        size: p.zxk.Sizes.SMALL,
                                        submitting: x,
                                        children: N
                                    })
                                )
                        })
                    ]
                })
            }),
            A &&
                null != R &&
                (0, r.jsx)(i.animated.div, {
                    className: Q.contentCollapsedBackgroundWrapper,
                    style: {
                        opacity: o.to([0, 1], [1, 0])
                    },
                    children: (0, r.jsx)('div', {
                        className: Q.contentCollapsedBackground,
                        style: k
                    })
                }),
            (0, r.jsxs)(i.animated.div, {
                className: Q.heroAssetWrapper,
                style: {
                    backdropFilter: o.to([0, 1], [5, 0]).to((e) => 'blur('.concat(e, 'px)')),
                    filter: o.to([0, 1], [0.8, 1]).to((e) => 'brightness('.concat(e, ')'))
                },
                children: [
                    !A &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(i.animated.div, {
                                    className: Q.heroAssetDarken,
                                    style: {
                                        opacity: o.to([0, 1], [1, 0])
                                    }
                                }),
                                (0, r.jsx)(i.animated.div, {
                                    className: Q.heroAssetTint,
                                    style: {
                                        backgroundColor: t.config.colors.primary,
                                        opacity: o.to([0, 1], [1, 0])
                                    }
                                })
                            ]
                        }),
                    b.isAnimated
                        ? (0, r.jsx)(T.Fl, {
                              id: 'QuestBarV2ContentExpanded_heroAnimated',
                              children: (e) => {
                                  var t;
                                  return (
                                      null != e.current && (v.current = e.current),
                                      (0, r.jsx)(m.Z, {
                                          ref: e,
                                          autoPlay: !0,
                                          loop: !0,
                                          muted: !0,
                                          playsInline: !0,
                                          className: Q.heroAsset,
                                          controls: !1,
                                          children: (0, r.jsx)('source', {
                                              src: b.url,
                                              type: null != (t = b.mimetype) ? t : void 0
                                          })
                                      })
                                  );
                              }
                          })
                        : (0, r.jsx)(T.Fl, {
                              id: 'QuestBarV2ContentExpanded_heroStatic',
                              children: (e) =>
                                  (0, r.jsx)('img', {
                                      ref: e,
                                      alt: '',
                                      className: Q.heroAsset,
                                      src: b.url
                                  })
                          }),
                    (0, r.jsx)(i.animated.div, {
                        className: Q.legibilityGradient,
                        style: {
                            opacity: o.to({
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
function G(e) {
    var t;
    let { quest: n, taskDetails: o, expansionSpring: c, overlayRef: u, isExpanded: d, reducedMotion: m, containerRef: f, onCtxMenuOpen: g, onCtxMenuClose: h, onCtxMenuSelect: v } = e,
        _ = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null,
        O = o.percentComplete > 0,
        C = (0, x.z)(n),
        [w, S, E] = (0, x.me)(n, o),
        P = s.useRef(null),
        T = (0, x.B6)(n.config.expiresAt),
        F = (0, x._s)({ quest: n }),
        X = (0, j.q8)(n),
        K = (0, x.Jf)(n),
        Y = s.useCallback(() => {
            (0, A.openVideoQuestModal)(n);
        }, [n]),
        G = (0, y.j)({ location: V.dr.QUESTS_BAR }),
        J = null != K ? K.percentComplete : o.percentComplete;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i.animated.div, {
                className: a()(Q.postEnrollmentBackground, Q.postEnrollmentBackgroundCollapsed),
                style: {
                    backgroundImage: 'linear-gradient(90deg, '.concat(W.aY, ', ').concat(W.v6, ')'),
                    opacity: c.to({
                        range: [0, 1],
                        output: [1, 0]
                    })
                }
            }),
            (0, r.jsxs)('div', {
                className: Q.questAcceptedContent,
                ref: f,
                children: [
                    (0, r.jsxs)('div', {
                        className: Q.questAcceptedHeader,
                        children: [
                            (0, r.jsx)(p.Text, {
                                variant: 'text-xxs/medium',
                                className: a()(Q.flex, Q.headerText),
                                children: Z.intl.format(Z.t['pX+fmp'], { expirationDate: T })
                            }),
                            (0, r.jsx)(N.r, {
                                onOpen: g,
                                onClose: h,
                                onSelect: v,
                                questContent: b.jn.QUEST_BAR_V2,
                                quest: n,
                                shouldShowDisclosure: !1,
                                showShareLink: !0,
                                children: (e) =>
                                    (0, r.jsx)(
                                        p.P3F,
                                        U(H({}, e), {
                                            className: Q.submenuWrapper,
                                            'aria-label': Z.intl.string(Z.t.DEoVWV),
                                            children: (0, r.jsx)(p.xhG, {
                                                size: 'md',
                                                color: 'currentColor',
                                                className: a()(Q.submenuIcon, Q.interactiveNormal)
                                            })
                                        })
                                    )
                            })
                        ]
                    }),
                    (0, r.jsx)('div', { className: Q.divider }),
                    (0, r.jsx)(B.Z, {
                        expansionSpring: c,
                        overlayRef: u,
                        progressBarRef: P,
                        quest: n,
                        isExpanded: d
                    }),
                    (0, r.jsx)(L.Z, {
                        contentLocation: 'expanded',
                        quest: n,
                        progressBarRef: P,
                        isExpanded: !0,
                        percentComplete: J,
                        activeScreen: w
                    }),
                    (0, r.jsx)(R.n, {
                        children:
                            (!_ || G) &&
                            !(0, j.Gd)(n) &&
                            (0, l.EQ)(w)
                                .with(b.LI.SELECT, () =>
                                    (0, r.jsx)(M.Z, {
                                        onConsole: () => E(V.cd.CONSOLE),
                                        onDesktop: () => E(V.cd.DESKTOP)
                                    })
                                )
                                .with(b.LI.DESKTOP, () =>
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            G &&
                                                (0, r.jsx)(I.Z, {
                                                    quest: n,
                                                    taskDetails: o
                                                }),
                                            (0, r.jsx)(D.Z, { quest: n })
                                        ]
                                    })
                                )
                                .with(b.LI.CONSOLE, () =>
                                    (0, r.jsx)(q.Z, {
                                        quest: n,
                                        taskDetails: o
                                    })
                                )
                                .exhaustive()
                    }),
                    (0, r.jsxs)(R.n, {
                        children: [
                            X &&
                                (0, r.jsx)(z, {
                                    isExpanded: d,
                                    quest: n,
                                    onClick: Y,
                                    reducedMotion: m
                                }),
                            (0, r.jsx)(k.yD, {
                                quest: n,
                                useReducedMotion: m,
                                isExpanded: d,
                                awaitingConsoleConnections: F,
                                hasMadeProgress: O,
                                isProgressing: C,
                                activeScreen: w,
                                showBackButton: w !== b.LI.SELECT && S.length > 1 && !O && !C,
                                onBack: () => E(null),
                                taskDetails: o
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: a()(Q.postEnrollmentBackground, Q.postEnrollmentBackgroundExpanded),
                style: { backgroundImage: 'linear-gradient(90deg, '.concat(W.aY, ', ').concat(W.v6, ')') }
            })
        ]
    });
}
let J = s.forwardRef(function (e, t) {
    var n;
    let { children: o, className: l, collapsedHeight: c, isExpanded: u, isExpansionAnimationComplete: d, expansionSpring: p, onCtxMenuOpen: m, onCtxMenuClose: h, onCtxMenuSelect: v, overlayRef: _, quest: y, useReducedMotion: O, taskDetails: C } = e,
        w = (0, j.q8)(y),
        S = (0, j.Vl)(y),
        { launchInGameActivity: E } = (0, x.zB)(y),
        P = s.useCallback(() => {
            let e = y.config.features.includes(V.S7.START_QUEST_CTA),
                t = e ? f.jZ.START_QUEST : f.jZ.ACCEPT_QUEST;
            (0, g.AH)(y.id, {
                questContent: b.jn.QUEST_BAR_V2,
                questContentCTA: t
            }),
                w && (0, A.openVideoQuestModal)(y),
                S && e && E();
        }, [y, w, S, E]),
        T = (null == (n = y.userStatus) ? void 0 : n.enrolledAt) != null,
        N = u && d;
    return (0, r.jsxs)(i.animated.div, {
        'aria-hidden': !N,
        className: a()(l, Q.contentExpanded, {
            [Q.contentInteractable]: N,
            [Q.contentExpandedAccepted]: T
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
            o,
            (0, r.jsx)(i.animated.div, {
                style: { opacity: 1 },
                children: T
                    ? (0, r.jsx)(G, {
                          quest: y,
                          taskDetails: C,
                          expansionSpring: p,
                          overlayRef: _,
                          isExpanded: u,
                          reducedMotion: O,
                          onCtxMenuOpen: m,
                          onCtxMenuClose: h,
                          onCtxMenuSelect: v,
                          containerRef: t
                      })
                    : (0, r.jsx)(Y, {
                          quest: y,
                          taskDetails: C,
                          expansionSpring: p,
                          isInteractable: N,
                          reducedMotion: O,
                          containerRef: t,
                          isExpanded: u,
                          onAcceptQuest: P
                      })
            })
        ]
    });
});
