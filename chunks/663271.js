(n.r(t), n.d(t, { QuestBar: () => tJ, default: () => t1 }));
var s = n(477900),
    r = n(582128),
    l = n(503698),
    i = n.n(l),
    o = n(941143),
    a = n(323889),
    u = n(17928),
    c = n(475743),
    d = n(840251),
    x = n(688151);
let m = new d.E([], x.$G.QUEST_BAR_RENDERED, { location: "quest bar rendered" });
var C = n(186111),
    p = n(859703),
    f = n(738822),
    E = n(77870),
    h = n(466242),
    _ = n(971276),
    g = n(851936),
    A = n(792620),
    S = n(557637),
    j = n(657792),
    R = n(518293),
    v = n(617986);
n(321073);
var T = n(333007),
    y = n(765671),
    Q = n(398025);
let N = "#00000000",
    U = "#CDD8FF1A",
    F = r.createContext({
        registerComponent: () => {},
        unregisterComponent: () => {},
        animatedComponents: {},
        expandedContentRef: r.createRef(),
        collapsedContentRef: r.createRef(),
        recalculateAnimationPositions: () => {},
        animatedComponentProps: [],
        expansionSpring: new o.SpringValue(0),
        mountPoints: new Map(),
    });
function B(e) {
    let { children: t, id: n, inState: l, isTextTransition: i = !1, ref: a } = e,
        {
            recalculateAnimationPositions: u,
            registerComponent: c,
            unregisterComponent: d,
            expansionSpring: x,
            mountPoints: m,
        } = r.useContext(F),
        C = r.useRef(null),
        p = r.useRef(null),
        f = r.useRef(void 0);
    (r.useEffect(() => {
        u();
    }, [u]),
        r.useLayoutEffect(() => {
            let e = C.current;
            return (
                null != e && c(e, n, l),
                () => {
                    null != e && d(n, l);
                }
            );
        }, [n, l, c, d]));
    let E = r.useCallback(
        (e) => {
            let { height: t } = e;
            f.current !== t && (u(), (f.current = t));
        },
        [u],
    );
    (0, y.i4)(C, E);
    let h = m.get(n)?.current,
        _ = null;
    return (
        null == h
            ? (_ = null)
            : i && null != x
              ? (_ = (0, s.jsxs)(s.Fragment, {
                    children: [
                        "collapsed" === l &&
                            (0, T.createPortal)(
                                (0, s.jsx)(o.animated.div, {
                                    style: {
                                        position: "absolute",
                                        opacity: (0, Q.a)(x.to({ range: [0, 1], output: [1, 0] })),
                                    },
                                    children: t(p),
                                }),
                                h,
                            ),
                        "expanded" === l &&
                            (0, T.createPortal)(
                                (0, s.jsx)(o.animated.div, {
                                    style: {
                                        position: "absolute",
                                        opacity: (0, Q.a)(x.to({ range: [0, 1], output: [0, 1] })),
                                    },
                                    children: t(p),
                                }),
                                h,
                            ),
                    ],
                }))
              : "collapsed" === l && (_ = (0, T.createPortal)(t(p), h)),
        (0, s.jsxs)("div", {
            style: { opacity: +((null == _ && "collapsed" === l) || null == h) },
            ref: a,
            children: [t(C), _],
        })
    );
}
let I = (e) => {
    let { children: t, expandedContentRef: n, collapsedContentRef: l, expansionSpring: i } = e,
        [o, a] = r.useState({}),
        [u, c] = r.useState([]),
        [d, x] = r.useState(() => new Map()),
        m = r.useCallback((e, t, n) => {
            (a((s) => {
                let r = s[t] ?? { expanded: null, collapsed: null };
                return { ...s, [t]: { ...r, [n]: e } };
            }),
                x((e) => {
                    let n = new Map(e);
                    return (n.set(t, r.createRef()), n);
                }));
        }, []),
        C = r.useCallback((e, t) => {
            let n = !1;
            (a((s) => {
                let r = s[e] ?? { expanded: null, collapsed: null };
                return ((r[t] = null), (n = null == r.expanded && null == r.collapsed), { ...s, [e]: r });
            }),
                n &&
                    x((t) => {
                        let n = new Map(t);
                        return (n.delete(e), n);
                    }));
        }, []),
        p = r.useCallback(() => {
            let e = [];
            for (let t in o) {
                if (null == o[t] || null == n.current || null == l.current) continue;
                let s = o[t].collapsed,
                    r = o[t].expanded;
                if (null == s || null == r) continue;
                let i = r.getBoundingClientRect(),
                    a = n.current.getBoundingClientRect(),
                    u = s.getBoundingClientRect(),
                    c = l.current.getBoundingClientRect(),
                    d = i.top - a.top + 12,
                    x = u.top - c.top,
                    m = i.left - a.left + 12,
                    C = u.left - c.left,
                    p = -i.right + a.right + 12,
                    f = -u.right + c.right;
                e.push({
                    id: t,
                    collapsedLeft: C,
                    expandedLeft: m,
                    collapsedRight: f,
                    expandedRight: p,
                    collapsedTop: x,
                    expandedTop: d,
                    width: i.width,
                });
            }
            c(e);
        }, [o, n, l, c]),
        f = r.useMemo(
            () => ({
                registerComponent: m,
                unregisterComponent: C,
                animatedComponents: o,
                expandedContentRef: n,
                collapsedContentRef: l,
                recalculateAnimationPositions: p,
                animatedComponentProps: u,
                expansionSpring: i,
                mountPoints: d,
            }),
            [m, C, o, n, l, p, u, i, d],
        );
    return (0, s.jsx)(F.Provider, { value: f, children: t });
};
var b = n(717421),
    O = n(775602);
let V = r.createContext({ springConfig: {}, isExpanded: !1 });
function L(e) {
    let t = r.useMemo(
        () => ({ springConfig: e.springConfig, isExpanded: e.isExpanded }),
        [e.springConfig, e.isExpanded],
    );
    return (0, s.jsx)(V.Provider, { value: t, children: e.children });
}
function q(e) {
    let { children: t } = e,
        { springConfig: n, isExpanded: l } = r.useContext(V),
        i = (0, u.bG)([O.Ay], () => O.Ay.useReducedMotion),
        { ref: a, height: d = null } = (0, y.Ay)(),
        x = (0, c.Ay)(d) ?? null,
        [{ height: m }, C] = (0, b.z)(() => ({ from: { height: 0 }, config: n }));
    return (
        r.useLayoutEffect(() => {
            null !== d && C({ height: d, immediate: !l || i || null === x });
        }, [d, C, l, i, x]),
        (0, s.jsx)(o.animated.div, {
            style: { height: null === x ? "auto" : m, overflow: "hidden" },
            children: (0, s.jsx)("div", { style: { overflow: "hidden" }, ref: a, children: t }),
        })
    );
}
var k = n(409626),
    M = n(692969),
    w = n(284846),
    P = n(190107);
let D = r.createContext({
        onCtxMenuClose: () => {},
        onCtxMenuOpen: () => {},
        onCtxMenuSelect: () => {},
        onGameSheetOpen: () => {},
        onGameSheetClose: () => {},
        collapsedHeight: 0,
        isExpanded: !1,
        isExpansionAnimationComplete: !1,
        quest: null,
        taskDetails: null,
    }),
    G = r.createContext({ hasAlreadyLinked: void 0, onClickGameTitle: void 0 });
function H(e) {
    let { children: t, quest: n } = e,
        { hasAlreadyLinked: l } = (0, w.U)(n),
        i = (0, M.A)({
            applicationId: (0, A.xc)(n),
            location: P.rE.QUEST_INSTRUCTIONS,
            source: k.GameProfileSources.QuestBar,
        }),
        o = r.useMemo(() => ({ hasAlreadyLinked: l, onClickGameTitle: i }), [l, i]);
    return (0, s.jsx)(G.Provider, { value: o, children: t });
}
function W(e) {
    let {
            children: t,
            isExpanded: n,
            isExpansionAnimationComplete: l,
            onCtxMenuClose: i,
            onCtxMenuOpen: o,
            onCtxMenuSelect: a,
            onGameSheetOpen: u,
            onGameSheetClose: c,
            collapsedHeight: d,
            quest: x,
            taskDetails: m,
        } = e,
        C = r.useMemo(
            () => ({
                isExpanded: n,
                isExpansionAnimationComplete: l,
                onCtxMenuClose: i,
                onCtxMenuOpen: o,
                onCtxMenuSelect: a,
                onGameSheetOpen: u,
                onGameSheetClose: c,
                collapsedHeight: d,
                quest: x,
                taskDetails: m,
            }),
            [n, l, i, o, a, u, c, d, x, m],
        );
    return (0, s.jsx)(D.Provider, { value: C, children: (0, A.I6)(x) ? (0, s.jsx)(H, { quest: x, children: t }) : t });
}
var z = n(717695),
    $ = n(776310);
function K() {
    let e = document.body.style.getPropertyValue("--custom-guild-sidebar-width").slice(0, -2);
    return parseInt("" !== e ? e : "375");
}
var X = n(536283),
    Y = n(489811);
