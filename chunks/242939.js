"use strict";
n.d(t, { A: () => tY, Y: () => tH });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(308186),
    l = n(17928),
    u = n(475743),
    c = n(840251),
    d = n(688151);
let _ = new c.E([], d.$G.QUEST_BAR_RENDERED, { location: "quest bar rendered" });
var h = n(186111),
    f = n(859703),
    p = n(507107),
    E = n(347135),
    m = n(971276),
    g = n(851936),
    A = n(792620),
    I = n(241124),
    T = n(73473),
    S = n(371912),
    y = n(617986),
    C = n(939249),
    N = n(834730),
    v = n(290136),
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
    };
var j = n(409626),
    H = n(692969),
    Y = n(284846),
    W = n(190107);
let K = r.createContext({
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
    $ = r.createContext({ hasAlreadyLinked: void 0, onClickGameTitle: void 0 });
function z(e) {
    let { children: t, quest: n } = e,
        { hasAlreadyLinked: s } = (0, Y.U)(n),
        a = (0, H.A)({ applicationId: (0, A.xc)(n), location: W.rE.QUEST_INSTRUCTIONS, source: j.Ob.QuestBar }),
        o = r.useMemo(() => ({ hasAlreadyLinked: s, onClickGameTitle: a }), [s, a]);
    return (0, i.jsx)($.Provider, { value: o, children: t });
}
function q(e) {
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
    return (0, i.jsx)(K.Provider, { value: f, children: (0, A.I6)(_) ? (0, i.jsx)(z, { quest: _, children: t }) : t });
}
var Z = n(775602),
    X = n(646764),
    Q = n(717421);
function J() {
    let e = document.body.style.getPropertyValue("--custom-guild-sidebar-width").slice(0, -2);
    return parseInt("" !== e ? e : "375");
}
var ee = n(375708),
    et = n(438551);
let en = function (e) {
    let { isFullyExpanded: t, partnerBranding: n } = e,
        s = {
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
        u = (0, l.bG)([Z.Ay], () => Z.Ay.useReducedMotion),
        { quest: c } = r.useContext(K),
        { expansionSpring: d } = r.useContext(F),
        _ = s ? -4 : 6;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(o.animated.div, {
                className: et.tE,
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
                children: (0, i.jsx)(X.A, {
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
                className: a()(et.pm, { [et.nd]: s }),
                style: {
                    transform: (0, o.to)(
                        [d.to({ range: [0, 1], output: [0, -48] }), d.to({ range: [0, 1], output: [0, _] })],
                        (e, t) => `translate(${e}px, ${t}px)`,
                    ),
                },
                children: [
                    (0, i.jsx)("div", { className: a()({ [et.Iu]: !s }), children: n }),
                    (0, i.jsx)(o.animated.div, {
                        className: a()(et.ol, { [et.yZ]: s }),
                        style: { opacity: (0, P.a)(d.to({ range: [0, 1], output: [s ? 1 : 0.7, 0] })) },
                        children: (0, i.jsx)(N.E, {
                            color: "always-white",
                            lineClamp: 1,
                            variant: "text-xs/medium",
                            children: ee.intl.string(ee.t["3mgEQf"]),
                        }),
                    }),
                ],
            }),
        ],
    });
};
var ei = n(362255);
let er = (0, o.animated)(M.Ay),
    es = function () {
        let e = (0, D.go)(),
            { expansionSpring: t } = r.useContext(F),
            {
                onCtxMenuOpen: n,
                onCtxMenuClose: s,
                onCtxMenuSelect: l,
                isExpanded: u,
                isExpansionAnimationComplete: c,
                quest: d,
            } = r.useContext(K),
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
            E = (0, i.jsx)(C.D, {
                onClick: h,
                className: a()(ei.vk, { [ei.wm]: f }),
                children: (0, i.jsx)(er, {
                    quest: d,
                    withGameTile: !1,
                    logotypeClassName: ei.Iu,
                    logotypeStyle: {
                        height: 24,
                        maxWidth: 92,
                        transform: (0, o.to)([t.to({ range: [0, 1], output: [1, 1] })], (e) => `scale(${e})`),
                    },
                }),
            });
        return (0, i.jsxs)(o.animated.div, {
            className: a()(ei.iE, ei.Ht, { [ei.tT]: f }),
            style: { transform: (0, o.to)([t.to({ range: [0, 1], output: [6, 0] })], (e) => `translateY(${e}px)`) },
            children: [
                (0, i.jsx)(o.animated.div, {
                    className: ei.Tu,
                    style: { opacity: (0, P.a)(t.to({ range: [0, 1], output: [0, 1] })) },
                }),
                (0, i.jsx)(en, { isFullyExpanded: f, partnerBranding: E }),
                (0, i.jsxs)(o.animated.div, {
                    className: ei.P0,
                    style: { opacity: (0, P.a)(t.to({ range: [0, 1], output: [0, 1] })) },
                    children: [
                        (0, i.jsxs)(C.D, {
                            className: ei.y8,
                            onClick: _,
                            children: [
                                (0, i.jsx)(N.E, {
                                    color: "always-white",
                                    variant: "text-xs/normal",
                                    children: ee.intl.string(ee.t.o6FLcF),
                                }),
                                (0, i.jsx)(v.c, { color: R.A.colors.WHITE, className: ei.P$ }),
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
                                (0, i.jsx)(C.D, {
                                    ...e,
                                    className: a()(ei.uJ, ei.rb),
                                    "aria-label": ee.intl.string(ee.t.DEoVWZ),
                                    children: (0, i.jsx)(O.j, {
                                        size: "md",
                                        color: "currentColor",
                                        className: a()(ei.Bx, ei.ON),
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
    el = n(651892),
    eu = n(814793),
    ec = n(753386),
    ed = n(368715),
    e_ = n(79545),
    eh = n(862611),
    ef = n(795965),
    ep = n(640916);
function eE(e) {
    let { quest: t, sourceQuestContent: n, taskDetails: r } = e;
    return (0, i.jsx)(ea.$, {
        variant: "primary",
        fullWidth: !0,
        onClick: function () {
            let e = t.userStatus?.enrolledAt == null ? b.Cy.ACCEPT_QUEST : b.Cy.WATCH_VIDEO;
            (0, y.d5)({ quest: t, questContent: p.uF.QUEST_BAR_V2, sourceQuestContent: n, sourceQuestContentCTA: e });
        },
        size: "sm",
        text: (0, ec.WM)(r),
    });
}
function em(e) {
    let { quest: t, sourceQuestContent: n } = e,
        r = (0, D.go)(),
        s = (0, el.wr)(t);
    return (0, i.jsx)(ea.$, {
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
}
function eg(e) {
    let { quest: t, sourceQuestContent: n } = e,
        r = (0, D.vU)()?.getId();
    return (0, i.jsx)(ea.$, {
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
        text: ee.intl.string(ee.t.csptqV),
    });
}
function eA(e) {
    let { quest: t } = e,
        n = (0, eo.NA)({ quest: t }),
        { launchInGameActivity: r } = (0, E.zW)(t);
    return (0, eu.vA)(t)
        ? (0, i.jsx)(ea.$, { fullWidth: !0, variant: "primary", icon: (0, y.Oz)(t), onClick: r, size: "sm", text: n })
        : null;
}
function eI(e) {
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
            (0, i.jsx)(ea.$, {
                variant: "secondary",
                fullWidth: !0,
                size: "sm",
                text: ee.intl.string(ee.t["93PTEs"]),
                ...e,
            }),
    });
}
function eT(e) {
    let { quest: t, ctaLabel: n, onClick: r, questContent: s = p.uF.QUEST_BAR_V2, sourceQuestContent: a } = e,
        o = (0, ef.D)({
            quest: t,
            questContent: s,
            sourceQuestContent: a,
            experimentLocation: W.rE.QUESTS_BAR,
            onBeforeClaim: r,
        });
    return (0, i.jsx)(ea.$, {
        fullWidth: !0,
        onClick: o,
        text: n ?? ee.intl.string(ee.t.cfY4PE),
        "data-testid": "quest-bar-claim-reward-button",
        variant: "primary",
        size: "sm",
    });
}
function eS(e) {
    let {
            sourceQuestContent: t,
            awaitingConsoleConnections: n,
            hasMadeProgress: s,
            isProgressing: a,
            popoutTargetElementRef: o,
        } = e,
        { quest: l, onGameSheetOpen: u, onGameSheetClose: c, taskDetails: d } = r.useContext(K),
        [_] = (0, E.Qo)(l, d),
        h = l.userStatus?.completedAt != null,
        f = (0, A.vv)(l),
        m = (0, A.I6)(l),
        g = _ !== p.X0.SELECT && !s && !a,
        I = null;
    return (
        h
            ? (I = (0, i.jsx)(eT, { quest: l, sourceQuestContent: t }))
            : m
              ? (I = (0, i.jsx)(ed.A, {
                    quest: l,
                    surface: e_.V3.QUEST_BAR_FOOTER,
                    size: "sm",
                    analyticsCtxQuestContent: p.uF.QUEST_BAR_V2,
                    analyticsCtxSourceQuestContent: t,
                }))
              : f
                ? (I = (0, i.jsx)(eE, { quest: l, sourceQuestContent: t, taskDetails: d }))
                : (0, eu.vA)(l)
                  ? (I = (0, i.jsx)(eA, { quest: l }))
                  : _ === p.X0.CONSOLE && n
                    ? (I = (0, i.jsx)(eg, { quest: l, sourceQuestContent: t }))
                    : g && (0, eu.ui)(l)
                      ? (I = (0, i.jsx)(eI, {
                            quest: l,
                            sourceQuestContent: t,
                            taskDetails: d,
                            popoutTargetElementRef: o,
                            onGameSheetOpened: u,
                            onGameSheetClosed: c,
                        }))
                      : g && (I = (0, i.jsx)(em, { quest: l, sourceQuestContent: t })),
        null == I ? null : (0, i.jsx)("div", { className: ep.lO, children: I })
    );
}
function ey(e) {
    return (0, i.jsx)(eS, { ...e, popoutTargetElementRef: e.parentContainerRef });
}
var eC = n(106778),
    eN = n(536283),
    ev = n(640758);
let eR = (e) => {
    let { overlayRef: t, progressBarRef: n, isHovered: s } = e,
        { quest: c, isExpanded: d } = r.useContext(K),
        { expansionSpring: _ } = r.useContext(F),
        { completionSpring: f, startCompletionAnimation: p } = (function () {
            let [{ spring: e }, t] = (0, Q.z)(() => ({ spring: 0 }), "animate-always");
            return {
                completionSpring: e,
                startCompletionAnimation: r.useCallback(() => {
                    t({ spring: 1 }), t({ spring: 0, delay: 2e3 });
                }, [t]),
            };
        })(),
        E = c.userStatus?.completedAt != null,
        m = r.useRef(!1),
        g = (0, l.bG)([Z.Ay], () => Z.Ay.useReducedMotion),
        A = r.useRef(null),
        I = (0, l.bG)([h.A], () => h.A.hasLayers()),
        T = (0, u.A)(I),
        [S, y] = r.useState(null),
        [C, N] = r.useState(null),
        v = r.useRef(new eC.OH({ gravity: 0, wind: 0 })),
        R = (0, eC.f9)(S, C),
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
                        ...eN.Mw,
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
              className: ev.iE,
              "aria-hidden": "true",
              ref: A,
              children: [
                  (0, i.jsx)(o.animated.div, { className: ev.Tp, style: { opacity: (0, P.a)(f) } }),
                  (0, i.jsx)(o.animated.div, { className: a()(ev.sJ, ev.ix), style: { opacity: (0, P.a)(f) } }),
                  (0, i.jsxs)(o.animated.div, {
                      className: ev.KG,
                      style: { transform: _.to({ range: [0, 1], output: [-35, 0] }).to((e) => `translateY(${e}px)`) },
                      children: [
                          (0, i.jsx)(eC.Fk, { ref: y, className: ev.t_, environment: v.current }),
                          (0, i.jsx)(eC.K_, {
                              ref: N,
                              sprites: ["/assets/b909790cf1d80597.svg"],
                              colors: O,
                              spriteWidth: eN.wn,
                              spriteHeight: eN.wn,
                          }),
                          null != t.current &&
                              (0, x.createPortal)(
                                  (0, i.jsx)(o.animated.div, {
                                      className: a()(ev.sJ, ev.d7),
                                      style: { opacity: (0, P.a)(f) },
                                  }),
                                  t.current,
                              ),
                      ],
                  }),
              ],
          });
};
var eO = n(453384),
    eb = n(472867);
let eD = function (e) {
    let { isExpanded: t, contentLocation: n, progressBarRef: s, percentComplete: a, popoutTargetElementRef: o } = e,
        { quest: l, onGameSheetOpen: u, onGameSheetClose: c, taskDetails: d } = r.useContext(K),
        { hasAlreadyLinked: _, onClickGameTitle: h } = r.useContext($),
        [f] = (0, E.Qo)(l, d),
        m = (0, eo.VX)(l, _),
        g = (0, eo.tH)({
            quest: l,
            isExpanded: t,
            activeScreen: f,
            sourceQuestContent: p.uF.QUEST_BAR_V2,
            popoutTargetElementRef: o,
            onGameSheetOpened: u,
            onGameSheetClosed: c,
            hasAlreadyLinked: _,
            onClickGameTitle: h,
        });
    return (0, i.jsxs)("div", {
        className: eb.Z0,
        children: [
            (0, i.jsx)(V, {
                inState: n,
                id: "progress-bar",
                ref: s,
                children: (e) =>
                    (0, i.jsx)(eO.A, {
                        ref: e,
                        style: "small",
                        percentComplete: a,
                        size: 42,
                        children: (0, i.jsx)(X.A, {
                            fullWidth: !0,
                            quest: l,
                            questContent: p.uF.QUEST_BAR_V2,
                            autoplay: !1,
                            sourceQuestContent: p.uF.QUEST_BAR_V2,
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
                            (0, i.jsx)(N.E, {
                                ref: e,
                                className: eb.FZ,
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
                            (0, i.jsx)(N.E, {
                                ref: e,
                                className: eb.FZ,
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
var eL = n(265393);
function ew() {
    let { quest: e, onCtxMenuOpen: t, onCtxMenuClose: n, onCtxMenuSelect: s } = r.useContext(K),
        o = (0, E.S5)(e.config.expiresAt);
    return (0, i.jsxs)("div", {
        className: eL.pS,
        children: [
            (0, i.jsx)(N.E, {
                variant: "text-xxs/medium",
                className: a()(eL.Uu, eL.TK),
                children: ee.intl.format(ee.t["pX+fmn"], { expirationDate: o }),
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
                    (0, i.jsx)(C.D, {
                        ...e,
                        className: eL.rb,
                        "aria-label": ee.intl.string(ee.t.DEoVWZ),
                        children: (0, i.jsx)(O.j, { size: "md", color: "currentColor", className: a()(eL.Bx, eL.U9) }),
                    }),
            }),
        ],
    });
}
var eM = n(369949);
let eP = r.forwardRef(function (e, t) {
    let { className: n, overlayRef: s } = e,
        { expansionSpring: l } = r.useContext(F),
        { quest: u, taskDetails: c, isExpanded: d, isExpansionAnimationComplete: _ } = r.useContext(K),
        h = u.userStatus?.completedAt != null,
        f = (0, E.I3)(u),
        m = r.useRef(null),
        g = u.userStatus?.enrolledAt != null,
        A = null != f ? f.percentComplete : c.percentComplete,
        I = r.useRef(null),
        [T, S] = r.useState(!1);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            h && (0, i.jsx)(eR, { overlayRef: s, progressBarRef: m, isHovered: T }),
            (0, i.jsx)(o.animated.div, {
                ref: t,
                "aria-hidden": d && _,
                inert: (!!d && !!_) || void 0,
                className: a()(n, eM.hR, { [eM.Ag]: d, [eM.s]: g }),
                style: {
                    opacity: (0, P.a)(l.to({ range: [0, 1], output: [1, 0] })),
                    backgroundImage: h ? `linear-gradient(90deg, ${U}, ${G})` : void 0,
                },
                onMouseEnter: () => S(!0),
                onMouseLeave: () => S(!1),
                children: (0, i.jsxs)("div", {
                    className: eM.o8,
                    children: [
                        h &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(ew, {}), (0, i.jsx)("div", { className: eM.yF })],
                            }),
                        g
                            ? (0, i.jsx)(eD, {
                                  contentLocation: "collapsed",
                                  progressBarRef: m,
                                  isExpanded: !1,
                                  percentComplete: A,
                              })
                            : null,
                        h &&
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
var ex = n(889137),
    ek = n(417270),
    eU = n(782134),
    eG = n(534514),
    eF = n(825484),
    eV = n(408278),
    eB = n(921853),
    ej = n(607470),
    eH = n(340124),
    eY = n(405670),
    eW = n(112142),
    eK = n(646917),
    e$ = n(551875),
    ez = n(576761),
    eq = n(895253),
    eZ = n(976019),
    eX = n(442734),
    eQ = n(139384),
    eJ = n(323889),
    e0 = n(114046),
    e1 = n(695366),
    e2 = n(274670),
    e3 = n(144779),
    e6 = n(30370),
    e4 = n(104886),
    e5 = n(18437),
    e7 = n(780964),
    e8 = n(766075),
    e9 = n(52093),
    te = n(481797);
function tt(e) {
    let { text: t, quest: n, sourceQuestContent: r } = e,
        s = (0, e5.Ut)(),
        a = (0, D.go)();
    return (0, i.jsx)(C.D, {
        className: te.Z0,
        onClick: () => {
            (0, e4.E5)(e4.kI.STEP_2_CLICKED_INTERNAL, "console_connection_step")
                ? (0, e2.r)({
                      type: e3.F.CLICK_INTERNAL,
                      adCreativeType: eJ.p.QUEST,
                      adCreativeId: n.id,
                      questContentCTA: b.Cy.VIEW_CONSOLE_CONNECTIONS_LINK,
                      surfaceId: p.uF.QUEST_BAR_V2,
                      sourceQuestContent: r,
                      impressionId: a,
                  })
                : s({
                      questId: n.id,
                      questContent: p.uF.QUEST_BAR_V2,
                      questContentCTA: b.Cy.VIEW_CONSOLE_CONNECTIONS_LINK,
                      sourceQuestContent: r,
                  }),
                (0, e8.openUserSettings)(e7.X.CONNECTIONS_PANEL);
        },
        children: (0, i.jsx)(N.E, { "aria-label": t, color: "none", variant: "text-xxs/normal", children: t }),
    });
}
function tn(e) {
    let { xboxAndPlaystationAccounts: t, quest: n, sourceQuestContent: r } = e;
    return t.length > 0
        ? (0, i.jsx)(tt, { text: ee.intl.string(ee.t["qiS+xj"]), quest: n, sourceQuestContent: r })
        : null;
}
function ti(e) {
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(e9.L5, { children: ee.intl.string(ee.t.EJFSvD) }), (0, i.jsx)(tn, { ...e })],
    });
}
var tr = n(949143);
function ts(e) {
    return (0, i.jsx)(N.E, { className: tr.eW, color: "text-muted", variant: "text-xxs/normal", children: e.children });
}
function ta(e) {
    let { quest: t, useReducedMotion: n } = e,
        s = (0, S.H1)(t.id, p.uF.QUEST_BAR_V2, p.uF.QUEST_BAR_V2),
        o = (0, S.Xf)({ useReducedMotion: n }),
        l = (0, e5.Ut)(),
        u = (0, D.go)(),
        {
            errorHints: c,
            startingConsoleQuest: d,
            startConsoleQuest: _,
        } = (0, E.Wj)({
            questId: t.id,
            beforeRequest: () => {
                (0, e4.E5)(e4.kI.STEP_2_CLICKED_INTERNAL, "quest_bar_console_task_checklist")
                    ? (0, e2.r)({
                          type: e3.F.CLICK_INTERNAL,
                          adCreativeType: eJ.p.QUEST,
                          adCreativeId: t.id,
                          questContentCTA: b.Cy.DEFIBRILLATOR,
                          surfaceId: p.uF.QUEST_BAR_V2,
                          sourceQuestContent: p.uF.QUEST_BAR_V2,
                          impressionId: u,
                      })
                    : l({
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
                    ? (0, eu.ui)(t)
                        ? ee.intl.string(ee.t.N33EuL)
                        : ee.intl.formatToPlainString(ee.t["28Ql27"], { gameTitle: n })
                    : (0, eu.ui)(t)
                      ? ee.intl.string(ee.t.YstzGO)
                      : ee.intl.formatToPlainString(ee.t.gX0Qcx, { gameTitle: n }),
                renderBody: e
                    ? function () {
                          return (0, i.jsx)(i.Fragment, {
                              children: c.map((e, n) => {
                                  if (e.type === e0._.EXPIRED_CREDENTIAL) {
                                      let r = e6.A.getAccount(e.connected_account_id, e.connected_account_type),
                                          s = (0, L.IG)(e),
                                          a = (0, L.$J)(e);
                                      return (0, i.jsx)(
                                          ts,
                                          {
                                              children: ee.intl.format(s, {
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
                                  return (0, i.jsx)(ts, { children: e.message }, n);
                              }),
                          });
                      }
                    : () =>
                          (0, i.jsx)(N.E, {
                              className: tr.eW,
                              color: "text-muted",
                              variant: "text-xxs/normal",
                              children: (0, eu.ui)(t)
                                  ? ee.intl.string(ee.t.bUyEZZ)
                                  : ee.intl.format(ee.t.GXqvC1, { gameTitle: n }),
                          }),
            };
        }, [c, t, u]);
    return (0, i.jsxs)("div", {
        className: tr.XK,
        children: [
            (0, i.jsxs)("div", {
                className: tr.oK,
                children: [
                    (0, i.jsx)(e1.E, {
                        size: "custom",
                        color: "currentColor",
                        className: 0 === c.length ? tr.pH : tr.JA,
                        width: 16,
                        height: 16,
                    }),
                    (0, i.jsx)(N.E, { variant: "text-xs/medium", children: h }),
                    (0, i.jsx)(C.D, { className: a()(tr.w, { [tr.r9]: d }), onClick: () => _(), children: o.render() }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: a()({ [tr.Iu]: d }),
                children: [f(), 0 === c.length ? null : (0, i.jsx)(ts, { children: s })],
            }),
        ],
    });
}
let to = function (e) {
        let { quest: t, taskDetails: n } = e,
            s = (0, l.bG)([Z.Ay], () => Z.Ay.useReducedMotion),
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
                                (0, i.jsx)(ti, { ...a, quest: t, sourceQuestContent: p.uF.QUEST_BAR_V2 }),
                            isComplete: e || r || l,
                        },
                        {
                            renderContent: () =>
                                (0, i.jsx)(e9.L5, {
                                    children: (0, eu.ui)(t)
                                        ? ee.intl.string(ee.t["5tXqFe"])
                                        : ee.intl.formatToPlainString(ee.t["+8JB6Y"], { gameTitle: s }),
                                }),
                            isComplete: r || l,
                        },
                        {
                            renderContent: () =>
                                (0, i.jsx)(e9.L5, {
                                    children: ee.intl.formatToPlainString(ee.t.HhfrYS, { numMinutes: n.targetMinutes }),
                                }),
                            isComplete: l,
                        },
                    ],
                    hasConnectedAccounts: e,
                    isProgressingQuestForLaunchedGame: r,
                    isQuestComplete: l,
                };
            }, [a, o.length, t, n.targetMinutes]);
        return (0, i.jsx)(e9.Ay, {
            heading: ee.intl.string(ee.t.UPWlJu),
            steps: u,
            children: c && !d && !_ && (0, i.jsx)(ta, { useReducedMotion: s, quest: t }),
        });
    },
    tl = r.createContext({ springConfig: {}, isExpanded: !1 });
function tu(e) {
    let t = r.useMemo(
        () => ({ springConfig: e.springConfig, isExpanded: e.isExpanded }),
        [e.springConfig, e.isExpanded],
    );
    return (0, i.jsx)(tl.Provider, { value: t, children: e.children });
}
function tc(e) {
    let { children: t } = e,
        { springConfig: n, isExpanded: s } = r.useContext(tl),
        a = (0, l.bG)([Z.Ay], () => Z.Ay.useReducedMotion),
        { ref: c, height: d = null } = (0, k.Ay)(),
        _ = (0, u.A)(d) ?? null,
        [{ height: h }, f] = (0, Q.z)(() => ({ from: { height: 0 }, config: n }));
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
var td = n(922450);
function t_(e) {
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
                    (0, i.jsx)(eG.D, { color: "text-default", variant: "heading-sm/medium", children: t }),
                ],
            }),
            (0, i.jsx)(N.E, { color: "text-muted", variant: "text-xs/normal", className: td.r2, children: n }),
        ],
    });
}
let th = function (e) {
    let { quest: t } = e,
        n = (0, E.aC)(t);
    if (0 === n.length) return null;
    let r = n.at(0);
    return r === ee.intl.string(ee.t.BV6xDm)
        ? (0, i.jsx)(t_, { header: ee.intl.string(ee.t.onh6ct), children: ee.intl.string(ee.t.arVHRA) })
        : r === ee.intl.string(ee.t.MFGxFM)
          ? (0, i.jsx)(t_, { header: ee.intl.string(ee.t.JPihZA), children: ee.intl.string(ee.t.MFGxFM) })
          : null;
};
var tf = n(31300),
    tp = n(687966),
    tE = n(600719);
let tm = function (e) {
    let { onDesktop: t, onConsole: n } = e;
    return (0, i.jsxs)(eF.e, {
        direction: "vertical",
        fullWidth: !0,
        className: tE.G,
        size: "sm",
        children: [
            (0, i.jsx)(ea.$, {
                onClick: t,
                text: ee.intl.string(ee.t["QXc01+"]),
                variant: "secondary",
                icon: tf.k,
                iconPosition: "end",
            }),
            (0, i.jsx)(ea.$, {
                onClick: n,
                text: ee.intl.string(ee.t["8lAfuB"]),
                variant: "secondary",
                icon: tp._,
                iconPosition: "end",
            }),
        ],
    });
};
var tg = n(508443);
let tA = r.forwardRef(function (e, t) {
    let { isHovered: n, asset: s, poster: a, className: o, autoPlay: u = !1 } = e,
        { isExpanded: c } = r.useContext(K),
        d = (0, l.bG)([Z.Ay], () => Z.Ay.useReducedMotion),
        _ = r.useRef(null);
    return (
        r.useEffect(() => {
            null != _.current && (c && (!d || n) ? ((_.current.currentTime = 0), _.current.play()) : _.current.pause());
        }, [_, c, n, d]),
        (0, eQ.A)(_, W.rE.QUESTS_BAR),
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
function tI(e) {
    let { onClick: t } = e,
        { quest: n } = r.useContext(K),
        s = (0, l.bG)([Z.Ay], () => Z.Ay.useReducedMotion),
        [o, u] = r.useState(!1),
        c = (0, e$.tW)(n, e$.fY.QUEST_BAR_HERO_VIDEO, void 0, !1),
        d = (0, e$.tW)(n, e$.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1),
        _ = (0, eY.Kr)((e) => e.getVideoProgressState)(n.id),
        h = n.userStatus?.completedAt != null && _ === eY.K2.COMPLETED,
        f = !h && (!s || o);
    return (0, i.jsxs)(C.D, {
        className: tg.QO,
        onClick: t,
        onMouseEnter: function () {
            s && !o && u(!0);
        },
        onMouseLeave: function () {
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
                    ? (0, i.jsx)(ek.m, { color: R.A.colors.WHITE, className: tg.t })
                    : (0, i.jsx)(eU.u, { color: R.A.colors.WHITE, className: tg.t }),
            }),
        ],
    });
}
function tT(e) {
    let { quest: t } = e;
    return (0, i.jsx)(X.A, {
        className: a()(tg.Qq, tg.wq),
        learnMoreStyle: "text",
        quest: t,
        questContent: p.uF.QUEST_BAR_V2,
        sourceQuestContent: p.uF.QUEST_BAR_V2,
    });
}
function tS(e) {
    let { isInteractable: t, containerRef: n, onAcceptQuest: s } = e,
        { quest: u, onGameSheetOpen: c, onGameSheetClose: d, taskDetails: _ } = r.useContext(K),
        { expansionSpring: h } = r.useContext(F),
        m = r.useRef(null),
        g = (0, l.bG)([f.A], () => f.A.isEnrolling(u.id), [u]),
        A = r.useMemo(() => (0, e$.tW)(u, e$.fY.QUEST_BAR_HERO), [u]),
        T = (0, eo.NA)({ quest: u }),
        S = r.useMemo(() => (0, e$.tW)(u, e$.fY.HERO_IMAGE), [u]),
        C = r.useMemo(() => (null == S ? {} : { backgroundImage: `url(${S.url})` }), [S]),
        v = eW.t.useConfig({ location: W.rE.QUESTS_BAR }),
        R = (0, eo.mU)({
            quest: u,
            location: W.rE.QUESTS_BAR,
            taskDetails: _,
            sourceQuestContent: p.uF.QUEST_BAR_V2,
            popoutTargetElementRef: m,
            onGameSheetOpened: c,
            onGameSheetClosed: d,
            gameProfileSource: j.Ob.QuestBar,
        }),
        O = (0, e_.Pd)(u),
        b = (0, eK.z)(),
        D = (0, E.SD)(u, b),
        L = b === ez.MA.NITRO && D;
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
                                (0, i.jsx)(eG.D, {
                                    className: tg.DD,
                                    color: "text-strong",
                                    variant: "heading-md/medium",
                                    children: ee.intl.format(ee.t.EQa7os, { questName: u.config.messages.questName }),
                                }),
                                (0, i.jsxs)("div", {
                                    className: tg.zf,
                                    children: [
                                        (0, i.jsx)(N.E, { className: tg.h_, variant: "text-xs/normal", children: R }),
                                        D && (0, i.jsx)(eX.e, { questId: u.id, orbMultiplierEligibility: b }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: tg.lO,
                            "data-testid": "quest-bar-enroll-cta",
                            children: (0, i.jsx)(eF.e, {
                                direction: "horizontal",
                                fullWidth: !0,
                                wrap: !1,
                                children:
                                    v.enabled && O === e_.UA.UNENROLLED && v.enabledQuestStates.has(e_.UA.UNENROLLED)
                                        ? (0, i.jsx)(ed.A, {
                                              quest: u,
                                              surface: e_.V3.QUEST_BAR_FOOTER,
                                              size: "sm",
                                              analyticsCtxQuestContent: p.uF.QUEST_BAR_V2,
                                              analyticsCtxSourceQuestContent: p.uF.QUEST_BAR_V2,
                                          })
                                        : (0, i.jsx)(ea.$, {
                                              onClick: t ? s : void 0,
                                              variant: "primary",
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
            (0, i.jsx)(eq.A, { visible: L, glow: !0, className: tg.Ph }),
            null != S &&
                (0, i.jsx)(o.animated.div, {
                    className: tg.AK,
                    style: { opacity: (0, P.a)(h.to([0, 1], [1, 0])) },
                    children: (0, i.jsx)("div", { className: a()(tg.LC, tg.Ge), style: C }),
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
    let { quest: t } = e,
        { hasAlreadyLinked: n, onClickGameTitle: s } = r.useContext($);
    return !0 !== n ? null : (0, i.jsx)(eZ.A, { quest: t, hasAlreadyLinked: n, onClickGameTitle: s });
}
function tC(e) {
    let { activeScreen: t, selectPlatform: n } = e,
        { quest: s, taskDetails: a } = r.useContext(K);
    return (0, ex.YW)(t)
        .with(p.X0.SELECT, () => (0, i.jsx)(tm, { onConsole: () => n(W.fO.CONSOLE), onDesktop: () => n(W.fO.DESKTOP) }))
        .with(p.X0.DESKTOP, () => ((0, A.I6)(s) ? (0, i.jsx)(ty, { quest: s }) : (0, i.jsx)(th, { quest: s })))
        .with(p.X0.CONSOLE, () => (0, i.jsx)(to, { quest: s, taskDetails: a }))
        .exhaustive();
}
function tN(e) {
    let { parentContainerRef: t } = e,
        { quest: n, taskDetails: s } = r.useContext(K),
        [a, o, l] = (0, E.Qo)(n, s),
        u = s.percentComplete > 0,
        c = (0, E.Vn)(n),
        d = (0, E.RR)({ quest: n }),
        _ = o.length > 1 && !u && !c;
    return (0, i.jsxs)(tc, {
        children: [
            (0, i.jsx)(tC, { activeScreen: a, selectPlatform: l }),
            a !== p.X0.SELECT &&
                (0, i.jsxs)("div", {
                    className: tg.oG,
                    children: [
                        _ &&
                            (0, i.jsx)(eV.K, {
                                size: "sm",
                                "aria-label": ee.intl.string(ee.t["13/7kX"]),
                                onClick: () => l(null),
                                icon: eB.n,
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
function tv(e) {
    let { parentContainerRef: t } = e,
        { quest: n, taskDetails: s } = r.useContext(K),
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
    return (0, i.jsxs)(tc, {
        children: [
            (0, i.jsx)(tI, { onClick: l }),
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
function tR(e) {
    let { parentContainerRef: t } = e,
        { quest: n, taskDetails: s } = r.useContext(K),
        a = s.percentComplete > 0,
        o = (0, E.Vn)(n);
    return (0, i.jsx)(tc, {
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
        { quest: n } = r.useContext(K);
    return (0, A.t)({ quest: n }) || (0, A.g5)(n) || (0, A.fE)({ quest: n }) || (0, A.I6)(n)
        ? (0, i.jsx)(tN, { parentContainerRef: t })
        : (0, A.vv)(n)
          ? (0, i.jsx)(tv, { parentContainerRef: t })
          : (0, i.jsx)(tR, { parentContainerRef: t });
}
function tb(e) {
    let { overlayRef: t, containerRef: n } = e,
        { quest: s, taskDetails: l } = r.useContext(K),
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
                    (0, i.jsx)(ew, {}),
                    (0, i.jsx)("div", { className: tg.yF }),
                    (0, i.jsx)(eR, { overlayRef: t, progressBarRef: c, isHovered: !1 }),
                    (0, i.jsx)(eD, {
                        contentLocation: "expanded",
                        progressBarRef: c,
                        isExpanded: !0,
                        percentComplete: h,
                        popoutTargetElementRef: d,
                    }),
                    (0, i.jsx)(tO, { parentContainerRef: d }),
                ],
            }),
            (0, i.jsx)("div", {
                className: a()(tg.tv, tg.Sx),
                style: { backgroundImage: `linear-gradient(90deg, ${U}, ${G})` },
            }),
        ],
    });
}
async function tD(e, t, n, i) {
    (0, A.vv)(e)
        ? await (0, y.e0)(e, { questContent: t, questContentCTA: n, sourceQuestContent: i, sourceQuestContentCTA: n })
        : (0, eu.vA)(e)
          ? await (0, eH.Oy)(e.id, { questContent: t, questContentCTA: n, sourceQuestContent: i })
          : (0, eH.Oy)(e.id, { questContent: t, questContentCTA: n, sourceQuestContent: i });
}
let tL = r.forwardRef(function (e, t) {
    let { children: n, className: s, overlayRef: l } = e,
        { collapsedHeight: u, isExpanded: c, isExpansionAnimationComplete: d, quest: _ } = r.useContext(K),
        { expansionSpring: h } = r.useContext(F),
        { launchInGameActivity: f } = (0, E.zW)(_),
        m = (0, eu.vA)(_),
        g = r.useCallback(async () => {
            let e = m ? b.Cy.START_QUEST : b.Cy.ACCEPT_QUEST;
            await tD(_, p.uF.QUEST_BAR_V2, e, p.uF.QUEST_BAR_V2), m && f();
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
                    ? (0, i.jsx)(tb, { overlayRef: l, containerRef: t })
                    : (0, i.jsx)(tS, { isInteractable: I, containerRef: t, onAcceptQuest: g }),
            }),
        ],
    });
});
var tw = n(717695);
function tM() {
    let {
            expansionSpring: e,
            animatedComponentProps: t,
            recalculateAnimationPositions: n,
            mountPoints: s,
        } = r.useContext(F),
        { isExpanded: a } = r.useContext(K);
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
var tP = n(192308),
    tx = n(561844),
    tk = n(652215),
    tU = n(731738),
    tG = n(807393),
    tF = n(260364),
    tV = n(325243);
function tB(e) {
    let { isExpanded: t, questId: n } = e;
    return (
        (0, E.H6)({
            mode: t ? W.fP.EXPANDED : W.fP.COLLAPSED,
            questContent: p.uF.QUEST_BAR_V2,
            questId: n,
            sourceQuestContent: p.uF.QUEST_BAR_V2,
        }),
        null
    );
}
function tj() {
    return (
        r.useEffect(() => {
            _.trigger();
        }, []),
        null
    );
}
function tH(e) {
    let { quest: t } = e,
        n = (0, g.L)({ quest: t, location: W.rE.QUESTS_BAR }),
        s = (0, m.s)(),
        c = (0, l.bG)([f.A], () => null != f.A.questEnrollmentBlockedUntil),
        { isQuestBarVisible: d, reason: _ } = (0, S.TQ)({ quest: t }),
        C = (0, l.bG)([h.A], () => h.A.hasLayers()),
        N = r.useRef(null),
        v = r.useMemo(() => (0, A.vv)(t), [t]),
        R = t.id,
        O = t.userStatus?.enrolledAt != null,
        D = (0, u.A)(O),
        L = t.userStatus?.completedAt != null,
        { hasError: w, isLoading: M } = (0, I.Gk)(),
        P = r.useContext(tw.Z) || (s && d && !M && !c),
        {
            isExpanded: x,
            setIsExpanded: k,
            expandQuestBar: U,
            isExpansionAnimationComplete: G,
            isVisibilityAnimationAtRest: F,
            expansionSpring: V,
            visibilitySpring: j,
            springConfig: H,
        } = (function (e) {
            let { isQuestAccepted: t, isQuestCompleted: n, isQuestBarVisible: i } = e,
                s = (0, l.bG)([Z.Ay], () => Z.Ay.useReducedMotion),
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
                m = t ? W.ZV : W.Ko,
                [{ expansionSpring: g }, A] = (0, Q.z)(() => ({
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
            let { visibilitySpring: I } = (0, Q.z)({
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
            handleCtxMenuOpened: Y,
            handleCtxMenuClosed: K,
            handleCtxMenuSelection: $,
            handleGameSheetOpened: z,
            handleGameSheetClosed: X,
            handleFocusWithoutDelay: J,
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
                C = r.useCallback(() => {
                    window.clearTimeout(c.current), _ || f || d.current || i(!1);
                }, [_, f, i]),
                N = r.useCallback(() => {
                    (0, tx.av)({
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
                v = r.useCallback(() => {
                    (0, tx.av)({
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
                        C();
                }, [C, u, t.id]);
            r.useEffect(() => {
                f && d.current && v();
            }, [f, v]),
                r.useLayoutEffect(() => {
                    o && !l && d.current && s();
                }, [s, o, l]),
                r.useLayoutEffect(() => {
                    a || !o || l || d.current || i(!1);
                }, [o, a, l, i]);
            let R = (0, tP.useHasAnyModalOpen)();
            return (
                r.useEffect(() => {
                    R && d.current && v();
                }, [v, R]),
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
                    handleBlur: C,
                    handleMouseEnter: N,
                    handleMouseLeave: v,
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
            impressionRef: N,
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
                ((0, tx.av)({
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
                tG.A.increment({
                    name: tU.K.QUEST_CONTENT_RENDERING_FAILURE,
                    tags: [
                        `quest_id:${t.id}`,
                        `quest_content:${(0, b.jO)(p.uF.QUEST_BAR)}`,
                        "reason:asset_loading_error",
                    ],
                }));
        }, [n, d, t.id]),
            r.useEffect(() => {
                i ||
                    (0, tx.av)({
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
                    (0, tx.av)({
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
                (!u || c) && tF.A.clearTracking(), s && a && !o && !n && i && tF.A.stopTracking(t.id);
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
        impressionRef: N,
    });
    let ei = r.useRef(null),
        er = r.useRef(null),
        ea = r.useRef(null),
        eo = (0, E.fc)(t),
        el = (0, E.UH)(t);
    if (
        (r.useEffect(() => {
            v && (0, y.l9)();
        }, [v]),
        !s || (!P && F && !M) || w)
    )
        return w ? n.log("Not rendered due to asset error") : s || n.log("Not rendered due to ineligibility"), null;
    let eu = 70 + 78 * !!L;
    return (0, i.jsx)(T.R, {
        questOrQuests: t,
        questContent: p.uF.QUEST_BAR_V2,
        overrideVisibility: !C && P,
        onImpression: el,
        sourceQuestContent: p.uF.QUEST_BAR_V2,
        children: (e, n) => (
            (N.current = n.current),
            (0, i.jsxs)("div", {
                className: tV.dK,
                children: [
                    P &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)(tB, { questId: R, isExpanded: x }), (0, i.jsx)(tj, {})],
                        }),
                    (0, i.jsx)(o.animated.div, {
                        "data-testid": "quest-bar-container",
                        "aria-hidden": !P,
                        onMouseLeave: en,
                        onMouseEnter: et,
                        onFocus: J,
                        onBlur: ee,
                        className: a()(tV.iE, { [tV.Xc]: !P, [tV.uv]: P && F }),
                        style: { height: j.to({ range: [0, 1], output: [0, eu] }) },
                        children: (0, i.jsx)(o.animated.div, {
                            className: a()(tV.FG, { [tV.E$]: x, [tV.KA]: O }),
                            children: (0, i.jsx)(tu, {
                                springConfig: H,
                                isExpanded: x,
                                children: (0, i.jsx)(B, {
                                    expandedContentRef: ei,
                                    collapsedContentRef: er,
                                    expansionSpring: V,
                                    children: (0, i.jsxs)(q, {
                                        quest: t,
                                        taskDetails: eo,
                                        isExpanded: x,
                                        isExpansionAnimationComplete: G,
                                        onCtxMenuClose: K,
                                        onCtxMenuOpen: Y,
                                        onCtxMenuSelect: $,
                                        onGameSheetOpen: z,
                                        onGameSheetClose: X,
                                        collapsedHeight: eu,
                                        children: [
                                            (0, i.jsx)(
                                                eP,
                                                { ref: er, className: tV.Qs, overlayRef: ea },
                                                L ? "collapsed-with-rewards" : "collapsed-without-rewards",
                                            ),
                                            (0, i.jsx)(tL, {
                                                className: tV.Qs,
                                                overlayRef: ea,
                                                ref: ei,
                                                children: (0, i.jsxs)(i.Fragment, {
                                                    children: [(0, i.jsx)(tM, {}), !O && (0, i.jsx)(es, {})],
                                                }),
                                            }),
                                            (0, i.jsx)("div", { ref: ea, className: tV.Lw }),
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
let tY = function () {
    let e = (0, S.dN)();
    return null == e
        ? null
        : (0, i.jsx)(I.jY, { source: W.rE.QUESTS_BAR, questId: e.id, children: (0, i.jsx)(tH, { quest: e }) }, e.id);
};
