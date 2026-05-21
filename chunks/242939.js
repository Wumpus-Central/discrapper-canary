"use strict";
n.d(t, { A: () => tH, Y: () => tB });
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
var f = n(186111),
    h = n(859703),
    p = n(507107),
    E = n(31587),
    m = n(971276),
    g = n(851936),
    A = n(792620),
    I = n(241124),
    T = n(73473),
    S = n(371912),
    N = n(617986),
    y = n(939249),
    C = n(834730),
    v = n(290136),
    O = n(661531),
    R = n(365199),
    b = n(590202),
    D = n(971649),
    L = n(901406),
    w = n(270045),
    M = n(57718),
    P = n(398025);
n(321073);
var x = n(340287),
    U = n(765671);
let k = "#00000000",
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
                mountPoints: f,
            } = r.useContext(F),
            h = r.useRef(null),
            p = r.useRef(null),
            E = r.useRef(void 0);
        r.useEffect(() => {
            u();
        }, [u]),
            r.useLayoutEffect(() => {
                let e = h.current;
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
        (0, U.i4)(h, m);
        let g = f.get(s)?.current,
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
                children: [n(h), A],
            })
        );
    }),
    B = (e) => {
        let { children: t, expandedContentRef: n, collapsedContentRef: s, expansionSpring: a } = e,
            [o, l] = r.useState({}),
            [u, c] = r.useState([]),
            [d, _] = r.useState(() => new Map()),
            f = r.useCallback((e, t, n) => {
                l((i) => {
                    let r = i[t] ?? { expanded: null, collapsed: null };
                    return { ...i, [t]: { ...r, [n]: e } };
                }),
                    _((e) => {
                        let n = new Map(e);
                        return n.set(t, r.createRef()), n;
                    });
            }, []),
            h = r.useCallback((e, t) => {
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
                        f = a.left - l.left + 12,
                        h = u.left - c.left,
                        p = -a.right + l.right + 12,
                        E = -u.right + c.right;
                    e.push({
                        id: t,
                        collapsedLeft: h,
                        expandedLeft: f,
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
                registerComponent: f,
                unregisterComponent: h,
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
    };
var H = n(946080);
let j = r.createContext({
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
    Y = r.createContext({ hasAlreadyLinked: void 0, onClickGameTitle: void 0 });
function W(e) {
    let { children: t, quest: n } = e,
        { hasAlreadyLinked: s } = (0, H.U)(n),
        a = (0, D.go)(),
        o = r.useCallback(() => {
            (0, L.pu)(n, {
                content: p.uF.QUEST_BAR_V2,
                ctaContent: b.Cy.OPEN_GAME_LINK,
                impressionId: a,
                sourceQuestContent: p.uF.QUEST_BAR_V2,
            });
        }, [n.id, n.config, a]),
        l = r.useMemo(() => ({ hasAlreadyLinked: s, onClickGameTitle: o }), [s, o]);
    return (0, i.jsx)(Y.Provider, { value: l, children: t });
}
function K(e) {
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
            taskDetails: f,
        } = e,
        h = r.useMemo(
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
                taskDetails: f,
            }),
            [n, s, a, o, l, u, c, d, _, f],
        );
    return (0, i.jsx)(j.Provider, { value: h, children: (0, A.I6)(_) ? (0, i.jsx)(W, { quest: _, children: t }) : t });
}
var z = n(775602),
    $ = n(646764),
    q = n(717421);
let Z = () => {
    let e = document.body.style.getPropertyValue("--custom-guild-sidebar-width").slice(0, -2);
    return parseInt("" !== e ? e : "375");
};
var X = n(375708),
    Q = n(173399);
let J = (e) => {
    let { isFullyExpanded: t, partnerBranding: n } = e,
        s = {
            label: !(function () {
                let [e, t] = r.useState(() => 270 > Z());
                return (
                    r.useEffect(() => {
                        let e = new MutationObserver(() => {
                            t(270 > Z());
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
        u = (0, l.bG)([z.A], () => z.A.useReducedMotion),
        { quest: c } = r.useContext(j),
        { expansionSpring: d } = r.useContext(F),
        _ = s ? -4 : 6;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(o.animated.div, {
                className: Q.tE,
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
                children: (0, i.jsx)($.A, {
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
                className: a()(Q.pm, { [Q.nd]: s }),
                style: {
                    transform: (0, o.to)(
                        [d.to({ range: [0, 1], output: [0, -48] }), d.to({ range: [0, 1], output: [0, _] })],
                        (e, t) => `translate(${e}px, ${t}px)`,
                    ),
                },
                children: [
                    (0, i.jsx)("div", { className: a()({ [Q.Iu]: !s }), children: n }),
                    (0, i.jsx)(o.animated.div, {
                        className: a()(Q.ol, { [Q.yZ]: s }),
                        style: { opacity: (0, P.a)(d.to({ range: [0, 1], output: [s ? 1 : 0.7, 0] })) },
                        children: (0, i.jsx)(C.E, {
                            color: "always-white",
                            lineClamp: 1,
                            variant: "text-xs/medium",
                            children: X.intl.string(X.t["3mgEQf"]),
                        }),
                    }),
                ],
            }),
        ],
    });
};
var ee = n(173839);
let et = (0, o.animated)(M.Ay),
    en = () => {
        let e = (0, D.go)(),
            { expansionSpring: t } = r.useContext(F),
            {
                onCtxMenuOpen: n,
                onCtxMenuClose: s,
                onCtxMenuSelect: l,
                isExpanded: u,
                isExpansionAnimationComplete: c,
                quest: d,
            } = r.useContext(j),
            _ = r.useCallback(() => {
                (0, N.Zc)(d, {
                    content: p.uF.QUEST_BAR_V2,
                    ctaContent: b.Cy.OPEN_DISCLOSURE,
                    sourceQuestContent: p.uF.QUEST_BAR_V2,
                });
            }, [d]),
            f = r.useCallback(() => {
                (0, L.pu)(d, {
                    content: p.uF.QUEST_BAR_V2,
                    ctaContent: b.Cy.OPEN_GAME_LINK,
                    impressionId: e,
                    sourceQuestContent: p.uF.QUEST_BAR_V2,
                });
            }, [e, d]),
            h = u && c,
            E = (0, i.jsx)(y.D, {
                onClick: f,
                className: a()(ee.vk, { [ee.wm]: h }),
                children: (0, i.jsx)(et, {
                    quest: d,
                    withGameTile: !1,
                    logotypeClassName: ee.Iu,
                    logotypeStyle: {
                        height: 24,
                        maxWidth: 92,
                        transform: (0, o.to)([t.to({ range: [0, 1], output: [1, 1] })], (e) => `scale(${e})`),
                    },
                }),
            });
        return (0, i.jsxs)(o.animated.div, {
            className: a()(ee.iE, ee.Ht, { [ee.tT]: h }),
            style: { transform: (0, o.to)([t.to({ range: [0, 1], output: [6, 0] })], (e) => `translateY(${e}px)`) },
            children: [
                (0, i.jsx)(o.animated.div, {
                    className: ee.Tu,
                    style: { opacity: (0, P.a)(t.to({ range: [0, 1], output: [0, 1] })) },
                }),
                (0, i.jsx)(J, { isFullyExpanded: h, partnerBranding: E }),
                (0, i.jsxs)(o.animated.div, {
                    className: ee.P0,
                    style: { opacity: (0, P.a)(t.to({ range: [0, 1], output: [0, 1] })) },
                    children: [
                        (0, i.jsxs)(y.D, {
                            className: ee.y8,
                            onClick: _,
                            children: [
                                (0, i.jsx)(C.E, {
                                    color: "always-white",
                                    variant: "text-xs/normal",
                                    children: X.intl.string(X.t.o6FLcF),
                                }),
                                (0, i.jsx)(v.c, { color: O.A.colors.WHITE, className: ee.P$ }),
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
                                (0, i.jsx)(y.D, {
                                    ...e,
                                    className: a()(ee.uJ, ee.rb),
                                    "aria-label": X.intl.string(X.t.DEoVWZ),
                                    children: (0, i.jsx)(R.j, {
                                        size: "md",
                                        color: "currentColor",
                                        className: a()(ee.Bx, ee.ON),
                                    }),
                                }),
                        }),
                    ],
                }),
            ],
        });
    };
var ei = n(821609),
    er = n(862482),
    es = n(793574),
    ea = n(859040),
    eo = n(838077),
    el = n(651892),
    eu = n(801365),
    ec = n(814793),
    ed = n(753386),
    e_ = n(368715),
    ef = n(79545),
    eh = n(862611),
    ep = n(758836),
    eE = n(519508);
function em(e) {
    let { quest: t, sourceQuestContent: n, taskDetails: r } = e;
    return (0, i.jsx)(ei.$, {
        variant: "primary",
        fullWidth: !0,
        onClick: () => {
            let e = t.userStatus?.enrolledAt == null ? b.Cy.ACCEPT_QUEST : b.Cy.WATCH_VIDEO;
            (0, N.d5)({ quest: t, questContent: p.uF.QUEST_BAR_V2, sourceQuestContent: n, sourceQuestContentCTA: e });
        },
        size: "sm",
        text: (0, ed.WM)(r),
    });
}
let eg = (e) => {
        let { quest: t, sourceQuestContent: n } = e,
            r = (0, D.go)(),
            s = (0, el.wr)(t);
        return (0, i.jsx)(ei.$, {
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
    eA = (e) => {
        let { quest: t, sourceQuestContent: n } = e,
            r = (0, D.vU)()?.getId();
        return (0, i.jsx)(ei.$, {
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
            text: X.intl.string(X.t.csptqV),
        });
    },
    eI = (e) => {
        let { quest: t } = e,
            n = (0, eo.NA)({ quest: t }),
            { launchInGameActivity: r } = (0, E.zW)(t);
        return (0, ec.vA)(t)
            ? (0, i.jsx)(ei.$, {
                  fullWidth: !0,
                  variant: "primary",
                  icon: (0, N.Oz)(t),
                  onClick: r,
                  size: "sm",
                  text: n,
              })
            : null;
    },
    eT = (e) => {
        let {
                quest: t,
                sourceQuestContent: n,
                taskDetails: r,
                popoutTargetElementRef: s,
                onGameSheetOpened: a,
                onGameSheetClosed: o,
            } = e,
            { applications: l } = r;
        return (0, i.jsx)(eh.A, {
            quest: t,
            sourceQuestContent: n,
            applications: l ?? [],
            targetElementRef: s,
            onGameSheetOpened: a,
            onGameSheetClosed: o,
            children: (e) =>
                (0, i.jsx)(ei.$, {
                    variant: "secondary",
                    fullWidth: !0,
                    size: "sm",
                    text: X.intl.string(X.t["93PTEs"]),
                    ...e,
                }),
        });
    },
    eS = (e) => {
        let { quest: t, ctaLabel: n, onClick: s, questContent: a = p.uF.QUEST_BAR_V2, sourceQuestContent: o, ...l } = e,
            u = (0, S.ix)({ quest: t, questContent: a, sourceQuestContent: o }),
            c = r.useCallback(
                (e) => {
                    s?.(e),
                        (0, eu.ks)(t.config) && t.userStatus?.claimedAt != null
                            ? (0, ea.Cz)({
                                  tab: ep.G2.ORBS,
                                  analyticsLocations: [],
                                  analyticsSource: es.A.QUEST_HOME_PAGE,
                              })
                            : u();
                },
                [s, t.config, t.userStatus?.claimedAt, u],
            );
        return (0, i.jsx)(ei.$, {
            fullWidth: !0,
            onClick: c,
            text: n ?? X.intl.string(X.t.cfY4PE),
            ...l,
            size: l.size === er.$n.Sizes.MEDIUM ? "md" : "sm",
        });
    },
    eN = (e) => {
        let {
                sourceQuestContent: t,
                awaitingConsoleConnections: n,
                hasMadeProgress: s,
                isProgressing: a,
                popoutTargetElementRef: o,
            } = e,
            { quest: l, onGameSheetOpen: u, onGameSheetClose: c, taskDetails: d } = r.useContext(j),
            [_] = (0, E.Qo)(l, d),
            f = l.userStatus?.completedAt != null,
            h = (0, A.vv)(l),
            m = (0, A.I6)(l),
            g = _ !== p.X0.SELECT && !s && !a,
            I = null;
        return (
            f
                ? (I = (0, i.jsx)(eS, { quest: l, sourceQuestContent: t }))
                : m
                  ? (I = (0, i.jsx)(e_.A, {
                        quest: l,
                        surface: ef.V3.QUEST_BAR_FOOTER,
                        size: "sm",
                        analyticsCtxQuestContent: p.uF.QUEST_BAR_V2,
                        analyticsCtxSourceQuestContent: t,
                    }))
                  : h
                    ? (I = (0, i.jsx)(em, { quest: l, sourceQuestContent: t, taskDetails: d }))
                    : (0, ec.vA)(l)
                      ? (I = (0, i.jsx)(eI, { quest: l }))
                      : _ === p.X0.CONSOLE && n
                        ? (I = (0, i.jsx)(eA, { quest: l, sourceQuestContent: t }))
                        : g && (0, ec.ui)(l)
                          ? (I = (0, i.jsx)(eT, {
                                quest: l,
                                sourceQuestContent: t,
                                taskDetails: d,
                                popoutTargetElementRef: o,
                                onGameSheetOpened: u,
                                onGameSheetClosed: c,
                            }))
                          : g && (I = (0, i.jsx)(eg, { quest: l, sourceQuestContent: t })),
            null == I ? null : (0, i.jsx)("div", { className: eE.lO, children: I })
        );
    };
function ey(e) {
    return (0, i.jsx)(eN, { ...e, popoutTargetElementRef: e.parentContainerRef });
}
var eC = n(106778),
    ev = n(536283),
    eO = n(947638);
let eR = (e) => {
    let { overlayRef: t, progressBarRef: n, isHovered: s } = e,
        { quest: c, isExpanded: d } = r.useContext(j),
        { expansionSpring: _ } = r.useContext(F),
        { completionSpring: h, startCompletionAnimation: p } = (function () {
            let [{ spring: e }, t] = (0, q.z)(() => ({ spring: 0 }), "animate-always");
            return {
                completionSpring: e,
                startCompletionAnimation: r.useCallback(() => {
                    t({ spring: 1 }), t({ spring: 0, delay: 2e3 });
                }, [t]),
            };
        })(),
        E = c.userStatus?.completedAt != null,
        m = r.useRef(!1),
        g = (0, l.bG)([z.A], () => z.A.useReducedMotion),
        A = r.useRef(null),
        I = (0, l.bG)([f.A], () => f.A.hasLayers()),
        T = (0, u.A)(I),
        [S, N] = r.useState(null),
        [y, C] = r.useState(null),
        v = r.useRef(new eC.OH({ gravity: 0, wind: 0 })),
        O = (0, eC.f9)(S, y),
        R = r.useMemo(() => ["#51BC9D"], []),
        b = r.useCallback(() => {
            if (g) return;
            let e = n.current,
                t = A.current;
            if (null != t && null != e && O.isReady) {
                var i, r, s, a;
                let { x: n, y: o } = e.getBoundingClientRect(),
                    { x: l, y: u } = t.getBoundingClientRect();
                O.createMultipleConfetti(
                    ((i = n - l),
                    (r = o - u),
                    (s = e.clientHeight),
                    (a = e.clientWidth),
                    {
                        ...ev.Mw,
                        position: { type: "static-random", minValue: { x: i, y: r }, maxValue: { x: i + s, y: r + a } },
                        velocity: { type: "static-random", minValue: { x: -20, y: -20 }, maxValue: { x: 20, y: 20 } },
                        opacity: { type: "linear", value: 2, addValue: -0.1 },
                        dragCoefficient: { type: "static", value: 0.166 },
                        size: { type: "static-random", minValue: 2, maxValue: 3 },
                    }),
                    100,
                );
            }
        }, [n, A, O, g]),
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
        O.isReady && (!m.current && E && (p(), b()), (m.current = E));
    }, [E, m, b, p, O]),
    r.useEffect(() => {
        s && E && (p(), b());
    }, [s, E, p, b]),
    g)
        ? null
        : (0, i.jsxs)("div", {
              className: eO.iE,
              "aria-hidden": "true",
              ref: A,
              children: [
                  (0, i.jsx)(o.animated.div, { className: eO.Tp, style: { opacity: (0, P.a)(h) } }),
                  (0, i.jsx)(o.animated.div, { className: a()(eO.sJ, eO.ix), style: { opacity: (0, P.a)(h) } }),
                  (0, i.jsxs)(o.animated.div, {
                      className: eO.KG,
                      style: { transform: _.to({ range: [0, 1], output: [-35, 0] }).to((e) => `translateY(${e}px)`) },
                      children: [
                          (0, i.jsx)(eC.Fk, { ref: N, className: eO.t_, environment: v.current }),
                          (0, i.jsx)(eC.K_, {
                              ref: C,
                              sprites: ["/assets/b909790cf1d80597.svg"],
                              colors: R,
                              spriteWidth: ev.wn,
                              spriteHeight: ev.wn,
                          }),
                          null != t.current &&
                              (0, x.createPortal)(
                                  (0, i.jsx)(o.animated.div, {
                                      className: a()(eO.sJ, eO.d7),
                                      style: { opacity: (0, P.a)(h) },
                                  }),
                                  t.current,
                              ),
                      ],
                  }),
              ],
          });
};
var eb = n(453384),
    eD = n(460131);
let eL = (e) => {
    let { isExpanded: t, contentLocation: n, progressBarRef: s, percentComplete: a, popoutTargetElementRef: o } = e,
        { quest: l, onGameSheetOpen: u, onGameSheetClose: c, taskDetails: d } = r.useContext(j),
        { hasAlreadyLinked: _, onClickGameTitle: f } = r.useContext(Y),
        [h] = (0, E.Qo)(l, d),
        m = (0, eo.VX)(l, _),
        g = (0, eo.tH)({
            quest: l,
            isExpanded: t,
            activeScreen: h,
            sourceQuestContent: p.uF.QUEST_BAR_V2,
            popoutTargetElementRef: o,
            onGameSheetOpened: u,
            onGameSheetClosed: c,
            hasAlreadyLinked: _,
            onClickGameTitle: f,
        });
    return (0, i.jsxs)("div", {
        className: eD.Z0,
        children: [
            (0, i.jsx)(V, {
                inState: n,
                id: "progress-bar",
                ref: s,
                children: (e) =>
                    (0, i.jsx)(eb.A, {
                        ref: e,
                        style: "small",
                        percentComplete: a,
                        size: 42,
                        children: (0, i.jsx)($.A, {
                            fullWidth: !0,
                            quest: l,
                            questContent: p.uF.QUEST_BAR_V2,
                            autoplay: !1,
                            sourceQuestContent: p.uF.QUEST_BAR_V2,
                        }),
                    }),
            }),
            (0, i.jsxs)("div", {
                className: eD.NZ,
                children: [
                    (0, i.jsx)(V, {
                        inState: n,
                        id: "progress-title",
                        children: (e) =>
                            (0, i.jsx)(C.E, {
                                ref: e,
                                className: eD.FZ,
                                color: "text-strong",
                                variant: "text-sm/semibold",
                                children: m,
                            }),
                    }),
                    (0, i.jsx)(V, {
                        inState: n,
                        id: "progress-subtitle",
                        isTextTransition: !0,
                        children: (e) =>
                            (0, i.jsx)(C.E, {
                                ref: e,
                                className: eD.FZ,
                                color: "text-subtle",
                                variant: "text-xs/normal",
                                children: g,
                            }),
                    }),
                ],
            }),
        ],
    });
};
var ew = n(78385);
function eM() {
    let { quest: e, onCtxMenuOpen: t, onCtxMenuClose: n, onCtxMenuSelect: s } = r.useContext(j),
        o = (0, E.S5)(e.config.expiresAt);
    return (0, i.jsxs)("div", {
        className: ew.pS,
        children: [
            (0, i.jsx)(C.E, {
                variant: "text-xxs/medium",
                className: a()(ew.Uu, ew.TK),
                children: X.intl.format(X.t["pX+fmn"], { expirationDate: o }),
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
                    (0, i.jsx)(y.D, {
                        ...e,
                        className: ew.rb,
                        "aria-label": X.intl.string(X.t.DEoVWZ),
                        children: (0, i.jsx)(R.j, { size: "md", color: "currentColor", className: a()(ew.Bx, ew.U9) }),
                    }),
            }),
        ],
    });
}
var eP = n(249309);
let ex = r.forwardRef(function (e, t) {
    let { className: n, overlayRef: s } = e,
        { expansionSpring: l } = r.useContext(F),
        { quest: u, taskDetails: c, isExpanded: d, isExpansionAnimationComplete: _ } = r.useContext(j),
        f = u.userStatus?.completedAt != null,
        h = (0, E.I3)(u),
        m = r.useRef(null),
        g = u.userStatus?.enrolledAt != null,
        A = null != h ? h.percentComplete : c.percentComplete,
        I = r.useRef(null),
        [T, S] = r.useState(!1);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            f && (0, i.jsx)(eR, { overlayRef: s, progressBarRef: m, isHovered: T }),
            (0, i.jsx)(o.animated.div, {
                ref: t,
                "aria-hidden": d && _,
                className: a()(n, eP.hR, { [eP.Ag]: d, [eP.s]: g }),
                style: {
                    opacity: (0, P.a)(l.to({ range: [0, 1], output: [1, 0] })),
                    backgroundImage: f ? `linear-gradient(90deg, ${k}, ${G})` : void 0,
                },
                onMouseEnter: () => S(!0),
                onMouseLeave: () => S(!1),
                children: (0, i.jsxs)("div", {
                    className: eP.o8,
                    children: [
                        f &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(eM, {}), (0, i.jsx)("div", { className: eP.yF })],
                            }),
                        g
                            ? (0, i.jsx)(eL, {
                                  contentLocation: "collapsed",
                                  progressBarRef: m,
                                  isExpanded: !1,
                                  percentComplete: A,
                              })
                            : null,
                        f &&
                            (0, i.jsx)("div", {
                                ref: I,
                                children: (0, i.jsx)(ey, {
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
var eU = n(889137),
    ek = n(417270),
    eG = n(782134),
    eF = n(534514),
    eV = n(825484),
    eB = n(408278),
    eH = n(921853),
    ej = n(607470),
    eY = n(409626),
    eW = n(340124),
    eK = n(405670),
    ez = n(112142),
    e$ = n(646917),
    eq = n(551875),
    eZ = n(576761),
    eX = n(895253),
    eQ = n(976019),
    eJ = n(442734),
    e0 = n(139384),
    e1 = n(114046),
    e2 = n(695366),
    e3 = n(30370),
    e6 = n(18437),
    e4 = n(780964),
    e5 = n(766075),
    e7 = n(540037);
function e8(e) {
    let { text: t, quest: n, sourceQuestContent: r } = e,
        s = (0, e6.Ut)();
    return (0, i.jsx)(y.D, {
        className: e7.Z0,
        onClick: () => {
            s({
                questId: n.id,
                questContent: p.uF.QUEST_BAR_V2,
                questContentCTA: b.Cy.VIEW_CONSOLE_CONNECTIONS_LINK,
                sourceQuestContent: r,
            }),
                (0, e5.openUserSettings)(e4.X.CONNECTIONS_PANEL);
        },
        children: (0, i.jsx)(C.E, { "aria-label": t, color: "none", variant: "text-xxs/normal", children: t }),
    });
}
function e9(e) {
    let { xboxAndPlaystationAccounts: t, quest: n, sourceQuestContent: r } = e;
    return t.length > 0
        ? (0, i.jsx)(e8, { text: X.intl.string(X.t["qiS+xj"]), quest: n, sourceQuestContent: r })
        : null;
}
function te(e) {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(C.E, { color: "text-muted", variant: "text-xs/medium", children: X.intl.string(X.t.EJFSvD) }),
            (0, i.jsx)(e9, { ...e }),
        ],
    });
}
var tt = n(52093),
    tn = n(256023);
function ti(e) {
    return (0, i.jsx)(C.E, { className: tn.eW, color: "text-muted", variant: "text-xxs/normal", children: e.children });
}
function tr(e) {
    let { quest: t, useReducedMotion: n } = e,
        s = (0, S.H1)(t.id, p.uF.QUEST_BAR_V2, p.uF.QUEST_BAR_V2),
        o = (0, S.Xf)({ useReducedMotion: n }),
        l = (0, e6.Ut)(),
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
        { header: f, renderBody: h } = r.useMemo(() => {
            let e = c.length > 0,
                n = t.config.messages.gameTitle;
            return {
                header: e
                    ? (0, ec.ui)(t)
                        ? X.intl.string(X.t.N33EuL)
                        : X.intl.formatToPlainString(X.t["28Ql27"], { gameTitle: n })
                    : (0, ec.ui)(t)
                      ? X.intl.string(X.t.YstzGO)
                      : X.intl.formatToPlainString(X.t.gX0Qcx, { gameTitle: n }),
                renderBody: e
                    ? () =>
                          (0, i.jsx)(i.Fragment, {
                              children: c.map((e, n) => {
                                  if (e.type === e1._.EXPIRED_CREDENTIAL) {
                                      let r = e3.A.getAccount(e.connected_account_id, e.connected_account_type),
                                          s = (0, L.IG)(e),
                                          a = (0, L.$J)(e);
                                      return (0, i.jsx)(
                                          ti,
                                          {
                                              children: X.intl.format(s, {
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
                                  return (0, i.jsx)(ti, { children: e.message }, n);
                              }),
                          })
                    : () =>
                          (0, i.jsx)(C.E, {
                              className: tn.eW,
                              color: "text-muted",
                              variant: "text-xxs/normal",
                              children: (0, ec.ui)(t)
                                  ? X.intl.string(X.t.bUyEZZ)
                                  : X.intl.format(X.t.GXqvC1, { gameTitle: n }),
                          }),
            };
        }, [c, t, u]);
    return (0, i.jsxs)("div", {
        className: tn.XK,
        children: [
            (0, i.jsxs)("div", {
                className: tn.oK,
                children: [
                    (0, i.jsx)(e2.E, {
                        size: "custom",
                        color: "currentColor",
                        className: 0 === c.length ? tn.pH : tn.JA,
                        width: 16,
                        height: 16,
                    }),
                    (0, i.jsx)(C.E, { variant: "text-xs/medium", children: f }),
                    (0, i.jsx)(y.D, { className: a()(tn.w, { [tn.r9]: d }), onClick: () => _(), children: o.render() }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: a()({ [tn.Iu]: d }),
                children: [h(), 0 === c.length ? null : (0, i.jsx)(ti, { children: s })],
            }),
        ],
    });
}
let ts = function (e) {
        let { quest: t, taskDetails: n } = e,
            s = (0, l.bG)([z.A], () => z.A.useReducedMotion),
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
                                (0, i.jsx)(te, { ...a, quest: t, sourceQuestContent: p.uF.QUEST_BAR_V2 }),
                            isComplete: e || r || l,
                        },
                        {
                            renderContent: () =>
                                (0, i.jsx)(tt.L5, {
                                    children: (0, ec.ui)(t)
                                        ? X.intl.string(X.t["5tXqFe"])
                                        : X.intl.formatToPlainString(X.t["+8JB6Y"], { gameTitle: s }),
                                }),
                            isComplete: r || l,
                        },
                        {
                            renderContent: () =>
                                (0, i.jsx)(tt.L5, {
                                    children: X.intl.formatToPlainString(X.t.HhfrYS, { numMinutes: n.targetMinutes }),
                                }),
                            isComplete: l,
                        },
                    ],
                    hasConnectedAccounts: e,
                    isProgressingQuestForLaunchedGame: r,
                    isQuestComplete: l,
                };
            }, [a, o.length, t, n.targetMinutes]);
        return (0, i.jsx)(tt.Ay, {
            heading: X.intl.string(X.t.UPWlJu),
            steps: u,
            children: c && !d && !_ && (0, i.jsx)(tr, { useReducedMotion: s, quest: t }),
        });
    },
    ta = r.createContext({ springConfig: {}, isExpanded: !1 });
function to(e) {
    let t = r.useMemo(
        () => ({ springConfig: e.springConfig, isExpanded: e.isExpanded }),
        [e.springConfig, e.isExpanded],
    );
    return (0, i.jsx)(ta.Provider, { value: t, children: e.children });
}
function tl(e) {
    let { children: t } = e,
        { springConfig: n, isExpanded: s } = r.useContext(ta),
        a = (0, l.bG)([z.A], () => z.A.useReducedMotion),
        { ref: c, height: d = null } = (0, U.Ay)(),
        _ = (0, u.A)(d) ?? null,
        [{ height: f }, h] = (0, q.z)(() => ({ from: { height: 0 }, config: n }));
    return (
        r.useLayoutEffect(() => {
            null !== d && h({ height: d, immediate: !s || a || null === _ });
        }, [d, h, s, a, _]),
        (0, i.jsx)(o.animated.div, {
            style: { height: null === _ ? "auto" : f, overflow: "hidden" },
            children: (0, i.jsx)("div", { style: { overflow: "hidden" }, ref: c, children: t }),
        })
    );
}
n(134528), n(947204);
var tu = n(909714);
function tc(e) {
    let { header: t, children: n } = e;
    return (0, i.jsxs)("div", {
        className: tu.Nr,
        children: [
            (0, i.jsxs)("div", {
                className: tu.wx,
                children: [
                    (0, i.jsx)(e2.E, {
                        size: "custom",
                        color: "currentColor",
                        className: tu.Kk,
                        width: 16,
                        height: 16,
                    }),
                    (0, i.jsx)(eF.D, { color: "text-default", variant: "heading-sm/medium", children: t }),
                ],
            }),
            (0, i.jsx)(C.E, { color: "text-muted", variant: "text-xs/normal", className: tu.r2, children: n }),
        ],
    });
}
let td = function (e) {
    let { quest: t } = e,
        n = (0, E.aC)(t);
    if (0 === n.length) return null;
    let r = n.at(0);
    return r === X.intl.string(X.t.BV6xDm)
        ? (0, i.jsx)(tc, { header: X.intl.string(X.t.onh6ct), children: X.intl.string(X.t.arVHRA) })
        : r === X.intl.string(X.t.MFGxFM)
          ? (0, i.jsx)(tc, { header: X.intl.string(X.t.JPihZA), children: X.intl.string(X.t.MFGxFM) })
          : null;
};
var t_ = n(31300),
    tf = n(687966),
    th = n(825807);
let tp = function (e) {
    let { onDesktop: t, onConsole: n } = e;
    return (0, i.jsxs)(eV.e, {
        direction: "vertical",
        fullWidth: !0,
        className: th.G,
        size: "sm",
        children: [
            (0, i.jsx)(ei.$, {
                onClick: t,
                text: X.intl.string(X.t["QXc01+"]),
                variant: "secondary",
                icon: t_.k,
                iconPosition: "end",
            }),
            (0, i.jsx)(ei.$, {
                onClick: n,
                text: X.intl.string(X.t["8lAfuB"]),
                variant: "secondary",
                icon: tf._,
                iconPosition: "end",
            }),
        ],
    });
};
var tE = n(190107),
    tm = n(495707);
let tg = r.forwardRef(function (e, t) {
    let { isHovered: n, asset: s, poster: a, className: o, autoPlay: u = !1 } = e,
        { isExpanded: c } = r.useContext(j),
        d = (0, l.bG)([z.A], () => z.A.useReducedMotion),
        _ = r.useRef(null);
    return (
        r.useEffect(() => {
            null != _.current && (c && (!d || n) ? ((_.current.currentTime = 0), _.current.play()) : _.current.pause());
        }, [_, c, n, d]),
        (0, e0.A)(_, tE.rE.QUESTS_BAR),
        (0, i.jsx)(ej.A, {
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
function tA(e) {
    let { onClick: t } = e,
        { quest: n } = r.useContext(j),
        s = (0, l.bG)([z.A], () => z.A.useReducedMotion),
        [o, u] = r.useState(!1),
        c = (0, eq.tW)(n, eq.fY.QUEST_BAR_HERO_VIDEO, void 0, !1),
        d = (0, eq.tW)(n, eq.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1),
        _ = (0, eK.Kr)((e) => e.getVideoProgressState)(n.id),
        f = n.userStatus?.completedAt != null && _ === eK.K2.COMPLETED,
        h = !f && (!s || o);
    return (0, i.jsxs)(y.D, {
        className: tm.QO,
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
                    children: (e) => (0, i.jsx)("img", { ref: e, alt: "", src: d.url, className: tm.Ue }),
                }),
            null != c
                ? (0, i.jsx)(I.Sn, {
                      id: "QuestBarContentExpanded_video",
                      children: (e) =>
                          (0, i.jsx)(tg, {
                              ref: e,
                              isHovered: o,
                              autoPlay: !1,
                              asset: c,
                              poster: d?.url,
                              className: a()(tm.NM, { [tm.Gc]: h }),
                          }),
                  })
                : null,
            (0, i.jsx)("div", {
                className: tm.LT,
                children: f
                    ? (0, i.jsx)(ek.m, { color: O.A.colors.WHITE, className: tm.t })
                    : (0, i.jsx)(eG.u, { color: O.A.colors.WHITE, className: tm.t }),
            }),
        ],
    });
}
function tI(e) {
    let { quest: t } = e;
    return (0, i.jsx)($.A, {
        className: a()(tm.Qq, tm.wq),
        learnMoreStyle: "text",
        quest: t,
        questContent: p.uF.QUEST_BAR_V2,
        sourceQuestContent: p.uF.QUEST_BAR_V2,
    });
}
function tT(e) {
    let { isInteractable: t, containerRef: n, onAcceptQuest: s } = e,
        { quest: u, onGameSheetOpen: c, onGameSheetClose: d, taskDetails: _ } = r.useContext(j),
        { expansionSpring: f } = r.useContext(F),
        m = r.useRef(null),
        g = (0, l.bG)([h.A], () => h.A.isEnrolling(u.id), [u]),
        A = r.useMemo(() => (0, eq.tW)(u, eq.fY.QUEST_BAR_HERO), [u]),
        T = (0, eo.NA)({ quest: u }),
        S = r.useMemo(() => (0, eq.tW)(u, eq.fY.HERO_IMAGE), [u]),
        y = r.useMemo(() => (null == S ? {} : { backgroundImage: `url(${S.url})` }), [S]),
        v = ez.t.useConfig({ location: tE.rE.QUESTS_BAR }),
        O = (0, eo.mU)({
            quest: u,
            location: tE.rE.QUESTS_BAR,
            questContent: p.uF.QUEST_BAR_V2,
            taskDetails: _,
            sourceQuestContent: p.uF.QUEST_BAR_V2,
            popoutTargetElementRef: m,
            onGameSheetOpened: c,
            onGameSheetClosed: d,
            gameProfileSource: eY.Ob.QuestBar,
        }),
        R = (0, ef.Pd)(u),
        b = (0, e$.z)(),
        D = (0, E.SD)(u, b),
        L = b === eZ.MA.NITRO && D;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                ref: m,
                children: (0, i.jsxs)("div", {
                    className: tm.do,
                    ref: n,
                    children: [
                        (0, i.jsxs)("div", {
                            className: tm.zH,
                            children: [
                                (0, i.jsx)(tI, { quest: u }),
                                (0, i.jsx)(eF.D, {
                                    className: tm.DD,
                                    color: "text-strong",
                                    variant: "heading-md/medium",
                                    children: X.intl.format(X.t.EQa7os, { questName: u.config.messages.questName }),
                                }),
                                (0, i.jsxs)("div", {
                                    className: tm.zf,
                                    children: [
                                        (0, i.jsx)(C.E, { className: tm.h_, variant: "text-xs/normal", children: O }),
                                        D && (0, i.jsx)(eJ.e, { questId: u.id, orbMultiplierEligibility: b }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: tm.lO,
                            children: (0, i.jsx)(eV.e, {
                                direction: "horizontal",
                                fullWidth: !0,
                                wrap: !1,
                                children:
                                    v.enabled && R === ef.UA.UNENROLLED && v.enabledQuestStates.has(ef.UA.UNENROLLED)
                                        ? (0, i.jsx)(e_.A, {
                                              quest: u,
                                              surface: ef.V3.QUEST_BAR_FOOTER,
                                              size: "sm",
                                              analyticsCtxQuestContent: p.uF.QUEST_BAR_V2,
                                              analyticsCtxSourceQuestContent: p.uF.QUEST_BAR_V2,
                                          })
                                        : (0, i.jsx)(ei.$, {
                                              onClick: t ? s : void 0,
                                              variant: "primary",
                                              loading: g,
                                              text: T,
                                              size: "sm",
                                              icon: (0, N.Oz)(u),
                                              fullWidth: !0,
                                          }),
                            }),
                        }),
                    ],
                }),
            }),
            (0, i.jsx)(eX.A, { visible: L, glow: !0, className: tm.Ph }),
            null != S &&
                (0, i.jsx)(o.animated.div, {
                    className: tm.AK,
                    style: { opacity: (0, P.a)(f.to([0, 1], [1, 0])) },
                    children: (0, i.jsx)("div", { className: a()(tm.LC, tm.Ge), style: y }),
                }),
            (0, i.jsxs)(o.animated.div, {
                className: tm.IC,
                style: {
                    backdropFilter: (0, P.Q)(f.to([0, 1], [5, 0]).to((e) => `blur(${e}px)`)),
                    filter: (0, P.Q)(f.to([0, 1], [0.8, 1]).to((e) => `brightness(${e})`)),
                },
                children: [
                    A.isAnimated
                        ? (0, i.jsx)(I.Sn, {
                              id: "QuestBarContentExpanded_heroAnimated",
                              children: (e) => (0, i.jsx)(tg, { ref: e, autoPlay: !0, asset: A, className: tm.LO }),
                          })
                        : (0, i.jsx)(I.Sn, {
                              id: "QuestBarContentExpanded_heroStatic",
                              children: (e) => (0, i.jsx)("img", { ref: e, alt: "", className: tm.LO, src: A.url }),
                          }),
                    (0, i.jsx)("div", { className: tm.tV }),
                ],
            }),
        ],
    });
}
function tS(e) {
    let { quest: t } = e,
        { hasAlreadyLinked: n, onClickGameTitle: s } = r.useContext(Y);
    return !0 !== n || null == s ? null : (0, i.jsx)(eQ.A, { quest: t, hasAlreadyLinked: n, onClickGameTitle: s });
}
function tN(e) {
    let { activeScreen: t, selectPlatform: n } = e,
        { quest: s, taskDetails: a } = r.useContext(j);
    return (0, eU.YW)(t)
        .with(p.X0.SELECT, () =>
            (0, i.jsx)(tp, { onConsole: () => n(tE.fO.CONSOLE), onDesktop: () => n(tE.fO.DESKTOP) }),
        )
        .with(p.X0.DESKTOP, () => ((0, A.I6)(s) ? (0, i.jsx)(tS, { quest: s }) : (0, i.jsx)(td, { quest: s })))
        .with(p.X0.CONSOLE, () => (0, i.jsx)(ts, { quest: s, taskDetails: a }))
        .exhaustive();
}
function ty(e) {
    let { parentContainerRef: t } = e,
        { quest: n, taskDetails: s } = r.useContext(j),
        [a, o, l] = (0, E.Qo)(n, s),
        u = s.percentComplete > 0,
        c = (0, E.Vn)(n),
        d = (0, E.RR)({ quest: n }),
        _ = o.length > 1 && !u && !c;
    return (0, i.jsxs)(tl, {
        children: [
            (0, i.jsx)(tN, { activeScreen: a, selectPlatform: l }),
            a !== p.X0.SELECT &&
                (0, i.jsxs)("div", {
                    className: tm.oG,
                    children: [
                        _ &&
                            (0, i.jsx)(eB.K, {
                                size: "sm",
                                "aria-label": X.intl.string(X.t["13/7kX"]),
                                onClick: () => l(null),
                                icon: eH.n,
                                variant: "secondary",
                            }),
                        (0, i.jsx)(ey, {
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
function tC(e) {
    let { parentContainerRef: t } = e,
        { quest: n, taskDetails: s } = r.useContext(j),
        a = s.percentComplete > 0,
        o = (0, E.Vn)(n),
        l = r.useCallback(() => {
            (0, N.d5)({
                quest: n,
                questContent: p.uF.QUEST_BAR_V2,
                sourceQuestContent: p.uF.QUEST_BAR_V2,
                sourceQuestContentCTA: b.Cy.QUEST_BAR_VIDEO_QUEST_PREVIEW,
            });
        }, [n]);
    return (0, i.jsxs)(tl, {
        children: [
            (0, i.jsx)(tA, { onClick: l }),
            (0, i.jsx)(ey, {
                parentContainerRef: t,
                awaitingConsoleConnections: !1,
                hasMadeProgress: a,
                isProgressing: o,
                sourceQuestContent: p.uF.QUEST_BAR_V2,
            }),
        ],
    });
}
function tv(e) {
    let { parentContainerRef: t } = e,
        { quest: n, taskDetails: s } = r.useContext(j),
        a = s.percentComplete > 0,
        o = (0, E.Vn)(n);
    return (0, i.jsx)(tl, {
        children: (0, i.jsx)(ey, {
            parentContainerRef: t,
            awaitingConsoleConnections: !1,
            hasMadeProgress: a,
            isProgressing: o,
            sourceQuestContent: p.uF.QUEST_BAR_V2,
        }),
    });
}
function tO(e) {
    let { parentContainerRef: t } = e,
        { quest: n } = r.useContext(j);
    return (0, A.t)({ quest: n }) || (0, A.g5)(n) || (0, A.fE)({ quest: n }) || (0, A.I6)(n)
        ? (0, i.jsx)(ty, { parentContainerRef: t })
        : (0, A.vv)(n)
          ? (0, i.jsx)(tC, { parentContainerRef: t })
          : (0, i.jsx)(tv, { parentContainerRef: t });
}
function tR(e) {
    let { overlayRef: t, containerRef: n } = e,
        { quest: s, taskDetails: l } = r.useContext(j),
        { expansionSpring: u } = r.useContext(F),
        c = r.useRef(null),
        d = r.useRef(null),
        _ = (0, E.I3)(s),
        f = null != _ ? _.percentComplete : l.percentComplete;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(o.animated.div, {
                className: a()(tm.tv, tm.ag),
                style: {
                    backgroundImage: `linear-gradient(90deg, ${k}, ${G})`,
                    opacity: (0, P.a)(u.to({ range: [0, 1], output: [1, 0] })),
                },
            }),
            (0, i.jsxs)("div", {
                className: tm.Fe,
                ref: (e) => {
                    "function" == typeof n ? n(e) : null != n && (n.current = e), null != e && (d.current = e);
                },
                children: [
                    (0, i.jsx)(eM, {}),
                    (0, i.jsx)("div", { className: tm.yF }),
                    (0, i.jsx)(eR, { overlayRef: t, progressBarRef: c, isHovered: !1 }),
                    (0, i.jsx)(eL, {
                        contentLocation: "expanded",
                        progressBarRef: c,
                        isExpanded: !0,
                        percentComplete: f,
                        popoutTargetElementRef: d,
                    }),
                    (0, i.jsx)(tO, { parentContainerRef: d }),
                ],
            }),
            (0, i.jsx)("div", {
                className: a()(tm.tv, tm.Sx),
                style: { backgroundImage: `linear-gradient(90deg, ${k}, ${G})` },
            }),
        ],
    });
}
async function tb(e, t, n, i) {
    (0, A.vv)(e)
        ? await (0, N.e0)(e, { questContent: t, questContentCTA: n, sourceQuestContent: i, sourceQuestContentCTA: n })
        : (0, ec.vA)(e)
          ? await (0, eW.Oy)(e.id, { questContent: t, questContentCTA: n, sourceQuestContent: i })
          : (0, eW.Oy)(e.id, { questContent: t, questContentCTA: n, sourceQuestContent: i });
}
let tD = r.forwardRef(function (e, t) {
    let { children: n, className: s, overlayRef: l } = e,
        { collapsedHeight: u, isExpanded: c, isExpansionAnimationComplete: d, quest: _ } = r.useContext(j),
        { expansionSpring: f } = r.useContext(F),
        { launchInGameActivity: h } = (0, E.zW)(_),
        m = (0, ec.vA)(_),
        g = r.useCallback(async () => {
            let e = m ? b.Cy.START_QUEST : b.Cy.ACCEPT_QUEST;
            await tb(_, p.uF.QUEST_BAR_V2, e, p.uF.QUEST_BAR_V2), m && h();
        }, [_, h, m]),
        A = _.userStatus?.enrolledAt != null,
        I = c && d;
    return (0, i.jsxs)(o.animated.div, {
        "aria-hidden": !I,
        className: a()(s, tm.Rh, { [tm.Yd]: I, [tm.iH]: A }),
        style: {
            transform: (0, o.to)(
                [f.to({ range: [0, 1], output: [0, -100] }), f.to({ range: [0, 1], output: [0, u] })],
                (e, t) => `translateY(calc(${e}% + ${t}px))`,
            ),
        },
        children: [
            n,
            (0, i.jsx)(o.animated.div, {
                style: { opacity: 1 },
                children: A
                    ? (0, i.jsx)(tR, { overlayRef: l, containerRef: t })
                    : (0, i.jsx)(tT, { isInteractable: I, containerRef: t, onAcceptQuest: g }),
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
        { isExpanded: a } = r.useContext(j);
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
var tM = n(561844),
    tP = n(652215),
    tx = n(731738),
    tU = n(807393),
    tk = n(260364),
    tG = n(737595);
function tF(e) {
    let { isExpanded: t, questId: n } = e;
    return (
        (0, E.H6)({
            mode: t ? tE.fP.EXPANDED : tE.fP.COLLAPSED,
            questContent: p.uF.QUEST_BAR_V2,
            questId: n,
            sourceQuestContent: p.uF.QUEST_BAR_V2,
        }),
        null
    );
}
function tV() {
    return (
        r.useEffect(() => {
            _.trigger();
        }, []),
        null
    );
}
function tB(e) {
    let { quest: t } = e,
        n = (0, g.L)({ quest: t, location: tE.rE.QUESTS_BAR }),
        s = (0, m.s)(),
        c = (0, l.bG)([h.A], () => null != h.A.questEnrollmentBlockedUntil),
        { isQuestBarVisible: d, reason: _ } = (0, S.TQ)({ quest: t }),
        y = (0, l.bG)([f.A], () => f.A.hasLayers()),
        C = r.useRef(null),
        v = r.useMemo(() => (0, A.vv)(t), [t]),
        O = t.id,
        R = t.userStatus?.enrolledAt != null,
        D = (0, u.A)(R),
        L = t.userStatus?.completedAt != null,
        { hasError: w, isLoading: M } = (0, I.Gk)(),
        P = r.useContext(tL.Z) || (s && d && !M && !c),
        {
            isExpanded: x,
            setIsExpanded: U,
            expandQuestBar: k,
            isExpansionAnimationComplete: G,
            isVisibilityAnimationAtRest: F,
            expansionSpring: V,
            visibilitySpring: H,
            springConfig: j,
        } = (function (e) {
            let { isQuestAccepted: t, isQuestCompleted: n, isQuestBarVisible: i } = e,
                s = (0, l.bG)([z.A], () => z.A.useReducedMotion),
                [a, o] = r.useState(!1),
                [u, c] = r.useState(!0),
                [d, _] = r.useState(!0),
                f = r.useRef(i),
                h = r.useCallback(
                    (e) => {
                        n || (c(!1), o(e));
                    },
                    [n],
                ),
                p = r.useCallback(() => {
                    h(!0);
                }, [h]),
                E = r.useCallback(() => {
                    h(!1);
                }, [h]),
                m = t ? tE.ZV : tE.Ko,
                [{ expansionSpring: g }, A] = (0, q.z)(() => ({
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
            let { visibilitySpring: I } = (0, q.z)({
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
                    i !== f.current && _(!1), (f.current = i);
                }, [i]),
                {
                    isExpanded: a,
                    setIsExpanded: h,
                    expandQuestBar: p,
                    collapseQuestBar: E,
                    isExpansionAnimationComplete: u,
                    isVisibilityAnimationAtRest: d,
                    expansionSpring: g,
                    visibilitySpring: I,
                    springConfig: m,
                }
            );
        })({ isQuestAccepted: R, isQuestCompleted: L, isQuestBarVisible: P }),
        {
            handleCtxMenuOpened: Y,
            handleCtxMenuClosed: W,
            handleCtxMenuSelection: $,
            handleGameSheetOpened: Z,
            handleGameSheetClosed: X,
            handleFocusWithoutDelay: Q,
            handleBlur: J,
            handleMouseEnter: ee,
            handleMouseLeave: et,
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
                [_, f] = r.useState(!1),
                [h, E] = r.useState(!1),
                m = r.useCallback(() => {
                    f(!0);
                }, []),
                g = r.useCallback(() => {
                    f(!1), d.current || a || i(!1);
                }, [a, i]),
                A = r.useCallback(() => {
                    f(!1), a || i(!1), (d.current = !1);
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
                N = r.useCallback(() => {
                    S();
                }, [S]),
                y = r.useCallback(() => {
                    window.clearTimeout(c.current), _ || h || d.current || i(!1);
                }, [_, h, i]),
                C = r.useCallback(() => {
                    (0, tM.av)({
                        questId: t.id,
                        event: tP.HAw.QUEST_HOVER,
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
                v = r.useCallback(() => {
                    (0, tM.av)({
                        questId: t.id,
                        event: tP.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: p.uF.QUEST_BAR,
                            content_name: (0, b.jO)(p.uF.QUEST_BAR),
                            impression_id: u.current?.getId(),
                        },
                        sourceQuestContent: p.uF.QUEST_BAR_V2,
                    }),
                        (d.current = !1),
                        y();
                }, [y, u, t.id]);
            return (
                r.useEffect(() => {
                    h && v();
                }, [h, v]),
                r.useLayoutEffect(() => {
                    o && !l && d.current && s();
                }, [s, o, l]),
                r.useLayoutEffect(() => {
                    a || !o || l || d.current || i(!1);
                }, [o, a, l, i]),
                {
                    ctxMenuOpen: _,
                    gameSheetOpen: h,
                    handleCtxMenuOpened: m,
                    handleCtxMenuClosed: g,
                    handleCtxMenuSelection: A,
                    handleGameSheetOpened: I,
                    handleGameSheetClosed: T,
                    handleFocus: S,
                    handleFocusWithoutDelay: N,
                    handleBlur: y,
                    handleMouseEnter: C,
                    handleMouseLeave: v,
                }
            );
        })({
            quest: t,
            isExpanded: x,
            setIsExpanded: U,
            expandQuestBar: k,
            isQuestCompleted: L,
            isQuestAccepted: R,
            prevIsQuestAccepted: D,
            impressionRef: C,
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
                ((0, tM.av)({
                    questId: t.id,
                    event: tP.HAw.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        content_id: p.uF.QUEST_BAR,
                        content_name: (0, b.jO)(p.uF.QUEST_BAR),
                        reason: "asset_loading_error",
                        impression_id: d.current?.getId(),
                    },
                    sourceQuestContent: p.uF.QUEST_BAR_V2,
                }),
                tU.A.increment({
                    name: tx.K.QUEST_CONTENT_RENDERING_FAILURE,
                    tags: [
                        `quest_id:${t.id}`,
                        `quest_content:${(0, b.jO)(p.uF.QUEST_BAR)}`,
                        "reason:asset_loading_error",
                    ],
                }));
        }, [n, d, t.id]),
            r.useEffect(() => {
                i ||
                    (0, tM.av)({
                        questId: t.id,
                        event: tP.HAw.QUEST_CONTENT_RENDERING_FAILURE,
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
                    (0, tM.av)({
                        questId: t.id,
                        event: tP.HAw.QUEST_CONTENT_RENDERING_FAILURE,
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
                (!u || c) && tk.A.clearTracking(), s && a && !o && !n && i && tk.A.stopTracking(t.id);
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
        impressionRef: C,
    });
    let ei = r.useRef(null),
        er = r.useRef(null),
        es = r.useRef(null),
        ea = (0, E.fc)(t),
        eo = (0, E.UH)(t);
    if (
        (r.useEffect(() => {
            v && (0, N.l9)();
        }, [v]),
        !s || (!P && F && !M) || w)
    )
        return w ? n.log("Not rendered due to asset error") : s || n.log("Not rendered due to ineligibility"), null;
    let el = 70 + 78 * !!L;
    return (0, i.jsx)(T.R, {
        questOrQuests: t,
        questContent: p.uF.QUEST_BAR_V2,
        overrideVisibility: !y && P,
        onImpression: eo,
        sourceQuestContent: p.uF.QUEST_BAR_V2,
        children: (e, n) => (
            (C.current = n.current),
            (0, i.jsxs)("div", {
                className: tG.dK,
                children: [
                    P &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)(tF, { questId: O, isExpanded: x }), (0, i.jsx)(tV, {})],
                        }),
                    (0, i.jsx)(o.animated.div, {
                        "aria-hidden": !P,
                        onMouseLeave: et,
                        onMouseEnter: ee,
                        onFocus: Q,
                        onBlur: J,
                        className: a()(tG.iE, { [tG.Xc]: !P, [tG.uv]: P && F }),
                        style: { height: H.to({ range: [0, 1], output: [0, el] }) },
                        children: (0, i.jsx)(o.animated.div, {
                            className: a()(tG.FG, { [tG.E$]: x, [tG.KA]: R }),
                            children: (0, i.jsx)(to, {
                                springConfig: j,
                                isExpanded: x,
                                children: (0, i.jsx)(B, {
                                    expandedContentRef: ei,
                                    collapsedContentRef: er,
                                    expansionSpring: V,
                                    children: (0, i.jsxs)(K, {
                                        quest: t,
                                        taskDetails: ea,
                                        isExpanded: x,
                                        isExpansionAnimationComplete: G,
                                        onCtxMenuClose: W,
                                        onCtxMenuOpen: Y,
                                        onCtxMenuSelect: $,
                                        onGameSheetOpen: Z,
                                        onGameSheetClose: X,
                                        collapsedHeight: el,
                                        children: [
                                            (0, i.jsx)(
                                                ex,
                                                { ref: er, className: tG.Qs, overlayRef: es },
                                                L ? "collapsed-with-rewards" : "collapsed-without-rewards",
                                            ),
                                            (0, i.jsx)(tD, {
                                                className: tG.Qs,
                                                overlayRef: es,
                                                ref: ei,
                                                children: (0, i.jsxs)(i.Fragment, {
                                                    children: [(0, i.jsx)(tw, {}), !R && (0, i.jsx)(en, {})],
                                                }),
                                            }),
                                            (0, i.jsx)("div", { ref: es, className: tG.Lw }),
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
let tH = function () {
    let e = (0, S.dN)();
    return null == e
        ? null
        : (0, i.jsx)(I.jY, { source: tE.rE.QUESTS_BAR, questId: e.id, children: (0, i.jsx)(tB, { quest: e }) }, e.id);
};
