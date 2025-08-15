n.d(t, { Z: () => X }), n(388685), n(953529), n(314940);
var r = n(255367),
    s = n(73800),
    o = n(120356),
    a = n.n(o),
    i = n(717976),
    l = n(278074),
    c = n(754700),
    u = n(442837),
    d = n(692547),
    p = n(780384),
    m = n(481060),
    g = n(410030),
    f = n(70097),
    x = n(617136),
    h = n(509212),
    b = n(272008),
    _ = n(113434),
    j = n(569984),
    v = n(497505),
    C = n(184299),
    y = n(192023),
    E = n(373370),
    O = n(475595),
    S = n(720293),
    T = n(644646),
    w = n(110560),
    P = n(78826),
    A = n(693900),
    N = n(164495),
    R = n(759853),
    B = n(205511),
    k = n(694802),
    q = n(95985),
    I = n(688927),
    Q = n(50476),
    D = n(46140),
    V = n(743294),
    M = n(388032),
    L = n(475832);
function W(e) {
    var t, n;
    let { quest: o, onClick: i, reducedMotion: l, isExpanded: u } = e,
        [p, g] = s.useState(!1),
        x = s.useRef(null),
        h = (0, O.fh)(o, O.eC.QUEST_BAR_HERO_VIDEO),
        b = (0, S.z0)(o, c.X.WATCH_VIDEO, S.n1.VIDEO, S.O.THUMBNAIL),
        _ = (0, C.km)((e) => e.getVideoProgressState);
    s.useEffect(() => {
        null != x.current && (u && (!l || p) ? ((x.current.currentTime = 0), x.current.play()) : x.current.pause());
    }, [x, p, l, u]);
    let j = _(o.id),
        v = (null == (t = o.userStatus) ? void 0 : t.completedAt) != null && j === C.iw.COMPLETED,
        y = !v && (!l || p);
    return (0, r.jsxs)(m.P3F, {
        className: L.videoQuestPreviewCont,
        onClick: i,
        onMouseEnter: () => {
            l && !p && g(!0);
        },
        onMouseLeave: () => {
            l && p && g(!1);
        },
        children: [
            null != b &&
                (0, r.jsx)("img", {
                    alt: "",
                    src: b.url,
                    className: L.assetBodyVideoPreviewMedia,
                }),
            null != h
                ? (0, r.jsx)(f.Z, {
                      ref: x,
                      autoPlay: !1,
                      poster: null == b ? void 0 : b.url,
                      loop: !0,
                      muted: !0,
                      playsInline: !0,
                      className: a()(L.assetBodyVideoPreviewVideo, { [L.assetBodyVideoPreviewVisible]: y }),
                      controls: !1,
                      children: (0, r.jsx)("source", {
                          src: h.url,
                          type: null != (n = h.mimetype) ? n : void 0,
                      }),
                  })
                : null,
            (0, r.jsx)("div", {
                className: L.previewPlayButtonCont,
                children: v
                    ? (0, r.jsx)(m.Oe7, {
                          color: d.Z.colors.WHITE,
                          className: L.previewPlayButton,
                      })
                    : (0, r.jsx)(m.o1U, {
                          color: d.Z.colors.WHITE,
                          className: L.previewPlayButton,
                      }),
            }),
        ],
    });
}
function Z(e) {
    let { quest: t } = e;
    return (0, r.jsx)(T.Z, {
        className: a()(L.rewardTile, L.hiddenRewardTile),
        learnMoreStyle: "text",
        quest: t,
        questContent: v.jn.QUEST_BAR_V2,
        location: D.dr.QUESTS_BAR,
        sourceQuestContent: v.jn.QUEST_BAR_V2,
    });
}
function U(e) {
    return (0, r.jsx)(m.Text, {
        className: L.description,
        variant: "text-xs/normal",
        children: (0, E.DD)({
            quest: e.quest,
            location: D.dr.QUESTS_BAR,
            questContent: v.jn.QUEST_BAR_V2,
            taskDetails: e.taskDetails,
            sourceQuestContent: v.jn.QUEST_BAR_V2,
        }),
    });
}
function H(e) {
    let {
            quest: t,
            taskDetails: n,
            expansionSpring: o,
            isInteractable: l,
            reducedMotion: c,
            containerRef: d,
            isExpanded: f,
            onAcceptQuest: x,
        } = e,
        h = (0, u.e7)([j.Z], () => j.Z.isEnrolling(t.id), [t]),
        b = s.useMemo(() => (0, O.fh)(t, O.eC.QUEST_BAR_HERO), [t]),
        _ = (0, E.CR)({ quest: t }),
        v = (0, y.h)({
            location: D.dr.QUESTS_BAR,
            questConfig: t.config,
        }),
        C = s.useMemo(() => (0, O.fh)(t, O.eC.HERO_IMAGE), [t]),
        S = s.useMemo(() => (null == C ? {} : { backgroundImage: "url(".concat(C.url, ")") }), [C]),
        T = (0, g.ZP)(),
        w = (0, p.wj)(T);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                children: (0, r.jsxs)("div", {
                    className: L.questPromoContent,
                    ref: d,
                    children: [
                        (0, r.jsxs)("div", {
                            className: L.details,
                            children: [
                                (0, r.jsx)(Z, { quest: t }),
                                (0, r.jsx)(m.X6q, {
                                    className: L.title,
                                    color: "header-primary",
                                    variant: "heading-md/medium",
                                    children: M.intl.format(M.t.EQa7oq, { questName: t.config.messages.questName }),
                                }),
                                (0, r.jsx)(U, {
                                    quest: t,
                                    taskDetails: n,
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: L.cta,
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
                    className: L.contentCollapsedBackgroundWrapper,
                    style: {
                        opacity: o.to([0, 1], [1, 0]),
                    },
                    children: (0, r.jsx)("div", {
                        className: L.contentCollapsedBackground,
                        style: S,
                    }),
                }),
            (0, r.jsxs)(i.animated.div, {
                className: L.heroAssetWrapper,
                style: {
                    backdropFilter: o.to([0, 1], [5, 0]).to((e) => "blur(".concat(e, "px)")),
                    filter: o.to([0, 1], [0.8, 1]).to((e) => "brightness(".concat(e, ")")),
                },
                children: [
                    !v &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(i.animated.div, {
                                    className: L.heroAssetDarken,
                                    style: {
                                        opacity: o.to([0, 1], [1, 0]),
                                    },
                                }),
                                (0, r.jsx)(i.animated.div, {
                                    className: L.heroAssetTint,
                                    style: {
                                        backgroundColor: t.config.colors.primary,
                                        opacity: o.to([0, 1], [1, 0]),
                                    },
                                }),
                            ],
                        }),
                    b.isAnimated
                        ? (0, r.jsx)(P.Fl, {
                              id: "QuestBarV2ContentExpanded_heroAnimated",
                              children: (e) =>
                                  (0, r.jsx)(F, {
                                      ref: e,
                                      asset: b,
                                      isExpanded: f,
                                      reducedMotion: c,
                                  }),
                          })
                        : (0, r.jsx)(P.Fl, {
                              id: "QuestBarV2ContentExpanded_heroStatic",
                              children: (e) =>
                                  (0, r.jsx)("img", {
                                      ref: e,
                                      alt: "",
                                      className: L.heroAsset,
                                      src: b.url,
                                  }),
                          }),
                    (0, r.jsx)("div", { className: a()(L.legibilityGradient, { [L.legibilityGradientDark]: w }) }),
                ],
            }),
        ],
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
        (0, r.jsx)(f.Z, {
            ref: (e) => {
                null != e && ((l.current = e), null != t && ("function" == typeof t ? t(e) : (t.current = e)));
            },
            autoPlay: !0,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: L.heroAsset,
            controls: !1,
            children: (0, r.jsx)("source", {
                src: o.url,
                type: null != (n = o.mimetype) ? n : void 0,
            }),
        })
    );
});
function z(e) {
    var t;
    let {
            quest: n,
            taskDetails: o,
            expansionSpring: c,
            overlayRef: u,
            isExpanded: d,
            reducedMotion: p,
            containerRef: m,
            onCtxMenuOpen: g,
            onCtxMenuClose: f,
            onCtxMenuSelect: b,
        } = e,
        j = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null,
        C = o.percentComplete > 0,
        y = (0, _.z)(n),
        [E, O, S] = (0, _.me)(n, o),
        T = s.useRef(null),
        P = (0, _._s)({ quest: n }),
        M = (0, h.q8)(n),
        Z = (0, _.Jf)(n),
        U = s.useCallback(() => {
            (0, w.openVideoQuestModal)({
                quest: n,
                questContent: v.jn.QUEST_BAR_V2,
                sourceQuestContent: v.jn.QUEST_BAR_V2,
                sourceQuestContentCTA: x.jZ.QUEST_BAR_VIDEO_QUEST_PREVIEW,
            });
        }, [n]),
        H = null != Z ? Z.percentComplete : o.percentComplete;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i.animated.div, {
                className: a()(L.postEnrollmentBackground, L.postEnrollmentBackgroundCollapsed),
                style: {
                    backgroundImage: "linear-gradient(90deg, ".concat(V.aY, ", ").concat(V.v6, ")"),
                    opacity: c.to({
                        range: [0, 1],
                        output: [1, 0],
                    }),
                },
            }),
            (0, r.jsxs)("div", {
                className: L.questAcceptedContent,
                ref: m,
                children: [
                    (0, r.jsx)(I.Z, {
                        quest: n,
                        onCtxMenuOpen: g,
                        onCtxMenuClose: f,
                        onCtxMenuSelect: b,
                    }),
                    (0, r.jsx)("div", { className: L.divider }),
                    (0, r.jsx)(R.Z, {
                        expansionSpring: c,
                        overlayRef: u,
                        progressBarRef: T,
                        quest: n,
                        isExpanded: d,
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
                    (0, r.jsx)(A.n, {
                        children:
                            !j &&
                            !(0, h.Gd)(n) &&
                            (0, l.EQ)(E)
                                .with(v.LI.SELECT, () =>
                                    (0, r.jsx)(Q.Z, {
                                        onConsole: () => S(D.cd.CONSOLE),
                                        onDesktop: () => S(D.cd.DESKTOP),
                                    }),
                                )
                                .with(v.LI.DESKTOP, () => (0, r.jsx)(k.Z, { quest: n }))
                                .with(v.LI.CONSOLE, () =>
                                    (0, r.jsx)(B.Z, {
                                        quest: n,
                                        taskDetails: o,
                                    }),
                                )
                                .exhaustive(),
                    }),
                    (0, r.jsxs)(A.n, {
                        children: [
                            M &&
                                (0, r.jsx)(W, {
                                    isExpanded: d,
                                    quest: n,
                                    onClick: U,
                                    reducedMotion: p,
                                }),
                            (0, r.jsx)(N.y, {
                                quest: n,
                                useReducedMotion: p,
                                isExpanded: d,
                                awaitingConsoleConnections: P,
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
                className: a()(L.postEnrollmentBackground, L.postEnrollmentBackgroundExpanded),
                style: { backgroundImage: "linear-gradient(90deg, ".concat(V.aY, ", ").concat(V.v6, ")") },
            }),
        ],
    });
}
let X = s.forwardRef(function (e, t) {
    var n;
    let {
            children: o,
            className: l,
            collapsedHeight: c,
            isExpanded: u,
            isExpansionAnimationComplete: d,
            expansionSpring: p,
            onCtxMenuOpen: m,
            onCtxMenuClose: g,
            onCtxMenuSelect: f,
            overlayRef: j,
            quest: C,
            useReducedMotion: y,
            taskDetails: E,
        } = e,
        O = (0, h.q8)(C),
        S = (0, h.Vl)(C),
        { launchInGameActivity: T } = (0, _.zB)(C),
        P = s.useCallback(() => {
            let e = C.config.features.includes(D.S7.START_QUEST_CTA),
                t = e ? x.jZ.START_QUEST : x.jZ.ACCEPT_QUEST;
            (0, b.AH)(C.id, {
                questContent: v.jn.QUEST_BAR_V2,
                questContentCTA: t,
                sourceQuestContent: v.jn.QUEST_BAR_V2,
            }),
                O &&
                    (0, w.openVideoQuestModal)({
                        quest: C,
                        questContent: v.jn.QUEST_BAR_V2,
                        sourceQuestContent: v.jn.QUEST_BAR_V2,
                        sourceQuestContentCTA: t,
                    }),
                S && e && T();
        }, [C, O, S, T]),
        A = (null == (n = C.userStatus) ? void 0 : n.enrolledAt) != null,
        N = u && d;
    return (0, r.jsxs)(i.animated.div, {
        "aria-hidden": !N,
        className: a()(l, L.contentExpanded, {
            [L.contentInteractable]: N,
            [L.contentExpandedAccepted]: A,
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
                children: A
                    ? (0, r.jsx)(z, {
                          quest: C,
                          taskDetails: E,
                          expansionSpring: p,
                          overlayRef: j,
                          isExpanded: u,
                          reducedMotion: y,
                          onCtxMenuOpen: m,
                          onCtxMenuClose: g,
                          onCtxMenuSelect: f,
                          containerRef: t,
                      })
                    : (0, r.jsx)(H, {
                          quest: C,
                          taskDetails: E,
                          expansionSpring: p,
                          isInteractable: N,
                          reducedMotion: y,
                          containerRef: t,
                          isExpanded: u,
                          onAcceptQuest: P,
                      }),
            }),
        ],
    });
});
