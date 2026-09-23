(n.r(t), n.d(t, { QuestBar: () => tz, default: () => tK }));
var s = n(477900),
    r = n(582128),
    l = n(503698),
    i = n.n(l),
    a = n(498516),
    o = n(323889),
    u = n(17928),
    c = n(475743),
    d = n(840251),
    x = n(688151);
let C = new d.E([], x.$G.QUEST_BAR_RENDERED, { location: "quest bar rendered" });
var m = n(186111),
    p = n(859703),
    f = n(738822),
    E = n(866157),
    _ = n(466242),
    h = n(971276),
    g = n(851936),
    A = n(792620),
    S = n(557637),
    j = n(73473),
    R = n(201805),
    v = n(617986),
    T = n(939249),
    y = n(834730),
    Q = n(290136),
    N = n(661531),
    U = n(365199),
    F = n(590202),
    B = n(971649),
    I = n(901406),
    b = n(270045),
    O = n(57718),
    V = n(398025);
n(321073);
var q = n(333007),
    L = n(765671);
let k = "#00000000",
    w = "#CDD8FF1A",
    M = r.createContext({
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
    P = r.forwardRef(function (e, t) {
        let { children: n, id: l, inState: i, isTextTransition: o = !1 } = e,
            {
                recalculateAnimationPositions: u,
                registerComponent: c,
                unregisterComponent: d,
                expansionSpring: x,
                mountPoints: C,
            } = r.useContext(M),
            m = r.useRef(null),
            p = r.useRef(null),
            f = r.useRef(void 0);
        (r.useEffect(() => {
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
            }, [l, i, c, d]));
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
                                (0, q.createPortal)(
                                    (0, s.jsx)(a.animated.div, {
                                        style: {
                                            position: "absolute",
                                            opacity: (0, V.a)(x.to({ range: [0, 1], output: [1, 0] })),
                                        },
                                        children: n(p),
                                    }),
                                    _,
                                ),
                            "expanded" === i &&
                                (0, q.createPortal)(
                                    (0, s.jsx)(a.animated.div, {
                                        style: {
                                            position: "absolute",
                                            opacity: (0, V.a)(x.to({ range: [0, 1], output: [0, 1] })),
                                        },
                                        children: n(p),
                                    }),
                                    _,
                                ),
                        ],
                    }))
                  : "collapsed" === i && (h = (0, q.createPortal)(n(p), _)),
            (0, s.jsxs)("div", {
                style: { opacity: +((null == h && "collapsed" === i) || null == _) },
                ref: t,
                children: [n(m), h],
            })
        );
    }),
    D = (e) => {
        let { children: t, expandedContentRef: n, collapsedContentRef: l, expansionSpring: i } = e,
            [a, o] = r.useState({}),
            [u, c] = r.useState([]),
            [d, x] = r.useState(() => new Map()),
            C = r.useCallback((e, t, n) => {
                (o((s) => {
                    let r = s[t] ?? { expanded: null, collapsed: null };
                    return { ...s, [t]: { ...r, [n]: e } };
                }),
                    x((e) => {
                        let n = new Map(e);
                        return (n.set(t, r.createRef()), n);
                    }));
            }, []),
            m = r.useCallback((e, t) => {
                let n = !1;
                (o((s) => {
                    let r = s[e] ?? { expanded: null, collapsed: null };
                    return ((r[t] = null), (n = null == r.expanded && null == r.collapsed), { ...s, [e]: r });
                }),
                    n &&
                        x((t) => {
                            let n = new Map(t);
                            return (n.delete(e), n);
                        }));
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
        return (0, s.jsx)(M.Provider, {
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
var G = n(409626),
    H = n(692969),
    W = n(284846),
    z = n(190107);
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
    K = r.createContext({ hasAlreadyLinked: void 0, onClickGameTitle: void 0 });
function X(e) {
    let { children: t, quest: n } = e,
        { hasAlreadyLinked: l } = (0, W.U)(n),
        i = (0, H.A)({
            applicationId: (0, A.xc)(n),
            location: z.rE.QUEST_INSTRUCTIONS,
            source: G.GameProfileSources.QuestBar,
        }),
        a = r.useMemo(() => ({ hasAlreadyLinked: l, onClickGameTitle: i }), [l, i]);
    return (0, s.jsx)(K.Provider, { value: a, children: t });
}
function Y(e) {
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
    return (0, s.jsx)($.Provider, { value: m, children: (0, A.I6)(x) ? (0, s.jsx)(X, { quest: x, children: t }) : t });
}
var Z = n(775602),
    J = n(62405),
    ee = n(717421);
function et() {
    let e = document.body.style.getPropertyValue("--custom-guild-sidebar-width").slice(0, -2);
    return parseInt("" !== e ? e : "375");
}
var en = n(375708),
    es = n(393824);
let er = function (e) {
    let { isFullyExpanded: t, partnerBranding: n } = e,
        l = {
            label: !(function () {
                let [e, t] = r.useState(() => 270 > et());
                return (
                    r.useEffect(() => {
                        let e = new MutationObserver(() => {
                            t(270 > et());
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
        { expansionSpring: d } = r.useContext(M),
        x = l ? -4 : 6;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(a.animated.div, {
                className: es.tE,
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
                children: (0, s.jsx)(J.A, {
                    learnMoreStyle: "text",
                    learnMoreFontSize: t ? 9 : void 0,
                    quest: c,
                    location: z.rE.QUESTS_BAR,
                    questContent: f.uF.QUEST_BAR_V2,
                    autoplay: t && !o,
                    sourceQuestContent: f.uF.QUEST_BAR_V2,
                    style: { width: 48, height: 48, marginRight: 8, borderRadius: 6 },
                }),
            }),
            (0, s.jsxs)(a.animated.div, {
                className: i()(es.pm, { [es.nd]: l }),
                style: {
                    transform: (0, a.to)(
                        [d.to({ range: [0, 1], output: [0, -48] }), d.to({ range: [0, 1], output: [0, x] })],
                        (e, t) => `translate(${e}px, ${t}px)`,
                    ),
                },
                children: [
                    (0, s.jsx)("div", { className: i()({ [es.Iu]: !l }), children: n }),
                    (0, s.jsx)(a.animated.div, {
                        className: i()(es.ol, { [es.yZ]: l }),
                        style: { opacity: (0, V.a)(d.to({ range: [0, 1], output: [l ? 1 : 0.7, 0] })) },
                        children: (0, s.jsx)(y.E, {
                            color: "text-overlay-light",
                            lineClamp: 1,
                            variant: "text-xs/medium",
                            children: en.intl.string(en.t["3mgEQf"]),
                        }),
                    }),
                ],
            }),
        ],
    });
};
var el = n(886030);
let ei = (0, a.animated)(O.Ay),
    ea = function () {
        let e = (0, B.wW)(),
            { expansionSpring: t } = r.useContext(M),
            {
                onCtxMenuOpen: n,
                onCtxMenuClose: l,
                onCtxMenuSelect: o,
                isExpanded: u,
                isExpansionAnimationComplete: c,
                quest: d,
            } = r.useContext($),
            x = r.useCallback(() => {
                (0, v.Zc)(d, {
                    content: f.uF.QUEST_BAR_V2,
                    ctaContent: F.Cy.OPEN_DISCLOSURE,
                    sourceQuestContent: f.uF.QUEST_BAR_V2,
                });
            }, [d]),
            C = r.useCallback(() => {
                (0, I.pu)(d, {
                    content: f.uF.QUEST_BAR_V2,
                    ctaContent: F.Cy.OPEN_GAME_LINK,
                    impressionId: e(),
                    sourceQuestContent: f.uF.QUEST_BAR_V2,
                });
            }, [e, d]),
            m = u && c,
            p = (0, s.jsx)(T.D, {
                onClick: C,
                className: i()(el.vk, { [el.wm]: m }),
                children: (0, s.jsx)(ei, {
                    quest: d,
                    withGameTile: !1,
                    logotypeClassName: el.Iu,
                    logotypeStyle: {
                        height: 24,
                        maxWidth: 92,
                        transform: (0, a.to)([t.to({ range: [0, 1], output: [1, 1] })], (e) => `scale(${e})`),
                    },
                }),
            });
        return (0, s.jsxs)(a.animated.div, {
            className: i()(el.iE, el.Ht, { [el.tT]: m }),
            style: { transform: (0, a.to)([t.to({ range: [0, 1], output: [6, 0] })], (e) => `translateY(${e}px)`) },
            children: [
                (0, s.jsx)(a.animated.div, {
                    className: el.Tu,
                    style: { opacity: (0, V.a)(t.to({ range: [0, 1], output: [0, 1] })) },
                }),
                (0, s.jsx)(er, { isFullyExpanded: m, partnerBranding: p }),
                (0, s.jsxs)(a.animated.div, {
                    className: el.P0,
                    style: { opacity: (0, V.a)(t.to({ range: [0, 1], output: [0, 1] })) },
                    children: [
                        (0, s.jsxs)(T.D, {
                            className: el.y8,
                            onClick: x,
                            children: [
                                (0, s.jsx)(y.E, {
                                    color: "text-overlay-light",
                                    variant: "text-xs/normal",
                                    children: en.intl.string(en.t.o6FLcF),
                                }),
                                (0, s.jsx)(Q.CircleQuestionIcon, { color: N.A.colors.WHITE, className: el.P$ }),
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
                                (0, s.jsx)(T.D, {
                                    ...e,
                                    className: i()(el.uJ, el.rb),
                                    "aria-label": en.intl.string(en.t.DEoVWZ),
                                    children: (0, s.jsx)(U.MoreHorizontalIcon, {
                                        size: "md",
                                        color: "currentColor",
                                        className: i()(el.Bx, el.ON),
                                    }),
                                }),
                        }),
                    ],
                }),
            ],
        });
    };
var eo = n(821609),
    eu = n(3738),
    ec = n(561844),
    ed = n(651892),
    ex = n(814793),
    eC = n(753386),
    em = n(608935),
    ep = n(887899),
    ef = n(79545),
    eE = n(862611),
    e_ = n(630037),
    eh = n(191559);
function eg(e) {
    let { quest: t, sourceQuestContent: n, taskDetails: r } = e,
        l = (0, E.Hv)(),
        i = (0, s.jsx)(eo.$, {
            variant: "primary",
            fullWidth: !0,
            onClick: function () {
                if (l) {
                    ((0, ec.Y5)({
                        questId: t.id,
                        questContent: f.uF.QUEST_BAR_V2,
                        questContentCTA: F.Cy.QUEST_ACCESS_SUSPENDED,
                        sourceQuestContent: n,
                    }),
                        (0, v.FS)());
                    return;
                }
                let e = t.userStatus?.enrolledAt == null ? F.Cy.ACCEPT_QUEST : F.Cy.WATCH_VIDEO;
                (0, v.d5)({
                    quest: t,
                    questContent: f.uF.QUEST_BAR_V2,
                    sourceQuestContent: n,
                    sourceQuestContentCTA: e,
                });
            },
            size: "sm",
            text: (0, eC.WM)(r),
            "aria-disabled": l || void 0,
        });
    return l ? (0, s.jsx)(em.A, { children: i }) : i;
}
function eA(e) {
    let { quest: t, sourceQuestContent: n } = e,
        r = (0, B.wW)(),
        l = (0, ed.wr)(t);
    return (0, s.jsx)(eo.$, {
        size: "sm",
        fullWidth: !0,
        onClick: () =>
            (0, I.pu)(t, {
                content: f.uF.QUEST_BAR_V2,
                ctaContent: F.Cy.OPEN_GAME_LINK,
                impressionId: r(),
                sourceQuestContent: n,
            }),
        text: l,
    });
}
function eS(e) {
    let { quest: t, sourceQuestContent: n } = e,
        r = (0, B.wW)();
    return (0, s.jsx)(eo.$, {
        fullWidth: !0,
        onClick: () =>
            (0, I.se)(
                { quest: t },
                {
                    content: f.uF.QUEST_BAR_V2,
                    ctaContent: F.Cy.CONNECT_CONSOLE,
                    impressionId: r(),
                    sourceQuestContent: n,
                },
            ),
        size: "sm",
        text: en.intl.string(en.t.csptqV),
    });
}
function ej(e) {
    let { quest: t } = e,
        n = (0, eu.NA)({ quest: t }),
        { launchInGameActivity: r } = (0, E.zW)(t);
    return (0, ex.vA)(t)
        ? (0, s.jsx)(eo.$, { fullWidth: !0, variant: "primary", icon: (0, v.Oz)(t), onClick: r, size: "sm", text: n })
        : null;
}
function eR(e) {
    let {
            quest: t,
            sourceQuestContent: n,
            taskDetails: r,
            popoutTargetElementRef: l,
            onGameSheetOpened: i,
            onGameSheetClosed: a,
        } = e,
        { applications: o } = r;
    return (0, s.jsx)(eE.A, {
        quest: t,
        sourceQuestContent: n,
        applications: o ?? [],
        targetElementRef: l,
        onGameSheetOpened: i,
        onGameSheetClosed: a,
        children: (e) =>
            (0, s.jsx)(eo.$, {
                variant: "secondary",
                fullWidth: !0,
                size: "sm",
                text: en.intl.string(en.t["93PTEs"]),
                ...e,
            }),
    });
}
function ev(e) {
    let { quest: t, ctaLabel: n, onClick: r, questContent: l = f.uF.QUEST_BAR_V2, sourceQuestContent: i } = e,
        a = (0, e_.D)({ quest: t, questContent: l, sourceQuestContent: i, onBeforeClaim: r });
    return (0, s.jsx)(eo.$, {
        fullWidth: !0,
        onClick: a,
        text: n ?? en.intl.string(en.t.cfY4PE),
        "data-testid": "quest-bar-claim-reward-button",
        variant: "primary",
        size: "sm",
    });
}
function eT(e) {
    let {
            sourceQuestContent: t,
            awaitingConsoleConnections: n,
            hasMadeProgress: l,
            isProgressing: i,
            popoutTargetElementRef: a,
        } = e,
        { quest: o, onGameSheetOpen: u, onGameSheetClose: c, taskDetails: d } = r.useContext($),
        [x] = (0, E.Qo)(o, d),
        C = o.userStatus?.completedAt != null,
        m = (0, A.vv)(o),
        p = (0, A.I6)(o),
        _ = x !== f.X0.SELECT && !l && !i,
        h = null;
    return (
        C
            ? (h = (0, s.jsx)(ev, { quest: o, sourceQuestContent: t }))
            : p
              ? (h = (0, s.jsx)(ep.A, {
                    quest: o,
                    surface: ef.V3.QUEST_BAR_FOOTER,
                    size: "sm",
                    analyticsCtxQuestContent: f.uF.QUEST_BAR_V2,
                    analyticsCtxSourceQuestContent: t,
                }))
              : m
                ? (h = (0, s.jsx)(eg, { quest: o, sourceQuestContent: t, taskDetails: d }))
                : (0, ex.vA)(o)
                  ? (h = (0, s.jsx)(ej, { quest: o }))
                  : x === f.X0.CONSOLE && n
                    ? (h = (0, s.jsx)(eS, { quest: o, sourceQuestContent: t }))
                    : _ && (0, ex.ui)(o)
                      ? (h = (0, s.jsx)(eR, {
                            quest: o,
                            sourceQuestContent: t,
                            taskDetails: d,
                            popoutTargetElementRef: a,
                            onGameSheetOpened: u,
                            onGameSheetClosed: c,
                        }))
                      : _ && (h = (0, s.jsx)(eA, { quest: o, sourceQuestContent: t })),
        null == h ? null : (0, s.jsx)("div", { className: eh.lO, children: h })
    );
}
function ey(e) {
    return (0, s.jsx)(eT, { ...e, popoutTargetElementRef: e.parentContainerRef });
}
var eQ = n(776310),
    eN = n(536283),
    eU = n(489811);
let eF = (e) => {
    let { overlayRef: t, progressBarRef: n, isHovered: l } = e,
        { quest: o, isExpanded: d } = r.useContext($),
        { expansionSpring: x } = r.useContext(M),
        { completionSpring: C, startCompletionAnimation: p } = (function () {
            let [{ spring: e }, t] = (0, ee.z)(() => ({ spring: 0 }), "animate-always");
            return {
                completionSpring: e,
                startCompletionAnimation: r.useCallback(() => {
                    (t({ spring: 1 }), t({ spring: 0, delay: 2e3 }));
                }, [t]),
            };
        })(),
        f = o.userStatus?.completedAt != null,
        E = r.useRef(!1),
        _ = (0, u.bG)([Z.Ay], () => Z.Ay.useReducedMotion),
        h = r.useRef(null),
        g = (0, u.bG)([m.A], () => m.A.hasLayers()),
        A = (0, c.Ay)(g),
        [S, j] = r.useState(null),
        [R, v] = r.useState(null),
        T = r.useRef(new eQ.OH({ gravity: 0, wind: 0 })),
        y = (0, eQ.f9)(S, R),
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
                        ...eN.Mw,
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
                (p(), N());
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
              className: eU.iE,
              "aria-hidden": "true",
              ref: h,
              children: [
                  (0, s.jsx)(a.animated.div, { className: eU.Tp, style: { opacity: (0, V.a)(C) } }),
                  (0, s.jsx)(a.animated.div, { className: i()(eU.sJ, eU.ix), style: { opacity: (0, V.a)(C) } }),
                  (0, s.jsxs)(a.animated.div, {
                      className: eU.KG,
                      style: { transform: x.to({ range: [0, 1], output: [-35, 0] }).to((e) => `translateY(${e}px)`) },
                      children: [
                          (0, s.jsx)(eQ.Fk, { ref: j, className: eU.t_, environment: T.current }),
                          (0, s.jsx)(eQ.K_, {
                              ref: v,
                              sprites: ["/assets/b909790cf1d80597.svg"],
                              colors: Q,
                              spriteWidth: eN.wn,
                              spriteHeight: eN.wn,
                          }),
                          null != t.current &&
                              (0, q.createPortal)(
                                  (0, s.jsx)(a.animated.div, {
                                      className: i()(eU.sJ, eU.d7),
                                      style: { opacity: (0, V.a)(C) },
                                  }),
                                  t.current,
                              ),
                      ],
                  }),
              ],
          });
};
var eB = n(453384),
    eI = n(649480);
let eb = function (e) {
    let { isExpanded: t, contentLocation: n, progressBarRef: l, percentComplete: i, popoutTargetElementRef: a } = e,
        { quest: o, onGameSheetOpen: u, onGameSheetClose: c, taskDetails: d } = r.useContext($),
        { hasAlreadyLinked: x, onClickGameTitle: C } = r.useContext(K),
        [m] = (0, E.Qo)(o, d),
        p = (0, eu.VX)(o, x),
        _ = (0, eu.tH)({
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
        className: eI.Z0,
        children: [
            (0, s.jsx)(P, {
                inState: n,
                id: "progress-bar",
                ref: l,
                children: (e) =>
                    (0, s.jsx)(eB.A, {
                        ref: e,
                        style: "small",
                        percentComplete: i,
                        size: 42,
                        children: (0, s.jsx)(J.A, {
                            fullWidth: !0,
                            quest: o,
                            location: z.rE.QUESTS_BAR,
                            questContent: f.uF.QUEST_BAR_V2,
                            autoplay: !1,
                            sourceQuestContent: f.uF.QUEST_BAR_V2,
                        }),
                    }),
            }),
            (0, s.jsxs)("div", {
                className: eI.NZ,
                children: [
                    (0, s.jsx)(P, {
                        inState: n,
                        id: "progress-title",
                        children: (e) =>
                            (0, s.jsx)(y.E, {
                                ref: e,
                                className: eI.FZ,
                                color: "text-strong",
                                variant: "text-sm/semibold",
                                children: p,
                            }),
                    }),
                    (0, s.jsx)(P, {
                        inState: n,
                        id: "progress-subtitle",
                        isTextTransition: !0,
                        children: (e) =>
                            (0, s.jsx)(y.E, {
                                ref: e,
                                className: eI.FZ,
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
var eO = n(316878);
function eV() {
    let { quest: e, onCtxMenuOpen: t, onCtxMenuClose: n, onCtxMenuSelect: l } = r.useContext($),
        a = (0, E.S5)(e.config.expiresAt);
    return (0, s.jsxs)("div", {
        className: eO.pS,
        children: [
            (0, s.jsx)(y.E, {
                variant: "text-xxs/medium",
                className: i()(eO.Uu, eO.TK),
                children: en.intl.format(en.t["pX+fmn"], { expirationDate: a }),
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
                    (0, s.jsx)(T.D, {
                        ...e,
                        className: eO.rb,
                        "aria-label": en.intl.string(en.t.DEoVWZ),
                        children: (0, s.jsx)(U.MoreHorizontalIcon, {
                            size: "md",
                            color: "currentColor",
                            className: i()(eO.Bx, eO.U9),
                        }),
                    }),
            }),
        ],
    });
}
var eq = n(331940);
let eL = r.forwardRef(function (e, t) {
    let { className: n, overlayRef: l } = e,
        { expansionSpring: o } = r.useContext(M),
        { quest: u, taskDetails: c, isExpanded: d } = r.useContext($),
        x = u.userStatus?.completedAt != null,
        C = (0, E.I3)(u),
        m = r.useRef(null),
        p = u.userStatus?.enrolledAt != null,
        _ = null != C ? C.percentComplete : c.percentComplete,
        h = r.useRef(null),
        [g, A] = r.useState(!1);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            x && (0, s.jsx)(eF, { overlayRef: l, progressBarRef: m, isHovered: g }),
            (0, s.jsx)(a.animated.div, {
                ref: t,
                "aria-hidden": d,
                className: i()(n, eq.hR, { [eq.Ag]: d, [eq.s]: p }),
                style: {
                    opacity: (0, V.a)(o.to({ range: [0, 1], output: [1, 0] })),
                    backgroundImage: x ? `linear-gradient(90deg, ${k}, ${w})` : void 0,
                },
                onMouseEnter: () => A(!0),
                onMouseLeave: () => A(!1),
                children: (0, s.jsxs)("div", {
                    className: eq.o8,
                    children: [
                        x &&
                            (0, s.jsxs)(s.Fragment, {
                                children: [(0, s.jsx)(eV, {}), (0, s.jsx)("div", { className: eq.yF })],
                            }),
                        p
                            ? (0, s.jsx)(eb, {
                                  contentLocation: "collapsed",
                                  progressBarRef: m,
                                  isExpanded: !1,
                                  percentComplete: _,
                              })
                            : null,
                        x &&
                            (0, s.jsx)("div", {
                                ref: h,
                                children: (0, s.jsx)(ey, {
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
var ek = n(889137),
    ew = n(417270),
    eM = n(782134),
    eP = n(297264),
    eD = n(825484),
    eG = n(408278),
    eH = n(921853),
    eW = n(607470),
    ez = n(396813),
    e$ = n(405670),
    eK = n(112142),
    eX = n(646917),
    eY = n(291749),
    eZ = n(576761),
    eJ = n(895253),
    e0 = n(976019),
    e1 = n(442734),
    e2 = n(139384),
    e3 = n(114046),
    e6 = n(695366),
    e7 = n(274670),
    e8 = n(144779),
    e9 = n(30370),
    e5 = n(178540),
    e4 = n(104886),
    te = n(18437),
    tt = n(780964),
    tn = n(766075),
    ts = n(52093),
    tr = n(575630);
function tl(e) {
    let { text: t, quest: n, sourceQuestContent: r } = e,
        l = (0, te.Ut)(),
        i = (0, B.go)();
    return (0, s.jsx)(T.D, {
        className: tr.Z0,
        onClick: () => {
            ((0, e4.E5)(e4.kI.STEP_2_CLICKED_INTERNAL, "console_connection_step")
                ? (0, e7.r)({
                      type: e8.F.CLICK_INTERNAL,
                      adCreativeType: o.p.QUEST,
                      adCreativeId: n.id,
                      questContentCTA: F.Cy.VIEW_CONSOLE_CONNECTIONS_LINK,
                      surfaceId: f.uF.QUEST_BAR_V2,
                      sourceQuestContent: r,
                      impressionId: i,
                  })
                : l({
                      questId: n.id,
                      questContent: f.uF.QUEST_BAR_V2,
                      questContentCTA: F.Cy.VIEW_CONSOLE_CONNECTIONS_LINK,
                      sourceQuestContent: r,
                  }),
                (0, tn.openUserSettings)(tt.X.CONNECTIONS_CATEGORY));
        },
        children: (0, s.jsx)(y.E, { "aria-label": t, color: "none", variant: "text-xxs/normal", children: t }),
    });
}
function ti(e) {
    let { xboxAndPlaystationAccounts: t, quest: n, sourceQuestContent: r } = e;
    return t.length > 0
        ? (0, s.jsx)(tl, { text: en.intl.string(en.t["qiS+xj"]), quest: n, sourceQuestContent: r })
        : null;
}
function ta(e) {
    return (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(ts.L5, { children: en.intl.string(en.t.EJFSvD) }), (0, s.jsx)(ti, { ...e })],
    });
}
var to = n(607886);
function tu(e) {
    return (0, s.jsx)(y.E, { className: to.eW, color: "text-muted", variant: "text-xxs/normal", children: e.children });
}
function tc(e) {
    let { quest: t, useReducedMotion: n } = e,
        l = (0, R.H1)(t.id, f.uF.QUEST_BAR_V2, f.uF.QUEST_BAR_V2),
        a = (0, R.Xf)({ useReducedMotion: n }),
        u = (0, te.Ut)(),
        c = (0, B.go)(),
        d = (0, e5.O)((e) => e.getErrorHints(t.id)),
        { startingConsoleQuest: x, startConsoleQuest: C } = (0, E.Wj)({
            questId: t.id,
            beforeRequest: () => {
                ((0, e4.E5)(e4.kI.STEP_2_CLICKED_INTERNAL, "quest_bar_console_task_checklist")
                    ? (0, e7.r)({
                          type: e8.F.CLICK_INTERNAL,
                          adCreativeType: o.p.QUEST,
                          adCreativeId: t.id,
                          questContentCTA: F.Cy.DEFIBRILLATOR,
                          surfaceId: f.uF.QUEST_BAR_V2,
                          sourceQuestContent: f.uF.QUEST_BAR_V2,
                          impressionId: c,
                      })
                    : u({
                          questId: t.id,
                          questContent: f.uF.QUEST_BAR_V2,
                          questContentCTA: F.Cy.DEFIBRILLATOR,
                          sourceQuestContent: f.uF.QUEST_BAR_V2,
                      }),
                    a.startAnimation());
            },
            afterRequest: a.stopAnimation,
        }),
        { header: m, renderBody: p } = r.useMemo(() => {
            let e = d.length > 0,
                n = t.config.messages.gameTitle;
            return {
                header: e
                    ? (0, ex.ui)(t)
                        ? en.intl.string(en.t.N33EuL)
                        : en.intl.formatToPlainString(en.t["28Ql27"], { gameTitle: n })
                    : (0, ex.ui)(t)
                      ? en.intl.string(en.t.YstzGO)
                      : en.intl.formatToPlainString(en.t.gX0Qcx, { gameTitle: n }),
                renderBody: e
                    ? function () {
                          return (0, s.jsx)(s.Fragment, {
                              children: d.map((e, n) => {
                                  if (e.type === e3._.EXPIRED_CREDENTIAL) {
                                      let r = e9.A.getAccount(e.connected_account_id, e.connected_account_type),
                                          l = (0, I.IG)(e),
                                          i = (0, I.$J)(e);
                                      return (0, s.jsx)(
                                          tu,
                                          {
                                              children: en.intl.format(l, {
                                                  account_name: r?.name,
                                                  onClick: () => {
                                                      (0, I.v0)(
                                                          { quest: t, platformType: i },
                                                          {
                                                              content: f.uF.QUEST_BAR,
                                                              ctaContent: F.Cy.DEFIBRILLATOR_RECONNECT_CONSOLE,
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
                              children: (0, ex.ui)(t)
                                  ? en.intl.string(en.t.bUyEZZ)
                                  : en.intl.format(en.t.GXqvC1, { gameTitle: n }),
                          }),
            };
        }, [d, t, c]);
    return (0, s.jsxs)("div", {
        className: to.XK,
        children: [
            (0, s.jsxs)("div", {
                className: to.oK,
                children: [
                    (0, s.jsx)(e6.E, {
                        size: "custom",
                        color: "currentColor",
                        className: 0 === d.length ? to.pH : to.JA,
                        width: 16,
                        height: 16,
                    }),
                    (0, s.jsx)(y.E, { variant: "text-xs/medium", children: m }),
                    (0, s.jsx)(T.D, { className: i()(to.w, { [to.r9]: x }), onClick: () => C(), children: a.render() }),
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
                () => (0, I.bg)(t).filter((e) => null != i.xboxAndPlaystationAccounts.find((t) => t.type === e)),
                [i.xboxAndPlaystationAccounts, t],
            ),
            {
                steps: o,
                hasConnectedAccounts: c,
                isProgressingQuestForLaunchedGame: d,
                isQuestComplete: x,
            } = r.useMemo(() => {
                let e = a.length > 0,
                    r = e && (0, A.YL)(t),
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
                                    children: (0, ex.ui)(t)
                                        ? en.intl.string(en.t["5tXqFe"])
                                        : en.intl.formatToPlainString(en.t["+8JB6Y"], { gameTitle: l }),
                                }),
                            isComplete: r || o,
                        },
                        {
                            renderContent: () =>
                                (0, s.jsx)(ts.L5, {
                                    children: en.intl.formatToPlainString(en.t.HhfrYS, { numMinutes: n.targetMinutes }),
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
            heading: en.intl.string(en.t.UPWlJu),
            steps: o,
            children: c && !d && !x && (0, s.jsx)(tc, { useReducedMotion: l, quest: t }),
        });
    },
    tx = r.createContext({ springConfig: {}, isExpanded: !1 });
function tC(e) {
    let t = r.useMemo(
        () => ({ springConfig: e.springConfig, isExpanded: e.isExpanded }),
        [e.springConfig, e.isExpanded],
    );
    return (0, s.jsx)(tx.Provider, { value: t, children: e.children });
}
function tm(e) {
    let { children: t } = e,
        { springConfig: n, isExpanded: l } = r.useContext(tx),
        i = (0, u.bG)([Z.Ay], () => Z.Ay.useReducedMotion),
        { ref: o, height: d = null } = (0, L.Ay)(),
        x = (0, c.Ay)(d) ?? null,
        [{ height: C }, m] = (0, ee.z)(() => ({ from: { height: 0 }, config: n }));
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
(n(134528), n(947204));
var tp = n(934225);
function tf(e) {
    let { header: t, children: n } = e;
    return (0, s.jsxs)("div", {
        className: tp.Nr,
        children: [
            (0, s.jsxs)("div", {
                className: tp.wx,
                children: [
                    (0, s.jsx)(e6.E, {
                        size: "custom",
                        color: "currentColor",
                        className: tp.Kk,
                        width: 16,
                        height: 16,
                    }),
                    (0, s.jsx)(eP.D, { color: "text-default", variant: "heading-sm/medium", children: t }),
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
    return r === en.intl.string(en.t.BV6xDm)
        ? (0, s.jsx)(tf, { header: en.intl.string(en.t.onh6ct), children: en.intl.string(en.t.arVHRA) })
        : r === en.intl.string(en.t.MFGxFM)
          ? (0, s.jsx)(tf, { header: en.intl.string(en.t.JPihZA), children: en.intl.string(en.t.MFGxFM) })
          : null;
};
var t_ = n(31300),
    th = n(687966),
    tg = n(35558);
let tA = function (e) {
    let { onDesktop: t, onConsole: n } = e;
    return (0, s.jsxs)(eD.e, {
        direction: "vertical",
        fullWidth: !0,
        className: tg.G,
        size: "sm",
        children: [
            (0, s.jsx)(eo.$, {
                onClick: t,
                text: en.intl.string(en.t["QXc01+"]),
                variant: "secondary",
                icon: t_.k,
                iconPosition: "end",
            }),
            (0, s.jsx)(eo.$, {
                onClick: n,
                text: en.intl.string(en.t["8lAfuB"]),
                variant: "secondary",
                icon: th.GameControllerIcon,
                iconPosition: "end",
            }),
        ],
    });
};
var tS = n(506500);
let tj = r.forwardRef(function (e, t) {
    let { isHovered: n, asset: l, poster: i, className: a, autoPlay: o = !1 } = e,
        { isExpanded: c } = r.useContext($),
        d = (0, u.bG)([Z.Ay], () => Z.Ay.useReducedMotion),
        x = r.useRef(null);
    return (
        r.useEffect(() => {
            null != x.current && (c && (!d || n) ? ((x.current.currentTime = 0), x.current.play()) : x.current.pause());
        }, [x, c, n, d]),
        (0, e2.A)(x),
        (0, s.jsx)(eW.A, {
            ref: (e) => {
                ((x.current = e), null != t && ("function" == typeof t ? t(e) : (t.current = e)));
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
        c = (0, eY.tW)(n, eY.fY.QUEST_BAR_HERO_VIDEO, void 0, !1),
        d = (0, eY.tW)(n, eY.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1),
        x = (0, e$.Kr)((e) => e.getVideoProgressState)(n.id),
        C = n.userStatus?.completedAt != null && x === e$.K2.COMPLETED,
        m = !C && (!l || a);
    return (0, s.jsxs)(T.D, {
        className: tS.QO,
        onClick: t,
        onMouseEnter: function () {
            l && !a && o(!0);
        },
        onMouseLeave: function () {
            l && a && o(!1);
        },
        children: [
            null != d &&
                (0, s.jsx)(S._M, {
                    id: "QuestBarContentExpanded_videoThumbnail",
                    children: (e) => (0, s.jsx)("img", { ref: e, alt: "", src: d.url, className: tS.Ue }),
                }),
            null != c
                ? (0, s.jsx)(S._M, {
                      id: "QuestBarContentExpanded_video",
                      children: (e) =>
                          (0, s.jsx)(tj, {
                              ref: e,
                              isHovered: a,
                              autoPlay: !1,
                              asset: c,
                              poster: d?.url,
                              className: i()(tS.NM, { [tS.Gc]: m }),
                          }),
                  })
                : null,
            (0, s.jsx)("div", {
                className: tS.LT,
                children: C
                    ? (0, s.jsx)(ew.RetryIcon, { color: N.A.colors.WHITE, className: tS.t })
                    : (0, s.jsx)(eM.PlayIcon, { color: N.A.colors.WHITE, className: tS.t }),
            }),
        ],
    });
}
function tv(e) {
    let { quest: t } = e;
    return (0, s.jsx)(J.A, {
        className: i()(tS.Qq, tS.wq),
        learnMoreStyle: "text",
        quest: t,
        location: z.rE.QUESTS_BAR,
        questContent: f.uF.QUEST_BAR_V2,
        sourceQuestContent: f.uF.QUEST_BAR_V2,
    });
}
function tT(e) {
    let { isCtaInteractable: t, containerRef: n, onAcceptQuest: l } = e,
        { quest: o, onGameSheetOpen: c, onGameSheetClose: d, taskDetails: x } = r.useContext($),
        { expansionSpring: C } = r.useContext(M),
        m = r.useRef(null),
        _ = (0, u.bG)([p.A], () => p.A.isEnrolling(o.id), [o]),
        h = r.useMemo(() => (0, eY.tW)(o, eY.fY.QUEST_BAR_HERO), [o]),
        g = (0, eu.NA)({ quest: o }),
        A = r.useMemo(() => (0, eY.tW)(o, eY.fY.HERO_IMAGE), [o]),
        j = r.useMemo(() => (null == A ? {} : { backgroundImage: `url(${A.url})` }), [A]),
        R = eK.t.useConfig({ location: z.rE.QUESTS_BAR }),
        T = (0, eu.mU)({
            quest: o,
            location: z.rE.QUESTS_BAR,
            taskDetails: x,
            sourceQuestContent: f.uF.QUEST_BAR_V2,
            popoutTargetElementRef: m,
            onGameSheetOpened: c,
            onGameSheetClosed: d,
            gameProfileSource: G.GameProfileSources.QuestBar,
        }),
        Q = (0, ef.Pd)(o),
        N = (0, eX.z)(),
        U = (0, E.SD)(o, N),
        F = N === eZ.MA.NITRO && U;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)("div", {
                ref: m,
                children: (0, s.jsxs)("div", {
                    className: tS.do,
                    ref: n,
                    children: [
                        (0, s.jsxs)("div", {
                            className: tS.zH,
                            children: [
                                (0, s.jsx)(tv, { quest: o }),
                                (0, s.jsx)(eP.D, {
                                    className: tS.DD,
                                    color: "text-strong",
                                    variant: "heading-md/medium",
                                    children: en.intl.format(en.t.EQa7os, { questName: o.config.messages.questName }),
                                }),
                                (0, s.jsxs)("div", {
                                    className: tS.zf,
                                    children: [
                                        (0, s.jsx)(y.E, { className: tS.h_, variant: "text-xs/normal", children: T }),
                                        U && (0, s.jsx)(e1.e, { questId: o.id, orbMultiplierEligibility: N }),
                                    ],
                                }),
                            ],
                        }),
                        (0, s.jsx)("div", {
                            className: i()(tS.lO, { [tS._o]: !t }),
                            "data-testid": "quest-bar-enroll-cta",
                            children: (0, s.jsx)(eD.e, {
                                direction: "horizontal",
                                fullWidth: !0,
                                wrap: !1,
                                children:
                                    R.enabled && Q === ef.UA.UNENROLLED && R.enabledQuestStates.has(ef.UA.UNENROLLED)
                                        ? (0, s.jsx)(ep.A, {
                                              quest: o,
                                              surface: ef.V3.QUEST_BAR_FOOTER,
                                              size: "sm",
                                              analyticsCtxQuestContent: f.uF.QUEST_BAR_V2,
                                              analyticsCtxSourceQuestContent: f.uF.QUEST_BAR_V2,
                                          })
                                        : (0, s.jsx)(eo.$, {
                                              onClick: l,
                                              variant: "primary",
                                              loading: _,
                                              text: g,
                                              size: "sm",
                                              icon: (0, v.Oz)(o),
                                              fullWidth: !0,
                                          }),
                            }),
                        }),
                    ],
                }),
            }),
            (0, s.jsx)(eJ.A, { visible: F, glow: !0, className: tS.Ph }),
            null != A &&
                (0, s.jsx)(a.animated.div, {
                    className: tS.AK,
                    style: { opacity: (0, V.a)(C.to([0, 1], [1, 0])) },
                    children: (0, s.jsx)("div", { className: i()(tS.LC, tS.Ge), style: j }),
                }),
            (0, s.jsxs)(a.animated.div, {
                className: tS.IC,
                style: {
                    backdropFilter: (0, V.Q)(C.to([0, 1], [5, 0]).to((e) => `blur(${e}px)`)),
                    filter: (0, V.Q)(C.to([0, 1], [0.8, 1]).to((e) => `brightness(${e})`)),
                },
                children: [
                    h.isAnimated
                        ? (0, s.jsx)(S._M, {
                              id: "QuestBarContentExpanded_heroAnimated",
                              children: (e) => (0, s.jsx)(tj, { ref: e, autoPlay: !0, asset: h, className: tS.LO }),
                          })
                        : (0, s.jsx)(S._M, {
                              id: "QuestBarContentExpanded_heroStatic",
                              children: (e) => (0, s.jsx)("img", { ref: e, alt: "", className: tS.LO, src: h.url }),
                          }),
                    (0, s.jsx)("div", { className: tS.tV }),
                ],
            }),
        ],
    });
}
function ty(e) {
    let { quest: t } = e,
        { hasAlreadyLinked: n, onClickGameTitle: l } = r.useContext(K);
    return !0 !== n ? null : (0, s.jsx)(e0.A, { quest: t, hasAlreadyLinked: n, onClickGameTitle: l });
}
function tQ(e) {
    let { activeScreen: t, selectPlatform: n } = e,
        { quest: l, taskDetails: i } = r.useContext($);
    return (0, ek.YW)(t)
        .with(f.X0.SELECT, () => (0, s.jsx)(tA, { onConsole: () => n(z.fO.CONSOLE), onDesktop: () => n(z.fO.DESKTOP) }))
        .with(f.X0.DESKTOP, () => ((0, A.I6)(l) ? (0, s.jsx)(ty, { quest: l }) : (0, s.jsx)(tE, { quest: l })))
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
    return (0, s.jsxs)(tm, {
        children: [
            (0, s.jsx)(tQ, { activeScreen: i, selectPlatform: o }),
            i !== f.X0.SELECT &&
                (0, s.jsxs)("div", {
                    className: tS.oG,
                    children: [
                        x &&
                            (0, s.jsx)(eG.K, {
                                size: "sm",
                                "aria-label": en.intl.string(en.t["13/7kX"]),
                                onClick: () => o(null),
                                icon: eH.n,
                                variant: "secondary",
                            }),
                        (0, s.jsx)(ey, {
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
        o = (0, E.Hv)() && n.userStatus?.completedAt == null,
        u = r.useCallback(() => {
            if (o) {
                ((0, ec.Y5)({
                    questId: n.id,
                    questContent: f.uF.QUEST_BAR_V2,
                    questContentCTA: F.Cy.QUEST_ACCESS_SUSPENDED,
                    sourceQuestContent: f.uF.QUEST_BAR_V2,
                }),
                    (0, v.FS)());
                return;
            }
            (0, v.d5)({
                quest: n,
                questContent: f.uF.QUEST_BAR_V2,
                sourceQuestContent: f.uF.QUEST_BAR_V2,
                sourceQuestContentCTA: F.Cy.QUEST_BAR_VIDEO_QUEST_PREVIEW,
            });
        }, [n, o]);
    return (0, s.jsxs)(tm, {
        children: [
            (0, s.jsx)(tR, { onClick: u }),
            (0, s.jsx)(ey, {
                parentContainerRef: t,
                awaitingConsoleConnections: !1,
                hasMadeProgress: i,
                isProgressing: a,
                sourceQuestContent: f.uF.QUEST_BAR_V2,
            }),
        ],
    });
}
function tF(e) {
    let { parentContainerRef: t } = e,
        { quest: n, taskDetails: l } = r.useContext($),
        i = l.percentComplete > 0,
        a = (0, E.Vn)(n);
    return (0, s.jsx)(tm, {
        children: (0, s.jsx)(ey, {
            parentContainerRef: t,
            awaitingConsoleConnections: !1,
            hasMadeProgress: i,
            isProgressing: a,
            sourceQuestContent: f.uF.QUEST_BAR_V2,
        }),
    });
}
function tB(e) {
    let { parentContainerRef: t } = e,
        { quest: n } = r.useContext($);
    return (0, A.t)({ quest: n }) || (0, A.g5)(n) || (0, A.fE)({ quest: n }) || (0, A.I6)(n)
        ? (0, s.jsx)(tN, { parentContainerRef: t })
        : (0, A.vv)(n)
          ? (0, s.jsx)(tU, { parentContainerRef: t })
          : (0, s.jsx)(tF, { parentContainerRef: t });
}
function tI(e) {
    let { overlayRef: t, containerRef: n } = e,
        { quest: l, taskDetails: o } = r.useContext($),
        { expansionSpring: u } = r.useContext(M),
        c = r.useRef(null),
        d = r.useRef(null),
        x = (0, E.I3)(l),
        C = null != x ? x.percentComplete : o.percentComplete;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(a.animated.div, {
                className: i()(tS.tv, tS.ag),
                style: {
                    backgroundImage: `linear-gradient(90deg, ${k}, ${w})`,
                    opacity: (0, V.a)(u.to({ range: [0, 1], output: [1, 0] })),
                },
            }),
            (0, s.jsxs)("div", {
                className: tS.Fe,
                ref: (e) => {
                    ("function" == typeof n ? n(e) : null != n && (n.current = e), null != e && (d.current = e));
                },
                children: [
                    (0, s.jsx)(eV, {}),
                    (0, s.jsx)("div", { className: tS.yF }),
                    (0, s.jsx)(eF, { overlayRef: t, progressBarRef: c, isHovered: !1 }),
                    (0, s.jsx)(eb, {
                        contentLocation: "expanded",
                        progressBarRef: c,
                        isExpanded: !0,
                        percentComplete: C,
                        popoutTargetElementRef: d,
                    }),
                    (0, s.jsx)(tB, { parentContainerRef: d }),
                ],
            }),
            (0, s.jsx)("div", {
                className: i()(tS.tv, tS.Sx),
                style: { backgroundImage: `linear-gradient(90deg, ${k}, ${w})` },
            }),
        ],
    });
}
async function tb(e, t, n, s) {
    (0, A.vv)(e)
        ? await (0, v.e0)(e, { questContent: t, questContentCTA: n, sourceQuestContent: s, sourceQuestContentCTA: n })
        : (0, ex.vA)(e)
          ? await (0, ez.Oy)(e.id, { questContent: t, questContentCTA: n, sourceQuestContent: s })
          : (0, ez.Oy)(e.id, { questContent: t, questContentCTA: n, sourceQuestContent: s });
}
let tO = r.forwardRef(function (e, t) {
    let { children: n, className: l, overlayRef: o } = e,
        { collapsedHeight: u, isExpanded: c, isExpansionAnimationComplete: d, quest: x } = r.useContext($),
        { expansionSpring: C } = r.useContext(M),
        { launchInGameActivity: m } = (0, E.zW)(x),
        p = (0, ex.vA)(x),
        _ = r.useCallback(async () => {
            let e = p ? F.Cy.START_QUEST : F.Cy.ACCEPT_QUEST;
            (await tb(x, f.uF.QUEST_BAR_V2, e, f.uF.QUEST_BAR_V2), p && m());
        }, [x, m, p]),
        h = x.userStatus?.enrolledAt != null;
    return (0, s.jsxs)(a.animated.div, {
        "aria-hidden": !c,
        className: i()(l, tS.Rh, { [tS.iH]: h }),
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
                    ? (0, s.jsx)(tI, { overlayRef: o, containerRef: t })
                    : (0, s.jsx)(tT, { isCtaInteractable: !c || d, containerRef: t, onAcceptQuest: _ }),
            }),
        ],
    });
});
var tV = n(717695);
function tq() {
    let {
            expansionSpring: e,
            animatedComponentProps: t,
            recalculateAnimationPositions: n,
            mountPoints: l,
        } = r.useContext(M),
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
var tL = n(621466),
    tk = n(192308),
    tw = n(652215),
    tM = n(731738),
    tP = n(807393),
    tD = n(260364),
    tG = n(920690);
function tH(e) {
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
function tW() {
    return (
        r.useEffect(() => {
            C.trigger();
        }, []),
        null
    );
}
function tz(e) {
    let { quest: t } = e,
        n = (0, g.L)({ quest: t, location: z.rE.QUESTS_BAR }),
        l = (0, h.s)(),
        o = (0, u.bG)([p.A], () => null != p.A.questEnrollmentBlockedUntil),
        { isQuestBarVisible: d, reason: x } = (0, R.TQ)({ quest: t }),
        C = (0, u.bG)([m.A], () => m.A.hasLayers()),
        _ = r.useRef(null),
        T = r.useMemo(() => (0, A.vv)(t), [t]),
        y = t.id,
        Q = t.userStatus?.enrolledAt != null,
        N = (0, c.Ay)(Q),
        U = t.userStatus?.completedAt != null,
        { hasError: B, isLoading: I } = (0, S.zT)(),
        b = r.useContext(tV.Z),
        O = b || (l && d && !I && !o),
        {
            isExpanded: V,
            setIsExpanded: q,
            expandQuestBar: L,
            isExpansionAnimationComplete: k,
            isVisibilityAnimationAtRest: w,
            expansionSpring: M,
            visibilitySpring: P,
            springConfig: G,
        } = (function (e) {
            let { isQuestAccepted: t, isQuestCompleted: n, isQuestBarVisible: s } = e,
                l = (0, u.bG)([Z.Ay], () => Z.Ay.useReducedMotion),
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
                E = t ? z.ZV : z.Ko,
                [{ expansionSpring: _ }, h] = (0, ee.z)(() => ({
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
            let { visibilitySpring: g } = (0, ee.z)({
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
                    (s !== C.current && x(!1), (C.current = s));
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
        })({ isQuestAccepted: Q, isQuestCompleted: U, isQuestBarVisible: O }),
        {
            handleCtxMenuOpened: H,
            handleCtxMenuClosed: W,
            handleCtxMenuSelection: $,
            handleGameSheetOpened: K,
            handleGameSheetClosed: X,
            handleFocusWithoutDelay: J,
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
                    (C(!1), d.current || i || s(!1));
                }, [i, s]),
                h = r.useCallback(() => {
                    (C(!1), i || s(!1), (d.current = !1));
                }, [i, s]),
                g = r.useCallback(() => {
                    p(!0);
                }, []),
                A = r.useCallback(() => {
                    (p(!1), s(!1));
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
                        (window.clearTimeout(c.current),
                            ((0, tL.vq)(e?.relatedTarget, Node) && e.currentTarget.contains(e.relatedTarget)) ||
                                x ||
                                m ||
                                d.current ||
                                s(!1));
                    },
                    [x, m, s],
                ),
                v = r.useCallback(() => {
                    ((0, ec.av)({
                        questId: t.id,
                        event: tw.HAw.QUEST_HOVER,
                        properties: {
                            content_id: f.uF.QUEST_BAR,
                            content_name: (0, F.jO)(f.uF.QUEST_BAR),
                            impression_id: u.current?.getId(),
                        },
                        shouldExtendSession: !0,
                        sourceQuestContent: f.uF.QUEST_BAR_V2,
                    }),
                        (d.current = !0),
                        S({ withDelay: !0 }));
                }, [S, u, t.id]),
                T = r.useCallback(() => {
                    ((0, ec.av)({
                        questId: t.id,
                        event: tw.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: f.uF.QUEST_BAR,
                            content_name: (0, F.jO)(f.uF.QUEST_BAR),
                            impression_id: u.current?.getId(),
                        },
                        sourceQuestContent: f.uF.QUEST_BAR_V2,
                    }),
                        (d.current = !1),
                        R());
                }, [R, u, t.id]);
            (r.useEffect(() => {
                m && d.current && T();
            }, [m, T]),
                r.useLayoutEffect(() => {
                    a && !o && d.current && l();
                }, [l, a, o]),
                r.useLayoutEffect(() => {
                    i || !a || o || d.current || s(!1);
                }, [a, i, o, s]));
            let y = (0, tk.useHasAnyModalOpen)();
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
            setIsExpanded: q,
            expandQuestBar: L,
            isQuestCompleted: U,
            isQuestAccepted: Q,
            prevIsQuestAccepted: N,
            impressionRef: _,
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
        (r.useEffect(() => {
            n &&
                ((0, ec.av)({
                    questId: t.id,
                    event: tw.HAw.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        content_id: f.uF.QUEST_BAR,
                        content_name: (0, F.jO)(f.uF.QUEST_BAR),
                        reason: "asset_loading_error",
                        impression_id: d.current?.getId(),
                    },
                    sourceQuestContent: f.uF.QUEST_BAR_V2,
                }),
                tP.A.increment({
                    name: tM.K.QUEST_CONTENT_RENDERING_FAILURE,
                    tags: [
                        `quest_id:${t.id}`,
                        `quest_content:${(0, F.jO)(f.uF.QUEST_BAR)}`,
                        "reason:asset_loading_error",
                    ],
                }));
        }, [n, d, t.id]),
            r.useEffect(() => {
                s ||
                    (0, ec.av)({
                        questId: t.id,
                        event: tw.HAw.QUEST_CONTENT_RENDERING_FAILURE,
                        properties: {
                            content_id: f.uF.QUEST_BAR,
                            content_name: (0, F.jO)(f.uF.QUEST_BAR),
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
                    (0, ec.av)({
                        questId: t.id,
                        event: tw.HAw.QUEST_CONTENT_RENDERING_FAILURE,
                        properties: {
                            content_id: f.uF.QUEST_BAR,
                            content_name: (0, F.jO)(f.uF.QUEST_BAR),
                            reason: o,
                            impression_id: d.current?.getId(),
                        },
                        sourceQuestContent: f.uF.QUEST_BAR_V2,
                    });
            }, [l, i, a, t.id, o, d]),
            r.useEffect(() => {
                ((!u || c) && tD.A.clearTracking(), l && i && !a && !n && s && tD.A.stopTracking(t.id));
            }, [u, c, l, i, a, n, s, t.id]));
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
        impressionRef: _,
    });
    let er = r.useRef(null),
        el = r.useRef(null),
        ei = r.useRef(null),
        eo = (0, E.fc)(t),
        eu = (0, E.UH)(t);
    if (
        (r.useEffect(() => {
            T && (0, v.l9)();
        }, [T]),
        !l || (!O && w && !I) || (B && !b))
    )
        return (
            B && !b ? n.log("Not rendered due to asset error") : l || n.log("Not rendered due to ineligibility"), null
        );
    let ed = 70 + 78 * !!U;
    return (0, s.jsx)(j.Z, {
        questOrQuests: t,
        questContent: f.uF.QUEST_BAR_V2,
        overrideVisibility: !C && O,
        onImpression: eu,
        sourceQuestContent: f.uF.QUEST_BAR_V2,
        children: (e, n) => (
            (_.current = n.current),
            (0, s.jsxs)("div", {
                className: tG.dK,
                children: [
                    O &&
                        (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)(tH, { questId: y, isExpanded: V }), (0, s.jsx)(tW, {})],
                        }),
                    (0, s.jsx)(a.animated.div, {
                        "data-testid": "quest-bar-container",
                        "aria-hidden": !O,
                        onMouseLeave: es,
                        onMouseEnter: en,
                        onFocus: J,
                        onBlur: et,
                        className: i()(tG.iE, { [tG.Xc]: !O, [tG.uv]: O && w }),
                        style: { height: P.to({ range: [0, 1], output: [0, ed] }) },
                        children: (0, s.jsx)(a.animated.div, {
                            className: i()(tG.FG, { [tG.E$]: V, [tG.KA]: Q }),
                            children: (0, s.jsx)(tC, {
                                springConfig: G,
                                isExpanded: V,
                                children: (0, s.jsx)(D, {
                                    expandedContentRef: er,
                                    collapsedContentRef: el,
                                    expansionSpring: M,
                                    children: (0, s.jsxs)(Y, {
                                        quest: t,
                                        taskDetails: eo,
                                        isExpanded: V,
                                        isExpansionAnimationComplete: k,
                                        onCtxMenuClose: W,
                                        onCtxMenuOpen: H,
                                        onCtxMenuSelect: $,
                                        onGameSheetOpen: K,
                                        onGameSheetClose: X,
                                        collapsedHeight: ed,
                                        children: [
                                            (0, s.jsx)(
                                                eL,
                                                { ref: el, className: tG.Qs, overlayRef: ei },
                                                U ? "collapsed-with-rewards" : "collapsed-without-rewards",
                                            ),
                                            (0, s.jsx)(tO, {
                                                className: tG.Qs,
                                                overlayRef: ei,
                                                ref: er,
                                                children: (0, s.jsxs)(s.Fragment, {
                                                    children: [(0, s.jsx)(tq, {}), !Q && (0, s.jsx)(ea, {})],
                                                }),
                                            }),
                                            (0, s.jsx)("div", { ref: ei, className: tG.Lw }),
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
function t$(e) {
    let { decisionId: t } = e,
        n = (0, u.bG)([m.A], () => m.A.hasLayers());
    return (0, s.jsx)(j.Z, {
        adContentId: t,
        adCreativeType: o.p.NO_FILL,
        questContent: f.uF.QUEST_BAR_V2,
        overrideVisibility: !n,
        sourceQuestContent: f.uF.QUEST_BAR_V2,
        children: (e) => (0, s.jsx)("div", { ref: e, "aria-hidden": !0, className: tG.ui }),
    });
}
let tK =
    221552 == n.j
        ? function () {
              let e = (0, R.dN)(),
                  t = (0, _.A)(f.p9.DESKTOP_ACCOUNT_PANEL_AREA, "useNoFillAd");
              return null == e && null != t
                  ? (0, s.jsx)(t$, { decisionId: t.decisionId })
                  : null == e
                    ? null
                    : (0, s.jsx)(
                          S.y5,
                          {
                              source: z.rE.QUESTS_BAR,
                              adCreativeId: e.id,
                              adCreativeType: o.p.QUEST,
                              children: (0, s.jsx)(tz, { quest: e }),
                          },
                          e.id,
                      );
          }
        : null;
