r.d(t, { x: () => k, e: () => b });
var n = r(477900),
    o = r(582128),
    a = r(503698),
    s = r.n(a),
    i = r(202091),
    l = r(113325),
    c = r(315629),
    u = r(17928),
    d = r(453903),
    f = r(765671),
    p = r(186111),
    m = r(795127),
    h = r(844222),
    x = r(866323),
    g = r(555115),
    v = r(231723),
    y = r(818348),
    C = r(489387);
let b = o.createContext(null),
    w = y.FX;
function k(e) {
    let {
            children: t,
            targetElementRef: r,
            shouldShow: a = !0,
            onRequestClose: y,
            position: k = "top",
            align: j,
            alignmentStrategy: L = "trigger-center",
            caretConfig: M,
            hasVideo: N = !1,
            gradientColor: E,
            gradientOffsetBottom: R = 0.4,
            onPositionChange: $,
            onNudgeChange: Q,
            scrollBehavior: P = "sticky",
            modal: S = !1,
            returnRef: A,
            experimental_ignoreModalClicks: B = !0,
            closeOnClickOutside: G = !1,
        } = e,
        { transitionState: Z } = o.useContext(v.CP),
        F = null != Z && Z !== v.ip.ENTERED,
        [_, z] = o.useState(a),
        [I, O] = o.useState(k),
        W = o.useRef(k),
        D = o.useRef(0),
        { ref: K, width: T, height: U } = (0, f.Ay)(),
        q = (0, u.bG)([p.A], () => p.A.getLayers()),
        V = q[q.length - 1] ?? "base",
        X = o.useRef($);
    o.useEffect(() => {
        X.current = $;
    }, [$]);
    let H = o.useCallback((e) => {
            null != e && e !== W.current && ((W.current = e), O(e), X.current?.(e));
        }, []),
        J = o.useMemo(
            () => null == r.current || (r.current.closest("[data-layer]")?.getAttribute("data-layer") ?? "base") === V,
            [r, V],
        );
    (o.useEffect(() => {
        F ? z(!1) : J && a ? z(!0) : J || z(!1);
    }, [J, a, F]),
        o.useEffect(() => {
            H(k);
        }, [k, H]));
    let Y = (function (e) {
            let { shouldShow: t, caretPosition: r, onExitComplete: n } = e,
                { reducedMotion: a } = o.useContext(h.C),
                { config: s, ...i } = (function (e, t) {
                    let r = { opacity: 0, transform: "" },
                        n = { opacity: 0, transform: "" };
                    if (t)
                        return {
                            from: { opacity: 0 },
                            enter: { opacity: 1 },
                            leave: { opacity: 0 },
                            config: { duration: 150 },
                        };
                    switch (e) {
                        case "top":
                            ((r.transform = "translate3d(0, -10px, 0)"), (n.transform = "translate3d(0, -10px, 0)"));
                            break;
                        case "bottom":
                            ((r.transform = "translate3d(0, 10px, 0)"), (n.transform = "translate3d(0, 10px, 0)"));
                            break;
                        case "left":
                            ((r.transform = "translate3d(-10px, 0, 0)"), (n.transform = "translate3d(-10px, 0, 0)"));
                            break;
                        case "right":
                            ((r.transform = "translate3d(10px, 0, 0)"), (n.transform = "translate3d(10px, 0, 0)"));
                    }
                    return {
                        from: r,
                        enter: { opacity: 1, transform: "translate3d(0px, 0px, 0)" },
                        leave: n,
                        config: void 0,
                    };
                })(r, a.enabled);
            return (0, x.p)(
                t,
                {
                    ...i,
                    config: s ?? ((e, r) => (t ? g.n : g.t)),
                    onRest: () => {
                        t || null == n || n();
                    },
                },
                "animate-always",
            );
        })({
            shouldShow: a && !F,
            caretPosition: (0, m.g)(I),
            onExitComplete: function () {
                z(!1);
            },
        }),
        ee = o.useMemo(() => {
            if ("edge" === L && null != j) {
                let e = "top" === I || "bottom" === I,
                    t = "left" === I || "right" === I;
                if (e) {
                    if ("left" === j || "center" === j || "right" === j) return j;
                } else if (t && ("top" === j || "center" === j || "bottom" === j)) return j;
            }
            return "center";
        }, [L, j, I]),
        et = o.useMemo(() => {
            if ("edge" !== L)
                return (function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "center",
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
                        r = arguments.length > 2 ? arguments[2] : void 0,
                        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                    if ("center" === e || "custom" === e) return 0;
                    let o = "left" === t || "right" === t,
                        a = o ? n : (r ?? 240);
                    if (0 === a) return 0;
                    let s = a / 2 - (o ? 22 : 20);
                    switch (e) {
                        case "start":
                            return s;
                        case "end":
                            return -s;
                        default:
                            return 0;
                    }
                })(M?.align ?? "center", I, T, U);
        }, [L, M, I, T, U]),
        er = o.useMemo(() => ({ position: I, caretConfig: M ?? { align: "center" } }), [I, M]);
    return (0, n.jsx)(d.$, {
        targetElementRef: r,
        shouldShow: _ && !F,
        onRequestClose: y,
        position: I,
        align: ee,
        spacing: 14,
        offset: et,
        layerContext: void 0,
        positionKey: null != et ? `${I}-${et}` : void 0,
        popoutKey: void 0,
        fixed: !1,
        autoInvert: !0,
        nudgeAlignIntoViewport: "top" === I || "bottom" === I,
        closeOnClickOutside: G,
        ignoreModalClicks: B,
        scrollBehavior: P,
        renderPopout: function (e) {
            let { setPopoutRef: r, position: o, nudge: a, ...u } = e;
            return (
                H(o),
                a !== D.current && ((D.current = a), Q?.(a)),
                Y((e, o) => {
                    if (!o) return null;
                    let d = (0, n.jsx)(l.lG, {
                        ...u,
                        setDialogRef: r,
                        modal: S,
                        className: s()(null != E ? C.popoverContentWithGradient : C.popover, {
                            [C["popover--video"]]: N,
                        }),
                        returnRef: A,
                        children: (0, n.jsx)(b.Provider, { value: er, children: t }),
                    });
                    return (0, n.jsx)(i.animated.div, {
                        ref: K,
                        "data-mana-component": "popover",
                        style: {
                            ...e,
                            "--custom-caret-edge-offset-horizontal": "20px",
                            "--custom-caret-edge-offset-vertical": "22px",
                            "--custom-caret-edge-offset-horizontal-nudge": `${a}px`,
                            "--custom-popover-width": "240px",
                        },
                        children:
                            null != E
                                ? (0, n.jsx)(c.h, {
                                      offsetBottom: R,
                                      color: E,
                                      className: C.popoverGradientWrapper,
                                      children: d,
                                  })
                                : d,
                    });
                })
            );
        },
        children: w,
    });
}
