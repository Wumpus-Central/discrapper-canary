t.d(l, { A: () => m, O: () => d });
var n = t(477900),
    r = t(503698),
    a = t.n(r),
    i = t(834730),
    s = t(318254),
    o = t(206285),
    c = t(660183),
    u = t(919700);
function d(e) {
    let { variant: l, color: t = "text-default", className: r, orbPrice: a } = e;
    return (0, n.jsx)(i.E, {
        className: r,
        variant: l,
        color: t,
        lineClamp: 1,
        children: c.intl.format(o.default["0oZGvW"], {
            orbPrice: a,
            orbIconHook: () => (0, n.jsx)(s.C, { className: u.f, size: "xs", color: "currentColor" }, "orbs-icon"),
        }),
    });
}
function m(e) {
    let { orbsGate: l, className: t, orbPrice: r, fiatPrice: s, textDefaultColor: m = "text-default" } = e;
    return "HIDDEN" === l
        ? null
        : (0, n.jsx)(i.E, {
              className: a()(u.Q, t),
              variant: "text-md/medium",
              color: "text-muted",
              lineClamp: 1,
              children: c.intl.format(o.default.Kkah9a, {
                  price1Hook: () => (0, n.jsx)(d, { variant: "text-md/bold", color: m, orbPrice: r }, "orbs-price"),
                  price2Hook: () =>
                      (0, n.jsx)(i.E, { variant: "text-md/bold", color: m, lineClamp: 1, children: s }, "fiat-price"),
              }),
          });
}
