n.d(t, { Z: () => Y }), n(388685), n(953529), n(314940);
var r = n(200651),
    o = n(192379),
    s = n(120356),
    a = n.n(s),
    i = n(200100),
    l = n(278074),
    c = n(442837),
    d = n(692547),
    u = n(481060),
    p = n(70097),
    m = n(617136),
    f = n(272008),
    g = n(113434),
    x = n(569984),
    h = n(497505),
    b = n(918701),
    j = n(184299),
    v = n(467628),
    y = n(373370),
    _ = n(475595),
    C = n(720293),
    O = n(566078),
    w = n(65443),
    S = n(644646),
    P = n(78826),
    E = n(670638),
    N = n(341907),
    T = n(693900),
    A = n(164495),
    R = n(759853),
    B = n(205511),
    k = n(710235),
    q = n(694802),
    D = n(95985),
    I = n(50476),
    W = n(46140),
    M = n(743294),
    L = n(388032),
    Z = n(921183);
function V(e) {
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
function Q(e, t) {
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
    var t;
    let { quest: n, onClick: s, reducedMotion: i } = e,
        [l, c] = o.useState(!1),
        m = o.useRef(null),
        f = (0, C.z)(C.i.QUEST_BAR_PREVIEW_VIDEO, n),
        g = (0, C.z)(C.i.VIDEO_PLAYER_THUMBNAIL, n),
        x = (0, j.km)((e) => e.getVideoProgressState);
    o.useEffect(() => {
        null != m.current && (i && l && (m.current.currentTime = 0), m.current.play());
    }, [m, l, i]);
    let h = x(n.id),
        b = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null && h === j.iw.COMPLETED,
        v = !b && (!i || l);
    return (0, r.jsxs)(u.P3F, {
        className: Z.videoQuestPreviewCont,
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
                    className: Z.assetBodyVideoPreviewMedia
                }),
            null != f
                ? (0, r.jsx)(p.Z, {
                      ref: m,
                      autoPlay: !0,
                      poster: null == g ? void 0 : g.url,
                      loop: !0,
                      muted: !0,
                      playsInline: !0,
                      className: a()(Z.assetBodyVideoPreviewVideo, { [Z.assetBodyVideoPreviewVisible]: v }),
                      controls: !1,
                      children: (0, r.jsx)('source', {
                          src: f.url,
                          type: f.mimetype
                      })
                  })
                : null,
            (0, r.jsx)('div', {
                className: Z.previewPlayButtonCont,
                children: b
                    ? (0, r.jsx)(u.Oe7, {
                          color: d.Z.colors.WHITE,
                          className: Z.previewPlayButton
                      })
                    : (0, r.jsx)(u.o1U, {
                          color: d.Z.colors.WHITE,
                          className: Z.previewPlayButton
                      })
            })
        ]
    });
}
function H(e) {
    let { quest: t } = e;
    return (0, r.jsx)(S.Z, {
        className: a()(Z.rewardTile, Z.hiddenRewardTile),
        learnMoreStyle: 'text',
        quest: t,
        questContent: h.jn.QUEST_BAR_V2,
        location: W.dr.QUESTS_BAR
    });
}
function F(e) {
    let { quest: t, taskDetails: n } = e,
        s = o.useMemo(() => O.r.build(t.config), [t.config]);
    return (0, r.jsxs)('ul', {
        children: [
            (0, r.jsx)(u.Text, {
                className: Z.description,
                tag: 'li',
                variant: 'text-xs/normal',
                children: (0, y.DD)({
                    quest: t,
                    location: W.dr.QUESTS_BAR,
                    questContent: h.jn.QUEST_BAR_V2,
                    taskDetails: n
                })
            }),
            (0, r.jsx)(u.Text, {
                className: Z.description,
                tag: 'li',
                variant: 'text-xs/normal',
                children: L.NW.formatToPlainString(L.t['W8/b3d'], { rewardName: s.defaultReward.messages.name })
            })
        ]
    });
}
function z(e) {
    return (0, r.jsx)(u.Text, {
        className: Z.description,
        variant: 'text-xs/normal',
        children: (0, y.DD)({
            quest: e.quest,
            location: W.dr.QUESTS_BAR,
            questContent: h.jn.QUEST_BAR_V2,
            taskDetails: e.taskDetails
        })
    });
}
function X(e) {
    let { quest: t, taskDetails: n, expansionSpring: s, isInteractable: l, reducedMotion: d, containerRef: m, isExpanded: f, onAcceptQuest: g } = e,
        h = (0, c.e7)([x.Z], () => x.Z.isEnrolling(t.id), [t]),
        j = o.useMemo(() => (0, _.fh)(t, _.eC.QUEST_BAR_HERO), [t]),
        C = o.useRef(null);
    o.useEffect(() => {
        null != C.current && (d && f ? (C.current.pause(), (C.current.currentTime = 0)) : !d && f && C.current.play());
    }, [d, f]);
    let O = (0, v.j)({ location: W.dr.QUESTS_BAR }),
        S = (0, b.Kr)(t.config),
        E = (0, y.mK)(t.config),
        N = (0, y.CR)({
            quest: t,
            location: W.dr.QUESTS_BAR
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', {
                children: (0, r.jsxs)('div', {
                    className: a()(Z.questPromoContent, { [Z.questPromoContentWithCopySimplification]: O }),
                    ref: m,
                    children: [
                        (0, r.jsxs)('div', {
                            className: Z.details,
                            children: [
                                (0, r.jsx)(H, { quest: t }),
                                (0, r.jsx)(u.X6q, {
                                    className: Z.title,
                                    color: 'header-primary',
                                    variant: 'heading-md/medium',
                                    children: L.NW.format(L.t.EQa7oq, { questName: t.config.messages.questName })
                                }),
                                O
                                    ? (0, r.jsx)(F, {
                                          quest: t,
                                          taskDetails: n
                                      })
                                    : (0, r.jsx)(z, {
                                          quest: t,
                                          taskDetails: n
                                      })
                            ]
                        }),
                        (0, r.jsx)(u.ua7, {
                            'aria-label': ''.concat(L.NW.formatToPlainString(L.t.coKAb2, { rewardsDuration: S })).concat(null != E ? ' \u2022 '.concat(E) : ''),
                            text:
                                null != S &&
                                O &&
                                (0, r.jsx)(w.Z, {
                                    quest: t,
                                    orientation: 'stack',
                                    withPremiumHighlight: !1
                                }),
                            shouldShow: null != S && O,
                            children: (e) =>
                                (0, r.jsx)(
                                    u.zxk,
                                    Q(V({}, e), {
                                        wrapperClassName: Z.cta,
                                        color: u.zxk.Colors.BRAND,
                                        fullWidth: !0,
                                        onClick: l ? g : void 0,
                                        size: u.zxk.Sizes.SMALL,
                                        submitting: h,
                                        children: N
                                    })
                                )
                        })
                    ]
                })
            }),
            (0, r.jsxs)(i.animated.div, {
                className: Z.heroAssetWrapper,
                style: {
                    backdropFilter: s.to([0, 1], [5, 0]).to((e) => 'blur('.concat(e, 'px)')),
                    filter: s.to([0, 1], [0.8, 1]).to((e) => 'brightness('.concat(e, ')'))
                },
                children: [
                    (0, r.jsx)(i.animated.div, {
                        className: Z.heroAssetDarken,
                        style: {
                            opacity: s.to([0, 1], [1, 0])
                        }
                    }),
                    (0, r.jsx)(i.animated.div, {
                        className: Z.heroAssetTint,
                        style: {
                            backgroundColor: t.config.colors.primary,
                            opacity: s.to([0, 1], [1, 0])
                        }
                    }),
                    j.isAnimated
                        ? (0, r.jsx)(P.Fl, {
                              id: 'QuestBarV2ContentExpanded_heroAnimated',
                              children: (e) => {
                                  var t;
                                  return (
                                      null != e.current && (C.current = e.current),
                                      (0, r.jsx)(p.Z, {
                                          ref: e,
                                          autoPlay: !d && f,
                                          loop: !0,
                                          muted: !0,
                                          playsInline: !0,
                                          className: Z.heroAsset,
                                          controls: !1,
                                          children: (0, r.jsx)('source', {
                                              src: j.url,
                                              type: null != (t = j.mimetype) ? t : void 0
                                          })
                                      })
                                  );
                              }
                          })
                        : (0, r.jsx)(P.Fl, {
                              id: 'QuestBarV2ContentExpanded_heroStatic',
                              children: (e) =>
                                  (0, r.jsx)('img', {
                                      ref: e,
                                      alt: '',
                                      className: Z.heroAsset,
                                      src: j.url
                                  })
                          }),
                    (0, r.jsx)(i.animated.div, {
                        className: Z.legibilityGradient,
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
function K(e) {
    var t;
    let { quest: n, taskDetails: s, expansionSpring: c, overlayRef: d, isExpanded: p, reducedMotion: m, containerRef: f, onCtxMenuOpen: x, onCtxMenuClose: j, onCtxMenuSelect: y } = e,
        _ = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null,
        C = s.percentComplete > 0,
        O = (0, g.z)(n),
        [w, S, P] = (0, g.me)(n, s),
        H = o.useRef(null),
        F = (0, g.B6)(n.config.expiresAt),
        z = (0, g._s)({ quest: n }),
        X = (0, b.q8)(n),
        K = (0, g.Jf)(n),
        Y = o.useCallback(() => {
            (0, N.openVideoQuestModal)(n);
        }, [n]),
        G = (0, v.j)({ location: W.dr.QUESTS_BAR }),
        J = null != K ? K.percentComplete : s.percentComplete;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i.animated.div, {
                className: a()(Z.postEnrollmentBackground, Z.postEnrollmentBackgroundCollapsed),
                style: {
                    backgroundImage: 'linear-gradient(90deg, '.concat(M.aY, ', ').concat(M.v6, ')'),
                    opacity: c.to({
                        range: [0, 1],
                        output: [1, 0]
                    })
                }
            }),
            (0, r.jsxs)('div', {
                className: Z.questAcceptedContent,
                ref: f,
                children: [
                    (0, r.jsxs)('div', {
                        className: Z.questAcceptedHeader,
                        children: [
                            (0, r.jsx)(u.Text, {
                                variant: 'text-xxs/medium',
                                className: a()(Z.flex, Z.headerText),
                                children: L.NW.format(L.t['pX+fmp'], { expirationDate: F })
                            }),
                            (0, r.jsx)(E.r, {
                                onOpen: x,
                                onClose: j,
                                onSelect: y,
                                questContent: h.jn.QUEST_BAR_V2,
                                quest: n,
                                shouldShowDisclosure: !1,
                                showShareLink: !0,
                                children: (e) =>
                                    (0, r.jsx)(
                                        u.P3F,
                                        Q(V({}, e), {
                                            className: Z.submenuWrapper,
                                            'aria-label': L.NW.string(L.t.DEoVWV),
                                            children: (0, r.jsx)(u.xhG, {
                                                size: 'md',
                                                color: 'currentColor',
                                                className: a()(Z.submenuIcon, Z.interactiveNormal)
                                            })
                                        })
                                    )
                            })
                        ]
                    }),
                    (0, r.jsx)('div', { className: Z.divider }),
                    (0, r.jsx)(R.Z, {
                        expansionSpring: c,
                        overlayRef: d,
                        progressBarRef: H,
                        quest: n,
                        isExpanded: p
                    }),
                    (0, r.jsx)(D.Z, {
                        contentLocation: 'expanded',
                        quest: n,
                        progressBarRef: H,
                        isExpanded: !0,
                        percentComplete: J,
                        activeScreen: w
                    }),
                    (0, r.jsx)(T.n, {
                        children:
                            (!_ || G) &&
                            !(0, b.Gd)(n) &&
                            (0, l.EQ)(w)
                                .with(h.LI.SELECT, () =>
                                    (0, r.jsx)(I.Z, {
                                        onConsole: () => P(W.cd.CONSOLE),
                                        onDesktop: () => P(W.cd.DESKTOP)
                                    })
                                )
                                .with(h.LI.DESKTOP, () =>
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            G &&
                                                (0, r.jsx)(k.Z, {
                                                    quest: n,
                                                    taskDetails: s
                                                }),
                                            (0, r.jsx)(q.Z, { quest: n })
                                        ]
                                    })
                                )
                                .with(h.LI.CONSOLE, () =>
                                    (0, r.jsx)(B.Z, {
                                        quest: n,
                                        taskDetails: s
                                    })
                                )
                                .exhaustive()
                    }),
                    (0, r.jsxs)(T.n, {
                        children: [
                            X &&
                                (0, r.jsx)(U, {
                                    quest: n,
                                    onClick: Y,
                                    reducedMotion: m
                                }),
                            (0, r.jsx)(A.yD, {
                                quest: n,
                                useReducedMotion: m,
                                isExpanded: p,
                                awaitingConsoleConnections: z,
                                hasMadeProgress: C,
                                isProgressing: O,
                                activeScreen: w,
                                showBackButton: w !== h.LI.SELECT && S.length > 1 && !C && !O,
                                onBack: () => P(null),
                                taskDetails: s
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: a()(Z.postEnrollmentBackground, Z.postEnrollmentBackgroundExpanded),
                style: { backgroundImage: 'linear-gradient(90deg, '.concat(M.aY, ', ').concat(M.v6, ')') }
            })
        ]
    });
}
let Y = o.forwardRef(function (e, t) {
    var n;
    let { children: s, className: l, collapsedHeight: c, isExpanded: d, isExpansionAnimationComplete: u, expansionSpring: p, onCtxMenuOpen: x, onCtxMenuClose: j, onCtxMenuSelect: v, overlayRef: y, quest: _, useReducedMotion: C, taskDetails: O } = e,
        w = (0, b.q8)(_),
        S = (0, b.Vl)(_),
        { launchInGameActivity: P } = (0, g.zB)(_),
        E = o.useCallback(() => {
            let e = _.config.features.includes(W.S7.START_QUEST_CTA),
                t = e ? m.jZ.START_QUEST : m.jZ.ACCEPT_QUEST;
            (0, f.AH)(_.id, {
                questContent: h.jn.QUEST_BAR_V2,
                questContentCTA: t
            }),
                w && (0, N.openVideoQuestModal)(_),
                S && e && P();
        }, [_, w, S, P]),
        T = (null == (n = _.userStatus) ? void 0 : n.enrolledAt) != null,
        A = d && u;
    return (0, r.jsxs)(i.animated.div, {
        'aria-hidden': !A,
        className: a()(l, Z.contentExpanded, {
            [Z.contentInteractable]: A,
            [Z.contentExpandedAccepted]: T
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
                    ? (0, r.jsx)(K, {
                          quest: _,
                          taskDetails: O,
                          expansionSpring: p,
                          overlayRef: y,
                          isExpanded: d,
                          reducedMotion: C,
                          onCtxMenuOpen: x,
                          onCtxMenuClose: j,
                          onCtxMenuSelect: v,
                          containerRef: t
                      })
                    : (0, r.jsx)(X, {
                          quest: _,
                          taskDetails: O,
                          expansionSpring: p,
                          isInteractable: A,
                          reducedMotion: C,
                          containerRef: t,
                          isExpanded: d,
                          onAcceptQuest: E
                      })
            })
        ]
    });
});
