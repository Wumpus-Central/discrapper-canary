n.d(t, { Z: () => ee }), n(388685), n(953529), n(314940);
var r = n(255367),
    s = n(73800),
    o = n(120356),
    a = n.n(o),
    i = n(524979),
    l = n(278074),
    c = n(754700),
    d = n(442837),
    u = n(692547),
    p = n(780384),
    m = n(481060),
    f = n(410030),
    g = n(70097),
    x = n(617136),
    h = n(272008),
    b = n(113434),
    j = n(569984),
    v = n(497505),
    _ = n(918701),
    y = n(184299),
    O = n(192023),
    C = n(467628),
    w = n(373370),
    S = n(475595),
    P = n(720293),
    E = n(566078),
    T = n(65443),
    N = n(644646),
    A = n(78826),
    k = n(670638),
    R = n(341907),
    B = n(693900),
    q = n(164495),
    I = n(759853),
    D = n(205511),
    L = n(710235),
    M = n(694802),
    V = n(95985),
    W = n(50476),
    Z = n(46140),
    Q = n(743294),
    H = n(388032),
    U = n(921183);
function z(e) {
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
function F(e, t) {
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
function X(e) {
    var t, n;
    let { quest: o, onClick: i, reducedMotion: l, isExpanded: d } = e,
        [p, f] = s.useState(!1),
        x = s.useRef(null),
        h = (0, S.fh)(o, S.eC.QUEST_BAR_HERO_VIDEO),
        b = (0, P.z0)(o, c.X.WATCH_VIDEO, P.n1.VIDEO, P.O.THUMBNAIL),
        j = (0, y.km)((e) => e.getVideoProgressState);
    s.useEffect(() => {
        null != x.current && (d && (!l || p) ? ((x.current.currentTime = 0), x.current.play()) : x.current.pause());
    }, [x, p, l, d]);
    let v = j(o.id),
        _ = (null == (t = o.userStatus) ? void 0 : t.completedAt) != null && v === y.iw.COMPLETED,
        O = !_ && (!l || p);
    return (0, r.jsxs)(m.P3F, {
        className: U.videoQuestPreviewCont,
        onClick: i,
        onMouseEnter: () => {
            l && !p && f(!0);
        },
        onMouseLeave: () => {
            l && p && f(!1);
        },
        children: [
            null != b &&
                (0, r.jsx)('img', {
                    alt: '',
                    src: b.url,
                    className: U.assetBodyVideoPreviewMedia
                }),
            null != h
                ? (0, r.jsx)(g.Z, {
                      ref: x,
                      autoPlay: !1,
                      poster: null == b ? void 0 : b.url,
                      loop: !0,
                      muted: !0,
                      playsInline: !0,
                      className: a()(U.assetBodyVideoPreviewVideo, { [U.assetBodyVideoPreviewVisible]: O }),
                      controls: !1,
                      children: (0, r.jsx)('source', {
                          src: h.url,
                          type: null != (n = h.mimetype) ? n : void 0
                      })
                  })
                : null,
            (0, r.jsx)('div', {
                className: U.previewPlayButtonCont,
                children: _
                    ? (0, r.jsx)(m.Oe7, {
                          color: u.Z.colors.WHITE,
                          className: U.previewPlayButton
                      })
                    : (0, r.jsx)(m.o1U, {
                          color: u.Z.colors.WHITE,
                          className: U.previewPlayButton
                      })
            })
        ]
    });
}
function K(e) {
    let { quest: t } = e;
    return (0, r.jsx)(N.Z, {
        className: a()(U.rewardTile, U.hiddenRewardTile),
        learnMoreStyle: 'text',
        quest: t,
        questContent: v.jn.QUEST_BAR_V2,
        location: Z.dr.QUESTS_BAR
    });
}
function Y(e) {
    let { quest: t, taskDetails: n } = e,
        o = s.useMemo(() => E.r.build(t.config), [t.config]);
    return (0, r.jsxs)('ul', {
        children: [
            (0, r.jsx)(m.Text, {
                className: U.description,
                tag: 'li',
                variant: 'text-xs/normal',
                children: (0, w.DD)({
                    quest: t,
                    location: Z.dr.QUESTS_BAR,
                    questContent: v.jn.QUEST_BAR_V2,
                    taskDetails: n
                })
            }),
            (0, r.jsx)(m.Text, {
                className: U.description,
                tag: 'li',
                variant: 'text-xs/normal',
                children: H.intl.formatToPlainString(H.t['W8/b3d'], { rewardName: o.defaultRewardName })
            })
        ]
    });
}
function G(e) {
    return (0, r.jsx)(m.Text, {
        className: U.description,
        variant: 'text-xs/normal',
        children: (0, w.DD)({
            quest: e.quest,
            location: Z.dr.QUESTS_BAR,
            questContent: v.jn.QUEST_BAR_V2,
            taskDetails: e.taskDetails
        })
    });
}
function J(e) {
    let { quest: t, taskDetails: n, expansionSpring: o, isInteractable: l, reducedMotion: c, containerRef: u, isExpanded: x, onAcceptQuest: h } = e,
        b = (0, d.e7)([j.Z], () => j.Z.isEnrolling(t.id), [t]),
        v = s.useMemo(() => (0, S.fh)(t, S.eC.QUEST_BAR_HERO), [t]),
        y = s.useRef(null);
    s.useEffect(() => {
        null == y.current || c || (x ? ((y.current.currentTime = 0), y.current.play()) : y.current.pause());
    }, [c, x]);
    let P = (0, C.j)({ location: Z.dr.QUESTS_BAR }),
        E = (0, _.Kr)(t.config),
        N = (0, w.mK)(t.config),
        k = (0, w.CR)({
            quest: t,
            location: Z.dr.QUESTS_BAR
        }),
        R = (0, O.h)({
            location: Z.dr.QUESTS_BAR,
            questConfig: t.config
        }),
        B = s.useMemo(() => (0, S.fh)(t, S.eC.HERO_IMAGE), [t]),
        q = s.useMemo(() => (null == B ? {} : { backgroundImage: 'url('.concat(B.url, ')') }), [B]),
        I = (0, f.ZP)(),
        D = (0, p.wj)(I);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', {
                children: (0, r.jsxs)('div', {
                    className: a()(U.questPromoContent, { [U.questPromoContentWithCopySimplification]: P }),
                    ref: u,
                    children: [
                        (0, r.jsxs)('div', {
                            className: U.details,
                            children: [
                                (0, r.jsx)(K, { quest: t }),
                                (0, r.jsx)(m.X6q, {
                                    className: U.title,
                                    color: 'header-primary',
                                    variant: 'heading-md/medium',
                                    children: H.intl.format(H.t.EQa7oq, { questName: t.config.messages.questName })
                                }),
                                P
                                    ? (0, r.jsx)(Y, {
                                          quest: t,
                                          taskDetails: n
                                      })
                                    : (0, r.jsx)(G, {
                                          quest: t,
                                          taskDetails: n
                                      })
                            ]
                        }),
                        (0, r.jsx)(m.ua7, {
                            'aria-label': ''.concat(H.intl.formatToPlainString(H.t.coKAb2, { rewardsDuration: E })).concat(null != N ? ' \u2022 '.concat(N) : ''),
                            text:
                                null != E &&
                                P &&
                                (0, r.jsx)(T.Z, {
                                    quest: t,
                                    orientation: 'stack',
                                    withPremiumHighlight: !1
                                }),
                            shouldShow: null != E && P,
                            children: (e) =>
                                (0, r.jsx)(
                                    m.zxk,
                                    F(z({}, e), {
                                        wrapperClassName: U.cta,
                                        color: m.zxk.Colors.BRAND,
                                        fullWidth: !0,
                                        onClick: l ? h : void 0,
                                        size: m.zxk.Sizes.SMALL,
                                        submitting: b,
                                        children: k
                                    })
                                )
                        })
                    ]
                })
            }),
            R &&
                null != B &&
                (0, r.jsx)(i.animated.div, {
                    className: U.contentCollapsedBackgroundWrapper,
                    style: {
                        opacity: o.to([0, 1], [1, 0])
                    },
                    children: (0, r.jsx)('div', {
                        className: U.contentCollapsedBackground,
                        style: q
                    })
                }),
            (0, r.jsxs)(i.animated.div, {
                className: U.heroAssetWrapper,
                style: {
                    backdropFilter: o.to([0, 1], [5, 0]).to((e) => 'blur('.concat(e, 'px)')),
                    filter: o.to([0, 1], [0.8, 1]).to((e) => 'brightness('.concat(e, ')'))
                },
                children: [
                    !R &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(i.animated.div, {
                                    className: U.heroAssetDarken,
                                    style: {
                                        opacity: o.to([0, 1], [1, 0])
                                    }
                                }),
                                (0, r.jsx)(i.animated.div, {
                                    className: U.heroAssetTint,
                                    style: {
                                        backgroundColor: t.config.colors.primary,
                                        opacity: o.to([0, 1], [1, 0])
                                    }
                                })
                            ]
                        }),
                    v.isAnimated
                        ? (0, r.jsx)(A.Fl, {
                              id: 'QuestBarV2ContentExpanded_heroAnimated',
                              children: (e) => {
                                  var t;
                                  return (
                                      null != e.current && (y.current = e.current),
                                      (0, r.jsx)(g.Z, {
                                          ref: e,
                                          autoPlay: !0,
                                          loop: !0,
                                          muted: !0,
                                          playsInline: !0,
                                          className: U.heroAsset,
                                          controls: !1,
                                          children: (0, r.jsx)('source', {
                                              src: v.url,
                                              type: null != (t = v.mimetype) ? t : void 0
                                          })
                                      })
                                  );
                              }
                          })
                        : (0, r.jsx)(A.Fl, {
                              id: 'QuestBarV2ContentExpanded_heroStatic',
                              children: (e) =>
                                  (0, r.jsx)('img', {
                                      ref: e,
                                      alt: '',
                                      className: U.heroAsset,
                                      src: v.url
                                  })
                          }),
                    (0, r.jsx)('div', { className: a()(U.legibilityGradient, { [U.legibilityGradientDark]: D }) })
                ]
            })
        ]
    });
}
function $(e) {
    var t;
    let { quest: n, taskDetails: o, expansionSpring: c, overlayRef: d, isExpanded: u, reducedMotion: p, containerRef: f, onCtxMenuOpen: g, onCtxMenuClose: x, onCtxMenuSelect: h } = e,
        j = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null,
        y = o.percentComplete > 0,
        O = (0, b.z)(n),
        [w, S, P] = (0, b.me)(n, o),
        E = s.useRef(null),
        T = (0, b.B6)(n.config.expiresAt),
        N = (0, b._s)({ quest: n }),
        A = (0, _.q8)(n),
        K = (0, b.Jf)(n),
        Y = s.useCallback(() => {
            (0, R.openVideoQuestModal)(n);
        }, [n]),
        G = (0, C.j)({ location: Z.dr.QUESTS_BAR }),
        J = null != K ? K.percentComplete : o.percentComplete;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i.animated.div, {
                className: a()(U.postEnrollmentBackground, U.postEnrollmentBackgroundCollapsed),
                style: {
                    backgroundImage: 'linear-gradient(90deg, '.concat(Q.aY, ', ').concat(Q.v6, ')'),
                    opacity: c.to({
                        range: [0, 1],
                        output: [1, 0]
                    })
                }
            }),
            (0, r.jsxs)('div', {
                className: U.questAcceptedContent,
                ref: f,
                children: [
                    (0, r.jsxs)('div', {
                        className: U.questAcceptedHeader,
                        children: [
                            (0, r.jsx)(m.Text, {
                                variant: 'text-xxs/medium',
                                className: a()(U.flex, U.headerText),
                                children: H.intl.format(H.t['pX+fmp'], { expirationDate: T })
                            }),
                            (0, r.jsx)(k.r, {
                                onOpen: g,
                                onClose: x,
                                onSelect: h,
                                questContent: v.jn.QUEST_BAR_V2,
                                quest: n,
                                shouldShowDisclosure: !1,
                                showShareLink: !0,
                                children: (e) =>
                                    (0, r.jsx)(
                                        m.P3F,
                                        F(z({}, e), {
                                            className: U.submenuWrapper,
                                            'aria-label': H.intl.string(H.t.DEoVWV),
                                            children: (0, r.jsx)(m.xhG, {
                                                size: 'md',
                                                color: 'currentColor',
                                                className: a()(U.submenuIcon, U.interactiveNormal)
                                            })
                                        })
                                    )
                            })
                        ]
                    }),
                    (0, r.jsx)('div', { className: U.divider }),
                    (0, r.jsx)(I.Z, {
                        expansionSpring: c,
                        overlayRef: d,
                        progressBarRef: E,
                        quest: n,
                        isExpanded: u
                    }),
                    (0, r.jsx)(V.Z, {
                        contentLocation: 'expanded',
                        quest: n,
                        progressBarRef: E,
                        isExpanded: !0,
                        percentComplete: J,
                        activeScreen: w
                    }),
                    (0, r.jsx)(B.n, {
                        children:
                            (!j || G) &&
                            !(0, _.Gd)(n) &&
                            (0, l.EQ)(w)
                                .with(v.LI.SELECT, () =>
                                    (0, r.jsx)(W.Z, {
                                        onConsole: () => P(Z.cd.CONSOLE),
                                        onDesktop: () => P(Z.cd.DESKTOP)
                                    })
                                )
                                .with(v.LI.DESKTOP, () =>
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            G &&
                                                (0, r.jsx)(L.Z, {
                                                    quest: n,
                                                    taskDetails: o
                                                }),
                                            (0, r.jsx)(M.Z, { quest: n })
                                        ]
                                    })
                                )
                                .with(v.LI.CONSOLE, () =>
                                    (0, r.jsx)(D.Z, {
                                        quest: n,
                                        taskDetails: o
                                    })
                                )
                                .exhaustive()
                    }),
                    (0, r.jsxs)(B.n, {
                        children: [
                            A &&
                                (0, r.jsx)(X, {
                                    isExpanded: u,
                                    quest: n,
                                    onClick: Y,
                                    reducedMotion: p
                                }),
                            (0, r.jsx)(q.yD, {
                                quest: n,
                                useReducedMotion: p,
                                isExpanded: u,
                                awaitingConsoleConnections: N,
                                hasMadeProgress: y,
                                isProgressing: O,
                                activeScreen: w,
                                showBackButton: w !== v.LI.SELECT && S.length > 1 && !y && !O,
                                onBack: () => P(null),
                                taskDetails: o
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: a()(U.postEnrollmentBackground, U.postEnrollmentBackgroundExpanded),
                style: { backgroundImage: 'linear-gradient(90deg, '.concat(Q.aY, ', ').concat(Q.v6, ')') }
            })
        ]
    });
}
let ee = s.forwardRef(function (e, t) {
    var n;
    let { children: o, className: l, collapsedHeight: c, isExpanded: d, isExpansionAnimationComplete: u, expansionSpring: p, onCtxMenuOpen: m, onCtxMenuClose: f, onCtxMenuSelect: g, overlayRef: j, quest: y, useReducedMotion: O, taskDetails: C } = e,
        w = (0, _.q8)(y),
        S = (0, _.Vl)(y),
        { launchInGameActivity: P } = (0, b.zB)(y),
        E = s.useCallback(() => {
            let e = y.config.features.includes(Z.S7.START_QUEST_CTA),
                t = e ? x.jZ.START_QUEST : x.jZ.ACCEPT_QUEST;
            (0, h.AH)(y.id, {
                questContent: v.jn.QUEST_BAR_V2,
                questContentCTA: t
            }),
                w && (0, R.openVideoQuestModal)(y),
                S && e && P();
        }, [y, w, S, P]),
        T = (null == (n = y.userStatus) ? void 0 : n.enrolledAt) != null,
        N = d && u;
    return (0, r.jsxs)(i.animated.div, {
        'aria-hidden': !N,
        className: a()(l, U.contentExpanded, {
            [U.contentInteractable]: N,
            [U.contentExpandedAccepted]: T
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
                    ? (0, r.jsx)($, {
                          quest: y,
                          taskDetails: C,
                          expansionSpring: p,
                          overlayRef: j,
                          isExpanded: d,
                          reducedMotion: O,
                          onCtxMenuOpen: m,
                          onCtxMenuClose: f,
                          onCtxMenuSelect: g,
                          containerRef: t
                      })
                    : (0, r.jsx)(J, {
                          quest: y,
                          taskDetails: C,
                          expansionSpring: p,
                          isInteractable: N,
                          reducedMotion: O,
                          containerRef: t,
                          isExpanded: d,
                          onAcceptQuest: E
                      })
            })
        ]
    });
});
