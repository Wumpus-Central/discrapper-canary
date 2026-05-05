n.d(t, { A: () => tU, Y: () => tO });
var l = n(627968),
    s = n(64700),
    i = n(503698),
    a = n.n(i),
    r = n(785651),
    o = n(17928),
    c = n(475743),
    u = n(840251),
    d = n(688151);
let h = new u.E([], d.$G.QUEST_BAR_RENDERED, { location: "quest bar rendered" });
var m = n(186111),
    p = n(859703),
    f = n(507107),
    g = n(31587),
    A = n(971276),
    x = n(851936),
    C = n(792620),
    E = n(241124),
    v = n(73473),
    T = n(371912),
    j = n(617986),
    N = n(939249),
    _ = n(834730),
    S = n(290136),
    R = n(661531),
    y = n(365199),
    I = n(590202),
    b = n(971649),
    M = n(901406),
    w = n(270045),
    O = n(57718),
    U = n(398025);
n(321073);
var D = n(340287),
    P = n(765671);
let k = "#00000000",
    L = "#CDD8FF1A",
    F = s.createContext({
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
    G = s.forwardRef(function (e, t) {
        let { children: n, id: i, inState: a, isTextTransition: o = !1 } = e,
            {
                recalculateAnimationPositions: c,
                registerComponent: u,
                unregisterComponent: d,
                expansionSpring: h,
                mountPoints: m,
            } = s.useContext(F),
            p = s.useRef(null),
            f = s.useRef(null),
            g = s.useRef(void 0);
        s.useEffect(() => {
            c();
        }, [c]),
            s.useLayoutEffect(() => {
                let e = p.current;
                return (
                    null != e && u(e, i, a),
                    () => {
                        null != e && d(i, a);
                    }
                );
            }, [i, a, u, d]);
        let A = s.useCallback(
            (e) => {
                let { height: t } = e;
                g.current !== t && (c(), (g.current = t));
            },
            [c],
        );
        (0, P.i4)(p, A);
        let x = m.get(i)?.current,
            C = null;
        return (
            null == x
                ? (C = null)
                : o && null != h
                  ? (C = (0, l.jsxs)(l.Fragment, {
                        children: [
                            "collapsed" === a &&
                                (0, D.createPortal)(
                                    (0, l.jsx)(r.animated.div, {
                                        style: {
                                            position: "absolute",
                                            opacity: (0, U.a)(h.to({ range: [0, 1], output: [1, 0] })),
                                        },
                                        children: n(f),
                                    }),
                                    x,
                                ),
                            "expanded" === a &&
                                (0, D.createPortal)(
                                    (0, l.jsx)(r.animated.div, {
                                        style: {
                                            position: "absolute",
                                            opacity: (0, U.a)(h.to({ range: [0, 1], output: [0, 1] })),
                                        },
                                        children: n(f),
                                    }),
                                    x,
                                ),
                        ],
                    }))
                  : "collapsed" === a && (C = (0, D.createPortal)(n(f), x)),
            (0, l.jsxs)("div", {
                style: { opacity: +((null == C && "collapsed" === a) || null == x) },
                ref: t,
                children: [n(p), C],
            })
        );
    }),
    B = (e) => {
        let { children: t, expandedContentRef: n, collapsedContentRef: i, expansionSpring: a } = e,
            [r, o] = s.useState({}),
            [c, u] = s.useState([]),
            [d, h] = s.useState(() => new Map()),
            m = s.useCallback((e, t, n) => {
                o((l) => {
                    let s = l[t] ?? { expanded: null, collapsed: null };
                    return { ...l, [t]: { ...s, [n]: e } };
                }),
                    h((e) => {
                        let n = new Map(e);
                        return n.set(t, s.createRef()), n;
                    });
            }, []),
            p = s.useCallback((e, t) => {
                let n = !1;
                o((l) => {
                    let s = l[e] ?? { expanded: null, collapsed: null };
                    return (s[t] = null), (n = null == s.expanded && null == s.collapsed), { ...l, [e]: s };
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
                    if (null == r[t] || null == n.current || null == i.current) continue;
                    let l = r[t].collapsed,
                        s = r[t].expanded;
                    if (null == l || null == s) continue;
                    let a = s.getBoundingClientRect(),
                        o = n.current.getBoundingClientRect(),
                        c = l.getBoundingClientRect(),
                        u = i.current.getBoundingClientRect(),
                        d = a.top - o.top + 12,
                        h = c.top - u.top,
                        m = a.left - o.left + 12,
                        p = c.left - u.left,
                        f = -a.right + o.right + 12,
                        g = -c.right + u.right;
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
                u(e);
            }, [r, n, i, u]);
        return (0, l.jsx)(F.Provider, {
            value: {
                registerComponent: m,
                unregisterComponent: p,
                animatedComponents: r,
                expandedContentRef: n,
                collapsedContentRef: i,
                recalculateAnimationPositions: f,
                animatedComponentProps: c,
                expansionSpring: a,
                mountPoints: d,
            },
            children: t,
        });
    },
    V = s.createContext({
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
    H = (e) => {
        let {
                children: t,
                isExpanded: n,
                isExpansionAnimationComplete: i,
                onCtxMenuClose: a,
                onCtxMenuOpen: r,
                onCtxMenuSelect: o,
                onGameSheetOpen: c,
                onGameSheetClose: u,
                collapsedHeight: d,
                quest: h,
                taskDetails: m,
            } = e,
            p = s.useMemo(
                () => ({
                    isExpanded: n,
                    isExpansionAnimationComplete: i,
                    onCtxMenuClose: a,
                    onCtxMenuOpen: r,
                    onCtxMenuSelect: o,
                    onGameSheetOpen: c,
                    onGameSheetClose: u,
                    collapsedHeight: d,
                    quest: h,
                    taskDetails: m,
                }),
                [n, i, a, r, o, c, u, d, h, m],
            );
        return (0, l.jsx)(V.Provider, { value: p, children: t });
    };
var Q = n(775602),
    W = n(646764),
    z = n(717421);
let q = () => {
    let e = document.body.style.getPropertyValue("--custom-guild-sidebar-width").slice(0, -2);
    return parseInt("" !== e ? e : "375");
};
var Z = n(375708),
    K = n(173399);
let $ = (e) => {
    let { isFullyExpanded: t, partnerBranding: n } = e,
        i = {
            label: !(function () {
                let [e, t] = s.useState(() => 270 > q());
                return (
                    s.useEffect(() => {
                        let e = new MutationObserver(() => {
                            t(270 > q());
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
        c = (0, o.bG)([Q.A], () => Q.A.useReducedMotion),
        { quest: u } = s.useContext(V),
        { expansionSpring: d } = s.useContext(F),
        h = i ? -4 : 6;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(r.animated.div, {
                className: K.tE,
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
                children: (0, l.jsx)(W.A, {
                    learnMoreStyle: "text",
                    learnMoreFontSize: t ? 9 : void 0,
                    quest: u,
                    questContent: f.uF.QUEST_BAR_V2,
                    autoplay: t && !c,
                    sourceQuestContent: f.uF.QUEST_BAR_V2,
                    style: { width: 48, height: 48, marginRight: 8, borderRadius: 6 },
                }),
            }),
            (0, l.jsxs)(r.animated.div, {
                className: a()(K.pm, { [K.nd]: i }),
                style: {
                    transform: (0, r.to)(
                        [d.to({ range: [0, 1], output: [0, -48] }), d.to({ range: [0, 1], output: [0, h] })],
                        (e, t) => `translate(${e}px, ${t}px)`,
                    ),
                },
                children: [
                    (0, l.jsx)("div", { className: a()({ [K.Iu]: !i }), children: n }),
                    (0, l.jsx)(r.animated.div, {
                        className: a()(K.ol, { [K.yZ]: i }),
                        style: { opacity: (0, U.a)(d.to({ range: [0, 1], output: [i ? 1 : 0.7, 0] })) },
                        children: (0, l.jsx)(_.E, {
                            color: "always-white",
                            lineClamp: 1,
                            variant: "text-xs/medium",
                            children: Z.intl.string(Z.t["3mgEQf"]),
                        }),
                    }),
                ],
            }),
        ],
    });
};
var Y = n(173839);
let X = (0, r.animated)(O.Ay),
    J = () => {
        let e = (0, b.go)(),
            { expansionSpring: t } = s.useContext(F),
            {
                onCtxMenuOpen: n,
                onCtxMenuClose: i,
                onCtxMenuSelect: o,
                isExpanded: c,
                isExpansionAnimationComplete: u,
                quest: d,
            } = s.useContext(V),
            h = s.useCallback(() => {
                (0, j.Zc)(d, {
                    content: f.uF.QUEST_BAR_V2,
                    ctaContent: I.Cy.OPEN_DISCLOSURE,
                    sourceQuestContent: f.uF.QUEST_BAR_V2,
                });
            }, [d]),
            m = s.useCallback(() => {
                (0, M.pu)(d, {
                    content: f.uF.QUEST_BAR_V2,
                    ctaContent: I.Cy.OPEN_GAME_LINK,
                    impressionId: e,
                    sourceQuestContent: f.uF.QUEST_BAR_V2,
                });
            }, [e, d]),
            p = c && u,
            g = (0, l.jsx)(N.D, {
                onClick: m,
                className: a()(Y.vk, { [Y.wm]: p }),
                children: (0, l.jsx)(X, {
                    quest: d,
                    withGameTile: !1,
                    logotypeClassName: Y.Iu,
                    logotypeStyle: {
                        height: 24,
                        maxWidth: 92,
                        transform: (0, r.to)([t.to({ range: [0, 1], output: [1, 1] })], (e) => `scale(${e})`),
                    },
                }),
            });
        return (0, l.jsxs)(r.animated.div, {
            className: a()(Y.iE, Y.Ht, { [Y.tT]: p }),
            style: { transform: (0, r.to)([t.to({ range: [0, 1], output: [6, 0] })], (e) => `translateY(${e}px)`) },
            children: [
                (0, l.jsx)(r.animated.div, {
                    className: Y.Tu,
                    style: { opacity: (0, U.a)(t.to({ range: [0, 1], output: [0, 1] })) },
                }),
                (0, l.jsx)($, { isFullyExpanded: p, partnerBranding: g }),
                (0, l.jsxs)(r.animated.div, {
                    className: Y.P0,
                    style: { opacity: (0, U.a)(t.to({ range: [0, 1], output: [0, 1] })) },
                    children: [
                        (0, l.jsxs)(N.D, {
                            className: Y.y8,
                            onClick: h,
                            children: [
                                (0, l.jsx)(_.E, {
                                    color: "always-white",
                                    variant: "text-xs/normal",
                                    children: Z.intl.string(Z.t.o6FLcF),
                                }),
                                (0, l.jsx)(S.c, { color: R.A.colors.WHITE, className: Y.P$ }),
                            ],
                        }),
                        (0, l.jsx)(w.C, {
                            onOpen: n,
                            onClose: i,
                            onSelect: o,
                            questContent: f.uF.QUEST_BAR_V2,
                            quest: d,
                            shouldShowDisclosure: !0,
                            showShareLink: !0,
                            sourceQuestContent: f.uF.QUEST_BAR_V2,
                            children: (e) =>
                                (0, l.jsx)(N.D, {
                                    ...e,
                                    className: a()(Y.uJ, Y.rb),
                                    "aria-label": Z.intl.string(Z.t.DEoVWZ),
                                    children: (0, l.jsx)(y.j, {
                                        size: "md",
                                        color: "currentColor",
                                        className: a()(Y.Bx, Y.ON),
                                    }),
                                }),
                        }),
                    ],
                }),
            ],
        });
    };
var ee = n(821609),
    et = n(408278),
    en = n(862482),
    el = n(921853),
    es = n(793574),
    ei = n(859040),
    ea = n(838077),
    er = n(651892),
    eo = n(801365),
    ec = n(814793),
    eu = n(753386),
    ed = n(862611),
    eh = n(758836),
    em = n(519508);
function ep(e) {
    let { quest: t, sourceQuestContent: n, taskDetails: s } = e;
    return (0, l.jsx)(ee.$, {
        variant: "primary",
        fullWidth: !0,
        onClick: () => {
            let e = t.userStatus?.enrolledAt == null ? I.Cy.ACCEPT_QUEST : I.Cy.WATCH_VIDEO;
            (0, j.d5)({ quest: t, questContent: f.uF.QUEST_BAR_V2, sourceQuestContent: n, sourceQuestContentCTA: e });
        },
        size: "sm",
        text: (0, eu.WM)(s),
    });
}
let ef = (e) => {
        let { quest: t, sourceQuestContent: n } = e,
            s = (0, b.go)(),
            i = (0, er.wr)(t);
        return (0, l.jsx)(ee.$, {
            size: "sm",
            fullWidth: !0,
            onClick: () =>
                (0, M.pu)(t, {
                    content: f.uF.QUEST_BAR_V2,
                    ctaContent: I.Cy.OPEN_GAME_LINK,
                    impressionId: s,
                    sourceQuestContent: n,
                }),
            text: i,
        });
    },
    eg = (e) => {
        let { quest: t, sourceQuestContent: n } = e,
            s = (0, b.vU)()?.getId();
        return (0, l.jsx)(ee.$, {
            fullWidth: !0,
            onClick: () =>
                (0, M.se)(
                    { quest: t },
                    {
                        content: f.uF.QUEST_BAR_V2,
                        ctaContent: I.Cy.CONNECT_CONSOLE,
                        impressionId: s,
                        sourceQuestContent: n,
                    },
                ),
            size: "sm",
            text: Z.intl.string(Z.t.csptqV),
        });
    },
    eA = (e) => {
        let { quest: t } = e,
            n = (0, ea.NA)({ quest: t }),
            { launchInGameActivity: s } = (0, g.zW)(t);
        return (0, ec.vA)(t)
            ? (0, l.jsx)(ee.$, {
                  fullWidth: !0,
                  variant: "primary",
                  icon: (0, j.Oz)(t),
                  onClick: s,
                  size: "sm",
                  text: n,
              })
            : null;
    },
    ex = (e) => {
        let {
                quest: t,
                sourceQuestContent: n,
                taskDetails: s,
                popoutTargetElementRef: i,
                onGameSheetOpened: a,
                onGameSheetClosed: r,
            } = e,
            { applications: o } = s;
        return (0, l.jsx)(ed.A, {
            quest: t,
            sourceQuestContent: n,
            applications: o ?? [],
            targetElementRef: i,
            onGameSheetOpened: a,
            onGameSheetClosed: r,
            children: (e) =>
                (0, l.jsx)(ee.$, {
                    variant: "secondary",
                    fullWidth: !0,
                    size: "sm",
                    text: Z.intl.string(Z.t["93PTEs"]),
                    ...e,
                }),
        });
    },
    eC = (e) => {
        let { quest: t, ctaLabel: n, onClick: i, questContent: a = f.uF.QUEST_BAR_V2, sourceQuestContent: r, ...o } = e,
            c = (0, T.ix)({ quest: t, questContent: a, sourceQuestContent: r }),
            u = s.useCallback(
                (e) => {
                    i?.(e),
                        (0, eo.ks)(t.config) && t.userStatus?.claimedAt != null
                            ? (0, ei.Cz)({
                                  tab: eh.G2.ORBS,
                                  analyticsLocations: [],
                                  analyticsSource: es.A.QUEST_HOME_PAGE,
                              })
                            : c();
                },
                [i, t.config, t.userStatus?.claimedAt, c],
            );
        return (0, l.jsx)(ee.$, {
            fullWidth: !0,
            onClick: u,
            text: n ?? Z.intl.string(Z.t.cfY4PE),
            ...o,
            size: o.size === en.$n.Sizes.MEDIUM ? "md" : "sm",
        });
    },
    eE = (e) => {
        let {
                sourceQuestContent: t,
                awaitingConsoleConnections: n,
                hasMadeProgress: i,
                isProgressing: a,
                activeScreen: r,
                popoutTargetElementRef: o,
            } = e,
            { quest: c, onGameSheetOpen: u, onGameSheetClose: d, taskDetails: h } = s.useContext(V),
            m = c.userStatus?.completedAt != null,
            p = (0, C.vv)(c),
            g = r !== f.X0.SELECT && !i && !a,
            A = null;
        return (
            m
                ? (A = (0, l.jsx)(eC, { quest: c, sourceQuestContent: t }))
                : p
                  ? (A = (0, l.jsx)(ep, { quest: c, sourceQuestContent: t, taskDetails: h }))
                  : (0, ec.vA)(c)
                    ? (A = (0, l.jsx)(eA, { quest: c }))
                    : r === f.X0.CONSOLE && n
                      ? (A = (0, l.jsx)(eg, { quest: c, sourceQuestContent: t }))
                      : g && (0, ec.ui)(c)
                        ? (A = (0, l.jsx)(ex, {
                              quest: c,
                              sourceQuestContent: t,
                              taskDetails: h,
                              popoutTargetElementRef: o,
                              onGameSheetOpened: u,
                              onGameSheetClosed: d,
                          }))
                        : g && (A = (0, l.jsx)(ef, { quest: c, sourceQuestContent: t })),
            null == A ? null : (0, l.jsx)("div", { className: em.lO, children: A })
        );
    };
function ev(e) {
    let t = s.useRef(null);
    return (0, l.jsxs)("div", {
        className: em.oG,
        ref: t,
        children: [
            e.showBackButton &&
                (0, l.jsx)(et.K, {
                    size: "sm",
                    "aria-label": Z.intl.string(Z.t["13/7kX"]),
                    onClick: e.onBack,
                    icon: el.n,
                    variant: "secondary",
                }),
            (0, l.jsx)(eE, { ...e, popoutTargetElementRef: t }),
        ],
    });
}
var eT = n(106778),
    ej = n(536283),
    eN = n(947638);
let e_ = (e) => {
    let { overlayRef: t, progressBarRef: n, isHovered: i } = e,
        { quest: u, isExpanded: d } = s.useContext(V),
        { expansionSpring: h } = s.useContext(F),
        { completionSpring: p, startCompletionAnimation: f } = (function () {
            let [{ spring: e }, t] = (0, z.z)(() => ({ spring: 0 }), "animate-always");
            return {
                completionSpring: e,
                startCompletionAnimation: s.useCallback(() => {
                    t({ spring: 1 }), t({ spring: 0, delay: 2e3 });
                }, [t]),
            };
        })(),
        g = u.userStatus?.completedAt != null,
        A = s.useRef(!1),
        x = (0, o.bG)([Q.A], () => Q.A.useReducedMotion),
        C = s.useRef(null),
        E = (0, o.bG)([m.A], () => m.A.hasLayers()),
        v = (0, c.A)(E),
        [T, j] = s.useState(null),
        [N, _] = s.useState(null),
        S = s.useRef(new eT.OH({ gravity: 0, wind: 0 })),
        R = (0, eT.f9)(T, N),
        y = s.useMemo(() => ["#51BC9D"], []),
        I = s.useCallback(() => {
            if (x) return;
            let e = n.current,
                t = C.current;
            if (null != t && null != e && R.isReady) {
                var l, s, i, a;
                let { x: n, y: r } = e.getBoundingClientRect(),
                    { x: o, y: c } = t.getBoundingClientRect();
                R.createMultipleConfetti(
                    ((l = n - o),
                    (s = r - c),
                    (i = e.clientHeight),
                    (a = e.clientWidth),
                    {
                        ...ej.Mw,
                        position: { type: "static-random", minValue: { x: l, y: s }, maxValue: { x: l + i, y: s + a } },
                        velocity: { type: "static-random", minValue: { x: -20, y: -20 }, maxValue: { x: 20, y: 20 } },
                        opacity: { type: "linear", value: 2, addValue: -0.1 },
                        dragCoefficient: { type: "static", value: 0.166 },
                        size: { type: "static-random", minValue: 2, maxValue: 3 },
                    }),
                    100,
                );
            }
        }, [n, C, R, x]),
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
        R.isReady && (!A.current && g && (f(), I()), (A.current = g));
    }, [g, A, I, f, R]),
    s.useEffect(() => {
        i && g && (f(), I());
    }, [i, g, f, I]),
    x)
        ? null
        : (0, l.jsxs)("div", {
              className: eN.iE,
              "aria-hidden": "true",
              ref: C,
              children: [
                  (0, l.jsx)(r.animated.div, { className: eN.Tp, style: { opacity: (0, U.a)(p) } }),
                  (0, l.jsx)(r.animated.div, { className: a()(eN.sJ, eN.ix), style: { opacity: (0, U.a)(p) } }),
                  (0, l.jsxs)(r.animated.div, {
                      className: eN.KG,
                      style: { transform: h.to({ range: [0, 1], output: [-35, 0] }).to((e) => `translateY(${e}px)`) },
                      children: [
                          (0, l.jsx)(eT.Fk, { ref: j, className: eN.t_, environment: S.current }),
                          (0, l.jsx)(eT.K_, {
                              ref: _,
                              sprites: ["/assets/b909790cf1d80597.svg"],
                              colors: y,
                              spriteWidth: ej.wn,
                              spriteHeight: ej.wn,
                          }),
                          null != t.current &&
                              (0, D.createPortal)(
                                  (0, l.jsx)(r.animated.div, {
                                      className: a()(eN.sJ, eN.d7),
                                      style: { opacity: (0, U.a)(p) },
                                  }),
                                  t.current,
                              ),
                      ],
                  }),
              ],
          });
};
var eS = n(453384),
    eR = n(460131);
let ey = (e) => {
    let {
            isExpanded: t,
            contentLocation: n,
            progressBarRef: i,
            percentComplete: a,
            activeScreen: r,
            popoutTargetElementRef: o,
        } = e,
        { quest: c, onGameSheetOpen: u, onGameSheetClose: d } = s.useContext(V),
        h = (0, ea.VX)(c),
        m = (0, ea.tH)({
            quest: c,
            isExpanded: t,
            activeScreen: r,
            sourceQuestContent: f.uF.QUEST_BAR_V2,
            popoutTargetElementRef: o,
            onGameSheetOpened: u,
            onGameSheetClosed: d,
        });
    return (0, l.jsxs)("div", {
        className: eR.Z0,
        children: [
            (0, l.jsx)(G, {
                inState: n,
                id: "progress-bar",
                ref: i,
                children: (e) =>
                    (0, l.jsx)(eS.A, {
                        ref: e,
                        style: "small",
                        percentComplete: a,
                        size: 42,
                        children: (0, l.jsx)(W.A, {
                            fullWidth: !0,
                            quest: c,
                            questContent: f.uF.QUEST_BAR_V2,
                            autoplay: !1,
                            sourceQuestContent: f.uF.QUEST_BAR_V2,
                        }),
                    }),
            }),
            (0, l.jsxs)("div", {
                className: eR.NZ,
                children: [
                    (0, l.jsx)(G, {
                        inState: n,
                        id: "progress-title",
                        children: (e) =>
                            (0, l.jsx)(_.E, {
                                ref: e,
                                className: eR.FZ,
                                color: "text-strong",
                                variant: "text-sm/semibold",
                                children: h,
                            }),
                    }),
                    (0, l.jsx)(G, {
                        inState: n,
                        id: "progress-subtitle",
                        isTextTransition: !0,
                        children: (e) =>
                            (0, l.jsx)(_.E, {
                                ref: e,
                                className: eR.FZ,
                                color: "text-subtle",
                                variant: "text-xs/normal",
                                children: m,
                            }),
                    }),
                ],
            }),
        ],
    });
};
var eI = n(78385);
function eb() {
    let { quest: e, onCtxMenuOpen: t, onCtxMenuClose: n, onCtxMenuSelect: i } = s.useContext(V),
        r = (0, g.S5)(e.config.expiresAt);
    return (0, l.jsxs)("div", {
        className: eI.pS,
        children: [
            (0, l.jsx)(_.E, {
                variant: "text-xxs/medium",
                className: a()(eI.Uu, eI.TK),
                children: Z.intl.format(Z.t["pX+fmn"], { expirationDate: r }),
            }),
            (0, l.jsx)(w.C, {
                onOpen: t,
                onClose: n,
                onSelect: i,
                questContent: f.uF.QUEST_BAR_V2,
                quest: e,
                shouldShowDisclosure: !1,
                showShareLink: !0,
                sourceQuestContent: f.uF.QUEST_BAR_V2,
                children: (e) =>
                    (0, l.jsx)(N.D, {
                        ...e,
                        className: eI.rb,
                        "aria-label": Z.intl.string(Z.t.DEoVWZ),
                        children: (0, l.jsx)(y.j, { size: "md", color: "currentColor", className: a()(eI.Bx, eI.U9) }),
                    }),
            }),
        ],
    });
}
var eM = n(249309);
let ew = s.forwardRef(function (e, t) {
    let { className: n, overlayRef: i } = e,
        { expansionSpring: o } = s.useContext(F),
        { quest: c, taskDetails: u, isExpanded: d, isExpansionAnimationComplete: h } = s.useContext(V),
        m = c.userStatus?.completedAt != null,
        p = (0, g.I3)(c),
        A = s.useRef(null),
        x = c.userStatus?.enrolledAt != null,
        C = null != p ? p.percentComplete : u.percentComplete,
        [E, v] = s.useState(!1);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            m && (0, l.jsx)(e_, { overlayRef: i, progressBarRef: A, isHovered: E }),
            (0, l.jsx)(r.animated.div, {
                ref: t,
                "aria-hidden": d && h,
                className: a()(n, eM.hR, { [eM.Ag]: d, [eM.s]: x }),
                style: {
                    opacity: (0, U.a)(o.to({ range: [0, 1], output: [1, 0] })),
                    backgroundImage: m ? `linear-gradient(90deg, ${k}, ${L})` : void 0,
                },
                onMouseEnter: () => v(!0),
                onMouseLeave: () => v(!1),
                children: (0, l.jsxs)("div", {
                    className: eM.o8,
                    children: [
                        m &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)(eb, {}), (0, l.jsx)("div", { className: eM.yF })],
                            }),
                        x
                            ? (0, l.jsx)(ey, {
                                  contentLocation: "collapsed",
                                  progressBarRef: A,
                                  isExpanded: !1,
                                  percentComplete: C,
                              })
                            : null,
                        m &&
                            (0, l.jsx)(ev, {
                                awaitingConsoleConnections: !1,
                                hasMadeProgress: !0,
                                isProgressing: !1,
                                activeScreen: f.X0.DESKTOP,
                                showBackButton: !1,
                                onBack: () => {},
                                sourceQuestContent: f.uF.QUEST_BAR_V2,
                            }),
                    ],
                }),
            }),
        ],
    });
});
n(801541);
var eO = n(889137),
    eU = n(417270),
    eD = n(782134),
    eP = n(534514),
    ek = n(825484),
    eL = n(607470),
    eF = n(409626),
    eG = n(340124),
    eB = n(405670),
    eV = n(112142),
    eH = n(859387),
    eQ = n(895253),
    eW = n(442734),
    ez = n(368715),
    eq = n(79545),
    eZ = n(139384),
    eK = n(114046),
    e$ = n(695366),
    eY = n(30370),
    eX = n(18437),
    eJ = n(780964),
    e0 = n(858897),
    e1 = n(540037);
function e2(e) {
    let { text: t, quest: n, sourceQuestContent: s } = e,
        i = (0, eX.Ut)();
    return (0, l.jsx)(N.D, {
        className: e1.Z0,
        onClick: () => {
            i({
                questId: n.id,
                questContent: f.uF.QUEST_BAR_V2,
                questContentCTA: I.Cy.VIEW_CONSOLE_CONNECTIONS_LINK,
                sourceQuestContent: s,
            }),
                (0, e0.openUserSettings)(eJ.X.CONNECTIONS_PANEL);
        },
        children: (0, l.jsx)(_.E, { "aria-label": t, color: "none", variant: "text-xxs/normal", children: t }),
    });
}
function e3(e) {
    let { xboxAndPlaystationAccounts: t, quest: n, sourceQuestContent: s } = e;
    return t.length > 0
        ? (0, l.jsx)(e2, { text: Z.intl.string(Z.t["qiS+xj"]), quest: n, sourceQuestContent: s })
        : null;
}
function e6(e) {
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(_.E, { color: "text-muted", variant: "text-xs/medium", children: Z.intl.string(Z.t.EJFSvD) }),
            (0, l.jsx)(e3, { ...e }),
        ],
    });
}
var e5 = n(947641),
    e8 = n(629436);
