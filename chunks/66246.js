(n.r(t), n.d(t, { QuestBarBountyContent: () => tY, QuestBarQuestContent: () => tH, default: () => tX }));
var s = n(477900),
    r = n(582128),
    i = n(323889),
    o = n(855986),
    l = n(840251),
    a = n(688151);
let u = new l.E([], a.$G.QUEST_BAR_RENDERED, { location: "quest bar rendered" });
var c = n(186111),
    d = n(506988),
    x = n(61387),
    C = n(205844),
    m = n(561844),
    E = n(792620),
    p = n(557637),
    f = n(280905),
    h = n(201805),
    S = n(321538),
    _ = n(628088),
    A = n(682908),
    j = n(503698),
    g = n.n(j),
    T = n(120692),
    R = n(475743),
    y = n(494280),
    v = n(122760),
    Q = n(971276),
    N = n(851936),
    U = n(568329),
    B = n(783569),
    F = n(241762),
    b = n(717695),
    V = n(717421),
    I = n(775602),
    O = n(272111),
    q = n(621466),
    L = n(192308),
    k = n(590202),
    P = n(652215),
    M = n(221596),
    D = n(920690);
function w(e) {
    let {
            creative: t,
            collapsedContent: n,
            expandedContent: l,
            ImpressionTracker: a,
            ModeChangeTracker: u,
            StateTracker: x,
            renderCreativeContext: C,
        } = e,
        {
            collapsedHeight: E,
            canExpand: f,
            canCollapse: S,
            isEnrolled: _,
            springConfig: A,
        } = (function (e) {
            switch (e.type) {
                case i.p.QUEST: {
                    let t = e.quest.userStatus?.enrolledAt != null,
                        n = e.quest.userStatus?.completedAt != null;
                    return {
                        collapsedHeight: 70 + 78 * !!n,
                        canExpand: !n,
                        canCollapse: !n,
                        isEnrolled: t,
                        springConfig: t ? M.ZV : M.Ko,
                    };
                }
                case i.p.BOUNTY:
                case i.p.PLAYABLE:
                    return { collapsedHeight: 70, canExpand: !0, canCollapse: !0, isEnrolled: !1, springConfig: M.Ko };
            }
        })(t),
        j = (0, h.gJ)(t),
        O = (0, y.Yh)(t),
        w = (0, N.L)({ quest: (0, y.Ys)(t), location: M.rE.QUESTS_BAR }),
        $ = (0, Q.s)(),
        H = (0, o.bG)([v.A], () => null != v.A.questEnrollmentBlockedUntil),
        W = (0, o.bG)([c.A], () => c.A.hasLayers()),
        G = r.useRef(null),
        { hasError: z, isLoading: Y } = (0, p.zT)(),
        K = r.useContext(b.Z),
        X = K || ($ && j && !Y && !H),
        {
            isExpanded: Z,
            setIsExpanded: J,
            expandQuestBar: ee,
            isExpansionAnimationComplete: et,
            isVisibilityAnimationAtRest: en,
            expansionSpring: es,
            visibilitySpring: er,
        } = (function (e) {
            let { canExpand: t, isQuestBarVisible: n, springConfig: s } = e,
                i = (0, o.bG)([I.Ay], () => I.Ay.useReducedMotion),
                [l, a] = r.useState(!1),
                [u, c] = r.useState(!0),
                [d, x] = r.useState(!0),
                C = r.useRef(n),
                m = r.useCallback(
                    (e) => {
                        (!t && e) || (l !== e && (c(!1), a(e)));
                    },
                    [t, l],
                ),
                E = r.useCallback(() => {
                    m(!0);
                }, [m]),
                [{ expansionSpring: p }, f] = (0, V.z)(() => ({
                    from: { expansionSpring: 0 },
                    config: s,
                    onRest: () => {
                        c(!0);
                    },
                    onStart: () => {
                        c(!1);
                    },
                }));
            r.useEffect(() => {
                f({ expansionSpring: +!!l, immediate: i });
            }, [l, f, i]);
            let { visibilitySpring: h } = (0, V.z)({
                from: { visibilitySpring: 0 },
                to: { visibilitySpring: +!!n },
                config: { tension: 250, friction: 10, clamp: !0 },
                onRest: () => {
                    x(!0);
                },
                onStart: () => {
                    x(!1);
                },
            });
            return (
                r.useLayoutEffect(() => {
                    (n !== C.current && x(!1), (C.current = n));
                }, [n]),
                {
                    isExpanded: l,
                    setIsExpanded: m,
                    expandQuestBar: E,
                    isExpansionAnimationComplete: u,
                    isVisibilityAnimationAtRest: d,
                    expansionSpring: p,
                    visibilitySpring: h,
                    springConfig: s,
                }
            );
        })({ canExpand: f, isQuestBarVisible: X, springConfig: A }),
        ei = (0, R.Ay)(_),
        {
            handleCtxMenuOpened: eo,
            handleCtxMenuClosed: el,
            handleCtxMenuSelection: ea,
            handleGameSheetOpened: eu,
            handleGameSheetClosed: ec,
            handleFocusWithoutDelay: ed,
            handleBlur: ex,
            handleMouseEnter: eC,
            handleMouseLeave: em,
        } = (function (e) {
            let {
                    adCreativeId: t,
                    adCreativeType: n,
                    isExpanded: s,
                    setIsExpanded: o,
                    expandQuestBar: l,
                    canCollapse: a,
                    didEnroll: u,
                    impressionRef: c,
                } = e,
                x = r.useRef(-1),
                C = r.useRef(!1),
                [E, p] = r.useState(!1),
                [f, h] = r.useState(!1),
                S = r.useCallback(() => {
                    p(!0);
                }, []),
                _ = r.useCallback(() => {
                    (p(!1), !C.current && a && o(!1));
                }, [a, o]),
                A = r.useCallback(() => {
                    (p(!1), a && o(!1), (C.current = !1));
                }, [a, o]),
                j = r.useCallback(() => {
                    h(!0);
                }, []),
                g = r.useCallback(() => {
                    (h(!1), o(!1));
                }, [o]),
                T = r.useCallback(
                    function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (s) return;
                        let { withDelay: t = !1 } = e;
                        t ? (x.current = window.setTimeout(l, 75)) : l();
                    },
                    [l, s],
                ),
                R = r.useCallback(() => {
                    I.Ay.keyboardModeEnabled && T();
                }, [T]),
                y = r.useCallback(
                    (e) => {
                        (window.clearTimeout(x.current),
                            ((0, q.vq)(e?.relatedTarget, Node) && e.currentTarget.contains(e.relatedTarget)) ||
                                E ||
                                f ||
                                C.current ||
                                o(!1));
                    },
                    [E, f, o],
                ),
                v = r.useCallback(() => {
                    (n === i.p.QUEST &&
                        (0, m.av)({
                            questId: t,
                            event: P.HAw.QUEST_HOVER,
                            properties: {
                                content_id: d.uF.QUEST_BAR,
                                content_name: (0, k.jO)(d.uF.QUEST_BAR),
                                impression_id: c.current?.getId(),
                            },
                            shouldExtendSession: !0,
                            sourceQuestContent: d.uF.QUEST_BAR_V2,
                        }),
                        (C.current = !0),
                        T({ withDelay: !0 }));
                }, [t, n, T, c]),
                Q = r.useCallback(() => {
                    (n === i.p.QUEST &&
                        (0, m.av)({
                            questId: t,
                            event: P.HAw.QUEST_HOVER_OFF,
                            properties: {
                                content_id: d.uF.QUEST_BAR,
                                content_name: (0, k.jO)(d.uF.QUEST_BAR),
                                impression_id: c.current?.getId(),
                            },
                            sourceQuestContent: d.uF.QUEST_BAR_V2,
                        }),
                        (C.current = !1),
                        y());
                }, [t, n, y, c]);
            (r.useEffect(() => {
                f && C.current && Q();
            }, [f, Q]),
                r.useLayoutEffect(() => {
                    u && C.current && l();
                }, [l, u]),
                r.useLayoutEffect(() => {
                    a && u && !C.current && o(!1);
                }, [a, u, o]));
            let N = (0, L.Rv)();
            return (
                r.useEffect(() => {
                    N && C.current && Q();
                }, [Q, N]),
                {
                    ctxMenuOpen: E,
                    gameSheetOpen: f,
                    handleCtxMenuOpened: S,
                    handleCtxMenuClosed: _,
                    handleCtxMenuSelection: A,
                    handleGameSheetOpened: j,
                    handleGameSheetClosed: g,
                    handleFocus: T,
                    handleFocusWithoutDelay: R,
                    handleBlur: y,
                    handleMouseEnter: v,
                    handleMouseLeave: Q,
                }
            );
        })({
            ...O,
            isExpanded: Z,
            setIsExpanded: J,
            expandQuestBar: ee,
            canCollapse: S,
            didEnroll: _ && !0 !== ei,
            impressionRef: G,
        }),
        eE = r.useRef(null),
        ep = r.useRef(null),
        ef = r.useRef(null),
        eh = {
            hasAssetsError: z,
            isEligibleForQuests: $,
            isQuestBarVisible: X,
            isVisibilityAnimationAtRest: en,
            isLoadingAssets: Y,
            isQuestEnrollmentBlocked: H,
            impressionRef: G,
            ...O,
        },
        eS = !(!$ || (!X && en && !Y) || (z && !K));
    return (
        !eS && (z && !K ? w.log("Not rendered due to asset error") : $ || w.log("Not rendered due to ineligibility")),
        (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(x, { ...eh }),
                eS &&
                    (0, s.jsx)(a, {
                        overrideVisibility: !W && X,
                        children: (e, t) => (
                            (G.current = t.current),
                            (0, s.jsxs)("div", {
                                className: D.dK,
                                children: [
                                    X && (0, s.jsx)(u, { isExpanded: Z }),
                                    (0, s.jsx)(T.animated.div, {
                                        "data-testid": "quest-bar-container",
                                        "aria-hidden": !X,
                                        onMouseLeave: em,
                                        onMouseEnter: eC,
                                        onFocus: ed,
                                        onBlur: ex,
                                        className: g()(D.iE, { [D.Xc]: !X, [D.uv]: X && en }),
                                        style: { height: er.to({ range: [0, 1], output: [0, E] }) },
                                        children: (0, s.jsx)(T.animated.div, {
                                            className: g()(D.FG, { [D.E$]: Z }),
                                            children: (0, s.jsx)(B.R, {
                                                springConfig: A,
                                                isExpanded: Z,
                                                children: (0, s.jsx)(U.oK, {
                                                    expandedContentRef: eE,
                                                    collapsedContentRef: ep,
                                                    overlayRef: ef,
                                                    expansionSpring: es,
                                                    children: (0, s.jsx)(F.R, {
                                                        isExpanded: Z,
                                                        isExpansionAnimationComplete: et,
                                                        onCtxMenuClose: el,
                                                        onCtxMenuOpen: eo,
                                                        onCtxMenuSelect: ea,
                                                        onGameSheetOpen: eu,
                                                        onGameSheetClose: ec,
                                                        collapsedHeight: E,
                                                        children: (C ?? ((e) => e))(
                                                            (0, s.jsxs)(s.Fragment, {
                                                                children: [
                                                                    n,
                                                                    l,
                                                                    (0, s.jsx)("div", { ref: ef, className: D.Lw }),
                                                                ],
                                                            }),
                                                        ),
                                                    }),
                                                }),
                                            }),
                                        }),
                                    }),
                                ],
                            })
                        ),
                    }),
            ],
        })
    );
}
var $ = n(818276),
    H = n(963713),
    W = n(776310),
    G = n(333007),
    z = n(398025);
