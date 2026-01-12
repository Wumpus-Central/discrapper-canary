n.d(t, {
    C: () => O,
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
            reference: O,
            overrideTargetRect: v,
            placement: S = "bottom",
            spacing: I = 8,
            autoFlip: T = !0,
            crossAccessFlip: C = !0,
            autoShift: A = !0,
            strategy: N = "fixed",
            portal: P = !0,
            blockPointerEvents: R = !1,
            children: w,
            renderLayer: D,
            viewportPadding: x = g,
            trigger: L = "click",
        } = e,
        j = i.useRef(null),
        M = i.useMemo(() => {
            let e = [(0, a.cv)(I)];
            return (
                T &&
                    e.push(
                        (0, a.RR)({
                            crossAxis: C,
                            padding: x,
                            boundary: l.body,
                        }),
                    ),
                A &&
                    e.push(
                        (0, a.uY)({
                            padding: x,
                            limiter: (0, a.dr)(),
                            boundary: l.body,
                        }),
                    ),
                e.push((0, a.Cp)({ strategy: "referenceHidden" })),
                e
            );
        }, [I, T, A, x, C, l]);
    null != v ? (n = { reference: { getBoundingClientRect: () => v } }) : null != O && (n = { reference: O });
    let {
            refs: k,
            floatingStyles: U,
            placement: G,
            middlewareData: Z,
            update: F,
            context: B,
        } = (0, o.YF)({
            placement: S,
            open: p,
            onOpenChange: m,
            strategy: N,
            middleware: M,
            whileElementsMounted: s.Me,
            elements: n,
        }),
        V = (0, o.bQ)(B),
        H = (0, o.XI)(B, {
            enabled: "hover" === L,
            handleClose: (0, o.xp)({ blockPointerEvents: !0 }),
        }),
        { getReferenceProps: Y, getFloatingProps: W } = (0, o.NI)([V, H]),
        K = (null == (t = Z.hide) ? void 0 : t.referenceHidden) ? "hidden" : "visible",
        z = P ? d.UU : i.Fragment;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            w({
                ref: k.setReference,
                props: Y(),
            }),
            p &&
                (0, r.jsxs)(z, {
                    ownerDocument: l,
                    children: [
                        R ? (0, r.jsx)(o.y0, {}) : null,
                        (0, r.jsx)(
                            "div",
                            h(
                                _(
                                    {
                                        id: b,
                                        className: c()(y, f.layer),
                                        [E]: !0,
                                        style: h(_({}, U), { visibility: K }),
                                        ref: k.setFloating,
                                    },
                                    W(),
                                ),
                                {
                                    children: (0, r.jsx)(u.Jc, {
                                        containerRef: j,
                                        children: D({
                                            placement: G,
                                            update: F,
                                            hidden: "hidden" === K,
                                            shift: Z.shift,
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
function O(e) {
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