function e4(e) {
    let { children: t, isComplete: n, hasNextStep: s } = e;
    return (0, l.jsxs)("li", {
        className: a()(e8.gY, { [e8.HP]: n }, { [e8.h4]: s }),
        children: [
            (0, l.jsxs)("div", {
                className: e8.cJ,
                children: [
                    (0, l.jsx)("div", {
                        className: e8.$P,
                        children: n && (0, l.jsx)(e5.r, { className: e8.ap, color: R.A.colors.WHITE }),
                    }),
                    s && (0, l.jsx)("div", { className: e8.UK }),
                ],
            }),
            (0, l.jsx)("div", { className: e8.M7, children: t }),
        ],
    });
}
function e7(e) {
    let { children: t } = e;
    return (0, l.jsx)(_.E, { color: "text-muted", variant: "text-xs/medium", children: t });
}
let e9 = function (e) {
    let { children: t, heading: n, steps: s } = e;
    return (0, l.jsxs)("div", {
        className: e8.iE,
        children: [
            (0, l.jsx)("div", {
                className: e8.Mj,
                children: (0, l.jsx)(eP.D, {
                    className: e8.R_,
                    color: "text-strong",
                    variant: "text-xs/semibold",
                    children: n,
                }),
            }),
            (0, l.jsx)("div", {
                className: e8.lp,
                children: (0, l.jsx)("ul", {
                    children: s.map((e, t) =>
                        (0, l.jsx)(
                            e4,
                            { isComplete: e.isComplete, hasNextStep: t < s.length - 1, children: e.renderContent() },
                            t,
                        ),
                    ),
                }),
            }),
            t,
        ],
    });
};
var te = n(256023);
function tt(e) {
    return (0, l.jsx)(_.E, { className: te.eW, color: "text-muted", variant: "text-xxs/normal", children: e.children });
}
function tn(e) {
    let { quest: t, useReducedMotion: n } = e,
        i = (0, T.H1)(t.id, f.uF.QUEST_BAR_V2, f.uF.QUEST_BAR_V2),
        r = (0, T.Xf)({ useReducedMotion: n }),
        o = (0, eX.Ut)(),
        c = (0, b.go)(),
        {
            errorHints: u,
            startingConsoleQuest: d,
            startConsoleQuest: h,
        } = (0, g.Wj)({
            questId: t.id,
            beforeRequest: () => {
                o({
                    questId: t.id,
                    questContent: f.uF.QUEST_BAR_V2,
                    questContentCTA: I.Cy.DEFIBRILLATOR,
                    sourceQuestContent: f.uF.QUEST_BAR_V2,
                }),
                    r.startAnimation();
            },
            afterRequest: r.stopAnimation,
        }),
        { header: m, renderBody: p } = s.useMemo(() => {
            let e = u.length > 0,
                n = t.config.messages.gameTitle;
            return {
                header: e
                    ? (0, ec.ui)(t)
                        ? Z.intl.string(Z.t.N33EuL)
                        : Z.intl.formatToPlainString(Z.t["28Ql27"], { gameTitle: n })
                    : (0, ec.ui)(t)
                      ? Z.intl.string(Z.t.YstzGO)
                      : Z.intl.formatToPlainString(Z.t.gX0Qcx, { gameTitle: n }),
                renderBody: e
                    ? () =>
                          (0, l.jsx)(l.Fragment, {
                              children: u.map((e, n) => {
                                  if (e.type === eK._.EXPIRED_CREDENTIAL) {
                                      let s = eY.A.getAccount(e.connected_account_id, e.connected_account_type),
                                          i = (0, M.IG)(e),
                                          a = (0, M.$J)(e);
                                      return (0, l.jsx)(
                                          tt,
                                          {
                                              children: Z.intl.format(i, {
                                                  account_name: s?.name,
                                                  onClick: () => {
                                                      (0, M.v0)(
                                                          { quest: t, platformType: a },
                                                          {
                                                              content: f.uF.QUEST_BAR,
                                                              ctaContent: I.Cy.DEFIBRILLATOR_RECONNECT_CONSOLE,
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
                                  return (0, l.jsx)(tt, { children: e.message }, n);
                              }),
                          })
                    : () =>
                          (0, l.jsx)(_.E, {
                              className: te.eW,
                              color: "text-muted",
                              variant: "text-xxs/normal",
                              children: (0, ec.ui)(t)
                                  ? Z.intl.string(Z.t.bUyEZZ)
                                  : Z.intl.format(Z.t.GXqvC1, { gameTitle: n }),
                          }),
            };
        }, [u, t, c]);
    return (0, l.jsxs)("div", {
        className: te.XK,
        children: [
            (0, l.jsxs)("div", {
                className: te.oK,
                children: [
                    (0, l.jsx)(e$.E, {
                        size: "custom",
                        color: "currentColor",
                        className: 0 === u.length ? te.pH : te.JA,
                        width: 16,
                        height: 16,
                    }),
                    (0, l.jsx)(_.E, { variant: "text-xs/medium", children: m }),
                    (0, l.jsx)(N.D, { className: a()(te.w, { [te.r9]: d }), onClick: () => h(), children: r.render() }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: a()({ [te.Iu]: d }),
                children: [p(), 0 === u.length ? null : (0, l.jsx)(tt, { children: i })],
            }),
        ],
    });
}
let tl = function (e) {
        let { quest: t, taskDetails: n } = e,
            i = (0, o.bG)([Q.A], () => Q.A.useReducedMotion),
            a = (0, g.Du)(),
            r = s.useMemo(
                () => (0, M.bg)(t).filter((e) => a.xboxAndPlaystationAccounts.find((t) => t.type === e)),
                [a.xboxAndPlaystationAccounts, t],
            ),
            {
                steps: c,
                hasConnectedAccounts: u,
                isProgressingQuestForLaunchedGame: d,
                isQuestComplete: h,
            } = s.useMemo(() => {
                let e = r.length > 0,
                    s = e && (0, C.YL)(t),
                    i = t.config.messages.gameTitle,
                    o = t.userStatus?.completedAt != null;
                return {
                    steps: [
                        {
                            renderContent: () =>
                                (0, l.jsx)(e6, { ...a, quest: t, sourceQuestContent: f.uF.QUEST_BAR_V2 }),
                            isComplete: e || s || o,
                        },
                        {
                            renderContent: () =>
                                (0, l.jsx)(e7, {
                                    children: (0, ec.ui)(t)
                                        ? Z.intl.string(Z.t["5tXqFe"])
                                        : Z.intl.formatToPlainString(Z.t["+8JB6Y"], { gameTitle: i }),
                                }),
                            isComplete: s || o,
                        },
                        {
                            renderContent: () =>
                                (0, l.jsx)(e7, {
                                    children: Z.intl.formatToPlainString(Z.t.HhfrYS, { numMinutes: n.targetMinutes }),
                                }),
                            isComplete: o,
                        },
                    ],
                    hasConnectedAccounts: e,
                    isProgressingQuestForLaunchedGame: s,
                    isQuestComplete: o,
                };
            }, [a, r.length, t, n.targetMinutes]);
        return (0, l.jsx)(e9, {
            heading: Z.intl.string(Z.t.UPWlJu),
            steps: c,
            children: u && !d && !h && (0, l.jsx)(tn, { useReducedMotion: i, quest: t }),
        });
    },
    ts = s.createContext({ springConfig: {}, isExpanded: !1 });
function ti(e) {
    let t = s.useMemo(
        () => ({ springConfig: e.springConfig, isExpanded: e.isExpanded }),
        [e.springConfig, e.isExpanded],
    );
    return (0, l.jsx)(ts.Provider, { value: t, children: e.children });
}
function ta(e) {
    let { children: t } = e,
        { springConfig: n, isExpanded: i } = s.useContext(ts),
        a = (0, o.bG)([Q.A], () => Q.A.useReducedMotion),
        { ref: u, height: d = null } = (0, P.Ay)(),
        h = (0, c.A)(d) ?? null,
        [{ height: m }, p] = (0, z.z)(() => ({ from: { height: 0 }, config: n }));
    return (
        s.useLayoutEffect(() => {
            null !== d && p({ height: d, immediate: !i || a || null === h });
        }, [d, p, i, a, h]),
        (0, l.jsx)(r.animated.div, {
            style: { height: null === h ? "auto" : m, overflow: "hidden" },
            children: (0, l.jsx)("div", { style: { overflow: "hidden" }, ref: u, children: t }),
        })
    );
}
n(134528), n(947204);
var tr = n(909714);
function to(e) {
    let { header: t, children: n } = e;
    return (0, l.jsxs)("div", {
        className: tr.Nr,
        children: [
            (0, l.jsxs)("div", {
                className: tr.wx,
                children: [
                    (0, l.jsx)(e$.E, {
                        size: "custom",
                        color: "currentColor",
                        className: tr.Kk,
                        width: 16,
                        height: 16,
                    }),
                    (0, l.jsx)(eP.D, { color: "text-default", variant: "heading-sm/medium", children: t }),
                ],
            }),
            (0, l.jsx)(_.E, { color: "text-muted", variant: "text-xs/normal", className: tr.r2, children: n }),
        ],
    });
}
let tc = function (e) {
    let { quest: t } = e,
        n = (0, g.aC)(t);
    if (0 === n.length) return null;
    let s = n.at(0);
    return s === Z.intl.string(Z.t.BV6xDm)
        ? (0, l.jsx)(to, { header: Z.intl.string(Z.t.onh6ct), children: Z.intl.string(Z.t.arVHRA) })
        : s === Z.intl.string(Z.t.MFGxFM)
          ? (0, l.jsx)(to, { header: Z.intl.string(Z.t.JPihZA), children: Z.intl.string(Z.t.MFGxFM) })
          : null;
};
var tu = n(31300),
    td = n(687966),
    th = n(825807);
let tm = function (e) {
    let { onDesktop: t, onConsole: n } = e;
    return (0, l.jsxs)(ek.e, {
        direction: "vertical",
        fullWidth: !0,
        className: th.G,
        size: "sm",
        children: [
            (0, l.jsx)(ee.$, {
                onClick: t,
                text: Z.intl.string(Z.t["QXc01+"]),
                variant: "secondary",
                icon: tu.k,
                iconPosition: "end",
            }),
            (0, l.jsx)(ee.$, {
                onClick: n,
                text: Z.intl.string(Z.t["8lAfuB"]),
                variant: "secondary",
                icon: td._,
                iconPosition: "end",
            }),
        ],
    });
};
var tp = n(190107),
    tf = n(495707);
let tg = s.forwardRef(function (e, t) {
    let { isHovered: n, asset: i, poster: a, className: r, autoPlay: c = !1 } = e,
        { isExpanded: u } = s.useContext(V),
        d = (0, o.bG)([Q.A], () => Q.A.useReducedMotion),
        h = s.useRef(null);
    return (
        s.useEffect(() => {
            null != h.current && (u && (!d || n) ? ((h.current.currentTime = 0), h.current.play()) : h.current.pause());
        }, [h, u, n, d]),
        (0, eZ.A)(h, tp.rE.QUESTS_BAR),
        (0, l.jsx)(eL.A, {
            ref: (e) => {
                (h.current = e), null != t && ("function" == typeof t ? t(e) : (t.current = e));
            },
            autoPlay: c,
            poster: a,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: r,
            controls: !1,
            children: (0, l.jsx)("source", { src: i.url, type: i.mimetype ?? void 0 }),
        })
    );
});
function tA(e) {
    let { onClick: t } = e,
        { quest: n } = s.useContext(V),
        i = (0, o.bG)([Q.A], () => Q.A.useReducedMotion),
        [r, c] = s.useState(!1),
        u = (0, eH.tW)(n, eH.fY.QUEST_BAR_HERO_VIDEO, void 0, !1),
        d = (0, eH.tW)(n, eH.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1),
        h = (0, eB.Kr)((e) => e.getVideoProgressState)(n.id),
        m = n.userStatus?.completedAt != null && h === eB.K2.COMPLETED,
        p = !m && (!i || r);
    return (0, l.jsxs)(N.D, {
        className: tf.QO,
        onClick: t,
        onMouseEnter: () => {
            i && !r && c(!0);
        },
        onMouseLeave: () => {
            i && r && c(!1);
        },
        children: [
            null != d &&
                (0, l.jsx)(E.Sn, {
                    id: "QuestBarContentExpanded_videoThumbnail",
                    children: (e) => (0, l.jsx)("img", { ref: e, alt: "", src: d.url, className: tf.Ue }),
                }),
            null != u
                ? (0, l.jsx)(E.Sn, {
                      id: "QuestBarContentExpanded_video",
                      children: (e) =>
                          (0, l.jsx)(tg, {
                              ref: e,
                              isHovered: r,
                              autoPlay: !1,
                              asset: u,
                              poster: d?.url,
                              className: a()(tf.NM, { [tf.Gc]: p }),
                          }),
                  })
                : null,
            (0, l.jsx)("div", {
                className: tf.LT,
                children: m
                    ? (0, l.jsx)(eU.m, { color: R.A.colors.WHITE, className: tf.t })
                    : (0, l.jsx)(eD.u, { color: R.A.colors.WHITE, className: tf.t }),
            }),
        ],
    });
}
function tx(e) {
    let { quest: t } = e;
    return (0, l.jsx)(W.A, {
        className: a()(tf.Qq, tf.wq),
        learnMoreStyle: "text",
        quest: t,
        questContent: f.uF.QUEST_BAR_V2,
        sourceQuestContent: f.uF.QUEST_BAR_V2,
    });
}
function tC(e) {
    let { isInteractable: t, containerRef: n, onAcceptQuest: i } = e,
        { quest: c, onGameSheetOpen: u, onGameSheetClose: d, taskDetails: h } = s.useContext(V),
        { expansionSpring: m } = s.useContext(F),
        A = s.useRef(null),
        x = (0, o.bG)([p.A], () => p.A.isEnrolling(c.id), [c]),
        C = s.useMemo(() => (0, eH.tW)(c, eH.fY.QUEST_BAR_HERO), [c]),
        v = (0, ea.NA)({ quest: c }),
        T = s.useMemo(() => (0, eH.tW)(c, eH.fY.HERO_IMAGE), [c]),
        N = s.useMemo(() => (null == T ? {} : { backgroundImage: `url(${T.url})` }), [T]),
        S = eV.t.useConfig({ location: tp.rE.QUESTS_BAR }),
        R = (0, ea.mU)({
            quest: c,
            location: tp.rE.QUESTS_BAR,
            questContent: f.uF.QUEST_BAR_V2,
            taskDetails: h,
            sourceQuestContent: f.uF.QUEST_BAR_V2,
            popoutTargetElementRef: A,
            onGameSheetOpened: u,
            onGameSheetClosed: d,
            gameProfileSource: eF.Ob.QuestBar,
        }),
        y = (0, eq.Pd)(c),
        I = (0, g.SD)(c),
        b = (0, g.Oq)(),
        M = b && I;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", {
                ref: A,
                children: (0, l.jsxs)("div", {
                    className: tf.do,
                    ref: n,
                    children: [
                        (0, l.jsxs)("div", {
                            className: tf.zH,
                            children: [
                                (0, l.jsx)(tx, { quest: c }),
                                (0, l.jsx)(eP.D, {
                                    className: tf.DD,
                                    color: "text-strong",
                                    variant: "heading-md/medium",
                                    children: Z.intl.format(Z.t.EQa7os, { questName: c.config.messages.questName }),
                                }),
                                (0, l.jsxs)("div", {
                                    className: tf.zf,
                                    children: [
                                        (0, l.jsx)(_.E, { className: tf.h_, variant: "text-xs/normal", children: R }),
                                        I && (0, l.jsx)(eW.e, { questId: c.id, canUseQuestOrbMultiplier: b }),
                                    ],
                                }),
                            ],
                        }),
                        (0, l.jsx)("div", {
                            className: tf.lO,
                            children: (0, l.jsx)(ek.e, {
                                direction: "horizontal",
                                fullWidth: !0,
                                wrap: !1,
                                children:
                                    S.enabled && y === eq.UA.UNENROLLED && S.enabledQuestStates.has(eq.UA.UNENROLLED)
                                        ? (0, l.jsx)(ez.A, {
                                              quest: c,
                                              surface: eq.V3.QUEST_BAR_FOOTER,
                                              size: "sm",
                                              analyticsCtxQuestContent: f.uF.QUEST_BAR_V2,
                                              analyticsCtxSourceQuestContent: f.uF.QUEST_BAR_V2,
                                          })
                                        : (0, l.jsx)(ee.$, {
                                              onClick: t ? i : void 0,
                                              variant: "primary",
                                              loading: x,
                                              text: v,
                                              size: "sm",
                                              icon: (0, j.Oz)(c),
                                              fullWidth: !0,
                                          }),
                            }),
                        }),
                    ],
                }),
            }),
            (0, l.jsx)(eQ.A, { visible: M, glow: !0, className: tf.Ph }),
            null != T &&
                (0, l.jsx)(r.animated.div, {
                    className: tf.AK,
                    style: { opacity: (0, U.a)(m.to([0, 1], [1, 0])) },
                    children: (0, l.jsx)("div", { className: a()(tf.LC, tf.Ge), style: N }),
                }),
            (0, l.jsxs)(r.animated.div, {
                className: tf.IC,
                style: {
                    backdropFilter: (0, U.Q)(m.to([0, 1], [5, 0]).to((e) => `blur(${e}px)`)),
                    filter: (0, U.Q)(m.to([0, 1], [0.8, 1]).to((e) => `brightness(${e})`)),
                },
                children: [
                    C.isAnimated
                        ? (0, l.jsx)(E.Sn, {
                              id: "QuestBarContentExpanded_heroAnimated",
                              children: (e) => (0, l.jsx)(tg, { ref: e, autoPlay: !0, asset: C, className: tf.LO }),
                          })
                        : (0, l.jsx)(E.Sn, {
                              id: "QuestBarContentExpanded_heroStatic",
                              children: (e) => (0, l.jsx)("img", { ref: e, alt: "", className: tf.LO, src: C.url }),
                          }),
                    (0, l.jsx)("div", { className: tf.tV }),
                ],
            }),
        ],
    });
}
function tE(e) {
    let { overlayRef: t, containerRef: n } = e,
        { quest: i, taskDetails: o } = s.useContext(V),
        { expansionSpring: c } = s.useContext(F),
        u = i.userStatus?.completedAt != null,
        d = o.percentComplete > 0,
        h = (0, g.Vn)(i),
        [m, p, A] = (0, g.Qo)(i, o),
        x = s.useRef(null),
        E = s.useRef(null),
        v = (0, g.RR)({ quest: i }),
        T = (0, C.vv)(i),
        N = (0, g.I3)(i),
        _ = s.useCallback(() => {
            (0, j.d5)({
                quest: i,
                questContent: f.uF.QUEST_BAR_V2,
                sourceQuestContent: f.uF.QUEST_BAR_V2,
                sourceQuestContentCTA: I.Cy.QUEST_BAR_VIDEO_QUEST_PREVIEW,
            });
        }, [i]),
        S = null != N ? N.percentComplete : o.percentComplete;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(r.animated.div, {
                className: a()(tf.tv, tf.ag),
                style: {
                    backgroundImage: `linear-gradient(90deg, ${k}, ${L})`,
                    opacity: (0, U.a)(c.to({ range: [0, 1], output: [1, 0] })),
                },
            }),
            (0, l.jsxs)("div", {
                className: tf.Fe,
                ref: (e) => {
                    "function" == typeof n ? n(e) : null != n && (n.current = e), null != e && (E.current = e);
                },
                children: [
                    (0, l.jsx)(eb, {}),
                    (0, l.jsx)("div", { className: tf.yF }),
                    (0, l.jsx)(e_, { overlayRef: t, progressBarRef: x, isHovered: !1 }),
                    (0, l.jsx)(ey, {
                        contentLocation: "expanded",
                        progressBarRef: x,
                        isExpanded: !0,
                        percentComplete: S,
                        activeScreen: m,
                        popoutTargetElementRef: E,
                    }),
                    (0, l.jsx)(ta, {
                        children:
                            !u &&
                            !(0, M.W1)(i) &&
                            (0, eO.YW)(m)
                                .with(f.X0.SELECT, () =>
                                    (0, l.jsx)(tm, {
                                        onConsole: () => A(tp.fO.CONSOLE),
                                        onDesktop: () => A(tp.fO.DESKTOP),
                                    }),
                                )
                                .with(f.X0.DESKTOP, () => (0, l.jsx)(tc, { quest: i }))
                                .with(f.X0.CONSOLE, () => (0, l.jsx)(tl, { quest: i, taskDetails: o }))
                                .exhaustive(),
                    }),
                    (0, l.jsxs)(ta, {
                        children: [
                            T && (0, l.jsx)(tA, { onClick: _ }),
                            (0, l.jsx)(ev, {
                                awaitingConsoleConnections: v,
                                hasMadeProgress: d,
                                isProgressing: h,
                                activeScreen: m,
                                showBackButton: m !== f.X0.SELECT && p.length > 1 && !d && !h,
                                onBack: () => A(null),
                                sourceQuestContent: f.uF.QUEST_BAR_V2,
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                className: a()(tf.tv, tf.Sx),
                style: { backgroundImage: `linear-gradient(90deg, ${k}, ${L})` },
            }),
        ],
    });
}
async function tv(e, t, n, l) {
    (0, C.vv)(e)
        ? await (0, j.e0)(e, { questContent: t, questContentCTA: n, sourceQuestContent: l, sourceQuestContentCTA: n })
        : (0, ec.vA)(e)
          ? await (0, eG.Oy)(e.id, { questContent: t, questContentCTA: n, sourceQuestContent: l })
          : (0, eG.Oy)(e.id, { questContent: t, questContentCTA: n, sourceQuestContent: l });
}
let tT = s.forwardRef(function (e, t) {
    let { children: n, className: i, overlayRef: o } = e,
        { collapsedHeight: c, isExpanded: u, isExpansionAnimationComplete: d, quest: h } = s.useContext(V),
        { expansionSpring: m } = s.useContext(F),
        { launchInGameActivity: p } = (0, g.zW)(h),
        A = (0, ec.vA)(h),
        x = s.useCallback(async () => {
            let e = A ? I.Cy.START_QUEST : I.Cy.ACCEPT_QUEST;
            await tv(h, f.uF.QUEST_BAR_V2, e, f.uF.QUEST_BAR_V2), A && p();
        }, [h, p, A]),
        C = h.userStatus?.enrolledAt != null,
        E = u && d;
    return (0, l.jsxs)(r.animated.div, {
        "aria-hidden": !E,
        className: a()(i, tf.Rh, { [tf.Yd]: E, [tf.iH]: C }),
        style: {
            transform: (0, r.to)(
                [m.to({ range: [0, 1], output: [0, -100] }), m.to({ range: [0, 1], output: [0, c] })],
                (e, t) => `translateY(calc(${e}% + ${t}px))`,
            ),
        },
        children: [
            n,
            (0, l.jsx)(r.animated.div, {
                style: { opacity: 1 },
                children: C
                    ? (0, l.jsx)(tE, { overlayRef: o, containerRef: t })
                    : (0, l.jsx)(tC, { isInteractable: E, containerRef: t, onAcceptQuest: x }),
            }),
        ],
    });
});
var tj = n(717695);
function tN() {
    let {
            expansionSpring: e,
            animatedComponentProps: t,
            recalculateAnimationPositions: n,
            mountPoints: i,
        } = s.useContext(F),
        { isExpanded: a } = s.useContext(V);
    return (
        s.useEffect(() => {
            n();
        }, [n, a]),
        (0, l.jsx)("div", {
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
                let { id: n, collapsedLeft: s, expandedLeft: a, collapsedTop: o, expandedTop: c, width: u } = t,
                    d = i.get(n);
                return (0, l.jsx)(
                    r.animated.div,
                    {
                        ref: d,
                        style: {
                            zIndex: 2,
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: u,
                            transform: (0, r.to)(
                                [e.to({ range: [0, 1], output: [s, a] }), e.to({ range: [0, 1], output: [o, c] })],
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
var t_ = n(561844),
    tS = n(652215),
    tR = n(731738),
    ty = n(807393),
    tI = n(260364),
    tb = n(737595);
function tM(e) {
    let { isExpanded: t, questId: n } = e;
    return (
        (0, g.H6)({
            mode: t ? tp.fP.EXPANDED : tp.fP.COLLAPSED,
            questContent: f.uF.QUEST_BAR_V2,
            questId: n,
            sourceQuestContent: f.uF.QUEST_BAR_V2,
        }),
        null
    );
}
function tw() {
    return (
        s.useEffect(() => {
            h.trigger();
        }, []),
        null
    );
}
function tO(e) {
    let { quest: t } = e,
        n = (0, x.L)({ quest: t, location: tp.rE.QUESTS_BAR }),
        i = (0, A.s)(),
        u = (0, o.bG)([p.A], () => null != p.A.questEnrollmentBlockedUntil),
        { isQuestBarVisible: d, reason: h } = (0, T.TQ)({ quest: t }),
        N = (0, o.bG)([m.A], () => m.A.hasLayers()),
        _ = s.useRef(null),
        S = s.useMemo(() => (0, C.vv)(t), [t]),
        R = t.id,
        y = t.userStatus?.enrolledAt != null,
        b = (0, c.A)(y),
        M = t.userStatus?.completedAt != null,
        { hasError: w, isLoading: O } = (0, E.Gk)(),
        U = s.useContext(tj.Z) || (i && d && !O && !u),
        {
            isExpanded: D,
            setIsExpanded: P,
            expandQuestBar: k,
            isExpansionAnimationComplete: L,
            isVisibilityAnimationAtRest: F,
            expansionSpring: G,
            visibilitySpring: V,
            springConfig: W,
        } = (function (e) {
            let { isQuestAccepted: t, isQuestCompleted: n, isQuestBarVisible: l } = e,
                i = (0, o.bG)([Q.A], () => Q.A.useReducedMotion),
                [a, r] = s.useState(!1),
                [c, u] = s.useState(!0),
                [d, h] = s.useState(!0),
                m = s.useRef(l),
                p = s.useCallback(
                    (e) => {
                        n || (u(!1), r(e));
                    },
                    [n],
                ),
                f = s.useCallback(() => {
                    p(!0);
                }, [p]),
                g = s.useCallback(() => {
                    p(!1);
                }, [p]),
                A = t ? tp.ZV : tp.Ko,
                [{ expansionSpring: x }, C] = (0, z.z)(() => ({
                    from: { expansionSpring: 0 },
                    config: A,
                    onRest: () => {
                        u(!0);
                    },
                    onStart: () => {
                        u(!1);
                    },
                }));
            s.useEffect(() => {
                C({ expansionSpring: +!!a, immediate: i });
            }, [a, C, i]);
            let { visibilitySpring: E } = (0, z.z)({
                from: { visibilitySpring: 0 },
                to: { visibilitySpring: +!!l },
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
                    l !== m.current && h(!1), (m.current = l);
                }, [l]),
                {
                    isExpanded: a,
                    setIsExpanded: p,
                    expandQuestBar: f,
                    collapseQuestBar: g,
                    isExpansionAnimationComplete: c,
                    isVisibilityAnimationAtRest: d,
                    expansionSpring: x,
                    visibilitySpring: E,
                    springConfig: A,
                }
            );
        })({ isQuestAccepted: y, isQuestCompleted: M, isQuestBarVisible: U }),
        {
            handleCtxMenuOpened: q,
            handleCtxMenuClosed: Z,
            handleCtxMenuSelection: K,
            handleGameSheetOpened: $,
            handleGameSheetClosed: Y,
            handleFocusWithoutDelay: X,
            handleBlur: ee,
            handleMouseEnter: et,
            handleMouseLeave: en,
        } = (function (e) {
            let {
                    quest: t,
                    isExpanded: n,
                    setIsExpanded: l,
                    expandQuestBar: i,
                    isQuestCompleted: a,
                    isQuestAccepted: r,
                    prevIsQuestAccepted: o,
                    impressionRef: c,
                } = e,
                u = s.useRef(-1),
                d = s.useRef(!1),
                [h, m] = s.useState(!1),
                [p, g] = s.useState(!1),
                A = s.useCallback(() => {
                    m(!0);
                }, []),
                x = s.useCallback(() => {
                    m(!1), d.current || a || l(!1);
                }, [a, l]),
                C = s.useCallback(() => {
                    m(!1), a || l(!1), (d.current = !1);
                }, [a, l]),
                E = s.useCallback(() => {
                    g(!0);
                }, []),
                v = s.useCallback(() => {
                    g(!1), l(!1);
                }, [l]),
                T = s.useCallback(
                    function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (n) return;
                        let { withDelay: t = !1 } = e;
                        t ? (u.current = window.setTimeout(i, 75)) : i();
                    },
                    [i, n],
                ),
                j = s.useCallback(() => {
                    T();
                }, [T]),
                N = s.useCallback(() => {
                    window.clearTimeout(u.current), h || p || d.current || l(!1);
                }, [h, p, l]),
                _ = s.useCallback(() => {
                    (0, t_.av)({
                        questId: t.id,
                        event: tS.HAw.QUEST_HOVER,
                        properties: {
                            content_id: f.uF.QUEST_BAR,
                            content_name: (0, I.jO)(f.uF.QUEST_BAR),
                            impression_id: c.current?.getId(),
                        },
                        shouldExtendSession: !0,
                        sourceQuestContent: f.uF.QUEST_BAR_V2,
                    }),
                        (d.current = !0),
                        T({ withDelay: !0 });
                }, [T, c, t.id]),
                S = s.useCallback(() => {
                    (0, t_.av)({
                        questId: t.id,
                        event: tS.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: f.uF.QUEST_BAR,
                            content_name: (0, I.jO)(f.uF.QUEST_BAR),
                            impression_id: c.current?.getId(),
                        },
                        sourceQuestContent: f.uF.QUEST_BAR_V2,
                    }),
                        (d.current = !1),
                        N();
                }, [N, c, t.id]);
            return (
                s.useEffect(() => {
                    p && S();
                }, [p, S]),
                s.useLayoutEffect(() => {
                    r && !o && d.current && i();
                }, [i, r, o]),
                s.useLayoutEffect(() => {
                    a || !r || o || d.current || l(!1);
                }, [r, a, o, l]),
                {
                    ctxMenuOpen: h,
                    gameSheetOpen: p,
                    handleCtxMenuOpened: A,
                    handleCtxMenuClosed: x,
                    handleCtxMenuSelection: C,
                    handleGameSheetOpened: E,
                    handleGameSheetClosed: v,
                    handleFocus: T,
                    handleFocusWithoutDelay: j,
                    handleBlur: N,
                    handleMouseEnter: _,
                    handleMouseLeave: S,
                }
            );
        })({
            quest: t,
            isExpanded: D,
            setIsExpanded: P,
            expandQuestBar: k,
            isQuestCompleted: M,
            isQuestAccepted: y,
            prevIsQuestAccepted: b,
            impressionRef: _,
        });
    !(function (e) {
        let {
            quest: t,
            hasAssetsError: n,
            isEligibleForQuests: l,
            isQuestBarVisible: i,
            isVisibilityAnimationAtRest: a,
            isLoadingAssets: r,
            currentQuestVisibleReason: o,
            shouldShowQuestBar: c,
            isQuestEnrollmentBlocked: u,
            impressionRef: d,
        } = e;
        s.useEffect(() => {
            n &&
                ((0, t_.av)({
                    questId: t.id,
                    event: tS.HAw.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        content_id: f.uF.QUEST_BAR,
                        content_name: (0, I.jO)(f.uF.QUEST_BAR),
                        reason: "asset_loading_error",
                        impression_id: d.current?.getId(),
                    },
                    sourceQuestContent: f.uF.QUEST_BAR_V2,
                }),
                ty.A.increment({
                    name: tR.K.QUEST_CONTENT_RENDERING_FAILURE,
                    tags: [
                        `quest_id:${t.id}`,
                        `quest_content:${(0, I.jO)(f.uF.QUEST_BAR)}`,
                        "reason:asset_loading_error",
                    ],
                }));
        }, [n, d, t.id]),
            s.useEffect(() => {
                l ||
                    (0, t_.av)({
                        questId: t.id,
                        event: tS.HAw.QUEST_CONTENT_RENDERING_FAILURE,
                        properties: {
                            content_id: f.uF.QUEST_BAR,
                            content_name: (0, I.jO)(f.uF.QUEST_BAR),
                            reason: "not_eligible_for_quest",
                            impression_id: d.current?.getId(),
                        },
                        sourceQuestContent: f.uF.QUEST_BAR_V2,
                    });
            }, [l, d, t.id]),
            s.useEffect(() => {
                i ||
                    !a ||
                    r ||
                    (0, t_.av)({
                        questId: t.id,
                        event: tS.HAw.QUEST_CONTENT_RENDERING_FAILURE,
                        properties: {
                            content_id: f.uF.QUEST_BAR,
                            content_name: (0, I.jO)(f.uF.QUEST_BAR),
                            reason: o,
                            impression_id: d.current?.getId(),
                        },
                        sourceQuestContent: f.uF.QUEST_BAR_V2,
                    });
            }, [i, a, r, t.id, o, d]),
            s.useEffect(() => {
                (!c || u) && tI.A.clearTracking(), i && a && !r && !n && l && tI.A.stopTracking(t.id);
            }, [c, u, i, a, r, n, l, t.id]);
    })({
        quest: t,
        hasAssetsError: w,
        isEligibleForQuests: i,
        isQuestBarVisible: U,
        isVisibilityAnimationAtRest: F,
        isLoadingAssets: O,
        currentQuestVisibleReason: h,
        shouldShowQuestBar: d,
        isQuestEnrollmentBlocked: u,
        impressionRef: _,
    });
    let el = s.useRef(null),
        es = s.useRef(null),
        ei = s.useRef(null),
        ea = (0, g.fc)(t),
        er = (0, g.UH)(t);
    if (
        (s.useEffect(() => {
            S && (0, j.l9)();
        }, [S]),
        !i || (!U && F && !O) || w)
    )
        return w ? n.log("Not rendered due to asset error") : i || n.log("Not rendered due to ineligibility"), null;
    let eo = 70 + 78 * !!M;
    return (0, l.jsx)(v.R, {
        questOrQuests: t,
        questContent: f.uF.QUEST_BAR_V2,
        overrideVisibility: !N && U,
        onImpression: er,
        sourceQuestContent: f.uF.QUEST_BAR_V2,
        children: (e, n) => (
            (_.current = n.current),
            (0, l.jsxs)("div", {
                className: tb.dK,
                children: [
                    U &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)(tM, { questId: R, isExpanded: D }), (0, l.jsx)(tw, {})],
                        }),
                    (0, l.jsx)(r.animated.div, {
                        "aria-hidden": !U,
                        onMouseLeave: en,
                        onMouseEnter: et,
                        onFocus: X,
                        onBlur: ee,
                        className: a()(tb.iE, { [tb.Xc]: !U, [tb.uv]: U && F }),
                        style: { height: V.to({ range: [0, 1], output: [0, eo] }) },
                        children: (0, l.jsx)(r.animated.div, {
                            className: a()(tb.FG, { [tb.E$]: D, [tb.KA]: y }),
                            children: (0, l.jsx)(ti, {
                                springConfig: W,
                                isExpanded: D,
                                children: (0, l.jsx)(B, {
                                    expandedContentRef: el,
                                    collapsedContentRef: es,
                                    expansionSpring: G,
                                    children: (0, l.jsxs)(H, {
                                        quest: t,
                                        taskDetails: ea,
                                        isExpanded: D,
                                        isExpansionAnimationComplete: L,
                                        onCtxMenuClose: Z,
                                        onCtxMenuOpen: q,
                                        onCtxMenuSelect: K,
                                        onGameSheetOpen: $,
                                        onGameSheetClose: Y,
                                        collapsedHeight: eo,
                                        children: [
                                            (0, l.jsx)(
                                                ew,
                                                { ref: es, className: tb.Qs, overlayRef: ei },
                                                M ? "collapsed-with-rewards" : "collapsed-without-rewards",
                                            ),
                                            (0, l.jsx)(tT, {
                                                className: tb.Qs,
                                                overlayRef: ei,
                                                ref: el,
                                                children: (0, l.jsxs)(l.Fragment, {
                                                    children: [(0, l.jsx)(tN, {}), !y && (0, l.jsx)(J, {})],
                                                }),
                                            }),
                                            (0, l.jsx)("div", { ref: ei, className: tb.Lw }),
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
let tU =
    21552 == n.j
        ? function () {
              let e = (0, T.dN)();
              return null == e
                  ? null
                  : (0, l.jsx)(
                        E.jY,
                        { source: tp.rE.QUESTS_BAR, questId: e.id, children: (0, l.jsx)(tO, { quest: e }) },
                        e.id,
                    );
          }
        : null;
