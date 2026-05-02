"use strict";
n.d(t, { x: () => N, e: () => T });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(785651),
    l = n(113325),
    u = n(315629),
    c = n(17928),
    d = n(453903),
    _ = n(765671),
    f = n(186111),
    h = n(795127),
    p = n(844222),
    E = n(866323);
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
            align: y,
            alignmentStrategy: C = "trigger-center",
            caretConfig: v,
            hasVideo: O = !1,
            gradientColor: R,
            gradientOffsetBottom: b = 0.4,
            onPositionChange: D,
            onNudgeChange: L,
            scrollBehavior: w = "sticky",
            modal: M = !1,
            returnRef: P,
            experimental_ignoreModalClicks: x = !0,
            closeOnClickOutside: U = !1,
        } = e,
        [k, G] = r.useState(s),
        [F, V] = r.useState(N),
        B = r.useRef(N),
        H = r.useRef(0),
        { ref: j, width: Y, height: W } = (0, _.Ay)(),
        K = (0, c.bG)([f.A], () => f.A.getLayers()),
        z = K[K.length - 1] ?? "base",
        $ = r.useRef(D);
    r.useEffect(() => {
        $.current = D;
    }, [D]);
    let q = r.useCallback((e) => {
            null != e && e !== B.current && ((B.current = e), V(e), $.current?.(e));
        }, []),
        Z = r.useMemo(
            () => null == n.current || (n.current.closest("[data-layer]")?.getAttribute("data-layer") ?? "base") === z,
            [n, z],
        );
    r.useEffect(() => {
        Z && s ? G(!0) : Z || G(!1);
    }, [Z, s]),
        r.useEffect(() => {
            q(N);
        }, [N, q]);
    let X = (function (e) {
            let { shouldShow: t, caretPosition: n, onExitComplete: i } = e,
                { reducedMotion: s } = r.useContext(p.C),
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
            return (0, E.p)(
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
            caretPosition: (0, h.g)(F),
            onExitComplete: () => {
                G(!1);
            },
        }),
        Q = r.useMemo(() => {
            if ("edge" === C && null != y) {
                let e = "top" === F || "bottom" === F,
                    t = "left" === F || "right" === F;
                if (e) {
                    if ("left" === y || "center" === y || "right" === y) return y;
                } else if (t && ("top" === y || "center" === y || "bottom" === y)) return y;
            }
            return "center";
        }, [C, y, F]),
        J = r.useMemo(() => {
            if ("edge" !== C)
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
                })(v?.align ?? "center", F, Y, W);
        }, [C, v, F, Y, W]),
        ee = r.useMemo(() => ({ position: F, caretConfig: v ?? { align: "center" } }), [F, v]);
    return (0, i.jsx)(d.$, {
        targetElementRef: n,
        shouldShow: k,
        onRequestClose: A,
        position: F,
        align: Q,
        spacing: 14,
        offset: J,
        layerContext: void 0,
        positionKey: null != J ? `${F}-${J}` : void 0,
        popoutKey: void 0,
        fixed: !1,
        autoInvert: !0,
        nudgeAlignIntoViewport: "top" === F || "bottom" === F,
        closeOnClickOutside: U,
        ignoreModalClicks: x,
        scrollBehavior: w,
        renderPopout: (e) => {
            let { setPopoutRef: n, position: r, nudge: s, ...c } = e;
            return (
                q(r),
                s !== H.current && ((H.current = s), L?.(s)),
                X((e, r) => {
                    if (!r) return null;
                    let d = (0, i.jsx)(l.l, {
                        ...c,
                        setDialogRef: n,
                        modal: M,
                        className: a()(null != R ? I.popoverContentWithGradient : I.popover, {
                            [I["popover--video"]]: O,
                        }),
                        returnRef: P,
                        children: (0, i.jsx)(T.Provider, { value: ee, children: t }),
                    });
                    return (0, i.jsx)(o.animated.div, {
                        ref: j,
                        "data-mana-component": "popover",
                        style: {
                            ...e,
                            "--custom-caret-edge-offset-horizontal": "20px",
                            "--custom-caret-edge-offset-vertical": "22px",
                            "--custom-caret-edge-offset-horizontal-nudge": `${s}px`,
                            "--custom-popover-width": "240px",
                        },
                        children:
                            null != R
                                ? (0, i.jsx)(u.h, {
                                      offsetBottom: b,
                                      color: R,
                                      className: I.popoverGradientWrapper,
                                      children: d,
                                  })
                                : d,
                    });
                })
            );
        },
        children: S,
    });
}
