n.d(t, { Z: () => G }), n(388685), n(953529), n(314940);
var r = n(255367),
    o = n(73800),
    s = n(120356),
    a = n.n(s),
    i = n(366594),
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
    y = n(467628),
    _ = n(373370),
    O = n(475595),
    C = n(720293),
    w = n(566078),
    S = n(65443),
    P = n(644646),
    E = n(78826),
    T = n(670638),
    N = n(341907),
    A = n(693900),
    R = n(164495),
    k = n(759853),
    B = n(205511),
    q = n(710235),
    D = n(694802),
    I = n(95985),
    M = n(50476),
    L = n(46140),
    W = n(743294),
    Z = n(388032),
    V = n(921183);
function Q(e) {
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
function U(e) {
    var t, n;
    let { quest: s, onClick: i, reducedMotion: l, isExpanded: d } = e,
        [f, g] = o.useState(!1),
        x = o.useRef(null),
        h = (0, O.fh)(s, O.eC.QUEST_BAR_HERO_VIDEO),
        b = (0, C.z0)(s, c.X.WATCH_VIDEO, C.n1.VIDEO, C.O.THUMBNAIL),
        j = (0, v.km)((e) => e.getVideoProgressState);
    o.useEffect(() => {
        null != x.current && (d && (!l || f) ? ((x.current.currentTime = 0), x.current.play()) : x.current.pause());
    }, [x, f, l, d]);
    let y = j(s.id),
        _ = (null == (t = s.userStatus) ? void 0 : t.completedAt) != null && y === v.iw.COMPLETED,
        w = !_ && (!l || f);
    return (0, r.jsxs)(p.P3F, {
        className: V.videoQuestPreviewCont,
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
                    className: V.assetBodyVideoPreviewMedia
                }),
            null != h
                ? (0, r.jsx)(m.Z, {
                      ref: x,
                      autoPlay: !1,
                      poster: null == b ? void 0 : b.url,
                      loop: !0,
                      muted: !0,
                      playsInline: !0,
                      className: a()(V.assetBodyVideoPreviewVideo, { [V.assetBodyVideoPreviewVisible]: w }),
                      controls: !1,
                      children: (0, r.jsx)('source', {
                          src: h.url,
                          type: null != (n = h.mimetype) ? n : void 0
                      })
                  })
                : null,
            (0, r.jsx)('div', {
                className: V.previewPlayButtonCont,
                children: _
                    ? (0, r.jsx)(p.Oe7, {
                          color: u.Z.colors.WHITE,
                          className: V.previewPlayButton
                      })
                    : (0, r.jsx)(p.o1U, {
                          color: u.Z.colors.WHITE,
                          className: V.previewPlayButton
                      })
            })
        ]
    });
}
function z(e) {
    let { quest: t } = e;
    return (0, r.jsx)(P.Z, {
        className: a()(V.rewardTile, V.hiddenRewardTile),
        learnMoreStyle: 'text',
        quest: t,
        questContent: b.jn.QUEST_BAR_V2,
        location: L.dr.QUESTS_BAR
    });
}
function F(e) {
    let { quest: t, taskDetails: n } = e,
        s = o.useMemo(() => w.r.build(t.config), [t.config]);
    return (0, r.jsxs)('ul', {
        children: [
            (0, r.jsx)(p.Text, {
                className: V.description,
                tag: 'li',
                variant: 'text-xs/normal',
                children: (0, _.DD)({
                    quest: t,
                    location: L.dr.QUESTS_BAR,
                    questContent: b.jn.QUEST_BAR_V2,
                    taskDetails: n
                })
            }),
            (0, r.jsx)(p.Text, {
                className: V.description,
                tag: 'li',
                variant: 'text-xs/normal',
                children: Z.intl.formatToPlainString(Z.t['W8/b3d'], { rewardName: s.defaultReward.messages.name })
            })
        ]
    });
}
function K(e) {
    return (0, r.jsx)(p.Text, {
        className: V.description,
        variant: 'text-xs/normal',
        children: (0, _.DD)({
            quest: e.quest,
            location: L.dr.QUESTS_BAR,
            questContent: b.jn.QUEST_BAR_V2,
            taskDetails: e.taskDetails
        })
    });
}
function X(e) {
    let { quest: t, taskDetails: n, expansionSpring: s, isInteractable: l, reducedMotion: c, containerRef: u, isExpanded: f, onAcceptQuest: g } = e,
        x = (0, d.e7)([h.Z], () => h.Z.isEnrolling(t.id), [t]),
        b = o.useMemo(() => (0, O.fh)(t, O.eC.QUEST_BAR_HERO), [t]),
        v = o.useRef(null);
    o.useEffect(() => {
        null == v.current || c || (f ? ((v.current.currentTime = 0), v.current.play()) : v.current.pause());
    }, [c, f]);
    let C = (0, y.j)({ location: L.dr.QUESTS_BAR }),
        w = (0, j.Kr)(t.config),
        P = (0, _.mK)(t.config),
        T = (0, _.CR)({
            quest: t,
            location: L.dr.QUESTS_BAR
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', {
                children: (0, r.jsxs)('div', {
                    className: a()(V.questPromoContent, { [V.questPromoContentWithCopySimplification]: C }),
                    ref: u,
                    children: [
                        (0, r.jsxs)('div', {
                            className: V.details,
                            children: [
                                (0, r.jsx)(z, { quest: t }),
                                (0, r.jsx)(p.X6q, {
                                    className: V.title,
                                    color: 'header-primary',
                                    variant: 'heading-md/medium',
                                    children: Z.intl.format(Z.t.EQa7oq, { questName: t.config.messages.questName })
                                }),
                                C
                                    ? (0, r.jsx)(F, {
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
                            'aria-label': ''.concat(Z.intl.formatToPlainString(Z.t.coKAb2, { rewardsDuration: w })).concat(null != P ? ' \u2022 '.concat(P) : ''),
                            text:
                                null != w &&
                                C &&
                                (0, r.jsx)(S.Z, {
                                    quest: t,
                                    orientation: 'stack',
                                    withPremiumHighlight: !1
                                }),
                            shouldShow: null != w && C,
                            children: (e) =>
                                (0, r.jsx)(
                                    p.zxk,
                                    H(Q({}, e), {
                                        wrapperClassName: V.cta,
                                        color: p.zxk.Colors.BRAND,
                                        fullWidth: !0,
                                        onClick: l ? g : void 0,
                                        size: p.zxk.Sizes.SMALL,
                                        submitting: x,
                                        children: T
                                    })
                                )
                        })
                    ]
                })
            }),
            (0, r.jsxs)(i.animated.div, {
                className: V.heroAssetWrapper,
                style: {
                    backdropFilter: s.to([0, 1], [5, 0]).to((e) => 'blur('.concat(e, 'px)')),
                    filter: s.to([0, 1], [0.8, 1]).to((e) => 'brightness('.concat(e, ')'))
                },
                children: [
                    (0, r.jsx)(i.animated.div, {
                        className: V.heroAssetDarken,
                        style: {
                            opacity: s.to([0, 1], [1, 0])
                        }
                    }),
                    (0, r.jsx)(i.animated.div, {
                        className: V.heroAssetTint,
                        style: {
                            backgroundColor: t.config.colors.primary,
                            opacity: s.to([0, 1], [1, 0])
                        }
                    }),
                    b.isAnimated
                        ? (0, r.jsx)(E.Fl, {
                              id: 'QuestBarV2ContentExpanded_heroAnimated',
                              children: (e) => {
                                  var t;
                                  return (
                                      null != e.current && (v.current = e.current),
                                      (0, r.jsx)(m.Z, {
                                          ref: e,
                                          autoPlay: !1,
                                          loop: !0,
                                          muted: !0,
                                          playsInline: !0,
                                          className: V.heroAsset,
                                          controls: !1,
                                          children: (0, r.jsx)('source', {
                                              src: b.url,
                                              type: null != (t = b.mimetype) ? t : void 0
                                          })
                                      })
                                  );
                              }
                          })
                        : (0, r.jsx)(E.Fl, {
                              id: 'QuestBarV2ContentExpanded_heroStatic',
                              children: (e) =>
                                  (0, r.jsx)('img', {
                                      ref: e,
                                      alt: '',
                                      className: V.heroAsset,
                                      src: b.url
                                  })
                          }),
                    (0, r.jsx)(i.animated.div, {
                        className: V.legibilityGradient,
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
function Y(e) {
    var t;
    let { quest: n, taskDetails: s, expansionSpring: c, overlayRef: d, isExpanded: u, reducedMotion: m, containerRef: f, onCtxMenuOpen: g, onCtxMenuClose: h, onCtxMenuSelect: v } = e,
        _ = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null,
        O = s.percentComplete > 0,
        C = (0, x.z)(n),
        [w, S, P] = (0, x.me)(n, s),
        E = o.useRef(null),
        z = (0, x.B6)(n.config.expiresAt),
        F = (0, x._s)({ quest: n }),
        K = (0, j.q8)(n),
        X = (0, x.Jf)(n),
        Y = o.useCallback(() => {
            (0, N.openVideoQuestModal)(n);
        }, [n]),
        G = (0, y.j)({ location: L.dr.QUESTS_BAR }),
        J = null != X ? X.percentComplete : s.percentComplete;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i.animated.div, {
                className: a()(V.postEnrollmentBackground, V.postEnrollmentBackgroundCollapsed),
                style: {
                    backgroundImage: 'linear-gradient(90deg, '.concat(W.aY, ', ').concat(W.v6, ')'),
                    opacity: c.to({
                        range: [0, 1],
                        output: [1, 0]
                    })
                }
            }),
            (0, r.jsxs)('div', {
                className: V.questAcceptedContent,
                ref: f,
                children: [
                    (0, r.jsxs)('div', {
                        className: V.questAcceptedHeader,
                        children: [
                            (0, r.jsx)(p.Text, {
                                variant: 'text-xxs/medium',
                                className: a()(V.flex, V.headerText),
                                children: Z.intl.format(Z.t['pX+fmp'], { expirationDate: z })
                            }),
                            (0, r.jsx)(T.r, {
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
                                        H(Q({}, e), {
                                            className: V.submenuWrapper,
                                            'aria-label': Z.intl.string(Z.t.DEoVWV),
                                            children: (0, r.jsx)(p.xhG, {
                                                size: 'md',
                                                color: 'currentColor',
                                                className: a()(V.submenuIcon, V.interactiveNormal)
                                            })
                                        })
                                    )
                            })
                        ]
                    }),
                    (0, r.jsx)('div', { className: V.divider }),
                    (0, r.jsx)(k.Z, {
                        expansionSpring: c,
                        overlayRef: d,
                        progressBarRef: E,
                        quest: n,
                        isExpanded: u
                    }),
                    (0, r.jsx)(I.Z, {
                        contentLocation: 'expanded',
                        quest: n,
                        progressBarRef: E,
                        isExpanded: !0,
                        percentComplete: J,
                        activeScreen: w
                    }),
                    (0, r.jsx)(A.n, {
                        children:
                            (!_ || G) &&
                            !(0, j.Gd)(n) &&
                            (0, l.EQ)(w)
                                .with(b.LI.SELECT, () =>
                                    (0, r.jsx)(M.Z, {
                                        onConsole: () => P(L.cd.CONSOLE),
                                        onDesktop: () => P(L.cd.DESKTOP)
                                    })
                                )
                                .with(b.LI.DESKTOP, () =>
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            G &&
                                                (0, r.jsx)(q.Z, {
                                                    quest: n,
                                                    taskDetails: s
                                                }),
                                            (0, r.jsx)(D.Z, { quest: n })
                                        ]
                                    })
                                )
                                .with(b.LI.CONSOLE, () =>
                                    (0, r.jsx)(B.Z, {
                                        quest: n,
                                        taskDetails: s
                                    })
                                )
                                .exhaustive()
                    }),
                    (0, r.jsxs)(A.n, {
                        children: [
                            K &&
                                (0, r.jsx)(U, {
                                    isExpanded: u,
                                    quest: n,
                                    onClick: Y,
                                    reducedMotion: m
                                }),
                            (0, r.jsx)(R.yD, {
                                quest: n,
                                useReducedMotion: m,
                                isExpanded: u,
                                awaitingConsoleConnections: F,
                                hasMadeProgress: O,
                                isProgressing: C,
                                activeScreen: w,
                                showBackButton: w !== b.LI.SELECT && S.length > 1 && !O && !C,
                                onBack: () => P(null),
                                taskDetails: s
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: a()(V.postEnrollmentBackground, V.postEnrollmentBackgroundExpanded),
                style: { backgroundImage: 'linear-gradient(90deg, '.concat(W.aY, ', ').concat(W.v6, ')') }
            })
        ]
    });
}
let G = o.forwardRef(function (e, t) {
    var n;
    let { children: s, className: l, collapsedHeight: c, isExpanded: d, isExpansionAnimationComplete: u, expansionSpring: p, onCtxMenuOpen: m, onCtxMenuClose: h, onCtxMenuSelect: v, overlayRef: y, quest: _, useReducedMotion: O, taskDetails: C } = e,
        w = (0, j.q8)(_),
        S = (0, j.Vl)(_),
        { launchInGameActivity: P } = (0, x.zB)(_),
        E = o.useCallback(() => {
            let e = _.config.features.includes(L.S7.START_QUEST_CTA),
                t = e ? f.jZ.START_QUEST : f.jZ.ACCEPT_QUEST;
            (0, g.AH)(_.id, {
                questContent: b.jn.QUEST_BAR_V2,
                questContentCTA: t
            }),
                w && (0, N.openVideoQuestModal)(_),
                S && e && P();
        }, [_, w, S, P]),
        T = (null == (n = _.userStatus) ? void 0 : n.enrolledAt) != null,
        A = d && u;
    return (0, r.jsxs)(i.animated.div, {
        'aria-hidden': !A,
        className: a()(l, V.contentExpanded, {
            [V.contentInteractable]: A,
            [V.contentExpandedAccepted]: T
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
                    ? (0, r.jsx)(Y, {
                          quest: _,
                          taskDetails: C,
                          expansionSpring: p,
                          overlayRef: y,
                          isExpanded: d,
                          reducedMotion: O,
                          onCtxMenuOpen: m,
                          onCtxMenuClose: h,
                          onCtxMenuSelect: v,
                          containerRef: t
                      })
                    : (0, r.jsx)(X, {
                          quest: _,
                          taskDetails: C,
                          expansionSpring: p,
                          isInteractable: A,
                          reducedMotion: O,
                          containerRef: t,
                          isExpanded: d,
                          onAcceptQuest: E
                      })
            })
        ]
    });
});
