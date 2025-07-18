(n.d(t, { Z: () => K }), n(388685), n(953529), n(314940));
var r = n(255367),
    s = n(73800),
    o = n(120356),
    a = n.n(o),
    i = n(104721),
    l = n(278074),
    c = n(754700),
    u = n(442837),
    d = n(692547),
    p = n(780384),
    m = n(755721),
    f = n(481060),
    g = n(410030),
    x = n(70097),
    h = n(617136),
    b = n(272008),
    j = n(113434),
    _ = n(569984),
    v = n(497505),
    y = n(918701),
    C = n(184299),
    O = n(192023),
    E = n(373370),
    S = n(475595),
    w = n(720293),
    P = n(644646),
    T = n(78826),
    N = n(670638),
    A = n(341907),
    R = n(693900),
    B = n(164495),
    k = n(759853),
    q = n(205511),
    I = n(694802),
    D = n(95985),
    Q = n(50476),
    V = n(46140),
    L = n(743294),
    M = n(388032),
    W = n(921183);
function Z(e) {
    var t, n;
    let { quest: o, onClick: i, reducedMotion: l, isExpanded: u } = e,
        [p, m] = s.useState(!1),
        g = s.useRef(null),
        h = (0, S.fh)(o, S.eC.QUEST_BAR_HERO_VIDEO),
        b = (0, w.z0)(o, c.X.WATCH_VIDEO, w.n1.VIDEO, w.O.THUMBNAIL),
        j = (0, C.km)((e) => e.getVideoProgressState);
    s.useEffect(() => {
        null != g.current && (u && (!l || p) ? ((g.current.currentTime = 0), g.current.play()) : g.current.pause());
    }, [g, p, l, u]);
    let _ = j(o.id),
        v = (null == (t = o.userStatus) ? void 0 : t.completedAt) != null && _ === C.iw.COMPLETED,
        y = !v && (!l || p);
    return (0, r.jsxs)(f.P3F, {
        className: W.videoQuestPreviewCont,
        onClick: i,
        onMouseEnter: () => {
            l && !p && m(!0);
        },
        onMouseLeave: () => {
            l && p && m(!1);
        },
        children: [
            null != b &&
                (0, r.jsx)('img', {
                    alt: '',
                    src: b.url,
                    className: W.assetBodyVideoPreviewMedia
                }),
            null != h
                ? (0, r.jsx)(x.Z, {
                      ref: g,
                      autoPlay: !1,
                      poster: null == b ? void 0 : b.url,
                      loop: !0,
                      muted: !0,
                      playsInline: !0,
                      className: a()(W.assetBodyVideoPreviewVideo, { [W.assetBodyVideoPreviewVisible]: y }),
                      controls: !1,
                      children: (0, r.jsx)('source', {
                          src: h.url,
                          type: null != (n = h.mimetype) ? n : void 0
                      })
                  })
                : null,
            (0, r.jsx)('div', {
                className: W.previewPlayButtonCont,
                children: v
                    ? (0, r.jsx)(f.Oe7, {
                          color: d.Z.colors.WHITE,
                          className: W.previewPlayButton
                      })
                    : (0, r.jsx)(f.o1U, {
                          color: d.Z.colors.WHITE,
                          className: W.previewPlayButton
                      })
            })
        ]
    });
}
function U(e) {
    let { quest: t } = e;
    return (0, r.jsx)(P.Z, {
        className: a()(W.rewardTile, W.hiddenRewardTile),
        learnMoreStyle: 'text',
        quest: t,
        questContent: v.jn.QUEST_BAR_V2,
        location: V.dr.QUESTS_BAR,
        sourceQuestContent: v.jn.QUEST_BAR_V2
    });
}
function H(e) {
    return (0, r.jsx)(f.Text, {
        className: W.description,
        variant: 'text-xs/normal',
        children: (0, E.DD)({
            quest: e.quest,
            location: V.dr.QUESTS_BAR,
            questContent: v.jn.QUEST_BAR_V2,
            taskDetails: e.taskDetails,
            sourceQuestContent: v.jn.QUEST_BAR_V2
        })
    });
}
function z(e) {
    let { quest: t, taskDetails: n, expansionSpring: o, isInteractable: l, reducedMotion: c, containerRef: d, isExpanded: x, onAcceptQuest: h } = e,
        b = (0, u.e7)([_.Z], () => _.Z.isEnrolling(t.id), [t]),
        j = s.useMemo(() => (0, S.fh)(t, S.eC.QUEST_BAR_HERO), [t]),
        v = (0, E.CR)({ quest: t }),
        y = (0, O.h)({
            location: V.dr.QUESTS_BAR,
            questConfig: t.config
        }),
        C = s.useMemo(() => (0, S.fh)(t, S.eC.HERO_IMAGE), [t]),
        w = s.useMemo(() => (null == C ? {} : { backgroundImage: 'url('.concat(C.url, ')') }), [C]),
        P = (0, g.ZP)(),
        N = (0, p.wj)(P);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', {
                children: (0, r.jsxs)('div', {
                    className: W.questPromoContent,
                    ref: d,
                    children: [
                        (0, r.jsxs)('div', {
                            className: W.details,
                            children: [
                                (0, r.jsx)(U, { quest: t }),
                                (0, r.jsx)(f.X6q, {
                                    className: W.title,
                                    color: 'header-primary',
                                    variant: 'heading-md/medium',
                                    children: M.intl.format(M.t.EQa7oq, { questName: t.config.messages.questName })
                                }),
                                (0, r.jsx)(H, {
                                    quest: t,
                                    taskDetails: n
                                })
                            ]
                        }),
                        (0, r.jsx)(m.zx, {
                            wrapperClassName: W.cta,
                            color: m.zx.Colors.BRAND,
                            fullWidth: !0,
                            onClick: l ? h : void 0,
                            size: m.zx.Sizes.SMALL,
                            submitting: b,
                            children: v
                        })
                    ]
                })
            }),
            y &&
                null != C &&
                (0, r.jsx)(i.animated.div, {
                    className: W.contentCollapsedBackgroundWrapper,
                    style: {
                        opacity: o.to([0, 1], [1, 0])
                    },
                    children: (0, r.jsx)('div', {
                        className: W.contentCollapsedBackground,
                        style: w
                    })
                }),
            (0, r.jsxs)(i.animated.div, {
                className: W.heroAssetWrapper,
                style: {
                    backdropFilter: o.to([0, 1], [5, 0]).to((e) => 'blur('.concat(e, 'px)')),
                    filter: o.to([0, 1], [0.8, 1]).to((e) => 'brightness('.concat(e, ')'))
                },
                children: [
                    !y &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(i.animated.div, {
                                    className: W.heroAssetDarken,
                                    style: {
                                        opacity: o.to([0, 1], [1, 0])
                                    }
                                }),
                                (0, r.jsx)(i.animated.div, {
                                    className: W.heroAssetTint,
                                    style: {
                                        backgroundColor: t.config.colors.primary,
                                        opacity: o.to([0, 1], [1, 0])
                                    }
                                })
                            ]
                        }),
                    j.isAnimated
                        ? (0, r.jsx)(T.Fl, {
                              id: 'QuestBarV2ContentExpanded_heroAnimated',
                              children: (e) =>
                                  (0, r.jsx)(F, {
                                      ref: e,
                                      asset: j,
                                      isExpanded: x,
                                      reducedMotion: c
                                  })
                          })
                        : (0, r.jsx)(T.Fl, {
                              id: 'QuestBarV2ContentExpanded_heroStatic',
                              children: (e) =>
                                  (0, r.jsx)('img', {
                                      ref: e,
                                      alt: '',
                                      className: W.heroAsset,
                                      src: j.url
                                  })
                          }),
                    (0, r.jsx)('div', { className: a()(W.legibilityGradient, { [W.legibilityGradientDark]: N }) })
                ]
            })
        ]
    });
}
let F = s.forwardRef(function (e, t) {
    var n;
    let { asset: o, isExpanded: a, reducedMotion: i } = e,
        l = s.useRef(null);
    return (
        s.useEffect(() => {
            null != l.current && l.current.pause();
        }, []),
        s.useEffect(() => {
            null == l.current || i || (a ? ((l.current.currentTime = 0), l.current.play()) : l.current.pause());
        }, [i, a]),
        (0, r.jsx)(x.Z, {
            ref: (e) => {
                null != e && ((l.current = e), null != t && ('function' == typeof t ? t(e) : (t.current = e)));
            },
            autoPlay: !0,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: W.heroAsset,
            controls: !1,
            children: (0, r.jsx)('source', {
                src: o.url,
                type: null != (n = o.mimetype) ? n : void 0
            })
        })
    );
});
function X(e) {
    var t;
    let { quest: n, taskDetails: o, expansionSpring: c, overlayRef: u, isExpanded: d, reducedMotion: p, containerRef: m, onCtxMenuOpen: g, onCtxMenuClose: x, onCtxMenuSelect: h } = e,
        b = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null,
        _ = o.percentComplete > 0,
        C = (0, j.z)(n),
        [O, E, S] = (0, j.me)(n, o),
        w = s.useRef(null),
        P = (0, j.B6)(n.config.expiresAt),
        T = (0, j._s)({ quest: n }),
        U = (0, y.q8)(n),
        H = (0, j.Jf)(n),
        z = s.useCallback(() => {
            (0, A.openVideoQuestModal)({
                quest: n,
                sourceQuestContent: v.jn.QUEST_BAR_V2
            });
        }, [n]),
        F = null != H ? H.percentComplete : o.percentComplete;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i.animated.div, {
                className: a()(W.postEnrollmentBackground, W.postEnrollmentBackgroundCollapsed),
                style: {
                    backgroundImage: 'linear-gradient(90deg, '.concat(L.aY, ', ').concat(L.v6, ')'),
                    opacity: c.to({
                        range: [0, 1],
                        output: [1, 0]
                    })
                }
            }),
            (0, r.jsxs)('div', {
                className: W.questAcceptedContent,
                ref: m,
                children: [
                    (0, r.jsxs)('div', {
                        className: W.questAcceptedHeader,
                        children: [
                            (0, r.jsx)(f.Text, {
                                variant: 'text-xxs/medium',
                                className: a()(W.flex, W.headerText),
                                children: M.intl.format(M.t['pX+fmp'], { expirationDate: P })
                            }),
                            (0, r.jsx)(N.r, {
                                onOpen: g,
                                onClose: x,
                                onSelect: h,
                                questContent: v.jn.QUEST_BAR_V2,
                                quest: n,
                                shouldShowDisclosure: !1,
                                showShareLink: !0,
                                sourceQuestContent: v.jn.QUEST_BAR_V2,
                                children: (e) => {
                                    var t, n;
                                    return (0, r.jsx)(
                                        f.P3F,
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
                                                className: W.submenuWrapper,
                                                'aria-label': M.intl.string(M.t.DEoVWV),
                                                children: (0, r.jsx)(f.xhG, {
                                                    size: 'md',
                                                    color: 'currentColor',
                                                    className: a()(W.submenuIcon, W.interactiveNormal)
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
                    (0, r.jsx)('div', { className: W.divider }),
                    (0, r.jsx)(k.Z, {
                        expansionSpring: c,
                        overlayRef: u,
                        progressBarRef: w,
                        quest: n,
                        isExpanded: d
                    }),
                    (0, r.jsx)(D.Z, {
                        contentLocation: 'expanded',
                        quest: n,
                        progressBarRef: w,
                        isExpanded: !0,
                        percentComplete: F,
                        activeScreen: O
                    }),
                    (0, r.jsx)(R.n, {
                        children:
                            !b &&
                            !(0, y.Gd)(n) &&
                            (0, l.EQ)(O)
                                .with(v.LI.SELECT, () =>
                                    (0, r.jsx)(Q.Z, {
                                        onConsole: () => S(V.cd.CONSOLE),
                                        onDesktop: () => S(V.cd.DESKTOP)
                                    })
                                )
                                .with(v.LI.DESKTOP, () => (0, r.jsx)(I.Z, { quest: n }))
                                .with(v.LI.CONSOLE, () =>
                                    (0, r.jsx)(q.Z, {
                                        quest: n,
                                        taskDetails: o
                                    })
                                )
                                .exhaustive()
                    }),
                    (0, r.jsxs)(R.n, {
                        children: [
                            U &&
                                (0, r.jsx)(Z, {
                                    isExpanded: d,
                                    quest: n,
                                    onClick: z,
                                    reducedMotion: p
                                }),
                            (0, r.jsx)(B.y, {
                                quest: n,
                                useReducedMotion: p,
                                isExpanded: d,
                                awaitingConsoleConnections: T,
                                hasMadeProgress: _,
                                isProgressing: C,
                                activeScreen: O,
                                showBackButton: O !== v.LI.SELECT && E.length > 1 && !_ && !C,
                                onBack: () => S(null),
                                taskDetails: o,
                                sourceQuestContent: v.jn.QUEST_BAR_V2
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: a()(W.postEnrollmentBackground, W.postEnrollmentBackgroundExpanded),
                style: { backgroundImage: 'linear-gradient(90deg, '.concat(L.aY, ', ').concat(L.v6, ')') }
            })
        ]
    });
}
let K = s.forwardRef(function (e, t) {
    var n;
    let { children: o, className: l, collapsedHeight: c, isExpanded: u, isExpansionAnimationComplete: d, expansionSpring: p, onCtxMenuOpen: m, onCtxMenuClose: f, onCtxMenuSelect: g, overlayRef: x, quest: _, useReducedMotion: C, taskDetails: O } = e,
        E = (0, y.q8)(_),
        S = (0, y.Vl)(_),
        { launchInGameActivity: w } = (0, j.zB)(_),
        P = s.useCallback(() => {
            let e = _.config.features.includes(V.S7.START_QUEST_CTA),
                t = e ? h.jZ.START_QUEST : h.jZ.ACCEPT_QUEST;
            ((0, b.AH)(_.id, {
                questContent: v.jn.QUEST_BAR_V2,
                questContentCTA: t,
                sourceQuestContent: v.jn.QUEST_BAR_V2
            }),
                E &&
                    (0, A.openVideoQuestModal)({
                        quest: _,
                        sourceQuestContent: v.jn.QUEST_BAR_V2
                    }),
                S && e && w());
        }, [_, E, S, w]),
        T = (null == (n = _.userStatus) ? void 0 : n.enrolledAt) != null,
        N = u && d;
    return (0, r.jsxs)(i.animated.div, {
        'aria-hidden': !N,
        className: a()(l, W.contentExpanded, {
            [W.contentInteractable]: N,
            [W.contentExpandedAccepted]: T
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
                    ? (0, r.jsx)(X, {
                          quest: _,
                          taskDetails: O,
                          expansionSpring: p,
                          overlayRef: x,
                          isExpanded: u,
                          reducedMotion: C,
                          onCtxMenuOpen: m,
                          onCtxMenuClose: f,
                          onCtxMenuSelect: g,
                          containerRef: t
                      })
                    : (0, r.jsx)(z, {
                          quest: _,
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
