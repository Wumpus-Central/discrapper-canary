"use strict";
n.d(t, { $Y: () => m, IP: () => _, Ow: () => p, Pv: () => E, jQ: () => h }), n(321073);
var i = n(627968),
    r = n(64700),
    s = n(879821),
    a = n(716263),
    o = n(38339),
    l = n(503698),
    u = n.n(l),
    c = n(337836),
    d = n(625767);
let _ = "data-popover-layer",
    h = r.createContext(null);
function f(e) {
    let t,
        {
            focus: n = "none",
            returnFocusElement: l,
            ownerDocument: f = document,
            open: p,
            onOpenChange: E,
            id: m,
            className: g,
            reference: A,
            overrideTargetRect: I,
            placement: T = "bottom",
            spacing: S = 8,
            autoFlip: y = !0,
            crossAccessFlip: C = !0,
            autoShift: N = !0,
            strategy: v = "fixed",
            portal: R = !0,
            blockPointerEvents: O = !1,
            children: b,
            renderLayer: D,
            viewportPadding: L = 8,
            maxHeight: w,
            trigger: M = "click",
            hoverDelay: P = 100,
            autoUpdate: x = !1,
        } = e,
        k = r.useRef(l ?? null);
    r.useLayoutEffect(() => {
        k.current = l ?? null;
    }, [l]);
    let U = r.useMemo(() => {
            let e = [(0, s.cY)(S)];
            return (
                y && e.push((0, s.UU)({ crossAxis: C, padding: L, boundary: f.body })),
                N && e.push((0, s.BN)({ padding: L, limiter: (0, s.ER)(), boundary: f.body })),
                e.push((0, s.jD)({ strategy: "referenceHidden" })),
                null != w &&
                    e.push(
                        (0, s.Ej)({
                            padding: L,
                            boundary: f.body,
                            apply(e) {
                                let { availableHeight: t, elements: n } = e,
                                    i = Math.min(w, t);
                                n.floating.style.setProperty("--custom-floating-layer-max-height", `${i}px`);
                            },
                        }),
                    ),
                e
            );
        }, [S, y, N, L, C, f, w]),
        G = (0, a.fI)(),
        {
            refs: F,
            floatingStyles: V,
            placement: B,
            middlewareData: j,
            update: H,
            context: Y,
        } = (0, a.we)({
            nodeId: G,
            placement: T,
            open: p,
            onOpenChange: E,
            strategy: v,
            middleware: U,
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
        null != I ? F.setPositionReference({ getBoundingClientRect: () => I }) : null != A && F.setReference(A);
    }, [F, I, A]);
    let W = (0, a.s9)(Y),
        K = (0, a.Mk)(Y, { restMs: P, delay: { open: P, close: 0 }, enabled: "hover" === M, handleClose: (0, a.iB)() }),
        { getReferenceProps: $, getFloatingProps: z } = (0, a.bv)([W, K]),
        q = j.hide?.referenceHidden ? "hidden" : "visible",
        Z = R ? c.sM : r.Fragment,
        X = r.useMemo(() => ({ focus: n }), [n]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            b({ ref: F.setReference, props: $() }),
            (0, i.jsx)(a.$c, {
                id: G,
                children:
                    p &&
                    (0, i.jsxs)(Z, {
                        ownerDocument: f,
                        children: [
                            O ? (0, i.jsx)(a.zR, { lockScroll: !0 }) : null,
                            ((t = (0, i.jsx)("div", {
                                id: m,
                                className: u()(g, d.q),
                                [_]: !0,
                                style: { ...V, visibility: q },
                                ref: F.setFloating,
                                ...z(),
                                children: (0, i.jsx)(h.Provider, {
                                    value: X,
                                    children: D({ placement: B, update: H, hidden: "hidden" === q, shift: j.shift }),
                                }),
                            })),
                            "none" === n
                                ? t
                                : (0, i.jsx)(a.s3, { context: Y, modal: "modal" === n, returnFocus: k, children: t })),
                        ],
                    }),
            }),
        ],
    });
}
function p(e) {
    return null == (0, a.R1)() ? (0, i.jsx)(a.P6, { children: (0, i.jsx)(f, { ...e }) }) : (0, i.jsx)(f, { ...e });
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
