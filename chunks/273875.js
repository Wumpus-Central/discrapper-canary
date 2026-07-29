"use strict";
n.d(t, { x: () => S, e: () => m });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(461376),
    o = n(113325),
    d = n(315629),
    c = n(17928),
    u = n(453903),
    _ = n(765671),
    E = n(186111),
    A = n(795127),
    h = n(844222),
    I = n(866323),
    f = n(555115),
    p = n(818348),
    T = n(753094);
let m = r.createContext(null),
    g = p.FX;
function S(e) {
    let {
            children: t,
            targetElementRef: n,
            shouldShow: a = !0,
            onRequestClose: p,
            position: S = "top",
            align: N,
            alignmentStrategy: C = "trigger-center",
            caretConfig: O,
            hasVideo: R = !1,
            gradientColor: L,
            gradientOffsetBottom: y = 0.4,
            onPositionChange: D,
            onNudgeChange: v,
            scrollBehavior: b = "sticky",
            modal: M = !1,
            returnRef: P,
            experimental_ignoreModalClicks: U = !0,
            closeOnClickOutside: w = !1,
        } = e,
        [G, x] = r.useState(a),
        [k, F] = r.useState(S),
        V = r.useRef(S),
        B = r.useRef(0),
        { ref: H, width: j, height: W } = (0, _.Ay)(),
        Y = (0, c.bG)([E.A], () => E.A.getLayers()),
        K = Y[Y.length - 1] ?? "base",
        $ = r.useRef(D);
    r.useEffect(() => {
        $.current = D;
    }, [D]);
    let z = r.useCallback((e) => {
            null != e && e !== V.current && ((V.current = e), F(e), $.current?.(e));
        }, []),
        q = r.useMemo(
            () => null == n.current || (n.current.closest("[data-layer]")?.getAttribute("data-layer") ?? "base") === K,
            [n, K],
        );
    r.useEffect(() => {
        q && a ? x(!0) : q || x(!1);
    }, [q, a]),
        r.useEffect(() => {
            z(S);
        }, [S, z]);
    let Z = (function (e) {
            let { shouldShow: t, caretPosition: n, onExitComplete: i } = e,
                { reducedMotion: a } = r.useContext(h.C),
                { config: s, ...l } = (function (e, t) {
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
                    config: s ?? ((e, n) => (t ? f.n : f.t)),
                    onRest: () => {
                        t || null == i || i();
                    },
                },
                "animate-always",
            );
        })({
            shouldShow: a,
            caretPosition: (0, A.g)(k),
            onExitComplete: function () {
                x(!1);
            },
        }),
        X = r.useMemo(() => {
            if ("edge" === C && null != N) {
                let e = "top" === k || "bottom" === k,
                    t = "left" === k || "right" === k;
                if (e) {
                    if ("left" === N || "center" === N || "right" === N) return N;
                } else if (t && ("top" === N || "center" === N || "bottom" === N)) return N;
            }
            return "center";
        }, [C, N, k]),
        Q = r.useMemo(() => {
            if ("edge" !== C)
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
                })(O?.align ?? "center", k, j, W);
        }, [C, O, k, j, W]),
        J = r.useMemo(() => ({ position: k, caretConfig: O ?? { align: "center" } }), [k, O]);
    return (0, i.jsx)(u.$, {
        targetElementRef: n,
        shouldShow: G,
        onRequestClose: p,
        position: k,
        align: X,
        spacing: 14,
        offset: Q,
        layerContext: void 0,
        positionKey: null != Q ? `${k}-${Q}` : void 0,
        popoutKey: void 0,
        fixed: !1,
        autoInvert: !0,
        nudgeAlignIntoViewport: "top" === k || "bottom" === k,
        closeOnClickOutside: w,
        ignoreModalClicks: U,
        scrollBehavior: b,
        renderPopout: function (e) {
            let { setPopoutRef: n, position: r, nudge: a, ...c } = e;
            return (
                z(r),
                a !== B.current && ((B.current = a), v?.(a)),
                Z((e, r) => {
                    if (!r) return null;
                    let u = (0, i.jsx)(o.lG, {
                        ...c,
                        setDialogRef: n,
                        modal: M,
                        className: s()(null != L ? T.popoverContentWithGradient : T.popover, {
                            [T["popover--video"]]: R,
                        }),
                        returnRef: P,
                        children: (0, i.jsx)(m.Provider, { value: J, children: t }),
                    });
                    return (0, i.jsx)(l.animated.div, {
                        ref: H,
                        "data-mana-component": "popover",
                        style: {
                            ...e,
                            "--custom-caret-edge-offset-horizontal": "20px",
                            "--custom-caret-edge-offset-vertical": "22px",
                            "--custom-caret-edge-offset-horizontal-nudge": `${a}px`,
                            "--custom-popover-width": "240px",
                        },
                        children:
                            null != L
                                ? (0, i.jsx)(d.h, {
                                      offsetBottom: y,
                                      color: L,
                                      className: T.popoverGradientWrapper,
                                      children: u,
                                  })
                                : u,
                    });
                })
            );
        },
        children: g,
    });
}
