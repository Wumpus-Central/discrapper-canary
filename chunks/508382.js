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
    _ = n(366242);
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
            portal: b = !0,
            blockPointerEvents: R = !1,
            children: O,
            renderLayer: D,
            viewportPadding: L = f,
            maxHeight: w,
            trigger: x = "click",
            hoverDelay: M = p,
        } = e,
        P = i.useRef(null),
        k = i.useMemo(() => {
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
    null != I ? (t = { reference: { getBoundingClientRect: () => I } }) : null != A && (t = { reference: A });
    let {
            refs: U,
            floatingStyles: G,
            placement: F,
            middlewareData: V,
            update: B,
            context: H,
        } = (0, a.we)({
            placement: T,
            open: l,
            onOpenChange: m,
            strategy: C,
            middleware: k,
            whileElementsMounted: o.ll,
            elements: t,
        }),
        j = (0, a.s9)(H),
        Y = (0, a.Mk)(H, {
            restMs: M,
            delay: { open: M, close: 0 },
            enabled: "hover" === x,
            handleClose: (0, a.iB)({ blockPointerEvents: !0 }),
        }),
        { getReferenceProps: W, getFloatingProps: K } = (0, a.bv)([j, Y]),
        z = V.hide?.referenceHidden ? "hidden" : "visible",
        $ = b ? d.sM : i.Fragment;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            O({ ref: U.setReference, props: W() }),
            l &&
                (0, r.jsxs)($, {
                    ownerDocument: n,
                    children: [
                        R ? (0, r.jsx)(a.zR, {}) : null,
                        (0, r.jsx)("div", {
                            id: E,
                            className: u()(g, _.q),
                            [h]: !0,
                            style: { ...G, visibility: z },
                            ref: U.setFloating,
                            ...K(),
                            children: (0, r.jsx)(c.xp, {
                                containerRef: P,
                                children: D({ placement: F, update: B, hidden: "hidden" === z, shift: V.shift }),
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
