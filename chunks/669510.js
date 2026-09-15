l.d(t, { _: () => o });
var s = l(477900),
    n = l(582128),
    a = l(503698),
    r = l.n(a),
    i = l(834730),
    c = l(580630),
    d = l(777485),
    u = l(564082);
function o(e) {
    let {
            label: t,
            totalLineItemLabel: l,
            totalLineItemLabelSubText: a,
            totalLineItemValueSubText: o,
            showTotalWhenCollapsed: m = !1,
            lineItems: x,
            intervalType: j,
            intervalCount: h,
            currency: v,
            defaultExpanded: g = !1,
        } = e,
        [p, f] = n.useState(g),
        N = n.useMemo(() => {
            let e = x.reduce((e, t) => e + t.amount, 0),
                t = (0, c.$g)(e, v);
            return (0, c.CE)(t, j, h);
        }, [x, v, j, h]),
        b = (0, s.jsxs)(d.h, {
            label: t,
            defaultExpanded: g,
            isDisabled: x.length <= 0,
            onExpandedChange: f,
            collapsedContent: m
                ? (0, s.jsx)(i.E, { variant: "text-md/normal", color: "text-subtle", children: N })
                : null,
            children: [
                x.map((e) => {
                    let { formatWithoutRate: t, amount: l, ...n } = e,
                        a = (0, c.$g)(l, v),
                        r = t ? a : (0, c.CE)(a, j, h);
                    return (0, s.jsx)(d.i, { value: r, ...n }, n.id);
                }),
                (0, s.jsx)("div", { className: u.m }),
                (0, s.jsx)(d.i, {
                    label: l ?? t,
                    labelSubText: a,
                    value: N,
                    subText: o,
                    color: "text-strong",
                    valueColor: "text-strong",
                }),
            ],
        });
    return (0, s.jsx)("div", { className: r()({ [u.k]: p }), children: b });
}
