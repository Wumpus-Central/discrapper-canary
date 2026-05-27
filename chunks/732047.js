"use strict";
n.d(t, { A: () => t$, Y: () => tK });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(873174),
    l = n(17928),
    u = n(475743),
    c = n(840251),
    d = n(688151);
let _ = new c.E([], d.$G.QUEST_BAR_RENDERED, { location: "quest bar rendered" });
var h = n(186111),
    f = n(859703),
    p = n(507107),
    E = n(31587),
    m = n(971276),
    g = n(851936),
    A = n(792620),
    I = n(241124),
    T = n(73473),
    S = n(371912),
    y = n(617986),
    N = n(939249),
    v = n(834730),
    C = n(290136),
    R = n(661531),
    O = n(365199),
    b = n(590202),
    D = n(971649),
    L = n(901406),
    w = n(270045),
    M = n(57718),
    P = n(398025);
n(321073);
var x = n(340287),
    k = n(765671);
let U = "#00000000",
    G = "#CDD8FF1A",
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
    }),
    V = r.forwardRef(function (e, t) {
        let { children: n, id: s, inState: a, isTextTransition: l = !1 } = e,
            {
                recalculateAnimationPositions: u,
                registerComponent: c,
                unregisterComponent: d,
                expansionSpring: _,
                mountPoints: h,
            } = r.useContext(F),
            f = r.useRef(null),
            p = r.useRef(null),
            E = r.useRef(void 0);
        r.useEffect(() => {
            u();
        }, [u]),
            r.useLayoutEffect(() => {
                let e = f.current;
                return (
                    null != e && c(e, s, a),
                    () => {
                        null != e && d(s, a);
                    }
                );
            }, [s, a, c, d]);
        let m = r.useCallback(
            (e) => {
                let { height: t } = e;
                E.current !== t && (u(), (E.current = t));
            },
            [u],
        );
        (0, k.i4)(f, m);
        let g = h.get(s)?.current,
            A = null;
        return (
            null == g
                ? (A = null)
                : l && null != _
                  ? (A = (0, i.jsxs)(i.Fragment, {
                        children: [
                            "collapsed" === a &&
                                (0, x.createPortal)(
                                    (0, i.jsx)(o.animated.div, {
                                        style: {
                                            position: "absolute",
                                            opacity: (0, P.a)(_.to({ range: [0, 1], output: [1, 0] })),
                                        },
                                        children: n(p),
                                    }),
                                    g,
                                ),
                            "expanded" === a &&
                                (0, x.createPortal)(
                                    (0, i.jsx)(o.animated.div, {
                                        style: {
                                            position: "absolute",
                                            opacity: (0, P.a)(_.to({ range: [0, 1], output: [0, 1] })),
                                        },
                                        children: n(p),
                                    }),
                                    g,
                                ),
                        ],
                    }))
                  : "collapsed" === a && (A = (0, x.createPortal)(n(p), g)),
            (0, i.jsxs)("div", {
                style: { opacity: +((null == A && "collapsed" === a) || null == g) },
                ref: t,
                children: [n(f), A],
            })
        );
    }),
    B = (e) => {
        let { children: t, expandedContentRef: n, collapsedContentRef: s, expansionSpring: a } = e,
            [o, l] = r.useState({}),
            [u, c] = r.useState([]),
            [d, _] = r.useState(() => new Map()),
            h = r.useCallback((e, t, n) => {
                l((i) => {
                    let r = i[t] ?? { expanded: null, collapsed: null };
                    return { ...i, [t]: { ...r, [n]: e } };
                }),
                    _((e) => {
                        let n = new Map(e);
                        return n.set(t, r.createRef()), n;
                    });
            }, []),
            f = r.useCallback((e, t) => {
                let n = !1;
                l((i) => {
                    let r = i[e] ?? { expanded: null, collapsed: null };
                    return (r[t] = null), (n = null == r.expanded && null == r.collapsed), { ...i, [e]: r };
                }),
                    n &&
                        _((t) => {
                            let n = new Map(t);
                            return n.delete(e), n;
                        });
            }, []),
            p = r.useCallback(() => {
                let e = [];
                for (let t in o) {
                    if (null == o[t] || null == n.current || null == s.current) continue;
                    let i = o[t].collapsed,
                        r = o[t].expanded;
                    if (null == i || null == r) continue;
                    let a = r.getBoundingClientRect(),
                        l = n.current.getBoundingClientRect(),
                        u = i.getBoundingClientRect(),
                        c = s.current.getBoundingClientRect(),
                        d = a.top - l.top + 12,
                        _ = u.top - c.top,
                        h = a.left - l.left + 12,
                        f = u.left - c.left,
                        p = -a.right + l.right + 12,
                        E = -u.right + c.right;
                    e.push({
                        id: t,
                        collapsedLeft: f,
                        expandedLeft: h,
                        collapsedRight: E,
                        expandedRight: p,
                        collapsedTop: _,
                        expandedTop: d,
                        width: a.width,
                    });
                }
                c(e);
            }, [o, n, s, c]);
        return (0, i.jsx)(F.Provider, {
            value: {
                registerComponent: h,
                unregisterComponent: f,
                animatedComponents: o,
                expandedContentRef: n,
                collapsedContentRef: s,
                recalculateAnimationPositions: p,
                animatedComponentProps: u,
                expansionSpring: a,
                mountPoints: d,
            },
            children: t,
        });
    },
    H = r.createContext({
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
    j = (e) => {
        let {
                children: t,
                isExpanded: n,
                isExpansionAnimationComplete: s,
                onCtxMenuClose: a,
                onCtxMenuOpen: o,
                onCtxMenuSelect: l,
                onGameSheetOpen: u,
                onGameSheetClose: c,
                collapsedHeight: d,
                quest: _,
                taskDetails: h,
            } = e,
            f = r.useMemo(
                () => ({
                    isExpanded: n,
                    isExpansionAnimationComplete: s,
                    onCtxMenuClose: a,
                    onCtxMenuOpen: o,
                    onCtxMenuSelect: l,
                    onGameSheetOpen: u,
                    onGameSheetClose: c,
                    collapsedHeight: d,
                    quest: _,
                    taskDetails: h,
                }),
                [n, s, a, o, l, u, c, d, _, h],
            );
        return (0, i.jsx)(H.Provider, { value: f, children: t });
    };
var Y = n(775602),
    W = n(646764),
    K = n(717421);
let $ = () => {
    let e = document.body.style.getPropertyValue("--custom-guild-sidebar-width").slice(0, -2);
    return parseInt("" !== e ? e : "375");
};
var z = n(375708),
    q = n(173399);
let X = (e) => {
    let { isFullyExpanded: t, partnerBranding: n } = e,
        s = {
            label: !(function () {
                let [e, t] = r.useState(() => 270 > $());
                return (
                    r.useEffect(() => {
                        let e = new MutationObserver(() => {
                            t(270 > $());
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
        u = (0, l.bG)([Y.A], () => Y.A.useReducedMotion),
        { quest: c } = r.useContext(H),
        { expansionSpring: d } = r.useContext(F),
        _ = s ? -4 : 6;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(o.animated.div, {
                className: q.tE,
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
                children: (0, i.jsx)(W.A, {
                    learnMoreStyle: "text",
                    learnMoreFontSize: t ? 9 : void 0,
                    quest: c,
                    questContent: p.uF.QUEST_BAR_V2,
                    autoplay: t && !u,
                    sourceQuestContent: p.uF.QUEST_BAR_V2,
                    style: { width: 48, height: 48, marginRight: 8, borderRadius: 6 },
                }),
            }),
            (0, i.jsxs)(o.animated.div, {
                className: a()(q.pm, { [q.nd]: s }),
                style: {
                    transform: (0, o.to)(
                        [d.to({ range: [0, 1], output: [0, -48] }), d.to({ range: [0, 1], output: [0, _] })],
                        (e, t) => `translate(${e}px, ${t}px)`,
                    ),
                },
                children: [
                    (0, i.jsx)("div", { className: a()({ [q.Iu]: !s }), children: n }),
                    (0, i.jsx)(o.animated.div, {
                        className: a()(q.ol, { [q.yZ]: s }),
                        style: { opacity: (0, P.a)(d.to({ range: [0, 1], output: [s ? 1 : 0.7, 0] })) },
                        children: (0, i.jsx)(v.E, {
                            color: "always-white",
                            lineClamp: 1,
                            variant: "text-xs/medium",
                            children: z.intl.string(z.t["3mgEQf"]),
                        }),
                    }),
                ],
            }),
        ],
    });
};
var Z = n(173839);
let Q = (0, o.animated)(M.Ay),
    J = () => {
        let e = (0, D.go)(),
            { expansionSpring: t } = r.useContext(F),
            {
                onCtxMenuOpen: n,
                onCtxMenuClose: s,
                onCtxMenuSelect: l,
                isExpanded: u,
                isExpansionAnimationComplete: c,
                quest: d,
            } = r.useContext(H),
            _ = r.useCallback(() => {
                (0, y.Zc)(d, {
                    content: p.uF.QUEST_BAR_V2,
                    ctaContent: b.Cy.OPEN_DISCLOSURE,
                    sourceQuestContent: p.uF.QUEST_BAR_V2,
                });
            }, [d]),
            h = r.useCallback(() => {
                (0, L.pu)(d, {
                    content: p.uF.QUEST_BAR_V2,
                    ctaContent: b.Cy.OPEN_GAME_LINK,
                    impressionId: e,
                    sourceQuestContent: p.uF.QUEST_BAR_V2,
                });
            }, [e, d]),
            f = u && c,
            E = (0, i.jsx)(N.D, {
                onClick: h,
                className: a()(Z.vk, { [Z.wm]: f }),
                children: (0, i.jsx)(Q, {
                    quest: d,
                    withGameTile: !1,
                    logotypeClassName: Z.Iu,
                    logotypeStyle: {
                        height: 24,
                        maxWidth: 92,
                        transform: (0, o.to)([t.to({ range: [0, 1], output: [1, 1] })], (e) => `scale(${e})`),
                    },
                }),
            });
        return (0, i.jsxs)(o.animated.div, {
            className: a()(Z.iE, Z.Ht, { [Z.tT]: f }),
            style: { transform: (0, o.to)([t.to({ range: [0, 1], output: [6, 0] })], (e) => `translateY(${e}px)`) },
            children: [
                (0, i.jsx)(o.animated.div, {
                    className: Z.Tu,
                    style: { opacity: (0, P.a)(t.to({ range: [0, 1], output: [0, 1] })) },
                }),
                (0, i.jsx)(X, { isFullyExpanded: f, partnerBranding: E }),
                (0, i.jsxs)(o.animated.div, {
                    className: Z.P0,
                    style: { opacity: (0, P.a)(t.to({ range: [0, 1], output: [0, 1] })) },
                    children: [
                        (0, i.jsxs)(N.D, {
                            className: Z.y8,
                            onClick: _,
                            children: [
                                (0, i.jsx)(v.E, {
                                    color: "always-white",
                                    variant: "text-xs/normal",
                                    children: z.intl.string(z.t.o6FLcF),
                                }),
                                (0, i.jsx)(C.c, { color: R.A.colors.WHITE, className: Z.P$ }),
                            ],
                        }),
                        (0, i.jsx)(w.C, {
                            onOpen: n,
                            onClose: s,
                            onSelect: l,
                            questContent: p.uF.QUEST_BAR_V2,
                            quest: d,
                            shouldShowDisclosure: !0,
                            showShareLink: !0,
                            sourceQuestContent: p.uF.QUEST_BAR_V2,
                            children: (e) =>
                                (0, i.jsx)(N.D, {
                                    ...e,
                                    className: a()(Z.uJ, Z.rb),
                                    "aria-label": z.intl.string(z.t.DEoVWZ),
                                    children: (0, i.jsx)(O.j, {
                                        size: "md",
                                        color: "currentColor",
                                        className: a()(Z.Bx, Z.ON),
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
    ei = n(859040),
    er = n(629455),
    es = n(651892),
    ea = n(801365),
    eo = n(814793),
    el = n(753386),
    eu = n(862611),
    ec = n(758836),
    ed = n(519508);
function e_(e) {
    let { quest: t, sourceQuestContent: n, taskDetails: r } = e;
    return (0, i.jsx)(ee.$, {
        variant: "primary",
        fullWidth: !0,
        onClick: () => {
            let e = t.userStatus?.enrolledAt == null ? b.Cy.ACCEPT_QUEST : b.Cy.WATCH_VIDEO;
            (0, y.d5)({ quest: t, questContent: p.uF.QUEST_BAR_V2, sourceQuestContent: n, sourceQuestContentCTA: e });
        },
        size: "sm",
        text: (0, el.WM)(r),
    });
}
let eh = (e) => {
        let { quest: t, sourceQuestContent: n } = e,
            r = (0, D.go)(),
            s = (0, es.wr)(t);
        return (0, i.jsx)(ee.$, {
            size: "sm",
            fullWidth: !0,
            onClick: () =>
                (0, L.pu)(t, {
                    content: p.uF.QUEST_BAR_V2,
                    ctaContent: b.Cy.OPEN_GAME_LINK,
                    impressionId: r,
                    sourceQuestContent: n,
                }),
            text: s,
        });
    },
    ef = (e) => {
        let { quest: t, sourceQuestContent: n } = e,
            r = (0, D.vU)()?.getId();
        return (0, i.jsx)(ee.$, {
            fullWidth: !0,
            onClick: () =>
                (0, L.se)(
                    { quest: t },
                    {
                        content: p.uF.QUEST_BAR_V2,
                        ctaContent: b.Cy.CONNECT_CONSOLE,
                        impressionId: r,
                        sourceQuestContent: n,
                    },
                ),
            size: "sm",
            text: z.intl.string(z.t.csptqV),
        });
    },
    ep = (e) => {
        let { quest: t } = e,
            n = (0, er.NA)({ quest: t }),
            { launchInGameActivity: r } = (0, E.zW)(t);
        return (0, eo.vA)(t)
            ? (0, i.jsx)(ee.$, {
                  fullWidth: !0,
                  variant: "primary",
                  icon: (0, y.Oz)(t),
                  onClick: r,
                  size: "sm",
                  text: n,
              })
            : null;
    },
    eE = (e) => {
        let {
                quest: t,
                sourceQuestContent: n,
                taskDetails: r,
                popoutTargetElementRef: s,
                onGameSheetOpened: a,
                onGameSheetClosed: o,
            } = e,
            { applications: l } = r;
        return (0, i.jsx)(eu.A, {
            quest: t,
            sourceQuestContent: n,
            applications: l ?? [],
            targetElementRef: s,
            onGameSheetOpened: a,
            onGameSheetClosed: o,
            children: (e) =>
                (0, i.jsx)(ee.$, {
                    variant: "secondary",
                    fullWidth: !0,
                    size: "sm",
                    text: z.intl.string(z.t["93PTEs"]),
                    ...e,
                }),
        });
    },
    em = (e) => {
        let { quest: t, ctaLabel: n, onClick: s, questContent: a = p.uF.QUEST_BAR_V2, sourceQuestContent: o, ...l } = e,
            u = (0, S.ix)({ quest: t, questContent: a, sourceQuestContent: o }),
            c = r.useCallback(
                (e) => {
                    s?.(e),
                        (0, ea.ks)(t.config) && t.userStatus?.claimedAt != null
                            ? (0, ei.Cz)({
                                  tab: ec.G2.ORBS,
                                  analyticsLocations: [],
                                  analyticsSource: en.A.QUEST_HOME_PAGE,
                              })
                            : u();
                },
                [s, t.config, t.userStatus?.claimedAt, u],
            );
        return (0, i.jsx)(ee.$, {
            fullWidth: !0,
            onClick: c,
            text: n ?? z.intl.string(z.t.cfY4PE),
            variant: "primary",
            ...l,
            size: l.size === et.$n.Sizes.MEDIUM ? "md" : "sm",
        });
    },
    eg = (e) => {
        let {
                sourceQuestContent: t,
                awaitingConsoleConnections: n,
                hasMadeProgress: s,
                isProgressing: a,
                popoutTargetElementRef: o,
            } = e,
            { quest: l, onGameSheetOpen: u, onGameSheetClose: c, taskDetails: d } = r.useContext(H),
            [_] = (0, E.Qo)(l, d),
            h = l.userStatus?.completedAt != null,
            f = (0, A.vv)(l),
            m = _ !== p.X0.SELECT && !s && !a,
            g = null;
        return (
            h
                ? (g = (0, i.jsx)(em, { quest: l, sourceQuestContent: t }))
                : f
                  ? (g = (0, i.jsx)(e_, { quest: l, sourceQuestContent: t, taskDetails: d }))
                  : (0, eo.vA)(l)
                    ? (g = (0, i.jsx)(ep, { quest: l }))
                    : _ === p.X0.CONSOLE && n
                      ? (g = (0, i.jsx)(ef, { quest: l, sourceQuestContent: t }))
                      : m && (0, eo.ui)(l)
                        ? (g = (0, i.jsx)(eE, {
                              quest: l,
                              sourceQuestContent: t,
                              taskDetails: d,
                              popoutTargetElementRef: o,
                              onGameSheetOpened: u,
                              onGameSheetClosed: c,
                          }))
                        : m && (g = (0, i.jsx)(eh, { quest: l, sourceQuestContent: t })),
            null == g ? null : (0, i.jsx)("div", { className: ed.lO, children: g })
        );
    };
function eA(e) {
    return (0, i.jsx)(eg, { ...e, popoutTargetElementRef: e.parentContainerRef });
}
var eI = n(106778),
    eT = n(536283),
    eS = n(947638);
let ey = (e) => {
    let { overlayRef: t, progressBarRef: n, isHovered: s } = e,
        { quest: c, isExpanded: d } = r.useContext(H),
        { expansionSpring: _ } = r.useContext(F),
        { completionSpring: f, startCompletionAnimation: p } = (function () {
            let [{ spring: e }, t] = (0, K.z)(() => ({ spring: 0 }), "animate-always");
            return {
                completionSpring: e,
                startCompletionAnimation: r.useCallback(() => {
                    t({ spring: 1 }), t({ spring: 0, delay: 2e3 });
                }, [t]),
            };
        })(),
        E = c.userStatus?.completedAt != null,
        m = r.useRef(!1),
        g = (0, l.bG)([Y.A], () => Y.A.useReducedMotion),
        A = r.useRef(null),
        I = (0, l.bG)([h.A], () => h.A.hasLayers()),
        T = (0, u.A)(I),
        [S, y] = r.useState(null),
        [N, v] = r.useState(null),
        C = r.useRef(new eI.OH({ gravity: 0, wind: 0 })),
        R = (0, eI.f9)(S, N),
        O = r.useMemo(() => ["#51BC9D"], []),
        b = r.useCallback(() => {
            if (g) return;
            let e = n.current,
                t = A.current;
            if (null != t && null != e && R.isReady) {
                var i, r, s, a;
                let { x: n, y: o } = e.getBoundingClientRect(),
                    { x: l, y: u } = t.getBoundingClientRect();
                R.createMultipleConfetti(
                    ((i = n - l),
                    (r = o - u),
                    (s = e.clientHeight),
                    (a = e.clientWidth),
                    {
                        ...eT.Mw,
                        position: { type: "static-random", minValue: { x: i, y: r }, maxValue: { x: i + s, y: r + a } },
                        velocity: { type: "static-random", minValue: { x: -20, y: -20 }, maxValue: { x: 20, y: 20 } },
                        opacity: { type: "linear", value: 2, addValue: -0.1 },
                        dragCoefficient: { type: "static", value: 0.166 },
                        size: { type: "static-random", minValue: 2, maxValue: 3 },
                    }),
                    100,
                );
            }
        }, [n, A, R, g]),
        D = (0, u.A)(d);
    return (r.useEffect(() => {
        E && d && !D && (p(), b());
    }, [d, E, p, b, D]),
    r.useEffect(() => {
        E &&
            !I &&
            T &&
            setTimeout(() => {
                p(), b();
            }, 200);
    }, [E, T, I, p, b]),
    r.useEffect(() => {
        R.isReady && (!m.current && E && (p(), b()), (m.current = E));
    }, [E, m, b, p, R]),
    r.useEffect(() => {
        s && E && (p(), b());
    }, [s, E, p, b]),
    g)
        ? null
        : (0, i.jsxs)("div", {
              className: eS.iE,
              "aria-hidden": "true",
              ref: A,
              children: [
                  (0, i.jsx)(o.animated.div, { className: eS.Tp, style: { opacity: (0, P.a)(f) } }),
                  (0, i.jsx)(o.animated.div, { className: a()(eS.sJ, eS.ix), style: { opacity: (0, P.a)(f) } }),
                  (0, i.jsxs)(o.animated.div, {
                      className: eS.KG,
                      style: { transform: _.to({ range: [0, 1], output: [-35, 0] }).to((e) => `translateY(${e}px)`) },
                      children: [
                          (0, i.jsx)(eI.Fk, { ref: y, className: eS.t_, environment: C.current }),
                          (0, i.jsx)(eI.K_, {
                              ref: v,
                              sprites: ["/assets/b909790cf1d80597.svg"],
                              colors: O,
                              spriteWidth: eT.wn,
                              spriteHeight: eT.wn,
                          }),
                          null != t.current &&
                              (0, x.createPortal)(
                                  (0, i.jsx)(o.animated.div, {
                                      className: a()(eS.sJ, eS.d7),
                                      style: { opacity: (0, P.a)(f) },
                                  }),
                                  t.current,
                              ),
                      ],
                  }),
              ],
          });
};
var eN = n(453384),
    ev = n(460131);
let eC = (e) => {
    let { isExpanded: t, contentLocation: n, progressBarRef: s, percentComplete: a, popoutTargetElementRef: o } = e,
        { quest: l, onGameSheetOpen: u, onGameSheetClose: c, taskDetails: d } = r.useContext(H),
        [_] = (0, E.Qo)(l, d),
        h = (0, er.VX)(l),
        f = (0, er.tH)({
            quest: l,
            isExpanded: t,
            activeScreen: _,
            sourceQuestContent: p.uF.QUEST_BAR_V2,
            popoutTargetElementRef: o,
            onGameSheetOpened: u,
            onGameSheetClosed: c,
        });
    return (0, i.jsxs)("div", {
        className: ev.Z0,
        children: [
            (0, i.jsx)(V, {
                inState: n,
                id: "progress-bar",
                ref: s,
                children: (e) =>
                    (0, i.jsx)(eN.A, {
                        ref: e,
                        style: "small",
                        percentComplete: a,
                        size: 42,
                        children: (0, i.jsx)(W.A, {
                            fullWidth: !0,
                            quest: l,
                            questContent: p.uF.QUEST_BAR_V2,
                            autoplay: !1,
                            sourceQuestContent: p.uF.QUEST_BAR_V2,
                        }),
                    }),
            }),
            (0, i.jsxs)("div", {
                className: ev.NZ,
                children: [
                    (0, i.jsx)(V, {
                        inState: n,
                        id: "progress-title",
                        children: (e) =>
                            (0, i.jsx)(v.E, {
                                ref: e,
                                className: ev.FZ,
                                color: "text-strong",
                                variant: "text-sm/semibold",
                                children: h,
                            }),
                    }),
                    (0, i.jsx)(V, {
                        inState: n,
                        id: "progress-subtitle",
                        isTextTransition: !0,
                        children: (e) =>
                            (0, i.jsx)(v.E, {
                                ref: e,
                                className: ev.FZ,
                                color: "text-subtle",
                                variant: "text-xs/normal",
                                children: f,
                            }),
                    }),
                ],
            }),
        ],
    });
};
var eR = n(78385);
function eO() {
    let { quest: e, onCtxMenuOpen: t, onCtxMenuClose: n, onCtxMenuSelect: s } = r.useContext(H),
        o = (0, E.S5)(e.config.expiresAt);
    return (0, i.jsxs)("div", {
        className: eR.pS,
        children: [
            (0, i.jsx)(v.E, {
                variant: "text-xxs/medium",
                className: a()(eR.Uu, eR.TK),
                children: z.intl.format(z.t["pX+fmn"], { expirationDate: o }),
            }),
            (0, i.jsx)(w.C, {
                onOpen: t,
                onClose: n,
                onSelect: s,
                questContent: p.uF.QUEST_BAR_V2,
                quest: e,
                shouldShowDisclosure: !1,
                showShareLink: !0,
                sourceQuestContent: p.uF.QUEST_BAR_V2,
                children: (e) =>
                    (0, i.jsx)(N.D, {
                        ...e,
                        className: eR.rb,
                        "aria-label": z.intl.string(z.t.DEoVWZ),
                        children: (0, i.jsx)(O.j, { size: "md", color: "currentColor", className: a()(eR.Bx, eR.U9) }),
                    }),
            }),
        ],
    });
}
var eb = n(249309);
let eD = r.forwardRef(function (e, t) {
    let { className: n, overlayRef: s } = e,
        { expansionSpring: l } = r.useContext(F),
        { quest: u, taskDetails: c, isExpanded: d, isExpansionAnimationComplete: _ } = r.useContext(H),
        h = u.userStatus?.completedAt != null,
        f = (0, E.I3)(u),
        m = r.useRef(null),
        g = u.userStatus?.enrolledAt != null,
        A = null != f ? f.percentComplete : c.percentComplete,
        I = r.useRef(null),
        [T, S] = r.useState(!1);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            h && (0, i.jsx)(ey, { overlayRef: s, progressBarRef: m, isHovered: T }),
            (0, i.jsx)(o.animated.div, {
                ref: t,
                "aria-hidden": d && _,
                inert: (!!d && !!_) || void 0,
                className: a()(n, eb.hR, { [eb.Ag]: d, [eb.s]: g }),
                style: {
                    opacity: (0, P.a)(l.to({ range: [0, 1], output: [1, 0] })),
                    backgroundImage: h ? `linear-gradient(90deg, ${U}, ${G})` : void 0,
                },
                onMouseEnter: () => S(!0),
                onMouseLeave: () => S(!1),
                children: (0, i.jsxs)("div", {
                    className: eb.o8,
                    children: [
                        h &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(eO, {}), (0, i.jsx)("div", { className: eb.yF })],
                            }),
                        g
                            ? (0, i.jsx)(eC, {
                                  contentLocation: "collapsed",
                                  progressBarRef: m,
                                  isExpanded: !1,
                                  percentComplete: A,
                              })
                            : null,
                        h &&
                            (0, i.jsx)("div", {
                                ref: I,
                                children: (0, i.jsx)(eA, {
                                    parentContainerRef: I,
                                    awaitingConsoleConnections: !1,
                                    hasMadeProgress: !0,
                                    isProgressing: !1,
                                    sourceQuestContent: p.uF.QUEST_BAR_V2,
                                }),
                            }),
                    ],
                }),
            }),
        ],
    });
});
n(801541);
var eL = n(889137),
    ew = n(417270),
    eM = n(782134),
    eP = n(534514),
    ex = n(825484),
    ek = n(408278),
    eU = n(921853),
    eG = n(607470),
    eF = n(409626),
    eV = n(340124),
    eB = n(405670),
    eH = n(112142),
    ej = n(19238),
    eY = n(646917),
    eW = n(551875),
    eK = n(576761),
    e$ = n(895253),
    ez = n(442734),
    eq = n(192551),
    eX = n(79545),
    eZ = n(139384),
    eQ = n(114046),
    eJ = n(695366),
    e0 = n(30370),
    e1 = n(18437),
    e2 = n(780964),
    e3 = n(766075),
    e6 = n(540037);
function e4(e) {
    let { text: t, quest: n, sourceQuestContent: r } = e,
        s = (0, e1.Ut)();
    return (0, i.jsx)(N.D, {
        className: e6.Z0,
        onClick: () => {
            s({
                questId: n.id,
                questContent: p.uF.QUEST_BAR_V2,
                questContentCTA: b.Cy.VIEW_CONSOLE_CONNECTIONS_LINK,
                sourceQuestContent: r,
            }),
                (0, e3.openUserSettings)(e2.X.CONNECTIONS_PANEL);
        },
        children: (0, i.jsx)(v.E, { "aria-label": t, color: "none", variant: "text-xxs/normal", children: t }),
    });
}
function e5(e) {
    let { xboxAndPlaystationAccounts: t, quest: n, sourceQuestContent: r } = e;
    return t.length > 0
        ? (0, i.jsx)(e4, { text: z.intl.string(z.t["qiS+xj"]), quest: n, sourceQuestContent: r })
        : null;
}
function e7(e) {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(v.E, { color: "text-muted", variant: "text-xs/medium", children: z.intl.string(z.t.EJFSvD) }),
            (0, i.jsx)(e5, { ...e }),
        ],
    });
}
var e8 = n(947641);
n(287809);
var e9 = n(629436);
function te(e) {
    let { children: t, isComplete: n, hasNextStep: r } = e;
    return (0, i.jsxs)("li", {
        className: a()(e9.gY, { [e9.HP]: n }, { [e9.h4]: r }),
        children: [
            (0, i.jsxs)("div", {
                className: e9.cJ,
                children: [
                    (0, i.jsx)("div", {
                        className: e9.$P,
                        children: n && (0, i.jsx)(e8.r, { className: e9.ap, color: R.A.colors.WHITE }),
                    }),
                    r && (0, i.jsx)("div", { className: e9.UK }),
                ],
            }),
            (0, i.jsx)("div", { className: e9.M7, children: t }),
        ],
    });
}
function tt(e) {
    let { children: t } = e;
    return (0, i.jsx)(v.E, { color: "text-muted", variant: "text-xs/medium", children: t });
}
let tn = function (e) {
    let { children: t, heading: n, steps: r } = e;
    return (0, i.jsxs)("div", {
        className: e9.iE,
        children: [
            (0, i.jsx)("div", {
                className: e9.Mj,
                children: (0, i.jsx)(eP.D, {
                    className: e9.R_,
                    color: "text-strong",
                    variant: "text-xs/semibold",
                    children: n,
                }),
            }),
            (0, i.jsx)("div", {
                className: e9.lp,
                children: (0, i.jsx)("ul", {
                    children: r.map((e, t) =>
                        (0, i.jsx)(
                            te,
                            { isComplete: e.isComplete, hasNextStep: t < r.length - 1, children: e.renderContent() },
                            t,
                        ),
                    ),
                }),
            }),
            t,
        ],
    });
};
var ti = n(256023);
function tr(e) {
    return (0, i.jsx)(v.E, { className: ti.eW, color: "text-muted", variant: "text-xxs/normal", children: e.children });
}
function ts(e) {
    let { quest: t, useReducedMotion: n } = e,
        s = (0, S.H1)(t.id, p.uF.QUEST_BAR_V2, p.uF.QUEST_BAR_V2),
        o = (0, S.Xf)({ useReducedMotion: n }),
        l = (0, e1.Ut)(),
        u = (0, D.go)(),
        {
            errorHints: c,
            startingConsoleQuest: d,
            startConsoleQuest: _,
        } = (0, E.Wj)({
            questId: t.id,
            beforeRequest: () => {
                l({
                    questId: t.id,
                    questContent: p.uF.QUEST_BAR_V2,
                    questContentCTA: b.Cy.DEFIBRILLATOR,
                    sourceQuestContent: p.uF.QUEST_BAR_V2,
                }),
                    o.startAnimation();
            },
            afterRequest: o.stopAnimation,
        }),
        { header: h, renderBody: f } = r.useMemo(() => {
            let e = c.length > 0,
                n = t.config.messages.gameTitle;
            return {
                header: e
                    ? (0, eo.ui)(t)
                        ? z.intl.string(z.t.N33EuL)
                        : z.intl.formatToPlainString(z.t["28Ql27"], { gameTitle: n })
                    : (0, eo.ui)(t)
                      ? z.intl.string(z.t.YstzGO)
                      : z.intl.formatToPlainString(z.t.gX0Qcx, { gameTitle: n }),
                renderBody: e
                    ? () =>
                          (0, i.jsx)(i.Fragment, {
                              children: c.map((e, n) => {
                                  if (e.type === eQ._.EXPIRED_CREDENTIAL) {
                                      let r = e0.A.getAccount(e.connected_account_id, e.connected_account_type),
                                          s = (0, L.IG)(e),
                                          a = (0, L.$J)(e);
                                      return (0, i.jsx)(
                                          tr,
                                          {
                                              children: z.intl.format(s, {
                                                  account_name: r?.name,
                                                  onClick: () => {
                                                      (0, L.v0)(
                                                          { quest: t, platformType: a },
                                                          {
                                                              content: p.uF.QUEST_BAR,
                                                              ctaContent: b.Cy.DEFIBRILLATOR_RECONNECT_CONSOLE,
                                                              impressionId: u,
                                                              sourceQuestContent: p.uF.QUEST_BAR_V2,
                                                          },
                                                      );
                                                  },
                                              }),
                                          },
                                          n,
                                      );
                                  }
                                  return (0, i.jsx)(tr, { children: e.message }, n);
                              }),
                          })
                    : () =>
                          (0, i.jsx)(v.E, {
                              className: ti.eW,
                              color: "text-muted",
                              variant: "text-xxs/normal",
                              children: (0, eo.ui)(t)
                                  ? z.intl.string(z.t.bUyEZZ)
                                  : z.intl.format(z.t.GXqvC1, { gameTitle: n }),
                          }),
            };
        }, [c, t, u]);
    return (0, i.jsxs)("div", {
        className: ti.XK,
        children: [
            (0, i.jsxs)("div", {
                className: ti.oK,
                children: [
                    (0, i.jsx)(eJ.E, {
                        size: "custom",
                        color: "currentColor",
                        className: 0 === c.length ? ti.pH : ti.JA,
                        width: 16,
                        height: 16,
                    }),
                    (0, i.jsx)(v.E, { variant: "text-xs/medium", children: h }),
                    (0, i.jsx)(N.D, { className: a()(ti.w, { [ti.r9]: d }), onClick: () => _(), children: o.render() }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: a()({ [ti.Iu]: d }),
                children: [f(), 0 === c.length ? null : (0, i.jsx)(tr, { children: s })],
            }),
        ],
    });
}
let ta = function (e) {
        let { quest: t, taskDetails: n } = e,
            s = (0, l.bG)([Y.A], () => Y.A.useReducedMotion),
            a = (0, E.Du)(),
            o = r.useMemo(
                () => (0, L.bg)(t).filter((e) => a.xboxAndPlaystationAccounts.find((t) => t.type === e)),
                [a.xboxAndPlaystationAccounts, t],
            ),
            {
                steps: u,
                hasConnectedAccounts: c,
                isProgressingQuestForLaunchedGame: d,
                isQuestComplete: _,
            } = r.useMemo(() => {
                let e = o.length > 0,
                    r = e && (0, A.YL)(t),
                    s = t.config.messages.gameTitle,
                    l = t.userStatus?.completedAt != null;
                return {
                    steps: [
                        {
                            renderContent: () =>
                                (0, i.jsx)(e7, { ...a, quest: t, sourceQuestContent: p.uF.QUEST_BAR_V2 }),
                            isComplete: e || r || l,
                        },
                        {
                            renderContent: () =>
                                (0, i.jsx)(tt, {
                                    children: (0, eo.ui)(t)
                                        ? z.intl.string(z.t["5tXqFe"])
                                        : z.intl.formatToPlainString(z.t["+8JB6Y"], { gameTitle: s }),
                                }),
                            isComplete: r || l,
                        },
                        {
                            renderContent: () =>
                                (0, i.jsx)(tt, {
                                    children: z.intl.formatToPlainString(z.t.HhfrYS, { numMinutes: n.targetMinutes }),
                                }),
                            isComplete: l,
                        },
                    ],
                    hasConnectedAccounts: e,
                    isProgressingQuestForLaunchedGame: r,
                    isQuestComplete: l,
                };
            }, [a, o.length, t, n.targetMinutes]);
        return (0, i.jsx)(tn, {
            heading: z.intl.string(z.t.UPWlJu),
            steps: u,
            children: c && !d && !_ && (0, i.jsx)(ts, { useReducedMotion: s, quest: t }),
        });
    },
    to = r.createContext({ springConfig: {}, isExpanded: !1 });
function tl(e) {
    let t = r.useMemo(
        () => ({ springConfig: e.springConfig, isExpanded: e.isExpanded }),
        [e.springConfig, e.isExpanded],
    );
    return (0, i.jsx)(to.Provider, { value: t, children: e.children });
}
function tu(e) {
    let { children: t } = e,
        { springConfig: n, isExpanded: s } = r.useContext(to),
        a = (0, l.bG)([Y.A], () => Y.A.useReducedMotion),
        { ref: c, height: d = null } = (0, k.Ay)(),
        _ = (0, u.A)(d) ?? null,
        [{ height: h }, f] = (0, K.z)(() => ({ from: { height: 0 }, config: n }));
    return (
        r.useLayoutEffect(() => {
            null !== d && f({ height: d, immediate: !s || a || null === _ });
        }, [d, f, s, a, _]),
        (0, i.jsx)(o.animated.div, {
            style: { height: null === _ ? "auto" : h, overflow: "hidden" },
            children: (0, i.jsx)("div", { style: { overflow: "hidden" }, ref: c, children: t }),
        })
    );
}
n(134528), n(947204);
var tc = n(909714);
function td(e) {
    let { header: t, children: n } = e;
    return (0, i.jsxs)("div", {
        className: tc.Nr,
        children: [
            (0, i.jsxs)("div", {
                className: tc.wx,
                children: [
                    (0, i.jsx)(eJ.E, {
                        size: "custom",
                        color: "currentColor",
                        className: tc.Kk,
                        width: 16,
                        height: 16,
                    }),
                    (0, i.jsx)(eP.D, { color: "text-default", variant: "heading-sm/medium", children: t }),
                ],
            }),
            (0, i.jsx)(v.E, { color: "text-muted", variant: "text-xs/normal", className: tc.r2, children: n }),
        ],
    });
}
let t_ = function (e) {
    let { quest: t } = e,
        n = (0, E.aC)(t);
    if (0 === n.length) return null;
    let r = n.at(0);
    return r === z.intl.string(z.t.BV6xDm)
        ? (0, i.jsx)(td, { header: z.intl.string(z.t.onh6ct), children: z.intl.string(z.t.arVHRA) })
        : r === z.intl.string(z.t.MFGxFM)
          ? (0, i.jsx)(td, { header: z.intl.string(z.t.JPihZA), children: z.intl.string(z.t.MFGxFM) })
          : null;
};
var th = n(31300),
    tf = n(687966),
    tp = n(825807);
let tE = function (e) {
    let { onDesktop: t, onConsole: n } = e;
    return (0, i.jsxs)(ex.e, {
        direction: "vertical",
        fullWidth: !0,
        className: tp.G,
        size: "sm",
        children: [
            (0, i.jsx)(ee.$, {
                onClick: t,
                text: z.intl.string(z.t["QXc01+"]),
                variant: "secondary",
                icon: th.k,
                iconPosition: "end",
            }),
            (0, i.jsx)(ee.$, {
                onClick: n,
                text: z.intl.string(z.t["8lAfuB"]),
                variant: "secondary",
                icon: tf._,
                iconPosition: "end",
            }),
        ],
    });
};
var tm = n(190107),
    tg = n(495707);
let tA = r.forwardRef(function (e, t) {
    let { isHovered: n, asset: s, poster: a, className: o, autoPlay: u = !1 } = e,
        { isExpanded: c } = r.useContext(H),
        d = (0, l.bG)([Y.A], () => Y.A.useReducedMotion),
        _ = r.useRef(null);
    return (
        r.useEffect(() => {
            null != _.current && (c && (!d || n) ? ((_.current.currentTime = 0), _.current.play()) : _.current.pause());
        }, [_, c, n, d]),
        (0, eZ.A)(_, tm.rE.QUESTS_BAR),
        (0, i.jsx)(eG.A, {
            ref: (e) => {
                (_.current = e), null != t && ("function" == typeof t ? t(e) : (t.current = e));
            },
            autoPlay: u,
            poster: a,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: o,
            controls: !1,
            children: (0, i.jsx)("source", { src: s.url, type: s.mimetype ?? void 0 }),
        })
    );
});
function tI(e) {
    let { onClick: t } = e,
        { quest: n } = r.useContext(H),
        s = (0, l.bG)([Y.A], () => Y.A.useReducedMotion),
        [o, u] = r.useState(!1),
        c = (0, eW.tW)(n, eW.fY.QUEST_BAR_HERO_VIDEO, void 0, !1),
        d = (0, eW.tW)(n, eW.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1),
        _ = (0, eB.Kr)((e) => e.getVideoProgressState)(n.id),
        h = n.userStatus?.completedAt != null && _ === eB.K2.COMPLETED,
        f = !h && (!s || o);
    return (0, i.jsxs)(N.D, {
        className: tg.QO,
        onClick: t,
        onMouseEnter: () => {
            s && !o && u(!0);
        },
        onMouseLeave: () => {
            s && o && u(!1);
        },
        children: [
            null != d &&
                (0, i.jsx)(I.Sn, {
                    id: "QuestBarContentExpanded_videoThumbnail",
                    children: (e) => (0, i.jsx)("img", { ref: e, alt: "", src: d.url, className: tg.Ue }),
                }),
            null != c
                ? (0, i.jsx)(I.Sn, {
                      id: "QuestBarContentExpanded_video",
                      children: (e) =>
                          (0, i.jsx)(tA, {
                              ref: e,
                              isHovered: o,
                              autoPlay: !1,
                              asset: c,
                              poster: d?.url,
                              className: a()(tg.NM, { [tg.Gc]: f }),
                          }),
                  })
                : null,
            (0, i.jsx)("div", {
                className: tg.LT,
                children: h
                    ? (0, i.jsx)(ew.m, { color: R.A.colors.WHITE, className: tg.t })
                    : (0, i.jsx)(eM.u, { color: R.A.colors.WHITE, className: tg.t }),
            }),
        ],
    });
}
function tT(e) {
    let { quest: t } = e;
    return (0, i.jsx)(W.A, {
        className: a()(tg.Qq, tg.wq),
        learnMoreStyle: "text",
        quest: t,
        questContent: p.uF.QUEST_BAR_V2,
        sourceQuestContent: p.uF.QUEST_BAR_V2,
    });
}
function tS(e) {
    let { isInteractable: t, containerRef: n, onAcceptQuest: s } = e,
        { quest: u, onGameSheetOpen: c, onGameSheetClose: d, taskDetails: _ } = r.useContext(H),
        { expansionSpring: h } = r.useContext(F),
        m = r.useRef(null),
        g = (0, l.bG)([f.A], () => f.A.isEnrolling(u.id), [u]),
        A = r.useMemo(() => (0, eW.tW)(u, eW.fY.QUEST_BAR_HERO), [u]),
        T = (0, er.NA)({ quest: u }),
        S = r.useMemo(() => (0, eW.tW)(u, eW.fY.HERO_IMAGE), [u]),
        N = r.useMemo(() => (null == S ? {} : { backgroundImage: `url(${S.url})` }), [S]),
        C = eH.t.useConfig({ location: tm.rE.QUESTS_BAR }),
        { buttonVariant: R } = (0, ej.A)(!0),
        O = (0, er.mU)({
            quest: u,
            location: tm.rE.QUESTS_BAR,
            questContent: p.uF.QUEST_BAR_V2,
            taskDetails: _,
            sourceQuestContent: p.uF.QUEST_BAR_V2,
            popoutTargetElementRef: m,
            onGameSheetOpened: c,
            onGameSheetClosed: d,
            gameProfileSource: eF.Ob.QuestBar,
        }),
        b = (0, eX.Pd)(u),
        D = (0, eY.z)(),
        L = (0, E.SD)(u, D),
        w = D === eK.MA.NITRO && L;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                ref: m,
                children: (0, i.jsxs)("div", {
                    className: tg.do,
                    ref: n,
                    children: [
                        (0, i.jsxs)("div", {
                            className: tg.zH,
                            children: [
                                (0, i.jsx)(tT, { quest: u }),
                                (0, i.jsx)(eP.D, {
                                    className: tg.DD,
                                    color: "text-strong",
                                    variant: "heading-md/medium",
                                    children: z.intl.format(z.t.EQa7os, { questName: u.config.messages.questName }),
                                }),
                                (0, i.jsxs)("div", {
                                    className: tg.zf,
                                    children: [
                                        (0, i.jsx)(v.E, { className: tg.h_, variant: "text-xs/normal", children: O }),
                                        L && (0, i.jsx)(ez.e, { questId: u.id, orbMultiplierEligibility: D }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: tg.lO,
                            children: (0, i.jsx)(ex.e, {
                                direction: "horizontal",
                                fullWidth: !0,
                                wrap: !1,
                                children:
                                    C.enabled && b === eX.UA.UNENROLLED && C.enabledQuestStates.has(eX.UA.UNENROLLED)
                                        ? (0, i.jsx)(eq.A, {
                                              quest: u,
                                              surface: eX.V3.QUEST_BAR_FOOTER,
                                              size: "sm",
                                              analyticsCtxQuestContent: p.uF.QUEST_BAR_V2,
                                              analyticsCtxSourceQuestContent: p.uF.QUEST_BAR_V2,
                                          })
                                        : (0, i.jsx)(ee.$, {
                                              onClick: t ? s : void 0,
                                              variant: R,
                                              loading: g,
                                              text: T,
                                              size: "sm",
                                              icon: (0, y.Oz)(u),
                                              fullWidth: !0,
                                          }),
                            }),
                        }),
                    ],
                }),
            }),
            (0, i.jsx)(e$.A, { visible: w, glow: !0, className: tg.Ph }),
            null != S &&
                (0, i.jsx)(o.animated.div, {
                    className: tg.AK,
                    style: { opacity: (0, P.a)(h.to([0, 1], [1, 0])) },
                    children: (0, i.jsx)("div", { className: a()(tg.LC, tg.Ge), style: N }),
                }),
            (0, i.jsxs)(o.animated.div, {
                className: tg.IC,
                style: {
                    backdropFilter: (0, P.Q)(h.to([0, 1], [5, 0]).to((e) => `blur(${e}px)`)),
                    filter: (0, P.Q)(h.to([0, 1], [0.8, 1]).to((e) => `brightness(${e})`)),
                },
                children: [
                    A.isAnimated
                        ? (0, i.jsx)(I.Sn, {
                              id: "QuestBarContentExpanded_heroAnimated",
                              children: (e) => (0, i.jsx)(tA, { ref: e, autoPlay: !0, asset: A, className: tg.LO }),
                          })
                        : (0, i.jsx)(I.Sn, {
                              id: "QuestBarContentExpanded_heroStatic",
                              children: (e) => (0, i.jsx)("img", { ref: e, alt: "", className: tg.LO, src: A.url }),
                          }),
                    (0, i.jsx)("div", { className: tg.tV }),
                ],
            }),
        ],
    });
}
function ty(e) {
    let { activeScreen: t, selectPlatform: n } = e,
        { quest: s, taskDetails: a } = r.useContext(H);
    return (0, eL.YW)(t)
        .with(p.X0.SELECT, () =>
            (0, i.jsx)(tE, { onConsole: () => n(tm.fO.CONSOLE), onDesktop: () => n(tm.fO.DESKTOP) }),
        )
        .with(p.X0.DESKTOP, () => (0, i.jsx)(t_, { quest: s }))
        .with(p.X0.CONSOLE, () => (0, i.jsx)(ta, { quest: s, taskDetails: a }))
        .exhaustive();
}
function tN(e) {
    let { parentContainerRef: t } = e,
        { quest: n, taskDetails: s } = r.useContext(H),
        [a, o, l] = (0, E.Qo)(n, s),
        u = s.percentComplete > 0,
        c = (0, E.Vn)(n),
        d = (0, E.RR)({ quest: n }),
        _ = o.length > 1 && !u && !c;
    return (0, i.jsxs)(tu, {
        children: [
            (0, i.jsx)(ty, { activeScreen: a, selectPlatform: l }),
            a !== p.X0.SELECT &&
                (0, i.jsxs)("div", {
                    className: tg.oG,
                    children: [
                        _ &&
                            (0, i.jsx)(ek.K, {
                                size: "sm",
                                "aria-label": z.intl.string(z.t["13/7kX"]),
                                onClick: () => l(null),
                                icon: eU.n,
                                variant: "secondary",
                            }),
                        (0, i.jsx)(eA, {
                            awaitingConsoleConnections: d,
                            parentContainerRef: t,
                            hasMadeProgress: u,
                            isProgressing: c,
                            sourceQuestContent: p.uF.QUEST_BAR_V2,
                        }),
                    ],
                }),
        ],
    });
}
function tv(e) {
    let { parentContainerRef: t } = e,
        { quest: n, taskDetails: s } = r.useContext(H),
        a = s.percentComplete > 0,
        o = (0, E.Vn)(n),
        l = r.useCallback(() => {
            (0, y.d5)({
                quest: n,
                questContent: p.uF.QUEST_BAR_V2,
                sourceQuestContent: p.uF.QUEST_BAR_V2,
                sourceQuestContentCTA: b.Cy.QUEST_BAR_VIDEO_QUEST_PREVIEW,
            });
        }, [n]);
    return (0, i.jsxs)(tu, {
        children: [
            (0, i.jsx)(tI, { onClick: l }),
            (0, i.jsx)(eA, {
                parentContainerRef: t,
                awaitingConsoleConnections: !1,
                hasMadeProgress: a,
                isProgressing: o,
                sourceQuestContent: p.uF.QUEST_BAR_V2,
            }),
        ],
    });
}
function tC(e) {
    let { parentContainerRef: t } = e,
        { quest: n, taskDetails: s } = r.useContext(H),
        a = s.percentComplete > 0,
        o = (0, E.Vn)(n);
    return (0, i.jsx)(tu, {
        children: (0, i.jsx)(eA, {
            parentContainerRef: t,
            awaitingConsoleConnections: !1,
            hasMadeProgress: a,
            isProgressing: o,
            sourceQuestContent: p.uF.QUEST_BAR_V2,
        }),
    });
}
function tR(e) {
    let { parentContainerRef: t } = e,
        { quest: n } = r.useContext(H);
    return (0, A.t)({ quest: n }) || (0, A.g5)(n) || (0, A.fE)({ quest: n })
        ? (0, i.jsx)(tN, { parentContainerRef: t })
        : (0, A.vv)(n)
          ? (0, i.jsx)(tv, { parentContainerRef: t })
          : (0, i.jsx)(tC, { parentContainerRef: t });
}
function tO(e) {
    let { overlayRef: t, containerRef: n } = e,
        { quest: s, taskDetails: l } = r.useContext(H),
        { expansionSpring: u } = r.useContext(F),
        c = r.useRef(null),
        d = r.useRef(null),
        _ = (0, E.I3)(s),
        h = null != _ ? _.percentComplete : l.percentComplete;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(o.animated.div, {
                className: a()(tg.tv, tg.ag),
                style: {
                    backgroundImage: `linear-gradient(90deg, ${U}, ${G})`,
                    opacity: (0, P.a)(u.to({ range: [0, 1], output: [1, 0] })),
                },
            }),
            (0, i.jsxs)("div", {
                className: tg.Fe,
                ref: (e) => {
                    "function" == typeof n ? n(e) : null != n && (n.current = e), null != e && (d.current = e);
                },
                children: [
                    (0, i.jsx)(eO, {}),
                    (0, i.jsx)("div", { className: tg.yF }),
                    (0, i.jsx)(ey, { overlayRef: t, progressBarRef: c, isHovered: !1 }),
                    (0, i.jsx)(eC, {
                        contentLocation: "expanded",
                        progressBarRef: c,
                        isExpanded: !0,
                        percentComplete: h,
                        popoutTargetElementRef: d,
                    }),
                    (0, i.jsx)(tR, { parentContainerRef: d }),
                ],
            }),
            (0, i.jsx)("div", {
                className: a()(tg.tv, tg.Sx),
                style: { backgroundImage: `linear-gradient(90deg, ${U}, ${G})` },
            }),
        ],
    });
}
async function tb(e, t, n, i) {
    (0, A.vv)(e)
        ? await (0, y.e0)(e, { questContent: t, questContentCTA: n, sourceQuestContent: i, sourceQuestContentCTA: n })
        : (0, eo.vA)(e)
          ? await (0, eV.Oy)(e.id, { questContent: t, questContentCTA: n, sourceQuestContent: i })
          : (0, eV.Oy)(e.id, { questContent: t, questContentCTA: n, sourceQuestContent: i });
}
let tD = r.forwardRef(function (e, t) {
    let { children: n, className: s, overlayRef: l } = e,
        { collapsedHeight: u, isExpanded: c, isExpansionAnimationComplete: d, quest: _ } = r.useContext(H),
        { expansionSpring: h } = r.useContext(F),
        { launchInGameActivity: f } = (0, E.zW)(_),
        m = (0, eo.vA)(_),
        g = r.useCallback(async () => {
            let e = m ? b.Cy.START_QUEST : b.Cy.ACCEPT_QUEST;
            await tb(_, p.uF.QUEST_BAR_V2, e, p.uF.QUEST_BAR_V2), m && f();
        }, [_, f, m]),
        A = _.userStatus?.enrolledAt != null,
        I = c && d;
    return (0, i.jsxs)(o.animated.div, {
        "aria-hidden": !I,
        inert: !I || void 0,
        className: a()(s, tg.Rh, { [tg.Yd]: I, [tg.iH]: A }),
        style: {
            transform: (0, o.to)(
                [h.to({ range: [0, 1], output: [0, -100] }), h.to({ range: [0, 1], output: [0, u] })],
                (e, t) => `translateY(calc(${e}% + ${t}px))`,
            ),
        },
        children: [
            n,
            (0, i.jsx)(o.animated.div, {
                style: { opacity: 1 },
                children: A
                    ? (0, i.jsx)(tO, { overlayRef: l, containerRef: t })
                    : (0, i.jsx)(tS, { isInteractable: I, containerRef: t, onAcceptQuest: g }),
            }),
        ],
    });
});
var tL = n(717695);
function tw() {
    let {
            expansionSpring: e,
            animatedComponentProps: t,
            recalculateAnimationPositions: n,
            mountPoints: s,
        } = r.useContext(F),
        { isExpanded: a } = r.useContext(H);
    return (
        r.useEffect(() => {
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
                let { id: n, collapsedLeft: r, expandedLeft: a, collapsedTop: l, expandedTop: u, width: c } = t,
                    d = s.get(n);
                return (0, i.jsx)(
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
                                [e.to({ range: [0, 1], output: [r, a] }), e.to({ range: [0, 1], output: [l, u] })],
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
var tM = n(462887),
    tP = n(43990),
    tx = n(736653),
    tk = n(652215),
    tU = n(737595);
function tG(e) {
    let { children: t, isUnenrolled: n } = e,
        r = (0, tx.Ay)(),
        { enabled: s } = (0, ej.A)(n),
        o = s && (0, tM.q)(r);
    return (0, i.jsx)(tP.N, {
        theme: o ? tk.NJ8.DARK : void 0,
        children: (e) => (0, i.jsx)("div", { className: a()(e, tU.k0), children: t }),
    });
}
var tF = n(192308),
    tV = n(561844),
    tB = n(731738),
    tH = n(807393),
    tj = n(260364);
function tY(e) {
    let { isExpanded: t, questId: n } = e;
    return (
        (0, E.H6)({
            mode: t ? tm.fP.EXPANDED : tm.fP.COLLAPSED,
            questContent: p.uF.QUEST_BAR_V2,
            questId: n,
            sourceQuestContent: p.uF.QUEST_BAR_V2,
        }),
        null
    );
}
function tW() {
    return (
        r.useEffect(() => {
            _.trigger();
        }, []),
        null
    );
}
function tK(e) {
    let { quest: t } = e,
        n = (0, g.L)({ quest: t, location: tm.rE.QUESTS_BAR }),
        s = (0, m.s)(),
        c = (0, l.bG)([f.A], () => null != f.A.questEnrollmentBlockedUntil),
        { isQuestBarVisible: d, reason: _ } = (0, S.TQ)({ quest: t }),
        N = (0, l.bG)([h.A], () => h.A.hasLayers()),
        v = r.useRef(null),
        C = r.useMemo(() => (0, A.vv)(t), [t]),
        R = t.id,
        O = t.userStatus?.enrolledAt != null,
        D = (0, u.A)(O),
        L = t.userStatus?.completedAt != null,
        { hasError: w, isLoading: M } = (0, I.Gk)(),
        P = r.useContext(tL.Z) || (s && d && !M && !c),
        {
            isExpanded: x,
            setIsExpanded: k,
            expandQuestBar: U,
            isExpansionAnimationComplete: G,
            isVisibilityAnimationAtRest: F,
            expansionSpring: V,
            visibilitySpring: H,
            springConfig: W,
        } = (function (e) {
            let { isQuestAccepted: t, isQuestCompleted: n, isQuestBarVisible: i } = e,
                s = (0, l.bG)([Y.A], () => Y.A.useReducedMotion),
                [a, o] = r.useState(!1),
                [u, c] = r.useState(!0),
                [d, _] = r.useState(!0),
                h = r.useRef(i),
                f = r.useCallback(
                    (e) => {
                        (n && e) || (a !== e && (c(!1), o(e)));
                    },
                    [n, a],
                ),
                p = r.useCallback(() => {
                    f(!0);
                }, [f]),
                E = r.useCallback(() => {
                    f(!1);
                }, [f]),
                m = t ? tm.ZV : tm.Ko,
                [{ expansionSpring: g }, A] = (0, K.z)(() => ({
                    from: { expansionSpring: 0 },
                    config: m,
                    onRest: () => {
                        c(!0);
                    },
                    onStart: () => {
                        c(!1);
                    },
                }));
            r.useEffect(() => {
                A({ expansionSpring: +!!a, immediate: s });
            }, [a, A, s]);
            let { visibilitySpring: I } = (0, K.z)({
                from: { visibilitySpring: 0 },
                to: { visibilitySpring: +!!i },
                config: { tension: 250, friction: 10, clamp: !0 },
                onRest: () => {
                    _(!0);
                },
                onStart: () => {
                    _(!1);
                },
            });
            return (
                r.useLayoutEffect(() => {
                    i !== h.current && _(!1), (h.current = i);
                }, [i]),
                {
                    isExpanded: a,
                    setIsExpanded: f,
                    expandQuestBar: p,
                    collapseQuestBar: E,
                    isExpansionAnimationComplete: u,
                    isVisibilityAnimationAtRest: d,
                    expansionSpring: g,
                    visibilitySpring: I,
                    springConfig: m,
                }
            );
        })({ isQuestAccepted: O, isQuestCompleted: L, isQuestBarVisible: P }),
        {
            handleCtxMenuOpened: $,
            handleCtxMenuClosed: z,
            handleCtxMenuSelection: q,
            handleGameSheetOpened: X,
            handleGameSheetClosed: Z,
            handleFocusWithoutDelay: Q,
            handleBlur: ee,
            handleMouseEnter: et,
            handleMouseLeave: en,
        } = (function (e) {
            let {
                    quest: t,
                    isExpanded: n,
                    setIsExpanded: i,
                    expandQuestBar: s,
                    isQuestCompleted: a,
                    isQuestAccepted: o,
                    prevIsQuestAccepted: l,
                    impressionRef: u,
                } = e,
                c = r.useRef(-1),
                d = r.useRef(!1),
                [_, h] = r.useState(!1),
                [f, E] = r.useState(!1),
                m = r.useCallback(() => {
                    h(!0);
                }, []),
                g = r.useCallback(() => {
                    h(!1), d.current || a || i(!1);
                }, [a, i]),
                A = r.useCallback(() => {
                    h(!1), a || i(!1), (d.current = !1);
                }, [a, i]),
                I = r.useCallback(() => {
                    E(!0);
                }, []),
                T = r.useCallback(() => {
                    E(!1), i(!1);
                }, [i]),
                S = r.useCallback(
                    function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (n) return;
                        let { withDelay: t = !1 } = e;
                        t ? (c.current = window.setTimeout(s, 75)) : s();
                    },
                    [s, n],
                ),
                y = r.useCallback(() => {
                    S();
                }, [S]),
                N = r.useCallback(() => {
                    window.clearTimeout(c.current), _ || f || d.current || i(!1);
                }, [_, f, i]),
                v = r.useCallback(() => {
                    (0, tV.av)({
                        questId: t.id,
                        event: tk.HAw.QUEST_HOVER,
                        properties: {
                            content_id: p.uF.QUEST_BAR,
                            content_name: (0, b.jO)(p.uF.QUEST_BAR),
                            impression_id: u.current?.getId(),
                        },
                        shouldExtendSession: !0,
                        sourceQuestContent: p.uF.QUEST_BAR_V2,
                    }),
                        (d.current = !0),
                        S({ withDelay: !0 });
                }, [S, u, t.id]),
                C = r.useCallback(() => {
                    (0, tV.av)({
                        questId: t.id,
                        event: tk.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: p.uF.QUEST_BAR,
                            content_name: (0, b.jO)(p.uF.QUEST_BAR),
                            impression_id: u.current?.getId(),
                        },
                        sourceQuestContent: p.uF.QUEST_BAR_V2,
                    }),
                        (d.current = !1),
                        N();
                }, [N, u, t.id]);
            r.useEffect(() => {
                f && d.current && C();
            }, [f, C]),
                r.useLayoutEffect(() => {
                    o && !l && d.current && s();
                }, [s, o, l]),
                r.useLayoutEffect(() => {
                    a || !o || l || d.current || i(!1);
                }, [o, a, l, i]);
            let R = (0, tF.useHasAnyModalOpen)();
            return (
                r.useEffect(() => {
                    R && d.current && C();
                }, [C, R]),
                {
                    ctxMenuOpen: _,
                    gameSheetOpen: f,
                    handleCtxMenuOpened: m,
                    handleCtxMenuClosed: g,
                    handleCtxMenuSelection: A,
                    handleGameSheetOpened: I,
                    handleGameSheetClosed: T,
                    handleFocus: S,
                    handleFocusWithoutDelay: y,
                    handleBlur: N,
                    handleMouseEnter: v,
                    handleMouseLeave: C,
                }
            );
        })({
            quest: t,
            isExpanded: x,
            setIsExpanded: k,
            expandQuestBar: U,
            isQuestCompleted: L,
            isQuestAccepted: O,
            prevIsQuestAccepted: D,
            impressionRef: v,
        });
    !(function (e) {
        let {
            quest: t,
            hasAssetsError: n,
            isEligibleForQuests: i,
            isQuestBarVisible: s,
            isVisibilityAnimationAtRest: a,
            isLoadingAssets: o,
            currentQuestVisibleReason: l,
            shouldShowQuestBar: u,
            isQuestEnrollmentBlocked: c,
            impressionRef: d,
        } = e;
        r.useEffect(() => {
            n &&
                ((0, tV.av)({
                    questId: t.id,
                    event: tk.HAw.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        content_id: p.uF.QUEST_BAR,
                        content_name: (0, b.jO)(p.uF.QUEST_BAR),
                        reason: "asset_loading_error",
                        impression_id: d.current?.getId(),
                    },
                    sourceQuestContent: p.uF.QUEST_BAR_V2,
                }),
                tH.A.increment({
                    name: tB.K.QUEST_CONTENT_RENDERING_FAILURE,
                    tags: [
                        `quest_id:${t.id}`,
                        `quest_content:${(0, b.jO)(p.uF.QUEST_BAR)}`,
                        "reason:asset_loading_error",
                    ],
                }));
        }, [n, d, t.id]),
            r.useEffect(() => {
                i ||
                    (0, tV.av)({
                        questId: t.id,
                        event: tk.HAw.QUEST_CONTENT_RENDERING_FAILURE,
                        properties: {
                            content_id: p.uF.QUEST_BAR,
                            content_name: (0, b.jO)(p.uF.QUEST_BAR),
                            reason: "not_eligible_for_quest",
                            impression_id: d.current?.getId(),
                        },
                        sourceQuestContent: p.uF.QUEST_BAR_V2,
                    });
            }, [i, d, t.id]),
            r.useEffect(() => {
                s ||
                    !a ||
                    o ||
                    (0, tV.av)({
                        questId: t.id,
                        event: tk.HAw.QUEST_CONTENT_RENDERING_FAILURE,
                        properties: {
                            content_id: p.uF.QUEST_BAR,
                            content_name: (0, b.jO)(p.uF.QUEST_BAR),
                            reason: l,
                            impression_id: d.current?.getId(),
                        },
                        sourceQuestContent: p.uF.QUEST_BAR_V2,
                    });
            }, [s, a, o, t.id, l, d]),
            r.useEffect(() => {
                (!u || c) && tj.A.clearTracking(), s && a && !o && !n && i && tj.A.stopTracking(t.id);
            }, [u, c, s, a, o, n, i, t.id]);
    })({
        quest: t,
        hasAssetsError: w,
        isEligibleForQuests: s,
        isQuestBarVisible: P,
        isVisibilityAnimationAtRest: F,
        isLoadingAssets: M,
        currentQuestVisibleReason: _,
        shouldShowQuestBar: d,
        isQuestEnrollmentBlocked: c,
        impressionRef: v,
    });
    let ei = r.useRef(null),
        er = r.useRef(null),
        es = r.useRef(null),
        ea = (0, E.fc)(t),
        eo = (0, E.UH)(t);
    if (
        (r.useEffect(() => {
            C && (0, y.l9)();
        }, [C]),
        !s || (!P && F && !M) || w)
    )
        return w ? n.log("Not rendered due to asset error") : s || n.log("Not rendered due to ineligibility"), null;
    let el = 70 + 78 * !!L;
    return (0, i.jsx)(T.R, {
        questOrQuests: t,
        questContent: p.uF.QUEST_BAR_V2,
        overrideVisibility: !N && P,
        onImpression: eo,
        sourceQuestContent: p.uF.QUEST_BAR_V2,
        children: (e, n) => (
            (v.current = n.current),
            (0, i.jsxs)("div", {
                className: tU.dK,
                children: [
                    P &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)(tY, { questId: R, isExpanded: x }), (0, i.jsx)(tW, {})],
                        }),
                    (0, i.jsx)(tG, {
                        isUnenrolled: !O,
                        children: (0, i.jsx)(o.animated.div, {
                            "aria-hidden": !P,
                            onMouseLeave: en,
                            onMouseEnter: et,
                            onFocus: Q,
                            onBlur: ee,
                            className: a()(tU.iE, { [tU.Xc]: !P, [tU.uv]: P && F }),
                            style: { height: H.to({ range: [0, 1], output: [0, el] }) },
                            children: (0, i.jsx)(o.animated.div, {
                                className: a()(tU.FG, { [tU.E$]: x, [tU.KA]: O }),
                                children: (0, i.jsx)(tl, {
                                    springConfig: W,
                                    isExpanded: x,
                                    children: (0, i.jsx)(B, {
                                        expandedContentRef: ei,
                                        collapsedContentRef: er,
                                        expansionSpring: V,
                                        children: (0, i.jsxs)(j, {
                                            quest: t,
                                            taskDetails: ea,
                                            isExpanded: x,
                                            isExpansionAnimationComplete: G,
                                            onCtxMenuClose: z,
                                            onCtxMenuOpen: $,
                                            onCtxMenuSelect: q,
                                            onGameSheetOpen: X,
                                            onGameSheetClose: Z,
                                            collapsedHeight: el,
                                            children: [
                                                (0, i.jsx)(
                                                    eD,
                                                    { ref: er, className: tU.Qs, overlayRef: es },
                                                    L ? "collapsed-with-rewards" : "collapsed-without-rewards",
                                                ),
                                                (0, i.jsx)(tD, {
                                                    className: tU.Qs,
                                                    overlayRef: es,
                                                    ref: ei,
                                                    children: (0, i.jsxs)(i.Fragment, {
                                                        children: [(0, i.jsx)(tw, {}), !O && (0, i.jsx)(J, {})],
                                                    }),
                                                }),
                                                (0, i.jsx)("div", { ref: es, className: tU.Lw }),
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
let t$ = function () {
    let e = (0, S.dN)();
    return null == e
        ? null
        : (0, i.jsx)(I.jY, { source: tm.rE.QUESTS_BAR, questId: e.id, children: (0, i.jsx)(tK, { quest: e }) }, e.id);
};
