l.d(t, { A: () => m, O: () => d });
var n = l(477900),
    r = l(503698),
    a = l.n(r),
    i = l(834730),
    o = l(318254),
    s = l(206285),
    c = l(105292),
    u = l(919700);
function d(e) {
    let { variant: t, color: l = "text-default", className: r, orbPrice: a } = e;
    return (0, n.jsx)(i.E, {
        className: r,
        variant: t,
        color: l,
        lineClamp: 1,
        children: c.intl.format(s.default["0oZGvW"], {
            orbPrice: a,
            orbIconHook: () => (0, n.jsx)(o.C, { className: u.f, size: "xs", color: "currentColor" }, "orbs-icon"),
        }),
    });
}
function m(e) {
    let { orbsGate: t, className: l, orbPrice: r, fiatPrice: o, textDefaultColor: m = "text-default" } = e;
    return "HIDDEN" === t
        ? null
        : (0, n.jsx)(i.E, {
              className: a()(u.Q, l),
              variant: "text-md/medium",
              color: "text-muted",
              lineClamp: 1,
              children: c.intl.format(s.default.Kkah9a, {
                  price1Hook: () => (0, n.jsx)(d, { variant: "text-md/bold", color: m, orbPrice: r }, "orbs-price"),
                  price2Hook: () =>
                      (0, n.jsx)(i.E, { variant: "text-md/bold", color: m, lineClamp: 1, children: o }, "fiat-price"),
              }),
          });
}
