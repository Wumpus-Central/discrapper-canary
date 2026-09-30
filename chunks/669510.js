n.d(t, { _: () => d });
var l = n(477900),
    r = n(582128),
    a = n(503698),
    i = n.n(a),
    s = n(834730),
    o = n(580630),
    u = n(777485),
    c = n(564082);
function d(e) {
    let {
            label: t,
            totalLineItemLabel: n,
            totalLineItemLabelSubText: a,
            totalLineItemValueSubText: d,
            showTotalWhenCollapsed: m = !1,
            lineItems: x,
            intervalType: f,
            intervalCount: p,
            currency: h,
            defaultExpanded: v = !1,
        } = e,
        [j, g] = r.useState(v),
        E = r.useMemo(() => {
            let e = x.reduce((e, t) => e + t.amount, 0),
                t = (0, o.$g)(e, h);
            return (0, o.CE)(t, f, p);
        }, [x, h, f, p]),
        N = (0, l.jsxs)(u.h, {
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
                        a = (0, o.$g)(n, h),
                        i = t ? a : (0, o.CE)(a, f, p);
                    return (0, l.jsx)(u.i, { value: i, ...r }, r.id);
                }),
                (0, l.jsx)("div", { className: c.m }),
                (0, l.jsx)(u.i, {
                    label: n ?? t,
                    labelSubText: a,
                    value: E,
                    subText: d,
                    color: "text-strong",
                    valueColor: "text-strong",
                }),
            ],
        });
    return (0, l.jsx)("div", { className: i()({ [c.k]: j }), children: N });
}
