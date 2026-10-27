(n.r(t), n.d(t, { QuestBarBountyContent: () => tZ, QuestBarQuestContent: () => tz, default: () => t0 }));
var s = n(477900),
    r = n(582128),
    i = n(323889),
    a = n(17928),
    l = n(840251),
    o = n(688151);
let u = new l.E([], o.$G.QUEST_BAR_RENDERED, { location: "quest bar rendered" });
var c = n(186111),
    d = n(738822),
    x = n(77870),
    C = n(466242),
    m = n(561844),
    p = n(792620),
    E = n(557637),
    f = n(657792),
    h = n(201805),
    g = n(617986),
    A = n(628088),
    _ = n(174232),
    S = n(503698),
    j = n.n(S),
    T = n(399513),
    v = n(475743),
    R = n(494280),
    y = n(859703),
    Q = n(971276),
    N = n(851936),
    U = n(568329),
    B = n(717421),
    F = n(765671),
    V = n(775602);
let b = r.createContext({ springConfig: {}, isExpanded: !1 });
function I(e) {
    let t = r.useMemo(
        () => ({ springConfig: e.springConfig, isExpanded: e.isExpanded }),
        [e.springConfig, e.isExpanded],
    );
    return (0, s.jsx)(b.Provider, { value: t, children: e.children });
}
function O(e) {
    let { children: t } = e,
        { springConfig: n, isExpanded: i } = r.useContext(b),
        l = (0, a.bG)([V.Ay], () => V.Ay.useReducedMotion),
        { ref: o, height: u = null } = (0, F.Ay)(),
        c = (0, v.Ay)(u) ?? null,
        [{ height: d }, x] = (0, B.z)(() => ({ from: { height: 0 }, config: n }));
    return (
        r.useLayoutEffect(() => {
            null !== u && x({ height: u, immediate: !i || l || null === c });
        }, [u, x, i, l, c]),
        (0, s.jsx)(T.animated.div, {
            style: { height: null === c ? "auto" : d, overflow: "hidden" },
            children: (0, s.jsx)("div", { style: { overflow: "hidden" }, ref: o, children: t }),
        })
    );
}
var q = n(241762),
    L = n(717695),
    k = n(272111),
    P = n(621466),
    D = n(192308),
    w = n(590202),
    M = n(652215),
    $ = n(190107),
    H = n(920690);
