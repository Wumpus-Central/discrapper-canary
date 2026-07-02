n.d(t, { A: () => tQ, Y: () => tH });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(18005),
    o = n(323889),
    u = n(17928),
    c = n(475743),
    d = n(840251),
    h = n(688151);
let m = new d.E([], h.$G.QUEST_BAR_RENDERED, { location: "quest bar rendered" });
var p = n(186111),
    f = n(859703),
    g = n(24001),
    A = n(347135),
    x = n(971276),
    C = n(851936),
    E = n(792620),
    v = n(557637),
    T = n(73473),
    _ = n(371912),
    N = n(617986),
    j = n(939249),
    S = n(834730),
    y = n(290136),
    R = n(661531),
    I = n(365199),
    b = n(590202),
    M = n(971649),
    O = n(901406),
    w = n(270045),
    U = n(57718),
    k = n(398025);
n(321073);
var P = n(340287),
    D = n(765671);
let L = "#00000000",
    F = "#CDD8FF1A",
    G = s.createContext({
        registerComponent: () => {},
        unregisterComponent: () => {},
        animatedComponents: {},
        expandedContentRef: s.createRef(),
        collapsedContentRef: s.createRef(),
        recalculateAnimationPositions: () => {},
        animatedComponentProps: [],
        expansionSpring: new r.SpringValue(0),
        mountPoints: new Map(),
    }),
    V = s.forwardRef(function (e, t) {
        let { children: n, id: l, inState: a, isTextTransition: o = !1 } = e,
            {
                recalculateAnimationPositions: u,
                registerComponent: c,
                unregisterComponent: d,
                expansionSpring: h,
                mountPoints: m,
            } = s.useContext(G),
            p = s.useRef(null),
            f = s.useRef(null),
            g = s.useRef(void 0);
        s.useEffect(() => {
            u();
        }, [u]),
            s.useLayoutEffect(() => {
                let e = p.current;
                return (
                    null != e && c(e, l, a),
                    () => {
                        null != e && d(l, a);
                    }
                );
            }, [l, a, c, d]);
        let A = s.useCallback(
            (e) => {
                let { height: t } = e;
                g.current !== t && (u(), (g.current = t));
            },
            [u],
        );
        (0, D.i4)(p, A);
        let x = m.get(l)?.current,
            C = null;
        return (
            null == x
                ? (C = null)
                : o && null != h
                  ? (C = (0, i.jsxs)(i.Fragment, {
                        children: [
                            "collapsed" === a &&
                                (0, P.createPortal)(
                                    (0, i.jsx)(r.animated.div, {
                                        style: {
                                            position: "absolute",
                                            opacity: (0, k.a)(h.to({ range: [0, 1], output: [1, 0] })),
                                        },
                                        children: n(f),
                                    }),
                                    x,
                                ),
                            "expanded" === a &&
                                (0, P.createPortal)(
                                    (0, i.jsx)(r.animated.div, {
                                        style: {
                                            position: "absolute",
                                            opacity: (0, k.a)(h.to({ range: [0, 1], output: [0, 1] })),
                                        },
                                        children: n(f),
                                    }),
                                    x,
                                ),
                        ],
                    }))
                  : "collapsed" === a && (C = (0, P.createPortal)(n(f), x)),
            (0, i.jsxs)("div", {
                style: { opacity: +((null == C && "collapsed" === a) || null == x) },
                ref: t,
                children: [n(p), C],
            })
        );
    }),
    B = (e) => {
        let { children: t, expandedContentRef: n, collapsedContentRef: l, expansionSpring: a } = e,
            [r, o] = s.useState({}),
            [u, c] = s.useState([]),
            [d, h] = s.useState(() => new Map()),
            m = s.useCallback((e, t, n) => {
                o((i) => {
                    let s = i[t] ?? { expanded: null, collapsed: null };
                    return { ...i, [t]: { ...s, [n]: e } };
                }),
                    h((e) => {
                        let n = new Map(e);
                        return n.set(t, s.createRef()), n;
                    });
            }, []),
            p = s.useCallback((e, t) => {
                let n = !1;
                o((i) => {
                    let s = i[e] ?? { expanded: null, collapsed: null };
                    return (s[t] = null), (n = null == s.expanded && null == s.collapsed), { ...i, [e]: s };
                }),
                    n &&
                        h((t) => {
                            let n = new Map(t);
                            return n.delete(e), n;
                        });
            }, []),
            f = s.useCallback(() => {
                let e = [];
                for (let t in r) {
                    if (null == r[t] || null == n.current || null == l.current) continue;
                    let i = r[t].collapsed,
                        s = r[t].expanded;
                    if (null == i || null == s) continue;
                    let a = s.getBoundingClientRect(),
                        o = n.current.getBoundingClientRect(),
                        u = i.getBoundingClientRect(),
                        c = l.current.getBoundingClientRect(),
                        d = a.top - o.top + 12,
                        h = u.top - c.top,
                        m = a.left - o.left + 12,
                        p = u.left - c.left,
                        f = -a.right + o.right + 12,
                        g = -u.right + c.right;
                    e.push({
                        id: t,
                        collapsedLeft: p,
                        expandedLeft: m,
                        collapsedRight: g,
                        expandedRight: f,
                        collapsedTop: h,
                        expandedTop: d,
                        width: a.width,
                    });
                }
                c(e);
            }, [r, n, l, c]);
        return (0, i.jsx)(G.Provider, {
            value: {
                registerComponent: m,
                unregisterComponent: p,
                animatedComponents: r,
                expandedContentRef: n,
                collapsedContentRef: l,
                recalculateAnimationPositions: f,
                animatedComponentProps: u,
                expansionSpring: a,
                mountPoints: d,
            },
            children: t,
        });
    };
var H = n(409626),
    Q = n(692969),
    W = n(284846),
    q = n(190107);
