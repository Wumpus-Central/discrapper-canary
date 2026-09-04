l.d(t, { _: () => d });
var n = l(477900),
    r = l(582128),
    i = l(503698),
    s = l.n(i),
    a = l(834730),
    u = l(580630),
    c = l(777485),
    o = l(564082);
function d(e) {
    let {
            label: t,
            totalLineItemLabel: l,
            totalLineItemLabelSubText: i,
            totalLineItemValueSubText: d,
            showTotalWhenCollapsed: m = !1,
            lineItems: x,
            intervalType: h,
            intervalCount: p,
            currency: v,
            defaultExpanded: f = !1,
        } = e,
        [j, g] = r.useState(f),
        b = r.useMemo(() => {
            let e = x.reduce((e, t) => e + t.amount, 0),
                t = (0, u.$g)(e, v);
            return (0, u.CE)(t, h, p);
        }, [x, v, h, p]),
        N = (0, n.jsxs)(c.h, {
            label: t,
            defaultExpanded: f,
            isDisabled: x.length <= 0,
            onExpandedChange: g,
            collapsedContent: m
                ? (0, n.jsx)(a.E, { variant: "text-md/normal", color: "text-subtle", children: b })
                : null,
            children: [
                x.map((e) => {
                    let { formatWithoutRate: t, amount: l, ...r } = e,
                        i = (0, u.$g)(l, v),
                        s = t ? i : (0, u.CE)(i, h, p);
                    return (0, n.jsx)(c.i, { value: s, ...r }, r.id);
                }),
                (0, n.jsx)("div", { className: o.m }),
                (0, n.jsx)(c.i, {
                    label: l ?? t,
                    labelSubText: i,
                    value: b,
                    subText: d,
                    color: "text-strong",
                    valueColor: "text-strong",
                }),
            ],
        });
    return (0, n.jsx)("div", { className: s()({ [o.k]: j }), children: N });
}
