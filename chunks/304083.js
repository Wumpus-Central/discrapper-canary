n.d(t, { Z: () => Q }), n(388685), n(953529), n(314940);
var a = n(54381),
    r = n(473749),
    l = n(120356),
    i = n.n(l),
    s = n(236726),
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
    w = n(110560),
    P = n(444134),
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
function H(e) {
    var t, n;
    let { onClick: l } = e,
        { quest: s, isExpanded: o } = r.useContext(Z.A),
        u = (0, c.e7)([h.Z], () => h.Z.useReducedMotion),
        [p, x] = r.useState(!1),
        b = r.useRef(null),
        g = (0, _.fh)(s, _.eC.QUEST_BAR_HERO_VIDEO, void 0, !1),
        v = (0, _.fh)(s, _.eC.VIDEO_PLAYER_THUMBNAIL, void 0, !1),
        y = (0, j.km)((e) => e.getVideoProgressState);
    r.useEffect(() => {
        null != b.current && (o && (!u || p) ? ((b.current.currentTime = 0), b.current.play()) : b.current.pause());
    }, [b, p, u, o]);
    let C = y(s.id),
        S = (null == (t = s.userStatus) ? void 0 : t.completedAt) != null && C === j.iw.COMPLETED,
        E = !S && (!u || p);
    return (0, a.jsxs)(m.P3F, {
        className: V.videoQuestPreviewCont,
        onClick: l,
        onMouseEnter: () => {
            u && !p && x(!0);
        },
        onMouseLeave: () => {
            u && p && x(!1);
        },
        children: [
            null != v &&
                (0, a.jsx)("img", {
                    alt: "",
                    src: v.url,
                    className: V.assetBodyVideoPreviewMedia,
                }),
            null != g
                ? (0, a.jsx)(f.Z, {
                      ref: b,
                      autoPlay: !1,
                      poster: null == v ? void 0 : v.url,
                      loop: !0,
                      muted: !0,
                      playsInline: !0,
                      className: i()(V.assetBodyVideoPreviewVideo, { [V.assetBodyVideoPreviewVisible]: E }),
                      controls: !1,
                      children: (0, a.jsx)("source", {
                          src: g.url,
                          type: null != (n = g.mimetype) ? n : void 0,
                      }),
                  })
                : null,
            (0, a.jsx)("div", {
                className: V.previewPlayButtonCont,
                children: S
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
function z(e) {
    let { quest: t } = e;
    return (0, a.jsx)(N.Z, {
        className: i()(V.rewardTile, V.hiddenRewardTile),
        learnMoreStyle: "text",
        quest: t,
        questContent: v.jn.QUEST_BAR_V2,
        location: B.dr.QUESTS_BAR,
        sourceQuestContent: v.jn.QUEST_BAR_V2,
    });
}
function W(e) {
    let { isInteractable: t, containerRef: n, onAcceptQuest: l } = e,
        { quest: o, isExpanded: d, onGameSheetOpen: f, onGameSheetClose: x, taskDetails: b } = r.useContext(Z.A),
        { expansionSpring: j } = r.useContext(P.xo),
        C = r.useRef(null),
        S = (0, c.e7)([g.Z], () => g.Z.isEnrolling(o.id), [o]),
        E = r.useMemo(() => (0, _.fh)(o, _.eC.QUEST_BAR_HERO), [o]),
        T = (0, c.e7)([h.Z], () => h.Z.useReducedMotion),
        N = (0, y.CR)({ quest: o }),
        I = r.useMemo(() => (0, _.fh)(o, _.eC.HERO_IMAGE), [o]),
        k = r.useMemo(() => (null == I ? {} : { backgroundImage: "url(".concat(I.url, ")") }), [I]),
        R = (0, p.ZP)(),
        A = (0, u.wj)(R),
        D = (0, y.DD)({
            quest: o,
            location: B.dr.QUESTS_BAR,
            questContent: v.jn.QUEST_BAR_V2,
            taskDetails: b,
            sourceQuestContent: v.jn.QUEST_BAR_V2,
            popoutTargetElementRef: C,
            onGameSheetOpened: f,
            onGameSheetClosed: x,
        });
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", {
                ref: C,
                children: (0, a.jsxs)("div", {
                    className: V.questPromoContent,
                    ref: n,
                    children: [
                        (0, a.jsxs)("div", {
                            className: V.details,
                            children: [
                                (0, a.jsx)(z, { quest: o }),
                                (0, a.jsx)(m.Heading, {
                                    className: V.title,
                                    color: "text-strong",
                                    variant: "heading-md/medium",
                                    children: G.intl.format(G.t.EQa7os, { questName: o.config.messages.questName }),
                                }),
                                (0, a.jsx)(m.Text, {
                                    className: V.description,
                                    variant: "text-xs/normal",
                                    children: D,
                                }),
                            ],
                        }),
                        (0, a.jsx)("div", {
                            className: V.cta,
                            children: (0, a.jsx)(m.Button, {
                                variant: "primary",
                                onClick: t ? l : void 0,
                                loading: S,
                                text: N,
                                size: "sm",
                                icon: (0, w.getPrimaryCtaIcon)(o),
                                fullWidth: !0,
                            }),
                        }),
                    ],
                }),
            }),
            null != I &&
                (0, a.jsx)(s.animated.div, {
                    className: V.contentCollapsedBackgroundWrapper,
                    style: {
                        opacity: j.to([0, 1], [1, 0]),
                    },
                    children: (0, a.jsx)("div", {
                        className: i()(V.contentCollapsedBackground, V.blur),
                        style: k,
                    }),
                }),
            (0, a.jsxs)(s.animated.div, {
                className: V.heroAssetWrapper,
                style: {
                    backdropFilter: j.to([0, 1], [5, 0]).to((e) => "blur(".concat(e, "px)")),
                    filter: j.to([0, 1], [0.8, 1]).to((e) => "brightness(".concat(e, ")")),
                },
                children: [
                    E.isAnimated
                        ? (0, a.jsx)(O.Fl, {
                              id: "QuestBarContentExpanded_heroAnimated",
                              children: (e) =>
                                  (0, a.jsx)(K, {
                                      ref: e,
                                      asset: E,
                                      isExpanded: d,
                                      reducedMotion: T,
                                  }),
                          })
                        : (0, a.jsx)(O.Fl, {
                              id: "QuestBarContentExpanded_heroStatic",
                              children: (e) =>
                                  (0, a.jsx)("img", {
                                      ref: e,
                                      alt: "",
                                      className: V.heroAsset,
                                      src: E.url,
                                  }),
                          }),
                    (0, a.jsx)("div", { className: i()(V.legibilityGradient, { [V.legibilityGradientDark]: A }) }),
                ],
            }),
        ],
    });
}
let K = r.forwardRef(function (e, t) {
    var n;
    let { asset: l, isExpanded: i, reducedMotion: s } = e,
        o = r.useRef(null);
    return (
        r.useEffect(() => {
            null != o.current && o.current.pause();
        }, []),
        r.useEffect(() => {
            null == o.current || s || (i ? ((o.current.currentTime = 0), o.current.play()) : o.current.pause());
        }, [s, i]),
        (0, a.jsx)(f.Z, {
            ref: (e) => {
                null != e && ((o.current = e), null != t && ("function" == typeof t ? t(e) : (t.current = e)));
            },
            autoPlay: !0,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: V.heroAsset,
            controls: !1,
            children: (0, a.jsx)("source", {
                src: l.url,
                type: null != (n = l.mimetype) ? n : void 0,
            }),
        })
    );
});
function q(e) {
    var t;
    let { overlayRef: n, containerRef: l } = e,
        { quest: c, taskDetails: d, isExpanded: u } = r.useContext(Z.A),
        { expansionSpring: m } = r.useContext(P.xo),
        p = (null == (t = c.userStatus) ? void 0 : t.completedAt) != null,
        h = d.percentComplete > 0,
        f = (0, C.z)(c),
        [x, g, j] = (0, C.me)(c, d),
        y = r.useRef(null),
        _ = r.useRef(null),
        T = (0, C._s)({ quest: c }),
        O = (0, E.q8)(c),
        N = (0, C.Jf)(c),
        G = r.useCallback(() => {
            (0, w.openVideoQuestModal)({
                quest: c,
                questContent: v.jn.QUEST_BAR_V2,
                sourceQuestContent: v.jn.QUEST_BAR_V2,
                sourceQuestContentCTA: b.jZ.QUEST_BAR_VIDEO_QUEST_PREVIEW,
            });
        }, [c]),
        z = null != N ? N.percentComplete : d.percentComplete;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(s.animated.div, {
                className: i()(V.postEnrollmentBackground, V.postEnrollmentBackgroundCollapsed),
                style: {
                    backgroundImage: "linear-gradient(90deg, ".concat(F.cd, ", ").concat(F.v$, ")"),
                    opacity: m.to({
                        range: [0, 1],
                        output: [1, 0],
                    }),
                },
            }),
            (0, a.jsxs)("div", {
                className: V.questAcceptedContent,
                ref: (e) => {
                    "function" == typeof l ? l(e) : null != l && (l.current = e), null != e && (_.current = e);
                },
                children: [
                    (0, a.jsx)(M.Z, {}),
                    (0, a.jsx)("div", { className: V.divider }),
                    (0, a.jsx)(k.Z, {
                        overlayRef: n,
                        progressBarRef: y,
                        isHovered: !1,
                    }),
                    (0, a.jsx)(L.Z, {
                        contentLocation: "expanded",
                        progressBarRef: y,
                        isExpanded: !0,
                        percentComplete: z,
                        activeScreen: x,
                        popoutTargetElementRef: _,
                    }),
                    (0, a.jsx)(A.n, {
                        children:
                            !p &&
                            !(0, S.Gd)(c) &&
                            (0, o.EQ)(x)
                                .with(v.LI.SELECT, () =>
                                    (0, a.jsx)(U.Z, {
                                        onConsole: () => j(B.cd.CONSOLE),
                                        onDesktop: () => j(B.cd.DESKTOP),
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
                            O && (0, a.jsx)(H, { onClick: G }),
                            (0, a.jsx)(I.r, {
                                isExpanded: u,
                                awaitingConsoleConnections: T,
                                hasMadeProgress: h,
                                isProgressing: f,
                                activeScreen: x,
                                showBackButton: x !== v.LI.SELECT && g.length > 1 && !h && !f,
                                onBack: () => j(null),
                                sourceQuestContent: v.jn.QUEST_BAR_V2,
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: i()(V.postEnrollmentBackground, V.postEnrollmentBackgroundExpanded),
                style: { backgroundImage: "linear-gradient(90deg, ".concat(F.cd, ", ").concat(F.v$, ")") },
            }),
        ],
    });
}
async function Y(e, t, n, a) {
    return (0, E.q8)(e)
        ? void (await (0, w.enrollAndStartVideoQuestWithErrorHandling)(e, {
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
    let { children: l, className: o, overlayRef: c } = e,
        { collapsedHeight: d, isExpanded: u, isExpansionAnimationComplete: m, quest: p } = r.useContext(Z.A),
        { expansionSpring: h } = r.useContext(P.xo),
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
        className: i()(o, V.contentExpanded, {
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
            l,
            (0, a.jsx)(s.animated.div, {
                style: { opacity: 1 },
                children: j
                    ? (0, a.jsx)(q, {
                          overlayRef: c,
                          containerRef: t,
                      })
                    : (0, a.jsx)(W, {
                          isInteractable: y,
                          containerRef: t,
                          onAcceptQuest: g,
                      }),
            }),
        ],
    });
});
