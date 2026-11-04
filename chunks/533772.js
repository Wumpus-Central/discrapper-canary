var n = t(477900),
    r = t(503698),
    a = t.n(r),
    i = t(834730),
    o = t(318254),
    s = t(25082),
    c = t(792996),
    u = t(919700);
function d(e) {
    let { variant: l, color: t = "text-default", className: r, orbPrice: a } = e;
    return (0, n.jsx)(i.E, {
        className: r,
        variant: l,
        color: t,
        lineClamp: 1,
        children: c.intl.format(s.default["0oZGvW"], {
            orbPrice: a,
            orbIconHook: () => (0, n.jsx)(o.C, { className: u.f, size: "xs", color: "currentColor" }, "orbs-icon"),
        }),
    });
}
t.d(
    l,
    {},
    {
        A: function (e) {
            let { orbsGate: l, className: t, orbPrice: r, fiatPrice: o, textDefaultColor: m = "text-default" } = e;
            return "HIDDEN" === l
                ? null
                : (0, n.jsx)(i.E, {
                      className: a()(u.Q, t),
                      variant: "body-md/medium",
                      color: "text-muted",
                      lineClamp: 1,
                      children: c.intl.format(s.default.Kkah9a, {
                          price1Hook: () =>
                              (0, n.jsx)(d, { variant: "body-md/semibold", color: m, orbPrice: r }, "orbs-price"),
                          price2Hook: () =>
                              (0, n.jsx)(
                                  i.E,
                                  { variant: "body-md/semibold", color: m, lineClamp: 1, children: o },
                                  "fiat-price",
                              ),
                      }),
                  });
        },
        O: d,
    },
);
