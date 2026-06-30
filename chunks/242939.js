"use strict";
n.d(t, { A: () => tY, Y: () => tH });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(18005),
    l = n(323889),
    u = n(17928),
    c = n(475743),
    d = n(840251),
    _ = n(688151);
let h = new d.E([], _.$G.QUEST_BAR_RENDERED, { location: "quest bar rendered" });
var f = n(186111),
    p = n(859703),
    E = n(24001),
    m = n(347135),
    g = n(971276),
    A = n(851936),
    I = n(792620),
    T = n(557637),
    S = n(73473),
    y = n(371912),
    C = n(617986),
    N = n(939249),
    v = n(834730),
    R = n(290136),
    O = n(661531),
    b = n(365199),
    D = n(590202),
    L = n(971649),
    w = n(901406),
    M = n(270045),
    P = n(57718),
    x = n(398025);
n(321073);
var k = n(340287),
    U = n(765671);
let G = "#00000000",
    F = "#CDD8FF1A",
    V = r.createContext({
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
    B = r.forwardRef(function (e, t) {
        let { children: n, id: s, inState: a, isTextTransition: l = !1 } = e,
            {
                recalculateAnimationPositions: u,
                registerComponent: c,
                unregisterComponent: d,
                expansionSpring: _,
                mountPoints: h,
            } = r.useContext(V),
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
        (0, U.i4)(f, m);
        let g = h.get(s)?.current,
            A = null;
        return (
            null == g
                ? (A = null)
                : l && null != _
                  ? (A = (0, i.jsxs)(i.Fragment, {
                        children: [
                            "collapsed" === a &&
                                (0, k.createPortal)(
                                    (0, i.jsx)(o.animated.div, {
                                        style: {
                                            position: "absolute",
                                            opacity: (0, x.a)(_.to({ range: [0, 1], output: [1, 0] })),
                                        },
                                        children: n(p),
                                    }),
                                    g,
                                ),
                            "expanded" === a &&
                                (0, k.createPortal)(
                                    (0, i.jsx)(o.animated.div, {
                                        style: {
                                            position: "absolute",
                                            opacity: (0, x.a)(_.to({ range: [0, 1], output: [0, 1] })),
                                        },
                                        children: n(p),
                                    }),
                                    g,
                                ),
                        ],
                    }))
                  : "collapsed" === a && (A = (0, k.createPortal)(n(p), g)),
            (0, i.jsxs)("div", {
                style: { opacity: +((null == A && "collapsed" === a) || null == g) },
                ref: t,
                children: [n(f), A],
            })
        );
    }),
    j = (e) => {
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
        return (0, i.jsx)(V.Provider, {
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
var H = n(409626),
    Y = n(692969),
    W = n(284846),
    K = n(190107);
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
function q(e) {
    let { children: t, quest: n } = e,
        { hasAlreadyLinked: s } = (0, W.U)(n),
        a = (0, Y.A)({ applicationId: (0, I.xc)(n), location: K.rE.QUEST_INSTRUCTIONS, source: H.Ob.QuestBar }),
        o = r.useMemo(() => ({ hasAlreadyLinked: s, onClickGameTitle: a }), [s, a]);
    return (0, i.jsx)(z.Provider, { value: o, children: t });
}
function Z(e) {
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
    return (0, i.jsx)($.Provider, { value: f, children: (0, I.I6)(_) ? (0, i.jsx)(q, { quest: _, children: t }) : t });
}
var X = n(775602),
    Q = n(646764),
    J = n(717421);
function ee() {
    let e = document.body.style.getPropertyValue("--custom-guild-sidebar-width").slice(0, -2);
    return parseInt("" !== e ? e : "375");
}
var et = n(375708),
    en = n(173399);
let ei = function (e) {
    let { isFullyExpanded: t, partnerBranding: n } = e,
        s = {
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
        l = (0, u.bG)([X.Ay], () => X.Ay.useReducedMotion),
        { quest: c } = r.useContext($),
        { expansionSpring: d } = r.useContext(V),
        _ = s ? -4 : 6;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(o.animated.div, {
                className: en.tE,
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
                children: (0, i.jsx)(Q.A, {
                    learnMoreStyle: "text",
                    learnMoreFontSize: t ? 9 : void 0,
                    quest: c,
                    questContent: E.uF.QUEST_BAR_V2,
                    autoplay: t && !l,
                    sourceQuestContent: E.uF.QUEST_BAR_V2,
                    style: { width: 48, height: 48, marginRight: 8, borderRadius: 6 },
                }),
            }),
            (0, i.jsxs)(o.animated.div, {
                className: a()(en.pm, { [en.nd]: s }),
                style: {
                    transform: (0, o.to)(
                        [d.to({ range: [0, 1], output: [0, -48] }), d.to({ range: [0, 1], output: [0, _] })],
                        (e, t) => `translate(${e}px, ${t}px)`,
                    ),
                },
                children: [
                    (0, i.jsx)("div", { className: a()({ [en.Iu]: !s }), children: n }),
                    (0, i.jsx)(o.animated.div, {
                        className: a()(en.ol, { [en.yZ]: s }),
                        style: { opacity: (0, x.a)(d.to({ range: [0, 1], output: [s ? 1 : 0.7, 0] })) },
                        children: (0, i.jsx)(v.E, {
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
let es = (0, o.animated)(P.Ay),
    ea = function () {
        let e = (0, L.go)(),
            { expansionSpring: t } = r.useContext(V),
            {
                onCtxMenuOpen: n,
                onCtxMenuClose: s,
                onCtxMenuSelect: l,
                isExpanded: u,
                isExpansionAnimationComplete: c,
                quest: d,
            } = r.useContext($),
            _ = r.useCallback(() => {
                (0, C.Zc)(d, {
                    content: E.uF.QUEST_BAR_V2,
                    ctaContent: D.Cy.OPEN_DISCLOSURE,
                    sourceQuestContent: E.uF.QUEST_BAR_V2,
                });
            }, [d]),
            h = r.useCallback(() => {
                (0, w.pu)(d, {
                    content: E.uF.QUEST_BAR_V2,
                    ctaContent: D.Cy.OPEN_GAME_LINK,
                    impressionId: e,
                    sourceQuestContent: E.uF.QUEST_BAR_V2,
                });
            }, [e, d]),
            f = u && c,
            p = (0, i.jsx)(N.D, {
                onClick: h,
                className: a()(er.vk, { [er.wm]: f }),
                children: (0, i.jsx)(es, {
                    quest: d,
                    withGameTile: !1,
                    logotypeClassName: er.Iu,
                    logotypeStyle: {
                        height: 24,
                        maxWidth: 92,
                        transform: (0, o.to)([t.to({ range: [0, 1], output: [1, 1] })], (e) => `scale(${e})`),
                    },
                }),
            });
        return (0, i.jsxs)(o.animated.div, {
            className: a()(er.iE, er.Ht, { [er.tT]: f }),
            style: { transform: (0, o.to)([t.to({ range: [0, 1], output: [6, 0] })], (e) => `translateY(${e}px)`) },
            children: [
                (0, i.jsx)(o.animated.div, {
                    className: er.Tu,
                    style: { opacity: (0, x.a)(t.to({ range: [0, 1], output: [0, 1] })) },
                }),
                (0, i.jsx)(ei, { isFullyExpanded: f, partnerBranding: p }),
                (0, i.jsxs)(o.animated.div, {
                    className: er.P0,
                    style: { opacity: (0, x.a)(t.to({ range: [0, 1], output: [0, 1] })) },
                    children: [
                        (0, i.jsxs)(N.D, {
                            className: er.y8,
                            onClick: _,
                            children: [
                                (0, i.jsx)(v.E, {
                                    color: "always-white",
                                    variant: "text-xs/normal",
                                    children: et.intl.string(et.t.o6FLcF),
                                }),
                                (0, i.jsx)(R.c, { color: O.A.colors.WHITE, className: er.P$ }),
                            ],
                        }),
                        (0, i.jsx)(M.C, {
                            onOpen: n,
                            onClose: s,
                            onSelect: l,
                            questContent: E.uF.QUEST_BAR_V2,
                            quest: d,
                            shouldShowDisclosure: !0,
                            showShareLink: !0,
                            sourceQuestContent: E.uF.QUEST_BAR_V2,
                            children: (e) =>
                                (0, i.jsx)(N.D, {
                                    ...e,
                                    className: a()(er.uJ, er.rb),
                                    "aria-label": et.intl.string(et.t.DEoVWZ),
                                    children: (0, i.jsx)(b.j, {
                                        size: "md",
                                        color: "currentColor",
                                        className: a()(er.Bx, er.ON),
                                    }),
                                }),
                        }),
                    ],
                }),
            ],
        });
    };
var eo = n(821609),
    el = n(3738),
    eu = n(651892),
    ec = n(814793),
    ed = n(753386),
    e_ = n(368715),
    eh = n(79545),
    ef = n(862611),
    ep = n(795965),
    eE = n(519508);
function em(e) {
    let { quest: t, sourceQuestContent: n, taskDetails: r } = e;
    return (0, i.jsx)(eo.$, {
        variant: "primary",
        fullWidth: !0,
        onClick: function () {
            let e = t.userStatus?.enrolledAt == null ? D.Cy.ACCEPT_QUEST : D.Cy.WATCH_VIDEO;
            (0, C.d5)({ quest: t, questContent: E.uF.QUEST_BAR_V2, sourceQuestContent: n, sourceQuestContentCTA: e });
        },
        size: "sm",
        text: (0, ed.WM)(r),
    });
}
function eg(e) {
    let { quest: t, sourceQuestContent: n } = e,
        r = (0, L.go)(),
        s = (0, eu.wr)(t);
    return (0, i.jsx)(eo.$, {
        size: "sm",
        fullWidth: !0,
        onClick: () =>
            (0, w.pu)(t, {
                content: E.uF.QUEST_BAR_V2,
                ctaContent: D.Cy.OPEN_GAME_LINK,
                impressionId: r,
                sourceQuestContent: n,
            }),
        text: s,
    });
}
function eA(e) {
    let { quest: t, sourceQuestContent: n } = e,
        r = (0, L.vU)()?.getId();
    return (0, i.jsx)(eo.$, {
        fullWidth: !0,
        onClick: () =>
            (0, w.se)(
                { quest: t },
                {
                    content: E.uF.QUEST_BAR_V2,
                    ctaContent: D.Cy.CONNECT_CONSOLE,
                    impressionId: r,
                    sourceQuestContent: n,
                },
            ),
        size: "sm",
        text: et.intl.string(et.t.csptqV),
    });
}
function eI(e) {
    let { quest: t } = e,
        n = (0, el.NA)({ quest: t }),
        { launchInGameActivity: r } = (0, m.zW)(t);
    return (0, ec.vA)(t)
        ? (0, i.jsx)(eo.$, { fullWidth: !0, variant: "primary", icon: (0, C.Oz)(t), onClick: r, size: "sm", text: n })
        : null;
}
function eT(e) {
    let {
            quest: t,
            sourceQuestContent: n,
            taskDetails: r,
            popoutTargetElementRef: s,
            onGameSheetOpened: a,
            onGameSheetClosed: o,
        } = e,
        { applications: l } = r;
    return (0, i.jsx)(ef.A, {
        quest: t,
        sourceQuestContent: n,
        applications: l ?? [],
        targetElementRef: s,
        onGameSheetOpened: a,
        onGameSheetClosed: o,
        children: (e) =>
            (0, i.jsx)(eo.$, {
                variant: "secondary",
                fullWidth: !0,
                size: "sm",
                text: et.intl.string(et.t["93PTEs"]),
                ...e,
            }),
    });
}
function eS(e) {
    let { quest: t, ctaLabel: n, onClick: r, questContent: s = E.uF.QUEST_BAR_V2, sourceQuestContent: a } = e,
        o = (0, ep.D)({
            quest: t,
            questContent: s,
            sourceQuestContent: a,
            experimentLocation: K.rE.QUESTS_BAR,
            onBeforeClaim: r,
        });
    return (0, i.jsx)(eo.$, {
        fullWidth: !0,
        onClick: o,
        text: n ?? et.intl.string(et.t.cfY4PE),
        "data-testid": "quest-bar-claim-reward-button",
        variant: "primary",
        size: "sm",
    });
}
function ey(e) {
    let {
            sourceQuestContent: t,
            awaitingConsoleConnections: n,
            hasMadeProgress: s,
            isProgressing: a,
            popoutTargetElementRef: o,
        } = e,
        { quest: l, onGameSheetOpen: u, onGameSheetClose: c, taskDetails: d } = r.useContext($),
        [_] = (0, m.Qo)(l, d),
        h = l.userStatus?.completedAt != null,
        f = (0, I.vv)(l),
        p = (0, I.I6)(l),
        g = _ !== E.X0.SELECT && !s && !a,
        A = null;
    return (
        h
            ? (A = (0, i.jsx)(eS, { quest: l, sourceQuestContent: t }))
            : p
              ? (A = (0, i.jsx)(e_.A, {
                    quest: l,
                    surface: eh.V3.QUEST_BAR_FOOTER,
                    size: "sm",
                    analyticsCtxQuestContent: E.uF.QUEST_BAR_V2,
                    analyticsCtxSourceQuestContent: t,
                }))
              : f
                ? (A = (0, i.jsx)(em, { quest: l, sourceQuestContent: t, taskDetails: d }))
                : (0, ec.vA)(l)
                  ? (A = (0, i.jsx)(eI, { quest: l }))
                  : _ === E.X0.CONSOLE && n
                    ? (A = (0, i.jsx)(eA, { quest: l, sourceQuestContent: t }))
                    : g && (0, ec.ui)(l)
                      ? (A = (0, i.jsx)(eT, {
                            quest: l,
                            sourceQuestContent: t,
                            taskDetails: d,
                            popoutTargetElementRef: o,
                            onGameSheetOpened: u,
                            onGameSheetClosed: c,
                        }))
                      : g && (A = (0, i.jsx)(eg, { quest: l, sourceQuestContent: t })),
        null == A ? null : (0, i.jsx)("div", { className: eE.lO, children: A })
    );
}
function eC(e) {
    return (0, i.jsx)(ey, { ...e, popoutTargetElementRef: e.parentContainerRef });
}
var eN = n(106778),
    ev = n(536283),
    eR = n(947638);
let eO = (e) => {
    let { overlayRef: t, progressBarRef: n, isHovered: s } = e,
        { quest: l, isExpanded: d } = r.useContext($),
        { expansionSpring: _ } = r.useContext(V),
        { completionSpring: h, startCompletionAnimation: p } = (function () {
            let [{ spring: e }, t] = (0, J.z)(() => ({ spring: 0 }), "animate-always");
            return {
                completionSpring: e,
                startCompletionAnimation: r.useCallback(() => {
                    t({ spring: 1 }), t({ spring: 0, delay: 2e3 });
                }, [t]),
            };
        })(),
        E = l.userStatus?.completedAt != null,
        m = r.useRef(!1),
        g = (0, u.bG)([X.Ay], () => X.Ay.useReducedMotion),
        A = r.useRef(null),
        I = (0, u.bG)([f.A], () => f.A.hasLayers()),
        T = (0, c.A)(I),
        [S, y] = r.useState(null),
        [C, N] = r.useState(null),
        v = r.useRef(new eN.OH({ gravity: 0, wind: 0 })),
        R = (0, eN.f9)(S, C),
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
        }, [n, A, R, g]),
        D = (0, c.A)(d);
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
              className: eR.iE,
              "aria-hidden": "true",
              ref: A,
              children: [
                  (0, i.jsx)(o.animated.div, { className: eR.Tp, style: { opacity: (0, x.a)(h) } }),
                  (0, i.jsx)(o.animated.div, { className: a()(eR.sJ, eR.ix), style: { opacity: (0, x.a)(h) } }),
                  (0, i.jsxs)(o.animated.div, {
                      className: eR.KG,
                      style: { transform: _.to({ range: [0, 1], output: [-35, 0] }).to((e) => `translateY(${e}px)`) },
                      children: [
                          (0, i.jsx)(eN.Fk, { ref: y, className: eR.t_, environment: v.current }),
                          (0, i.jsx)(eN.K_, {
                              ref: N,
                              sprites: ["/assets/b909790cf1d80597.svg"],
                              colors: O,
                              spriteWidth: ev.wn,
                              spriteHeight: ev.wn,
                          }),
                          null != t.current &&
                              (0, k.createPortal)(
                                  (0, i.jsx)(o.animated.div, {
                                      className: a()(eR.sJ, eR.d7),
                                      style: { opacity: (0, x.a)(h) },
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
let eL = function (e) {
    let { isExpanded: t, contentLocation: n, progressBarRef: s, percentComplete: a, popoutTargetElementRef: o } = e,
        { quest: l, onGameSheetOpen: u, onGameSheetClose: c, taskDetails: d } = r.useContext($),
        { hasAlreadyLinked: _, onClickGameTitle: h } = r.useContext(z),
        [f] = (0, m.Qo)(l, d),
        p = (0, el.VX)(l, _),
        g = (0, el.tH)({
            quest: l,
            isExpanded: t,
            activeScreen: f,
            sourceQuestContent: E.uF.QUEST_BAR_V2,
            popoutTargetElementRef: o,
            onGameSheetOpened: u,
            onGameSheetClosed: c,
            hasAlreadyLinked: _,
            onClickGameTitle: h,
        });
    return (0, i.jsxs)("div", {
        className: eD.Z0,
        children: [
            (0, i.jsx)(B, {
                inState: n,
                id: "progress-bar",
                ref: s,
                children: (e) =>
                    (0, i.jsx)(eb.A, {
                        ref: e,
                        style: "small",
                        percentComplete: a,
                        size: 42,
                        children: (0, i.jsx)(Q.A, {
                            fullWidth: !0,
                            quest: l,
                            questContent: E.uF.QUEST_BAR_V2,
                            autoplay: !1,
                            sourceQuestContent: E.uF.QUEST_BAR_V2,
                        }),
                    }),
            }),
            (0, i.jsxs)("div", {
                className: eD.NZ,
                children: [
                    (0, i.jsx)(B, {
                        inState: n,
                        id: "progress-title",
                        children: (e) =>
                            (0, i.jsx)(v.E, {
                                ref: e,
                                className: eD.FZ,
                                color: "text-strong",
                                variant: "text-sm/semibold",
                                children: p,
                            }),
                    }),
                    (0, i.jsx)(B, {
                        inState: n,
                        id: "progress-subtitle",
                        isTextTransition: !0,
                        children: (e) =>
                            (0, i.jsx)(v.E, {
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
    let { quest: e, onCtxMenuOpen: t, onCtxMenuClose: n, onCtxMenuSelect: s } = r.useContext($),
        o = (0, m.S5)(e.config.expiresAt);
    return (0, i.jsxs)("div", {
        className: ew.pS,
        children: [
            (0, i.jsx)(v.E, {
                variant: "text-xxs/medium",
                className: a()(ew.Uu, ew.TK),
                children: et.intl.format(et.t["pX+fmn"], { expirationDate: o }),
            }),
            (0, i.jsx)(M.C, {
                onOpen: t,
                onClose: n,
                onSelect: s,
                questContent: E.uF.QUEST_BAR_V2,
                quest: e,
                shouldShowDisclosure: !1,
                showShareLink: !0,
                sourceQuestContent: E.uF.QUEST_BAR_V2,
                children: (e) =>
                    (0, i.jsx)(N.D, {
                        ...e,
                        className: ew.rb,
                        "aria-label": et.intl.string(et.t.DEoVWZ),
                        children: (0, i.jsx)(b.j, { size: "md", color: "currentColor", className: a()(ew.Bx, ew.U9) }),
                    }),
            }),
        ],
    });
}
var eP = n(249309);
let ex = r.forwardRef(function (e, t) {
    let { className: n, overlayRef: s } = e,
        { expansionSpring: l } = r.useContext(V),
        { quest: u, taskDetails: c, isExpanded: d, isExpansionAnimationComplete: _ } = r.useContext($),
        h = u.userStatus?.completedAt != null,
        f = (0, m.I3)(u),
        p = r.useRef(null),
        g = u.userStatus?.enrolledAt != null,
        A = null != f ? f.percentComplete : c.percentComplete,
        I = r.useRef(null),
        [T, S] = r.useState(!1);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            h && (0, i.jsx)(eO, { overlayRef: s, progressBarRef: p, isHovered: T }),
            (0, i.jsx)(o.animated.div, {
                ref: t,
                "aria-hidden": d && _,
                inert: (!!d && !!_) || void 0,
                className: a()(n, eP.hR, { [eP.Ag]: d, [eP.s]: g }),
                style: {
                    opacity: (0, x.a)(l.to({ range: [0, 1], output: [1, 0] })),
                    backgroundImage: h ? `linear-gradient(90deg, ${G}, ${F})` : void 0,
                },
                onMouseEnter: () => S(!0),
                onMouseLeave: () => S(!1),
                children: (0, i.jsxs)("div", {
                    className: eP.o8,
                    children: [
                        h &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(eM, {}), (0, i.jsx)("div", { className: eP.yF })],
                            }),
                        g
                            ? (0, i.jsx)(eL, {
                                  contentLocation: "collapsed",
                                  progressBarRef: p,
                                  isExpanded: !1,
                                  percentComplete: A,
                              })
                            : null,
                        h &&
                            (0, i.jsx)("div", {
                                ref: I,
                                children: (0, i.jsx)(eC, {
                                    parentContainerRef: I,
                                    awaitingConsoleConnections: !1,
                                    hasMadeProgress: !0,
                                    isProgressing: !1,
                                    sourceQuestContent: E.uF.QUEST_BAR_V2,
                                }),
                            }),
                    ],
                }),
            }),
        ],
    });
});
n(801541);
var ek = n(889137),
    eU = n(417270),
    eG = n(782134),
    eF = n(534514),
    eV = n(825484),
    eB = n(408278),
    ej = n(921853),
    eH = n(607470),
    eY = n(340124),
    eW = n(405670),
    eK = n(112142),
    e$ = n(646917),
    ez = n(46948),
    eq = n(576761),
    eZ = n(895253),
    eX = n(976019),
    eQ = n(442734),
    eJ = n(139384),
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
    te = n(540037);
function tt(e) {
    let { text: t, quest: n, sourceQuestContent: r } = e,
        s = (0, e5.Ut)(),
        a = (0, L.go)();
    return (0, i.jsx)(N.D, {
        className: te.Z0,
        onClick: () => {
            (0, e4.E5)(e4.kI.STEP_2_CLICKED_INTERNAL, "console_connection_step")
                ? (0, e2.r)({
                      type: e3.F.CLICK_INTERNAL,
                      adCreativeType: l.p.QUEST,
                      adCreativeId: n.id,
                      questContentCTA: D.Cy.VIEW_CONSOLE_CONNECTIONS_LINK,
                      surfaceId: E.uF.QUEST_BAR_V2,
                      sourceQuestContent: r,
                      impressionId: a,
                  })
                : s({
                      questId: n.id,
                      questContent: E.uF.QUEST_BAR_V2,
                      questContentCTA: D.Cy.VIEW_CONSOLE_CONNECTIONS_LINK,
                      sourceQuestContent: r,
                  }),
                (0, e8.openUserSettings)(e7.X.CONNECTIONS_PANEL);
        },
        children: (0, i.jsx)(v.E, { "aria-label": t, color: "none", variant: "text-xxs/normal", children: t }),
    });
}
function tn(e) {
    let { xboxAndPlaystationAccounts: t, quest: n, sourceQuestContent: r } = e;
    return t.length > 0
        ? (0, i.jsx)(tt, { text: et.intl.string(et.t["qiS+xj"]), quest: n, sourceQuestContent: r })
        : null;
}
function ti(e) {
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(e9.L5, { children: et.intl.string(et.t.EJFSvD) }), (0, i.jsx)(tn, { ...e })],
    });
}
var tr = n(256023);
function ts(e) {
    return (0, i.jsx)(v.E, { className: tr.eW, color: "text-muted", variant: "text-xxs/normal", children: e.children });
}
function ta(e) {
    let { quest: t, useReducedMotion: n } = e,
        s = (0, y.H1)(t.id, E.uF.QUEST_BAR_V2, E.uF.QUEST_BAR_V2),
        o = (0, y.Xf)({ useReducedMotion: n }),
        u = (0, e5.Ut)(),
        c = (0, L.go)(),
        {
            errorHints: d,
            startingConsoleQuest: _,
            startConsoleQuest: h,
        } = (0, m.Wj)({
            questId: t.id,
            beforeRequest: () => {
                (0, e4.E5)(e4.kI.STEP_2_CLICKED_INTERNAL, "quest_bar_console_task_checklist")
                    ? (0, e2.r)({
                          type: e3.F.CLICK_INTERNAL,
                          adCreativeType: l.p.QUEST,
                          adCreativeId: t.id,
                          questContentCTA: D.Cy.DEFIBRILLATOR,
                          surfaceId: E.uF.QUEST_BAR_V2,
                          sourceQuestContent: E.uF.QUEST_BAR_V2,
                          impressionId: c,
                      })
                    : u({
                          questId: t.id,
                          questContent: E.uF.QUEST_BAR_V2,
                          questContentCTA: D.Cy.DEFIBRILLATOR,
                          sourceQuestContent: E.uF.QUEST_BAR_V2,
                      }),
                    o.startAnimation();
            },
            afterRequest: o.stopAnimation,
        }),
        { header: f, renderBody: p } = r.useMemo(() => {
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
                                      let r = e6.A.getAccount(e.connected_account_id, e.connected_account_type),
                                          s = (0, w.IG)(e),
                                          a = (0, w.$J)(e);
                                      return (0, i.jsx)(
                                          ts,
                                          {
                                              children: et.intl.format(s, {
                                                  account_name: r?.name,
                                                  onClick: () => {
                                                      (0, w.v0)(
                                                          { quest: t, platformType: a },
                                                          {
                                                              content: E.uF.QUEST_BAR,
                                                              ctaContent: D.Cy.DEFIBRILLATOR_RECONNECT_CONSOLE,
                                                              impressionId: c,
                                                              sourceQuestContent: E.uF.QUEST_BAR_V2,
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
                          (0, i.jsx)(v.E, {
                              className: tr.eW,
                              color: "text-muted",
                              variant: "text-xxs/normal",
                              children: (0, ec.ui)(t)
                                  ? et.intl.string(et.t.bUyEZZ)
                                  : et.intl.format(et.t.GXqvC1, { gameTitle: n }),
                          }),
            };
        }, [d, t, c]);
    return (0, i.jsxs)("div", {
        className: tr.XK,
        children: [
            (0, i.jsxs)("div", {
                className: tr.oK,
                children: [
                    (0, i.jsx)(e1.E, {
                        size: "custom",
                        color: "currentColor",
                        className: 0 === d.length ? tr.pH : tr.JA,
                        width: 16,
                        height: 16,
                    }),
                    (0, i.jsx)(v.E, { variant: "text-xs/medium", children: f }),
                    (0, i.jsx)(N.D, { className: a()(tr.w, { [tr.r9]: _ }), onClick: () => h(), children: o.render() }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: a()({ [tr.Iu]: _ }),
                children: [p(), 0 === d.length ? null : (0, i.jsx)(ts, { children: s })],
            }),
        ],
    });
}
let to = function (e) {
        let { quest: t, taskDetails: n } = e,
            s = (0, u.bG)([X.Ay], () => X.Ay.useReducedMotion),
            a = (0, m.Du)(),
            o = r.useMemo(
                () => (0, w.bg)(t).filter((e) => a.xboxAndPlaystationAccounts.find((t) => t.type === e)),
                [a.xboxAndPlaystationAccounts, t],
            ),
            {
                steps: l,
                hasConnectedAccounts: c,
                isProgressingQuestForLaunchedGame: d,
                isQuestComplete: _,
            } = r.useMemo(() => {
                let e = o.length > 0,
                    r = e && (0, I.YL)(t),
                    s = t.config.messages.gameTitle,
                    l = t.userStatus?.completedAt != null;
                return {
                    steps: [
                        {
                            renderContent: () =>
                                (0, i.jsx)(ti, { ...a, quest: t, sourceQuestContent: E.uF.QUEST_BAR_V2 }),
                            isComplete: e || r || l,
                        },
                        {
                            renderContent: () =>
                                (0, i.jsx)(e9.L5, {
                                    children: (0, ec.ui)(t)
                                        ? et.intl.string(et.t["5tXqFe"])
                                        : et.intl.formatToPlainString(et.t["+8JB6Y"], { gameTitle: s }),
                                }),
                            isComplete: r || l,
                        },
                        {
                            renderContent: () =>
                                (0, i.jsx)(e9.L5, {
                                    children: et.intl.formatToPlainString(et.t.HhfrYS, { numMinutes: n.targetMinutes }),
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
            heading: et.intl.string(et.t.UPWlJu),
            steps: l,
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
        a = (0, u.bG)([X.Ay], () => X.Ay.useReducedMotion),
        { ref: l, height: d = null } = (0, U.Ay)(),
        _ = (0, c.A)(d) ?? null,
        [{ height: h }, f] = (0, J.z)(() => ({ from: { height: 0 }, config: n }));
    return (
        r.useLayoutEffect(() => {
            null !== d && f({ height: d, immediate: !s || a || null === _ });
        }, [d, f, s, a, _]),
        (0, i.jsx)(o.animated.div, {
            style: { height: null === _ ? "auto" : h, overflow: "hidden" },
            children: (0, i.jsx)("div", { style: { overflow: "hidden" }, ref: l, children: t }),
        })
    );
}
n(134528), n(947204);
var td = n(909714);
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
                    (0, i.jsx)(eF.D, { color: "text-default", variant: "heading-sm/medium", children: t }),
                ],
            }),
            (0, i.jsx)(v.E, { color: "text-muted", variant: "text-xs/normal", className: td.r2, children: n }),
        ],
    });
}
let th = function (e) {
    let { quest: t } = e,
        n = (0, m.aC)(t);
    if (0 === n.length) return null;
    let r = n.at(0);
    return r === et.intl.string(et.t.BV6xDm)
        ? (0, i.jsx)(t_, { header: et.intl.string(et.t.onh6ct), children: et.intl.string(et.t.arVHRA) })
        : r === et.intl.string(et.t.MFGxFM)
          ? (0, i.jsx)(t_, { header: et.intl.string(et.t.JPihZA), children: et.intl.string(et.t.MFGxFM) })
          : null;
};
var tf = n(31300),
    tp = n(687966),
    tE = n(825807);
let tm = function (e) {
    let { onDesktop: t, onConsole: n } = e;
    return (0, i.jsxs)(eV.e, {
        direction: "vertical",
        fullWidth: !0,
        className: tE.G,
        size: "sm",
        children: [
            (0, i.jsx)(eo.$, {
                onClick: t,
                text: et.intl.string(et.t["QXc01+"]),
                variant: "secondary",
                icon: tf.k,
                iconPosition: "end",
            }),
            (0, i.jsx)(eo.$, {
                onClick: n,
                text: et.intl.string(et.t["8lAfuB"]),
                variant: "secondary",
                icon: tp._,
                iconPosition: "end",
            }),
        ],
    });
};
var tg = n(495707);
let tA = r.forwardRef(function (e, t) {
    let { isHovered: n, asset: s, poster: a, className: o, autoPlay: l = !1 } = e,
        { isExpanded: c } = r.useContext($),
        d = (0, u.bG)([X.Ay], () => X.Ay.useReducedMotion),
        _ = r.useRef(null);
    return (
        r.useEffect(() => {
            null != _.current && (c && (!d || n) ? ((_.current.currentTime = 0), _.current.play()) : _.current.pause());
        }, [_, c, n, d]),
        (0, eJ.A)(_, K.rE.QUESTS_BAR),
        (0, i.jsx)(eH.A, {
            ref: (e) => {
                (_.current = e), null != t && ("function" == typeof t ? t(e) : (t.current = e));
            },
            autoPlay: l,
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
        { quest: n } = r.useContext($),
        s = (0, u.bG)([X.Ay], () => X.Ay.useReducedMotion),
        [o, l] = r.useState(!1),
        c = (0, ez.tW)(n, ez.fY.QUEST_BAR_HERO_VIDEO, void 0, !1),
        d = (0, ez.tW)(n, ez.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1),
        _ = (0, eW.Kr)((e) => e.getVideoProgressState)(n.id),
        h = n.userStatus?.completedAt != null && _ === eW.K2.COMPLETED,
        f = !h && (!s || o);
    return (0, i.jsxs)(N.D, {
        className: tg.QO,
        onClick: t,
        onMouseEnter: function () {
            s && !o && l(!0);
        },
        onMouseLeave: function () {
            s && o && l(!1);
        },
        children: [
            null != d &&
                (0, i.jsx)(T._M, {
                    id: "QuestBarContentExpanded_videoThumbnail",
                    children: (e) => (0, i.jsx)("img", { ref: e, alt: "", src: d.url, className: tg.Ue }),
                }),
            null != c
                ? (0, i.jsx)(T._M, {
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
                    ? (0, i.jsx)(eU.m, { color: O.A.colors.WHITE, className: tg.t })
                    : (0, i.jsx)(eG.u, { color: O.A.colors.WHITE, className: tg.t }),
            }),
        ],
    });
}
function tT(e) {
    let { quest: t } = e;
    return (0, i.jsx)(Q.A, {
        className: a()(tg.Qq, tg.wq),
        learnMoreStyle: "text",
        quest: t,
        questContent: E.uF.QUEST_BAR_V2,
        sourceQuestContent: E.uF.QUEST_BAR_V2,
    });
}
function tS(e) {
    let { isInteractable: t, containerRef: n, onAcceptQuest: s } = e,
        { quest: l, onGameSheetOpen: c, onGameSheetClose: d, taskDetails: _ } = r.useContext($),
        { expansionSpring: h } = r.useContext(V),
        f = r.useRef(null),
        g = (0, u.bG)([p.A], () => p.A.isEnrolling(l.id), [l]),
        A = r.useMemo(() => (0, ez.tW)(l, ez.fY.QUEST_BAR_HERO), [l]),
        I = (0, el.NA)({ quest: l }),
        S = r.useMemo(() => (0, ez.tW)(l, ez.fY.HERO_IMAGE), [l]),
        y = r.useMemo(() => (null == S ? {} : { backgroundImage: `url(${S.url})` }), [S]),
        N = eK.t.useConfig({ location: K.rE.QUESTS_BAR }),
        R = (0, el.mU)({
            quest: l,
            location: K.rE.QUESTS_BAR,
            taskDetails: _,
            sourceQuestContent: E.uF.QUEST_BAR_V2,
            popoutTargetElementRef: f,
            onGameSheetOpened: c,
            onGameSheetClosed: d,
            gameProfileSource: H.Ob.QuestBar,
        }),
        O = (0, eh.Pd)(l),
        b = (0, e$.z)(),
        D = (0, m.SD)(l, b),
        L = b === eq.MA.NITRO && D;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                ref: f,
                children: (0, i.jsxs)("div", {
                    className: tg.do,
                    ref: n,
                    children: [
                        (0, i.jsxs)("div", {
                            className: tg.zH,
                            children: [
                                (0, i.jsx)(tT, { quest: l }),
                                (0, i.jsx)(eF.D, {
                                    className: tg.DD,
                                    color: "text-strong",
                                    variant: "heading-md/medium",
                                    children: et.intl.format(et.t.EQa7os, { questName: l.config.messages.questName }),
                                }),
                                (0, i.jsxs)("div", {
                                    className: tg.zf,
                                    children: [
                                        (0, i.jsx)(v.E, { className: tg.h_, variant: "text-xs/normal", children: R }),
                                        D && (0, i.jsx)(eQ.e, { questId: l.id, orbMultiplierEligibility: b }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: tg.lO,
                            "data-testid": "quest-bar-enroll-cta",
                            children: (0, i.jsx)(eV.e, {
                                direction: "horizontal",
                                fullWidth: !0,
                                wrap: !1,
                                children:
                                    N.enabled && O === eh.UA.UNENROLLED && N.enabledQuestStates.has(eh.UA.UNENROLLED)
                                        ? (0, i.jsx)(e_.A, {
                                              quest: l,
                                              surface: eh.V3.QUEST_BAR_FOOTER,
                                              size: "sm",
                                              analyticsCtxQuestContent: E.uF.QUEST_BAR_V2,
                                              analyticsCtxSourceQuestContent: E.uF.QUEST_BAR_V2,
                                          })
                                        : (0, i.jsx)(eo.$, {
                                              onClick: t ? s : void 0,
                                              variant: "primary",
                                              loading: g,
                                              text: I,
                                              size: "sm",
                                              icon: (0, C.Oz)(l),
                                              fullWidth: !0,
                                          }),
                            }),
                        }),
                    ],
                }),
            }),
            (0, i.jsx)(eZ.A, { visible: L, glow: !0, className: tg.Ph }),
            null != S &&
                (0, i.jsx)(o.animated.div, {
                    className: tg.AK,
                    style: { opacity: (0, x.a)(h.to([0, 1], [1, 0])) },
                    children: (0, i.jsx)("div", { className: a()(tg.LC, tg.Ge), style: y }),
                }),
            (0, i.jsxs)(o.animated.div, {
                className: tg.IC,
                style: {
                    backdropFilter: (0, x.Q)(h.to([0, 1], [5, 0]).to((e) => `blur(${e}px)`)),
                    filter: (0, x.Q)(h.to([0, 1], [0.8, 1]).to((e) => `brightness(${e})`)),
                },
                children: [
                    A.isAnimated
                        ? (0, i.jsx)(T._M, {
                              id: "QuestBarContentExpanded_heroAnimated",
                              children: (e) => (0, i.jsx)(tA, { ref: e, autoPlay: !0, asset: A, className: tg.LO }),
                          })
                        : (0, i.jsx)(T._M, {
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
        { hasAlreadyLinked: n, onClickGameTitle: s } = r.useContext(z);
    return !0 !== n ? null : (0, i.jsx)(eX.A, { quest: t, hasAlreadyLinked: n, onClickGameTitle: s });
}
function tC(e) {
    let { activeScreen: t, selectPlatform: n } = e,
        { quest: s, taskDetails: a } = r.useContext($);
    return (0, ek.YW)(t)
        .with(E.X0.SELECT, () => (0, i.jsx)(tm, { onConsole: () => n(K.fO.CONSOLE), onDesktop: () => n(K.fO.DESKTOP) }))
        .with(E.X0.DESKTOP, () => ((0, I.I6)(s) ? (0, i.jsx)(ty, { quest: s }) : (0, i.jsx)(th, { quest: s })))
        .with(E.X0.CONSOLE, () => (0, i.jsx)(to, { quest: s, taskDetails: a }))
        .exhaustive();
}
function tN(e) {
    let { parentContainerRef: t } = e,
        { quest: n, taskDetails: s } = r.useContext($),
        [a, o, l] = (0, m.Qo)(n, s),
        u = s.percentComplete > 0,
        c = (0, m.Vn)(n),
        d = (0, m.RR)({ quest: n }),
        _ = o.length > 1 && !u && !c;
    return (0, i.jsxs)(tc, {
        children: [
            (0, i.jsx)(tC, { activeScreen: a, selectPlatform: l }),
            a !== E.X0.SELECT &&
                (0, i.jsxs)("div", {
                    className: tg.oG,
                    children: [
                        _ &&
                            (0, i.jsx)(eB.K, {
                                size: "sm",
                                "aria-label": et.intl.string(et.t["13/7kX"]),
                                onClick: () => l(null),
                                icon: ej.n,
                                variant: "secondary",
                            }),
                        (0, i.jsx)(eC, {
                            awaitingConsoleConnections: d,
                            parentContainerRef: t,
                            hasMadeProgress: u,
                            isProgressing: c,
                            sourceQuestContent: E.uF.QUEST_BAR_V2,
                        }),
                    ],
                }),
        ],
    });
}
function tv(e) {
    let { parentContainerRef: t } = e,
        { quest: n, taskDetails: s } = r.useContext($),
        a = s.percentComplete > 0,
        o = (0, m.Vn)(n),
        l = r.useCallback(() => {
            (0, C.d5)({
                quest: n,
                questContent: E.uF.QUEST_BAR_V2,
                sourceQuestContent: E.uF.QUEST_BAR_V2,
                sourceQuestContentCTA: D.Cy.QUEST_BAR_VIDEO_QUEST_PREVIEW,
            });
        }, [n]);
    return (0, i.jsxs)(tc, {
        children: [
            (0, i.jsx)(tI, { onClick: l }),
            (0, i.jsx)(eC, {
                parentContainerRef: t,
                awaitingConsoleConnections: !1,
                hasMadeProgress: a,
                isProgressing: o,
                sourceQuestContent: E.uF.QUEST_BAR_V2,
            }),
        ],
    });
}
function tR(e) {
    let { parentContainerRef: t } = e,
        { quest: n, taskDetails: s } = r.useContext($),
        a = s.percentComplete > 0,
        o = (0, m.Vn)(n);
    return (0, i.jsx)(tc, {
        children: (0, i.jsx)(eC, {
            parentContainerRef: t,
            awaitingConsoleConnections: !1,
            hasMadeProgress: a,
            isProgressing: o,
            sourceQuestContent: E.uF.QUEST_BAR_V2,
        }),
    });
}
function tO(e) {
    let { parentContainerRef: t } = e,
        { quest: n } = r.useContext($);
    return (0, I.t)({ quest: n }) || (0, I.g5)(n) || (0, I.fE)({ quest: n }) || (0, I.I6)(n)
        ? (0, i.jsx)(tN, { parentContainerRef: t })
        : (0, I.vv)(n)
          ? (0, i.jsx)(tv, { parentContainerRef: t })
          : (0, i.jsx)(tR, { parentContainerRef: t });
}
function tb(e) {
    let { overlayRef: t, containerRef: n } = e,
        { quest: s, taskDetails: l } = r.useContext($),
        { expansionSpring: u } = r.useContext(V),
        c = r.useRef(null),
        d = r.useRef(null),
        _ = (0, m.I3)(s),
        h = null != _ ? _.percentComplete : l.percentComplete;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(o.animated.div, {
                className: a()(tg.tv, tg.ag),
                style: {
                    backgroundImage: `linear-gradient(90deg, ${G}, ${F})`,
                    opacity: (0, x.a)(u.to({ range: [0, 1], output: [1, 0] })),
                },
            }),
            (0, i.jsxs)("div", {
                className: tg.Fe,
                ref: (e) => {
                    "function" == typeof n ? n(e) : null != n && (n.current = e), null != e && (d.current = e);
                },
                children: [
                    (0, i.jsx)(eM, {}),
                    (0, i.jsx)("div", { className: tg.yF }),
                    (0, i.jsx)(eO, { overlayRef: t, progressBarRef: c, isHovered: !1 }),
                    (0, i.jsx)(eL, {
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
                style: { backgroundImage: `linear-gradient(90deg, ${G}, ${F})` },
            }),
        ],
    });
}
async function tD(e, t, n, i) {
    (0, I.vv)(e)
        ? await (0, C.e0)(e, { questContent: t, questContentCTA: n, sourceQuestContent: i, sourceQuestContentCTA: n })
        : (0, ec.vA)(e)
          ? await (0, eY.Oy)(e.id, { questContent: t, questContentCTA: n, sourceQuestContent: i })
          : (0, eY.Oy)(e.id, { questContent: t, questContentCTA: n, sourceQuestContent: i });
}
let tL = r.forwardRef(function (e, t) {
    let { children: n, className: s, overlayRef: l } = e,
        { collapsedHeight: u, isExpanded: c, isExpansionAnimationComplete: d, quest: _ } = r.useContext($),
        { expansionSpring: h } = r.useContext(V),
        { launchInGameActivity: f } = (0, m.zW)(_),
        p = (0, ec.vA)(_),
        g = r.useCallback(async () => {
            let e = p ? D.Cy.START_QUEST : D.Cy.ACCEPT_QUEST;
            await tD(_, E.uF.QUEST_BAR_V2, e, E.uF.QUEST_BAR_V2), p && f();
        }, [_, f, p]),
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
        } = r.useContext(V),
        { isExpanded: a } = r.useContext($);
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
    tV = n(737595);
function tB(e) {
    let { isExpanded: t, questId: n } = e;
    return (
        (0, m.H6)({
            mode: t ? K.fP.EXPANDED : K.fP.COLLAPSED,
            questContent: E.uF.QUEST_BAR_V2,
            questId: n,
            sourceQuestContent: E.uF.QUEST_BAR_V2,
        }),
        null
    );
}
function tj() {
    return (
        r.useEffect(() => {
            h.trigger();
        }, []),
        null
    );
}
function tH(e) {
    let { quest: t } = e,
        n = (0, A.L)({ quest: t, location: K.rE.QUESTS_BAR }),
        s = (0, g.s)(),
        l = (0, u.bG)([p.A], () => null != p.A.questEnrollmentBlockedUntil),
        { isQuestBarVisible: d, reason: _ } = (0, y.TQ)({ quest: t }),
        h = (0, u.bG)([f.A], () => f.A.hasLayers()),
        N = r.useRef(null),
        v = r.useMemo(() => (0, I.vv)(t), [t]),
        R = t.id,
        O = t.userStatus?.enrolledAt != null,
        b = (0, c.A)(O),
        L = t.userStatus?.completedAt != null,
        { hasError: w, isLoading: M } = (0, T.zT)(),
        P = r.useContext(tw.Z) || (s && d && !M && !l),
        {
            isExpanded: x,
            setIsExpanded: k,
            expandQuestBar: U,
            isExpansionAnimationComplete: G,
            isVisibilityAnimationAtRest: F,
            expansionSpring: V,
            visibilitySpring: B,
            springConfig: H,
        } = (function (e) {
            let { isQuestAccepted: t, isQuestCompleted: n, isQuestBarVisible: i } = e,
                s = (0, u.bG)([X.Ay], () => X.Ay.useReducedMotion),
                [a, o] = r.useState(!1),
                [l, c] = r.useState(!0),
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
                m = t ? K.ZV : K.Ko,
                [{ expansionSpring: g }, A] = (0, J.z)(() => ({
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
            let { visibilitySpring: I } = (0, J.z)({
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
                    isExpansionAnimationComplete: l,
                    isVisibilityAnimationAtRest: d,
                    expansionSpring: g,
                    visibilitySpring: I,
                    springConfig: m,
                }
            );
        })({ isQuestAccepted: O, isQuestCompleted: L, isQuestBarVisible: P }),
        {
            handleCtxMenuOpened: Y,
            handleCtxMenuClosed: W,
            handleCtxMenuSelection: $,
            handleGameSheetOpened: z,
            handleGameSheetClosed: q,
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
                [f, p] = r.useState(!1),
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
                    p(!0);
                }, []),
                T = r.useCallback(() => {
                    p(!1), i(!1);
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
                            content_id: E.uF.QUEST_BAR,
                            content_name: (0, D.jO)(E.uF.QUEST_BAR),
                            impression_id: u.current?.getId(),
                        },
                        shouldExtendSession: !0,
                        sourceQuestContent: E.uF.QUEST_BAR_V2,
                    }),
                        (d.current = !0),
                        S({ withDelay: !0 });
                }, [S, u, t.id]),
                v = r.useCallback(() => {
                    (0, tx.av)({
                        questId: t.id,
                        event: tk.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: E.uF.QUEST_BAR,
                            content_name: (0, D.jO)(E.uF.QUEST_BAR),
                            impression_id: u.current?.getId(),
                        },
                        sourceQuestContent: E.uF.QUEST_BAR_V2,
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
            prevIsQuestAccepted: b,
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
                        content_id: E.uF.QUEST_BAR,
                        content_name: (0, D.jO)(E.uF.QUEST_BAR),
                        reason: "asset_loading_error",
                        impression_id: d.current?.getId(),
                    },
                    sourceQuestContent: E.uF.QUEST_BAR_V2,
                }),
                tG.A.increment({
                    name: tU.K.QUEST_CONTENT_RENDERING_FAILURE,
                    tags: [
                        `quest_id:${t.id}`,
                        `quest_content:${(0, D.jO)(E.uF.QUEST_BAR)}`,
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
                            content_id: E.uF.QUEST_BAR,
                            content_name: (0, D.jO)(E.uF.QUEST_BAR),
                            reason: "not_eligible_for_quest",
                            impression_id: d.current?.getId(),
                        },
                        sourceQuestContent: E.uF.QUEST_BAR_V2,
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
                            content_id: E.uF.QUEST_BAR,
                            content_name: (0, D.jO)(E.uF.QUEST_BAR),
                            reason: l,
                            impression_id: d.current?.getId(),
                        },
                        sourceQuestContent: E.uF.QUEST_BAR_V2,
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
        isQuestEnrollmentBlocked: l,
        impressionRef: N,
    });
    let ei = r.useRef(null),
        er = r.useRef(null),
        es = r.useRef(null),
        eo = (0, m.fc)(t),
        el = (0, m.UH)(t);
    if (
        (r.useEffect(() => {
            v && (0, C.l9)();
        }, [v]),
        !s || (!P && F && !M) || w)
    )
        return w ? n.log("Not rendered due to asset error") : s || n.log("Not rendered due to ineligibility"), null;
    let eu = 70 + 78 * !!L;
    return (0, i.jsx)(S.R, {
        questOrQuests: t,
        questContent: E.uF.QUEST_BAR_V2,
        overrideVisibility: !h && P,
        onImpression: el,
        sourceQuestContent: E.uF.QUEST_BAR_V2,
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
                        onFocus: Q,
                        onBlur: ee,
                        className: a()(tV.iE, { [tV.Xc]: !P, [tV.uv]: P && F }),
                        style: { height: B.to({ range: [0, 1], output: [0, eu] }) },
                        children: (0, i.jsx)(o.animated.div, {
                            className: a()(tV.FG, { [tV.E$]: x, [tV.KA]: O }),
                            children: (0, i.jsx)(tu, {
                                springConfig: H,
                                isExpanded: x,
                                children: (0, i.jsx)(j, {
                                    expandedContentRef: ei,
                                    collapsedContentRef: er,
                                    expansionSpring: V,
                                    children: (0, i.jsxs)(Z, {
                                        quest: t,
                                        taskDetails: eo,
                                        isExpanded: x,
                                        isExpansionAnimationComplete: G,
                                        onCtxMenuClose: W,
                                        onCtxMenuOpen: Y,
                                        onCtxMenuSelect: $,
                                        onGameSheetOpen: z,
                                        onGameSheetClose: q,
                                        collapsedHeight: eu,
                                        children: [
                                            (0, i.jsx)(
                                                ex,
                                                { ref: er, className: tV.Qs, overlayRef: es },
                                                L ? "collapsed-with-rewards" : "collapsed-without-rewards",
                                            ),
                                            (0, i.jsx)(tL, {
                                                className: tV.Qs,
                                                overlayRef: es,
                                                ref: ei,
                                                children: (0, i.jsxs)(i.Fragment, {
                                                    children: [(0, i.jsx)(tM, {}), !O && (0, i.jsx)(ea, {})],
                                                }),
                                            }),
                                            (0, i.jsx)("div", { ref: es, className: tV.Lw }),
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
    let e = (0, y.dN)();
    return null == e
        ? null
        : (0, i.jsx)(
              T.y5,
              {
                  source: K.rE.QUESTS_BAR,
                  adCreativeId: e.id,
                  adCreativeType: l.p.QUEST,
                  children: (0, i.jsx)(tH, { quest: e }),
              },
              e.id,
          );
};
