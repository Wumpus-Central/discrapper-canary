l.d(t, { A: () => m, O: () => d });
var a = l(627968),
    n = l(503698),
    r = l.n(n),
    i = l(834730),
    s = l(318254),
    o = l(430825),
    c = l(375708),
    u = l(979393);
function d(e) {
    let { variant: t, color: l = "text-default", className: n, orbPrice: r } = e;
    return (0, a.jsx)(i.E, {
        className: n,
        variant: t,
        color: l,
        lineClamp: 1,
        children: c.intl.format(o.default["0oZGvW"], {
            orbPrice: r,
            orbIconHook: () => (0, a.jsx)(s.C, { className: u.f, size: "xs", color: "currentColor" }, "orbs-icon"),
        }),
    });
}
function m(e) {
    let { orbsGate: t, className: l, orbPrice: n, fiatPrice: s, textDefaultColor: m = "text-default" } = e;
    return "HIDDEN" === t
        ? null
        : "CAN_CHECKOUT" === t
          ? (0, a.jsx)(i.E, {
                className: r()(u.Q, l),
                variant: "text-md/medium",
                color: "text-muted",
                lineClamp: 1,
                children: c.intl.format(o.default.Kkah9a, {
                    price1Hook: () => (0, a.jsx)(d, { variant: "text-md/bold", color: m, orbPrice: n }, "orbs-price"),
                    price2Hook: () =>
                        (0, a.jsx)(i.E, { variant: "text-md/bold", color: m, lineClamp: 1, children: s }, "fiat-price"),
                }),
            })
          : (0, a.jsx)(i.E, {
                className: r()(u.Q, l),
                variant: "text-md/medium",
                color: "text-muted",
                lineClamp: 1,
                children: c.intl.format(o.default.Kkah9a, {
                    price1Hook: () =>
                        (0, a.jsx)(i.E, { variant: "text-md/bold", color: m, lineClamp: 1, children: s }, "fiat-price"),
                    price2Hook: () =>
                        (0, a.jsx)(d, { variant: "text-md/semibold", color: "text-muted", orbPrice: n }, "orbs-price"),
                }),
            });
}
