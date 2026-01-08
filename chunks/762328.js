n.d(t, {
    TA: () => E,
    a_: () => y,
    pS: () => b,
}),
    n(539854),
    n(35282);
var r = n(54381),
    i = n(473749),
    a = n(998976),
    o = n(980824),
    s = n(615673),
    l = n(120356),
    c = n.n(l),
    u = n(155127),
    d = n(966044),
    f = n(282144);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let g = 8,
    E = "data-popover-layer";
function b(e) {
    var t;
    let n,
        {
            ownerDocument: l = document,
            open: p,
            onOpenChange: m,
            id: b,
            className: y,
            overrideTargetRect: O,
            placement: v = "bottom",
            spacing: S = 8,
            autoFlip: I = !0,
            crossAccessFlip: T = !0,
            autoShift: C = !0,
            strategy: A = "fixed",
            portal: N = !0,
            blockPointerEvents: P = !1,
            children: R,
            renderLayer: w,
            viewportPadding: D = g,
            trigger: x = "click",
        } = e,
        L = i.useRef(null),
        j = i.useMemo(() => {
            let e = [(0, a.cv)(S)];
            return (
                I &&
                    e.push(
                        (0, a.RR)({
                            crossAxis: T,
                            padding: D,
                            boundary: l.body,
                        }),
                    ),
                C &&
                    e.push(
                        (0, a.uY)({
                            padding: D,
                            limiter: (0, a.dr)(),
                            boundary: l.body,
                        }),
                    ),
                e.push((0, a.Cp)({ strategy: "referenceHidden" })),
                e
            );
        }, [S, I, C, D, T, l]);
    null != O && (n = { reference: { getBoundingClientRect: () => O } });
    let {
            refs: M,
            floatingStyles: k,
            placement: U,
            middlewareData: G,
            update: Z,
            context: F,
        } = (0, o.YF)({
            placement: v,
            open: p,
            onOpenChange: m,
            strategy: A,
            middleware: j,
            whileElementsMounted: s.Me,
            elements: n,
        }),
        B = (0, o.bQ)(F),
        V = (0, o.XI)(F, {
            enabled: "hover" === x,
            handleClose: (0, o.xp)({ blockPointerEvents: !0 }),
        }),
        { getReferenceProps: H, getFloatingProps: Y } = (0, o.NI)([B, V]),
        W = (null == (t = G.hide) ? void 0 : t.referenceHidden) ? "hidden" : "visible",
        K = N ? d.UU : i.Fragment;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            R({
                ref: M.setReference,
                props: H(),
            }),
            p &&
                (0, r.jsxs)(K, {
                    ownerDocument: l,
                    children: [
                        P ? (0, r.jsx)(o.y0, {}) : null,
                        (0, r.jsx)(
                            "div",
                            h(
                                _(
                                    {
                                        id: b,
                                        className: c()(y, f.layer),
                                        [E]: !0,
                                        style: h(_({}, k), { visibility: W }),
                                        ref: M.setFloating,
                                    },
                                    Y(),
                                ),
                                {
                                    children: (0, r.jsx)(u.Jc, {
                                        containerRef: L,
                                        children: w({
                                            placement: U,
                                            update: Z,
                                            hidden: "hidden" === W,
                                        }),
                                    }),
                                },
                            ),
                        ),
                    ],
                }),
        ],
    });
}
function y(e, t) {
    switch (e) {
        case "center":
        case "window_center":
        default:
            return "top";
        case "top":
        case "bottom":
            if ("left" === t) return "".concat(e, "-start");
            if ("right" === t) return "".concat(e, "-end");
            return e;
        case "left":
        case "right":
            if ("top" === t) return "".concat(e, "-start");
            if ("bottom" === t) return "".concat(e, "-end");
            return e;
    }
}
