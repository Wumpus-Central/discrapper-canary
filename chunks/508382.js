"use strict";
n.d(t, { $Y: () => f, IP: () => _, Ow: () => h, Pv: () => I, jQ: () => E }), n(321073);
var i = n(627968),
    r = n(64700),
    a = n(879821),
    s = n(745113),
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
            autoFlip: N = !0,
            crossAccessFlip: C = !0,
            autoShift: O = !0,
            strategy: R = "fixed",
            portal: L = !0,
            blockPointerEvents: y = !1,
            children: D,
            renderLayer: v,
            viewportPadding: b = 8,
            shiftPadding: M,
            maxHeight: P,
            trigger: U = "click",
            hoverDelay: w = 100,
            autoUpdate: G = !1,
        } = e,
        x = r.useRef(o ?? null);
    r.useLayoutEffect(() => {
        x.current = o ?? null;
    }, [o]);
    let k = r.useMemo(() => {
            let e = [(0, a.cY)(S)];
            return (
                N && e.push((0, a.UU)({ crossAxis: C, padding: b, boundary: A.body })),
                O && e.push((0, a.BN)({ padding: M ?? b, limiter: (0, a.ER)(), boundary: A.body })),
                e.push((0, a.jD)({ strategy: "referenceHidden" })),
                null != P &&
                    e.push(
                        (0, a.Ej)({
                            padding: b,
                            boundary: A.body,
                            apply(e) {
                                let { availableHeight: t, elements: n } = e,
                                    i = Math.min(P, t);
                                n.floating.style.setProperty("--custom-floating-layer-max-height", `${i}px`);
                            },
                        }),
                    ),
                e
            );
        }, [S, N, O, b, M, C, A, P]),
        F = (0, s.fI)(),
        {
            refs: V,
            floatingStyles: B,
            placement: H,
            middlewareData: j,
            update: W,
            context: Y,
        } = (0, s.we)({
            nodeId: F,
            placement: g,
            open: h,
            onOpenChange: I,
            strategy: R,
            middleware: k,
            whileElementsMounted: G
                ? (e, t, n) =>
                      (0, l.ll)(e, t, n, {
                          ancestorScroll: null == m,
                          ancestorResize: null == m,
                          layoutShift: null == m,
                      })
                : void 0,
        });
    r.useLayoutEffect(() => {
        null != m ? V.setPositionReference({ getBoundingClientRect: () => m }) : null != T && V.setReference(T);
    }, [V, m, T]);
    let K = (0, s.s9)(Y),
        $ = (0, s.Mk)(Y, { restMs: w, delay: { open: w, close: 0 }, enabled: "hover" === U, handleClose: (0, s.iB)() }),
        { getReferenceProps: z, getFloatingProps: q } = (0, s.bv)([K, $]),
        Z = j.hide?.referenceHidden ? "hidden" : "visible",
        X = L ? c.sM : r.Fragment,
        Q = r.useMemo(() => ({ focus: n }), [n]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            D({ ref: V.setReference, props: z() }),
            (0, i.jsx)(s.$c, {
                id: F,
                children:
                    h &&
                    (0, i.jsxs)(X, {
                        ownerDocument: A,
                        children: [
                            y ? (0, i.jsx)(s.zR, { lockScroll: !0 }) : null,
                            ((t = (0, i.jsx)("div", {
                                id: f,
                                className: d()(p, u.q),
                                [_]: !0,
                                style: { ...B, visibility: Z },
                                ref: V.setFloating,
                                ...q(),
                                children: (0, i.jsx)(E.Provider, {
                                    value: Q,
                                    children: v({ placement: H, update: W, hidden: "hidden" === Z, shift: j.shift }),
                                }),
                            })),
                            "none" === n
                                ? t
                                : (0, i.jsx)(s.s3, { context: Y, modal: "modal" === n, returnFocus: x, children: t })),
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