let z = s.createContext({
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
    Z = s.createContext({ hasAlreadyLinked: void 0, onClickGameTitle: void 0 });
function K(e) {
    let { children: t, quest: n } = e,
        { hasAlreadyLinked: l } = (0, W.U)(n),
        a = (0, Q.A)({
            applicationId: (0, E.xc)(n),
            location: q.rE.QUEST_INSTRUCTIONS,
            source: H.GameProfileSources.QuestBar,
        }),
        r = s.useMemo(() => ({ hasAlreadyLinked: l, onClickGameTitle: a }), [l, a]);
    return (0, i.jsx)(Z.Provider, { value: r, children: t });
}
function $(e) {
    let {
            children: t,
            isExpanded: n,
            isExpansionAnimationComplete: l,
            onCtxMenuClose: a,
            onCtxMenuOpen: r,
            onCtxMenuSelect: o,
            onGameSheetOpen: u,
            onGameSheetClose: c,
            collapsedHeight: d,
            quest: h,
            taskDetails: m,
        } = e,
        p = s.useMemo(
            () => ({
                isExpanded: n,
                isExpansionAnimationComplete: l,
                onCtxMenuClose: a,
                onCtxMenuOpen: r,
                onCtxMenuSelect: o,
                onGameSheetOpen: u,
                onGameSheetClose: c,
                collapsedHeight: d,
                quest: h,
                taskDetails: m,
            }),
            [n, l, a, r, o, u, c, d, h, m],
        );
    return (0, i.jsx)(z.Provider, { value: p, children: (0, E.I6)(h) ? (0, i.jsx)(K, { quest: h, children: t }) : t });
}
var Y = n(775602),
    X = n(646764),
    J = n(717421);
function ee() {
    let e = document.body.style.getPropertyValue("--custom-guild-sidebar-width").slice(0, -2);
    return parseInt("" !== e ? e : "375");
}
var et = n(375708),
    en = n(173399);
let ei = function (e) {
    let { isFullyExpanded: t, partnerBranding: n } = e,
        l = {
            label: !(function () {
                let [e, t] = s.useState(() => 270 > ee());
                return (
                    s.useEffect(() => {
                        let e = new MutationObserver(() => {
                            t(270 > ee());
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
        o = (0, u.bG)([Y.Ay], () => Y.Ay.useReducedMotion),
        { quest: c } = s.useContext(z),
        { expansionSpring: d } = s.useContext(G),
        h = l ? -4 : 6;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(r.animated.div, {
                className: en.tE,
                style: {
                    transform: (0, r.to)(
                        [
                            d.to({ range: [0, 1], output: [0, 0] }),
                            d.to({ range: [0, 1], output: [0, 82] }),
                            d.to({ range: [0, 1], output: [1, 1.3333333333333333] }),
                        ],
                        (e, t, n) => `translate(${e}px, ${t}px) scale(${n})`,
                    ),
                },
                children: (0, i.jsx)(X.A, {
                    learnMoreStyle: "text",
                    learnMoreFontSize: t ? 9 : void 0,
                    quest: c,
                    questContent: g.uF.QUEST_BAR_V2,
                    autoplay: t && !o,
                    sourceQuestContent: g.uF.QUEST_BAR_V2,
                    style: { width: 48, height: 48, marginRight: 8, borderRadius: 6 },
                }),
            }),
            (0, i.jsxs)(r.animated.div, {
                className: a()(en.pm, { [en.nd]: l }),
                style: {
                    transform: (0, r.to)(
                        [d.to({ range: [0, 1], output: [0, -48] }), d.to({ range: [0, 1], output: [0, h] })],
                        (e, t) => `translate(${e}px, ${t}px)`,
                    ),
                },
                children: [
                    (0, i.jsx)("div", { className: a()({ [en.Iu]: !l }), children: n }),
                    (0, i.jsx)(r.animated.div, {
                        className: a()(en.ol, { [en.yZ]: l }),
                        style: { opacity: (0, k.a)(d.to({ range: [0, 1], output: [l ? 1 : 0.7, 0] })) },
                        children: (0, i.jsx)(S.E, {
                            color: "always-white",
                            lineClamp: 1,
                            variant: "text-xs/medium",
                            children: et.intl.string(et.t["3mgEQf"]),
                        }),
                    }),
                ],
            }),
        ],
    });
};
var es = n(173839);
let el = (0, r.animated)(U.Ay),
    ea = function () {
        let e = (0, M.go)(),
            { expansionSpring: t } = s.useContext(G),
            {
                onCtxMenuOpen: n,
                onCtxMenuClose: l,
                onCtxMenuSelect: o,
                isExpanded: u,
                isExpansionAnimationComplete: c,
                quest: d,
            } = s.useContext(z),
            h = s.useCallback(() => {
                (0, N.Zc)(d, {
                    content: g.uF.QUEST_BAR_V2,
                    ctaContent: b.Cy.OPEN_DISCLOSURE,
                    sourceQuestContent: g.uF.QUEST_BAR_V2,
                });
            }, [d]),
            m = s.useCallback(() => {
                (0, O.pu)(d, {
                    content: g.uF.QUEST_BAR_V2,
                    ctaContent: b.Cy.OPEN_GAME_LINK,
                    impressionId: e,
                    sourceQuestContent: g.uF.QUEST_BAR_V2,
                });
            }, [e, d]),
            p = u && c,
            f = (0, i.jsx)(j.D, {
                onClick: m,
                className: a()(es.vk, { [es.wm]: p }),
                children: (0, i.jsx)(el, {
                    quest: d,
                    withGameTile: !1,
                    logotypeClassName: es.Iu,
                    logotypeStyle: {
                        height: 24,
                        maxWidth: 92,
                        transform: (0, r.to)([t.to({ range: [0, 1], output: [1, 1] })], (e) => `scale(${e})`),
                    },
                }),
            });
        return (0, i.jsxs)(r.animated.div, {
            className: a()(es.iE, es.Ht, { [es.tT]: p }),
            style: { transform: (0, r.to)([t.to({ range: [0, 1], output: [6, 0] })], (e) => `translateY(${e}px)`) },
            children: [
                (0, i.jsx)(r.animated.div, {
                    className: es.Tu,
                    style: { opacity: (0, k.a)(t.to({ range: [0, 1], output: [0, 1] })) },
                }),
                (0, i.jsx)(ei, { isFullyExpanded: p, partnerBranding: f }),
                (0, i.jsxs)(r.animated.div, {
                    className: es.P0,
                    style: { opacity: (0, k.a)(t.to({ range: [0, 1], output: [0, 1] })) },
                    children: [
                        (0, i.jsxs)(j.D, {
                            className: es.y8,
                            onClick: h,
                            children: [
                                (0, i.jsx)(S.E, {
                                    color: "always-white",
                                    variant: "text-xs/normal",
                                    children: et.intl.string(et.t.o6FLcF),
                                }),
                                (0, i.jsx)(y.c, { color: R.A.colors.WHITE, className: es.P$ }),
                            ],
                        }),
                        (0, i.jsx)(w.C, {
                            onOpen: n,
                            onClose: l,
                            onSelect: o,
                            questContent: g.uF.QUEST_BAR_V2,
                            quest: d,
                            shouldShowDisclosure: !0,
                            showShareLink: !0,
                            sourceQuestContent: g.uF.QUEST_BAR_V2,
                            children: (e) =>
                                (0, i.jsx)(j.D, {
                                    ...e,
                                    className: a()(es.uJ, es.rb),
                                    "aria-label": et.intl.string(et.t.DEoVWZ),
                                    children: (0, i.jsx)(I.j, {
                                        size: "md",
                                        color: "currentColor",
                                        className: a()(es.Bx, es.ON),
                                    }),
                                }),
                        }),
                    ],
                }),
            ],
        });
    };
var er = n(821609),
    eo = n(3738),
    eu = n(651892),
    ec = n(814793),
    ed = n(753386),
    eh = n(368715),
    em = n(79545),
    ep = n(862611),
    ef = n(795965),
    eg = n(519508);
function eA(e) {
    let { quest: t, sourceQuestContent: n, taskDetails: s } = e;
    return (0, i.jsx)(er.$, {
        variant: "primary",
        fullWidth: !0,
        onClick: function () {
            let e = t.userStatus?.enrolledAt == null ? b.Cy.ACCEPT_QUEST : b.Cy.WATCH_VIDEO;
            (0, N.d5)({ quest: t, questContent: g.uF.QUEST_BAR_V2, sourceQuestContent: n, sourceQuestContentCTA: e });
        },
        size: "sm",
        text: (0, ed.WM)(s),
    });
}
function ex(e) {
    let { quest: t, sourceQuestContent: n } = e,
        s = (0, M.go)(),
        l = (0, eu.wr)(t);
    return (0, i.jsx)(er.$, {
        size: "sm",
        fullWidth: !0,
        onClick: () =>
            (0, O.pu)(t, {
                content: g.uF.QUEST_BAR_V2,
                ctaContent: b.Cy.OPEN_GAME_LINK,
                impressionId: s,
                sourceQuestContent: n,
            }),
        text: l,
    });
}
function eC(e) {
    let { quest: t, sourceQuestContent: n } = e,
        s = (0, M.vU)()?.getId();
    return (0, i.jsx)(er.$, {
        fullWidth: !0,
        onClick: () =>
            (0, O.se)(
                { quest: t },
                {
                    content: g.uF.QUEST_BAR_V2,
                    ctaContent: b.Cy.CONNECT_CONSOLE,
                    impressionId: s,
                    sourceQuestContent: n,
                },
            ),
        size: "sm",
        text: et.intl.string(et.t.csptqV),
    });
}
function eE(e) {
    let { quest: t } = e,
        n = (0, eo.NA)({ quest: t }),
        { launchInGameActivity: s } = (0, A.zW)(t);
    return (0, ec.vA)(t)
        ? (0, i.jsx)(er.$, { fullWidth: !0, variant: "primary", icon: (0, N.Oz)(t), onClick: s, size: "sm", text: n })
        : null;
}
function ev(e) {
    let {
            quest: t,
            sourceQuestContent: n,
            taskDetails: s,
            popoutTargetElementRef: l,
            onGameSheetOpened: a,
            onGameSheetClosed: r,
        } = e,
        { applications: o } = s;
    return (0, i.jsx)(ep.A, {
        quest: t,
        sourceQuestContent: n,
        applications: o ?? [],
        targetElementRef: l,
        onGameSheetOpened: a,
        onGameSheetClosed: r,
        children: (e) =>
            (0, i.jsx)(er.$, {
                variant: "secondary",
                fullWidth: !0,
                size: "sm",
                text: et.intl.string(et.t["93PTEs"]),
                ...e,
            }),
    });
}
function eT(e) {
    let { quest: t, ctaLabel: n, onClick: s, questContent: l = g.uF.QUEST_BAR_V2, sourceQuestContent: a } = e,
        r = (0, ef.D)({
            quest: t,
            questContent: l,
            sourceQuestContent: a,
            experimentLocation: q.rE.QUESTS_BAR,
            onBeforeClaim: s,
        });
    return (0, i.jsx)(er.$, {
        fullWidth: !0,
        onClick: r,
        text: n ?? et.intl.string(et.t.cfY4PE),
        "data-testid": "quest-bar-claim-reward-button",
        variant: "primary",
        size: "sm",
    });
}
function e_(e) {
    let {
            sourceQuestContent: t,
            awaitingConsoleConnections: n,
            hasMadeProgress: l,
            isProgressing: a,
            popoutTargetElementRef: r,
        } = e,
        { quest: o, onGameSheetOpen: u, onGameSheetClose: c, taskDetails: d } = s.useContext(z),
        [h] = (0, A.Qo)(o, d),
        m = o.userStatus?.completedAt != null,
        p = (0, E.vv)(o),
        f = (0, E.I6)(o),
        x = h !== g.X0.SELECT && !l && !a,
        C = null;
    return (
        m
            ? (C = (0, i.jsx)(eT, { quest: o, sourceQuestContent: t }))
            : f
              ? (C = (0, i.jsx)(eh.A, {
                    quest: o,
                    surface: em.V3.QUEST_BAR_FOOTER,
                    size: "sm",
                    analyticsCtxQuestContent: g.uF.QUEST_BAR_V2,
                    analyticsCtxSourceQuestContent: t,
                }))
              : p
                ? (C = (0, i.jsx)(eA, { quest: o, sourceQuestContent: t, taskDetails: d }))
                : (0, ec.vA)(o)
                  ? (C = (0, i.jsx)(eE, { quest: o }))
                  : h === g.X0.CONSOLE && n
                    ? (C = (0, i.jsx)(eC, { quest: o, sourceQuestContent: t }))
                    : x && (0, ec.ui)(o)
                      ? (C = (0, i.jsx)(ev, {
                            quest: o,
                            sourceQuestContent: t,
                            taskDetails: d,
                            popoutTargetElementRef: r,
                            onGameSheetOpened: u,
                            onGameSheetClosed: c,
                        }))
                      : x && (C = (0, i.jsx)(ex, { quest: o, sourceQuestContent: t })),
        null == C ? null : (0, i.jsx)("div", { className: eg.lO, children: C })
    );
}
function eN(e) {
    return (0, i.jsx)(e_, { ...e, popoutTargetElementRef: e.parentContainerRef });
}
var ej = n(106778),
    eS = n(536283),
    ey = n(947638);
let eR = (e) => {
    let { overlayRef: t, progressBarRef: n, isHovered: l } = e,
        { quest: o, isExpanded: d } = s.useContext(z),
        { expansionSpring: h } = s.useContext(G),
        { completionSpring: m, startCompletionAnimation: f } = (function () {
            let [{ spring: e }, t] = (0, J.z)(() => ({ spring: 0 }), "animate-always");
            return {
                completionSpring: e,
                startCompletionAnimation: s.useCallback(() => {
                    t({ spring: 1 }), t({ spring: 0, delay: 2e3 });
                }, [t]),
            };
        })(),
        g = o.userStatus?.completedAt != null,
        A = s.useRef(!1),
        x = (0, u.bG)([Y.Ay], () => Y.Ay.useReducedMotion),
        C = s.useRef(null),
        E = (0, u.bG)([p.A], () => p.A.hasLayers()),
        v = (0, c.A)(E),
        [T, _] = s.useState(null),
        [N, j] = s.useState(null),
        S = s.useRef(new ej.OH({ gravity: 0, wind: 0 })),
        y = (0, ej.f9)(T, N),
        R = s.useMemo(() => ["#51BC9D"], []),
        I = s.useCallback(() => {
            if (x) return;
            let e = n.current,
                t = C.current;
            if (null != t && null != e && y.isReady) {
                var i, s, l, a;
                let { x: n, y: r } = e.getBoundingClientRect(),
                    { x: o, y: u } = t.getBoundingClientRect();
                y.createMultipleConfetti(
                    ((i = n - o),
                    (s = r - u),
                    (l = e.clientHeight),
                    (a = e.clientWidth),
                    {
                        ...eS.Mw,
                        position: { type: "static-random", minValue: { x: i, y: s }, maxValue: { x: i + l, y: s + a } },
                        velocity: { type: "static-random", minValue: { x: -20, y: -20 }, maxValue: { x: 20, y: 20 } },
                        opacity: { type: "linear", value: 2, addValue: -0.1 },
                        dragCoefficient: { type: "static", value: 0.166 },
                        size: { type: "static-random", minValue: 2, maxValue: 3 },
                    }),
                    100,
                );
            }
        }, [n, C, y, x]),
        b = (0, c.A)(d);
    return (s.useEffect(() => {
        g && d && !b && (f(), I());
    }, [d, g, f, I, b]),
    s.useEffect(() => {
        g &&
            !E &&
            v &&
            setTimeout(() => {
                f(), I();
            }, 200);
    }, [g, v, E, f, I]),
    s.useEffect(() => {
        y.isReady && (!A.current && g && (f(), I()), (A.current = g));
    }, [g, A, I, f, y]),
    s.useEffect(() => {
        l && g && (f(), I());
    }, [l, g, f, I]),
    x)
        ? null
        : (0, i.jsxs)("div", {
              className: ey.iE,
              "aria-hidden": "true",
              ref: C,
              children: [
                  (0, i.jsx)(r.animated.div, { className: ey.Tp, style: { opacity: (0, k.a)(m) } }),
                  (0, i.jsx)(r.animated.div, { className: a()(ey.sJ, ey.ix), style: { opacity: (0, k.a)(m) } }),
                  (0, i.jsxs)(r.animated.div, {
                      className: ey.KG,
                      style: { transform: h.to({ range: [0, 1], output: [-35, 0] }).to((e) => `translateY(${e}px)`) },
                      children: [
                          (0, i.jsx)(ej.Fk, { ref: _, className: ey.t_, environment: S.current }),
                          (0, i.jsx)(ej.K_, {
                              ref: j,
                              sprites: ["/assets/b909790cf1d80597.svg"],
                              colors: R,
                              spriteWidth: eS.wn,
                              spriteHeight: eS.wn,
                          }),
                          null != t.current &&
                              (0, P.createPortal)(
                                  (0, i.jsx)(r.animated.div, {
                                      className: a()(ey.sJ, ey.d7),
                                      style: { opacity: (0, k.a)(m) },
                                  }),
                                  t.current,
                              ),
                      ],
                  }),
              ],
          });
};
var eI = n(453384),
    eb = n(460131);
let eM = function (e) {
    let { isExpanded: t, contentLocation: n, progressBarRef: l, percentComplete: a, popoutTargetElementRef: r } = e,
        { quest: o, onGameSheetOpen: u, onGameSheetClose: c, taskDetails: d } = s.useContext(z),
        { hasAlreadyLinked: h, onClickGameTitle: m } = s.useContext(Z),
        [p] = (0, A.Qo)(o, d),
        f = (0, eo.VX)(o, h),
        x = (0, eo.tH)({
            quest: o,
            isExpanded: t,
            activeScreen: p,
            sourceQuestContent: g.uF.QUEST_BAR_V2,
            popoutTargetElementRef: r,
            onGameSheetOpened: u,
            onGameSheetClosed: c,
            hasAlreadyLinked: h,
            onClickGameTitle: m,
        });
    return (0, i.jsxs)("div", {
        className: eb.Z0,
        children: [
            (0, i.jsx)(V, {
                inState: n,
                id: "progress-bar",
                ref: l,
                children: (e) =>
                    (0, i.jsx)(eI.A, {
                        ref: e,
                        style: "small",
                        percentComplete: a,
                        size: 42,
                        children: (0, i.jsx)(X.A, {
                            fullWidth: !0,
                            quest: o,
                            questContent: g.uF.QUEST_BAR_V2,
                            autoplay: !1,
                            sourceQuestContent: g.uF.QUEST_BAR_V2,
                        }),
                    }),
            }),
            (0, i.jsxs)("div", {
                className: eb.NZ,
                children: [
                    (0, i.jsx)(V, {
                        inState: n,
                        id: "progress-title",
                        children: (e) =>
                            (0, i.jsx)(S.E, {
                                ref: e,
                                className: eb.FZ,
                                color: "text-strong",
                                variant: "text-sm/semibold",
                                children: f,
                            }),
                    }),
                    (0, i.jsx)(V, {
                        inState: n,
                        id: "progress-subtitle",
                        isTextTransition: !0,
                        children: (e) =>
                            (0, i.jsx)(S.E, {
                                ref: e,
                                className: eb.FZ,
                                color: "text-subtle",
                                variant: "text-xs/normal",
                                children: x,
                            }),
                    }),
                ],
            }),
        ],
    });
};
var eO = n(78385);
function ew() {
    let { quest: e, onCtxMenuOpen: t, onCtxMenuClose: n, onCtxMenuSelect: l } = s.useContext(z),
        r = (0, A.S5)(e.config.expiresAt);
    return (0, i.jsxs)("div", {
        className: eO.pS,
        children: [
            (0, i.jsx)(S.E, {
                variant: "text-xxs/medium",
                className: a()(eO.Uu, eO.TK),
                children: et.intl.format(et.t["pX+fmn"], { expirationDate: r }),
            }),
            (0, i.jsx)(w.C, {
                onOpen: t,
                onClose: n,
                onSelect: l,
                questContent: g.uF.QUEST_BAR_V2,
                quest: e,
                shouldShowDisclosure: !1,
                showShareLink: !0,
                sourceQuestContent: g.uF.QUEST_BAR_V2,
                children: (e) =>
                    (0, i.jsx)(j.D, {
                        ...e,
                        className: eO.rb,
                        "aria-label": et.intl.string(et.t.DEoVWZ),
                        children: (0, i.jsx)(I.j, { size: "md", color: "currentColor", className: a()(eO.Bx, eO.U9) }),
                    }),
            }),
        ],
    });
}
var eU = n(249309);
let ek = s.forwardRef(function (e, t) {
    let { className: n, overlayRef: l } = e,
        { expansionSpring: o } = s.useContext(G),
        { quest: u, taskDetails: c, isExpanded: d, isExpansionAnimationComplete: h } = s.useContext(z),
        m = u.userStatus?.completedAt != null,
        p = (0, A.I3)(u),
        f = s.useRef(null),
        x = u.userStatus?.enrolledAt != null,
        C = null != p ? p.percentComplete : c.percentComplete,
        E = s.useRef(null),
        [v, T] = s.useState(!1);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            m && (0, i.jsx)(eR, { overlayRef: l, progressBarRef: f, isHovered: v }),
            (0, i.jsx)(r.animated.div, {
                ref: t,
                "aria-hidden": d && h,
                inert: (!!d && !!h) || void 0,
                className: a()(n, eU.hR, { [eU.Ag]: d, [eU.s]: x }),
                style: {
                    opacity: (0, k.a)(o.to({ range: [0, 1], output: [1, 0] })),
                    backgroundImage: m ? `linear-gradient(90deg, ${L}, ${F})` : void 0,
                },
                onMouseEnter: () => T(!0),
                onMouseLeave: () => T(!1),
                children: (0, i.jsxs)("div", {
                    className: eU.o8,
                    children: [
                        m &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(ew, {}), (0, i.jsx)("div", { className: eU.yF })],
                            }),
                        x
                            ? (0, i.jsx)(eM, {
                                  contentLocation: "collapsed",
                                  progressBarRef: f,
                                  isExpanded: !1,
                                  percentComplete: C,
                              })
                            : null,
                        m &&
                            (0, i.jsx)("div", {
                                ref: E,
                                children: (0, i.jsx)(eN, {
                                    parentContainerRef: E,
                                    awaitingConsoleConnections: !1,
                                    hasMadeProgress: !0,
                                    isProgressing: !1,
                                    sourceQuestContent: g.uF.QUEST_BAR_V2,
                                }),
                            }),
                    ],
                }),
            }),
        ],
    });
});
n(801541);
var eP = n(889137),
    eD = n(417270),
    eL = n(782134),
    eF = n(534514),
    eG = n(825484),
    eV = n(408278),
    eB = n(921853),
    eH = n(607470),
    eQ = n(340124),
    eW = n(405670),
    eq = n(112142),
    ez = n(646917),
    eZ = n(46948),
    eK = n(576761),
    e$ = n(895253),
    eY = n(976019),
    eX = n(442734),
    eJ = n(139384),
    e0 = n(114046),
    e1 = n(695366),
    e2 = n(274670),
    e3 = n(144779),
    e6 = n(30370),
    e5 = n(104886),
    e4 = n(18437),
    e8 = n(780964),
    e7 = n(766075),
    e9 = n(52093),
    te = n(540037);
function tt(e) {
    let { text: t, quest: n, sourceQuestContent: s } = e,
        l = (0, e4.Ut)(),
        a = (0, M.go)();
    return (0, i.jsx)(j.D, {
        className: te.Z0,
        onClick: () => {
            (0, e5.E5)(e5.kI.STEP_2_CLICKED_INTERNAL, "console_connection_step")
                ? (0, e2.r)({
                      type: e3.F.CLICK_INTERNAL,
                      adCreativeType: o.p.QUEST,
                      adCreativeId: n.id,
                      questContentCTA: b.Cy.VIEW_CONSOLE_CONNECTIONS_LINK,
                      surfaceId: g.uF.QUEST_BAR_V2,
                      sourceQuestContent: s,
                      impressionId: a,
                  })
                : l({
                      questId: n.id,
                      questContent: g.uF.QUEST_BAR_V2,
                      questContentCTA: b.Cy.VIEW_CONSOLE_CONNECTIONS_LINK,
                      sourceQuestContent: s,
                  }),
                (0, e7.openUserSettings)(e8.X.CONNECTIONS_PANEL);
        },
        children: (0, i.jsx)(S.E, { "aria-label": t, color: "none", variant: "text-xxs/normal", children: t }),
    });
}
function tn(e) {
    let { xboxAndPlaystationAccounts: t, quest: n, sourceQuestContent: s } = e;
    return t.length > 0
        ? (0, i.jsx)(tt, { text: et.intl.string(et.t["qiS+xj"]), quest: n, sourceQuestContent: s })
        : null;
}
function ti(e) {
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(e9.L5, { children: et.intl.string(et.t.EJFSvD) }), (0, i.jsx)(tn, { ...e })],
    });
}
var ts = n(256023);
function tl(e) {
    return (0, i.jsx)(S.E, { className: ts.eW, color: "text-muted", variant: "text-xxs/normal", children: e.children });
}
function ta(e) {
    let { quest: t, useReducedMotion: n } = e,
        l = (0, _.H1)(t.id, g.uF.QUEST_BAR_V2, g.uF.QUEST_BAR_V2),
        r = (0, _.Xf)({ useReducedMotion: n }),
        u = (0, e4.Ut)(),
        c = (0, M.go)(),
        {
            errorHints: d,
            startingConsoleQuest: h,
            startConsoleQuest: m,
        } = (0, A.Wj)({
            questId: t.id,
            beforeRequest: () => {
                (0, e5.E5)(e5.kI.STEP_2_CLICKED_INTERNAL, "quest_bar_console_task_checklist")
                    ? (0, e2.r)({
                          type: e3.F.CLICK_INTERNAL,
                          adCreativeType: o.p.QUEST,
                          adCreativeId: t.id,
                          questContentCTA: b.Cy.DEFIBRILLATOR,
                          surfaceId: g.uF.QUEST_BAR_V2,
                          sourceQuestContent: g.uF.QUEST_BAR_V2,
                          impressionId: c,
                      })
                    : u({
                          questId: t.id,
                          questContent: g.uF.QUEST_BAR_V2,
                          questContentCTA: b.Cy.DEFIBRILLATOR,
                          sourceQuestContent: g.uF.QUEST_BAR_V2,
                      }),
                    r.startAnimation();
            },
            afterRequest: r.stopAnimation,
        }),
        { header: p, renderBody: f } = s.useMemo(() => {
            let e = d.length > 0,
                n = t.config.messages.gameTitle;
            return {
                header: e
                    ? (0, ec.ui)(t)
                        ? et.intl.string(et.t.N33EuL)
                        : et.intl.formatToPlainString(et.t["28Ql27"], { gameTitle: n })
                    : (0, ec.ui)(t)
                      ? et.intl.string(et.t.YstzGO)
                      : et.intl.formatToPlainString(et.t.gX0Qcx, { gameTitle: n }),
                renderBody: e
                    ? function () {
                          return (0, i.jsx)(i.Fragment, {
                              children: d.map((e, n) => {
                                  if (e.type === e0._.EXPIRED_CREDENTIAL) {
                                      let s = e6.A.getAccount(e.connected_account_id, e.connected_account_type),
                                          l = (0, O.IG)(e),
                                          a = (0, O.$J)(e);
                                      return (0, i.jsx)(
                                          tl,
                                          {
                                              children: et.intl.format(l, {
                                                  account_name: s?.name,
                                                  onClick: () => {
                                                      (0, O.v0)(
                                                          { quest: t, platformType: a },
                                                          {
                                                              content: g.uF.QUEST_BAR,
                                                              ctaContent: b.Cy.DEFIBRILLATOR_RECONNECT_CONSOLE,
                                                              impressionId: c,
                                                              sourceQuestContent: g.uF.QUEST_BAR_V2,
                                                          },
                                                      );
                                                  },
                                              }),
                                          },
                                          n,
                                      );
                                  }
                                  return (0, i.jsx)(tl, { children: e.message }, n);
                              }),
                          });
                      }
                    : () =>
                          (0, i.jsx)(S.E, {
                              className: ts.eW,
                              color: "text-muted",
                              variant: "text-xxs/normal",
                              children: (0, ec.ui)(t)
                                  ? et.intl.string(et.t.bUyEZZ)
                                  : et.intl.format(et.t.GXqvC1, { gameTitle: n }),
                          }),
            };
        }, [d, t, c]);
    return (0, i.jsxs)("div", {
        className: ts.XK,
        children: [
            (0, i.jsxs)("div", {
                className: ts.oK,
                children: [
                    (0, i.jsx)(e1.E, {
                        size: "custom",
                        color: "currentColor",
                        className: 0 === d.length ? ts.pH : ts.JA,
                        width: 16,
                        height: 16,
                    }),
                    (0, i.jsx)(S.E, { variant: "text-xs/medium", children: p }),
                    (0, i.jsx)(j.D, { className: a()(ts.w, { [ts.r9]: h }), onClick: () => m(), children: r.render() }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: a()({ [ts.Iu]: h }),
                children: [f(), 0 === d.length ? null : (0, i.jsx)(tl, { children: l })],
            }),
        ],
    });
}
let tr = function (e) {
        let { quest: t, taskDetails: n } = e,
            l = (0, u.bG)([Y.Ay], () => Y.Ay.useReducedMotion),
            a = (0, A.Du)(),
            r = s.useMemo(
                () => (0, O.bg)(t).filter((e) => a.xboxAndPlaystationAccounts.find((t) => t.type === e)),
                [a.xboxAndPlaystationAccounts, t],
            ),
            {
                steps: o,
                hasConnectedAccounts: c,
                isProgressingQuestForLaunchedGame: d,
                isQuestComplete: h,
            } = s.useMemo(() => {
                let e = r.length > 0,
                    s = e && (0, E.YL)(t),
                    l = t.config.messages.gameTitle,
                    o = t.userStatus?.completedAt != null;
                return {
                    steps: [
                        {
                            renderContent: () =>
                                (0, i.jsx)(ti, { ...a, quest: t, sourceQuestContent: g.uF.QUEST_BAR_V2 }),
                            isComplete: e || s || o,
                        },
                        {
                            renderContent: () =>
                                (0, i.jsx)(e9.L5, {
                                    children: (0, ec.ui)(t)
                                        ? et.intl.string(et.t["5tXqFe"])
                                        : et.intl.formatToPlainString(et.t["+8JB6Y"], { gameTitle: l }),
                                }),
                            isComplete: s || o,
                        },
                        {
                            renderContent: () =>
                                (0, i.jsx)(e9.L5, {
                                    children: et.intl.formatToPlainString(et.t.HhfrYS, { numMinutes: n.targetMinutes }),
                                }),
                            isComplete: o,
                        },
                    ],
                    hasConnectedAccounts: e,
                    isProgressingQuestForLaunchedGame: s,
                    isQuestComplete: o,
                };
            }, [a, r.length, t, n.targetMinutes]);
        return (0, i.jsx)(e9.Ay, {
            heading: et.intl.string(et.t.UPWlJu),
            steps: o,
            children: c && !d && !h && (0, i.jsx)(ta, { useReducedMotion: l, quest: t }),
        });
    },
    to = s.createContext({ springConfig: {}, isExpanded: !1 });
function tu(e) {
    let t = s.useMemo(
        () => ({ springConfig: e.springConfig, isExpanded: e.isExpanded }),
        [e.springConfig, e.isExpanded],
    );
    return (0, i.jsx)(to.Provider, { value: t, children: e.children });
}
function tc(e) {
    let { children: t } = e,
        { springConfig: n, isExpanded: l } = s.useContext(to),
        a = (0, u.bG)([Y.Ay], () => Y.Ay.useReducedMotion),
        { ref: o, height: d = null } = (0, D.Ay)(),
        h = (0, c.A)(d) ?? null,
        [{ height: m }, p] = (0, J.z)(() => ({ from: { height: 0 }, config: n }));
    return (
        s.useLayoutEffect(() => {
            null !== d && p({ height: d, immediate: !l || a || null === h });
        }, [d, p, l, a, h]),
        (0, i.jsx)(r.animated.div, {
            style: { height: null === h ? "auto" : m, overflow: "hidden" },
            children: (0, i.jsx)("div", { style: { overflow: "hidden" }, ref: o, children: t }),
        })
    );
}
n(134528), n(947204);
var td = n(909714);
function th(e) {
    let { header: t, children: n } = e;
    return (0, i.jsxs)("div", {
        className: td.Nr,
        children: [
            (0, i.jsxs)("div", {
                className: td.wx,
                children: [
                    (0, i.jsx)(e1.E, {
                        size: "custom",
                        color: "currentColor",
                        className: td.Kk,
                        width: 16,
                        height: 16,
                    }),
                    (0, i.jsx)(eF.D, { color: "text-default", variant: "heading-sm/medium", children: t }),
                ],
            }),
            (0, i.jsx)(S.E, { color: "text-muted", variant: "text-xs/normal", className: td.r2, children: n }),
        ],
    });
}
let tm = function (e) {
    let { quest: t } = e,
        n = (0, A.aC)(t);
    if (0 === n.length) return null;
    let s = n.at(0);
    return s === et.intl.string(et.t.BV6xDm)
        ? (0, i.jsx)(th, { header: et.intl.string(et.t.onh6ct), children: et.intl.string(et.t.arVHRA) })
        : s === et.intl.string(et.t.MFGxFM)
          ? (0, i.jsx)(th, { header: et.intl.string(et.t.JPihZA), children: et.intl.string(et.t.MFGxFM) })
          : null;
};
var tp = n(31300),
    tf = n(687966),
    tg = n(825807);
let tA = function (e) {
    let { onDesktop: t, onConsole: n } = e;
    return (0, i.jsxs)(eG.e, {
        direction: "vertical",
        fullWidth: !0,
        className: tg.G,
        size: "sm",
        children: [
            (0, i.jsx)(er.$, {
                onClick: t,
                text: et.intl.string(et.t["QXc01+"]),
                variant: "secondary",
                icon: tp.k,
                iconPosition: "end",
            }),
            (0, i.jsx)(er.$, {
                onClick: n,
                text: et.intl.string(et.t["8lAfuB"]),
                variant: "secondary",
                icon: tf._,
                iconPosition: "end",
            }),
        ],
    });
};
var tx = n(495707);
let tC = s.forwardRef(function (e, t) {
    let { isHovered: n, asset: l, poster: a, className: r, autoPlay: o = !1 } = e,
        { isExpanded: c } = s.useContext(z),
        d = (0, u.bG)([Y.Ay], () => Y.Ay.useReducedMotion),
        h = s.useRef(null);
    return (
        s.useEffect(() => {
            null != h.current && (c && (!d || n) ? ((h.current.currentTime = 0), h.current.play()) : h.current.pause());
        }, [h, c, n, d]),
        (0, eJ.A)(h, q.rE.QUESTS_BAR),
        (0, i.jsx)(eH.A, {
            ref: (e) => {
                (h.current = e), null != t && ("function" == typeof t ? t(e) : (t.current = e));
            },
            autoPlay: o,
            poster: a,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: r,
            controls: !1,
            children: (0, i.jsx)("source", { src: l.url, type: l.mimetype ?? void 0 }),
        })
    );
});
function tE(e) {
    let { onClick: t } = e,
        { quest: n } = s.useContext(z),
        l = (0, u.bG)([Y.Ay], () => Y.Ay.useReducedMotion),
        [r, o] = s.useState(!1),
        c = (0, eZ.tW)(n, eZ.fY.QUEST_BAR_HERO_VIDEO, void 0, !1),
        d = (0, eZ.tW)(n, eZ.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1),
        h = (0, eW.Kr)((e) => e.getVideoProgressState)(n.id),
        m = n.userStatus?.completedAt != null && h === eW.K2.COMPLETED,
        p = !m && (!l || r);
    return (0, i.jsxs)(j.D, {
        className: tx.QO,
        onClick: t,
        onMouseEnter: function () {
            l && !r && o(!0);
        },
        onMouseLeave: function () {
            l && r && o(!1);
        },
        children: [
            null != d &&
                (0, i.jsx)(v._M, {
                    id: "QuestBarContentExpanded_videoThumbnail",
                    children: (e) => (0, i.jsx)("img", { ref: e, alt: "", src: d.url, className: tx.Ue }),
                }),
            null != c
                ? (0, i.jsx)(v._M, {
                      id: "QuestBarContentExpanded_video",
                      children: (e) =>
                          (0, i.jsx)(tC, {
                              ref: e,
                              isHovered: r,
                              autoPlay: !1,
                              asset: c,
                              poster: d?.url,
                              className: a()(tx.NM, { [tx.Gc]: p }),
                          }),
                  })
                : null,
            (0, i.jsx)("div", {
                className: tx.LT,
                children: m
                    ? (0, i.jsx)(eD.m, { color: R.A.colors.WHITE, className: tx.t })
                    : (0, i.jsx)(eL.u, { color: R.A.colors.WHITE, className: tx.t }),
            }),
        ],
    });
}
function tv(e) {
    let { quest: t } = e;
    return (0, i.jsx)(X.A, {
        className: a()(tx.Qq, tx.wq),
        learnMoreStyle: "text",
        quest: t,
        questContent: g.uF.QUEST_BAR_V2,
        sourceQuestContent: g.uF.QUEST_BAR_V2,
    });
}
function tT(e) {
    let { isInteractable: t, containerRef: n, onAcceptQuest: l } = e,
        { quest: o, onGameSheetOpen: c, onGameSheetClose: d, taskDetails: h } = s.useContext(z),
        { expansionSpring: m } = s.useContext(G),
        p = s.useRef(null),
        x = (0, u.bG)([f.A], () => f.A.isEnrolling(o.id), [o]),
        C = s.useMemo(() => (0, eZ.tW)(o, eZ.fY.QUEST_BAR_HERO), [o]),
        E = (0, eo.NA)({ quest: o }),
        T = s.useMemo(() => (0, eZ.tW)(o, eZ.fY.HERO_IMAGE), [o]),
        _ = s.useMemo(() => (null == T ? {} : { backgroundImage: `url(${T.url})` }), [T]),
        j = eq.t.useConfig({ location: q.rE.QUESTS_BAR }),
        y = (0, eo.mU)({
            quest: o,
            location: q.rE.QUESTS_BAR,
            taskDetails: h,
            sourceQuestContent: g.uF.QUEST_BAR_V2,
            popoutTargetElementRef: p,
            onGameSheetOpened: c,
            onGameSheetClosed: d,
            gameProfileSource: H.GameProfileSources.QuestBar,
        }),
        R = (0, em.Pd)(o),
        I = (0, ez.z)(),
        b = (0, A.SD)(o, I),
        M = I === eK.MA.NITRO && b;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                ref: p,
                children: (0, i.jsxs)("div", {
                    className: tx.do,
                    ref: n,
                    children: [
                        (0, i.jsxs)("div", {
                            className: tx.zH,
                            children: [
                                (0, i.jsx)(tv, { quest: o }),
                                (0, i.jsx)(eF.D, {
                                    className: tx.DD,
                                    color: "text-strong",
                                    variant: "heading-md/medium",
                                    children: et.intl.format(et.t.EQa7os, { questName: o.config.messages.questName }),
                                }),
                                (0, i.jsxs)("div", {
                                    className: tx.zf,
                                    children: [
                                        (0, i.jsx)(S.E, { className: tx.h_, variant: "text-xs/normal", children: y }),
                                        b && (0, i.jsx)(eX.e, { questId: o.id, orbMultiplierEligibility: I }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: tx.lO,
                            "data-testid": "quest-bar-enroll-cta",
                            children: (0, i.jsx)(eG.e, {
                                direction: "horizontal",
                                fullWidth: !0,
                                wrap: !1,
                                children:
                                    j.enabled && R === em.UA.UNENROLLED && j.enabledQuestStates.has(em.UA.UNENROLLED)
                                        ? (0, i.jsx)(eh.A, {
                                              quest: o,
                                              surface: em.V3.QUEST_BAR_FOOTER,
                                              size: "sm",
                                              analyticsCtxQuestContent: g.uF.QUEST_BAR_V2,
                                              analyticsCtxSourceQuestContent: g.uF.QUEST_BAR_V2,
                                          })
                                        : (0, i.jsx)(er.$, {
                                              onClick: t ? l : void 0,
                                              variant: "primary",
                                              loading: x,
                                              text: E,
                                              size: "sm",
                                              icon: (0, N.Oz)(o),
                                              fullWidth: !0,
                                          }),
                            }),
                        }),
                    ],
                }),
            }),
            (0, i.jsx)(e$.A, { visible: M, glow: !0, className: tx.Ph }),
            null != T &&
                (0, i.jsx)(r.animated.div, {
                    className: tx.AK,
                    style: { opacity: (0, k.a)(m.to([0, 1], [1, 0])) },
                    children: (0, i.jsx)("div", { className: a()(tx.LC, tx.Ge), style: _ }),
                }),
            (0, i.jsxs)(r.animated.div, {
                className: tx.IC,
                style: {
                    backdropFilter: (0, k.Q)(m.to([0, 1], [5, 0]).to((e) => `blur(${e}px)`)),
                    filter: (0, k.Q)(m.to([0, 1], [0.8, 1]).to((e) => `brightness(${e})`)),
                },
                children: [
                    C.isAnimated
                        ? (0, i.jsx)(v._M, {
                              id: "QuestBarContentExpanded_heroAnimated",
                              children: (e) => (0, i.jsx)(tC, { ref: e, autoPlay: !0, asset: C, className: tx.LO }),
                          })
                        : (0, i.jsx)(v._M, {
                              id: "QuestBarContentExpanded_heroStatic",
                              children: (e) => (0, i.jsx)("img", { ref: e, alt: "", className: tx.LO, src: C.url }),
                          }),
                    (0, i.jsx)("div", { className: tx.tV }),
                ],
            }),
        ],
    });
}
function t_(e) {
    let { quest: t } = e,
        { hasAlreadyLinked: n, onClickGameTitle: l } = s.useContext(Z);
    return !0 !== n ? null : (0, i.jsx)(eY.A, { quest: t, hasAlreadyLinked: n, onClickGameTitle: l });
}
function tN(e) {
    let { activeScreen: t, selectPlatform: n } = e,
        { quest: l, taskDetails: a } = s.useContext(z);
    return (0, eP.YW)(t)
        .with(g.X0.SELECT, () => (0, i.jsx)(tA, { onConsole: () => n(q.fO.CONSOLE), onDesktop: () => n(q.fO.DESKTOP) }))
        .with(g.X0.DESKTOP, () => ((0, E.I6)(l) ? (0, i.jsx)(t_, { quest: l }) : (0, i.jsx)(tm, { quest: l })))
        .with(g.X0.CONSOLE, () => (0, i.jsx)(tr, { quest: l, taskDetails: a }))
        .exhaustive();
}
function tj(e) {
    let { parentContainerRef: t } = e,
        { quest: n, taskDetails: l } = s.useContext(z),
        [a, r, o] = (0, A.Qo)(n, l),
        u = l.percentComplete > 0,
        c = (0, A.Vn)(n),
        d = (0, A.RR)({ quest: n }),
        h = r.length > 1 && !u && !c;
    return (0, i.jsxs)(tc, {
        children: [
            (0, i.jsx)(tN, { activeScreen: a, selectPlatform: o }),
            a !== g.X0.SELECT &&
                (0, i.jsxs)("div", {
                    className: tx.oG,
                    children: [
                        h &&
                            (0, i.jsx)(eV.K, {
                                size: "sm",
                                "aria-label": et.intl.string(et.t["13/7kX"]),
                                onClick: () => o(null),
                                icon: eB.n,
                                variant: "secondary",
                            }),
                        (0, i.jsx)(eN, {
                            awaitingConsoleConnections: d,
                            parentContainerRef: t,
                            hasMadeProgress: u,
                            isProgressing: c,
                            sourceQuestContent: g.uF.QUEST_BAR_V2,
                        }),
                    ],
                }),
        ],
    });
}
function tS(e) {
    let { parentContainerRef: t } = e,
        { quest: n, taskDetails: l } = s.useContext(z),
        a = l.percentComplete > 0,
        r = (0, A.Vn)(n),
        o = s.useCallback(() => {
            (0, N.d5)({
                quest: n,
                questContent: g.uF.QUEST_BAR_V2,
                sourceQuestContent: g.uF.QUEST_BAR_V2,
                sourceQuestContentCTA: b.Cy.QUEST_BAR_VIDEO_QUEST_PREVIEW,
            });
        }, [n]);
    return (0, i.jsxs)(tc, {
        children: [
            (0, i.jsx)(tE, { onClick: o }),
            (0, i.jsx)(eN, {
                parentContainerRef: t,
                awaitingConsoleConnections: !1,
                hasMadeProgress: a,
                isProgressing: r,
                sourceQuestContent: g.uF.QUEST_BAR_V2,
            }),
        ],
    });
}
function ty(e) {
    let { parentContainerRef: t } = e,
        { quest: n, taskDetails: l } = s.useContext(z),
        a = l.percentComplete > 0,
        r = (0, A.Vn)(n);
    return (0, i.jsx)(tc, {
        children: (0, i.jsx)(eN, {
            parentContainerRef: t,
            awaitingConsoleConnections: !1,
            hasMadeProgress: a,
            isProgressing: r,
            sourceQuestContent: g.uF.QUEST_BAR_V2,
        }),
    });
}
function tR(e) {
    let { parentContainerRef: t } = e,
        { quest: n } = s.useContext(z);
    return (0, E.t)({ quest: n }) || (0, E.g5)(n) || (0, E.fE)({ quest: n }) || (0, E.I6)(n)
        ? (0, i.jsx)(tj, { parentContainerRef: t })
        : (0, E.vv)(n)
          ? (0, i.jsx)(tS, { parentContainerRef: t })
          : (0, i.jsx)(ty, { parentContainerRef: t });
}
function tI(e) {
    let { overlayRef: t, containerRef: n } = e,
        { quest: l, taskDetails: o } = s.useContext(z),
        { expansionSpring: u } = s.useContext(G),
        c = s.useRef(null),
        d = s.useRef(null),
        h = (0, A.I3)(l),
        m = null != h ? h.percentComplete : o.percentComplete;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(r.animated.div, {
                className: a()(tx.tv, tx.ag),
                style: {
                    backgroundImage: `linear-gradient(90deg, ${L}, ${F})`,
                    opacity: (0, k.a)(u.to({ range: [0, 1], output: [1, 0] })),
                },
            }),
            (0, i.jsxs)("div", {
                className: tx.Fe,
                ref: (e) => {
                    "function" == typeof n ? n(e) : null != n && (n.current = e), null != e && (d.current = e);
                },
                children: [
                    (0, i.jsx)(ew, {}),
                    (0, i.jsx)("div", { className: tx.yF }),
                    (0, i.jsx)(eR, { overlayRef: t, progressBarRef: c, isHovered: !1 }),
                    (0, i.jsx)(eM, {
                        contentLocation: "expanded",
                        progressBarRef: c,
                        isExpanded: !0,
                        percentComplete: m,
                        popoutTargetElementRef: d,
                    }),
                    (0, i.jsx)(tR, { parentContainerRef: d }),
                ],
            }),
            (0, i.jsx)("div", {
                className: a()(tx.tv, tx.Sx),
                style: { backgroundImage: `linear-gradient(90deg, ${L}, ${F})` },
            }),
        ],
    });
}
async function tb(e, t, n, i) {
    (0, E.vv)(e)
        ? await (0, N.e0)(e, { questContent: t, questContentCTA: n, sourceQuestContent: i, sourceQuestContentCTA: n })
        : (0, ec.vA)(e)
          ? await (0, eQ.Oy)(e.id, { questContent: t, questContentCTA: n, sourceQuestContent: i })
          : (0, eQ.Oy)(e.id, { questContent: t, questContentCTA: n, sourceQuestContent: i });
}
let tM = s.forwardRef(function (e, t) {
    let { children: n, className: l, overlayRef: o } = e,
        { collapsedHeight: u, isExpanded: c, isExpansionAnimationComplete: d, quest: h } = s.useContext(z),
        { expansionSpring: m } = s.useContext(G),
        { launchInGameActivity: p } = (0, A.zW)(h),
        f = (0, ec.vA)(h),
        x = s.useCallback(async () => {
            let e = f ? b.Cy.START_QUEST : b.Cy.ACCEPT_QUEST;
            await tb(h, g.uF.QUEST_BAR_V2, e, g.uF.QUEST_BAR_V2), f && p();
        }, [h, p, f]),
        C = h.userStatus?.enrolledAt != null,
        E = c && d;
    return (0, i.jsxs)(r.animated.div, {
        "aria-hidden": !E,
        inert: !E || void 0,
        className: a()(l, tx.Rh, { [tx.Yd]: E, [tx.iH]: C }),
        style: {
            transform: (0, r.to)(
                [m.to({ range: [0, 1], output: [0, -100] }), m.to({ range: [0, 1], output: [0, u] })],
                (e, t) => `translateY(calc(${e}% + ${t}px))`,
            ),
        },
        children: [
            n,
            (0, i.jsx)(r.animated.div, {
                style: { opacity: 1 },
                children: C
                    ? (0, i.jsx)(tI, { overlayRef: o, containerRef: t })
                    : (0, i.jsx)(tT, { isInteractable: E, containerRef: t, onAcceptQuest: x }),
            }),
        ],
    });
});
var tO = n(717695);
function tw() {
    let {
            expansionSpring: e,
            animatedComponentProps: t,
            recalculateAnimationPositions: n,
            mountPoints: l,
        } = s.useContext(G),
        { isExpanded: a } = s.useContext(z);
    return (
        s.useEffect(() => {
            n();
        }, [n, a]),
        (0, i.jsx)("div", {
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
                let { id: n, collapsedLeft: s, expandedLeft: a, collapsedTop: o, expandedTop: u, width: c } = t,
                    d = l.get(n);
                return (0, i.jsx)(
                    r.animated.div,
                    {
                        ref: d,
                        style: {
                            zIndex: 2,
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: c,
                            transform: (0, r.to)(
                                [e.to({ range: [0, 1], output: [s, a] }), e.to({ range: [0, 1], output: [o, u] })],
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
var tU = n(192308),
    tk = n(561844),
    tP = n(652215),
    tD = n(731738),
    tL = n(807393),
    tF = n(260364),
    tG = n(737595);
function tV(e) {
    let { isExpanded: t, questId: n } = e;
    return (
        (0, A.H6)({
            mode: t ? q.fP.EXPANDED : q.fP.COLLAPSED,
            questContent: g.uF.QUEST_BAR_V2,
            questId: n,
            sourceQuestContent: g.uF.QUEST_BAR_V2,
        }),
        null
    );
}
function tB() {
    return (
        s.useEffect(() => {
            m.trigger();
        }, []),
        null
    );
}
function tH(e) {
    let { quest: t } = e,
        n = (0, C.L)({ quest: t, location: q.rE.QUESTS_BAR }),
        l = (0, x.s)(),
        o = (0, u.bG)([f.A], () => null != f.A.questEnrollmentBlockedUntil),
        { isQuestBarVisible: d, reason: h } = (0, _.TQ)({ quest: t }),
        m = (0, u.bG)([p.A], () => p.A.hasLayers()),
        j = s.useRef(null),
        S = s.useMemo(() => (0, E.vv)(t), [t]),
        y = t.id,
        R = t.userStatus?.enrolledAt != null,
        I = (0, c.A)(R),
        M = t.userStatus?.completedAt != null,
        { hasError: O, isLoading: w } = (0, v.zT)(),
        U = s.useContext(tO.Z) || (l && d && !w && !o),
        {
            isExpanded: k,
            setIsExpanded: P,
            expandQuestBar: D,
            isExpansionAnimationComplete: L,
            isVisibilityAnimationAtRest: F,
            expansionSpring: G,
            visibilitySpring: V,
            springConfig: H,
        } = (function (e) {
            let { isQuestAccepted: t, isQuestCompleted: n, isQuestBarVisible: i } = e,
                l = (0, u.bG)([Y.Ay], () => Y.Ay.useReducedMotion),
                [a, r] = s.useState(!1),
                [o, c] = s.useState(!0),
                [d, h] = s.useState(!0),
                m = s.useRef(i),
                p = s.useCallback(
                    (e) => {
                        (n && e) || (a !== e && (c(!1), r(e)));
                    },
                    [n, a],
                ),
                f = s.useCallback(() => {
                    p(!0);
                }, [p]),
                g = s.useCallback(() => {
                    p(!1);
                }, [p]),
                A = t ? q.ZV : q.Ko,
                [{ expansionSpring: x }, C] = (0, J.z)(() => ({
                    from: { expansionSpring: 0 },
                    config: A,
                    onRest: () => {
                        c(!0);
                    },
                    onStart: () => {
                        c(!1);
                    },
                }));
            s.useEffect(() => {
                C({ expansionSpring: +!!a, immediate: l });
            }, [a, C, l]);
            let { visibilitySpring: E } = (0, J.z)({
                from: { visibilitySpring: 0 },
                to: { visibilitySpring: +!!i },
                config: { tension: 250, friction: 10, clamp: !0 },
                onRest: () => {
                    h(!0);
                },
                onStart: () => {
                    h(!1);
                },
            });
            return (
                s.useLayoutEffect(() => {
                    i !== m.current && h(!1), (m.current = i);
                }, [i]),
                {
                    isExpanded: a,
                    setIsExpanded: p,
                    expandQuestBar: f,
                    collapseQuestBar: g,
                    isExpansionAnimationComplete: o,
                    isVisibilityAnimationAtRest: d,
                    expansionSpring: x,
                    visibilitySpring: E,
                    springConfig: A,
                }
            );
        })({ isQuestAccepted: R, isQuestCompleted: M, isQuestBarVisible: U }),
        {
            handleCtxMenuOpened: Q,
            handleCtxMenuClosed: W,
            handleCtxMenuSelection: z,
            handleGameSheetOpened: Z,
            handleGameSheetClosed: K,
            handleFocusWithoutDelay: X,
            handleBlur: ee,
            handleMouseEnter: et,
            handleMouseLeave: en,
        } = (function (e) {
            let {
                    quest: t,
                    isExpanded: n,
                    setIsExpanded: i,
                    expandQuestBar: l,
                    isQuestCompleted: a,
                    isQuestAccepted: r,
                    prevIsQuestAccepted: o,
                    impressionRef: u,
                } = e,
                c = s.useRef(-1),
                d = s.useRef(!1),
                [h, m] = s.useState(!1),
                [p, f] = s.useState(!1),
                A = s.useCallback(() => {
                    m(!0);
                }, []),
                x = s.useCallback(() => {
                    m(!1), d.current || a || i(!1);
                }, [a, i]),
                C = s.useCallback(() => {
                    m(!1), a || i(!1), (d.current = !1);
                }, [a, i]),
                E = s.useCallback(() => {
                    f(!0);
                }, []),
                v = s.useCallback(() => {
                    f(!1), i(!1);
                }, [i]),
                T = s.useCallback(
                    function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (n) return;
                        let { withDelay: t = !1 } = e;
                        t ? (c.current = window.setTimeout(l, 75)) : l();
                    },
                    [l, n],
                ),
                _ = s.useCallback(() => {
                    T();
                }, [T]),
                N = s.useCallback(() => {
                    window.clearTimeout(c.current), h || p || d.current || i(!1);
                }, [h, p, i]),
                j = s.useCallback(() => {
                    (0, tk.av)({
                        questId: t.id,
                        event: tP.HAw.QUEST_HOVER,
                        properties: {
                            content_id: g.uF.QUEST_BAR,
                            content_name: (0, b.jO)(g.uF.QUEST_BAR),
                            impression_id: u.current?.getId(),
                        },
                        shouldExtendSession: !0,
                        sourceQuestContent: g.uF.QUEST_BAR_V2,
                    }),
                        (d.current = !0),
                        T({ withDelay: !0 });
                }, [T, u, t.id]),
                S = s.useCallback(() => {
                    (0, tk.av)({
                        questId: t.id,
                        event: tP.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: g.uF.QUEST_BAR,
                            content_name: (0, b.jO)(g.uF.QUEST_BAR),
                            impression_id: u.current?.getId(),
                        },
                        sourceQuestContent: g.uF.QUEST_BAR_V2,
                    }),
                        (d.current = !1),
                        N();
                }, [N, u, t.id]);
            s.useEffect(() => {
                p && d.current && S();
            }, [p, S]),
                s.useLayoutEffect(() => {
                    r && !o && d.current && l();
                }, [l, r, o]),
                s.useLayoutEffect(() => {
                    a || !r || o || d.current || i(!1);
                }, [r, a, o, i]);
            let y = (0, tU.useHasAnyModalOpen)();
            return (
                s.useEffect(() => {
                    y && d.current && S();
                }, [S, y]),
                {
                    ctxMenuOpen: h,
                    gameSheetOpen: p,
                    handleCtxMenuOpened: A,
                    handleCtxMenuClosed: x,
                    handleCtxMenuSelection: C,
                    handleGameSheetOpened: E,
                    handleGameSheetClosed: v,
                    handleFocus: T,
                    handleFocusWithoutDelay: _,
                    handleBlur: N,
                    handleMouseEnter: j,
                    handleMouseLeave: S,
                }
            );
        })({
            quest: t,
            isExpanded: k,
            setIsExpanded: P,
            expandQuestBar: D,
            isQuestCompleted: M,
            isQuestAccepted: R,
            prevIsQuestAccepted: I,
            impressionRef: j,
        });
    !(function (e) {
        let {
            quest: t,
            hasAssetsError: n,
            isEligibleForQuests: i,
            isQuestBarVisible: l,
            isVisibilityAnimationAtRest: a,
            isLoadingAssets: r,
            currentQuestVisibleReason: o,
            shouldShowQuestBar: u,
            isQuestEnrollmentBlocked: c,
            impressionRef: d,
        } = e;
        s.useEffect(() => {
            n &&
                ((0, tk.av)({
                    questId: t.id,
                    event: tP.HAw.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        content_id: g.uF.QUEST_BAR,
                        content_name: (0, b.jO)(g.uF.QUEST_BAR),
                        reason: "asset_loading_error",
                        impression_id: d.current?.getId(),
                    },
                    sourceQuestContent: g.uF.QUEST_BAR_V2,
                }),
                tL.A.increment({
                    name: tD.K.QUEST_CONTENT_RENDERING_FAILURE,
                    tags: [
                        `quest_id:${t.id}`,
                        `quest_content:${(0, b.jO)(g.uF.QUEST_BAR)}`,
                        "reason:asset_loading_error",
                    ],
                }));
        }, [n, d, t.id]),
            s.useEffect(() => {
                i ||
                    (0, tk.av)({
                        questId: t.id,
                        event: tP.HAw.QUEST_CONTENT_RENDERING_FAILURE,
                        properties: {
                            content_id: g.uF.QUEST_BAR,
                            content_name: (0, b.jO)(g.uF.QUEST_BAR),
                            reason: "not_eligible_for_quest",
                            impression_id: d.current?.getId(),
                        },
                        sourceQuestContent: g.uF.QUEST_BAR_V2,
                    });
            }, [i, d, t.id]),
            s.useEffect(() => {
                l ||
                    !a ||
                    r ||
                    (0, tk.av)({
                        questId: t.id,
                        event: tP.HAw.QUEST_CONTENT_RENDERING_FAILURE,
                        properties: {
                            content_id: g.uF.QUEST_BAR,
                            content_name: (0, b.jO)(g.uF.QUEST_BAR),
                            reason: o,
                            impression_id: d.current?.getId(),
                        },
                        sourceQuestContent: g.uF.QUEST_BAR_V2,
                    });
            }, [l, a, r, t.id, o, d]),
            s.useEffect(() => {
                (!u || c) && tF.A.clearTracking(), l && a && !r && !n && i && tF.A.stopTracking(t.id);
            }, [u, c, l, a, r, n, i, t.id]);
    })({
        quest: t,
        hasAssetsError: O,
        isEligibleForQuests: l,
        isQuestBarVisible: U,
        isVisibilityAnimationAtRest: F,
        isLoadingAssets: w,
        currentQuestVisibleReason: h,
        shouldShowQuestBar: d,
        isQuestEnrollmentBlocked: o,
        impressionRef: j,
    });
    let ei = s.useRef(null),
        es = s.useRef(null),
        el = s.useRef(null),
        er = (0, A.fc)(t),
        eo = (0, A.UH)(t);
    if (
        (s.useEffect(() => {
            S && (0, N.l9)();
        }, [S]),
        !l || (!U && F && !w) || O)
    )
        return O ? n.log("Not rendered due to asset error") : l || n.log("Not rendered due to ineligibility"), null;
    let eu = 70 + 78 * !!M;
    return (0, i.jsx)(T.R, {
        questOrQuests: t,
        questContent: g.uF.QUEST_BAR_V2,
        overrideVisibility: !m && U,
        onImpression: eo,
        sourceQuestContent: g.uF.QUEST_BAR_V2,
        children: (e, n) => (
            (j.current = n.current),
            (0, i.jsxs)("div", {
                className: tG.dK,
                children: [
                    U &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)(tV, { questId: y, isExpanded: k }), (0, i.jsx)(tB, {})],
                        }),
                    (0, i.jsx)(r.animated.div, {
                        "data-testid": "quest-bar-container",
                        "aria-hidden": !U,
                        onMouseLeave: en,
                        onMouseEnter: et,
                        onFocus: X,
                        onBlur: ee,
                        className: a()(tG.iE, { [tG.Xc]: !U, [tG.uv]: U && F }),
                        style: { height: V.to({ range: [0, 1], output: [0, eu] }) },
                        children: (0, i.jsx)(r.animated.div, {
                            className: a()(tG.FG, { [tG.E$]: k, [tG.KA]: R }),
                            children: (0, i.jsx)(tu, {
                                springConfig: H,
                                isExpanded: k,
                                children: (0, i.jsx)(B, {
                                    expandedContentRef: ei,
                                    collapsedContentRef: es,
                                    expansionSpring: G,
                                    children: (0, i.jsxs)($, {
                                        quest: t,
                                        taskDetails: er,
                                        isExpanded: k,
                                        isExpansionAnimationComplete: L,
                                        onCtxMenuClose: W,
                                        onCtxMenuOpen: Q,
                                        onCtxMenuSelect: z,
                                        onGameSheetOpen: Z,
                                        onGameSheetClose: K,
                                        collapsedHeight: eu,
                                        children: [
                                            (0, i.jsx)(
                                                ek,
                                                { ref: es, className: tG.Qs, overlayRef: el },
                                                M ? "collapsed-with-rewards" : "collapsed-without-rewards",
                                            ),
                                            (0, i.jsx)(tM, {
                                                className: tG.Qs,
                                                overlayRef: el,
                                                ref: ei,
                                                children: (0, i.jsxs)(i.Fragment, {
                                                    children: [(0, i.jsx)(tw, {}), !R && (0, i.jsx)(ea, {})],
                                                }),
                                            }),
                                            (0, i.jsx)("div", { ref: el, className: tG.Lw }),
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
let tQ =
    21552 == n.j
        ? function () {
              let e = (0, _.dN)();
              return null == e
                  ? null
                  : (0, i.jsx)(
                        v.y5,
                        {
                            source: q.rE.QUESTS_BAR,
                            adCreativeId: e.id,
                            adCreativeType: o.p.QUEST,
                            children: (0, i.jsx)(tH, { quest: e }),
                        },
                        e.id,
                    );
          }
        : null;
