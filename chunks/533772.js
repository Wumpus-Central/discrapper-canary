l.d(t, { A: () => d });
var a = l(627968),
    r = l(503698),
    n = l.n(r),
    i = l(834730),
    s = l(318254),
    o = l(430825),
    c = l(375708),
    u = l(979393);
function d(e) {
    let { orbsGate: t, className: l, orbPrice: r, fiatPrice: d, textDefaultColor: m = "text-default" } = e;
    return "HIDDEN" === t
        ? null
        : "CAN_CHECKOUT" === t
          ? (0, a.jsx)(i.E, {
                className: n()(u.Q, l),
                variant: "text-md/medium",
                color: "text-muted",
                lineClamp: 1,
                children: c.intl.format(o.default.Kkah9a, {
                    price1Hook: () =>
                        (0, a.jsx)(
                            i.E,
                            {
                                variant: "text-md/bold",
                                color: m,
                                lineClamp: 1,
                                children: c.intl.format(o.default["0oZGvW"], {
                                    orbPrice: r,
                                    orbIconHook: () =>
                                        (0, a.jsx)(s.C, { className: u.f, size: "xs", color: "currentColor" }),
                                }),
                            },
                            "orbs-price",
                        ),
                    price2Hook: () =>
                        (0, a.jsx)(i.E, { variant: "text-md/bold", color: m, lineClamp: 1, children: d }, "fiat-price"),
                }),
            })
          : (0, a.jsx)(i.E, {
                className: n()(u.Q, l),
                variant: "text-md/medium",
                color: "text-muted",
                lineClamp: 1,
                children: c.intl.format(o.default.Kkah9a, {
                    price1Hook: () =>
                        (0, a.jsx)(i.E, { variant: "text-md/bold", color: m, lineClamp: 1, children: d }, "fiat-price"),
                    price2Hook: () =>
                        (0, a.jsx)(
                            i.E,
                            {
                                variant: "text-md/semibold",
                                color: "text-muted",
                                lineClamp: 1,
                                children: c.intl.format(o.default["0oZGvW"], {
                                    orbPrice: r,
                                    orbIconHook: () =>
                                        (0, a.jsx)(
                                            s.C,
                                            { className: u.f, size: "xs", color: "currentColor" },
                                            "orbs-icon",
                                        ),
                                }),
                            },
                            "orbs-price",
                        ),
                }),
            });
}
