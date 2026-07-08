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
    u = n(625767);
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
            autoShift: R = !0,
            strategy: O = "fixed",
            portal: L = !0,
            blockPointerEvents: D = !1,
            children: y,
            renderLayer: v,
            viewportPadding: b = 8,
            maxHeight: M,
            trigger: P = "click",
            hoverDelay: U = 100,
            autoUpdate: w = !1,
        } = e,
        G = r.useRef(o ?? null);
    r.useLayoutEffect(() => {
        G.current = o ?? null;
    }, [o]);
    let x = r.useMemo(() => {
            let e = [(0, a.cY)(S)];
            return (
                N && e.push((0, a.UU)({ crossAxis: C, padding: b, boundary: A.body })),
                R && e.push((0, a.BN)({ padding: b, limiter: (0, a.ER)(), boundary: A.body })),
                e.push((0, a.jD)({ strategy: "referenceHidden" })),
                null != M &&
                    e.push(
                        (0, a.Ej)({
                            padding: b,
                            boundary: A.body,
                            apply(e) {
                                let { availableHeight: t, elements: n } = e,
                                    i = Math.min(M, t);
                                n.floating.style.setProperty("--custom-floating-layer-max-height", `${i}px`);
                            },
                        }),
                    ),
                e
            );
        }, [S, N, R, b, C, A, M]),
        k = (0, s.fI)(),
        {
            refs: F,
            floatingStyles: V,
            placement: B,
            middlewareData: H,
            update: j,
            context: W,
        } = (0, s.we)({
            nodeId: k,
            placement: g,
            open: h,
            onOpenChange: I,
            strategy: O,
            middleware: x,
            whileElementsMounted: w
                ? (e, t, n) =>
                      (0, l.ll)(e, t, n, {
                          ancestorScroll: null == m,
                          ancestorResize: null == m,
                          layoutShift: null == m,
                      })
                : void 0,
        });
    r.useLayoutEffect(() => {
        null != m ? F.setPositionReference({ getBoundingClientRect: () => m }) : null != T && F.setReference(T);
    }, [F, m, T]);
    let Y = (0, s.s9)(W),
        K = (0, s.Mk)(W, { restMs: U, delay: { open: U, close: 0 }, enabled: "hover" === P, handleClose: (0, s.iB)() }),
        { getReferenceProps: $, getFloatingProps: z } = (0, s.bv)([Y, K]),
        q = H.hide?.referenceHidden ? "hidden" : "visible",
        Z = L ? c.sM : r.Fragment,
        X = r.useMemo(() => ({ focus: n }), [n]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            y({ ref: F.setReference, props: $() }),
            (0, i.jsx)(s.$c, {
                id: k,
                children:
                    h &&
                    (0, i.jsxs)(Z, {
                        ownerDocument: A,
                        children: [
                            D ? (0, i.jsx)(s.zR, { lockScroll: !0 }) : null,
                            ((t = (0, i.jsx)("div", {
                                id: f,
                                className: d()(p, u.q),
                                [_]: !0,
                                style: { ...V, visibility: q },
                                ref: F.setFloating,
                                ...z(),
                                children: (0, i.jsx)(E.Provider, {
                                    value: X,
                                    children: v({ placement: B, update: j, hidden: "hidden" === q, shift: H.shift }),
                                }),
                            })),
                            "none" === n
                                ? t
                                : (0, i.jsx)(s.s3, { context: W, modal: "modal" === n, returnFocus: G, children: t })),
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
