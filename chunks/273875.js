n.d(t, { x: () => y, e: () => b });
var r = n(477900),
    a = n(582128),
    l = n(503698),
    o = n.n(l),
    s = n(202091),
    i = n(113325),
    c = n(315629),
    u = n(17928),
    d = n(453903),
    f = n(765671),
    p = n(186111),
    h = n(795127),
    m = n(844222),
    x = n(866323),
    g = n(555115),
    v = n(231723),
    j = n(818348),
    C = n(489387);
let b = a.createContext(null),
    k = j.FX;
function y(e) {
    let {
            children: t,
            targetElementRef: n,
            shouldShow: l = !0,
            onRequestClose: j,
            position: y = "top",
            align: w,
            alignmentStrategy: N = "trigger-center",
            caretConfig: L,
            hasVideo: E = !1,
            gradientColor: R,
            gradientOffsetBottom: M = 0.4,
            onPositionChange: S,
            onNudgeChange: $,
            scrollBehavior: A = "sticky",
            modal: Q = !1,
            returnRef: B,
            experimental_ignoreModalClicks: P = !0,
            closeOnClickOutside: Z = !1,
        } = e,
        { transitionState: q } = a.useContext(v.CP),
        D = null != q && q !== v.ip.ENTERED,
        [F, G] = a.useState(l),
        [_, z] = a.useState(y),
        V = a.useRef(y),
        I = a.useRef(0),
        { ref: O, width: T, height: U } = (0, f.Ay)(),
        W = (0, u.bG)([p.A], () => p.A.getLayers()),
        K = W[W.length - 1] ?? "base",
        J = a.useRef(S);
    a.useEffect(() => {
        J.current = S;
    }, [S]);
    let X = a.useCallback((e) => {
            null != e && e !== V.current && ((V.current = e), z(e), J.current?.(e));
        }, []),
        H = a.useMemo(
            () => null == n.current || (n.current.closest("[data-layer]")?.getAttribute("data-layer") ?? "base") === K,
            [n, K],
        );
    (a.useEffect(() => {
        D ? G(!1) : H && l ? G(!0) : H || G(!1);
    }, [H, l, D]),
        a.useEffect(() => {
            X(y);
        }, [y, X]));
    let Y = (function (e) {
            let { shouldShow: t, caretPosition: n, onExitComplete: r } = e,
                { reducedMotion: l } = a.useContext(m.C),
                { config: o, ...s } = (function (e, t) {
                    let n = { opacity: 0, transform: "" },
                        r = { opacity: 0, transform: "" };
                    if (t)
                        return {
                            from: { opacity: 0 },
                            enter: { opacity: 1 },
                            leave: { opacity: 0 },
                            config: { duration: 150 },
                        };
                    switch (e) {
                        case "top":
                            ((n.transform = "translate3d(0, -10px, 0)"), (r.transform = "translate3d(0, -10px, 0)"));
                            break;
                        case "bottom":
                            ((n.transform = "translate3d(0, 10px, 0)"), (r.transform = "translate3d(0, 10px, 0)"));
                            break;
                        case "left":
                            ((n.transform = "translate3d(-10px, 0, 0)"), (r.transform = "translate3d(-10px, 0, 0)"));
                            break;
                        case "right":
                            ((n.transform = "translate3d(10px, 0, 0)"), (r.transform = "translate3d(10px, 0, 0)"));
                    }
                    return {
                        from: n,
                        enter: { opacity: 1, transform: "translate3d(0px, 0px, 0)" },
                        leave: r,
                        config: void 0,
                    };
                })(n, l.enabled);
            return (0, x.p)(
                t,
                {
                    ...s,
                    config: o ?? ((e, n) => (t ? g.n : g.t)),
                    onRest: () => {
                        t || null == r || r();
                    },
                },
                "animate-always",
            );
        })({
            shouldShow: l && !D,
            caretPosition: (0, h.g)(_),
            onExitComplete: function () {
                G(!1);
            },
        }),
        ee = a.useMemo(() => {
            if ("edge" === N && null != w) {
                let e = "top" === _ || "bottom" === _,
                    t = "left" === _ || "right" === _;
                if (e) {
                    if ("left" === w || "center" === w || "right" === w) return w;
                } else if (t && ("top" === w || "center" === w || "bottom" === w)) return w;
            }
            return "center";
        }, [N, w, _]),
        et = a.useMemo(() => {
            if ("edge" !== N)
                return (function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "center",
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
                        n = arguments.length > 2 ? arguments[2] : void 0,
                        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                    if ("center" === e || "custom" === e) return 0;
                    let a = "left" === t || "right" === t,
                        l = a ? r : (n ?? 240);
                    if (0 === l) return 0;
                    let o = l / 2 - (a ? 22 : 20);
                    switch (e) {
                        case "start":
                            return o;
                        case "end":
                            return -o;
                        default:
                            return 0;
                    }
                })(L?.align ?? "center", _, T, U);
        }, [N, L, _, T, U]),
        en = a.useMemo(() => ({ position: _, caretConfig: L ?? { align: "center" } }), [_, L]);
    return (0, r.jsx)(d.$, {
        targetElementRef: n,
        shouldShow: F && !D,
        onRequestClose: j,
        position: _,
        align: ee,
        spacing: 14,
        offset: et,
        layerContext: void 0,
        positionKey: null != et ? `${_}-${et}` : void 0,
        popoutKey: void 0,
        fixed: !1,
        autoInvert: !0,
        nudgeAlignIntoViewport: "top" === _ || "bottom" === _,
        closeOnClickOutside: Z,
        ignoreModalClicks: P,
        scrollBehavior: A,
        renderPopout: function (e) {
            let { setPopoutRef: n, position: a, nudge: l, ...u } = e;
            return (
                X(a),
                l !== I.current && ((I.current = l), $?.(l)),
                Y((e, a) => {
                    if (!a) return null;
                    let d = (0, r.jsx)(i.lG, {
                        ...u,
                        setDialogRef: n,
                        modal: Q,
                        className: o()(null != R ? C.popoverContentWithGradient : C.popover, {
                            [C["popover--video"]]: E,
                        }),
                        returnRef: B,
                        children: (0, r.jsx)(b.Provider, { value: en, children: t }),
                    });
                    return (0, r.jsx)(s.animated.div, {
                        ref: O,
                        "data-mana-component": "popover",
                        style: {
                            ...e,
                            "--custom-caret-edge-offset-horizontal": "20px",
                            "--custom-caret-edge-offset-vertical": "22px",
                            "--custom-caret-edge-offset-horizontal-nudge": `${l}px`,
                            "--custom-popover-width": "240px",
                        },
                        children:
                            null != R
                                ? (0, r.jsx)(c.h, {
                                      offsetBottom: M,
                                      color: R,
                                      className: C.popoverGradientWrapper,
                                      children: d,
                                  })
                                : d,
                    });
                })
            );
        },
        children: k,
    });
}
