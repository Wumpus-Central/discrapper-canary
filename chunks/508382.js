"use strict";
n.d(t, { $Y: () => m, IP: () => _, Ow: () => h, Pv: () => E, jQ: () => f }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(879821),
    a = n(862019),
    o = n(193439),
    l = n(503698),
    u = n.n(l),
    c = n(337836),
    d = n(625767);
let _ = "data-popover-layer",
    f = i.createContext(null);
function p(e) {
    let t,
        {
            focus: n = "none",
            returnFocusElement: l,
            ownerDocument: p = document,
            open: h,
            onOpenChange: E,
            id: m,
            className: g,
            reference: A,
            overrideTargetRect: I,
            placement: T = "bottom",
            spacing: S = 8,
            autoFlip: y = !0,
            crossAccessFlip: N = !0,
            autoShift: v = !0,
            strategy: C = "fixed",
            portal: O = !0,
            blockPointerEvents: R = !1,
            children: b,
            renderLayer: D,
            viewportPadding: L = 8,
            maxHeight: w,
            trigger: M = "click",
            hoverDelay: P = 100,
            autoUpdate: x = !1,
        } = e,
        k = i.useRef(l ?? null);
    i.useLayoutEffect(() => {
        k.current = l ?? null;
    }, [l]);
    let U = i.useMemo(() => {
            let e = [(0, s.cY)(S)];
            return (
                y && e.push((0, s.UU)({ crossAxis: N, padding: L, boundary: p.body })),
                v && e.push((0, s.BN)({ padding: L, limiter: (0, s.ER)(), boundary: p.body })),
                e.push((0, s.jD)({ strategy: "referenceHidden" })),
                null != w &&
                    e.push(
                        (0, s.Ej)({
                            padding: L,
                            boundary: p.body,
                            apply(e) {
                                let { availableHeight: t, elements: n } = e,
                                    r = Math.min(w, t);
                                n.floating.style.setProperty("--custom-floating-layer-max-height", `${r}px`);
                            },
                        }),
                    ),
                e
            );
        }, [S, y, v, L, N, p, w]),
        G = (0, a.fI)(),
        {
            refs: F,
            floatingStyles: V,
            placement: B,
            middlewareData: H,
            update: j,
            context: Y,
        } = (0, a.we)({
            nodeId: G,
            placement: T,
            open: h,
            onOpenChange: E,
            strategy: C,
            middleware: U,
            whileElementsMounted: x ? o.ll : void 0,
        });
    i.useLayoutEffect(() => {
        null != I ? F.setPositionReference({ getBoundingClientRect: () => I }) : null != A && F.setReference(A);
    }, [F, I, A]);
    let W = (0, a.s9)(Y),
        K = (0, a.Mk)(Y, { restMs: P, delay: { open: P, close: 0 }, enabled: "hover" === M, handleClose: (0, a.iB)() }),
        { getReferenceProps: $, getFloatingProps: z } = (0, a.bv)([W, K]),
        q = H.hide?.referenceHidden ? "hidden" : "visible",
        X = O ? c.sM : i.Fragment,
        Q = i.useMemo(() => ({ focus: n }), [n]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            b({ ref: F.setReference, props: $() }),
            (0, r.jsx)(a.$c, {
                id: G,
                children:
                    h &&
                    (0, r.jsxs)(X, {
                        ownerDocument: p,
                        children: [
                            R ? (0, r.jsx)(a.zR, { lockScroll: !0 }) : null,
                            ((t = (0, r.jsx)("div", {
                                id: m,
                                className: u()(g, d.q),
                                [_]: !0,
                                style: { ...V, visibility: q },
                                ref: F.setFloating,
                                ...z(),
                                children: (0, r.jsx)(f.Provider, {
                                    value: Q,
                                    children: D({ placement: B, update: j, hidden: "hidden" === q, shift: H.shift }),
                                }),
                            })),
                            "none" === n
                                ? t
                                : (0, r.jsx)(a.s3, { context: Y, modal: "modal" === n, returnFocus: k, children: t })),
                        ],
                    }),
            }),
        ],
    });
}
function h(e) {
    return null == (0, a.R1)() ? (0, r.jsx)(a.P6, { children: (0, r.jsx)(p, { ...e }) }) : (0, r.jsx)(p, { ...e });
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
function m(e) {
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
