n.d(t, { Z: () => J }), n(388685), n(953529), n(314940);
var r = n(951288),
    s = n(647438),
    a = n(120356),
    o = n.n(a),
    i = n(13941),
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
    _ = n(22095),
    b = n(617136),
    j = n(509212),
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
    D = n(205511),
    q = n(694802),
    L = n(95985),
    Q = n(688927),
    V = n(50476),
    M = n(46140),
    Z = n(743294),
    W = n(388032),
    H = n(475832);
function U(e) {
    var t, n;
    let { quest: a, onClick: i, reducedMotion: l, isExpanded: d } = e,
        [p, g] = s.useState(!1),
        f = s.useRef(null),
        x = (0, w.fh)(a, w.eC.QUEST_BAR_HERO_VIDEO),
        _ = (0, P.z0)(a, c.X.WATCH_VIDEO, P.n1.VIDEO, P.O.THUMBNAIL),
        b = (0, E.km)((e) => e.getVideoProgressState);
    s.useEffect(() => {
        null != f.current && (d && (!l || p) ? ((f.current.currentTime = 0), f.current.play()) : f.current.pause());
    }, [f, p, l, d]);
    let j = b(a.id),
        v = (null == (t = a.userStatus) ? void 0 : t.completedAt) != null && j === E.iw.COMPLETED,
        C = !v && (!l || p);
    return (0, r.jsxs)(m.P3F, {
        className: H.videoQuestPreviewCont,
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
                    className: H.assetBodyVideoPreviewMedia,
                }),
            null != x
                ? (0, r.jsx)(h.Z, {
                      ref: f,
                      autoPlay: !1,
                      poster: null == _ ? void 0 : _.url,
                      loop: !0,
                      muted: !0,
                      playsInline: !0,
                      className: o()(H.assetBodyVideoPreviewVideo, { [H.assetBodyVideoPreviewVisible]: C }),
                      controls: !1,
                      children: (0, r.jsx)("source", {
                          src: x.url,
                          type: null != (n = x.mimetype) ? n : void 0,
                      }),
                  })
                : null,
            (0, r.jsx)("div", {
                className: H.previewPlayButtonCont,
                children: v
                    ? (0, r.jsx)(m.Oe7, {
                          color: u.Z.colors.WHITE,
                          className: H.previewPlayButton,
                      })
                    : (0, r.jsx)(m.o1U, {
                          color: u.Z.colors.WHITE,
                          className: H.previewPlayButton,
                      }),
            }),
        ],
    });
}
function F(e) {
    let { quest: t } = e;
    return (0, r.jsx)(N.Z, {
        className: o()(H.rewardTile, H.hiddenRewardTile),
        learnMoreStyle: "text",
        quest: t,
        questContent: y.jn.QUEST_BAR_V2,
        location: M.dr.QUESTS_BAR,
        sourceQuestContent: y.jn.QUEST_BAR_V2,
    });
}
function z(e) {
    return (0, r.jsx)(m.Text, {
        className: H.description,
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
function K(e) {
    let {
            quest: t,
            taskDetails: n,
            expansionSpring: a,
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
        B = s.useMemo(() => (0, w.fh)(t, w.eC.HERO_IMAGE), [t]),
        k = s.useMemo(() => (null == B ? {} : { backgroundImage: "url(".concat(B.url, ")") }), [B]),
        I = (0, g.ZP)(),
        D = (0, p.wj)(I),
        q = (0, d.e7)([x.Z], () => x.Z.isFocused()),
        L = (0, d.e7)([f.Z], () => f.Z.useReducedMotion);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                ref: v,
                children: (0, r.jsxs)("div", {
                    className: H.questPromoContent,
                    ref: u,
                    children: [
                        (0, r.jsxs)("div", {
                            className: H.details,
                            children: [
                                (0, r.jsx)(F, { quest: t }),
                                (0, r.jsx)(m.Heading, {
                                    className: H.title,
                                    color: "header-primary",
                                    variant: "heading-md/medium",
                                    children: W.intl.format(W.t.EQa7os, { questName: t.config.messages.questName }),
                                }),
                                (0, r.jsx)(z, {
                                    quest: t,
                                    taskDetails: n,
                                    popoutTargetElementRef: v,
                                    onGameSheetOpened: b,
                                    onGameSheetClosed: j,
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: H.cta,
                            children: (0, r.jsx)(m.Button, {
                                variant: "primary",
                                onClick: l ? _ : void 0,
                                loading: y,
                                text: S,
                                size: "sm",
                                icon: (0, R.getPrimaryCtaIcon)(t),
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
                        opacity: a.to([0, 1], [1, 0]),
                    },
                    children: [
                        (null == N ? void 0 : N.progressBlur)
                            ? (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)("div", {
                                          className: H.contentCollapsedBackground,
                                          style: k,
                                      }),
                                      (0, r.jsx)("div", {
                                          className: o()(H.contentCollapsedBackground, H.blur30),
                                          style: k,
                                      }),
                                      (0, r.jsx)("div", {
                                          className: o()(H.contentCollapsedBackground, H.blur60),
                                          style: k,
                                      }),
                                      (0, r.jsx)("div", {
                                          className: o()(H.contentCollapsedBackground, H.blur100),
                                          style: k,
                                      }),
                                  ],
                              })
                            : (0, r.jsx)("div", {
                                  className: o()(H.contentCollapsedBackground, H.blur),
                                  style: k,
                              }),
                        (null == N ? void 0 : N.shineWipe) &&
                            (0, r.jsx)(m.ZX5, {
                                className: H.shine,
                                "data-migration-pending": !0,
                                shineSize: m.rHe.DEFAULT,
                                shinePaused: !q || L,
                            }),
                    ],
                }),
            (0, r.jsxs)(i.animated.div, {
                className: H.heroAssetWrapper,
                style: {
                    backdropFilter: a.to([0, 1], [5, 0]).to((e) => "blur(".concat(e, "px)")),
                    filter: a.to([0, 1], [0.8, 1]).to((e) => "brightness(".concat(e, ")")),
                },
                children: [
                    !P &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(i.animated.div, {
                                    className: H.heroAssetDarken,
                                    style: {
                                        opacity: a.to([0, 1], [1, 0]),
                                    },
                                }),
                                (0, r.jsx)(i.animated.div, {
                                    className: H.heroAssetTint,
                                    style: {
                                        backgroundColor: t.config.colors.primary,
                                        opacity: a.to([0, 1], [1, 0]),
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
                                      className: H.heroAsset,
                                      src: E.url,
                                  }),
                          }),
                    (0, r.jsx)("div", { className: o()(H.legibilityGradient, { [H.legibilityGradientDark]: D }) }),
                ],
            }),
        ],
    });
}
let G = s.forwardRef(function (e, t) {
    var n;
    let { asset: a, isExpanded: o, reducedMotion: i } = e,
        l = s.useRef(null);
    return (
        s.useEffect(() => {
            null != l.current && l.current.pause();
        }, []),
        s.useEffect(() => {
            null == l.current || i || (o ? ((l.current.currentTime = 0), l.current.play()) : l.current.pause());
        }, [i, o]),
        (0, r.jsx)(h.Z, {
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
            overlayRef: d,
            isExpanded: u,
            reducedMotion: p,
            containerRef: m,
            onCtxMenuOpen: g,
            onCtxMenuClose: f,
            onCtxMenuSelect: h,
            onGameSheetOpened: x,
            onGameSheetClosed: _,
        } = e,
        C = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null,
        E = a.percentComplete > 0,
        O = (0, v.z)(n),
        [S, T, w] = (0, v.me)(n, a),
        P = s.useRef(null),
        N = s.useRef(null),
        A = (0, v._s)({ quest: n }),
        W = (0, j.q8)(n),
        F = (0, v.Jf)(n),
        z = s.useCallback(() => {
            (0, R.openVideoQuestModal)({
                quest: n,
                questContent: y.jn.QUEST_BAR_V2,
                sourceQuestContent: y.jn.QUEST_BAR_V2,
                sourceQuestContentCTA: b.jZ.QUEST_BAR_VIDEO_QUEST_PREVIEW,
            });
        }, [n]),
        K = null != F ? F.percentComplete : a.percentComplete;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i.animated.div, {
                className: o()(H.postEnrollmentBackground, H.postEnrollmentBackgroundCollapsed),
                style: {
                    backgroundImage: "linear-gradient(90deg, ".concat(Z.aY, ", ").concat(Z.v6, ")"),
                    opacity: c.to({
                        range: [0, 1],
                        output: [1, 0],
                    }),
                },
            }),
            (0, r.jsxs)("div", {
                className: H.questAcceptedContent,
                ref: (e) => {
                    "function" == typeof m ? m(e) : null != m && (m.current = e), null != e && (N.current = e);
                },
                children: [
                    (0, r.jsx)(Q.Z, {
                        quest: n,
                        onCtxMenuOpen: g,
                        onCtxMenuClose: f,
                        onCtxMenuSelect: h,
                    }),
                    (0, r.jsx)("div", { className: H.divider }),
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
                        percentComplete: K,
                        activeScreen: S,
                        popoutTargetElementRef: N,
                        onGameSheetOpened: x,
                        onGameSheetClosed: _,
                    }),
                    (0, r.jsx)(B.n, {
                        children:
                            !C &&
                            !(0, j.Gd)(n) &&
                            (0, l.EQ)(S)
                                .with(y.LI.SELECT, () =>
                                    (0, r.jsx)(V.Z, {
                                        onConsole: () => w(M.cd.CONSOLE),
                                        onDesktop: () => w(M.cd.DESKTOP),
                                    }),
                                )
                                .with(y.LI.DESKTOP, () => (0, r.jsx)(q.Z, { quest: n }))
                                .with(y.LI.CONSOLE, () =>
                                    (0, r.jsx)(D.Z, {
                                        quest: n,
                                        taskDetails: a,
                                    }),
                                )
                                .exhaustive(),
                    }),
                    (0, r.jsxs)(B.n, {
                        children: [
                            W &&
                                (0, r.jsx)(U, {
                                    isExpanded: u,
                                    quest: n,
                                    onClick: z,
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
                                taskDetails: a,
                                sourceQuestContent: y.jn.QUEST_BAR_V2,
                                onGameSheetOpened: x,
                                onGameSheetClosed: _,
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: o()(H.postEnrollmentBackground, H.postEnrollmentBackgroundExpanded),
                style: { backgroundImage: "linear-gradient(90deg, ".concat(Z.aY, ", ").concat(Z.v6, ")") },
            }),
        ],
    });
}
async function Y(e, t, n, r) {
    let s = (0, j.q8)(e);
    return s && (0, S.R)(M.dr.QUESTS_BAR)
        ? void (await (0, R.enrollAndStartVideoQuestWithErrorHandling)(e, {
              questContent: t,
              questContentCTA: n,
              sourceQuestContent: r,
              sourceQuestContentCTA: n,
          }))
        : (0, j.Rt)(e) && (0, S.R)(M.dr.QUESTS_BAR)
          ? void (await (0, _.AH)(e.id, {
                questContent: t,
                questContentCTA: n,
                sourceQuestContent: r,
            }))
          : void ((0, _.AH)(e.id, {
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
            children: a,
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
            overlayRef: _,
            quest: C,
            useReducedMotion: E,
            taskDetails: O,
        } = e,
        { launchInGameActivity: S } = (0, v.zB)(C),
        T = (0, j.Rt)(C),
        w = s.useCallback(async () => {
            let e = T ? b.jZ.START_QUEST : b.jZ.ACCEPT_QUEST;
            await Y(C, y.jn.QUEST_BAR_V2, e, y.jn.QUEST_BAR_V2), T && S();
        }, [C, S, T]),
        P = (null == (n = C.userStatus) ? void 0 : n.enrolledAt) != null,
        N = d && u;
    return (0, r.jsxs)(i.animated.div, {
        "aria-hidden": !N,
        className: o()(l, H.contentExpanded, {
            [H.contentInteractable]: N,
            [H.contentExpandedAccepted]: P,
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
            a,
            (0, r.jsx)(i.animated.div, {
                style: { opacity: 1 },
                children: P
                    ? (0, r.jsx)(X, {
                          quest: C,
                          taskDetails: O,
                          expansionSpring: p,
                          overlayRef: _,
                          isExpanded: d,
                          reducedMotion: E,
                          onCtxMenuOpen: m,
                          onCtxMenuClose: g,
                          onCtxMenuSelect: f,
                          containerRef: t,
                          onGameSheetOpened: h,
                          onGameSheetClosed: x,
                      })
                    : (0, r.jsx)(K, {
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
