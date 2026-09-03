n.r(t), n.d(t, { QuestBar: () => tK, default: () => tY });
var s = n(477900),
    r = n(582128),
    l = n(503698),
    i = n.n(l),
    a = n(221877),
    o = n(323889),
    u = n(17928),
    c = n(475743),
    d = n(840251),
    x = n(688151);
let C = new d.E([], x.$G.QUEST_BAR_RENDERED, { location: "quest bar rendered" });
var m = n(186111),
    p = n(859703),
    f = n(738822),
    E = n(309593),
    _ = n(971276),
    h = n(851936),
    g = n(792620),
    A = n(557637),
    S = n(73473),
    j = n(130490),
    R = n(617986),
    v = n(939249),
    T = n(834730),
    y = n(290136),
    Q = n(661531),
    N = n(365199),
    U = n(590202),
    F = n(971649),
    B = n(901406),
    I = n(270045),
    b = n(57718),
    O = n(398025);
n(321073);
var V = n(333007),
    L = n(765671);
let q = "#00000000",
    k = "#CDD8FF1A",
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
                mountPoints: C,
            } = r.useContext(w),
            m = r.useRef(null),
            p = r.useRef(null),
            f = r.useRef(void 0);
        r.useEffect(() => {
            u();
        }, [u]),
            r.useLayoutEffect(() => {
                let e = m.current;
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
        (0, L.i4)(m, E);
        let _ = C.get(l)?.current,
            h = null;
        return (
            null == _
                ? (h = null)
                : o && null != x
                  ? (h = (0, s.jsxs)(s.Fragment, {
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
                                    _,
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
                                    _,
                                ),
                        ],
                    }))
                  : "collapsed" === i && (h = (0, V.createPortal)(n(p), _)),
            (0, s.jsxs)("div", {
                style: { opacity: +((null == h && "collapsed" === i) || null == _) },
                ref: t,
                children: [n(m), h],
            })
        );
    }),
    P = (e) => {
        let { children: t, expandedContentRef: n, collapsedContentRef: l, expansionSpring: i } = e,
            [a, o] = r.useState({}),
            [u, c] = r.useState([]),
            [d, x] = r.useState(() => new Map()),
            C = r.useCallback((e, t, n) => {
                o((s) => {
                    let r = s[t] ?? { expanded: null, collapsed: null };
                    return { ...s, [t]: { ...r, [n]: e } };
                }),
                    x((e) => {
                        let n = new Map(e);
                        return n.set(t, r.createRef()), n;
                    });
            }, []),
            m = r.useCallback((e, t) => {
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
                        C = i.left - o.left + 12,
                        m = u.left - c.left,
                        p = -i.right + o.right + 12,
                        f = -u.right + c.right;
                    e.push({
                        id: t,
                        collapsedLeft: m,
                        expandedLeft: C,
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
                registerComponent: C,
                unregisterComponent: m,
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
    H = n(284846),
    W = n(190107);
let z = r.createContext({
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
function K(e) {
    let { children: t, quest: n } = e,
        { hasAlreadyLinked: l } = (0, H.U)(n),
        i = (0, G.A)({
            applicationId: (0, g.xc)(n),
            location: W.rE.QUEST_INSTRUCTIONS,
            source: D.GameProfileSources.QuestBar,
        }),
        a = r.useMemo(() => ({ hasAlreadyLinked: l, onClickGameTitle: i }), [l, i]);
    return (0, s.jsx)($.Provider, { value: a, children: t });
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
            taskDetails: C,
        } = e,
        m = r.useMemo(
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
                taskDetails: C,
            }),
            [n, l, i, a, o, u, c, d, x, C],
        );
    return (0, s.jsx)(z.Provider, { value: m, children: (0, g.I6)(x) ? (0, s.jsx)(K, { quest: x, children: t }) : t });
}
var Y = n(775602),
    Z = n(646764),
    J = n(717421);
function ee() {
    let e = document.body.style.getPropertyValue("--custom-guild-sidebar-width").slice(0, -2);
    return parseInt("" !== e ? e : "375");
}
var et = n(375708),
    en = n(393824);
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
        { quest: c } = r.useContext(z),
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
var er = n(886030);
let el = (0, a.animated)(b.Ay),
    ei = function () {
        let e = (0, F.wW)(),
            { expansionSpring: t } = r.useContext(w),
            {
                onCtxMenuOpen: n,
                onCtxMenuClose: l,
                onCtxMenuSelect: o,
                isExpanded: u,
                isExpansionAnimationComplete: c,
                quest: d,
            } = r.useContext(z),
            x = r.useCallback(() => {
                (0, R.Zc)(d, {
                    content: f.uF.QUEST_BAR_V2,
                    ctaContent: U.Cy.OPEN_DISCLOSURE,
                    sourceQuestContent: f.uF.QUEST_BAR_V2,
                });
            }, [d]),
            C = r.useCallback(() => {
                (0, B.pu)(d, {
                    content: f.uF.QUEST_BAR_V2,
                    ctaContent: U.Cy.OPEN_GAME_LINK,
                    impressionId: e(),
                    sourceQuestContent: f.uF.QUEST_BAR_V2,
                });
            }, [e, d]),
            m = u && c,
            p = (0, s.jsx)(v.D, {
                onClick: C,
                className: i()(er.vk, { [er.wm]: m }),
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
            className: i()(er.iE, er.Ht, { [er.tT]: m }),
            style: { transform: (0, a.to)([t.to({ range: [0, 1], output: [6, 0] })], (e) => `translateY(${e}px)`) },
            children: [
                (0, s.jsx)(a.animated.div, {
                    className: er.Tu,
                    style: { opacity: (0, O.a)(t.to({ range: [0, 1], output: [0, 1] })) },
                }),
                (0, s.jsx)(es, { isFullyExpanded: m, partnerBranding: p }),
                (0, s.jsxs)(a.animated.div, {
                    className: er.P0,
                    style: { opacity: (0, O.a)(t.to({ range: [0, 1], output: [0, 1] })) },
                    children: [
                        (0, s.jsxs)(v.D, {
                            className: er.y8,
                            onClick: x,
                            children: [
                                (0, s.jsx)(T.E, {
                                    color: "text-overlay-light",
                                    variant: "text-xs/normal",
                                    children: et.intl.string(et.t.o6FLcF),
                                }),
                                (0, s.jsx)(y.CircleQuestionIcon, { color: Q.A.colors.WHITE, className: er.P$ }),
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
                                    children: (0, s.jsx)(N.MoreHorizontalIcon, {
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
    eu = n(561844),
    ec = n(651892),
    ed = n(814793),
    ex = n(753386),
    eC = n(608935),
    em = n(657113),
    ep = n(79545),
    ef = n(862611),
    eE = n(630037),
    e_ = n(191559);
function eh(e) {
    let { quest: t, sourceQuestContent: n, taskDetails: r } = e,
        l = (0, E.Hv)(),
        i = (0, s.jsx)(ea.$, {
            variant: "primary",
            fullWidth: !0,
            onClick: function () {
                if (l) {
                    (0, eu.Y5)({
                        questId: t.id,
                        questContent: f.uF.QUEST_BAR_V2,
                        questContentCTA: U.Cy.QUEST_ACCESS_SUSPENDED,
                        sourceQuestContent: n,
                    }),
                        (0, R.FS)();
                    return;
                }
                let e = t.userStatus?.enrolledAt == null ? U.Cy.ACCEPT_QUEST : U.Cy.WATCH_VIDEO;
                (0, R.d5)({
                    quest: t,
                    questContent: f.uF.QUEST_BAR_V2,
                    sourceQuestContent: n,
                    sourceQuestContentCTA: e,
                });
            },
            size: "sm",
            text: (0, ex.WM)(r),
            "aria-disabled": l || void 0,
        });
    return l ? (0, s.jsx)(eC.A, { children: i }) : i;
}
function eg(e) {
    let { quest: t, sourceQuestContent: n } = e,
        r = (0, F.wW)(),
        l = (0, ec.wr)(t);
    return (0, s.jsx)(ea.$, {
        size: "sm",
        fullWidth: !0,
        onClick: () =>
            (0, B.pu)(t, {
                content: f.uF.QUEST_BAR_V2,
                ctaContent: U.Cy.OPEN_GAME_LINK,
                impressionId: r(),
                sourceQuestContent: n,
            }),
        text: l,
    });
}
function eA(e) {
    let { quest: t, sourceQuestContent: n } = e,
        r = (0, F.wW)();
    return (0, s.jsx)(ea.$, {
        fullWidth: !0,
        onClick: () =>
            (0, B.se)(
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
function eS(e) {
    let { quest: t } = e,
        n = (0, eo.NA)({ quest: t }),
        { launchInGameActivity: r } = (0, E.zW)(t);
    return (0, ed.vA)(t)
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
    return (0, s.jsx)(ef.A, {
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
function eR(e) {
    let { quest: t, ctaLabel: n, onClick: r, questContent: l = f.uF.QUEST_BAR_V2, sourceQuestContent: i } = e,
        a = (0, eE.D)({ quest: t, questContent: l, sourceQuestContent: i, onBeforeClaim: r });
    return (0, s.jsx)(ea.$, {
        fullWidth: !0,
        onClick: a,
        text: n ?? et.intl.string(et.t.cfY4PE),
        "data-testid": "quest-bar-claim-reward-button",
        variant: "primary",
        size: "sm",
    });
}
function ev(e) {
    let {
            sourceQuestContent: t,
            awaitingConsoleConnections: n,
            hasMadeProgress: l,
            isProgressing: i,
            popoutTargetElementRef: a,
        } = e,
        { quest: o, onGameSheetOpen: u, onGameSheetClose: c, taskDetails: d } = r.useContext(z),
        [x] = (0, E.Qo)(o, d),
        C = o.userStatus?.completedAt != null,
        m = (0, g.vv)(o),
        p = (0, g.I6)(o),
        _ = x !== f.X0.SELECT && !l && !i,
        h = null;
    return (
        C
            ? (h = (0, s.jsx)(eR, { quest: o, sourceQuestContent: t }))
            : p
              ? (h = (0, s.jsx)(em.A, {
                    quest: o,
                    surface: ep.V3.QUEST_BAR_FOOTER,
                    size: "sm",
                    analyticsCtxQuestContent: f.uF.QUEST_BAR_V2,
                    analyticsCtxSourceQuestContent: t,
                }))
              : m
                ? (h = (0, s.jsx)(eh, { quest: o, sourceQuestContent: t, taskDetails: d }))
                : (0, ed.vA)(o)
                  ? (h = (0, s.jsx)(eS, { quest: o }))
                  : x === f.X0.CONSOLE && n
                    ? (h = (0, s.jsx)(eA, { quest: o, sourceQuestContent: t }))
                    : _ && (0, ed.ui)(o)
                      ? (h = (0, s.jsx)(ej, {
                            quest: o,
                            sourceQuestContent: t,
                            taskDetails: d,
                            popoutTargetElementRef: a,
                            onGameSheetOpened: u,
                            onGameSheetClosed: c,
                        }))
                      : _ && (h = (0, s.jsx)(eg, { quest: o, sourceQuestContent: t })),
        null == h ? null : (0, s.jsx)("div", { className: e_.lO, children: h })
    );
}
function eT(e) {
    return (0, s.jsx)(ev, { ...e, popoutTargetElementRef: e.parentContainerRef });
}
var ey = n(776310),
    eQ = n(536283),
    eN = n(489811);
let eU = (e) => {
    let { overlayRef: t, progressBarRef: n, isHovered: l } = e,
        { quest: o, isExpanded: d } = r.useContext(z),
        { expansionSpring: x } = r.useContext(w),
        { completionSpring: C, startCompletionAnimation: p } = (function () {
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
        _ = (0, u.bG)([Y.Ay], () => Y.Ay.useReducedMotion),
        h = r.useRef(null),
        g = (0, u.bG)([m.A], () => m.A.hasLayers()),
        A = (0, c.Ay)(g),
        [S, j] = r.useState(null),
        [R, v] = r.useState(null),
        T = r.useRef(new ey.OH({ gravity: 0, wind: 0 })),
        y = (0, ey.f9)(S, R),
        Q = r.useMemo(() => ["#51BC9D"], []),
        N = r.useCallback(() => {
            if (_) return;
            let e = n.current,
                t = h.current;
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
                        ...eQ.Mw,
                        position: { type: "static-random", minValue: { x: s, y: r }, maxValue: { x: s + l, y: r + i } },
                        velocity: { type: "static-random", minValue: { x: -20, y: -20 }, maxValue: { x: 20, y: 20 } },
                        opacity: { type: "linear", value: 2, addValue: -0.1 },
                        dragCoefficient: { type: "static", value: 0.166 },
                        size: { type: "static-random", minValue: 2, maxValue: 3 },
                    }),
                    100,
                );
            }
        }, [n, h, y, _]),
        U = (0, c.Ay)(d);
    return (r.useEffect(() => {
        f && d && !U && (p(), N());
    }, [d, f, p, N, U]),
    r.useEffect(() => {
        f &&
            !g &&
            A &&
            setTimeout(() => {
                p(), N();
            }, 200);
    }, [f, A, g, p, N]),
    r.useEffect(() => {
        y.isReady && (!E.current && f && (p(), N()), (E.current = f));
    }, [f, E, N, p, y]),
    r.useEffect(() => {
        l && f && (p(), N());
    }, [l, f, p, N]),
    _)
        ? null
        : (0, s.jsxs)("div", {
              className: eN.iE,
              "aria-hidden": "true",
              ref: h,
              children: [
                  (0, s.jsx)(a.animated.div, { className: eN.Tp, style: { opacity: (0, O.a)(C) } }),
                  (0, s.jsx)(a.animated.div, { className: i()(eN.sJ, eN.ix), style: { opacity: (0, O.a)(C) } }),
                  (0, s.jsxs)(a.animated.div, {
                      className: eN.KG,
                      style: { transform: x.to({ range: [0, 1], output: [-35, 0] }).to((e) => `translateY(${e}px)`) },
                      children: [
                          (0, s.jsx)(ey.Fk, { ref: j, className: eN.t_, environment: T.current }),
                          (0, s.jsx)(ey.K_, {
                              ref: v,
                              sprites: ["/assets/b909790cf1d80597.svg"],
                              colors: Q,
                              spriteWidth: eQ.wn,
                              spriteHeight: eQ.wn,
                          }),
                          null != t.current &&
                              (0, V.createPortal)(
                                  (0, s.jsx)(a.animated.div, {
                                      className: i()(eN.sJ, eN.d7),
                                      style: { opacity: (0, O.a)(C) },
                                  }),
                                  t.current,
                              ),
                      ],
                  }),
              ],
          });
};
var eF = n(453384),
    eB = n(649480);
let eI = function (e) {
    let { isExpanded: t, contentLocation: n, progressBarRef: l, percentComplete: i, popoutTargetElementRef: a } = e,
        { quest: o, onGameSheetOpen: u, onGameSheetClose: c, taskDetails: d } = r.useContext(z),
        { hasAlreadyLinked: x, onClickGameTitle: C } = r.useContext($),
        [m] = (0, E.Qo)(o, d),
        p = (0, eo.VX)(o, x),
        _ = (0, eo.tH)({
            quest: o,
            isExpanded: t,
            activeScreen: m,
            sourceQuestContent: f.uF.QUEST_BAR_V2,
            popoutTargetElementRef: a,
            onGameSheetOpened: u,
            onGameSheetClosed: c,
            hasAlreadyLinked: x,
            onClickGameTitle: C,
        });
    return (0, s.jsxs)("div", {
        className: eB.Z0,
        children: [
            (0, s.jsx)(M, {
                inState: n,
                id: "progress-bar",
                ref: l,
                children: (e) =>
                    (0, s.jsx)(eF.A, {
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
                className: eB.NZ,
                children: [
                    (0, s.jsx)(M, {
                        inState: n,
                        id: "progress-title",
                        children: (e) =>
                            (0, s.jsx)(T.E, {
                                ref: e,
                                className: eB.FZ,
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
                                className: eB.FZ,
                                color: "text-subtle",
                                variant: "text-xs/normal",
                                children: _,
                            }),
                    }),
                ],
            }),
        ],
    });
};
var eb = n(316878);
function eO() {
    let { quest: e, onCtxMenuOpen: t, onCtxMenuClose: n, onCtxMenuSelect: l } = r.useContext(z),
        a = (0, E.S5)(e.config.expiresAt);
    return (0, s.jsxs)("div", {
        className: eb.pS,
        children: [
            (0, s.jsx)(T.E, {
                variant: "text-xxs/medium",
                className: i()(eb.Uu, eb.TK),
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
                        className: eb.rb,
                        "aria-label": et.intl.string(et.t.DEoVWZ),
                        children: (0, s.jsx)(N.MoreHorizontalIcon, {
                            size: "md",
                            color: "currentColor",
                            className: i()(eb.Bx, eb.U9),
                        }),
                    }),
            }),
        ],
    });
}
var eV = n(331940);
let eL = r.forwardRef(function (e, t) {
    let { className: n, overlayRef: l } = e,
        { expansionSpring: o } = r.useContext(w),
        { quest: u, taskDetails: c, isExpanded: d } = r.useContext(z),
        x = u.userStatus?.completedAt != null,
        C = (0, E.I3)(u),
        m = r.useRef(null),
        p = u.userStatus?.enrolledAt != null,
        _ = null != C ? C.percentComplete : c.percentComplete,
        h = r.useRef(null),
        [g, A] = r.useState(!1);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            x && (0, s.jsx)(eU, { overlayRef: l, progressBarRef: m, isHovered: g }),
            (0, s.jsx)(a.animated.div, {
                ref: t,
                "aria-hidden": d,
                className: i()(n, eV.hR, { [eV.Ag]: d, [eV.s]: p }),
                style: {
                    opacity: (0, O.a)(o.to({ range: [0, 1], output: [1, 0] })),
                    backgroundImage: x ? `linear-gradient(90deg, ${q}, ${k})` : void 0,
                },
                onMouseEnter: () => A(!0),
                onMouseLeave: () => A(!1),
                children: (0, s.jsxs)("div", {
                    className: eV.o8,
                    children: [
                        x &&
                            (0, s.jsxs)(s.Fragment, {
                                children: [(0, s.jsx)(eO, {}), (0, s.jsx)("div", { className: eV.yF })],
                            }),
                        p
                            ? (0, s.jsx)(eI, {
                                  contentLocation: "collapsed",
                                  progressBarRef: m,
                                  isExpanded: !1,
                                  percentComplete: _,
                              })
                            : null,
                        x &&
                            (0, s.jsx)("div", {
                                ref: h,
                                children: (0, s.jsx)(eT, {
                                    parentContainerRef: h,
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
var eq = n(889137),
    ek = n(417270),
    ew = n(782134),
    eM = n(297264),
    eP = n(825484),
    eD = n(866665),
    eG = n(408278),
    eH = n(743368),
    eW = n(921853),
    ez = n(607470),
    e$ = n(396813),
    eK = n(405670),
    eX = n(192444),
    eY = n(112142),
    eZ = n(646917),
    eJ = n(291749),
    e0 = n(576761),
    e1 = n(895253),
    e2 = n(976019),
    e3 = n(442734),
    e6 = n(139384),
    e7 = n(114046),
    e9 = n(695366),
    e8 = n(274670),
    e5 = n(144779),
    e4 = n(30370),
    te = n(178540),
    tt = n(104886),
    tn = n(18437),
    ts = n(780964),
    tr = n(766075),
    tl = n(52093),
    ti = n(575630);
function ta(e) {
    let { text: t, quest: n, sourceQuestContent: r } = e,
        l = (0, tn.Ut)(),
        i = (0, F.go)();
    return (0, s.jsx)(v.D, {
        className: ti.Z0,
        onClick: () => {
            (0, tt.E5)(tt.kI.STEP_2_CLICKED_INTERNAL, "console_connection_step")
                ? (0, e8.r)({
                      type: e5.F.CLICK_INTERNAL,
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
                (0, tr.openUserSettings)(ts.X.CONNECTIONS_CATEGORY);
        },
        children: (0, s.jsx)(T.E, { "aria-label": t, color: "none", variant: "text-xxs/normal", children: t }),
    });
}
function to(e) {
    let { xboxAndPlaystationAccounts: t, quest: n, sourceQuestContent: r } = e;
    return t.length > 0
        ? (0, s.jsx)(ta, { text: et.intl.string(et.t["qiS+xj"]), quest: n, sourceQuestContent: r })
        : null;
}
function tu(e) {
    return (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(tl.L5, { children: et.intl.string(et.t.EJFSvD) }), (0, s.jsx)(to, { ...e })],
    });
}
var tc = n(607886);
function td(e) {
    return (0, s.jsx)(T.E, { className: tc.eW, color: "text-muted", variant: "text-xxs/normal", children: e.children });
}
function tx(e) {
    let { quest: t, useReducedMotion: n } = e,
        l = (0, j.H1)(t.id, f.uF.QUEST_BAR_V2, f.uF.QUEST_BAR_V2),
        a = (0, j.Xf)({ useReducedMotion: n }),
        u = (0, tn.Ut)(),
        c = (0, F.go)(),
        d = (0, te.O)((e) => e.getErrorHints(t.id)),
        { startingConsoleQuest: x, startConsoleQuest: C } = (0, E.Wj)({
            questId: t.id,
            beforeRequest: () => {
                (0, tt.E5)(tt.kI.STEP_2_CLICKED_INTERNAL, "quest_bar_console_task_checklist")
                    ? (0, e8.r)({
                          type: e5.F.CLICK_INTERNAL,
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
        { header: m, renderBody: p } = r.useMemo(() => {
            let e = d.length > 0,
                n = t.config.messages.gameTitle;
            return {
                header: e
                    ? (0, ed.ui)(t)
                        ? et.intl.string(et.t.N33EuL)
                        : et.intl.formatToPlainString(et.t["28Ql27"], { gameTitle: n })
                    : (0, ed.ui)(t)
                      ? et.intl.string(et.t.YstzGO)
                      : et.intl.formatToPlainString(et.t.gX0Qcx, { gameTitle: n }),
                renderBody: e
                    ? function () {
                          return (0, s.jsx)(s.Fragment, {
                              children: d.map((e, n) => {
                                  if (e.type === e7._.EXPIRED_CREDENTIAL) {
                                      let r = e4.A.getAccount(e.connected_account_id, e.connected_account_type),
                                          l = (0, B.IG)(e),
                                          i = (0, B.$J)(e);
                                      return (0, s.jsx)(
                                          td,
                                          {
                                              children: et.intl.format(l, {
                                                  account_name: r?.name,
                                                  onClick: () => {
                                                      (0, B.v0)(
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
                                  return (0, s.jsx)(td, { children: e.message }, n);
                              }),
                          });
                      }
                    : () =>
                          (0, s.jsx)(T.E, {
                              className: tc.eW,
                              color: "text-muted",
                              variant: "text-xxs/normal",
                              children: (0, ed.ui)(t)
                                  ? et.intl.string(et.t.bUyEZZ)
                                  : et.intl.format(et.t.GXqvC1, { gameTitle: n }),
                          }),
            };
        }, [d, t, c]);
    return (0, s.jsxs)("div", {
        className: tc.XK,
        children: [
            (0, s.jsxs)("div", {
                className: tc.oK,
                children: [
                    (0, s.jsx)(e9.E, {
                        size: "custom",
                        color: "currentColor",
                        className: 0 === d.length ? tc.pH : tc.JA,
                        width: 16,
                        height: 16,
                    }),
                    (0, s.jsx)(T.E, { variant: "text-xs/medium", children: m }),
                    (0, s.jsx)(v.D, { className: i()(tc.w, { [tc.r9]: x }), onClick: () => C(), children: a.render() }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: i()({ [tc.Iu]: x }),
                children: [p(), 0 === d.length ? null : (0, s.jsx)(td, { children: l })],
            }),
        ],
    });
}
let tC = function (e) {
        let { quest: t, taskDetails: n } = e,
            l = (0, u.bG)([Y.Ay], () => Y.Ay.useReducedMotion),
            i = (0, E.Du)(),
            a = r.useMemo(
                () => (0, B.bg)(t).filter((e) => null != i.xboxAndPlaystationAccounts.find((t) => t.type === e)),
                [i.xboxAndPlaystationAccounts, t],
            ),
            {
                steps: o,
                hasConnectedAccounts: c,
                isProgressingQuestForLaunchedGame: d,
                isQuestComplete: x,
            } = r.useMemo(() => {
                let e = a.length > 0,
                    r = e && (0, g.YL)(t),
                    l = t.config.messages.gameTitle,
                    o = t.userStatus?.completedAt != null;
                return {
                    steps: [
                        {
                            renderContent: () =>
                                (0, s.jsx)(tu, { ...i, quest: t, sourceQuestContent: f.uF.QUEST_BAR_V2 }),
                            isComplete: e || r || o,
                        },
                        {
                            renderContent: () =>
                                (0, s.jsx)(tl.L5, {
                                    children: (0, ed.ui)(t)
                                        ? et.intl.string(et.t["5tXqFe"])
                                        : et.intl.formatToPlainString(et.t["+8JB6Y"], { gameTitle: l }),
                                }),
                            isComplete: r || o,
                        },
                        {
                            renderContent: () =>
                                (0, s.jsx)(tl.L5, {
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
        return (0, s.jsx)(tl.Ay, {
            heading: et.intl.string(et.t.UPWlJu),
            steps: o,
            children: c && !d && !x && (0, s.jsx)(tx, { useReducedMotion: l, quest: t }),
        });
    },
    tm = r.createContext({ springConfig: {}, isExpanded: !1 });
function tp(e) {
    let t = r.useMemo(
        () => ({ springConfig: e.springConfig, isExpanded: e.isExpanded }),
        [e.springConfig, e.isExpanded],
    );
    return (0, s.jsx)(tm.Provider, { value: t, children: e.children });
}
function tf(e) {
    let { children: t } = e,
        { springConfig: n, isExpanded: l } = r.useContext(tm),
        i = (0, u.bG)([Y.Ay], () => Y.Ay.useReducedMotion),
        { ref: o, height: d = null } = (0, L.Ay)(),
        x = (0, c.Ay)(d) ?? null,
        [{ height: C }, m] = (0, J.z)(() => ({ from: { height: 0 }, config: n }));
    return (
        r.useLayoutEffect(() => {
            null !== d && m({ height: d, immediate: !l || i || null === x });
        }, [d, m, l, i, x]),
        (0, s.jsx)(a.animated.div, {
            style: { height: null === x ? "auto" : C, overflow: "hidden" },
            children: (0, s.jsx)("div", { style: { overflow: "hidden" }, ref: o, children: t }),
        })
    );
}
n(134528), n(947204);
var tE = n(934225);
function t_(e) {
    let { header: t, children: n } = e;
    return (0, s.jsxs)("div", {
        className: tE.Nr,
        children: [
            (0, s.jsxs)("div", {
                className: tE.wx,
                children: [
                    (0, s.jsx)(e9.E, {
                        size: "custom",
                        color: "currentColor",
                        className: tE.Kk,
                        width: 16,
                        height: 16,
                    }),
                    (0, s.jsx)(eM.D, { color: "text-default", variant: "heading-sm/medium", children: t }),
                ],
            }),
            (0, s.jsx)(T.E, { color: "text-muted", variant: "text-xs/normal", className: tE.r2, children: n }),
        ],
    });
}
let th = function (e) {
    let { quest: t } = e,
        n = (0, E.aC)(t);
    if (0 === n.length) return null;
    let r = n.at(0);
    return r === et.intl.string(et.t.BV6xDm)
        ? (0, s.jsx)(t_, { header: et.intl.string(et.t.onh6ct), children: et.intl.string(et.t.arVHRA) })
        : r === et.intl.string(et.t.MFGxFM)
          ? (0, s.jsx)(t_, { header: et.intl.string(et.t.JPihZA), children: et.intl.string(et.t.MFGxFM) })
          : null;
};
var tg = n(31300),
    tA = n(687966),
    tS = n(35558);
let tj = function (e) {
    let { onDesktop: t, onConsole: n } = e;
    return (0, s.jsxs)(eP.e, {
        direction: "vertical",
        fullWidth: !0,
        className: tS.G,
        size: "sm",
        children: [
            (0, s.jsx)(ea.$, {
                onClick: t,
                text: et.intl.string(et.t["QXc01+"]),
                variant: "secondary",
                icon: tg.k,
                iconPosition: "end",
            }),
            (0, s.jsx)(ea.$, {
                onClick: n,
                text: et.intl.string(et.t["8lAfuB"]),
                variant: "secondary",
                icon: tA.GameControllerIcon,
                iconPosition: "end",
            }),
        ],
    });
};
var tR = n(506500);
let tv = r.forwardRef(function (e, t) {
    let { isHovered: n, asset: l, poster: i, className: a, autoPlay: o = !1 } = e,
        { isExpanded: c } = r.useContext(z),
        d = (0, u.bG)([Y.Ay], () => Y.Ay.useReducedMotion),
        x = r.useRef(null);
    return (
        r.useEffect(() => {
            null != x.current && (c && (!d || n) ? ((x.current.currentTime = 0), x.current.play()) : x.current.pause());
        }, [x, c, n, d]),
        (0, e6.A)(x),
        (0, s.jsx)(ez.A, {
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
function tT(e) {
    let { onClick: t } = e,
        { quest: n } = r.useContext(z),
        l = (0, u.bG)([Y.Ay], () => Y.Ay.useReducedMotion),
        [a, o] = r.useState(!1),
        c = (0, eJ.tW)(n, eJ.fY.QUEST_BAR_HERO_VIDEO, void 0, !1),
        d = (0, eJ.tW)(n, eJ.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1),
        x = (0, eK.Kr)((e) => e.getVideoProgressState)(n.id),
        C = n.userStatus?.completedAt != null && x === eK.K2.COMPLETED,
        m = !C && (!l || a);
    return (0, s.jsxs)(v.D, {
        className: tR.QO,
        onClick: t,
        onMouseEnter: function () {
            l && !a && o(!0);
        },
        onMouseLeave: function () {
            l && a && o(!1);
        },
        children: [
            null != d &&
                (0, s.jsx)(A._M, {
                    id: "QuestBarContentExpanded_videoThumbnail",
                    children: (e) => (0, s.jsx)("img", { ref: e, alt: "", src: d.url, className: tR.Ue }),
                }),
            null != c
                ? (0, s.jsx)(A._M, {
                      id: "QuestBarContentExpanded_video",
                      children: (e) =>
                          (0, s.jsx)(tv, {
                              ref: e,
                              isHovered: a,
                              autoPlay: !1,
                              asset: c,
                              poster: d?.url,
                              className: i()(tR.NM, { [tR.Gc]: m }),
                          }),
                  })
                : null,
            (0, s.jsx)("div", {
                className: tR.LT,
                children: C
                    ? (0, s.jsx)(ek.RetryIcon, { color: Q.A.colors.WHITE, className: tR.t })
                    : (0, s.jsx)(ew.PlayIcon, { color: Q.A.colors.WHITE, className: tR.t }),
            }),
        ],
    });
}
function ty(e) {
    let { quest: t } = e;
    return (0, s.jsx)(Z.A, {
        className: i()(tR.Qq, tR.wq),
        learnMoreStyle: "text",
        quest: t,
        questContent: f.uF.QUEST_BAR_V2,
        sourceQuestContent: f.uF.QUEST_BAR_V2,
    });
}
function tQ(e) {
    let { isCtaInteractable: t, containerRef: n, onAcceptQuest: l } = e,
        { quest: o, onGameSheetOpen: c, onGameSheetClose: d, taskDetails: x } = r.useContext(z),
        { expansionSpring: C } = r.useContext(w),
        m = r.useRef(null),
        _ = (0, u.bG)([p.A], () => p.A.isEnrolling(o.id), [o]),
        h = r.useMemo(() => (0, eJ.tW)(o, eJ.fY.QUEST_BAR_HERO), [o]),
        { enabled: g, showPlayInstantlyLabel: S } = eX.Bm.useConfig({ location: W.rE.QUESTS_BAR }),
        j = (0, eo.NA)({ quest: o, showPlayInstantlyLabel: S }),
        v = r.useMemo(() => (0, eJ.tW)(o, eJ.fY.HERO_IMAGE), [o]),
        y = r.useMemo(() => (null == v ? {} : { backgroundImage: `url(${v.url})` }), [v]),
        Q = eY.t.useConfig({ location: W.rE.QUESTS_BAR }),
        N = (0, eo.mU)({
            quest: o,
            location: W.rE.QUESTS_BAR,
            taskDetails: x,
            sourceQuestContent: f.uF.QUEST_BAR_V2,
            popoutTargetElementRef: m,
            onGameSheetOpened: c,
            onGameSheetClosed: d,
            gameProfileSource: D.GameProfileSources.QuestBar,
        }),
        F = (0, ep.Pd)(o),
        B = (0, E.do)({
            quest: o,
            content: f.uF.QUEST_BAR_V2,
            ctaContent: U.Cy.OPEN_GAME_LINK,
            sourceQuestContent: f.uF.QUEST_BAR_V2,
        }),
        I = (0, eZ.z)(),
        b = (0, E.SD)(o, I),
        V = I === e0.MA.NITRO && b;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)("div", {
                ref: m,
                children: (0, s.jsxs)("div", {
                    className: tR.do,
                    ref: n,
                    children: [
                        (0, s.jsxs)("div", {
                            className: tR.zH,
                            children: [
                                (0, s.jsx)(ty, { quest: o }),
                                (0, s.jsx)(eM.D, {
                                    className: tR.DD,
                                    color: "text-strong",
                                    variant: "heading-md/medium",
                                    children: et.intl.format(et.t.EQa7os, { questName: o.config.messages.questName }),
                                }),
                                (0, s.jsxs)("div", {
                                    className: tR.zf,
                                    children: [
                                        (0, s.jsx)(T.E, { className: tR.h_, variant: "text-xs/normal", children: N }),
                                        b && (0, s.jsx)(e3.e, { questId: o.id, orbMultiplierEligibility: I }),
                                    ],
                                }),
                            ],
                        }),
                        (0, s.jsx)("div", {
                            className: i()(tR.lO, { [tR._o]: !t }),
                            "data-testid": "quest-bar-enroll-cta",
                            children: (0, s.jsxs)(eP.e, {
                                direction: "horizontal",
                                fullWidth: !0,
                                wrap: !1,
                                children: [
                                    g &&
                                        (0, s.jsx)(eD.m, {
                                            text: et.intl.string(et.t.LLLLPD),
                                            position: "top",
                                            align: "center",
                                            ariaHidden: !0,
                                            children: (0, s.jsx)(eG.K, {
                                                variant: "secondary",
                                                size: "sm",
                                                icon: eH.W,
                                                "aria-label": et.intl.string(et.t.LLLLPD),
                                                onClick: B,
                                            }),
                                        }),
                                    Q.enabled && F === ep.UA.UNENROLLED && Q.enabledQuestStates.has(ep.UA.UNENROLLED)
                                        ? (0, s.jsx)(em.A, {
                                              quest: o,
                                              surface: ep.V3.QUEST_BAR_FOOTER,
                                              size: "sm",
                                              showPlayInstantlyLabel: S,
                                              analyticsCtxQuestContent: f.uF.QUEST_BAR_V2,
                                              analyticsCtxSourceQuestContent: f.uF.QUEST_BAR_V2,
                                          })
                                        : (0, s.jsx)(ea.$, {
                                              onClick: l,
                                              variant: "primary",
                                              loading: _,
                                              text: j,
                                              size: "sm",
                                              icon: (0, R.Oz)(o, S),
                                              fullWidth: !0,
                                          }),
                                ],
                            }),
                        }),
                    ],
                }),
            }),
            (0, s.jsx)(e1.A, { visible: V, glow: !0, className: tR.Ph }),
            null != v &&
                (0, s.jsx)(a.animated.div, {
                    className: tR.AK,
                    style: { opacity: (0, O.a)(C.to([0, 1], [1, 0])) },
                    children: (0, s.jsx)("div", { className: i()(tR.LC, tR.Ge), style: y }),
                }),
            (0, s.jsxs)(a.animated.div, {
                className: tR.IC,
                style: {
                    backdropFilter: (0, O.Q)(C.to([0, 1], [5, 0]).to((e) => `blur(${e}px)`)),
                    filter: (0, O.Q)(C.to([0, 1], [0.8, 1]).to((e) => `brightness(${e})`)),
                },
                children: [
                    h.isAnimated
                        ? (0, s.jsx)(A._M, {
                              id: "QuestBarContentExpanded_heroAnimated",
                              children: (e) => (0, s.jsx)(tv, { ref: e, autoPlay: !0, asset: h, className: tR.LO }),
                          })
                        : (0, s.jsx)(A._M, {
                              id: "QuestBarContentExpanded_heroStatic",
                              children: (e) => (0, s.jsx)("img", { ref: e, alt: "", className: tR.LO, src: h.url }),
                          }),
                    (0, s.jsx)("div", { className: tR.tV }),
                ],
            }),
        ],
    });
}
function tN(e) {
    let { quest: t } = e,
        { hasAlreadyLinked: n, onClickGameTitle: l } = r.useContext($);
    return !0 !== n ? null : (0, s.jsx)(e2.A, { quest: t, hasAlreadyLinked: n, onClickGameTitle: l });
}
function tU(e) {
    let { activeScreen: t, selectPlatform: n } = e,
        { quest: l, taskDetails: i } = r.useContext(z);
    return (0, eq.YW)(t)
        .with(f.X0.SELECT, () => (0, s.jsx)(tj, { onConsole: () => n(W.fO.CONSOLE), onDesktop: () => n(W.fO.DESKTOP) }))
        .with(f.X0.DESKTOP, () => ((0, g.I6)(l) ? (0, s.jsx)(tN, { quest: l }) : (0, s.jsx)(th, { quest: l })))
        .with(f.X0.CONSOLE, () => (0, s.jsx)(tC, { quest: l, taskDetails: i }))
        .exhaustive();
}
function tF(e) {
    let { parentContainerRef: t } = e,
        { quest: n, taskDetails: l } = r.useContext(z),
        [i, a, o] = (0, E.Qo)(n, l),
        u = l.percentComplete > 0,
        c = (0, E.Vn)(n),
        d = (0, E.RR)({ quest: n }),
        x = a.length > 1 && !u && !c;
    return (0, s.jsxs)(tf, {
        children: [
            (0, s.jsx)(tU, { activeScreen: i, selectPlatform: o }),
            i !== f.X0.SELECT &&
                (0, s.jsxs)("div", {
                    className: tR.oG,
                    children: [
                        x &&
                            (0, s.jsx)(eG.K, {
                                size: "sm",
                                "aria-label": et.intl.string(et.t["13/7kX"]),
                                onClick: () => o(null),
                                icon: eW.n,
                                variant: "secondary",
                            }),
                        (0, s.jsx)(eT, {
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
function tB(e) {
    let { parentContainerRef: t } = e,
        { quest: n, taskDetails: l } = r.useContext(z),
        i = l.percentComplete > 0,
        a = (0, E.Vn)(n),
        o = (0, E.Hv)() && n.userStatus?.completedAt == null,
        u = r.useCallback(() => {
            if (o) {
                (0, eu.Y5)({
                    questId: n.id,
                    questContent: f.uF.QUEST_BAR_V2,
                    questContentCTA: U.Cy.QUEST_ACCESS_SUSPENDED,
                    sourceQuestContent: f.uF.QUEST_BAR_V2,
                }),
                    (0, R.FS)();
                return;
            }
            (0, R.d5)({
                quest: n,
                questContent: f.uF.QUEST_BAR_V2,
                sourceQuestContent: f.uF.QUEST_BAR_V2,
                sourceQuestContentCTA: U.Cy.QUEST_BAR_VIDEO_QUEST_PREVIEW,
            });
        }, [n, o]);
    return (0, s.jsxs)(tf, {
        children: [
            (0, s.jsx)(tT, { onClick: u }),
            (0, s.jsx)(eT, {
                parentContainerRef: t,
                awaitingConsoleConnections: !1,
                hasMadeProgress: i,
                isProgressing: a,
                sourceQuestContent: f.uF.QUEST_BAR_V2,
            }),
        ],
    });
}
function tI(e) {
    let { parentContainerRef: t } = e,
        { quest: n, taskDetails: l } = r.useContext(z),
        i = l.percentComplete > 0,
        a = (0, E.Vn)(n);
    return (0, s.jsx)(tf, {
        children: (0, s.jsx)(eT, {
            parentContainerRef: t,
            awaitingConsoleConnections: !1,
            hasMadeProgress: i,
            isProgressing: a,
            sourceQuestContent: f.uF.QUEST_BAR_V2,
        }),
    });
}
function tb(e) {
    let { parentContainerRef: t } = e,
        { quest: n } = r.useContext(z);
    return (0, g.t)({ quest: n }) || (0, g.g5)(n) || (0, g.fE)({ quest: n }) || (0, g.I6)(n)
        ? (0, s.jsx)(tF, { parentContainerRef: t })
        : (0, g.vv)(n)
          ? (0, s.jsx)(tB, { parentContainerRef: t })
          : (0, s.jsx)(tI, { parentContainerRef: t });
}
function tO(e) {
    let { overlayRef: t, containerRef: n } = e,
        { quest: l, taskDetails: o } = r.useContext(z),
        { expansionSpring: u } = r.useContext(w),
        c = r.useRef(null),
        d = r.useRef(null),
        x = (0, E.I3)(l),
        C = null != x ? x.percentComplete : o.percentComplete;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(a.animated.div, {
                className: i()(tR.tv, tR.ag),
                style: {
                    backgroundImage: `linear-gradient(90deg, ${q}, ${k})`,
                    opacity: (0, O.a)(u.to({ range: [0, 1], output: [1, 0] })),
                },
            }),
            (0, s.jsxs)("div", {
                className: tR.Fe,
                ref: (e) => {
                    "function" == typeof n ? n(e) : null != n && (n.current = e), null != e && (d.current = e);
                },
                children: [
                    (0, s.jsx)(eO, {}),
                    (0, s.jsx)("div", { className: tR.yF }),
                    (0, s.jsx)(eU, { overlayRef: t, progressBarRef: c, isHovered: !1 }),
                    (0, s.jsx)(eI, {
                        contentLocation: "expanded",
                        progressBarRef: c,
                        isExpanded: !0,
                        percentComplete: C,
                        popoutTargetElementRef: d,
                    }),
                    (0, s.jsx)(tb, { parentContainerRef: d }),
                ],
            }),
            (0, s.jsx)("div", {
                className: i()(tR.tv, tR.Sx),
                style: { backgroundImage: `linear-gradient(90deg, ${q}, ${k})` },
            }),
        ],
    });
}
async function tV(e, t, n, s) {
    (0, g.vv)(e)
        ? await (0, R.e0)(e, { questContent: t, questContentCTA: n, sourceQuestContent: s, sourceQuestContentCTA: n })
        : (0, ed.vA)(e)
          ? await (0, e$.Oy)(e.id, { questContent: t, questContentCTA: n, sourceQuestContent: s })
          : (0, e$.Oy)(e.id, { questContent: t, questContentCTA: n, sourceQuestContent: s });
}
let tL = r.forwardRef(function (e, t) {
    let { children: n, className: l, overlayRef: o } = e,
        { collapsedHeight: u, isExpanded: c, isExpansionAnimationComplete: d, quest: x } = r.useContext(z),
        { expansionSpring: C } = r.useContext(w),
        { launchInGameActivity: m } = (0, E.zW)(x),
        p = (0, ed.vA)(x),
        _ = r.useCallback(async () => {
            let e = p ? U.Cy.START_QUEST : U.Cy.ACCEPT_QUEST;
            await tV(x, f.uF.QUEST_BAR_V2, e, f.uF.QUEST_BAR_V2), p && m();
        }, [x, m, p]),
        h = x.userStatus?.enrolledAt != null;
    return (0, s.jsxs)(a.animated.div, {
        "aria-hidden": !c,
        className: i()(l, tR.Rh, { [tR.iH]: h }),
        style: {
            transform: (0, a.to)(
                [C.to({ range: [0, 1], output: [0, -100] }), C.to({ range: [0, 1], output: [0, u] })],
                (e, t) => `translateY(calc(${e}% + ${t}px))`,
            ),
        },
        children: [
            n,
            (0, s.jsx)(a.animated.div, {
                style: { opacity: 1 },
                children: h
                    ? (0, s.jsx)(tO, { overlayRef: o, containerRef: t })
                    : (0, s.jsx)(tQ, { isCtaInteractable: !c || d, containerRef: t, onAcceptQuest: _ }),
            }),
        ],
    });
});
var tq = n(717695);
function tk() {
    let {
            expansionSpring: e,
            animatedComponentProps: t,
            recalculateAnimationPositions: n,
            mountPoints: l,
        } = r.useContext(w),
        { isExpanded: i } = r.useContext(z);
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
var tw = n(621466),
    tM = n(192308),
    tP = n(652215),
    tD = n(731738),
    tG = n(807393),
    tH = n(260364),
    tW = n(920690);
function tz(e) {
    let { isExpanded: t, questId: n } = e;
    return (
        (0, E.H6)({
            mode: t ? W.fP.EXPANDED : W.fP.COLLAPSED,
            questContent: f.uF.QUEST_BAR_V2,
            questId: n,
            sourceQuestContent: f.uF.QUEST_BAR_V2,
        }),
        null
    );
}
function t$() {
    return (
        r.useEffect(() => {
            C.trigger();
        }, []),
        null
    );
}
function tK(e) {
    let { quest: t } = e,
        n = (0, h.L)({ quest: t, location: W.rE.QUESTS_BAR }),
        l = (0, _.s)(),
        o = (0, u.bG)([p.A], () => null != p.A.questEnrollmentBlockedUntil),
        { isQuestBarVisible: d, reason: x } = (0, j.TQ)({ quest: t }),
        C = (0, u.bG)([m.A], () => m.A.hasLayers()),
        v = r.useRef(null),
        T = r.useMemo(() => (0, g.vv)(t), [t]),
        y = t.id,
        Q = t.userStatus?.enrolledAt != null,
        N = (0, c.Ay)(Q),
        F = t.userStatus?.completedAt != null,
        { hasError: B, isLoading: I } = (0, A.zT)(),
        b = r.useContext(tq.Z),
        O = b || (l && d && !I && !o),
        {
            isExpanded: V,
            setIsExpanded: L,
            expandQuestBar: q,
            isExpansionAnimationComplete: k,
            isVisibilityAnimationAtRest: w,
            expansionSpring: M,
            visibilitySpring: D,
            springConfig: G,
        } = (function (e) {
            let { isQuestAccepted: t, isQuestCompleted: n, isQuestBarVisible: s } = e,
                l = (0, u.bG)([Y.Ay], () => Y.Ay.useReducedMotion),
                [i, a] = r.useState(!1),
                [o, c] = r.useState(!0),
                [d, x] = r.useState(!0),
                C = r.useRef(s),
                m = r.useCallback(
                    (e) => {
                        (n && e) || (i !== e && (c(!1), a(e)));
                    },
                    [n, i],
                ),
                p = r.useCallback(() => {
                    m(!0);
                }, [m]),
                f = r.useCallback(() => {
                    m(!1);
                }, [m]),
                E = t ? W.ZV : W.Ko,
                [{ expansionSpring: _ }, h] = (0, J.z)(() => ({
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
                h({ expansionSpring: +!!i, immediate: l });
            }, [i, h, l]);
            let { visibilitySpring: g } = (0, J.z)({
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
                    s !== C.current && x(!1), (C.current = s);
                }, [s]),
                {
                    isExpanded: i,
                    setIsExpanded: m,
                    expandQuestBar: p,
                    collapseQuestBar: f,
                    isExpansionAnimationComplete: o,
                    isVisibilityAnimationAtRest: d,
                    expansionSpring: _,
                    visibilitySpring: g,
                    springConfig: E,
                }
            );
        })({ isQuestAccepted: Q, isQuestCompleted: F, isQuestBarVisible: O }),
        {
            handleCtxMenuOpened: H,
            handleCtxMenuClosed: z,
            handleCtxMenuSelection: $,
            handleGameSheetOpened: K,
            handleGameSheetClosed: Z,
            handleFocusWithoutDelay: ee,
            handleBlur: et,
            handleMouseEnter: en,
            handleMouseLeave: es,
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
                [x, C] = r.useState(!1),
                [m, p] = r.useState(!1),
                E = r.useCallback(() => {
                    C(!0);
                }, []),
                _ = r.useCallback(() => {
                    C(!1), d.current || i || s(!1);
                }, [i, s]),
                h = r.useCallback(() => {
                    C(!1), i || s(!1), (d.current = !1);
                }, [i, s]),
                g = r.useCallback(() => {
                    p(!0);
                }, []),
                A = r.useCallback(() => {
                    p(!1), s(!1);
                }, [s]),
                S = r.useCallback(
                    function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (n) return;
                        let { withDelay: t = !1 } = e;
                        t ? (c.current = window.setTimeout(l, 75)) : l();
                    },
                    [l, n],
                ),
                j = r.useCallback(() => {
                    S();
                }, [S]),
                R = r.useCallback(
                    (e) => {
                        window.clearTimeout(c.current),
                            ((0, tw.vq)(e?.relatedTarget, Node) && e.currentTarget.contains(e.relatedTarget)) ||
                                x ||
                                m ||
                                d.current ||
                                s(!1);
                    },
                    [x, m, s],
                ),
                v = r.useCallback(() => {
                    (0, eu.av)({
                        questId: t.id,
                        event: tP.HAw.QUEST_HOVER,
                        properties: {
                            content_id: f.uF.QUEST_BAR,
                            content_name: (0, U.jO)(f.uF.QUEST_BAR),
                            impression_id: u.current?.getId(),
                        },
                        shouldExtendSession: !0,
                        sourceQuestContent: f.uF.QUEST_BAR_V2,
                    }),
                        (d.current = !0),
                        S({ withDelay: !0 });
                }, [S, u, t.id]),
                T = r.useCallback(() => {
                    (0, eu.av)({
                        questId: t.id,
                        event: tP.HAw.QUEST_HOVER_OFF,
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
                m && d.current && T();
            }, [m, T]),
                r.useLayoutEffect(() => {
                    a && !o && d.current && l();
                }, [l, a, o]),
                r.useLayoutEffect(() => {
                    i || !a || o || d.current || s(!1);
                }, [a, i, o, s]);
            let y = (0, tM.useHasAnyModalOpen)();
            return (
                r.useEffect(() => {
                    y && d.current && T();
                }, [T, y]),
                {
                    ctxMenuOpen: x,
                    gameSheetOpen: m,
                    handleCtxMenuOpened: E,
                    handleCtxMenuClosed: _,
                    handleCtxMenuSelection: h,
                    handleGameSheetOpened: g,
                    handleGameSheetClosed: A,
                    handleFocus: S,
                    handleFocusWithoutDelay: j,
                    handleBlur: R,
                    handleMouseEnter: v,
                    handleMouseLeave: T,
                }
            );
        })({
            quest: t,
            isExpanded: V,
            setIsExpanded: L,
            expandQuestBar: q,
            isQuestCompleted: F,
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
                ((0, eu.av)({
                    questId: t.id,
                    event: tP.HAw.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        content_id: f.uF.QUEST_BAR,
                        content_name: (0, U.jO)(f.uF.QUEST_BAR),
                        reason: "asset_loading_error",
                        impression_id: d.current?.getId(),
                    },
                    sourceQuestContent: f.uF.QUEST_BAR_V2,
                }),
                tG.A.increment({
                    name: tD.K.QUEST_CONTENT_RENDERING_FAILURE,
                    tags: [
                        `quest_id:${t.id}`,
                        `quest_content:${(0, U.jO)(f.uF.QUEST_BAR)}`,
                        "reason:asset_loading_error",
                    ],
                }));
        }, [n, d, t.id]),
            r.useEffect(() => {
                s ||
                    (0, eu.av)({
                        questId: t.id,
                        event: tP.HAw.QUEST_CONTENT_RENDERING_FAILURE,
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
                    (0, eu.av)({
                        questId: t.id,
                        event: tP.HAw.QUEST_CONTENT_RENDERING_FAILURE,
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
                (!u || c) && tH.A.clearTracking(), l && i && !a && !n && s && tH.A.stopTracking(t.id);
            }, [u, c, l, i, a, n, s, t.id]);
    })({
        quest: t,
        hasAssetsError: B,
        isEligibleForQuests: l,
        isQuestBarVisible: O,
        isVisibilityAnimationAtRest: w,
        isLoadingAssets: I,
        currentQuestVisibleReason: x,
        shouldShowQuestBar: d,
        isQuestEnrollmentBlocked: o,
        impressionRef: v,
    });
    let er = r.useRef(null),
        el = r.useRef(null),
        ea = r.useRef(null),
        eo = (0, E.fc)(t),
        ec = (0, E.UH)(t);
    if (
        (r.useEffect(() => {
            T && (0, R.l9)();
        }, [T]),
        !l || (!O && w && !I) || (B && !b))
    )
        return (
            B && !b ? n.log("Not rendered due to asset error") : l || n.log("Not rendered due to ineligibility"), null
        );
    let ed = 70 + 78 * !!F;
    return (0, s.jsx)(S.Z, {
        questOrQuests: t,
        questContent: f.uF.QUEST_BAR_V2,
        overrideVisibility: !C && O,
        onImpression: ec,
        sourceQuestContent: f.uF.QUEST_BAR_V2,
        children: (e, n) => (
            (v.current = n.current),
            (0, s.jsxs)("div", {
                className: tW.dK,
                children: [
                    O &&
                        (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)(tz, { questId: y, isExpanded: V }), (0, s.jsx)(t$, {})],
                        }),
                    (0, s.jsx)(a.animated.div, {
                        "data-testid": "quest-bar-container",
                        "aria-hidden": !O,
                        onMouseLeave: es,
                        onMouseEnter: en,
                        onFocus: ee,
                        onBlur: et,
                        className: i()(tW.iE, { [tW.Xc]: !O, [tW.uv]: O && w }),
                        style: { height: D.to({ range: [0, 1], output: [0, ed] }) },
                        children: (0, s.jsx)(a.animated.div, {
                            className: i()(tW.FG, { [tW.E$]: V, [tW.KA]: Q }),
                            children: (0, s.jsx)(tp, {
                                springConfig: G,
                                isExpanded: V,
                                children: (0, s.jsx)(P, {
                                    expandedContentRef: er,
                                    collapsedContentRef: el,
                                    expansionSpring: M,
                                    children: (0, s.jsxs)(X, {
                                        quest: t,
                                        taskDetails: eo,
                                        isExpanded: V,
                                        isExpansionAnimationComplete: k,
                                        onCtxMenuClose: z,
                                        onCtxMenuOpen: H,
                                        onCtxMenuSelect: $,
                                        onGameSheetOpen: K,
                                        onGameSheetClose: Z,
                                        collapsedHeight: ed,
                                        children: [
                                            (0, s.jsx)(
                                                eL,
                                                { ref: el, className: tW.Qs, overlayRef: ea },
                                                F ? "collapsed-with-rewards" : "collapsed-without-rewards",
                                            ),
                                            (0, s.jsx)(tL, {
                                                className: tW.Qs,
                                                overlayRef: ea,
                                                ref: er,
                                                children: (0, s.jsxs)(s.Fragment, {
                                                    children: [(0, s.jsx)(tk, {}), !Q && (0, s.jsx)(ei, {})],
                                                }),
                                            }),
                                            (0, s.jsx)("div", { ref: ea, className: tW.Lw }),
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
function tX(e) {
    let { decisionId: t } = e,
        n = (0, u.bG)([m.A], () => m.A.hasLayers());
    return (0, s.jsx)(S.Z, {
        adContentId: t,
        adCreativeType: o.p.NO_FILL,
        questContent: f.uF.QUEST_BAR_V2,
        overrideVisibility: !n,
        sourceQuestContent: f.uF.QUEST_BAR_V2,
        children: (e) => (0, s.jsx)("div", { ref: e, "aria-hidden": !0, className: tW.ui }),
    });
}
let tY =
    221552 == n.j
        ? function () {
              let e = (0, j.dN)(),
                  t = (0, j.f4)();
              return null == e && null != t
                  ? (0, s.jsx)(tX, { decisionId: t.decisionId })
                  : null == e
                    ? null
                    : (0, s.jsx)(
                          A.y5,
                          {
                              source: W.rE.QUESTS_BAR,
                              adCreativeId: e.id,
                              adCreativeType: o.p.QUEST,
                              children: (0, s.jsx)(tK, { quest: e }),
                          },
                          e.id,
                      );
          }
        : null;
