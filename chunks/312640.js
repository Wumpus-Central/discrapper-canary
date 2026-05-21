r.d(t, { x: () => k, e: () => y });
var n = r(627968),
    a = r(64700),
    l = r(503698),
    s = r.n(l),
    i = r(873174),
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
            caretConfig: L,
            hasVideo: R = !1,
            gradientColor: E,
            gradientOffsetBottom: S = 0.4,
            onPositionChange: A,
            onNudgeChange: M,
            scrollBehavior: B = "sticky",
            modal: $ = !1,
            returnRef: _,
            experimental_ignoreModalClicks: P = !0,
            closeOnClickOutside: D = !1,
        } = e,
        [F, Q] = a.useState(l),
        [T, q] = a.useState(k),
        O = a.useRef(k),
        U = a.useRef(0),
        { ref: Z, width: z, height: G } = (0, h.Ay)(),
        I = (0, u.bG)([f.A], () => f.A.getLayers()),
        V = I[I.length - 1] ?? "base",
        W = a.useRef(A);
    a.useEffect(() => {
        W.current = A;
    }, [A]);
    let J = a.useCallback((e) => {
            null != e && e !== O.current && ((O.current = e), q(e), W.current?.(e));
        }, []),
        H = a.useMemo(
            () => null == r.current || (r.current.closest("[data-layer]")?.getAttribute("data-layer") ?? "base") === V,
            [r, V],
        );
    a.useEffect(() => {
        H && l ? Q(!0) : H || Q(!1);
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
            caretPosition: (0, p.g)(T),
            onExitComplete: () => {
                Q(!1);
            },
        }),
        Y = a.useMemo(() => {
            if ("edge" === N && null != w) {
                let e = "top" === T || "bottom" === T,
                    t = "left" === T || "right" === T;
                if (e) {
                    if ("left" === w || "center" === w || "right" === w) return w;
                } else if (t && ("top" === w || "center" === w || "bottom" === w)) return w;
            }
            return "center";
        }, [N, w, T]),
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
                })(L?.align ?? "center", T, z, G);
        }, [N, L, T, z, G]),
        ee = a.useMemo(() => ({ position: T, caretConfig: L ?? { align: "center" } }), [T, L]);
    return (0, n.jsx)(d.$, {
        targetElementRef: r,
        shouldShow: F,
        onRequestClose: j,
        position: T,
        align: Y,
        spacing: 14,
        offset: X,
        layerContext: void 0,
        positionKey: null != X ? `${T}-${X}` : void 0,
        popoutKey: void 0,
        fixed: !1,
        autoInvert: !0,
        nudgeAlignIntoViewport: "top" === T || "bottom" === T,
        closeOnClickOutside: D,
        ignoreModalClicks: P,
        scrollBehavior: B,
        renderPopout: (e) => {
            let { setPopoutRef: r, position: a, nudge: l, ...u } = e;
            return (
                J(a),
                l !== U.current && ((U.current = l), M?.(l)),
                K((e, a) => {
                    if (!a) return null;
                    let d = (0, n.jsx)(o.l, {
                        ...u,
                        setDialogRef: r,
                        modal: $,
                        className: s()(null != E ? b.popoverContentWithGradient : b.popover, {
                            [b["popover--video"]]: R,
                        }),
                        returnRef: _,
                        children: (0, n.jsx)(y.Provider, { value: ee, children: t }),
                    });
                    return (0, n.jsx)(i.animated.div, {
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
                            null != E
                                ? (0, n.jsx)(c.h, {
                                      offsetBottom: S,
                                      color: E,
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
