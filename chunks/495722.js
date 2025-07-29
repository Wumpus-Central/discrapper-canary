(n.d(t, { Z: () => K }), n(388685), n(953529), n(314940));
var r = n(255367),
    o = n(73800),
    s = n(120356),
    a = n.n(s),
    i = n(564854),
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
    b = n(509212),
    j = n(272008),
    _ = n(113434),
    v = n(569984),
    y = n(497505),
    C = n(184299),
    O = n(192023),
    E = n(373370),
    w = n(475595),
    S = n(720293),
    T = n(644646),
    P = n(110560),
    A = n(78826),
    N = n(670638),
    R = n(693900),
    B = n(164495),
    k = n(759853),
    I = n(205511),
    q = n(694802),
    D = n(95985),
    Q = n(50476),
    V = n(46140),
    L = n(743294),
    M = n(388032),
    W = n(921183);
function Z(e) {
    var t, n;
    let { quest: s, onClick: i, reducedMotion: l, isExpanded: u } = e,
        [p, m] = o.useState(!1),
        g = o.useRef(null),
        h = (0, w.fh)(s, w.eC.QUEST_BAR_HERO_VIDEO),
        b = (0, S.z0)(s, c.X.WATCH_VIDEO, S.n1.VIDEO, S.O.THUMBNAIL),
        j = (0, C.km)((e) => e.getVideoProgressState);
    o.useEffect(() => {
        null != g.current && (u && (!l || p) ? ((g.current.currentTime = 0), g.current.play()) : g.current.pause());
    }, [g, p, l, u]);
    let _ = j(s.id),
        v = (null == (t = s.userStatus) ? void 0 : t.completedAt) != null && _ === C.iw.COMPLETED,
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
    return (0, r.jsx)(T.Z, {
        className: a()(W.rewardTile, W.hiddenRewardTile),
        learnMoreStyle: 'text',
        quest: t,
        questContent: y.jn.QUEST_BAR_V2,
        location: V.dr.QUESTS_BAR,
        sourceQuestContent: y.jn.QUEST_BAR_V2
    });
}
function H(e) {
    return (0, r.jsx)(f.Text, {
        className: W.description,
        variant: 'text-xs/normal',
        children: (0, E.DD)({
            quest: e.quest,
            location: V.dr.QUESTS_BAR,
            questContent: y.jn.QUEST_BAR_V2,
            taskDetails: e.taskDetails,
            sourceQuestContent: y.jn.QUEST_BAR_V2
        })
    });
}
function z(e) {
    let { quest: t, taskDetails: n, expansionSpring: s, isInteractable: l, reducedMotion: c, containerRef: d, isExpanded: x, onAcceptQuest: h } = e,
        b = (0, u.e7)([v.Z], () => v.Z.isEnrolling(t.id), [t]),
        j = o.useMemo(() => (0, w.fh)(t, w.eC.QUEST_BAR_HERO), [t]),
        _ = (0, E.CR)({ quest: t }),
        y = (0, O.h)({
            location: V.dr.QUESTS_BAR,
            questConfig: t.config
        }),
        C = o.useMemo(() => (0, w.fh)(t, w.eC.HERO_IMAGE), [t]),
        S = o.useMemo(() => (null == C ? {} : { backgroundImage: 'url('.concat(C.url, ')') }), [C]),
        T = (0, g.ZP)(),
        P = (0, p.wj)(T);
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
                            children: _
                        })
                    ]
                })
            }),
            y &&
                null != C &&
                (0, r.jsx)(i.animated.div, {
                    className: W.contentCollapsedBackgroundWrapper,
                    style: {
                        opacity: s.to([0, 1], [1, 0])
                    },
                    children: (0, r.jsx)('div', {
                        className: W.contentCollapsedBackground,
                        style: S
                    })
                }),
            (0, r.jsxs)(i.animated.div, {
                className: W.heroAssetWrapper,
                style: {
                    backdropFilter: s.to([0, 1], [5, 0]).to((e) => 'blur('.concat(e, 'px)')),
                    filter: s.to([0, 1], [0.8, 1]).to((e) => 'brightness('.concat(e, ')'))
                },
                children: [
                    !y &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(i.animated.div, {
                                    className: W.heroAssetDarken,
                                    style: {
                                        opacity: s.to([0, 1], [1, 0])
                                    }
                                }),
                                (0, r.jsx)(i.animated.div, {
                                    className: W.heroAssetTint,
                                    style: {
                                        backgroundColor: t.config.colors.primary,
                                        opacity: s.to([0, 1], [1, 0])
                                    }
                                })
                            ]
                        }),
                    j.isAnimated
                        ? (0, r.jsx)(A.Fl, {
                              id: 'QuestBarV2ContentExpanded_heroAnimated',
                              children: (e) =>
                                  (0, r.jsx)(F, {
                                      ref: e,
                                      asset: j,
                                      isExpanded: x,
                                      reducedMotion: c
                                  })
                          })
                        : (0, r.jsx)(A.Fl, {
                              id: 'QuestBarV2ContentExpanded_heroStatic',
                              children: (e) =>
                                  (0, r.jsx)('img', {
                                      ref: e,
                                      alt: '',
                                      className: W.heroAsset,
                                      src: j.url
                                  })
                          }),
                    (0, r.jsx)('div', { className: a()(W.legibilityGradient, { [W.legibilityGradientDark]: P }) })
                ]
            })
        ]
    });
}
let F = o.forwardRef(function (e, t) {
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
                src: s.url,
                type: null != (n = s.mimetype) ? n : void 0
            })
        })
    );
});
function X(e) {
    var t;
    let { quest: n, taskDetails: s, expansionSpring: c, overlayRef: u, isExpanded: d, reducedMotion: p, containerRef: m, onCtxMenuOpen: g, onCtxMenuClose: x, onCtxMenuSelect: j } = e,
        v = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null,
        C = s.percentComplete > 0,
        O = (0, _.z)(n),
        [E, w, S] = (0, _.me)(n, s),
        T = o.useRef(null),
        A = (0, _.B6)(n.config.expiresAt),
        U = (0, _._s)({ quest: n }),
        H = (0, b.q8)(n),
        z = (0, _.Jf)(n),
        F = o.useCallback(() => {
            (0, P.openVideoQuestModal)({
                quest: n,
                questContent: y.jn.QUEST_BAR_V2,
                sourceQuestContent: y.jn.QUEST_BAR_V2,
                sourceQuestContentCTA: h.jZ.QUEST_BAR_VIDEO_QUEST_PREVIEW
            });
        }, [n]),
        X = null != z ? z.percentComplete : s.percentComplete;
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
                                children: M.intl.format(M.t['pX+fmp'], { expirationDate: A })
                            }),
                            (0, r.jsx)(N.r, {
                                onOpen: g,
                                onClose: x,
                                onSelect: j,
                                questContent: y.jn.QUEST_BAR_V2,
                                quest: n,
                                shouldShowDisclosure: !1,
                                showShareLink: !0,
                                sourceQuestContent: y.jn.QUEST_BAR_V2,
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
                        progressBarRef: T,
                        quest: n,
                        isExpanded: d
                    }),
                    (0, r.jsx)(D.Z, {
                        contentLocation: 'expanded',
                        quest: n,
                        progressBarRef: T,
                        isExpanded: !0,
                        percentComplete: X,
                        activeScreen: E
                    }),
                    (0, r.jsx)(R.n, {
                        children:
                            !v &&
                            !(0, b.Gd)(n) &&
                            (0, l.EQ)(E)
                                .with(y.LI.SELECT, () =>
                                    (0, r.jsx)(Q.Z, {
                                        onConsole: () => S(V.cd.CONSOLE),
                                        onDesktop: () => S(V.cd.DESKTOP)
                                    })
                                )
                                .with(y.LI.DESKTOP, () => (0, r.jsx)(q.Z, { quest: n }))
                                .with(y.LI.CONSOLE, () =>
                                    (0, r.jsx)(I.Z, {
                                        quest: n,
                                        taskDetails: s
                                    })
                                )
                                .exhaustive()
                    }),
                    (0, r.jsxs)(R.n, {
                        children: [
                            H &&
                                (0, r.jsx)(Z, {
                                    isExpanded: d,
                                    quest: n,
                                    onClick: F,
                                    reducedMotion: p
                                }),
                            (0, r.jsx)(B.y, {
                                quest: n,
                                useReducedMotion: p,
                                isExpanded: d,
                                awaitingConsoleConnections: U,
                                hasMadeProgress: C,
                                isProgressing: O,
                                activeScreen: E,
                                showBackButton: E !== y.LI.SELECT && w.length > 1 && !C && !O,
                                onBack: () => S(null),
                                taskDetails: s,
                                sourceQuestContent: y.jn.QUEST_BAR_V2
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
let K = o.forwardRef(function (e, t) {
    var n;
    let { children: s, className: l, collapsedHeight: c, isExpanded: u, isExpansionAnimationComplete: d, expansionSpring: p, onCtxMenuOpen: m, onCtxMenuClose: f, onCtxMenuSelect: g, overlayRef: x, quest: v, useReducedMotion: C, taskDetails: O } = e,
        E = (0, b.q8)(v),
        w = (0, b.Vl)(v),
        { launchInGameActivity: S } = (0, _.zB)(v),
        T = o.useCallback(() => {
            let e = v.config.features.includes(V.S7.START_QUEST_CTA),
                t = e ? h.jZ.START_QUEST : h.jZ.ACCEPT_QUEST;
            ((0, j.AH)(v.id, {
                questContent: y.jn.QUEST_BAR_V2,
                questContentCTA: t,
                sourceQuestContent: y.jn.QUEST_BAR_V2
            }),
                E &&
                    (0, P.openVideoQuestModal)({
                        quest: v,
                        questContent: y.jn.QUEST_BAR_V2,
                        sourceQuestContent: y.jn.QUEST_BAR_V2,
                        sourceQuestContentCTA: t
                    }),
                w && e && S());
        }, [v, E, w, S]),
        A = (null == (n = v.userStatus) ? void 0 : n.enrolledAt) != null,
        N = u && d;
    return (0, r.jsxs)(i.animated.div, {
        'aria-hidden': !N,
        className: a()(l, W.contentExpanded, {
            [W.contentInteractable]: N,
            [W.contentExpandedAccepted]: A
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
                    ? (0, r.jsx)(X, {
                          quest: v,
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
                          quest: v,
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
