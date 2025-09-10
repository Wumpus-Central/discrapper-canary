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
        } = e,
        g = (0, u.e7)([y.Z], () => y.Z.isEnrolling(t.id), [t]),
        E = i.useMemo(() => (0, A.fh)(t, A.eC.QUEST_BAR_HERO), [t]),
        b = (0, S.CR)({ quest: t }),
        O = (0, I.h)({
            location: G.dr.QUESTS_BAR,
            questConfig: t.config,
        }),
        v = i.useMemo(() => (0, A.fh)(t, A.eC.HERO_IMAGE), [t]),
        T = i.useMemo(() => (null == v ? {} : { backgroundImage: "url(".concat(v.url, ")") }), [v]),
        C = (0, p.ZP)(),
        N = (0, f.wj)(C);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
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
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: F.cta,
                            children: (0, r.jsx)(_.zxk, {
                                variant: "primary",
                                onClick: l ? m : void 0,
                                loading: g,
                                text: b,
                                size: "sm",
                                fullWidth: !0,
                            }),
                        }),
                    ],
                }),
            }),
            O &&
                null != v &&
                (0, r.jsx)(s.animated.div, {
                    className: F.contentCollapsedBackgroundWrapper,
                    style: {
                        opacity: a.to([0, 1], [1, 0]),
                    },
                    children: (0, r.jsx)("div", {
                        className: F.contentCollapsedBackground,
                        style: T,
                    }),
                }),
            (0, r.jsxs)(s.animated.div, {
                className: F.heroAssetWrapper,
                style: {
                    backdropFilter: a.to([0, 1], [5, 0]).to((e) => "blur(".concat(e, "px)")),
                    filter: a.to([0, 1], [0.8, 1]).to((e) => "brightness(".concat(e, ")")),
                },
                children: [
                    !O &&
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
                    E.isAnimated
                        ? (0, r.jsx)(P.Fl, {
                              id: "QuestBarV2ContentExpanded_heroAnimated",
                              children: (e) =>
                                  (0, r.jsx)(K, {
                                      ref: e,
                                      asset: E,
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
                                      src: E.url,
                                  }),
                          }),
                    (0, r.jsx)("div", { className: o()(F.legibilityGradient, { [F.legibilityGradientDark]: N }) }),
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
        } = e,
        y = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null,
        v = a.percentComplete > 0,
        I = (0, b.z)(n),
        [T, S, A] = (0, b.me)(n, a),
        C = i.useRef(null),
        N = (0, b._s)({ quest: n }),
        P = (0, g.q8)(n),
        Z = (0, b.Jf)(n),
        H = i.useCallback(() => {
            (0, R.openVideoQuestModal)({
                quest: n,
                questContent: O.jn.QUEST_BAR_V2,
                sourceQuestContent: O.jn.QUEST_BAR_V2,
                sourceQuestContentCTA: m.jZ.QUEST_BAR_VIDEO_QUEST_PREVIEW,
            });
        }, [n]),
        Y = null != Z ? Z.percentComplete : a.percentComplete;
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
                        progressBarRef: C,
                        quest: n,
                        isExpanded: d,
                        isHovered: !1,
                    }),
                    (0, r.jsx)(M.Z, {
                        contentLocation: "expanded",
                        quest: n,
                        progressBarRef: C,
                        isExpanded: !0,
                        percentComplete: Y,
                        activeScreen: T,
                    }),
                    (0, r.jsx)(w.n, {
                        children:
                            !y &&
                            !(0, g.Gd)(n) &&
                            (0, l.EQ)(T)
                                .with(O.LI.SELECT, () =>
                                    (0, r.jsx)(U.Z, {
                                        onConsole: () => A(G.cd.CONSOLE),
                                        onDesktop: () => A(G.cd.DESKTOP),
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
                            P &&
                                (0, r.jsx)(V, {
                                    isExpanded: d,
                                    quest: n,
                                    onClick: H,
                                    reducedMotion: f,
                                }),
                            (0, r.jsx)(D.y, {
                                quest: n,
                                useReducedMotion: f,
                                isExpanded: d,
                                awaitingConsoleConnections: N,
                                hasMadeProgress: v,
                                isProgressing: I,
                                activeScreen: T,
                                showBackButton: T !== O.LI.SELECT && S.length > 1 && !v && !I,
                                onBack: () => A(null),
                                taskDetails: a,
                                sourceQuestContent: O.jn.QUEST_BAR_V2,
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
            overlayRef: E,
            quest: y,
            useReducedMotion: v,
            taskDetails: I,
        } = e,
        T = (0, g.Vl)(y),
        { launchInGameActivity: S } = (0, b.zB)(y),
        A = i.useCallback(async () => {
            let e = y.config.features.includes(G.S7.START_QUEST_CTA),
                t = e ? m.jZ.START_QUEST : m.jZ.ACCEPT_QUEST;
            await q(y, O.jn.QUEST_BAR_V2, t, O.jn.QUEST_BAR_V2), T && e && S();
        }, [y, T, S]),
        C = (null == (n = y.userStatus) ? void 0 : n.enrolledAt) != null,
        N = u && d;
    return (0, r.jsxs)(s.animated.div, {
        "aria-hidden": !N,
        className: o()(l, F.contentExpanded, {
            [F.contentInteractable]: N,
            [F.contentExpandedAccepted]: C,
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
                children: C
                    ? (0, r.jsx)(z, {
                          quest: y,
                          taskDetails: I,
                          expansionSpring: f,
                          overlayRef: E,
                          isExpanded: u,
                          reducedMotion: v,
                          onCtxMenuOpen: _,
                          onCtxMenuClose: p,
                          onCtxMenuSelect: h,
                          containerRef: t,
                      })
                    : (0, r.jsx)(W, {
                          quest: y,
                          taskDetails: I,
                          expansionSpring: f,
                          isInteractable: N,
                          reducedMotion: v,
                          containerRef: t,
                          isExpanded: u,
                          onAcceptQuest: A,
                      }),
            }),
        ],
    });
});
