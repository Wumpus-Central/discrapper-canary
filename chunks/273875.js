n.d(t, { x: () => C, e: () => b });
var a = n(477900),
    r = n(582128),
    l = n(503698),
    i = n.n(l),
    s = n(53466),
    o = n(113325),
    c = n(315629),
    d = n(17928),
    u = n(453903),
    m = n(765671),
    h = n(186111),
    p = n(795127),
    _ = n(844222),
    g = n(866323),
    f = n(555115),
    E = n(231723),
    x = n(818348),
    v = n(753094);
let b = r.createContext(null),
    I = x.FX;
function C(e) {
    let {
            children: t,
            targetElementRef: n,
            shouldShow: l = !0,
            onRequestClose: x,
            position: C = "top",
            align: S,
            alignmentStrategy: k = "trigger-center",
            caretConfig: y,
            hasVideo: A = !1,
            gradientColor: M,
            gradientOffsetBottom: j = 0.4,
            onPositionChange: w,
            onNudgeChange: N,
            scrollBehavior: O = "sticky",
            modal: R = !1,
            returnRef: D,
            experimental_ignoreModalClicks: T = !0,
            closeOnClickOutside: P = !1,
        } = e,
        { transitionState: L } = r.useContext(E.CP),
        V = null != L && L !== E.ip.ENTERED,
        [B, W] = r.useState(l),
        [U, H] = r.useState(C),
        G = r.useRef(C),
        Z = r.useRef(0),
        { ref: z, width: F, height: $ } = (0, m.Ay)(),
        K = (0, d.bG)([h.A], () => h.A.getLayers()),
        Q = K[K.length - 1] ?? "base",
        q = r.useRef(w);
    r.useEffect(() => {
        q.current = w;
    }, [w]);
    let J = r.useCallback((e) => {
            null != e && e !== G.current && ((G.current = e), H(e), q.current?.(e));
        }, []),
        Y = r.useMemo(
            () => null == n.current || (n.current.closest("[data-layer]")?.getAttribute("data-layer") ?? "base") === Q,
            [n, Q],
        );
    r.useEffect(() => {
        V ? W(!1) : Y && l ? W(!0) : Y || W(!1);
    }, [Y, l, V]),
        r.useEffect(() => {
            J(C);
        }, [C, J]);
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
            caretPosition: (0, p.g)(U),
            onExitComplete: function () {
                W(!1);
            },
        }),
        ee = r.useMemo(() => {
            if ("edge" === k && null != S) {
                let e = "top" === U || "bottom" === U,
                    t = "left" === U || "right" === U;
                if (e) {
                    if ("left" === S || "center" === S || "right" === S) return S;
                } else if (t && ("top" === S || "center" === S || "bottom" === S)) return S;
            }
            return "center";
        }, [k, S, U]),
        et = r.useMemo(() => {
            if ("edge" !== k)
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
                })(y?.align ?? "center", U, F, $);
        }, [k, y, U, F, $]),
        en = r.useMemo(() => ({ position: U, caretConfig: y ?? { align: "center" } }), [U, y]);
    return (0, a.jsx)(u.$, {
        targetElementRef: n,
        shouldShow: B && !V,
        onRequestClose: x,
        position: U,
        align: ee,
        spacing: 14,
        offset: et,
        layerContext: void 0,
        positionKey: null != et ? `${U}-${et}` : void 0,
        popoutKey: void 0,
        fixed: !1,
        autoInvert: !0,
        nudgeAlignIntoViewport: "top" === U || "bottom" === U,
        closeOnClickOutside: P,
        ignoreModalClicks: T,
        scrollBehavior: O,
        renderPopout: function (e) {
            let { setPopoutRef: n, position: r, nudge: l, ...d } = e;
            return (
                J(r),
                l !== Z.current && ((Z.current = l), N?.(l)),
                X((e, r) => {
                    if (!r) return null;
                    let u = (0, a.jsx)(o.lG, {
                        ...d,
                        setDialogRef: n,
                        modal: R,
                        className: i()(null != M ? v.popoverContentWithGradient : v.popover, {
                            [v["popover--video"]]: A,
                        }),
                        returnRef: D,
                        children: (0, a.jsx)(b.Provider, { value: en, children: t }),
                    });
                    return (0, a.jsx)(s.animated.div, {
                        ref: z,
                        "data-mana-component": "popover",
                        style: {
                            ...e,
                            "--custom-caret-edge-offset-horizontal": "20px",
                            "--custom-caret-edge-offset-vertical": "22px",
                            "--custom-caret-edge-offset-horizontal-nudge": `${l}px`,
                            "--custom-popover-width": "240px",
                        },
                        children:
                            null != M
                                ? (0, a.jsx)(c.h, {
                                      offsetBottom: j,
                                      color: M,
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
