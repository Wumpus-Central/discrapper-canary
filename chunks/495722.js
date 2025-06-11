n.d(t, { Z: () => J }), n(388685), n(953529), n(314940);
var r = n(255367),
    o = n(73800),
    s = n(120356),
    a = n.n(s),
    i = n(524979),
    l = n(278074),
    c = n(754700),
    d = n(442837),
    u = n(692547),
    p = n(481060),
    m = n(70097),
    f = n(617136),
    g = n(272008),
    x = n(113434),
    h = n(569984),
    b = n(497505),
    j = n(918701),
    v = n(184299),
    y = n(192023),
    _ = n(467628),
    C = n(373370),
    O = n(475595),
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
    M = n(95985),
    L = n(50476),
    V = n(46140),
    W = n(743294),
    Z = n(388032),
    Q = n(921183);
function U(e) {
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
function H(e, t) {
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
    let { quest: s, onClick: i, reducedMotion: l, isExpanded: d } = e,
        [f, g] = o.useState(!1),
        x = o.useRef(null),
        h = (0, O.fh)(s, O.eC.QUEST_BAR_HERO_VIDEO),
        b = (0, w.z0)(s, c.X.WATCH_VIDEO, w.n1.VIDEO, w.O.THUMBNAIL),
        j = (0, v.km)((e) => e.getVideoProgressState);
    o.useEffect(() => {
        null != x.current && (d && (!l || f) ? ((x.current.currentTime = 0), x.current.play()) : x.current.pause());
    }, [x, f, l, d]);
    let y = j(s.id),
        _ = (null == (t = s.userStatus) ? void 0 : t.completedAt) != null && y === v.iw.COMPLETED,
        C = !_ && (!l || f);
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
                      className: a()(Q.assetBodyVideoPreviewVideo, { [Q.assetBodyVideoPreviewVisible]: C }),
                      controls: !1,
                      children: (0, r.jsx)('source', {
                          src: h.url,
                          type: null != (n = h.mimetype) ? n : void 0
                      })
                  })
                : null,
            (0, r.jsx)('div', {
                className: Q.previewPlayButtonCont,
                children: _
                    ? (0, r.jsx)(p.Oe7, {
                          color: u.Z.colors.WHITE,
                          className: Q.previewPlayButton
                      })
                    : (0, r.jsx)(p.o1U, {
                          color: u.Z.colors.WHITE,
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
function K(e) {
    let { quest: t, taskDetails: n } = e,
        s = o.useMemo(() => S.r.build(t.config), [t.config]);
    return (0, r.jsxs)('ul', {
        children: [
            (0, r.jsx)(p.Text, {
                className: Q.description,
                tag: 'li',
                variant: 'text-xs/normal',
                children: (0, C.DD)({
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
                children: Z.intl.formatToPlainString(Z.t['W8/b3d'], { rewardName: s.defaultReward.messages.name })
            })
        ]
    });
}
function X(e) {
    return (0, r.jsx)(p.Text, {
        className: Q.description,
        variant: 'text-xs/normal',
        children: (0, C.DD)({
            quest: e.quest,
            location: V.dr.QUESTS_BAR,
            questContent: b.jn.QUEST_BAR_V2,
            taskDetails: e.taskDetails
        })
    });
}
function Y(e) {
    let { quest: t, taskDetails: n, expansionSpring: s, isInteractable: l, reducedMotion: c, containerRef: u, isExpanded: f, onAcceptQuest: g } = e,
        x = (0, d.e7)([h.Z], () => h.Z.isEnrolling(t.id), [t]),
        b = o.useMemo(() => (0, O.fh)(t, O.eC.QUEST_BAR_HERO), [t]),
        v = o.useRef(null);
    o.useEffect(() => {
        null == v.current || c || (f ? ((v.current.currentTime = 0), v.current.play()) : v.current.pause());
    }, [c, f]);
    let w = (0, _.j)({ location: V.dr.QUESTS_BAR }),
        S = (0, j.Kr)(t.config),
        P = (0, C.mK)(t.config),
        N = (0, C.CR)({
            quest: t,
            location: V.dr.QUESTS_BAR
        }),
        A = (0, y.h)({
            location: V.dr.QUESTS_BAR,
            questConfig: t.config
        }),
        R = o.useMemo(() => (0, O.fh)(t, O.eC.HERO_IMAGE), [t]),
        k = o.useMemo(() => (null == R ? {} : { backgroundImage: 'url('.concat(R.url, ')') }), [R]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', {
                children: (0, r.jsxs)('div', {
                    className: a()(Q.questPromoContent, { [Q.questPromoContentWithCopySimplification]: w }),
                    ref: u,
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
                                    ? (0, r.jsx)(K, {
                                          quest: t,
                                          taskDetails: n
                                      })
                                    : (0, r.jsx)(X, {
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
                                    H(U({}, e), {
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
                        opacity: s.to([0, 1], [1, 0])
                    },
                    children: (0, r.jsx)('div', {
                        className: Q.contentCollapsedBackground,
                        style: k
                    })
                }),
            (0, r.jsxs)(i.animated.div, {
                className: Q.heroAssetWrapper,
                style: {
                    backdropFilter: s.to([0, 1], [5, 0]).to((e) => 'blur('.concat(e, 'px)')),
                    filter: s.to([0, 1], [0.8, 1]).to((e) => 'brightness('.concat(e, ')'))
                },
                children: [
                    !A &&
                        (0, r.jsxs)(r.Fragment, {
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
function G(e) {
    var t;
    let { quest: n, taskDetails: s, expansionSpring: c, overlayRef: d, isExpanded: u, reducedMotion: m, containerRef: f, onCtxMenuOpen: g, onCtxMenuClose: h, onCtxMenuSelect: v } = e,
        y = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null,
        C = s.percentComplete > 0,
        O = (0, x.z)(n),
        [w, S, E] = (0, x.me)(n, s),
        P = o.useRef(null),
        T = (0, x.B6)(n.config.expiresAt),
        F = (0, x._s)({ quest: n }),
        K = (0, j.q8)(n),
        X = (0, x.Jf)(n),
        Y = o.useCallback(() => {
            (0, A.openVideoQuestModal)(n);
        }, [n]),
        G = (0, _.j)({ location: V.dr.QUESTS_BAR }),
        J = null != X ? X.percentComplete : s.percentComplete;
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
                                        H(U({}, e), {
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
                        overlayRef: d,
                        progressBarRef: P,
                        quest: n,
                        isExpanded: u
                    }),
                    (0, r.jsx)(M.Z, {
                        contentLocation: 'expanded',
                        quest: n,
                        progressBarRef: P,
                        isExpanded: !0,
                        percentComplete: J,
                        activeScreen: w
                    }),
                    (0, r.jsx)(R.n, {
                        children:
                            (!y || G) &&
                            !(0, j.Gd)(n) &&
                            (0, l.EQ)(w)
                                .with(b.LI.SELECT, () =>
                                    (0, r.jsx)(L.Z, {
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
                                                    taskDetails: s
                                                }),
                                            (0, r.jsx)(D.Z, { quest: n })
                                        ]
                                    })
                                )
                                .with(b.LI.CONSOLE, () =>
                                    (0, r.jsx)(q.Z, {
                                        quest: n,
                                        taskDetails: s
                                    })
                                )
                                .exhaustive()
                    }),
                    (0, r.jsxs)(R.n, {
                        children: [
                            K &&
                                (0, r.jsx)(z, {
                                    isExpanded: u,
                                    quest: n,
                                    onClick: Y,
                                    reducedMotion: m
                                }),
                            (0, r.jsx)(k.yD, {
                                quest: n,
                                useReducedMotion: m,
                                isExpanded: u,
                                awaitingConsoleConnections: F,
                                hasMadeProgress: C,
                                isProgressing: O,
                                activeScreen: w,
                                showBackButton: w !== b.LI.SELECT && S.length > 1 && !C && !O,
                                onBack: () => E(null),
                                taskDetails: s
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
let J = o.forwardRef(function (e, t) {
    var n;
    let { children: s, className: l, collapsedHeight: c, isExpanded: d, isExpansionAnimationComplete: u, expansionSpring: p, onCtxMenuOpen: m, onCtxMenuClose: h, onCtxMenuSelect: v, overlayRef: y, quest: _, useReducedMotion: C, taskDetails: O } = e,
        w = (0, j.q8)(_),
        S = (0, j.Vl)(_),
        { launchInGameActivity: E } = (0, x.zB)(_),
        P = o.useCallback(() => {
            let e = _.config.features.includes(V.S7.START_QUEST_CTA),
                t = e ? f.jZ.START_QUEST : f.jZ.ACCEPT_QUEST;
            (0, g.AH)(_.id, {
                questContent: b.jn.QUEST_BAR_V2,
                questContentCTA: t
            }),
                w && (0, A.openVideoQuestModal)(_),
                S && e && E();
        }, [_, w, S, E]),
        T = (null == (n = _.userStatus) ? void 0 : n.enrolledAt) != null,
        N = d && u;
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
            s,
            (0, r.jsx)(i.animated.div, {
                style: { opacity: 1 },
                children: T
                    ? (0, r.jsx)(G, {
                          quest: _,
                          taskDetails: O,
                          expansionSpring: p,
                          overlayRef: y,
                          isExpanded: d,
                          reducedMotion: C,
                          onCtxMenuOpen: m,
                          onCtxMenuClose: h,
                          onCtxMenuSelect: v,
                          containerRef: t
                      })
                    : (0, r.jsx)(Y, {
                          quest: _,
                          taskDetails: O,
                          expansionSpring: p,
                          isInteractable: N,
                          reducedMotion: C,
                          containerRef: t,
                          isExpanded: d,
                          onAcceptQuest: P
                      })
            })
        ]
    });
});
