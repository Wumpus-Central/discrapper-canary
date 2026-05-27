n.d(t, { A: () => tq, Y: () => tz });
var l = n(627968),
    s = n(64700),
    i = n(503698),
    a = n.n(i),
    r = n(873174),
    o = n(17928),
    u = n(475743),
    c = n(840251),
    d = n(688151);
let h = new c.E([], d.$G.QUEST_BAR_RENDERED, { location: "quest bar rendered" });
var m = n(186111),
    p = n(859703),
    f = n(507107),
    g = n(31587),
    A = n(971276),
    x = n(851936),
    C = n(792620),
    v = n(241124),
    E = n(73473),
    T = n(371912),
    j = n(617986),
    _ = n(939249),
    N = n(834730),
    S = n(290136),
    R = n(661531),
    y = n(365199),
    I = n(590202),
    b = n(971649),
    M = n(901406),
    w = n(270045),
    U = n(57718),
    O = n(398025);
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
                recalculateAnimationPositions: u,
                registerComponent: c,
                unregisterComponent: d,
                expansionSpring: h,
                mountPoints: m,
            } = s.useContext(F),
            p = s.useRef(null),
            f = s.useRef(null),
            g = s.useRef(void 0);
        s.useEffect(() => {
            u();
        }, [u]),
            s.useLayoutEffect(() => {
                let e = p.current;
                return (
                    null != e && c(e, i, a),
                    () => {
                        null != e && d(i, a);
                    }
                );
            }, [i, a, c, d]);
        let A = s.useCallback(
            (e) => {
                let { height: t } = e;
                g.current !== t && (u(), (g.current = t));
            },
            [u],
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
                                            opacity: (0, O.a)(h.to({ range: [0, 1], output: [1, 0] })),
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
                                            opacity: (0, O.a)(h.to({ range: [0, 1], output: [0, 1] })),
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
    V = (e) => {
        let { children: t, expandedContentRef: n, collapsedContentRef: i, expansionSpring: a } = e,
            [r, o] = s.useState({}),
            [u, c] = s.useState([]),
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
                        u = l.getBoundingClientRect(),
                        c = i.current.getBoundingClientRect(),
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
            }, [r, n, i, c]);
        return (0, l.jsx)(F.Provider, {
            value: {
                registerComponent: m,
                unregisterComponent: p,
                animatedComponents: r,
                expandedContentRef: n,
                collapsedContentRef: i,
                recalculateAnimationPositions: f,
                animatedComponentProps: u,
                expansionSpring: a,
                mountPoints: d,
            },
            children: t,
        });
    },
    B = s.createContext({
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
                onGameSheetOpen: u,
                onGameSheetClose: c,
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
                    onGameSheetOpen: u,
                    onGameSheetClose: c,
                    collapsedHeight: d,
                    quest: h,
                    taskDetails: m,
                }),
                [n, i, a, r, o, u, c, d, h, m],
            );
        return (0, l.jsx)(B.Provider, { value: p, children: t });
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
let Y = (e) => {
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
        u = (0, o.bG)([Q.A], () => Q.A.useReducedMotion),
        { quest: c } = s.useContext(B),
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
                    quest: c,
                    questContent: f.uF.QUEST_BAR_V2,
                    autoplay: t && !u,
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
                        style: { opacity: (0, O.a)(d.to({ range: [0, 1], output: [i ? 1 : 0.7, 0] })) },
                        children: (0, l.jsx)(N.E, {
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
var $ = n(173839);
let X = (0, r.animated)(U.Ay),
    J = () => {
        let e = (0, b.go)(),
            { expansionSpring: t } = s.useContext(F),
            {
                onCtxMenuOpen: n,
                onCtxMenuClose: i,
                onCtxMenuSelect: o,
                isExpanded: u,
                isExpansionAnimationComplete: c,
                quest: d,
            } = s.useContext(B),
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
            p = u && c,
            g = (0, l.jsx)(_.D, {
                onClick: m,
                className: a()($.vk, { [$.wm]: p }),
                children: (0, l.jsx)(X, {
                    quest: d,
                    withGameTile: !1,
                    logotypeClassName: $.Iu,
                    logotypeStyle: {
                        height: 24,
                        maxWidth: 92,
                        transform: (0, r.to)([t.to({ range: [0, 1], output: [1, 1] })], (e) => `scale(${e})`),
                    },
                }),
            });
        return (0, l.jsxs)(r.animated.div, {
            className: a()($.iE, $.Ht, { [$.tT]: p }),
            style: { transform: (0, r.to)([t.to({ range: [0, 1], output: [6, 0] })], (e) => `translateY(${e}px)`) },
            children: [
                (0, l.jsx)(r.animated.div, {
                    className: $.Tu,
                    style: { opacity: (0, O.a)(t.to({ range: [0, 1], output: [0, 1] })) },
                }),
                (0, l.jsx)(Y, { isFullyExpanded: p, partnerBranding: g }),
                (0, l.jsxs)(r.animated.div, {
                    className: $.P0,
                    style: { opacity: (0, O.a)(t.to({ range: [0, 1], output: [0, 1] })) },
                    children: [
                        (0, l.jsxs)(_.D, {
                            className: $.y8,
                            onClick: h,
                            children: [
                                (0, l.jsx)(N.E, {
                                    color: "always-white",
                                    variant: "text-xs/normal",
                                    children: Z.intl.string(Z.t.o6FLcF),
                                }),
                                (0, l.jsx)(S.c, { color: R.A.colors.WHITE, className: $.P$ }),
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
                                (0, l.jsx)(_.D, {
                                    ...e,
                                    className: a()($.uJ, $.rb),
                                    "aria-label": Z.intl.string(Z.t.DEoVWZ),
                                    children: (0, l.jsx)(y.j, {
                                        size: "md",
                                        color: "currentColor",
                                        className: a()($.Bx, $.ON),
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
    el = n(859040),
    es = n(629455),
    ei = n(651892),
    ea = n(801365),
    er = n(814793),
    eo = n(753386),
    eu = n(862611),
    ec = n(758836),
    ed = n(519508);
function eh(e) {
    let { quest: t, sourceQuestContent: n, taskDetails: s } = e;
    return (0, l.jsx)(ee.$, {
        variant: "primary",
        fullWidth: !0,
        onClick: () => {
            let e = t.userStatus?.enrolledAt == null ? I.Cy.ACCEPT_QUEST : I.Cy.WATCH_VIDEO;
            (0, j.d5)({ quest: t, questContent: f.uF.QUEST_BAR_V2, sourceQuestContent: n, sourceQuestContentCTA: e });
        },
        size: "sm",
        text: (0, eo.WM)(s),
    });
}
let em = (e) => {
        let { quest: t, sourceQuestContent: n } = e,
            s = (0, b.go)(),
            i = (0, ei.wr)(t);
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
    ep = (e) => {
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
    ef = (e) => {
        let { quest: t } = e,
            n = (0, es.NA)({ quest: t }),
            { launchInGameActivity: s } = (0, g.zW)(t);
        return (0, er.vA)(t)
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
    eg = (e) => {
        let {
                quest: t,
                sourceQuestContent: n,
                taskDetails: s,
                popoutTargetElementRef: i,
                onGameSheetOpened: a,
                onGameSheetClosed: r,
            } = e,
            { applications: o } = s;
        return (0, l.jsx)(eu.A, {
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
    eA = (e) => {
        let { quest: t, ctaLabel: n, onClick: i, questContent: a = f.uF.QUEST_BAR_V2, sourceQuestContent: r, ...o } = e,
            u = (0, T.ix)({ quest: t, questContent: a, sourceQuestContent: r }),
            c = s.useCallback(
                (e) => {
                    i?.(e),
                        (0, ea.ks)(t.config) && t.userStatus?.claimedAt != null
                            ? (0, el.Cz)({
                                  tab: ec.G2.ORBS,
                                  analyticsLocations: [],
                                  analyticsSource: en.A.QUEST_HOME_PAGE,
                              })
                            : u();
                },
                [i, t.config, t.userStatus?.claimedAt, u],
            );
        return (0, l.jsx)(ee.$, {
            fullWidth: !0,
            onClick: c,
            text: n ?? Z.intl.string(Z.t.cfY4PE),
            variant: "primary",
            ...o,
            size: o.size === et.$n.Sizes.MEDIUM ? "md" : "sm",
        });
    },
    ex = (e) => {
        let {
                sourceQuestContent: t,
                awaitingConsoleConnections: n,
                hasMadeProgress: i,
                isProgressing: a,
                popoutTargetElementRef: r,
            } = e,
            { quest: o, onGameSheetOpen: u, onGameSheetClose: c, taskDetails: d } = s.useContext(B),
            [h] = (0, g.Qo)(o, d),
            m = o.userStatus?.completedAt != null,
            p = (0, C.vv)(o),
            A = h !== f.X0.SELECT && !i && !a,
            x = null;
        return (
            m
                ? (x = (0, l.jsx)(eA, { quest: o, sourceQuestContent: t }))
                : p
                  ? (x = (0, l.jsx)(eh, { quest: o, sourceQuestContent: t, taskDetails: d }))
                  : (0, er.vA)(o)
                    ? (x = (0, l.jsx)(ef, { quest: o }))
                    : h === f.X0.CONSOLE && n
                      ? (x = (0, l.jsx)(ep, { quest: o, sourceQuestContent: t }))
                      : A && (0, er.ui)(o)
                        ? (x = (0, l.jsx)(eg, {
                              quest: o,
                              sourceQuestContent: t,
                              taskDetails: d,
                              popoutTargetElementRef: r,
                              onGameSheetOpened: u,
                              onGameSheetClosed: c,
                          }))
                        : A && (x = (0, l.jsx)(em, { quest: o, sourceQuestContent: t })),
            null == x ? null : (0, l.jsx)("div", { className: ed.lO, children: x })
        );
    };
function eC(e) {
    return (0, l.jsx)(ex, { ...e, popoutTargetElementRef: e.parentContainerRef });
}
var ev = n(106778),
    eE = n(536283),
    eT = n(947638);
let ej = (e) => {
    let { overlayRef: t, progressBarRef: n, isHovered: i } = e,
        { quest: c, isExpanded: d } = s.useContext(B),
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
        g = c.userStatus?.completedAt != null,
        A = s.useRef(!1),
        x = (0, o.bG)([Q.A], () => Q.A.useReducedMotion),
        C = s.useRef(null),
        v = (0, o.bG)([m.A], () => m.A.hasLayers()),
        E = (0, u.A)(v),
        [T, j] = s.useState(null),
        [_, N] = s.useState(null),
        S = s.useRef(new ev.OH({ gravity: 0, wind: 0 })),
        R = (0, ev.f9)(T, _),
        y = s.useMemo(() => ["#51BC9D"], []),
        I = s.useCallback(() => {
            if (x) return;
            let e = n.current,
                t = C.current;
            if (null != t && null != e && R.isReady) {
                var l, s, i, a;
                let { x: n, y: r } = e.getBoundingClientRect(),
                    { x: o, y: u } = t.getBoundingClientRect();
                R.createMultipleConfetti(
                    ((l = n - o),
                    (s = r - u),
                    (i = e.clientHeight),
                    (a = e.clientWidth),
                    {
                        ...eE.Mw,
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
        b = (0, u.A)(d);
    return (s.useEffect(() => {
        g && d && !b && (f(), I());
    }, [d, g, f, I, b]),
    s.useEffect(() => {
        g &&
            !v &&
            E &&
            setTimeout(() => {
                f(), I();
            }, 200);
    }, [g, E, v, f, I]),
    s.useEffect(() => {
        R.isReady && (!A.current && g && (f(), I()), (A.current = g));
    }, [g, A, I, f, R]),
    s.useEffect(() => {
        i && g && (f(), I());
    }, [i, g, f, I]),
    x)
        ? null
        : (0, l.jsxs)("div", {
              className: eT.iE,
              "aria-hidden": "true",
              ref: C,
              children: [
                  (0, l.jsx)(r.animated.div, { className: eT.Tp, style: { opacity: (0, O.a)(p) } }),
                  (0, l.jsx)(r.animated.div, { className: a()(eT.sJ, eT.ix), style: { opacity: (0, O.a)(p) } }),
                  (0, l.jsxs)(r.animated.div, {
                      className: eT.KG,
                      style: { transform: h.to({ range: [0, 1], output: [-35, 0] }).to((e) => `translateY(${e}px)`) },
                      children: [
                          (0, l.jsx)(ev.Fk, { ref: j, className: eT.t_, environment: S.current }),
                          (0, l.jsx)(ev.K_, {
                              ref: N,
                              sprites: ["/assets/b909790cf1d80597.svg"],
                              colors: y,
                              spriteWidth: eE.wn,
                              spriteHeight: eE.wn,
                          }),
                          null != t.current &&
                              (0, D.createPortal)(
                                  (0, l.jsx)(r.animated.div, {
                                      className: a()(eT.sJ, eT.d7),
                                      style: { opacity: (0, O.a)(p) },
                                  }),
                                  t.current,
                              ),
                      ],
                  }),
              ],
          });
};
var e_ = n(453384),
    eN = n(460131);
let eS = (e) => {
    let { isExpanded: t, contentLocation: n, progressBarRef: i, percentComplete: a, popoutTargetElementRef: r } = e,
        { quest: o, onGameSheetOpen: u, onGameSheetClose: c, taskDetails: d } = s.useContext(B),
        [h] = (0, g.Qo)(o, d),
        m = (0, es.VX)(o),
        p = (0, es.tH)({
            quest: o,
            isExpanded: t,
            activeScreen: h,
            sourceQuestContent: f.uF.QUEST_BAR_V2,
            popoutTargetElementRef: r,
            onGameSheetOpened: u,
            onGameSheetClosed: c,
        });
    return (0, l.jsxs)("div", {
        className: eN.Z0,
        children: [
            (0, l.jsx)(G, {
                inState: n,
                id: "progress-bar",
                ref: i,
                children: (e) =>
                    (0, l.jsx)(e_.A, {
                        ref: e,
                        style: "small",
                        percentComplete: a,
                        size: 42,
                        children: (0, l.jsx)(W.A, {
                            fullWidth: !0,
                            quest: o,
                            questContent: f.uF.QUEST_BAR_V2,
                            autoplay: !1,
                            sourceQuestContent: f.uF.QUEST_BAR_V2,
                        }),
                    }),
            }),
            (0, l.jsxs)("div", {
                className: eN.NZ,
                children: [
                    (0, l.jsx)(G, {
                        inState: n,
                        id: "progress-title",
                        children: (e) =>
                            (0, l.jsx)(N.E, {
                                ref: e,
                                className: eN.FZ,
                                color: "text-strong",
                                variant: "text-sm/semibold",
                                children: m,
                            }),
                    }),
                    (0, l.jsx)(G, {
                        inState: n,
                        id: "progress-subtitle",
                        isTextTransition: !0,
                        children: (e) =>
                            (0, l.jsx)(N.E, {
                                ref: e,
                                className: eN.FZ,
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
    let { quest: e, onCtxMenuOpen: t, onCtxMenuClose: n, onCtxMenuSelect: i } = s.useContext(B),
        r = (0, g.S5)(e.config.expiresAt);
    return (0, l.jsxs)("div", {
        className: eR.pS,
        children: [
            (0, l.jsx)(N.E, {
                variant: "text-xxs/medium",
                className: a()(eR.Uu, eR.TK),
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
                    (0, l.jsx)(_.D, {
                        ...e,
                        className: eR.rb,
                        "aria-label": Z.intl.string(Z.t.DEoVWZ),
                        children: (0, l.jsx)(y.j, { size: "md", color: "currentColor", className: a()(eR.Bx, eR.U9) }),
                    }),
            }),
        ],
    });
}
var eI = n(249309);
let eb = s.forwardRef(function (e, t) {
    let { className: n, overlayRef: i } = e,
        { expansionSpring: o } = s.useContext(F),
        { quest: u, taskDetails: c, isExpanded: d, isExpansionAnimationComplete: h } = s.useContext(B),
        m = u.userStatus?.completedAt != null,
        p = (0, g.I3)(u),
        A = s.useRef(null),
        x = u.userStatus?.enrolledAt != null,
        C = null != p ? p.percentComplete : c.percentComplete,
        v = s.useRef(null),
        [E, T] = s.useState(!1);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            m && (0, l.jsx)(ej, { overlayRef: i, progressBarRef: A, isHovered: E }),
            (0, l.jsx)(r.animated.div, {
                ref: t,
                "aria-hidden": d && h,
                inert: (!!d && !!h) || void 0,
                className: a()(n, eI.hR, { [eI.Ag]: d, [eI.s]: x }),
                style: {
                    opacity: (0, O.a)(o.to({ range: [0, 1], output: [1, 0] })),
                    backgroundImage: m ? `linear-gradient(90deg, ${k}, ${L})` : void 0,
                },
                onMouseEnter: () => T(!0),
                onMouseLeave: () => T(!1),
                children: (0, l.jsxs)("div", {
                    className: eI.o8,
                    children: [
                        m &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)(ey, {}), (0, l.jsx)("div", { className: eI.yF })],
                            }),
                        x
                            ? (0, l.jsx)(eS, {
                                  contentLocation: "collapsed",
                                  progressBarRef: A,
                                  isExpanded: !1,
                                  percentComplete: C,
                              })
                            : null,
                        m &&
                            (0, l.jsx)("div", {
                                ref: v,
                                children: (0, l.jsx)(eC, {
                                    parentContainerRef: v,
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
    eU = n(782134),
    eO = n(534514),
    eD = n(825484),
    eP = n(408278),
    ek = n(921853),
    eL = n(607470),
    eF = n(409626),
    eG = n(340124),
    eV = n(405670),
    eB = n(112142),
    eH = n(19238),
    eQ = n(646917),
    eW = n(551875),
    ez = n(576761),
    eq = n(895253),
    eZ = n(442734),
    eK = n(192551),
    eY = n(79545),
    e$ = n(139384),
    eX = n(114046),
    eJ = n(695366),
    e0 = n(30370),
    e1 = n(18437),
    e2 = n(780964),
    e3 = n(766075),
    e6 = n(540037);
function e5(e) {
    let { text: t, quest: n, sourceQuestContent: s } = e,
        i = (0, e1.Ut)();
    return (0, l.jsx)(_.D, {
        className: e6.Z0,
        onClick: () => {
            i({
                questId: n.id,
                questContent: f.uF.QUEST_BAR_V2,
                questContentCTA: I.Cy.VIEW_CONSOLE_CONNECTIONS_LINK,
                sourceQuestContent: s,
            }),
                (0, e3.openUserSettings)(e2.X.CONNECTIONS_PANEL);
        },
        children: (0, l.jsx)(N.E, { "aria-label": t, color: "none", variant: "text-xxs/normal", children: t }),
    });
}
function e4(e) {
    let { xboxAndPlaystationAccounts: t, quest: n, sourceQuestContent: s } = e;
    return t.length > 0
        ? (0, l.jsx)(e5, { text: Z.intl.string(Z.t["qiS+xj"]), quest: n, sourceQuestContent: s })
        : null;
}
function e8(e) {
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(N.E, { color: "text-muted", variant: "text-xs/medium", children: Z.intl.string(Z.t.EJFSvD) }),
            (0, l.jsx)(e4, { ...e }),
        ],
    });
}
var e7 = n(947641);
n(287809);
var e9 = n(629436);
function te(e) {
    let { children: t, isComplete: n, hasNextStep: s } = e;
    return (0, l.jsxs)("li", {
        className: a()(e9.gY, { [e9.HP]: n }, { [e9.h4]: s }),
        children: [
            (0, l.jsxs)("div", {
                className: e9.cJ,
                children: [
                    (0, l.jsx)("div", {
                        className: e9.$P,
                        children: n && (0, l.jsx)(e7.r, { className: e9.ap, color: R.A.colors.WHITE }),
                    }),
                    s && (0, l.jsx)("div", { className: e9.UK }),
                ],
            }),
            (0, l.jsx)("div", { className: e9.M7, children: t }),
        ],
    });
}
function tt(e) {
    let { children: t } = e;
    return (0, l.jsx)(N.E, { color: "text-muted", variant: "text-xs/medium", children: t });
}
let tn = function (e) {
    let { children: t, heading: n, steps: s } = e;
    return (0, l.jsxs)("div", {
        className: e9.iE,
        children: [
            (0, l.jsx)("div", {
                className: e9.Mj,
                children: (0, l.jsx)(eO.D, {
                    className: e9.R_,
                    color: "text-strong",
                    variant: "text-xs/semibold",
                    children: n,
                }),
            }),
            (0, l.jsx)("div", {
                className: e9.lp,
                children: (0, l.jsx)("ul", {
                    children: s.map((e, t) =>
                        (0, l.jsx)(
                            te,
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
var tl = n(256023);
function ts(e) {
    return (0, l.jsx)(N.E, { className: tl.eW, color: "text-muted", variant: "text-xxs/normal", children: e.children });
}
function ti(e) {
    let { quest: t, useReducedMotion: n } = e,
        i = (0, T.H1)(t.id, f.uF.QUEST_BAR_V2, f.uF.QUEST_BAR_V2),
        r = (0, T.Xf)({ useReducedMotion: n }),
        o = (0, e1.Ut)(),
        u = (0, b.go)(),
        {
            errorHints: c,
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
            let e = c.length > 0,
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
                          (0, l.jsx)(l.Fragment, {
                              children: c.map((e, n) => {
                                  if (e.type === eX._.EXPIRED_CREDENTIAL) {
                                      let s = e0.A.getAccount(e.connected_account_id, e.connected_account_type),
                                          i = (0, M.IG)(e),
                                          a = (0, M.$J)(e);
                                      return (0, l.jsx)(
                                          ts,
                                          {
                                              children: Z.intl.format(i, {
                                                  account_name: s?.name,
                                                  onClick: () => {
                                                      (0, M.v0)(
                                                          { quest: t, platformType: a },
                                                          {
                                                              content: f.uF.QUEST_BAR,
                                                              ctaContent: I.Cy.DEFIBRILLATOR_RECONNECT_CONSOLE,
                                                              impressionId: u,
                                                              sourceQuestContent: f.uF.QUEST_BAR_V2,
                                                          },
                                                      );
                                                  },
                                              }),
                                          },
                                          n,
                                      );
                                  }
                                  return (0, l.jsx)(ts, { children: e.message }, n);
                              }),
                          })
                    : () =>
                          (0, l.jsx)(N.E, {
                              className: tl.eW,
                              color: "text-muted",
                              variant: "text-xxs/normal",
                              children: (0, er.ui)(t)
                                  ? Z.intl.string(Z.t.bUyEZZ)
                                  : Z.intl.format(Z.t.GXqvC1, { gameTitle: n }),
                          }),
            };
        }, [c, t, u]);
    return (0, l.jsxs)("div", {
        className: tl.XK,
        children: [
            (0, l.jsxs)("div", {
                className: tl.oK,
                children: [
                    (0, l.jsx)(eJ.E, {
                        size: "custom",
                        color: "currentColor",
                        className: 0 === c.length ? tl.pH : tl.JA,
                        width: 16,
                        height: 16,
                    }),
                    (0, l.jsx)(N.E, { variant: "text-xs/medium", children: m }),
                    (0, l.jsx)(_.D, { className: a()(tl.w, { [tl.r9]: d }), onClick: () => h(), children: r.render() }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: a()({ [tl.Iu]: d }),
                children: [p(), 0 === c.length ? null : (0, l.jsx)(ts, { children: i })],
            }),
        ],
    });
}
let ta = function (e) {
        let { quest: t, taskDetails: n } = e,
            i = (0, o.bG)([Q.A], () => Q.A.useReducedMotion),
            a = (0, g.Du)(),
            r = s.useMemo(
                () => (0, M.bg)(t).filter((e) => a.xboxAndPlaystationAccounts.find((t) => t.type === e)),
                [a.xboxAndPlaystationAccounts, t],
            ),
            {
                steps: u,
                hasConnectedAccounts: c,
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
                                (0, l.jsx)(e8, { ...a, quest: t, sourceQuestContent: f.uF.QUEST_BAR_V2 }),
                            isComplete: e || s || o,
                        },
                        {
                            renderContent: () =>
                                (0, l.jsx)(tt, {
                                    children: (0, er.ui)(t)
                                        ? Z.intl.string(Z.t["5tXqFe"])
                                        : Z.intl.formatToPlainString(Z.t["+8JB6Y"], { gameTitle: i }),
                                }),
                            isComplete: s || o,
                        },
                        {
                            renderContent: () =>
                                (0, l.jsx)(tt, {
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
        return (0, l.jsx)(tn, {
            heading: Z.intl.string(Z.t.UPWlJu),
            steps: u,
            children: c && !d && !h && (0, l.jsx)(ti, { useReducedMotion: i, quest: t }),
        });
    },
    tr = s.createContext({ springConfig: {}, isExpanded: !1 });
function to(e) {
    let t = s.useMemo(
        () => ({ springConfig: e.springConfig, isExpanded: e.isExpanded }),
        [e.springConfig, e.isExpanded],
    );
    return (0, l.jsx)(tr.Provider, { value: t, children: e.children });
}
function tu(e) {
    let { children: t } = e,
        { springConfig: n, isExpanded: i } = s.useContext(tr),
        a = (0, o.bG)([Q.A], () => Q.A.useReducedMotion),
        { ref: c, height: d = null } = (0, P.Ay)(),
        h = (0, u.A)(d) ?? null,
        [{ height: m }, p] = (0, z.z)(() => ({ from: { height: 0 }, config: n }));
    return (
        s.useLayoutEffect(() => {
            null !== d && p({ height: d, immediate: !i || a || null === h });
        }, [d, p, i, a, h]),
        (0, l.jsx)(r.animated.div, {
            style: { height: null === h ? "auto" : m, overflow: "hidden" },
            children: (0, l.jsx)("div", { style: { overflow: "hidden" }, ref: c, children: t }),
        })
    );
}
n(134528), n(947204);
var tc = n(909714);
function td(e) {
    let { header: t, children: n } = e;
    return (0, l.jsxs)("div", {
        className: tc.Nr,
        children: [
            (0, l.jsxs)("div", {
                className: tc.wx,
                children: [
                    (0, l.jsx)(eJ.E, {
                        size: "custom",
                        color: "currentColor",
                        className: tc.Kk,
                        width: 16,
                        height: 16,
                    }),
                    (0, l.jsx)(eO.D, { color: "text-default", variant: "heading-sm/medium", children: t }),
                ],
            }),
            (0, l.jsx)(N.E, { color: "text-muted", variant: "text-xs/normal", className: tc.r2, children: n }),
        ],
    });
}
let th = function (e) {
    let { quest: t } = e,
        n = (0, g.aC)(t);
    if (0 === n.length) return null;
    let s = n.at(0);
    return s === Z.intl.string(Z.t.BV6xDm)
        ? (0, l.jsx)(td, { header: Z.intl.string(Z.t.onh6ct), children: Z.intl.string(Z.t.arVHRA) })
        : s === Z.intl.string(Z.t.MFGxFM)
          ? (0, l.jsx)(td, { header: Z.intl.string(Z.t.JPihZA), children: Z.intl.string(Z.t.MFGxFM) })
          : null;
};
var tm = n(31300),
    tp = n(687966),
    tf = n(825807);
let tg = function (e) {
    let { onDesktop: t, onConsole: n } = e;
    return (0, l.jsxs)(eD.e, {
        direction: "vertical",
        fullWidth: !0,
        className: tf.G,
        size: "sm",
        children: [
            (0, l.jsx)(ee.$, {
                onClick: t,
                text: Z.intl.string(Z.t["QXc01+"]),
                variant: "secondary",
                icon: tm.k,
                iconPosition: "end",
            }),
            (0, l.jsx)(ee.$, {
                onClick: n,
                text: Z.intl.string(Z.t["8lAfuB"]),
                variant: "secondary",
                icon: tp._,
                iconPosition: "end",
            }),
        ],
    });
};
var tA = n(190107),
    tx = n(495707);
let tC = s.forwardRef(function (e, t) {
    let { isHovered: n, asset: i, poster: a, className: r, autoPlay: u = !1 } = e,
        { isExpanded: c } = s.useContext(B),
        d = (0, o.bG)([Q.A], () => Q.A.useReducedMotion),
        h = s.useRef(null);
    return (
        s.useEffect(() => {
            null != h.current && (c && (!d || n) ? ((h.current.currentTime = 0), h.current.play()) : h.current.pause());
        }, [h, c, n, d]),
        (0, e$.A)(h, tA.rE.QUESTS_BAR),
        (0, l.jsx)(eL.A, {
            ref: (e) => {
                (h.current = e), null != t && ("function" == typeof t ? t(e) : (t.current = e));
            },
            autoPlay: u,
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
function tv(e) {
    let { onClick: t } = e,
        { quest: n } = s.useContext(B),
        i = (0, o.bG)([Q.A], () => Q.A.useReducedMotion),
        [r, u] = s.useState(!1),
        c = (0, eW.tW)(n, eW.fY.QUEST_BAR_HERO_VIDEO, void 0, !1),
        d = (0, eW.tW)(n, eW.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1),
        h = (0, eV.Kr)((e) => e.getVideoProgressState)(n.id),
        m = n.userStatus?.completedAt != null && h === eV.K2.COMPLETED,
        p = !m && (!i || r);
    return (0, l.jsxs)(_.D, {
        className: tx.QO,
        onClick: t,
        onMouseEnter: () => {
            i && !r && u(!0);
        },
        onMouseLeave: () => {
            i && r && u(!1);
        },
        children: [
            null != d &&
                (0, l.jsx)(v.Sn, {
                    id: "QuestBarContentExpanded_videoThumbnail",
                    children: (e) => (0, l.jsx)("img", { ref: e, alt: "", src: d.url, className: tx.Ue }),
                }),
            null != c
                ? (0, l.jsx)(v.Sn, {
                      id: "QuestBarContentExpanded_video",
                      children: (e) =>
                          (0, l.jsx)(tC, {
                              ref: e,
                              isHovered: r,
                              autoPlay: !1,
                              asset: c,
                              poster: d?.url,
                              className: a()(tx.NM, { [tx.Gc]: p }),
                          }),
                  })
                : null,
            (0, l.jsx)("div", {
                className: tx.LT,
                children: m
                    ? (0, l.jsx)(ew.m, { color: R.A.colors.WHITE, className: tx.t })
                    : (0, l.jsx)(eU.u, { color: R.A.colors.WHITE, className: tx.t }),
            }),
        ],
    });
}
function tE(e) {
    let { quest: t } = e;
    return (0, l.jsx)(W.A, {
        className: a()(tx.Qq, tx.wq),
        learnMoreStyle: "text",
        quest: t,
        questContent: f.uF.QUEST_BAR_V2,
        sourceQuestContent: f.uF.QUEST_BAR_V2,
    });
}
function tT(e) {
    let { isInteractable: t, containerRef: n, onAcceptQuest: i } = e,
        { quest: u, onGameSheetOpen: c, onGameSheetClose: d, taskDetails: h } = s.useContext(B),
        { expansionSpring: m } = s.useContext(F),
        A = s.useRef(null),
        x = (0, o.bG)([p.A], () => p.A.isEnrolling(u.id), [u]),
        C = s.useMemo(() => (0, eW.tW)(u, eW.fY.QUEST_BAR_HERO), [u]),
        E = (0, es.NA)({ quest: u }),
        T = s.useMemo(() => (0, eW.tW)(u, eW.fY.HERO_IMAGE), [u]),
        _ = s.useMemo(() => (null == T ? {} : { backgroundImage: `url(${T.url})` }), [T]),
        S = eB.t.useConfig({ location: tA.rE.QUESTS_BAR }),
        { buttonVariant: R } = (0, eH.A)(!0),
        y = (0, es.mU)({
            quest: u,
            location: tA.rE.QUESTS_BAR,
            questContent: f.uF.QUEST_BAR_V2,
            taskDetails: h,
            sourceQuestContent: f.uF.QUEST_BAR_V2,
            popoutTargetElementRef: A,
            onGameSheetOpened: c,
            onGameSheetClosed: d,
            gameProfileSource: eF.Ob.QuestBar,
        }),
        I = (0, eY.Pd)(u),
        b = (0, eQ.z)(),
        M = (0, g.SD)(u, b),
        w = b === ez.MA.NITRO && M;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", {
                ref: A,
                children: (0, l.jsxs)("div", {
                    className: tx.do,
                    ref: n,
                    children: [
                        (0, l.jsxs)("div", {
                            className: tx.zH,
                            children: [
                                (0, l.jsx)(tE, { quest: u }),
                                (0, l.jsx)(eO.D, {
                                    className: tx.DD,
                                    color: "text-strong",
                                    variant: "heading-md/medium",
                                    children: Z.intl.format(Z.t.EQa7os, { questName: u.config.messages.questName }),
                                }),
                                (0, l.jsxs)("div", {
                                    className: tx.zf,
                                    children: [
                                        (0, l.jsx)(N.E, { className: tx.h_, variant: "text-xs/normal", children: y }),
                                        M && (0, l.jsx)(eZ.e, { questId: u.id, orbMultiplierEligibility: b }),
                                    ],
                                }),
                            ],
                        }),
                        (0, l.jsx)("div", {
                            className: tx.lO,
                            children: (0, l.jsx)(eD.e, {
                                direction: "horizontal",
                                fullWidth: !0,
                                wrap: !1,
                                children:
                                    S.enabled && I === eY.UA.UNENROLLED && S.enabledQuestStates.has(eY.UA.UNENROLLED)
                                        ? (0, l.jsx)(eK.A, {
                                              quest: u,
                                              surface: eY.V3.QUEST_BAR_FOOTER,
                                              size: "sm",
                                              analyticsCtxQuestContent: f.uF.QUEST_BAR_V2,
                                              analyticsCtxSourceQuestContent: f.uF.QUEST_BAR_V2,
                                          })
                                        : (0, l.jsx)(ee.$, {
                                              onClick: t ? i : void 0,
                                              variant: R,
                                              loading: x,
                                              text: E,
                                              size: "sm",
                                              icon: (0, j.Oz)(u),
                                              fullWidth: !0,
                                          }),
                            }),
                        }),
                    ],
                }),
            }),
            (0, l.jsx)(eq.A, { visible: w, glow: !0, className: tx.Ph }),
            null != T &&
                (0, l.jsx)(r.animated.div, {
                    className: tx.AK,
                    style: { opacity: (0, O.a)(m.to([0, 1], [1, 0])) },
                    children: (0, l.jsx)("div", { className: a()(tx.LC, tx.Ge), style: _ }),
                }),
            (0, l.jsxs)(r.animated.div, {
                className: tx.IC,
                style: {
                    backdropFilter: (0, O.Q)(m.to([0, 1], [5, 0]).to((e) => `blur(${e}px)`)),
                    filter: (0, O.Q)(m.to([0, 1], [0.8, 1]).to((e) => `brightness(${e})`)),
                },
                children: [
                    C.isAnimated
                        ? (0, l.jsx)(v.Sn, {
                              id: "QuestBarContentExpanded_heroAnimated",
                              children: (e) => (0, l.jsx)(tC, { ref: e, autoPlay: !0, asset: C, className: tx.LO }),
                          })
                        : (0, l.jsx)(v.Sn, {
                              id: "QuestBarContentExpanded_heroStatic",
                              children: (e) => (0, l.jsx)("img", { ref: e, alt: "", className: tx.LO, src: C.url }),
                          }),
                    (0, l.jsx)("div", { className: tx.tV }),
                ],
            }),
        ],
    });
}
function tj(e) {
    let { activeScreen: t, selectPlatform: n } = e,
        { quest: i, taskDetails: a } = s.useContext(B);
    return (0, eM.YW)(t)
        .with(f.X0.SELECT, () =>
            (0, l.jsx)(tg, { onConsole: () => n(tA.fO.CONSOLE), onDesktop: () => n(tA.fO.DESKTOP) }),
        )
        .with(f.X0.DESKTOP, () => (0, l.jsx)(th, { quest: i }))
        .with(f.X0.CONSOLE, () => (0, l.jsx)(ta, { quest: i, taskDetails: a }))
        .exhaustive();
}
function t_(e) {
    let { parentContainerRef: t } = e,
        { quest: n, taskDetails: i } = s.useContext(B),
        [a, r, o] = (0, g.Qo)(n, i),
        u = i.percentComplete > 0,
        c = (0, g.Vn)(n),
        d = (0, g.RR)({ quest: n }),
        h = r.length > 1 && !u && !c;
    return (0, l.jsxs)(tu, {
        children: [
            (0, l.jsx)(tj, { activeScreen: a, selectPlatform: o }),
            a !== f.X0.SELECT &&
                (0, l.jsxs)("div", {
                    className: tx.oG,
                    children: [
                        h &&
                            (0, l.jsx)(eP.K, {
                                size: "sm",
                                "aria-label": Z.intl.string(Z.t["13/7kX"]),
                                onClick: () => o(null),
                                icon: ek.n,
                                variant: "secondary",
                            }),
                        (0, l.jsx)(eC, {
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
function tN(e) {
    let { parentContainerRef: t } = e,
        { quest: n, taskDetails: i } = s.useContext(B),
        a = i.percentComplete > 0,
        r = (0, g.Vn)(n),
        o = s.useCallback(() => {
            (0, j.d5)({
                quest: n,
                questContent: f.uF.QUEST_BAR_V2,
                sourceQuestContent: f.uF.QUEST_BAR_V2,
                sourceQuestContentCTA: I.Cy.QUEST_BAR_VIDEO_QUEST_PREVIEW,
            });
        }, [n]);
    return (0, l.jsxs)(tu, {
        children: [
            (0, l.jsx)(tv, { onClick: o }),
            (0, l.jsx)(eC, {
                parentContainerRef: t,
                awaitingConsoleConnections: !1,
                hasMadeProgress: a,
                isProgressing: r,
                sourceQuestContent: f.uF.QUEST_BAR_V2,
            }),
        ],
    });
}
function tS(e) {
    let { parentContainerRef: t } = e,
        { quest: n, taskDetails: i } = s.useContext(B),
        a = i.percentComplete > 0,
        r = (0, g.Vn)(n);
    return (0, l.jsx)(tu, {
        children: (0, l.jsx)(eC, {
            parentContainerRef: t,
            awaitingConsoleConnections: !1,
            hasMadeProgress: a,
            isProgressing: r,
            sourceQuestContent: f.uF.QUEST_BAR_V2,
        }),
    });
}
function tR(e) {
    let { parentContainerRef: t } = e,
        { quest: n } = s.useContext(B);
    return (0, C.t)({ quest: n }) || (0, C.g5)(n) || (0, C.fE)({ quest: n })
        ? (0, l.jsx)(t_, { parentContainerRef: t })
        : (0, C.vv)(n)
          ? (0, l.jsx)(tN, { parentContainerRef: t })
          : (0, l.jsx)(tS, { parentContainerRef: t });
}
function ty(e) {
    let { overlayRef: t, containerRef: n } = e,
        { quest: i, taskDetails: o } = s.useContext(B),
        { expansionSpring: u } = s.useContext(F),
        c = s.useRef(null),
        d = s.useRef(null),
        h = (0, g.I3)(i),
        m = null != h ? h.percentComplete : o.percentComplete;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(r.animated.div, {
                className: a()(tx.tv, tx.ag),
                style: {
                    backgroundImage: `linear-gradient(90deg, ${k}, ${L})`,
                    opacity: (0, O.a)(u.to({ range: [0, 1], output: [1, 0] })),
                },
            }),
            (0, l.jsxs)("div", {
                className: tx.Fe,
                ref: (e) => {
                    "function" == typeof n ? n(e) : null != n && (n.current = e), null != e && (d.current = e);
                },
                children: [
                    (0, l.jsx)(ey, {}),
                    (0, l.jsx)("div", { className: tx.yF }),
                    (0, l.jsx)(ej, { overlayRef: t, progressBarRef: c, isHovered: !1 }),
                    (0, l.jsx)(eS, {
                        contentLocation: "expanded",
                        progressBarRef: c,
                        isExpanded: !0,
                        percentComplete: m,
                        popoutTargetElementRef: d,
                    }),
                    (0, l.jsx)(tR, { parentContainerRef: d }),
                ],
            }),
            (0, l.jsx)("div", {
                className: a()(tx.tv, tx.Sx),
                style: { backgroundImage: `linear-gradient(90deg, ${k}, ${L})` },
            }),
        ],
    });
}
async function tI(e, t, n, l) {
    (0, C.vv)(e)
        ? await (0, j.e0)(e, { questContent: t, questContentCTA: n, sourceQuestContent: l, sourceQuestContentCTA: n })
        : (0, er.vA)(e)
          ? await (0, eG.Oy)(e.id, { questContent: t, questContentCTA: n, sourceQuestContent: l })
          : (0, eG.Oy)(e.id, { questContent: t, questContentCTA: n, sourceQuestContent: l });
}
let tb = s.forwardRef(function (e, t) {
    let { children: n, className: i, overlayRef: o } = e,
        { collapsedHeight: u, isExpanded: c, isExpansionAnimationComplete: d, quest: h } = s.useContext(B),
        { expansionSpring: m } = s.useContext(F),
        { launchInGameActivity: p } = (0, g.zW)(h),
        A = (0, er.vA)(h),
        x = s.useCallback(async () => {
            let e = A ? I.Cy.START_QUEST : I.Cy.ACCEPT_QUEST;
            await tI(h, f.uF.QUEST_BAR_V2, e, f.uF.QUEST_BAR_V2), A && p();
        }, [h, p, A]),
        C = h.userStatus?.enrolledAt != null,
        v = c && d;
    return (0, l.jsxs)(r.animated.div, {
        "aria-hidden": !v,
        inert: !v || void 0,
        className: a()(i, tx.Rh, { [tx.Yd]: v, [tx.iH]: C }),
        style: {
            transform: (0, r.to)(
                [m.to({ range: [0, 1], output: [0, -100] }), m.to({ range: [0, 1], output: [0, u] })],
                (e, t) => `translateY(calc(${e}% + ${t}px))`,
            ),
        },
        children: [
            n,
            (0, l.jsx)(r.animated.div, {
                style: { opacity: 1 },
                children: C
                    ? (0, l.jsx)(ty, { overlayRef: o, containerRef: t })
                    : (0, l.jsx)(tT, { isInteractable: v, containerRef: t, onAcceptQuest: x }),
            }),
        ],
    });
});
var tM = n(717695);
function tw() {
    let {
            expansionSpring: e,
            animatedComponentProps: t,
            recalculateAnimationPositions: n,
            mountPoints: i,
        } = s.useContext(F),
        { isExpanded: a } = s.useContext(B);
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
                let { id: n, collapsedLeft: s, expandedLeft: a, collapsedTop: o, expandedTop: u, width: c } = t,
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
var tU = n(462887),
    tO = n(43990),
    tD = n(736653),
    tP = n(652215),
    tk = n(737595);
function tL(e) {
    let { children: t, isUnenrolled: n } = e,
        s = (0, tD.Ay)(),
        { enabled: i } = (0, eH.A)(n),
        r = i && (0, tU.q)(s);
    return (0, l.jsx)(tO.N, {
        theme: r ? tP.NJ8.DARK : void 0,
        children: (e) => (0, l.jsx)("div", { className: a()(e, tk.k0), children: t }),
    });
}
var tF = n(192308),
    tG = n(561844),
    tV = n(731738),
    tB = n(807393),
    tH = n(260364);
function tQ(e) {
    let { isExpanded: t, questId: n } = e;
    return (
        (0, g.H6)({
            mode: t ? tA.fP.EXPANDED : tA.fP.COLLAPSED,
            questContent: f.uF.QUEST_BAR_V2,
            questId: n,
            sourceQuestContent: f.uF.QUEST_BAR_V2,
        }),
        null
    );
}
function tW() {
    return (
        s.useEffect(() => {
            h.trigger();
        }, []),
        null
    );
}
function tz(e) {
    let { quest: t } = e,
        n = (0, x.L)({ quest: t, location: tA.rE.QUESTS_BAR }),
        i = (0, A.s)(),
        c = (0, o.bG)([p.A], () => null != p.A.questEnrollmentBlockedUntil),
        { isQuestBarVisible: d, reason: h } = (0, T.TQ)({ quest: t }),
        _ = (0, o.bG)([m.A], () => m.A.hasLayers()),
        N = s.useRef(null),
        S = s.useMemo(() => (0, C.vv)(t), [t]),
        R = t.id,
        y = t.userStatus?.enrolledAt != null,
        b = (0, u.A)(y),
        M = t.userStatus?.completedAt != null,
        { hasError: w, isLoading: U } = (0, v.Gk)(),
        O = s.useContext(tM.Z) || (i && d && !U && !c),
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
            let { isQuestAccepted: t, isQuestCompleted: n, isQuestBarVisible: l } = e,
                i = (0, o.bG)([Q.A], () => Q.A.useReducedMotion),
                [a, r] = s.useState(!1),
                [u, c] = s.useState(!0),
                [d, h] = s.useState(!0),
                m = s.useRef(l),
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
                A = t ? tA.ZV : tA.Ko,
                [{ expansionSpring: x }, C] = (0, z.z)(() => ({
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
                C({ expansionSpring: +!!a, immediate: i });
            }, [a, C, i]);
            let { visibilitySpring: v } = (0, z.z)({
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
                    isExpansionAnimationComplete: u,
                    isVisibilityAnimationAtRest: d,
                    expansionSpring: x,
                    visibilitySpring: v,
                    springConfig: A,
                }
            );
        })({ isQuestAccepted: y, isQuestCompleted: M, isQuestBarVisible: O }),
        {
            handleCtxMenuOpened: q,
            handleCtxMenuClosed: Z,
            handleCtxMenuSelection: K,
            handleGameSheetOpened: Y,
            handleGameSheetClosed: $,
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
                    impressionRef: u,
                } = e,
                c = s.useRef(-1),
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
                v = s.useCallback(() => {
                    g(!0);
                }, []),
                E = s.useCallback(() => {
                    g(!1), l(!1);
                }, [l]),
                T = s.useCallback(
                    function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (n) return;
                        let { withDelay: t = !1 } = e;
                        t ? (c.current = window.setTimeout(i, 75)) : i();
                    },
                    [i, n],
                ),
                j = s.useCallback(() => {
                    T();
                }, [T]),
                _ = s.useCallback(() => {
                    window.clearTimeout(c.current), h || p || d.current || l(!1);
                }, [h, p, l]),
                N = s.useCallback(() => {
                    (0, tG.av)({
                        questId: t.id,
                        event: tP.HAw.QUEST_HOVER,
                        properties: {
                            content_id: f.uF.QUEST_BAR,
                            content_name: (0, I.jO)(f.uF.QUEST_BAR),
                            impression_id: u.current?.getId(),
                        },
                        shouldExtendSession: !0,
                        sourceQuestContent: f.uF.QUEST_BAR_V2,
                    }),
                        (d.current = !0),
                        T({ withDelay: !0 });
                }, [T, u, t.id]),
                S = s.useCallback(() => {
                    (0, tG.av)({
                        questId: t.id,
                        event: tP.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: f.uF.QUEST_BAR,
                            content_name: (0, I.jO)(f.uF.QUEST_BAR),
                            impression_id: u.current?.getId(),
                        },
                        sourceQuestContent: f.uF.QUEST_BAR_V2,
                    }),
                        (d.current = !1),
                        _();
                }, [_, u, t.id]);
            s.useEffect(() => {
                p && d.current && S();
            }, [p, S]),
                s.useLayoutEffect(() => {
                    r && !o && d.current && i();
                }, [i, r, o]),
                s.useLayoutEffect(() => {
                    a || !r || o || d.current || l(!1);
                }, [r, a, o, l]);
            let R = (0, tF.useHasAnyModalOpen)();
            return (
                s.useEffect(() => {
                    R && d.current && S();
                }, [S, R]),
                {
                    ctxMenuOpen: h,
                    gameSheetOpen: p,
                    handleCtxMenuOpened: A,
                    handleCtxMenuClosed: x,
                    handleCtxMenuSelection: C,
                    handleGameSheetOpened: v,
                    handleGameSheetClosed: E,
                    handleFocus: T,
                    handleFocusWithoutDelay: j,
                    handleBlur: _,
                    handleMouseEnter: N,
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
            impressionRef: N,
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
            shouldShowQuestBar: u,
            isQuestEnrollmentBlocked: c,
            impressionRef: d,
        } = e;
        s.useEffect(() => {
            n &&
                ((0, tG.av)({
                    questId: t.id,
                    event: tP.HAw.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        content_id: f.uF.QUEST_BAR,
                        content_name: (0, I.jO)(f.uF.QUEST_BAR),
                        reason: "asset_loading_error",
                        impression_id: d.current?.getId(),
                    },
                    sourceQuestContent: f.uF.QUEST_BAR_V2,
                }),
                tB.A.increment({
                    name: tV.K.QUEST_CONTENT_RENDERING_FAILURE,
                    tags: [
                        `quest_id:${t.id}`,
                        `quest_content:${(0, I.jO)(f.uF.QUEST_BAR)}`,
                        "reason:asset_loading_error",
                    ],
                }));
        }, [n, d, t.id]),
            s.useEffect(() => {
                l ||
                    (0, tG.av)({
                        questId: t.id,
                        event: tP.HAw.QUEST_CONTENT_RENDERING_FAILURE,
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
                    (0, tG.av)({
                        questId: t.id,
                        event: tP.HAw.QUEST_CONTENT_RENDERING_FAILURE,
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
                (!u || c) && tH.A.clearTracking(), i && a && !r && !n && l && tH.A.stopTracking(t.id);
            }, [u, c, i, a, r, n, l, t.id]);
    })({
        quest: t,
        hasAssetsError: w,
        isEligibleForQuests: i,
        isQuestBarVisible: O,
        isVisibilityAnimationAtRest: F,
        isLoadingAssets: U,
        currentQuestVisibleReason: h,
        shouldShowQuestBar: d,
        isQuestEnrollmentBlocked: c,
        impressionRef: N,
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
        !i || (!O && F && !U) || w)
    )
        return w ? n.log("Not rendered due to asset error") : i || n.log("Not rendered due to ineligibility"), null;
    let eo = 70 + 78 * !!M;
    return (0, l.jsx)(E.R, {
        questOrQuests: t,
        questContent: f.uF.QUEST_BAR_V2,
        overrideVisibility: !_ && O,
        onImpression: er,
        sourceQuestContent: f.uF.QUEST_BAR_V2,
        children: (e, n) => (
            (N.current = n.current),
            (0, l.jsxs)("div", {
                className: tk.dK,
                children: [
                    O &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)(tQ, { questId: R, isExpanded: D }), (0, l.jsx)(tW, {})],
                        }),
                    (0, l.jsx)(tL, {
                        isUnenrolled: !y,
                        children: (0, l.jsx)(r.animated.div, {
                            "aria-hidden": !O,
                            onMouseLeave: en,
                            onMouseEnter: et,
                            onFocus: X,
                            onBlur: ee,
                            className: a()(tk.iE, { [tk.Xc]: !O, [tk.uv]: O && F }),
                            style: { height: B.to({ range: [0, 1], output: [0, eo] }) },
                            children: (0, l.jsx)(r.animated.div, {
                                className: a()(tk.FG, { [tk.E$]: D, [tk.KA]: y }),
                                children: (0, l.jsx)(to, {
                                    springConfig: W,
                                    isExpanded: D,
                                    children: (0, l.jsx)(V, {
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
                                            onGameSheetOpen: Y,
                                            onGameSheetClose: $,
                                            collapsedHeight: eo,
                                            children: [
                                                (0, l.jsx)(
                                                    eb,
                                                    { ref: es, className: tk.Qs, overlayRef: ei },
                                                    M ? "collapsed-with-rewards" : "collapsed-without-rewards",
                                                ),
                                                (0, l.jsx)(tb, {
                                                    className: tk.Qs,
                                                    overlayRef: ei,
                                                    ref: el,
                                                    children: (0, l.jsxs)(l.Fragment, {
                                                        children: [(0, l.jsx)(tw, {}), !y && (0, l.jsx)(J, {})],
                                                    }),
                                                }),
                                                (0, l.jsx)("div", { ref: ei, className: tk.Lw }),
                                            ],
                                        }),
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
let tq =
    21552 == n.j
        ? function () {
              let e = (0, T.dN)();
              return null == e
                  ? null
                  : (0, l.jsx)(
                        v.jY,
                        { source: tA.rE.QUESTS_BAR, questId: e.id, children: (0, l.jsx)(tz, { quest: e }) },
                        e.id,
                    );
          }
        : null;
