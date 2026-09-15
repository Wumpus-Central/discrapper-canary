r.d(t, { A: () => m, O: () => d });
var l = r(477900),
    n = r(503698),
    a = r.n(n),
    i = r(834730),
    o = r(318254),
    s = r(621547),
    c = r(375708),
    u = r(919700);
function d(e) {
    let { variant: t, color: r = "text-default", className: n, orbPrice: a } = e;
    return (0, l.jsx)(i.E, {
        className: n,
        variant: t,
        color: r,
        lineClamp: 1,
        children: c.intl.format(s.default["0oZGvW"], {
            orbPrice: a,
            orbIconHook: () => (0, l.jsx)(o.C, { className: u.f, size: "xs", color: "currentColor" }, "orbs-icon"),
        }),
    });
}
function m(e) {
    let { orbsGate: t, className: r, orbPrice: n, fiatPrice: o, textDefaultColor: m = "text-default" } = e;
    return "HIDDEN" === t
        ? null
        : (0, l.jsx)(i.E, {
              className: a()(u.Q, r),
              variant: "text-md/medium",
              color: "text-muted",
              lineClamp: 1,
              children: c.intl.format(s.default.Kkah9a, {
                  price1Hook: () => (0, l.jsx)(d, { variant: "text-md/bold", color: m, orbPrice: n }, "orbs-price"),
                  price2Hook: () =>
                      (0, l.jsx)(i.E, { variant: "text-md/bold", color: m, lineClamp: 1, children: o }, "fiat-price"),
              }),
          });
}
