n.d(t, { Z: () => X }), n(388685), n(953529), n(314940);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(261616),
    l = n(278074),
    c = n(754700),
    u = n(442837),
    d = n(692547),
    f = n(780384),
    _ = n(481060),
    p = n(410030),
    h = n(70097),
    m = n(617136),
    g = n(509212),
    E = n(272008),
    b = n(113434),
    y = n(569984),
    O = n(497505),
    v = n(184299),
    I = n(381176),
    T = n(111131),
    S = n(373370),
    A = n(475595),
    C = n(720293),
    N = n(644646),
    R = n(110560),
    P = n(78826),
    w = n(693900),
    D = n(164495),
    x = n(759853),
    L = n(205511),
    j = n(694802),
    M = n(95985),
    k = n(688927),
    U = n(50476),
    G = n(46140),
    B = n(743294),
    Z = n(388032),
    F = n(475832);
function V(e) {
    var t, n;
    let { quest: a, onClick: s, reducedMotion: l, isExpanded: u } = e,
        [f, p] = i.useState(!1),
        m = i.useRef(null),
        g = (0, A.fh)(a, A.eC.QUEST_BAR_HERO_VIDEO),
        E = (0, C.z0)(a, c.X.WATCH_VIDEO, C.n1.VIDEO, C.O.THUMBNAIL),
        b = (0, v.km)((e) => e.getVideoProgressState);
    i.useEffect(() => {
        null != m.current && (u && (!l || f) ? ((m.current.currentTime = 0), m.current.play()) : m.current.pause());
    }, [m, f, l, u]);
    let y = () => {
            l && !f && p(!0);
        },
        O = () => {
            l && f && p(!1);
        },
        I = b(a.id),
        T = (null == (t = a.userStatus) ? void 0 : t.completedAt) != null && I === v.iw.COMPLETED,
        S = !T && (!l || f);
    return (0, r.jsxs)(_.P3F, {
        className: F.videoQuestPreviewCont,
        onClick: s,
        onMouseEnter: y,
        onMouseLeave: O,
        children: [
            null != E &&
                (0, r.jsx)("img", {
                    alt: "",
                    src: E.url,
                    className: F.assetBodyVideoPreviewMedia,
                }),
            null != g
                ? (0, r.jsx)(h.Z, {
                      ref: m,
                      autoPlay: !1,
                      poster: null == E ? void 0 : E.url,
                      loop: !0,
                      muted: !0,
                      playsInline: !0,
                      className: o()(F.assetBodyVideoPreviewVideo, { [F.assetBodyVideoPreviewVisible]: S }),
                      controls: !1,
                      children: (0, r.jsx)("source", {
                          src: g.url,
                          type: null != (n = g.mimetype) ? n : void 0,
                      }),
                  })
                : null,
            (0, r.jsx)("div", {
                className: F.previewPlayButtonCont,
                children: T
                    ? (0, r.jsx)(_.Oe7, {
                          color: d.Z.colors.WHITE,
                          className: F.previewPlayButton,
                      })
                    : (0, r.jsx)(_.o1U, {
                          color: d.Z.colors.WHITE,
                          className: F.previewPlayButton,
                      }),
            }),
        ],
    });
}
function H(e) {
    let { quest: t } = e;
    return (0, r.jsx)(N.Z, {
        className: o()(F.rewardTile, F.hiddenRewardTile),
        learnMoreStyle: "text",
        quest: t,
        questContent: O.jn.QUEST_BAR_V2,
        location: G.dr.QUESTS_BAR,
        sourceQuestContent: O.jn.QUEST_BAR_V2,
    });
}
function Y(e) {
    return (0, r.jsx)(_.Text, {
        className: F.description,
        variant: "text-xs/normal",
        children: (0, S.DD)({
            quest: e.quest,
            location: G.dr.QUESTS_BAR,
            questContent: O.jn.QUEST_BAR_V2,
            taskDetails: e.taskDetails,
            sourceQuestContent: O.jn.QUEST_BAR_V2,
            popoutTargetElementRef: e.popoutTargetElementRef,
            onGameSheetOpened: e.onGameSheetOpened,
            onGameSheetClosed: e.onGameSheetClosed,
        }),
    });
}
function W(e) {
    let {
            quest: t,
            taskDetails: n,
            expansionSpring: a,
            isInteractable: l,
            reducedMotion: c,
            containerRef: d,
            isExpanded: h,
            onAcceptQuest: m,
            onGameSheetOpened: g,
            onGameSheetClosed: E,
        } = e,
        b = i.useRef(null),
        O = (0, u.e7)([y.Z], () => y.Z.isEnrolling(t.id), [t]),
        v = i.useMemo(() => (0, A.fh)(t, A.eC.QUEST_BAR_HERO), [t]),
        T = (0, S.CR)({ quest: t }),
        C = (0, I.h)({
            location: G.dr.QUESTS_BAR,
            questConfig: t.config,
        }),
        N = i.useMemo(() => (0, A.fh)(t, A.eC.HERO_IMAGE), [t]),
        R = i.useMemo(() => (null == N ? {} : { backgroundImage: "url(".concat(N.url, ")") }), [N]),
        w = (0, p.ZP)(),
        D = (0, f.wj)(w);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                ref: b,
                children: (0, r.jsxs)("div", {
                    className: F.questPromoContent,
                    ref: d,
                    children: [
                        (0, r.jsxs)("div", {
                            className: F.details,
                            children: [
                                (0, r.jsx)(H, { quest: t }),
                                (0, r.jsx)(_.X6q, {
                                    className: F.title,
                                    color: "header-primary",
                                    variant: "heading-md/medium",
                                    children: Z.intl.format(Z.t.EQa7oq, { questName: t.config.messages.questName }),
                                }),
                                (0, r.jsx)(Y, {
                                    quest: t,
                                    taskDetails: n,
                                    popoutTargetElementRef: b,
                                    onGameSheetOpened: g,
                                    onGameSheetClosed: E,
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: F.cta,
                            children: (0, r.jsx)(_.zxk, {
                                variant: "primary",
                                onClick: l ? m : void 0,
                                loading: O,
                                text: T,
                                size: "sm",
                                fullWidth: !0,
                            }),
                        }),
                    ],
                }),
            }),
            C &&
                null != N &&
                (0, r.jsx)(s.animated.div, {
                    className: F.contentCollapsedBackgroundWrapper,
                    style: {
                        opacity: a.to([0, 1], [1, 0]),
                    },
                    children: (0, r.jsx)("div", {
                        className: F.contentCollapsedBackground,
                        style: R,
                    }),
                }),
            (0, r.jsxs)(s.animated.div, {
                className: F.heroAssetWrapper,
                style: {
                    backdropFilter: a.to([0, 1], [5, 0]).to((e) => "blur(".concat(e, "px)")),
                    filter: a.to([0, 1], [0.8, 1]).to((e) => "brightness(".concat(e, ")")),
                },
                children: [
                    !C &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(s.animated.div, {
                                    className: F.heroAssetDarken,
                                    style: {
                                        opacity: a.to([0, 1], [1, 0]),
                                    },
                                }),
                                (0, r.jsx)(s.animated.div, {
                                    className: F.heroAssetTint,
                                    style: {
                                        backgroundColor: t.config.colors.primary,
                                        opacity: a.to([0, 1], [1, 0]),
                                    },
                                }),
                            ],
                        }),
                    v.isAnimated
                        ? (0, r.jsx)(P.Fl, {
                              id: "QuestBarV2ContentExpanded_heroAnimated",
                              children: (e) =>
                                  (0, r.jsx)(K, {
                                      ref: e,
                                      asset: v,
                                      isExpanded: h,
                                      reducedMotion: c,
                                  }),
                          })
                        : (0, r.jsx)(P.Fl, {
                              id: "QuestBarV2ContentExpanded_heroStatic",
                              children: (e) =>
                                  (0, r.jsx)("img", {
                                      ref: e,
                                      alt: "",
                                      className: F.heroAsset,
                                      src: v.url,
                                  }),
                          }),
                    (0, r.jsx)("div", { className: o()(F.legibilityGradient, { [F.legibilityGradientDark]: D }) }),
                ],
            }),
        ],
    });
}
let K = i.forwardRef(function (e, t) {
    var n;
    let { asset: a, isExpanded: o, reducedMotion: s } = e,
        l = i.useRef(null);
    return (
        i.useEffect(() => {
            null != l.current && l.current.pause();
        }, []),
        i.useEffect(() => {
            null == l.current || s || (o ? ((l.current.currentTime = 0), l.current.play()) : l.current.pause());
        }, [s, o]),
        (0, r.jsx)(h.Z, {
            ref: (e) => {
                null != e && ((l.current = e), null != t && ("function" == typeof t ? t(e) : (t.current = e)));
            },
            autoPlay: !0,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: F.heroAsset,
            controls: !1,
            children: (0, r.jsx)("source", {
                src: a.url,
                type: null != (n = a.mimetype) ? n : void 0,
            }),
        })
    );
});
function z(e) {
    var t;
    let {
            quest: n,
            taskDetails: a,
            expansionSpring: c,
            overlayRef: u,
            isExpanded: d,
            reducedMotion: f,
            containerRef: _,
            onCtxMenuOpen: p,
            onCtxMenuClose: h,
            onCtxMenuSelect: E,
            onGameSheetOpened: y,
            onGameSheetClosed: v,
        } = e,
        I = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null,
        T = a.percentComplete > 0,
        S = (0, b.z)(n),
        [A, C, N] = (0, b.me)(n, a),
        P = i.useRef(null),
        Z = (0, b._s)({ quest: n }),
        H = (0, g.q8)(n),
        Y = (0, b.Jf)(n),
        W = i.useCallback(() => {
            (0, R.openVideoQuestModal)({
                quest: n,
                questContent: O.jn.QUEST_BAR_V2,
                sourceQuestContent: O.jn.QUEST_BAR_V2,
                sourceQuestContentCTA: m.jZ.QUEST_BAR_VIDEO_QUEST_PREVIEW,
            });
        }, [n]),
        K = null != Y ? Y.percentComplete : a.percentComplete;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.animated.div, {
                className: o()(F.postEnrollmentBackground, F.postEnrollmentBackgroundCollapsed),
                style: {
                    backgroundImage: "linear-gradient(90deg, ".concat(B.aY, ", ").concat(B.v6, ")"),
                    opacity: c.to({
                        range: [0, 1],
                        output: [1, 0],
                    }),
                },
            }),
            (0, r.jsxs)("div", {
                className: F.questAcceptedContent,
                ref: _,
                children: [
                    (0, r.jsx)(k.Z, {
                        quest: n,
                        onCtxMenuOpen: p,
                        onCtxMenuClose: h,
                        onCtxMenuSelect: E,
                    }),
                    (0, r.jsx)("div", { className: F.divider }),
                    (0, r.jsx)(x.Z, {
                        expansionSpring: c,
                        overlayRef: u,
                        progressBarRef: P,
                        quest: n,
                        isExpanded: d,
                        isHovered: !1,
                    }),
                    (0, r.jsx)(M.Z, {
                        contentLocation: "expanded",
                        quest: n,
                        progressBarRef: P,
                        isExpanded: !0,
                        percentComplete: K,
                        activeScreen: A,
                    }),
                    (0, r.jsx)(w.n, {
                        children:
                            !I &&
                            !(0, g.Gd)(n) &&
                            (0, l.EQ)(A)
                                .with(O.LI.SELECT, () =>
                                    (0, r.jsx)(U.Z, {
                                        onConsole: () => N(G.cd.CONSOLE),
                                        onDesktop: () => N(G.cd.DESKTOP),
                                    }),
                                )
                                .with(O.LI.DESKTOP, () => (0, r.jsx)(j.Z, { quest: n }))
                                .with(O.LI.CONSOLE, () =>
                                    (0, r.jsx)(L.Z, {
                                        quest: n,
                                        taskDetails: a,
                                    }),
                                )
                                .exhaustive(),
                    }),
                    (0, r.jsxs)(w.n, {
                        children: [
                            H &&
                                (0, r.jsx)(V, {
                                    isExpanded: d,
                                    quest: n,
                                    onClick: W,
                                    reducedMotion: f,
                                }),
                            (0, r.jsx)(D.y, {
                                quest: n,
                                useReducedMotion: f,
                                isExpanded: d,
                                awaitingConsoleConnections: Z,
                                hasMadeProgress: T,
                                isProgressing: S,
                                activeScreen: A,
                                showBackButton: A !== O.LI.SELECT && C.length > 1 && !T && !S,
                                onBack: () => N(null),
                                taskDetails: a,
                                sourceQuestContent: O.jn.QUEST_BAR_V2,
                                onGameSheetOpened: y,
                                onGameSheetClosed: v,
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: o()(F.postEnrollmentBackground, F.postEnrollmentBackgroundExpanded),
                style: { backgroundImage: "linear-gradient(90deg, ".concat(B.aY, ", ").concat(B.v6, ")") },
            }),
        ],
    });
}
async function q(e, t, n, r) {
    let i = (0, g.q8)(e);
    if (i && (0, T.R)(G.dr.QUESTS_BAR))
        return void (await (0, R.enrollAndStartVideoQuestWithErrorHandling)(e, {
            questContent: t,
            questContentCTA: n,
            sourceQuestContent: r,
            sourceQuestContentCTA: n,
        }));
    (0, E.AH)(e.id, {
        questContent: t,
        questContentCTA: n,
        sourceQuestContent: r,
    }),
        i &&
            (0, R.openVideoQuestModal)({
                quest: e,
                questContent: t,
                sourceQuestContent: r,
                sourceQuestContentCTA: n,
            });
}
let X = i.forwardRef(function (e, t) {
    var n;
    let {
            children: a,
            className: l,
            collapsedHeight: c,
            isExpanded: u,
            isExpansionAnimationComplete: d,
            expansionSpring: f,
            onCtxMenuOpen: _,
            onCtxMenuClose: p,
            onCtxMenuSelect: h,
            onGameSheetOpened: E,
            onGameSheetClosed: y,
            overlayRef: v,
            quest: I,
            useReducedMotion: T,
            taskDetails: S,
        } = e,
        A = (0, g.Vl)(I),
        { launchInGameActivity: C } = (0, b.zB)(I),
        N = i.useCallback(async () => {
            let e = I.config.features.includes(G.S7.START_QUEST_CTA),
                t = e ? m.jZ.START_QUEST : m.jZ.ACCEPT_QUEST;
            await q(I, O.jn.QUEST_BAR_V2, t, O.jn.QUEST_BAR_V2), A && e && C();
        }, [I, A, C]),
        R = (null == (n = I.userStatus) ? void 0 : n.enrolledAt) != null,
        P = u && d;
    return (0, r.jsxs)(s.animated.div, {
        "aria-hidden": !P,
        className: o()(l, F.contentExpanded, {
            [F.contentInteractable]: P,
            [F.contentExpandedAccepted]: R,
        }),
        style: {
            transform: (0, s.to)(
                [
                    f.to({
                        range: [0, 1],
                        output: [0, -100],
                    }),
                    f.to({
                        range: [0, 1],
                        output: [0, c],
                    }),
                ],
                (e, t) => "translateY(calc(".concat(e, "% + ").concat(t, "px))"),
            ),
        },
        children: [
            a,
            (0, r.jsx)(s.animated.div, {
                style: { opacity: 1 },
                children: R
                    ? (0, r.jsx)(z, {
                          quest: I,
                          taskDetails: S,
                          expansionSpring: f,
                          overlayRef: v,
                          isExpanded: u,
                          reducedMotion: T,
                          onCtxMenuOpen: _,
                          onCtxMenuClose: p,
                          onCtxMenuSelect: h,
                          containerRef: t,
                          onGameSheetOpened: E,
                          onGameSheetClosed: y,
                      })
                    : (0, r.jsx)(W, {
                          quest: I,
                          taskDetails: S,
                          expansionSpring: f,
                          isInteractable: P,
                          reducedMotion: T,
                          containerRef: t,
                          isExpanded: u,
                          onAcceptQuest: N,
                          onGameSheetOpened: E,
                          onGameSheetClosed: y,
                      }),
            }),
        ],
    });
});
