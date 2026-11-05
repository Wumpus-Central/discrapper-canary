var n = l(477900),
    r = l(582128),
    a = l(503698),
    s = l.n(a),
    i = l(834730),
    o = l(580630),
    c = l(200179),
    d = l(564082);
l.d(
    t,
    {},
    {
        _: function (e) {
            let {
                    label: t,
                    totalLineItemLabel: l,
                    totalLineItemLabelSubText: a,
                    totalLineItemValueSubText: u,
                    showTotalWhenCollapsed: m = !1,
                    lineItems: x,
                    intervalType: h,
                    intervalCount: p,
                    currency: f,
                    defaultExpanded: v = !1,
                } = e,
                [j, b] = r.useState(v),
                g = r.useMemo(() => {
                    let e = x.reduce((e, t) => e + t.amount, 0),
                        t = (0, o.$g)(e, f);
                    return (0, o.CE)(t, h, p);
                }, [x, f, h, p]),
                E = (0, n.jsxs)(c.h, {
                    label: t,
                    defaultExpanded: v,
                    isDisabled: x.length <= 0,
                    onExpandedChange: b,
                    collapsedContent: m
                        ? (0, n.jsx)(i.E, { variant: "body-md/normal", color: "text-subtle", children: g })
                        : null,
                    children: [
                        x.map((e) => {
                            let { formatWithoutRate: t, amount: l, ...r } = e,
                                a = (0, o.$g)(l, f),
                                s = t ? a : (0, o.CE)(a, h, p);
                            return (0, n.jsx)(c.i, { value: s, ...r }, r.id);
                        }),
                        (0, n.jsx)("div", { className: d.m }),
                        (0, n.jsx)(c.i, {
                            label: l ?? t,
                            labelSubText: a,
                            value: g,
                            subText: u,
                            color: "text-strong",
                            valueColor: "text-strong",
                        }),
                    ],
                });
            return (0, n.jsx)("div", { className: s()({ [d.k]: j }), children: E });
        },
    },
);
