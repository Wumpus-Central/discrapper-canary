"use strict";
n.d(t, { $Y: () => A, IP: () => p, Ow: () => E, Pv: () => g, jQ: () => h }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(879821),
    a = n(862019),
    o = n(193439),
    l = n(503698),
    u = n.n(l),
    c = n(337836),
    d = n(625767);
let _ = 8,
    f = 100,
    p = "data-popover-layer",
    h = i.createContext(null);
function m(e) {
    let {
            focus: t = "none",
            returnFocusElement: n,
            ownerDocument: l = document,
            open: m,
            onOpenChange: E,
            id: g,
            className: A,
            reference: I,
            overrideTargetRect: T,
            placement: S = "bottom",
            spacing: y = 8,
            autoFlip: v = !0,
            crossAccessFlip: N = !0,
            autoShift: C = !0,
            strategy: R = "fixed",
            portal: O = !0,
            blockPointerEvents: b = !1,
            children: D,
            renderLayer: L,
            viewportPadding: w = _,
            maxHeight: M,
            trigger: P = "click",
            hoverDelay: x = f,
            autoUpdate: k = !1,
        } = e,
        U = i.useRef(n ?? null);
    i.useLayoutEffect(() => {
        U.current = n ?? null;
    }, [n]);
    let G = i.useMemo(() => {
            let e = [(0, s.cY)(y)];
            return (
                v && e.push((0, s.UU)({ crossAxis: N, padding: w, boundary: l.body })),
                C && e.push((0, s.BN)({ padding: w, limiter: (0, s.ER)(), boundary: l.body })),
                e.push((0, s.jD)({ strategy: "referenceHidden" })),
                null != M &&
                    e.push(
                        (0, s.Ej)({
                            padding: w,
                            boundary: l.body,
                            apply(e) {
                                let { availableHeight: t, elements: n } = e,
                                    r = Math.min(M, t);
                                n.floating.style.setProperty("--custom-floating-layer-max-height", `${r}px`);
                            },
                        }),
                    ),
                e
            );
        }, [y, v, C, w, N, l, M]),
        F = (0, a.fI)(),
        {
            refs: V,
            floatingStyles: B,
            placement: H,
            middlewareData: j,
            update: Y,
            context: W,
        } = (0, a.we)({
            nodeId: F,
            placement: S,
            open: m,
            onOpenChange: E,
            strategy: R,
            middleware: G,
            whileElementsMounted: k ? o.ll : void 0,
        });
    i.useLayoutEffect(() => {
        null != T ? V.setPositionReference({ getBoundingClientRect: () => T }) : null != I && V.setReference(I);
    }, [V, T, I]);
    let K = (0, a.s9)(W),
        $ = (0, a.Mk)(W, { restMs: x, delay: { open: x, close: 0 }, enabled: "hover" === P, handleClose: (0, a.iB)() }),
        { getReferenceProps: z, getFloatingProps: q } = (0, a.bv)([K, $]),
        Z = j.hide?.referenceHidden ? "hidden" : "visible",
        X = O ? c.sM : i.Fragment,
        Q = i.useMemo(() => ({ focus: t }), [t]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            D({ ref: V.setReference, props: z() }),
            (0, r.jsx)(a.$c, {
                id: F,
                children:
                    m &&
                    (0, r.jsxs)(X, {
                        ownerDocument: l,
                        children: [
                            b ? (0, r.jsx)(a.zR, { lockScroll: !0 }) : null,
                            (() => {
                                let e = (0, r.jsx)("div", {
                                    id: g,
                                    className: u()(A, d.q),
                                    [p]: !0,
                                    style: { ...B, visibility: Z },
                                    ref: V.setFloating,
                                    ...q(),
                                    children: (0, r.jsx)(h.Provider, {
                                        value: Q,
                                        children: L({
                                            placement: H,
                                            update: Y,
                                            hidden: "hidden" === Z,
                                            shift: j.shift,
                                        }),
                                    }),
                                });
                                return "none" === t
                                    ? e
                                    : (0, r.jsx)(a.s3, {
                                          context: W,
                                          modal: "modal" === t,
                                          returnFocus: U,
                                          children: e,
                                      });
                            })(),
                        ],
                    }),
            }),
        ],
    });
}
function E(e) {
    return null == (0, a.R1)() ? (0, r.jsx)(a.P6, { children: (0, r.jsx)(m, { ...e }) }) : (0, r.jsx)(m, { ...e });
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
function A(e) {
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
