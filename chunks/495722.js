n.d(t, { Z: () => Y }), n(388685), n(953529), n(314940);
var r = n(54381),
    s = n(473749),
    o = n(120356),
    a = n.n(o),
    i = n(666917),
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
    b = n(313481),
    j = n(616022),
    v = n(49436),
    C = n(509212),
    y = n(184299),
    E = n(685138),
    O = n(111131),
    S = n(373370),
    T = n(475595),
    w = n(455357),
    P = n(644646),
    N = n(110560),
    R = n(693900),
    A = n(164495),
    B = n(759853),
    k = n(205511),
    I = n(694802),
    D = n(95985),
    q = n(688927),
    L = n(50476),
    Q = n(324805),
    V = n(743294),
    M = n(388032),
    Z = n(475832);
function W(e) {
    var t, n;
    let { quest: o, onClick: i, reducedMotion: l, isExpanded: c } = e,
        [u, m] = s.useState(!1),
        g = s.useRef(null),
        h = (0, T.fh)(o, T.eC.QUEST_BAR_HERO_VIDEO, void 0, !1),
        x = (0, T.fh)(o, T.eC.VIDEO_PLAYER_THUMBNAIL, void 0, !1),
        _ = (0, y.km)((e) => e.getVideoProgressState);
    s.useEffect(() => {
        null != g.current && (c && (!l || u) ? ((g.current.currentTime = 0), g.current.play()) : g.current.pause());
    }, [g, u, l, c]);
    let b = _(o.id),
        j = (null == (t = o.userStatus) ? void 0 : t.completedAt) != null && b === y.iw.COMPLETED,
        v = !j && (!l || u);
    return (0, r.jsxs)(p.P3F, {
        className: Z.videoQuestPreviewCont,
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
                    className: Z.assetBodyVideoPreviewMedia,
                }),
            null != h
                ? (0, r.jsx)(f.Z, {
                      ref: g,
                      autoPlay: !1,
                      poster: null == x ? void 0 : x.url,
                      loop: !0,
                      muted: !0,
                      playsInline: !0,
                      className: a()(Z.assetBodyVideoPreviewVideo, { [Z.assetBodyVideoPreviewVisible]: v }),
                      controls: !1,
                      children: (0, r.jsx)("source", {
                          src: h.url,
                          type: null != (n = h.mimetype) ? n : void 0,
                      }),
                  })
                : null,
            (0, r.jsx)("div", {
                className: Z.previewPlayButtonCont,
                children: j
                    ? (0, r.jsx)(p.Oe7, {
                          color: d.Z.colors.WHITE,
                          className: Z.previewPlayButton,
                      })
                    : (0, r.jsx)(p.o1U, {
                          color: d.Z.colors.WHITE,
                          className: Z.previewPlayButton,
                      }),
            }),
        ],
    });
}
function H(e) {
    let { quest: t } = e;
    return (0, r.jsx)(P.Z, {
        className: a()(Z.rewardTile, Z.hiddenRewardTile),
        learnMoreStyle: "text",
        quest: t,
        questContent: v.jn.QUEST_BAR_V2,
        location: Q.dr.QUESTS_BAR,
        sourceQuestContent: v.jn.QUEST_BAR_V2,
    });
}
function U(e) {
    return (0, r.jsx)(p.Text, {
        className: Z.description,
        variant: "text-xs/normal",
        children: (0, S.DD)({
            quest: e.quest,
            location: Q.dr.QUESTS_BAR,
            questContent: v.jn.QUEST_BAR_V2,
            taskDetails: e.taskDetails,
            sourceQuestContent: v.jn.QUEST_BAR_V2,
            popoutTargetElementRef: e.popoutTargetElementRef,
            onGameSheetOpened: e.onGameSheetOpened,
            onGameSheetClosed: e.onGameSheetClosed,
        }),
    });
}
function F(e) {
    let {
            quest: t,
            taskDetails: n,
            expansionSpring: o,
            isInteractable: l,
            reducedMotion: d,
            containerRef: f,
            isExpanded: x,
            onAcceptQuest: _,
            onGameSheetOpened: b,
            onGameSheetClosed: v,
        } = e,
        C = s.useRef(null),
        y = (0, c.e7)([j.Z], () => j.Z.isEnrolling(t.id), [t]),
        O = s.useMemo(() => (0, T.fh)(t, T.eC.QUEST_BAR_HERO), [t]),
        P = (0, S.CR)({ quest: t }),
        { enabled: R, status: A } = (0, E.n)({
            location: Q.dr.QUESTS_BAR,
            questConfig: t.config,
        }),
        B = s.useMemo(() => (0, T.fh)(t, T.eC.HERO_IMAGE), [t]),
        k = s.useMemo(() => (null == B ? {} : { backgroundImage: "url(".concat(B.url, ")") }), [B]),
        I = (0, m.ZP)(),
        D = (0, u.wj)(I),
        q = (0, c.e7)([h.Z], () => h.Z.isFocused()),
        L = (0, c.e7)([g.Z], () => g.Z.useReducedMotion);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                ref: C,
                children: (0, r.jsxs)("div", {
                    className: Z.questPromoContent,
                    ref: f,
                    children: [
                        (0, r.jsxs)("div", {
                            className: Z.details,
                            children: [
                                (0, r.jsx)(H, { quest: t }),
                                (0, r.jsx)(p.Heading, {
                                    className: Z.title,
                                    color: "header-primary",
                                    variant: "heading-md/medium",
                                    children: M.intl.format(M.t.EQa7os, { questName: t.config.messages.questName }),
                                }),
                                (0, r.jsx)(U, {
                                    quest: t,
                                    taskDetails: n,
                                    popoutTargetElementRef: C,
                                    onGameSheetOpened: b,
                                    onGameSheetClosed: v,
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: Z.cta,
                            children: (0, r.jsx)(p.Button, {
                                variant: "primary",
                                onClick: l ? _ : void 0,
                                loading: y,
                                text: P,
                                size: "sm",
                                icon: (0, N.getPrimaryCtaIcon)(t),
                                fullWidth: !0,
                            }),
                        }),
                    ],
                }),
            }),
            R &&
                null != B &&
                (0, r.jsxs)(i.animated.div, {
                    className: Z.contentCollapsedBackgroundWrapper,
                    style: {
                        opacity: o.to([0, 1], [1, 0]),
                    },
                    children: [
                        (null == A ? void 0 : A.progressBlur)
                            ? (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)("div", {
                                          className: Z.contentCollapsedBackground,
                                          style: k,
                                      }),
                                      (0, r.jsx)("div", {
                                          className: a()(Z.contentCollapsedBackground, Z.blur30),
                                          style: k,
                                      }),
                                      (0, r.jsx)("div", {
                                          className: a()(Z.contentCollapsedBackground, Z.blur60),
                                          style: k,
                                      }),
                                      (0, r.jsx)("div", {
                                          className: a()(Z.contentCollapsedBackground, Z.blur100),
                                          style: k,
                                      }),
                                  ],
                              })
                            : (0, r.jsx)("div", {
                                  className: a()(Z.contentCollapsedBackground, Z.blur),
                                  style: k,
                              }),
                        (null == A ? void 0 : A.shineWipe) &&
                            (0, r.jsx)(p.ZX5, {
                                className: Z.shine,
                                "data-migration-pending": !0,
                                shineSize: p.rHe.DEFAULT,
                                shinePaused: !q || L,
                            }),
                    ],
                }),
            (0, r.jsxs)(i.animated.div, {
                className: Z.heroAssetWrapper,
                style: {
                    backdropFilter: o.to([0, 1], [5, 0]).to((e) => "blur(".concat(e, "px)")),
                    filter: o.to([0, 1], [0.8, 1]).to((e) => "brightness(".concat(e, ")")),
                },
                children: [
                    !R &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(i.animated.div, {
                                    className: Z.heroAssetDarken,
                                    style: {
                                        opacity: o.to([0, 1], [1, 0]),
                                    },
                                }),
                                (0, r.jsx)(i.animated.div, {
                                    className: Z.heroAssetTint,
                                    style: {
                                        backgroundColor: t.config.colors.primary,
                                        opacity: o.to([0, 1], [1, 0]),
                                    },
                                }),
                            ],
                        }),
                    O.isAnimated
                        ? (0, r.jsx)(w.Fl, {
                              id: "QuestBarV2ContentExpanded_heroAnimated",
                              children: (e) =>
                                  (0, r.jsx)(z, {
                                      ref: e,
                                      asset: O,
                                      isExpanded: x,
                                      reducedMotion: d,
                                  }),
                          })
                        : (0, r.jsx)(w.Fl, {
                              id: "QuestBarV2ContentExpanded_heroStatic",
                              children: (e) =>
                                  (0, r.jsx)("img", {
                                      ref: e,
                                      alt: "",
                                      className: Z.heroAsset,
                                      src: O.url,
                                  }),
                          }),
                    (0, r.jsx)("div", { className: a()(Z.legibilityGradient, { [Z.legibilityGradientDark]: D }) }),
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
        (0, r.jsx)(f.Z, {
            ref: (e) => {
                null != e && ((l.current = e), null != t && ("function" == typeof t ? t(e) : (t.current = e)));
            },
            autoPlay: !0,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: Z.heroAsset,
            controls: !1,
            children: (0, r.jsx)("source", {
                src: o.url,
                type: null != (n = o.mimetype) ? n : void 0,
            }),
        })
    );
});
function G(e) {
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
            onGameSheetClosed: j,
        } = e,
        y = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null,
        E = o.percentComplete > 0,
        O = (0, b.z)(n),
        [S, T, w] = (0, b.me)(n, o),
        P = s.useRef(null),
        M = s.useRef(null),
        H = (0, b._s)({ quest: n }),
        U = (0, C.q8)(n),
        F = (0, b.Jf)(n),
        z = s.useCallback(() => {
            (0, N.openVideoQuestModal)({
                quest: n,
                questContent: v.jn.QUEST_BAR_V2,
                sourceQuestContent: v.jn.QUEST_BAR_V2,
                sourceQuestContentCTA: _.jZ.QUEST_BAR_VIDEO_QUEST_PREVIEW,
            });
        }, [n]),
        G = null != F ? F.percentComplete : o.percentComplete;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i.animated.div, {
                className: a()(Z.postEnrollmentBackground, Z.postEnrollmentBackgroundCollapsed),
                style: {
                    backgroundImage: "linear-gradient(90deg, ".concat(V.aY, ", ").concat(V.v6, ")"),
                    opacity: c.to({
                        range: [0, 1],
                        output: [1, 0],
                    }),
                },
            }),
            (0, r.jsxs)("div", {
                className: Z.questAcceptedContent,
                ref: (e) => {
                    "function" == typeof m ? m(e) : null != m && (m.current = e), null != e && (M.current = e);
                },
                children: [
                    (0, r.jsx)(q.Z, {
                        quest: n,
                        onCtxMenuOpen: g,
                        onCtxMenuClose: f,
                        onCtxMenuSelect: h,
                    }),
                    (0, r.jsx)("div", { className: Z.divider }),
                    (0, r.jsx)(B.Z, {
                        expansionSpring: c,
                        overlayRef: d,
                        progressBarRef: P,
                        quest: n,
                        isExpanded: u,
                        isHovered: !1,
                    }),
                    (0, r.jsx)(D.Z, {
                        contentLocation: "expanded",
                        quest: n,
                        progressBarRef: P,
                        isExpanded: !0,
                        percentComplete: G,
                        activeScreen: S,
                        popoutTargetElementRef: M,
                        onGameSheetOpened: x,
                        onGameSheetClosed: j,
                    }),
                    (0, r.jsx)(R.n, {
                        children:
                            !y &&
                            !(0, C.Gd)(n) &&
                            (0, l.EQ)(S)
                                .with(v.LI.SELECT, () =>
                                    (0, r.jsx)(L.Z, {
                                        onConsole: () => w(Q.cd.CONSOLE),
                                        onDesktop: () => w(Q.cd.DESKTOP),
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
                    (0, r.jsxs)(R.n, {
                        children: [
                            U &&
                                (0, r.jsx)(W, {
                                    isExpanded: u,
                                    quest: n,
                                    onClick: z,
                                    reducedMotion: p,
                                }),
                            (0, r.jsx)(A.y, {
                                quest: n,
                                useReducedMotion: p,
                                isExpanded: u,
                                awaitingConsoleConnections: H,
                                hasMadeProgress: E,
                                isProgressing: O,
                                activeScreen: S,
                                showBackButton: S !== v.LI.SELECT && T.length > 1 && !E && !O,
                                onBack: () => w(null),
                                taskDetails: o,
                                sourceQuestContent: v.jn.QUEST_BAR_V2,
                                onGameSheetOpened: x,
                                onGameSheetClosed: j,
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: a()(Z.postEnrollmentBackground, Z.postEnrollmentBackgroundExpanded),
                style: { backgroundImage: "linear-gradient(90deg, ".concat(V.aY, ", ").concat(V.v6, ")") },
            }),
        ],
    });
}
async function K(e, t, n, r) {
    let s = (0, C.q8)(e);
    return s && (0, O.R)(Q.dr.QUESTS_BAR)
        ? void (await (0, N.enrollAndStartVideoQuestWithErrorHandling)(e, {
              questContent: t,
              questContentCTA: n,
              sourceQuestContent: r,
              sourceQuestContentCTA: n,
          }))
        : (0, C.Rt)(e) && (0, O.R)(Q.dr.QUESTS_BAR)
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
                (0, N.openVideoQuestModal)({
                    quest: e,
                    questContent: t,
                    sourceQuestContent: r,
                    sourceQuestContentCTA: n,
                }));
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
            onCtxMenuClose: g,
            onCtxMenuSelect: f,
            onGameSheetOpened: h,
            onGameSheetClosed: x,
            overlayRef: j,
            quest: y,
            useReducedMotion: E,
            taskDetails: O,
        } = e,
        { launchInGameActivity: S } = (0, b.zB)(y),
        T = (0, C.Rt)(y),
        w = s.useCallback(async () => {
            let e = T ? _.jZ.START_QUEST : _.jZ.ACCEPT_QUEST;
            await K(y, v.jn.QUEST_BAR_V2, e, v.jn.QUEST_BAR_V2), T && S();
        }, [y, S, T]),
        P = (null == (n = y.userStatus) ? void 0 : n.enrolledAt) != null,
        N = d && u;
    return (0, r.jsxs)(i.animated.div, {
        "aria-hidden": !N,
        className: a()(l, Z.contentExpanded, {
            [Z.contentInteractable]: N,
            [Z.contentExpandedAccepted]: P,
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
                children: P
                    ? (0, r.jsx)(G, {
                          quest: y,
                          taskDetails: O,
                          expansionSpring: p,
                          overlayRef: j,
                          isExpanded: d,
                          reducedMotion: E,
                          onCtxMenuOpen: m,
                          onCtxMenuClose: g,
                          onCtxMenuSelect: f,
                          containerRef: t,
                          onGameSheetOpened: h,
                          onGameSheetClosed: x,
                      })
                    : (0, r.jsx)(F, {
                          quest: y,
                          taskDetails: O,
                          expansionSpring: p,
                          isInteractable: N,
                          reducedMotion: E,
                          containerRef: t,
                          isExpanded: d,
                          onAcceptQuest: w,
                          onGameSheetOpened: h,
                          onGameSheetClosed: x,
                      }),
            }),
        ],
    });
});
