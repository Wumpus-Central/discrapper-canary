a.d(t, { x: () => A, e: () => w });
var n = a(627968),
    r = a(64700),
    l = a(503698),
    i = a.n(l),
    s = a(419354),
    o = a(113325),
    c = a(315629),
    d = a(17928),
    u = a(453903),
    h = a(765671),
    m = a(186111),
    p = a(795127),
    _ = a(844222),
    g = a(866323);
let f = { mass: 1, tension: 800, friction: 32 },
    v = { mass: 1, tension: 1200, friction: 48 };
var E = a(818348),
    x = a(824078);
let w = r.createContext(null),
    I = E.FX;
function A(e) {
    let {
            children: t,
            targetElementRef: a,
            shouldShow: l = !0,
            onRequestClose: E,
            position: A = "top",
            align: b,
            alignmentStrategy: C = "trigger-center",
            caretConfig: y,
            hasVideo: M = !1,
            gradientColor: S,
            gradientOffsetBottom: k = 0.4,
            onPositionChange: j,
            onNudgeChange: N,
            scrollBehavior: T = "sticky",
            modal: O = !1,
            returnRef: R,
            experimental_ignoreModalClicks: D = !0,
            closeOnClickOutside: L = !1,
        } = e,
        [P, B] = r.useState(l),
        [V, U] = r.useState(A),
        Z = r.useRef(A),
        H = r.useRef(0),
        { ref: W, width: G, height: F } = (0, h.Ay)(),
        z = (0, d.bG)([m.A], () => m.A.getLayers()),
        J = z[z.length - 1] ?? "base",
        $ = r.useRef(j);
    r.useEffect(() => {
        $.current = j;
    }, [j]);
    let K = r.useCallback((e) => {
            null != e && e !== Z.current && ((Z.current = e), U(e), $.current?.(e));
        }, []),
        Q = r.useMemo(
            () => null == a.current || (a.current.closest("[data-layer]")?.getAttribute("data-layer") ?? "base") === J,
            [a, J],
        );
    r.useEffect(() => {
        Q && l ? B(!0) : Q || B(!1);
    }, [Q, l]),
        r.useEffect(() => {
            K(A);
        }, [A, K]);
    let q = (function (e) {
            let { shouldShow: t, caretPosition: a, onExitComplete: n } = e,
                { reducedMotion: l } = r.useContext(_.C),
                { config: i, ...s } = ((e, t) => {
                    let a = { opacity: 0, transform: "" },
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
                            (a.transform = "translate3d(0, -10px, 0)"), (n.transform = "translate3d(0, -10px, 0)");
                            break;
                        case "bottom":
                            (a.transform = "translate3d(0, 10px, 0)"), (n.transform = "translate3d(0, 10px, 0)");
                            break;
                        case "left":
                            (a.transform = "translate3d(-10px, 0, 0)"), (n.transform = "translate3d(-10px, 0, 0)");
                            break;
                        case "right":
                            (a.transform = "translate3d(10px, 0, 0)"), (n.transform = "translate3d(10px, 0, 0)");
                    }
                    return {
                        from: a,
                        enter: { opacity: 1, transform: "translate3d(0px, 0px, 0)" },
                        leave: n,
                        config: void 0,
                    };
                })(a, l.enabled);
            return (0, g.p)(
                t,
                {
                    ...s,
                    config: i ?? ((e, a) => (t ? f : v)),
                    onRest: () => {
                        t || null == n || n();
                    },
                },
                "animate-always",
            );
        })({
            shouldShow: l,
            caretPosition: (0, p.g)(V),
            onExitComplete: () => {
                B(!1);
            },
        }),
        Y = r.useMemo(() => {
            if ("edge" === C && null != b) {
                let e = "top" === V || "bottom" === V,
                    t = "left" === V || "right" === V;
                if (e) {
                    if ("left" === b || "center" === b || "right" === b) return b;
                } else if (t && ("top" === b || "center" === b || "bottom" === b)) return b;
            }
            return "center";
        }, [C, b, V]),
        X = r.useMemo(() => {
            if ("edge" !== C)
                return (function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "center",
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
                        a = arguments.length > 2 ? arguments[2] : void 0,
                        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                    if ("center" === e || "custom" === e) return 0;
                    let r = "left" === t || "right" === t,
                        l = r ? n : (a ?? 240);
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
                })(y?.align ?? "center", V, G, F);
        }, [C, y, V, G, F]),
        ee = r.useMemo(() => ({ position: V, caretConfig: y ?? { align: "center" } }), [V, y]);
    return (0, n.jsx)(u.$, {
        targetElementRef: a,
        shouldShow: P,
        onRequestClose: E,
        position: V,
        align: Y,
        spacing: 14,
        offset: X,
        layerContext: void 0,
        positionKey: null != X ? `${V}-${X}` : void 0,
        popoutKey: void 0,
        fixed: !1,
        autoInvert: !0,
        nudgeAlignIntoViewport: "top" === V || "bottom" === V,
        closeOnClickOutside: L,
        ignoreModalClicks: D,
        scrollBehavior: T,
        renderPopout: (e) => {
            let { setPopoutRef: a, position: r, nudge: l, ...d } = e;
            return (
                K(r),
                l !== H.current && ((H.current = l), N?.(l)),
                q((e, r) => {
                    if (!r) return null;
                    let u = (0, n.jsx)(o.l, {
                        ...d,
                        setDialogRef: a,
                        modal: O,
                        className: i()(null != S ? x.popoverContentWithGradient : x.popover, {
                            [x["popover--video"]]: M,
                        }),
                        returnRef: R,
                        children: (0, n.jsx)(w.Provider, { value: ee, children: t }),
                    });
                    return (0, n.jsx)(s.animated.div, {
                        ref: W,
                        "data-mana-component": "popover",
                        style: {
                            ...e,
                            "--custom-caret-edge-offset-horizontal": "20px",
                            "--custom-caret-edge-offset-vertical": "22px",
                            "--custom-caret-edge-offset-horizontal-nudge": `${l}px`,
                            "--custom-popover-width": "240px",
                        },
                        children:
                            null != S
                                ? (0, n.jsx)(c.h, {
                                      offsetBottom: k,
                                      color: S,
                                      className: x.popoverGradientWrapper,
                                      children: u,
                                  })
                                : u,
                    });
                })
            );
        },
        children: I,
    });
}
