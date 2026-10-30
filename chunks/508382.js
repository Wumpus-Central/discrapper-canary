(n.d(t, { $Y: () => I, IP: () => _, Ow: () => h, Pv: () => f, jQ: () => E }), n(321073));
var i = n(477900),
    r = n(582128),
    a = n(458265),
    s = n(499957),
    l = n(38339),
    o = n(503698),
    d = n.n(o),
    c = n(337836),
    u = n(391878);
let _ = "data-popover-layer",
    E = r.createContext(null);
function A(e) {
    let t,
        {
            focus: n = "none",
            returnFocusElement: o,
            dismissOnEscapeKey: A = !0,
            ownerDocument: h = document,
            open: f,
            onOpenChange: I,
            id: p,
            className: T,
            reference: m,
            overrideTargetRect: g,
            placement: S = "bottom",
            spacing: N = 8,
            alignmentSpacing: C,
            autoFlip: O = !0,
            crossAccessFlip: R = !0,
            autoShift: L = !0,
            strategy: y = "fixed",
            portal: D = !0,
            blockPointerEvents: v = !1,
            children: b,
            renderLayer: M,
            viewportPadding: P = 8,
            shiftPadding: U,
            maxHeight: w,
            trigger: G = "click",
            hoverDelay: x = 100,
            autoUpdate: k = !1,
        } = e,
        F = r.useRef(o ?? null);
    r.useLayoutEffect(() => {
        F.current = o ?? null;
    }, [o]);
    let B = r.useMemo(() => {
            let e = [(0, a.cY)({ mainAxis: N, alignmentAxis: C })];
            return (
                O && e.push((0, a.UU)({ crossAxis: R, padding: P, boundary: h.body })),
                L && e.push((0, a.BN)({ padding: U ?? P, limiter: (0, a.ER)(), boundary: h.body })),
                e.push((0, a.jD)({ strategy: "referenceHidden" })),
                null != w &&
                    e.push(
                        (0, a.Ej)({
                            padding: P,
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
        }, [N, C, O, L, P, U, R, h, w]),
        V = (0, s.fI)(),
        {
            refs: H,
            floatingStyles: j,
            placement: W,
            middlewareData: Y,
            update: K,
            context: $,
        } = (0, s.we)({
            nodeId: V,
            placement: S,
            open: f,
            onOpenChange: I,
            strategy: y,
            middleware: B,
            whileElementsMounted: k
                ? (e, t, n) =>
                      (0, l.ll)(e, t, n, {
                          ancestorScroll: null == g,
                          ancestorResize: null == g,
                          layoutShift: null == g,
                      })
                : void 0,
        });
    r.useLayoutEffect(() => {
        null != g ? H.setPositionReference({ getBoundingClientRect: () => g }) : null != m && H.setReference(m);
    }, [H, g, m]);
    let z = (0, s.s9)($, { escapeKey: A }),
        X = (0, s.Mk)($, { restMs: x, delay: { open: x, close: 0 }, enabled: "hover" === G, handleClose: (0, s.iB)() }),
        { getReferenceProps: q, getFloatingProps: Z } = (0, s.bv)([z, X]),
        Q = Y.hide?.referenceHidden ? "hidden" : "visible",
        J = D ? c.sM : r.Fragment,
        ee = r.useMemo(() => ({ focus: n }), [n]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            b({ ref: H.setReference, props: q() }),
            (0, i.jsx)(s.$c, {
                id: V,
                children:
                    f &&
                    (0, i.jsxs)(J, {
                        ownerDocument: h,
                        children: [
                            v ? (0, i.jsx)(s.zR, { lockScroll: !0 }) : null,
                            ((t = (0, i.jsx)("div", {
                                id: p,
                                className: d()(T, u.q),
                                [_]: !0,
                                style: { ...j, visibility: Q },
                                ref: H.setFloating,
                                ...Z(),
                                children: (0, i.jsx)(E.Provider, {
                                    value: ee,
                                    children: M({ placement: W, update: K, hidden: "hidden" === Q, shift: Y.shift }),
                                }),
                            })),
                            "none" === n
                                ? t
                                : (0, i.jsx)(s.s3, { context: $, modal: "modal" === n, returnFocus: F, children: t })),
                        ],
                    }),
            }),
        ],
    });
}
function h(e) {
    return null == (0, s.R1)() ? (0, i.jsx)(s.P6, { children: (0, i.jsx)(A, { ...e }) }) : (0, i.jsx)(A, { ...e });
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
function I(e) {
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
