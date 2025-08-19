n.d(t, { Z: () => Y }), n(388685), n(953529), n(314940);
var r = n(951288),
    s = n(647438),
    o = n(120356),
    a = n.n(o),
    i = n(803948),
    l = n(278074),
    c = n(754700),
    d = n(442837),
    u = n(692547),
    p = n(780384),
    m = n(481060),
    f = n(410030),
    g = n(70097),
    x = n(617136),
    h = n(509212),
    b = n(272008),
    _ = n(113434),
    j = n(569984),
    v = n(497505),
    C = n(184299),
    y = n(192023),
    E = n(111131),
    O = n(373370),
    S = n(475595),
    T = n(720293),
    w = n(644646),
    P = n(110560),
    A = n(78826),
    N = n(693900),
    R = n(164495),
    B = n(759853),
    k = n(205511),
    I = n(694802),
    q = n(95985),
    Q = n(688927),
    D = n(50476),
    V = n(46140),
    M = n(743294),
    L = n(388032),
    W = n(475832);
function Z(e) {
    var t, n;
    let { quest: o, onClick: i, reducedMotion: l, isExpanded: d } = e,
        [p, f] = s.useState(!1),
        x = s.useRef(null),
        h = (0, S.fh)(o, S.eC.QUEST_BAR_HERO_VIDEO),
        b = (0, T.z0)(o, c.X.WATCH_VIDEO, T.n1.VIDEO, T.O.THUMBNAIL),
        _ = (0, C.km)((e) => e.getVideoProgressState);
    s.useEffect(() => {
        null != x.current && (d && (!l || p) ? ((x.current.currentTime = 0), x.current.play()) : x.current.pause());
    }, [x, p, l, d]);
    let j = _(o.id),
        v = (null == (t = o.userStatus) ? void 0 : t.completedAt) != null && j === C.iw.COMPLETED,
        y = !v && (!l || p);
    return (0, r.jsxs)(m.P3F, {
        className: W.videoQuestPreviewCont,
        onClick: i,
        onMouseEnter: () => {
            l && !p && f(!0);
        },
        onMouseLeave: () => {
            l && p && f(!1);
        },
        children: [
            null != b &&
                (0, r.jsx)("img", {
                    alt: "",
                    src: b.url,
                    className: W.assetBodyVideoPreviewMedia,
                }),
            null != h
                ? (0, r.jsx)(g.Z, {
                      ref: x,
                      autoPlay: !1,
                      poster: null == b ? void 0 : b.url,
                      loop: !0,
                      muted: !0,
                      playsInline: !0,
                      className: a()(W.assetBodyVideoPreviewVideo, { [W.assetBodyVideoPreviewVisible]: y }),
                      controls: !1,
                      children: (0, r.jsx)("source", {
                          src: h.url,
                          type: null != (n = h.mimetype) ? n : void 0,
                      }),
                  })
                : null,
            (0, r.jsx)("div", {
                className: W.previewPlayButtonCont,
                children: v
                    ? (0, r.jsx)(m.Oe7, {
                          color: u.Z.colors.WHITE,
                          className: W.previewPlayButton,
                      })
                    : (0, r.jsx)(m.o1U, {
                          color: u.Z.colors.WHITE,
                          className: W.previewPlayButton,
                      }),
            }),
        ],
    });
}
function U(e) {
    let { quest: t } = e;
    return (0, r.jsx)(w.Z, {
        className: a()(W.rewardTile, W.hiddenRewardTile),
        learnMoreStyle: "text",
        quest: t,
        questContent: v.jn.QUEST_BAR_V2,
        location: V.dr.QUESTS_BAR,
        sourceQuestContent: v.jn.QUEST_BAR_V2,
    });
}
function H(e) {
    return (0, r.jsx)(m.Text, {
        className: W.description,
        variant: "text-xs/normal",
        children: (0, O.DD)({
            quest: e.quest,
            location: V.dr.QUESTS_BAR,
            questContent: v.jn.QUEST_BAR_V2,
            taskDetails: e.taskDetails,
            sourceQuestContent: v.jn.QUEST_BAR_V2,
        }),
    });
}
function F(e) {
    let {
            quest: t,
            taskDetails: n,
            expansionSpring: o,
            isInteractable: l,
            reducedMotion: c,
            containerRef: u,
            isExpanded: g,
            onAcceptQuest: x,
        } = e,
        h = (0, d.e7)([j.Z], () => j.Z.isEnrolling(t.id), [t]),
        b = s.useMemo(() => (0, S.fh)(t, S.eC.QUEST_BAR_HERO), [t]),
        _ = (0, O.CR)({ quest: t }),
        v = (0, y.h)({
            location: V.dr.QUESTS_BAR,
            questConfig: t.config,
        }),
        C = s.useMemo(() => (0, S.fh)(t, S.eC.HERO_IMAGE), [t]),
        E = s.useMemo(() => (null == C ? {} : { backgroundImage: "url(".concat(C.url, ")") }), [C]),
        T = (0, f.ZP)(),
        w = (0, p.wj)(T);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                children: (0, r.jsxs)("div", {
                    className: W.questPromoContent,
                    ref: u,
                    children: [
                        (0, r.jsxs)("div", {
                            className: W.details,
                            children: [
                                (0, r.jsx)(U, { quest: t }),
                                (0, r.jsx)(m.X6q, {
                                    className: W.title,
                                    color: "header-primary",
                                    variant: "heading-md/medium",
                                    children: L.intl.format(L.t.EQa7oq, { questName: t.config.messages.questName }),
                                }),
                                (0, r.jsx)(H, {
                                    quest: t,
                                    taskDetails: n,
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: W.cta,
                            children: (0, r.jsx)(m.zxk, {
                                variant: "primary",
                                onClick: l ? x : void 0,
                                loading: h,
                                text: _,
                                size: "sm",
                                fullWidth: !0,
                            }),
                        }),
                    ],
                }),
            }),
            v &&
                null != C &&
                (0, r.jsx)(i.animated.div, {
                    className: W.contentCollapsedBackgroundWrapper,
                    style: {
                        opacity: o.to([0, 1], [1, 0]),
                    },
                    children: (0, r.jsx)("div", {
                        className: W.contentCollapsedBackground,
                        style: E,
                    }),
                }),
            (0, r.jsxs)(i.animated.div, {
                className: W.heroAssetWrapper,
                style: {
                    backdropFilter: o.to([0, 1], [5, 0]).to((e) => "blur(".concat(e, "px)")),
                    filter: o.to([0, 1], [0.8, 1]).to((e) => "brightness(".concat(e, ")")),
                },
                children: [
                    !v &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(i.animated.div, {
                                    className: W.heroAssetDarken,
                                    style: {
                                        opacity: o.to([0, 1], [1, 0]),
                                    },
                                }),
                                (0, r.jsx)(i.animated.div, {
                                    className: W.heroAssetTint,
                                    style: {
                                        backgroundColor: t.config.colors.primary,
                                        opacity: o.to([0, 1], [1, 0]),
                                    },
                                }),
                            ],
                        }),
                    b.isAnimated
                        ? (0, r.jsx)(A.Fl, {
                              id: "QuestBarV2ContentExpanded_heroAnimated",
                              children: (e) =>
                                  (0, r.jsx)(z, {
                                      ref: e,
                                      asset: b,
                                      isExpanded: g,
                                      reducedMotion: c,
                                  }),
                          })
                        : (0, r.jsx)(A.Fl, {
                              id: "QuestBarV2ContentExpanded_heroStatic",
                              children: (e) =>
                                  (0, r.jsx)("img", {
                                      ref: e,
                                      alt: "",
                                      className: W.heroAsset,
                                      src: b.url,
                                  }),
                          }),
                    (0, r.jsx)("div", { className: a()(W.legibilityGradient, { [W.legibilityGradientDark]: w }) }),
                ],
            }),
        ],
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
                null != e && ((l.current = e), null != t && ("function" == typeof t ? t(e) : (t.current = e)));
            },
            autoPlay: !0,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: W.heroAsset,
            controls: !1,
            children: (0, r.jsx)("source", {
                src: o.url,
                type: null != (n = o.mimetype) ? n : void 0,
            }),
        })
    );
});
function X(e) {
    var t;
    let {
            quest: n,
            taskDetails: o,
            expansionSpring: c,
            overlayRef: d,
            isExpanded: u,
            reducedMotion: p,
            containerRef: m,
            onCtxMenuOpen: f,
            onCtxMenuClose: g,
            onCtxMenuSelect: b,
        } = e,
        j = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null,
        C = o.percentComplete > 0,
        y = (0, _.z)(n),
        [E, O, S] = (0, _.me)(n, o),
        T = s.useRef(null),
        w = (0, _._s)({ quest: n }),
        A = (0, h.q8)(n),
        L = (0, _.Jf)(n),
        U = s.useCallback(() => {
            (0, P.openVideoQuestModal)({
                quest: n,
                questContent: v.jn.QUEST_BAR_V2,
                sourceQuestContent: v.jn.QUEST_BAR_V2,
                sourceQuestContentCTA: x.jZ.QUEST_BAR_VIDEO_QUEST_PREVIEW,
            });
        }, [n]),
        H = null != L ? L.percentComplete : o.percentComplete;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i.animated.div, {
                className: a()(W.postEnrollmentBackground, W.postEnrollmentBackgroundCollapsed),
                style: {
                    backgroundImage: "linear-gradient(90deg, ".concat(M.aY, ", ").concat(M.v6, ")"),
                    opacity: c.to({
                        range: [0, 1],
                        output: [1, 0],
                    }),
                },
            }),
            (0, r.jsxs)("div", {
                className: W.questAcceptedContent,
                ref: m,
                children: [
                    (0, r.jsx)(Q.Z, {
                        quest: n,
                        onCtxMenuOpen: f,
                        onCtxMenuClose: g,
                        onCtxMenuSelect: b,
                    }),
                    (0, r.jsx)("div", { className: W.divider }),
                    (0, r.jsx)(B.Z, {
                        expansionSpring: c,
                        overlayRef: d,
                        progressBarRef: T,
                        quest: n,
                        isExpanded: u,
                        isHovered: !1,
                        shouldShowRewardsCTAWhenCollapsed: !1,
                    }),
                    (0, r.jsx)(q.Z, {
                        contentLocation: "expanded",
                        quest: n,
                        progressBarRef: T,
                        isExpanded: !0,
                        percentComplete: H,
                        activeScreen: E,
                    }),
                    (0, r.jsx)(N.n, {
                        children:
                            !j &&
                            !(0, h.Gd)(n) &&
                            (0, l.EQ)(E)
                                .with(v.LI.SELECT, () =>
                                    (0, r.jsx)(D.Z, {
                                        onConsole: () => S(V.cd.CONSOLE),
                                        onDesktop: () => S(V.cd.DESKTOP),
                                    }),
                                )
                                .with(v.LI.DESKTOP, () => (0, r.jsx)(I.Z, { quest: n }))
                                .with(v.LI.CONSOLE, () =>
                                    (0, r.jsx)(k.Z, {
                                        quest: n,
                                        taskDetails: o,
                                    }),
                                )
                                .exhaustive(),
                    }),
                    (0, r.jsxs)(N.n, {
                        children: [
                            A &&
                                (0, r.jsx)(Z, {
                                    isExpanded: u,
                                    quest: n,
                                    onClick: U,
                                    reducedMotion: p,
                                }),
                            (0, r.jsx)(R.y, {
                                quest: n,
                                useReducedMotion: p,
                                isExpanded: u,
                                awaitingConsoleConnections: w,
                                hasMadeProgress: C,
                                isProgressing: y,
                                activeScreen: E,
                                showBackButton: E !== v.LI.SELECT && O.length > 1 && !C && !y,
                                onBack: () => S(null),
                                taskDetails: o,
                                sourceQuestContent: v.jn.QUEST_BAR_V2,
                                shouldShowRewardsCTAWhenCollapsed: !1,
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: a()(W.postEnrollmentBackground, W.postEnrollmentBackgroundExpanded),
                style: { backgroundImage: "linear-gradient(90deg, ".concat(M.aY, ", ").concat(M.v6, ")") },
            }),
        ],
    });
}
async function K(e, t, n, r) {
    if ((0, h.q8)(e) && (0, E.R)(V.dr.QUESTS_BAR))
        return void (await (0, b.AH)(e.id, {
            questContent: t,
            questContentCTA: n,
            sourceQuestContent: r,
        }));
    (0, b.AH)(e.id, {
        questContent: t,
        questContentCTA: n,
        sourceQuestContent: r,
    });
}
let Y = s.forwardRef(function (e, t) {
    var n;
    let {
            children: o,
            className: l,
            collapsedHeight: c,
            isExpanded: d,
            isExpansionAnimationComplete: u,
            expansionSpring: p,
            onCtxMenuOpen: m,
            onCtxMenuClose: f,
            onCtxMenuSelect: g,
            overlayRef: b,
            quest: j,
            useReducedMotion: C,
            taskDetails: y,
        } = e,
        E = (0, h.q8)(j),
        O = (0, h.Vl)(j),
        { launchInGameActivity: S } = (0, _.zB)(j),
        T = s.useCallback(async () => {
            let e = j.config.features.includes(V.S7.START_QUEST_CTA),
                t = e ? x.jZ.START_QUEST : x.jZ.ACCEPT_QUEST;
            await K(j, v.jn.QUEST_BAR_V2, t, v.jn.QUEST_BAR_V2),
                E &&
                    (0, P.openVideoQuestModal)({
                        quest: j,
                        questContent: v.jn.QUEST_BAR_V2,
                        sourceQuestContent: v.jn.QUEST_BAR_V2,
                        sourceQuestContentCTA: t,
                    }),
                O && e && S();
        }, [j, E, O, S]),
        w = (null == (n = j.userStatus) ? void 0 : n.enrolledAt) != null,
        A = d && u;
    return (0, r.jsxs)(i.animated.div, {
        "aria-hidden": !A,
        className: a()(l, W.contentExpanded, {
            [W.contentInteractable]: A,
            [W.contentExpandedAccepted]: w,
        }),
        style: {
            transform: (0, i.to)(
                [
                    p.to({
                        range: [0, 1],
                        output: [0, -100],
                    }),
                    p.to({
                        range: [0, 1],
                        output: [0, c],
                    }),
                ],
                (e, t) => "translateY(calc(".concat(e, "% + ").concat(t, "px))"),
            ),
        },
        children: [
            o,
            (0, r.jsx)(i.animated.div, {
                style: { opacity: 1 },
                children: w
                    ? (0, r.jsx)(X, {
                          quest: j,
                          taskDetails: y,
                          expansionSpring: p,
                          overlayRef: b,
                          isExpanded: d,
                          reducedMotion: C,
                          onCtxMenuOpen: m,
                          onCtxMenuClose: f,
                          onCtxMenuSelect: g,
                          containerRef: t,
                      })
                    : (0, r.jsx)(F, {
                          quest: j,
                          taskDetails: y,
                          expansionSpring: p,
                          isInteractable: A,
                          reducedMotion: C,
                          containerRef: t,
                          isExpanded: d,
                          onAcceptQuest: T,
                      }),
            }),
        ],
    });
});
