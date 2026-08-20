l.d(t, { _: () => d });
var n = l(477900),
    r = l(582128),
    i = l(503698),
    s = l.n(i),
    a = l(834730),
    c = l(580630),
    u = l(777485),
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
            defaultExpanded: j = !1,
        } = e,
        [f, g] = r.useState(j),
        N = r.useMemo(() => {
            let e = x.reduce((e, t) => e + t.amount, 0),
                t = (0, c.$g)(e, v);
            return (0, c.CE)(t, h, p);
        }, [x, v, h, p]),
        E = (0, n.jsxs)(u.h, {
            label: t,
            defaultExpanded: j,
            isDisabled: x.length <= 0,
            onExpandedChange: g,
            collapsedContent: m
                ? (0, n.jsx)(a.E, { variant: "text-md/normal", color: "text-subtle", children: N })
                : null,
            children: [
                x.map((e) => {
                    let { formatWithoutRate: t, amount: l, ...r } = e,
                        i = (0, c.$g)(l, v),
                        s = t ? i : (0, c.CE)(i, h, p);
                    return (0, n.jsx)(u.i, { value: s, ...r }, r.id);
                }),
                (0, n.jsx)("div", { className: o.m }),
                (0, n.jsx)(u.i, {
                    label: l ?? t,
                    labelSubText: i,
                    value: N,
                    subText: d,
                    color: "text-strong",
                    valueColor: "text-strong",
                }),
            ],
        });
    return (0, n.jsx)("div", { className: s()({ [o.k]: f }), children: E });
}