function Y() {
    let e = document.body.style.getPropertyValue("--custom-guild-sidebar-width").slice(0, -2);
    return parseInt("" !== e ? e : "375");
}
var K = n(77183),
    X = n(489811);
let Z = (e) => {
    let { progressBarRef: t, isHovered: n } = e,
        { quest: i } = r.useContext(H.$0),
        { isExpanded: l } = (0, F.H)(),
        { expansionSpring: a, overlayRef: u } = r.useContext(U.PW),
        { completionSpring: d, startCompletionAnimation: x } = (function () {
            let [{ spring: e }, t] = (0, V.z)(() => ({ spring: 0 }), "animate-always");
            return {
                completionSpring: e,
                startCompletionAnimation: r.useCallback(() => {
                    (t({ spring: 1 }), t({ spring: 0, delay: 2e3 }));
                }, [t]),
            };
        })(),
        C = i.userStatus?.completedAt != null,
        m = r.useRef(!1),
        E = (0, o.bG)([I.Ay], () => I.Ay.useReducedMotion),
        p = r.useRef(null),
        f = (0, o.bG)([c.A], () => c.A.hasLayers()),
        h = (0, R.Ay)(f),
        [S, _] = r.useState(null),
        [A, j] = r.useState(null),
        y = r.useRef(new W.OH({ gravity: 0, wind: 0 })),
        v = (0, W.f9)(S, A),
        Q = r.useMemo(() => [O.r3], []),
        N = r.useCallback(() => {
            if (E) return;
            let e = t.current,
                n = p.current;
            if (null != n && null != e && v.isReady) {
                var s, r, i, o;
                let { x: t, y: l } = e.getBoundingClientRect(),
                    { x: a, y: u } = n.getBoundingClientRect();
                v.createMultipleConfetti(
                    ((s = t - a),
                    (r = l - u),
                    (i = e.clientHeight),
                    (o = e.clientWidth),
                    {
                        ...K.Mw,
                        position: { type: "static-random", minValue: { x: s, y: r }, maxValue: { x: s + i, y: r + o } },
                        velocity: { type: "static-random", minValue: { x: -20, y: -20 }, maxValue: { x: 20, y: 20 } },
                        opacity: { type: "linear", value: 2, addValue: -0.1 },
                        dragCoefficient: { type: "static", value: 0.166 },
                        size: { type: "static-random", minValue: 2, maxValue: 3 },
                    }),
                    100,
                );
            }
        }, [t, p, v, E]),
        B = (0, R.Ay)(l);
    return (r.useEffect(() => {
        C && l && !B && (x(), N());
    }, [l, C, x, N, B]),
    r.useEffect(() => {
        C &&
            !f &&
            h &&
            setTimeout(() => {
                (x(), N());
            }, 200);
    }, [C, h, f, x, N]),
    r.useEffect(() => {
        v.isReady && (!m.current && C && (x(), N()), (m.current = C));
    }, [C, m, N, x, v]),
    r.useEffect(() => {
        n && C && (x(), N());
    }, [n, C, x, N]),
    E)
        ? null
        : (0, s.jsxs)("div", {
              className: X.iE,
              "aria-hidden": "true",
              ref: p,
              children: [
                  (0, s.jsx)(T.animated.div, { className: X.Tp, style: { opacity: (0, z.a)(d) } }),
                  (0, s.jsx)(T.animated.div, { className: g()(X.sJ, X.ix), style: { opacity: (0, z.a)(d) } }),
                  (0, s.jsxs)(T.animated.div, {
                      className: X.KG,
                      style: { transform: a.to({ range: [0, 1], output: [-35, 0] }).to((e) => `translateY(${e}px)`) },
                      children: [
                          (0, s.jsx)(W.Fk, { ref: _, className: X.t_, environment: y.current }),
                          (0, s.jsx)(W.K_, {
                              ref: j,
                              sprites: ["/assets/b909790cf1d80597.svg"],
                              colors: Q,
                              spriteWidth: 28,
                              spriteHeight: 28,
                          }),
                          null != u.current &&
                              (0, G.createPortal)(
                                  (0, s.jsx)(T.animated.div, {
                                      className: g()(X.sJ, X.d7),
                                      style: { opacity: (0, z.a)(d) },
                                  }),
                                  u.current,
                              ),
                      ],
                  }),
              ],
          });
};
var J = n(821609),
    ee = n(870273),
    et = n(971649),
    en = n(651892),
    es = n(574112),
    er = n(814793),
    ei = n(753386),
    eo = n(608935),
    el = n(452411),
    ea = n(79545),
    eu = n(194267),
    ec = n(630037),
    ed = n(792996),
    ex = n(191559);
