n.r(t), n.d(t, { QuestBar: () => tD, default: () => tG });
var s = n(627968),
    r = n(64700),
    l = n(503698),
    i = n.n(l),
    a = n(580929),
    o = n(323889),
    u = n(17928),
    c = n(475743),
    d = n(840251),
    x = n(688151);
let m = new d.E([], x.$G.QUEST_BAR_RENDERED, { location: "quest bar rendered" });
var C = n(186111),
    p = n(859703),
    f = n(24001),
    E = n(347135),
    h = n(971276),
    g = n(851936),
    _ = n(792620),
    j = n(557637),
    A = n(73473),
    R = n(371912),
    S = n(617986),
    v = n(939249),
    T = n(834730),
    y = n(290136),
    N = n(661531),
    Q = n(365199),
    U = n(590202),
    B = n(971649),
    F = n(901406),
    b = n(270045),
    I = n(57718),
    O = n(398025);
n(321073);
var V = n(340287),
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
    $ = n(284846),
    z = n(190107);
let H = r.createContext({
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
    W = r.createContext({ hasAlreadyLinked: void 0, onClickGameTitle: void 0 });
function K(e) {
    let { children: t, quest: n } = e,
        { hasAlreadyLinked: l } = (0, $.U)(n),
        i = (0, G.A)({
            applicationId: (0, _.xc)(n),
            location: z.rE.QUEST_INSTRUCTIONS,
            source: D.GameProfileSources.QuestBar,
        }),
        a = r.useMemo(() => ({ hasAlreadyLinked: l, onClickGameTitle: i }), [l, i]);
    return (0, s.jsx)(W.Provider, { value: a, children: t });
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
    return (0, s.jsx)(H.Provider, { value: C, children: (0, _.I6)(x) ? (0, s.jsx)(K, { quest: x, children: t }) : t });
}
var Y = n(775602),
    Z = n(646764),
    J = n(717421);
function ee() {
    let e = document.body.style.getPropertyValue("--custom-guild-sidebar-width").slice(0, -2);
    return parseInt("" !== e ? e : "375");
}
var et = n(375708),
    en = n(173399);
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
        o = (0, u.bG)([Y.Ay], () => Y.Ay.useReducedMotion),
        { quest: c } = r.useContext(H),
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
                children: (0, s.jsx)(Z.A, {
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
                        children: (0, s.jsx)(T.E, {
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
var er = n(173839);
let el = (0, a.animated)(I.Ay),
    ei = function () {
        let e = (0, B.go)(),
            { expansionSpring: t } = r.useContext(w),
            {
                onCtxMenuOpen: n,
                onCtxMenuClose: l,
                onCtxMenuSelect: o,
                isExpanded: u,
                isExpansionAnimationComplete: c,
                quest: d,
            } = r.useContext(H),
            x = r.useCallback(() => {
                (0, S.Zc)(d, {
                    content: f.uF.QUEST_BAR_V2,
                    ctaContent: U.Cy.OPEN_DISCLOSURE,
                    sourceQuestContent: f.uF.QUEST_BAR_V2,
                });
            }, [d]),
            m = r.useCallback(() => {
                (0, F.pu)(d, {
                    content: f.uF.QUEST_BAR_V2,
                    ctaContent: U.Cy.OPEN_GAME_LINK,
                    impressionId: e,
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
                                (0, s.jsx)(T.E, {
                                    color: "always-white",
                                    variant: "text-xs/normal",
                                    children: et.intl.string(et.t.o6FLcF),
                                }),
                                (0, s.jsx)(y.c, { color: N.A.colors.WHITE, className: er.P$ }),
                            ],
                        }),
                        (0, s.jsx)(b.C, {
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
                                    children: (0, s.jsx)(Q.j, {
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
    ex = n(368715),
    em = n(79545),
    eC = n(862611),
    ep = n(795965),
    ef = n(519508);
function eE(e) {
    let { quest: t, sourceQuestContent: n, taskDetails: r } = e;
    return (0, s.jsx)(ea.$, {
        variant: "primary",
        fullWidth: !0,
        onClick: function () {
            let e = t.userStatus?.enrolledAt == null ? U.Cy.ACCEPT_QUEST : U.Cy.WATCH_VIDEO;
            (0, S.d5)({ quest: t, questContent: f.uF.QUEST_BAR_V2, sourceQuestContent: n, sourceQuestContentCTA: e });
        },
        size: "sm",
        text: (0, ed.WM)(r),
    });
}
function eh(e) {
    let { quest: t, sourceQuestContent: n } = e,
        r = (0, B.go)(),
        l = (0, eu.wr)(t);
    return (0, s.jsx)(ea.$, {
        size: "sm",
        fullWidth: !0,
        onClick: () =>
            (0, F.pu)(t, {
                content: f.uF.QUEST_BAR_V2,
                ctaContent: U.Cy.OPEN_GAME_LINK,
                impressionId: r,
                sourceQuestContent: n,
            }),
        text: l,
    });
}
function eg(e) {
    let { quest: t, sourceQuestContent: n } = e,
        r = (0, B.vU)()?.getId();
    return (0, s.jsx)(ea.$, {
        fullWidth: !0,
        onClick: () =>
            (0, F.se)(
                { quest: t },
                {
                    content: f.uF.QUEST_BAR_V2,
                    ctaContent: U.Cy.CONNECT_CONSOLE,
                    impressionId: r,
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
        ? (0, s.jsx)(ea.$, { fullWidth: !0, variant: "primary", icon: (0, S.Oz)(t), onClick: r, size: "sm", text: n })
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
        a = (0, ep.D)({
            quest: t,
            questContent: l,
            sourceQuestContent: i,
            experimentLocation: z.rE.QUESTS_BAR,
            onBeforeClaim: r,
        });
    return (0, s.jsx)(ea.$, {
        fullWidth: !0,
        onClick: a,
        text: n ?? et.intl.string(et.t.cfY4PE),
        "data-testid": "quest-bar-claim-reward-button",
        variant: "primary",
        size: "sm",
    });
}
function eR(e) {
    let {
            sourceQuestContent: t,
            awaitingConsoleConnections: n,
            hasMadeProgress: l,
            isProgressing: i,
            popoutTargetElementRef: a,
        } = e,
        { quest: o, onGameSheetOpen: u, onGameSheetClose: c, taskDetails: d } = r.useContext(H),
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
function eS(e) {
    return (0, s.jsx)(eR, { ...e, popoutTargetElementRef: e.parentContainerRef });
}
var ev = n(106778),
    eT = n(536283),
    ey = n(947638);
let eN = (e) => {
    let { overlayRef: t, progressBarRef: n, isHovered: l } = e,
        { quest: o, isExpanded: d } = r.useContext(H),
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
        h = (0, u.bG)([Y.Ay], () => Y.Ay.useReducedMotion),
        g = r.useRef(null),
        _ = (0, u.bG)([C.A], () => C.A.hasLayers()),
        j = (0, c.A)(_),
        [A, R] = r.useState(null),
        [S, v] = r.useState(null),
        T = r.useRef(new ev.OH({ gravity: 0, wind: 0 })),
        y = (0, ev.f9)(A, S),
        N = r.useMemo(() => ["#51BC9D"], []),
        Q = r.useCallback(() => {
            if (h) return;
            let e = n.current,
                t = g.current;
            if (null != t && null != e && y.isReady) {
                var s, r, l, i;
                let { x: n, y: a } = e.getBoundingClientRect(),
                    { x: o, y: u } = t.getBoundingClientRect();
                y.createMultipleConfetti(
                    ((s = n - o),
                    (r = a - u),
                    (l = e.clientHeight),
                    (i = e.clientWidth),
                    {
                        ...eT.Mw,
                        position: { type: "static-random", minValue: { x: s, y: r }, maxValue: { x: s + l, y: r + i } },
                        velocity: { type: "static-random", minValue: { x: -20, y: -20 }, maxValue: { x: 20, y: 20 } },
                        opacity: { type: "linear", value: 2, addValue: -0.1 },
                        dragCoefficient: { type: "static", value: 0.166 },
                        size: { type: "static-random", minValue: 2, maxValue: 3 },
                    }),
                    100,
                );
            }
        }, [n, g, y, h]),
        U = (0, c.A)(d);
    return (r.useEffect(() => {
        f && d && !U && (p(), Q());
    }, [d, f, p, Q, U]),
    r.useEffect(() => {
        f &&
            !_ &&
            j &&
            setTimeout(() => {
                p(), Q();
            }, 200);
    }, [f, j, _, p, Q]),
    r.useEffect(() => {
        y.isReady && (!E.current && f && (p(), Q()), (E.current = f));
    }, [f, E, Q, p, y]),
    r.useEffect(() => {
        l && f && (p(), Q());
    }, [l, f, p, Q]),
    h)
        ? null
        : (0, s.jsxs)("div", {
              className: ey.iE,
              "aria-hidden": "true",
              ref: g,
              children: [
                  (0, s.jsx)(a.animated.div, { className: ey.Tp, style: { opacity: (0, O.a)(m) } }),
                  (0, s.jsx)(a.animated.div, { className: i()(ey.sJ, ey.ix), style: { opacity: (0, O.a)(m) } }),
                  (0, s.jsxs)(a.animated.div, {
                      className: ey.KG,
                      style: { transform: x.to({ range: [0, 1], output: [-35, 0] }).to((e) => `translateY(${e}px)`) },
                      children: [
                          (0, s.jsx)(ev.Fk, { ref: R, className: ey.t_, environment: T.current }),
                          (0, s.jsx)(ev.K_, {
                              ref: v,
                              sprites: ["/assets/b909790cf1d80597.svg"],
                              colors: N,
                              spriteWidth: eT.wn,
                              spriteHeight: eT.wn,
                          }),
                          null != t.current &&
                              (0, V.createPortal)(
                                  (0, s.jsx)(a.animated.div, {
                                      className: i()(ey.sJ, ey.d7),
                                      style: { opacity: (0, O.a)(m) },
                                  }),
                                  t.current,
                              ),
                      ],
                  }),
              ],
          });
};
var eQ = n(453384),
    eU = n(460131);
let eB = function (e) {
    let { isExpanded: t, contentLocation: n, progressBarRef: l, percentComplete: i, popoutTargetElementRef: a } = e,
        { quest: o, onGameSheetOpen: u, onGameSheetClose: c, taskDetails: d } = r.useContext(H),
        { hasAlreadyLinked: x, onClickGameTitle: m } = r.useContext(W),
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
                    (0, s.jsx)(eQ.A, {
                        ref: e,
                        style: "small",
                        percentComplete: i,
                        size: 42,
                        children: (0, s.jsx)(Z.A, {
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
                            (0, s.jsx)(T.E, {
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
                            (0, s.jsx)(T.E, {
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
var eF = n(78385);
function eb() {
    let { quest: e, onCtxMenuOpen: t, onCtxMenuClose: n, onCtxMenuSelect: l } = r.useContext(H),
        a = (0, E.S5)(e.config.expiresAt);
    return (0, s.jsxs)("div", {
        className: eF.pS,
        children: [
            (0, s.jsx)(T.E, {
                variant: "text-xxs/medium",
                className: i()(eF.Uu, eF.TK),
                children: et.intl.format(et.t["pX+fmn"], { expirationDate: a }),
            }),
            (0, s.jsx)(b.C, {
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
                        children: (0, s.jsx)(Q.j, { size: "md", color: "currentColor", className: i()(eF.Bx, eF.U9) }),
                    }),
            }),
        ],
    });
}
var eI = n(249309);
let eO = r.forwardRef(function (e, t) {
    let { className: n, overlayRef: l } = e,
        { expansionSpring: o } = r.useContext(w),
        { quest: u, taskDetails: c, isExpanded: d, isExpansionAnimationComplete: x } = r.useContext(H),
        m = u.userStatus?.completedAt != null,
        C = (0, E.I3)(u),
        p = r.useRef(null),
        h = u.userStatus?.enrolledAt != null,
        g = null != C ? C.percentComplete : c.percentComplete,
        _ = r.useRef(null),
        [j, A] = r.useState(!1);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            m && (0, s.jsx)(eN, { overlayRef: l, progressBarRef: p, isHovered: j }),
            (0, s.jsx)(a.animated.div, {
                ref: t,
                "aria-hidden": d && x,
                inert: (!!d && !!x) || void 0,
                className: i()(n, eI.hR, { [eI.Ag]: d, [eI.s]: h }),
                style: {
                    opacity: (0, O.a)(o.to({ range: [0, 1], output: [1, 0] })),
                    backgroundImage: m ? `linear-gradient(90deg, ${k}, ${q})` : void 0,
                },
                onMouseEnter: () => A(!0),
                onMouseLeave: () => A(!1),
                children: (0, s.jsxs)("div", {
                    className: eI.o8,
                    children: [
                        m &&
                            (0, s.jsxs)(s.Fragment, {
                                children: [(0, s.jsx)(eb, {}), (0, s.jsx)("div", { className: eI.yF })],
                            }),
                        h
                            ? (0, s.jsx)(eB, {
                                  contentLocation: "collapsed",
                                  progressBarRef: p,
                                  isExpanded: !1,
                                  percentComplete: g,
                              })
                            : null,
                        m &&
                            (0, s.jsx)("div", {
                                ref: _,
                                children: (0, s.jsx)(eS, {
                                    parentContainerRef: _,
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
    eq = n(534514),
    ew = n(825484),
    eM = n(408278),
    eP = n(921853),
    eD = n(607470),
    eG = n(340124),
    e$ = n(405670),
    ez = n(112142),
    eH = n(646917),
    eW = n(46948),
    eK = n(576761),
    eX = n(895253),
    eY = n(976019),
    eZ = n(442734),
    eJ = n(139384),
    e0 = n(114046),
    e1 = n(695366),
    e2 = n(274670),
    e7 = n(144779),
    e3 = n(30370),
    e6 = n(104886),
    e9 = n(18437),
    e5 = n(780964),
    e8 = n(766075),
    e4 = n(52093),
    te = n(540037);
function tt(e) {
    let { text: t, quest: n, sourceQuestContent: r } = e,
        l = (0, e9.Ut)(),
        i = (0, B.go)();
    return (0, s.jsx)(v.D, {
        className: te.Z0,
        onClick: () => {
            (0, e6.E5)(e6.kI.STEP_2_CLICKED_INTERNAL, "console_connection_step")
                ? (0, e2.r)({
                      type: e7.F.CLICK_INTERNAL,
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
                (0, e8.openUserSettings)(e5.X.CONNECTIONS_PANEL);
        },
        children: (0, s.jsx)(T.E, { "aria-label": t, color: "none", variant: "text-xxs/normal", children: t }),
    });
}
function tn(e) {
    let { xboxAndPlaystationAccounts: t, quest: n, sourceQuestContent: r } = e;
    return t.length > 0
        ? (0, s.jsx)(tt, { text: et.intl.string(et.t["qiS+xj"]), quest: n, sourceQuestContent: r })
        : null;
}
function ts(e) {
    return (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(e4.L5, { children: et.intl.string(et.t.EJFSvD) }), (0, s.jsx)(tn, { ...e })],
    });
}
var tr = n(256023);
function tl(e) {
    return (0, s.jsx)(T.E, { className: tr.eW, color: "text-muted", variant: "text-xxs/normal", children: e.children });
}
function ti(e) {
    let { quest: t, useReducedMotion: n } = e,
        l = (0, R.H1)(t.id, f.uF.QUEST_BAR_V2, f.uF.QUEST_BAR_V2),
        a = (0, R.Xf)({ useReducedMotion: n }),
        u = (0, e9.Ut)(),
        c = (0, B.go)(),
        {
            errorHints: d,
            startingConsoleQuest: x,
            startConsoleQuest: m,
        } = (0, E.Wj)({
            questId: t.id,
            beforeRequest: () => {
                (0, e6.E5)(e6.kI.STEP_2_CLICKED_INTERNAL, "quest_bar_console_task_checklist")
                    ? (0, e2.r)({
                          type: e7.F.CLICK_INTERNAL,
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
                                  if (e.type === e0._.EXPIRED_CREDENTIAL) {
                                      let r = e3.A.getAccount(e.connected_account_id, e.connected_account_type),
                                          l = (0, F.IG)(e),
                                          i = (0, F.$J)(e);
                                      return (0, s.jsx)(
                                          tl,
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
                                  return (0, s.jsx)(tl, { children: e.message }, n);
                              }),
                          });
                      }
                    : () =>
                          (0, s.jsx)(T.E, {
                              className: tr.eW,
                              color: "text-muted",
                              variant: "text-xxs/normal",
                              children: (0, ec.ui)(t)
                                  ? et.intl.string(et.t.bUyEZZ)
                                  : et.intl.format(et.t.GXqvC1, { gameTitle: n }),
                          }),
            };
        }, [d, t, c]);
    return (0, s.jsxs)("div", {
        className: tr.XK,
        children: [
            (0, s.jsxs)("div", {
                className: tr.oK,
                children: [
                    (0, s.jsx)(e1.E, {
                        size: "custom",
                        color: "currentColor",
                        className: 0 === d.length ? tr.pH : tr.JA,
                        width: 16,
                        height: 16,
                    }),
                    (0, s.jsx)(T.E, { variant: "text-xs/medium", children: C }),
                    (0, s.jsx)(v.D, { className: i()(tr.w, { [tr.r9]: x }), onClick: () => m(), children: a.render() }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: i()({ [tr.Iu]: x }),
                children: [p(), 0 === d.length ? null : (0, s.jsx)(tl, { children: l })],
            }),
        ],
    });
}
let ta = function (e) {
        let { quest: t, taskDetails: n } = e,
            l = (0, u.bG)([Y.Ay], () => Y.Ay.useReducedMotion),
            i = (0, E.Du)(),
            a = r.useMemo(
                () => (0, F.bg)(t).filter((e) => i.xboxAndPlaystationAccounts.find((t) => t.type === e)),
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
                                (0, s.jsx)(ts, { ...i, quest: t, sourceQuestContent: f.uF.QUEST_BAR_V2 }),
                            isComplete: e || r || o,
                        },
                        {
                            renderContent: () =>
                                (0, s.jsx)(e4.L5, {
                                    children: (0, ec.ui)(t)
                                        ? et.intl.string(et.t["5tXqFe"])
                                        : et.intl.formatToPlainString(et.t["+8JB6Y"], { gameTitle: l }),
                                }),
                            isComplete: r || o,
                        },
                        {
                            renderContent: () =>
                                (0, s.jsx)(e4.L5, {
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
        return (0, s.jsx)(e4.Ay, {
            heading: et.intl.string(et.t.UPWlJu),
            steps: o,
            children: c && !d && !x && (0, s.jsx)(ti, { useReducedMotion: l, quest: t }),
        });
    },
    to = r.createContext({ springConfig: {}, isExpanded: !1 });
function tu(e) {
    let t = r.useMemo(
        () => ({ springConfig: e.springConfig, isExpanded: e.isExpanded }),
        [e.springConfig, e.isExpanded],
    );
    return (0, s.jsx)(to.Provider, { value: t, children: e.children });
}
function tc(e) {
    let { children: t } = e,
        { springConfig: n, isExpanded: l } = r.useContext(to),
        i = (0, u.bG)([Y.Ay], () => Y.Ay.useReducedMotion),
        { ref: o, height: d = null } = (0, L.Ay)(),
        x = (0, c.A)(d) ?? null,
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
var td = n(909714);
function tx(e) {
    let { header: t, children: n } = e;
    return (0, s.jsxs)("div", {
        className: td.Nr,
        children: [
            (0, s.jsxs)("div", {
                className: td.wx,
                children: [
                    (0, s.jsx)(e1.E, {
                        size: "custom",
                        color: "currentColor",
                        className: td.Kk,
                        width: 16,
                        height: 16,
                    }),
                    (0, s.jsx)(eq.D, { color: "text-default", variant: "heading-sm/medium", children: t }),
                ],
            }),
            (0, s.jsx)(T.E, { color: "text-muted", variant: "text-xs/normal", className: td.r2, children: n }),
        ],
    });
}
let tm = function (e) {
    let { quest: t } = e,
        n = (0, E.aC)(t);
    if (0 === n.length) return null;
    let r = n.at(0);
    return r === et.intl.string(et.t.BV6xDm)
        ? (0, s.jsx)(tx, { header: et.intl.string(et.t.onh6ct), children: et.intl.string(et.t.arVHRA) })
        : r === et.intl.string(et.t.MFGxFM)
          ? (0, s.jsx)(tx, { header: et.intl.string(et.t.JPihZA), children: et.intl.string(et.t.MFGxFM) })
          : null;
};
var tC = n(31300),
    tp = n(687966),
    tf = n(825807);
let tE = function (e) {
    let { onDesktop: t, onConsole: n } = e;
    return (0, s.jsxs)(ew.e, {
        direction: "vertical",
        fullWidth: !0,
        className: tf.G,
        size: "sm",
        children: [
            (0, s.jsx)(ea.$, {
                onClick: t,
                text: et.intl.string(et.t["QXc01+"]),
                variant: "secondary",
                icon: tC.k,
                iconPosition: "end",
            }),
            (0, s.jsx)(ea.$, {
                onClick: n,
                text: et.intl.string(et.t["8lAfuB"]),
                variant: "secondary",
                icon: tp._,
                iconPosition: "end",
            }),
        ],
    });
};
var th = n(495707);
let tg = r.forwardRef(function (e, t) {
    let { isHovered: n, asset: l, poster: i, className: a, autoPlay: o = !1 } = e,
        { isExpanded: c } = r.useContext(H),
        d = (0, u.bG)([Y.Ay], () => Y.Ay.useReducedMotion),
        x = r.useRef(null);
    return (
        r.useEffect(() => {
            null != x.current && (c && (!d || n) ? ((x.current.currentTime = 0), x.current.play()) : x.current.pause());
        }, [x, c, n, d]),
        (0, eJ.A)(x, z.rE.QUESTS_BAR),
        (0, s.jsx)(eD.A, {
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
function t_(e) {
    let { onClick: t } = e,
        { quest: n } = r.useContext(H),
        l = (0, u.bG)([Y.Ay], () => Y.Ay.useReducedMotion),
        [a, o] = r.useState(!1),
        c = (0, eW.tW)(n, eW.fY.QUEST_BAR_HERO_VIDEO, void 0, !1),
        d = (0, eW.tW)(n, eW.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1),
        x = (0, e$.Kr)((e) => e.getVideoProgressState)(n.id),
        m = n.userStatus?.completedAt != null && x === e$.K2.COMPLETED,
        C = !m && (!l || a);
    return (0, s.jsxs)(v.D, {
        className: th.QO,
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
                    children: (e) => (0, s.jsx)("img", { ref: e, alt: "", src: d.url, className: th.Ue }),
                }),
            null != c
                ? (0, s.jsx)(j._M, {
                      id: "QuestBarContentExpanded_video",
                      children: (e) =>
                          (0, s.jsx)(tg, {
                              ref: e,
                              isHovered: a,
                              autoPlay: !1,
                              asset: c,
                              poster: d?.url,
                              className: i()(th.NM, { [th.Gc]: C }),
                          }),
                  })
                : null,
            (0, s.jsx)("div", {
                className: th.LT,
                children: m
                    ? (0, s.jsx)(eL.m, { color: N.A.colors.WHITE, className: th.t })
                    : (0, s.jsx)(ek.u, { color: N.A.colors.WHITE, className: th.t }),
            }),
        ],
    });
}
function tj(e) {
    let { quest: t } = e;
    return (0, s.jsx)(Z.A, {
        className: i()(th.Qq, th.wq),
        learnMoreStyle: "text",
        quest: t,
        questContent: f.uF.QUEST_BAR_V2,
        sourceQuestContent: f.uF.QUEST_BAR_V2,
    });
}
function tA(e) {
    let { isInteractable: t, containerRef: n, onAcceptQuest: l } = e,
        { quest: o, onGameSheetOpen: c, onGameSheetClose: d, taskDetails: x } = r.useContext(H),
        { expansionSpring: m } = r.useContext(w),
        C = r.useRef(null),
        h = (0, u.bG)([p.A], () => p.A.isEnrolling(o.id), [o]),
        g = r.useMemo(() => (0, eW.tW)(o, eW.fY.QUEST_BAR_HERO), [o]),
        _ = (0, eo.NA)({ quest: o }),
        A = r.useMemo(() => (0, eW.tW)(o, eW.fY.HERO_IMAGE), [o]),
        R = r.useMemo(() => (null == A ? {} : { backgroundImage: `url(${A.url})` }), [A]),
        v = ez.t.useConfig({ location: z.rE.QUESTS_BAR }),
        y = (0, eo.mU)({
            quest: o,
            location: z.rE.QUESTS_BAR,
            taskDetails: x,
            sourceQuestContent: f.uF.QUEST_BAR_V2,
            popoutTargetElementRef: C,
            onGameSheetOpened: c,
            onGameSheetClosed: d,
            gameProfileSource: D.GameProfileSources.QuestBar,
        }),
        N = (0, em.Pd)(o),
        Q = (0, eH.z)(),
        U = (0, E.SD)(o, Q),
        B = Q === eK.MA.NITRO && U;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)("div", {
                ref: C,
                children: (0, s.jsxs)("div", {
                    className: th.do,
                    ref: n,
                    children: [
                        (0, s.jsxs)("div", {
                            className: th.zH,
                            children: [
                                (0, s.jsx)(tj, { quest: o }),
                                (0, s.jsx)(eq.D, {
                                    className: th.DD,
                                    color: "text-strong",
                                    variant: "heading-md/medium",
                                    children: et.intl.format(et.t.EQa7os, { questName: o.config.messages.questName }),
                                }),
                                (0, s.jsxs)("div", {
                                    className: th.zf,
                                    children: [
                                        (0, s.jsx)(T.E, { className: th.h_, variant: "text-xs/normal", children: y }),
                                        U && (0, s.jsx)(eZ.e, { questId: o.id, orbMultiplierEligibility: Q }),
                                    ],
                                }),
                            ],
                        }),
                        (0, s.jsx)("div", {
                            className: th.lO,
                            "data-testid": "quest-bar-enroll-cta",
                            children: (0, s.jsx)(ew.e, {
                                direction: "horizontal",
                                fullWidth: !0,
                                wrap: !1,
                                children:
                                    v.enabled && N === em.UA.UNENROLLED && v.enabledQuestStates.has(em.UA.UNENROLLED)
                                        ? (0, s.jsx)(ex.A, {
                                              quest: o,
                                              surface: em.V3.QUEST_BAR_FOOTER,
                                              size: "sm",
                                              analyticsCtxQuestContent: f.uF.QUEST_BAR_V2,
                                              analyticsCtxSourceQuestContent: f.uF.QUEST_BAR_V2,
                                          })
                                        : (0, s.jsx)(ea.$, {
                                              onClick: t ? l : void 0,
                                              variant: "primary",
                                              loading: h,
                                              text: _,
                                              size: "sm",
                                              icon: (0, S.Oz)(o),
                                              fullWidth: !0,
                                          }),
                            }),
                        }),
                    ],
                }),
            }),
            (0, s.jsx)(eX.A, { visible: B, glow: !0, className: th.Ph }),
            null != A &&
                (0, s.jsx)(a.animated.div, {
                    className: th.AK,
                    style: { opacity: (0, O.a)(m.to([0, 1], [1, 0])) },
                    children: (0, s.jsx)("div", { className: i()(th.LC, th.Ge), style: R }),
                }),
            (0, s.jsxs)(a.animated.div, {
                className: th.IC,
                style: {
                    backdropFilter: (0, O.Q)(m.to([0, 1], [5, 0]).to((e) => `blur(${e}px)`)),
                    filter: (0, O.Q)(m.to([0, 1], [0.8, 1]).to((e) => `brightness(${e})`)),
                },
                children: [
                    g.isAnimated
                        ? (0, s.jsx)(j._M, {
                              id: "QuestBarContentExpanded_heroAnimated",
                              children: (e) => (0, s.jsx)(tg, { ref: e, autoPlay: !0, asset: g, className: th.LO }),
                          })
                        : (0, s.jsx)(j._M, {
                              id: "QuestBarContentExpanded_heroStatic",
                              children: (e) => (0, s.jsx)("img", { ref: e, alt: "", className: th.LO, src: g.url }),
                          }),
                    (0, s.jsx)("div", { className: th.tV }),
                ],
            }),
        ],
    });
}
function tR(e) {
    let { quest: t } = e,
        { hasAlreadyLinked: n, onClickGameTitle: l } = r.useContext(W);
    return !0 !== n ? null : (0, s.jsx)(eY.A, { quest: t, hasAlreadyLinked: n, onClickGameTitle: l });
}
function tS(e) {
    let { activeScreen: t, selectPlatform: n } = e,
        { quest: l, taskDetails: i } = r.useContext(H);
    return (0, eV.YW)(t)
        .with(f.X0.SELECT, () => (0, s.jsx)(tE, { onConsole: () => n(z.fO.CONSOLE), onDesktop: () => n(z.fO.DESKTOP) }))
        .with(f.X0.DESKTOP, () => ((0, _.I6)(l) ? (0, s.jsx)(tR, { quest: l }) : (0, s.jsx)(tm, { quest: l })))
        .with(f.X0.CONSOLE, () => (0, s.jsx)(ta, { quest: l, taskDetails: i }))
        .exhaustive();
}
function tv(e) {
    let { parentContainerRef: t } = e,
        { quest: n, taskDetails: l } = r.useContext(H),
        [i, a, o] = (0, E.Qo)(n, l),
        u = l.percentComplete > 0,
        c = (0, E.Vn)(n),
        d = (0, E.RR)({ quest: n }),
        x = a.length > 1 && !u && !c;
    return (0, s.jsxs)(tc, {
        children: [
            (0, s.jsx)(tS, { activeScreen: i, selectPlatform: o }),
            i !== f.X0.SELECT &&
                (0, s.jsxs)("div", {
                    className: th.oG,
                    children: [
                        x &&
                            (0, s.jsx)(eM.K, {
                                size: "sm",
                                "aria-label": et.intl.string(et.t["13/7kX"]),
                                onClick: () => o(null),
                                icon: eP.n,
                                variant: "secondary",
                            }),
                        (0, s.jsx)(eS, {
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
function tT(e) {
    let { parentContainerRef: t } = e,
        { quest: n, taskDetails: l } = r.useContext(H),
        i = l.percentComplete > 0,
        a = (0, E.Vn)(n),
        o = r.useCallback(() => {
            (0, S.d5)({
                quest: n,
                questContent: f.uF.QUEST_BAR_V2,
                sourceQuestContent: f.uF.QUEST_BAR_V2,
                sourceQuestContentCTA: U.Cy.QUEST_BAR_VIDEO_QUEST_PREVIEW,
            });
        }, [n]);
    return (0, s.jsxs)(tc, {
        children: [
            (0, s.jsx)(t_, { onClick: o }),
            (0, s.jsx)(eS, {
                parentContainerRef: t,
                awaitingConsoleConnections: !1,
                hasMadeProgress: i,
                isProgressing: a,
                sourceQuestContent: f.uF.QUEST_BAR_V2,
            }),
        ],
    });
}
function ty(e) {
    let { parentContainerRef: t } = e,
        { quest: n, taskDetails: l } = r.useContext(H),
        i = l.percentComplete > 0,
        a = (0, E.Vn)(n);
    return (0, s.jsx)(tc, {
        children: (0, s.jsx)(eS, {
            parentContainerRef: t,
            awaitingConsoleConnections: !1,
            hasMadeProgress: i,
            isProgressing: a,
            sourceQuestContent: f.uF.QUEST_BAR_V2,
        }),
    });
}
function tN(e) {
    let { parentContainerRef: t } = e,
        { quest: n } = r.useContext(H);
    return (0, _.t)({ quest: n }) || (0, _.g5)(n) || (0, _.fE)({ quest: n }) || (0, _.I6)(n)
        ? (0, s.jsx)(tv, { parentContainerRef: t })
        : (0, _.vv)(n)
          ? (0, s.jsx)(tT, { parentContainerRef: t })
          : (0, s.jsx)(ty, { parentContainerRef: t });
}
function tQ(e) {
    let { overlayRef: t, containerRef: n } = e,
        { quest: l, taskDetails: o } = r.useContext(H),
        { expansionSpring: u } = r.useContext(w),
        c = r.useRef(null),
        d = r.useRef(null),
        x = (0, E.I3)(l),
        m = null != x ? x.percentComplete : o.percentComplete;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(a.animated.div, {
                className: i()(th.tv, th.ag),
                style: {
                    backgroundImage: `linear-gradient(90deg, ${k}, ${q})`,
                    opacity: (0, O.a)(u.to({ range: [0, 1], output: [1, 0] })),
                },
            }),
            (0, s.jsxs)("div", {
                className: th.Fe,
                ref: (e) => {
                    "function" == typeof n ? n(e) : null != n && (n.current = e), null != e && (d.current = e);
                },
                children: [
                    (0, s.jsx)(eb, {}),
                    (0, s.jsx)("div", { className: th.yF }),
                    (0, s.jsx)(eN, { overlayRef: t, progressBarRef: c, isHovered: !1 }),
                    (0, s.jsx)(eB, {
                        contentLocation: "expanded",
                        progressBarRef: c,
                        isExpanded: !0,
                        percentComplete: m,
                        popoutTargetElementRef: d,
                    }),
                    (0, s.jsx)(tN, { parentContainerRef: d }),
                ],
            }),
            (0, s.jsx)("div", {
                className: i()(th.tv, th.Sx),
                style: { backgroundImage: `linear-gradient(90deg, ${k}, ${q})` },
            }),
        ],
    });
}
async function tU(e, t, n, s) {
    (0, _.vv)(e)
        ? await (0, S.e0)(e, { questContent: t, questContentCTA: n, sourceQuestContent: s, sourceQuestContentCTA: n })
        : (0, ec.vA)(e)
          ? await (0, eG.Oy)(e.id, { questContent: t, questContentCTA: n, sourceQuestContent: s })
          : (0, eG.Oy)(e.id, { questContent: t, questContentCTA: n, sourceQuestContent: s });
}
let tB = r.forwardRef(function (e, t) {
    let { children: n, className: l, overlayRef: o } = e,
        { collapsedHeight: u, isExpanded: c, isExpansionAnimationComplete: d, quest: x } = r.useContext(H),
        { expansionSpring: m } = r.useContext(w),
        { launchInGameActivity: C } = (0, E.zW)(x),
        p = (0, ec.vA)(x),
        h = r.useCallback(async () => {
            let e = p ? U.Cy.START_QUEST : U.Cy.ACCEPT_QUEST;
            await tU(x, f.uF.QUEST_BAR_V2, e, f.uF.QUEST_BAR_V2), p && C();
        }, [x, C, p]),
        g = x.userStatus?.enrolledAt != null,
        _ = c && d;
    return (0, s.jsxs)(a.animated.div, {
        "aria-hidden": !_,
        inert: !_ || void 0,
        className: i()(l, th.Rh, { [th.Yd]: _, [th.iH]: g }),
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
                    ? (0, s.jsx)(tQ, { overlayRef: o, containerRef: t })
                    : (0, s.jsx)(tA, { isInteractable: _, containerRef: t, onAcceptQuest: h }),
            }),
        ],
    });
});
var tF = n(717695);
function tb() {
    let {
            expansionSpring: e,
            animatedComponentProps: t,
            recalculateAnimationPositions: n,
            mountPoints: l,
        } = r.useContext(w),
        { isExpanded: i } = r.useContext(H);
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
var tI = n(192308),
    tO = n(561844),
    tV = n(652215),
    tL = n(731738),
    tk = n(807393),
    tq = n(260364),
    tw = n(737595);
function tM(e) {
    let { isExpanded: t, questId: n } = e;
    return (
        (0, E.H6)({
            mode: t ? z.fP.EXPANDED : z.fP.COLLAPSED,
            questContent: f.uF.QUEST_BAR_V2,
            questId: n,
            sourceQuestContent: f.uF.QUEST_BAR_V2,
        }),
        null
    );
}
function tP() {
    return (
        r.useEffect(() => {
            m.trigger();
        }, []),
        null
    );
}
function tD(e) {
    let { quest: t } = e,
        n = (0, g.L)({ quest: t, location: z.rE.QUESTS_BAR }),
        l = (0, h.s)(),
        o = (0, u.bG)([p.A], () => null != p.A.questEnrollmentBlockedUntil),
        { isQuestBarVisible: d, reason: x } = (0, R.TQ)({ quest: t }),
        m = (0, u.bG)([C.A], () => C.A.hasLayers()),
        v = r.useRef(null),
        T = r.useMemo(() => (0, _.vv)(t), [t]),
        y = t.id,
        N = t.userStatus?.enrolledAt != null,
        Q = (0, c.A)(N),
        B = t.userStatus?.completedAt != null,
        { hasError: F, isLoading: b } = (0, j.zT)(),
        I = r.useContext(tF.Z) || (l && d && !b && !o),
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
                l = (0, u.bG)([Y.Ay], () => Y.Ay.useReducedMotion),
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
                E = t ? z.ZV : z.Ko,
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
        })({ isQuestAccepted: N, isQuestCompleted: B, isQuestBarVisible: I }),
        {
            handleCtxMenuOpened: G,
            handleCtxMenuClosed: $,
            handleCtxMenuSelection: H,
            handleGameSheetOpened: W,
            handleGameSheetClosed: K,
            handleFocusWithoutDelay: Z,
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
                R = r.useCallback(() => {
                    A();
                }, [A]),
                S = r.useCallback(() => {
                    window.clearTimeout(c.current), x || C || d.current || s(!1);
                }, [x, C, s]),
                v = r.useCallback(() => {
                    (0, tO.av)({
                        questId: t.id,
                        event: tV.HAw.QUEST_HOVER,
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
                T = r.useCallback(() => {
                    (0, tO.av)({
                        questId: t.id,
                        event: tV.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: f.uF.QUEST_BAR,
                            content_name: (0, U.jO)(f.uF.QUEST_BAR),
                            impression_id: u.current?.getId(),
                        },
                        sourceQuestContent: f.uF.QUEST_BAR_V2,
                    }),
                        (d.current = !1),
                        S();
                }, [S, u, t.id]);
            r.useEffect(() => {
                C && d.current && T();
            }, [C, T]),
                r.useLayoutEffect(() => {
                    a && !o && d.current && l();
                }, [l, a, o]),
                r.useLayoutEffect(() => {
                    i || !a || o || d.current || s(!1);
                }, [a, i, o, s]);
            let y = (0, tI.useHasAnyModalOpen)();
            return (
                r.useEffect(() => {
                    y && d.current && T();
                }, [T, y]),
                {
                    ctxMenuOpen: x,
                    gameSheetOpen: C,
                    handleCtxMenuOpened: E,
                    handleCtxMenuClosed: h,
                    handleCtxMenuSelection: g,
                    handleGameSheetOpened: _,
                    handleGameSheetClosed: j,
                    handleFocus: A,
                    handleFocusWithoutDelay: R,
                    handleBlur: S,
                    handleMouseEnter: v,
                    handleMouseLeave: T,
                }
            );
        })({
            quest: t,
            isExpanded: O,
            setIsExpanded: V,
            expandQuestBar: L,
            isQuestCompleted: B,
            isQuestAccepted: N,
            prevIsQuestAccepted: Q,
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
                ((0, tO.av)({
                    questId: t.id,
                    event: tV.HAw.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        content_id: f.uF.QUEST_BAR,
                        content_name: (0, U.jO)(f.uF.QUEST_BAR),
                        reason: "asset_loading_error",
                        impression_id: d.current?.getId(),
                    },
                    sourceQuestContent: f.uF.QUEST_BAR_V2,
                }),
                tk.A.increment({
                    name: tL.K.QUEST_CONTENT_RENDERING_FAILURE,
                    tags: [
                        `quest_id:${t.id}`,
                        `quest_content:${(0, U.jO)(f.uF.QUEST_BAR)}`,
                        "reason:asset_loading_error",
                    ],
                }));
        }, [n, d, t.id]),
            r.useEffect(() => {
                s ||
                    (0, tO.av)({
                        questId: t.id,
                        event: tV.HAw.QUEST_CONTENT_RENDERING_FAILURE,
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
                    (0, tO.av)({
                        questId: t.id,
                        event: tV.HAw.QUEST_CONTENT_RENDERING_FAILURE,
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
                (!u || c) && tq.A.clearTracking(), l && i && !a && !n && s && tq.A.stopTracking(t.id);
            }, [u, c, l, i, a, n, s, t.id]);
    })({
        quest: t,
        hasAssetsError: F,
        isEligibleForQuests: l,
        isQuestBarVisible: I,
        isVisibilityAnimationAtRest: q,
        isLoadingAssets: b,
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
            T && (0, S.l9)();
        }, [T]),
        !l || (!I && q && !b) || F)
    )
        return F ? n.log("Not rendered due to asset error") : l || n.log("Not rendered due to ineligibility"), null;
    let eu = 70 + 78 * !!B;
    return (0, s.jsx)(A.R, {
        questOrQuests: t,
        questContent: f.uF.QUEST_BAR_V2,
        overrideVisibility: !m && I,
        onImpression: eo,
        sourceQuestContent: f.uF.QUEST_BAR_V2,
        children: (e, n) => (
            (v.current = n.current),
            (0, s.jsxs)("div", {
                className: tw.dK,
                children: [
                    I &&
                        (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)(tM, { questId: y, isExpanded: O }), (0, s.jsx)(tP, {})],
                        }),
                    (0, s.jsx)(a.animated.div, {
                        "data-testid": "quest-bar-container",
                        "aria-hidden": !I,
                        onMouseLeave: en,
                        onMouseEnter: et,
                        onFocus: Z,
                        onBlur: ee,
                        className: i()(tw.iE, { [tw.Xc]: !I, [tw.uv]: I && q }),
                        style: { height: M.to({ range: [0, 1], output: [0, eu] }) },
                        children: (0, s.jsx)(a.animated.div, {
                            className: i()(tw.FG, { [tw.E$]: O, [tw.KA]: N }),
                            children: (0, s.jsx)(tu, {
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
                                        onCtxMenuClose: $,
                                        onCtxMenuOpen: G,
                                        onCtxMenuSelect: H,
                                        onGameSheetOpen: W,
                                        onGameSheetClose: K,
                                        collapsedHeight: eu,
                                        children: [
                                            (0, s.jsx)(
                                                eO,
                                                { ref: er, className: tw.Qs, overlayRef: el },
                                                B ? "collapsed-with-rewards" : "collapsed-without-rewards",
                                            ),
                                            (0, s.jsx)(tB, {
                                                className: tw.Qs,
                                                overlayRef: el,
                                                ref: es,
                                                children: (0, s.jsxs)(s.Fragment, {
                                                    children: [(0, s.jsx)(tb, {}), !N && (0, s.jsx)(ei, {})],
                                                }),
                                            }),
                                            (0, s.jsx)("div", { ref: el, className: tw.Lw }),
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
let tG =
    21552 == n.j
        ? function () {
              let e = (0, R.dN)();
              return null == e
                  ? null
                  : (0, s.jsx)(
                        j.y5,
                        {
                            source: z.rE.QUESTS_BAR,
                            adCreativeId: e.id,
                            adCreativeType: o.p.QUEST,
                            children: (0, s.jsx)(tD, { quest: e }),
                        },
                        e.id,
                    );
          }
        : null;
