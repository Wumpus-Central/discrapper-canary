t.d(l, { A: () => m, O: () => d });
var r = t(477900),
    n = t(503698),
    a = t.n(n),
    i = t(834730),
    s = t(318254),
    o = t(206285),
    c = t(375708),
    u = t(919700);
function d(e) {
    let { variant: l, color: t = "text-default", className: n, orbPrice: a } = e;
    return (0, r.jsx)(i.E, {
        className: n,
        variant: l,
        color: t,
        lineClamp: 1,
        children: c.intl.format(o.default["0oZGvW"], {
            orbPrice: a,
            orbIconHook: () => (0, r.jsx)(s.C, { className: u.f, size: "xs", color: "currentColor" }, "orbs-icon"),
        }),
    });
}
function m(e) {
    let { orbsGate: l, className: t, orbPrice: n, fiatPrice: s, textDefaultColor: m = "text-default" } = e;
    return "HIDDEN" === l
        ? null
        : (0, r.jsx)(i.E, {
              className: a()(u.Q, t),
              variant: "text-md/medium",
              color: "text-muted",
              lineClamp: 1,
              children: c.intl.format(o.default.Kkah9a, {
                  price1Hook: () => (0, r.jsx)(d, { variant: "text-md/bold", color: m, orbPrice: n }, "orbs-price"),
                  price2Hook: () =>
                      (0, r.jsx)(i.E, { variant: "text-md/bold", color: m, lineClamp: 1, children: s }, "fiat-price"),
              }),
          });
}