function eC(e) {
    let { quest: t, sourceQuestContent: n, taskDetails: r } = e,
        i = (0, x.Hv)(),
        o = (0, s.jsx)(J.$, {
            variant: "primary",
            fullWidth: !0,
            onClick: function () {
                if (i) {
                    ((0, m.Y5)({
                        questId: t.id,
                        questContent: d.uF.QUEST_BAR_V2,
                        questContentCTA: k.Cy.QUEST_ACCESS_SUSPENDED,
                        sourceQuestContent: n,
                    }),
                        (0, S.FS)());
                    return;
                }
                let e = t.userStatus?.enrolledAt == null ? k.Cy.ACCEPT_QUEST : k.Cy.WATCH_VIDEO;
                (0, S.d5)({
                    quest: t,
                    questContent: d.uF.QUEST_BAR_V2,
                    sourceQuestContent: n,
                    sourceQuestContentCTA: e,
                });
            },
            size: "sm",
            text: (0, ei.WM)(r),
            "aria-disabled": i || void 0,
        });
    return i ? (0, s.jsx)(eo.A, { children: o }) : o;
}
function em(e) {
    let { quest: t, sourceQuestContent: n } = e,
        r = (0, et.wW)(),
        i = (0, en.wr)(t);
    return (0, s.jsx)(J.$, {
        size: "sm",
        fullWidth: !0,
        onClick: () =>
            (0, es.pu)(t, {
                content: d.uF.QUEST_BAR_V2,
                ctaContent: k.Cy.OPEN_GAME_LINK,
                impressionId: r(),
                sourceQuestContent: n,
            }),
        text: i,
    });
}
function eE(e) {
    let { quest: t, sourceQuestContent: n } = e,
        r = (0, et.wW)();
    return (0, s.jsx)(J.$, {
        fullWidth: !0,
        onClick: () =>
            (0, es.se)(
                { quest: t },
                {
                    content: d.uF.QUEST_BAR_V2,
                    ctaContent: k.Cy.CONNECT_CONSOLE,
                    impressionId: r(),
                    sourceQuestContent: n,
                },
            ),
        size: "sm",
        text: ed.intl.string(ed.t.csptqV),
    });
}
function ep(e) {
    let { quest: t } = e,
        n = (0, ee.NA)({ quest: t }),
        { launchInGameActivity: r } = (0, x.zW)(t);
    return (0, er.vA)(t)
        ? (0, s.jsx)(J.$, { fullWidth: !0, variant: "primary", icon: (0, S.Oz)(t), onClick: r, size: "sm", text: n })
        : null;
}
function ef(e) {
    let {
            quest: t,
            sourceQuestContent: n,
            taskDetails: r,
            popoutTargetElementRef: i,
            onGameSheetOpened: o,
            onGameSheetClosed: l,
        } = e,
        { applications: a } = r;
    return (0, s.jsx)(eu.A, {
        quest: t,
        sourceQuestContent: n,
        applications: a ?? [],
        targetElementRef: i,
        onGameSheetOpened: o,
        onGameSheetClosed: l,
        children: (e) =>
            (0, s.jsx)(J.$, {
                variant: "secondary",
                fullWidth: !0,
                size: "sm",
                text: ed.intl.string(ed.t["93PTEs"]),
                ...e,
            }),
    });
}
function eh(e) {
    let { quest: t, ctaLabel: n, onClick: r, questContent: i = d.uF.QUEST_BAR_V2, sourceQuestContent: o } = e,
        l = (0, ec.D)({ quest: t, questContent: i, sourceQuestContent: o, onBeforeClaim: r });
    return (0, s.jsx)(J.$, {
        fullWidth: !0,
        onClick: l,
        text: n ?? ed.intl.string(ed.t.cfY4PE),
        "data-testid": "quest-bar-claim-reward-button",
        variant: "primary",
        size: "sm",
    });
}
function eS(e) {
    let {
            sourceQuestContent: t,
            awaitingConsoleConnections: n,
            hasMadeProgress: i,
            isProgressing: o,
            popoutTargetElementRef: l,
        } = e,
        { quest: a, taskDetails: u } = r.useContext(H.$0),
        { onGameSheetOpen: c, onGameSheetClose: C } = (0, F.H)(),
        [m] = (0, x.Qo)(a, u),
        p = a.userStatus?.completedAt != null,
        f = (0, E.vv)(a),
        h = (0, E.I6)(a),
        S = m !== d.X0.SELECT && !i && !o,
        _ = null;
    return (
        p
            ? (_ = (0, s.jsx)(eh, { quest: a, sourceQuestContent: t }))
            : h
              ? (_ = (0, s.jsx)(el.A, {
                    quest: a,
                    surface: ea.V3.QUEST_BAR_FOOTER,
                    size: "sm",
                    analyticsCtxQuestContent: d.uF.QUEST_BAR_V2,
                    analyticsCtxSourceQuestContent: t,
                }))
              : f
                ? (_ = (0, s.jsx)(eC, { quest: a, sourceQuestContent: t, taskDetails: u }))
                : (0, er.vA)(a)
                  ? (_ = (0, s.jsx)(ep, { quest: a }))
                  : m === d.X0.CONSOLE && n
                    ? (_ = (0, s.jsx)(eE, { quest: a, sourceQuestContent: t }))
                    : S && (0, er.ui)(a)
                      ? (_ = (0, s.jsx)(ef, {
                            quest: a,
                            sourceQuestContent: t,
                            taskDetails: u,
                            popoutTargetElementRef: l,
                            onGameSheetOpened: c,
                            onGameSheetClosed: C,
                        }))
                      : S && (_ = (0, s.jsx)(em, { quest: a, sourceQuestContent: t })),
        null == _ ? null : (0, s.jsx)("div", { className: ex.lO, children: _ })
    );
}
function e_(e) {
    return (0, s.jsx)(eS, { ...e, popoutTargetElementRef: e.parentContainerRef });
}
var eA = n(834730),
    ej = n(639701),
    eg = n(453384),
    eT = n(649480);
let eR = function (e) {
    let { isExpanded: t, contentLocation: n, progressBarRef: i, percentComplete: o, popoutTargetElementRef: l } = e,
        { quest: a, taskDetails: u } = r.useContext(H.$0),
        { onGameSheetOpen: c, onGameSheetClose: C } = (0, F.H)(),
        { hasAlreadyLinked: m, onClickGameTitle: E } = r.useContext(H.SH),
        [p] = (0, x.Qo)(a, u),
        f = (0, ee.VX)(a, m),
        h = (0, ee.tH)({
            quest: a,
            isExpanded: t,
            activeScreen: p,
            sourceQuestContent: d.uF.QUEST_BAR_V2,
            popoutTargetElementRef: l,
            onGameSheetOpened: c,
            onGameSheetClosed: C,
            hasAlreadyLinked: m,
            onClickGameTitle: E,
        });
    return (0, s.jsxs)("div", {
        className: eT.Z0,
        children: [
            (0, s.jsx)(U.dN, {
                inState: n,
                id: "progress-bar",
                ref: i,
                children: (e) =>
                    (0, s.jsx)(eg.A, {
                        ref: e,
                        style: "small",
                        percentComplete: o,
                        size: 42,
                        children: (0, s.jsx)(ej.A, {
                            fullWidth: !0,
                            quest: a,
                            location: M.rE.QUESTS_BAR,
                            questContent: d.uF.QUEST_BAR_V2,
                            autoplay: !1,
                            sourceQuestContent: d.uF.QUEST_BAR_V2,
                        }),
                    }),
            }),
            (0, s.jsxs)("div", {
                className: eT.NZ,
                children: [
                    (0, s.jsx)(U.dN, {
                        inState: n,
                        id: "progress-title",
                        children: (e) =>
                            (0, s.jsx)(eA.E, {
                                ref: e,
                                className: eT.FZ,
                                color: "text-strong",
                                variant: "body-sm/semibold",
                                children: f,
                            }),
                    }),
                    (0, s.jsx)(U.dN, {
                        inState: n,
                        id: "progress-subtitle",
                        isTextTransition: !0,
                        children: (e) =>
                            (0, s.jsx)(eA.E, {
                                ref: e,
                                className: eT.FZ,
                                color: "text-subtle",
                                variant: "body-xs/normal",
                                children: h,
                            }),
                    }),
                ],
            }),
        ],
    });
};
var ey = n(939249),
    ev = n(365199),
    eQ = n(270045),
    eN = n(316878);
