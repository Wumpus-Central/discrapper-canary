n.d(t, { _: () => u });
var l = n(477900),
    r = n(582128),
    s = n(503698),
    a = n.n(s),
    i = n(834730),
    o = n(580630),
    c = n(777485),
    d = n(564082);
function u(e) {
    let {
            label: t,
            totalLineItemLabel: n,
            totalLineItemLabelSubText: s,
            totalLineItemValueSubText: u,
            showTotalWhenCollapsed: m = !1,
            lineItems: x,
            intervalType: j,
            intervalCount: h,
            currency: v,
            defaultExpanded: f = !1,
        } = e,
        [p, g] = r.useState(f),
        E = r.useMemo(() => {
            let e = x.reduce((e, t) => e + t.amount, 0),
                t = (0, o.$g)(e, v);
            return (0, o.CE)(t, j, h);
        }, [x, v, j, h]),
        N = (0, l.jsxs)(c.h, {
            label: t,
            defaultExpanded: f,
            isDisabled: x.length <= 0,
            onExpandedChange: g,
            collapsedContent: m
                ? (0, l.jsx)(i.E, { variant: "text-md/normal", color: "text-subtle", children: E })
                : null,
            children: [
                x.map((e) => {
                    let { formatWithoutRate: t, amount: n, ...r } = e,
                        s = (0, o.$g)(n, v),
                        a = t ? s : (0, o.CE)(s, j, h);
                    return (0, l.jsx)(c.i, { value: a, ...r }, r.id);
                }),
                (0, l.jsx)("div", { className: d.m }),
                (0, l.jsx)(c.i, {
                    label: n ?? t,
                    labelSubText: s,
                    value: E,
                    subText: u,
                    color: "text-strong",
                    valueColor: "text-strong",
                }),
            ],
        });
    return (0, l.jsx)("div", { className: a()({ [d.k]: p }), children: N });
}
