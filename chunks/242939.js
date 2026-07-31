n.r(t), n.d(t, { QuestBar: () => t$, default: () => tz });
var s = n(477900),
    r = n(582128),
    l = n(503698),
    i = n.n(l),
    a = n(560952),
    o = n(323889),
    u = n(17928),
    c = n(475743),
    d = n(840251),
    x = n(688151);
let m = new d.E([], x.$G.QUEST_BAR_RENDERED, { location: "quest bar rendered" });
var C = n(186111),
    p = n(859703),
    f = n(24001),
    E = n(514547),
    h = n(971276),
    g = n(851936),
    _ = n(792620),
    j = n(557637),
    A = n(73473),
    S = n(764336),
    R = n(617986),
    v = n(939249),
    y = n(834730),
    T = n(290136),
    Q = n(661531),
    N = n(365199),
    U = n(590202),
    B = n(971649),
    F = n(901406),
    I = n(270045),
    b = n(57718),
    O = n(398025);
n(321073);
var V = n(333007),
    L = n(765671);
let k = "#00000000",
    q = "#CDD8FF1A",
    w = r.createContext({
        registerComponent: () => {},
        unregisterComponent: () => {},
        animatedComponents: {},
        expandedContentRef: r.createRef(),
        collapsedContentRef: r.createRef(),
        recalculateAnimationPositions: () => {},
        animatedComponentProps: [],
        expansionSpring: new a.SpringValue(0),
        mountPoints: new Map(),
    }),
    M = r.forwardRef(function (e, t) {
        let { children: n, id: l, inState: i, isTextTransition: o = !1 } = e,
            {
                recalculateAnimationPositions: u,
                registerComponent: c,
                unregisterComponent: d,
                expansionSpring: x,
                mountPoints: m,
            } = r.useContext(w),
            C = r.useRef(null),
            p = r.useRef(null),
            f = r.useRef(void 0);
        r.useEffect(() => {
            u();
        }, [u]),
            r.useLayoutEffect(() => {
                let e = C.current;
                return (
                    null != e && c(e, l, i),
                    () => {
                        null != e && d(l, i);
                    }
                );
            }, [l, i, c, d]);
        let E = r.useCallback(
            (e) => {
                let { height: t } = e;
                f.current !== t && (u(), (f.current = t));
            },
            [u],
        );
        (0, L.i4)(C, E);
        let h = m.get(l)?.current,
            g = null;
        return (
            null == h
                ? (g = null)
                : o && null != x
                  ? (g = (0, s.jsxs)(s.Fragment, {
                        children: [
                            "collapsed" === i &&
                                (0, V.createPortal)(
                                    (0, s.jsx)(a.animated.div, {
                                        style: {
                                            position: "absolute",
                                            opacity: (0, O.a)(x.to({ range: [0, 1], output: [1, 0] })),
                                        },
                                        children: n(p),
                                    }),
                                    h,
                                ),
                            "expanded" === i &&
                                (0, V.createPortal)(
                                    (0, s.jsx)(a.animated.div, {
                                        style: {
                                            position: "absolute",
                                            opacity: (0, O.a)(x.to({ range: [0, 1], output: [0, 1] })),
                                        },
                                        children: n(p),
                                    }),
                                    h,
                                ),
                        ],
                    }))
                  : "collapsed" === i && (g = (0, V.createPortal)(n(p), h)),
            (0, s.jsxs)("div", {
                style: { opacity: +((null == g && "collapsed" === i) || null == h) },
                ref: t,
                children: [n(C), g],
            })
        );
    }),
    P = (e) => {
        let { children: t, expandedContentRef: n, collapsedContentRef: l, expansionSpring: i } = e,
            [a, o] = r.useState({}),
            [u, c] = r.useState([]),
            [d, x] = r.useState(() => new Map()),
            m = r.useCallback((e, t, n) => {
                o((s) => {
                    let r = s[t] ?? { expanded: null, collapsed: null };
                    return { ...s, [t]: { ...r, [n]: e } };
                }),
                    x((e) => {
                        let n = new Map(e);
                        return n.set(t, r.createRef()), n;
                    });
            }, []),
            C = r.useCallback((e, t) => {
                let n = !1;
                o((s) => {
                    let r = s[e] ?? { expanded: null, collapsed: null };
                    return (r[t] = null), (n = null == r.expanded && null == r.collapsed), { ...s, [e]: r };
                }),
                    n &&
                        x((t) => {
                            let n = new Map(t);
                            return n.delete(e), n;
                        });
            }, []),
            p = r.useCallback(() => {
                let e = [];
                for (let t in a) {
                    if (null == a[t] || null == n.current || null == l.current) continue;
                    let s = a[t].collapsed,
                        r = a[t].expanded;
                    if (null == s || null == r) continue;
                    let i = r.getBoundingClientRect(),
                        o = n.current.getBoundingClientRect(),
                        u = s.getBoundingClientRect(),
                        c = l.current.getBoundingClientRect(),
                        d = i.top - o.top + 12,
                        x = u.top - c.top,
                        m = i.left - o.left + 12,
                        C = u.left - c.left,
                        p = -i.right + o.right + 12,
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
            }, [a, n, l, c]);
        return (0, s.jsx)(w.Provider, {
            value: {
                registerComponent: m,
                unregisterComponent: C,
                animatedComponents: a,
                expandedContentRef: n,
                collapsedContentRef: l,
                recalculateAnimationPositions: p,
                animatedComponentProps: u,
                expansionSpring: i,
                mountPoints: d,
            },
            children: t,
        });
    };
var D = n(409626),
    G = n(692969),
    W = n(284846),
    H = n(190107);
let $ = r.createContext({
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
    z = r.createContext({ hasAlreadyLinked: void 0, onClickGameTitle: void 0 });
function K(e) {
    let { children: t, quest: n } = e,
        { hasAlreadyLinked: l } = (0, W.U)(n),
        i = (0, G.A)({
            applicationId: (0, _.xc)(n),
            location: H.rE.QUEST_INSTRUCTIONS,
            source: D.GameProfileSources.QuestBar,
        }),
        a = r.useMemo(() => ({ hasAlreadyLinked: l, onClickGameTitle: i }), [l, i]);
    return (0, s.jsx)(z.Provider, { value: a, children: t });
}
function X(e) {
    let {
            children: t,
            isExpanded: n,
            isExpansionAnimationComplete: l,
            onCtxMenuClose: i,
            onCtxMenuOpen: a,
            onCtxMenuSelect: o,
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
                onCtxMenuOpen: a,
                onCtxMenuSelect: o,
                onGameSheetOpen: u,
                onGameSheetClose: c,
                collapsedHeight: d,
                quest: x,
                taskDetails: m,
            }),
            [n, l, i, a, o, u, c, d, x, m],
        );
    return (0, s.jsx)($.Provider, { value: C, children: (0, _.I6)(x) ? (0, s.jsx)(K, { quest: x, children: t }) : t });
}
var Z = n(775602),
    Y = n(646764),
    J = n(717421);
function ee() {
    let e = document.body.style.getPropertyValue("--custom-guild-sidebar-width").slice(0, -2);
    return parseInt("" !== e ? e : "375");
}
var et = n(375708),
    en = n(342959);
let es = function (e) {
    let { isFullyExpanded: t, partnerBranding: n } = e,
        l = {
            label: !(function () {
                let [e, t] = r.useState(() => 270 > ee());
                return (
                    r.useEffect(() => {
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
        o = (0, u.bG)([Z.Ay], () => Z.Ay.useReducedMotion),
        { quest: c } = r.useContext($),
        { expansionSpring: d } = r.useContext(w),
        x = l ? -4 : 6;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(a.animated.div, {
                className: en.tE,
                style: {
                    transform: (0, a.to)(
                        [
                            d.to({ range: [0, 1], output: [0, 0] }),
                            d.to({ range: [0, 1], output: [0, 82] }),
                            d.to({ range: [0, 1], output: [1, 1.3333333333333333] }),
                        ],
                        (e, t, n) => `translate(${e}px, ${t}px) scale(${n})`,
                    ),
                },
                children: (0, s.jsx)(Y.A, {
                    learnMoreStyle: "text",
                    learnMoreFontSize: t ? 9 : void 0,
                    quest: c,
                    questContent: f.uF.QUEST_BAR_V2,
                    autoplay: t && !o,
                    sourceQuestContent: f.uF.QUEST_BAR_V2,
                    style: { width: 48, height: 48, marginRight: 8, borderRadius: 6 },
                }),
            }),
            (0, s.jsxs)(a.animated.div, {
                className: i()(en.pm, { [en.nd]: l }),
                style: {
                    transform: (0, a.to)(
                        [d.to({ range: [0, 1], output: [0, -48] }), d.to({ range: [0, 1], output: [0, x] })],
                        (e, t) => `translate(${e}px, ${t}px)`,
                    ),
                },
                children: [
                    (0, s.jsx)("div", { className: i()({ [en.Iu]: !l }), children: n }),
                    (0, s.jsx)(a.animated.div, {
                        className: i()(en.ol, { [en.yZ]: l }),
                        style: { opacity: (0, O.a)(d.to({ range: [0, 1], output: [l ? 1 : 0.7, 0] })) },
                        children: (0, s.jsx)(y.E, {
                            color: "text-overlay-light",
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
var er = n(358663);
let el = (0, a.animated)(b.Ay),
    ei = function () {
        let e = (0, B.wW)(),
            { expansionSpring: t } = r.useContext(w),
            {
                onCtxMenuOpen: n,
                onCtxMenuClose: l,
                onCtxMenuSelect: o,
                isExpanded: u,
                isExpansionAnimationComplete: c,
                quest: d,
            } = r.useContext($),
            x = r.useCallback(() => {
                (0, R.Zc)(d, {
                    content: f.uF.QUEST_BAR_V2,
                    ctaContent: U.Cy.OPEN_DISCLOSURE,
                    sourceQuestContent: f.uF.QUEST_BAR_V2,
                });
            }, [d]),
            m = r.useCallback(() => {
                (0, F.pu)(d, {
                    content: f.uF.QUEST_BAR_V2,
                    ctaContent: U.Cy.OPEN_GAME_LINK,
                    impressionId: e(),
                    sourceQuestContent: f.uF.QUEST_BAR_V2,
                });
            }, [e, d]),
            C = u && c,
            p = (0, s.jsx)(v.D, {
                onClick: m,
                className: i()(er.vk, { [er.wm]: C }),
                children: (0, s.jsx)(el, {
                    quest: d,
                    withGameTile: !1,
                    logotypeClassName: er.Iu,
                    logotypeStyle: {
                        height: 24,
                        maxWidth: 92,
                        transform: (0, a.to)([t.to({ range: [0, 1], output: [1, 1] })], (e) => `scale(${e})`),
                    },
                }),
            });
        return (0, s.jsxs)(a.animated.div, {
            className: i()(er.iE, er.Ht, { [er.tT]: C }),
            style: { transform: (0, a.to)([t.to({ range: [0, 1], output: [6, 0] })], (e) => `translateY(${e}px)`) },
            children: [
                (0, s.jsx)(a.animated.div, {
                    className: er.Tu,
                    style: { opacity: (0, O.a)(t.to({ range: [0, 1], output: [0, 1] })) },
                }),
                (0, s.jsx)(es, { isFullyExpanded: C, partnerBranding: p }),
                (0, s.jsxs)(a.animated.div, {
                    className: er.P0,
                    style: { opacity: (0, O.a)(t.to({ range: [0, 1], output: [0, 1] })) },
                    children: [
                        (0, s.jsxs)(v.D, {
                            className: er.y8,
                            onClick: x,
                            children: [
                                (0, s.jsx)(y.E, {
                                    color: "text-overlay-light",
                                    variant: "text-xs/normal",
                                    children: et.intl.string(et.t.o6FLcF),
                                }),
                                (0, s.jsx)(T.c, { color: Q.A.colors.WHITE, className: er.P$ }),
                            ],
                        }),
                        (0, s.jsx)(I.C, {
                            onOpen: n,
                            onClose: l,
                            onSelect: o,
                            questContent: f.uF.QUEST_BAR_V2,
                            quest: d,
                            shouldShowDisclosure: !0,
                            showShareLink: !0,
                            sourceQuestContent: f.uF.QUEST_BAR_V2,
                            children: (e) =>
                                (0, s.jsx)(v.D, {
                                    ...e,
                                    className: i()(er.uJ, er.rb),
                                    "aria-label": et.intl.string(et.t.DEoVWZ),
                                    children: (0, s.jsx)(N.j, {
                                        size: "md",
                                        color: "currentColor",
                                        className: i()(er.Bx, er.ON),
                                    }),
                                }),
                        }),
                    ],
                }),
            ],
        });
    };
var ea = n(821609),
    eo = n(3738),
    eu = n(651892),
    ec = n(814793),
    ed = n(753386),
    ex = n(657113),
    em = n(79545),
    eC = n(862611),
    ep = n(630037),
    ef = n(307372);
function eE(e) {
    let { quest: t, sourceQuestContent: n, taskDetails: r } = e;
    return (0, s.jsx)(ea.$, {
        variant: "primary",
        fullWidth: !0,
        onClick: function () {
            let e = t.userStatus?.enrolledAt == null ? U.Cy.ACCEPT_QUEST : U.Cy.WATCH_VIDEO;
            (0, R.d5)({ quest: t, questContent: f.uF.QUEST_BAR_V2, sourceQuestContent: n, sourceQuestContentCTA: e });
        },
        size: "sm",
        text: (0, ed.WM)(r),
    });
}
function eh(e) {
    let { quest: t, sourceQuestContent: n } = e,
        r = (0, B.wW)(),
        l = (0, eu.wr)(t);
    return (0, s.jsx)(ea.$, {
        size: "sm",
        fullWidth: !0,
        onClick: () =>
            (0, F.pu)(t, {
                content: f.uF.QUEST_BAR_V2,
                ctaContent: U.Cy.OPEN_GAME_LINK,
                impressionId: r(),
                sourceQuestContent: n,
            }),
        text: l,
    });
}
function eg(e) {
    let { quest: t, sourceQuestContent: n } = e,
        r = (0, B.wW)();
    return (0, s.jsx)(ea.$, {
        fullWidth: !0,
        onClick: () =>
            (0, F.se)(
                { quest: t },
                {
                    content: f.uF.QUEST_BAR_V2,
                    ctaContent: U.Cy.CONNECT_CONSOLE,
                    impressionId: r(),
                    sourceQuestContent: n,
                },
            ),
        size: "sm",
        text: et.intl.string(et.t.csptqV),
    });
}
function e_(e) {
    let { quest: t } = e,
        n = (0, eo.NA)({ quest: t }),
        { launchInGameActivity: r } = (0, E.zW)(t);
    return (0, ec.vA)(t)
        ? (0, s.jsx)(ea.$, { fullWidth: !0, variant: "primary", icon: (0, R.Oz)(t), onClick: r, size: "sm", text: n })
        : null;
}
function ej(e) {
    let {
            quest: t,
            sourceQuestContent: n,
            taskDetails: r,
            popoutTargetElementRef: l,
            onGameSheetOpened: i,
            onGameSheetClosed: a,
        } = e,
        { applications: o } = r;
    return (0, s.jsx)(eC.A, {
        quest: t,
        sourceQuestContent: n,
        applications: o ?? [],
        targetElementRef: l,
        onGameSheetOpened: i,
        onGameSheetClosed: a,
        children: (e) =>
            (0, s.jsx)(ea.$, {
                variant: "secondary",
                fullWidth: !0,
                size: "sm",
                text: et.intl.string(et.t["93PTEs"]),
                ...e,
            }),
    });
}
function eA(e) {
    let { quest: t, ctaLabel: n, onClick: r, questContent: l = f.uF.QUEST_BAR_V2, sourceQuestContent: i } = e,
        a = (0, ep.D)({ quest: t, questContent: l, sourceQuestContent: i, onBeforeClaim: r });
    return (0, s.jsx)(ea.$, {
        fullWidth: !0,
        onClick: a,
        text: n ?? et.intl.string(et.t.cfY4PE),
        "data-testid": "quest-bar-claim-reward-button",
        variant: "primary",
        size: "sm",
    });
}
function eS(e) {
    let {
            sourceQuestContent: t,
            awaitingConsoleConnections: n,
            hasMadeProgress: l,
            isProgressing: i,
            popoutTargetElementRef: a,
        } = e,
        { quest: o, onGameSheetOpen: u, onGameSheetClose: c, taskDetails: d } = r.useContext($),
        [x] = (0, E.Qo)(o, d),
        m = o.userStatus?.completedAt != null,
        C = (0, _.vv)(o),
        p = (0, _.I6)(o),
        h = x !== f.X0.SELECT && !l && !i,
        g = null;
    return (
        m
            ? (g = (0, s.jsx)(eA, { quest: o, sourceQuestContent: t }))
            : p
              ? (g = (0, s.jsx)(ex.A, {
                    quest: o,
                    surface: em.V3.QUEST_BAR_FOOTER,
                    size: "sm",
                    analyticsCtxQuestContent: f.uF.QUEST_BAR_V2,
                    analyticsCtxSourceQuestContent: t,
                }))
              : C
                ? (g = (0, s.jsx)(eE, { quest: o, sourceQuestContent: t, taskDetails: d }))
                : (0, ec.vA)(o)
                  ? (g = (0, s.jsx)(e_, { quest: o }))
                  : x === f.X0.CONSOLE && n
                    ? (g = (0, s.jsx)(eg, { quest: o, sourceQuestContent: t }))
                    : h && (0, ec.ui)(o)
                      ? (g = (0, s.jsx)(ej, {
                            quest: o,
                            sourceQuestContent: t,
                            taskDetails: d,
                            popoutTargetElementRef: a,
                            onGameSheetOpened: u,
                            onGameSheetClosed: c,
                        }))
                      : h && (g = (0, s.jsx)(eh, { quest: o, sourceQuestContent: t })),
        null == g ? null : (0, s.jsx)("div", { className: ef.lO, children: g })
    );
}
function eR(e) {
    return (0, s.jsx)(eS, { ...e, popoutTargetElementRef: e.parentContainerRef });
}
var ev = n(776310),
    ey = n(536283),
    eT = n(166414);
let eQ = (e) => {
    let { overlayRef: t, progressBarRef: n, isHovered: l } = e,
        { quest: o, isExpanded: d } = r.useContext($),
        { expansionSpring: x } = r.useContext(w),
        { completionSpring: m, startCompletionAnimation: p } = (function () {
            let [{ spring: e }, t] = (0, J.z)(() => ({ spring: 0 }), "animate-always");
            return {
                completionSpring: e,
                startCompletionAnimation: r.useCallback(() => {
                    t({ spring: 1 }), t({ spring: 0, delay: 2e3 });
                }, [t]),
            };
        })(),
        f = o.userStatus?.completedAt != null,
        E = r.useRef(!1),
        h = (0, u.bG)([Z.Ay], () => Z.Ay.useReducedMotion),
        g = r.useRef(null),
        _ = (0, u.bG)([C.A], () => C.A.hasLayers()),
        j = (0, c.Ay)(_),
        [A, S] = r.useState(null),
        [R, v] = r.useState(null),
        y = r.useRef(new ev.OH({ gravity: 0, wind: 0 })),
        T = (0, ev.f9)(A, R),
        Q = r.useMemo(() => ["#51BC9D"], []),
        N = r.useCallback(() => {
            if (h) return;
            let e = n.current,
                t = g.current;
            if (null != t && null != e && T.isReady) {
                var s, r, l, i;
                let { x: n, y: a } = e.getBoundingClientRect(),
                    { x: o, y: u } = t.getBoundingClientRect();
                T.createMultipleConfetti(
                    ((s = n - o),
                    (r = a - u),
                    (l = e.clientHeight),
                    (i = e.clientWidth),
                    {
                        ...ey.Mw,
                        position: { type: "static-random", minValue: { x: s, y: r }, maxValue: { x: s + l, y: r + i } },
                        velocity: { type: "static-random", minValue: { x: -20, y: -20 }, maxValue: { x: 20, y: 20 } },
                        opacity: { type: "linear", value: 2, addValue: -0.1 },
                        dragCoefficient: { type: "static", value: 0.166 },
                        size: { type: "static-random", minValue: 2, maxValue: 3 },
                    }),
                    100,
                );
            }
        }, [n, g, T, h]),
        U = (0, c.Ay)(d);
    return (r.useEffect(() => {
        f && d && !U && (p(), N());
    }, [d, f, p, N, U]),
    r.useEffect(() => {
        f &&
            !_ &&
            j &&
            setTimeout(() => {
                p(), N();
            }, 200);
    }, [f, j, _, p, N]),
    r.useEffect(() => {
        T.isReady && (!E.current && f && (p(), N()), (E.current = f));
    }, [f, E, N, p, T]),
    r.useEffect(() => {
        l && f && (p(), N());
    }, [l, f, p, N]),
    h)
        ? null
        : (0, s.jsxs)("div", {
              className: eT.iE,
              "aria-hidden": "true",
              ref: g,
              children: [
                  (0, s.jsx)(a.animated.div, { className: eT.Tp, style: { opacity: (0, O.a)(m) } }),
                  (0, s.jsx)(a.animated.div, { className: i()(eT.sJ, eT.ix), style: { opacity: (0, O.a)(m) } }),
                  (0, s.jsxs)(a.animated.div, {
                      className: eT.KG,
                      style: { transform: x.to({ range: [0, 1], output: [-35, 0] }).to((e) => `translateY(${e}px)`) },
                      children: [
                          (0, s.jsx)(ev.Fk, { ref: S, className: eT.t_, environment: y.current }),
                          (0, s.jsx)(ev.K_, {
                              ref: v,
                              sprites: ["/assets/b909790cf1d80597.svg"],
                              colors: Q,
                              spriteWidth: ey.wn,
                              spriteHeight: ey.wn,
                          }),
                          null != t.current &&
                              (0, V.createPortal)(
                                  (0, s.jsx)(a.animated.div, {
                                      className: i()(eT.sJ, eT.d7),
                                      style: { opacity: (0, O.a)(m) },
                                  }),
                                  t.current,
                              ),
                      ],
                  }),
              ],
          });
};
var eN = n(453384),
    eU = n(239915);
let eB = function (e) {
    let { isExpanded: t, contentLocation: n, progressBarRef: l, percentComplete: i, popoutTargetElementRef: a } = e,
        { quest: o, onGameSheetOpen: u, onGameSheetClose: c, taskDetails: d } = r.useContext($),
        { hasAlreadyLinked: x, onClickGameTitle: m } = r.useContext(z),
        [C] = (0, E.Qo)(o, d),
        p = (0, eo.VX)(o, x),
        h = (0, eo.tH)({
            quest: o,
            isExpanded: t,
            activeScreen: C,
            sourceQuestContent: f.uF.QUEST_BAR_V2,
            popoutTargetElementRef: a,
            onGameSheetOpened: u,
            onGameSheetClosed: c,
            hasAlreadyLinked: x,
            onClickGameTitle: m,
        });
    return (0, s.jsxs)("div", {
        className: eU.Z0,
        children: [
            (0, s.jsx)(M, {
                inState: n,
                id: "progress-bar",
                ref: l,
                children: (e) =>
                    (0, s.jsx)(eN.A, {
                        ref: e,
                        style: "small",
                        percentComplete: i,
                        size: 42,
                        children: (0, s.jsx)(Y.A, {
                            fullWidth: !0,
                            quest: o,
                            questContent: f.uF.QUEST_BAR_V2,
                            autoplay: !1,
                            sourceQuestContent: f.uF.QUEST_BAR_V2,
                        }),
                    }),
            }),
            (0, s.jsxs)("div", {
                className: eU.NZ,
                children: [
                    (0, s.jsx)(M, {
                        inState: n,
                        id: "progress-title",
                        children: (e) =>
                            (0, s.jsx)(y.E, {
                                ref: e,
                                className: eU.FZ,
                                color: "text-strong",
                                variant: "text-sm/semibold",
                                children: p,
                            }),
                    }),
                    (0, s.jsx)(M, {
                        inState: n,
                        id: "progress-subtitle",
                        isTextTransition: !0,
                        children: (e) =>
                            (0, s.jsx)(y.E, {
                                ref: e,
                                className: eU.FZ,
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
var eF = n(437865);
function eI() {
    let { quest: e, onCtxMenuOpen: t, onCtxMenuClose: n, onCtxMenuSelect: l } = r.useContext($),
        a = (0, E.S5)(e.config.expiresAt);
    return (0, s.jsxs)("div", {
        className: eF.pS,
        children: [
            (0, s.jsx)(y.E, {
                variant: "text-xxs/medium",
                className: i()(eF.Uu, eF.TK),
                children: et.intl.format(et.t["pX+fmn"], { expirationDate: a }),
            }),
            (0, s.jsx)(I.C, {
                onOpen: t,
                onClose: n,
                onSelect: l,
                questContent: f.uF.QUEST_BAR_V2,
                quest: e,
                shouldShowDisclosure: !1,
                showShareLink: !0,
                sourceQuestContent: f.uF.QUEST_BAR_V2,
                children: (e) =>
                    (0, s.jsx)(v.D, {
                        ...e,
                        className: eF.rb,
                        "aria-label": et.intl.string(et.t.DEoVWZ),
                        children: (0, s.jsx)(N.j, { size: "md", color: "currentColor", className: i()(eF.Bx, eF.U9) }),
                    }),
            }),
        ],
    });
}
var eb = n(20245);
let eO = r.forwardRef(function (e, t) {
    let { className: n, overlayRef: l } = e,
        { expansionSpring: o } = r.useContext(w),
        { quest: u, taskDetails: c, isExpanded: d } = r.useContext($),
        x = u.userStatus?.completedAt != null,
        m = (0, E.I3)(u),
        C = r.useRef(null),
        p = u.userStatus?.enrolledAt != null,
        h = null != m ? m.percentComplete : c.percentComplete,
        g = r.useRef(null),
        [_, j] = r.useState(!1);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            x && (0, s.jsx)(eQ, { overlayRef: l, progressBarRef: C, isHovered: _ }),
            (0, s.jsx)(a.animated.div, {
                ref: t,
                "aria-hidden": d,
                inert: !!d || void 0,
                className: i()(n, eb.hR, { [eb.Ag]: d, [eb.s]: p }),
                style: {
                    opacity: (0, O.a)(o.to({ range: [0, 1], output: [1, 0] })),
                    backgroundImage: x ? `linear-gradient(90deg, ${k}, ${q})` : void 0,
                },
                onMouseEnter: () => j(!0),
                onMouseLeave: () => j(!1),
                children: (0, s.jsxs)("div", {
                    className: eb.o8,
                    children: [
                        x &&
                            (0, s.jsxs)(s.Fragment, {
                                children: [(0, s.jsx)(eI, {}), (0, s.jsx)("div", { className: eb.yF })],
                            }),
                        p
                            ? (0, s.jsx)(eB, {
                                  contentLocation: "collapsed",
                                  progressBarRef: C,
                                  isExpanded: !1,
                                  percentComplete: h,
                              })
                            : null,
                        x &&
                            (0, s.jsx)("div", {
                                ref: g,
                                children: (0, s.jsx)(eR, {
                                    parentContainerRef: g,
                                    awaitingConsoleConnections: !1,
                                    hasMadeProgress: !0,
                                    isProgressing: !1,
                                    sourceQuestContent: f.uF.QUEST_BAR_V2,
                                }),
                            }),
                    ],
                }),
            }),
        ],
    });
});
n(801541);
var eV = n(889137),
    eL = n(417270),
    ek = n(782134),
    eq = n(297264),
    ew = n(825484),
    eM = n(866665),
    eP = n(408278),
    eD = n(743368),
    eG = n(921853),
    eW = n(607470),
    eH = n(352774),
    e$ = n(405670),
    ez = n(192444),
    eK = n(112142),
    eX = n(646917),
    eZ = n(291749),
    eY = n(576761),
    eJ = n(895253),
    e0 = n(976019),
    e1 = n(442734),
    e2 = n(139384),
    e3 = n(114046),
    e7 = n(695366),
    e6 = n(274670),
    e9 = n(144779),
    e4 = n(30370),
    e5 = n(178540),
    e8 = n(104886),
    te = n(18437),
    tt = n(780964),
    tn = n(766075),
    ts = n(52093),
    tr = n(764493);
function tl(e) {
    let { text: t, quest: n, sourceQuestContent: r } = e,
        l = (0, te.Ut)(),
        i = (0, B.go)();
    return (0, s.jsx)(v.D, {
        className: tr.Z0,
        onClick: () => {
            (0, e8.E5)(e8.kI.STEP_2_CLICKED_INTERNAL, "console_connection_step")
                ? (0, e6.r)({
                      type: e9.F.CLICK_INTERNAL,
                      adCreativeType: o.p.QUEST,
                      adCreativeId: n.id,
                      questContentCTA: U.Cy.VIEW_CONSOLE_CONNECTIONS_LINK,
                      surfaceId: f.uF.QUEST_BAR_V2,
                      sourceQuestContent: r,
                      impressionId: i,
                  })
                : l({
                      questId: n.id,
                      questContent: f.uF.QUEST_BAR_V2,
                      questContentCTA: U.Cy.VIEW_CONSOLE_CONNECTIONS_LINK,
                      sourceQuestContent: r,
                  }),
                (0, tn.openUserSettings)(tt.X.CONNECTIONS_PANEL);
        },
        children: (0, s.jsx)(y.E, { "aria-label": t, color: "none", variant: "text-xxs/normal", children: t }),
    });
}
function ti(e) {
    let { xboxAndPlaystationAccounts: t, quest: n, sourceQuestContent: r } = e;
    return t.length > 0
        ? (0, s.jsx)(tl, { text: et.intl.string(et.t["qiS+xj"]), quest: n, sourceQuestContent: r })
        : null;
}
function ta(e) {
    return (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(ts.L5, { children: et.intl.string(et.t.EJFSvD) }), (0, s.jsx)(ti, { ...e })],
    });
}
var to = n(760479);
function tu(e) {
    return (0, s.jsx)(y.E, { className: to.eW, color: "text-muted", variant: "text-xxs/normal", children: e.children });
}
function tc(e) {
    let { quest: t, useReducedMotion: n } = e,
        l = (0, S.H1)(t.id, f.uF.QUEST_BAR_V2, f.uF.QUEST_BAR_V2),
        a = (0, S.Xf)({ useReducedMotion: n }),
        u = (0, te.Ut)(),
        c = (0, B.go)(),
        d = (0, e5.O)((e) => e.getErrorHints(t.id)),
        { startingConsoleQuest: x, startConsoleQuest: m } = (0, E.Wj)({
            questId: t.id,
            beforeRequest: () => {
                (0, e8.E5)(e8.kI.STEP_2_CLICKED_INTERNAL, "quest_bar_console_task_checklist")
                    ? (0, e6.r)({
                          type: e9.F.CLICK_INTERNAL,
                          adCreativeType: o.p.QUEST,
                          adCreativeId: t.id,
                          questContentCTA: U.Cy.DEFIBRILLATOR,
                          surfaceId: f.uF.QUEST_BAR_V2,
                          sourceQuestContent: f.uF.QUEST_BAR_V2,
                          impressionId: c,
                      })
                    : u({
                          questId: t.id,
                          questContent: f.uF.QUEST_BAR_V2,
                          questContentCTA: U.Cy.DEFIBRILLATOR,
                          sourceQuestContent: f.uF.QUEST_BAR_V2,
                      }),
                    a.startAnimation();
            },
            afterRequest: a.stopAnimation,
        }),
        { header: C, renderBody: p } = r.useMemo(() => {
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
                          return (0, s.jsx)(s.Fragment, {
                              children: d.map((e, n) => {
                                  if (e.type === e3._.EXPIRED_CREDENTIAL) {
                                      let r = e4.A.getAccount(e.connected_account_id, e.connected_account_type),
                                          l = (0, F.IG)(e),
                                          i = (0, F.$J)(e);
                                      return (0, s.jsx)(
                                          tu,
                                          {
                                              children: et.intl.format(l, {
                                                  account_name: r?.name,
                                                  onClick: () => {
                                                      (0, F.v0)(
                                                          { quest: t, platformType: i },
                                                          {
                                                              content: f.uF.QUEST_BAR,
                                                              ctaContent: U.Cy.DEFIBRILLATOR_RECONNECT_CONSOLE,
                                                              impressionId: c,
                                                              sourceQuestContent: f.uF.QUEST_BAR_V2,
                                                          },
                                                      );
                                                  },
                                              }),
                                          },
                                          n,
                                      );
                                  }
                                  return (0, s.jsx)(tu, { children: e.message }, n);
                              }),
                          });
                      }
                    : () =>
                          (0, s.jsx)(y.E, {
                              className: to.eW,
                              color: "text-muted",
                              variant: "text-xxs/normal",
                              children: (0, ec.ui)(t)
                                  ? et.intl.string(et.t.bUyEZZ)
                                  : et.intl.format(et.t.GXqvC1, { gameTitle: n }),
                          }),
            };
        }, [d, t, c]);
    return (0, s.jsxs)("div", {
        className: to.XK,
        children: [
            (0, s.jsxs)("div", {
                className: to.oK,
                children: [
                    (0, s.jsx)(e7.E, {
                        size: "custom",
                        color: "currentColor",
                        className: 0 === d.length ? to.pH : to.JA,
                        width: 16,
                        height: 16,
                    }),
                    (0, s.jsx)(y.E, { variant: "text-xs/medium", children: C }),
                    (0, s.jsx)(v.D, { className: i()(to.w, { [to.r9]: x }), onClick: () => m(), children: a.render() }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: i()({ [to.Iu]: x }),
                children: [p(), 0 === d.length ? null : (0, s.jsx)(tu, { children: l })],
            }),
        ],
    });
}
let td = function (e) {
        let { quest: t, taskDetails: n } = e,
            l = (0, u.bG)([Z.Ay], () => Z.Ay.useReducedMotion),
            i = (0, E.Du)(),
            a = r.useMemo(
                () => (0, F.bg)(t).filter((e) => null != i.xboxAndPlaystationAccounts.find((t) => t.type === e)),
                [i.xboxAndPlaystationAccounts, t],
            ),
            {
                steps: o,
                hasConnectedAccounts: c,
                isProgressingQuestForLaunchedGame: d,
                isQuestComplete: x,
            } = r.useMemo(() => {
                let e = a.length > 0,
                    r = e && (0, _.YL)(t),
                    l = t.config.messages.gameTitle,
                    o = t.userStatus?.completedAt != null;
                return {
                    steps: [
                        {
                            renderContent: () =>
                                (0, s.jsx)(ta, { ...i, quest: t, sourceQuestContent: f.uF.QUEST_BAR_V2 }),
                            isComplete: e || r || o,
                        },
                        {
                            renderContent: () =>
                                (0, s.jsx)(ts.L5, {
                                    children: (0, ec.ui)(t)
                                        ? et.intl.string(et.t["5tXqFe"])
                                        : et.intl.formatToPlainString(et.t["+8JB6Y"], { gameTitle: l }),
                                }),
                            isComplete: r || o,
                        },
                        {
                            renderContent: () =>
                                (0, s.jsx)(ts.L5, {
                                    children: et.intl.formatToPlainString(et.t.HhfrYS, { numMinutes: n.targetMinutes }),
                                }),
                            isComplete: o,
                        },
                    ],
                    hasConnectedAccounts: e,
                    isProgressingQuestForLaunchedGame: r,
                    isQuestComplete: o,
                };
            }, [i, a.length, t, n.targetMinutes]);
        return (0, s.jsx)(ts.Ay, {
            heading: et.intl.string(et.t.UPWlJu),
            steps: o,
            children: c && !d && !x && (0, s.jsx)(tc, { useReducedMotion: l, quest: t }),
        });
    },
    tx = r.createContext({ springConfig: {}, isExpanded: !1 });
function tm(e) {
    let t = r.useMemo(
        () => ({ springConfig: e.springConfig, isExpanded: e.isExpanded }),
        [e.springConfig, e.isExpanded],
    );
    return (0, s.jsx)(tx.Provider, { value: t, children: e.children });
}
function tC(e) {
    let { children: t } = e,
        { springConfig: n, isExpanded: l } = r.useContext(tx),
        i = (0, u.bG)([Z.Ay], () => Z.Ay.useReducedMotion),
        { ref: o, height: d = null } = (0, L.Ay)(),
        x = (0, c.Ay)(d) ?? null,
        [{ height: m }, C] = (0, J.z)(() => ({ from: { height: 0 }, config: n }));
    return (
        r.useLayoutEffect(() => {
            null !== d && C({ height: d, immediate: !l || i || null === x });
        }, [d, C, l, i, x]),
        (0, s.jsx)(a.animated.div, {
            style: { height: null === x ? "auto" : m, overflow: "hidden" },
            children: (0, s.jsx)("div", { style: { overflow: "hidden" }, ref: o, children: t }),
        })
    );
}
n(134528), n(947204);
var tp = n(908346);
function tf(e) {
    let { header: t, children: n } = e;
    return (0, s.jsxs)("div", {
        className: tp.Nr,
        children: [
            (0, s.jsxs)("div", {
                className: tp.wx,
                children: [
                    (0, s.jsx)(e7.E, {
                        size: "custom",
                        color: "currentColor",
                        className: tp.Kk,
                        width: 16,
                        height: 16,
                    }),
                    (0, s.jsx)(eq.D, { color: "text-default", variant: "heading-sm/medium", children: t }),
                ],
            }),
            (0, s.jsx)(y.E, { color: "text-muted", variant: "text-xs/normal", className: tp.r2, children: n }),
        ],
    });
}
let tE = function (e) {
    let { quest: t } = e,
        n = (0, E.aC)(t);
    if (0 === n.length) return null;
    let r = n.at(0);
    return r === et.intl.string(et.t.BV6xDm)
        ? (0, s.jsx)(tf, { header: et.intl.string(et.t.onh6ct), children: et.intl.string(et.t.arVHRA) })
        : r === et.intl.string(et.t.MFGxFM)
          ? (0, s.jsx)(tf, { header: et.intl.string(et.t.JPihZA), children: et.intl.string(et.t.MFGxFM) })
          : null;
};
var th = n(31300),
    tg = n(687966),
    t_ = n(197143);
let tj = function (e) {
    let { onDesktop: t, onConsole: n } = e;
    return (0, s.jsxs)(ew.e, {
        direction: "vertical",
        fullWidth: !0,
        className: t_.G,
        size: "sm",
        children: [
            (0, s.jsx)(ea.$, {
                onClick: t,
                text: et.intl.string(et.t["QXc01+"]),
                variant: "secondary",
                icon: th.k,
                iconPosition: "end",
            }),
            (0, s.jsx)(ea.$, {
                onClick: n,
                text: et.intl.string(et.t["8lAfuB"]),
                variant: "secondary",
                icon: tg._,
                iconPosition: "end",
            }),
        ],
    });
};
var tA = n(550131);
let tS = r.forwardRef(function (e, t) {
    let { isHovered: n, asset: l, poster: i, className: a, autoPlay: o = !1 } = e,
        { isExpanded: c } = r.useContext($),
        d = (0, u.bG)([Z.Ay], () => Z.Ay.useReducedMotion),
        x = r.useRef(null);
    return (
        r.useEffect(() => {
            null != x.current && (c && (!d || n) ? ((x.current.currentTime = 0), x.current.play()) : x.current.pause());
        }, [x, c, n, d]),
        (0, e2.A)(x, H.rE.QUESTS_BAR),
        (0, s.jsx)(eW.A, {
            ref: (e) => {
                (x.current = e), null != t && ("function" == typeof t ? t(e) : (t.current = e));
            },
            autoPlay: o,
            poster: i,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: a,
            controls: !1,
            children: (0, s.jsx)("source", { src: l.url, type: l.mimetype ?? void 0 }),
        })
    );
});
function tR(e) {
    let { onClick: t } = e,
        { quest: n } = r.useContext($),
        l = (0, u.bG)([Z.Ay], () => Z.Ay.useReducedMotion),
        [a, o] = r.useState(!1),
        c = (0, eZ.tW)(n, eZ.fY.QUEST_BAR_HERO_VIDEO, void 0, !1),
        d = (0, eZ.tW)(n, eZ.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1),
        x = (0, e$.Kr)((e) => e.getVideoProgressState)(n.id),
        m = n.userStatus?.completedAt != null && x === e$.K2.COMPLETED,
        C = !m && (!l || a);
    return (0, s.jsxs)(v.D, {
        className: tA.QO,
        onClick: t,
        onMouseEnter: function () {
            l && !a && o(!0);
        },
        onMouseLeave: function () {
            l && a && o(!1);
        },
        children: [
            null != d &&
                (0, s.jsx)(j._M, {
                    id: "QuestBarContentExpanded_videoThumbnail",
                    children: (e) => (0, s.jsx)("img", { ref: e, alt: "", src: d.url, className: tA.Ue }),
                }),
            null != c
                ? (0, s.jsx)(j._M, {
                      id: "QuestBarContentExpanded_video",
                      children: (e) =>
                          (0, s.jsx)(tS, {
                              ref: e,
                              isHovered: a,
                              autoPlay: !1,
                              asset: c,
                              poster: d?.url,
                              className: i()(tA.NM, { [tA.Gc]: C }),
                          }),
                  })
                : null,
            (0, s.jsx)("div", {
                className: tA.LT,
                children: m
                    ? (0, s.jsx)(eL.m, { color: Q.A.colors.WHITE, className: tA.t })
                    : (0, s.jsx)(ek.u, { color: Q.A.colors.WHITE, className: tA.t }),
            }),
        ],
    });
}
function tv(e) {
    let { quest: t } = e;
    return (0, s.jsx)(Y.A, {
        className: i()(tA.Qq, tA.wq),
        learnMoreStyle: "text",
        quest: t,
        questContent: f.uF.QUEST_BAR_V2,
        sourceQuestContent: f.uF.QUEST_BAR_V2,
    });
}
function ty(e) {
    let { isCtaInteractable: t, containerRef: n, onAcceptQuest: l } = e,
        { quest: o, onGameSheetOpen: c, onGameSheetClose: d, taskDetails: x } = r.useContext($),
        { expansionSpring: m } = r.useContext(w),
        C = r.useRef(null),
        h = (0, u.bG)([p.A], () => p.A.isEnrolling(o.id), [o]),
        g = r.useMemo(() => (0, eZ.tW)(o, eZ.fY.QUEST_BAR_HERO), [o]),
        { enabled: _, showPlayInstantlyLabel: A } = ez.Bm.useConfig({ location: H.rE.QUESTS_BAR }),
        S = (0, eo.NA)({ quest: o, showPlayInstantlyLabel: A }),
        v = r.useMemo(() => (0, eZ.tW)(o, eZ.fY.HERO_IMAGE), [o]),
        T = r.useMemo(() => (null == v ? {} : { backgroundImage: `url(${v.url})` }), [v]),
        Q = eK.t.useConfig({ location: H.rE.QUESTS_BAR }),
        N = (0, eo.mU)({
            quest: o,
            location: H.rE.QUESTS_BAR,
            taskDetails: x,
            sourceQuestContent: f.uF.QUEST_BAR_V2,
            popoutTargetElementRef: C,
            onGameSheetOpened: c,
            onGameSheetClosed: d,
            gameProfileSource: D.GameProfileSources.QuestBar,
        }),
        B = (0, em.Pd)(o),
        F = (0, E.do)({
            quest: o,
            content: f.uF.QUEST_BAR_V2,
            ctaContent: U.Cy.OPEN_GAME_LINK,
            sourceQuestContent: f.uF.QUEST_BAR_V2,
        }),
        I = (0, eX.z)(),
        b = (0, E.SD)(o, I),
        V = I === eY.MA.NITRO && b;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)("div", {
                ref: C,
                children: (0, s.jsxs)("div", {
                    className: tA.do,
                    ref: n,
                    children: [
                        (0, s.jsxs)("div", {
                            className: tA.zH,
                            children: [
                                (0, s.jsx)(tv, { quest: o }),
                                (0, s.jsx)(eq.D, {
                                    className: tA.DD,
                                    color: "text-strong",
                                    variant: "heading-md/medium",
                                    children: et.intl.format(et.t.EQa7os, { questName: o.config.messages.questName }),
                                }),
                                (0, s.jsxs)("div", {
                                    className: tA.zf,
                                    children: [
                                        (0, s.jsx)(y.E, { className: tA.h_, variant: "text-xs/normal", children: N }),
                                        b && (0, s.jsx)(e1.e, { questId: o.id, orbMultiplierEligibility: I }),
                                    ],
                                }),
                            ],
                        }),
                        (0, s.jsx)("div", {
                            className: tA.lO,
                            "data-testid": "quest-bar-enroll-cta",
                            inert: !t || void 0,
                            children: (0, s.jsxs)(ew.e, {
                                direction: "horizontal",
                                fullWidth: !0,
                                wrap: !1,
                                children: [
                                    _ &&
                                        (0, s.jsx)(eM.m, {
                                            text: et.intl.string(et.t.LLLLPD),
                                            position: "top",
                                            align: "center",
                                            ariaHidden: !0,
                                            children: (0, s.jsx)(eP.K, {
                                                variant: "secondary",
                                                size: "sm",
                                                icon: eD.W,
                                                "aria-label": et.intl.string(et.t.LLLLPD),
                                                onClick: F,
                                            }),
                                        }),
                                    Q.enabled && B === em.UA.UNENROLLED && Q.enabledQuestStates.has(em.UA.UNENROLLED)
                                        ? (0, s.jsx)(ex.A, {
                                              quest: o,
                                              surface: em.V3.QUEST_BAR_FOOTER,
                                              size: "sm",
                                              showPlayInstantlyLabel: A,
                                              analyticsCtxQuestContent: f.uF.QUEST_BAR_V2,
                                              analyticsCtxSourceQuestContent: f.uF.QUEST_BAR_V2,
                                          })
                                        : (0, s.jsx)(ea.$, {
                                              onClick: l,
                                              variant: "primary",
                                              loading: h,
                                              text: S,
                                              size: "sm",
                                              icon: (0, R.Oz)(o, A),
                                              fullWidth: !0,
                                          }),
                                ],
                            }),
                        }),
                    ],
                }),
            }),
            (0, s.jsx)(eJ.A, { visible: V, glow: !0, className: tA.Ph }),
            null != v &&
                (0, s.jsx)(a.animated.div, {
                    className: tA.AK,
                    style: { opacity: (0, O.a)(m.to([0, 1], [1, 0])) },
                    children: (0, s.jsx)("div", { className: i()(tA.LC, tA.Ge), style: T }),
                }),
            (0, s.jsxs)(a.animated.div, {
                className: tA.IC,
                style: {
                    backdropFilter: (0, O.Q)(m.to([0, 1], [5, 0]).to((e) => `blur(${e}px)`)),
                    filter: (0, O.Q)(m.to([0, 1], [0.8, 1]).to((e) => `brightness(${e})`)),
                },
                children: [
                    g.isAnimated
                        ? (0, s.jsx)(j._M, {
                              id: "QuestBarContentExpanded_heroAnimated",
                              children: (e) => (0, s.jsx)(tS, { ref: e, autoPlay: !0, asset: g, className: tA.LO }),
                          })
                        : (0, s.jsx)(j._M, {
                              id: "QuestBarContentExpanded_heroStatic",
                              children: (e) => (0, s.jsx)("img", { ref: e, alt: "", className: tA.LO, src: g.url }),
                          }),
                    (0, s.jsx)("div", { className: tA.tV }),
                ],
            }),
        ],
    });
}
function tT(e) {
    let { quest: t } = e,
        { hasAlreadyLinked: n, onClickGameTitle: l } = r.useContext(z);
    return !0 !== n ? null : (0, s.jsx)(e0.A, { quest: t, hasAlreadyLinked: n, onClickGameTitle: l });
}
function tQ(e) {
    let { activeScreen: t, selectPlatform: n } = e,
        { quest: l, taskDetails: i } = r.useContext($);
    return (0, eV.YW)(t)
        .with(f.X0.SELECT, () => (0, s.jsx)(tj, { onConsole: () => n(H.fO.CONSOLE), onDesktop: () => n(H.fO.DESKTOP) }))
        .with(f.X0.DESKTOP, () => ((0, _.I6)(l) ? (0, s.jsx)(tT, { quest: l }) : (0, s.jsx)(tE, { quest: l })))
        .with(f.X0.CONSOLE, () => (0, s.jsx)(td, { quest: l, taskDetails: i }))
        .exhaustive();
}
function tN(e) {
    let { parentContainerRef: t } = e,
        { quest: n, taskDetails: l } = r.useContext($),
        [i, a, o] = (0, E.Qo)(n, l),
        u = l.percentComplete > 0,
        c = (0, E.Vn)(n),
        d = (0, E.RR)({ quest: n }),
        x = a.length > 1 && !u && !c;
    return (0, s.jsxs)(tC, {
        children: [
            (0, s.jsx)(tQ, { activeScreen: i, selectPlatform: o }),
            i !== f.X0.SELECT &&
                (0, s.jsxs)("div", {
                    className: tA.oG,
                    children: [
                        x &&
                            (0, s.jsx)(eP.K, {
                                size: "sm",
                                "aria-label": et.intl.string(et.t["13/7kX"]),
                                onClick: () => o(null),
                                icon: eG.n,
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
function tU(e) {
    let { parentContainerRef: t } = e,
        { quest: n, taskDetails: l } = r.useContext($),
        i = l.percentComplete > 0,
        a = (0, E.Vn)(n),
        o = r.useCallback(() => {
            (0, R.d5)({
                quest: n,
                questContent: f.uF.QUEST_BAR_V2,
                sourceQuestContent: f.uF.QUEST_BAR_V2,
                sourceQuestContentCTA: U.Cy.QUEST_BAR_VIDEO_QUEST_PREVIEW,
            });
        }, [n]);
    return (0, s.jsxs)(tC, {
        children: [
            (0, s.jsx)(tR, { onClick: o }),
            (0, s.jsx)(eR, {
                parentContainerRef: t,
                awaitingConsoleConnections: !1,
                hasMadeProgress: i,
                isProgressing: a,
                sourceQuestContent: f.uF.QUEST_BAR_V2,
            }),
        ],
    });
}
function tB(e) {
    let { parentContainerRef: t } = e,
        { quest: n, taskDetails: l } = r.useContext($),
        i = l.percentComplete > 0,
        a = (0, E.Vn)(n);
    return (0, s.jsx)(tC, {
        children: (0, s.jsx)(eR, {
            parentContainerRef: t,
            awaitingConsoleConnections: !1,
            hasMadeProgress: i,
            isProgressing: a,
            sourceQuestContent: f.uF.QUEST_BAR_V2,
        }),
    });
}
function tF(e) {
    let { parentContainerRef: t } = e,
        { quest: n } = r.useContext($);
    return (0, _.t)({ quest: n }) || (0, _.g5)(n) || (0, _.fE)({ quest: n }) || (0, _.I6)(n)
        ? (0, s.jsx)(tN, { parentContainerRef: t })
        : (0, _.vv)(n)
          ? (0, s.jsx)(tU, { parentContainerRef: t })
          : (0, s.jsx)(tB, { parentContainerRef: t });
}
function tI(e) {
    let { overlayRef: t, containerRef: n } = e,
        { quest: l, taskDetails: o } = r.useContext($),
        { expansionSpring: u } = r.useContext(w),
        c = r.useRef(null),
        d = r.useRef(null),
        x = (0, E.I3)(l),
        m = null != x ? x.percentComplete : o.percentComplete;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(a.animated.div, {
                className: i()(tA.tv, tA.ag),
                style: {
                    backgroundImage: `linear-gradient(90deg, ${k}, ${q})`,
                    opacity: (0, O.a)(u.to({ range: [0, 1], output: [1, 0] })),
                },
            }),
            (0, s.jsxs)("div", {
                className: tA.Fe,
                ref: (e) => {
                    "function" == typeof n ? n(e) : null != n && (n.current = e), null != e && (d.current = e);
                },
                children: [
                    (0, s.jsx)(eI, {}),
                    (0, s.jsx)("div", { className: tA.yF }),
                    (0, s.jsx)(eQ, { overlayRef: t, progressBarRef: c, isHovered: !1 }),
                    (0, s.jsx)(eB, {
                        contentLocation: "expanded",
                        progressBarRef: c,
                        isExpanded: !0,
                        percentComplete: m,
                        popoutTargetElementRef: d,
                    }),
                    (0, s.jsx)(tF, { parentContainerRef: d }),
                ],
            }),
            (0, s.jsx)("div", {
                className: i()(tA.tv, tA.Sx),
                style: { backgroundImage: `linear-gradient(90deg, ${k}, ${q})` },
            }),
        ],
    });
}
async function tb(e, t, n, s) {
    (0, _.vv)(e)
        ? await (0, R.e0)(e, { questContent: t, questContentCTA: n, sourceQuestContent: s, sourceQuestContentCTA: n })
        : (0, ec.vA)(e)
          ? await (0, eH.Oy)(e.id, { questContent: t, questContentCTA: n, sourceQuestContent: s })
          : (0, eH.Oy)(e.id, { questContent: t, questContentCTA: n, sourceQuestContent: s });
}
let tO = r.forwardRef(function (e, t) {
    let { children: n, className: l, overlayRef: o } = e,
        { collapsedHeight: u, isExpanded: c, isExpansionAnimationComplete: d, quest: x } = r.useContext($),
        { expansionSpring: m } = r.useContext(w),
        { launchInGameActivity: C } = (0, E.zW)(x),
        p = (0, ec.vA)(x),
        h = r.useCallback(async () => {
            let e = p ? U.Cy.START_QUEST : U.Cy.ACCEPT_QUEST;
            await tb(x, f.uF.QUEST_BAR_V2, e, f.uF.QUEST_BAR_V2), p && C();
        }, [x, C, p]),
        g = x.userStatus?.enrolledAt != null;
    return (0, s.jsxs)(a.animated.div, {
        "aria-hidden": !c,
        inert: !c || void 0,
        className: i()(l, tA.Rh, { [tA.iH]: g }),
        style: {
            transform: (0, a.to)(
                [m.to({ range: [0, 1], output: [0, -100] }), m.to({ range: [0, 1], output: [0, u] })],
                (e, t) => `translateY(calc(${e}% + ${t}px))`,
            ),
        },
        children: [
            n,
            (0, s.jsx)(a.animated.div, {
                style: { opacity: 1 },
                children: g
                    ? (0, s.jsx)(tI, { overlayRef: o, containerRef: t })
                    : (0, s.jsx)(ty, { isCtaInteractable: !c || d, containerRef: t, onAcceptQuest: h }),
            }),
        ],
    });
});
var tV = n(717695);
function tL() {
    let {
            expansionSpring: e,
            animatedComponentProps: t,
            recalculateAnimationPositions: n,
            mountPoints: l,
        } = r.useContext(w),
        { isExpanded: i } = r.useContext($);
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
                let { id: n, collapsedLeft: r, expandedLeft: i, collapsedTop: o, expandedTop: u, width: c } = t,
                    d = l.get(n);
                return (0, s.jsx)(
                    a.animated.div,
                    {
                        ref: d,
                        style: {
                            zIndex: 2,
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: c,
                            transform: (0, a.to)(
                                [e.to({ range: [0, 1], output: [r, i] }), e.to({ range: [0, 1], output: [o, u] })],
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
var tk = n(192308),
    tq = n(561844),
    tw = n(652215),
    tM = n(731738),
    tP = n(807393),
    tD = n(260364),
    tG = n(960115);
function tW(e) {
    let { isExpanded: t, questId: n } = e;
    return (
        (0, E.H6)({
            mode: t ? H.fP.EXPANDED : H.fP.COLLAPSED,
            questContent: f.uF.QUEST_BAR_V2,
            questId: n,
            sourceQuestContent: f.uF.QUEST_BAR_V2,
        }),
        null
    );
}
function tH() {
    return (
        r.useEffect(() => {
            m.trigger();
        }, []),
        null
    );
}
function t$(e) {
    let { quest: t } = e,
        n = (0, g.L)({ quest: t, location: H.rE.QUESTS_BAR }),
        l = (0, h.s)(),
        o = (0, u.bG)([p.A], () => null != p.A.questEnrollmentBlockedUntil),
        { isQuestBarVisible: d, reason: x } = (0, S.TQ)({ quest: t }),
        m = (0, u.bG)([C.A], () => C.A.hasLayers()),
        v = r.useRef(null),
        y = r.useMemo(() => (0, _.vv)(t), [t]),
        T = t.id,
        Q = t.userStatus?.enrolledAt != null,
        N = (0, c.Ay)(Q),
        B = t.userStatus?.completedAt != null,
        { hasError: F, isLoading: I } = (0, j.zT)(),
        b = r.useContext(tV.Z) || (l && d && !I && !o),
        {
            isExpanded: O,
            setIsExpanded: V,
            expandQuestBar: L,
            isExpansionAnimationComplete: k,
            isVisibilityAnimationAtRest: q,
            expansionSpring: w,
            visibilitySpring: M,
            springConfig: D,
        } = (function (e) {
            let { isQuestAccepted: t, isQuestCompleted: n, isQuestBarVisible: s } = e,
                l = (0, u.bG)([Z.Ay], () => Z.Ay.useReducedMotion),
                [i, a] = r.useState(!1),
                [o, c] = r.useState(!0),
                [d, x] = r.useState(!0),
                m = r.useRef(s),
                C = r.useCallback(
                    (e) => {
                        (n && e) || (i !== e && (c(!1), a(e)));
                    },
                    [n, i],
                ),
                p = r.useCallback(() => {
                    C(!0);
                }, [C]),
                f = r.useCallback(() => {
                    C(!1);
                }, [C]),
                E = t ? H.ZV : H.Ko,
                [{ expansionSpring: h }, g] = (0, J.z)(() => ({
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
                g({ expansionSpring: +!!i, immediate: l });
            }, [i, g, l]);
            let { visibilitySpring: _ } = (0, J.z)({
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
                    s !== m.current && x(!1), (m.current = s);
                }, [s]),
                {
                    isExpanded: i,
                    setIsExpanded: C,
                    expandQuestBar: p,
                    collapseQuestBar: f,
                    isExpansionAnimationComplete: o,
                    isVisibilityAnimationAtRest: d,
                    expansionSpring: h,
                    visibilitySpring: _,
                    springConfig: E,
                }
            );
        })({ isQuestAccepted: Q, isQuestCompleted: B, isQuestBarVisible: b }),
        {
            handleCtxMenuOpened: G,
            handleCtxMenuClosed: W,
            handleCtxMenuSelection: $,
            handleGameSheetOpened: z,
            handleGameSheetClosed: K,
            handleFocusWithoutDelay: Y,
            handleBlur: ee,
            handleMouseEnter: et,
            handleMouseLeave: en,
        } = (function (e) {
            let {
                    quest: t,
                    isExpanded: n,
                    setIsExpanded: s,
                    expandQuestBar: l,
                    isQuestCompleted: i,
                    isQuestAccepted: a,
                    prevIsQuestAccepted: o,
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
                    m(!1), d.current || i || s(!1);
                }, [i, s]),
                g = r.useCallback(() => {
                    m(!1), i || s(!1), (d.current = !1);
                }, [i, s]),
                _ = r.useCallback(() => {
                    p(!0);
                }, []),
                j = r.useCallback(() => {
                    p(!1), s(!1);
                }, [s]),
                A = r.useCallback(
                    function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (n) return;
                        let { withDelay: t = !1 } = e;
                        t ? (c.current = window.setTimeout(l, 75)) : l();
                    },
                    [l, n],
                ),
                S = r.useCallback(() => {
                    A();
                }, [A]),
                R = r.useCallback(() => {
                    window.clearTimeout(c.current), x || C || d.current || s(!1);
                }, [x, C, s]),
                v = r.useCallback(() => {
                    (0, tq.av)({
                        questId: t.id,
                        event: tw.HAw.QUEST_HOVER,
                        properties: {
                            content_id: f.uF.QUEST_BAR,
                            content_name: (0, U.jO)(f.uF.QUEST_BAR),
                            impression_id: u.current?.getId(),
                        },
                        shouldExtendSession: !0,
                        sourceQuestContent: f.uF.QUEST_BAR_V2,
                    }),
                        (d.current = !0),
                        A({ withDelay: !0 });
                }, [A, u, t.id]),
                y = r.useCallback(() => {
                    (0, tq.av)({
                        questId: t.id,
                        event: tw.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: f.uF.QUEST_BAR,
                            content_name: (0, U.jO)(f.uF.QUEST_BAR),
                            impression_id: u.current?.getId(),
                        },
                        sourceQuestContent: f.uF.QUEST_BAR_V2,
                    }),
                        (d.current = !1),
                        R();
                }, [R, u, t.id]);
            r.useEffect(() => {
                C && d.current && y();
            }, [C, y]),
                r.useLayoutEffect(() => {
                    a && !o && d.current && l();
                }, [l, a, o]),
                r.useLayoutEffect(() => {
                    i || !a || o || d.current || s(!1);
                }, [a, i, o, s]);
            let T = (0, tk.useHasAnyModalOpen)();
            return (
                r.useEffect(() => {
                    T && d.current && y();
                }, [y, T]),
                {
                    ctxMenuOpen: x,
                    gameSheetOpen: C,
                    handleCtxMenuOpened: E,
                    handleCtxMenuClosed: h,
                    handleCtxMenuSelection: g,
                    handleGameSheetOpened: _,
                    handleGameSheetClosed: j,
                    handleFocus: A,
                    handleFocusWithoutDelay: S,
                    handleBlur: R,
                    handleMouseEnter: v,
                    handleMouseLeave: y,
                }
            );
        })({
            quest: t,
            isExpanded: O,
            setIsExpanded: V,
            expandQuestBar: L,
            isQuestCompleted: B,
            isQuestAccepted: Q,
            prevIsQuestAccepted: N,
            impressionRef: v,
        });
    !(function (e) {
        let {
            quest: t,
            hasAssetsError: n,
            isEligibleForQuests: s,
            isQuestBarVisible: l,
            isVisibilityAnimationAtRest: i,
            isLoadingAssets: a,
            currentQuestVisibleReason: o,
            shouldShowQuestBar: u,
            isQuestEnrollmentBlocked: c,
            impressionRef: d,
        } = e;
        r.useEffect(() => {
            n &&
                ((0, tq.av)({
                    questId: t.id,
                    event: tw.HAw.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        content_id: f.uF.QUEST_BAR,
                        content_name: (0, U.jO)(f.uF.QUEST_BAR),
                        reason: "asset_loading_error",
                        impression_id: d.current?.getId(),
                    },
                    sourceQuestContent: f.uF.QUEST_BAR_V2,
                }),
                tP.A.increment({
                    name: tM.K.QUEST_CONTENT_RENDERING_FAILURE,
                    tags: [
                        `quest_id:${t.id}`,
                        `quest_content:${(0, U.jO)(f.uF.QUEST_BAR)}`,
                        "reason:asset_loading_error",
                    ],
                }));
        }, [n, d, t.id]),
            r.useEffect(() => {
                s ||
                    (0, tq.av)({
                        questId: t.id,
                        event: tw.HAw.QUEST_CONTENT_RENDERING_FAILURE,
                        properties: {
                            content_id: f.uF.QUEST_BAR,
                            content_name: (0, U.jO)(f.uF.QUEST_BAR),
                            reason: "not_eligible_for_quest",
                            impression_id: d.current?.getId(),
                        },
                        sourceQuestContent: f.uF.QUEST_BAR_V2,
                    });
            }, [s, d, t.id]),
            r.useEffect(() => {
                l ||
                    !i ||
                    a ||
                    (0, tq.av)({
                        questId: t.id,
                        event: tw.HAw.QUEST_CONTENT_RENDERING_FAILURE,
                        properties: {
                            content_id: f.uF.QUEST_BAR,
                            content_name: (0, U.jO)(f.uF.QUEST_BAR),
                            reason: o,
                            impression_id: d.current?.getId(),
                        },
                        sourceQuestContent: f.uF.QUEST_BAR_V2,
                    });
            }, [l, i, a, t.id, o, d]),
            r.useEffect(() => {
                (!u || c) && tD.A.clearTracking(), l && i && !a && !n && s && tD.A.stopTracking(t.id);
            }, [u, c, l, i, a, n, s, t.id]);
    })({
        quest: t,
        hasAssetsError: F,
        isEligibleForQuests: l,
        isQuestBarVisible: b,
        isVisibilityAnimationAtRest: q,
        isLoadingAssets: I,
        currentQuestVisibleReason: x,
        shouldShowQuestBar: d,
        isQuestEnrollmentBlocked: o,
        impressionRef: v,
    });
    let es = r.useRef(null),
        er = r.useRef(null),
        el = r.useRef(null),
        ea = (0, E.fc)(t),
        eo = (0, E.UH)(t);
    if (
        (r.useEffect(() => {
            y && (0, R.l9)();
        }, [y]),
        !l || (!b && q && !I) || F)
    )
        return F ? n.log("Not rendered due to asset error") : l || n.log("Not rendered due to ineligibility"), null;
    let eu = 70 + 78 * !!B;
    return (0, s.jsx)(A.Z, {
        questOrQuests: t,
        questContent: f.uF.QUEST_BAR_V2,
        overrideVisibility: !m && b,
        onImpression: eo,
        sourceQuestContent: f.uF.QUEST_BAR_V2,
        children: (e, n) => (
            (v.current = n.current),
            (0, s.jsxs)("div", {
                className: tG.dK,
                children: [
                    b &&
                        (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)(tW, { questId: T, isExpanded: O }), (0, s.jsx)(tH, {})],
                        }),
                    (0, s.jsx)(a.animated.div, {
                        "data-testid": "quest-bar-container",
                        "aria-hidden": !b,
                        onMouseLeave: en,
                        onMouseEnter: et,
                        onFocus: Y,
                        onBlur: ee,
                        className: i()(tG.iE, { [tG.Xc]: !b, [tG.uv]: b && q }),
                        style: { height: M.to({ range: [0, 1], output: [0, eu] }) },
                        children: (0, s.jsx)(a.animated.div, {
                            className: i()(tG.FG, { [tG.E$]: O, [tG.KA]: Q }),
                            children: (0, s.jsx)(tm, {
                                springConfig: D,
                                isExpanded: O,
                                children: (0, s.jsx)(P, {
                                    expandedContentRef: es,
                                    collapsedContentRef: er,
                                    expansionSpring: w,
                                    children: (0, s.jsxs)(X, {
                                        quest: t,
                                        taskDetails: ea,
                                        isExpanded: O,
                                        isExpansionAnimationComplete: k,
                                        onCtxMenuClose: W,
                                        onCtxMenuOpen: G,
                                        onCtxMenuSelect: $,
                                        onGameSheetOpen: z,
                                        onGameSheetClose: K,
                                        collapsedHeight: eu,
                                        children: [
                                            (0, s.jsx)(
                                                eO,
                                                { ref: er, className: tG.Qs, overlayRef: el },
                                                B ? "collapsed-with-rewards" : "collapsed-without-rewards",
                                            ),
                                            (0, s.jsx)(tO, {
                                                className: tG.Qs,
                                                overlayRef: el,
                                                ref: es,
                                                children: (0, s.jsxs)(s.Fragment, {
                                                    children: [(0, s.jsx)(tL, {}), !Q && (0, s.jsx)(ei, {})],
                                                }),
                                            }),
                                            (0, s.jsx)("div", { ref: el, className: tG.Lw }),
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
let tz =
    21552 == n.j
        ? function () {
              let e = (0, S.dN)();
              return null == e
                  ? null
                  : (0, s.jsx)(
                        j.y5,
                        {
                            source: H.rE.QUESTS_BAR,
                            adCreativeId: e.id,
                            adCreativeType: o.p.QUEST,
                            children: (0, s.jsx)(t$, { quest: e }),
                        },
                        e.id,
                    );
          }
        : null;
