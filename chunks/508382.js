"use strict";
n.d(t, { $Y: () => g, IP: () => h, Ow: () => m, Pv: () => E }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(879821),
    a = n(862019),
    o = n(193439),
    l = n(503698),
    u = n.n(l),
    c = n(426333),
    d = n(337836),
    _ = n(11212);
let f = 8,
    p = 100,
    h = "data-popover-layer";
function m(e) {
    let t,
        {
            ownerDocument: n = document,
            open: l,
            onOpenChange: m,
            id: E,
            className: g,
            reference: A,
            overrideTargetRect: I,
            placement: T = "bottom",
            spacing: S = 8,
            autoFlip: y = !0,
            crossAccessFlip: v = !0,
            autoShift: N = !0,
            strategy: C = "fixed",
            portal: R = !0,
            blockPointerEvents: O = !1,
            children: b,
            renderLayer: D,
            viewportPadding: L = f,
            maxHeight: w,
            trigger: M = "click",
            hoverDelay: x = p,
            autoUpdate: P = !1,
        } = e,
        k = i.useRef(null),
        U = i.useRef(m);
    i.useEffect(() => {
        U.current = m;
    }, [m]),
        i.useLayoutEffect(
            () => () => {
                U.current?.(!1), n.dispatchEvent(new KeyboardEvent("keydown", { key: "_", bubbles: !0 }));
            },
            [n],
        );
    let G = i.useMemo(() => {
        let e = [(0, s.cY)(S)];
        return (
            y && e.push((0, s.UU)({ crossAxis: v, padding: L, boundary: n.body })),
            N && e.push((0, s.BN)({ padding: L, limiter: (0, s.ER)(), boundary: n.body })),
            e.push((0, s.jD)({ strategy: "referenceHidden" })),
            null != w &&
                e.push(
                    (0, s.Ej)({
                        padding: L,
                        boundary: n.body,
                        apply(e) {
                            let { availableHeight: t, elements: n } = e,
                                r = Math.min(w, t);
                            n.floating.style.setProperty("--custom-floating-layer-max-height", `${r}px`);
                        },
                    }),
                ),
            e
        );
    }, [S, y, N, L, v, n, w]);
    null != A && (t = { reference: A });
    let {
        refs: F,
        floatingStyles: V,
        placement: B,
        middlewareData: H,
        update: j,
        context: Y,
    } = (0, a.we)({
        placement: T,
        open: l,
        onOpenChange: m,
        strategy: C,
        middleware: G,
        whileElementsMounted: P ? o.ll : void 0,
        elements: t,
    });
    i.useLayoutEffect(() => {
        null != I && F.setPositionReference({ getBoundingClientRect: () => I });
    }, [I, F]);
    let W = (0, a.s9)(Y),
        K = (0, a.Mk)(Y, { restMs: x, delay: { open: x, close: 0 }, enabled: "hover" === M, handleClose: (0, a.iB)() }),
        { getReferenceProps: $, getFloatingProps: z } = (0, a.bv)([W, K]),
        q = H.hide?.referenceHidden ? "hidden" : "visible",
        Z = R ? d.sM : i.Fragment;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            b({ ref: F.setReference, props: $() }),
            l &&
                (0, r.jsx)(Z, {
                    ownerDocument: n,
                    id: E,
                    children: (0, r.jsx)(a.s3, {
                        context: Y,
                        children: (0, r.jsxs)(r.Fragment, {
                            children: [
                                O ? (0, r.jsx)(a.zR, {}) : null,
                                (0, r.jsx)("div", {
                                    id: E,
                                    className: u()(g, _.q),
                                    [h]: !0,
                                    style: { ...V, visibility: q },
                                    ref: F.setFloating,
                                    ...z(),
                                    children: (0, r.jsx)(c.xp, {
                                        containerRef: k,
                                        children: D({
                                            placement: B,
                                            update: j,
                                            hidden: "hidden" === q,
                                            shift: H.shift,
                                        }),
                                    }),
                                }),
                            ],
                        }),
                    }),
                }),
        ],
    });
}
function E(e, t) {
    switch (e) {
        case "center":
        case "window_center":
        default:
            return "top";
        case "top":
        case "bottom":
            if ("left" === t) return `${e}-start`;
            if ("right" === t) return `${e}-end`;
            return e;
        case "left":
        case "right":
            if ("top" === t) return `${e}-start`;
            if ("bottom" === t) return `${e}-end`;
            return e;
    }
}
function g(e) {
    let t = e.split("-")[0];
    switch (t) {
        case "top":
        case "bottom":
        case "left":
        case "right":
            return t;
        default:
            return "top";
    }
}
