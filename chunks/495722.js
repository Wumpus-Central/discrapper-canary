n.d(t, { Z: () => X }), n(388685), n(953529), n(314940);
var r = n(255367),
    s = n(73800),
    o = n(120356),
    a = n.n(o),
    i = n(126663),
    l = n(278074),
    c = n(754700),
    u = n(442837),
    d = n(692547),
    p = n(780384),
    m = n(481060),
    g = n(410030),
    f = n(70097),
    x = n(617136),
    h = n(509212),
    j = n(272008),
    _ = n(113434),
    b = n(569984),
    v = n(497505),
    C = n(184299),
    y = n(381176),
    O = n(373370),
    E = n(475595),
    S = n(720293),
    T = n(644646),
    w = n(110560),
    P = n(78826),
    N = n(670638),
    A = n(693900),
    R = n(164495),
    B = n(759853),
    k = n(205511),
    I = n(694802),
    q = n(95985),
    D = n(50476),
    Q = n(46140),
    V = n(743294),
    L = n(388032),
    M = n(921183);
function Z(e) {
    var t, n;
    let { quest: o, onClick: i, reducedMotion: l, isExpanded: u } = e,
        [p, g] = s.useState(!1),
        x = s.useRef(null),
        h = (0, E.fh)(o, E.eC.QUEST_BAR_HERO_VIDEO),
        j = (0, S.z0)(o, c.X.WATCH_VIDEO, S.n1.VIDEO, S.O.THUMBNAIL),
        _ = (0, C.km)((e) => e.getVideoProgressState);
    s.useEffect(() => {
        null != x.current && (u && (!l || p) ? ((x.current.currentTime = 0), x.current.play()) : x.current.pause());
    }, [x, p, l, u]);
    let b = _(o.id),
        v = (null == (t = o.userStatus) ? void 0 : t.completedAt) != null && b === C.iw.COMPLETED,
        y = !v && (!l || p);
    return (0, r.jsxs)(m.P3F, {
        className: M.videoQuestPreviewCont,
        onClick: i,
        onMouseEnter: () => {
            l && !p && g(!0);
        },
        onMouseLeave: () => {
            l && p && g(!1);
        },
        children: [
            null != j &&
                (0, r.jsx)("img", {
                    alt: "",
                    src: j.url,
                    className: M.assetBodyVideoPreviewMedia,
                }),
            null != h
                ? (0, r.jsx)(f.Z, {
                      ref: x,
                      autoPlay: !1,
                      poster: null == j ? void 0 : j.url,
                      loop: !0,
                      muted: !0,
                      playsInline: !0,
                      className: a()(M.assetBodyVideoPreviewVideo, { [M.assetBodyVideoPreviewVisible]: y }),
                      controls: !1,
                      children: (0, r.jsx)("source", {
                          src: h.url,
                          type: null != (n = h.mimetype) ? n : void 0,
                      }),
                  })
                : null,
            (0, r.jsx)("div", {
                className: M.previewPlayButtonCont,
                children: v
                    ? (0, r.jsx)(m.Oe7, {
                          color: d.Z.colors.WHITE,
                          className: M.previewPlayButton,
                      })
                    : (0, r.jsx)(m.o1U, {
                          color: d.Z.colors.WHITE,
                          className: M.previewPlayButton,
                      }),
            }),
        ],
    });
}
function W(e) {
    let { quest: t } = e;
    return (0, r.jsx)(T.Z, {
        className: a()(M.rewardTile, M.hiddenRewardTile),
        learnMoreStyle: "text",
        quest: t,
        questContent: v.jn.QUEST_BAR_V2,
        location: Q.dr.QUESTS_BAR,
        sourceQuestContent: v.jn.QUEST_BAR_V2,
    });
}
function U(e) {
    return (0, r.jsx)(m.Text, {
        className: M.description,
        variant: "text-xs/normal",
        children: (0, O.DD)({
            quest: e.quest,
            location: Q.dr.QUESTS_BAR,
            questContent: v.jn.QUEST_BAR_V2,
            taskDetails: e.taskDetails,
            sourceQuestContent: v.jn.QUEST_BAR_V2,
        }),
    });
}
function H(e) {
    let {
            quest: t,
            taskDetails: n,
            expansionSpring: o,
            isInteractable: l,
            reducedMotion: c,
            containerRef: d,
            isExpanded: f,
            onAcceptQuest: x,
        } = e,
        h = (0, u.e7)([b.Z], () => b.Z.isEnrolling(t.id), [t]),
        j = s.useMemo(() => (0, E.fh)(t, E.eC.QUEST_BAR_HERO), [t]),
        _ = (0, O.CR)({ quest: t }),
        v = (0, y.h)({
            location: Q.dr.QUESTS_BAR,
            questConfig: t.config,
        }),
        C = s.useMemo(() => (0, E.fh)(t, E.eC.HERO_IMAGE), [t]),
        S = s.useMemo(() => (null == C ? {} : { backgroundImage: "url(".concat(C.url, ")") }), [C]),
        T = (0, g.ZP)(),
        w = (0, p.wj)(T);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                children: (0, r.jsxs)("div", {
                    className: M.questPromoContent,
                    ref: d,
                    children: [
                        (0, r.jsxs)("div", {
                            className: M.details,
                            children: [
                                (0, r.jsx)(W, { quest: t }),
                                (0, r.jsx)(m.X6q, {
                                    className: M.title,
                                    color: "header-primary",
                                    variant: "heading-md/medium",
                                    children: L.intl.format(L.t.EQa7oq, { questName: t.config.messages.questName }),
                                }),
                                (0, r.jsx)(U, {
                                    quest: t,
                                    taskDetails: n,
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: M.cta,
                            children: (0, r.jsx)(m.zxk, {
                                variant: "primary",
                                onClick: l ? x : void 0,
                                loading: h,
                                text: _,
                                size: "sm",
                                fullWidth: !0,
                            }),
                        }),
                    ],
                }),
            }),
            v &&
                null != C &&
                (0, r.jsx)(i.animated.div, {
                    className: M.contentCollapsedBackgroundWrapper,
                    style: {
                        opacity: o.to([0, 1], [1, 0]),
                    },
                    children: (0, r.jsx)("div", {
                        className: M.contentCollapsedBackground,
                        style: S,
                    }),
                }),
            (0, r.jsxs)(i.animated.div, {
                className: M.heroAssetWrapper,
                style: {
                    backdropFilter: o.to([0, 1], [5, 0]).to((e) => "blur(".concat(e, "px)")),
                    filter: o.to([0, 1], [0.8, 1]).to((e) => "brightness(".concat(e, ")")),
                },
                children: [
                    !v &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(i.animated.div, {
                                    className: M.heroAssetDarken,
                                    style: {
                                        opacity: o.to([0, 1], [1, 0]),
                                    },
                                }),
                                (0, r.jsx)(i.animated.div, {
                                    className: M.heroAssetTint,
                                    style: {
                                        backgroundColor: t.config.colors.primary,
                                        opacity: o.to([0, 1], [1, 0]),
                                    },
                                }),
                            ],
                        }),
                    j.isAnimated
                        ? (0, r.jsx)(P.Fl, {
                              id: "QuestBarV2ContentExpanded_heroAnimated",
                              children: (e) =>
                                  (0, r.jsx)(z, {
                                      ref: e,
                                      asset: j,
                                      isExpanded: f,
                                      reducedMotion: c,
                                  }),
                          })
                        : (0, r.jsx)(P.Fl, {
                              id: "QuestBarV2ContentExpanded_heroStatic",
                              children: (e) =>
                                  (0, r.jsx)("img", {
                                      ref: e,
                                      alt: "",
                                      className: M.heroAsset,
                                      src: j.url,
                                  }),
                          }),
                    (0, r.jsx)("div", { className: a()(M.legibilityGradient, { [M.legibilityGradientDark]: w }) }),
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
            className: M.heroAsset,
            controls: !1,
            children: (0, r.jsx)("source", {
                src: o.url,
                type: null != (n = o.mimetype) ? n : void 0,
            }),
        })
    );
});
function F(e) {
    var t;
    let {
            quest: n,
            taskDetails: o,
            expansionSpring: c,
            overlayRef: u,
            isExpanded: d,
            reducedMotion: p,
            containerRef: g,
            onCtxMenuOpen: f,
            onCtxMenuClose: j,
            onCtxMenuSelect: b,
        } = e,
        C = (null == (t = n.userStatus) ? void 0 : t.completedAt) != null,
        y = o.percentComplete > 0,
        O = (0, _.z)(n),
        [E, S, T] = (0, _.me)(n, o),
        P = s.useRef(null),
        W = (0, _.B6)(n.config.expiresAt),
        U = (0, _._s)({ quest: n }),
        H = (0, h.q8)(n),
        z = (0, _.Jf)(n),
        F = s.useCallback(() => {
            (0, w.openVideoQuestModal)({
                quest: n,
                questContent: v.jn.QUEST_BAR_V2,
                sourceQuestContent: v.jn.QUEST_BAR_V2,
                sourceQuestContentCTA: x.jZ.QUEST_BAR_VIDEO_QUEST_PREVIEW,
            });
        }, [n]),
        X = null != z ? z.percentComplete : o.percentComplete;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i.animated.div, {
                className: a()(M.postEnrollmentBackground, M.postEnrollmentBackgroundCollapsed),
                style: {
                    backgroundImage: "linear-gradient(90deg, ".concat(V.aY, ", ").concat(V.v6, ")"),
                    opacity: c.to({
                        range: [0, 1],
                        output: [1, 0],
                    }),
                },
            }),
            (0, r.jsxs)("div", {
                className: M.questAcceptedContent,
                ref: g,
                children: [
                    (0, r.jsxs)("div", {
                        className: M.questAcceptedHeader,
                        children: [
                            (0, r.jsx)(m.Text, {
                                variant: "text-xxs/medium",
                                className: a()(M.flex, M.headerText),
                                children: L.intl.format(L.t["pX+fmp"], { expirationDate: W }),
                            }),
                            (0, r.jsx)(N.r, {
                                onOpen: f,
                                onClose: j,
                                onSelect: b,
                                questContent: v.jn.QUEST_BAR_V2,
                                quest: n,
                                shouldShowDisclosure: !1,
                                showShareLink: !0,
                                sourceQuestContent: v.jn.QUEST_BAR_V2,
                                children: (e) => {
                                    var t, n;
                                    return (0, r.jsx)(
                                        m.P3F,
                                        ((t = (function (e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var n = null != arguments[t] ? arguments[t] : {},
                                                    r = Object.keys(n);
                                                "function" == typeof Object.getOwnPropertySymbols &&
                                                    (r = r.concat(
                                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                        }),
                                                    )),
                                                    r.forEach(function (t) {
                                                        var r;
                                                        (r = n[t]),
                                                            t in e
                                                                ? Object.defineProperty(e, t, {
                                                                      value: r,
                                                                      enumerable: !0,
                                                                      configurable: !0,
                                                                      writable: !0,
                                                                  })
                                                                : (e[t] = r);
                                                    });
                                            }
                                            return e;
                                        })({}, e)),
                                        (n = n =
                                            {
                                                className: M.submenuWrapper,
                                                "aria-label": L.intl.string(L.t.DEoVWV),
                                                children: (0, r.jsx)(m.xhG, {
                                                    size: "md",
                                                    color: "currentColor",
                                                    className: a()(M.submenuIcon, M.interactiveNormal),
                                                }),
                                            }),
                                        Object.getOwnPropertyDescriptors
                                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                            : (function (e, t) {
                                                  var n = Object.keys(e);
                                                  if (Object.getOwnPropertySymbols) {
                                                      var r = Object.getOwnPropertySymbols(e);
                                                      n.push.apply(n, r);
                                                  }
                                                  return n;
                                              })(Object(n)).forEach(function (e) {
                                                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                              }),
                                        t),
                                    );
                                },
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", { className: M.divider }),
                    (0, r.jsx)(B.Z, {
                        expansionSpring: c,
                        overlayRef: u,
                        progressBarRef: P,
                        quest: n,
                        isExpanded: d,
                    }),
                    (0, r.jsx)(q.Z, {
                        contentLocation: "expanded",
                        quest: n,
                        progressBarRef: P,
                        isExpanded: !0,
                        percentComplete: X,
                        activeScreen: E,
                    }),
                    (0, r.jsx)(A.n, {
                        children:
                            !C &&
                            !(0, h.Gd)(n) &&
                            (0, l.EQ)(E)
                                .with(v.LI.SELECT, () =>
                                    (0, r.jsx)(D.Z, {
                                        onConsole: () => T(Q.cd.CONSOLE),
                                        onDesktop: () => T(Q.cd.DESKTOP),
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
                    (0, r.jsxs)(A.n, {
                        children: [
                            H &&
                                (0, r.jsx)(Z, {
                                    isExpanded: d,
                                    quest: n,
                                    onClick: F,
                                    reducedMotion: p,
                                }),
                            (0, r.jsx)(R.y, {
                                quest: n,
                                useReducedMotion: p,
                                isExpanded: d,
                                awaitingConsoleConnections: U,
                                hasMadeProgress: y,
                                isProgressing: O,
                                activeScreen: E,
                                showBackButton: E !== v.LI.SELECT && S.length > 1 && !y && !O,
                                onBack: () => T(null),
                                taskDetails: o,
                                sourceQuestContent: v.jn.QUEST_BAR_V2,
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: a()(M.postEnrollmentBackground, M.postEnrollmentBackgroundExpanded),
                style: { backgroundImage: "linear-gradient(90deg, ".concat(V.aY, ", ").concat(V.v6, ")") },
            }),
        ],
    });
}
let X = s.forwardRef(function (e, t) {
    var n;
    let {
            children: o,
            className: l,
            collapsedHeight: c,
            isExpanded: u,
            isExpansionAnimationComplete: d,
            expansionSpring: p,
            onCtxMenuOpen: m,
            onCtxMenuClose: g,
            onCtxMenuSelect: f,
            overlayRef: b,
            quest: C,
            useReducedMotion: y,
            taskDetails: O,
        } = e,
        E = (0, h.q8)(C),
        S = (0, h.Vl)(C),
        { launchInGameActivity: T } = (0, _.zB)(C),
        P = s.useCallback(() => {
            let e = C.config.features.includes(Q.S7.START_QUEST_CTA),
                t = e ? x.jZ.START_QUEST : x.jZ.ACCEPT_QUEST;
            (0, j.AH)(C.id, {
                questContent: v.jn.QUEST_BAR_V2,
                questContentCTA: t,
                sourceQuestContent: v.jn.QUEST_BAR_V2,
            }),
                E &&
                    (0, w.openVideoQuestModal)({
                        quest: C,
                        questContent: v.jn.QUEST_BAR_V2,
                        sourceQuestContent: v.jn.QUEST_BAR_V2,
                        sourceQuestContentCTA: t,
                    }),
                S && e && T();
        }, [C, E, S, T]),
        N = (null == (n = C.userStatus) ? void 0 : n.enrolledAt) != null,
        A = u && d;
    return (0, r.jsxs)(i.animated.div, {
        "aria-hidden": !A,
        className: a()(l, M.contentExpanded, {
            [M.contentInteractable]: A,
            [M.contentExpandedAccepted]: N,
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
                children: N
                    ? (0, r.jsx)(F, {
                          quest: C,
                          taskDetails: O,
                          expansionSpring: p,
                          overlayRef: b,
                          isExpanded: u,
                          reducedMotion: y,
                          onCtxMenuOpen: m,
                          onCtxMenuClose: g,
                          onCtxMenuSelect: f,
                          containerRef: t,
                      })
                    : (0, r.jsx)(H, {
                          quest: C,
                          taskDetails: O,
                          expansionSpring: p,
                          isInteractable: A,
                          reducedMotion: y,
                          containerRef: t,
                          isExpanded: u,
                          onAcceptQuest: P,
                      }),
            }),
        ],
    });
});
