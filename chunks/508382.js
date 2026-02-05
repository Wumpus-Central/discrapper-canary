"use strict";
n.d(t, { $Y: () => E, IP: () => h, Ow: () => m, Pv: () => g }), n(321073);
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
    p = 100,
    h = "data-popover-layer";
function m(e) {
    let t,
        {
            ownerDocument: n = document,
            open: l,
            onOpenChange: m,
            id: g,
            className: E,
            reference: A,
            overrideTargetRect: I,
            placement: T = "bottom",
            spacing: y = 8,
            autoFlip: S = !0,
            crossAccessFlip: v = !0,
            autoShift: C = !0,
            strategy: b = "fixed",
            portal: N = !0,
            blockPointerEvents: R = !1,
            children: O,
            renderLayer: D,
            viewportPadding: L = f,
            maxHeight: w,
            trigger: x = "click",
            hoverDelay: P = p,
        } = e,
        M = i.useRef(null),
        k = i.useMemo(() => {
            let e = [(0, a.cY)(y)];
            return (
                S && e.push((0, a.UU)({ crossAxis: v, padding: L, boundary: n.body })),
                C && e.push((0, a.BN)({ padding: L, limiter: (0, a.ER)(), boundary: n.body })),
                e.push((0, a.jD)({ strategy: "referenceHidden" })),
                null != w &&
                    e.push(
                        (0, a.Ej)({
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
        }, [y, S, C, L, v, n, w]);
    null != I ? (t = { reference: { getBoundingClientRect: () => I } }) : null != A && (t = { reference: A });
    let {
            refs: U,
            floatingStyles: G,
            placement: V,
            middlewareData: F,
            update: B,
            context: j,
        } = (0, s.we)({
            placement: T,
            open: l,
            onOpenChange: m,
            strategy: b,
            middleware: k,
            whileElementsMounted: o.ll,
            elements: t,
        }),
        H = (0, s.s9)(j),
        Y = (0, s.Mk)(j, {
            restMs: P,
            delay: { open: P, close: 0 },
            enabled: "hover" === x,
            handleClose: (0, s.iB)({ blockPointerEvents: !0 }),
        }),
        { getReferenceProps: W, getFloatingProps: K } = (0, s.bv)([H, Y]),
        z = F.hide?.referenceHidden ? "hidden" : "visible",
        $ = N ? d.sM : i.Fragment;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            O({ ref: U.setReference, props: W() }),
            l &&
                (0, r.jsxs)($, {
                    ownerDocument: n,
                    children: [
                        R ? (0, r.jsx)(s.zR, {}) : null,
                        (0, r.jsx)("div", {
                            id: g,
                            className: u()(E, _.q),
                            [h]: !0,
                            style: { ...G, visibility: z },
                            ref: U.setFloating,
                            ...K(),
                            children: (0, r.jsx)(c.xp, {
                                containerRef: M,
                                children: D({ placement: V, update: B, hidden: "hidden" === z, shift: F.shift }),
                            }),
                        }),
                    ],
                }),
        ],
    });
}
function g(e, t) {
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
function E(e) {
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
