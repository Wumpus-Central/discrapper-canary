n.d(t, { Z: () => Q }), n(388685), n(953529), n(314940);
var a = n(54381),
    r = n(473749),
    i = n(120356),
    l = n.n(i),
    s = n(853590),
    o = n(278074),
    c = n(442837),
    d = n(692547),
    u = n(780384),
    m = n(481060),
    p = n(410030),
    h = n(607070),
    f = n(70097),
    x = n(22095),
    b = n(617136),
    g = n(616022),
    v = n(49436),
    j = n(184299),
    y = n(373370),
    C = n(968843),
    _ = n(475595),
    S = n(387745),
    E = n(254579),
    T = n(283689),
    O = n(455357),
    N = n(644646),
    P = n(110560),
    w = n(444134),
    I = n(217599),
    k = n(373322),
    R = n(661578),
    A = n(693900),
    Z = n(526188),
    D = n(554768),
    L = n(167308),
    M = n(26275),
    U = n(676728),
    B = n(324805),
    F = n(945165),
    G = n(388032),
    V = n(413019);
let z = r.forwardRef(function (e, t) {
    var n;
    let { isHovered: i, asset: l, poster: s, className: o, autoPlay: d = !1 } = e,
        { isExpanded: u } = r.useContext(Z.A),
        m = (0, c.e7)([h.Z], () => h.Z.useReducedMotion),
        p = r.useRef(null);
    return (
        r.useEffect(() => {
            null != p.current && (u && (!m || i) ? ((p.current.currentTime = 0), p.current.play()) : p.current.pause());
        }, [p, u, i, m]),
        (0, a.jsx)(f.Z, {
            ref: (e) => {
                (p.current = e), null != t && ("function" == typeof t ? t(e) : (t.current = e));
            },
            autoPlay: d,
            poster: s,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: o,
            controls: !1,
            children: (0, a.jsx)("source", {
                src: l.url,
                type: null != (n = l.mimetype) ? n : void 0,
            }),
        })
    );
});
function H(e) {
    var t;
    let { onClick: n } = e,
        { quest: i } = r.useContext(Z.A),
        s = (0, c.e7)([h.Z], () => h.Z.useReducedMotion),
        [o, u] = r.useState(!1),
        p = (0, _.fh)(i, _.eC.QUEST_BAR_HERO_VIDEO, void 0, !1),
        f = (0, _.fh)(i, _.eC.VIDEO_PLAYER_THUMBNAIL, void 0, !1),
        x = (0, j.km)((e) => e.getVideoProgressState)(i.id),
        b = (null == (t = i.userStatus) ? void 0 : t.completedAt) != null && x === j.iw.COMPLETED,
        g = !b && (!s || o);
    return (0, a.jsxs)(m.P3F, {
        className: V.videoQuestPreviewCont,
        onClick: n,
        onMouseEnter: () => {
            s && !o && u(!0);
        },
        onMouseLeave: () => {
            s && o && u(!1);
        },
        children: [
            null != f &&
                (0, a.jsx)("img", {
                    alt: "",
                    src: f.url,
                    className: V.assetBodyVideoPreviewMedia,
                }),
            null != p
                ? (0, a.jsx)(z, {
                      isHovered: o,
                      autoPlay: !1,
                      asset: p,
                      poster: null == f ? void 0 : f.url,
                      className: l()(V.assetBodyVideoPreviewVideo, { [V.assetBodyVideoPreviewVisible]: g }),
                  })
                : null,
            (0, a.jsx)("div", {
                className: V.previewPlayButtonCont,
                children: b
                    ? (0, a.jsx)(m.Oe7, {
                          color: d.Z.colors.WHITE,
                          className: V.previewPlayButton,
                      })
                    : (0, a.jsx)(m.o1U, {
                          color: d.Z.colors.WHITE,
                          className: V.previewPlayButton,
                      }),
            }),
        ],
    });
}
function W(e) {
    let { quest: t } = e;
    return (0, a.jsx)(N.Z, {
        className: l()(V.rewardTile, V.hiddenRewardTile),
        learnMoreStyle: "text",
        quest: t,
        questContent: v.jn.QUEST_BAR_V2,
        sourceQuestContent: v.jn.QUEST_BAR_V2,
    });
}
function K(e) {
    let { isInteractable: t, containerRef: n, onAcceptQuest: i } = e,
        { quest: o, onGameSheetOpen: d, onGameSheetClose: h, taskDetails: f } = r.useContext(Z.A),
        { expansionSpring: x } = r.useContext(w.xo),
        b = r.useRef(null),
        j = (0, c.e7)([g.Z], () => g.Z.isEnrolling(o.id), [o]),
        C = r.useMemo(() => (0, _.fh)(o, _.eC.QUEST_BAR_HERO), [o]),
        S = (0, y.CR)({ quest: o }),
        E = r.useMemo(() => (0, _.fh)(o, _.eC.HERO_IMAGE), [o]),
        T = r.useMemo(() => (null == E ? {} : { backgroundImage: "url(".concat(E.url, ")") }), [E]),
        N = (0, p.ZP)(),
        I = (0, u.wj)(N),
        k = (0, y.DD)({
            quest: o,
            location: B.dr.QUESTS_BAR,
            questContent: v.jn.QUEST_BAR_V2,
            taskDetails: f,
            sourceQuestContent: v.jn.QUEST_BAR_V2,
            popoutTargetElementRef: b,
            onGameSheetOpened: d,
            onGameSheetClosed: h,
        });
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", {
                ref: b,
                children: (0, a.jsxs)("div", {
                    className: V.questPromoContent,
                    ref: n,
                    children: [
                        (0, a.jsxs)("div", {
                            className: V.details,
                            children: [
                                (0, a.jsx)(W, { quest: o }),
                                (0, a.jsx)(m.Heading, {
                                    className: V.title,
                                    color: "text-strong",
                                    variant: "heading-md/medium",
                                    children: G.intl.format(G.t.EQa7os, { questName: o.config.messages.questName }),
                                }),
                                (0, a.jsx)(m.Text, {
                                    className: V.description,
                                    variant: "text-xs/normal",
                                    children: k,
                                }),
                            ],
                        }),
                        (0, a.jsx)("div", {
                            className: V.cta,
                            children: (0, a.jsx)(m.Button, {
                                variant: "primary",
                                onClick: t ? i : void 0,
                                loading: j,
                                text: S,
                                size: "sm",
                                icon: (0, P.getPrimaryCtaIcon)(o),
                                fullWidth: !0,
                            }),
                        }),
                    ],
                }),
            }),
            null != E &&
                (0, a.jsx)(s.animated.div, {
                    className: V.contentCollapsedBackgroundWrapper,
                    style: {
                        opacity: x.to([0, 1], [1, 0]),
                    },
                    children: (0, a.jsx)("div", {
                        className: l()(V.contentCollapsedBackground, V.blur),
                        style: T,
                    }),
                }),
            (0, a.jsxs)(s.animated.div, {
                className: V.heroAssetWrapper,
                style: {
                    backdropFilter: x.to([0, 1], [5, 0]).to((e) => "blur(".concat(e, "px)")),
                    filter: x.to([0, 1], [0.8, 1]).to((e) => "brightness(".concat(e, ")")),
                },
                children: [
                    C.isAnimated
                        ? (0, a.jsx)(O.Fl, {
                              id: "QuestBarContentExpanded_heroAnimated",
                              children: (e) =>
                                  (0, a.jsx)(z, {
                                      ref: e,
                                      autoPlay: !0,
                                      asset: C,
                                      className: V.heroAsset,
                                  }),
                          })
                        : (0, a.jsx)(O.Fl, {
                              id: "QuestBarContentExpanded_heroStatic",
                              children: (e) =>
                                  (0, a.jsx)("img", {
                                      ref: e,
                                      alt: "",
                                      className: V.heroAsset,
                                      src: C.url,
                                  }),
                          }),
                    (0, a.jsx)("div", { className: l()(V.legibilityGradient, { [V.legibilityGradientDark]: I }) }),
                ],
            }),
        ],
    });
}
function q(e) {
    var t;
    let { overlayRef: n, containerRef: i } = e,
        { quest: c, taskDetails: d } = r.useContext(Z.A),
        { expansionSpring: u } = r.useContext(w.xo),
        m = (null == (t = c.userStatus) ? void 0 : t.completedAt) != null,
        p = d.percentComplete > 0,
        h = (0, C.z)(c),
        [f, x, g] = (0, C.me)(c, d),
        j = r.useRef(null),
        y = r.useRef(null),
        _ = (0, C._s)({ quest: c }),
        T = (0, E.q8)(c),
        O = (0, C.Jf)(c),
        N = r.useCallback(() => {
            (0, P.openVideoQuestModal)({
                quest: c,
                questContent: v.jn.QUEST_BAR_V2,
                sourceQuestContent: v.jn.QUEST_BAR_V2,
                sourceQuestContentCTA: b.jZ.QUEST_BAR_VIDEO_QUEST_PREVIEW,
            });
        }, [c]),
        G = null != O ? O.percentComplete : d.percentComplete;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(s.animated.div, {
                className: l()(V.postEnrollmentBackground, V.postEnrollmentBackgroundCollapsed),
                style: {
                    backgroundImage: "linear-gradient(90deg, ".concat(F.cd, ", ").concat(F.v$, ")"),
                    opacity: u.to({
                        range: [0, 1],
                        output: [1, 0],
                    }),
                },
            }),
            (0, a.jsxs)("div", {
                className: V.questAcceptedContent,
                ref: (e) => {
                    "function" == typeof i ? i(e) : null != i && (i.current = e), null != e && (y.current = e);
                },
                children: [
                    (0, a.jsx)(M.Z, {}),
                    (0, a.jsx)("div", { className: V.divider }),
                    (0, a.jsx)(k.Z, {
                        overlayRef: n,
                        progressBarRef: j,
                        isHovered: !1,
                    }),
                    (0, a.jsx)(L.Z, {
                        contentLocation: "expanded",
                        progressBarRef: j,
                        isExpanded: !0,
                        percentComplete: G,
                        activeScreen: f,
                        popoutTargetElementRef: y,
                    }),
                    (0, a.jsx)(A.n, {
                        children:
                            !m &&
                            !(0, S.Gd)(c) &&
                            (0, o.EQ)(f)
                                .with(v.LI.SELECT, () =>
                                    (0, a.jsx)(U.Z, {
                                        onConsole: () => g(B.cd.CONSOLE),
                                        onDesktop: () => g(B.cd.DESKTOP),
                                    }),
                                )
                                .with(v.LI.DESKTOP, () => (0, a.jsx)(D.Z, { quest: c }))
                                .with(v.LI.CONSOLE, () =>
                                    (0, a.jsx)(R.Z, {
                                        quest: c,
                                        taskDetails: d,
                                    }),
                                )
                                .exhaustive(),
                    }),
                    (0, a.jsxs)(A.n, {
                        children: [
                            T && (0, a.jsx)(H, { onClick: N }),
                            (0, a.jsx)(I.r, {
                                awaitingConsoleConnections: _,
                                hasMadeProgress: p,
                                isProgressing: h,
                                activeScreen: f,
                                showBackButton: f !== v.LI.SELECT && x.length > 1 && !p && !h,
                                onBack: () => g(null),
                                sourceQuestContent: v.jn.QUEST_BAR_V2,
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: l()(V.postEnrollmentBackground, V.postEnrollmentBackgroundExpanded),
                style: { backgroundImage: "linear-gradient(90deg, ".concat(F.cd, ", ").concat(F.v$, ")") },
            }),
        ],
    });
}
async function Y(e, t, n, a) {
    return (0, E.q8)(e)
        ? void (await (0, P.enrollAndStartVideoQuestWithErrorHandling)(e, {
              questContent: t,
              questContentCTA: n,
              sourceQuestContent: a,
              sourceQuestContentCTA: n,
          }))
        : (0, T.Rt)(e)
          ? void (await (0, x.AH)(e.id, {
                questContent: t,
                questContentCTA: n,
                sourceQuestContent: a,
            }))
          : void (0, x.AH)(e.id, {
                questContent: t,
                questContentCTA: n,
                sourceQuestContent: a,
            });
}
let Q = r.forwardRef(function (e, t) {
    var n;
    let { children: i, className: o, overlayRef: c } = e,
        { collapsedHeight: d, isExpanded: u, isExpansionAnimationComplete: m, quest: p } = r.useContext(Z.A),
        { expansionSpring: h } = r.useContext(w.xo),
        { launchInGameActivity: f } = (0, C.zB)(p),
        x = (0, T.Rt)(p),
        g = r.useCallback(async () => {
            let e = x ? b.jZ.START_QUEST : b.jZ.ACCEPT_QUEST;
            await Y(p, v.jn.QUEST_BAR_V2, e, v.jn.QUEST_BAR_V2), x && f();
        }, [p, f, x]),
        j = (null == (n = p.userStatus) ? void 0 : n.enrolledAt) != null,
        y = u && m;
    return (0, a.jsxs)(s.animated.div, {
        "aria-hidden": !y,
        className: l()(o, V.contentExpanded, {
            [V.contentInteractable]: y,
            [V.contentExpandedAccepted]: j,
        }),
        style: {
            transform: (0, s.to)(
                [
                    h.to({
                        range: [0, 1],
                        output: [0, -100],
                    }),
                    h.to({
                        range: [0, 1],
                        output: [0, d],
                    }),
                ],
                (e, t) => "translateY(calc(".concat(e, "% + ").concat(t, "px))"),
            ),
        },
        children: [
            i,
            (0, a.jsx)(s.animated.div, {
                style: { opacity: 1 },
                children: j
                    ? (0, a.jsx)(q, {
                          overlayRef: c,
                          containerRef: t,
                      })
                    : (0, a.jsx)(K, {
                          isInteractable: y,
                          containerRef: t,
                          onAcceptQuest: g,
                      }),
            }),
        ],
    });
});
