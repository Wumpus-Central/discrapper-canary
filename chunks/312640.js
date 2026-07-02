"use strict";
n.d(t, { x: () => N, e: () => T });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(580929),
    l = n(113325),
    u = n(315629),
    d = n(17928),
    c = n(453903),
    _ = n(765671),
    h = n(186111),
    f = n(795127),
    E = n(844222),
    p = n(866323);
let m = { mass: 1, tension: 800, friction: 32 },
    g = { mass: 1, tension: 1200, friction: 48 };
var A = n(818348),
    I = n(824078);
let T = r.createContext(null),
    S = A.FX;
function N(e) {
    let {
            children: t,
            targetElementRef: n,
            shouldShow: s = !0,
            onRequestClose: A,
            position: N = "top",
            align: C,
            alignmentStrategy: y = "trigger-center",
            caretConfig: v,
            hasVideo: R = !1,
            gradientColor: O,
            gradientOffsetBottom: b = 0.4,
            onPositionChange: L,
            onNudgeChange: D,
            scrollBehavior: P = "sticky",
            modal: w = !1,
            returnRef: M,
            experimental_ignoreModalClicks: x = !0,
            closeOnClickOutside: U = !1,
        } = e,
        [k, G] = r.useState(s),
        [V, F] = r.useState(N),
        B = r.useRef(N),
        j = r.useRef(0),
        { ref: H, width: W, height: Y } = (0, _.Ay)(),
        K = (0, d.bG)([h.A], () => h.A.getLayers()),
        $ = K[K.length - 1] ?? "base",
        z = r.useRef(L);
    r.useEffect(() => {
        z.current = L;
    }, [L]);
    let q = r.useCallback((e) => {
            null != e && e !== B.current && ((B.current = e), F(e), z.current?.(e));
        }, []),
        Z = r.useMemo(
            () => null == n.current || (n.current.closest("[data-layer]")?.getAttribute("data-layer") ?? "base") === $,
            [n, $],
        );
    r.useEffect(() => {
        Z && s ? G(!0) : Z || G(!1);
    }, [Z, s]),
        r.useEffect(() => {
            q(N);
        }, [N, q]);
    let X = (function (e) {
            let { shouldShow: t, caretPosition: n, onExitComplete: i } = e,
                { reducedMotion: s } = r.useContext(E.C),
                { config: a, ...o } = ((e, t) => {
                    let n = { opacity: 0, transform: "" },
                        i = { opacity: 0, transform: "" };
                    if (t)
                        return {
                            from: { opacity: 0 },
                            enter: { opacity: 1 },
                            leave: { opacity: 0 },
                            config: { duration: 150 },
                        };
                    switch (e) {
                        case "top":
                            (n.transform = "translate3d(0, -10px, 0)"), (i.transform = "translate3d(0, -10px, 0)");
                            break;
                        case "bottom":
                            (n.transform = "translate3d(0, 10px, 0)"), (i.transform = "translate3d(0, 10px, 0)");
                            break;
                        case "left":
                            (n.transform = "translate3d(-10px, 0, 0)"), (i.transform = "translate3d(-10px, 0, 0)");
                            break;
                        case "right":
                            (n.transform = "translate3d(10px, 0, 0)"), (i.transform = "translate3d(10px, 0, 0)");
                    }
                    return {
                        from: n,
                        enter: { opacity: 1, transform: "translate3d(0px, 0px, 0)" },
                        leave: i,
                        config: void 0,
                    };
                })(n, s.enabled);
            return (0, p.p)(
                t,
                {
                    ...o,
                    config: a ?? ((e, n) => (t ? m : g)),
                    onRest: () => {
                        t || null == i || i();
                    },
                },
                "animate-always",
            );
        })({
            shouldShow: s,
            caretPosition: (0, f.g)(V),
            onExitComplete: function () {
                G(!1);
            },
        }),
        Q = r.useMemo(() => {
            if ("edge" === y && null != C) {
                let e = "top" === V || "bottom" === V,
                    t = "left" === V || "right" === V;
                if (e) {
                    if ("left" === C || "center" === C || "right" === C) return C;
                } else if (t && ("top" === C || "center" === C || "bottom" === C)) return C;
            }
            return "center";
        }, [y, C, V]),
        J = r.useMemo(() => {
            if ("edge" !== y)
                return (function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "center",
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
                        n = arguments.length > 2 ? arguments[2] : void 0,
                        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                    if ("center" === e || "custom" === e) return 0;
                    let r = "left" === t || "right" === t,
                        s = r ? i : (n ?? 240);
                    if (0 === s) return 0;
                    let a = s / 2 - (r ? 22 : 20);
                    switch (e) {
                        case "start":
                            return a;
                        case "end":
                            return -a;
                        default:
                            return 0;
                    }
                })(v?.align ?? "center", V, W, Y);
        }, [y, v, V, W, Y]),
        ee = r.useMemo(() => ({ position: V, caretConfig: v ?? { align: "center" } }), [V, v]);
    return (0, i.jsx)(c.$, {
        targetElementRef: n,
        shouldShow: k,
        onRequestClose: A,
        position: V,
        align: Q,
        spacing: 14,
        offset: J,
        layerContext: void 0,
        positionKey: null != J ? `${V}-${J}` : void 0,
        popoutKey: void 0,
        fixed: !1,
        autoInvert: !0,
        nudgeAlignIntoViewport: "top" === V || "bottom" === V,
        closeOnClickOutside: U,
        ignoreModalClicks: x,
        scrollBehavior: P,
        renderPopout: (e) => {
            let { setPopoutRef: n, position: r, nudge: s, ...d } = e;
            return (
                q(r),
                s !== j.current && ((j.current = s), D?.(s)),
                X((e, r) => {
                    if (!r) return null;
                    let c = (0, i.jsx)(l.lG, {
                        ...d,
                        setDialogRef: n,
                        modal: w,
                        className: a()(null != O ? I.popoverContentWithGradient : I.popover, {
                            [I["popover--video"]]: R,
                        }),
                        returnRef: M,
                        children: (0, i.jsx)(T.Provider, { value: ee, children: t }),
                    });
                    return (0, i.jsx)(o.animated.div, {
                        ref: H,
                        "data-mana-component": "popover",
                        style: {
                            ...e,
                            "--custom-caret-edge-offset-horizontal": "20px",
                            "--custom-caret-edge-offset-vertical": "22px",
                            "--custom-caret-edge-offset-horizontal-nudge": `${s}px`,
                            "--custom-popover-width": "240px",
                        },
                        children:
                            null != O
                                ? (0, i.jsx)(u.h, {
                                      offsetBottom: b,
                                      color: O,
                                      className: I.popoverGradientWrapper,
                                      children: c,
                                  })
                                : c,
                    });
                })
            );
        },
        children: S,
    });
}