function eU() {
    let { quest: e } = r.useContext(H.$0),
        { onCtxMenuOpen: t, onCtxMenuClose: n, onCtxMenuSelect: i } = (0, F.H)(),
        o = (0, x.S5)(e.config.expiresAt);
    return (0, s.jsxs)("div", {
        className: eN.pS,
        children: [
            (0, s.jsx)(eA.E, {
                variant: "footnote/medium",
                className: g()(eN.Uu, eN.TK),
                children: ed.intl.format(ed.t["pX+fmn"], { expirationDate: o }),
            }),
            (0, s.jsx)(eQ.C, {
                onOpen: t,
                onClose: n,
                onSelect: i,
                questContent: d.uF.QUEST_BAR_V2,
                quest: e,
                shouldShowDisclosure: !1,
                showShareLink: !0,
                sourceQuestContent: d.uF.QUEST_BAR_V2,
                children: (e) =>
                    (0, s.jsx)(ey.D, {
                        ...e,
                        className: eN.rb,
                        "aria-label": ed.intl.string(ed.t.DEoVWZ),
                        children: (0, s.jsx)(ev.MoreHorizontalIcon, {
                            size: "md",
                            color: "currentColor",
                            className: g()(eN.Bx, eN.U9),
                        }),
                    }),
            }),
        ],
    });
}
var eB = n(601454);
function eF(e) {
    let { progressBarRef: t } = e,
        { quest: n, taskDetails: i } = r.useContext(H.$0),
        o = n.userStatus?.completedAt != null,
        l = n.userStatus?.enrolledAt != null,
        a = (0, x.I3)(n),
        u = null != a ? a.percentComplete : i.percentComplete,
        c = r.useRef(null);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            o && (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(eU, {}), (0, s.jsx)("div", { className: eB.y })] }),
            l
                ? (0, s.jsx)(eR, {
                      contentLocation: "collapsed",
                      progressBarRef: t,
                      isExpanded: !1,
                      percentComplete: u,
                  })
                : null,
            o &&
                (0, s.jsx)("div", {
                    ref: c,
                    children: (0, s.jsx)(e_, {
                        parentContainerRef: c,
                        awaitingConsoleConnections: !1,
                        hasMadeProgress: !0,
                        isProgressing: !1,
                        sourceQuestContent: d.uF.QUEST_BAR_V2,
                    }),
                }),
        ],
    });
}
function eb() {
    let { quest: e } = r.useContext(H.$0),
        t = e.userStatus?.completedAt != null,
        n = e.userStatus?.enrolledAt != null,
        i = r.useRef(null),
        [o, l] = r.useState(!1);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            t && (0, s.jsx)(Z, { progressBarRef: i, isHovered: o }),
            (0, s.jsx)($.A, {
                layoutVariant: n ? "inset" : "flush",
                backgroundImage: t ? `linear-gradient(90deg, ${O.V1}, ${O.us})` : void 0,
                onMouseEnter: () => l(!0),
                onMouseLeave: () => l(!1),
                children: (0, s.jsx)(eF, { progressBarRef: i }),
            }),
        ],
    });
}
var eV = n(742860),
    eI = n(290136),
    eO = n(646514),
    eq = n(57718),
    eL = n(139210),
    ek = n(393824);
let eP = function (e) {
    let { isFullyExpanded: t, partnerBranding: n } = e,
        i = {
            label: !(function () {
                let [e, t] = r.useState(() => 270 > Y());
                return (
                    r.useEffect(() => {
                        let e = new MutationObserver(() => {
                            t(270 > Y());
                        });
                        return (
                            e.observe(document.body, { attributes: !0, attributeFilter: ["style"] }),
                            () => e.disconnect()
                        );
                    }, []),
                    e
                );
            })(),
        }.label,
        l = (0, o.bG)([I.Ay], () => I.Ay.useReducedMotion),
        { quest: a } = r.useContext(H.$0),
        { expansionSpring: u } = r.useContext(U.PW),
        c = i ? -4 : 6;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(T.animated.div, {
                className: ek.tE,
                style: {
                    transform: (0, T.to)(
                        [
                            u.to({ range: [0, 1], output: [0, 0] }),
                            u.to({ range: [0, 1], output: [0, 82] }),
                            u.to({ range: [0, 1], output: [1, 64 / 48] }),
                        ],
                        (e, t, n) => `translate(${e}px, ${t}px) scale(${n})`,
                    ),
                },
                children: (0, s.jsx)(ej.A, {
                    learnMoreStyle: "text",
                    learnMoreFontSize: t ? 9 : void 0,
                    quest: a,
                    location: M.rE.QUESTS_BAR,
                    questContent: d.uF.QUEST_BAR_V2,
                    autoplay: t && !l,
                    sourceQuestContent: d.uF.QUEST_BAR_V2,
                    style: { width: 48, height: 48, marginRight: 8, borderRadius: 6 },
                }),
            }),
            (0, s.jsxs)(T.animated.div, {
                className: g()(ek.pm, { [ek.nd]: i }),
                style: {
                    transform: (0, T.to)(
                        [u.to({ range: [0, 1], output: [0, -48] }), u.to({ range: [0, 1], output: [0, c] })],
                        (e, t) => `translate(${e}px, ${t}px)`,
                    ),
                },
                children: [
                    (0, s.jsx)("div", { className: g()({ [ek.Iu]: !i }), children: n }),
                    (0, s.jsx)(T.animated.div, {
                        className: g()(ek.ol, { [ek.yZ]: i }),
                        style: { opacity: (0, z.a)(u.to({ range: [0, 1], output: [i ? 1 : 0.7, 0] })) },
                        children: (0, s.jsx)(eA.E, {
                            color: "text-overlay-light",
                            lineClamp: 1,
                            variant: "body-xs/medium",
                            children: ed.intl.string(ed.t["3mgEQf"]),
                        }),
                    }),
                ],
            }),
        ],
    });
};
var eM = n(886030);
let eD = (0, T.animated)(eq.Ay);
function ew() {
    let e = (0, et.wW)(),
        { expansionSpring: t } = r.useContext(U.PW),
        { quest: n } = r.useContext(H.$0),
        {
            onCtxMenuOpen: o,
            onCtxMenuClose: l,
            onCtxMenuSelect: a,
            isExpanded: u,
            isExpansionAnimationComplete: c,
        } = (0, F.H)(),
        x = r.useMemo(() => ({ type: i.p.QUEST, quest: n }), [n]),
        C = r.useCallback(() => {
            (0, S.Zc)(x, {
                content: d.uF.QUEST_BAR_V2,
                ctaContent: k.Cy.OPEN_DISCLOSURE,
                sourceQuestContent: d.uF.QUEST_BAR_V2,
            });
        }, [x]),
        m = r.useCallback(() => {
            (0, es.pu)(n, {
                content: d.uF.QUEST_BAR_HEADER,
                ctaContent: k.Cy.OPEN_GAME_LINK,
                impressionId: e(),
                sourceQuestContent: d.uF.QUEST_BAR_V2,
            });
        }, [e, n]),
        E = u && c,
        p = (0, s.jsx)(ey.D, {
            onClick: m,
            className: g()(eM.vk, { [eM.wm]: E }),
            children: (0, s.jsx)(eD, {
                quest: n,
                withGameTile: !1,
                logotypeClassName: eM.Iu,
                logotypeStyle: {
                    height: 24,
                    maxWidth: 92,
                    transform: (0, T.to)([t.to({ range: [0, 1], output: [1, 1] })], (e) => `scale(${e})`),
                },
            }),
        });
    return (0, s.jsxs)(eL.A, {
        className: eM.Ht,
        children: [
            (0, s.jsx)(eL.h, { className: eM.Tu }),
            (0, s.jsx)(eP, { isFullyExpanded: E, partnerBranding: p }),
            (0, s.jsxs)(eL.h, {
                className: eM.P0,
                children: [
                    (0, s.jsxs)(ey.D, {
                        className: eM.y8,
                        onClick: C,
                        children: [
                            (0, s.jsx)(eA.E, {
                                color: "text-overlay-light",
                                variant: "body-xs/normal",
                                children: ed.intl.string(ed.t.o6FLcF),
                            }),
                            (0, s.jsx)(eI.CircleQuestionIcon, { color: eO.A.colors.WHITE, className: eM.P$ }),
                        ],
                    }),
                    (0, s.jsx)(eQ.C, {
                        onOpen: o,
                        onClose: l,
                        onSelect: a,
                        questContent: d.uF.QUEST_BAR_V2,
                        quest: n,
                        shouldShowDisclosure: !0,
                        showShareLink: !0,
                        sourceQuestContent: d.uF.QUEST_BAR_V2,
                        children: (e) =>
                            (0, s.jsx)(ey.D, {
                                ...e,
                                className: g()(eM.uJ, eM.rb),
                                "aria-label": ed.intl.string(ed.t.DEoVWZ),
                                children: (0, s.jsx)(ev.MoreHorizontalIcon, {
                                    size: "md",
                                    color: "currentColor",
                                    className: g()(eM.Bx, eM.ON),
                                }),
                            }),
                    }),
                ],
            }),
        ],
    });
}
n(801541);
var e$ = n(889137),
    eH = n(417270),
    eW = n(782134),
    eG = n(534514),
    ez = n(825484),
    eY = n(408278),
    eK = n(921853),
    eX = n(409626),
    eZ = n(343559),
    eJ = n(405670),
    e0 = n(112142),
    e1 = n(646917),
    e2 = n(760914),
    e6 = n(576761),
    e7 = n(117634),
    e8 = n(976019),
    e5 = n(442734),
    e9 = n(114046),
    e4 = n(695366),
    e3 = n(438457),
    te = n(144779),
    tt = n(417869),
    tn = n(178540),
    ts = n(780964),
    tr = n(766075),
    ti = n(52093),
    to = n(575630);
