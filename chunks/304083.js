n.d(t, { Z: () => Q }), n(388685), n(953529), n(314940);
var a = n(54381),
    r = n(473749),
    i = n(120356),
    l = n.n(i),
    s = n(205120),
    o = n(278074),
    c = n(442837),
    d = n(692547),
    u = n(780384),
    m = n(481060),
    p = n(410030),
    h = n(70097),
    x = n(22095),
    f = n(617136),
    g = n(616022),
    b = n(49436),
    v = n(184299),
    j = n(111131),
    _ = n(373370),
    y = n(968843),
    C = n(475595),
    S = n(387745),
    E = n(254579),
    O = n(283689),
    T = n(455357),
    N = n(644646),
    P = n(110560),
    w = n(217599),
    I = n(373322),
    k = n(661578),
    R = n(693900),
    A = n(554768),
    D = n(167308),
    Z = n(26275),
    L = n(676728),
    M = n(324805),
    U = n(945165),
    B = n(388032),
    F = n(355488);
function G(e) {
    var t, n;
    let { quest: i, onClick: s, reducedMotion: o, isExpanded: c } = e,
        [u, p] = r.useState(!1),
        x = r.useRef(null),
        f = (0, C.fh)(i, C.eC.QUEST_BAR_HERO_VIDEO, void 0, !1),
        g = (0, C.fh)(i, C.eC.VIDEO_PLAYER_THUMBNAIL, void 0, !1),
        b = (0, v.km)((e) => e.getVideoProgressState);
    r.useEffect(() => {
        null != x.current && (c && (!o || u) ? ((x.current.currentTime = 0), x.current.play()) : x.current.pause());
    }, [x, u, o, c]);
    let j = b(i.id),
        _ = (null == (t = i.userStatus) ? void 0 : t.completedAt) != null && j === v.iw.COMPLETED,
        y = !_ && (!o || u);
    return (0, a.jsxs)(m.P3F, {
        className: F.videoQuestPreviewCont,
        onClick: s,
        onMouseEnter: () => {
            o && !u && p(!0);
        },
        onMouseLeave: () => {
            o && u && p(!1);
        },
        children: [
            null != g &&
                (0, a.jsx)("img", {
                    alt: "",
                    src: g.url,
                    className: F.assetBodyVideoPreviewMedia,
                }),
            null != f
                ? (0, a.jsx)(h.Z, {
                      ref: x,
                      autoPlay: !1,
                      poster: null == g ? void 0 : g.url,
                      loop: !0,
                      muted: !0,
                      playsInline: !0,
                      className: l()(F.assetBodyVideoPreviewVideo, { [F.assetBodyVideoPreviewVisible]: y }),
                      controls: !1,
                      children: (0, a.jsx)("source", {
                          src: f.url,
                          type: null != (n = f.mimetype) ? n : void 0,
                      }),
                  })
                : null,
            (0, a.jsx)("div", {
                className: F.previewPlayButtonCont,
                children: _
                    ? (0, a.jsx)(m.Oe7, {
                          color: d.Z.colors.WHITE,
                          className: F.previewPlayButton,
                      })
                    : (0, a.jsx)(m.o1U, {
                          color: d.Z.colors.WHITE,
                          className: F.previewPlayButton,
                      }),
            }),
        ],
    });
}
function V(e) {
    let { quest: t } = e;
    return (0, a.jsx)(N.Z, {
        className: l()(F.rewardTile, F.hiddenRewardTile),
        learnMoreStyle: "text",
        quest: t,
        questContent: b.jn.QUEST_BAR_V2,
        location: M.dr.QUESTS_BAR,
        sourceQuestContent: b.jn.QUEST_BAR_V2,
    });
}
function H(e) {
    return (0, a.jsx)(m.Text, {
        className: F.description,
        variant: "text-xs/normal",
        children: (0, _.DD)({
            quest: e.quest,
            location: M.dr.QUESTS_BAR,
            questContent: b.jn.QUEST_BAR_V2,
            taskDetails: e.taskDetails,
            sourceQuestContent: b.jn.QUEST_BAR_V2,
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
            expansionSpring: i,
            isInteractable: o,
            reducedMotion: d,
            containerRef: h,
            isExpanded: x,
            onAcceptQuest: f,
            onGameSheetOpened: b,
            onGameSheetClosed: v,
        } = e,
        j = r.useRef(null),
        y = (0, c.e7)([g.Z], () => g.Z.isEnrolling(t.id), [t]),
        S = r.useMemo(() => (0, C.fh)(t, C.eC.QUEST_BAR_HERO), [t]),
        E = (0, _.CR)({ quest: t }),
        O = r.useMemo(() => (0, C.fh)(t, C.eC.HERO_IMAGE), [t]),
        N = r.useMemo(() => (null == O ? {} : { backgroundImage: "url(".concat(O.url, ")") }), [O]),
        w = (0, p.ZP)(),
        I = (0, u.wj)(w);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", {
                ref: j,
                children: (0, a.jsxs)("div", {
                    className: F.questPromoContent,
                    ref: h,
                    children: [
                        (0, a.jsxs)("div", {
                            className: F.details,
                            children: [
                                (0, a.jsx)(V, { quest: t }),
                                (0, a.jsx)(m.Heading, {
                                    className: F.title,
                                    color: "header-primary",
                                    variant: "heading-md/medium",
                                    children: B.intl.format(B.t.EQa7os, { questName: t.config.messages.questName }),
                                }),
                                (0, a.jsx)(H, {
                                    quest: t,
                                    taskDetails: n,
                                    popoutTargetElementRef: j,
                                    onGameSheetOpened: b,
                                    onGameSheetClosed: v,
                                }),
                            ],
                        }),
                        (0, a.jsx)("div", {
                            className: F.cta,
                            children: (0, a.jsx)(m.Button, {
                                variant: "primary",
                                onClick: o ? f : void 0,
                                loading: y,
                                text: E,
                                size: "sm",
                                icon: (0, P.getPrimaryCtaIcon)(t),
                                fullWidth: !0,
                            }),
                        }),
                    ],
                }),
            }),
            null != O &&
                (0, a.jsx)(s.animated.div, {
                    className: F.contentCollapsedBackgroundWrapper,
                    style: {
                        opacity: i.to([0, 1], [1, 0]),
                    },
                    children: (0, a.jsx)("div", {
                        className: l()(F.contentCollapsedBackground, F.blur),
                        style: N,
                    }),
                }),
            (0, a.jsxs)(s.animated.div, {
                className: F.heroAssetWrapper,
                style: {
                    backdropFilter: i.to([0, 1], [5, 0]).to((e) => "blur(".concat(e, "px)")),
                    filter: i.to([0, 1], [0.8, 1]).to((e) => "brightness(".concat(e, ")")),
                },
                children: [
                    S.isAnimated
                        ? (0, a.jsx)(T.Fl, {
                              id: "QuestBarContentExpanded_heroAnimated",
                              children: (e) =>
                                  (0, a.jsx)(z, {
                                      ref: e,
                                      asset: S,
                                      isExpanded: x,
                                      reducedMotion: d,
                                  }),
                          })
                        : (0, a.jsx)(T.Fl, {
                              id: "QuestBarContentExpanded_heroStatic",
                              children: (e) =>
                                  (0, a.jsx)("img", {
                                      ref: e,
                                      alt: "",
                                      className: F.heroAsset,
                                      src: S.url,
                                  }),
                          }),
                    (0, a.jsx)("div", { className: l()(F.legibilityGradient, { [F.legibilityGradientDark]: I }) }),
                ],
            }),
        ],
    });
}
let z = r.forwardRef(function (e, t) {
    var n;
    let { asset: i, isExpanded: l, reducedMotion: s } = e,
        o = r.useRef(null);
    return (
        r.useEffect(() => {
            null != o.current && o.current.pause();
        }, []),
        r.useEffect(() => {
            null == o.current || s || (l ? ((o.current.currentTime = 0), o.current.play()) : o.current.pause());
        }, [s, l]),
        (0, a.jsx)(h.Z, {
            ref: (e) => {
                null != e && ((o.current = e), null != t && ("function" == typeof t ? t(e) : (t.current = e)));
            },
            autoPlay: !0,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: F.heroAsset,
            controls: !1,
            children: (0, a.jsx)("source", {
                src: i.url,
                type: null != (n = i.mimetype) ? n : void 0,
            }),
        })
    );
});
function K(e) {
    var t;
    let {
            quest: n,
            taskDetails: i,
            expansionSpring: c,
            overlayRef: d,
            isExpanded: u,
            reducedMotion: m,
            containerRef: p,
            onCtxMenuOpen: h,
            onCtxMenuClose: x,
            onCtxMenuSelect: g,
            onGameSheetOpened: v,
            onGameSheetClosed: j,
        } = e,
        _ = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null,
        C = i.percentComplete > 0,
        O = (0, y.z)(n),
        [T, N, B] = (0, y.me)(n, i),
        V = r.useRef(null),
        H = r.useRef(null),
        W = (0, y._s)({ quest: n }),
        z = (0, E.q8)(n),
        K = (0, y.Jf)(n),
        q = r.useCallback(() => {
            (0, P.openVideoQuestModal)({
                quest: n,
                questContent: b.jn.QUEST_BAR_V2,
                sourceQuestContent: b.jn.QUEST_BAR_V2,
                sourceQuestContentCTA: f.jZ.QUEST_BAR_VIDEO_QUEST_PREVIEW,
            });
        }, [n]),
        Q = null != K ? K.percentComplete : i.percentComplete;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(s.animated.div, {
                className: l()(F.postEnrollmentBackground, F.postEnrollmentBackgroundCollapsed),
                style: {
                    backgroundImage: "linear-gradient(90deg, ".concat(U.cd, ", ").concat(U.v$, ")"),
                    opacity: c.to({
                        range: [0, 1],
                        output: [1, 0],
                    }),
                },
            }),
            (0, a.jsxs)("div", {
                className: F.questAcceptedContent,
                ref: (e) => {
                    "function" == typeof p ? p(e) : null != p && (p.current = e), null != e && (H.current = e);
                },
                children: [
                    (0, a.jsx)(Z.Z, {
                        quest: n,
                        onCtxMenuOpen: h,
                        onCtxMenuClose: x,
                        onCtxMenuSelect: g,
                    }),
                    (0, a.jsx)("div", { className: F.divider }),
                    (0, a.jsx)(I.Z, {
                        expansionSpring: c,
                        overlayRef: d,
                        progressBarRef: V,
                        quest: n,
                        isExpanded: u,
                        isHovered: !1,
                    }),
                    (0, a.jsx)(D.Z, {
                        contentLocation: "expanded",
                        quest: n,
                        progressBarRef: V,
                        isExpanded: !0,
                        percentComplete: Q,
                        activeScreen: T,
                        popoutTargetElementRef: H,
                        onGameSheetOpened: v,
                        onGameSheetClosed: j,
                    }),
                    (0, a.jsx)(R.n, {
                        children:
                            !_ &&
                            !(0, S.Gd)(n) &&
                            (0, o.EQ)(T)
                                .with(b.LI.SELECT, () =>
                                    (0, a.jsx)(L.Z, {
                                        onConsole: () => B(M.cd.CONSOLE),
                                        onDesktop: () => B(M.cd.DESKTOP),
                                    }),
                                )
                                .with(b.LI.DESKTOP, () => (0, a.jsx)(A.Z, { quest: n }))
                                .with(b.LI.CONSOLE, () =>
                                    (0, a.jsx)(k.Z, {
                                        quest: n,
                                        taskDetails: i,
                                    }),
                                )
                                .exhaustive(),
                    }),
                    (0, a.jsxs)(R.n, {
                        children: [
                            z &&
                                (0, a.jsx)(G, {
                                    isExpanded: u,
                                    quest: n,
                                    onClick: q,
                                    reducedMotion: m,
                                }),
                            (0, a.jsx)(w.r, {
                                quest: n,
                                useReducedMotion: m,
                                isExpanded: u,
                                awaitingConsoleConnections: W,
                                hasMadeProgress: C,
                                isProgressing: O,
                                activeScreen: T,
                                showBackButton: T !== b.LI.SELECT && N.length > 1 && !C && !O,
                                onBack: () => B(null),
                                taskDetails: i,
                                sourceQuestContent: b.jn.QUEST_BAR_V2,
                                onGameSheetOpened: v,
                                onGameSheetClosed: j,
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: l()(F.postEnrollmentBackground, F.postEnrollmentBackgroundExpanded),
                style: { backgroundImage: "linear-gradient(90deg, ".concat(U.cd, ", ").concat(U.v$, ")") },
            }),
        ],
    });
}
async function q(e, t, n, a) {
    let r = (0, E.q8)(e);
    return r && (0, j.R)(M.dr.QUESTS_BAR)
        ? void (await (0, P.enrollAndStartVideoQuestWithErrorHandling)(e, {
              questContent: t,
              questContentCTA: n,
              sourceQuestContent: a,
              sourceQuestContentCTA: n,
          }))
        : (0, O.Rt)(e) && (0, j.R)(M.dr.QUESTS_BAR)
          ? void (await (0, x.AH)(e.id, {
                questContent: t,
                questContentCTA: n,
                sourceQuestContent: a,
            }))
          : void ((0, x.AH)(e.id, {
                questContent: t,
                questContentCTA: n,
                sourceQuestContent: a,
            }),
            r &&
                (0, P.openVideoQuestModal)({
                    quest: e,
                    questContent: t,
                    sourceQuestContent: a,
                    sourceQuestContentCTA: n,
                }));
}
let Q = r.forwardRef(function (e, t) {
    var n;
    let {
            children: i,
            className: o,
            collapsedHeight: c,
            isExpanded: d,
            isExpansionAnimationComplete: u,
            expansionSpring: m,
            onCtxMenuOpen: p,
            onCtxMenuClose: h,
            onCtxMenuSelect: x,
            onGameSheetOpened: g,
            onGameSheetClosed: v,
            overlayRef: j,
            quest: _,
            useReducedMotion: C,
            taskDetails: S,
        } = e,
        { launchInGameActivity: E } = (0, y.zB)(_),
        T = (0, O.Rt)(_),
        N = r.useCallback(async () => {
            let e = T ? f.jZ.START_QUEST : f.jZ.ACCEPT_QUEST;
            await q(_, b.jn.QUEST_BAR_V2, e, b.jn.QUEST_BAR_V2), T && E();
        }, [_, E, T]),
        P = (null == (n = _.userStatus) ? void 0 : n.enrolledAt) != null,
        w = d && u;
    return (0, a.jsxs)(s.animated.div, {
        "aria-hidden": !w,
        className: l()(o, F.contentExpanded, {
            [F.contentInteractable]: w,
            [F.contentExpandedAccepted]: P,
        }),
        style: {
            transform: (0, s.to)(
                [
                    m.to({
                        range: [0, 1],
                        output: [0, -100],
                    }),
                    m.to({
                        range: [0, 1],
                        output: [0, c],
                    }),
                ],
                (e, t) => "translateY(calc(".concat(e, "% + ").concat(t, "px))"),
            ),
        },
        children: [
            i,
            (0, a.jsx)(s.animated.div, {
                style: { opacity: 1 },
                children: P
                    ? (0, a.jsx)(K, {
                          quest: _,
                          taskDetails: S,
                          expansionSpring: m,
                          overlayRef: j,
                          isExpanded: d,
                          reducedMotion: C,
                          onCtxMenuOpen: p,
                          onCtxMenuClose: h,
                          onCtxMenuSelect: x,
                          containerRef: t,
                          onGameSheetOpened: g,
                          onGameSheetClosed: v,
                      })
                    : (0, a.jsx)(W, {
                          quest: _,
                          taskDetails: S,
                          expansionSpring: m,
                          isInteractable: w,
                          reducedMotion: C,
                          containerRef: t,
                          isExpanded: d,
                          onAcceptQuest: N,
                          onGameSheetOpened: g,
                          onGameSheetClosed: v,
                      }),
            }),
        ],
    });
});
