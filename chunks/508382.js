"use strict";
n.d(t, { $Y: () => A, IP: () => p, Ow: () => g, Pv: () => E }), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(879821),
    s = n(862019),
    o = n(193439),
    l = n(503698),
    u = n.n(l),
    c = n(426333),
    d = n(337836),
    _ = n(11212);
let f = 8,
    h = 100,
    p = "data-popover-layer";
function g(e) {
    let t,
        {
            ownerDocument: n = document,
            open: l,
            onOpenChange: g,
            id: E,
            className: A,
            reference: I,
            overrideTargetRect: T,
            placement: y = "bottom",
            spacing: S = 8,
            autoFlip: v = !0,
            crossAccessFlip: C = !0,
            autoShift: b = !0,
            strategy: N = "fixed",
            portal: R = !0,
            blockPointerEvents: O = !1,
            children: D,
            renderLayer: L,
            viewportPadding: w = f,
            maxHeight: x,
            trigger: P = "click",
            hoverDelay: M = h,
        } = e,
        k = i.useRef(null),
        U = i.useMemo(() => {
            let e = [(0, a.cY)(S)];
            return (
                v && e.push((0, a.UU)({ crossAxis: C, padding: w, boundary: n.body })),
                b && e.push((0, a.BN)({ padding: w, limiter: (0, a.ER)(), boundary: n.body })),
                e.push((0, a.jD)({ strategy: "referenceHidden" })),
                null != x &&
                    e.push(
                        (0, a.Ej)({
                            padding: w,
                            boundary: n.body,
                            apply(e) {
                                let { availableHeight: t, elements: n } = e,
                                    r = Math.min(x, t);
                                n.floating.style.setProperty("--custom-floating-layer-max-height", `${r}px`);
                            },
                        }),
                    ),
                e
            );
        }, [S, v, b, w, C, n, x]);
    null != T ? (t = { reference: { getBoundingClientRect: () => T } }) : null != I && (t = { reference: I });
    let {
            refs: G,
            floatingStyles: F,
            placement: V,
            middlewareData: B,
            update: j,
            context: H,
        } = (0, s.we)({
            placement: y,
            open: l,
            onOpenChange: g,
            strategy: N,
            middleware: U,
            whileElementsMounted: o.ll,
            elements: t,
        }),
        Y = (0, s.s9)(H),
        W = (0, s.Mk)(H, {
            restMs: M,
            delay: { open: M, close: 0 },
            enabled: "hover" === P,
            handleClose: (0, s.iB)({ blockPointerEvents: !0 }),
        }),
        { getReferenceProps: K, getFloatingProps: $ } = (0, s.bv)([Y, W]),
        z = B.hide?.referenceHidden ? "hidden" : "visible",
        q = R ? d.sM : i.Fragment;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            D({ ref: G.setReference, props: K() }),
            l &&
                (0, r.jsxs)(q, {
                    ownerDocument: n,
                    children: [
                        O ? (0, r.jsx)(s.zR, {}) : null,
                        (0, r.jsx)("div", {
                            id: E,
                            className: u()(A, _.q),
                            [p]: !0,
                            style: { ...F, visibility: z },
                            ref: G.setFloating,
                            ...$(),
                            children: (0, r.jsx)(c.xp, {
                                containerRef: k,
                                children: L({ placement: V, update: j, hidden: "hidden" === z, shift: B.shift }),
                            }),
                        }),
                    ],
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
function A(e) {
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