function tl(e) {
    let { text: t, quest: n, sourceQuestContent: r } = e,
        o = (0, et.wW)();
    return (0, s.jsx)(ey.D, {
        className: to.Z0,
        onClick: () => {
            ((0, e3.r)({
                type: te.F.CLICK_INTERNAL,
                adCreativeType: i.p.QUEST,
                adCreativeId: n.id,
                questContentCTA: k.Cy.VIEW_CONSOLE_CONNECTIONS_LINK,
                surfaceId: d.uF.QUEST_BAR_V2,
                sourceQuestContent: r,
                impressionId: o(),
            }),
                (0, tr.openUserSettings)(ts.X.CONNECTIONS_CATEGORY));
        },
        children: (0, s.jsx)(eA.E, { "aria-label": t, color: "none", variant: "footnote/normal", children: t }),
    });
}
function ta(e) {
    let { xboxAndPlaystationAccounts: t, quest: n, sourceQuestContent: r } = e;
    return t.length > 0
        ? (0, s.jsx)(tl, { text: ed.intl.string(ed.t["qiS+xj"]), quest: n, sourceQuestContent: r })
        : null;
}
function tu(e) {
    return (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(ti.L, { children: ed.intl.string(ed.t.EJFSvD) }), (0, s.jsx)(ta, { ...e })],
    });
}
var tc = n(607886);
function td(e) {
    return (0, s.jsx)(eA.E, {
        className: tc.eW,
        color: "text-muted",
        variant: "footnote/normal",
        children: e.children,
    });
}
function tx(e) {
    let { quest: t, useReducedMotion: n } = e,
        o = (0, h.H1)(t.id, d.uF.QUEST_BAR_V2, d.uF.QUEST_BAR_V2),
        l = (0, h.Xf)({ useReducedMotion: n }),
        a = (0, et.wW)(),
        u = (0, tn.O)((e) => e.getErrorHints(t.id)),
        { startingConsoleQuest: c, startConsoleQuest: C } = (0, x.Wj)({
            questId: t.id,
            beforeRequest: () => {
                ((0, e3.r)({
                    type: te.F.CLICK_INTERNAL,
                    adCreativeType: i.p.QUEST,
                    adCreativeId: t.id,
                    questContentCTA: k.Cy.DEFIBRILLATOR,
                    surfaceId: d.uF.QUEST_BAR_V2,
                    sourceQuestContent: d.uF.QUEST_BAR_V2,
                    impressionId: a(),
                }),
                    l.startAnimation());
            },
            afterRequest: l.stopAnimation,
        }),
        { header: m, renderBody: E } = r.useMemo(() => {
            let e = u.length > 0,
                n = t.config.messages.gameTitle;
            return {
                header: e
                    ? (0, er.ui)(t)
                        ? ed.intl.string(ed.t.N33EuL)
                        : ed.intl.formatToPlainString(ed.t["28Ql27"], { gameTitle: n })
                    : (0, er.ui)(t)
                      ? ed.intl.string(ed.t.YstzGO)
                      : ed.intl.formatToPlainString(ed.t.gX0Qcx, { gameTitle: n }),
                renderBody: e
                    ? function () {
                          return (0, s.jsx)(s.Fragment, {
                              children: u.map((e, n) => {
                                  if (e.type === e9._.EXPIRED_CREDENTIAL) {
                                      let r = tt.A.getAccount(e.connected_account_id, e.connected_account_type),
                                          i = (0, es.IG)(e),
                                          o = (0, es.$J)(e);
                                      return (0, s.jsx)(
                                          td,
                                          {
                                              children: ed.intl.format(i, {
                                                  account_name: r?.name,
                                                  onClick: () => {
                                                      (0, es.v0)(
                                                          { quest: t, platformType: o },
                                                          {
                                                              content: d.uF.QUEST_BAR,
                                                              ctaContent: k.Cy.DEFIBRILLATOR_RECONNECT_CONSOLE,
                                                              impressionId: a(),
                                                              sourceQuestContent: d.uF.QUEST_BAR_V2,
                                                          },
                                                      );
                                                  },
                                              }),
                                          },
                                          n,
                                      );
                                  }
                                  return (0, s.jsx)(td, { children: e.message }, n);
                              }),
                          });
                      }
                    : () =>
                          (0, s.jsx)(eA.E, {
                              className: tc.eW,
                              color: "text-muted",
                              variant: "footnote/normal",
                              children: (0, er.ui)(t)
                                  ? ed.intl.string(ed.t.bUyEZZ)
                                  : ed.intl.format(ed.t.GXqvC1, { gameTitle: n }),
                          }),
            };
        }, [u, t, a]);
    return (0, s.jsxs)("div", {
        className: tc.XK,
        children: [
            (0, s.jsxs)("div", {
                className: tc.oK,
                children: [
                    (0, s.jsx)(e4.CircleErrorIcon, {
                        size: "custom",
                        color: "currentColor",
                        className: 0 === u.length ? tc.pH : tc.JA,
                        width: 16,
                        height: 16,
                    }),
                    (0, s.jsx)(eA.E, { variant: "body-xs/medium", children: m }),
                    (0, s.jsx)(ey.D, {
                        className: g()(tc.w, { [tc.r9]: c }),
                        onClick: () => C(),
                        children: l.render(),
                    }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: g()({ [tc.Iu]: c }),
                children: [E(), 0 === u.length ? null : (0, s.jsx)(td, { children: o })],
            }),
        ],
    });
}
let tC = function (e) {
    let { quest: t, taskDetails: n } = e,
        i = (0, o.bG)([I.Ay], () => I.Ay.useReducedMotion),
        l = (0, x.Du)(),
        a = r.useMemo(
            () => (0, es.bg)(t).filter((e) => null != l.xboxAndPlaystationAccounts.find((t) => t.type === e)),
            [l.xboxAndPlaystationAccounts, t],
        ),
        {
            steps: u,
            hasConnectedAccounts: c,
            isProgressingQuestForLaunchedGame: C,
            isQuestComplete: m,
        } = r.useMemo(() => {
            let e = a.length > 0,
                r = e && (0, E.YL)(t),
                i = t.config.messages.gameTitle,
                o = t.userStatus?.completedAt != null;
            return {
                steps: [
                    {
                        renderContent: () => (0, s.jsx)(tu, { ...l, quest: t, sourceQuestContent: d.uF.QUEST_BAR_V2 }),
                        isComplete: e || r || o,
                    },
                    {
                        renderContent: () =>
                            (0, s.jsx)(ti.L, {
                                children: (0, er.ui)(t)
                                    ? ed.intl.string(ed.t["5tXqFe"])
                                    : ed.intl.formatToPlainString(ed.t["+8JB6Y"], { gameTitle: i }),
                            }),
                        isComplete: r || o,
                    },
                    {
                        renderContent: () =>
                            (0, s.jsx)(ti.L, {
                                children: ed.intl.formatToPlainString(ed.t.HhfrYS, { numMinutes: n.targetMinutes }),
                            }),
                        isComplete: o,
                    },
                ],
                hasConnectedAccounts: e,
                isProgressingQuestForLaunchedGame: r,
                isQuestComplete: o,
            };
        }, [l, a.length, t, n.targetMinutes]);
    return (0, s.jsx)(ti.A, {
        heading: ed.intl.string(ed.t.UPWlJu),
        steps: u,
        children: c && !C && !m && (0, s.jsx)(tx, { useReducedMotion: i, quest: t }),
    });
};
(n(134528), n(947204));
var tm = n(934225);
function tE(e) {
    let { header: t, children: n } = e;
    return (0, s.jsxs)("div", {
        className: tm.Nr,
        children: [
            (0, s.jsxs)("div", {
                className: tm.wx,
                children: [
                    (0, s.jsx)(e4.CircleErrorIcon, {
                        size: "custom",
                        color: "currentColor",
                        className: tm.Kk,
                        width: 16,
                        height: 16,
                    }),
                    (0, s.jsx)(eG.D, { color: "text-default", variant: "heading-xs/medium", children: t }),
                ],
            }),
            (0, s.jsx)(eA.E, { color: "text-muted", variant: "body-xs/normal", className: tm.r2, children: n }),
        ],
    });
}
let tp = function (e) {
    let { quest: t } = e,
        n = (0, x.aC)(t);
    if (0 === n.length) return null;
    let r = n.at(0);
    return r === ed.intl.string(ed.t.BV6xDm)
        ? (0, s.jsx)(tE, { header: ed.intl.string(ed.t.onh6ct), children: ed.intl.string(ed.t.arVHRA) })
        : r === ed.intl.string(ed.t.MFGxFM)
          ? (0, s.jsx)(tE, { header: ed.intl.string(ed.t.JPihZA), children: ed.intl.string(ed.t.MFGxFM) })
          : null;
};
var tf = n(31300),
    th = n(687966),
    tS = n(35558);
let t_ = function (e) {
    let { onDesktop: t, onConsole: n } = e;
    return (0, s.jsxs)(ez.e, {
        direction: "vertical",
        fullWidth: !0,
        className: tS.G,
        size: "sm",
        children: [
            (0, s.jsx)(J.$, {
                onClick: t,
                text: ed.intl.string(ed.t["QXc01+"]),
                variant: "secondary",
                icon: tf.ScreenIcon,
                iconPosition: "end",
            }),
            (0, s.jsx)(J.$, {
                onClick: n,
                text: ed.intl.string(ed.t["8lAfuB"]),
                variant: "secondary",
                icon: th.GameControllerIcon,
                iconPosition: "end",
            }),
        ],
    });
};
var tA = n(333949),
    tj = n(158247);
function tg(e) {
    let { onClick: t } = e,
        { quest: n } = r.useContext(H.$0),
        i = (0, o.bG)([I.Ay], () => I.Ay.useReducedMotion),
        [l, a] = r.useState(!1),
        u = (0, e2.tW)(n, e2.fY.QUEST_BAR_HERO_VIDEO, void 0, !1),
        c = (0, e2.tW)(n, e2.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1),
        d = (0, eJ.Kr)((e) => e.getVideoProgressState)(n.id),
        x = n.userStatus?.completedAt != null && d === eJ.K2.COMPLETED,
        C = !x && (!i || l);
    return (0, s.jsxs)(ey.D, {
        className: tj.QO,
        onClick: t,
        onMouseEnter: function () {
            i && !l && a(!0);
        },
        onMouseLeave: function () {
            i && l && a(!1);
        },
        children: [
            null != c &&
                (0, s.jsx)(p._M, {
                    id: "QuestBarContentExpanded_videoThumbnail",
                    children: (e) => (0, s.jsx)("img", { ref: e, alt: "", src: c.url, className: tj.Ue }),
                }),
            null != u
                ? (0, s.jsx)(p._M, {
                      id: "QuestBarContentExpanded_video",
                      children: (e) =>
                          (0, s.jsx)(tA.X, {
                              ref: e,
                              isHovered: l,
                              autoPlay: !1,
                              asset: u,
                              poster: c?.url,
                              className: g()(tj.NM, { [tj.Gc]: C }),
                          }),
                  })
                : null,
            (0, s.jsx)("div", {
                className: tj.LT,
                children: x
                    ? (0, s.jsx)(eH.RetryIcon, { color: eO.A.colors.WHITE, className: tj.t })
                    : (0, s.jsx)(eW.PlayIcon, { color: eO.A.colors.WHITE, className: tj.t }),
            }),
        ],
    });
}
function tT(e) {
    let { quest: t } = e;
    return (0, s.jsx)(ej.A, {
        className: g()(tj.Qq, tj.wq),
        learnMoreStyle: "text",
        quest: t,
        location: M.rE.QUESTS_BAR,
        questContent: d.uF.QUEST_BAR_V2,
        sourceQuestContent: d.uF.QUEST_BAR_V2,
    });
}
function tR(e) {
    let { isCtaInteractable: t, containerRef: n, onAcceptQuest: i } = e,
        { quest: l, taskDetails: a } = r.useContext(H.$0),
        { onGameSheetOpen: u, onGameSheetClose: c } = (0, F.H)(),
        { expansionSpring: C } = r.useContext(U.PW),
        m = r.useRef(null),
        E = (0, o.bG)([v.A], () => v.A.isEnrolling(l.id), [l]),
        f = r.useMemo(() => (0, e2.tW)(l, e2.fY.QUEST_BAR_HERO), [l]),
        h = (0, ee.NA)({ quest: l }),
        _ = r.useMemo(() => (0, e2.tW)(l, e2.fY.HERO_IMAGE), [l]),
        A = r.useMemo(() => (null == _ ? {} : { backgroundImage: `url(${_.url})` }), [_]),
        j = e0.t.useConfig({ location: M.rE.QUESTS_BAR }),
        R = (0, ee.mU)({
            quest: l,
            location: M.rE.QUESTS_BAR,
            taskDetails: a,
            sourceQuestContent: d.uF.QUEST_BAR_V2,
            popoutTargetElementRef: m,
            onGameSheetOpened: u,
            onGameSheetClosed: c,
            gameProfileSource: eX.GameProfileSources.QuestBar,
        }),
        y = (0, ea.Pd)(l),
        Q = (0, e1.z)(),
        N = (0, x.SD)(l, Q),
        B = Q === e6.MA.NITRO && N;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)("div", {
                ref: m,
                children: (0, s.jsxs)("div", {
                    className: tj.do,
                    ref: n,
                    children: [
                        (0, s.jsxs)("div", {
                            className: tj.zH,
                            children: [
                                (0, s.jsx)(tT, { quest: l }),
                                (0, s.jsx)(eG.D, {
                                    className: tj.DD,
                                    color: "text-strong",
                                    variant: "heading-sm/medium",
                                    children: ed.intl.format(ed.t.EQa7os, { questName: l.config.messages.questName }),
                                }),
                                (0, s.jsxs)("div", {
                                    className: tj.zf,
                                    children: [
                                        (0, s.jsx)(eA.E, { className: tj.h_, variant: "body-xs/normal", children: R }),
                                        N && (0, s.jsx)(e5.e, { questId: l.id, orbMultiplierEligibility: Q }),
                                    ],
                                }),
                            ],
                        }),
                        (0, s.jsx)("div", {
                            className: g()(tj.lO, { [tj._o]: !t }),
                            "data-testid": "quest-bar-enroll-cta",
                            children: (0, s.jsx)(ez.e, {
                                direction: "horizontal",
                                fullWidth: !0,
                                wrap: !1,
                                children:
                                    j.enabled && y === ea.UA.UNENROLLED && j.enabledQuestStates.has(ea.UA.UNENROLLED)
                                        ? (0, s.jsx)(el.A, {
                                              quest: l,
                                              surface: ea.V3.QUEST_BAR_FOOTER,
                                              size: "sm",
                                              analyticsCtxQuestContent: d.uF.QUEST_BAR_V2,
                                              analyticsCtxSourceQuestContent: d.uF.QUEST_BAR_V2,
                                          })
                                        : (0, s.jsx)(J.$, {
                                              onClick: i,
                                              variant: "primary",
                                              loading: E,
                                              text: h,
                                              size: "sm",
                                              icon: (0, S.Oz)(l),
                                              fullWidth: !0,
                                          }),
                            }),
                        }),
                    ],
                }),
            }),
            (0, s.jsx)(e7.A, { visible: B, glow: !0, className: tj.Ph }),
            null != _ &&
                (0, s.jsx)(T.animated.div, {
                    className: tj.AK,
                    style: { opacity: (0, z.a)(C.to([0, 1], [1, 0])) },
                    children: (0, s.jsx)("div", { className: g()(tj.LC, tj.Ge), style: A }),
                }),
            (0, s.jsxs)(T.animated.div, {
                className: tj.IC,
                style: {
                    backdropFilter: (0, z.Q)(C.to([0, 1], [5, 0]).to((e) => `blur(${e}px)`)),
                    filter: (0, z.Q)(C.to([0, 1], [0.8, 1]).to((e) => `brightness(${e})`)),
                },
                children: [
                    f.isAnimated
                        ? (0, s.jsx)(p._M, {
                              id: "QuestBarContentExpanded_heroAnimated",
                              children: (e) => (0, s.jsx)(tA.X, { ref: e, autoPlay: !0, asset: f, className: tj.LO }),
                          })
                        : (0, s.jsx)(p._M, {
                              id: "QuestBarContentExpanded_heroStatic",
                              children: (e) => (0, s.jsx)("img", { ref: e, alt: "", className: tj.LO, src: f.url }),
                          }),
                    (0, s.jsx)("div", { className: tj.tV }),
                ],
            }),
        ],
    });
}
function ty(e) {
    let { quest: t } = e,
        { hasAlreadyLinked: n, onClickGameTitle: i } = r.useContext(H.SH);
    return !0 !== n ? null : (0, s.jsx)(e8.A, { quest: t, hasAlreadyLinked: n, onClickGameTitle: i });
}
function tv(e) {
    let { activeScreen: t, selectPlatform: n } = e,
        { quest: i, taskDetails: o } = r.useContext(H.$0);
    return (0, e$.YW)(t)
        .with(d.X0.SELECT, () => (0, s.jsx)(t_, { onConsole: () => n(M.fO.CONSOLE), onDesktop: () => n(M.fO.DESKTOP) }))
        .with(d.X0.DESKTOP, () => ((0, E.I6)(i) ? (0, s.jsx)(ty, { quest: i }) : (0, s.jsx)(tp, { quest: i })))
        .with(d.X0.CONSOLE, () => (0, s.jsx)(tC, { quest: i, taskDetails: o }))
        .exhaustive();
}
function tQ(e) {
    let { parentContainerRef: t } = e,
        { quest: n, taskDetails: i } = r.useContext(H.$0),
        [o, l, a] = (0, x.Qo)(n, i),
        u = i.percentComplete > 0,
        c = (0, x.Vn)(n),
        C = (0, x.RR)({ quest: n }),
        m = l.length > 1 && !u && !c;
    return (0, s.jsxs)(B.T, {
        children: [
            (0, s.jsx)(tv, { activeScreen: o, selectPlatform: a }),
            o !== d.X0.SELECT &&
                (0, s.jsxs)("div", {
                    className: tj.oG,
                    children: [
                        m &&
                            (0, s.jsx)(eY.K, {
                                size: "sm",
                                "aria-label": ed.intl.string(ed.t["13/7kX"]),
                                onClick: () => a(null),
                                icon: eK.ChevronSmallLeftIcon,
                                variant: "secondary",
                            }),
                        (0, s.jsx)(e_, {
                            awaitingConsoleConnections: C,
                            parentContainerRef: t,
                            hasMadeProgress: u,
                            isProgressing: c,
                            sourceQuestContent: d.uF.QUEST_BAR_V2,
                        }),
                    ],
                }),
        ],
    });
}
function tN(e) {
    let { parentContainerRef: t } = e,
        { quest: n, taskDetails: i } = r.useContext(H.$0),
        o = i.percentComplete > 0,
        l = (0, x.Vn)(n),
        a = (0, x.Hv)() && n.userStatus?.completedAt == null,
        u = r.useCallback(() => {
            if (a) {
                ((0, m.Y5)({
                    questId: n.id,
                    questContent: d.uF.QUEST_BAR_V2,
                    questContentCTA: k.Cy.QUEST_ACCESS_SUSPENDED,
                    sourceQuestContent: d.uF.QUEST_BAR_V2,
                }),
                    (0, S.FS)());
                return;
            }
            (0, S.d5)({
                quest: n,
                questContent: d.uF.QUEST_BAR_V2,
                sourceQuestContent: d.uF.QUEST_BAR_V2,
                sourceQuestContentCTA: k.Cy.QUEST_BAR_VIDEO_QUEST_PREVIEW,
            });
        }, [n, a]);
    return (0, s.jsxs)(B.T, {
        children: [
            (0, s.jsx)(tg, { onClick: u }),
            (0, s.jsx)(e_, {
                parentContainerRef: t,
                awaitingConsoleConnections: !1,
                hasMadeProgress: o,
                isProgressing: l,
                sourceQuestContent: d.uF.QUEST_BAR_V2,
            }),
        ],
    });
}
function tU(e) {
    let { parentContainerRef: t } = e,
        { quest: n, taskDetails: i } = r.useContext(H.$0),
        o = i.percentComplete > 0,
        l = (0, x.Vn)(n);
    return (0, s.jsx)(B.T, {
        children: (0, s.jsx)(e_, {
            parentContainerRef: t,
            awaitingConsoleConnections: !1,
            hasMadeProgress: o,
            isProgressing: l,
            sourceQuestContent: d.uF.QUEST_BAR_V2,
        }),
    });
}
function tB(e) {
    let { parentContainerRef: t } = e,
        { quest: n } = r.useContext(H.$0);
    return (0, E.t)({ quest: n }) || (0, E.g5)(n) || (0, E.fE)({ quest: n }) || (0, E.I6)(n)
        ? (0, s.jsx)(tQ, { parentContainerRef: t })
        : (0, E.vv)(n)
          ? (0, s.jsx)(tN, { parentContainerRef: t })
          : (0, s.jsx)(tU, { parentContainerRef: t });
}
function tF(e) {
    let { containerRef: t } = e,
        { quest: n, taskDetails: i } = r.useContext(H.$0),
        { expansionSpring: o } = r.useContext(U.PW),
        l = r.useRef(null),
        a = r.useRef(null),
        u = (0, x.I3)(n),
        c = null != u ? u.percentComplete : i.percentComplete;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(T.animated.div, {
                className: g()(tj.tv, tj.ag),
                style: {
                    backgroundImage: `linear-gradient(90deg, ${O.V1}, ${O.us})`,
                    opacity: (0, z.a)(o.to({ range: [0, 1], output: [1, 0] })),
                },
            }),
            (0, s.jsxs)("div", {
                className: tj.Fe,
                ref: (e) => {
                    ("function" == typeof t ? t(e) : null != t && (t.current = e), null != e && (a.current = e));
                },
                children: [
                    (0, s.jsx)(eU, {}),
                    (0, s.jsx)("div", { className: tj.yF }),
                    (0, s.jsx)(Z, { progressBarRef: l, isHovered: !1 }),
                    (0, s.jsx)(eR, {
                        contentLocation: "expanded",
                        progressBarRef: l,
                        isExpanded: !0,
                        percentComplete: c,
                        popoutTargetElementRef: a,
                    }),
                    (0, s.jsx)(tB, { parentContainerRef: a }),
                ],
            }),
            (0, s.jsx)("div", {
                className: g()(tj.tv, tj.Sx),
                style: { backgroundImage: `linear-gradient(90deg, ${O.V1}, ${O.us})` },
            }),
        ],
    });
}
function tb() {
    let { quest: e } = r.useContext(H.$0),
        { isExpanded: t, isExpansionAnimationComplete: n } = (0, F.H)(),
        { expandedContentRef: i } = r.useContext(U.PW),
        { launchInGameActivity: o } = (0, x.zW)(e),
        l = (0, er.vA)(e),
        a = r.useCallback(async () => {
            let t = l ? k.Cy.START_QUEST : k.Cy.ACCEPT_QUEST;
            (await (async function (e, t, n, s) {
                (0, E.vv)(e)
                    ? await (0, S.e0)(e, {
                          questContent: t,
                          questContentCTA: n,
                          sourceQuestContent: s,
                          sourceQuestContentCTA: n,
                      })
                    : (0, er.vA)(e)
                      ? await (0, eZ.Oy)(e.id, { questContent: t, questContentCTA: n, sourceQuestContent: s })
                      : (0, eZ.Oy)(e.id, { questContent: t, questContentCTA: n, sourceQuestContent: s });
            })(e, d.uF.QUEST_BAR_V2, t, d.uF.QUEST_BAR_V2),
                l && o());
        }, [e, o, l]);
    return e.userStatus?.enrolledAt != null
        ? (0, s.jsx)(tF, { containerRef: i })
        : (0, s.jsx)(tR, { isCtaInteractable: !t || n, containerRef: i, onAcceptQuest: a });
}
function tV() {
    let {
            expansionSpring: e,
            animatedComponentProps: t,
            recalculateAnimationPositions: n,
            mountPoints: i,
        } = r.useContext(U.PW),
        { isExpanded: o } = (0, F.H)();
    return (
        r.useEffect(() => {
            n();
        }, [n, o]),
        (0, s.jsx)("div", {
            style: {
                overflow: "hidden",
                pointerEvents: "none",
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 5,
            },
            children: t.map((t) => {
                let { id: n, collapsedLeft: r, expandedLeft: o, collapsedTop: l, expandedTop: a, width: u } = t,
                    c = i.get(n);
                return (0, s.jsx)(
                    T.animated.div,
                    {
                        ref: c,
                        style: {
                            zIndex: 2,
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: u,
                            transform: (0, T.to)(
                                [e.to({ range: [0, 1], output: [r, o] }), e.to({ range: [0, 1], output: [l, a] })],
                                (e, t) => `translate(${e}px, ${t}px)`,
                            ),
                        },
                    },
                    n,
                );
            }),
        })
    );
}
function tI() {
    let { quest: e } = r.useContext(H.$0),
        t = e.userStatus?.enrolledAt != null;
    return (0, s.jsx)(eV.A, {
        layoutVariant: t ? "inset" : "flush",
        header: (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(tV, {}), !t && (0, s.jsx)(ew, {})] }),
        children: (0, s.jsx)(tb, {}),
    });
}
var tO = n(731738),
    tq = n(913379),
    tL = n(260364);
