n.d(t, { Z: () => J }), n(388685), n(953529), n(314940);
var r = n(54381),
    s = n(473749),
    o = n(120356),
    a = n.n(o),
    i = n(205120),
    l = n(278074),
    c = n(442837),
    d = n(692547),
    u = n(780384),
    p = n(481060),
    m = n(410030),
    g = n(607070),
    f = n(70097),
    h = n(451478),
    x = n(22095),
    _ = n(617136),
    b = n(616022),
    j = n(49436),
    v = n(184299),
    C = n(685138),
    y = n(111131),
    E = n(373370),
    O = n(968843),
    S = n(475595),
    T = n(387745),
    w = n(254579),
    P = n(283689),
    N = n(455357),
    R = n(644646),
    A = n(110560),
    B = n(217599),
    k = n(373322),
    I = n(661578),
    D = n(693900),
    q = n(554768),
    L = n(167308),
    Q = n(26275),
    V = n(676728),
    M = n(324805),
    Z = n(945165),
    W = n(388032),
    H = n(355488);
function U(e) {
    var t, n;
    let { quest: o, onClick: i, reducedMotion: l, isExpanded: c } = e,
        [u, m] = s.useState(!1),
        g = s.useRef(null),
        h = (0, S.fh)(o, S.eC.QUEST_BAR_HERO_VIDEO, void 0, !1),
        x = (0, S.fh)(o, S.eC.VIDEO_PLAYER_THUMBNAIL, void 0, !1),
        _ = (0, v.km)((e) => e.getVideoProgressState);
    s.useEffect(() => {
        null != g.current && (c && (!l || u) ? ((g.current.currentTime = 0), g.current.play()) : g.current.pause());
    }, [g, u, l, c]);
    let b = _(o.id),
        j = (null == (t = o.userStatus) ? void 0 : t.completedAt) != null && b === v.iw.COMPLETED,
        C = !j && (!l || u);
    return (0, r.jsxs)(p.P3F, {
        className: H.videoQuestPreviewCont,
        onClick: i,
        onMouseEnter: () => {
            l && !u && m(!0);
        },
        onMouseLeave: () => {
            l && u && m(!1);
        },
        children: [
            null != x &&
                (0, r.jsx)("img", {
                    alt: "",
                    src: x.url,
                    className: H.assetBodyVideoPreviewMedia,
                }),
            null != h
                ? (0, r.jsx)(f.Z, {
                      ref: g,
                      autoPlay: !1,
                      poster: null == x ? void 0 : x.url,
                      loop: !0,
                      muted: !0,
                      playsInline: !0,
                      className: a()(H.assetBodyVideoPreviewVideo, { [H.assetBodyVideoPreviewVisible]: C }),
                      controls: !1,
                      children: (0, r.jsx)("source", {
                          src: h.url,
                          type: null != (n = h.mimetype) ? n : void 0,
                      }),
                  })
                : null,
            (0, r.jsx)("div", {
                className: H.previewPlayButtonCont,
                children: j
                    ? (0, r.jsx)(p.Oe7, {
                          color: d.Z.colors.WHITE,
                          className: H.previewPlayButton,
                      })
                    : (0, r.jsx)(p.o1U, {
                          color: d.Z.colors.WHITE,
                          className: H.previewPlayButton,
                      }),
            }),
        ],
    });
}
function F(e) {
    let { quest: t } = e;
    return (0, r.jsx)(R.Z, {
        className: a()(H.rewardTile, H.hiddenRewardTile),
        learnMoreStyle: "text",
        quest: t,
        questContent: j.jn.QUEST_BAR_V2,
        location: M.dr.QUESTS_BAR,
        sourceQuestContent: j.jn.QUEST_BAR_V2,
    });
}
function z(e) {
    return (0, r.jsx)(p.Text, {
        className: H.description,
        variant: "text-xs/normal",
        children: (0, E.DD)({
            quest: e.quest,
            location: M.dr.QUESTS_BAR,
            questContent: j.jn.QUEST_BAR_V2,
            taskDetails: e.taskDetails,
            sourceQuestContent: j.jn.QUEST_BAR_V2,
            popoutTargetElementRef: e.popoutTargetElementRef,
            onGameSheetOpened: e.onGameSheetOpened,
            onGameSheetClosed: e.onGameSheetClosed,
        }),
    });
}
function G(e) {
    let {
            quest: t,
            taskDetails: n,
            expansionSpring: o,
            isInteractable: l,
            reducedMotion: d,
            containerRef: f,
            isExpanded: x,
            onAcceptQuest: _,
            onGameSheetOpened: j,
            onGameSheetClosed: v,
        } = e,
        y = s.useRef(null),
        O = (0, c.e7)([b.Z], () => b.Z.isEnrolling(t.id), [t]),
        T = s.useMemo(() => (0, S.fh)(t, S.eC.QUEST_BAR_HERO), [t]),
        w = (0, E.CR)({ quest: t }),
        { enabled: P, status: R } = (0, C.n)({
            location: M.dr.QUESTS_BAR,
            questConfig: t.config,
        }),
        B = s.useMemo(() => (0, S.fh)(t, S.eC.HERO_IMAGE), [t]),
        k = s.useMemo(() => (null == B ? {} : { backgroundImage: "url(".concat(B.url, ")") }), [B]),
        I = (0, m.ZP)(),
        D = (0, u.wj)(I),
        q = (0, c.e7)([h.Z], () => h.Z.isFocused()),
        L = (0, c.e7)([g.Z], () => g.Z.useReducedMotion);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                ref: y,
                children: (0, r.jsxs)("div", {
                    className: H.questPromoContent,
                    ref: f,
                    children: [
                        (0, r.jsxs)("div", {
                            className: H.details,
                            children: [
                                (0, r.jsx)(F, { quest: t }),
                                (0, r.jsx)(p.Heading, {
                                    className: H.title,
                                    color: "header-primary",
                                    variant: "heading-md/medium",
                                    children: W.intl.format(W.t.EQa7os, { questName: t.config.messages.questName }),
                                }),
                                (0, r.jsx)(z, {
                                    quest: t,
                                    taskDetails: n,
                                    popoutTargetElementRef: y,
                                    onGameSheetOpened: j,
                                    onGameSheetClosed: v,
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: H.cta,
                            children: (0, r.jsx)(p.Button, {
                                variant: "primary",
                                onClick: l ? _ : void 0,
                                loading: O,
                                text: w,
                                size: "sm",
                                icon: (0, A.getPrimaryCtaIcon)(t),
                                fullWidth: !0,
                            }),
                        }),
                    ],
                }),
            }),
            P &&
                null != B &&
                (0, r.jsxs)(i.animated.div, {
                    className: H.contentCollapsedBackgroundWrapper,
                    style: {
                        opacity: o.to([0, 1], [1, 0]),
                    },
                    children: [
                        (null == R ? void 0 : R.progressBlur)
                            ? (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)("div", {
                                          className: H.contentCollapsedBackground,
                                          style: k,
                                      }),
                                      (0, r.jsx)("div", {
                                          className: a()(H.contentCollapsedBackground, H.blur30),
                                          style: k,
                                      }),
                                      (0, r.jsx)("div", {
                                          className: a()(H.contentCollapsedBackground, H.blur60),
                                          style: k,
                                      }),
                                      (0, r.jsx)("div", {
                                          className: a()(H.contentCollapsedBackground, H.blur100),
                                          style: k,
                                      }),
                                  ],
                              })
                            : (0, r.jsx)("div", {
                                  className: a()(H.contentCollapsedBackground, H.blur),
                                  style: k,
                              }),
                        (null == R ? void 0 : R.shineWipe) &&
                            (0, r.jsx)(p.ZX5, {
                                className: H.shine,
                                "data-migration-pending": !0,
                                shineSize: p.rHe.DEFAULT,
                                shinePaused: !q || L,
                            }),
                    ],
                }),
            (0, r.jsxs)(i.animated.div, {
                className: H.heroAssetWrapper,
                style: {
                    backdropFilter: o.to([0, 1], [5, 0]).to((e) => "blur(".concat(e, "px)")),
                    filter: o.to([0, 1], [0.8, 1]).to((e) => "brightness(".concat(e, ")")),
                },
                children: [
                    !P &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(i.animated.div, {
                                    className: H.heroAssetDarken,
                                    style: {
                                        opacity: o.to([0, 1], [1, 0]),
                                    },
                                }),
                                (0, r.jsx)(i.animated.div, {
                                    className: H.heroAssetTint,
                                    style: {
                                        backgroundColor: t.config.colors.primary,
                                        opacity: o.to([0, 1], [1, 0]),
                                    },
                                }),
                            ],
                        }),
                    T.isAnimated
                        ? (0, r.jsx)(N.Fl, {
                              id: "QuestBarContentExpanded_heroAnimated",
                              children: (e) =>
                                  (0, r.jsx)(K, {
                                      ref: e,
                                      asset: T,
                                      isExpanded: x,
                                      reducedMotion: d,
                                  }),
                          })
                        : (0, r.jsx)(N.Fl, {
                              id: "QuestBarContentExpanded_heroStatic",
                              children: (e) =>
                                  (0, r.jsx)("img", {
                                      ref: e,
                                      alt: "",
                                      className: H.heroAsset,
                                      src: T.url,
                                  }),
                          }),
                    (0, r.jsx)("div", { className: a()(H.legibilityGradient, { [H.legibilityGradientDark]: D }) }),
                ],
            }),
        ],
    });
}
let K = s.forwardRef(function (e, t) {
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
            className: H.heroAsset,
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
            onCtxMenuOpen: g,
            onCtxMenuClose: f,
            onCtxMenuSelect: h,
            onGameSheetOpened: x,
            onGameSheetClosed: b,
        } = e,
        v = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null,
        C = o.percentComplete > 0,
        y = (0, O.z)(n),
        [E, S, P] = (0, O.me)(n, o),
        N = s.useRef(null),
        R = s.useRef(null),
        W = (0, O._s)({ quest: n }),
        F = (0, w.q8)(n),
        z = (0, O.Jf)(n),
        G = s.useCallback(() => {
            (0, A.openVideoQuestModal)({
                quest: n,
                questContent: j.jn.QUEST_BAR_V2,
                sourceQuestContent: j.jn.QUEST_BAR_V2,
                sourceQuestContentCTA: _.jZ.QUEST_BAR_VIDEO_QUEST_PREVIEW,
            });
        }, [n]),
        K = null != z ? z.percentComplete : o.percentComplete;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i.animated.div, {
                className: a()(H.postEnrollmentBackground, H.postEnrollmentBackgroundCollapsed),
                style: {
                    backgroundImage: "linear-gradient(90deg, ".concat(Z.cd, ", ").concat(Z.v$, ")"),
                    opacity: c.to({
                        range: [0, 1],
                        output: [1, 0],
                    }),
                },
            }),
            (0, r.jsxs)("div", {
                className: H.questAcceptedContent,
                ref: (e) => {
                    "function" == typeof m ? m(e) : null != m && (m.current = e), null != e && (R.current = e);
                },
                children: [
                    (0, r.jsx)(Q.Z, {
                        quest: n,
                        onCtxMenuOpen: g,
                        onCtxMenuClose: f,
                        onCtxMenuSelect: h,
                    }),
                    (0, r.jsx)("div", { className: H.divider }),
                    (0, r.jsx)(k.Z, {
                        expansionSpring: c,
                        overlayRef: d,
                        progressBarRef: N,
                        quest: n,
                        isExpanded: u,
                        isHovered: !1,
                    }),
                    (0, r.jsx)(L.Z, {
                        contentLocation: "expanded",
                        quest: n,
                        progressBarRef: N,
                        isExpanded: !0,
                        percentComplete: K,
                        activeScreen: E,
                        popoutTargetElementRef: R,
                        onGameSheetOpened: x,
                        onGameSheetClosed: b,
                    }),
                    (0, r.jsx)(D.n, {
                        children:
                            !v &&
                            !(0, T.Gd)(n) &&
                            (0, l.EQ)(E)
                                .with(j.LI.SELECT, () =>
                                    (0, r.jsx)(V.Z, {
                                        onConsole: () => P(M.cd.CONSOLE),
                                        onDesktop: () => P(M.cd.DESKTOP),
                                    }),
                                )
                                .with(j.LI.DESKTOP, () => (0, r.jsx)(q.Z, { quest: n }))
                                .with(j.LI.CONSOLE, () =>
                                    (0, r.jsx)(I.Z, {
                                        quest: n,
                                        taskDetails: o,
                                    }),
                                )
                                .exhaustive(),
                    }),
                    (0, r.jsxs)(D.n, {
                        children: [
                            F &&
                                (0, r.jsx)(U, {
                                    isExpanded: u,
                                    quest: n,
                                    onClick: G,
                                    reducedMotion: p,
                                }),
                            (0, r.jsx)(B.r, {
                                quest: n,
                                useReducedMotion: p,
                                isExpanded: u,
                                awaitingConsoleConnections: W,
                                hasMadeProgress: C,
                                isProgressing: y,
                                activeScreen: E,
                                showBackButton: E !== j.LI.SELECT && S.length > 1 && !C && !y,
                                onBack: () => P(null),
                                taskDetails: o,
                                sourceQuestContent: j.jn.QUEST_BAR_V2,
                                onGameSheetOpened: x,
                                onGameSheetClosed: b,
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: a()(H.postEnrollmentBackground, H.postEnrollmentBackgroundExpanded),
                style: { backgroundImage: "linear-gradient(90deg, ".concat(Z.cd, ", ").concat(Z.v$, ")") },
            }),
        ],
    });
}
async function Y(e, t, n, r) {
    let s = (0, w.q8)(e);
    return s && (0, y.R)(M.dr.QUESTS_BAR)
        ? void (await (0, A.enrollAndStartVideoQuestWithErrorHandling)(e, {
              questContent: t,
              questContentCTA: n,
              sourceQuestContent: r,
              sourceQuestContentCTA: n,
          }))
        : (0, P.Rt)(e) && (0, y.R)(M.dr.QUESTS_BAR)
          ? void (await (0, x.AH)(e.id, {
                questContent: t,
                questContentCTA: n,
                sourceQuestContent: r,
            }))
          : void ((0, x.AH)(e.id, {
                questContent: t,
                questContentCTA: n,
                sourceQuestContent: r,
            }),
            s &&
                (0, A.openVideoQuestModal)({
                    quest: e,
                    questContent: t,
                    sourceQuestContent: r,
                    sourceQuestContentCTA: n,
                }));
}
let J = s.forwardRef(function (e, t) {
    var n;
    let {
            children: o,
            className: l,
            collapsedHeight: c,
            isExpanded: d,
            isExpansionAnimationComplete: u,
            expansionSpring: p,
            onCtxMenuOpen: m,
            onCtxMenuClose: g,
            onCtxMenuSelect: f,
            onGameSheetOpened: h,
            onGameSheetClosed: x,
            overlayRef: b,
            quest: v,
            useReducedMotion: C,
            taskDetails: y,
        } = e,
        { launchInGameActivity: E } = (0, O.zB)(v),
        S = (0, P.Rt)(v),
        T = s.useCallback(async () => {
            let e = S ? _.jZ.START_QUEST : _.jZ.ACCEPT_QUEST;
            await Y(v, j.jn.QUEST_BAR_V2, e, j.jn.QUEST_BAR_V2), S && E();
        }, [v, E, S]),
        w = (null == (n = v.userStatus) ? void 0 : n.enrolledAt) != null,
        N = d && u;
    return (0, r.jsxs)(i.animated.div, {
        "aria-hidden": !N,
        className: a()(l, H.contentExpanded, {
            [H.contentInteractable]: N,
            [H.contentExpandedAccepted]: w,
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
                          quest: v,
                          taskDetails: y,
                          expansionSpring: p,
                          overlayRef: b,
                          isExpanded: d,
                          reducedMotion: C,
                          onCtxMenuOpen: m,
                          onCtxMenuClose: g,
                          onCtxMenuSelect: f,
                          containerRef: t,
                          onGameSheetOpened: h,
                          onGameSheetClosed: x,
                      })
                    : (0, r.jsx)(G, {
                          quest: v,
                          taskDetails: y,
                          expansionSpring: p,
                          isInteractable: N,
                          reducedMotion: C,
                          containerRef: t,
                          isExpanded: d,
                          onAcceptQuest: T,
                          onGameSheetOpened: h,
                          onGameSheetClosed: x,
                      }),
            }),
        ],
    });
});
