n.d(t, { _: () => d });
var l = n(477900),
    r = n(582128),
    a = n(503698),
    i = n.n(a),
    s = n(834730),
    o = n(580630),
    c = n(777485),
    u = n(564082);
function d(e) {
    let {
            label: t,
            totalLineItemLabel: n,
            totalLineItemLabelSubText: a,
            totalLineItemValueSubText: d,
            showTotalWhenCollapsed: m = !1,
            lineItems: x,
            intervalType: f,
            intervalCount: h,
            currency: p,
            defaultExpanded: v = !1,
        } = e,
        [j, g] = r.useState(v),
        E = r.useMemo(() => {
            let e = x.reduce((e, t) => e + t.amount, 0),
                t = (0, o.$g)(e, p);
            return (0, o.CE)(t, f, h);
        }, [x, p, f, h]),
        b = (0, l.jsxs)(c.h, {
            label: t,
            defaultExpanded: v,
            isDisabled: x.length <= 0,
            onExpandedChange: g,
            collapsedContent: m
                ? (0, l.jsx)(s.E, { variant: "text-md/normal", color: "text-subtle", children: E })
                : null,
            children: [
                x.map((e) => {
                    let { formatWithoutRate: t, amount: n, ...r } = e,
                        a = (0, o.$g)(n, p),
                        i = t ? a : (0, o.CE)(a, f, h);
                    return (0, l.jsx)(c.i, { value: i, ...r }, r.id);
                }),
                (0, l.jsx)("div", { className: u.m }),
                (0, l.jsx)(c.i, {
                    label: n ?? t,
                    labelSubText: a,
                    value: E,
                    subText: d,
                    color: "text-strong",
                    valueColor: "text-strong",
                }),
            ],
        });
    return (0, l.jsx)("div", { className: i()({ [u.k]: j }), children: b });
}
