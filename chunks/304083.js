n.d(t, { Z: () => J }), n(388685), n(953529), n(314940);
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
    y = n(937797),
    C = n(373370),
    _ = n(968843),
    S = n(475595),
    E = n(387745),
    T = n(254579),
    O = n(283689),
    N = n(455357),
    P = n(504411),
    w = n(644646),
    I = n(110560),
    k = n(444134),
    R = n(217599),
    A = n(373322),
    Z = n(661578),
    D = n(693900),
    L = n(526188),
    M = n(554768),
    U = n(167308),
    B = n(26275),
    F = n(676728),
    G = n(324805),
    V = n(945165),
    z = n(388032),
    H = n(413019);
let W = r.forwardRef(function (e, t) {
    var n;
    let { isHovered: i, asset: l, poster: s, className: o, autoPlay: d = !1 } = e,
        { isExpanded: u } = r.useContext(L.A),
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
function K(e) {
    var t;
    let { onClick: n } = e,
        { quest: i } = r.useContext(L.A),
        s = (0, c.e7)([h.Z], () => h.Z.useReducedMotion),
        [o, u] = r.useState(!1),
        p = (0, S.fh)(i, S.eC.QUEST_BAR_HERO_VIDEO, void 0, !1),
        f = (0, S.fh)(i, S.eC.VIDEO_PLAYER_THUMBNAIL, void 0, !1),
        x = (0, j.km)((e) => e.getVideoProgressState)(i.id),
        b = (null == (t = i.userStatus) ? void 0 : t.completedAt) != null && x === j.iw.COMPLETED,
        g = !b && (!s || o);
    return (0, a.jsxs)(m.P3F, {
        className: H.videoQuestPreviewCont,
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
                    className: H.assetBodyVideoPreviewMedia,
                }),
            null != p
                ? (0, a.jsx)(W, {
                      isHovered: o,
                      autoPlay: !1,
                      asset: p,
                      poster: null == f ? void 0 : f.url,
                      className: l()(H.assetBodyVideoPreviewVideo, { [H.assetBodyVideoPreviewVisible]: g }),
                  })
                : null,
            (0, a.jsx)("div", {
                className: H.previewPlayButtonCont,
                children: b
                    ? (0, a.jsx)(m.Oe7, {
                          color: d.Z.colors.WHITE,
                          className: H.previewPlayButton,
                      })
                    : (0, a.jsx)(m.o1U, {
                          color: d.Z.colors.WHITE,
                          className: H.previewPlayButton,
                      }),
            }),
        ],
    });
}
function q(e) {
    let { quest: t } = e;
    return (0, a.jsx)(w.Z, {
        className: l()(H.rewardTile, H.hiddenRewardTile),
        learnMoreStyle: "text",
        quest: t,
        questContent: v.jn.QUEST_BAR_V2,
        sourceQuestContent: v.jn.QUEST_BAR_V2,
    });
}
function Q(e) {
    let { isInteractable: t, containerRef: n, onAcceptQuest: i } = e,
        { quest: o, onGameSheetOpen: d, onGameSheetClose: h, taskDetails: f } = r.useContext(L.A),
        { expansionSpring: x } = r.useContext(k.xo),
        b = r.useRef(null),
        j = (0, c.e7)([g.Z], () => g.Z.isEnrolling(o.id), [o]),
        _ = r.useMemo(() => (0, S.fh)(o, S.eC.QUEST_BAR_HERO), [o]),
        E = (0, C.CR)({ quest: o }),
        T = r.useMemo(() => (0, S.fh)(o, S.eC.HERO_IMAGE), [o]),
        O = r.useMemo(() => (null == T ? {} : { backgroundImage: "url(".concat(T.url, ")") }), [T]),
        w = (0, p.ZP)(),
        R = (0, u.wj)(w),
        A = y.Cx.useConfig({ location: G.dr.QUESTS_BAR }).enabled,
        Z = (0, C.DD)({
            quest: o,
            location: G.dr.QUESTS_BAR,
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
                    className: H.questPromoContent,
                    ref: n,
                    children: [
                        (0, a.jsxs)("div", {
                            className: H.details,
                            children: [
                                (0, a.jsx)(q, { quest: o }),
                                (0, a.jsx)(m.Heading, {
                                    className: H.title,
                                    color: "text-strong",
                                    variant: "heading-md/medium",
                                    children: z.intl.format(z.t.EQa7os, { questName: o.config.messages.questName }),
                                }),
                                (0, a.jsx)(m.Text, {
                                    className: H.description,
                                    variant: "text-xs/normal",
                                    children: Z,
                                }),
                            ],
                        }),
                        (0, a.jsx)("div", {
                            className: H.cta,
                            children: A
                                ? (0, a.jsx)(P.Z, {
                                      quest: o,
                                      size: "sm",
                                      analyticsCtxQuestContent: v.jn.QUEST_BAR_V2,
                                      analyticsCtxSourceQuestContent: v.jn.QUEST_BAR_V2,
                                  })
                                : (0, a.jsx)(m.Button, {
                                      variant: "primary",
                                      onClick: t ? i : void 0,
                                      loading: j,
                                      text: E,
                                      size: "sm",
                                      icon: (0, I.getPrimaryCtaIcon)(o),
                                      fullWidth: !0,
                                  }),
                        }),
                    ],
                }),
            }),
            null != T &&
                (0, a.jsx)(s.animated.div, {
                    className: H.contentCollapsedBackgroundWrapper,
                    style: {
                        opacity: x.to([0, 1], [1, 0]),
                    },
                    children: (0, a.jsx)("div", {
                        className: l()(H.contentCollapsedBackground, H.blur),
                        style: O,
                    }),
                }),
            (0, a.jsxs)(s.animated.div, {
                className: H.heroAssetWrapper,
                style: {
                    backdropFilter: x.to([0, 1], [5, 0]).to((e) => "blur(".concat(e, "px)")),
                    filter: x.to([0, 1], [0.8, 1]).to((e) => "brightness(".concat(e, ")")),
                },
                children: [
                    _.isAnimated
                        ? (0, a.jsx)(N.Fl, {
                              id: "QuestBarContentExpanded_heroAnimated",
                              children: (e) =>
                                  (0, a.jsx)(W, {
                                      ref: e,
                                      autoPlay: !0,
                                      asset: _,
                                      className: H.heroAsset,
                                  }),
                          })
                        : (0, a.jsx)(N.Fl, {
                              id: "QuestBarContentExpanded_heroStatic",
                              children: (e) =>
                                  (0, a.jsx)("img", {
                                      ref: e,
                                      alt: "",
                                      className: H.heroAsset,
                                      src: _.url,
                                  }),
                          }),
                    (0, a.jsx)("div", { className: l()(H.legibilityGradient, { [H.legibilityGradientDark]: R }) }),
                ],
            }),
        ],
    });
}
function Y(e) {
    var t;
    let { overlayRef: n, containerRef: i } = e,
        { quest: c, taskDetails: d } = r.useContext(L.A),
        { expansionSpring: u } = r.useContext(k.xo),
        m = (null == (t = c.userStatus) ? void 0 : t.completedAt) != null,
        p = d.percentComplete > 0,
        h = (0, _.z)(c),
        [f, x, g] = (0, _.me)(c, d),
        j = r.useRef(null),
        y = r.useRef(null),
        C = (0, _._s)({ quest: c }),
        S = (0, T.q8)(c),
        O = (0, _.Jf)(c),
        N = r.useCallback(() => {
            (0, I.openVideoQuestModal)({
                quest: c,
                questContent: v.jn.QUEST_BAR_V2,
                sourceQuestContent: v.jn.QUEST_BAR_V2,
                sourceQuestContentCTA: b.jZ.QUEST_BAR_VIDEO_QUEST_PREVIEW,
            });
        }, [c]),
        P = null != O ? O.percentComplete : d.percentComplete;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(s.animated.div, {
                className: l()(H.postEnrollmentBackground, H.postEnrollmentBackgroundCollapsed),
                style: {
                    backgroundImage: "linear-gradient(90deg, ".concat(V.cd, ", ").concat(V.v$, ")"),
                    opacity: u.to({
                        range: [0, 1],
                        output: [1, 0],
                    }),
                },
            }),
            (0, a.jsxs)("div", {
                className: H.questAcceptedContent,
                ref: (e) => {
                    "function" == typeof i ? i(e) : null != i && (i.current = e), null != e && (y.current = e);
                },
                children: [
                    (0, a.jsx)(B.Z, {}),
                    (0, a.jsx)("div", { className: H.divider }),
                    (0, a.jsx)(A.Z, {
                        overlayRef: n,
                        progressBarRef: j,
                        isHovered: !1,
                    }),
                    (0, a.jsx)(U.Z, {
                        contentLocation: "expanded",
                        progressBarRef: j,
                        isExpanded: !0,
                        percentComplete: P,
                        activeScreen: f,
                        popoutTargetElementRef: y,
                    }),
                    (0, a.jsx)(D.n, {
                        children:
                            !m &&
                            !(0, E.Gd)(c) &&
                            (0, o.EQ)(f)
                                .with(v.LI.SELECT, () =>
                                    (0, a.jsx)(F.Z, {
                                        onConsole: () => g(G.cd.CONSOLE),
                                        onDesktop: () => g(G.cd.DESKTOP),
                                    }),
                                )
                                .with(v.LI.DESKTOP, () => (0, a.jsx)(M.Z, { quest: c }))
                                .with(v.LI.CONSOLE, () =>
                                    (0, a.jsx)(Z.Z, {
                                        quest: c,
                                        taskDetails: d,
                                    }),
                                )
                                .exhaustive(),
                    }),
                    (0, a.jsxs)(D.n, {
                        children: [
                            S && (0, a.jsx)(K, { onClick: N }),
                            (0, a.jsx)(R.r, {
                                awaitingConsoleConnections: C,
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
                className: l()(H.postEnrollmentBackground, H.postEnrollmentBackgroundExpanded),
                style: { backgroundImage: "linear-gradient(90deg, ".concat(V.cd, ", ").concat(V.v$, ")") },
            }),
        ],
    });
}
async function X(e, t, n, a) {
    return (0, T.q8)(e)
        ? void (await (0, I.enrollAndStartVideoQuestWithErrorHandling)(e, {
              questContent: t,
              questContentCTA: n,
              sourceQuestContent: a,
              sourceQuestContentCTA: n,
          }))
        : (0, O.Rt)(e)
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
let J = r.forwardRef(function (e, t) {
    var n;
    let { children: i, className: o, overlayRef: c } = e,
        { collapsedHeight: d, isExpanded: u, isExpansionAnimationComplete: m, quest: p } = r.useContext(L.A),
        { expansionSpring: h } = r.useContext(k.xo),
        { launchInGameActivity: f } = (0, _.zB)(p),
        x = (0, O.Rt)(p),
        g = r.useCallback(async () => {
            let e = x ? b.jZ.START_QUEST : b.jZ.ACCEPT_QUEST;
            await X(p, v.jn.QUEST_BAR_V2, e, v.jn.QUEST_BAR_V2), x && f();
        }, [p, f, x]),
        j = (null == (n = p.userStatus) ? void 0 : n.enrolledAt) != null,
        y = u && m;
    return (0, a.jsxs)(s.animated.div, {
        "aria-hidden": !y,
        className: l()(o, H.contentExpanded, {
            [H.contentInteractable]: y,
            [H.contentExpandedAccepted]: j,
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
                    ? (0, a.jsx)(Y, {
                          overlayRef: c,
                          containerRef: t,
                      })
                    : (0, a.jsx)(Q, {
                          isInteractable: y,
                          containerRef: t,
                          onAcceptQuest: g,
                      }),
            }),
        ],
    });
});
