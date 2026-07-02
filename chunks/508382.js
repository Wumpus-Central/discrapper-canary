"use strict";
n.d(t, { $Y: () => m, IP: () => _, Ow: () => E, Pv: () => p, jQ: () => h }), n(321073);
var i = n(627968),
    r = n(64700),
    s = n(879821),
    a = n(862019),
    o = n(193439),
    l = n(503698),
    u = n.n(l),
    d = n(337836),
    c = n(625767);
let _ = "data-popover-layer",
    h = r.createContext(null);
function f(e) {
    let t,
        {
            focus: n = "none",
            returnFocusElement: l,
            ownerDocument: f = document,
            open: E,
            onOpenChange: p,
            id: m,
            className: g,
            reference: A,
            overrideTargetRect: I,
            placement: T = "bottom",
            spacing: S = 8,
            autoFlip: N = !0,
            crossAccessFlip: C = !0,
            autoShift: y = !0,
            strategy: v = "fixed",
            portal: R = !0,
            blockPointerEvents: O = !1,
            children: b,
            renderLayer: L,
            viewportPadding: D = 8,
            maxHeight: P,
            trigger: w = "click",
            hoverDelay: M = 100,
            autoUpdate: x = !1,
        } = e,
        U = r.useRef(l ?? null);
    r.useLayoutEffect(() => {
        U.current = l ?? null;
    }, [l]);
    let k = r.useMemo(() => {
            let e = [(0, s.cY)(S)];
            return (
                N && e.push((0, s.UU)({ crossAxis: C, padding: D, boundary: f.body })),
                y && e.push((0, s.BN)({ padding: D, limiter: (0, s.ER)(), boundary: f.body })),
                e.push((0, s.jD)({ strategy: "referenceHidden" })),
                null != P &&
                    e.push(
                        (0, s.Ej)({
                            padding: D,
                            boundary: f.body,
                            apply(e) {
                                let { availableHeight: t, elements: n } = e,
                                    i = Math.min(P, t);
                                n.floating.style.setProperty("--custom-floating-layer-max-height", `${i}px`);
                            },
                        }),
                    ),
                e
            );
        }, [S, N, y, D, C, f, P]),
        G = (0, a.fI)(),
        {
            refs: V,
            floatingStyles: F,
            placement: B,
            middlewareData: j,
            update: H,
            context: W,
        } = (0, a.we)({
            nodeId: G,
            placement: T,
            open: E,
            onOpenChange: p,
            strategy: v,
            middleware: k,
            whileElementsMounted: x
                ? (e, t, n) =>
                      (0, o.ll)(e, t, n, {
                          ancestorScroll: null == I,
                          ancestorResize: null == I,
                          layoutShift: null == I,
                      })
                : void 0,
        });
    r.useLayoutEffect(() => {
        null != I ? V.setPositionReference({ getBoundingClientRect: () => I }) : null != A && V.setReference(A);
    }, [V, I, A]);
    let Y = (0, a.s9)(W),
        K = (0, a.Mk)(W, { restMs: M, delay: { open: M, close: 0 }, enabled: "hover" === w, handleClose: (0, a.iB)() }),
        { getReferenceProps: $, getFloatingProps: z } = (0, a.bv)([Y, K]),
        q = j.hide?.referenceHidden ? "hidden" : "visible",
        Z = R ? d.sM : r.Fragment,
        X = r.useMemo(() => ({ focus: n }), [n]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            b({ ref: V.setReference, props: $() }),
            (0, i.jsx)(a.$c, {
                id: G,
                children:
                    E &&
                    (0, i.jsxs)(Z, {
                        ownerDocument: f,
                        children: [
                            O ? (0, i.jsx)(a.zR, { lockScroll: !0 }) : null,
                            ((t = (0, i.jsx)("div", {
                                id: m,
                                className: u()(g, c.q),
                                [_]: !0,
                                style: { ...F, visibility: q },
                                ref: V.setFloating,
                                ...z(),
                                children: (0, i.jsx)(h.Provider, {
                                    value: X,
                                    children: L({ placement: B, update: H, hidden: "hidden" === q, shift: j.shift }),
                                }),
                            })),
                            "none" === n
                                ? t
                                : (0, i.jsx)(a.s3, { context: W, modal: "modal" === n, returnFocus: U, children: t })),
                        ],
                    }),
            }),
        ],
    });
}
function E(e) {
    return null == (0, a.R1)() ? (0, i.jsx)(a.P6, { children: (0, i.jsx)(f, { ...e }) }) : (0, i.jsx)(f, { ...e });
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
