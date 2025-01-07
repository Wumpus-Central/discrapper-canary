n(47120), n(627341);
var o = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    i = n(752877),
    l = n(278074),
    c = n(442837),
    d = n(692547),
    u = n(481060),
    p = n(70097),
    m = n(617136),
    x = n(272008),
    f = n(113434),
    g = n(569984),
    h = n(497505),
    C = n(918701),
    v = n(184299),
    j = n(665430),
    _ = n(585500),
    b = n(475595),
    N = n(720293),
    E = n(644646),
    B = n(78826),
    T = n(64141),
    S = n(341907),
    y = n(693900),
    A = n(164495),
    R = n(759853),
    w = n(205511),
    I = n(694802),
    k = n(95985),
    q = n(50476),
    P = n(46140),
    M = n(743294),
    O = n(388032),
    L = n(748628);
function W(e) {
    var t;
    let { quest: n, onClick: s, containerClassName: i, imgClassName: l, reducedMotion: c } = e,
        [m, x] = r.useState(!1),
        f = r.useRef(null),
        g = (0, N.z)(N.i.QUEST_BAR_PREVIEW_VIDEO, n),
        h = (0, N.z)(N.i.VIDEO_PLAYER_THUMBNAIL, n),
        C = (0, v.km)((e) => e.getVideoProgressState);
    r.useEffect(() => {
        null != f.current && (c && m && (f.current.currentTime = 0), f.current.play());
    }, [f, m, c]);
    let j = C(n.id),
        _ = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null && j === v.iw.COMPLETED,
        b = !_ && (!c || m);
    return (0, o.jsxs)(u.Clickable, {
        className: a()(L.videoQuestPreviewCont, i),
        onClick: s,
        onMouseEnter: () => {
            c && !m && x(!0);
        },
        onMouseLeave: () => {
            c && m && x(!1);
        },
        children: [
            null != h &&
                (0, o.jsx)('img', {
                    alt: '',
                    src: h.url,
                    className: a()(L.assetBodyVideoPreviewMedia, l)
                }),
            null != g
                ? (0, o.jsx)(p.Z, {
                      ref: f,
                      autoPlay: !0,
                      poster: null == h ? void 0 : h.url,
                      loop: !0,
                      muted: !0,
                      playsInline: !0,
                      className: a()(L.assetBodyVideoPreviewMedia, L.assetBodyVideoPreviewVideo, { [L.assetBodyVideoPreviewVisible]: b }),
                      controls: !1,
                      children: (0, o.jsx)('source', {
                          src: g.url,
                          type: g.mimetype
                      })
                  })
                : null,
            (0, o.jsx)('div', {
                className: L.previewPlayButtonCont,
                children: _
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
    return (0, o.jsx)(E.Z, {
        className: a()(L.rewardTile, L.hiddenRewardTile),
        learnMoreStyle: 'text',
        quest: t,
        questContent: h.jn.QUEST_BAR_V2,
        location: P.dr.QUESTS_BAR
    });
}
function Q(e) {
    let { quest: t, taskDetails: n, expansionSpring: s, isInteractable: a, reducedMotion: l, containerRef: d, isExpanded: m, onAcceptQuest: x } = e,
        f = (0, c.e7)([g.Z], () => g.Z.isEnrolling(t.id), [t]),
        v = r.useMemo(() => (0, b.fh)(t, b.eC.QUEST_BAR_HERO), [t]),
        j = r.useRef(null),
        N = (0, _.D)({
            quest: t,
            location: P.dr.QUESTS_BAR,
            questContent: h.jn.QUEST_BAR_V2,
            taskDetails: n
        });
    r.useEffect(() => {
        null != j.current && (l && m ? (j.current.pause(), (j.current.currentTime = 0)) : !l && m && j.current.play());
    }, [l, m]);
    let E = (0, C.q8)(t) ? O.intl.string(O.t.umdNio) : O.intl.string(O.t.l7E81t);
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
                                    children: O.intl.format(O.t.EQa7oq, { questName: t.config.messages.questName })
                                }),
                                (0, o.jsx)(u.Text, {
                                    className: L.description,
                                    variant: 'text-xs/normal',
                                    children: N
                                })
                            ]
                        }),
                        (0, o.jsx)(u.Button, {
                            className: L.cta,
                            color: u.Button.Colors.BRAND,
                            fullWidth: !0,
                            onClick: a ? x : void 0,
                            size: u.Button.Sizes.SMALL,
                            submitting: f,
                            children: E
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
                    v.isAnimated
                        ? (0, o.jsx)(B.Fl, {
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
                                              src: v.url,
                                              type: null !== (t = v.mimetype) && void 0 !== t ? t : void 0
                                          })
                                      })
                                  );
                              }
                          })
                        : (0, o.jsx)(B.Fl, {
                              id: 'QuestBarV2ContentExpanded_heroStatic',
                              children: (e) =>
                                  (0, o.jsx)('img', {
                                      ref: e,
                                      alt: '',
                                      className: L.heroAsset,
                                      src: v.url
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
function D(e) {
    var t;
    let { quest: n, taskDetails: s, expansionSpring: c, overlayRef: d, isExpanded: p, reducedMotion: m, containerRef: x, onCtxMenuOpen: g, onCtxMenuClose: v, onCtxMenuSelect: _ } = e,
        b = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        N = s.percentComplete > 0,
        E = (0, f.z)(n),
        [B, Z, Q] = (0, f.me)(n, s),
        D = (0, j.pF)({ location: P.dr.QUESTS_BAR }),
        H = r.useRef(null),
        V = (0, f.B6)(n.config.expiresAt),
        U = (0, f._s)({ quest: n }),
        z = (0, C.q8)(n),
        F = r.useCallback(() => {
            (0, S.openVideoQuestModal)(n);
        }, [n]);
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsx)(i.animated.div, {
                className: a()(L.postEnrollmentBackground, L.postEnrollmentBackgroundCollapsed),
                style: {
                    backgroundImage: 'linear-gradient(90deg, '.concat(M.aY, ', ').concat(M.v6, ')'),
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
                                children: O.intl.format(O.t['pX+fmp'], { expirationDate: V })
                            }),
                            (0, o.jsx)(T.r, {
                                onOpen: g,
                                onClose: v,
                                onSelect: _,
                                questContent: h.jn.QUEST_BAR_V2,
                                quest: n,
                                shouldShowDisclosure: !1,
                                showShareLink: !0,
                                children: (e) =>
                                    (0, o.jsx)(u.Clickable, {
                                        ...e,
                                        className: L.submenuWrapper,
                                        'aria-label': O.intl.string(O.t.DEoVWV),
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
                    (0, o.jsx)(R.Z, {
                        expansionSpring: c,
                        overlayRef: d,
                        progressBarRef: H,
                        quest: n,
                        isExpanded: p
                    }),
                    (0, o.jsx)(k.Z, {
                        contentLocation: 'expanded',
                        quest: n,
                        progressBarRef: H,
                        isExpanded: !0,
                        taskDetails: s,
                        activeScreen: B
                    }),
                    (0, o.jsx)(y.n, {
                        children:
                            !b &&
                            !(0, C.Gd)(n) &&
                            (0, l.EQ)(B)
                                .with(h.LI.SELECT, () =>
                                    (0, o.jsx)(q.Z, {
                                        onConsole: () => Q(P.cd.CONSOLE),
                                        onDesktop: () => Q(P.cd.DESKTOP)
                                    })
                                )
                                .with(h.LI.DESKTOP, () => (0, o.jsx)(I.Z, { quest: n }))
                                .with(h.LI.CONSOLE, () =>
                                    (0, o.jsx)(w.Z, {
                                        quest: n,
                                        taskDetails: s
                                    })
                                )
                                .exhaustive()
                    }),
                    (0, o.jsxs)(y.n, {
                        children: [
                            z &&
                                (0, o.jsx)(W, {
                                    quest: n,
                                    onClick: F,
                                    containerClassName: L.enrolledVideoPreview,
                                    imgClassName: L.enrolledVideoPreviewImg,
                                    reducedMotion: m
                                }),
                            (0, o.jsx)(A.yD, {
                                quest: n,
                                useReducedMotion: m,
                                isExpanded: p,
                                awaitingConsoleConnections: U,
                                hasMadeProgress: N,
                                isProgressing: E,
                                activeScreen: B,
                                showBackButton: B !== h.LI.SELECT && Z.length > 1 && !N && !E && D,
                                onBack: () => Q(null),
                                taskDetails: s
                            })
                        ]
                    })
                ]
            }),
            (0, o.jsx)('div', {
                className: a()(L.postEnrollmentBackground, L.postEnrollmentBackgroundExpanded),
                style: { backgroundImage: 'linear-gradient(90deg, '.concat(M.aY, ', ').concat(M.v6, ')') }
            })
        ]
    });
}
let H = r.forwardRef(function (e, t) {
    var n;
    let { children: s, className: l, collapsedHeight: c, isExpanded: d, isExpansionAnimationComplete: u, expansionSpring: p, onCtxMenuOpen: f, onCtxMenuClose: g, onCtxMenuSelect: v, overlayRef: j, quest: _, useReducedMotion: b, taskDetails: N } = e,
        E = (0, C.q8)(_),
        B = r.useCallback(() => {
            (0, x.AH)(_.id, {
                questContent: h.jn.QUEST_BAR_V2,
                questContentCTA: m.jZ.ACCEPT_QUEST
            }),
                E && (0, S.openVideoQuestModal)(_);
        }, [_, E]),
        T = (null === (n = _.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null,
        y = d && u;
    return (0, o.jsxs)(i.animated.div, {
        'aria-hidden': !y,
        className: a()(l, L.contentExpanded, {
            [L.contentInteractable]: y,
            [L.contentExpandedAccepted]: T
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
                children: T
                    ? (0, o.jsx)(D, {
                          quest: _,
                          taskDetails: N,
                          expansionSpring: p,
                          overlayRef: j,
                          isExpanded: d,
                          reducedMotion: b,
                          onCtxMenuOpen: f,
                          onCtxMenuClose: g,
                          onCtxMenuSelect: v,
                          containerRef: t
                      })
                    : (0, o.jsx)(Q, {
                          quest: _,
                          taskDetails: N,
                          expansionSpring: p,
                          isInteractable: y,
                          reducedMotion: b,
                          containerRef: t,
                          isExpanded: d,
                          onAcceptQuest: B
                      })
            })
        ]
    });
});
t.Z = H;
