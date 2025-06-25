n.d(t, { Z: () => ee }), n(388685), n(953529), n(314940);
var r = n(255367),
    s = n(73800),
    o = n(120356),
    a = n.n(o),
    i = n(695469),
    l = n(278074),
    c = n(754700),
    u = n(442837),
    d = n(692547),
    p = n(780384),
    m = n(481060),
    f = n(410030),
    g = n(70097),
    x = n(617136),
    h = n(272008),
    b = n(113434),
    j = n(569984),
    _ = n(497505),
    v = n(918701),
    y = n(184299),
    C = n(192023),
    O = n(467628),
    S = n(373370),
    E = n(475595),
    w = n(720293),
    T = n(566078),
    P = n(65443),
    N = n(644646),
    A = n(78826),
    R = n(670638),
    k = n(341907),
    B = n(693900),
    q = n(164495),
    I = n(759853),
    D = n(205511),
    Q = n(710235),
    L = n(694802),
    V = n(95985),
    M = n(50476),
    W = n(46140),
    Z = n(743294),
    U = n(388032),
    H = n(921183);
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
    let { quest: o, onClick: i, reducedMotion: l, isExpanded: u } = e,
        [p, f] = s.useState(!1),
        x = s.useRef(null),
        h = (0, E.fh)(o, E.eC.QUEST_BAR_HERO_VIDEO),
        b = (0, w.z0)(o, c.X.WATCH_VIDEO, w.n1.VIDEO, w.O.THUMBNAIL),
        j = (0, y.km)((e) => e.getVideoProgressState);
    s.useEffect(() => {
        null != x.current && (u && (!l || p) ? ((x.current.currentTime = 0), x.current.play()) : x.current.pause());
    }, [x, p, l, u]);
    let _ = j(o.id),
        v = (null == (t = o.userStatus) ? void 0 : t.completedAt) != null && _ === y.iw.COMPLETED,
        C = !v && (!l || p);
    return (0, r.jsxs)(m.P3F, {
        className: H.videoQuestPreviewCont,
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
                    className: H.assetBodyVideoPreviewMedia
                }),
            null != h
                ? (0, r.jsx)(g.Z, {
                      ref: x,
                      autoPlay: !1,
                      poster: null == b ? void 0 : b.url,
                      loop: !0,
                      muted: !0,
                      playsInline: !0,
                      className: a()(H.assetBodyVideoPreviewVideo, { [H.assetBodyVideoPreviewVisible]: C }),
                      controls: !1,
                      children: (0, r.jsx)('source', {
                          src: h.url,
                          type: null != (n = h.mimetype) ? n : void 0
                      })
                  })
                : null,
            (0, r.jsx)('div', {
                className: H.previewPlayButtonCont,
                children: v
                    ? (0, r.jsx)(m.Oe7, {
                          color: d.Z.colors.WHITE,
                          className: H.previewPlayButton
                      })
                    : (0, r.jsx)(m.o1U, {
                          color: d.Z.colors.WHITE,
                          className: H.previewPlayButton
                      })
            })
        ]
    });
}
function K(e) {
    let { quest: t } = e;
    return (0, r.jsx)(N.Z, {
        className: a()(H.rewardTile, H.hiddenRewardTile),
        learnMoreStyle: 'text',
        quest: t,
        questContent: _.jn.QUEST_BAR_V2,
        location: W.dr.QUESTS_BAR,
        sourceQuestContent: _.jn.QUEST_BAR_V2
    });
}
function Y(e) {
    let { quest: t, taskDetails: n } = e,
        o = s.useMemo(() => T.r.build(t.config), [t.config]);
    return (0, r.jsxs)('ul', {
        children: [
            (0, r.jsx)(m.Text, {
                className: H.description,
                tag: 'li',
                variant: 'text-xs/normal',
                children: (0, S.DD)({
                    quest: t,
                    location: W.dr.QUESTS_BAR,
                    questContent: _.jn.QUEST_BAR_V2,
                    taskDetails: n,
                    sourceQuestContent: _.jn.QUEST_BAR_V2
                })
            }),
            (0, r.jsx)(m.Text, {
                className: H.description,
                tag: 'li',
                variant: 'text-xs/normal',
                children: U.intl.formatToPlainString(U.t['W8/b3d'], { rewardName: o.defaultRewardName })
            })
        ]
    });
}
function G(e) {
    return (0, r.jsx)(m.Text, {
        className: H.description,
        variant: 'text-xs/normal',
        children: (0, S.DD)({
            quest: e.quest,
            location: W.dr.QUESTS_BAR,
            questContent: _.jn.QUEST_BAR_V2,
            taskDetails: e.taskDetails,
            sourceQuestContent: _.jn.QUEST_BAR_V2
        })
    });
}
function J(e) {
    let { quest: t, taskDetails: n, expansionSpring: o, isInteractable: l, reducedMotion: c, containerRef: d, isExpanded: x, onAcceptQuest: h } = e,
        b = (0, u.e7)([j.Z], () => j.Z.isEnrolling(t.id), [t]),
        _ = s.useMemo(() => (0, E.fh)(t, E.eC.QUEST_BAR_HERO), [t]),
        y = s.useRef(null);
    s.useEffect(() => {
        null == y.current || c || (x ? ((y.current.currentTime = 0), y.current.play()) : y.current.pause());
    }, [c, x]);
    let w = (0, O.j)({ location: W.dr.QUESTS_BAR }),
        T = (0, v.Kr)(t.config),
        N = (0, S.mK)(t.config),
        R = (0, S.CR)({
            quest: t,
            location: W.dr.QUESTS_BAR
        }),
        k = (0, C.h)({
            location: W.dr.QUESTS_BAR,
            questConfig: t.config
        }),
        B = s.useMemo(() => (0, E.fh)(t, E.eC.HERO_IMAGE), [t]),
        q = s.useMemo(() => (null == B ? {} : { backgroundImage: 'url('.concat(B.url, ')') }), [B]),
        I = (0, f.ZP)(),
        D = (0, p.wj)(I);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', {
                children: (0, r.jsxs)('div', {
                    className: a()(H.questPromoContent, { [H.questPromoContentWithCopySimplification]: w }),
                    ref: d,
                    children: [
                        (0, r.jsxs)('div', {
                            className: H.details,
                            children: [
                                (0, r.jsx)(K, { quest: t }),
                                (0, r.jsx)(m.X6q, {
                                    className: H.title,
                                    color: 'header-primary',
                                    variant: 'heading-md/medium',
                                    children: U.intl.format(U.t.EQa7oq, { questName: t.config.messages.questName })
                                }),
                                w
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
                            'aria-label': ''.concat(U.intl.formatToPlainString(U.t.coKAb2, { rewardsDuration: T })).concat(null != N ? ' \u2022 '.concat(N) : ''),
                            text:
                                null != T &&
                                w &&
                                (0, r.jsx)(P.Z, {
                                    quest: t,
                                    orientation: 'stack',
                                    withPremiumHighlight: !1
                                }),
                            shouldShow: null != T && w,
                            children: (e) =>
                                (0, r.jsx)(
                                    m.zxk,
                                    F(z({}, e), {
                                        wrapperClassName: H.cta,
                                        color: m.zxk.Colors.BRAND,
                                        fullWidth: !0,
                                        onClick: l ? h : void 0,
                                        size: m.zxk.Sizes.SMALL,
                                        submitting: b,
                                        children: R
                                    })
                                )
                        })
                    ]
                })
            }),
            k &&
                null != B &&
                (0, r.jsx)(i.animated.div, {
                    className: H.contentCollapsedBackgroundWrapper,
                    style: {
                        opacity: o.to([0, 1], [1, 0])
                    },
                    children: (0, r.jsx)('div', {
                        className: H.contentCollapsedBackground,
                        style: q
                    })
                }),
            (0, r.jsxs)(i.animated.div, {
                className: H.heroAssetWrapper,
                style: {
                    backdropFilter: o.to([0, 1], [5, 0]).to((e) => 'blur('.concat(e, 'px)')),
                    filter: o.to([0, 1], [0.8, 1]).to((e) => 'brightness('.concat(e, ')'))
                },
                children: [
                    !k &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(i.animated.div, {
                                    className: H.heroAssetDarken,
                                    style: {
                                        opacity: o.to([0, 1], [1, 0])
                                    }
                                }),
                                (0, r.jsx)(i.animated.div, {
                                    className: H.heroAssetTint,
                                    style: {
                                        backgroundColor: t.config.colors.primary,
                                        opacity: o.to([0, 1], [1, 0])
                                    }
                                })
                            ]
                        }),
                    _.isAnimated
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
                                          className: H.heroAsset,
                                          controls: !1,
                                          children: (0, r.jsx)('source', {
                                              src: _.url,
                                              type: null != (t = _.mimetype) ? t : void 0
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
                                      className: H.heroAsset,
                                      src: _.url
                                  })
                          }),
                    (0, r.jsx)('div', { className: a()(H.legibilityGradient, { [H.legibilityGradientDark]: D }) })
                ]
            })
        ]
    });
}
function $(e) {
    var t;
    let { quest: n, taskDetails: o, expansionSpring: c, overlayRef: u, isExpanded: d, reducedMotion: p, containerRef: f, onCtxMenuOpen: g, onCtxMenuClose: x, onCtxMenuSelect: h } = e,
        j = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null,
        y = o.percentComplete > 0,
        C = (0, b.z)(n),
        [S, E, w] = (0, b.me)(n, o),
        T = s.useRef(null),
        P = (0, b.B6)(n.config.expiresAt),
        N = (0, b._s)({ quest: n }),
        A = (0, v.q8)(n),
        K = (0, b.Jf)(n),
        Y = s.useCallback(() => {
            (0, k.openVideoQuestModal)({
                quest: n,
                sourceQuestContent: _.jn.QUEST_BAR_V2
            });
        }, [n]),
        G = (0, O.j)({ location: W.dr.QUESTS_BAR }),
        J = null != K ? K.percentComplete : o.percentComplete;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i.animated.div, {
                className: a()(H.postEnrollmentBackground, H.postEnrollmentBackgroundCollapsed),
                style: {
                    backgroundImage: 'linear-gradient(90deg, '.concat(Z.aY, ', ').concat(Z.v6, ')'),
                    opacity: c.to({
                        range: [0, 1],
                        output: [1, 0]
                    })
                }
            }),
            (0, r.jsxs)('div', {
                className: H.questAcceptedContent,
                ref: f,
                children: [
                    (0, r.jsxs)('div', {
                        className: H.questAcceptedHeader,
                        children: [
                            (0, r.jsx)(m.Text, {
                                variant: 'text-xxs/medium',
                                className: a()(H.flex, H.headerText),
                                children: U.intl.format(U.t['pX+fmp'], { expirationDate: P })
                            }),
                            (0, r.jsx)(R.r, {
                                onOpen: g,
                                onClose: x,
                                onSelect: h,
                                questContent: _.jn.QUEST_BAR_V2,
                                quest: n,
                                shouldShowDisclosure: !1,
                                showShareLink: !0,
                                sourceQuestContent: _.jn.QUEST_BAR_V2,
                                children: (e) =>
                                    (0, r.jsx)(
                                        m.P3F,
                                        F(z({}, e), {
                                            className: H.submenuWrapper,
                                            'aria-label': U.intl.string(U.t.DEoVWV),
                                            children: (0, r.jsx)(m.xhG, {
                                                size: 'md',
                                                color: 'currentColor',
                                                className: a()(H.submenuIcon, H.interactiveNormal)
                                            })
                                        })
                                    )
                            })
                        ]
                    }),
                    (0, r.jsx)('div', { className: H.divider }),
                    (0, r.jsx)(I.Z, {
                        expansionSpring: c,
                        overlayRef: u,
                        progressBarRef: T,
                        quest: n,
                        isExpanded: d
                    }),
                    (0, r.jsx)(V.Z, {
                        contentLocation: 'expanded',
                        quest: n,
                        progressBarRef: T,
                        isExpanded: !0,
                        percentComplete: J,
                        activeScreen: S
                    }),
                    (0, r.jsx)(B.n, {
                        children:
                            (!j || G) &&
                            !(0, v.Gd)(n) &&
                            (0, l.EQ)(S)
                                .with(_.LI.SELECT, () =>
                                    (0, r.jsx)(M.Z, {
                                        onConsole: () => w(W.cd.CONSOLE),
                                        onDesktop: () => w(W.cd.DESKTOP)
                                    })
                                )
                                .with(_.LI.DESKTOP, () =>
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            G &&
                                                (0, r.jsx)(Q.Z, {
                                                    quest: n,
                                                    taskDetails: o
                                                }),
                                            (0, r.jsx)(L.Z, { quest: n })
                                        ]
                                    })
                                )
                                .with(_.LI.CONSOLE, () =>
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
                                    isExpanded: d,
                                    quest: n,
                                    onClick: Y,
                                    reducedMotion: p
                                }),
                            (0, r.jsx)(q.y, {
                                quest: n,
                                useReducedMotion: p,
                                isExpanded: d,
                                awaitingConsoleConnections: N,
                                hasMadeProgress: y,
                                isProgressing: C,
                                activeScreen: S,
                                showBackButton: S !== _.LI.SELECT && E.length > 1 && !y && !C,
                                onBack: () => w(null),
                                taskDetails: o,
                                sourceQuestContent: _.jn.QUEST_BAR_V2
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: a()(H.postEnrollmentBackground, H.postEnrollmentBackgroundExpanded),
                style: { backgroundImage: 'linear-gradient(90deg, '.concat(Z.aY, ', ').concat(Z.v6, ')') }
            })
        ]
    });
}
let ee = s.forwardRef(function (e, t) {
    var n;
    let { children: o, className: l, collapsedHeight: c, isExpanded: u, isExpansionAnimationComplete: d, expansionSpring: p, onCtxMenuOpen: m, onCtxMenuClose: f, onCtxMenuSelect: g, overlayRef: j, quest: y, useReducedMotion: C, taskDetails: O } = e,
        S = (0, v.q8)(y),
        E = (0, v.Vl)(y),
        { launchInGameActivity: w } = (0, b.zB)(y),
        T = s.useCallback(() => {
            let e = y.config.features.includes(W.S7.START_QUEST_CTA),
                t = e ? x.jZ.START_QUEST : x.jZ.ACCEPT_QUEST;
            (0, h.AH)(y.id, {
                questContent: _.jn.QUEST_BAR_V2,
                questContentCTA: t,
                sourceQuestContent: _.jn.QUEST_BAR_V2
            }),
                S &&
                    (0, k.openVideoQuestModal)({
                        quest: y,
                        sourceQuestContent: _.jn.QUEST_BAR_V2
                    }),
                E && e && w();
        }, [y, S, E, w]),
        P = (null == (n = y.userStatus) ? void 0 : n.enrolledAt) != null,
        N = u && d;
    return (0, r.jsxs)(i.animated.div, {
        'aria-hidden': !N,
        className: a()(l, H.contentExpanded, {
            [H.contentInteractable]: N,
            [H.contentExpandedAccepted]: P
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
                children: P
                    ? (0, r.jsx)($, {
                          quest: y,
                          taskDetails: O,
                          expansionSpring: p,
                          overlayRef: j,
                          isExpanded: u,
                          reducedMotion: C,
                          onCtxMenuOpen: m,
                          onCtxMenuClose: f,
                          onCtxMenuSelect: g,
                          containerRef: t
                      })
                    : (0, r.jsx)(J, {
                          quest: y,
                          taskDetails: O,
                          expansionSpring: p,
                          isInteractable: N,
                          reducedMotion: C,
                          containerRef: t,
                          isExpanded: u,
                          onAcceptQuest: T
                      })
            })
        ]
    });
});
