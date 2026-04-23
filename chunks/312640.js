"use strict";
n.d(t, { x: () => N, e: () => T });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(419354),
    l = n(113325),
    d = n(315629),
    _ = n(17928),
    u = n(453903),
    c = n(765671),
    E = n(186111),
    h = n(795127),
    m = n(844222),
    f = n(866323);
let g = { mass: 1, tension: 800, friction: 32 },
    p = { mass: 1, tension: 1200, friction: 48 };
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
            alignmentStrategy: R = "trigger-center",
            caretConfig: O,
            hasVideo: y = !1,
            gradientColor: v,
            gradientOffsetBottom: D = 0.4,
            onPositionChange: L,
            onNudgeChange: b,
            scrollBehavior: w = "sticky",
            modal: P = !1,
            returnRef: k,
            experimental_ignoreModalClicks: M = !0,
            closeOnClickOutside: U = !1,
        } = e,
        [x, G] = r.useState(s),
        [V, F] = r.useState(N),
        B = r.useRef(N),
        H = r.useRef(0),
        { ref: j, width: W, height: Y } = (0, c.Ay)(),
        K = (0, _.bG)([E.A], () => E.A.getLayers()),
        z = K[K.length - 1] ?? "base",
        $ = r.useRef(L);
    r.useEffect(() => {
        $.current = L;
    }, [L]);
    let q = r.useCallback((e) => {
            null != e && e !== B.current && ((B.current = e), F(e), $.current?.(e));
        }, []),
        X = r.useMemo(
            () => null == n.current || (n.current.closest("[data-layer]")?.getAttribute("data-layer") ?? "base") === z,
            [n, z],
        );
    r.useEffect(() => {
        X && s ? G(!0) : X || G(!1);
    }, [X, s]),
        r.useEffect(() => {
            q(N);
        }, [N, q]);
    let Z = (function (e) {
            let { shouldShow: t, caretPosition: n, onExitComplete: i } = e,
                { reducedMotion: s } = r.useContext(m.C),
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
            return (0, f.p)(
                t,
                {
                    ...o,
                    config: a ?? ((e, n) => (t ? g : p)),
                    onRest: () => {
                        t || null == i || i();
                    },
                },
                "animate-always",
            );
        })({
            shouldShow: s,
            caretPosition: (0, h.g)(V),
            onExitComplete: () => {
                G(!1);
            },
        }),
        Q = r.useMemo(() => {
            if ("edge" === R && null != C) {
                let e = "top" === V || "bottom" === V,
                    t = "left" === V || "right" === V;
                if (e) {
                    if ("left" === C || "center" === C || "right" === C) return C;
                } else if (t && ("top" === C || "center" === C || "bottom" === C)) return C;
            }
            return "center";
        }, [R, C, V]),
        J = r.useMemo(() => {
            if ("edge" !== R)
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
                })(O?.align ?? "center", V, W, Y);
        }, [R, O, V, W, Y]),
        ee = r.useMemo(() => ({ position: V, caretConfig: O ?? { align: "center" } }), [V, O]);
    return (0, i.jsx)(u.$, {
        targetElementRef: n,
        shouldShow: x,
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
        ignoreModalClicks: M,
        scrollBehavior: w,
        renderPopout: (e) => {
            let { setPopoutRef: n, position: r, nudge: s, ..._ } = e;
            return (
                q(r),
                s !== H.current && ((H.current = s), b?.(s)),
                Z((e, r) => {
                    if (!r) return null;
                    let u = (0, i.jsx)(l.l, {
                        ..._,
                        setDialogRef: n,
                        modal: P,
                        className: a()(null != v ? I.popoverContentWithGradient : I.popover, {
                            [I["popover--video"]]: y,
                        }),
                        returnRef: k,
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
                            null != v
                                ? (0, i.jsx)(d.h, {
                                      offsetBottom: D,
                                      color: v,
                                      className: I.popoverGradientWrapper,
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
