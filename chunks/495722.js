(n.d(t, { Z: () => X }), n(388685), n(953529), n(314940));
var r = n(255367),
    s = n(73800),
    o = n(120356),
    a = n.n(o),
    i = n(405499),
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
    v = n(497505),
    _ = n(918701),
    y = n(184299),
    C = n(192023),
    O = n(373370),
    E = n(475595),
    S = n(720293),
    w = n(644646),
    P = n(78826),
    T = n(670638),
    N = n(341907),
    A = n(693900),
    R = n(164495),
    k = n(759853),
    B = n(205511),
    I = n(694802),
    q = n(95985),
    D = n(50476),
    Q = n(46140),
    V = n(743294),
    L = n(388032),
    M = n(921183);
function W(e) {
    var t, n;
    let { quest: o, onClick: i, reducedMotion: l, isExpanded: u } = e,
        [p, f] = s.useState(!1),
        x = s.useRef(null),
        h = (0, E.fh)(o, E.eC.QUEST_BAR_HERO_VIDEO),
        b = (0, S.z0)(o, c.X.WATCH_VIDEO, S.n1.VIDEO, S.O.THUMBNAIL),
        j = (0, y.km)((e) => e.getVideoProgressState);
    s.useEffect(() => {
        null != x.current && (u && (!l || p) ? ((x.current.currentTime = 0), x.current.play()) : x.current.pause());
    }, [x, p, l, u]);
    let v = j(o.id),
        _ = (null == (t = o.userStatus) ? void 0 : t.completedAt) != null && v === y.iw.COMPLETED,
        C = !_ && (!l || p);
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
                children: _
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
    return (0, r.jsx)(w.Z, {
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
    let { quest: t, taskDetails: n, expansionSpring: o, isInteractable: l, reducedMotion: c, containerRef: d, isExpanded: g, onAcceptQuest: x } = e,
        h = (0, u.e7)([j.Z], () => j.Z.isEnrolling(t.id), [t]),
        b = s.useMemo(() => (0, E.fh)(t, E.eC.QUEST_BAR_HERO), [t]),
        v = (0, O.CR)({ quest: t }),
        _ = (0, C.h)({
            location: Q.dr.QUESTS_BAR,
            questConfig: t.config
        }),
        y = s.useMemo(() => (0, E.fh)(t, E.eC.HERO_IMAGE), [t]),
        S = s.useMemo(() => (null == y ? {} : { backgroundImage: 'url('.concat(y.url, ')') }), [y]),
        w = (0, f.ZP)(),
        T = (0, p.wj)(w);
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
                        (0, r.jsx)(m.zxk, {
                            wrapperClassName: M.cta,
                            color: m.zxk.Colors.BRAND,
                            fullWidth: !0,
                            onClick: l ? x : void 0,
                            size: m.zxk.Sizes.SMALL,
                            submitting: h,
                            children: v
                        })
                    ]
                })
            }),
            _ &&
                null != y &&
                (0, r.jsx)(i.animated.div, {
                    className: M.contentCollapsedBackgroundWrapper,
                    style: {
                        opacity: o.to([0, 1], [1, 0])
                    },
                    children: (0, r.jsx)('div', {
                        className: M.contentCollapsedBackground,
                        style: S
                    })
                }),
            (0, r.jsxs)(i.animated.div, {
                className: M.heroAssetWrapper,
                style: {
                    backdropFilter: o.to([0, 1], [5, 0]).to((e) => 'blur('.concat(e, 'px)')),
                    filter: o.to([0, 1], [0.8, 1]).to((e) => 'brightness('.concat(e, ')'))
                },
                children: [
                    !_ &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(i.animated.div, {
                                    className: M.heroAssetDarken,
                                    style: {
                                        opacity: o.to([0, 1], [1, 0])
                                    }
                                }),
                                (0, r.jsx)(i.animated.div, {
                                    className: M.heroAssetTint,
                                    style: {
                                        backgroundColor: t.config.colors.primary,
                                        opacity: o.to([0, 1], [1, 0])
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
let z = s.forwardRef(function (e, t) {
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
                src: o.url,
                type: null != (n = o.mimetype) ? n : void 0
            })
        })
    );
});
function F(e) {
    var t;
    let { quest: n, taskDetails: o, expansionSpring: c, overlayRef: u, isExpanded: d, reducedMotion: p, containerRef: f, onCtxMenuOpen: g, onCtxMenuClose: x, onCtxMenuSelect: h } = e,
        j = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null,
        y = o.percentComplete > 0,
        C = (0, b.z)(n),
        [O, E, S] = (0, b.me)(n, o),
        w = s.useRef(null),
        P = (0, b.B6)(n.config.expiresAt),
        Z = (0, b._s)({ quest: n }),
        U = (0, _.q8)(n),
        H = (0, b.Jf)(n),
        z = s.useCallback(() => {
            (0, N.openVideoQuestModal)({
                quest: n,
                sourceQuestContent: v.jn.QUEST_BAR_V2
            });
        }, [n]),
        F = null != H ? H.percentComplete : o.percentComplete;
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
                                children: L.intl.format(L.t['pX+fmp'], { expirationDate: P })
                            }),
                            (0, r.jsx)(T.r, {
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
                    (0, r.jsx)(k.Z, {
                        expansionSpring: c,
                        overlayRef: u,
                        progressBarRef: w,
                        quest: n,
                        isExpanded: d
                    }),
                    (0, r.jsx)(q.Z, {
                        contentLocation: 'expanded',
                        quest: n,
                        progressBarRef: w,
                        isExpanded: !0,
                        percentComplete: F,
                        activeScreen: O
                    }),
                    (0, r.jsx)(A.n, {
                        children:
                            !j &&
                            !(0, _.Gd)(n) &&
                            (0, l.EQ)(O)
                                .with(v.LI.SELECT, () =>
                                    (0, r.jsx)(D.Z, {
                                        onConsole: () => S(Q.cd.CONSOLE),
                                        onDesktop: () => S(Q.cd.DESKTOP)
                                    })
                                )
                                .with(v.LI.DESKTOP, () => (0, r.jsx)(I.Z, { quest: n }))
                                .with(v.LI.CONSOLE, () =>
                                    (0, r.jsx)(B.Z, {
                                        quest: n,
                                        taskDetails: o
                                    })
                                )
                                .exhaustive()
                    }),
                    (0, r.jsxs)(A.n, {
                        children: [
                            U &&
                                (0, r.jsx)(W, {
                                    isExpanded: d,
                                    quest: n,
                                    onClick: z,
                                    reducedMotion: p
                                }),
                            (0, r.jsx)(R.y, {
                                quest: n,
                                useReducedMotion: p,
                                isExpanded: d,
                                awaitingConsoleConnections: Z,
                                hasMadeProgress: y,
                                isProgressing: C,
                                activeScreen: O,
                                showBackButton: O !== v.LI.SELECT && E.length > 1 && !y && !C,
                                onBack: () => S(null),
                                taskDetails: o,
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
let X = s.forwardRef(function (e, t) {
    var n;
    let { children: o, className: l, collapsedHeight: c, isExpanded: u, isExpansionAnimationComplete: d, expansionSpring: p, onCtxMenuOpen: m, onCtxMenuClose: f, onCtxMenuSelect: g, overlayRef: j, quest: y, useReducedMotion: C, taskDetails: O } = e,
        E = (0, _.q8)(y),
        S = (0, _.Vl)(y),
        { launchInGameActivity: w } = (0, b.zB)(y),
        P = s.useCallback(() => {
            let e = y.config.features.includes(Q.S7.START_QUEST_CTA),
                t = e ? x.jZ.START_QUEST : x.jZ.ACCEPT_QUEST;
            ((0, h.AH)(y.id, {
                questContent: v.jn.QUEST_BAR_V2,
                questContentCTA: t,
                sourceQuestContent: v.jn.QUEST_BAR_V2
            }),
                E &&
                    (0, N.openVideoQuestModal)({
                        quest: y,
                        sourceQuestContent: v.jn.QUEST_BAR_V2
                    }),
                S && e && w());
        }, [y, E, S, w]),
        T = (null == (n = y.userStatus) ? void 0 : n.enrolledAt) != null,
        A = u && d;
    return (0, r.jsxs)(i.animated.div, {
        'aria-hidden': !A,
        className: a()(l, M.contentExpanded, {
            [M.contentInteractable]: A,
            [M.contentExpandedAccepted]: T
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
                    ? (0, r.jsx)(F, {
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
                    : (0, r.jsx)(H, {
                          quest: y,
                          taskDetails: O,
                          expansionSpring: p,
                          isInteractable: A,
                          reducedMotion: C,
                          containerRef: t,
                          isExpanded: u,
                          onAcceptQuest: P
                      })
            })
        ]
    });
});
