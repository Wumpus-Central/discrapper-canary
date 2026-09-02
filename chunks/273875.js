n.d(t, { x: () => S, e: () => b });
var a = n(477900),
    r = n(582128),
    l = n(503698),
    i = n.n(l),
    s = n(221877),
    o = n(113325),
    c = n(315629),
    d = n(17928),
    u = n(453903),
    m = n(765671),
    p = n(186111),
    h = n(795127),
    _ = n(844222),
    g = n(866323),
    f = n(555115),
    E = n(231723),
    x = n(818348),
    v = n(489387);
let b = r.createContext(null),
    I = x.FX;
function S(e) {
    let {
            children: t,
            targetElementRef: n,
            shouldShow: l = !0,
            onRequestClose: x,
            position: S = "top",
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
            experimental_ignoreModalClicks: P = !0,
            closeOnClickOutside: T = !1,
        } = e,
        { transitionState: L } = r.useContext(E.CP),
        V = null != L && L !== E.ip.ENTERED,
        [B, W] = r.useState(l),
        [H, U] = r.useState(S),
        G = r.useRef(S),
        z = r.useRef(0),
        { ref: Z, width: $, height: F } = (0, m.Ay)(),
        K = (0, d.bG)([p.A], () => p.A.getLayers()),
        Q = K[K.length - 1] ?? "base",
        q = r.useRef(w);
    r.useEffect(() => {
        q.current = w;
    }, [w]);
    let J = r.useCallback((e) => {
            null != e && e !== G.current && ((G.current = e), U(e), q.current?.(e));
        }, []),
        Y = r.useMemo(
            () => null == n.current || (n.current.closest("[data-layer]")?.getAttribute("data-layer") ?? "base") === Q,
            [n, Q],
        );
    r.useEffect(() => {
        V ? W(!1) : Y && l ? W(!0) : Y || W(!1);
    }, [Y, l, V]),
        r.useEffect(() => {
            J(S);
        }, [S, J]);
    let X = (function (e) {
            let { shouldShow: t, caretPosition: n, onExitComplete: a } = e,
                { reducedMotion: l } = r.useContext(_.C),
                { config: i, ...s } = (function (e, t) {
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
                    config: i ?? ((e, n) => (t ? f.n : f.t)),
                    onRest: () => {
                        t || null == a || a();
                    },
                },
                "animate-always",
            );
        })({
            shouldShow: l && !V,
            caretPosition: (0, h.g)(H),
            onExitComplete: function () {
                W(!1);
            },
        }),
        ee = r.useMemo(() => {
            if ("edge" === C && null != k) {
                let e = "top" === H || "bottom" === H,
                    t = "left" === H || "right" === H;
                if (e) {
                    if ("left" === k || "center" === k || "right" === k) return k;
                } else if (t && ("top" === k || "center" === k || "bottom" === k)) return k;
            }
            return "center";
        }, [C, k, H]),
        et = r.useMemo(() => {
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
                })(y?.align ?? "center", H, $, F);
        }, [C, y, H, $, F]),
        en = r.useMemo(() => ({ position: H, caretConfig: y ?? { align: "center" } }), [H, y]);
    return (0, a.jsx)(u.$, {
        targetElementRef: n,
        shouldShow: B && !V,
        onRequestClose: x,
        position: H,
        align: ee,
        spacing: 14,
        offset: et,
        layerContext: void 0,
        positionKey: null != et ? `${H}-${et}` : void 0,
        popoutKey: void 0,
        fixed: !1,
        autoInvert: !0,
        nudgeAlignIntoViewport: "top" === H || "bottom" === H,
        closeOnClickOutside: T,
        ignoreModalClicks: P,
        scrollBehavior: N,
        renderPopout: function (e) {
            let { setPopoutRef: n, position: r, nudge: l, ...d } = e;
            return (
                J(r),
                l !== z.current && ((z.current = l), O?.(l)),
                X((e, r) => {
                    if (!r) return null;
                    let u = (0, a.jsx)(o.lG, {
                        ...d,
                        setDialogRef: n,
                        modal: R,
                        className: i()(null != A ? v.popoverContentWithGradient : v.popover, {
                            [v["popover--video"]]: M,
                        }),
                        returnRef: D,
                        children: (0, a.jsx)(b.Provider, { value: en, children: t }),
                    });
                    return (0, a.jsx)(s.animated.div, {
                        ref: Z,
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
        children: I,
    });
}
