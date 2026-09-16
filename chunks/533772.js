l.d(t, { A: () => m, O: () => d });
var n = l(477900),
    r = l(503698),
    i = l.n(r),
    a = l(834730),
    s = l(318254),
    o = l(206285),
    c = l(375708),
    u = l(919700);
function d(e) {
    let { variant: t, color: l = "text-default", className: r, orbPrice: i } = e;
    return (0, n.jsx)(a.E, {
        className: r,
        variant: t,
        color: l,
        lineClamp: 1,
        children: c.intl.format(o.default["0oZGvW"], {
            orbPrice: i,
            orbIconHook: () => (0, n.jsx)(s.C, { className: u.f, size: "xs", color: "currentColor" }, "orbs-icon"),
        }),
    });
}
function m(e) {
    let { orbsGate: t, className: l, orbPrice: r, fiatPrice: s, textDefaultColor: m = "text-default" } = e;
    return "HIDDEN" === t
        ? null
        : (0, n.jsx)(a.E, {
              className: i()(u.Q, l),
              variant: "text-md/medium",
              color: "text-muted",
              lineClamp: 1,
              children: c.intl.format(o.default.Kkah9a, {
                  price1Hook: () => (0, n.jsx)(d, { variant: "text-md/bold", color: m, orbPrice: r }, "orbs-price"),
                  price2Hook: () =>
                      (0, n.jsx)(a.E, { variant: "text-md/bold", color: m, lineClamp: 1, children: s }, "fiat-price"),
              }),
          });
}
