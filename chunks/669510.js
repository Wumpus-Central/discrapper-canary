l.d(t, { _: () => o });
var s = l(627968),
    a = l(64700),
    n = l(503698),
    i = l.n(n),
    r = l(834730),
    d = l(580630),
    c = l(381247),
    u = l(303519);
function o(e) {
    let {
            label: t,
            totalLineItemLabel: l,
            totalLineItemLabelSubText: n,
            totalLineItemValueSubText: o,
            showTotalWhenCollapsed: m = !1,
            lineItems: x,
            intervalType: h,
            intervalCount: j,
            currency: v,
            defaultExpanded: p = !1,
        } = e,
        [g, f] = a.useState(p),
        N = a.useMemo(() => {
            let e = x.reduce((e, t) => e + t.amount, 0),
                t = (0, d.$g)(e, v);
            return (0, d.CE)(t, h, j);
        }, [x, v, h, j]),
        b = (0, s.jsxs)(c.h, {
            label: t,
            defaultExpanded: p,
            isDisabled: x.length <= 0,
            onExpandedChange: f,
            collapsedContent: m
                ? (0, s.jsx)(r.E, { variant: "text-md/normal", color: "text-subtle", children: N })
                : null,
            children: [
                x.map((e) => {
                    let { formatWithoutRate: t, amount: l, ...a } = e,
                        n = (0, d.$g)(l, v),
                        i = t ? n : (0, d.CE)(n, h, j);
                    return (0, s.jsx)(c.i, { value: i, ...a }, a.id);
                }),
                (0, s.jsx)("div", { className: u.m }),
                (0, s.jsx)(c.i, {
                    label: l ?? t,
                    labelSubText: n,
                    value: N,
                    subText: o,
                    color: "text-strong",
                    valueColor: "text-strong",
                }),
            ],
        });
    return (0, s.jsx)("div", { className: i()({ [u.k]: g }), children: b });
}
