n(47120), n(627341);
var o = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    i = n(476183),
    l = n(278074),
    c = n(442837),
    d = n(692547),
    u = n(481060),
    p = n(70097),
    m = n(617136),
    x = n(272008),
    g = n(113434),
    h = n(569984),
    f = n(497505),
    v = n(918701),
    C = n(184299),
    j = n(665430),
    _ = n(585500),
    T = n(475595),
    E = n(720293),
    S = n(644646),
    b = n(78826),
    N = n(64141),
    B = n(341907),
    y = n(693900),
    A = n(164495),
    w = n(759853),
    R = n(205511),
    I = n(694802),
    P = n(95985),
    k = n(50476),
    O = n(46140),
    q = n(743294),
    M = n(388032),
    L = n(748628);
function D(e) {
    var t;
    let { quest: n, onClick: s, reducedMotion: i } = e,
        [l, c] = r.useState(!1),
        m = r.useRef(null),
        x = (0, E.z)(E.i.QUEST_BAR_PREVIEW_VIDEO, n),
        g = (0, E.z)(E.i.VIDEO_PLAYER_THUMBNAIL, n),
        h = (0, C.km)((e) => e.getVideoProgressState);
    r.useEffect(() => {
        null != m.current && (i && l && (m.current.currentTime = 0), m.current.play());
    }, [m, l, i]);
    let f = h(n.id),
        v = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null && f === C.iw.COMPLETED,
        j = !v && (!i || l);
    return (0, o.jsxs)(u.Clickable, {
        className: L.videoQuestPreviewCont,
        onClick: s,
        onMouseEnter: () => {
            i && !l && c(!0);
        },
        onMouseLeave: () => {
            i && l && c(!1);
        },
        children: [
            null != g &&
                (0, o.jsx)('img', {
                    alt: '',
                    src: g.url,
                    className: L.assetBodyVideoPreviewMedia
                }),
            null != x
                ? (0, o.jsx)(p.Z, {
                      ref: m,
                      autoPlay: !0,
                      poster: null == g ? void 0 : g.url,
                      loop: !0,
                      muted: !0,
                      playsInline: !0,
                      className: a()(L.assetBodyVideoPreviewVideo, { [L.assetBodyVideoPreviewVisible]: j }),
                      controls: !1,
                      children: (0, o.jsx)('source', {
                          src: x.url,
                          type: x.mimetype
                      })
                  })
                : null,
            (0, o.jsx)('div', {
                className: L.previewPlayButtonCont,
                children: v
                    ? (0, o.jsx)(u.RetryIcon, {
                          color: d.Z.colors.WHITE,
                          className: L.previewPlayButton
                      })
                    : (0, o.jsx)(u.PlayIcon, {
                          color: d.Z.colors.WHITE,
                          className: L.previewPlayButton
                      })
            })
        ]
    });
}
function Z(e) {
    let { quest: t } = e;
    return (0, o.jsx)(S.Z, {
        className: a()(L.rewardTile, L.hiddenRewardTile),
        learnMoreStyle: 'text',
        quest: t,
        questContent: f.jn.QUEST_BAR_V2,
        location: O.dr.QUESTS_BAR
    });
}
function V(e) {
    let { quest: t, taskDetails: n, expansionSpring: s, isInteractable: a, reducedMotion: l, containerRef: d, isExpanded: m, onAcceptQuest: x } = e,
        g = (0, c.e7)([h.Z], () => h.Z.isEnrolling(t.id), [t]),
        C = r.useMemo(() => (0, T.fh)(t, T.eC.QUEST_BAR_HERO), [t]),
        j = r.useRef(null),
        E = (0, _.D)({
            quest: t,
            location: O.dr.QUESTS_BAR,
            questContent: f.jn.QUEST_BAR_V2,
            taskDetails: n
        });
    r.useEffect(() => {
        null != j.current && (l && m ? (j.current.pause(), (j.current.currentTime = 0)) : !l && m && j.current.play());
    }, [l, m]);
    let S = (0, v.q8)(t) ? M.intl.string(M.t.umdNio) : M.intl.string(M.t.l7E81t);
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsx)('div', {
                children: (0, o.jsxs)('div', {
                    className: L.questPromoContent,
                    ref: d,
                    children: [
                        (0, o.jsxs)('div', {
                            className: L.details,
                            children: [
                                (0, o.jsx)(Z, { quest: t }),
                                (0, o.jsx)(u.Heading, {
                                    className: L.title,
                                    variant: 'heading-md/medium',
                                    children: M.intl.format(M.t.EQa7oq, { questName: t.config.messages.questName })
                                }),
                                (0, o.jsx)(u.Text, {
                                    className: L.description,
                                    variant: 'text-xs/normal',
                                    children: E
                                })
                            ]
                        }),
                        (0, o.jsx)(u.Button, {
                            className: L.cta,
                            color: u.Button.Colors.BRAND,
                            fullWidth: !0,
                            onClick: a ? x : void 0,
                            size: u.Button.Sizes.SMALL,
                            submitting: g,
                            children: S
                        })
                    ]
                })
            }),
            (0, o.jsxs)(i.animated.div, {
                className: L.heroAssetWrapper,
                style: {
                    backdropFilter: s.to([0, 1], [5, 0]).to((e) => 'blur('.concat(e, 'px)')),
                    filter: s.to([0, 1], [0.8, 1]).to((e) => 'brightness('.concat(e, ')'))
                },
                children: [
                    (0, o.jsx)(i.animated.div, {
                        className: L.heroAssetDarken,
                        style: {
                            opacity: s.to([0, 1], [1, 0])
                        }
                    }),
                    (0, o.jsx)(i.animated.div, {
                        className: L.heroAssetTint,
                        style: {
                            backgroundColor: t.config.colors.primary,
                            opacity: s.to([0, 1], [1, 0])
                        }
                    }),
                    C.isAnimated
                        ? (0, o.jsx)(b.Fl, {
                              id: 'QuestBarV2ContentExpanded_heroAnimated',
                              children: (e) => {
                                  var t;
                                  return (
                                      null != e.current && (j.current = e.current),
                                      (0, o.jsx)(p.Z, {
                                          ref: e,
                                          autoPlay: !l && m,
                                          loop: !0,
                                          muted: !0,
                                          playsInline: !0,
                                          className: L.heroAsset,
                                          controls: !1,
                                          children: (0, o.jsx)('source', {
                                              src: C.url,
                                              type: null !== (t = C.mimetype) && void 0 !== t ? t : void 0
                                          })
                                      })
                                  );
                              }
                          })
                        : (0, o.jsx)(b.Fl, {
                              id: 'QuestBarV2ContentExpanded_heroStatic',
                              children: (e) =>
                                  (0, o.jsx)('img', {
                                      ref: e,
                                      alt: '',
                                      className: L.heroAsset,
                                      src: C.url
                                  })
                          }),
                    (0, o.jsx)(i.animated.div, {
                        className: L.legibilityGradient,
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
function W(e) {
    var t;
    let { quest: n, taskDetails: s, expansionSpring: c, overlayRef: d, isExpanded: p, reducedMotion: m, containerRef: x, onCtxMenuOpen: h, onCtxMenuClose: C, onCtxMenuSelect: _ } = e,
        T = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        E = s.percentComplete > 0,
        S = (0, g.z)(n),
        [b, Z, V] = (0, g.me)(n, s),
        W = (0, j.pF)({ location: O.dr.QUESTS_BAR }),
        H = r.useRef(null),
        Q = (0, g.B6)(n.config.expiresAt),
        U = (0, g._s)({ quest: n }),
        F = (0, v.q8)(n),
        K = r.useCallback(() => {
            (0, B.openVideoQuestModal)(n);
        }, [n]);
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsx)(i.animated.div, {
                className: a()(L.postEnrollmentBackground, L.postEnrollmentBackgroundCollapsed),
                style: {
                    backgroundImage: 'linear-gradient(90deg, '.concat(q.aY, ', ').concat(q.v6, ')'),
                    opacity: c.to({
                        range: [0, 1],
                        output: [1, 0]
                    })
                }
            }),
            (0, o.jsxs)('div', {
                className: L.questAcceptedContent,
                ref: x,
                children: [
                    (0, o.jsxs)('div', {
                        className: L.questAcceptedHeader,
                        children: [
                            (0, o.jsx)(u.Text, {
                                variant: 'text-xxs/medium',
                                className: a()(L.flex, L.headerText),
                                children: M.intl.format(M.t['pX+fmp'], { expirationDate: Q })
                            }),
                            (0, o.jsx)(N.r, {
                                onOpen: h,
                                onClose: C,
                                onSelect: _,
                                questContent: f.jn.QUEST_BAR_V2,
                                quest: n,
                                shouldShowDisclosure: !1,
                                showShareLink: !0,
                                children: (e) =>
                                    (0, o.jsx)(u.Clickable, {
                                        ...e,
                                        className: L.submenuWrapper,
                                        'aria-label': M.intl.string(M.t.DEoVWV),
                                        children: (0, o.jsx)(u.MoreHorizontalIcon, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: a()(L.submenuIcon, L.interactiveNormal)
                                        })
                                    })
                            })
                        ]
                    }),
                    (0, o.jsx)('div', { className: L.divider }),
                    (0, o.jsx)(w.Z, {
                        expansionSpring: c,
                        overlayRef: d,
                        progressBarRef: H,
                        quest: n,
                        isExpanded: p
                    }),
                    (0, o.jsx)(P.Z, {
                        contentLocation: 'expanded',
                        quest: n,
                        progressBarRef: H,
                        isExpanded: !0,
                        taskDetails: s,
                        activeScreen: b
                    }),
                    (0, o.jsx)(y.n, {
                        children:
                            !T &&
                            !(0, v.Gd)(n) &&
                            (0, l.EQ)(b)
                                .with(f.LI.SELECT, () =>
                                    (0, o.jsx)(k.Z, {
                                        onConsole: () => V(O.cd.CONSOLE),
                                        onDesktop: () => V(O.cd.DESKTOP)
                                    })
                                )
                                .with(f.LI.DESKTOP, () => (0, o.jsx)(I.Z, { quest: n }))
                                .with(f.LI.CONSOLE, () =>
                                    (0, o.jsx)(R.Z, {
                                        quest: n,
                                        taskDetails: s
                                    })
                                )
                                .exhaustive()
                    }),
                    (0, o.jsxs)(y.n, {
                        children: [
                            F &&
                                (0, o.jsx)(D, {
                                    quest: n,
                                    onClick: K,
                                    reducedMotion: m
                                }),
                            (0, o.jsx)(A.yD, {
                                quest: n,
                                useReducedMotion: m,
                                isExpanded: p,
                                awaitingConsoleConnections: U,
                                hasMadeProgress: E,
                                isProgressing: S,
                                activeScreen: b,
                                showBackButton: b !== f.LI.SELECT && Z.length > 1 && !E && !S && W,
                                onBack: () => V(null),
                                taskDetails: s
                            })
                        ]
                    })
                ]
            }),
            (0, o.jsx)('div', {
                className: a()(L.postEnrollmentBackground, L.postEnrollmentBackgroundExpanded),
                style: { backgroundImage: 'linear-gradient(90deg, '.concat(q.aY, ', ').concat(q.v6, ')') }
            })
        ]
    });
}
let H = r.forwardRef(function (e, t) {
    var n;
    let { children: s, className: l, collapsedHeight: c, isExpanded: d, isExpansionAnimationComplete: u, expansionSpring: p, onCtxMenuOpen: g, onCtxMenuClose: h, onCtxMenuSelect: C, overlayRef: j, quest: _, useReducedMotion: T, taskDetails: E } = e,
        S = (0, v.q8)(_),
        b = r.useCallback(() => {
            (0, x.AH)(_.id, {
                questContent: f.jn.QUEST_BAR_V2,
                questContentCTA: m.jZ.ACCEPT_QUEST
            }),
                S && (0, B.openVideoQuestModal)(_);
        }, [_, S]),
        N = (null === (n = _.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null,
        y = d && u;
    return (0, o.jsxs)(i.animated.div, {
        'aria-hidden': !y,
        className: a()(l, L.contentExpanded, {
            [L.contentInteractable]: y,
            [L.contentExpandedAccepted]: N
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
            (0, o.jsx)(i.animated.div, {
                style: { opacity: 1 },
                children: N
                    ? (0, o.jsx)(W, {
                          quest: _,
                          taskDetails: E,
                          expansionSpring: p,
                          overlayRef: j,
                          isExpanded: d,
                          reducedMotion: T,
                          onCtxMenuOpen: g,
                          onCtxMenuClose: h,
                          onCtxMenuSelect: C,
                          containerRef: t
                      })
                    : (0, o.jsx)(V, {
                          quest: _,
                          taskDetails: E,
                          expansionSpring: p,
                          isInteractable: y,
                          reducedMotion: T,
                          containerRef: t,
                          isExpanded: d,
                          onAcceptQuest: b
                      })
            })
        ]
    });
});
t.Z = H;
