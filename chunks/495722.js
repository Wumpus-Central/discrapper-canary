n.d(t, { Z: () => J }), n(388685), n(953529), n(314940);
var r = n(951288),
    s = n(647438),
    o = n(120356),
    a = n.n(o),
    i = n(137317),
    l = n(278074),
    c = n(754700),
    d = n(442837),
    u = n(692547),
    p = n(780384),
    m = n(481060),
    g = n(410030),
    f = n(607070),
    h = n(70097),
    x = n(451478),
    _ = n(617136),
    b = n(509212),
    j = n(272008),
    v = n(113434),
    C = n(569984),
    y = n(497505),
    E = n(184299),
    O = n(685138),
    S = n(111131),
    T = n(373370),
    w = n(475595),
    P = n(720293),
    N = n(644646),
    R = n(110560),
    A = n(78826),
    B = n(693900),
    k = n(164495),
    I = n(759853),
    q = n(205511),
    D = n(694802),
    L = n(95985),
    V = n(688927),
    Q = n(50476),
    M = n(46140),
    W = n(743294),
    Z = n(388032),
    U = n(475832);
function H(e) {
    var t, n;
    let { quest: o, onClick: i, reducedMotion: l, isExpanded: d } = e,
        [p, g] = s.useState(!1),
        f = s.useRef(null),
        x = (0, w.fh)(o, w.eC.QUEST_BAR_HERO_VIDEO),
        _ = (0, P.z0)(o, c.X.WATCH_VIDEO, P.n1.VIDEO, P.O.THUMBNAIL),
        b = (0, E.km)((e) => e.getVideoProgressState);
    s.useEffect(() => {
        null != f.current && (d && (!l || p) ? ((f.current.currentTime = 0), f.current.play()) : f.current.pause());
    }, [f, p, l, d]);
    let j = b(o.id),
        v = (null == (t = o.userStatus) ? void 0 : t.completedAt) != null && j === E.iw.COMPLETED,
        C = !v && (!l || p);
    return (0, r.jsxs)(m.P3F, {
        className: U.videoQuestPreviewCont,
        onClick: i,
        onMouseEnter: () => {
            l && !p && g(!0);
        },
        onMouseLeave: () => {
            l && p && g(!1);
        },
        children: [
            null != _ &&
                (0, r.jsx)("img", {
                    alt: "",
                    src: _.url,
                    className: U.assetBodyVideoPreviewMedia,
                }),
            null != x
                ? (0, r.jsx)(h.Z, {
                      ref: f,
                      autoPlay: !1,
                      poster: null == _ ? void 0 : _.url,
                      loop: !0,
                      muted: !0,
                      playsInline: !0,
                      className: a()(U.assetBodyVideoPreviewVideo, { [U.assetBodyVideoPreviewVisible]: C }),
                      controls: !1,
                      children: (0, r.jsx)("source", {
                          src: x.url,
                          type: null != (n = x.mimetype) ? n : void 0,
                      }),
                  })
                : null,
            (0, r.jsx)("div", {
                className: U.previewPlayButtonCont,
                children: v
                    ? (0, r.jsx)(m.Oe7, {
                          color: u.Z.colors.WHITE,
                          className: U.previewPlayButton,
                      })
                    : (0, r.jsx)(m.o1U, {
                          color: u.Z.colors.WHITE,
                          className: U.previewPlayButton,
                      }),
            }),
        ],
    });
}
function F(e) {
    let { quest: t } = e;
    return (0, r.jsx)(N.Z, {
        className: a()(U.rewardTile, U.hiddenRewardTile),
        learnMoreStyle: "text",
        quest: t,
        questContent: y.jn.QUEST_BAR_V2,
        location: M.dr.QUESTS_BAR,
        sourceQuestContent: y.jn.QUEST_BAR_V2,
    });
}
function X(e) {
    return (0, r.jsx)(m.Text, {
        className: U.description,
        variant: "text-xs/normal",
        children: (0, T.DD)({
            quest: e.quest,
            location: M.dr.QUESTS_BAR,
            questContent: y.jn.QUEST_BAR_V2,
            taskDetails: e.taskDetails,
            sourceQuestContent: y.jn.QUEST_BAR_V2,
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
            expansionSpring: o,
            isInteractable: l,
            reducedMotion: c,
            containerRef: u,
            isExpanded: h,
            onAcceptQuest: _,
            onGameSheetOpened: b,
            onGameSheetClosed: j,
        } = e,
        v = s.useRef(null),
        y = (0, d.e7)([C.Z], () => C.Z.isEnrolling(t.id), [t]),
        E = s.useMemo(() => (0, w.fh)(t, w.eC.QUEST_BAR_HERO), [t]),
        S = (0, T.CR)({ quest: t }),
        { enabled: P, status: N } = (0, O.n)({
            location: M.dr.QUESTS_BAR,
            questConfig: t.config,
        }),
        R = s.useMemo(() => (0, w.fh)(t, w.eC.HERO_IMAGE), [t]),
        B = s.useMemo(() => (null == R ? {} : { backgroundImage: "url(".concat(R.url, ")") }), [R]),
        k = (0, g.ZP)(),
        I = (0, p.wj)(k),
        q = (0, d.e7)([x.Z], () => x.Z.isFocused()),
        D = (0, d.e7)([f.Z], () => f.Z.useReducedMotion);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                ref: v,
                children: (0, r.jsxs)("div", {
                    className: U.questPromoContent,
                    ref: u,
                    children: [
                        (0, r.jsxs)("div", {
                            className: U.details,
                            children: [
                                (0, r.jsx)(F, { quest: t }),
                                (0, r.jsx)(m.X6q, {
                                    className: U.title,
                                    color: "header-primary",
                                    variant: "heading-md/medium",
                                    children: Z.intl.format(Z.t.EQa7oq, { questName: t.config.messages.questName }),
                                }),
                                (0, r.jsx)(X, {
                                    quest: t,
                                    taskDetails: n,
                                    popoutTargetElementRef: v,
                                    onGameSheetOpened: b,
                                    onGameSheetClosed: j,
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: U.cta,
                            children: (0, r.jsx)(m.zxk, {
                                variant: "primary",
                                onClick: l ? _ : void 0,
                                loading: y,
                                text: S,
                                size: "sm",
                                icon: t.config.features.includes(M.S7.CLOUD_GAMING_ACTIVITY) ? m.v3n : void 0,
                                fullWidth: !0,
                            }),
                        }),
                    ],
                }),
            }),
            P &&
                null != R &&
                (0, r.jsxs)(i.animated.div, {
                    className: U.contentCollapsedBackgroundWrapper,
                    style: {
                        opacity: o.to([0, 1], [1, 0]),
                    },
                    children: [
                        (null == N ? void 0 : N.progressBlur)
                            ? (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)("div", {
                                          className: U.contentCollapsedBackground,
                                          style: B,
                                      }),
                                      (0, r.jsx)("div", {
                                          className: a()(U.contentCollapsedBackground, U.blur30),
                                          style: B,
                                      }),
                                      (0, r.jsx)("div", {
                                          className: a()(U.contentCollapsedBackground, U.blur60),
                                          style: B,
                                      }),
                                      (0, r.jsx)("div", {
                                          className: a()(U.contentCollapsedBackground, U.blur100),
                                          style: B,
                                      }),
                                  ],
                              })
                            : (0, r.jsx)("div", {
                                  className: a()(U.contentCollapsedBackground, U.blur),
                                  style: B,
                              }),
                        (null == N ? void 0 : N.shineWipe) &&
                            (0, r.jsx)(m.ZX5, {
                                className: U.shine,
                                "data-migration-pending": !0,
                                shineSize: m.rHe.DEFAULT,
                                shinePaused: !q || D,
                            }),
                    ],
                }),
            (0, r.jsxs)(i.animated.div, {
                className: U.heroAssetWrapper,
                style: {
                    backdropFilter: o.to([0, 1], [5, 0]).to((e) => "blur(".concat(e, "px)")),
                    filter: o.to([0, 1], [0.8, 1]).to((e) => "brightness(".concat(e, ")")),
                },
                children: [
                    !P &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(i.animated.div, {
                                    className: U.heroAssetDarken,
                                    style: {
                                        opacity: o.to([0, 1], [1, 0]),
                                    },
                                }),
                                (0, r.jsx)(i.animated.div, {
                                    className: U.heroAssetTint,
                                    style: {
                                        backgroundColor: t.config.colors.primary,
                                        opacity: o.to([0, 1], [1, 0]),
                                    },
                                }),
                            ],
                        }),
                    E.isAnimated
                        ? (0, r.jsx)(A.Fl, {
                              id: "QuestBarV2ContentExpanded_heroAnimated",
                              children: (e) =>
                                  (0, r.jsx)(G, {
                                      ref: e,
                                      asset: E,
                                      isExpanded: h,
                                      reducedMotion: c,
                                  }),
                          })
                        : (0, r.jsx)(A.Fl, {
                              id: "QuestBarV2ContentExpanded_heroStatic",
                              children: (e) =>
                                  (0, r.jsx)("img", {
                                      ref: e,
                                      alt: "",
                                      className: U.heroAsset,
                                      src: E.url,
                                  }),
                          }),
                    (0, r.jsx)("div", { className: a()(U.legibilityGradient, { [U.legibilityGradientDark]: I }) }),
                ],
            }),
        ],
    });
}
let G = s.forwardRef(function (e, t) {
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
        (0, r.jsx)(h.Z, {
            ref: (e) => {
                null != e && ((l.current = e), null != t && ("function" == typeof t ? t(e) : (t.current = e)));
            },
            autoPlay: !0,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: U.heroAsset,
            controls: !1,
            children: (0, r.jsx)("source", {
                src: o.url,
                type: null != (n = o.mimetype) ? n : void 0,
            }),
        })
    );
});
function K(e) {
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
        C = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null,
        E = o.percentComplete > 0,
        O = (0, v.z)(n),
        [S, T, w] = (0, v.me)(n, o),
        P = s.useRef(null),
        N = s.useRef(null),
        A = (0, v._s)({ quest: n }),
        Z = (0, b.q8)(n),
        F = (0, v.Jf)(n),
        X = s.useCallback(() => {
            (0, R.openVideoQuestModal)({
                quest: n,
                questContent: y.jn.QUEST_BAR_V2,
                sourceQuestContent: y.jn.QUEST_BAR_V2,
                sourceQuestContentCTA: _.jZ.QUEST_BAR_VIDEO_QUEST_PREVIEW,
            });
        }, [n]),
        z = null != F ? F.percentComplete : o.percentComplete;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i.animated.div, {
                className: a()(U.postEnrollmentBackground, U.postEnrollmentBackgroundCollapsed),
                style: {
                    backgroundImage: "linear-gradient(90deg, ".concat(W.aY, ", ").concat(W.v6, ")"),
                    opacity: c.to({
                        range: [0, 1],
                        output: [1, 0],
                    }),
                },
            }),
            (0, r.jsxs)("div", {
                className: U.questAcceptedContent,
                ref: (e) => {
                    "function" == typeof m ? m(e) : null != m && (m.current = e), null != e && (N.current = e);
                },
                children: [
                    (0, r.jsx)(V.Z, {
                        quest: n,
                        onCtxMenuOpen: g,
                        onCtxMenuClose: f,
                        onCtxMenuSelect: h,
                    }),
                    (0, r.jsx)("div", { className: U.divider }),
                    (0, r.jsx)(I.Z, {
                        expansionSpring: c,
                        overlayRef: d,
                        progressBarRef: P,
                        quest: n,
                        isExpanded: u,
                        isHovered: !1,
                    }),
                    (0, r.jsx)(L.Z, {
                        contentLocation: "expanded",
                        quest: n,
                        progressBarRef: P,
                        isExpanded: !0,
                        percentComplete: z,
                        activeScreen: S,
                        popoutTargetElementRef: N,
                        onGameSheetOpened: x,
                        onGameSheetClosed: j,
                    }),
                    (0, r.jsx)(B.n, {
                        children:
                            !C &&
                            !(0, b.Gd)(n) &&
                            (0, l.EQ)(S)
                                .with(y.LI.SELECT, () =>
                                    (0, r.jsx)(Q.Z, {
                                        onConsole: () => w(M.cd.CONSOLE),
                                        onDesktop: () => w(M.cd.DESKTOP),
                                    }),
                                )
                                .with(y.LI.DESKTOP, () => (0, r.jsx)(D.Z, { quest: n }))
                                .with(y.LI.CONSOLE, () =>
                                    (0, r.jsx)(q.Z, {
                                        quest: n,
                                        taskDetails: o,
                                    }),
                                )
                                .exhaustive(),
                    }),
                    (0, r.jsxs)(B.n, {
                        children: [
                            Z &&
                                (0, r.jsx)(H, {
                                    isExpanded: u,
                                    quest: n,
                                    onClick: X,
                                    reducedMotion: p,
                                }),
                            (0, r.jsx)(k.y, {
                                quest: n,
                                useReducedMotion: p,
                                isExpanded: u,
                                awaitingConsoleConnections: A,
                                hasMadeProgress: E,
                                isProgressing: O,
                                activeScreen: S,
                                showBackButton: S !== y.LI.SELECT && T.length > 1 && !E && !O,
                                onBack: () => w(null),
                                taskDetails: o,
                                sourceQuestContent: y.jn.QUEST_BAR_V2,
                                onGameSheetOpened: x,
                                onGameSheetClosed: j,
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: a()(U.postEnrollmentBackground, U.postEnrollmentBackgroundExpanded),
                style: { backgroundImage: "linear-gradient(90deg, ".concat(W.aY, ", ").concat(W.v6, ")") },
            }),
        ],
    });
}
async function Y(e, t, n, r) {
    let s = (0, b.q8)(e);
    return s && (0, S.R)(M.dr.QUESTS_BAR)
        ? void (await (0, R.enrollAndStartVideoQuestWithErrorHandling)(e, {
              questContent: t,
              questContentCTA: n,
              sourceQuestContent: r,
              sourceQuestContentCTA: n,
          }))
        : (0, b.Rt)(e) && (0, S.R)(M.dr.QUESTS_BAR)
          ? void (await (0, j.AH)(e.id, {
                questContent: t,
                questContentCTA: n,
                sourceQuestContent: r,
            }))
          : void ((0, j.AH)(e.id, {
                questContent: t,
                questContentCTA: n,
                sourceQuestContent: r,
            }),
            s &&
                (0, R.openVideoQuestModal)({
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
            overlayRef: j,
            quest: C,
            useReducedMotion: E,
            taskDetails: O,
        } = e,
        { launchInGameActivity: S } = (0, v.zB)(C),
        T = (0, b.Rt)(C),
        w = s.useCallback(async () => {
            let e = T ? _.jZ.START_QUEST : _.jZ.ACCEPT_QUEST;
            await Y(C, y.jn.QUEST_BAR_V2, e, y.jn.QUEST_BAR_V2), T && S();
        }, [C, S, T]),
        P = (null == (n = C.userStatus) ? void 0 : n.enrolledAt) != null,
        N = d && u;
    return (0, r.jsxs)(i.animated.div, {
        "aria-hidden": !N,
        className: a()(l, U.contentExpanded, {
            [U.contentInteractable]: N,
            [U.contentExpandedAccepted]: P,
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
                    ? (0, r.jsx)(K, {
                          quest: C,
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
                    : (0, r.jsx)(z, {
                          quest: C,
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