let Z = (e) => {
    let { overlayRef: t, progressBarRef: n, isHovered: l } = e,
        { quest: a, isExpanded: d } = r.useContext(D),
        { expansionSpring: x } = r.useContext(F),
        { completionSpring: m, startCompletionAnimation: p } = (function () {
            let [{ spring: e }, t] = (0, b.z)(() => ({ spring: 0 }), "animate-always");
            return {
                completionSpring: e,
                startCompletionAnimation: r.useCallback(() => {
                    (t({ spring: 1 }), t({ spring: 0, delay: 2e3 }));
                }, [t]),
            };
        })(),
        f = a.userStatus?.completedAt != null,
        E = r.useRef(!1),
        h = (0, u.bG)([O.Ay], () => O.Ay.useReducedMotion),
        _ = r.useRef(null),
        g = (0, u.bG)([C.A], () => C.A.hasLayers()),
        A = (0, c.Ay)(g),
        [S, j] = r.useState(null),
        [R, v] = r.useState(null),
        y = r.useRef(new $.OH({ gravity: 0, wind: 0 })),
        N = (0, $.f9)(S, R),
        U = r.useMemo(() => ["#51BC9D"], []),
        B = r.useCallback(() => {
            if (h) return;
            let e = n.current,
                t = _.current;
            if (null != t && null != e && N.isReady) {
                var s, r, l, i;
                let { x: n, y: o } = e.getBoundingClientRect(),
                    { x: a, y: u } = t.getBoundingClientRect();
                N.createMultipleConfetti(
                    ((s = n - a),
                    (r = o - u),
                    (l = e.clientHeight),
                    (i = e.clientWidth),
                    {
                        ...X.Mw,
                        position: { type: "static-random", minValue: { x: s, y: r }, maxValue: { x: s + l, y: r + i } },
                        velocity: { type: "static-random", minValue: { x: -20, y: -20 }, maxValue: { x: 20, y: 20 } },
                        opacity: { type: "linear", value: 2, addValue: -0.1 },
                        dragCoefficient: { type: "static", value: 0.166 },
                        size: { type: "static-random", minValue: 2, maxValue: 3 },
                    }),
                    100,
                );
            }
        }, [n, _, N, h]),
        I = (0, c.Ay)(d);
    return (r.useEffect(() => {
        f && d && !I && (p(), B());
    }, [d, f, p, B, I]),
    r.useEffect(() => {
        f &&
            !g &&
            A &&
            setTimeout(() => {
                (p(), B());
            }, 200);
    }, [f, A, g, p, B]),
    r.useEffect(() => {
        N.isReady && (!E.current && f && (p(), B()), (E.current = f));
    }, [f, E, B, p, N]),
    r.useEffect(() => {
        l && f && (p(), B());
    }, [l, f, p, B]),
    h)
        ? null
        : (0, s.jsxs)("div", {
              className: Y.iE,
              "aria-hidden": "true",
              ref: _,
              children: [
                  (0, s.jsx)(o.animated.div, { className: Y.Tp, style: { opacity: (0, Q.a)(m) } }),
                  (0, s.jsx)(o.animated.div, { className: i()(Y.sJ, Y.ix), style: { opacity: (0, Q.a)(m) } }),
                  (0, s.jsxs)(o.animated.div, {
                      className: Y.KG,
                      style: { transform: x.to({ range: [0, 1], output: [-35, 0] }).to((e) => `translateY(${e}px)`) },
                      children: [
                          (0, s.jsx)($.Fk, { ref: j, className: Y.t_, environment: y.current }),
                          (0, s.jsx)($.K_, {
                              ref: v,
                              sprites: ["/assets/b909790cf1d80597.svg"],
                              colors: U,
                              spriteWidth: X.wn,
                              spriteHeight: X.wn,
                          }),
                          null != t.current &&
                              (0, T.createPortal)(
                                  (0, s.jsx)(o.animated.div, {
                                      className: i()(Y.sJ, Y.d7),
                                      style: { opacity: (0, Q.a)(m) },
                                  }),
                                  t.current,
                              ),
                      ],
                  }),
              ],
          });
};
var J = n(331940);
let ee = function (e) {
    let { ref: t, ...n } = e,
        { children: l, className: a, layoutVariant: u, backgroundImage: c, onMouseEnter: d, onMouseLeave: x } = n,
        { expansionSpring: m } = r.useContext(F),
        { isExpanded: C } = r.useContext(D);
    return (0, s.jsx)(o.animated.div, {
        ref: t,
        "aria-hidden": C,
        className: i()(a, J.hR, { [J.Ag]: C, [J.MN]: "inset" === u }),
        style: { opacity: (0, Q.a)(m.to({ range: [0, 1], output: [1, 0] })), backgroundImage: c },
        onMouseEnter: d,
        onMouseLeave: x,
        children: (0, s.jsx)("div", { className: J.o8, children: l }),
    });
};
var et = n(821609),
    en = n(3738),
    es = n(561844),
    er = n(590202),
    el = n(971649),
    ei = n(651892),
    eo = n(620954),
    ea = n(814793),
    eu = n(753386),
    ec = n(608935),
    ed = n(887899),
    ex = n(79545),
    em = n(862611),
    eC = n(630037),
    ep = n(105292),
    ef = n(191559);
