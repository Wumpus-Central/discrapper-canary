r.d(t, { x: () => k, e: () => y });
var n = r(627968),
    a = r(64700),
    l = r(503698),
    s = r.n(l),
    i = r(785651),
    o = r(113325),
    c = r(315629),
    u = r(17928),
    d = r(453903),
    h = r(765671),
    f = r(186111),
    p = r(795127),
    m = r(844222),
    x = r(866323);
let g = { mass: 1, tension: 800, friction: 32 },
    v = { mass: 1, tension: 1200, friction: 48 };
var j = r(818348),
    b = r(824078);
let y = a.createContext(null),
    C = j.FX;
function k(e) {
    let {
            children: t,
            targetElementRef: r,
            shouldShow: l = !0,
            onRequestClose: j,
            position: k = "top",
            align: w,
            alignmentStrategy: N = "trigger-center",
            caretConfig: E,
            hasVideo: L = !1,
            gradientColor: A,
            gradientOffsetBottom: R = 0.4,
            onPositionChange: M,
            onNudgeChange: B,
            scrollBehavior: S = "sticky",
            modal: _ = !1,
            returnRef: T,
            experimental_ignoreModalClicks: $ = !0,
            closeOnClickOutside: I = !1,
        } = e,
        [P, Z] = a.useState(l),
        [D, F] = a.useState(k),
        O = a.useRef(k),
        Q = a.useRef(0),
        { ref: U, width: z, height: G } = (0, h.Ay)(),
        q = (0, u.bG)([f.A], () => f.A.getLayers()),
        V = q[q.length - 1] ?? "base",
        W = a.useRef(M);
    a.useEffect(() => {
        W.current = M;
    }, [M]);
    let J = a.useCallback((e) => {
            null != e && e !== O.current && ((O.current = e), F(e), W.current?.(e));
        }, []),
        H = a.useMemo(
            () => null == r.current || (r.current.closest("[data-layer]")?.getAttribute("data-layer") ?? "base") === V,
            [r, V],
        );
    a.useEffect(() => {
        H && l ? Z(!0) : H || Z(!1);
    }, [H, l]),
        a.useEffect(() => {
            J(k);
        }, [k, J]);
    let K = (function (e) {
            let { shouldShow: t, caretPosition: r, onExitComplete: n } = e,
                { reducedMotion: l } = a.useContext(m.C),
                { config: s, ...i } = ((e, t) => {
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
                            (r.transform = "translate3d(0, -10px, 0)"), (n.transform = "translate3d(0, -10px, 0)");
                            break;
                        case "bottom":
                            (r.transform = "translate3d(0, 10px, 0)"), (n.transform = "translate3d(0, 10px, 0)");
                            break;
                        case "left":
                            (r.transform = "translate3d(-10px, 0, 0)"), (n.transform = "translate3d(-10px, 0, 0)");
                            break;
                        case "right":
                            (r.transform = "translate3d(10px, 0, 0)"), (n.transform = "translate3d(10px, 0, 0)");
                    }
                    return {
                        from: r,
                        enter: { opacity: 1, transform: "translate3d(0px, 0px, 0)" },
                        leave: n,
                        config: void 0,
                    };
                })(r, l.enabled);
            return (0, x.p)(
                t,
                {
                    ...i,
                    config: s ?? ((e, r) => (t ? g : v)),
                    onRest: () => {
                        t || null == n || n();
                    },
                },
                "animate-always",
            );
        })({
            shouldShow: l,
            caretPosition: (0, p.g)(D),
            onExitComplete: () => {
                Z(!1);
            },
        }),
        Y = a.useMemo(() => {
            if ("edge" === N && null != w) {
                let e = "top" === D || "bottom" === D,
                    t = "left" === D || "right" === D;
                if (e) {
                    if ("left" === w || "center" === w || "right" === w) return w;
                } else if (t && ("top" === w || "center" === w || "bottom" === w)) return w;
            }
            return "center";
        }, [N, w, D]),
        X = a.useMemo(() => {
            if ("edge" !== N)
                return (function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "center",
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
                        r = arguments.length > 2 ? arguments[2] : void 0,
                        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                    if ("center" === e || "custom" === e) return 0;
                    let a = "left" === t || "right" === t,
                        l = a ? n : (r ?? 240);
                    if (0 === l) return 0;
                    let s = l / 2 - (a ? 22 : 20);
                    switch (e) {
                        case "start":
                            return s;
                        case "end":
                            return -s;
                        default:
                            return 0;
                    }
                })(E?.align ?? "center", D, z, G);
        }, [N, E, D, z, G]),
        ee = a.useMemo(() => ({ position: D, caretConfig: E ?? { align: "center" } }), [D, E]);
    return (0, n.jsx)(d.$, {
        targetElementRef: r,
        shouldShow: P,
        onRequestClose: j,
        position: D,
        align: Y,
        spacing: 14,
        offset: X,
        layerContext: void 0,
        positionKey: null != X ? `${D}-${X}` : void 0,
        popoutKey: void 0,
        fixed: !1,
        autoInvert: !0,
        nudgeAlignIntoViewport: "top" === D || "bottom" === D,
        closeOnClickOutside: I,
        ignoreModalClicks: $,
        scrollBehavior: S,
        renderPopout: (e) => {
            let { setPopoutRef: r, position: a, nudge: l, ...u } = e;
            return (
                J(a),
                l !== Q.current && ((Q.current = l), B?.(l)),
                K((e, a) => {
                    if (!a) return null;
                    let d = (0, n.jsx)(o.l, {
                        ...u,
                        setDialogRef: r,
                        modal: _,
                        className: s()(null != A ? b.popoverContentWithGradient : b.popover, {
                            [b["popover--video"]]: L,
                        }),
                        returnRef: T,
                        children: (0, n.jsx)(y.Provider, { value: ee, children: t }),
                    });
                    return (0, n.jsx)(i.animated.div, {
                        ref: U,
                        "data-mana-component": "popover",
                        style: {
                            ...e,
                            "--custom-caret-edge-offset-horizontal": "20px",
                            "--custom-caret-edge-offset-vertical": "22px",
                            "--custom-caret-edge-offset-horizontal-nudge": `${l}px`,
                            "--custom-popover-width": "240px",
                        },
                        children:
                            null != A
                                ? (0, n.jsx)(c.h, {
                                      offsetBottom: R,
                                      color: A,
                                      className: b.popoverGradientWrapper,
                                      children: d,
                                  })
                                : d,
                    });
                })
            );
        },
        children: C,
    });
}