function tk(e) {
    let {
        adCreativeId: t,
        adCreativeType: n,
        reportRenderingFailure: s,
        hasAssetsError: o,
        isEligibleForQuests: l,
        isQuestBarVisible: a,
        isVisibilityAnimationAtRest: u,
        isLoadingAssets: c,
        currentQuestVisibleReason: x,
        shouldShowQuestBar: C,
        isQuestEnrollmentBlocked: m,
    } = e;
    (r.useEffect(() => {
        o &&
            (s("asset_loading_error"),
            tq.A.increment({
                name: tO.K.QUEST_CONTENT_RENDERING_FAILURE,
                tags: [
                    `ad_creative_id:${t}`,
                    `ad_creative_type:${i.p[n]}`,
                    `quest_content:${(0, k.jO)(d.uF.QUEST_BAR)}`,
                    "reason:asset_loading_error",
                ],
            }));
    }, [o, t, n, s]),
        r.useEffect(() => {
            l || s("not_eligible_for_quest");
        }, [l, s]),
        r.useEffect(() => {
            a || !u || c || s(x);
        }, [a, u, c, x, s]),
        r.useEffect(() => {
            ((!C || m) && tL.A.clearTracking(), a && u && !c && !o && l && tL.A.stopTracking(t));
        }, [C, m, a, u, c, o, l, t]));
}
function tP(e) {
    let { isExpanded: t, questId: n } = e;
    return (
        (0, x.H6)({
            mode: t ? M.fP.EXPANDED : M.fP.COLLAPSED,
            questContent: d.uF.QUEST_BAR_V2,
            questId: n,
            sourceQuestContent: d.uF.QUEST_BAR_V2,
        }),
        null
    );
}
function tM() {
    return (
        r.useEffect(() => {
            u.trigger();
        }, []),
        null
    );
}
function tD(e) {
    let { quest: t } = r.useContext(H.$0),
        { isQuestBarVisible: n, reason: s } = (0, h.TQ)({ quest: t }),
        { impressionRef: i } = e;
    return (
        tk({
            reportRenderingFailure: r.useCallback(
                (e) => {
                    (0, m.DX)({
                        questId: t.id,
                        questContent: d.uF.QUEST_BAR,
                        sourceQuestContent: d.uF.QUEST_BAR_V2,
                        reason: e,
                        impressionId: i.current?.getId(),
                    });
                },
                [t.id, i],
            ),
            currentQuestVisibleReason: s,
            shouldShowQuestBar: n,
            ...e,
        }),
        null
    );
}
function tw(e) {
    let { isExpanded: t } = e,
        { quest: n } = r.useContext(H.$0);
    return (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(tP, { questId: n.id, isExpanded: t }), (0, s.jsx)(tM, {})],
    });
}
function t$(e) {
    let { children: t, overrideVisibility: n } = e,
        { quest: i } = r.useContext(H.$0),
        o = (0, x.UH)(i);
    return (0, s.jsx)(f.Z, {
        questOrQuests: i,
        questContent: d.uF.QUEST_BAR_V2,
        overrideVisibility: n,
        onImpression: o,
        sourceQuestContent: d.uF.QUEST_BAR_V2,
        children: t,
    });
}
function tH(e) {
    let { quest: t } = e,
        n = r.useMemo(() => (0, E.vv)(t), [t]),
        o = t.userStatus?.completedAt != null,
        l = (0, x.fc)(t),
        a = r.useMemo(() => ({ type: i.p.QUEST, quest: t }), [t]);
    return (
        r.useEffect(() => {
            n && (0, S.l9)();
        }, [n]),
        (0, s.jsx)(H.aV, {
            quest: t,
            taskDetails: l,
            children: (0, s.jsx)(w, {
                creative: a,
                collapsedContent: (0, s.jsx)(eb, {}, o ? "collapsed-with-rewards" : "collapsed-without-rewards"),
                expandedContent: (0, s.jsx)(tI, {}),
                renderCreativeContext: (e) => (0, s.jsx)(H.l, { quest: t, children: e }),
                StateTracker: tD,
                ModeChangeTracker: tw,
                ImpressionTracker: t$,
            }),
        })
    );
}
function tW(e) {
    let t = (0, H.o5)(),
        n = (0, H.Q8)(t),
        s = (0, h.gJ)(n),
        { impressionRef: o } = e;
    return (
        tk({
            reportRenderingFailure: r.useCallback(
                (e) => {
                    (0, m.iE)({
                        adContentId: t.id,
                        adCreativeType: i.p.BOUNTY,
                        questContent: d.uF.QUEST_BAR,
                        sourceQuestContent: d.uF.QUEST_BAR_V2,
                        reason: e,
                        impressionId: o.current?.getId(),
                    });
                },
                [t.id, o],
            ),
            currentQuestVisibleReason: null,
            shouldShowQuestBar: s,
            ...e,
        }),
        null
    );
}
function tG(e) {
    let { isExpanded: t } = e,
        n = (0, H.o5)();
    return (
        (0, x.H6)({
            mode: t ? M.fP.EXPANDED : M.fP.COLLAPSED,
            questContent: d.uF.QUEST_BAR_V2,
            adCreativeType: i.p.BOUNTY,
            adContentId: n.id,
            sourceQuestContent: d.uF.QUEST_BAR_V2,
        }),
        (0, s.jsx)(tM, {})
    );
}
function tz(e) {
    let { children: t, overrideVisibility: n } = e,
        r = (0, H.o5)();
    return (0, s.jsx)(f.Z, {
        adContentId: r.id,
        adCreativeType: i.p.BOUNTY,
        questContent: d.uF.QUEST_BAR_V2,
        overrideVisibility: n,
        sourceQuestContent: d.uF.QUEST_BAR_V2,
        children: t,
    });
}
function tY(e) {
    let { bounty: t } = e,
        n = (0, H.Q8)(t);
    return (0, s.jsx)(H.fF, {
        bounty: t,
        children: (0, s.jsx)(w, {
            creative: n,
            collapsedContent: (0, s.jsx)($.A, { layoutVariant: "flush", children: (0, s.jsx)(_.A, {}) }),
            expandedContent: (0, s.jsx)(A.A, {}),
            StateTracker: tW,
            ModeChangeTracker: tG,
            ImpressionTracker: tz,
        }),
    });
}
function tK(e) {
    let { noFillDecision: t } = e,
        n = (0, o.bG)([c.A], () => c.A.hasLayers());
    function r(e) {
        return (0, s.jsx)("div", { ref: e, "aria-hidden": !0, className: D.ui });
    }
    return null == t.adContentId
        ? r()
        : (0, s.jsx)(f.Z, {
              adContentId: t.adContentId,
              adCreativeType: i.p.NO_FILL,
              noFillDecision: t,
              questContent: d.uF.QUEST_BAR_V2,
              overrideVisibility: !n,
              sourceQuestContent: d.uF.QUEST_BAR_V2,
              children: (e) => r(e),
          });
}
let tX =
    221552 == n.j
        ? function () {
              let e = (0, h.wo)(),
                  t = (0, C.A)(d.p9.DESKTOP_ACCOUNT_PANEL_AREA, "useNoFillAd");
              switch (e.type) {
                  case i.p.QUEST: {
                      let { quest: t } = e;
                      return (0, s.jsx)(
                          p.y5,
                          {
                              source: M.rE.QUESTS_BAR,
                              adCreativeId: t.id,
                              adCreativeType: i.p.QUEST,
                              children: (0, s.jsx)(tH, { quest: t }),
                          },
                          t.id,
                      );
                  }
                  case i.p.BOUNTY: {
                      let { bounty: t } = e;
                      return (0, s.jsx)(
                          p.y5,
                          {
                              source: M.rE.QUESTS_BAR,
                              adCreativeId: t.id,
                              adCreativeType: i.p.BOUNTY,
                              children: (0, s.jsx)(tY, { bounty: t }),
                          },
                          t.id,
                      );
                  }
                  case i.p.PLAYABLE:
                      return null;
                  case i.p.NO_FILL:
                      return null != t ? (0, s.jsx)(tK, { noFillDecision: t }, t.decisionId) : null;
              }
          }
        : null;
