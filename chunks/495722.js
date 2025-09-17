n.d(t, { Z: () => J }), n(388685), n(953529), n(314940);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(938288),
    l = n(278074),
    c = n(754700),
    u = n(442837),
    d = n(692547),
    f = n(780384),
    _ = n(481060),
    p = n(410030),
    h = n(607070),
    m = n(70097),
    g = n(451478),
    E = n(617136),
    b = n(509212),
    y = n(272008),
    O = n(113434),
    v = n(569984),
    I = n(497505),
    T = n(184299),
    S = n(685138),
    A = n(111131),
    C = n(373370),
    N = n(475595),
    R = n(720293),
    P = n(644646),
    w = n(110560),
    D = n(78826),
    x = n(693900),
    L = n(164495),
    j = n(759853),
    M = n(205511),
    k = n(694802),
    U = n(95985),
    G = n(688927),
    B = n(50476),
    Z = n(46140),
    F = n(743294),
    V = n(388032),
    H = n(475832);
function Y(e) {
    var t, n;
    let { quest: a, onClick: s, reducedMotion: l, isExpanded: u } = e,
        [f, p] = i.useState(!1),
        h = i.useRef(null),
        g = (0, N.fh)(a, N.eC.QUEST_BAR_HERO_VIDEO),
        E = (0, R.z0)(a, c.X.WATCH_VIDEO, R.n1.VIDEO, R.O.THUMBNAIL),
        b = (0, T.km)((e) => e.getVideoProgressState);
    i.useEffect(() => {
        null != h.current && (u && (!l || f) ? ((h.current.currentTime = 0), h.current.play()) : h.current.pause());
    }, [h, f, l, u]);
    let y = () => {
            l && !f && p(!0);
        },
        O = () => {
            l && f && p(!1);
        },
        v = b(a.id),
        I = (null == (t = a.userStatus) ? void 0 : t.completedAt) != null && v === T.iw.COMPLETED,
        S = !I && (!l || f);
    return (0, r.jsxs)(_.P3F, {
        className: H.videoQuestPreviewCont,
        onClick: s,
        onMouseEnter: y,
        onMouseLeave: O,
        children: [
            null != E &&
                (0, r.jsx)("img", {
                    alt: "",
                    src: E.url,
                    className: H.assetBodyVideoPreviewMedia,
                }),
            null != g
                ? (0, r.jsx)(m.Z, {
                      ref: h,
                      autoPlay: !1,
                      poster: null == E ? void 0 : E.url,
                      loop: !0,
                      muted: !0,
                      playsInline: !0,
                      className: o()(H.assetBodyVideoPreviewVideo, { [H.assetBodyVideoPreviewVisible]: S }),
                      controls: !1,
                      children: (0, r.jsx)("source", {
                          src: g.url,
                          type: null != (n = g.mimetype) ? n : void 0,
                      }),
                  })
                : null,
            (0, r.jsx)("div", {
                className: H.previewPlayButtonCont,
                children: I
                    ? (0, r.jsx)(_.Oe7, {
                          color: d.Z.colors.WHITE,
                          className: H.previewPlayButton,
                      })
                    : (0, r.jsx)(_.o1U, {
                          color: d.Z.colors.WHITE,
                          className: H.previewPlayButton,
                      }),
            }),
        ],
    });
}
function W(e) {
    let { quest: t } = e;
    return (0, r.jsx)(P.Z, {
        className: o()(H.rewardTile, H.hiddenRewardTile),
        learnMoreStyle: "text",
        quest: t,
        questContent: I.jn.QUEST_BAR_V2,
        location: Z.dr.QUESTS_BAR,
        sourceQuestContent: I.jn.QUEST_BAR_V2,
    });
}
function K(e) {
    return (0, r.jsx)(_.Text, {
        className: H.description,
        variant: "text-xs/normal",
        children: (0, C.DD)({
            quest: e.quest,
            location: Z.dr.QUESTS_BAR,
            questContent: I.jn.QUEST_BAR_V2,
            taskDetails: e.taskDetails,
            sourceQuestContent: I.jn.QUEST_BAR_V2,
            popoutTargetElementRef: e.popoutTargetElementRef,
            onGameSheetOpened: e.onGameSheetOpened,
            onGameSheetClosed: e.onGameSheetClosed,
        }),
    });
}
function z(e) {
    let {
            quest: t,
            taskDetails: n,
            expansionSpring: a,
            isInteractable: l,
            reducedMotion: c,
            containerRef: d,
            isExpanded: m,
            onAcceptQuest: E,
            onGameSheetOpened: b,
            onGameSheetClosed: y,
        } = e,
        O = i.useRef(null),
        I = (0, u.e7)([v.Z], () => v.Z.isEnrolling(t.id), [t]),
        T = i.useMemo(() => (0, N.fh)(t, N.eC.QUEST_BAR_HERO), [t]),
        A = (0, C.CR)({ quest: t }),
        { enabled: R, status: P } = (0, S.n)({
            location: Z.dr.QUESTS_BAR,
            questConfig: t.config,
        }),
        w = i.useMemo(() => (0, N.fh)(t, N.eC.HERO_IMAGE), [t]),
        x = i.useMemo(() => (null == w ? {} : { backgroundImage: "url(".concat(w.url, ")") }), [w]),
        L = (0, p.ZP)(),
        j = (0, f.wj)(L),
        M = (0, u.e7)([g.Z], () => g.Z.isFocused()),
        k = (0, u.e7)([h.Z], () => h.Z.useReducedMotion);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                ref: O,
                children: (0, r.jsxs)("div", {
                    className: H.questPromoContent,
                    ref: d,
                    children: [
                        (0, r.jsxs)("div", {
                            className: H.details,
                            children: [
                                (0, r.jsx)(W, { quest: t }),
                                (0, r.jsx)(_.X6q, {
                                    className: H.title,
                                    color: "header-primary",
                                    variant: "heading-md/medium",
                                    children: V.intl.format(V.t.EQa7oq, { questName: t.config.messages.questName }),
                                }),
                                (0, r.jsx)(K, {
                                    quest: t,
                                    taskDetails: n,
                                    popoutTargetElementRef: O,
                                    onGameSheetOpened: b,
                                    onGameSheetClosed: y,
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: H.cta,
                            children: (0, r.jsx)(_.zxk, {
                                variant: "primary",
                                onClick: l ? E : void 0,
                                loading: I,
                                text: A,
                                size: "sm",
                                fullWidth: !0,
                            }),
                        }),
                    ],
                }),
            }),
            R &&
                null != w &&
                (0, r.jsxs)(s.animated.div, {
                    className: H.contentCollapsedBackgroundWrapper,
                    style: {
                        opacity: a.to([0, 1], [1, 0]),
                    },
                    children: [
                        (null == P ? void 0 : P.progressBlur)
                            ? (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)("div", {
                                          className: H.contentCollapsedBackground,
                                          style: x,
                                      }),
                                      (0, r.jsx)("div", {
                                          className: o()(H.contentCollapsedBackground, H.blur30),
                                          style: x,
                                      }),
                                      (0, r.jsx)("div", {
                                          className: o()(H.contentCollapsedBackground, H.blur60),
                                          style: x,
                                      }),
                                      (0, r.jsx)("div", {
                                          className: o()(H.contentCollapsedBackground, H.blur100),
                                          style: x,
                                      }),
                                  ],
                              })
                            : (0, r.jsx)("div", {
                                  className: o()(H.contentCollapsedBackground, H.blur),
                                  style: x,
                              }),
                        (null == P ? void 0 : P.shineWipe) &&
                            (0, r.jsx)(_.ZX5, {
                                className: H.shine,
                                shineSize: _.rHe.DEFAULT,
                                shinePaused: !M || k,
                            }),
                    ],
                }),
            (0, r.jsxs)(s.animated.div, {
                className: H.heroAssetWrapper,
                style: {
                    backdropFilter: a.to([0, 1], [5, 0]).to((e) => "blur(".concat(e, "px)")),
                    filter: a.to([0, 1], [0.8, 1]).to((e) => "brightness(".concat(e, ")")),
                },
                children: [
                    !R &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(s.animated.div, {
                                    className: H.heroAssetDarken,
                                    style: {
                                        opacity: a.to([0, 1], [1, 0]),
                                    },
                                }),
                                (0, r.jsx)(s.animated.div, {
                                    className: H.heroAssetTint,
                                    style: {
                                        backgroundColor: t.config.colors.primary,
                                        opacity: a.to([0, 1], [1, 0]),
                                    },
                                }),
                            ],
                        }),
                    T.isAnimated
                        ? (0, r.jsx)(D.Fl, {
                              id: "QuestBarV2ContentExpanded_heroAnimated",
                              children: (e) =>
                                  (0, r.jsx)(q, {
                                      ref: e,
                                      asset: T,
                                      isExpanded: m,
                                      reducedMotion: c,
                                  }),
                          })
                        : (0, r.jsx)(D.Fl, {
                              id: "QuestBarV2ContentExpanded_heroStatic",
                              children: (e) =>
                                  (0, r.jsx)("img", {
                                      ref: e,
                                      alt: "",
                                      className: H.heroAsset,
                                      src: T.url,
                                  }),
                          }),
                    (0, r.jsx)("div", { className: o()(H.legibilityGradient, { [H.legibilityGradientDark]: j }) }),
                ],
            }),
        ],
    });
}
let q = i.forwardRef(function (e, t) {
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
        (0, r.jsx)(m.Z, {
            ref: (e) => {
                null != e && ((l.current = e), null != t && ("function" == typeof t ? t(e) : (t.current = e)));
            },
            autoPlay: !0,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: H.heroAsset,
            controls: !1,
            children: (0, r.jsx)("source", {
                src: a.url,
                type: null != (n = a.mimetype) ? n : void 0,
            }),
        })
    );
});
function X(e) {
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
            onCtxMenuSelect: m,
            onGameSheetOpened: g,
            onGameSheetClosed: y,
        } = e,
        v = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null,
        T = a.percentComplete > 0,
        S = (0, O.z)(n),
        [A, C, N] = (0, O.me)(n, a),
        R = i.useRef(null),
        P = i.useRef(null),
        D = (0, O._s)({ quest: n }),
        V = (0, b.q8)(n),
        W = (0, O.Jf)(n),
        K = i.useCallback(() => {
            (0, w.openVideoQuestModal)({
                quest: n,
                questContent: I.jn.QUEST_BAR_V2,
                sourceQuestContent: I.jn.QUEST_BAR_V2,
                sourceQuestContentCTA: E.jZ.QUEST_BAR_VIDEO_QUEST_PREVIEW,
            });
        }, [n]),
        z = null != W ? W.percentComplete : a.percentComplete;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.animated.div, {
                className: o()(H.postEnrollmentBackground, H.postEnrollmentBackgroundCollapsed),
                style: {
                    backgroundImage: "linear-gradient(90deg, ".concat(F.aY, ", ").concat(F.v6, ")"),
                    opacity: c.to({
                        range: [0, 1],
                        output: [1, 0],
                    }),
                },
            }),
            (0, r.jsxs)("div", {
                className: H.questAcceptedContent,
                ref: (e) => {
                    "function" == typeof _ ? _(e) : null != _ && (_.current = e), null != e && (P.current = e);
                },
                children: [
                    (0, r.jsx)(G.Z, {
                        quest: n,
                        onCtxMenuOpen: p,
                        onCtxMenuClose: h,
                        onCtxMenuSelect: m,
                    }),
                    (0, r.jsx)("div", { className: H.divider }),
                    (0, r.jsx)(j.Z, {
                        expansionSpring: c,
                        overlayRef: u,
                        progressBarRef: R,
                        quest: n,
                        isExpanded: d,
                        isHovered: !1,
                    }),
                    (0, r.jsx)(U.Z, {
                        contentLocation: "expanded",
                        quest: n,
                        progressBarRef: R,
                        isExpanded: !0,
                        percentComplete: z,
                        activeScreen: A,
                        popoutTargetElementRef: P,
                        onGameSheetOpened: g,
                        onGameSheetClosed: y,
                    }),
                    (0, r.jsx)(x.n, {
                        children:
                            !v &&
                            !(0, b.Gd)(n) &&
                            (0, l.EQ)(A)
                                .with(I.LI.SELECT, () =>
                                    (0, r.jsx)(B.Z, {
                                        onConsole: () => N(Z.cd.CONSOLE),
                                        onDesktop: () => N(Z.cd.DESKTOP),
                                    }),
                                )
                                .with(I.LI.DESKTOP, () => (0, r.jsx)(k.Z, { quest: n }))
                                .with(I.LI.CONSOLE, () =>
                                    (0, r.jsx)(M.Z, {
                                        quest: n,
                                        taskDetails: a,
                                    }),
                                )
                                .exhaustive(),
                    }),
                    (0, r.jsxs)(x.n, {
                        children: [
                            V &&
                                (0, r.jsx)(Y, {
                                    isExpanded: d,
                                    quest: n,
                                    onClick: K,
                                    reducedMotion: f,
                                }),
                            (0, r.jsx)(L.y, {
                                quest: n,
                                useReducedMotion: f,
                                isExpanded: d,
                                awaitingConsoleConnections: D,
                                hasMadeProgress: T,
                                isProgressing: S,
                                activeScreen: A,
                                showBackButton: A !== I.LI.SELECT && C.length > 1 && !T && !S,
                                onBack: () => N(null),
                                taskDetails: a,
                                sourceQuestContent: I.jn.QUEST_BAR_V2,
                                onGameSheetOpened: g,
                                onGameSheetClosed: y,
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: o()(H.postEnrollmentBackground, H.postEnrollmentBackgroundExpanded),
                style: { backgroundImage: "linear-gradient(90deg, ".concat(F.aY, ", ").concat(F.v6, ")") },
            }),
        ],
    });
}
async function Q(e, t, n, r) {
    let i = (0, b.q8)(e);
    if (i && (0, A.R)(Z.dr.QUESTS_BAR))
        return void (await (0, w.enrollAndStartVideoQuestWithErrorHandling)(e, {
            questContent: t,
            questContentCTA: n,
            sourceQuestContent: r,
            sourceQuestContentCTA: n,
        }));
    (0, y.AH)(e.id, {
        questContent: t,
        questContentCTA: n,
        sourceQuestContent: r,
    }),
        i &&
            (0, w.openVideoQuestModal)({
                quest: e,
                questContent: t,
                sourceQuestContent: r,
                sourceQuestContentCTA: n,
            });
}
let J = i.forwardRef(function (e, t) {
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
            onGameSheetOpened: m,
            onGameSheetClosed: g,
            overlayRef: y,
            quest: v,
            useReducedMotion: T,
            taskDetails: S,
        } = e,
        A = (0, b.Vl)(v),
        { launchInGameActivity: C } = (0, O.zB)(v),
        N = i.useCallback(async () => {
            let e = v.config.features.includes(Z.S7.START_QUEST_CTA),
                t = e ? E.jZ.START_QUEST : E.jZ.ACCEPT_QUEST;
            await Q(v, I.jn.QUEST_BAR_V2, t, I.jn.QUEST_BAR_V2), A && e && C();
        }, [v, A, C]),
        R = (null == (n = v.userStatus) ? void 0 : n.enrolledAt) != null,
        P = u && d;
    return (0, r.jsxs)(s.animated.div, {
        "aria-hidden": !P,
        className: o()(l, H.contentExpanded, {
            [H.contentInteractable]: P,
            [H.contentExpandedAccepted]: R,
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
                    ? (0, r.jsx)(X, {
                          quest: v,
                          taskDetails: S,
                          expansionSpring: f,
                          overlayRef: y,
                          isExpanded: u,
                          reducedMotion: T,
                          onCtxMenuOpen: _,
                          onCtxMenuClose: p,
                          onCtxMenuSelect: h,
                          containerRef: t,
                          onGameSheetOpened: m,
                          onGameSheetClosed: g,
                      })
                    : (0, r.jsx)(z, {
                          quest: v,
                          taskDetails: S,
                          expansionSpring: f,
                          isInteractable: P,
                          reducedMotion: T,
                          containerRef: t,
                          isExpanded: u,
                          onAcceptQuest: N,
                          onGameSheetOpened: m,
                          onGameSheetClosed: g,
                      }),
            }),
        ],
    });
});
