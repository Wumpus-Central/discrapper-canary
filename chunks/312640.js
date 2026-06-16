n.d(t, { x: () => I, e: () => b });
var a = n(627968),
    r = n(64700),
    l = n(503698),
    i = n.n(l),
    s = n(922139),
    o = n(113325),
    c = n(315629),
    d = n(17928),
    u = n(453903),
    m = n(765671),
    h = n(186111),
    p = n(795127),
    _ = n(844222),
    g = n(866323);
let f = { mass: 1, tension: 800, friction: 32 },
    E = { mass: 1, tension: 1200, friction: 48 };
var x = n(818348),
    v = n(824078);
let b = r.createContext(null),
    S = x.FX;
function I(e) {
    let {
            children: t,
            targetElementRef: n,
            shouldShow: l = !0,
            onRequestClose: x,
            position: I = "top",
            align: k,
            alignmentStrategy: C = "trigger-center",
            caretConfig: y,
            hasVideo: M = !1,
            gradientColor: A,
            gradientOffsetBottom: j = 0.4,
            onPositionChange: w,
            onNudgeChange: O,
            scrollBehavior: N = "sticky",
            modal: R = !1,
            returnRef: D,
            experimental_ignoreModalClicks: T = !0,
            closeOnClickOutside: P = !1,
        } = e,
        [L, V] = r.useState(l),
        [B, W] = r.useState(I),
        H = r.useRef(I),
        U = r.useRef(0),
        { ref: G, width: z, height: Z } = (0, m.Ay)(),
        $ = (0, d.bG)([h.A], () => h.A.getLayers()),
        F = $[$.length - 1] ?? "base",
        K = r.useRef(w);
    r.useEffect(() => {
        K.current = w;
    }, [w]);
    let Q = r.useCallback((e) => {
            null != e && e !== H.current && ((H.current = e), W(e), K.current?.(e));
        }, []),
        q = r.useMemo(
            () => null == n.current || (n.current.closest("[data-layer]")?.getAttribute("data-layer") ?? "base") === F,
            [n, F],
        );
    r.useEffect(() => {
        q && l ? V(!0) : q || V(!1);
    }, [q, l]),
        r.useEffect(() => {
            Q(I);
        }, [I, Q]);
    let J = (function (e) {
            let { shouldShow: t, caretPosition: n, onExitComplete: a } = e,
                { reducedMotion: l } = r.useContext(_.C),
                { config: i, ...s } = ((e, t) => {
                    let n = { opacity: 0, transform: "" },
                        a = { opacity: 0, transform: "" };
                    if (t)
                        return {
                            from: { opacity: 0 },
                            enter: { opacity: 1 },
                            leave: { opacity: 0 },
                            config: { duration: 150 },
                        };
                    switch (e) {
                        case "top":
                            (n.transform = "translate3d(0, -10px, 0)"), (a.transform = "translate3d(0, -10px, 0)");
                            break;
                        case "bottom":
                            (n.transform = "translate3d(0, 10px, 0)"), (a.transform = "translate3d(0, 10px, 0)");
                            break;
                        case "left":
                            (n.transform = "translate3d(-10px, 0, 0)"), (a.transform = "translate3d(-10px, 0, 0)");
                            break;
                        case "right":
                            (n.transform = "translate3d(10px, 0, 0)"), (a.transform = "translate3d(10px, 0, 0)");
                    }
                    return {
                        from: n,
                        enter: { opacity: 1, transform: "translate3d(0px, 0px, 0)" },
                        leave: a,
                        config: void 0,
                    };
                })(n, l.enabled);
            return (0, g.p)(
                t,
                {
                    ...s,
                    config: i ?? ((e, n) => (t ? f : E)),
                    onRest: () => {
                        t || null == a || a();
                    },
                },
                "animate-always",
            );
        })({
            shouldShow: l,
            caretPosition: (0, p.g)(B),
            onExitComplete: () => {
                V(!1);
            },
        }),
        Y = r.useMemo(() => {
            if ("edge" === C && null != k) {
                let e = "top" === B || "bottom" === B,
                    t = "left" === B || "right" === B;
                if (e) {
                    if ("left" === k || "center" === k || "right" === k) return k;
                } else if (t && ("top" === k || "center" === k || "bottom" === k)) return k;
            }
            return "center";
        }, [C, k, B]),
        X = r.useMemo(() => {
            if ("edge" !== C)
                return (function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "center",
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
                        n = arguments.length > 2 ? arguments[2] : void 0,
                        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                    if ("center" === e || "custom" === e) return 0;
                    let r = "left" === t || "right" === t,
                        l = r ? a : (n ?? 240);
                    if (0 === l) return 0;
                    let i = l / 2 - (r ? 22 : 20);
                    switch (e) {
                        case "start":
                            return i;
                        case "end":
                            return -i;
                        default:
                            return 0;
                    }
                })(y?.align ?? "center", B, z, Z);
        }, [C, y, B, z, Z]),
        ee = r.useMemo(() => ({ position: B, caretConfig: y ?? { align: "center" } }), [B, y]);
    return (0, a.jsx)(u.$, {
        targetElementRef: n,
        shouldShow: L,
        onRequestClose: x,
        position: B,
        align: Y,
        spacing: 14,
        offset: X,
        layerContext: void 0,
        positionKey: null != X ? `${B}-${X}` : void 0,
        popoutKey: void 0,
        fixed: !1,
        autoInvert: !0,
        nudgeAlignIntoViewport: "top" === B || "bottom" === B,
        closeOnClickOutside: P,
        ignoreModalClicks: T,
        scrollBehavior: N,
        renderPopout: (e) => {
            let { setPopoutRef: n, position: r, nudge: l, ...d } = e;
            return (
                Q(r),
                l !== U.current && ((U.current = l), O?.(l)),
                J((e, r) => {
                    if (!r) return null;
                    let u = (0, a.jsx)(o.lG, {
                        ...d,
                        setDialogRef: n,
                        modal: R,
                        className: i()(null != A ? v.popoverContentWithGradient : v.popover, {
                            [v["popover--video"]]: M,
                        }),
                        returnRef: D,
                        children: (0, a.jsx)(b.Provider, { value: ee, children: t }),
                    });
                    return (0, a.jsx)(s.animated.div, {
                        ref: G,
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
                                ? (0, a.jsx)(c.h, {
                                      offsetBottom: j,
                                      color: A,
                                      className: v.popoverGradientWrapper,
                                      children: u,
                                  })
                                : u,
                    });
                })
            );
        },
        children: S,
    });
}
