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
    f = n(464239);
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
            open: l,
            onOpenChange: p,
            id: m,
            className: b,
            overrideTargetRect: y,
            placement: O = "bottom",
            spacing: v = 8,
            autoFlip: S = !0,
            autoShift: I = !0,
            strategy: T = "fixed",
            portal: A = !0,
            blockPointerEvents: C = !1,
            children: N,
            renderLayer: P,
            viewportPadding: R = g,
            trigger: w = "click",
        } = e,
        D = i.useRef(null),
        x = i.useMemo(() => {
            let e = [(0, a.cv)(v)];
            return (
                S &&
                    e.push(
                        (0, a.RR)({
                            padding: R,
                            boundary: window.document.body,
                        }),
                    ),
                I &&
                    e.push(
                        (0, a.uY)({
                            padding: R,
                            limiter: (0, a.dr)(),
                            boundary: window.document.body,
                        }),
                    ),
                e.push((0, a.Cp)({ strategy: "referenceHidden" })),
                e
            );
        }, [v, S, I, R]);
    null != y && (n = { reference: { getBoundingClientRect: () => y } });
    let {
            refs: L,
            floatingStyles: j,
            placement: M,
            middlewareData: k,
            update: U,
            context: G,
        } = (0, o.YF)({
            placement: O,
            open: l,
            onOpenChange: p,
            strategy: T,
            middleware: x,
            whileElementsMounted: s.Me,
            elements: n,
        }),
        Z = (0, o.bQ)(G),
        B = (0, o.XI)(G, {
            enabled: "hover" === w,
            handleClose: (0, o.xp)({ blockPointerEvents: !0 }),
        }),
        { getReferenceProps: F, getFloatingProps: V } = (0, o.NI)([Z, B]),
        H = (null == (t = k.hide) ? void 0 : t.referenceHidden) ? "hidden" : "visible",
        Y = A ? d.UU : i.Fragment;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            N({
                ref: L.setReference,
                props: F(),
            }),
            l &&
                (0, r.jsxs)(Y, {
                    children: [
                        C ? (0, r.jsx)(o.y0, {}) : null,
                        (0, r.jsx)(
                            "div",
                            h(
                                _(
                                    {
                                        id: m,
                                        className: c()(b, f.layer),
                                        [E]: !0,
                                        style: h(_({}, j), { visibility: H }),
                                        ref: L.setFloating,
                                    },
                                    V(),
                                ),
                                {
                                    children: (0, r.jsx)(u.Jc, {
                                        containerRef: D,
                                        children: P({
                                            placement: M,
                                            update: U,
                                            hidden: "hidden" === H,
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
