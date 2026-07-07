l.d(t, { A: () => m, O: () => d });
var n = l(627968),
    a = l(503698),
    r = l.n(a),
    i = l(834730),
    o = l(318254),
    s = l(430825),
    c = l(375708),
    u = l(979393);
function d(e) {
    let { variant: t, color: l = "text-default", className: a, orbPrice: r } = e;
    return (0, n.jsx)(i.E, {
        className: a,
        variant: t,
        color: l,
        lineClamp: 1,
        children: c.intl.format(s.default["0oZGvW"], {
            orbPrice: r,
            orbIconHook: () => (0, n.jsx)(o.C, { className: u.f, size: "xs", color: "currentColor" }, "orbs-icon"),
        }),
    });
}
function m(e) {
    let { orbsGate: t, className: l, orbPrice: a, fiatPrice: o, textDefaultColor: m = "text-default" } = e;
    return "HIDDEN" === t
        ? null
        : (0, n.jsx)(i.E, {
              className: r()(u.Q, l),
              variant: "text-md/medium",
              color: "text-muted",
              lineClamp: 1,
              children: c.intl.format(s.default.Kkah9a, {
                  price1Hook: () => (0, n.jsx)(d, { variant: "text-md/bold", color: m, orbPrice: a }, "orbs-price"),
                  price2Hook: () =>
                      (0, n.jsx)(i.E, { variant: "text-md/bold", color: m, lineClamp: 1, children: o }, "fiat-price"),
              }),
          });
}
