l.d(t, { _: () => d });
var n = l(477900),
    r = l(582128),
    a = l(503698),
    i = l.n(a),
    s = l(834730),
    o = l(580630),
    c = l(777485),
    u = l(860327);
function d(e) {
    let {
            label: t,
            totalLineItemLabel: l,
            totalLineItemLabelSubText: a,
            totalLineItemValueSubText: d,
            showTotalWhenCollapsed: m = !1,
            lineItems: x,
            intervalType: f,
            intervalCount: p,
            currency: v,
            defaultExpanded: h = !1,
        } = e,
        [j, g] = r.useState(h),
        N = r.useMemo(() => {
            let e = x.reduce((e, t) => e + t.amount, 0),
                t = (0, o.$g)(e, v);
            return (0, o.CE)(t, f, p);
        }, [x, v, f, p]),
        E = (0, n.jsxs)(c.h, {
            label: t,
            defaultExpanded: h,
            isDisabled: x.length <= 0,
            onExpandedChange: g,
            collapsedContent: m
                ? (0, n.jsx)(s.E, { variant: "text-md/normal", color: "text-subtle", children: N })
                : null,
            children: [
                x.map((e) => {
                    let { formatWithoutRate: t, amount: l, ...r } = e,
                        a = (0, o.$g)(l, v),
                        i = t ? a : (0, o.CE)(a, f, p);
                    return (0, n.jsx)(c.i, { value: i, ...r }, r.id);
                }),
                (0, n.jsx)("div", { className: u.m }),
                (0, n.jsx)(c.i, {
                    label: l ?? t,
                    labelSubText: a,
                    value: N,
                    subText: d,
                    color: "text-strong",
                    valueColor: "text-strong",
                }),
            ],
        });
    return (0, n.jsx)("div", { className: i()({ [u.k]: j }), children: E });
}
