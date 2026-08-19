n.d(t, { x: () => P, e: () => m });
var i = n(477900),
    s = n(582128),
    a = n(503698),
    l = n.n(a),
    r = n(53466),
    E = n(113325),
    o = n(315629),
    c = n(17928),
    d = n(453903),
    _ = n(765671),
    S = n(186111),
    u = n(795127),
    A = n(844222),
    I = n(866323),
    h = n(555115),
    T = n(231723),
    R = n(818348),
    N = n(753094);
let m = s.createContext(null),
    C = R.FX;
function P(e) {
    let {
            children: t,
            targetElementRef: n,
            shouldShow: a = !0,
            onRequestClose: R,
            position: P = "top",
            align: O,
            alignmentStrategy: x = "trigger-center",
            caretConfig: f,
            hasVideo: v = !1,
            gradientColor: g,
            gradientOffsetBottom: p = 0.4,
            onPositionChange: j,
            onNudgeChange: D,
            scrollBehavior: L = "sticky",
            modal: M = !1,
            returnRef: U,
            experimental_ignoreModalClicks: G = !0,
            closeOnClickOutside: V = !1,
        } = e,
        { transitionState: F } = s.useContext(T.CP),
        w = null != F && F !== T.ip.ENTERED,
        [y, b] = s.useState(a),
        [W, H] = s.useState(P),
        k = s.useRef(P),
        B = s.useRef(0),
        { ref: Y, width: Z, height: K } = (0, _.Ay)(),
        Q = (0, c.bG)([S.A], () => S.A.getLayers()),
        z = Q[Q.length - 1] ?? "base",
        J = s.useRef(j);
    s.useEffect(() => {
        J.current = j;
    }, [j]);
    let $ = s.useCallback((e) => {
            null != e && e !== k.current && ((k.current = e), H(e), J.current?.(e));
        }, []),
        q = s.useMemo(
            () => null == n.current || (n.current.closest("[data-layer]")?.getAttribute("data-layer") ?? "base") === z,
            [n, z],
        );
    s.useEffect(() => {
        w ? b(!1) : q && a ? b(!0) : q || b(!1);
    }, [q, a, w]),
        s.useEffect(() => {
            $(P);
        }, [P, $]);
    let X = (function (e) {
            let { shouldShow: t, caretPosition: n, onExitComplete: i } = e,
                { reducedMotion: a } = s.useContext(A.C),
                { config: l, ...r } = (function (e, t) {
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
                    ...r,
                    config: l ?? ((e, n) => (t ? h.n : h.t)),
                    onRest: () => {
                        t || null == i || i();
                    },
                },
                "animate-always",
            );
        })({
            shouldShow: a && !w,
            caretPosition: (0, u.g)(W),
            onExitComplete: function () {
                b(!1);
            },
        }),
        ee = s.useMemo(() => {
            if ("edge" === x && null != O) {
                let e = "top" === W || "bottom" === W,
                    t = "left" === W || "right" === W;
                if (e) {
                    if ("left" === O || "center" === O || "right" === O) return O;
                } else if (t && ("top" === O || "center" === O || "bottom" === O)) return O;
            }
            return "center";
        }, [x, O, W]),
        et = s.useMemo(() => {
            if ("edge" !== x)
                return (function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "center",
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
                        n = arguments.length > 2 ? arguments[2] : void 0,
                        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                    if ("center" === e || "custom" === e) return 0;
                    let s = "left" === t || "right" === t,
                        a = s ? i : (n ?? 240);
                    if (0 === a) return 0;
                    let l = a / 2 - (s ? 22 : 20);
                    switch (e) {
                        case "start":
                            return l;
                        case "end":
                            return -l;
                        default:
                            return 0;
                    }
                })(f?.align ?? "center", W, Z, K);
        }, [x, f, W, Z, K]),
        en = s.useMemo(() => ({ position: W, caretConfig: f ?? { align: "center" } }), [W, f]);
    return (0, i.jsx)(d.$, {
        targetElementRef: n,
        shouldShow: y && !w,
        onRequestClose: R,
        position: W,
        align: ee,
        spacing: 14,
        offset: et,
        layerContext: void 0,
        positionKey: null != et ? `${W}-${et}` : void 0,
        popoutKey: void 0,
        fixed: !1,
        autoInvert: !0,
        nudgeAlignIntoViewport: "top" === W || "bottom" === W,
        closeOnClickOutside: V,
        ignoreModalClicks: G,
        scrollBehavior: L,
        renderPopout: function (e) {
            let { setPopoutRef: n, position: s, nudge: a, ...c } = e;
            return (
                $(s),
                a !== B.current && ((B.current = a), D?.(a)),
                X((e, s) => {
                    if (!s) return null;
                    let d = (0, i.jsx)(E.lG, {
                        ...c,
                        setDialogRef: n,
                        modal: M,
                        className: l()(null != g ? N.popoverContentWithGradient : N.popover, {
                            [N["popover--video"]]: v,
                        }),
                        returnRef: U,
                        children: (0, i.jsx)(m.Provider, { value: en, children: t }),
                    });
                    return (0, i.jsx)(r.animated.div, {
                        ref: Y,
                        "data-mana-component": "popover",
                        style: {
                            ...e,
                            "--custom-caret-edge-offset-horizontal": "20px",
                            "--custom-caret-edge-offset-vertical": "22px",
                            "--custom-caret-edge-offset-horizontal-nudge": `${a}px`,
                            "--custom-popover-width": "240px",
                        },
                        children:
                            null != g
                                ? (0, i.jsx)(o.h, {
                                      offsetBottom: p,
                                      color: g,
                                      className: N.popoverGradientWrapper,
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
