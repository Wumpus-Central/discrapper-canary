n.d(t, { Z: () => J }), n(47120), n(266796), n(627341);
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
    m = n(703656),
    f = n(617136),
    g = n(272008),
    x = n(113434),
    h = n(569984),
    b = n(497505),
    j = n(918701),
    v = n(184299),
    y = n(467628),
    _ = n(373370),
    C = n(475595),
    O = n(720293),
    w = n(566078),
    S = n(65443),
    P = n(644646),
    N = n(78826),
    E = n(670638),
    T = n(341907),
    A = n(693900),
    B = n(164495),
    R = n(759853),
    k = n(205511),
    q = n(710235),
    D = n(694802),
    I = n(95985),
    W = n(50476),
    M = n(46140),
    L = n(743294),
    Z = n(981631),
    V = n(388032),
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
    var t;
    let { quest: n, onClick: s, reducedMotion: i } = e,
        [l, c] = o.useState(!1),
        m = o.useRef(null),
        f = (0, O.z)(O.i.QUEST_BAR_PREVIEW_VIDEO, n),
        g = (0, O.z)(O.i.VIDEO_PLAYER_THUMBNAIL, n),
        x = (0, v.km)((e) => e.getVideoProgressState);
    o.useEffect(() => {
        null != m.current && (i && l && (m.current.currentTime = 0), m.current.play());
    }, [m, l, i]);
    let h = x(n.id),
        b = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null && h === v.iw.COMPLETED,
        j = !b && (!i || l);
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
            null != g &&
                (0, r.jsx)('img', {
                    alt: '',
                    src: g.url,
                    className: Q.assetBodyVideoPreviewMedia
                }),
            null != f
                ? (0, r.jsx)(p.Z, {
                      ref: m,
                      autoPlay: !0,
                      poster: null == g ? void 0 : g.url,
                      loop: !0,
                      muted: !0,
                      playsInline: !0,
                      className: a()(Q.assetBodyVideoPreviewVideo, { [Q.assetBodyVideoPreviewVisible]: j }),
                      controls: !1,
                      children: (0, r.jsx)('source', {
                          src: f.url,
                          type: f.mimetype
                      })
                  })
                : null,
            (0, r.jsx)('div', {
                className: Q.previewPlayButtonCont,
                children: b
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
function F(e) {
    let { quest: t } = e;
    return (0, r.jsx)(P.Z, {
        className: a()(Q.rewardTile, Q.hiddenRewardTile),
        learnMoreStyle: 'text',
        quest: t,
        questContent: b.jn.QUEST_BAR_V2,
        location: M.dr.QUESTS_BAR
    });
}
function X(e) {
    let { quest: t, taskDetails: n } = e,
        s = o.useMemo(() => w.r.build(t.config), [t.config]);
    return (0, r.jsxs)('ul', {
        children: [
            (0, r.jsx)(u.Text, {
                className: Q.description,
                tag: 'li',
                variant: 'text-xs/normal',
                children: (0, _.DD)({
                    quest: t,
                    location: M.dr.QUESTS_BAR,
                    questContent: b.jn.QUEST_BAR_V2,
                    taskDetails: n
                })
            }),
            (0, r.jsx)(u.Text, {
                className: Q.description,
                tag: 'li',
                variant: 'text-xs/normal',
                children: V.NW.formatToPlainString(V.t['W8/b3d'], { rewardName: s.defaultReward.messages.name })
            })
        ]
    });
}
function K(e) {
    return (0, r.jsx)(u.Text, {
        className: Q.description,
        variant: 'text-xs/normal',
        children: (0, _.DD)({
            quest: e.quest,
            location: M.dr.QUESTS_BAR,
            questContent: b.jn.QUEST_BAR_V2,
            taskDetails: e.taskDetails
        })
    });
}
function Y(e) {
    let { quest: t, taskDetails: n, expansionSpring: s, isInteractable: l, reducedMotion: d, containerRef: m, isExpanded: f, onAcceptQuest: g } = e,
        x = (0, c.e7)([h.Z], () => h.Z.isEnrolling(t.id), [t]),
        b = o.useMemo(() => (0, C.fh)(t, C.eC.QUEST_BAR_HERO), [t]),
        v = o.useRef(null);
    o.useEffect(() => {
        null != v.current && (d && f ? (v.current.pause(), (v.current.currentTime = 0)) : !d && f && v.current.play());
    }, [d, f]);
    let O = (0, y.j)({ location: M.dr.QUESTS_BAR }),
        w = (0, j.Kr)(t.config),
        P = (0, _.mK)(t.config),
        E = (0, _.CR)({
            quest: t,
            location: M.dr.QUESTS_BAR
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', {
                children: (0, r.jsxs)('div', {
                    className: a()(Q.questPromoContent, { [Q.questPromoContentWithCopySimplification]: O }),
                    ref: m,
                    children: [
                        (0, r.jsxs)('div', {
                            className: Q.details,
                            children: [
                                (0, r.jsx)(F, { quest: t }),
                                (0, r.jsx)(u.X6q, {
                                    className: Q.title,
                                    color: 'header-primary',
                                    variant: 'heading-md/medium',
                                    children: V.NW.format(V.t.EQa7oq, { questName: t.config.messages.questName })
                                }),
                                O
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
                        (0, r.jsx)(u.ua7, {
                            'aria-label': ''.concat(V.NW.formatToPlainString(V.t.coKAb2, { rewardsDuration: w })).concat(null != P ? ' \u2022 '.concat(P) : ''),
                            text:
                                null != w &&
                                O &&
                                (0, r.jsx)(S.Z, {
                                    quest: t,
                                    orientation: 'stack',
                                    withPremiumHighlight: !1
                                }),
                            shouldShow: null != w && O,
                            children: (e) =>
                                (0, r.jsx)(
                                    u.zxk,
                                    H(U({}, e), {
                                        wrapperClassName: Q.cta,
                                        color: u.zxk.Colors.BRAND,
                                        fullWidth: !0,
                                        onClick: l ? g : void 0,
                                        size: u.zxk.Sizes.SMALL,
                                        submitting: x,
                                        children: E
                                    })
                                )
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
                    b.isAnimated
                        ? (0, r.jsx)(N.Fl, {
                              id: 'QuestBarV2ContentExpanded_heroAnimated',
                              children: (e) => {
                                  var t;
                                  return (
                                      null != e.current && (v.current = e.current),
                                      (0, r.jsx)(p.Z, {
                                          ref: e,
                                          autoPlay: !d && f,
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
                        : (0, r.jsx)(N.Fl, {
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
    let { quest: n, taskDetails: s, expansionSpring: c, overlayRef: d, isExpanded: p, reducedMotion: m, containerRef: f, onCtxMenuOpen: g, onCtxMenuClose: h, onCtxMenuSelect: v } = e,
        _ = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null,
        C = s.percentComplete > 0,
        O = (0, x.z)(n),
        [w, S, P] = (0, x.me)(n, s),
        N = o.useRef(null),
        Z = (0, x.B6)(n.config.expiresAt),
        F = (0, x._s)({ quest: n }),
        X = (0, j.q8)(n),
        K = (0, x.Jf)(n),
        Y = o.useCallback(() => {
            (0, T.openVideoQuestModal)(n);
        }, [n]),
        G = (0, y.j)({ location: M.dr.QUESTS_BAR }),
        J = null != K ? K.percentComplete : s.percentComplete;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i.animated.div, {
                className: a()(Q.postEnrollmentBackground, Q.postEnrollmentBackgroundCollapsed),
                style: {
                    backgroundImage: 'linear-gradient(90deg, '.concat(L.aY, ', ').concat(L.v6, ')'),
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
                            (0, r.jsx)(u.Text, {
                                variant: 'text-xxs/medium',
                                className: a()(Q.flex, Q.headerText),
                                children: V.NW.format(V.t['pX+fmp'], { expirationDate: Z })
                            }),
                            (0, r.jsx)(E.r, {
                                onOpen: g,
                                onClose: h,
                                onSelect: v,
                                questContent: b.jn.QUEST_BAR_V2,
                                quest: n,
                                shouldShowDisclosure: !1,
                                showShareLink: !0,
                                children: (e) =>
                                    (0, r.jsx)(
                                        u.P3F,
                                        H(U({}, e), {
                                            className: Q.submenuWrapper,
                                            'aria-label': V.NW.string(V.t.DEoVWV),
                                            children: (0, r.jsx)(u.xhG, {
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
                    (0, r.jsx)(R.Z, {
                        expansionSpring: c,
                        overlayRef: d,
                        progressBarRef: N,
                        quest: n,
                        isExpanded: p
                    }),
                    (0, r.jsx)(I.Z, {
                        contentLocation: 'expanded',
                        quest: n,
                        progressBarRef: N,
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
                                    (0, r.jsx)(W.Z, {
                                        onConsole: () => P(M.cd.CONSOLE),
                                        onDesktop: () => P(M.cd.DESKTOP)
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
                                    (0, r.jsx)(k.Z, {
                                        quest: n,
                                        taskDetails: s
                                    })
                                )
                                .exhaustive()
                    }),
                    (0, r.jsxs)(A.n, {
                        children: [
                            X &&
                                (0, r.jsx)(z, {
                                    quest: n,
                                    onClick: Y,
                                    reducedMotion: m
                                }),
                            (0, r.jsx)(B.yD, {
                                quest: n,
                                useReducedMotion: m,
                                isExpanded: p,
                                awaitingConsoleConnections: F,
                                hasMadeProgress: C,
                                isProgressing: O,
                                activeScreen: w,
                                showBackButton: w !== b.LI.SELECT && S.length > 1 && !C && !O,
                                onBack: () => P(null),
                                taskDetails: s
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: a()(Q.postEnrollmentBackground, Q.postEnrollmentBackgroundExpanded),
                style: { backgroundImage: 'linear-gradient(90deg, '.concat(L.aY, ', ').concat(L.v6, ')') }
            })
        ]
    });
}
let J = o.forwardRef(function (e, t) {
    var n;
    let { children: s, className: l, collapsedHeight: c, isExpanded: d, isExpansionAnimationComplete: u, expansionSpring: p, onCtxMenuOpen: x, onCtxMenuClose: h, onCtxMenuSelect: v, overlayRef: y, quest: _, useReducedMotion: C, taskDetails: O } = e,
        w = (0, j.q8)(_),
        S = (0, j.Vl)(_),
        P = o.useCallback(() => {
            let e = _.config.features.includes(M.S7.START_QUEST_CTA),
                t = e ? f.jZ.START_QUEST : f.jZ.ACCEPT_QUEST;
            (0, g.AH)(_.id, {
                questContent: b.jn.QUEST_BAR_V2,
                questContentCTA: t
            }),
                w && (0, T.openVideoQuestModal)(_),
                S && e && (0, m.uL)(Z.Z5c.ACTIVITY_DETAILS(_.config.application.id));
        }, [_, w, S]),
        N = (null == (n = _.userStatus) ? void 0 : n.enrolledAt) != null,
        E = d && u;
    return (0, r.jsxs)(i.animated.div, {
        'aria-hidden': !E,
        className: a()(l, Q.contentExpanded, {
            [Q.contentInteractable]: E,
            [Q.contentExpandedAccepted]: N
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
                children: N
                    ? (0, r.jsx)(G, {
                          quest: _,
                          taskDetails: O,
                          expansionSpring: p,
                          overlayRef: y,
                          isExpanded: d,
                          reducedMotion: C,
                          onCtxMenuOpen: x,
                          onCtxMenuClose: h,
                          onCtxMenuSelect: v,
                          containerRef: t
                      })
                    : (0, r.jsx)(Y, {
                          quest: _,
                          taskDetails: O,
                          expansionSpring: p,
                          isInteractable: E,
                          reducedMotion: C,
                          containerRef: t,
                          isExpanded: d,
                          onAcceptQuest: P
                      })
            })
        ]
    });
});
