n.d(t, { Z: () => X }), n(388685), n(953529), n(314940);
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
    v = n(509212),
    C = n(184299),
    y = n(685138),
    E = n(111131),
    O = n(373370),
    S = n(968843),
    T = n(475595),
    w = n(455357),
    P = n(644646),
    N = n(110560),
    R = n(217599),
    A = n(373322),
    B = n(661578),
    k = n(693900),
    I = n(554768),
    D = n(167308),
    q = n(26275),
    L = n(676728),
    Q = n(324805),
    V = n(945165),
    M = n(388032),
    Z = n(355488);
function W(e) {
    var t, n;
    let { quest: o, onClick: i, reducedMotion: l, isExpanded: c } = e,
        [u, m] = s.useState(!1),
        g = s.useRef(null),
        h = (0, T.fh)(o, T.eC.QUEST_BAR_HERO_VIDEO, void 0, !1),
        x = (0, T.fh)(o, T.eC.VIDEO_PLAYER_THUMBNAIL, void 0, !1),
        _ = (0, C.km)((e) => e.getVideoProgressState);
    s.useEffect(() => {
        null != g.current && (c && (!l || u) ? ((g.current.currentTime = 0), g.current.play()) : g.current.pause());
    }, [g, u, l, c]);
    let b = _(o.id),
        j = (null == (t = o.userStatus) ? void 0 : t.completedAt) != null && b === C.iw.COMPLETED,
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
function U(e) {
    let { quest: t } = e;
    return (0, r.jsx)(P.Z, {
        className: a()(Z.rewardTile, Z.hiddenRewardTile),
        learnMoreStyle: "text",
        quest: t,
        questContent: j.jn.QUEST_BAR_V2,
        location: Q.dr.QUESTS_BAR,
        sourceQuestContent: j.jn.QUEST_BAR_V2,
    });
}
function H(e) {
    return (0, r.jsx)(p.Text, {
        className: Z.description,
        variant: "text-xs/normal",
        children: (0, O.DD)({
            quest: e.quest,
            location: Q.dr.QUESTS_BAR,
            questContent: j.jn.QUEST_BAR_V2,
            taskDetails: e.taskDetails,
            sourceQuestContent: j.jn.QUEST_BAR_V2,
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
            onGameSheetOpened: j,
            onGameSheetClosed: v,
        } = e,
        C = s.useRef(null),
        E = (0, c.e7)([b.Z], () => b.Z.isEnrolling(t.id), [t]),
        S = s.useMemo(() => (0, T.fh)(t, T.eC.QUEST_BAR_HERO), [t]),
        P = (0, O.CR)({ quest: t }),
        { enabled: R, status: A } = (0, y.n)({
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
                                (0, r.jsx)(U, { quest: t }),
                                (0, r.jsx)(p.Heading, {
                                    className: Z.title,
                                    color: "header-primary",
                                    variant: "heading-md/medium",
                                    children: M.intl.format(M.t.EQa7os, { questName: t.config.messages.questName }),
                                }),
                                (0, r.jsx)(H, {
                                    quest: t,
                                    taskDetails: n,
                                    popoutTargetElementRef: C,
                                    onGameSheetOpened: j,
                                    onGameSheetClosed: v,
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: Z.cta,
                            children: (0, r.jsx)(p.Button, {
                                variant: "primary",
                                onClick: l ? _ : void 0,
                                loading: E,
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
                    S.isAnimated
                        ? (0, r.jsx)(w.Fl, {
                              id: "QuestBarContentExpanded_heroAnimated",
                              children: (e) =>
                                  (0, r.jsx)(z, {
                                      ref: e,
                                      asset: S,
                                      isExpanded: x,
                                      reducedMotion: d,
                                  }),
                          })
                        : (0, r.jsx)(w.Fl, {
                              id: "QuestBarContentExpanded_heroStatic",
                              children: (e) =>
                                  (0, r.jsx)("img", {
                                      ref: e,
                                      alt: "",
                                      className: Z.heroAsset,
                                      src: S.url,
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
            onGameSheetClosed: b,
        } = e,
        C = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null,
        y = o.percentComplete > 0,
        E = (0, S.z)(n),
        [O, T, w] = (0, S.me)(n, o),
        P = s.useRef(null),
        M = s.useRef(null),
        U = (0, S._s)({ quest: n }),
        H = (0, v.q8)(n),
        F = (0, S.Jf)(n),
        z = s.useCallback(() => {
            (0, N.openVideoQuestModal)({
                quest: n,
                questContent: j.jn.QUEST_BAR_V2,
                sourceQuestContent: j.jn.QUEST_BAR_V2,
                sourceQuestContentCTA: _.jZ.QUEST_BAR_VIDEO_QUEST_PREVIEW,
            });
        }, [n]),
        G = null != F ? F.percentComplete : o.percentComplete;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i.animated.div, {
                className: a()(Z.postEnrollmentBackground, Z.postEnrollmentBackgroundCollapsed),
                style: {
                    backgroundImage: "linear-gradient(90deg, ".concat(V.cd, ", ").concat(V.v$, ")"),
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
                    (0, r.jsx)(A.Z, {
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
                        activeScreen: O,
                        popoutTargetElementRef: M,
                        onGameSheetOpened: x,
                        onGameSheetClosed: b,
                    }),
                    (0, r.jsx)(k.n, {
                        children:
                            !C &&
                            !(0, v.Gd)(n) &&
                            (0, l.EQ)(O)
                                .with(j.LI.SELECT, () =>
                                    (0, r.jsx)(L.Z, {
                                        onConsole: () => w(Q.cd.CONSOLE),
                                        onDesktop: () => w(Q.cd.DESKTOP),
                                    }),
                                )
                                .with(j.LI.DESKTOP, () => (0, r.jsx)(I.Z, { quest: n }))
                                .with(j.LI.CONSOLE, () =>
                                    (0, r.jsx)(B.Z, {
                                        quest: n,
                                        taskDetails: o,
                                    }),
                                )
                                .exhaustive(),
                    }),
                    (0, r.jsxs)(k.n, {
                        children: [
                            H &&
                                (0, r.jsx)(W, {
                                    isExpanded: u,
                                    quest: n,
                                    onClick: z,
                                    reducedMotion: p,
                                }),
                            (0, r.jsx)(R.r, {
                                quest: n,
                                useReducedMotion: p,
                                isExpanded: u,
                                awaitingConsoleConnections: U,
                                hasMadeProgress: y,
                                isProgressing: E,
                                activeScreen: O,
                                showBackButton: O !== j.LI.SELECT && T.length > 1 && !y && !E,
                                onBack: () => w(null),
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
                className: a()(Z.postEnrollmentBackground, Z.postEnrollmentBackgroundExpanded),
                style: { backgroundImage: "linear-gradient(90deg, ".concat(V.cd, ", ").concat(V.v$, ")") },
            }),
        ],
    });
}
async function K(e, t, n, r) {
    let s = (0, v.q8)(e);
    return s && (0, E.R)(Q.dr.QUESTS_BAR)
        ? void (await (0, N.enrollAndStartVideoQuestWithErrorHandling)(e, {
              questContent: t,
              questContentCTA: n,
              sourceQuestContent: r,
              sourceQuestContentCTA: n,
          }))
        : (0, v.Rt)(e) && (0, E.R)(Q.dr.QUESTS_BAR)
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
let X = s.forwardRef(function (e, t) {
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
            quest: C,
            useReducedMotion: y,
            taskDetails: E,
        } = e,
        { launchInGameActivity: O } = (0, S.zB)(C),
        T = (0, v.Rt)(C),
        w = s.useCallback(async () => {
            let e = T ? _.jZ.START_QUEST : _.jZ.ACCEPT_QUEST;
            await K(C, j.jn.QUEST_BAR_V2, e, j.jn.QUEST_BAR_V2), T && O();
        }, [C, O, T]),
        P = (null == (n = C.userStatus) ? void 0 : n.enrolledAt) != null,
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
                          quest: C,
                          taskDetails: E,
                          expansionSpring: p,
                          overlayRef: b,
                          isExpanded: d,
                          reducedMotion: y,
                          onCtxMenuOpen: m,
                          onCtxMenuClose: g,
                          onCtxMenuSelect: f,
                          containerRef: t,
                          onGameSheetOpened: h,
                          onGameSheetClosed: x,
                      })
                    : (0, r.jsx)(F, {
                          quest: C,
                          taskDetails: E,
                          expansionSpring: p,
                          isInteractable: N,
                          reducedMotion: y,
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
