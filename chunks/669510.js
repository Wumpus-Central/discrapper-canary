l.d(t, { _: () => o });
var s = l(627968),
    n = l(64700),
    a = l(503698),
    r = l.n(a),
    i = l(834730),
    d = l(580630),
    c = l(777485),
    u = l(303519);
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
                t = (0, d.$g)(e, v);
            return (0, d.CE)(t, j, h);
        }, [x, v, j, h]),
        b = (0, s.jsxs)(c.h, {
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
                        a = (0, d.$g)(l, v),
                        r = t ? a : (0, d.CE)(a, j, h);
                    return (0, s.jsx)(c.i, { value: r, ...n }, n.id);
                }),
                (0, s.jsx)("div", { className: u.m }),
                (0, s.jsx)(c.i, {
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
