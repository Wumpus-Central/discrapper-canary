n.d(t, { A: () => tF, Y: () => tL });
var s = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    r = n(873174),
    o = n(17928),
    c = n(475743),
    u = n(840251),
    d = n(688151);
let h = new u.E([], d.$G.QUEST_BAR_RENDERED, { location: "quest bar rendered" });
var m = n(186111),
    p = n(859703),
    f = n(507107),
    g = n(124366),
    x = n(971276),
    A = n(851936),
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
    F = l.createContext({
        registerComponent: () => {},
        unregisterComponent: () => {},
        animatedComponents: {},
        expandedContentRef: l.createRef(),
        collapsedContentRef: l.createRef(),
        recalculateAnimationPositions: () => {},
        animatedComponentProps: [],
        expansionSpring: new r.SpringValue(0),
        mountPoints: new Map(),
    }),
    G = l.forwardRef(function (e, t) {
        let { children: n, id: i, inState: a, isTextTransition: o = !1 } = e,
            {
                recalculateAnimationPositions: c,
                registerComponent: u,
                unregisterComponent: d,
                expansionSpring: h,
                mountPoints: m,
            } = l.useContext(F),
            p = l.useRef(null),
            f = l.useRef(null),
            g = l.useRef(void 0);
        l.useEffect(() => {
            c();
        }, [c]),
            l.useLayoutEffect(() => {
                let e = p.current;
                return (
                    null != e && u(e, i, a),
                    () => {
                        null != e && d(i, a);
                    }
                );
            }, [i, a, u, d]);
        let x = l.useCallback(
            (e) => {
                let { height: t } = e;
                g.current !== t && (c(), (g.current = t));
            },
            [c],
        );
        (0, P.i4)(p, x);
        let A = m.get(i)?.current,
            C = null;
        return (
            null == A
                ? (C = null)
                : o && null != h
                  ? (C = (0, s.jsxs)(s.Fragment, {
                        children: [
                            "collapsed" === a &&
                                (0, D.createPortal)(
                                    (0, s.jsx)(r.animated.div, {
                                        style: {
                                            position: "absolute",
                                            opacity: (0, U.a)(h.to({ range: [0, 1], output: [1, 0] })),
                                        },
                                        children: n(f),
                                    }),
                                    A,
                                ),
                            "expanded" === a &&
                                (0, D.createPortal)(
                                    (0, s.jsx)(r.animated.div, {
                                        style: {
                                            position: "absolute",
                                            opacity: (0, U.a)(h.to({ range: [0, 1], output: [0, 1] })),
                                        },
                                        children: n(f),
                                    }),
                                    A,
                                ),
                        ],
                    }))
                  : "collapsed" === a && (C = (0, D.createPortal)(n(f), A)),
            (0, s.jsxs)("div", {
                style: { opacity: +((null == C && "collapsed" === a) || null == A) },
                ref: t,
                children: [n(p), C],
            })
        );
    }),
    V = (e) => {
        let { children: t, expandedContentRef: n, collapsedContentRef: i, expansionSpring: a } = e,
            [r, o] = l.useState({}),
            [c, u] = l.useState([]),
            [d, h] = l.useState(() => new Map()),
            m = l.useCallback((e, t, n) => {
                o((s) => {
                    let l = s[t] ?? { expanded: null, collapsed: null };
                    return { ...s, [t]: { ...l, [n]: e } };
                }),
                    h((e) => {
                        let n = new Map(e);
                        return n.set(t, l.createRef()), n;
                    });
            }, []),
            p = l.useCallback((e, t) => {
                let n = !1;
                o((s) => {
                    let l = s[e] ?? { expanded: null, collapsed: null };
                    return (l[t] = null), (n = null == l.expanded && null == l.collapsed), { ...s, [e]: l };
                }),
                    n &&
                        h((t) => {
                            let n = new Map(t);
                            return n.delete(e), n;
                        });
            }, []),
            f = l.useCallback(() => {
                let e = [];
                for (let t in r) {
                    if (null == r[t] || null == n.current || null == i.current) continue;
                    let s = r[t].collapsed,
                        l = r[t].expanded;
                    if (null == s || null == l) continue;
                    let a = l.getBoundingClientRect(),
                        o = n.current.getBoundingClientRect(),
                        c = s.getBoundingClientRect(),
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
        return (0, s.jsx)(F.Provider, {
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
    B = l.createContext({
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
            p = l.useMemo(
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
        return (0, s.jsx)(B.Provider, { value: p, children: t });
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
                let [e, t] = l.useState(() => 270 > q());
                return (
                    l.useEffect(() => {
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
        { quest: u } = l.useContext(B),
        { expansionSpring: d } = l.useContext(F),
        h = i ? -4 : 6;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(r.animated.div, {
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
                children: (0, s.jsx)(W.A, {
                    learnMoreStyle: "text",
                    learnMoreFontSize: t ? 9 : void 0,
                    quest: u,
                    questContent: f.uF.QUEST_BAR_V2,
                    autoplay: t && !c,
                    sourceQuestContent: f.uF.QUEST_BAR_V2,
                    style: { width: 48, height: 48, marginRight: 8, borderRadius: 6 },
                }),
            }),
            (0, s.jsxs)(r.animated.div, {
                className: a()(K.pm, { [K.nd]: i }),
                style: {
                    transform: (0, r.to)(
                        [d.to({ range: [0, 1], output: [0, -48] }), d.to({ range: [0, 1], output: [0, h] })],
                        (e, t) => `translate(${e}px, ${t}px)`,
                    ),
                },
                children: [
                    (0, s.jsx)("div", { className: a()({ [K.Iu]: !i }), children: n }),
                    (0, s.jsx)(r.animated.div, {
                        className: a()(K.ol, { [K.yZ]: i }),
                        style: { opacity: (0, U.a)(d.to({ range: [0, 1], output: [i ? 1 : 0.7, 0] })) },
                        children: (0, s.jsx)(_.E, {
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
            { expansionSpring: t } = l.useContext(F),
            {
                onCtxMenuOpen: n,
                onCtxMenuClose: i,
                onCtxMenuSelect: o,
                isExpanded: c,
                isExpansionAnimationComplete: u,
                quest: d,
            } = l.useContext(B),
            h = l.useCallback(() => {
                (0, j.Zc)(d, {
                    content: f.uF.QUEST_BAR_V2,
                    ctaContent: I.Cy.OPEN_DISCLOSURE,
                    sourceQuestContent: f.uF.QUEST_BAR_V2,
                });
            }, [d]),
            m = l.useCallback(() => {
                (0, M.pu)(d, {
                    content: f.uF.QUEST_BAR_V2,
                    ctaContent: I.Cy.OPEN_GAME_LINK,
                    impressionId: e,
                    sourceQuestContent: f.uF.QUEST_BAR_V2,
                });
            }, [e, d]),
            p = c && u,
            g = (0, s.jsx)(N.D, {
                onClick: m,
                className: a()(Y.vk, { [Y.wm]: p }),
                children: (0, s.jsx)(X, {
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
        return (0, s.jsxs)(r.animated.div, {
            className: a()(Y.iE, Y.Ht, { [Y.tT]: p }),
            style: { transform: (0, r.to)([t.to({ range: [0, 1], output: [6, 0] })], (e) => `translateY(${e}px)`) },
            children: [
                (0, s.jsx)(r.animated.div, {
                    className: Y.Tu,
                    style: { opacity: (0, U.a)(t.to({ range: [0, 1], output: [0, 1] })) },
                }),
                (0, s.jsx)($, { isFullyExpanded: p, partnerBranding: g }),
                (0, s.jsxs)(r.animated.div, {
                    className: Y.P0,
                    style: { opacity: (0, U.a)(t.to({ range: [0, 1], output: [0, 1] })) },
                    children: [
                        (0, s.jsxs)(N.D, {
                            className: Y.y8,
                            onClick: h,
                            children: [
                                (0, s.jsx)(_.E, {
                                    color: "always-white",
                                    variant: "text-xs/normal",
                                    children: Z.intl.string(Z.t.o6FLcF),
                                }),
                                (0, s.jsx)(S.c, { color: R.A.colors.WHITE, className: Y.P$ }),
                            ],
                        }),
                        (0, s.jsx)(w.C, {
                            onOpen: n,
                            onClose: i,
                            onSelect: o,
                            questContent: f.uF.QUEST_BAR_V2,
                            quest: d,
                            shouldShowDisclosure: !0,
                            showShareLink: !0,
                            sourceQuestContent: f.uF.QUEST_BAR_V2,
                            children: (e) =>
                                (0, s.jsx)(N.D, {
                                    ...e,
                                    className: a()(Y.uJ, Y.rb),
                                    "aria-label": Z.intl.string(Z.t.DEoVWZ),
                                    children: (0, s.jsx)(y.j, {
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
    et = n(862482),
    en = n(793574),
    es = n(859040),
    el = n(838077),
    ei = n(651892),
    ea = n(801365),
    er = n(814793),
    eo = n(753386),
    ec = n(862611),
    eu = n(758836),
    ed = n(519508);
function eh(e) {
    let { quest: t, sourceQuestContent: n, taskDetails: l } = e;
    return (0, s.jsx)(ee.$, {
        variant: "primary",
        fullWidth: !0,
        onClick: () => {
            let e = t.userStatus?.enrolledAt == null ? I.Cy.ACCEPT_QUEST : I.Cy.WATCH_VIDEO;
            (0, j.d5)({ quest: t, questContent: f.uF.QUEST_BAR_V2, sourceQuestContent: n, sourceQuestContentCTA: e });
        },
        size: "sm",
        text: (0, eo.WM)(l),
    });
}
let em = (e) => {
        let { quest: t, sourceQuestContent: n } = e,
            l = (0, b.go)(),
            i = (0, ei.wr)(t);
        return (0, s.jsx)(ee.$, {
            size: "sm",
            fullWidth: !0,
            onClick: () =>
                (0, M.pu)(t, {
                    content: f.uF.QUEST_BAR_V2,
                    ctaContent: I.Cy.OPEN_GAME_LINK,
                    impressionId: l,
                    sourceQuestContent: n,
                }),
            text: i,
        });
    },
    ep = (e) => {
        let { quest: t, sourceQuestContent: n } = e,
            l = (0, b.vU)()?.getId();
        return (0, s.jsx)(ee.$, {
            fullWidth: !0,
            onClick: () =>
                (0, M.se)(
                    { quest: t },
                    {
                        content: f.uF.QUEST_BAR_V2,
                        ctaContent: I.Cy.CONNECT_CONSOLE,
                        impressionId: l,
                        sourceQuestContent: n,
                    },
                ),
            size: "sm",
            text: Z.intl.string(Z.t.csptqV),
        });
    },
    ef = (e) => {
        let { quest: t } = e,
            n = (0, el.NA)({ quest: t }),
            { launchInGameActivity: l } = (0, g.zW)(t);
        return (0, er.vA)(t)
            ? (0, s.jsx)(ee.$, {
                  fullWidth: !0,
                  variant: "primary",
                  icon: (0, j.Oz)(t),
                  onClick: l,
                  size: "sm",
                  text: n,
              })
            : null;
    },
    eg = (e) => {
        let {
                quest: t,
                sourceQuestContent: n,
                taskDetails: l,
                popoutTargetElementRef: i,
                onGameSheetOpened: a,
                onGameSheetClosed: r,
            } = e,
            { applications: o } = l;
        return (0, s.jsx)(ec.A, {
            quest: t,
            sourceQuestContent: n,
            applications: o ?? [],
            targetElementRef: i,
            onGameSheetOpened: a,
            onGameSheetClosed: r,
            children: (e) =>
                (0, s.jsx)(ee.$, {
                    variant: "secondary",
                    fullWidth: !0,
                    size: "sm",
                    text: Z.intl.string(Z.t["93PTEs"]),
                    ...e,
                }),
        });
    },
    ex = (e) => {
        let { quest: t, ctaLabel: n, onClick: i, questContent: a = f.uF.QUEST_BAR_V2, sourceQuestContent: r, ...o } = e,
            c = (0, T.ix)({ quest: t, questContent: a, sourceQuestContent: r }),
            u = l.useCallback(
                (e) => {
                    i?.(e),
                        (0, ea.ks)(t.config) && t.userStatus?.claimedAt != null
                            ? (0, es.Cz)({
                                  tab: eu.G2.ORBS,
                                  analyticsLocations: [],
                                  analyticsSource: en.A.QUEST_HOME_PAGE,
                              })
                            : c();
                },
                [i, t.config, t.userStatus?.claimedAt, c],
            );
        return (0, s.jsx)(ee.$, {
            fullWidth: !0,
            onClick: u,
            text: n ?? Z.intl.string(Z.t.cfY4PE),
            ...o,
            size: o.size === et.$n.Sizes.MEDIUM ? "md" : "sm",
        });
    },
    eA = (e) => {
        let {
                sourceQuestContent: t,
                awaitingConsoleConnections: n,
                hasMadeProgress: i,
                isProgressing: a,
                popoutTargetElementRef: r,
            } = e,
            { quest: o, onGameSheetOpen: c, onGameSheetClose: u, taskDetails: d } = l.useContext(B),
            [h] = (0, g.Qo)(o, d),
            m = o.userStatus?.completedAt != null,
            p = (0, C.vv)(o),
            x = h !== f.X0.SELECT && !i && !a,
            A = null;
        return (
            m
                ? (A = (0, s.jsx)(ex, { quest: o, sourceQuestContent: t }))
                : p
                  ? (A = (0, s.jsx)(eh, { quest: o, sourceQuestContent: t, taskDetails: d }))
                  : (0, er.vA)(o)
                    ? (A = (0, s.jsx)(ef, { quest: o }))
                    : h === f.X0.CONSOLE && n
                      ? (A = (0, s.jsx)(ep, { quest: o, sourceQuestContent: t }))
                      : x && (0, er.ui)(o)
                        ? (A = (0, s.jsx)(eg, {
                              quest: o,
                              sourceQuestContent: t,
                              taskDetails: d,
                              popoutTargetElementRef: r,
                              onGameSheetOpened: c,
                              onGameSheetClosed: u,
                          }))
                        : x && (A = (0, s.jsx)(em, { quest: o, sourceQuestContent: t })),
            null == A ? null : (0, s.jsx)("div", { className: ed.lO, children: A })
        );
    };
function eC(e) {
    return (0, s.jsx)(eA, { ...e, popoutTargetElementRef: e.parentContainerRef });
}
var eE = n(106778),
    ev = n(536283),
    eT = n(947638);
let ej = (e) => {
    let { overlayRef: t, progressBarRef: n, isHovered: i } = e,
        { quest: u, isExpanded: d } = l.useContext(B),
        { expansionSpring: h } = l.useContext(F),
        { completionSpring: p, startCompletionAnimation: f } = (function () {
            let [{ spring: e }, t] = (0, z.z)(() => ({ spring: 0 }), "animate-always");
            return {
                completionSpring: e,
                startCompletionAnimation: l.useCallback(() => {
                    t({ spring: 1 }), t({ spring: 0, delay: 2e3 });
                }, [t]),
            };
        })(),
        g = u.userStatus?.completedAt != null,
        x = l.useRef(!1),
        A = (0, o.bG)([Q.A], () => Q.A.useReducedMotion),
        C = l.useRef(null),
        E = (0, o.bG)([m.A], () => m.A.hasLayers()),
        v = (0, c.A)(E),
        [T, j] = l.useState(null),
        [N, _] = l.useState(null),
        S = l.useRef(new eE.OH({ gravity: 0, wind: 0 })),
        R = (0, eE.f9)(T, N),
        y = l.useMemo(() => ["#51BC9D"], []),
        I = l.useCallback(() => {
            if (A) return;
            let e = n.current,
                t = C.current;
            if (null != t && null != e && R.isReady) {
                var s, l, i, a;
                let { x: n, y: r } = e.getBoundingClientRect(),
                    { x: o, y: c } = t.getBoundingClientRect();
                R.createMultipleConfetti(
                    ((s = n - o),
                    (l = r - c),
                    (i = e.clientHeight),
                    (a = e.clientWidth),
                    {
                        ...ev.Mw,
                        position: { type: "static-random", minValue: { x: s, y: l }, maxValue: { x: s + i, y: l + a } },
                        velocity: { type: "static-random", minValue: { x: -20, y: -20 }, maxValue: { x: 20, y: 20 } },
                        opacity: { type: "linear", value: 2, addValue: -0.1 },
                        dragCoefficient: { type: "static", value: 0.166 },
                        size: { type: "static-random", minValue: 2, maxValue: 3 },
                    }),
                    100,
                );
            }
        }, [n, C, R, A]),
        b = (0, c.A)(d);
    return (l.useEffect(() => {
        g && d && !b && (f(), I());
    }, [d, g, f, I, b]),
    l.useEffect(() => {
        g &&
            !E &&
            v &&
            setTimeout(() => {
                f(), I();
            }, 200);
    }, [g, v, E, f, I]),
    l.useEffect(() => {
        R.isReady && (!x.current && g && (f(), I()), (x.current = g));
    }, [g, x, I, f, R]),
    l.useEffect(() => {
        i && g && (f(), I());
    }, [i, g, f, I]),
    A)
        ? null
        : (0, s.jsxs)("div", {
              className: eT.iE,
              "aria-hidden": "true",
              ref: C,
              children: [
                  (0, s.jsx)(r.animated.div, { className: eT.Tp, style: { opacity: (0, U.a)(p) } }),
                  (0, s.jsx)(r.animated.div, { className: a()(eT.sJ, eT.ix), style: { opacity: (0, U.a)(p) } }),
                  (0, s.jsxs)(r.animated.div, {
                      className: eT.KG,
                      style: { transform: h.to({ range: [0, 1], output: [-35, 0] }).to((e) => `translateY(${e}px)`) },
                      children: [
                          (0, s.jsx)(eE.Fk, { ref: j, className: eT.t_, environment: S.current }),
                          (0, s.jsx)(eE.K_, {
                              ref: _,
                              sprites: ["/assets/b909790cf1d80597.svg"],
                              colors: y,
                              spriteWidth: ev.wn,
                              spriteHeight: ev.wn,
                          }),
                          null != t.current &&
                              (0, D.createPortal)(
                                  (0, s.jsx)(r.animated.div, {
                                      className: a()(eT.sJ, eT.d7),
                                      style: { opacity: (0, U.a)(p) },
                                  }),
                                  t.current,
                              ),
                      ],
                  }),
              ],
          });
};
var eN = n(453384),
    e_ = n(460131);
let eS = (e) => {
    let { isExpanded: t, contentLocation: n, progressBarRef: i, percentComplete: a, popoutTargetElementRef: r } = e,
        { quest: o, onGameSheetOpen: c, onGameSheetClose: u, taskDetails: d } = l.useContext(B),
        [h] = (0, g.Qo)(o, d),
        m = (0, el.VX)(o),
        p = (0, el.tH)({
            quest: o,
            isExpanded: t,
            activeScreen: h,
            sourceQuestContent: f.uF.QUEST_BAR_V2,
            popoutTargetElementRef: r,
            onGameSheetOpened: c,
            onGameSheetClosed: u,
        });
    return (0, s.jsxs)("div", {
        className: e_.Z0,
        children: [
            (0, s.jsx)(G, {
                inState: n,
                id: "progress-bar",
                ref: i,
                children: (e) =>
                    (0, s.jsx)(eN.A, {
                        ref: e,
                        style: "small",
                        percentComplete: a,
                        size: 42,
                        children: (0, s.jsx)(W.A, {
                            fullWidth: !0,
                            quest: o,
                            questContent: f.uF.QUEST_BAR_V2,
                            autoplay: !1,
                            sourceQuestContent: f.uF.QUEST_BAR_V2,
                        }),
                    }),
            }),
            (0, s.jsxs)("div", {
                className: e_.NZ,
                children: [
                    (0, s.jsx)(G, {
                        inState: n,
                        id: "progress-title",
                        children: (e) =>
                            (0, s.jsx)(_.E, {
                                ref: e,
                                className: e_.FZ,
                                color: "text-strong",
                                variant: "text-sm/semibold",
                                children: m,
                            }),
                    }),
                    (0, s.jsx)(G, {
                        inState: n,
                        id: "progress-subtitle",
                        isTextTransition: !0,
                        children: (e) =>
                            (0, s.jsx)(_.E, {
                                ref: e,
                                className: e_.FZ,
                                color: "text-subtle",
                                variant: "text-xs/normal",
                                children: p,
                            }),
                    }),
                ],
            }),
        ],
    });
};
var eR = n(78385);
function ey() {
    let { quest: e, onCtxMenuOpen: t, onCtxMenuClose: n, onCtxMenuSelect: i } = l.useContext(B),
        r = (0, g.S5)(e.config.expiresAt);
    return (0, s.jsxs)("div", {
        className: eR.pS,
        children: [
            (0, s.jsx)(_.E, {
                variant: "text-xxs/medium",
                className: a()(eR.Uu, eR.TK),
                children: Z.intl.format(Z.t["pX+fmn"], { expirationDate: r }),
            }),
            (0, s.jsx)(w.C, {
                onOpen: t,
                onClose: n,
                onSelect: i,
                questContent: f.uF.QUEST_BAR_V2,
                quest: e,
                shouldShowDisclosure: !1,
                showShareLink: !0,
                sourceQuestContent: f.uF.QUEST_BAR_V2,
                children: (e) =>
                    (0, s.jsx)(N.D, {
                        ...e,
                        className: eR.rb,
                        "aria-label": Z.intl.string(Z.t.DEoVWZ),
                        children: (0, s.jsx)(y.j, { size: "md", color: "currentColor", className: a()(eR.Bx, eR.U9) }),
                    }),
            }),
        ],
    });
}
var eI = n(249309);
let eb = l.forwardRef(function (e, t) {
    let { className: n, overlayRef: i } = e,
        { expansionSpring: o } = l.useContext(F),
        { quest: c, taskDetails: u, isExpanded: d, isExpansionAnimationComplete: h } = l.useContext(B),
        m = c.userStatus?.completedAt != null,
        p = (0, g.I3)(c),
        x = l.useRef(null),
        A = c.userStatus?.enrolledAt != null,
        C = null != p ? p.percentComplete : u.percentComplete,
        E = l.useRef(null),
        [v, T] = l.useState(!1);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            m && (0, s.jsx)(ej, { overlayRef: i, progressBarRef: x, isHovered: v }),
            (0, s.jsx)(r.animated.div, {
                ref: t,
                "aria-hidden": d && h,
                className: a()(n, eI.hR, { [eI.Ag]: d, [eI.s]: A }),
                style: {
                    opacity: (0, U.a)(o.to({ range: [0, 1], output: [1, 0] })),
                    backgroundImage: m ? `linear-gradient(90deg, ${k}, ${L})` : void 0,
                },
                onMouseEnter: () => T(!0),
                onMouseLeave: () => T(!1),
                children: (0, s.jsxs)("div", {
                    className: eI.o8,
                    children: [
                        m &&
                            (0, s.jsxs)(s.Fragment, {
                                children: [(0, s.jsx)(ey, {}), (0, s.jsx)("div", { className: eI.yF })],
                            }),
                        A
                            ? (0, s.jsx)(eS, {
                                  contentLocation: "collapsed",
                                  progressBarRef: x,
                                  isExpanded: !1,
                                  percentComplete: C,
                              })
                            : null,
                        m &&
                            (0, s.jsx)("div", {
                                ref: E,
                                children: (0, s.jsx)(eC, {
                                    parentContainerRef: E,
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
var eM = n(889137),
    ew = n(417270),
    eO = n(782134),
    eU = n(534514),
    eD = n(825484),
    eP = n(408278),
    ek = n(921853),
    eL = n(607470),
    eF = n(409626),
    eG = n(340124),
    eV = n(405670),
    eB = n(112142),
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
    let { text: t, quest: n, sourceQuestContent: l } = e,
        i = (0, eX.Ut)();
    return (0, s.jsx)(N.D, {
        className: e1.Z0,
        onClick: () => {
            i({
                questId: n.id,
                questContent: f.uF.QUEST_BAR_V2,
                questContentCTA: I.Cy.VIEW_CONSOLE_CONNECTIONS_LINK,
                sourceQuestContent: l,
            }),
                (0, e0.openUserSettings)(eJ.X.CONNECTIONS_PANEL);
        },
        children: (0, s.jsx)(_.E, { "aria-label": t, color: "none", variant: "text-xxs/normal", children: t }),
    });
}
function e3(e) {
    let { xboxAndPlaystationAccounts: t, quest: n, sourceQuestContent: l } = e;
    return t.length > 0
        ? (0, s.jsx)(e2, { text: Z.intl.string(Z.t["qiS+xj"]), quest: n, sourceQuestContent: l })
        : null;
}
function e6(e) {
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(_.E, { color: "text-muted", variant: "text-xs/medium", children: Z.intl.string(Z.t.EJFSvD) }),
            (0, s.jsx)(e3, { ...e }),
        ],
    });
}
var e5 = n(947641),
    e4 = n(629436);
function e8(e) {
    let { children: t, isComplete: n, hasNextStep: l } = e;
    return (0, s.jsxs)("li", {
        className: a()(e4.gY, { [e4.HP]: n }, { [e4.h4]: l }),
        children: [
            (0, s.jsxs)("div", {
                className: e4.cJ,
                children: [
                    (0, s.jsx)("div", {
                        className: e4.$P,
                        children: n && (0, s.jsx)(e5.r, { className: e4.ap, color: R.A.colors.WHITE }),
                    }),
                    l && (0, s.jsx)("div", { className: e4.UK }),
                ],
            }),
            (0, s.jsx)("div", { className: e4.M7, children: t }),
        ],
    });
}
function e7(e) {
    let { children: t } = e;
    return (0, s.jsx)(_.E, { color: "text-muted", variant: "text-xs/medium", children: t });
}
let e9 = function (e) {
    let { children: t, heading: n, steps: l } = e;
    return (0, s.jsxs)("div", {
        className: e4.iE,
        children: [
            (0, s.jsx)("div", {
                className: e4.Mj,
                children: (0, s.jsx)(eU.D, {
                    className: e4.R_,
                    color: "text-strong",
                    variant: "text-xs/semibold",
                    children: n,
                }),
            }),
            (0, s.jsx)("div", {
                className: e4.lp,
                children: (0, s.jsx)("ul", {
                    children: l.map((e, t) =>
                        (0, s.jsx)(
                            e8,
                            { isComplete: e.isComplete, hasNextStep: t < l.length - 1, children: e.renderContent() },
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
    return (0, s.jsx)(_.E, { className: te.eW, color: "text-muted", variant: "text-xxs/normal", children: e.children });
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
        { header: m, renderBody: p } = l.useMemo(() => {
            let e = u.length > 0,
                n = t.config.messages.gameTitle;
            return {
                header: e
                    ? (0, er.ui)(t)
                        ? Z.intl.string(Z.t.N33EuL)
                        : Z.intl.formatToPlainString(Z.t["28Ql27"], { gameTitle: n })
                    : (0, er.ui)(t)
                      ? Z.intl.string(Z.t.YstzGO)
                      : Z.intl.formatToPlainString(Z.t.gX0Qcx, { gameTitle: n }),
                renderBody: e
                    ? () =>
                          (0, s.jsx)(s.Fragment, {
                              children: u.map((e, n) => {
                                  if (e.type === eK._.EXPIRED_CREDENTIAL) {
                                      let l = eY.A.getAccount(e.connected_account_id, e.connected_account_type),
                                          i = (0, M.IG)(e),
                                          a = (0, M.$J)(e);
                                      return (0, s.jsx)(
                                          tt,
                                          {
                                              children: Z.intl.format(i, {
                                                  account_name: l?.name,
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
                                  return (0, s.jsx)(tt, { children: e.message }, n);
                              }),
                          })
                    : () =>
                          (0, s.jsx)(_.E, {
                              className: te.eW,
                              color: "text-muted",
                              variant: "text-xxs/normal",
                              children: (0, er.ui)(t)
                                  ? Z.intl.string(Z.t.bUyEZZ)
                                  : Z.intl.format(Z.t.GXqvC1, { gameTitle: n }),
                          }),
            };
        }, [u, t, c]);
    return (0, s.jsxs)("div", {
        className: te.XK,
        children: [
            (0, s.jsxs)("div", {
                className: te.oK,
                children: [
                    (0, s.jsx)(e$.E, {
                        size: "custom",
                        color: "currentColor",
                        className: 0 === u.length ? te.pH : te.JA,
                        width: 16,
                        height: 16,
                    }),
                    (0, s.jsx)(_.E, { variant: "text-xs/medium", children: m }),
                    (0, s.jsx)(N.D, { className: a()(te.w, { [te.r9]: d }), onClick: () => h(), children: r.render() }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: a()({ [te.Iu]: d }),
                children: [p(), 0 === u.length ? null : (0, s.jsx)(tt, { children: i })],
            }),
        ],
    });
}
let ts = function (e) {
        let { quest: t, taskDetails: n } = e,
            i = (0, o.bG)([Q.A], () => Q.A.useReducedMotion),
            a = (0, g.Du)(),
            r = l.useMemo(
                () => (0, M.bg)(t).filter((e) => a.xboxAndPlaystationAccounts.find((t) => t.type === e)),
                [a.xboxAndPlaystationAccounts, t],
            ),
            {
                steps: c,
                hasConnectedAccounts: u,
                isProgressingQuestForLaunchedGame: d,
                isQuestComplete: h,
            } = l.useMemo(() => {
                let e = r.length > 0,
                    l = e && (0, C.YL)(t),
                    i = t.config.messages.gameTitle,
                    o = t.userStatus?.completedAt != null;
                return {
                    steps: [
                        {
                            renderContent: () =>
                                (0, s.jsx)(e6, { ...a, quest: t, sourceQuestContent: f.uF.QUEST_BAR_V2 }),
                            isComplete: e || l || o,
                        },
                        {
                            renderContent: () =>
                                (0, s.jsx)(e7, {
                                    children: (0, er.ui)(t)
                                        ? Z.intl.string(Z.t["5tXqFe"])
                                        : Z.intl.formatToPlainString(Z.t["+8JB6Y"], { gameTitle: i }),
                                }),
                            isComplete: l || o,
                        },
                        {
                            renderContent: () =>
                                (0, s.jsx)(e7, {
                                    children: Z.intl.formatToPlainString(Z.t.HhfrYS, { numMinutes: n.targetMinutes }),
                                }),
                            isComplete: o,
                        },
                    ],
                    hasConnectedAccounts: e,
                    isProgressingQuestForLaunchedGame: l,
                    isQuestComplete: o,
                };
            }, [a, r.length, t, n.targetMinutes]);
        return (0, s.jsx)(e9, {
            heading: Z.intl.string(Z.t.UPWlJu),
            steps: c,
            children: u && !d && !h && (0, s.jsx)(tn, { useReducedMotion: i, quest: t }),
        });
    },
    tl = l.createContext({ springConfig: {}, isExpanded: !1 });
function ti(e) {
    let t = l.useMemo(
        () => ({ springConfig: e.springConfig, isExpanded: e.isExpanded }),
        [e.springConfig, e.isExpanded],
    );
    return (0, s.jsx)(tl.Provider, { value: t, children: e.children });
}
function ta(e) {
    let { children: t } = e,
        { springConfig: n, isExpanded: i } = l.useContext(tl),
        a = (0, o.bG)([Q.A], () => Q.A.useReducedMotion),
        { ref: u, height: d = null } = (0, P.Ay)(),
        h = (0, c.A)(d) ?? null,
        [{ height: m }, p] = (0, z.z)(() => ({ from: { height: 0 }, config: n }));
    return (
        l.useLayoutEffect(() => {
            null !== d && p({ height: d, immediate: !i || a || null === h });
        }, [d, p, i, a, h]),
        (0, s.jsx)(r.animated.div, {
            style: { height: null === h ? "auto" : m, overflow: "hidden" },
            children: (0, s.jsx)("div", { style: { overflow: "hidden" }, ref: u, children: t }),
        })
    );
}
n(134528), n(947204);
var tr = n(909714);
function to(e) {
    let { header: t, children: n } = e;
    return (0, s.jsxs)("div", {
        className: tr.Nr,
        children: [
            (0, s.jsxs)("div", {
                className: tr.wx,
                children: [
                    (0, s.jsx)(e$.E, {
                        size: "custom",
                        color: "currentColor",
                        className: tr.Kk,
                        width: 16,
                        height: 16,
                    }),
                    (0, s.jsx)(eU.D, { color: "text-default", variant: "heading-sm/medium", children: t }),
                ],
            }),
            (0, s.jsx)(_.E, { color: "text-muted", variant: "text-xs/normal", className: tr.r2, children: n }),
        ],
    });
}
let tc = function (e) {
    let { quest: t } = e,
        n = (0, g.aC)(t);
    if (0 === n.length) return null;
    let l = n.at(0);
    return l === Z.intl.string(Z.t.BV6xDm)
        ? (0, s.jsx)(to, { header: Z.intl.string(Z.t.onh6ct), children: Z.intl.string(Z.t.arVHRA) })
        : l === Z.intl.string(Z.t.MFGxFM)
          ? (0, s.jsx)(to, { header: Z.intl.string(Z.t.JPihZA), children: Z.intl.string(Z.t.MFGxFM) })
          : null;
};
var tu = n(31300),
    td = n(687966),
    th = n(825807);
let tm = function (e) {
    let { onDesktop: t, onConsole: n } = e;
    return (0, s.jsxs)(eD.e, {
        direction: "vertical",
        fullWidth: !0,
        className: th.G,
        size: "sm",
        children: [
            (0, s.jsx)(ee.$, {
                onClick: t,
                text: Z.intl.string(Z.t["QXc01+"]),
                variant: "secondary",
                icon: tu.k,
                iconPosition: "end",
            }),
            (0, s.jsx)(ee.$, {
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
let tg = l.forwardRef(function (e, t) {
    let { isHovered: n, asset: i, poster: a, className: r, autoPlay: c = !1 } = e,
        { isExpanded: u } = l.useContext(B),
        d = (0, o.bG)([Q.A], () => Q.A.useReducedMotion),
        h = l.useRef(null);
    return (
        l.useEffect(() => {
            null != h.current && (u && (!d || n) ? ((h.current.currentTime = 0), h.current.play()) : h.current.pause());
        }, [h, u, n, d]),
        (0, eZ.A)(h, tp.rE.QUESTS_BAR),
        (0, s.jsx)(eL.A, {
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
            children: (0, s.jsx)("source", { src: i.url, type: i.mimetype ?? void 0 }),
        })
    );
});
function tx(e) {
    let { onClick: t } = e,
        { quest: n } = l.useContext(B),
        i = (0, o.bG)([Q.A], () => Q.A.useReducedMotion),
        [r, c] = l.useState(!1),
        u = (0, eH.tW)(n, eH.fY.QUEST_BAR_HERO_VIDEO, void 0, !1),
        d = (0, eH.tW)(n, eH.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1),
        h = (0, eV.Kr)((e) => e.getVideoProgressState)(n.id),
        m = n.userStatus?.completedAt != null && h === eV.K2.COMPLETED,
        p = !m && (!i || r);
    return (0, s.jsxs)(N.D, {
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
                (0, s.jsx)(E.Sn, {
                    id: "QuestBarContentExpanded_videoThumbnail",
                    children: (e) => (0, s.jsx)("img", { ref: e, alt: "", src: d.url, className: tf.Ue }),
                }),
            null != u
                ? (0, s.jsx)(E.Sn, {
                      id: "QuestBarContentExpanded_video",
                      children: (e) =>
                          (0, s.jsx)(tg, {
                              ref: e,
                              isHovered: r,
                              autoPlay: !1,
                              asset: u,
                              poster: d?.url,
                              className: a()(tf.NM, { [tf.Gc]: p }),
                          }),
                  })
                : null,
            (0, s.jsx)("div", {
                className: tf.LT,
                children: m
                    ? (0, s.jsx)(ew.m, { color: R.A.colors.WHITE, className: tf.t })
                    : (0, s.jsx)(eO.u, { color: R.A.colors.WHITE, className: tf.t }),
            }),
        ],
    });
}
function tA(e) {
    let { quest: t } = e;
    return (0, s.jsx)(W.A, {
        className: a()(tf.Qq, tf.wq),
        learnMoreStyle: "text",
        quest: t,
        questContent: f.uF.QUEST_BAR_V2,
        sourceQuestContent: f.uF.QUEST_BAR_V2,
    });
}
function tC(e) {
    let { isInteractable: t, containerRef: n, onAcceptQuest: i } = e,
        { quest: c, onGameSheetOpen: u, onGameSheetClose: d, taskDetails: h } = l.useContext(B),
        { expansionSpring: m } = l.useContext(F),
        x = l.useRef(null),
        A = (0, o.bG)([p.A], () => p.A.isEnrolling(c.id), [c]),
        C = l.useMemo(() => (0, eH.tW)(c, eH.fY.QUEST_BAR_HERO), [c]),
        v = (0, el.NA)({ quest: c }),
        T = l.useMemo(() => (0, eH.tW)(c, eH.fY.HERO_IMAGE), [c]),
        N = l.useMemo(() => (null == T ? {} : { backgroundImage: `url(${T.url})` }), [T]),
        S = eB.t.useConfig({ location: tp.rE.QUESTS_BAR }),
        R = (0, el.mU)({
            quest: c,
            location: tp.rE.QUESTS_BAR,
            questContent: f.uF.QUEST_BAR_V2,
            taskDetails: h,
            sourceQuestContent: f.uF.QUEST_BAR_V2,
            popoutTargetElementRef: x,
            onGameSheetOpened: u,
            onGameSheetClosed: d,
            gameProfileSource: eF.Ob.QuestBar,
        }),
        y = (0, eq.Pd)(c),
        I = (0, g.SD)(c),
        b = (0, g.Oq)(),
        M = b && I;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)("div", {
                ref: x,
                children: (0, s.jsxs)("div", {
                    className: tf.do,
                    ref: n,
                    children: [
                        (0, s.jsxs)("div", {
                            className: tf.zH,
                            children: [
                                (0, s.jsx)(tA, { quest: c }),
                                (0, s.jsx)(eU.D, {
                                    className: tf.DD,
                                    color: "text-strong",
                                    variant: "heading-md/medium",
                                    children: Z.intl.format(Z.t.EQa7os, { questName: c.config.messages.questName }),
                                }),
                                (0, s.jsxs)("div", {
                                    className: tf.zf,
                                    children: [
                                        (0, s.jsx)(_.E, { className: tf.h_, variant: "text-xs/normal", children: R }),
                                        I && (0, s.jsx)(eW.e, { questId: c.id, canUseQuestOrbMultiplier: b }),
                                    ],
                                }),
                            ],
                        }),
                        (0, s.jsx)("div", {
                            className: tf.lO,
                            children: (0, s.jsx)(eD.e, {
                                direction: "horizontal",
                                fullWidth: !0,
                                wrap: !1,
                                children:
                                    S.enabled && y === eq.UA.UNENROLLED && S.enabledQuestStates.has(eq.UA.UNENROLLED)
                                        ? (0, s.jsx)(ez.A, {
                                              quest: c,
                                              surface: eq.V3.QUEST_BAR_FOOTER,
                                              size: "sm",
                                              analyticsCtxQuestContent: f.uF.QUEST_BAR_V2,
                                              analyticsCtxSourceQuestContent: f.uF.QUEST_BAR_V2,
                                          })
                                        : (0, s.jsx)(ee.$, {
                                              onClick: t ? i : void 0,
                                              variant: "primary",
                                              loading: A,
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
            (0, s.jsx)(eQ.A, { visible: M, glow: !0, className: tf.Ph }),
            null != T &&
                (0, s.jsx)(r.animated.div, {
                    className: tf.AK,
                    style: { opacity: (0, U.a)(m.to([0, 1], [1, 0])) },
                    children: (0, s.jsx)("div", { className: a()(tf.LC, tf.Ge), style: N }),
                }),
            (0, s.jsxs)(r.animated.div, {
                className: tf.IC,
                style: {
                    backdropFilter: (0, U.Q)(m.to([0, 1], [5, 0]).to((e) => `blur(${e}px)`)),
                    filter: (0, U.Q)(m.to([0, 1], [0.8, 1]).to((e) => `brightness(${e})`)),
                },
                children: [
                    C.isAnimated
                        ? (0, s.jsx)(E.Sn, {
                              id: "QuestBarContentExpanded_heroAnimated",
                              children: (e) => (0, s.jsx)(tg, { ref: e, autoPlay: !0, asset: C, className: tf.LO }),
                          })
                        : (0, s.jsx)(E.Sn, {
                              id: "QuestBarContentExpanded_heroStatic",
                              children: (e) => (0, s.jsx)("img", { ref: e, alt: "", className: tf.LO, src: C.url }),
                          }),
                    (0, s.jsx)("div", { className: tf.tV }),
                ],
            }),
        ],
    });
}
function tE(e) {
    let { activeScreen: t, selectPlatform: n } = e,
        { quest: i, taskDetails: a } = l.useContext(B);
    return (0, eM.YW)(t)
        .with(f.X0.SELECT, () =>
            (0, s.jsx)(tm, { onConsole: () => n(tp.fO.CONSOLE), onDesktop: () => n(tp.fO.DESKTOP) }),
        )
        .with(f.X0.DESKTOP, () => (0, s.jsx)(tc, { quest: i }))
        .with(f.X0.CONSOLE, () => (0, s.jsx)(ts, { quest: i, taskDetails: a }))
        .exhaustive();
}
function tv(e) {
    let { parentContainerRef: t } = e,
        { quest: n, taskDetails: i } = l.useContext(B),
        [a, r, o] = (0, g.Qo)(n, i),
        c = i.percentComplete > 0,
        u = (0, g.Vn)(n),
        d = (0, g.RR)({ quest: n }),
        h = r.length > 1 && !c && !u;
    return (0, s.jsxs)(ta, {
        children: [
            (0, s.jsx)(tE, { activeScreen: a, selectPlatform: o }),
            a !== f.X0.SELECT &&
                (0, s.jsxs)("div", {
                    className: tf.oG,
                    children: [
                        h &&
                            (0, s.jsx)(eP.K, {
                                size: "sm",
                                "aria-label": Z.intl.string(Z.t["13/7kX"]),
                                onClick: () => o(null),
                                icon: ek.n,
                                variant: "secondary",
                            }),
                        (0, s.jsx)(eC, {
                            awaitingConsoleConnections: d,
                            parentContainerRef: t,
                            hasMadeProgress: c,
                            isProgressing: u,
                            sourceQuestContent: f.uF.QUEST_BAR_V2,
                        }),
                    ],
                }),
        ],
    });
}
function tT(e) {
    let { parentContainerRef: t } = e,
        { quest: n, taskDetails: i } = l.useContext(B),
        a = i.percentComplete > 0,
        r = (0, g.Vn)(n),
        o = l.useCallback(() => {
            (0, j.d5)({
                quest: n,
                questContent: f.uF.QUEST_BAR_V2,
                sourceQuestContent: f.uF.QUEST_BAR_V2,
                sourceQuestContentCTA: I.Cy.QUEST_BAR_VIDEO_QUEST_PREVIEW,
            });
        }, [n]);
    return (0, s.jsxs)(ta, {
        children: [
            (0, s.jsx)(tx, { onClick: o }),
            (0, s.jsx)(eC, {
                parentContainerRef: t,
                awaitingConsoleConnections: !1,
                hasMadeProgress: a,
                isProgressing: r,
                sourceQuestContent: f.uF.QUEST_BAR_V2,
            }),
        ],
    });
}
function tj(e) {
    let { parentContainerRef: t } = e,
        { quest: n, taskDetails: i } = l.useContext(B),
        a = i.percentComplete > 0,
        r = (0, g.Vn)(n);
    return (0, s.jsx)(ta, {
        children: (0, s.jsx)(eC, {
            parentContainerRef: t,
            awaitingConsoleConnections: !1,
            hasMadeProgress: a,
            isProgressing: r,
            sourceQuestContent: f.uF.QUEST_BAR_V2,
        }),
    });
}
function tN(e) {
    let { parentContainerRef: t } = e,
        { quest: n } = l.useContext(B);
    return (0, C.t)({ quest: n }) || (0, C.g5)(n) || (0, C.fE)({ quest: n })
        ? (0, s.jsx)(tv, { parentContainerRef: t })
        : (0, C.vv)(n)
          ? (0, s.jsx)(tT, { parentContainerRef: t })
          : (0, s.jsx)(tj, { parentContainerRef: t });
}
function t_(e) {
    let { overlayRef: t, containerRef: n } = e,
        { quest: i, taskDetails: o } = l.useContext(B),
        { expansionSpring: c } = l.useContext(F),
        u = l.useRef(null),
        d = l.useRef(null),
        h = (0, g.I3)(i),
        m = null != h ? h.percentComplete : o.percentComplete;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(r.animated.div, {
                className: a()(tf.tv, tf.ag),
                style: {
                    backgroundImage: `linear-gradient(90deg, ${k}, ${L})`,
                    opacity: (0, U.a)(c.to({ range: [0, 1], output: [1, 0] })),
                },
            }),
            (0, s.jsxs)("div", {
                className: tf.Fe,
                ref: (e) => {
                    "function" == typeof n ? n(e) : null != n && (n.current = e), null != e && (d.current = e);
                },
                children: [
                    (0, s.jsx)(ey, {}),
                    (0, s.jsx)("div", { className: tf.yF }),
                    (0, s.jsx)(ej, { overlayRef: t, progressBarRef: u, isHovered: !1 }),
                    (0, s.jsx)(eS, {
                        contentLocation: "expanded",
                        progressBarRef: u,
                        isExpanded: !0,
                        percentComplete: m,
                        popoutTargetElementRef: d,
                    }),
                    (0, s.jsx)(tN, { parentContainerRef: d }),
                ],
            }),
            (0, s.jsx)("div", {
                className: a()(tf.tv, tf.Sx),
                style: { backgroundImage: `linear-gradient(90deg, ${k}, ${L})` },
            }),
        ],
    });
}
async function tS(e, t, n, s) {
    (0, C.vv)(e)
        ? await (0, j.e0)(e, { questContent: t, questContentCTA: n, sourceQuestContent: s, sourceQuestContentCTA: n })
        : (0, er.vA)(e)
          ? await (0, eG.Oy)(e.id, { questContent: t, questContentCTA: n, sourceQuestContent: s })
          : (0, eG.Oy)(e.id, { questContent: t, questContentCTA: n, sourceQuestContent: s });
}
let tR = l.forwardRef(function (e, t) {
    let { children: n, className: i, overlayRef: o } = e,
        { collapsedHeight: c, isExpanded: u, isExpansionAnimationComplete: d, quest: h } = l.useContext(B),
        { expansionSpring: m } = l.useContext(F),
        { launchInGameActivity: p } = (0, g.zW)(h),
        x = (0, er.vA)(h),
        A = l.useCallback(async () => {
            let e = x ? I.Cy.START_QUEST : I.Cy.ACCEPT_QUEST;
            await tS(h, f.uF.QUEST_BAR_V2, e, f.uF.QUEST_BAR_V2), x && p();
        }, [h, p, x]),
        C = h.userStatus?.enrolledAt != null,
        E = u && d;
    return (0, s.jsxs)(r.animated.div, {
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
            (0, s.jsx)(r.animated.div, {
                style: { opacity: 1 },
                children: C
                    ? (0, s.jsx)(t_, { overlayRef: o, containerRef: t })
                    : (0, s.jsx)(tC, { isInteractable: E, containerRef: t, onAcceptQuest: A }),
            }),
        ],
    });
});
var ty = n(717695);
function tI() {
    let {
            expansionSpring: e,
            animatedComponentProps: t,
            recalculateAnimationPositions: n,
            mountPoints: i,
        } = l.useContext(F),
        { isExpanded: a } = l.useContext(B);
    return (
        l.useEffect(() => {
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
                let { id: n, collapsedLeft: l, expandedLeft: a, collapsedTop: o, expandedTop: c, width: u } = t,
                    d = i.get(n);
                return (0, s.jsx)(
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
                                [e.to({ range: [0, 1], output: [l, a] }), e.to({ range: [0, 1], output: [o, c] })],
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
var tb = n(561844),
    tM = n(652215),
    tw = n(731738),
    tO = n(807393),
    tU = n(260364),
    tD = n(737595);
function tP(e) {
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
function tk() {
    return (
        l.useEffect(() => {
            h.trigger();
        }, []),
        null
    );
}
function tL(e) {
    let { quest: t } = e,
        n = (0, A.L)({ quest: t, location: tp.rE.QUESTS_BAR }),
        i = (0, x.s)(),
        u = (0, o.bG)([p.A], () => null != p.A.questEnrollmentBlockedUntil),
        { isQuestBarVisible: d, reason: h } = (0, T.TQ)({ quest: t }),
        N = (0, o.bG)([m.A], () => m.A.hasLayers()),
        _ = l.useRef(null),
        S = l.useMemo(() => (0, C.vv)(t), [t]),
        R = t.id,
        y = t.userStatus?.enrolledAt != null,
        b = (0, c.A)(y),
        M = t.userStatus?.completedAt != null,
        { hasError: w, isLoading: O } = (0, E.Gk)(),
        U = l.useContext(ty.Z) || (i && d && !O && !u),
        {
            isExpanded: D,
            setIsExpanded: P,
            expandQuestBar: k,
            isExpansionAnimationComplete: L,
            isVisibilityAnimationAtRest: F,
            expansionSpring: G,
            visibilitySpring: B,
            springConfig: W,
        } = (function (e) {
            let { isQuestAccepted: t, isQuestCompleted: n, isQuestBarVisible: s } = e,
                i = (0, o.bG)([Q.A], () => Q.A.useReducedMotion),
                [a, r] = l.useState(!1),
                [c, u] = l.useState(!0),
                [d, h] = l.useState(!0),
                m = l.useRef(s),
                p = l.useCallback(
                    (e) => {
                        n || (u(!1), r(e));
                    },
                    [n],
                ),
                f = l.useCallback(() => {
                    p(!0);
                }, [p]),
                g = l.useCallback(() => {
                    p(!1);
                }, [p]),
                x = t ? tp.ZV : tp.Ko,
                [{ expansionSpring: A }, C] = (0, z.z)(() => ({
                    from: { expansionSpring: 0 },
                    config: x,
                    onRest: () => {
                        u(!0);
                    },
                    onStart: () => {
                        u(!1);
                    },
                }));
            l.useEffect(() => {
                C({ expansionSpring: +!!a, immediate: i });
            }, [a, C, i]);
            let { visibilitySpring: E } = (0, z.z)({
                from: { visibilitySpring: 0 },
                to: { visibilitySpring: +!!s },
                config: { tension: 250, friction: 10, clamp: !0 },
                onRest: () => {
                    h(!0);
                },
                onStart: () => {
                    h(!1);
                },
            });
            return (
                l.useLayoutEffect(() => {
                    s !== m.current && h(!1), (m.current = s);
                }, [s]),
                {
                    isExpanded: a,
                    setIsExpanded: p,
                    expandQuestBar: f,
                    collapseQuestBar: g,
                    isExpansionAnimationComplete: c,
                    isVisibilityAnimationAtRest: d,
                    expansionSpring: A,
                    visibilitySpring: E,
                    springConfig: x,
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
                    setIsExpanded: s,
                    expandQuestBar: i,
                    isQuestCompleted: a,
                    isQuestAccepted: r,
                    prevIsQuestAccepted: o,
                    impressionRef: c,
                } = e,
                u = l.useRef(-1),
                d = l.useRef(!1),
                [h, m] = l.useState(!1),
                [p, g] = l.useState(!1),
                x = l.useCallback(() => {
                    m(!0);
                }, []),
                A = l.useCallback(() => {
                    m(!1), d.current || a || s(!1);
                }, [a, s]),
                C = l.useCallback(() => {
                    m(!1), a || s(!1), (d.current = !1);
                }, [a, s]),
                E = l.useCallback(() => {
                    g(!0);
                }, []),
                v = l.useCallback(() => {
                    g(!1), s(!1);
                }, [s]),
                T = l.useCallback(
                    function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (n) return;
                        let { withDelay: t = !1 } = e;
                        t ? (u.current = window.setTimeout(i, 75)) : i();
                    },
                    [i, n],
                ),
                j = l.useCallback(() => {
                    T();
                }, [T]),
                N = l.useCallback(() => {
                    window.clearTimeout(u.current), h || p || d.current || s(!1);
                }, [h, p, s]),
                _ = l.useCallback(() => {
                    (0, tb.av)({
                        questId: t.id,
                        event: tM.HAw.QUEST_HOVER,
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
                S = l.useCallback(() => {
                    (0, tb.av)({
                        questId: t.id,
                        event: tM.HAw.QUEST_HOVER_OFF,
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
                l.useEffect(() => {
                    p && S();
                }, [p, S]),
                l.useLayoutEffect(() => {
                    r && !o && d.current && i();
                }, [i, r, o]),
                l.useLayoutEffect(() => {
                    a || !r || o || d.current || s(!1);
                }, [r, a, o, s]),
                {
                    ctxMenuOpen: h,
                    gameSheetOpen: p,
                    handleCtxMenuOpened: x,
                    handleCtxMenuClosed: A,
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
            isEligibleForQuests: s,
            isQuestBarVisible: i,
            isVisibilityAnimationAtRest: a,
            isLoadingAssets: r,
            currentQuestVisibleReason: o,
            shouldShowQuestBar: c,
            isQuestEnrollmentBlocked: u,
            impressionRef: d,
        } = e;
        l.useEffect(() => {
            n &&
                ((0, tb.av)({
                    questId: t.id,
                    event: tM.HAw.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        content_id: f.uF.QUEST_BAR,
                        content_name: (0, I.jO)(f.uF.QUEST_BAR),
                        reason: "asset_loading_error",
                        impression_id: d.current?.getId(),
                    },
                    sourceQuestContent: f.uF.QUEST_BAR_V2,
                }),
                tO.A.increment({
                    name: tw.K.QUEST_CONTENT_RENDERING_FAILURE,
                    tags: [
                        `quest_id:${t.id}`,
                        `quest_content:${(0, I.jO)(f.uF.QUEST_BAR)}`,
                        "reason:asset_loading_error",
                    ],
                }));
        }, [n, d, t.id]),
            l.useEffect(() => {
                s ||
                    (0, tb.av)({
                        questId: t.id,
                        event: tM.HAw.QUEST_CONTENT_RENDERING_FAILURE,
                        properties: {
                            content_id: f.uF.QUEST_BAR,
                            content_name: (0, I.jO)(f.uF.QUEST_BAR),
                            reason: "not_eligible_for_quest",
                            impression_id: d.current?.getId(),
                        },
                        sourceQuestContent: f.uF.QUEST_BAR_V2,
                    });
            }, [s, d, t.id]),
            l.useEffect(() => {
                i ||
                    !a ||
                    r ||
                    (0, tb.av)({
                        questId: t.id,
                        event: tM.HAw.QUEST_CONTENT_RENDERING_FAILURE,
                        properties: {
                            content_id: f.uF.QUEST_BAR,
                            content_name: (0, I.jO)(f.uF.QUEST_BAR),
                            reason: o,
                            impression_id: d.current?.getId(),
                        },
                        sourceQuestContent: f.uF.QUEST_BAR_V2,
                    });
            }, [i, a, r, t.id, o, d]),
            l.useEffect(() => {
                (!c || u) && tU.A.clearTracking(), i && a && !r && !n && s && tU.A.stopTracking(t.id);
            }, [c, u, i, a, r, n, s, t.id]);
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
    let es = l.useRef(null),
        el = l.useRef(null),
        ei = l.useRef(null),
        ea = (0, g.fc)(t),
        er = (0, g.UH)(t);
    if (
        (l.useEffect(() => {
            S && (0, j.l9)();
        }, [S]),
        !i || (!U && F && !O) || w)
    )
        return w ? n.log("Not rendered due to asset error") : i || n.log("Not rendered due to ineligibility"), null;
    let eo = 70 + 78 * !!M;
    return (0, s.jsx)(v.R, {
        questOrQuests: t,
        questContent: f.uF.QUEST_BAR_V2,
        overrideVisibility: !N && U,
        onImpression: er,
        sourceQuestContent: f.uF.QUEST_BAR_V2,
        children: (e, n) => (
            (_.current = n.current),
            (0, s.jsxs)("div", {
                className: tD.dK,
                children: [
                    U &&
                        (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)(tP, { questId: R, isExpanded: D }), (0, s.jsx)(tk, {})],
                        }),
                    (0, s.jsx)(r.animated.div, {
                        "aria-hidden": !U,
                        onMouseLeave: en,
                        onMouseEnter: et,
                        onFocus: X,
                        onBlur: ee,
                        className: a()(tD.iE, { [tD.Xc]: !U, [tD.uv]: U && F }),
                        style: { height: B.to({ range: [0, 1], output: [0, eo] }) },
                        children: (0, s.jsx)(r.animated.div, {
                            className: a()(tD.FG, { [tD.E$]: D, [tD.KA]: y }),
                            children: (0, s.jsx)(ti, {
                                springConfig: W,
                                isExpanded: D,
                                children: (0, s.jsx)(V, {
                                    expandedContentRef: es,
                                    collapsedContentRef: el,
                                    expansionSpring: G,
                                    children: (0, s.jsxs)(H, {
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
                                            (0, s.jsx)(
                                                eb,
                                                { ref: el, className: tD.Qs, overlayRef: ei },
                                                M ? "collapsed-with-rewards" : "collapsed-without-rewards",
                                            ),
                                            (0, s.jsx)(tR, {
                                                className: tD.Qs,
                                                overlayRef: ei,
                                                ref: es,
                                                children: (0, s.jsxs)(s.Fragment, {
                                                    children: [(0, s.jsx)(tI, {}), !y && (0, s.jsx)(J, {})],
                                                }),
                                            }),
                                            (0, s.jsx)("div", { ref: ei, className: tD.Lw }),
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
let tF =
    21552 == n.j
        ? function () {
              let e = (0, T.dN)();
              return null == e
                  ? null
                  : (0, s.jsx)(
                        E.jY,
                        { source: tp.rE.QUESTS_BAR, questId: e.id, children: (0, s.jsx)(tL, { quest: e }) },
                        e.id,
                    );
          }
        : null;