function W(e) {
    let {
            creative: t,
            collapsedContent: n,
            expandedContent: l,
            ImpressionTracker: o,
            ModeChangeTracker: u,
            StateTracker: x,
            renderCreativeContext: C,
        } = e,
        {
            collapsedHeight: p,
            canExpand: f,
            canCollapse: g,
            isEnrolled: A,
            springConfig: _,
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
                        springConfig: t ? $.ZV : $.Ko,
                    };
                }
                case i.p.BOUNTY:
                case i.p.PLAYABLE:
                    return { collapsedHeight: 70, canExpand: !0, canCollapse: !0, isEnrolled: !1, springConfig: $.Ko };
            }
        })(t),
        S = (0, h.gJ)(t),
        F = (0, R.Yh)(t),
        b = (0, N.L)({ quest: (0, R.Ys)(t), location: $.rE.QUESTS_BAR }),
        O = (0, Q.s)(),
        k = (0, a.bG)([y.A], () => null != y.A.questEnrollmentBlockedUntil),
        W = (0, a.bG)([c.A], () => c.A.hasLayers()),
        G = r.useRef(null),
        { hasError: z, isLoading: Y } = (0, E.zT)(),
        K = r.useContext(L.Z),
        X = K || (O && S && !Y && !k),
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
                i = (0, a.bG)([V.Ay], () => V.Ay.useReducedMotion),
                [l, o] = r.useState(!1),
                [u, c] = r.useState(!0),
                [d, x] = r.useState(!0),
                C = r.useRef(n),
                m = r.useCallback(
                    (e) => {
                        (!t && e) || (l !== e && (c(!1), o(e)));
                    },
                    [t, l],
                ),
                p = r.useCallback(() => {
                    m(!0);
                }, [m]),
                [{ expansionSpring: E }, f] = (0, B.z)(() => ({
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
            let { visibilitySpring: h } = (0, B.z)({
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
                    expandQuestBar: p,
                    isExpansionAnimationComplete: u,
                    isVisibilityAnimationAtRest: d,
                    expansionSpring: E,
                    visibilitySpring: h,
                    springConfig: s,
                }
            );
        })({ canExpand: f, isQuestBarVisible: X, springConfig: _ }),
        ei = (0, v.Ay)(A),
        {
            handleCtxMenuOpened: ea,
            handleCtxMenuClosed: el,
            handleCtxMenuSelection: eo,
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
                    setIsExpanded: a,
                    expandQuestBar: l,
                    canCollapse: o,
                    didEnroll: u,
                    impressionRef: c,
                } = e,
                x = r.useRef(-1),
                C = r.useRef(!1),
                [p, E] = r.useState(!1),
                [f, h] = r.useState(!1),
                g = r.useCallback(() => {
                    E(!0);
                }, []),
                A = r.useCallback(() => {
                    (E(!1), !C.current && o && a(!1));
                }, [o, a]),
                _ = r.useCallback(() => {
                    (E(!1), o && a(!1), (C.current = !1));
                }, [o, a]),
                S = r.useCallback(() => {
                    h(!0);
                }, []),
                j = r.useCallback(() => {
                    (h(!1), a(!1));
                }, [a]),
                T = r.useCallback(
                    function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (s) return;
                        let { withDelay: t = !1 } = e;
                        t ? (x.current = window.setTimeout(l, 75)) : l();
                    },
                    [l, s],
                ),
                v = r.useCallback(() => {
                    T();
                }, [T]),
                R = r.useCallback(
                    (e) => {
                        (window.clearTimeout(x.current),
                            ((0, P.vq)(e?.relatedTarget, Node) && e.currentTarget.contains(e.relatedTarget)) ||
                                p ||
                                f ||
                                C.current ||
                                a(!1));
                    },
                    [p, f, a],
                ),
                y = r.useCallback(() => {
                    (n === i.p.QUEST &&
                        (0, m.av)({
                            questId: t,
                            event: M.HAw.QUEST_HOVER,
                            properties: {
                                content_id: d.uF.QUEST_BAR,
                                content_name: (0, w.jO)(d.uF.QUEST_BAR),
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
                            event: M.HAw.QUEST_HOVER_OFF,
                            properties: {
                                content_id: d.uF.QUEST_BAR,
                                content_name: (0, w.jO)(d.uF.QUEST_BAR),
                                impression_id: c.current?.getId(),
                            },
                            sourceQuestContent: d.uF.QUEST_BAR_V2,
                        }),
                        (C.current = !1),
                        R());
                }, [t, n, R, c]);
            (r.useEffect(() => {
                f && C.current && Q();
            }, [f, Q]),
                r.useLayoutEffect(() => {
                    u && C.current && l();
                }, [l, u]),
                r.useLayoutEffect(() => {
                    o && u && !C.current && a(!1);
                }, [o, u, a]));
            let N = (0, D.useHasAnyModalOpen)();
            return (
                r.useEffect(() => {
                    N && C.current && Q();
                }, [Q, N]),
                {
                    ctxMenuOpen: p,
                    gameSheetOpen: f,
                    handleCtxMenuOpened: g,
                    handleCtxMenuClosed: A,
                    handleCtxMenuSelection: _,
                    handleGameSheetOpened: S,
                    handleGameSheetClosed: j,
                    handleFocus: T,
                    handleFocusWithoutDelay: v,
                    handleBlur: R,
                    handleMouseEnter: y,
                    handleMouseLeave: Q,
                }
            );
        })({
            ...F,
            isExpanded: Z,
            setIsExpanded: J,
            expandQuestBar: ee,
            canCollapse: g,
            didEnroll: A && !0 !== ei,
            impressionRef: G,
        }),
        ep = r.useRef(null),
        eE = r.useRef(null),
        ef = r.useRef(null),
        eh = {
            hasAssetsError: z,
            isEligibleForQuests: O,
            isQuestBarVisible: X,
            isVisibilityAnimationAtRest: en,
            isLoadingAssets: Y,
            isQuestEnrollmentBlocked: k,
            impressionRef: G,
            ...F,
        },
        eg = !(!O || (!X && en && !Y) || (z && !K));
    return (
        !eg && (z && !K ? b.log("Not rendered due to asset error") : O || b.log("Not rendered due to ineligibility")),
        (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(x, { ...eh }),
                eg &&
                    (0, s.jsx)(o, {
                        overrideVisibility: !W && X,
                        children: (e, t) => (
                            (G.current = t.current),
                            (0, s.jsxs)("div", {
                                className: H.dK,
                                children: [
                                    X && (0, s.jsx)(u, { isExpanded: Z }),
                                    (0, s.jsx)(T.animated.div, {
                                        "data-testid": "quest-bar-container",
                                        "aria-hidden": !X,
                                        onMouseLeave: em,
                                        onMouseEnter: eC,
                                        onFocus: ed,
                                        onBlur: ex,
                                        className: j()(H.iE, { [H.Xc]: !X, [H.uv]: X && en }),
                                        style: { height: er.to({ range: [0, 1], output: [0, p] }) },
                                        children: (0, s.jsx)(T.animated.div, {
                                            className: j()(H.FG, { [H.E$]: Z }),
                                            children: (0, s.jsx)(I, {
                                                springConfig: _,
                                                isExpanded: Z,
                                                children: (0, s.jsx)(U.oK, {
                                                    expandedContentRef: ep,
                                                    collapsedContentRef: eE,
                                                    overlayRef: ef,
                                                    expansionSpring: es,
                                                    children: (0, s.jsx)(q.R, {
                                                        isExpanded: Z,
                                                        isExpansionAnimationComplete: et,
                                                        onCtxMenuClose: el,
                                                        onCtxMenuOpen: ea,
                                                        onCtxMenuSelect: eo,
                                                        onGameSheetOpen: eu,
                                                        onGameSheetClose: ec,
                                                        collapsedHeight: p,
                                                        children: (C ?? ((e) => e))(
                                                            (0, s.jsxs)(s.Fragment, {
                                                                children: [
                                                                    n,
                                                                    l,
                                                                    (0, s.jsx)("div", { ref: ef, className: H.Lw }),
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
var G = n(818276),
    z = n(742860),
    Y = n(963713),
    K = n(776310),
    X = n(333007),
    Z = n(398025);
function J() {
    let e = document.body.style.getPropertyValue("--custom-guild-sidebar-width").slice(0, -2);
    return parseInt("" !== e ? e : "375");
}
var ee = n(536283),
    et = n(489811);
let en = (e) => {
    let { progressBarRef: t, isHovered: n } = e,
        { quest: i } = r.useContext(Y.$0),
        { isExpanded: l } = (0, q.H)(),
        { expansionSpring: o, overlayRef: u } = r.useContext(U.PW),
        { completionSpring: d, startCompletionAnimation: x } = (function () {
            let [{ spring: e }, t] = (0, B.z)(() => ({ spring: 0 }), "animate-always");
            return {
                completionSpring: e,
                startCompletionAnimation: r.useCallback(() => {
                    (t({ spring: 1 }), t({ spring: 0, delay: 2e3 }));
                }, [t]),
            };
        })(),
        C = i.userStatus?.completedAt != null,
        m = r.useRef(!1),
        p = (0, a.bG)([V.Ay], () => V.Ay.useReducedMotion),
        E = r.useRef(null),
        f = (0, a.bG)([c.A], () => c.A.hasLayers()),
        h = (0, v.Ay)(f),
        [g, A] = r.useState(null),
        [_, S] = r.useState(null),
        R = r.useRef(new K.OH({ gravity: 0, wind: 0 })),
        y = (0, K.f9)(g, _),
        Q = r.useMemo(() => [k.r3], []),
        N = r.useCallback(() => {
            if (p) return;
            let e = t.current,
                n = E.current;
            if (null != n && null != e && y.isReady) {
                var s, r, i, a;
                let { x: t, y: l } = e.getBoundingClientRect(),
                    { x: o, y: u } = n.getBoundingClientRect();
                y.createMultipleConfetti(
                    ((s = t - o),
                    (r = l - u),
                    (i = e.clientHeight),
                    (a = e.clientWidth),
                    {
                        ...ee.Mw,
                        position: { type: "static-random", minValue: { x: s, y: r }, maxValue: { x: s + i, y: r + a } },
                        velocity: { type: "static-random", minValue: { x: -20, y: -20 }, maxValue: { x: 20, y: 20 } },
                        opacity: { type: "linear", value: 2, addValue: -0.1 },
                        dragCoefficient: { type: "static", value: 0.166 },
                        size: { type: "static-random", minValue: 2, maxValue: 3 },
                    }),
                    100,
                );
            }
        }, [t, E, y, p]),
        F = (0, v.Ay)(l);
    return (r.useEffect(() => {
        C && l && !F && (x(), N());
    }, [l, C, x, N, F]),
    r.useEffect(() => {
        C &&
            !f &&
            h &&
            setTimeout(() => {
                (x(), N());
            }, 200);
    }, [C, h, f, x, N]),
    r.useEffect(() => {
        y.isReady && (!m.current && C && (x(), N()), (m.current = C));
    }, [C, m, N, x, y]),
    r.useEffect(() => {
        n && C && (x(), N());
    }, [n, C, x, N]),
    p)
        ? null
        : (0, s.jsxs)("div", {
              className: et.iE,
              "aria-hidden": "true",
              ref: E,
              children: [
                  (0, s.jsx)(T.animated.div, { className: et.Tp, style: { opacity: (0, Z.a)(d) } }),
                  (0, s.jsx)(T.animated.div, { className: j()(et.sJ, et.ix), style: { opacity: (0, Z.a)(d) } }),
                  (0, s.jsxs)(T.animated.div, {
                      className: et.KG,
                      style: { transform: o.to({ range: [0, 1], output: [-35, 0] }).to((e) => `translateY(${e}px)`) },
                      children: [
                          (0, s.jsx)(K.Fk, { ref: A, className: et.t_, environment: R.current }),
                          (0, s.jsx)(K.K_, {
                              ref: S,
                              sprites: ["/assets/b909790cf1d80597.svg"],
                              colors: Q,
                              spriteWidth: ee.wn,
                              spriteHeight: ee.wn,
                          }),
                          null != u.current &&
                              (0, X.createPortal)(
                                  (0, s.jsx)(T.animated.div, {
                                      className: j()(et.sJ, et.d7),
                                      style: { opacity: (0, Z.a)(d) },
                                  }),
                                  u.current,
                              ),
                      ],
                  }),
              ],
          });
};
var es = n(821609),
    er = n(3738),
    ei = n(971649),
    ea = n(651892),
    el = n(620954),
    eo = n(814793),
    eu = n(753386),
    ec = n(608935),
    ed = n(887899),
    ex = n(79545),
    eC = n(862611),
    em = n(630037),
    ep = n(105292),
    eE = n(191559);
function ef(e) {
    let { quest: t, sourceQuestContent: n, taskDetails: r } = e,
        i = (0, x.Hv)(),
        a = (0, s.jsx)(es.$, {
            variant: "primary",
            fullWidth: !0,
            onClick: function () {
                if (i) {
                    ((0, m.Y5)({
                        questId: t.id,
                        questContent: d.uF.QUEST_BAR_V2,
                        questContentCTA: w.Cy.QUEST_ACCESS_SUSPENDED,
                        sourceQuestContent: n,
                    }),
                        (0, g.FS)());
                    return;
                }
                let e = t.userStatus?.enrolledAt == null ? w.Cy.ACCEPT_QUEST : w.Cy.WATCH_VIDEO;
                (0, g.d5)({
                    quest: t,
                    questContent: d.uF.QUEST_BAR_V2,
                    sourceQuestContent: n,
                    sourceQuestContentCTA: e,
                });
            },
            size: "sm",
            text: (0, eu.WM)(r),
            "aria-disabled": i || void 0,
        });
    return i ? (0, s.jsx)(ec.A, { children: a }) : a;
}
function eh(e) {
    let { quest: t, sourceQuestContent: n } = e,
        r = (0, ei.wW)(),
        i = (0, ea.wr)(t);
    return (0, s.jsx)(es.$, {
        size: "sm",
        fullWidth: !0,
        onClick: () =>
            (0, el.pu)(t, {
                content: d.uF.QUEST_BAR_V2,
                ctaContent: w.Cy.OPEN_GAME_LINK,
                impressionId: r(),
                sourceQuestContent: n,
            }),
        text: i,
    });
}
function eg(e) {
    let { quest: t, sourceQuestContent: n } = e,
        r = (0, ei.wW)();
    return (0, s.jsx)(es.$, {
        fullWidth: !0,
        onClick: () =>
            (0, el.se)(
                { quest: t },
                {
                    content: d.uF.QUEST_BAR_V2,
                    ctaContent: w.Cy.CONNECT_CONSOLE,
                    impressionId: r(),
                    sourceQuestContent: n,
                },
            ),
        size: "sm",
        text: ep.intl.string(ep.t.csptqV),
    });
}
function eA(e) {
    let { quest: t } = e,
        n = (0, er.NA)({ quest: t }),
        { launchInGameActivity: r } = (0, x.zW)(t);
    return (0, eo.vA)(t)
        ? (0, s.jsx)(es.$, { fullWidth: !0, variant: "primary", icon: (0, g.Oz)(t), onClick: r, size: "sm", text: n })
        : null;
}
function e_(e) {
    let {
            quest: t,
            sourceQuestContent: n,
            taskDetails: r,
            popoutTargetElementRef: i,
            onGameSheetOpened: a,
            onGameSheetClosed: l,
        } = e,
        { applications: o } = r;
    return (0, s.jsx)(eC.A, {
        quest: t,
        sourceQuestContent: n,
        applications: o ?? [],
        targetElementRef: i,
        onGameSheetOpened: a,
        onGameSheetClosed: l,
        children: (e) =>
            (0, s.jsx)(es.$, {
                variant: "secondary",
                fullWidth: !0,
                size: "sm",
                text: ep.intl.string(ep.t["93PTEs"]),
                ...e,
            }),
    });
}
function eS(e) {
    let { quest: t, ctaLabel: n, onClick: r, questContent: i = d.uF.QUEST_BAR_V2, sourceQuestContent: a } = e,
        l = (0, em.D)({ quest: t, questContent: i, sourceQuestContent: a, onBeforeClaim: r });
    return (0, s.jsx)(es.$, {
        fullWidth: !0,
        onClick: l,
        text: n ?? ep.intl.string(ep.t.cfY4PE),
        "data-testid": "quest-bar-claim-reward-button",
        variant: "primary",
        size: "sm",
    });
}
function ej(e) {
    let {
            sourceQuestContent: t,
            awaitingConsoleConnections: n,
            hasMadeProgress: i,
            isProgressing: a,
            popoutTargetElementRef: l,
        } = e,
        { quest: o, taskDetails: u } = r.useContext(Y.$0),
        { onGameSheetOpen: c, onGameSheetClose: C } = (0, q.H)(),
        [m] = (0, x.Qo)(o, u),
        E = o.userStatus?.completedAt != null,
        f = (0, p.vv)(o),
        h = (0, p.I6)(o),
        g = m !== d.X0.SELECT && !i && !a,
        A = null;
    return (
        E
            ? (A = (0, s.jsx)(eS, { quest: o, sourceQuestContent: t }))
            : h
              ? (A = (0, s.jsx)(ed.A, {
                    quest: o,
                    surface: ex.V3.QUEST_BAR_FOOTER,
                    size: "sm",
                    analyticsCtxQuestContent: d.uF.QUEST_BAR_V2,
                    analyticsCtxSourceQuestContent: t,
                }))
              : f
                ? (A = (0, s.jsx)(ef, { quest: o, sourceQuestContent: t, taskDetails: u }))
                : (0, eo.vA)(o)
                  ? (A = (0, s.jsx)(eA, { quest: o }))
                  : m === d.X0.CONSOLE && n
                    ? (A = (0, s.jsx)(eg, { quest: o, sourceQuestContent: t }))
                    : g && (0, eo.ui)(o)
                      ? (A = (0, s.jsx)(e_, {
                            quest: o,
                            sourceQuestContent: t,
                            taskDetails: u,
                            popoutTargetElementRef: l,
                            onGameSheetOpened: c,
                            onGameSheetClosed: C,
                        }))
                      : g && (A = (0, s.jsx)(eh, { quest: o, sourceQuestContent: t })),
        null == A ? null : (0, s.jsx)("div", { className: eE.lO, children: A })
    );
}
function eT(e) {
    return (0, s.jsx)(ej, { ...e, popoutTargetElementRef: e.parentContainerRef });
}
var ev = n(834730),
    eR = n(62405),
    ey = n(453384),
    eQ = n(649480);
let eN = function (e) {
    let { isExpanded: t, contentLocation: n, progressBarRef: i, percentComplete: a, popoutTargetElementRef: l } = e,
        { quest: o, taskDetails: u } = r.useContext(Y.$0),
        { onGameSheetOpen: c, onGameSheetClose: C } = (0, q.H)(),
        { hasAlreadyLinked: m, onClickGameTitle: p } = r.useContext(Y.SH),
        [E] = (0, x.Qo)(o, u),
        f = (0, er.VX)(o, m),
        h = (0, er.tH)({
            quest: o,
            isExpanded: t,
            activeScreen: E,
            sourceQuestContent: d.uF.QUEST_BAR_V2,
            popoutTargetElementRef: l,
            onGameSheetOpened: c,
            onGameSheetClosed: C,
            hasAlreadyLinked: m,
            onClickGameTitle: p,
        });
    return (0, s.jsxs)("div", {
        className: eQ.Z0,
        children: [
            (0, s.jsx)(U.dN, {
                inState: n,
                id: "progress-bar",
                ref: i,
                children: (e) =>
                    (0, s.jsx)(ey.A, {
                        ref: e,
                        style: "small",
                        percentComplete: a,
                        size: 42,
                        children: (0, s.jsx)(eR.A, {
                            fullWidth: !0,
                            quest: o,
                            location: $.rE.QUESTS_BAR,
                            questContent: d.uF.QUEST_BAR_V2,
                            autoplay: !1,
                            sourceQuestContent: d.uF.QUEST_BAR_V2,
                        }),
                    }),
            }),
            (0, s.jsxs)("div", {
                className: eQ.NZ,
                children: [
                    (0, s.jsx)(U.dN, {
                        inState: n,
                        id: "progress-title",
                        children: (e) =>
                            (0, s.jsx)(ev.E, {
                                ref: e,
                                className: eQ.FZ,
                                color: "text-strong",
                                variant: "text-sm/semibold",
                                children: f,
                            }),
                    }),
                    (0, s.jsx)(U.dN, {
                        inState: n,
                        id: "progress-subtitle",
                        isTextTransition: !0,
                        children: (e) =>
                            (0, s.jsx)(ev.E, {
                                ref: e,
                                className: eQ.FZ,
                                color: "text-subtle",
                                variant: "text-xs/normal",
                                children: h,
                            }),
                    }),
                ],
            }),
        ],
    });
};
var eU = n(939249),
    eB = n(365199),
    eF = n(270045),
    eV = n(316878);
function eb() {
    let { quest: e } = r.useContext(Y.$0),
        { onCtxMenuOpen: t, onCtxMenuClose: n, onCtxMenuSelect: i } = (0, q.H)(),
        a = (0, x.S5)(e.config.expiresAt);
    return (0, s.jsxs)("div", {
        className: eV.pS,
        children: [
            (0, s.jsx)(ev.E, {
                variant: "text-xxs/medium",
                className: j()(eV.Uu, eV.TK),
                children: ep.intl.format(ep.t["pX+fmn"], { expirationDate: a }),
            }),
            (0, s.jsx)(eF.C, {
                onOpen: t,
                onClose: n,
                onSelect: i,
                questContent: d.uF.QUEST_BAR_V2,
                quest: e,
                shouldShowDisclosure: !1,
                showShareLink: !0,
                sourceQuestContent: d.uF.QUEST_BAR_V2,
                children: (e) =>
                    (0, s.jsx)(eU.D, {
                        ...e,
                        className: eV.rb,
                        "aria-label": ep.intl.string(ep.t.DEoVWZ),
                        children: (0, s.jsx)(eB.MoreHorizontalIcon, {
                            size: "md",
                            color: "currentColor",
                            className: j()(eV.Bx, eV.U9),
                        }),
                    }),
            }),
        ],
    });
}
var eI = n(379073);
function eO(e) {
    let { progressBarRef: t } = e,
        { quest: n, taskDetails: i } = r.useContext(Y.$0),
        a = n.userStatus?.completedAt != null,
        l = n.userStatus?.enrolledAt != null,
        o = (0, x.I3)(n),
        u = null != o ? o.percentComplete : i.percentComplete,
        c = r.useRef(null);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            a && (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(eb, {}), (0, s.jsx)("div", { className: eI.y })] }),
            l
                ? (0, s.jsx)(eN, {
                      contentLocation: "collapsed",
                      progressBarRef: t,
                      isExpanded: !1,
                      percentComplete: u,
                  })
                : null,
            a &&
                (0, s.jsx)("div", {
                    ref: c,
                    children: (0, s.jsx)(eT, {
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
function eq() {
    let { quest: e } = r.useContext(Y.$0),
        t = e.userStatus?.completedAt != null,
        n = e.userStatus?.enrolledAt != null,
        i = r.useRef(null),
        [a, l] = r.useState(!1);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            t && (0, s.jsx)(en, { progressBarRef: i, isHovered: a }),
            (0, s.jsx)(G.A, {
                layoutVariant: n ? "inset" : "flush",
                backgroundImage: t ? `linear-gradient(90deg, ${k.V1}, ${k.us})` : void 0,
                onMouseEnter: () => l(!0),
                onMouseLeave: () => l(!1),
                children: (0, s.jsx)(eO, { progressBarRef: i }),
            }),
        ],
    });
}
var eL = n(290136),
    ek = n(661531),
    eP = n(57718),
    eD = n(393824);
let ew = function (e) {
    let { isFullyExpanded: t, partnerBranding: n } = e,
        i = {
            label: !(function () {
                let [e, t] = r.useState(() => 270 > J());
                return (
                    r.useEffect(() => {
                        let e = new MutationObserver(() => {
                            t(270 > J());
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
        l = (0, a.bG)([V.Ay], () => V.Ay.useReducedMotion),
        { quest: o } = r.useContext(Y.$0),
        { expansionSpring: u } = r.useContext(U.PW),
        c = i ? -4 : 6;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(T.animated.div, {
                className: eD.tE,
                style: {
                    transform: (0, T.to)(
                        [
                            u.to({ range: [0, 1], output: [0, 0] }),
                            u.to({ range: [0, 1], output: [0, 82] }),
                            u.to({ range: [0, 1], output: [1, 1.3333333333333333] }),
                        ],
                        (e, t, n) => `translate(${e}px, ${t}px) scale(${n})`,
                    ),
                },
                children: (0, s.jsx)(eR.A, {
                    learnMoreStyle: "text",
                    learnMoreFontSize: t ? 9 : void 0,
                    quest: o,
                    location: $.rE.QUESTS_BAR,
                    questContent: d.uF.QUEST_BAR_V2,
                    autoplay: t && !l,
                    sourceQuestContent: d.uF.QUEST_BAR_V2,
                    style: { width: 48, height: 48, marginRight: 8, borderRadius: 6 },
                }),
            }),
            (0, s.jsxs)(T.animated.div, {
                className: j()(eD.pm, { [eD.nd]: i }),
                style: {
                    transform: (0, T.to)(
                        [u.to({ range: [0, 1], output: [0, -48] }), u.to({ range: [0, 1], output: [0, c] })],
                        (e, t) => `translate(${e}px, ${t}px)`,
                    ),
                },
                children: [
                    (0, s.jsx)("div", { className: j()({ [eD.Iu]: !i }), children: n }),
                    (0, s.jsx)(T.animated.div, {
                        className: j()(eD.ol, { [eD.yZ]: i }),
                        style: { opacity: (0, Z.a)(u.to({ range: [0, 1], output: [i ? 1 : 0.7, 0] })) },
                        children: (0, s.jsx)(ev.E, {
                            color: "text-overlay-light",
                            lineClamp: 1,
                            variant: "text-xs/medium",
                            children: ep.intl.string(ep.t["3mgEQf"]),
                        }),
                    }),
                ],
            }),
        ],
    });
};
var eM = n(886030);
let e$ = (0, T.animated)(eP.Ay),
    eH = function () {
        let e = (0, ei.wW)(),
            { expansionSpring: t } = r.useContext(U.PW),
            { quest: n } = r.useContext(Y.$0),
            {
                onCtxMenuOpen: i,
                onCtxMenuClose: a,
                onCtxMenuSelect: l,
                isExpanded: o,
                isExpansionAnimationComplete: u,
            } = (0, q.H)(),
            c = r.useCallback(() => {
                (0, g.Zc)(n, {
                    content: d.uF.QUEST_BAR_V2,
                    ctaContent: w.Cy.OPEN_DISCLOSURE,
                    sourceQuestContent: d.uF.QUEST_BAR_V2,
                });
            }, [n]),
            x = r.useCallback(() => {
                (0, el.pu)(n, {
                    content: d.uF.QUEST_BAR_HEADER,
                    ctaContent: w.Cy.OPEN_GAME_LINK,
                    impressionId: e(),
                    sourceQuestContent: d.uF.QUEST_BAR_V2,
                });
            }, [e, n]),
            C = o && u,
            m = (0, s.jsx)(eU.D, {
                onClick: x,
                className: j()(eM.vk, { [eM.wm]: C }),
                children: (0, s.jsx)(e$, {
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
        return (0, s.jsxs)(T.animated.div, {
            className: j()(eM.iE, eM.Ht, { [eM.tT]: C }),
            style: { transform: (0, T.to)([t.to({ range: [0, 1], output: [6, 0] })], (e) => `translateY(${e}px)`) },
            children: [
                (0, s.jsx)(T.animated.div, {
                    className: eM.Tu,
                    style: { opacity: (0, Z.a)(t.to({ range: [0, 1], output: [0, 1] })) },
                }),
                (0, s.jsx)(ew, { isFullyExpanded: C, partnerBranding: m }),
                (0, s.jsxs)(T.animated.div, {
                    className: eM.P0,
                    style: { opacity: (0, Z.a)(t.to({ range: [0, 1], output: [0, 1] })) },
                    children: [
                        (0, s.jsxs)(eU.D, {
                            className: eM.y8,
                            onClick: c,
                            children: [
                                (0, s.jsx)(ev.E, {
                                    color: "text-overlay-light",
                                    variant: "text-xs/normal",
                                    children: ep.intl.string(ep.t.o6FLcF),
                                }),
                                (0, s.jsx)(eL.CircleQuestionIcon, { color: ek.A.colors.WHITE, className: eM.P$ }),
                            ],
                        }),
                        (0, s.jsx)(eF.C, {
                            onOpen: i,
                            onClose: a,
                            onSelect: l,
                            questContent: d.uF.QUEST_BAR_V2,
                            quest: n,
                            shouldShowDisclosure: !0,
                            showShareLink: !0,
                            sourceQuestContent: d.uF.QUEST_BAR_V2,
                            children: (e) =>
                                (0, s.jsx)(eU.D, {
                                    ...e,
                                    className: j()(eM.uJ, eM.rb),
                                    "aria-label": ep.intl.string(ep.t.DEoVWZ),
                                    children: (0, s.jsx)(eB.MoreHorizontalIcon, {
                                        size: "md",
                                        color: "currentColor",
                                        className: j()(eM.Bx, eM.ON),
                                    }),
                                }),
                        }),
                    ],
                }),
            ],
        });
    };
n(801541);
var eW = n(889137),
    eG = n(417270),
    ez = n(782134),
    eY = n(297264),
    eK = n(825484),
    eX = n(408278),
    eZ = n(921853),
    eJ = n(409626),
    e0 = n(427495),
    e1 = n(405670),
    e2 = n(112142),
    e7 = n(646917),
    e3 = n(291749),
    e6 = n(576761),
    e8 = n(117634),
    e5 = n(976019),
    e9 = n(442734),
    e4 = n(114046),
    te = n(695366),
    tt = n(507395),
    tn = n(144779),
    ts = n(30370),
    tr = n(178540),
    ti = n(780964),
    ta = n(766075),
    tl = n(52093),
    to = n(575630);
function tu(e) {
    let { text: t, quest: n, sourceQuestContent: r } = e,
        a = (0, ei.wW)();
    return (0, s.jsx)(eU.D, {
        className: to.Z0,
        onClick: () => {
            ((0, tt.r)({
                type: tn.F.CLICK_INTERNAL,
                adCreativeType: i.p.QUEST,
                adCreativeId: n.id,
                questContentCTA: w.Cy.VIEW_CONSOLE_CONNECTIONS_LINK,
                surfaceId: d.uF.QUEST_BAR_V2,
                sourceQuestContent: r,
                impressionId: a(),
            }),
                (0, ta.openUserSettings)(ti.X.CONNECTIONS_CATEGORY));
        },
        children: (0, s.jsx)(ev.E, { "aria-label": t, color: "none", variant: "text-xxs/normal", children: t }),
    });
}
function tc(e) {
    let { xboxAndPlaystationAccounts: t, quest: n, sourceQuestContent: r } = e;
    return t.length > 0
        ? (0, s.jsx)(tu, { text: ep.intl.string(ep.t["qiS+xj"]), quest: n, sourceQuestContent: r })
        : null;
}
function td(e) {
    return (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(tl.L5, { children: ep.intl.string(ep.t.EJFSvD) }), (0, s.jsx)(tc, { ...e })],
    });
}
var tx = n(607886);
function tC(e) {
    return (0, s.jsx)(ev.E, {
        className: tx.eW,
        color: "text-muted",
        variant: "text-xxs/normal",
        children: e.children,
    });
}
function tm(e) {
    let { quest: t, useReducedMotion: n } = e,
        a = (0, h.H1)(t.id, d.uF.QUEST_BAR_V2, d.uF.QUEST_BAR_V2),
        l = (0, h.Xf)({ useReducedMotion: n }),
        o = (0, ei.wW)(),
        u = (0, tr.O)((e) => e.getErrorHints(t.id)),
        { startingConsoleQuest: c, startConsoleQuest: C } = (0, x.Wj)({
            questId: t.id,
            beforeRequest: () => {
                ((0, tt.r)({
                    type: tn.F.CLICK_INTERNAL,
                    adCreativeType: i.p.QUEST,
                    adCreativeId: t.id,
                    questContentCTA: w.Cy.DEFIBRILLATOR,
                    surfaceId: d.uF.QUEST_BAR_V2,
                    sourceQuestContent: d.uF.QUEST_BAR_V2,
                    impressionId: o(),
                }),
                    l.startAnimation());
            },
            afterRequest: l.stopAnimation,
        }),
        { header: m, renderBody: p } = r.useMemo(() => {
            let e = u.length > 0,
                n = t.config.messages.gameTitle;
            return {
                header: e
                    ? (0, eo.ui)(t)
                        ? ep.intl.string(ep.t.N33EuL)
                        : ep.intl.formatToPlainString(ep.t["28Ql27"], { gameTitle: n })
                    : (0, eo.ui)(t)
                      ? ep.intl.string(ep.t.YstzGO)
                      : ep.intl.formatToPlainString(ep.t.gX0Qcx, { gameTitle: n }),
                renderBody: e
                    ? function () {
                          return (0, s.jsx)(s.Fragment, {
                              children: u.map((e, n) => {
                                  if (e.type === e4._.EXPIRED_CREDENTIAL) {
                                      let r = ts.A.getAccount(e.connected_account_id, e.connected_account_type),
                                          i = (0, el.IG)(e),
                                          a = (0, el.$J)(e);
                                      return (0, s.jsx)(
                                          tC,
                                          {
                                              children: ep.intl.format(i, {
                                                  account_name: r?.name,
                                                  onClick: () => {
                                                      (0, el.v0)(
                                                          { quest: t, platformType: a },
                                                          {
                                                              content: d.uF.QUEST_BAR,
                                                              ctaContent: w.Cy.DEFIBRILLATOR_RECONNECT_CONSOLE,
                                                              impressionId: o(),
                                                              sourceQuestContent: d.uF.QUEST_BAR_V2,
                                                          },
                                                      );
                                                  },
                                              }),
                                          },
                                          n,
                                      );
                                  }
                                  return (0, s.jsx)(tC, { children: e.message }, n);
                              }),
                          });
                      }
                    : () =>
                          (0, s.jsx)(ev.E, {
                              className: tx.eW,
                              color: "text-muted",
                              variant: "text-xxs/normal",
                              children: (0, eo.ui)(t)
                                  ? ep.intl.string(ep.t.bUyEZZ)
                                  : ep.intl.format(ep.t.GXqvC1, { gameTitle: n }),
                          }),
            };
        }, [u, t, o]);
    return (0, s.jsxs)("div", {
        className: tx.XK,
        children: [
            (0, s.jsxs)("div", {
                className: tx.oK,
                children: [
                    (0, s.jsx)(te.E, {
                        size: "custom",
                        color: "currentColor",
                        className: 0 === u.length ? tx.pH : tx.JA,
                        width: 16,
                        height: 16,
                    }),
                    (0, s.jsx)(ev.E, { variant: "text-xs/medium", children: m }),
                    (0, s.jsx)(eU.D, {
                        className: j()(tx.w, { [tx.r9]: c }),
                        onClick: () => C(),
                        children: l.render(),
                    }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: j()({ [tx.Iu]: c }),
                children: [p(), 0 === u.length ? null : (0, s.jsx)(tC, { children: a })],
            }),
        ],
    });
}
let tp = function (e) {
    let { quest: t, taskDetails: n } = e,
        i = (0, a.bG)([V.Ay], () => V.Ay.useReducedMotion),
        l = (0, x.Du)(),
        o = r.useMemo(
            () => (0, el.bg)(t).filter((e) => null != l.xboxAndPlaystationAccounts.find((t) => t.type === e)),
            [l.xboxAndPlaystationAccounts, t],
        ),
        {
            steps: u,
            hasConnectedAccounts: c,
            isProgressingQuestForLaunchedGame: C,
            isQuestComplete: m,
        } = r.useMemo(() => {
            let e = o.length > 0,
                r = e && (0, p.YL)(t),
                i = t.config.messages.gameTitle,
                a = t.userStatus?.completedAt != null;
            return {
                steps: [
                    {
                        renderContent: () => (0, s.jsx)(td, { ...l, quest: t, sourceQuestContent: d.uF.QUEST_BAR_V2 }),
                        isComplete: e || r || a,
                    },
                    {
                        renderContent: () =>
                            (0, s.jsx)(tl.L5, {
                                children: (0, eo.ui)(t)
                                    ? ep.intl.string(ep.t["5tXqFe"])
                                    : ep.intl.formatToPlainString(ep.t["+8JB6Y"], { gameTitle: i }),
                            }),
                        isComplete: r || a,
                    },
                    {
                        renderContent: () =>
                            (0, s.jsx)(tl.L5, {
                                children: ep.intl.formatToPlainString(ep.t.HhfrYS, { numMinutes: n.targetMinutes }),
                            }),
                        isComplete: a,
                    },
                ],
                hasConnectedAccounts: e,
                isProgressingQuestForLaunchedGame: r,
                isQuestComplete: a,
            };
        }, [l, o.length, t, n.targetMinutes]);
    return (0, s.jsx)(tl.Ay, {
        heading: ep.intl.string(ep.t.UPWlJu),
        steps: u,
        children: c && !C && !m && (0, s.jsx)(tm, { useReducedMotion: i, quest: t }),
    });
};
(n(134528), n(947204));
var tE = n(934225);
function tf(e) {
    let { header: t, children: n } = e;
    return (0, s.jsxs)("div", {
        className: tE.Nr,
        children: [
            (0, s.jsxs)("div", {
                className: tE.wx,
                children: [
                    (0, s.jsx)(te.E, {
                        size: "custom",
                        color: "currentColor",
                        className: tE.Kk,
                        width: 16,
                        height: 16,
                    }),
                    (0, s.jsx)(eY.D, { color: "text-default", variant: "heading-sm/medium", children: t }),
                ],
            }),
            (0, s.jsx)(ev.E, { color: "text-muted", variant: "text-xs/normal", className: tE.r2, children: n }),
        ],
    });
}
let th = function (e) {
    let { quest: t } = e,
        n = (0, x.aC)(t);
    if (0 === n.length) return null;
    let r = n.at(0);
    return r === ep.intl.string(ep.t.BV6xDm)
        ? (0, s.jsx)(tf, { header: ep.intl.string(ep.t.onh6ct), children: ep.intl.string(ep.t.arVHRA) })
        : r === ep.intl.string(ep.t.MFGxFM)
          ? (0, s.jsx)(tf, { header: ep.intl.string(ep.t.JPihZA), children: ep.intl.string(ep.t.MFGxFM) })
          : null;
};
var tg = n(31300),
    tA = n(687966),
    t_ = n(35558);
let tS = function (e) {
    let { onDesktop: t, onConsole: n } = e;
    return (0, s.jsxs)(eK.e, {
        direction: "vertical",
        fullWidth: !0,
        className: t_.G,
        size: "sm",
        children: [
            (0, s.jsx)(es.$, {
                onClick: t,
                text: ep.intl.string(ep.t["QXc01+"]),
                variant: "secondary",
                icon: tg.k,
                iconPosition: "end",
            }),
            (0, s.jsx)(es.$, {
                onClick: n,
                text: ep.intl.string(ep.t["8lAfuB"]),
                variant: "secondary",
                icon: tA.GameControllerIcon,
                iconPosition: "end",
            }),
        ],
    });
};
var tj = n(333949),
    tT = n(158247);
function tv(e) {
    let { onClick: t } = e,
        { quest: n } = r.useContext(Y.$0),
        i = (0, a.bG)([V.Ay], () => V.Ay.useReducedMotion),
        [l, o] = r.useState(!1),
        u = (0, e3.tW)(n, e3.fY.QUEST_BAR_HERO_VIDEO, void 0, !1),
        c = (0, e3.tW)(n, e3.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1),
        d = (0, e1.Kr)((e) => e.getVideoProgressState)(n.id),
        x = n.userStatus?.completedAt != null && d === e1.K2.COMPLETED,
        C = !x && (!i || l);
    return (0, s.jsxs)(eU.D, {
        className: tT.QO,
        onClick: t,
        onMouseEnter: function () {
            i && !l && o(!0);
        },
        onMouseLeave: function () {
            i && l && o(!1);
        },
        children: [
            null != c &&
                (0, s.jsx)(E._M, {
                    id: "QuestBarContentExpanded_videoThumbnail",
                    children: (e) => (0, s.jsx)("img", { ref: e, alt: "", src: c.url, className: tT.Ue }),
                }),
            null != u
                ? (0, s.jsx)(E._M, {
                      id: "QuestBarContentExpanded_video",
                      children: (e) =>
                          (0, s.jsx)(tj.X, {
                              ref: e,
                              isHovered: l,
                              autoPlay: !1,
                              asset: u,
                              poster: c?.url,
                              className: j()(tT.NM, { [tT.Gc]: C }),
                          }),
                  })
                : null,
            (0, s.jsx)("div", {
                className: tT.LT,
                children: x
                    ? (0, s.jsx)(eG.RetryIcon, { color: ek.A.colors.WHITE, className: tT.t })
                    : (0, s.jsx)(ez.PlayIcon, { color: ek.A.colors.WHITE, className: tT.t }),
            }),
        ],
    });
}
function tR(e) {
    let { quest: t } = e;
    return (0, s.jsx)(eR.A, {
        className: j()(tT.Qq, tT.wq),
        learnMoreStyle: "text",
        quest: t,
        location: $.rE.QUESTS_BAR,
        questContent: d.uF.QUEST_BAR_V2,
        sourceQuestContent: d.uF.QUEST_BAR_V2,
    });
}
function ty(e) {
    let { isCtaInteractable: t, containerRef: n, onAcceptQuest: i } = e,
        { quest: l, taskDetails: o } = r.useContext(Y.$0),
        { onGameSheetOpen: u, onGameSheetClose: c } = (0, q.H)(),
        { expansionSpring: C } = r.useContext(U.PW),
        m = r.useRef(null),
        p = (0, a.bG)([y.A], () => y.A.isEnrolling(l.id), [l]),
        f = r.useMemo(() => (0, e3.tW)(l, e3.fY.QUEST_BAR_HERO), [l]),
        h = (0, er.NA)({ quest: l }),
        A = r.useMemo(() => (0, e3.tW)(l, e3.fY.HERO_IMAGE), [l]),
        _ = r.useMemo(() => (null == A ? {} : { backgroundImage: `url(${A.url})` }), [A]),
        S = e2.t.useConfig({ location: $.rE.QUESTS_BAR }),
        v = (0, er.mU)({
            quest: l,
            location: $.rE.QUESTS_BAR,
            taskDetails: o,
            sourceQuestContent: d.uF.QUEST_BAR_V2,
            popoutTargetElementRef: m,
            onGameSheetOpened: u,
            onGameSheetClosed: c,
            gameProfileSource: eJ.GameProfileSources.QuestBar,
        }),
        R = (0, ex.Pd)(l),
        Q = (0, e7.z)(),
        N = (0, x.SD)(l, Q),
        B = Q === e6.MA.NITRO && N;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)("div", {
                ref: m,
                children: (0, s.jsxs)("div", {
                    className: tT.do,
                    ref: n,
                    children: [
                        (0, s.jsxs)("div", {
                            className: tT.zH,
                            children: [
                                (0, s.jsx)(tR, { quest: l }),
                                (0, s.jsx)(eY.D, {
                                    className: tT.DD,
                                    color: "text-strong",
                                    variant: "heading-md/medium",
                                    children: ep.intl.format(ep.t.EQa7os, { questName: l.config.messages.questName }),
                                }),
                                (0, s.jsxs)("div", {
                                    className: tT.zf,
                                    children: [
                                        (0, s.jsx)(ev.E, { className: tT.h_, variant: "text-xs/normal", children: v }),
                                        N && (0, s.jsx)(e9.e, { questId: l.id, orbMultiplierEligibility: Q }),
                                    ],
                                }),
                            ],
                        }),
                        (0, s.jsx)("div", {
                            className: j()(tT.lO, { [tT._o]: !t }),
                            "data-testid": "quest-bar-enroll-cta",
                            children: (0, s.jsx)(eK.e, {
                                direction: "horizontal",
                                fullWidth: !0,
                                wrap: !1,
                                children:
                                    S.enabled && R === ex.UA.UNENROLLED && S.enabledQuestStates.has(ex.UA.UNENROLLED)
                                        ? (0, s.jsx)(ed.A, {
                                              quest: l,
                                              surface: ex.V3.QUEST_BAR_FOOTER,
                                              size: "sm",
                                              analyticsCtxQuestContent: d.uF.QUEST_BAR_V2,
                                              analyticsCtxSourceQuestContent: d.uF.QUEST_BAR_V2,
                                          })
                                        : (0, s.jsx)(es.$, {
                                              onClick: i,
                                              variant: "primary",
                                              loading: p,
                                              text: h,
                                              size: "sm",
                                              icon: (0, g.Oz)(l),
                                              fullWidth: !0,
                                          }),
                            }),
                        }),
                    ],
                }),
            }),
            (0, s.jsx)(e8.A, { visible: B, glow: !0, className: tT.Ph }),
            null != A &&
                (0, s.jsx)(T.animated.div, {
                    className: tT.AK,
                    style: { opacity: (0, Z.a)(C.to([0, 1], [1, 0])) },
                    children: (0, s.jsx)("div", { className: j()(tT.LC, tT.Ge), style: _ }),
                }),
            (0, s.jsxs)(T.animated.div, {
                className: tT.IC,
                style: {
                    backdropFilter: (0, Z.Q)(C.to([0, 1], [5, 0]).to((e) => `blur(${e}px)`)),
                    filter: (0, Z.Q)(C.to([0, 1], [0.8, 1]).to((e) => `brightness(${e})`)),
                },
                children: [
                    f.isAnimated
                        ? (0, s.jsx)(E._M, {
                              id: "QuestBarContentExpanded_heroAnimated",
                              children: (e) => (0, s.jsx)(tj.X, { ref: e, autoPlay: !0, asset: f, className: tT.LO }),
                          })
                        : (0, s.jsx)(E._M, {
                              id: "QuestBarContentExpanded_heroStatic",
                              children: (e) => (0, s.jsx)("img", { ref: e, alt: "", className: tT.LO, src: f.url }),
                          }),
                    (0, s.jsx)("div", { className: tT.tV }),
                ],
            }),
        ],
    });
}
function tQ(e) {
    let { quest: t } = e,
        { hasAlreadyLinked: n, onClickGameTitle: i } = r.useContext(Y.SH);
    return !0 !== n ? null : (0, s.jsx)(e5.A, { quest: t, hasAlreadyLinked: n, onClickGameTitle: i });
}
function tN(e) {
    let { activeScreen: t, selectPlatform: n } = e,
        { quest: i, taskDetails: a } = r.useContext(Y.$0);
    return (0, eW.YW)(t)
        .with(d.X0.SELECT, () => (0, s.jsx)(tS, { onConsole: () => n($.fO.CONSOLE), onDesktop: () => n($.fO.DESKTOP) }))
        .with(d.X0.DESKTOP, () => ((0, p.I6)(i) ? (0, s.jsx)(tQ, { quest: i }) : (0, s.jsx)(th, { quest: i })))
        .with(d.X0.CONSOLE, () => (0, s.jsx)(tp, { quest: i, taskDetails: a }))
        .exhaustive();
}
function tU(e) {
    let { parentContainerRef: t } = e,
        { quest: n, taskDetails: i } = r.useContext(Y.$0),
        [a, l, o] = (0, x.Qo)(n, i),
        u = i.percentComplete > 0,
        c = (0, x.Vn)(n),
        C = (0, x.RR)({ quest: n }),
        m = l.length > 1 && !u && !c;
    return (0, s.jsxs)(O, {
        children: [
            (0, s.jsx)(tN, { activeScreen: a, selectPlatform: o }),
            a !== d.X0.SELECT &&
                (0, s.jsxs)("div", {
                    className: tT.oG,
                    children: [
                        m &&
                            (0, s.jsx)(eX.K, {
                                size: "sm",
                                "aria-label": ep.intl.string(ep.t["13/7kX"]),
                                onClick: () => o(null),
                                icon: eZ.n,
                                variant: "secondary",
                            }),
                        (0, s.jsx)(eT, {
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
function tB(e) {
    let { parentContainerRef: t } = e,
        { quest: n, taskDetails: i } = r.useContext(Y.$0),
        a = i.percentComplete > 0,
        l = (0, x.Vn)(n),
        o = (0, x.Hv)() && n.userStatus?.completedAt == null,
        u = r.useCallback(() => {
            if (o) {
                ((0, m.Y5)({
                    questId: n.id,
                    questContent: d.uF.QUEST_BAR_V2,
                    questContentCTA: w.Cy.QUEST_ACCESS_SUSPENDED,
                    sourceQuestContent: d.uF.QUEST_BAR_V2,
                }),
                    (0, g.FS)());
                return;
            }
            (0, g.d5)({
                quest: n,
                questContent: d.uF.QUEST_BAR_V2,
                sourceQuestContent: d.uF.QUEST_BAR_V2,
                sourceQuestContentCTA: w.Cy.QUEST_BAR_VIDEO_QUEST_PREVIEW,
            });
        }, [n, o]);
    return (0, s.jsxs)(O, {
        children: [
            (0, s.jsx)(tv, { onClick: u }),
            (0, s.jsx)(eT, {
                parentContainerRef: t,
                awaitingConsoleConnections: !1,
                hasMadeProgress: a,
                isProgressing: l,
                sourceQuestContent: d.uF.QUEST_BAR_V2,
            }),
        ],
    });
}
function tF(e) {
    let { parentContainerRef: t } = e,
        { quest: n, taskDetails: i } = r.useContext(Y.$0),
        a = i.percentComplete > 0,
        l = (0, x.Vn)(n);
    return (0, s.jsx)(O, {
        children: (0, s.jsx)(eT, {
            parentContainerRef: t,
            awaitingConsoleConnections: !1,
            hasMadeProgress: a,
            isProgressing: l,
            sourceQuestContent: d.uF.QUEST_BAR_V2,
        }),
    });
}
function tV(e) {
    let { parentContainerRef: t } = e,
        { quest: n } = r.useContext(Y.$0);
    return (0, p.t)({ quest: n }) || (0, p.g5)(n) || (0, p.fE)({ quest: n }) || (0, p.I6)(n)
        ? (0, s.jsx)(tU, { parentContainerRef: t })
        : (0, p.vv)(n)
          ? (0, s.jsx)(tB, { parentContainerRef: t })
          : (0, s.jsx)(tF, { parentContainerRef: t });
}
function tb(e) {
    let { containerRef: t } = e,
        { quest: n, taskDetails: i } = r.useContext(Y.$0),
        { expansionSpring: a } = r.useContext(U.PW),
        l = r.useRef(null),
        o = r.useRef(null),
        u = (0, x.I3)(n),
        c = null != u ? u.percentComplete : i.percentComplete;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(T.animated.div, {
                className: j()(tT.tv, tT.ag),
                style: {
                    backgroundImage: `linear-gradient(90deg, ${k.V1}, ${k.us})`,
                    opacity: (0, Z.a)(a.to({ range: [0, 1], output: [1, 0] })),
                },
            }),
            (0, s.jsxs)("div", {
                className: tT.Fe,
                ref: (e) => {
                    ("function" == typeof t ? t(e) : null != t && (t.current = e), null != e && (o.current = e));
                },
                children: [
                    (0, s.jsx)(eb, {}),
                    (0, s.jsx)("div", { className: tT.yF }),
                    (0, s.jsx)(en, { progressBarRef: l, isHovered: !1 }),
                    (0, s.jsx)(eN, {
                        contentLocation: "expanded",
                        progressBarRef: l,
                        isExpanded: !0,
                        percentComplete: c,
                        popoutTargetElementRef: o,
                    }),
                    (0, s.jsx)(tV, { parentContainerRef: o }),
                ],
            }),
            (0, s.jsx)("div", {
                className: j()(tT.tv, tT.Sx),
                style: { backgroundImage: `linear-gradient(90deg, ${k.V1}, ${k.us})` },
            }),
        ],
    });
}
async function tI(e, t, n, s) {
    (0, p.vv)(e)
        ? await (0, g.e0)(e, { questContent: t, questContentCTA: n, sourceQuestContent: s, sourceQuestContentCTA: n })
        : (0, eo.vA)(e)
          ? await (0, e0.Oy)(e.id, { questContent: t, questContentCTA: n, sourceQuestContent: s })
          : (0, e0.Oy)(e.id, { questContent: t, questContentCTA: n, sourceQuestContent: s });
}
function tO() {
    let { quest: e } = r.useContext(Y.$0),
        { isExpanded: t, isExpansionAnimationComplete: n } = (0, q.H)(),
        { expandedContentRef: i } = r.useContext(U.PW),
        { launchInGameActivity: a } = (0, x.zW)(e),
        l = (0, eo.vA)(e),
        o = r.useCallback(async () => {
            let t = l ? w.Cy.START_QUEST : w.Cy.ACCEPT_QUEST;
            (await tI(e, d.uF.QUEST_BAR_V2, t, d.uF.QUEST_BAR_V2), l && a());
        }, [e, a, l]);
    return e.userStatus?.enrolledAt != null
        ? (0, s.jsx)(tb, { containerRef: i })
        : (0, s.jsx)(ty, { isCtaInteractable: !t || n, containerRef: i, onAcceptQuest: o });
}
function tq() {
    let {
            expansionSpring: e,
            animatedComponentProps: t,
            recalculateAnimationPositions: n,
            mountPoints: i,
        } = r.useContext(U.PW),
        { isExpanded: a } = (0, q.H)();
    return (
        r.useEffect(() => {
            n();
        }, [n, a]),
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
                let { id: n, collapsedLeft: r, expandedLeft: a, collapsedTop: l, expandedTop: o, width: u } = t,
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
                                [e.to({ range: [0, 1], output: [r, a] }), e.to({ range: [0, 1], output: [l, o] })],
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
function tL() {
    let { quest: e } = r.useContext(Y.$0),
        t = e.userStatus?.enrolledAt != null;
    return (0, s.jsx)(z.A, {
        layoutVariant: t ? "inset" : "flush",
        header: (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(tq, {}), !t && (0, s.jsx)(eH, {})] }),
        children: (0, s.jsx)(tO, {}),
    });
}
var tk = n(731738),
    tP = n(807393),
    tD = n(260364);
function tw(e) {
    let {
        adCreativeId: t,
        adCreativeType: n,
        reportRenderingFailure: s,
        hasAssetsError: a,
        isEligibleForQuests: l,
        isQuestBarVisible: o,
        isVisibilityAnimationAtRest: u,
        isLoadingAssets: c,
        currentQuestVisibleReason: x,
        shouldShowQuestBar: C,
        isQuestEnrollmentBlocked: m,
    } = e;
    (r.useEffect(() => {
        a &&
            (s("asset_loading_error"),
            tP.A.increment({
                name: tk.K.QUEST_CONTENT_RENDERING_FAILURE,
                tags: [
                    `ad_creative_id:${t}`,
                    `ad_creative_type:${i.p[n]}`,
                    `quest_content:${(0, w.jO)(d.uF.QUEST_BAR)}`,
                    "reason:asset_loading_error",
                ],
            }));
    }, [a, t, n, s]),
        r.useEffect(() => {
            l || s("not_eligible_for_quest");
        }, [l, s]),
        r.useEffect(() => {
            o || !u || c || s(x);
        }, [o, u, c, x, s]),
        r.useEffect(() => {
            ((!C || m) && tD.A.clearTracking(), o && u && !c && !a && l && tD.A.stopTracking(t));
        }, [C, m, o, u, c, a, l, t]));
}
function tM(e) {
    let { isExpanded: t, questId: n } = e;
    return (
        (0, x.H6)({
            mode: t ? $.fP.EXPANDED : $.fP.COLLAPSED,
            questContent: d.uF.QUEST_BAR_V2,
            questId: n,
            sourceQuestContent: d.uF.QUEST_BAR_V2,
        }),
        null
    );
}
function t$() {
    return (
        r.useEffect(() => {
            u.trigger();
        }, []),
        null
    );
}
function tH(e) {
    let { quest: t } = r.useContext(Y.$0),
        { isQuestBarVisible: n, reason: s } = (0, h.TQ)({ quest: t }),
        { impressionRef: i } = e;
    return (
        tw({
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
function tW(e) {
    let { isExpanded: t } = e,
        { quest: n } = r.useContext(Y.$0);
    return (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(tM, { questId: n.id, isExpanded: t }), (0, s.jsx)(t$, {})],
    });
}
function tG(e) {
    let { children: t, overrideVisibility: n } = e,
        { quest: i } = r.useContext(Y.$0),
        a = (0, x.UH)(i);
    return (0, s.jsx)(f.Z, {
        questOrQuests: i,
        questContent: d.uF.QUEST_BAR_V2,
        overrideVisibility: n,
        onImpression: a,
        sourceQuestContent: d.uF.QUEST_BAR_V2,
        children: t,
    });
}
function tz(e) {
    let { quest: t } = e,
        n = r.useMemo(() => (0, p.vv)(t), [t]),
        a = t.userStatus?.completedAt != null,
        l = (0, x.fc)(t),
        o = r.useMemo(() => ({ type: i.p.QUEST, quest: t }), [t]);
    return (
        r.useEffect(() => {
            n && (0, g.l9)();
        }, [n]),
        (0, s.jsx)(Y.aV, {
            quest: t,
            taskDetails: l,
            children: (0, s.jsx)(W, {
                creative: o,
                collapsedContent: (0, s.jsx)(eq, {}, a ? "collapsed-with-rewards" : "collapsed-without-rewards"),
                expandedContent: (0, s.jsx)(tL, {}),
                renderCreativeContext: (e) => (0, s.jsx)(Y.l, { quest: t, children: e }),
                StateTracker: tH,
                ModeChangeTracker: tW,
                ImpressionTracker: tG,
            }),
        })
    );
}
function tY(e) {
    let t = (0, Y.o5)(),
        n = (0, Y.Q8)(t),
        s = (0, h.gJ)(n),
        { impressionRef: a } = e;
    return (
        tw({
            reportRenderingFailure: r.useCallback(
                (e) => {
                    (0, m.iE)({
                        adContentId: t.id,
                        adCreativeType: i.p.BOUNTY,
                        questContent: d.uF.QUEST_BAR,
                        sourceQuestContent: d.uF.QUEST_BAR_V2,
                        reason: e,
                        impressionId: a.current?.getId(),
                    });
                },
                [t.id, a],
            ),
            currentQuestVisibleReason: null,
            shouldShowQuestBar: s,
            ...e,
        }),
        null
    );
}
function tK(e) {
    let { isExpanded: t } = e,
        n = (0, Y.o5)();
    return (
        (0, x.H6)({
            mode: t ? $.fP.EXPANDED : $.fP.COLLAPSED,
            questContent: d.uF.QUEST_BAR_V2,
            adCreativeType: i.p.BOUNTY,
            adContentId: n.id,
            sourceQuestContent: d.uF.QUEST_BAR_V2,
        }),
        (0, s.jsx)(t$, {})
    );
}
function tX(e) {
    let { children: t, overrideVisibility: n } = e,
        r = (0, Y.o5)();
    return (0, s.jsx)(f.Z, {
        adContentId: r.id,
        adCreativeType: i.p.BOUNTY,
        questContent: d.uF.QUEST_BAR_V2,
        overrideVisibility: n,
        sourceQuestContent: d.uF.QUEST_BAR_V2,
        children: t,
    });
}
function tZ(e) {
    let { bounty: t } = e,
        n = (0, Y.Q8)(t);
    return (0, s.jsx)(Y.fF, {
        bounty: t,
        children: (0, s.jsx)(W, {
            creative: n,
            collapsedContent: (0, s.jsx)(G.A, { layoutVariant: "flush", children: (0, s.jsx)(A.A, {}) }),
            expandedContent: (0, s.jsx)(z.A, { layoutVariant: "flush", children: (0, s.jsx)(_.A, {}) }),
            StateTracker: tY,
            ModeChangeTracker: tK,
            ImpressionTracker: tX,
        }),
    });
}
function tJ(e) {
    let { noFillDecision: t } = e,
        n = (0, a.bG)([c.A], () => c.A.hasLayers());
    function r(e) {
        return (0, s.jsx)("div", { ref: e, "aria-hidden": !0, className: H.ui });
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
let t0 =
    221552 == n.j
        ? function () {
              let e = (0, h.wo)(),
                  t = (0, C.A)(d.p9.DESKTOP_ACCOUNT_PANEL_AREA, "useNoFillAd");
              switch (e.type) {
                  case i.p.QUEST: {
                      let { quest: t } = e;
                      return (0, s.jsx)(
                          E.y5,
                          {
                              source: $.rE.QUESTS_BAR,
                              adCreativeId: t.id,
                              adCreativeType: i.p.QUEST,
                              children: (0, s.jsx)(tz, { quest: t }),
                          },
                          t.id,
                      );
                  }
                  case i.p.BOUNTY: {
                      let { bounty: t } = e;
                      return (0, s.jsx)(
                          E.y5,
                          {
                              source: $.rE.QUESTS_BAR,
                              adCreativeId: t.id,
                              adCreativeType: i.p.BOUNTY,
                              children: (0, s.jsx)(tZ, { bounty: t }),
                          },
                          t.id,
                      );
                  }
                  case i.p.PLAYABLE:
                      return null;
                  case i.p.NO_FILL:
                      return null != t ? (0, s.jsx)(tJ, { noFillDecision: t }, t.decisionId) : null;
              }
          }
        : null;
