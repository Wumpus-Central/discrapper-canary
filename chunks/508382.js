"use strict";
n.d(t, { $Y: () => m, IP: () => _, Ow: () => h, Pv: () => p, jQ: () => f }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(879821),
    a = n(862019),
    o = n(193439),
    l = n(503698),
    u = n.n(l),
    d = n(337836),
    c = n(625767);
let _ = "data-popover-layer",
    f = i.createContext(null);
function E(e) {
    let t,
        {
            focus: n = "none",
            returnFocusElement: l,
            ownerDocument: E = document,
            open: h,
            onOpenChange: p,
            id: m,
            className: g,
            reference: A,
            overrideTargetRect: I,
            placement: T = "bottom",
            spacing: S = 8,
            autoFlip: y = !0,
            crossAccessFlip: N = !0,
            autoShift: O = !0,
            strategy: R = "fixed",
            portal: v = !0,
            blockPointerEvents: C = !1,
            children: b,
            renderLayer: D,
            viewportPadding: L = 8,
            maxHeight: w,
            trigger: M = "click",
            hoverDelay: P = 100,
            autoUpdate: U = !1,
        } = e,
        k = i.useRef(l ?? null);
    i.useLayoutEffect(() => {
        k.current = l ?? null;
    }, [l]);
    let x = i.useMemo(() => {
            let e = [(0, s.cY)(S)];
            return (
                y && e.push((0, s.UU)({ crossAxis: N, padding: L, boundary: E.body })),
                O && e.push((0, s.BN)({ padding: L, limiter: (0, s.ER)(), boundary: E.body })),
                e.push((0, s.jD)({ strategy: "referenceHidden" })),
                null != w &&
                    e.push(
                        (0, s.Ej)({
                            padding: L,
                            boundary: E.body,
                            apply(e) {
                                let { availableHeight: t, elements: n } = e,
                                    r = Math.min(w, t);
                                n.floating.style.setProperty("--custom-floating-layer-max-height", `${r}px`);
                            },
                        }),
                    ),
                e
            );
        }, [S, y, O, L, N, E, w]),
        G = (0, a.fI)(),
        {
            refs: V,
            floatingStyles: F,
            placement: B,
            middlewareData: H,
            update: Y,
            context: W,
        } = (0, a.we)({
            nodeId: G,
            placement: T,
            open: h,
            onOpenChange: p,
            strategy: R,
            middleware: x,
            whileElementsMounted: U ? o.ll : void 0,
        });
    i.useLayoutEffect(() => {
        null != I ? V.setPositionReference({ getBoundingClientRect: () => I }) : null != A && V.setReference(A);
    }, [V, I, A]);
    let j = (0, a.s9)(W),
        K = (0, a.Mk)(W, { restMs: P, delay: { open: P, close: 0 }, enabled: "hover" === M, handleClose: (0, a.iB)() }),
        { getReferenceProps: $, getFloatingProps: z } = (0, a.bv)([j, K]),
        q = H.hide?.referenceHidden ? "hidden" : "visible",
        X = v ? d.sM : i.Fragment,
        Q = i.useMemo(() => ({ focus: n }), [n]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            b({ ref: V.setReference, props: $() }),
            (0, r.jsx)(a.$c, {
                id: G,
                children:
                    h &&
                    (0, r.jsxs)(X, {
                        ownerDocument: E,
                        children: [
                            C ? (0, r.jsx)(a.zR, { lockScroll: !0 }) : null,
                            ((t = (0, r.jsx)("div", {
                                id: m,
                                className: u()(g, c.q),
                                [_]: !0,
                                style: { ...F, visibility: q },
                                ref: V.setFloating,
                                ...z(),
                                children: (0, r.jsx)(f.Provider, {
                                    value: Q,
                                    children: D({ placement: B, update: Y, hidden: "hidden" === q, shift: H.shift }),
                                }),
                            })),
                            "none" === n
                                ? t
                                : (0, r.jsx)(a.s3, { context: W, modal: "modal" === n, returnFocus: k, children: t })),
                        ],
                    }),
            }),
        ],
    });
}
function h(e) {
    return null == (0, a.R1)() ? (0, r.jsx)(a.P6, { children: (0, r.jsx)(E, { ...e }) }) : (0, r.jsx)(E, { ...e });
}
function p(e, t) {
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
