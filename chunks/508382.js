n.d(t, {
    $Y: () => A,
    IP: () => b,
    Ow: () => y,
    Pv: () => O,
}),
    n(321073),
    n(747238);
var r = n(627968),
    i = n(64700),
    a = n(879821),
    s = n(862019),
    o = n(193439),
    l = n(503698),
    c = n.n(l),
    u = n(426333),
    d = n(337836),
    f = n(11212);
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
function h(e, t) {
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
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let g = 8,
    E = 100,
    b = "data-popover-layer";
function y(e) {
    var t;
    let n,
        {
            ownerDocument: l = document,
            open: p,
            onOpenChange: h,
            id: y,
            className: O,
            reference: A,
            overrideTargetRect: v,
            placement: S = "bottom",
            spacing: I = 8,
            autoFlip: T = !0,
            crossAccessFlip: C = !0,
            autoShift: N = !0,
            strategy: R = "fixed",
            portal: w = !0,
            blockPointerEvents: P = !1,
            children: D,
            renderLayer: x,
            viewportPadding: L = g,
            maxHeight: j,
            trigger: M = "click",
            hoverDelay: k = E,
        } = e,
        U = i.useRef(null),
        G = i.useMemo(() => {
            let e = [(0, a.cY)(I)];
            return (
                T &&
                    e.push(
                        (0, a.UU)({
                            crossAxis: C,
                            padding: L,
                            boundary: l.body,
                        }),
                    ),
                N &&
                    e.push(
                        (0, a.BN)({
                            padding: L,
                            limiter: (0, a.ER)(),
                            boundary: l.body,
                        }),
                    ),
                e.push((0, a.jD)({ strategy: "referenceHidden" })),
                null != j &&
                    e.push(
                        (0, a.Ej)({
                            padding: L,
                            boundary: l.body,
                            apply(e) {
                                let { availableHeight: t, elements: n } = e,
                                    r = Math.min(j, t);
                                n.floating.style.setProperty("--custom-floating-layer-max-height", "".concat(r, "px"));
                            },
                        }),
                    ),
                e
            );
        }, [I, T, N, L, C, l, j]);
    null != v ? (n = { reference: { getBoundingClientRect: () => v } }) : null != A && (n = { reference: A });
    let {
            refs: V,
            floatingStyles: F,
            placement: B,
            middlewareData: H,
            update: Y,
            context: W,
        } = (0, s.we)({
            placement: S,
            open: p,
            onOpenChange: h,
            strategy: R,
            middleware: G,
            whileElementsMounted: o.ll,
            elements: n,
        }),
        K = (0, s.s9)(W),
        z = (0, s.Mk)(W, {
            restMs: k,
            delay: {
                open: k,
                close: 0,
            },
            enabled: "hover" === M,
            handleClose: (0, s.iB)({ blockPointerEvents: !0 }),
        }),
        { getReferenceProps: q, getFloatingProps: X } = (0, s.bv)([K, z]),
        Z = (null == (t = H.hide) ? void 0 : t.referenceHidden) ? "hidden" : "visible",
        Q = w ? d.sM : i.Fragment;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            D({
                ref: V.setReference,
                props: q(),
            }),
            p &&
                (0, r.jsxs)(Q, {
                    ownerDocument: l,
                    children: [
                        P ? (0, r.jsx)(s.zR, {}) : null,
                        (0, r.jsx)(
                            "div",
                            m(
                                _(
                                    {
                                        id: y,
                                        className: c()(O, f.q),
                                        [b]: !0,
                                        style: m(_({}, F), { visibility: Z }),
                                        ref: V.setFloating,
                                    },
                                    X(),
                                ),
                                {
                                    children: (0, r.jsx)(u.xp, {
                                        containerRef: U,
                                        children: x({
                                            placement: B,
                                            update: Y,
                                            hidden: "hidden" === Z,
                                            shift: H.shift,
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
function O(e, t) {
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
