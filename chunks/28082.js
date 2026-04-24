n.d(t, { A: () => tk, Y: () => tU });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(419354),
    o = n(17928),
    c = n(475743),
    u = n(840251),
    d = n(688151);
let p = new u.E([], d.$G.QUEST_BAR_RENDERED, { location: "quest bar rendered" });
var h = n(186111),
    m = n(859703),
    _ = n(507107),
    f = n(890687),
    g = n(971276),
    A = n(851936),
    x = n(792620),
    E = n(241124),
    C = n(73473),
    T = n(371912),
    S = n(545986),
    b = n(939249),
    v = n(834730),
    j = n(290136),
    I = n(661531),
    y = n(365199),
    R = n(590202),
    N = n(971649),
    M = n(901406),
    O = n(270045),
    U = n(57718),
    k = n(398025);
n(321073);
var P = n(340287),
    w = n(765671);
let L = "#00000000",
    D = "#CDD8FF1A",
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
    B = s.forwardRef(function (e, t) {
        let { children: n, id: l, inState: a, isTextTransition: o = !1 } = e,
            {
                recalculateAnimationPositions: c,
                registerComponent: u,
                unregisterComponent: d,
                expansionSpring: p,
                mountPoints: h,
            } = s.useContext(F),
            m = s.useRef(null),
            _ = s.useRef(null),
            f = s.useRef(void 0);
        s.useEffect(() => {
            c();
        }, [c]),
            s.useLayoutEffect(() => {
                let e = m.current;
                return (
                    null != e && u(e, l, a),
                    () => {
                        null != e && d(l, a);
                    }
                );
            }, [l, a, u, d]);
        let g = s.useCallback(
            (e) => {
                let { height: t } = e;
                f.current !== t && (c(), (f.current = t));
            },
            [c],
        );
        (0, w.i4)(m, g);
        let A = h.get(l)?.current,
            x = null;
        return (
            null == A
                ? (x = null)
                : o && null != p
                  ? (x = (0, i.jsxs)(i.Fragment, {
                        children: [
                            "collapsed" === a &&
                                (0, P.createPortal)(
                                    (0, i.jsx)(r.animated.div, {
                                        style: {
                                            position: "absolute",
                                            opacity: (0, k.a)(p.to({ range: [0, 1], output: [1, 0] })),
                                        },
                                        children: n(_),
                                    }),
                                    A,
                                ),
                            "expanded" === a &&
                                (0, P.createPortal)(
                                    (0, i.jsx)(r.animated.div, {
                                        style: {
                                            position: "absolute",
                                            opacity: (0, k.a)(p.to({ range: [0, 1], output: [0, 1] })),
                                        },
                                        children: n(_),
                                    }),
                                    A,
                                ),
                        ],
                    }))
                  : "collapsed" === a && (x = (0, P.createPortal)(n(_), A)),
            (0, i.jsxs)("div", {
                style: { opacity: +((null == x && "collapsed" === a) || null == A) },
                ref: t,
                children: [n(m), x],
            })
        );
    }),
    G = (e) => {
        let { children: t, expandedContentRef: n, collapsedContentRef: l, expansionSpring: a } = e,
            [r, o] = s.useState({}),
            [c, u] = s.useState([]),
            [d, p] = s.useState(() => new Map()),
            h = s.useCallback((e, t, n) => {
                o((i) => {
                    let s = i[t] ?? { expanded: null, collapsed: null };
                    return { ...i, [t]: { ...s, [n]: e } };
                }),
                    p((e) => {
                        let n = new Map(e);
                        return n.set(t, s.createRef()), n;
                    });
            }, []),
            m = s.useCallback((e, t) => {
                let n = !1;
                o((i) => {
                    let s = i[e] ?? { expanded: null, collapsed: null };
                    return (s[t] = null), (n = null == s.expanded && null == s.collapsed), { ...i, [e]: s };
                }),
                    n &&
                        p((t) => {
                            let n = new Map(t);
                            return n.delete(e), n;
                        });
            }, []),
            _ = s.useCallback(() => {
                let e = [];
                for (let t in r) {
                    if (null == r[t] || null == n.current || null == l.current) continue;
                    let i = r[t].collapsed,
                        s = r[t].expanded;
                    if (null == i || null == s) continue;
                    let a = s.getBoundingClientRect(),
                        o = n.current.getBoundingClientRect(),
                        c = i.getBoundingClientRect(),
                        u = l.current.getBoundingClientRect(),
                        d = a.top - o.top + 12,
                        p = c.top - u.top,
                        h = a.left - o.left + 12,
                        m = c.left - u.left,
                        _ = -a.right + o.right + 12,
                        f = -c.right + u.right;
                    e.push({
                        id: t,
                        collapsedLeft: m,
                        expandedLeft: h,
                        collapsedRight: f,
                        expandedRight: _,
                        collapsedTop: p,
                        expandedTop: d,
                        width: a.width,
                    });
                }
                u(e);
            }, [r, n, l, u]);
        return (0, i.jsx)(F.Provider, {
            value: {
                registerComponent: h,
                unregisterComponent: m,
                animatedComponents: r,
                expandedContentRef: n,
                collapsedContentRef: l,
                recalculateAnimationPositions: _,
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
    W = (e) => {
        let {
                children: t,
                isExpanded: n,
                isExpansionAnimationComplete: l,
                onCtxMenuClose: a,
                onCtxMenuOpen: r,
                onCtxMenuSelect: o,
                onGameSheetOpen: c,
                onGameSheetClose: u,
                collapsedHeight: d,
                quest: p,
                taskDetails: h,
            } = e,
            m = s.useMemo(
                () => ({
                    isExpanded: n,
                    isExpansionAnimationComplete: l,
                    onCtxMenuClose: a,
                    onCtxMenuOpen: r,
                    onCtxMenuSelect: o,
                    onGameSheetOpen: c,
                    onGameSheetClose: u,
                    collapsedHeight: d,
                    quest: p,
                    taskDetails: h,
                }),
                [n, l, a, r, o, c, u, d, p, h],
            );
        return (0, i.jsx)(V.Provider, { value: m, children: t });
    };
var Q = n(775602),
    H = n(646764),
    q = n(717421);
let z = () => {
    let e = document.body.style.getPropertyValue("--custom-guild-sidebar-width").slice(0, -2);
    return parseInt("" !== e ? e : "375");
};
var K = n(985018),
    $ = n(173399);
let Y = (e) => {
    let { isFullyExpanded: t, partnerBranding: n } = e,
        l = {
            label: !(function () {
                let [e, t] = s.useState(() => 270 > z());
                return (
                    s.useEffect(() => {
                        let e = new MutationObserver(() => {
                            t(270 > z());
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
        p = l ? -4 : 6;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(r.animated.div, {
                className: $.tE,
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
                children: (0, i.jsx)(H.A, {
                    learnMoreStyle: "text",
                    learnMoreFontSize: t ? 9 : void 0,
                    quest: u,
                    questContent: _.uF.QUEST_BAR_V2,
                    autoplay: t && !c,
                    sourceQuestContent: _.uF.QUEST_BAR_V2,
                    style: { width: 48, height: 48, marginRight: 8, borderRadius: 6 },
                }),
            }),
            (0, i.jsxs)(r.animated.div, {
                className: a()($.pm, { [$.nd]: l }),
                style: {
                    transform: (0, r.to)(
                        [d.to({ range: [0, 1], output: [0, -48] }), d.to({ range: [0, 1], output: [0, p] })],
                        (e, t) => `translate(${e}px, ${t}px)`,
                    ),
                },
                children: [
                    (0, i.jsx)("div", { className: a()({ [$.Iu]: !l }), children: n }),
                    (0, i.jsx)(r.animated.div, {
                        className: a()($.ol, { [$.yZ]: l }),
                        style: { opacity: (0, k.a)(d.to({ range: [0, 1], output: [l ? 1 : 0.7, 0] })) },
                        children: (0, i.jsx)(v.E, {
                            color: "always-white",
                            lineClamp: 1,
                            variant: "text-xs/medium",
                            children: K.intl.string(K.t["3mgEQf"]),
                        }),
                    }),
                ],
            }),
        ],
    });
};
var X = n(173839);
let Z = (0, r.animated)(U.Ay),
    J = () => {
        let e = (0, N.go)(),
            { expansionSpring: t } = s.useContext(F),
            {
                onCtxMenuOpen: n,
                onCtxMenuClose: l,
                onCtxMenuSelect: o,
                isExpanded: c,
                isExpansionAnimationComplete: u,
                quest: d,
            } = s.useContext(V),
            p = s.useCallback(() => {
                (0, S.Zc)(d, {
                    content: _.uF.QUEST_BAR_V2,
                    ctaContent: R.Cy.OPEN_DISCLOSURE,
                    sourceQuestContent: _.uF.QUEST_BAR_V2,
                });
            }, [d]),
            h = s.useCallback(() => {
                (0, M.pu)(d, {
                    content: _.uF.QUEST_BAR_V2,
                    ctaContent: R.Cy.OPEN_GAME_LINK,
                    impressionId: e,
                    sourceQuestContent: _.uF.QUEST_BAR_V2,
                });
            }, [e, d]),
            m = c && u,
            f = (0, i.jsx)(b.D, {
                onClick: h,
                className: a()(X.vk, { [X.wm]: m }),
                children: (0, i.jsx)(Z, {
                    quest: d,
                    withGameTile: !1,
                    logotypeClassName: X.Iu,
                    logotypeStyle: {
                        height: 24,
                        maxWidth: 92,
                        transform: (0, r.to)([t.to({ range: [0, 1], output: [1, 1] })], (e) => `scale(${e})`),
                    },
                }),
            });
        return (0, i.jsxs)(r.animated.div, {
            className: a()(X.iE, X.Ht, { [X.tT]: m }),
            style: { transform: (0, r.to)([t.to({ range: [0, 1], output: [6, 0] })], (e) => `translateY(${e}px)`) },
            children: [
                (0, i.jsx)(r.animated.div, {
                    className: X.Tu,
                    style: { opacity: (0, k.a)(t.to({ range: [0, 1], output: [0, 1] })) },
                }),
                (0, i.jsx)(Y, { isFullyExpanded: m, partnerBranding: f }),
                (0, i.jsxs)(r.animated.div, {
                    className: X.P0,
                    style: { opacity: (0, k.a)(t.to({ range: [0, 1], output: [0, 1] })) },
                    children: [
                        (0, i.jsxs)(b.D, {
                            className: X.y8,
                            onClick: p,
                            children: [
                                (0, i.jsx)(v.E, {
                                    color: "always-white",
                                    variant: "text-xs/normal",
                                    children: K.intl.string(K.t.o6FLcF),
                                }),
                                (0, i.jsx)(j.c, { color: I.A.colors.WHITE, className: X.P$ }),
                            ],
                        }),
                        (0, i.jsx)(O.C, {
                            onOpen: n,
                            onClose: l,
                            onSelect: o,
                            questContent: _.uF.QUEST_BAR_V2,
                            quest: d,
                            shouldShowDisclosure: !0,
                            showShareLink: !0,
                            sourceQuestContent: _.uF.QUEST_BAR_V2,
                            children: (e) =>
                                (0, i.jsx)(b.D, {
                                    ...e,
                                    className: a()(X.uJ, X.rb),
                                    "aria-label": K.intl.string(K.t.DEoVWZ),
                                    children: (0, i.jsx)(y.j, {
                                        size: "md",
                                        color: "currentColor",
                                        className: a()(X.Bx, X.ON),
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
    ei = n(921853),
    es = n(793574),
    el = n(29292),
    ea = n(838077),
    er = n(651892),
    eo = n(801365),
    ec = n(814793),
    eu = n(753386),
    ed = n(862611),
    ep = n(758836),
    eh = n(519508);
function em(e) {
    let { quest: t, sourceQuestContent: n, taskDetails: s } = e;
    return (0, i.jsx)(ee.$, {
        variant: "primary",
        fullWidth: !0,
        onClick: () => {
            let e = t.userStatus?.enrolledAt == null ? R.Cy.ACCEPT_QUEST : R.Cy.WATCH_VIDEO;
            (0, S.d5)({ quest: t, questContent: _.uF.QUEST_BAR_V2, sourceQuestContent: n, sourceQuestContentCTA: e });
        },
        size: "sm",
        text: (0, eu.WM)(s),
    });
}
let e_ = (e) => {
        let { quest: t, sourceQuestContent: n } = e,
            s = (0, N.go)(),
            l = (0, er.wr)(t);
        return (0, i.jsx)(ee.$, {
            size: "sm",
            fullWidth: !0,
            onClick: () =>
                (0, M.pu)(t, {
                    content: _.uF.QUEST_BAR_V2,
                    ctaContent: R.Cy.OPEN_GAME_LINK,
                    impressionId: s,
                    sourceQuestContent: n,
                }),
            text: l,
        });
    },
    ef = (e) => {
        let { quest: t, sourceQuestContent: n } = e,
            s = (0, N.vU)()?.getId();
        return (0, i.jsx)(ee.$, {
            fullWidth: !0,
            onClick: () =>
                (0, M.se)(
                    { quest: t },
                    {
                        content: _.uF.QUEST_BAR_V2,
                        ctaContent: R.Cy.CONNECT_CONSOLE,
                        impressionId: s,
                        sourceQuestContent: n,
                    },
                ),
            size: "sm",
            text: K.intl.string(K.t.csptqV),
        });
    },
    eg = (e) => {
        let { quest: t } = e,
            n = (0, ea.NA)({ quest: t }),
            { launchInGameActivity: s } = (0, f.zW)(t);
        return (0, ec.vA)(t)
            ? (0, i.jsx)(ee.$, {
                  fullWidth: !0,
                  variant: "primary",
                  icon: (0, S.Oz)(t),
                  onClick: s,
                  size: "sm",
                  text: n,
              })
            : null;
    },
    eA = (e) => {
        let {
                quest: t,
                sourceQuestContent: n,
                taskDetails: s,
                popoutTargetElementRef: l,
                onGameSheetOpened: a,
                onGameSheetClosed: r,
            } = e,
            { applications: o } = s;
        return (0, i.jsx)(ed.A, {
            quest: t,
            sourceQuestContent: n,
            applications: o ?? [],
            targetElementRef: l,
            onGameSheetOpened: a,
            onGameSheetClosed: r,
            children: (e) =>
                (0, i.jsx)(ee.$, {
                    variant: "secondary",
                    fullWidth: !0,
                    size: "sm",
                    text: K.intl.string(K.t["93PTEs"]),
                    ...e,
                }),
        });
    },
    ex = (e) => {
        let { quest: t, ctaLabel: n, onClick: l, questContent: a = _.uF.QUEST_BAR_V2, sourceQuestContent: r, ...o } = e,
            c = (0, T.ix)({ quest: t, questContent: a, sourceQuestContent: r }),
            u = s.useCallback(
                (e) => {
                    l?.(e),
                        (0, eo.ks)(t.config) && t.userStatus?.claimedAt != null
                            ? (0, el.Cz)({
                                  tab: ep.G2.ORBS,
                                  analyticsLocations: [],
                                  analyticsSource: es.A.QUEST_HOME_PAGE,
                              })
                            : c();
                },
                [l, t.config, t.userStatus?.claimedAt, c],
            );
        return (0, i.jsx)(ee.$, {
            fullWidth: !0,
            onClick: u,
            text: n ?? K.intl.string(K.t.cfY4PE),
            ...o,
            size: o.size === en.$n.Sizes.MEDIUM ? "md" : "sm",
        });
    },
    eE = (e) => {
        let {
                sourceQuestContent: t,
                awaitingConsoleConnections: n,
                hasMadeProgress: l,
                isProgressing: a,
                activeScreen: r,
                popoutTargetElementRef: o,
            } = e,
            { quest: c, onGameSheetOpen: u, onGameSheetClose: d, taskDetails: p } = s.useContext(V),
            h = c.userStatus?.completedAt != null,
            m = (0, x.vv)(c),
            f = r !== _.X0.SELECT && !l && !a,
            g = null;
        return (
            h
                ? (g = (0, i.jsx)(ex, { quest: c, sourceQuestContent: t }))
                : m
                  ? (g = (0, i.jsx)(em, { quest: c, sourceQuestContent: t, taskDetails: p }))
                  : (0, ec.vA)(c)
                    ? (g = (0, i.jsx)(eg, { quest: c }))
                    : r === _.X0.CONSOLE && n
                      ? (g = (0, i.jsx)(ef, { quest: c, sourceQuestContent: t }))
                      : f && (0, ec.ui)(c)
                        ? (g = (0, i.jsx)(eA, {
                              quest: c,
                              sourceQuestContent: t,
                              taskDetails: p,
                              popoutTargetElementRef: o,
                              onGameSheetOpened: u,
                              onGameSheetClosed: d,
                          }))
                        : f && (g = (0, i.jsx)(e_, { quest: c, sourceQuestContent: t })),
            null == g ? null : (0, i.jsx)("div", { className: eh.lO, children: g })
        );
    };
function eC(e) {
    let t = s.useRef(null);
    return (0, i.jsxs)("div", {
        className: eh.oG,
        ref: t,
        children: [
            e.showBackButton &&
                (0, i.jsx)(et.K, {
                    size: "sm",
                    "aria-label": K.intl.string(K.t["13/7kX"]),
                    onClick: e.onBack,
                    icon: ei.n,
                    variant: "secondary",
                }),
            (0, i.jsx)(eE, { ...e, popoutTargetElementRef: t }),
        ],
    });
}
var eT = n(106778),
    eS = n(851110),
    eb = n(947638);
let ev = (e) => {
    let { overlayRef: t, progressBarRef: n, isHovered: l } = e,
        { quest: u, isExpanded: d } = s.useContext(V),
        { expansionSpring: p } = s.useContext(F),
        { completionSpring: m, startCompletionAnimation: _ } = (function () {
            let [{ spring: e }, t] = (0, q.z)(() => ({ spring: 0 }), "animate-always");
            return {
                completionSpring: e,
                startCompletionAnimation: s.useCallback(() => {
                    t({ spring: 1 }), t({ spring: 0, delay: 2e3 });
                }, [t]),
            };
        })(),
        f = u.userStatus?.completedAt != null,
        g = s.useRef(!1),
        A = (0, o.bG)([Q.A], () => Q.A.useReducedMotion),
        x = s.useRef(null),
        E = (0, o.bG)([h.A], () => h.A.hasLayers()),
        C = (0, c.A)(E),
        [T, S] = s.useState(null),
        [b, v] = s.useState(null),
        j = s.useRef(new eT.OH({ gravity: 0, wind: 0 })),
        I = (0, eT.f9)(T, b),
        y = s.useMemo(() => ["#51BC9D"], []),
        R = s.useCallback(() => {
            if (A) return;
            let e = n.current,
                t = x.current;
            if (null != t && null != e && I.isReady) {
                var i, s, l, a;
                let { x: n, y: r } = e.getBoundingClientRect(),
                    { x: o, y: c } = t.getBoundingClientRect();
                I.createMultipleConfetti(
                    ((i = n - o),
                    (s = r - c),
                    (l = e.clientHeight),
                    (a = e.clientWidth),
                    {
                        ...eS.Mw,
                        position: { type: "static-random", minValue: { x: i, y: s }, maxValue: { x: i + l, y: s + a } },
                        velocity: { type: "static-random", minValue: { x: -20, y: -20 }, maxValue: { x: 20, y: 20 } },
                        opacity: { type: "linear", value: 2, addValue: -0.1 },
                        dragCoefficient: { type: "static", value: 0.166 },
                        size: { type: "static-random", minValue: 2, maxValue: 3 },
                    }),
                    100,
                );
            }
        }, [n, x, I, A]),
        N = (0, c.A)(d);
    return (s.useEffect(() => {
        f && d && !N && (_(), R());
    }, [d, f, _, R, N]),
    s.useEffect(() => {
        f &&
            !E &&
            C &&
            setTimeout(() => {
                _(), R();
            }, 200);
    }, [f, C, E, _, R]),
    s.useEffect(() => {
        I.isReady && (!g.current && f && (_(), R()), (g.current = f));
    }, [f, g, R, _, I]),
    s.useEffect(() => {
        l && f && (_(), R());
    }, [l, f, _, R]),
    A)
        ? null
        : (0, i.jsxs)("div", {
              className: eb.iE,
              "aria-hidden": "true",
              ref: x,
              children: [
                  (0, i.jsx)(r.animated.div, { className: eb.Tp, style: { opacity: (0, k.a)(m) } }),
                  (0, i.jsx)(r.animated.div, { className: a()(eb.sJ, eb.ix), style: { opacity: (0, k.a)(m) } }),
                  (0, i.jsxs)(r.animated.div, {
                      className: eb.KG,
                      style: { transform: p.to({ range: [0, 1], output: [-35, 0] }).to((e) => `translateY(${e}px)`) },
                      children: [
                          (0, i.jsx)(eT.Fk, { ref: S, className: eb.t_, environment: j.current }),
                          (0, i.jsx)(eT.K_, {
                              ref: v,
                              sprites: ["/assets/b909790cf1d80597.svg"],
                              colors: y,
                              spriteWidth: eS.wn,
                              spriteHeight: eS.wn,
                          }),
                          null != t.current &&
                              (0, P.createPortal)(
                                  (0, i.jsx)(r.animated.div, {
                                      className: a()(eb.sJ, eb.d7),
                                      style: { opacity: (0, k.a)(m) },
                                  }),
                                  t.current,
                              ),
                      ],
                  }),
              ],
          });
};
var ej = n(453384),
    eI = n(460131);
let ey = (e) => {
    let {
            isExpanded: t,
            contentLocation: n,
            progressBarRef: l,
            percentComplete: a,
            activeScreen: r,
            popoutTargetElementRef: o,
        } = e,
        { quest: c, onGameSheetOpen: u, onGameSheetClose: d } = s.useContext(V),
        p = (0, ea.VX)(c),
        h = (0, ea.tH)({
            quest: c,
            isExpanded: t,
            activeScreen: r,
            sourceQuestContent: _.uF.QUEST_BAR_V2,
            popoutTargetElementRef: o,
            onGameSheetOpened: u,
            onGameSheetClosed: d,
        });
    return (0, i.jsxs)("div", {
        className: eI.Z0,
        children: [
            (0, i.jsx)(B, {
                inState: n,
                id: "progress-bar",
                ref: l,
                children: (e) =>
                    (0, i.jsx)(ej.A, {
                        ref: e,
                        style: "small",
                        percentComplete: a,
                        size: 42,
                        children: (0, i.jsx)(H.A, {
                            fullWidth: !0,
                            quest: c,
                            questContent: _.uF.QUEST_BAR_V2,
                            autoplay: !1,
                            sourceQuestContent: _.uF.QUEST_BAR_V2,
                        }),
                    }),
            }),
            (0, i.jsxs)("div", {
                className: eI.NZ,
                children: [
                    (0, i.jsx)(B, {
                        inState: n,
                        id: "progress-title",
                        children: (e) =>
                            (0, i.jsx)(v.E, {
                                ref: e,
                                className: eI.FZ,
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
                                className: eI.FZ,
                                color: "text-muted",
                                variant: "text-xs/normal",
                                children: h,
                            }),
                    }),
                ],
            }),
        ],
    });
};
var eR = n(78385);
function eN() {
    let { quest: e, onCtxMenuOpen: t, onCtxMenuClose: n, onCtxMenuSelect: l } = s.useContext(V),
        r = (0, f.S5)(e.config.expiresAt);
    return (0, i.jsxs)("div", {
        className: eR.pS,
        children: [
            (0, i.jsx)(v.E, {
                variant: "text-xxs/medium",
                className: a()(eR.Uu, eR.TK),
                children: K.intl.format(K.t["pX+fmn"], { expirationDate: r }),
            }),
            (0, i.jsx)(O.C, {
                onOpen: t,
                onClose: n,
                onSelect: l,
                questContent: _.uF.QUEST_BAR_V2,
                quest: e,
                shouldShowDisclosure: !1,
                showShareLink: !0,
                sourceQuestContent: _.uF.QUEST_BAR_V2,
                children: (e) =>
                    (0, i.jsx)(b.D, {
                        ...e,
                        className: eR.rb,
                        "aria-label": K.intl.string(K.t.DEoVWZ),
                        children: (0, i.jsx)(y.j, { size: "md", color: "currentColor", className: a()(eR.Bx, eR.U9) }),
                    }),
            }),
        ],
    });
}
var eM = n(249309);
let eO = s.forwardRef(function (e, t) {
    let { className: n, overlayRef: l } = e,
        { expansionSpring: o } = s.useContext(F),
        { quest: c, taskDetails: u, isExpanded: d, isExpansionAnimationComplete: p } = s.useContext(V),
        h = c.userStatus?.completedAt != null,
        m = (0, f.I3)(c),
        g = s.useRef(null),
        A = c.userStatus?.enrolledAt != null,
        x = null != m ? m.percentComplete : u.percentComplete,
        [E, C] = s.useState(!1);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            h && (0, i.jsx)(ev, { overlayRef: l, progressBarRef: g, isHovered: E }),
            (0, i.jsx)(r.animated.div, {
                ref: t,
                "aria-hidden": d && p,
                className: a()(n, eM.hR, { [eM.Ag]: d, [eM.s]: A }),
                style: {
                    opacity: (0, k.a)(o.to({ range: [0, 1], output: [1, 0] })),
                    backgroundImage: h ? `linear-gradient(90deg, ${L}, ${D})` : void 0,
                },
                onMouseEnter: () => C(!0),
                onMouseLeave: () => C(!1),
                children: (0, i.jsxs)("div", {
                    className: eM.o8,
                    children: [
                        h &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(eN, {}), (0, i.jsx)("div", { className: eM.yF })],
                            }),
                        A
                            ? (0, i.jsx)(ey, {
                                  contentLocation: "collapsed",
                                  progressBarRef: g,
                                  isExpanded: !1,
                                  percentComplete: x,
                              })
                            : null,
                        h &&
                            (0, i.jsx)(eC, {
                                awaitingConsoleConnections: !1,
                                hasMadeProgress: !0,
                                isProgressing: !1,
                                activeScreen: _.X0.DESKTOP,
                                showBackButton: !1,
                                onBack: () => {},
                                sourceQuestContent: _.uF.QUEST_BAR_V2,
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
    eP = n(782134),
    ew = n(534514),
    eL = n(825484),
    eD = n(607470),
    eF = n(409626),
    eB = n(829219),
    eG = n(405670),
    eV = n(112142),
    eW = n(859387),
    eQ = n(895253),
    eH = n(442734),
    eq = n(212614),
    ez = n(79545),
    eK = n(139384),
    e$ = n(114046),
    eY = n(695366),
    eX = n(30370),
    eZ = n(18437),
    eJ = n(780964),
    e0 = n(858897),
    e1 = n(540037);
function e2(e) {
    let { text: t, quest: n, sourceQuestContent: s } = e,
        l = (0, eZ.Ut)();
    return (0, i.jsx)(b.D, {
        className: e1.Z0,
        onClick: () => {
            l({
                questId: n.id,
                questContent: _.uF.QUEST_BAR_V2,
                questContentCTA: R.Cy.VIEW_CONSOLE_CONNECTIONS_LINK,
                sourceQuestContent: s,
            }),
                (0, e0.openUserSettings)(eJ.X.CONNECTIONS_PANEL);
        },
        children: (0, i.jsx)(v.E, { "aria-label": t, color: "none", variant: "text-xxs/normal", children: t }),
    });
}
function e3(e) {
    let { xboxAndPlaystationAccounts: t, quest: n, sourceQuestContent: s } = e;
    return t.length > 0
        ? (0, i.jsx)(e2, { text: K.intl.string(K.t["qiS+xj"]), quest: n, sourceQuestContent: s })
        : null;
}
function e9(e) {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(v.E, { color: "text-muted", variant: "text-xs/medium", children: K.intl.string(K.t.EJFSvD) }),
            (0, i.jsx)(e3, { ...e }),
        ],
    });
}
var e5 = n(947641),
    e4 = n(629436);
function e6(e) {
    let { children: t, isComplete: n, hasNextStep: s } = e;
    return (0, i.jsxs)("li", {
        className: a()(e4.gY, { [e4.HP]: n }, { [e4.h4]: s }),
        children: [
            (0, i.jsxs)("div", {
                className: e4.cJ,
                children: [
                    (0, i.jsx)("div", {
                        className: e4.$P,
                        children: n && (0, i.jsx)(e5.r, { className: e4.ap, color: I.A.colors.WHITE }),
                    }),
                    s && (0, i.jsx)("div", { className: e4.UK }),
                ],
            }),
            (0, i.jsx)("div", { className: e4.M7, children: t }),
        ],
    });
}
function e8(e) {
    let { children: t } = e;
    return (0, i.jsx)(v.E, { color: "text-muted", variant: "text-xs/medium", children: t });
}
let e7 = function (e) {
    let { children: t, heading: n, steps: s } = e;
    return (0, i.jsxs)("div", {
        className: e4.iE,
        children: [
            (0, i.jsx)("div", {
                className: e4.Mj,
                children: (0, i.jsx)(ew.D, {
                    className: e4.R_,
                    color: "text-strong",
                    variant: "text-xs/semibold",
                    children: n,
                }),
            }),
            (0, i.jsx)("div", {
                className: e4.lp,
                children: (0, i.jsx)("ul", {
                    children: s.map((e, t) =>
                        (0, i.jsx)(
                            e6,
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
    return (0, i.jsx)(v.E, { className: te.eW, color: "text-muted", variant: "text-xxs/normal", children: e.children });
}
function tn(e) {
    let { quest: t, useReducedMotion: n } = e,
        l = (0, T.H1)(t.id, _.uF.QUEST_BAR_V2, _.uF.QUEST_BAR_V2),
        r = (0, T.Xf)({ useReducedMotion: n }),
        o = (0, eZ.Ut)(),
        c = (0, N.go)(),
        {
            errorHints: u,
            startingConsoleQuest: d,
            startConsoleQuest: p,
        } = (0, f.Wj)({
            questId: t.id,
            beforeRequest: () => {
                o({
                    questId: t.id,
                    questContent: _.uF.QUEST_BAR_V2,
                    questContentCTA: R.Cy.DEFIBRILLATOR,
                    sourceQuestContent: _.uF.QUEST_BAR_V2,
                }),
                    r.startAnimation();
            },
            afterRequest: r.stopAnimation,
        }),
        { header: h, renderBody: m } = s.useMemo(() => {
            let e = u.length > 0,
                n = t.config.messages.gameTitle;
            return {
                header: e
                    ? (0, ec.ui)(t)
                        ? K.intl.string(K.t.N33EuL)
                        : K.intl.formatToPlainString(K.t["28Ql27"], { gameTitle: n })
                    : (0, ec.ui)(t)
                      ? K.intl.string(K.t.YstzGO)
                      : K.intl.formatToPlainString(K.t.gX0Qcx, { gameTitle: n }),
                renderBody: e
                    ? () =>
                          (0, i.jsx)(i.Fragment, {
                              children: u.map((e, n) => {
                                  if (e.type === e$._.EXPIRED_CREDENTIAL) {
                                      let s = eX.A.getAccount(e.connected_account_id, e.connected_account_type),
                                          l = (0, M.IG)(e),
                                          a = (0, M.$J)(e);
                                      return (0, i.jsx)(
                                          tt,
                                          {
                                              children: K.intl.format(l, {
                                                  account_name: s?.name,
                                                  onClick: () => {
                                                      (0, M.v0)(
                                                          { quest: t, platformType: a },
                                                          {
                                                              content: _.uF.QUEST_BAR,
                                                              ctaContent: R.Cy.DEFIBRILLATOR_RECONNECT_CONSOLE,
                                                              impressionId: c,
                                                              sourceQuestContent: _.uF.QUEST_BAR_V2,
                                                          },
                                                      );
                                                  },
                                              }),
                                          },
                                          n,
                                      );
                                  }
                                  return (0, i.jsx)(tt, { children: e.message }, n);
                              }),
                          })
                    : () =>
                          (0, i.jsx)(v.E, {
                              className: te.eW,
                              color: "text-muted",
                              variant: "text-xxs/normal",
                              children: (0, ec.ui)(t)
                                  ? K.intl.string(K.t.bUyEZZ)
                                  : K.intl.format(K.t.GXqvC1, { gameTitle: n }),
                          }),
            };
        }, [u, t, c]);
    return (0, i.jsxs)("div", {
        className: te.XK,
        children: [
            (0, i.jsxs)("div", {
                className: te.oK,
                children: [
                    (0, i.jsx)(eY.E, {
                        size: "custom",
                        color: "currentColor",
                        className: 0 === u.length ? te.pH : te.JA,
                        width: 16,
                        height: 16,
                    }),
                    (0, i.jsx)(v.E, { variant: "text-xs/medium", children: h }),
                    (0, i.jsx)(b.D, { className: a()(te.w, { [te.r9]: d }), onClick: () => p(), children: r.render() }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: a()({ [te.Iu]: d }),
                children: [m(), 0 === u.length ? null : (0, i.jsx)(tt, { children: l })],
            }),
        ],
    });
}
let ti = function (e) {
        let { quest: t, taskDetails: n } = e,
            l = (0, o.bG)([Q.A], () => Q.A.useReducedMotion),
            a = (0, f.Du)(),
            r = s.useMemo(
                () => (0, M.bg)(t).filter((e) => a.xboxAndPlaystationAccounts.find((t) => t.type === e)),
                [a.xboxAndPlaystationAccounts, t],
            ),
            {
                steps: c,
                hasConnectedAccounts: u,
                isProgressingQuestForLaunchedGame: d,
                isQuestComplete: p,
            } = s.useMemo(() => {
                let e = r.length > 0,
                    s = e && (0, x.YL)(t),
                    l = t.config.messages.gameTitle,
                    o = t.userStatus?.completedAt != null;
                return {
                    steps: [
                        {
                            renderContent: () =>
                                (0, i.jsx)(e9, { ...a, quest: t, sourceQuestContent: _.uF.QUEST_BAR_V2 }),
                            isComplete: e || s || o,
                        },
                        {
                            renderContent: () =>
                                (0, i.jsx)(e8, {
                                    children: (0, ec.ui)(t)
                                        ? K.intl.string(K.t["5tXqFe"])
                                        : K.intl.formatToPlainString(K.t["+8JB6Y"], { gameTitle: l }),
                                }),
                            isComplete: s || o,
                        },
                        {
                            renderContent: () =>
                                (0, i.jsx)(e8, {
                                    children: K.intl.formatToPlainString(K.t.HhfrYS, { numMinutes: n.targetMinutes }),
                                }),
                            isComplete: o,
                        },
                    ],
                    hasConnectedAccounts: e,
                    isProgressingQuestForLaunchedGame: s,
                    isQuestComplete: o,
                };
            }, [a, r.length, t, n.targetMinutes]);
        return (0, i.jsx)(e7, {
            heading: K.intl.string(K.t.UPWlJu),
            steps: c,
            children: u && !d && !p && (0, i.jsx)(tn, { useReducedMotion: l, quest: t }),
        });
    },
    ts = s.createContext({ springConfig: {}, isExpanded: !1 });
function tl(e) {
    let t = s.useMemo(
        () => ({ springConfig: e.springConfig, isExpanded: e.isExpanded }),
        [e.springConfig, e.isExpanded],
    );
    return (0, i.jsx)(ts.Provider, { value: t, children: e.children });
}
function ta(e) {
    let { children: t } = e,
        { springConfig: n, isExpanded: l } = s.useContext(ts),
        a = (0, o.bG)([Q.A], () => Q.A.useReducedMotion),
        { ref: u, height: d = null } = (0, w.Ay)(),
        p = (0, c.A)(d) ?? null,
        [{ height: h }, m] = (0, q.z)(() => ({ from: { height: 0 }, config: n }));
    return (
        s.useLayoutEffect(() => {
            null !== d && m({ height: d, immediate: !l || a || null === p });
        }, [d, m, l, a, p]),
        (0, i.jsx)(r.animated.div, {
            style: { height: null === p ? "auto" : h, overflow: "hidden" },
            children: (0, i.jsx)("div", { style: { overflow: "hidden" }, ref: u, children: t }),
        })
    );
}
n(134528), n(947204);
var tr = n(909714);
function to(e) {
    let { header: t, children: n } = e;
    return (0, i.jsxs)("div", {
        className: tr.Nr,
        children: [
            (0, i.jsxs)("div", {
                className: tr.wx,
                children: [
                    (0, i.jsx)(eY.E, {
                        size: "custom",
                        color: "currentColor",
                        className: tr.Kk,
                        width: 16,
                        height: 16,
                    }),
                    (0, i.jsx)(ew.D, { color: "text-default", variant: "heading-sm/medium", children: t }),
                ],
            }),
            (0, i.jsx)(v.E, { color: "text-muted", variant: "text-xs/normal", className: tr.r2, children: n }),
        ],
    });
}
let tc = function (e) {
    let { quest: t } = e,
        n = (0, f.aC)(t);
    if (0 === n.length) return null;
    let s = n.at(0);
    return s === K.intl.string(K.t.BV6xDm)
        ? (0, i.jsx)(to, { header: K.intl.string(K.t.onh6ct), children: K.intl.string(K.t.arVHRA) })
        : s === K.intl.string(K.t.MFGxFM)
          ? (0, i.jsx)(to, { header: K.intl.string(K.t.JPihZA), children: K.intl.string(K.t.MFGxFM) })
          : null;
};
var tu = n(31300),
    td = n(687966),
    tp = n(825807);
let th = function (e) {
    let { onDesktop: t, onConsole: n } = e;
    return (0, i.jsxs)(eL.e, {
        direction: "vertical",
        fullWidth: !0,
        className: tp.G,
        size: "sm",
        children: [
            (0, i.jsx)(ee.$, {
                onClick: t,
                text: K.intl.string(K.t["QXc01+"]),
                variant: "secondary",
                icon: tu.k,
                iconPosition: "end",
            }),
            (0, i.jsx)(ee.$, {
                onClick: n,
                text: K.intl.string(K.t["8lAfuB"]),
                variant: "secondary",
                icon: td._,
                iconPosition: "end",
            }),
        ],
    });
};
var tm = n(654487),
    t_ = n(495707);
let tf = s.forwardRef(function (e, t) {
    let { isHovered: n, asset: l, poster: a, className: r, autoPlay: c = !1 } = e,
        { isExpanded: u } = s.useContext(V),
        d = (0, o.bG)([Q.A], () => Q.A.useReducedMotion),
        p = s.useRef(null);
    return (
        s.useEffect(() => {
            null != p.current && (u && (!d || n) ? ((p.current.currentTime = 0), p.current.play()) : p.current.pause());
        }, [p, u, n, d]),
        (0, eK.A)(p, tm.rE.QUESTS_BAR),
        (0, i.jsx)(eD.A, {
            ref: (e) => {
                (p.current = e), null != t && ("function" == typeof t ? t(e) : (t.current = e));
            },
            autoPlay: c,
            poster: a,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: r,
            controls: !1,
            children: (0, i.jsx)("source", { src: l.url, type: l.mimetype ?? void 0 }),
        })
    );
});
function tg(e) {
    let { onClick: t } = e,
        { quest: n } = s.useContext(V),
        l = (0, o.bG)([Q.A], () => Q.A.useReducedMotion),
        [r, c] = s.useState(!1),
        u = (0, eW.tW)(n, eW.fY.QUEST_BAR_HERO_VIDEO, void 0, !1),
        d = (0, eW.tW)(n, eW.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1),
        p = (0, eG.Kr)((e) => e.getVideoProgressState)(n.id),
        h = n.userStatus?.completedAt != null && p === eG.K2.COMPLETED,
        m = !h && (!l || r);
    return (0, i.jsxs)(b.D, {
        className: t_.QO,
        onClick: t,
        onMouseEnter: () => {
            l && !r && c(!0);
        },
        onMouseLeave: () => {
            l && r && c(!1);
        },
        children: [
            null != d &&
                (0, i.jsx)(E.Sn, {
                    id: "QuestBarContentExpanded_videoThumbnail",
                    children: (e) => (0, i.jsx)("img", { ref: e, alt: "", src: d.url, className: t_.Ue }),
                }),
            null != u
                ? (0, i.jsx)(E.Sn, {
                      id: "QuestBarContentExpanded_video",
                      children: (e) =>
                          (0, i.jsx)(tf, {
                              ref: e,
                              isHovered: r,
                              autoPlay: !1,
                              asset: u,
                              poster: d?.url,
                              className: a()(t_.NM, { [t_.Gc]: m }),
                          }),
                  })
                : null,
            (0, i.jsx)("div", {
                className: t_.LT,
                children: h
                    ? (0, i.jsx)(ek.m, { color: I.A.colors.WHITE, className: t_.t })
                    : (0, i.jsx)(eP.u, { color: I.A.colors.WHITE, className: t_.t }),
            }),
        ],
    });
}
function tA(e) {
    let { quest: t } = e;
    return (0, i.jsx)(H.A, {
        className: a()(t_.Qq, t_.wq),
        learnMoreStyle: "text",
        quest: t,
        questContent: _.uF.QUEST_BAR_V2,
        sourceQuestContent: _.uF.QUEST_BAR_V2,
    });
}
function tx(e) {
    let { isInteractable: t, containerRef: n, onAcceptQuest: l } = e,
        { quest: c, onGameSheetOpen: u, onGameSheetClose: d, taskDetails: p } = s.useContext(V),
        { expansionSpring: h } = s.useContext(F),
        g = s.useRef(null),
        A = (0, o.bG)([m.A], () => m.A.isEnrolling(c.id), [c]),
        x = s.useMemo(() => (0, eW.tW)(c, eW.fY.QUEST_BAR_HERO), [c]),
        C = (0, ea.NA)({ quest: c }),
        T = s.useMemo(() => (0, eW.tW)(c, eW.fY.HERO_IMAGE), [c]),
        b = s.useMemo(() => (null == T ? {} : { backgroundImage: `url(${T.url})` }), [T]),
        j = eV.t.useConfig({ location: tm.rE.QUESTS_BAR }),
        I = (0, ea.mU)({
            quest: c,
            location: tm.rE.QUESTS_BAR,
            questContent: _.uF.QUEST_BAR_V2,
            taskDetails: p,
            sourceQuestContent: _.uF.QUEST_BAR_V2,
            popoutTargetElementRef: g,
            onGameSheetOpened: u,
            onGameSheetClosed: d,
            gameProfileSource: eF.Ob.QuestBar,
        }),
        y = (0, ez.Pd)(c),
        R = (0, f.SD)(c),
        N = (0, f.Oq)(),
        M = N && R;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                ref: g,
                children: (0, i.jsxs)("div", {
                    className: t_.do,
                    ref: n,
                    children: [
                        (0, i.jsxs)("div", {
                            className: t_.zH,
                            children: [
                                (0, i.jsx)(tA, { quest: c }),
                                (0, i.jsx)(ew.D, {
                                    className: t_.DD,
                                    color: "text-strong",
                                    variant: "heading-md/medium",
                                    children: K.intl.format(K.t.EQa7os, { questName: c.config.messages.questName }),
                                }),
                                (0, i.jsxs)("div", {
                                    className: t_.zf,
                                    children: [
                                        (0, i.jsx)(v.E, { className: t_.h_, variant: "text-xs/normal", children: I }),
                                        R && (0, i.jsx)(eH.e, { questId: c.id, canUseQuestOrbMultiplier: N }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsx)("div", {
                            className: t_.lO,
                            children: (0, i.jsx)(eL.e, {
                                direction: "horizontal",
                                fullWidth: !0,
                                wrap: !1,
                                children:
                                    j.enabled && y === ez.UA.UNENROLLED && j.enabledQuestStates.has(ez.UA.UNENROLLED)
                                        ? (0, i.jsx)(eq.A, {
                                              quest: c,
                                              surface: ez.V3.QUEST_BAR_FOOTER,
                                              size: "sm",
                                              analyticsCtxQuestContent: _.uF.QUEST_BAR_V2,
                                              analyticsCtxSourceQuestContent: _.uF.QUEST_BAR_V2,
                                          })
                                        : (0, i.jsx)(ee.$, {
                                              onClick: t ? l : void 0,
                                              variant: "primary",
                                              loading: A,
                                              text: C,
                                              size: "sm",
                                              icon: (0, S.Oz)(c),
                                              fullWidth: !0,
                                          }),
                            }),
                        }),
                    ],
                }),
            }),
            (0, i.jsx)(eQ.A, { visible: M, glow: !0, className: t_.Ph }),
            null != T &&
                (0, i.jsx)(r.animated.div, {
                    className: t_.AK,
                    style: { opacity: (0, k.a)(h.to([0, 1], [1, 0])) },
                    children: (0, i.jsx)("div", { className: a()(t_.LC, t_.Ge), style: b }),
                }),
            (0, i.jsxs)(r.animated.div, {
                className: t_.IC,
                style: {
                    backdropFilter: (0, k.Q)(h.to([0, 1], [5, 0]).to((e) => `blur(${e}px)`)),
                    filter: (0, k.Q)(h.to([0, 1], [0.8, 1]).to((e) => `brightness(${e})`)),
                },
                children: [
                    x.isAnimated
                        ? (0, i.jsx)(E.Sn, {
                              id: "QuestBarContentExpanded_heroAnimated",
                              children: (e) => (0, i.jsx)(tf, { ref: e, autoPlay: !0, asset: x, className: t_.LO }),
                          })
                        : (0, i.jsx)(E.Sn, {
                              id: "QuestBarContentExpanded_heroStatic",
                              children: (e) => (0, i.jsx)("img", { ref: e, alt: "", className: t_.LO, src: x.url }),
                          }),
                    (0, i.jsx)("div", { className: t_.tV }),
                ],
            }),
        ],
    });
}
function tE(e) {
    let { overlayRef: t, containerRef: n } = e,
        { quest: l, taskDetails: o } = s.useContext(V),
        { expansionSpring: c } = s.useContext(F),
        u = l.userStatus?.completedAt != null,
        d = o.percentComplete > 0,
        p = (0, f.Vn)(l),
        [h, m, g] = (0, f.Qo)(l, o),
        A = s.useRef(null),
        E = s.useRef(null),
        C = (0, f.RR)({ quest: l }),
        T = (0, x.vv)(l),
        b = (0, f.I3)(l),
        v = s.useCallback(() => {
            (0, S.d5)({
                quest: l,
                questContent: _.uF.QUEST_BAR_V2,
                sourceQuestContent: _.uF.QUEST_BAR_V2,
                sourceQuestContentCTA: R.Cy.QUEST_BAR_VIDEO_QUEST_PREVIEW,
            });
        }, [l]),
        j = null != b ? b.percentComplete : o.percentComplete;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(r.animated.div, {
                className: a()(t_.tv, t_.ag),
                style: {
                    backgroundImage: `linear-gradient(90deg, ${L}, ${D})`,
                    opacity: (0, k.a)(c.to({ range: [0, 1], output: [1, 0] })),
                },
            }),
            (0, i.jsxs)("div", {
                className: t_.Fe,
                ref: (e) => {
                    "function" == typeof n ? n(e) : null != n && (n.current = e), null != e && (E.current = e);
                },
                children: [
                    (0, i.jsx)(eN, {}),
                    (0, i.jsx)("div", { className: t_.yF }),
                    (0, i.jsx)(ev, { overlayRef: t, progressBarRef: A, isHovered: !1 }),
                    (0, i.jsx)(ey, {
                        contentLocation: "expanded",
                        progressBarRef: A,
                        isExpanded: !0,
                        percentComplete: j,
                        activeScreen: h,
                        popoutTargetElementRef: E,
                    }),
                    (0, i.jsx)(ta, {
                        children:
                            !u &&
                            !(0, M.W1)(l) &&
                            (0, eU.YW)(h)
                                .with(_.X0.SELECT, () =>
                                    (0, i.jsx)(th, {
                                        onConsole: () => g(tm.fO.CONSOLE),
                                        onDesktop: () => g(tm.fO.DESKTOP),
                                    }),
                                )
                                .with(_.X0.DESKTOP, () => (0, i.jsx)(tc, { quest: l }))
                                .with(_.X0.CONSOLE, () => (0, i.jsx)(ti, { quest: l, taskDetails: o }))
                                .exhaustive(),
                    }),
                    (0, i.jsxs)(ta, {
                        children: [
                            T && (0, i.jsx)(tg, { onClick: v }),
                            (0, i.jsx)(eC, {
                                awaitingConsoleConnections: C,
                                hasMadeProgress: d,
                                isProgressing: p,
                                activeScreen: h,
                                showBackButton: h !== _.X0.SELECT && m.length > 1 && !d && !p,
                                onBack: () => g(null),
                                sourceQuestContent: _.uF.QUEST_BAR_V2,
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: a()(t_.tv, t_.Sx),
                style: { backgroundImage: `linear-gradient(90deg, ${L}, ${D})` },
            }),
        ],
    });
}
async function tC(e, t, n, i) {
    (0, x.vv)(e)
        ? await (0, S.e0)(e, { questContent: t, questContentCTA: n, sourceQuestContent: i, sourceQuestContentCTA: n })
        : (0, ec.vA)(e)
          ? await (0, eB.Oy)(e.id, { questContent: t, questContentCTA: n, sourceQuestContent: i })
          : (0, eB.Oy)(e.id, { questContent: t, questContentCTA: n, sourceQuestContent: i });
}
let tT = s.forwardRef(function (e, t) {
    let { children: n, className: l, overlayRef: o } = e,
        { collapsedHeight: c, isExpanded: u, isExpansionAnimationComplete: d, quest: p } = s.useContext(V),
        { expansionSpring: h } = s.useContext(F),
        { launchInGameActivity: m } = (0, f.zW)(p),
        g = (0, ec.vA)(p),
        A = s.useCallback(async () => {
            let e = g ? R.Cy.START_QUEST : R.Cy.ACCEPT_QUEST;
            await tC(p, _.uF.QUEST_BAR_V2, e, _.uF.QUEST_BAR_V2), g && m();
        }, [p, m, g]),
        x = p.userStatus?.enrolledAt != null,
        E = u && d;
    return (0, i.jsxs)(r.animated.div, {
        "aria-hidden": !E,
        className: a()(l, t_.Rh, { [t_.Yd]: E, [t_.iH]: x }),
        style: {
            transform: (0, r.to)(
                [h.to({ range: [0, 1], output: [0, -100] }), h.to({ range: [0, 1], output: [0, c] })],
                (e, t) => `translateY(calc(${e}% + ${t}px))`,
            ),
        },
        children: [
            n,
            (0, i.jsx)(r.animated.div, {
                style: { opacity: 1 },
                children: x
                    ? (0, i.jsx)(tE, { overlayRef: o, containerRef: t })
                    : (0, i.jsx)(tx, { isInteractable: E, containerRef: t, onAcceptQuest: A }),
            }),
        ],
    });
});
var tS = n(717695);
function tb() {
    let {
            expansionSpring: e,
            animatedComponentProps: t,
            recalculateAnimationPositions: n,
            mountPoints: l,
        } = s.useContext(F),
        { isExpanded: a } = s.useContext(V);
    return (
        s.useEffect(() => {
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
                let { id: n, collapsedLeft: s, expandedLeft: a, collapsedTop: o, expandedTop: c, width: u } = t,
                    d = l.get(n);
                return (0, i.jsx)(
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
var tv = n(561844),
    tj = n(652215),
    tI = n(731738),
    ty = n(831062),
    tR = n(260364),
    tN = n(737595);
function tM(e) {
    let { isExpanded: t, questId: n } = e;
    return (
        (0, f.H6)({
            mode: t ? tm.fP.EXPANDED : tm.fP.COLLAPSED,
            questContent: _.uF.QUEST_BAR_V2,
            questId: n,
            sourceQuestContent: _.uF.QUEST_BAR_V2,
        }),
        null
    );
}
function tO() {
    return (
        s.useEffect(() => {
            p.trigger();
        }, []),
        null
    );
}
function tU(e) {
    let { quest: t } = e,
        n = (0, A.L)({ quest: t, location: tm.rE.QUESTS_BAR }),
        l = (0, g.s)(),
        u = (0, o.bG)([m.A], () => null != m.A.questEnrollmentBlockedUntil),
        { isQuestBarVisible: d, reason: p } = (0, T.TQ)({ quest: t }),
        b = (0, o.bG)([h.A], () => h.A.hasLayers()),
        v = s.useRef(null),
        j = s.useMemo(() => (0, x.vv)(t), [t]),
        I = t.id,
        y = t.userStatus?.enrolledAt != null,
        N = (0, c.A)(y),
        M = t.userStatus?.completedAt != null,
        { hasError: O, isLoading: U } = (0, E.Gk)(),
        k = s.useContext(tS.Z) || (l && d && !U && !u),
        {
            isExpanded: P,
            setIsExpanded: w,
            expandQuestBar: L,
            isExpansionAnimationComplete: D,
            isVisibilityAnimationAtRest: F,
            expansionSpring: B,
            visibilitySpring: V,
            springConfig: H,
        } = (function (e) {
            let { isQuestAccepted: t, isQuestCompleted: n, isQuestBarVisible: i } = e,
                l = (0, o.bG)([Q.A], () => Q.A.useReducedMotion),
                [a, r] = s.useState(!1),
                [c, u] = s.useState(!0),
                [d, p] = s.useState(!0),
                h = s.useRef(i),
                m = s.useCallback(
                    (e) => {
                        n || (u(!1), r(e));
                    },
                    [n],
                ),
                _ = s.useCallback(() => {
                    m(!0);
                }, [m]),
                f = s.useCallback(() => {
                    m(!1);
                }, [m]),
                g = t ? tm.ZV : tm.Ko,
                [{ expansionSpring: A }, x] = (0, q.z)(() => ({
                    from: { expansionSpring: 0 },
                    config: g,
                    onRest: () => {
                        u(!0);
                    },
                    onStart: () => {
                        u(!1);
                    },
                }));
            s.useEffect(() => {
                x({ expansionSpring: +!!a, immediate: l });
            }, [a, x, l]);
            let { visibilitySpring: E } = (0, q.z)({
                from: { visibilitySpring: 0 },
                to: { visibilitySpring: +!!i },
                config: { tension: 250, friction: 10, clamp: !0 },
                onRest: () => {
                    p(!0);
                },
                onStart: () => {
                    p(!1);
                },
            });
            return (
                s.useLayoutEffect(() => {
                    i !== h.current && p(!1), (h.current = i);
                }, [i]),
                {
                    isExpanded: a,
                    setIsExpanded: m,
                    expandQuestBar: _,
                    collapseQuestBar: f,
                    isExpansionAnimationComplete: c,
                    isVisibilityAnimationAtRest: d,
                    expansionSpring: A,
                    visibilitySpring: E,
                    springConfig: g,
                }
            );
        })({ isQuestAccepted: y, isQuestCompleted: M, isQuestBarVisible: k }),
        {
            handleCtxMenuOpened: z,
            handleCtxMenuClosed: K,
            handleCtxMenuSelection: $,
            handleGameSheetOpened: Y,
            handleGameSheetClosed: X,
            handleFocusWithoutDelay: Z,
            handleBlur: ee,
            handleMouseEnter: et,
            handleMouseLeave: en,
        } = (function (e) {
            let {
                    quest: t,
                    isExpanded: n,
                    setIsExpanded: i,
                    expandQuestBar: l,
                    isQuestCompleted: a,
                    isQuestAccepted: r,
                    prevIsQuestAccepted: o,
                    impressionRef: c,
                } = e,
                u = s.useRef(-1),
                d = s.useRef(!1),
                [p, h] = s.useState(!1),
                [m, f] = s.useState(!1),
                g = s.useCallback(() => {
                    h(!0);
                }, []),
                A = s.useCallback(() => {
                    h(!1), d.current || a || i(!1);
                }, [a, i]),
                x = s.useCallback(() => {
                    h(!1), a || i(!1), (d.current = !1);
                }, [a, i]),
                E = s.useCallback(() => {
                    f(!0);
                }, []),
                C = s.useCallback(() => {
                    f(!1), i(!1);
                }, [i]),
                T = s.useCallback(
                    function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (n) return;
                        let { withDelay: t = !1 } = e;
                        t ? (u.current = window.setTimeout(l, 75)) : l();
                    },
                    [l, n],
                ),
                S = s.useCallback(() => {
                    T();
                }, [T]),
                b = s.useCallback(() => {
                    window.clearTimeout(u.current), p || m || d.current || i(!1);
                }, [p, m, i]),
                v = s.useCallback(() => {
                    (0, tv.av)({
                        questId: t.id,
                        event: tj.HAw.QUEST_HOVER,
                        properties: {
                            content_id: _.uF.QUEST_BAR,
                            content_name: (0, R.jO)(_.uF.QUEST_BAR),
                            impression_id: c.current?.getId(),
                        },
                        shouldExtendSession: !0,
                        sourceQuestContent: _.uF.QUEST_BAR_V2,
                    }),
                        (d.current = !0),
                        T({ withDelay: !0 });
                }, [T, c, t.id]),
                j = s.useCallback(() => {
                    (0, tv.av)({
                        questId: t.id,
                        event: tj.HAw.QUEST_HOVER_OFF,
                        properties: {
                            content_id: _.uF.QUEST_BAR,
                            content_name: (0, R.jO)(_.uF.QUEST_BAR),
                            impression_id: c.current?.getId(),
                        },
                        sourceQuestContent: _.uF.QUEST_BAR_V2,
                    }),
                        (d.current = !1),
                        b();
                }, [b, c, t.id]);
            return (
                s.useEffect(() => {
                    m && j();
                }, [m, j]),
                s.useLayoutEffect(() => {
                    r && !o && d.current && l();
                }, [l, r, o]),
                s.useLayoutEffect(() => {
                    a || !r || o || d.current || i(!1);
                }, [r, a, o, i]),
                {
                    ctxMenuOpen: p,
                    gameSheetOpen: m,
                    handleCtxMenuOpened: g,
                    handleCtxMenuClosed: A,
                    handleCtxMenuSelection: x,
                    handleGameSheetOpened: E,
                    handleGameSheetClosed: C,
                    handleFocus: T,
                    handleFocusWithoutDelay: S,
                    handleBlur: b,
                    handleMouseEnter: v,
                    handleMouseLeave: j,
                }
            );
        })({
            quest: t,
            isExpanded: P,
            setIsExpanded: w,
            expandQuestBar: L,
            isQuestCompleted: M,
            isQuestAccepted: y,
            prevIsQuestAccepted: N,
            impressionRef: v,
        });
    !(function (e) {
        let {
            quest: t,
            hasAssetsError: n,
            isEligibleForQuests: i,
            isQuestBarVisible: l,
            isVisibilityAnimationAtRest: a,
            isLoadingAssets: r,
            currentQuestVisibleReason: o,
            shouldShowQuestBar: c,
            isQuestEnrollmentBlocked: u,
            impressionRef: d,
        } = e;
        s.useEffect(() => {
            n &&
                ((0, tv.av)({
                    questId: t.id,
                    event: tj.HAw.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        content_id: _.uF.QUEST_BAR,
                        content_name: (0, R.jO)(_.uF.QUEST_BAR),
                        reason: "asset_loading_error",
                        impression_id: d.current?.getId(),
                    },
                    sourceQuestContent: _.uF.QUEST_BAR_V2,
                }),
                ty.A.increment({
                    name: tI.K.QUEST_CONTENT_RENDERING_FAILURE,
                    tags: [
                        `quest_id:${t.id}`,
                        `quest_content:${(0, R.jO)(_.uF.QUEST_BAR)}`,
                        "reason:asset_loading_error",
                    ],
                }));
        }, [n, d, t.id]),
            s.useEffect(() => {
                i ||
                    (0, tv.av)({
                        questId: t.id,
                        event: tj.HAw.QUEST_CONTENT_RENDERING_FAILURE,
                        properties: {
                            content_id: _.uF.QUEST_BAR,
                            content_name: (0, R.jO)(_.uF.QUEST_BAR),
                            reason: "not_eligible_for_quest",
                            impression_id: d.current?.getId(),
                        },
                        sourceQuestContent: _.uF.QUEST_BAR_V2,
                    });
            }, [i, d, t.id]),
            s.useEffect(() => {
                l ||
                    !a ||
                    r ||
                    (0, tv.av)({
                        questId: t.id,
                        event: tj.HAw.QUEST_CONTENT_RENDERING_FAILURE,
                        properties: {
                            content_id: _.uF.QUEST_BAR,
                            content_name: (0, R.jO)(_.uF.QUEST_BAR),
                            reason: o,
                            impression_id: d.current?.getId(),
                        },
                        sourceQuestContent: _.uF.QUEST_BAR_V2,
                    });
            }, [l, a, r, t.id, o, d]),
            s.useEffect(() => {
                (!c || u) && tR.A.clearTracking(), l && a && !r && !n && i && tR.A.stopTracking(t.id);
            }, [c, u, l, a, r, n, i, t.id]);
    })({
        quest: t,
        hasAssetsError: O,
        isEligibleForQuests: l,
        isQuestBarVisible: k,
        isVisibilityAnimationAtRest: F,
        isLoadingAssets: U,
        currentQuestVisibleReason: p,
        shouldShowQuestBar: d,
        isQuestEnrollmentBlocked: u,
        impressionRef: v,
    });
    let ei = s.useRef(null),
        es = s.useRef(null),
        el = s.useRef(null),
        ea = (0, f.fc)(t),
        er = (0, f.UH)(t);
    if (
        (s.useEffect(() => {
            j && (0, S.l9)();
        }, [j]),
        !l || (!k && F && !U) || O)
    )
        return O ? n.log("Not rendered due to asset error") : l || n.log("Not rendered due to ineligibility"), null;
    let eo = 70 + 78 * !!M;
    return (0, i.jsx)(C.R, {
        questOrQuests: t,
        questContent: _.uF.QUEST_BAR_V2,
        overrideVisibility: !b && k,
        onImpression: er,
        sourceQuestContent: _.uF.QUEST_BAR_V2,
        children: (e, n) => (
            (v.current = n.current),
            (0, i.jsxs)("div", {
                className: tN.dK,
                children: [
                    k &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)(tM, { questId: I, isExpanded: P }), (0, i.jsx)(tO, {})],
                        }),
                    (0, i.jsx)(r.animated.div, {
                        "aria-hidden": !k,
                        onMouseLeave: en,
                        onMouseEnter: et,
                        onFocus: Z,
                        onBlur: ee,
                        className: a()(tN.iE, { [tN.Xc]: !k, [tN.uv]: k && F }),
                        style: { height: V.to({ range: [0, 1], output: [0, eo] }) },
                        children: (0, i.jsx)(r.animated.div, {
                            className: a()(tN.FG, { [tN.E$]: P, [tN.KA]: y }),
                            children: (0, i.jsx)(tl, {
                                springConfig: H,
                                isExpanded: P,
                                children: (0, i.jsx)(G, {
                                    expandedContentRef: ei,
                                    collapsedContentRef: es,
                                    expansionSpring: B,
                                    children: (0, i.jsxs)(W, {
                                        quest: t,
                                        taskDetails: ea,
                                        isExpanded: P,
                                        isExpansionAnimationComplete: D,
                                        onCtxMenuClose: K,
                                        onCtxMenuOpen: z,
                                        onCtxMenuSelect: $,
                                        onGameSheetOpen: Y,
                                        onGameSheetClose: X,
                                        collapsedHeight: eo,
                                        children: [
                                            (0, i.jsx)(
                                                eO,
                                                { ref: es, className: tN.Qs, overlayRef: el },
                                                M ? "collapsed-with-rewards" : "collapsed-without-rewards",
                                            ),
                                            (0, i.jsx)(tT, {
                                                className: tN.Qs,
                                                overlayRef: el,
                                                ref: ei,
                                                children: (0, i.jsxs)(i.Fragment, {
                                                    children: [(0, i.jsx)(tb, {}), !y && (0, i.jsx)(J, {})],
                                                }),
                                            }),
                                            (0, i.jsx)("div", { ref: el, className: tN.Lw }),
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
let tk =
    21552 == n.j
        ? function () {
              let e = (0, T.dN)();
              return null == e
                  ? null
                  : (0, i.jsx)(
                        E.jY,
                        { source: tm.rE.QUESTS_BAR, questId: e.id, children: (0, i.jsx)(tU, { quest: e }) },
                        e.id,
                    );
          }
        : null;
