"use strict";
n.d(t, { x: () => N, e: () => g });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(580929),
    o = n(113325),
    d = n(315629),
    c = n(17928),
    u = n(453903),
    _ = n(765671),
    E = n(186111),
    A = n(795127),
    h = n(844222),
    I = n(866323);
let f = { mass: 1, tension: 800, friction: 32 },
    p = { mass: 1, tension: 1200, friction: 48 };
var T = n(818348),
    m = n(77006);
let g = r.createContext(null),
    S = T.FX;
function N(e) {
    let {
            children: t,
            targetElementRef: n,
            shouldShow: a = !0,
            onRequestClose: T,
            position: N = "top",
            align: C,
            alignmentStrategy: R = "trigger-center",
            caretConfig: O,
            hasVideo: L = !1,
            gradientColor: D,
            gradientOffsetBottom: y = 0.4,
            onPositionChange: v,
            onNudgeChange: b,
            scrollBehavior: M = "sticky",
            modal: P = !1,
            returnRef: U,
            experimental_ignoreModalClicks: w = !0,
            closeOnClickOutside: G = !1,
        } = e,
        [x, k] = r.useState(a),
        [F, V] = r.useState(N),
        B = r.useRef(N),
        H = r.useRef(0),
        { ref: j, width: W, height: Y } = (0, _.Ay)(),
        K = (0, c.bG)([E.A], () => E.A.getLayers()),
        $ = K[K.length - 1] ?? "base",
        z = r.useRef(v);
    r.useEffect(() => {
        z.current = v;
    }, [v]);
    let q = r.useCallback((e) => {
            null != e && e !== B.current && ((B.current = e), V(e), z.current?.(e));
        }, []),
        Z = r.useMemo(
            () => null == n.current || (n.current.closest("[data-layer]")?.getAttribute("data-layer") ?? "base") === $,
            [n, $],
        );
    r.useEffect(() => {
        Z && a ? k(!0) : Z || k(!1);
    }, [Z, a]),
        r.useEffect(() => {
            q(N);
        }, [N, q]);
    let X = (function (e) {
            let { shouldShow: t, caretPosition: n, onExitComplete: i } = e,
                { reducedMotion: a } = r.useContext(h.C),
                { config: s, ...l } = ((e, t) => {
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
                })(n, a.enabled);
            return (0, I.p)(
                t,
                {
                    ...l,
                    config: s ?? ((e, n) => (t ? f : p)),
                    onRest: () => {
                        t || null == i || i();
                    },
                },
                "animate-always",
            );
        })({
            shouldShow: a,
            caretPosition: (0, A.g)(F),
            onExitComplete: function () {
                k(!1);
            },
        }),
        Q = r.useMemo(() => {
            if ("edge" === R && null != C) {
                let e = "top" === F || "bottom" === F,
                    t = "left" === F || "right" === F;
                if (e) {
                    if ("left" === C || "center" === C || "right" === C) return C;
                } else if (t && ("top" === C || "center" === C || "bottom" === C)) return C;
            }
            return "center";
        }, [R, C, F]),
        J = r.useMemo(() => {
            if ("edge" !== R)
                return (function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "center",
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
                        n = arguments.length > 2 ? arguments[2] : void 0,
                        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                    if ("center" === e || "custom" === e) return 0;
                    let r = "left" === t || "right" === t,
                        a = r ? i : (n ?? 240);
                    if (0 === a) return 0;
                    let s = a / 2 - (r ? 22 : 20);
                    switch (e) {
                        case "start":
                            return s;
                        case "end":
                            return -s;
                        default:
                            return 0;
                    }
                })(O?.align ?? "center", F, W, Y);
        }, [R, O, F, W, Y]),
        ee = r.useMemo(() => ({ position: F, caretConfig: O ?? { align: "center" } }), [F, O]);
    return (0, i.jsx)(u.$, {
        targetElementRef: n,
        shouldShow: x,
        onRequestClose: T,
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
        closeOnClickOutside: G,
        ignoreModalClicks: w,
        scrollBehavior: M,
        renderPopout: (e) => {
            let { setPopoutRef: n, position: r, nudge: a, ...c } = e;
            return (
                q(r),
                a !== H.current && ((H.current = a), b?.(a)),
                X((e, r) => {
                    if (!r) return null;
                    let u = (0, i.jsx)(o.lG, {
                        ...c,
                        setDialogRef: n,
                        modal: P,
                        className: s()(null != D ? m.popoverContentWithGradient : m.popover, {
                            [m["popover--video"]]: L,
                        }),
                        returnRef: U,
                        children: (0, i.jsx)(g.Provider, { value: ee, children: t }),
                    });
                    return (0, i.jsx)(l.animated.div, {
                        ref: j,
                        "data-mana-component": "popover",
                        style: {
                            ...e,
                            "--custom-caret-edge-offset-horizontal": "20px",
                            "--custom-caret-edge-offset-vertical": "22px",
                            "--custom-caret-edge-offset-horizontal-nudge": `${a}px`,
                            "--custom-popover-width": "240px",
                        },
                        children:
                            null != D
                                ? (0, i.jsx)(d.h, {
                                      offsetBottom: y,
                                      color: D,
                                      className: m.popoverGradientWrapper,
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
