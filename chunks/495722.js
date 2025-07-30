(n.d(t, { Z: () => X }), n(388685), n(953529), n(314940));
var r = n(255367),
    o = n(73800),
    s = n(120356),
    a = n.n(s),
    i = n(778141),
    l = n(278074),
    c = n(754700),
    u = n(442837),
    d = n(692547),
    p = n(780384),
    m = n(481060),
    f = n(410030),
    g = n(70097),
    x = n(617136),
    h = n(509212),
    b = n(272008),
    j = n(113434),
    _ = n(569984),
    v = n(497505),
    y = n(184299),
    C = n(192023),
    O = n(373370),
    E = n(475595),
    w = n(720293),
    S = n(644646),
    T = n(110560),
    P = n(78826),
    A = n(670638),
    N = n(693900),
    R = n(164495),
    B = n(759853),
    k = n(205511),
    I = n(694802),
    q = n(95985),
    D = n(50476),
    Q = n(46140),
    V = n(743294),
    L = n(388032),
    M = n(921183);
function W(e) {
    var t, n;
    let { quest: s, onClick: i, reducedMotion: l, isExpanded: u } = e,
        [p, f] = o.useState(!1),
        x = o.useRef(null),
        h = (0, E.fh)(s, E.eC.QUEST_BAR_HERO_VIDEO),
        b = (0, w.z0)(s, c.X.WATCH_VIDEO, w.n1.VIDEO, w.O.THUMBNAIL),
        j = (0, y.km)((e) => e.getVideoProgressState);
    o.useEffect(() => {
        null != x.current && (u && (!l || p) ? ((x.current.currentTime = 0), x.current.play()) : x.current.pause());
    }, [x, p, l, u]);
    let _ = j(s.id),
        v = (null == (t = s.userStatus) ? void 0 : t.completedAt) != null && _ === y.iw.COMPLETED,
        C = !v && (!l || p);
    return (0, r.jsxs)(m.P3F, {
        className: M.videoQuestPreviewCont,
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
                    className: M.assetBodyVideoPreviewMedia
                }),
            null != h
                ? (0, r.jsx)(g.Z, {
                      ref: x,
                      autoPlay: !1,
                      poster: null == b ? void 0 : b.url,
                      loop: !0,
                      muted: !0,
                      playsInline: !0,
                      className: a()(M.assetBodyVideoPreviewVideo, { [M.assetBodyVideoPreviewVisible]: C }),
                      controls: !1,
                      children: (0, r.jsx)('source', {
                          src: h.url,
                          type: null != (n = h.mimetype) ? n : void 0
                      })
                  })
                : null,
            (0, r.jsx)('div', {
                className: M.previewPlayButtonCont,
                children: v
                    ? (0, r.jsx)(m.Oe7, {
                          color: d.Z.colors.WHITE,
                          className: M.previewPlayButton
                      })
                    : (0, r.jsx)(m.o1U, {
                          color: d.Z.colors.WHITE,
                          className: M.previewPlayButton
                      })
            })
        ]
    });
}
function Z(e) {
    let { quest: t } = e;
    return (0, r.jsx)(S.Z, {
        className: a()(M.rewardTile, M.hiddenRewardTile),
        learnMoreStyle: 'text',
        quest: t,
        questContent: v.jn.QUEST_BAR_V2,
        location: Q.dr.QUESTS_BAR,
        sourceQuestContent: v.jn.QUEST_BAR_V2
    });
}
function U(e) {
    return (0, r.jsx)(m.Text, {
        className: M.description,
        variant: 'text-xs/normal',
        children: (0, O.DD)({
            quest: e.quest,
            location: Q.dr.QUESTS_BAR,
            questContent: v.jn.QUEST_BAR_V2,
            taskDetails: e.taskDetails,
            sourceQuestContent: v.jn.QUEST_BAR_V2
        })
    });
}
function H(e) {
    let { quest: t, taskDetails: n, expansionSpring: s, isInteractable: l, reducedMotion: c, containerRef: d, isExpanded: g, onAcceptQuest: x } = e,
        h = (0, u.e7)([_.Z], () => _.Z.isEnrolling(t.id), [t]),
        b = o.useMemo(() => (0, E.fh)(t, E.eC.QUEST_BAR_HERO), [t]),
        j = (0, O.CR)({ quest: t }),
        v = (0, C.h)({
            location: Q.dr.QUESTS_BAR,
            questConfig: t.config
        }),
        y = o.useMemo(() => (0, E.fh)(t, E.eC.HERO_IMAGE), [t]),
        w = o.useMemo(() => (null == y ? {} : { backgroundImage: 'url('.concat(y.url, ')') }), [y]),
        S = (0, f.ZP)(),
        T = (0, p.wj)(S);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', {
                children: (0, r.jsxs)('div', {
                    className: M.questPromoContent,
                    ref: d,
                    children: [
                        (0, r.jsxs)('div', {
                            className: M.details,
                            children: [
                                (0, r.jsx)(Z, { quest: t }),
                                (0, r.jsx)(m.X6q, {
                                    className: M.title,
                                    color: 'header-primary',
                                    variant: 'heading-md/medium',
                                    children: L.intl.format(L.t.EQa7oq, { questName: t.config.messages.questName })
                                }),
                                (0, r.jsx)(U, {
                                    quest: t,
                                    taskDetails: n
                                })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: M.cta,
                            children: (0, r.jsx)(m.zxk, {
                                variant: 'primary',
                                onClick: l ? x : void 0,
                                loading: h,
                                text: j,
                                size: 'sm',
                                fullWidth: !0
                            })
                        })
                    ]
                })
            }),
            v &&
                null != y &&
                (0, r.jsx)(i.animated.div, {
                    className: M.contentCollapsedBackgroundWrapper,
                    style: {
                        opacity: s.to([0, 1], [1, 0])
                    },
                    children: (0, r.jsx)('div', {
                        className: M.contentCollapsedBackground,
                        style: w
                    })
                }),
            (0, r.jsxs)(i.animated.div, {
                className: M.heroAssetWrapper,
                style: {
                    backdropFilter: s.to([0, 1], [5, 0]).to((e) => 'blur('.concat(e, 'px)')),
                    filter: s.to([0, 1], [0.8, 1]).to((e) => 'brightness('.concat(e, ')'))
                },
                children: [
                    !v &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(i.animated.div, {
                                    className: M.heroAssetDarken,
                                    style: {
                                        opacity: s.to([0, 1], [1, 0])
                                    }
                                }),
                                (0, r.jsx)(i.animated.div, {
                                    className: M.heroAssetTint,
                                    style: {
                                        backgroundColor: t.config.colors.primary,
                                        opacity: s.to([0, 1], [1, 0])
                                    }
                                })
                            ]
                        }),
                    b.isAnimated
                        ? (0, r.jsx)(P.Fl, {
                              id: 'QuestBarV2ContentExpanded_heroAnimated',
                              children: (e) =>
                                  (0, r.jsx)(z, {
                                      ref: e,
                                      asset: b,
                                      isExpanded: g,
                                      reducedMotion: c
                                  })
                          })
                        : (0, r.jsx)(P.Fl, {
                              id: 'QuestBarV2ContentExpanded_heroStatic',
                              children: (e) =>
                                  (0, r.jsx)('img', {
                                      ref: e,
                                      alt: '',
                                      className: M.heroAsset,
                                      src: b.url
                                  })
                          }),
                    (0, r.jsx)('div', { className: a()(M.legibilityGradient, { [M.legibilityGradientDark]: T }) })
                ]
            })
        ]
    });
}
let z = o.forwardRef(function (e, t) {
    var n;
    let { asset: s, isExpanded: a, reducedMotion: i } = e,
        l = o.useRef(null);
    return (
        o.useEffect(() => {
            null != l.current && l.current.pause();
        }, []),
        o.useEffect(() => {
            null == l.current || i || (a ? ((l.current.currentTime = 0), l.current.play()) : l.current.pause());
        }, [i, a]),
        (0, r.jsx)(g.Z, {
            ref: (e) => {
                null != e && ((l.current = e), null != t && ('function' == typeof t ? t(e) : (t.current = e)));
            },
            autoPlay: !0,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: M.heroAsset,
            controls: !1,
            children: (0, r.jsx)('source', {
                src: s.url,
                type: null != (n = s.mimetype) ? n : void 0
            })
        })
    );
});
function F(e) {
    var t;
    let { quest: n, taskDetails: s, expansionSpring: c, overlayRef: u, isExpanded: d, reducedMotion: p, containerRef: f, onCtxMenuOpen: g, onCtxMenuClose: b, onCtxMenuSelect: _ } = e,
        y = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null,
        C = s.percentComplete > 0,
        O = (0, j.z)(n),
        [E, w, S] = (0, j.me)(n, s),
        P = o.useRef(null),
        Z = (0, j.B6)(n.config.expiresAt),
        U = (0, j._s)({ quest: n }),
        H = (0, h.q8)(n),
        z = (0, j.Jf)(n),
        F = o.useCallback(() => {
            (0, T.openVideoQuestModal)({
                quest: n,
                questContent: v.jn.QUEST_BAR_V2,
                sourceQuestContent: v.jn.QUEST_BAR_V2,
                sourceQuestContentCTA: x.jZ.QUEST_BAR_VIDEO_QUEST_PREVIEW
            });
        }, [n]),
        X = null != z ? z.percentComplete : s.percentComplete;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i.animated.div, {
                className: a()(M.postEnrollmentBackground, M.postEnrollmentBackgroundCollapsed),
                style: {
                    backgroundImage: 'linear-gradient(90deg, '.concat(V.aY, ', ').concat(V.v6, ')'),
                    opacity: c.to({
                        range: [0, 1],
                        output: [1, 0]
                    })
                }
            }),
            (0, r.jsxs)('div', {
                className: M.questAcceptedContent,
                ref: f,
                children: [
                    (0, r.jsxs)('div', {
                        className: M.questAcceptedHeader,
                        children: [
                            (0, r.jsx)(m.Text, {
                                variant: 'text-xxs/medium',
                                className: a()(M.flex, M.headerText),
                                children: L.intl.format(L.t['pX+fmp'], { expirationDate: Z })
                            }),
                            (0, r.jsx)(A.r, {
                                onOpen: g,
                                onClose: b,
                                onSelect: _,
                                questContent: v.jn.QUEST_BAR_V2,
                                quest: n,
                                shouldShowDisclosure: !1,
                                showShareLink: !0,
                                sourceQuestContent: v.jn.QUEST_BAR_V2,
                                children: (e) => {
                                    var t, n;
                                    return (0, r.jsx)(
                                        m.P3F,
                                        ((t = (function (e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var n = null != arguments[t] ? arguments[t] : {},
                                                    r = Object.keys(n);
                                                ('function' == typeof Object.getOwnPropertySymbols &&
                                                    (r = r.concat(
                                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                        })
                                                    )),
                                                    r.forEach(function (t) {
                                                        var r;
                                                        ((r = n[t]),
                                                            t in e
                                                                ? Object.defineProperty(e, t, {
                                                                      value: r,
                                                                      enumerable: !0,
                                                                      configurable: !0,
                                                                      writable: !0
                                                                  })
                                                                : (e[t] = r));
                                                    }));
                                            }
                                            return e;
                                        })({}, e)),
                                        (n = n =
                                            {
                                                className: M.submenuWrapper,
                                                'aria-label': L.intl.string(L.t.DEoVWV),
                                                children: (0, r.jsx)(m.xhG, {
                                                    size: 'md',
                                                    color: 'currentColor',
                                                    className: a()(M.submenuIcon, M.interactiveNormal)
                                                })
                                            }),
                                        Object.getOwnPropertyDescriptors
                                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                            : (function (e, t) {
                                                  var n = Object.keys(e);
                                                  if (Object.getOwnPropertySymbols) {
                                                      var r = Object.getOwnPropertySymbols(e);
                                                      n.push.apply(n, r);
                                                  }
                                                  return n;
                                              })(Object(n)).forEach(function (e) {
                                                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                              }),
                                        t)
                                    );
                                }
                            })
                        ]
                    }),
                    (0, r.jsx)('div', { className: M.divider }),
                    (0, r.jsx)(B.Z, {
                        expansionSpring: c,
                        overlayRef: u,
                        progressBarRef: P,
                        quest: n,
                        isExpanded: d
                    }),
                    (0, r.jsx)(q.Z, {
                        contentLocation: 'expanded',
                        quest: n,
                        progressBarRef: P,
                        isExpanded: !0,
                        percentComplete: X,
                        activeScreen: E
                    }),
                    (0, r.jsx)(N.n, {
                        children:
                            !y &&
                            !(0, h.Gd)(n) &&
                            (0, l.EQ)(E)
                                .with(v.LI.SELECT, () =>
                                    (0, r.jsx)(D.Z, {
                                        onConsole: () => S(Q.cd.CONSOLE),
                                        onDesktop: () => S(Q.cd.DESKTOP)
                                    })
                                )
                                .with(v.LI.DESKTOP, () => (0, r.jsx)(I.Z, { quest: n }))
                                .with(v.LI.CONSOLE, () =>
                                    (0, r.jsx)(k.Z, {
                                        quest: n,
                                        taskDetails: s
                                    })
                                )
                                .exhaustive()
                    }),
                    (0, r.jsxs)(N.n, {
                        children: [
                            H &&
                                (0, r.jsx)(W, {
                                    isExpanded: d,
                                    quest: n,
                                    onClick: F,
                                    reducedMotion: p
                                }),
                            (0, r.jsx)(R.y, {
                                quest: n,
                                useReducedMotion: p,
                                isExpanded: d,
                                awaitingConsoleConnections: U,
                                hasMadeProgress: C,
                                isProgressing: O,
                                activeScreen: E,
                                showBackButton: E !== v.LI.SELECT && w.length > 1 && !C && !O,
                                onBack: () => S(null),
                                taskDetails: s,
                                sourceQuestContent: v.jn.QUEST_BAR_V2
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: a()(M.postEnrollmentBackground, M.postEnrollmentBackgroundExpanded),
                style: { backgroundImage: 'linear-gradient(90deg, '.concat(V.aY, ', ').concat(V.v6, ')') }
            })
        ]
    });
}
let X = o.forwardRef(function (e, t) {
    var n;
    let { children: s, className: l, collapsedHeight: c, isExpanded: u, isExpansionAnimationComplete: d, expansionSpring: p, onCtxMenuOpen: m, onCtxMenuClose: f, onCtxMenuSelect: g, overlayRef: _, quest: y, useReducedMotion: C, taskDetails: O } = e,
        E = (0, h.q8)(y),
        w = (0, h.Vl)(y),
        { launchInGameActivity: S } = (0, j.zB)(y),
        P = o.useCallback(() => {
            let e = y.config.features.includes(Q.S7.START_QUEST_CTA),
                t = e ? x.jZ.START_QUEST : x.jZ.ACCEPT_QUEST;
            ((0, b.AH)(y.id, {
                questContent: v.jn.QUEST_BAR_V2,
                questContentCTA: t,
                sourceQuestContent: v.jn.QUEST_BAR_V2
            }),
                E &&
                    (0, T.openVideoQuestModal)({
                        quest: y,
                        questContent: v.jn.QUEST_BAR_V2,
                        sourceQuestContent: v.jn.QUEST_BAR_V2,
                        sourceQuestContentCTA: t
                    }),
                w && e && S());
        }, [y, E, w, S]),
        A = (null == (n = y.userStatus) ? void 0 : n.enrolledAt) != null,
        N = u && d;
    return (0, r.jsxs)(i.animated.div, {
        'aria-hidden': !N,
        className: a()(l, M.contentExpanded, {
            [M.contentInteractable]: N,
            [M.contentExpandedAccepted]: A
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
                children: A
                    ? (0, r.jsx)(F, {
                          quest: y,
                          taskDetails: O,
                          expansionSpring: p,
                          overlayRef: _,
                          isExpanded: u,
                          reducedMotion: C,
                          onCtxMenuOpen: m,
                          onCtxMenuClose: f,
                          onCtxMenuSelect: g,
                          containerRef: t
                      })
                    : (0, r.jsx)(H, {
                          quest: y,
                          taskDetails: O,
                          expansionSpring: p,
                          isInteractable: N,
                          reducedMotion: C,
                          containerRef: t,
                          isExpanded: u,
                          onAcceptQuest: P
                      })
            })
        ]
    });
});
