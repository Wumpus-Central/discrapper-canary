"use strict";
n.d(t, { $Y: () => f, IP: () => _, Ow: () => h, Pv: () => I, jQ: () => E }), n(321073);
var i = n(477900),
    r = n(582128),
    a = n(458265),
    s = n(499957),
    l = n(38339),
    o = n(503698),
    d = n.n(o),
    c = n(337836),
    u = n(456479);
let _ = "data-popover-layer",
    E = r.createContext(null);
function A(e) {
    let t,
        {
            focus: n = "none",
            returnFocusElement: o,
            ownerDocument: A = document,
            open: h,
            onOpenChange: I,
            id: f,
            className: p,
            reference: T,
            overrideTargetRect: m,
            placement: g = "bottom",
            spacing: S = 8,
            alignmentSpacing: N,
            autoFlip: C = !0,
            crossAccessFlip: O = !0,
            autoShift: R = !0,
            strategy: L = "fixed",
            portal: D = !0,
            blockPointerEvents: y = !1,
            children: v,
            renderLayer: b,
            viewportPadding: M = 8,
            shiftPadding: P,
            maxHeight: U,
            trigger: w = "click",
            hoverDelay: G = 100,
            autoUpdate: x = !1,
        } = e,
        k = r.useRef(o ?? null);
    r.useLayoutEffect(() => {
        k.current = o ?? null;
    }, [o]);
    let F = r.useMemo(() => {
            let e = [(0, a.cY)({ mainAxis: S, alignmentAxis: N })];
            return (
                C && e.push((0, a.UU)({ crossAxis: O, padding: M, boundary: A.body })),
                R && e.push((0, a.BN)({ padding: P ?? M, limiter: (0, a.ER)(), boundary: A.body })),
                e.push((0, a.jD)({ strategy: "referenceHidden" })),
                null != U &&
                    e.push(
                        (0, a.Ej)({
                            padding: M,
                            boundary: A.body,
                            apply(e) {
                                let { availableHeight: t, elements: n } = e,
                                    i = Math.min(U, t);
                                n.floating.style.setProperty("--custom-floating-layer-max-height", `${i}px`);
                            },
                        }),
                    ),
                e
            );
        }, [S, N, C, R, M, P, O, A, U]),
        V = (0, s.fI)(),
        {
            refs: B,
            floatingStyles: H,
            placement: j,
            middlewareData: W,
            update: Y,
            context: K,
        } = (0, s.we)({
            nodeId: V,
            placement: g,
            open: h,
            onOpenChange: I,
            strategy: L,
            middleware: F,
            whileElementsMounted: x
                ? (e, t, n) =>
                      (0, l.ll)(e, t, n, {
                          ancestorScroll: null == m,
                          ancestorResize: null == m,
                          layoutShift: null == m,
                      })
                : void 0,
        });
    r.useLayoutEffect(() => {
        null != m ? B.setPositionReference({ getBoundingClientRect: () => m }) : null != T && B.setReference(T);
    }, [B, m, T]);
    let $ = (0, s.s9)(K),
        z = (0, s.Mk)(K, { restMs: G, delay: { open: G, close: 0 }, enabled: "hover" === w, handleClose: (0, s.iB)() }),
        { getReferenceProps: q, getFloatingProps: Z } = (0, s.bv)([$, z]),
        X = W.hide?.referenceHidden ? "hidden" : "visible",
        Q = D ? c.sM : r.Fragment,
        J = r.useMemo(() => ({ focus: n }), [n]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            v({ ref: B.setReference, props: q() }),
            (0, i.jsx)(s.$c, {
                id: V,
                children:
                    h &&
                    (0, i.jsxs)(Q, {
                        ownerDocument: A,
                        children: [
                            y ? (0, i.jsx)(s.zR, { lockScroll: !0 }) : null,
                            ((t = (0, i.jsx)("div", {
                                id: f,
                                className: d()(p, u.q),
                                [_]: !0,
                                style: { ...H, visibility: X },
                                ref: B.setFloating,
                                ...Z(),
                                children: (0, i.jsx)(E.Provider, {
                                    value: J,
                                    children: b({ placement: j, update: Y, hidden: "hidden" === X, shift: W.shift }),
                                }),
                            })),
                            "none" === n
                                ? t
                                : (0, i.jsx)(s.s3, { context: K, modal: "modal" === n, returnFocus: k, children: t })),
                        ],
                    }),
            }),
        ],
    });
}
function h(e) {
    return null == (0, s.R1)() ? (0, i.jsx)(s.P6, { children: (0, i.jsx)(A, { ...e }) }) : (0, i.jsx)(A, { ...e });
}
function I(e, t) {
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
function f(e) {
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
