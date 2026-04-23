"use strict";
n.d(t, { $Y: () => g, IP: () => c, Ow: () => m, Pv: () => f, jQ: () => E }), n(321073);
var i = n(627968),
    r = n(64700),
    s = n(879821),
    a = n(716263),
    o = n(38339),
    l = n(503698),
    d = n.n(l),
    _ = n(337836),
    u = n(625767);
let c = "data-popover-layer",
    E = r.createContext(null);
function h(e) {
    let t,
        {
            focus: n = "none",
            returnFocusElement: l,
            ownerDocument: h = document,
            open: m,
            onOpenChange: f,
            id: g,
            className: p,
            reference: A,
            overrideTargetRect: I,
            placement: T = "bottom",
            spacing: S = 8,
            autoFlip: N = !0,
            crossAccessFlip: C = !0,
            autoShift: R = !0,
            strategy: O = "fixed",
            portal: y = !0,
            blockPointerEvents: v = !1,
            children: D,
            renderLayer: L,
            viewportPadding: b = 8,
            maxHeight: w,
            trigger: P = "click",
            hoverDelay: k = 100,
            autoUpdate: M = !1,
        } = e,
        U = r.useRef(l ?? null);
    r.useLayoutEffect(() => {
        U.current = l ?? null;
    }, [l]);
    let x = r.useMemo(() => {
            let e = [(0, s.cY)(S)];
            return (
                N && e.push((0, s.UU)({ crossAxis: C, padding: b, boundary: h.body })),
                R && e.push((0, s.BN)({ padding: b, limiter: (0, s.ER)(), boundary: h.body })),
                e.push((0, s.jD)({ strategy: "referenceHidden" })),
                null != w &&
                    e.push(
                        (0, s.Ej)({
                            padding: b,
                            boundary: h.body,
                            apply(e) {
                                let { availableHeight: t, elements: n } = e,
                                    i = Math.min(w, t);
                                n.floating.style.setProperty("--custom-floating-layer-max-height", `${i}px`);
                            },
                        }),
                    ),
                e
            );
        }, [S, N, R, b, C, h, w]),
        G = (0, a.fI)(),
        {
            refs: V,
            floatingStyles: F,
            placement: B,
            middlewareData: H,
            update: j,
            context: W,
        } = (0, a.we)({
            nodeId: G,
            placement: T,
            open: m,
            onOpenChange: f,
            strategy: O,
            middleware: x,
            whileElementsMounted: M ? o.ll : void 0,
        });
    r.useLayoutEffect(() => {
        null != I ? V.setPositionReference({ getBoundingClientRect: () => I }) : null != A && V.setReference(A);
    }, [V, I, A]);
    let Y = (0, a.s9)(W),
        K = (0, a.Mk)(W, { restMs: k, delay: { open: k, close: 0 }, enabled: "hover" === P, handleClose: (0, a.iB)() }),
        { getReferenceProps: z, getFloatingProps: $ } = (0, a.bv)([Y, K]),
        q = H.hide?.referenceHidden ? "hidden" : "visible",
        X = y ? _.sM : r.Fragment,
        Z = r.useMemo(() => ({ focus: n }), [n]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            D({ ref: V.setReference, props: z() }),
            (0, i.jsx)(a.$c, {
                id: G,
                children:
                    m &&
                    (0, i.jsxs)(X, {
                        ownerDocument: h,
                        children: [
                            v ? (0, i.jsx)(a.zR, { lockScroll: !0 }) : null,
                            ((t = (0, i.jsx)("div", {
                                id: g,
                                className: d()(p, u.q),
                                [c]: !0,
                                style: { ...F, visibility: q },
                                ref: V.setFloating,
                                ...$(),
                                children: (0, i.jsx)(E.Provider, {
                                    value: Z,
                                    children: L({ placement: B, update: j, hidden: "hidden" === q, shift: H.shift }),
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
function m(e) {
    return null == (0, a.R1)() ? (0, i.jsx)(a.P6, { children: (0, i.jsx)(h, { ...e }) }) : (0, i.jsx)(h, { ...e });
}
function f(e, t) {
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
