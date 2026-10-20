r.d(t, { x: () => w, e: () => b });
var n = r(477900),
    o = r(582128),
    a = r(503698),
    s = r.n(a),
    i = r(941143),
    l = r(113325),
    c = r(315629),
    u = r(17928),
    d = r(453903),
    f = r(765671),
    p = r(186111),
    m = r(795127),
    h = r(844222),
    x = r(866323),
    g = r(555115),
    v = r(231723),
    y = r(818348),
    C = r(489387);
let b = o.createContext(null),
    k = y.FX;
function w(e) {
    let {
            children: t,
            targetElementRef: r,
            shouldShow: a = !0,
            onRequestClose: y,
            position: w = "top",
            align: j,
            alignmentStrategy: L = "trigger-center",
            caretConfig: M,
            hasVideo: N = !1,
            gradientColor: E,
            gradientOffsetBottom: R = 0.4,
            onPositionChange: $,
            onNudgeChange: Q,
            scrollBehavior: P = "sticky",
            trackTargetPosition: S = !0,
            modal: A = !1,
            returnRef: B,
            experimental_ignoreModalClicks: G = !0,
            closeOnClickOutside: Z = !1,
        } = e,
        { transitionState: F } = o.useContext(v.CP),
        _ = null != F && F !== v.ip.ENTERED,
        [z, I] = o.useState(a),
        [O, T] = o.useState(w),
        W = o.useRef(w),
        D = o.useRef(0),
        { ref: K, width: U, height: q } = (0, f.Ay)(),
        V = (0, u.bG)([p.A], () => p.A.getLayers()),
        X = V[V.length - 1] ?? "base",
        H = o.useRef($);
    o.useEffect(() => {
        H.current = $;
    }, [$]);
    let J = o.useCallback((e) => {
            null != e && e !== W.current && ((W.current = e), T(e), H.current?.(e));
        }, []),
        Y = o.useMemo(
            () => null == r.current || (r.current.closest("[data-layer]")?.getAttribute("data-layer") ?? "base") === X,
            [r, X],
        );
    (o.useEffect(() => {
        _ ? I(!1) : Y && a ? I(!0) : Y || I(!1);
    }, [Y, a, _]),
        o.useEffect(() => {
            J(w);
        }, [w, J]));
    let ee = (function (e) {
            let { shouldShow: t, caretPosition: r, onExitComplete: n } = e,
                { reducedMotion: a } = o.useContext(h.C),
                { config: s, ...i } = (function (e, t) {
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
                            ((r.transform = "translate3d(0, -10px, 0)"), (n.transform = "translate3d(0, -10px, 0)"));
                            break;
                        case "bottom":
                            ((r.transform = "translate3d(0, 10px, 0)"), (n.transform = "translate3d(0, 10px, 0)"));
                            break;
                        case "left":
                            ((r.transform = "translate3d(-10px, 0, 0)"), (n.transform = "translate3d(-10px, 0, 0)"));
                            break;
                        case "right":
                            ((r.transform = "translate3d(10px, 0, 0)"), (n.transform = "translate3d(10px, 0, 0)"));
                    }
                    return {
                        from: r,
                        enter: { opacity: 1, transform: "translate3d(0px, 0px, 0)" },
                        leave: n,
                        config: void 0,
                    };
                })(r, a.enabled);
            return (0, x.p)(
                t,
                {
                    ...i,
                    config: s ?? ((e, r) => (t ? g.n : g.t)),
                    onRest: () => {
                        t || null == n || n();
                    },
                },
                "animate-always",
            );
        })({
            shouldShow: a && !_,
            caretPosition: (0, m.g)(O),
            onExitComplete: function () {
                I(!1);
            },
        }),
        et = o.useMemo(() => {
            if ("edge" === L && null != j) {
                let e = "top" === O || "bottom" === O,
                    t = "left" === O || "right" === O;
                if (e) {
                    if ("left" === j || "center" === j || "right" === j) return j;
                } else if (t && ("top" === j || "center" === j || "bottom" === j)) return j;
            }
            return "center";
        }, [L, j, O]),
        er = o.useMemo(() => {
            if ("edge" !== L)
                return (function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "center",
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
                        r = arguments.length > 2 ? arguments[2] : void 0,
                        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                    if ("center" === e || "custom" === e) return 0;
                    let o = "left" === t || "right" === t,
                        a = o ? n : (r ?? 240);
                    if (0 === a) return 0;
                    let s = a / 2 - (o ? 22 : 20);
                    switch (e) {
                        case "start":
                            return s;
                        case "end":
                            return -s;
                        default:
                            return 0;
                    }
                })(M?.align ?? "center", O, U, q);
        }, [L, M, O, U, q]),
        en = o.useMemo(() => ({ position: O, caretConfig: M ?? { align: "center" } }), [O, M]);
    return (0, n.jsx)(d.$n, {
        targetElementRef: r,
        shouldShow: z && !_,
        onRequestClose: y,
        position: O,
        align: et,
        spacing: 14,
        offset: er,
        layerContext: void 0,
        positionKey: null != er ? `${O}-${er}` : void 0,
        popoutKey: void 0,
        fixed: !1,
        trackTargetPosition: S,
        autoInvert: !0,
        nudgeAlignIntoViewport: "top" === O || "bottom" === O,
        closeOnClickOutside: Z,
        ignoreModalClicks: G,
        scrollBehavior: P,
        renderPopout: function (e) {
            let { setPopoutRef: r, position: o, nudge: a, ...u } = e;
            return (
                J(o),
                a !== D.current && ((D.current = a), Q?.(a)),
                ee((e, o) => {
                    if (!o) return null;
                    let d = (0, n.jsx)(l.lG, {
                            ...u,
                            setDialogRef: r,
                            modal: A,
                            className: s()(null != E ? C.popoverContentWithGradient : C.popover, {
                                [C["popover--video"]]: N,
                            }),
                            returnRef: B,
                            children: (0, n.jsx)(b.Provider, { value: en, children: t }),
                        }),
                        f = {
                            ...e,
                            "--custom-caret-edge-offset-horizontal": "20px",
                            "--custom-caret-edge-offset-vertical": "22px",
                            "--custom-caret-edge-offset-horizontal-nudge": `${a}px`,
                            "--custom-popover-width": "240px",
                        };
                    return (0, n.jsx)(i.animated.div, {
                        ref: K,
                        "data-mana-component": "popover",
                        style: f,
                        children:
                            null != E
                                ? (0, n.jsx)(c.h, {
                                      offsetBottom: R,
                                      color: E,
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