function eE(e) {
    let { quest: t, sourceQuestContent: n, taskDetails: r } = e,
        l = (0, E.Hv)(),
        i = (0, s.jsx)(et.$, {
            variant: "primary",
            fullWidth: !0,
            onClick: function () {
                if (l) {
                    ((0, es.Y5)({
                        questId: t.id,
                        questContent: f.uF.QUEST_BAR_V2,
                        questContentCTA: er.Cy.QUEST_ACCESS_SUSPENDED,
                        sourceQuestContent: n,
                    }),
                        (0, v.FS)());
                    return;
                }
                let e = t.userStatus?.enrolledAt == null ? er.Cy.ACCEPT_QUEST : er.Cy.WATCH_VIDEO;
                (0, v.d5)({
                    quest: t,
                    questContent: f.uF.QUEST_BAR_V2,
                    sourceQuestContent: n,
                    sourceQuestContentCTA: e,
                });
            },
            size: "sm",
            text: (0, eu.WM)(r),
            "aria-disabled": l || void 0,
        });
    return l ? (0, s.jsx)(ec.A, { children: i }) : i;
}
function eh(e) {
    let { quest: t, sourceQuestContent: n } = e,
        r = (0, el.wW)(),
        l = (0, ei.wr)(t);
    return (0, s.jsx)(et.$, {
        size: "sm",
        fullWidth: !0,
        onClick: () =>
            (0, eo.pu)(t, {
                content: f.uF.QUEST_BAR_V2,
                ctaContent: er.Cy.OPEN_GAME_LINK,
                impressionId: r(),
                sourceQuestContent: n,
            }),
        text: l,
    });
}
function e_(e) {
    let { quest: t, sourceQuestContent: n } = e,
        r = (0, el.wW)();
    return (0, s.jsx)(et.$, {
        fullWidth: !0,
        onClick: () =>
            (0, eo.se)(
                { quest: t },
                {
                    content: f.uF.QUEST_BAR_V2,
                    ctaContent: er.Cy.CONNECT_CONSOLE,
                    impressionId: r(),
                    sourceQuestContent: n,
                },
            ),
        size: "sm",
        text: ep.intl.string(ep.t.csptqV),
    });
}
function eg(e) {
    let { quest: t } = e,
        n = (0, en.NA)({ quest: t }),
        { launchInGameActivity: r } = (0, E.zW)(t);
    return (0, ea.vA)(t)
        ? (0, s.jsx)(et.$, { fullWidth: !0, variant: "primary", icon: (0, v.Oz)(t), onClick: r, size: "sm", text: n })
        : null;
}
function eA(e) {
    let {
            quest: t,
            sourceQuestContent: n,
            taskDetails: r,
            popoutTargetElementRef: l,
            onGameSheetOpened: i,
            onGameSheetClosed: o,
        } = e,
        { applications: a } = r;
    return (0, s.jsx)(em.A, {
        quest: t,
        sourceQuestContent: n,
        applications: a ?? [],
        targetElementRef: l,
        onGameSheetOpened: i,
        onGameSheetClosed: o,
        children: (e) =>
            (0, s.jsx)(et.$, {
                variant: "secondary",
                fullWidth: !0,
                size: "sm",
                text: ep.intl.string(ep.t["93PTEs"]),
                ...e,
            }),
    });
}
function eS(e) {
    let { quest: t, ctaLabel: n, onClick: r, questContent: l = f.uF.QUEST_BAR_V2, sourceQuestContent: i } = e,
        o = (0, eC.D)({ quest: t, questContent: l, sourceQuestContent: i, onBeforeClaim: r });
    return (0, s.jsx)(et.$, {
        fullWidth: !0,
        onClick: o,
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
            hasMadeProgress: l,
            isProgressing: i,
            popoutTargetElementRef: o,
        } = e,
        { quest: a, onGameSheetOpen: u, onGameSheetClose: c, taskDetails: d } = r.useContext(D),
        [x] = (0, E.Qo)(a, d),
        m = a.userStatus?.completedAt != null,
        C = (0, A.vv)(a),
        p = (0, A.I6)(a),
        h = x !== f.X0.SELECT && !l && !i,
        _ = null;
    return (
        m
            ? (_ = (0, s.jsx)(eS, { quest: a, sourceQuestContent: t }))
            : p
              ? (_ = (0, s.jsx)(ed.A, {
                    quest: a,
                    surface: ex.V3.QUEST_BAR_FOOTER,
                    size: "sm",
                    analyticsCtxQuestContent: f.uF.QUEST_BAR_V2,
                    analyticsCtxSourceQuestContent: t,
                }))
              : C
                ? (_ = (0, s.jsx)(eE, { quest: a, sourceQuestContent: t, taskDetails: d }))
                : (0, ea.vA)(a)
                  ? (_ = (0, s.jsx)(eg, { quest: a }))
                  : x === f.X0.CONSOLE && n
                    ? (_ = (0, s.jsx)(e_, { quest: a, sourceQuestContent: t }))
                    : h && (0, ea.ui)(a)
                      ? (_ = (0, s.jsx)(eA, {
                            quest: a,
                            sourceQuestContent: t,
                            taskDetails: d,
                            popoutTargetElementRef: o,
                            onGameSheetOpened: u,
                            onGameSheetClosed: c,
                        }))
                      : h && (_ = (0, s.jsx)(eh, { quest: a, sourceQuestContent: t })),
        null == _ ? null : (0, s.jsx)("div", { className: ef.lO, children: _ })
    );
}
function eR(e) {
    return (0, s.jsx)(ej, { ...e, popoutTargetElementRef: e.parentContainerRef });
}
var ev = n(834730),
    eT = n(62405),
    ey = n(453384),
    eQ = n(649480);
let eN = function (e) {
    let { isExpanded: t, contentLocation: n, progressBarRef: l, percentComplete: i, popoutTargetElementRef: o } = e,
        { quest: a, onGameSheetOpen: u, onGameSheetClose: c, taskDetails: d } = r.useContext(D),
        { hasAlreadyLinked: x, onClickGameTitle: m } = r.useContext(G),
        [C] = (0, E.Qo)(a, d),
        p = (0, en.VX)(a, x),
        h = (0, en.tH)({
            quest: a,
            isExpanded: t,
            activeScreen: C,
            sourceQuestContent: f.uF.QUEST_BAR_V2,
            popoutTargetElementRef: o,
            onGameSheetOpened: u,
            onGameSheetClosed: c,
            hasAlreadyLinked: x,
            onClickGameTitle: m,
        });
    return (0, s.jsxs)("div", {
        className: eQ.Z0,
        children: [
            (0, s.jsx)(B, {
                inState: n,
                id: "progress-bar",
                ref: l,
                children: (e) =>
                    (0, s.jsx)(ey.A, {
                        ref: e,
                        style: "small",
                        percentComplete: i,
                        size: 42,
                        children: (0, s.jsx)(eT.A, {
                            fullWidth: !0,
                            quest: a,
                            location: P.rE.QUESTS_BAR,
                            questContent: f.uF.QUEST_BAR_V2,
                            autoplay: !1,
                            sourceQuestContent: f.uF.QUEST_BAR_V2,
                        }),
                    }),
            }),
            (0, s.jsxs)("div", {
                className: eQ.NZ,
                children: [
                    (0, s.jsx)(B, {
                        inState: n,
                        id: "progress-title",
                        children: (e) =>
                            (0, s.jsx)(ev.E, {
                                ref: e,
                                className: eQ.FZ,
                                color: "text-strong",
                                variant: "text-sm/semibold",
                                children: p,
                            }),
                    }),
                    (0, s.jsx)(B, {
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
    eF = n(365199),
    eB = n(270045),
    eI = n(316878);
function eb() {
    let { quest: e, onCtxMenuOpen: t, onCtxMenuClose: n, onCtxMenuSelect: l } = r.useContext(D),
        o = (0, E.S5)(e.config.expiresAt);
    return (0, s.jsxs)("div", {
        className: eI.pS,
        children: [
            (0, s.jsx)(ev.E, {
                variant: "text-xxs/medium",
                className: i()(eI.Uu, eI.TK),
                children: ep.intl.format(ep.t["pX+fmn"], { expirationDate: o }),
            }),
            (0, s.jsx)(eB.C, {
                onOpen: t,
                onClose: n,
                onSelect: l,
                questContent: f.uF.QUEST_BAR_V2,
                quest: e,
                shouldShowDisclosure: !1,
                showShareLink: !0,
                sourceQuestContent: f.uF.QUEST_BAR_V2,
                children: (e) =>
                    (0, s.jsx)(eU.D, {
                        ...e,
                        className: eI.rb,
                        "aria-label": ep.intl.string(ep.t.DEoVWZ),
                        children: (0, s.jsx)(eF.MoreHorizontalIcon, {
                            size: "md",
                            color: "currentColor",
                            className: i()(eI.Bx, eI.U9),
                        }),
                    }),
            }),
        ],
    });
}
var eO = n(379073);
function eV(e) {
    let { progressBarRef: t } = e,
        { quest: n, taskDetails: l } = r.useContext(D),
        i = n.userStatus?.completedAt != null,
        o = n.userStatus?.enrolledAt != null,
        a = (0, E.I3)(n),
        u = null != a ? a.percentComplete : l.percentComplete,
        c = r.useRef(null);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            i && (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(eb, {}), (0, s.jsx)("div", { className: eO.y })] }),
            o
                ? (0, s.jsx)(eN, {
                      contentLocation: "collapsed",
                      progressBarRef: t,
                      isExpanded: !1,
                      percentComplete: u,
                  })
                : null,
            i &&
                (0, s.jsx)("div", {
                    ref: c,
                    children: (0, s.jsx)(eR, {
                        parentContainerRef: c,
                        awaitingConsoleConnections: !1,
                        hasMadeProgress: !0,
                        isProgressing: !1,
                        sourceQuestContent: f.uF.QUEST_BAR_V2,
                    }),
                }),
        ],
    });
}
function eL(e) {
    let { className: t, contentRef: n, overlayRef: l } = e,
        { quest: i } = r.useContext(D),
        o = i.userStatus?.completedAt != null,
        a = i.userStatus?.enrolledAt != null,
        u = r.useRef(null),
        [c, d] = r.useState(!1);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            o && (0, s.jsx)(Z, { overlayRef: l, progressBarRef: u, isHovered: c }),
            (0, s.jsx)(ee, {
                ref: n,
                className: t,
                layoutVariant: a ? "inset" : "flush",
                backgroundImage: o ? `linear-gradient(90deg, ${N}, ${U})` : void 0,
                onMouseEnter: () => d(!0),
                onMouseLeave: () => d(!1),
                children: (0, s.jsx)(eV, { progressBarRef: u }),
            }),
        ],
    });
}
var eq = n(290136),
    ek = n(661531),
    eM = n(57718),
    ew = n(393824);
let eP = function (e) {
    let { isFullyExpanded: t, partnerBranding: n } = e,
        l = {
            label: !(function () {
                let [e, t] = r.useState(() => 270 > K());
                return (
                    r.useEffect(() => {
                        let e = new MutationObserver(() => {
                            t(270 > K());
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
        a = (0, u.bG)([O.Ay], () => O.Ay.useReducedMotion),
        { quest: c } = r.useContext(D),
        { expansionSpring: d } = r.useContext(F),
        x = l ? -4 : 6;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(o.animated.div, {
                className: ew.tE,
                style: {
                    transform: (0, o.to)(
                        [
                            d.to({ range: [0, 1], output: [0, 0] }),
                            d.to({ range: [0, 1], output: [0, 82] }),
                            d.to({ range: [0, 1], output: [1, 1.3333333333333333] }),
                        ],
                        (e, t, n) => `translate(${e}px, ${t}px) scale(${n})`,
                    ),
                },
                children: (0, s.jsx)(eT.A, {
                    learnMoreStyle: "text",
                    learnMoreFontSize: t ? 9 : void 0,
                    quest: c,
                    location: P.rE.QUESTS_BAR,
                    questContent: f.uF.QUEST_BAR_V2,
                    autoplay: t && !a,
                    sourceQuestContent: f.uF.QUEST_BAR_V2,
                    style: { width: 48, height: 48, marginRight: 8, borderRadius: 6 },
                }),
            }),
            (0, s.jsxs)(o.animated.div, {
                className: i()(ew.pm, { [ew.nd]: l }),
                style: {
                    transform: (0, o.to)(
                        [d.to({ range: [0, 1], output: [0, -48] }), d.to({ range: [0, 1], output: [0, x] })],
                        (e, t) => `translate(${e}px, ${t}px)`,
                    ),
                },
                children: [
                    (0, s.jsx)("div", { className: i()({ [ew.Iu]: !l }), children: n }),
                    (0, s.jsx)(o.animated.div, {
                        className: i()(ew.ol, { [ew.yZ]: l }),
                        style: { opacity: (0, Q.a)(d.to({ range: [0, 1], output: [l ? 1 : 0.7, 0] })) },
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
var eD = n(886030);
let eG = (0, o.animated)(eM.Ay),
    eH = function () {
        let e = (0, el.wW)(),
            { expansionSpring: t } = r.useContext(F),
            {
                onCtxMenuOpen: n,
                onCtxMenuClose: l,
                onCtxMenuSelect: a,
                isExpanded: u,
                isExpansionAnimationComplete: c,
                quest: d,
            } = r.useContext(D),
            x = r.useCallback(() => {
                (0, v.Zc)(d, {
                    content: f.uF.QUEST_BAR_V2,
                    ctaContent: er.Cy.OPEN_DISCLOSURE,
                    sourceQuestContent: f.uF.QUEST_BAR_V2,
                });
            }, [d]),
            m = r.useCallback(() => {
                (0, eo.pu)(d, {
                    content: f.uF.QUEST_BAR_HEADER,
                    ctaContent: er.Cy.OPEN_GAME_LINK,
                    impressionId: e(),
                    sourceQuestContent: f.uF.QUEST_BAR_V2,
                });
            }, [e, d]),
            C = u && c,
            p = (0, s.jsx)(eU.D, {
                onClick: m,
                className: i()(eD.vk, { [eD.wm]: C }),
                children: (0, s.jsx)(eG, {
                    quest: d,
                    withGameTile: !1,
                    logotypeClassName: eD.Iu,
                    logotypeStyle: {
                        height: 24,
                        maxWidth: 92,
                        transform: (0, o.to)([t.to({ range: [0, 1], output: [1, 1] })], (e) => `scale(${e})`),
                    },
                }),
            });
        return (0, s.jsxs)(o.animated.div, {
            className: i()(eD.iE, eD.Ht, { [eD.tT]: C }),
            style: { transform: (0, o.to)([t.to({ range: [0, 1], output: [6, 0] })], (e) => `translateY(${e}px)`) },
            children: [
                (0, s.jsx)(o.animated.div, {
                    className: eD.Tu,
                    style: { opacity: (0, Q.a)(t.to({ range: [0, 1], output: [0, 1] })) },
                }),
                (0, s.jsx)(eP, { isFullyExpanded: C, partnerBranding: p }),
                (0, s.jsxs)(o.animated.div, {
                    className: eD.P0,
                    style: { opacity: (0, Q.a)(t.to({ range: [0, 1], output: [0, 1] })) },
                    children: [
                        (0, s.jsxs)(eU.D, {
                            className: eD.y8,
                            onClick: x,
                            children: [
                                (0, s.jsx)(ev.E, {
                                    color: "text-overlay-light",
                                    variant: "text-xs/normal",
                                    children: ep.intl.string(ep.t.o6FLcF),
                                }),
                                (0, s.jsx)(eq.CircleQuestionIcon, { color: ek.A.colors.WHITE, className: eD.P$ }),
                            ],
                        }),
                        (0, s.jsx)(eB.C, {
                            onOpen: n,
                            onClose: l,
                            onSelect: a,
                            questContent: f.uF.QUEST_BAR_V2,
                            quest: d,
                            shouldShowDisclosure: !0,
                            showShareLink: !0,
                            sourceQuestContent: f.uF.QUEST_BAR_V2,
                            children: (e) =>
                                (0, s.jsx)(eU.D, {
                                    ...e,
                                    className: i()(eD.uJ, eD.rb),
                                    "aria-label": ep.intl.string(ep.t.DEoVWZ),
                                    children: (0, s.jsx)(eF.MoreHorizontalIcon, {
                                        size: "md",
                                        color: "currentColor",
                                        className: i()(eD.Bx, eD.ON),
                                    }),
                                }),
                        }),
                    ],
                }),
            ],
        });
    };
var eW = n(506500);
let ez = function (e) {
    let { children: t, header: n, className: l, layoutVariant: a } = e,
        { collapsedHeight: u, isExpanded: c } = r.useContext(D),
        { expansionSpring: d } = r.useContext(F);
    return (0, s.jsxs)(o.animated.div, {
        "aria-hidden": !c,
        className: i()(l, eW.R, { [eW.w]: "inset" === a }),
        style: {
            transform: (0, o.to)(
                [d.to({ range: [0, 1], output: [0, -100] }), d.to({ range: [0, 1], output: [0, u] })],
                (e, t) => `translateY(calc(${e}% + ${t}px))`,
            ),
        },
        children: [n, (0, s.jsx)(o.animated.div, { style: { opacity: 1 }, children: t })],
    });
};
n(801541);
var e$ = n(889137),
    eK = n(417270),
    eX = n(782134),
    eY = n(297264),
    eZ = n(825484),
    eJ = n(408278),
    e0 = n(921853),
    e1 = n(607470),
    e2 = n(396813),
    e3 = n(405670),
    e7 = n(112142),
    e6 = n(646917),
    e8 = n(291749),
    e9 = n(576761),
    e5 = n(895253),
    e4 = n(976019),
    te = n(442734),
    tt = n(139384),
    tn = n(114046),
    ts = n(695366),
    tr = n(274670),
    tl = n(144779),
    ti = n(30370),
    to = n(178540),
    ta = n(104886),
    tu = n(18437),
    tc = n(780964),
    td = n(766075),
    tx = n(52093),
    tm = n(575630);
function tC(e) {
    let { text: t, quest: n, sourceQuestContent: r } = e,
        l = (0, tu.Ut)(),
        i = (0, el.wW)();
    return (0, s.jsx)(eU.D, {
        className: tm.Z0,
        onClick: () => {
            ((0, ta.E5)(ta.kI.STEP_2_CLICKED_INTERNAL, "console_connection_step")
                ? (0, tr.r)({
                      type: tl.F.CLICK_INTERNAL,
                      adCreativeType: a.p.QUEST,
                      adCreativeId: n.id,
                      questContentCTA: er.Cy.VIEW_CONSOLE_CONNECTIONS_LINK,
                      surfaceId: f.uF.QUEST_BAR_V2,
                      sourceQuestContent: r,
                      impressionId: i(),
                  })
                : l({
                      questId: n.id,
                      questContent: f.uF.QUEST_BAR_V2,
                      questContentCTA: er.Cy.VIEW_CONSOLE_CONNECTIONS_LINK,
                      sourceQuestContent: r,
                  }),
                (0, td.openUserSettings)(tc.X.CONNECTIONS_CATEGORY));
        },
        children: (0, s.jsx)(ev.E, { "aria-label": t, color: "none", variant: "text-xxs/normal", children: t }),
    });
}
function tp(e) {
    let { xboxAndPlaystationAccounts: t, quest: n, sourceQuestContent: r } = e;
    return t.length > 0
        ? (0, s.jsx)(tC, { text: ep.intl.string(ep.t["qiS+xj"]), quest: n, sourceQuestContent: r })
        : null;
}
function tf(e) {
    return (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(tx.L5, { children: ep.intl.string(ep.t.EJFSvD) }), (0, s.jsx)(tp, { ...e })],
    });
}
var tE = n(607886);
function th(e) {
    return (0, s.jsx)(ev.E, {
        className: tE.eW,
        color: "text-muted",
        variant: "text-xxs/normal",
        children: e.children,
    });
}
function t_(e) {
    let { quest: t, useReducedMotion: n } = e,
        l = (0, R.H1)(t.id, f.uF.QUEST_BAR_V2, f.uF.QUEST_BAR_V2),
        o = (0, R.Xf)({ useReducedMotion: n }),
        u = (0, tu.Ut)(),
        c = (0, el.wW)(),
        d = (0, to.O)((e) => e.getErrorHints(t.id)),
        { startingConsoleQuest: x, startConsoleQuest: m } = (0, E.Wj)({
            questId: t.id,
            beforeRequest: () => {
                ((0, ta.E5)(ta.kI.STEP_2_CLICKED_INTERNAL, "quest_bar_console_task_checklist")
                    ? (0, tr.r)({
                          type: tl.F.CLICK_INTERNAL,
                          adCreativeType: a.p.QUEST,
                          adCreativeId: t.id,
                          questContentCTA: er.Cy.DEFIBRILLATOR,
                          surfaceId: f.uF.QUEST_BAR_V2,
                          sourceQuestContent: f.uF.QUEST_BAR_V2,
                          impressionId: c(),
                      })
                    : u({
                          questId: t.id,
                          questContent: f.uF.QUEST_BAR_V2,
                          questContentCTA: er.Cy.DEFIBRILLATOR,
                          sourceQuestContent: f.uF.QUEST_BAR_V2,
                      }),
                    o.startAnimation());
            },
            afterRequest: o.stopAnimation,
        }),
        { header: C, renderBody: p } = r.useMemo(() => {
            let e = d.length > 0,
                n = t.config.messages.gameTitle;
            return {
                header: e
                    ? (0, ea.ui)(t)
                        ? ep.intl.string(ep.t.N33EuL)
                        : ep.intl.formatToPlainString(ep.t["28Ql27"], { gameTitle: n })
                    : (0, ea.ui)(t)
                      ? ep.intl.string(ep.t.YstzGO)
                      : ep.intl.formatToPlainString(ep.t.gX0Qcx, { gameTitle: n }),
                renderBody: e
                    ? function () {
                          return (0, s.jsx)(s.Fragment, {
                              children: d.map((e, n) => {
                                  if (e.type === tn._.EXPIRED_CREDENTIAL) {
                                      let r = ti.A.getAccount(e.connected_account_id, e.connected_account_type),
                                          l = (0, eo.IG)(e),
                                          i = (0, eo.$J)(e);
                                      return (0, s.jsx)(
                                          th,
                                          {
                                              children: ep.intl.format(l, {
                                                  account_name: r?.name,
                                                  onClick: () => {
                                                      (0, eo.v0)(
                                                          { quest: t, platformType: i },
                                                          {
                                                              content: f.uF.QUEST_BAR,
                                                              ctaContent: er.Cy.DEFIBRILLATOR_RECONNECT_CONSOLE,
                                                              impressionId: c(),
                                                              sourceQuestContent: f.uF.QUEST_BAR_V2,
                                                          },
                                                      );
                                                  },
                                              }),
                                          },
                                          n,
                                      );
                                  }
                                  return (0, s.jsx)(th, { children: e.message }, n);
                              }),
                          });
                      }
                    : () =>
                          (0, s.jsx)(ev.E, {
                              className: tE.eW,
                              color: "text-muted",
                              variant: "text-xxs/normal",
                              children: (0, ea.ui)(t)
                                  ? ep.intl.string(ep.t.bUyEZZ)
                                  : ep.intl.format(ep.t.GXqvC1, { gameTitle: n }),
                          }),
            };
        }, [d, t, c]);
    return (0, s.jsxs)("div", {
        className: tE.XK,
        children: [
            (0, s.jsxs)("div", {
                className: tE.oK,
                children: [
                    (0, s.jsx)(ts.E, {
                        size: "custom",
                        color: "currentColor",
                        className: 0 === d.length ? tE.pH : tE.JA,
                        width: 16,
                        height: 16,
                    }),
                    (0, s.jsx)(ev.E, { variant: "text-xs/medium", children: C }),
                    (0, s.jsx)(eU.D, {
                        className: i()(tE.w, { [tE.r9]: x }),
                        onClick: () => m(),
                        children: o.render(),
                    }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: i()({ [tE.Iu]: x }),
                children: [p(), 0 === d.length ? null : (0, s.jsx)(th, { children: l })],
            }),
        ],
    });
}
let tg = function (e) {
    let { quest: t, taskDetails: n } = e,
        l = (0, u.bG)([O.Ay], () => O.Ay.useReducedMotion),
        i = (0, E.Du)(),
        o = r.useMemo(
            () => (0, eo.bg)(t).filter((e) => null != i.xboxAndPlaystationAccounts.find((t) => t.type === e)),
            [i.xboxAndPlaystationAccounts, t],
        ),
        {
            steps: a,
            hasConnectedAccounts: c,
            isProgressingQuestForLaunchedGame: d,
            isQuestComplete: x,
        } = r.useMemo(() => {
            let e = o.length > 0,
                r = e && (0, A.YL)(t),
                l = t.config.messages.gameTitle,
                a = t.userStatus?.completedAt != null;
            return {
                steps: [
                    {
                        renderContent: () => (0, s.jsx)(tf, { ...i, quest: t, sourceQuestContent: f.uF.QUEST_BAR_V2 }),
                        isComplete: e || r || a,
                    },
                    {
                        renderContent: () =>
                            (0, s.jsx)(tx.L5, {
                                children: (0, ea.ui)(t)
                                    ? ep.intl.string(ep.t["5tXqFe"])
                                    : ep.intl.formatToPlainString(ep.t["+8JB6Y"], { gameTitle: l }),
                            }),
                        isComplete: r || a,
                    },
                    {
                        renderContent: () =>
                            (0, s.jsx)(tx.L5, {
                                children: ep.intl.formatToPlainString(ep.t.HhfrYS, { numMinutes: n.targetMinutes }),
                            }),
                        isComplete: a,
                    },
                ],
                hasConnectedAccounts: e,
                isProgressingQuestForLaunchedGame: r,
                isQuestComplete: a,
            };
        }, [i, o.length, t, n.targetMinutes]);
    return (0, s.jsx)(tx.Ay, {
        heading: ep.intl.string(ep.t.UPWlJu),
        steps: a,
        children: c && !d && !x && (0, s.jsx)(t_, { useReducedMotion: l, quest: t }),
    });
};
(n(134528), n(947204));
var tA = n(934225);
function tS(e) {
    let { header: t, children: n } = e;
    return (0, s.jsxs)("div", {
        className: tA.Nr,
        children: [
            (0, s.jsxs)("div", {
                className: tA.wx,
                children: [
                    (0, s.jsx)(ts.E, {
                        size: "custom",
                        color: "currentColor",
                        className: tA.Kk,
                        width: 16,
                        height: 16,
                    }),
                    (0, s.jsx)(eY.D, { color: "text-default", variant: "heading-sm/medium", children: t }),
                ],
            }),
            (0, s.jsx)(ev.E, { color: "text-muted", variant: "text-xs/normal", className: tA.r2, children: n }),
        ],
    });
}
let tj = function (e) {
    let { quest: t } = e,
        n = (0, E.aC)(t);
    if (0 === n.length) return null;
    let r = n.at(0);
    return r === ep.intl.string(ep.t.BV6xDm)
        ? (0, s.jsx)(tS, { header: ep.intl.string(ep.t.onh6ct), children: ep.intl.string(ep.t.arVHRA) })
        : r === ep.intl.string(ep.t.MFGxFM)
          ? (0, s.jsx)(tS, { header: ep.intl.string(ep.t.JPihZA), children: ep.intl.string(ep.t.MFGxFM) })
          : null;
};
var tR = n(31300),
    tv = n(687966),
    tT = n(35558);
let ty = function (e) {
    let { onDesktop: t, onConsole: n } = e;
    return (0, s.jsxs)(eZ.e, {
        direction: "vertical",
        fullWidth: !0,
        className: tT.G,
        size: "sm",
        children: [
            (0, s.jsx)(et.$, {
                onClick: t,
                text: ep.intl.string(ep.t["QXc01+"]),
                variant: "secondary",
                icon: tR.k,
                iconPosition: "end",
            }),
            (0, s.jsx)(et.$, {
                onClick: n,
                text: ep.intl.string(ep.t["8lAfuB"]),
                variant: "secondary",
                icon: tv.GameControllerIcon,
                iconPosition: "end",
            }),
        ],
    });
};
var tQ = n(158247);
function tN(e) {
    let { isHovered: t, asset: n, poster: l, className: i, autoPlay: o = !1, ref: a } = e,
        { isExpanded: c } = r.useContext(D),
        d = (0, u.bG)([O.Ay], () => O.Ay.useReducedMotion),
        x = r.useRef(null);
    return (
        r.useEffect(() => {
            null != x.current && (c && (!d || t) ? ((x.current.currentTime = 0), x.current.play()) : x.current.pause());
        }, [x, c, t, d]),
        (0, tt.A)(x),
        (0, s.jsx)(e1.A, {
            ref: (e) => {
                ((x.current = e), null != a && ("function" == typeof a ? a(e) : (a.current = e)));
            },
            autoPlay: o,
            poster: l,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: i,
            controls: !1,
            children: (0, s.jsx)("source", { src: n.url, type: n.mimetype ?? void 0 }),
        })
    );
}
function tU(e) {
    let { onClick: t } = e,
        { quest: n } = r.useContext(D),
        l = (0, u.bG)([O.Ay], () => O.Ay.useReducedMotion),
        [o, a] = r.useState(!1),
        c = (0, e8.tW)(n, e8.fY.QUEST_BAR_HERO_VIDEO, void 0, !1),
        d = (0, e8.tW)(n, e8.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1),
        x = (0, e3.Kr)((e) => e.getVideoProgressState)(n.id),
        m = n.userStatus?.completedAt != null && x === e3.K2.COMPLETED,
        C = !m && (!l || o);
    return (0, s.jsxs)(eU.D, {
        className: tQ.QO,
        onClick: t,
        onMouseEnter: function () {
            l && !o && a(!0);
        },
        onMouseLeave: function () {
            l && o && a(!1);
        },
        children: [
            null != d &&
                (0, s.jsx)(S._M, {
                    id: "QuestBarContentExpanded_videoThumbnail",
                    children: (e) => (0, s.jsx)("img", { ref: e, alt: "", src: d.url, className: tQ.Ue }),
                }),
            null != c
                ? (0, s.jsx)(S._M, {
                      id: "QuestBarContentExpanded_video",
                      children: (e) =>
                          (0, s.jsx)(tN, {
                              ref: e,
                              isHovered: o,
                              autoPlay: !1,
                              asset: c,
                              poster: d?.url,
                              className: i()(tQ.NM, { [tQ.Gc]: C }),
                          }),
                  })
                : null,
            (0, s.jsx)("div", {
                className: tQ.LT,
                children: m
                    ? (0, s.jsx)(eK.RetryIcon, { color: ek.A.colors.WHITE, className: tQ.t })
                    : (0, s.jsx)(eX.PlayIcon, { color: ek.A.colors.WHITE, className: tQ.t }),
            }),
        ],
    });
}
function tF(e) {
    let { quest: t } = e;
    return (0, s.jsx)(eT.A, {
        className: i()(tQ.Qq, tQ.wq),
        learnMoreStyle: "text",
        quest: t,
        location: P.rE.QUESTS_BAR,
        questContent: f.uF.QUEST_BAR_V2,
        sourceQuestContent: f.uF.QUEST_BAR_V2,
    });
}
function tB(e) {
    let { isCtaInteractable: t, containerRef: n, onAcceptQuest: l } = e,
        { quest: a, onGameSheetOpen: c, onGameSheetClose: d, taskDetails: x } = r.useContext(D),
        { expansionSpring: m } = r.useContext(F),
        C = r.useRef(null),
        h = (0, u.bG)([p.A], () => p.A.isEnrolling(a.id), [a]),
        _ = r.useMemo(() => (0, e8.tW)(a, e8.fY.QUEST_BAR_HERO), [a]),
        g = (0, en.NA)({ quest: a }),
        A = r.useMemo(() => (0, e8.tW)(a, e8.fY.HERO_IMAGE), [a]),
        j = r.useMemo(() => (null == A ? {} : { backgroundImage: `url(${A.url})` }), [A]),
        R = e7.t.useConfig({ location: P.rE.QUESTS_BAR }),
        T = (0, en.mU)({
            quest: a,
            location: P.rE.QUESTS_BAR,
            taskDetails: x,
            sourceQuestContent: f.uF.QUEST_BAR_V2,
            popoutTargetElementRef: C,
            onGameSheetOpened: c,
            onGameSheetClosed: d,
            gameProfileSource: k.GameProfileSources.QuestBar,
        }),
        y = (0, ex.Pd)(a),
        N = (0, e6.z)(),
        U = (0, E.SD)(a, N),
        B = N === e9.MA.NITRO && U;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)("div", {
                ref: C,
                children: (0, s.jsxs)("div", {
                    className: tQ.do,
                    ref: n,
                    children: [
                        (0, s.jsxs)("div", {
                            className: tQ.zH,
                            children: [
                                (0, s.jsx)(tF, { quest: a }),
                                (0, s.jsx)(eY.D, {
                                    className: tQ.DD,
                                    color: "text-strong",
                                    variant: "heading-md/medium",
                                    children: ep.intl.format(ep.t.EQa7os, { questName: a.config.messages.questName }),
                                }),
                                (0, s.jsxs)("div", {
                                    className: tQ.zf,
                                    children: [
                                        (0, s.jsx)(ev.E, { className: tQ.h_, variant: "text-xs/normal", children: T }),
                                        U && (0, s.jsx)(te.e, { questId: a.id, orbMultiplierEligibility: N }),
                                    ],
                                }),
                            ],
                        }),
                        (0, s.jsx)("div", {
                            className: i()(tQ.lO, { [tQ._o]: !t }),
                            "data-testid": "quest-bar-enroll-cta",
                            children: (0, s.jsx)(eZ.e, {
                                direction: "horizontal",
                                fullWidth: !0,
                                wrap: !1,
                                children:
                                    R.enabled && y === ex.UA.UNENROLLED && R.enabledQuestStates.has(ex.UA.UNENROLLED)
                                        ? (0, s.jsx)(ed.A, {
                                              quest: a,
                                              surface: ex.V3.QUEST_BAR_FOOTER,
                                              size: "sm",
                                              analyticsCtxQuestContent: f.uF.QUEST_BAR_V2,
                                              analyticsCtxSourceQuestContent: f.uF.QUEST_BAR_V2,
                                          })
                                        : (0, s.jsx)(et.$, {
                                              onClick: l,
                                              variant: "primary",
                                              loading: h,
                                              text: g,
                                              size: "sm",
                                              icon: (0, v.Oz)(a),
                                              fullWidth: !0,
                                          }),
                            }),
                        }),
                    ],
                }),
            }),
            (0, s.jsx)(e5.A, { visible: B, glow: !0, className: tQ.Ph }),
            null != A &&
                (0, s.jsx)(o.animated.div, {
                    className: tQ.AK,
                    style: { opacity: (0, Q.a)(m.to([0, 1], [1, 0])) },
                    children: (0, s.jsx)("div", { className: i()(tQ.LC, tQ.Ge), style: j }),
                }),
            (0, s.jsxs)(o.animated.div, {
                className: tQ.IC,
                style: {
                    backdropFilter: (0, Q.Q)(m.to([0, 1], [5, 0]).to((e) => `blur(${e}px)`)),
                    filter: (0, Q.Q)(m.to([0, 1], [0.8, 1]).to((e) => `brightness(${e})`)),
                },
                children: [
                    _.isAnimated
                        ? (0, s.jsx)(S._M, {
                              id: "QuestBarContentExpanded_heroAnimated",
                              children: (e) => (0, s.jsx)(tN, { ref: e, autoPlay: !0, asset: _, className: tQ.LO }),
                          })
                        : (0, s.jsx)(S._M, {
                              id: "QuestBarContentExpanded_heroStatic",
                              children: (e) => (0, s.jsx)("img", { ref: e, alt: "", className: tQ.LO, src: _.url }),
                          }),
                    (0, s.jsx)("div", { className: tQ.tV }),
                ],
            }),
        ],
    });
}
function tI(e) {
    let { quest: t } = e,
        { hasAlreadyLinked: n, onClickGameTitle: l } = r.useContext(G);
    return !0 !== n ? null : (0, s.jsx)(e4.A, { quest: t, hasAlreadyLinked: n, onClickGameTitle: l });
}
function tb(e) {
    let { activeScreen: t, selectPlatform: n } = e,
        { quest: l, taskDetails: i } = r.useContext(D);
    return (0, e$.YW)(t)
        .with(f.X0.SELECT, () => (0, s.jsx)(ty, { onConsole: () => n(P.fO.CONSOLE), onDesktop: () => n(P.fO.DESKTOP) }))
        .with(f.X0.DESKTOP, () => ((0, A.I6)(l) ? (0, s.jsx)(tI, { quest: l }) : (0, s.jsx)(tj, { quest: l })))
        .with(f.X0.CONSOLE, () => (0, s.jsx)(tg, { quest: l, taskDetails: i }))
        .exhaustive();
}
function tO(e) {
    let { parentContainerRef: t } = e,
        { quest: n, taskDetails: l } = r.useContext(D),
        [i, o, a] = (0, E.Qo)(n, l),
        u = l.percentComplete > 0,
        c = (0, E.Vn)(n),
        d = (0, E.RR)({ quest: n }),
        x = o.length > 1 && !u && !c;
    return (0, s.jsxs)(q, {
        children: [
            (0, s.jsx)(tb, { activeScreen: i, selectPlatform: a }),
            i !== f.X0.SELECT &&
                (0, s.jsxs)("div", {
                    className: tQ.oG,
                    children: [
                        x &&
                            (0, s.jsx)(eJ.K, {
                                size: "sm",
                                "aria-label": ep.intl.string(ep.t["13/7kX"]),
                                onClick: () => a(null),
                                icon: e0.n,
                                variant: "secondary",
                            }),
                        (0, s.jsx)(eR, {
                            awaitingConsoleConnections: d,
                            parentContainerRef: t,
                            hasMadeProgress: u,
                            isProgressing: c,
                            sourceQuestContent: f.uF.QUEST_BAR_V2,
                        }),
                    ],
                }),
        ],
    });
}
function tV(e) {
    let { parentContainerRef: t } = e,
        { quest: n, taskDetails: l } = r.useContext(D),
        i = l.percentComplete > 0,
        o = (0, E.Vn)(n),
        a = (0, E.Hv)() && n.userStatus?.completedAt == null,
        u = r.useCallback(() => {
            if (a) {
                ((0, es.Y5)({
                    questId: n.id,
                    questContent: f.uF.QUEST_BAR_V2,
                    questContentCTA: er.Cy.QUEST_ACCESS_SUSPENDED,
                    sourceQuestContent: f.uF.QUEST_BAR_V2,
                }),
                    (0, v.FS)());
                return;
            }
            (0, v.d5)({
                quest: n,
                questContent: f.uF.QUEST_BAR_V2,
                sourceQuestContent: f.uF.QUEST_BAR_V2,
                sourceQuestContentCTA: er.Cy.QUEST_BAR_VIDEO_QUEST_PREVIEW,
            });
        }, [n, a]);
    return (0, s.jsxs)(q, {
        children: [
            (0, s.jsx)(tU, { onClick: u }),
            (0, s.jsx)(eR, {
                parentContainerRef: t,
                awaitingConsoleConnections: !1,
                hasMadeProgress: i,
                isProgressing: o,
                sourceQuestContent: f.uF.QUEST_BAR_V2,
            }),
        ],
    });
}
function tL(e) {
    let { parentContainerRef: t } = e,
        { quest: n, taskDetails: l } = r.useContext(D),
        i = l.percentComplete > 0,
        o = (0, E.Vn)(n);
    return (0, s.jsx)(q, {
        children: (0, s.jsx)(eR, {
            parentContainerRef: t,
            awaitingConsoleConnections: !1,
            hasMadeProgress: i,
            isProgressing: o,
            sourceQuestContent: f.uF.QUEST_BAR_V2,
        }),
    });
}
function tq(e) {
    let { parentContainerRef: t } = e,
        { quest: n } = r.useContext(D);
    return (0, A.t)({ quest: n }) || (0, A.g5)(n) || (0, A.fE)({ quest: n }) || (0, A.I6)(n)
        ? (0, s.jsx)(tO, { parentContainerRef: t })
        : (0, A.vv)(n)
          ? (0, s.jsx)(tV, { parentContainerRef: t })
          : (0, s.jsx)(tL, { parentContainerRef: t });
}
function tk(e) {
    let { overlayRef: t, containerRef: n } = e,
        { quest: l, taskDetails: a } = r.useContext(D),
        { expansionSpring: u } = r.useContext(F),
        c = r.useRef(null),
        d = r.useRef(null),
        x = (0, E.I3)(l),
        m = null != x ? x.percentComplete : a.percentComplete;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(o.animated.div, {
                className: i()(tQ.tv, tQ.ag),
                style: {
                    backgroundImage: `linear-gradient(90deg, ${N}, ${U})`,
                    opacity: (0, Q.a)(u.to({ range: [0, 1], output: [1, 0] })),
                },
            }),
            (0, s.jsxs)("div", {
                className: tQ.Fe,
                ref: (e) => {
                    ("function" == typeof n ? n(e) : null != n && (n.current = e), null != e && (d.current = e));
                },
                children: [
                    (0, s.jsx)(eb, {}),
                    (0, s.jsx)("div", { className: tQ.yF }),
                    (0, s.jsx)(Z, { overlayRef: t, progressBarRef: c, isHovered: !1 }),
                    (0, s.jsx)(eN, {
                        contentLocation: "expanded",
                        progressBarRef: c,
                        isExpanded: !0,
                        percentComplete: m,
                        popoutTargetElementRef: d,
                    }),
                    (0, s.jsx)(tq, { parentContainerRef: d }),
                ],
            }),
            (0, s.jsx)("div", {
                className: i()(tQ.tv, tQ.Sx),
                style: { backgroundImage: `linear-gradient(90deg, ${N}, ${U})` },
            }),
        ],
    });
}
async function tM(e, t, n, s) {
    (0, A.vv)(e)
        ? await (0, v.e0)(e, { questContent: t, questContentCTA: n, sourceQuestContent: s, sourceQuestContentCTA: n })
        : (0, ea.vA)(e)
          ? await (0, e2.Oy)(e.id, { questContent: t, questContentCTA: n, sourceQuestContent: s })
          : (0, e2.Oy)(e.id, { questContent: t, questContentCTA: n, sourceQuestContent: s });
}
function tw(e) {
    let { overlayRef: t, containerRef: n } = e,
        { quest: l, isExpanded: i, isExpansionAnimationComplete: o } = r.useContext(D),
        { launchInGameActivity: a } = (0, E.zW)(l),
        u = (0, ea.vA)(l),
        c = r.useCallback(async () => {
            let e = u ? er.Cy.START_QUEST : er.Cy.ACCEPT_QUEST;
            (await tM(l, f.uF.QUEST_BAR_V2, e, f.uF.QUEST_BAR_V2), u && a());
        }, [l, a, u]);
    return l.userStatus?.enrolledAt != null
        ? (0, s.jsx)(tk, { overlayRef: t, containerRef: n })
        : (0, s.jsx)(tB, { isCtaInteractable: !i || o, containerRef: n, onAcceptQuest: c });
}
function tP() {
    let {
            expansionSpring: e,
            animatedComponentProps: t,
            recalculateAnimationPositions: n,
            mountPoints: l,
        } = r.useContext(F),
        { isExpanded: i } = r.useContext(D);
    return (
        r.useEffect(() => {
            n();
        }, [n, i]),
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
                let { id: n, collapsedLeft: r, expandedLeft: i, collapsedTop: a, expandedTop: u, width: c } = t,
                    d = l.get(n);
                return (0, s.jsx)(
                    o.animated.div,
                    {
                        ref: d,
                        style: {
                            zIndex: 2,
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: c,
                            transform: (0, o.to)(
                                [e.to({ range: [0, 1], output: [r, i] }), e.to({ range: [0, 1], output: [a, u] })],
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
function tD(e) {
    let { className: t, contentRef: n, overlayRef: l } = e,
        { quest: i } = r.useContext(D),
        o = i.userStatus?.enrolledAt != null;
    return (0, s.jsx)(ez, {
        className: t,
        layoutVariant: o ? "inset" : "flush",
        header: (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(tP, {}), !o && (0, s.jsx)(eH, {})] }),
        children: (0, s.jsx)(tw, { overlayRef: l, containerRef: n }),
    });
}
var tG = n(621466),
    tH = n(192308),
    tW = n(652215),
    tz = n(731738),
    t$ = n(807393),
    tK = n(260364),
    tX = n(920690);
function tY(e) {
    let { isExpanded: t, questId: n } = e;
    return (
        (0, E.H6)({
            mode: t ? P.fP.EXPANDED : P.fP.COLLAPSED,
            questContent: f.uF.QUEST_BAR_V2,
            questId: n,
            sourceQuestContent: f.uF.QUEST_BAR_V2,
        }),
        null
    );
}
function tZ() {
    return (
        r.useEffect(() => {
            m.trigger();
        }, []),
        null
    );
}
function tJ(e) {
    let { quest: t } = e,
        n = (0, g.L)({ quest: t, location: P.rE.QUESTS_BAR }),
        l = (0, _.s)(),
        a = (0, u.bG)([p.A], () => null != p.A.questEnrollmentBlockedUntil),
        { isQuestBarVisible: d, reason: x } = (0, R.TQ)({ quest: t }),
        m = (0, u.bG)([C.A], () => C.A.hasLayers()),
        h = r.useRef(null),
        T = r.useMemo(() => (0, A.vv)(t), [t]),
        y = t.id,
        Q = t.userStatus?.enrolledAt != null,
        N = (0, c.Ay)(Q),
        U = t.userStatus?.completedAt != null,
        { hasError: F, isLoading: B } = (0, S.zT)(),
        V = r.useContext(z.Z),
        q = V || (l && d && !B && !a),
        {
            isExpanded: k,
            setIsExpanded: M,
            expandQuestBar: w,
            isExpansionAnimationComplete: D,
            isVisibilityAnimationAtRest: G,
            expansionSpring: H,
            visibilitySpring: $,
            springConfig: K,
        } = (function (e) {
            let { isQuestAccepted: t, isQuestCompleted: n, isQuestBarVisible: s } = e,
                l = (0, u.bG)([O.Ay], () => O.Ay.useReducedMotion),
                [i, o] = r.useState(!1),
                [a, c] = r.useState(!0),
                [d, x] = r.useState(!0),
                m = r.useRef(s),
                C = r.useCallback(
                    (e) => {
                        (n && e) || (i !== e && (c(!1), o(e)));
                    },
                    [n, i],
                ),
                p = r.useCallback(() => {
                    C(!0);
                }, [C]),
                f = r.useCallback(() => {
                    C(!1);
                }, [C]),
                E = t ? P.ZV : P.Ko,
                [{ expansionSpring: h }, _] = (0, b.z)(() => ({
                    from: { expansionSpring: 0 },
                    config: E,
                    onRest: () => {
                        c(!0);
                    },
                    onStart: () => {
                        c(!1);
                    },
                }));
            r.useEffect(() => {
                _({ expansionSpring: +!!i, immediate: l });
            }, [i, _, l]);
            let { visibilitySpring: g } = (0, b.z)({
                from: { visibilitySpring: 0 },
                to: { visibilitySpring: +!!s },
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
                    (s !== m.current && x(!1), (m.current = s));
                }, [s]),
                {
                    isExpanded: i,
                    setIsExpanded: C,
                    expandQuestBar: p,
                    collapseQuestBar: f,
                    isExpansionAnimationComplete: a,
                    isVisibilityAnimationAtRest: d,
                    expansionSpring: h,
                    visibilitySpring: g,
                    springConfig: E,
                }
            );
        })({ isQuestAccepted: Q, isQuestCompleted: U, isQuestBarVisible: q }),
        {
            handleCtxMenuOpened: X,
            handleCtxMenuClosed: Y,
            handleCtxMenuSelection: Z,
            handleGameSheetOpened: J,
            handleGameSheetClosed: ee,
            handleFocusWithoutDelay: et,
            handleBlur: en,
            handleMouseEnter: el,
            handleMouseLeave: ei,
        } = (function (e) {
            let {
                    quest: t,
                    isExpanded: n,
                    setIsExpanded: s,
                    expandQuestBar: l,
                    isQuestCompleted: i,
                    isQuestAccepted: o,
                    prevIsQuestAccepted: a,
                    impressionRef: u,
                } = e,
                c = r.useRef(-1),
                d = r.useRef(!1),
                [x, m] = r.useState(!1),
                [C, p] = r.useState(!1),
                E = r.useCallback(() => {
                    m(!0);
                }, []),
                h = r.useCallback(() => {
                    (m(!1), d.current || i || s(!1));
                }, [i, s]),
                _ = r.useCallback(() => {
                    (m(!1), i || s(!1), (d.current = !1));
                }, [i, s]),
                g = r.useCallback(() => {
                    p(!0);
                }, []),
                A = r.useCallback(() => {
                    (p(!1), s(!1));
                }, [s]),
                S = r.useCallback(
                    function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (n) return;
                        let { withDelay: t = !1 } = e;
                        t ? (c.current = window.setTimeout(l, 75)) : l();
                    },
                    [l, n],
                ),
                j = r.useCallback(() => {
                    S();
                }, [S]),
                R = r.useCallback(
                    (e) => {
                        (window.clearTimeout(c.current),
                            ((0, tG.vq)(e?.relatedTarget, Node) && e.currentTarget.contains(e.relatedTarget)) ||
                                x ||
                                C ||
                                d.current ||
                                s(!1));
                    },
                    [x, C, s],
                ),
                v = r.useCallback(() => {
                    ((0, es.av)({
                        questId: t.id,
                        event: tW.HAw.QUEST_HOVER,
                        properties: {
                            content_id: f.uF.QUEST_BAR,
                            content_name: (0, er.jO)(f.uF.QUEST_BAR),
                            impression_id: u.current?.getId(),
                        },
                        shouldExtendSession: !0,
                        sourceQuestContent: f.uF.QUEST_BAR_V2,
                    }),
                        (d.current = !0),
                        S({ withDelay: !0 }));
                }, [S, u, t.id]),
                T = r.useCallback(() => {
                    ((0, es.av)({
                        questId: t.id,
                        event: tW.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: f.uF.QUEST_BAR,
                            content_name: (0, er.jO)(f.uF.QUEST_BAR),
                            impression_id: u.current?.getId(),
                        },
                        sourceQuestContent: f.uF.QUEST_BAR_V2,
                    }),
                        (d.current = !1),
                        R());
                }, [R, u, t.id]);
            (r.useEffect(() => {
                C && d.current && T();
            }, [C, T]),
                r.useLayoutEffect(() => {
                    o && !a && d.current && l();
                }, [l, o, a]),
                r.useLayoutEffect(() => {
                    i || !o || a || d.current || s(!1);
                }, [o, i, a, s]));
            let y = (0, tH.useHasAnyModalOpen)();
            return (
                r.useEffect(() => {
                    y && d.current && T();
                }, [T, y]),
                {
                    ctxMenuOpen: x,
                    gameSheetOpen: C,
                    handleCtxMenuOpened: E,
                    handleCtxMenuClosed: h,
                    handleCtxMenuSelection: _,
                    handleGameSheetOpened: g,
                    handleGameSheetClosed: A,
                    handleFocus: S,
                    handleFocusWithoutDelay: j,
                    handleBlur: R,
                    handleMouseEnter: v,
                    handleMouseLeave: T,
                }
            );
        })({
            quest: t,
            isExpanded: k,
            setIsExpanded: M,
            expandQuestBar: w,
            isQuestCompleted: U,
            isQuestAccepted: Q,
            prevIsQuestAccepted: N,
            impressionRef: h,
        });
    !(function (e) {
        let {
            quest: t,
            hasAssetsError: n,
            isEligibleForQuests: s,
            isQuestBarVisible: l,
            isVisibilityAnimationAtRest: i,
            isLoadingAssets: o,
            currentQuestVisibleReason: a,
            shouldShowQuestBar: u,
            isQuestEnrollmentBlocked: c,
            impressionRef: d,
        } = e;
        (r.useEffect(() => {
            n &&
                ((0, es.av)({
                    questId: t.id,
                    event: tW.HAw.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        content_id: f.uF.QUEST_BAR,
                        content_name: (0, er.jO)(f.uF.QUEST_BAR),
                        reason: "asset_loading_error",
                        impression_id: d.current?.getId(),
                    },
                    sourceQuestContent: f.uF.QUEST_BAR_V2,
                }),
                t$.A.increment({
                    name: tz.K.QUEST_CONTENT_RENDERING_FAILURE,
                    tags: [
                        `quest_id:${t.id}`,
                        `quest_content:${(0, er.jO)(f.uF.QUEST_BAR)}`,
                        "reason:asset_loading_error",
                    ],
                }));
        }, [n, d, t.id]),
            r.useEffect(() => {
                s ||
                    (0, es.av)({
                        questId: t.id,
                        event: tW.HAw.QUEST_CONTENT_RENDERING_FAILURE,
                        properties: {
                            content_id: f.uF.QUEST_BAR,
                            content_name: (0, er.jO)(f.uF.QUEST_BAR),
                            reason: "not_eligible_for_quest",
                            impression_id: d.current?.getId(),
                        },
                        sourceQuestContent: f.uF.QUEST_BAR_V2,
                    });
            }, [s, d, t.id]),
            r.useEffect(() => {
                l ||
                    !i ||
                    o ||
                    (0, es.av)({
                        questId: t.id,
                        event: tW.HAw.QUEST_CONTENT_RENDERING_FAILURE,
                        properties: {
                            content_id: f.uF.QUEST_BAR,
                            content_name: (0, er.jO)(f.uF.QUEST_BAR),
                            reason: a,
                            impression_id: d.current?.getId(),
                        },
                        sourceQuestContent: f.uF.QUEST_BAR_V2,
                    });
            }, [l, i, o, t.id, a, d]),
            r.useEffect(() => {
                ((!u || c) && tK.A.clearTracking(), l && i && !o && !n && s && tK.A.stopTracking(t.id));
            }, [u, c, l, i, o, n, s, t.id]));
    })({
        quest: t,
        hasAssetsError: F,
        isEligibleForQuests: l,
        isQuestBarVisible: q,
        isVisibilityAnimationAtRest: G,
        isLoadingAssets: B,
        currentQuestVisibleReason: x,
        shouldShowQuestBar: d,
        isQuestEnrollmentBlocked: a,
        impressionRef: h,
    });
    let eo = r.useRef(null),
        ea = r.useRef(null),
        eu = r.useRef(null),
        ec = (0, E.fc)(t),
        ed = (0, E.UH)(t);
    if (
        (r.useEffect(() => {
            T && (0, v.l9)();
        }, [T]),
        !l || (!q && G && !B) || (F && !V))
    )
        return (
            F && !V ? n.log("Not rendered due to asset error") : l || n.log("Not rendered due to ineligibility"), null
        );
    let ex = 70 + 78 * !!U;
    return (0, s.jsx)(j.Z, {
        questOrQuests: t,
        questContent: f.uF.QUEST_BAR_V2,
        overrideVisibility: !m && q,
        onImpression: ed,
        sourceQuestContent: f.uF.QUEST_BAR_V2,
        children: (e, n) => (
            (h.current = n.current),
            (0, s.jsxs)("div", {
                className: tX.dK,
                children: [
                    q &&
                        (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)(tY, { questId: y, isExpanded: k }), (0, s.jsx)(tZ, {})],
                        }),
                    (0, s.jsx)(o.animated.div, {
                        "data-testid": "quest-bar-container",
                        "aria-hidden": !q,
                        onMouseLeave: ei,
                        onMouseEnter: el,
                        onFocus: et,
                        onBlur: en,
                        className: i()(tX.iE, { [tX.Xc]: !q, [tX.uv]: q && G }),
                        style: { height: $.to({ range: [0, 1], output: [0, ex] }) },
                        children: (0, s.jsx)(o.animated.div, {
                            className: i()(tX.FG, { [tX.E$]: k, [tX.KA]: Q }),
                            children: (0, s.jsx)(L, {
                                springConfig: K,
                                isExpanded: k,
                                children: (0, s.jsx)(I, {
                                    expandedContentRef: eo,
                                    collapsedContentRef: ea,
                                    expansionSpring: H,
                                    children: (0, s.jsxs)(W, {
                                        quest: t,
                                        taskDetails: ec,
                                        isExpanded: k,
                                        isExpansionAnimationComplete: D,
                                        onCtxMenuClose: Y,
                                        onCtxMenuOpen: X,
                                        onCtxMenuSelect: Z,
                                        onGameSheetOpen: J,
                                        onGameSheetClose: ee,
                                        collapsedHeight: ex,
                                        children: [
                                            (0, s.jsx)(
                                                eL,
                                                { className: tX.Qs, contentRef: ea, overlayRef: eu },
                                                U ? "collapsed-with-rewards" : "collapsed-without-rewards",
                                            ),
                                            (0, s.jsx)(tD, { className: tX.Qs, contentRef: eo, overlayRef: eu }),
                                            (0, s.jsx)("div", { ref: eu, className: tX.Lw }),
                                        ],
                                    }),
                                }),
                            }),
                        }),
                    }),
                ],
            })
        ),
    });
}
function t0(e) {
    let { noFillDecision: t } = e,
        n = (0, u.bG)([C.A], () => C.A.hasLayers());
    function r(e) {
        return (0, s.jsx)("div", { ref: e, "aria-hidden": !0, className: tX.ui });
    }
    return null == t.adContentId
        ? r()
        : (0, s.jsx)(j.Z, {
              adContentId: t.adContentId,
              adCreativeType: a.p.NO_FILL,
              noFillDecision: t,
              questContent: f.uF.QUEST_BAR_V2,
              overrideVisibility: !n,
              sourceQuestContent: f.uF.QUEST_BAR_V2,
              children: (e) => r(e),
          });
}
let t1 =
    221552 == n.j
        ? function () {
              let e = (0, R.wo)(),
                  t = (0, h.A)(f.p9.DESKTOP_ACCOUNT_PANEL_AREA, "useNoFillAd");
              switch (e.type) {
                  case a.p.QUEST: {
                      let { quest: t } = e;
                      return (0, s.jsx)(
                          S.y5,
                          {
                              source: P.rE.QUESTS_BAR,
                              adCreativeId: t.id,
                              adCreativeType: a.p.QUEST,
                              children: (0, s.jsx)(tJ, { quest: t }),
                          },
                          t.id,
                      );
                  }
                  case a.p.BOUNTY:
                      return null;
                  case a.p.NO_FILL:
                      return null != t ? (0, s.jsx)(t0, { noFillDecision: t }, t.decisionId) : null;
              }
          }
        : null;
