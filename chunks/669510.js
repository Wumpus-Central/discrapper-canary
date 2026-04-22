n.d(t, { _: () => d });
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(834730),
    o = n(580630),
    u = n(381247),
    c = n(303519);
function d(e) {
    let {
            label: t,
            totalLineItemLabel: n,
            totalLineItemLabelSubText: i,
            totalLineItemValueSubText: d,
            showTotalWhenCollapsed: _ = !1,
            lineItems: p,
            intervalType: h,
            intervalCount: m,
            currency: A,
            defaultExpanded: f = !1,
        } = e,
        [g, E] = l.useState(f),
        C = l.useMemo(() => {
            let e = p.reduce((e, t) => e + t.amount, 0),
                t = (0, o.$g)(e, A);
            return (0, o.CE)(t, h, m);
        }, [p, A, h, m]),
        I = (0, r.jsxs)(u.h, {
            label: t,
            defaultExpanded: f,
            isDisabled: p.length <= 0,
            onExpandedChange: E,
            collapsedContent: _
                ? (0, r.jsx)(s.E, { variant: "text-md/normal", color: "text-subtle", children: C })
                : null,
            children: [
                p.map((e) => {
                    let { formatWithoutRate: t, amount: n, ...l } = e,
                        i = (0, o.$g)(n, A),
                        a = t ? i : (0, o.CE)(i, h, m);
                    return (0, r.jsx)(u.i, { value: a, ...l }, l.id);
                }),
                (0, r.jsx)("div", { className: c.m }),
                (0, r.jsx)(u.i, {
                    label: n ?? t,
                    labelSubText: i,
                    value: C,
                    subText: d,
                    color: "text-strong",
                    valueColor: "text-strong",
                }),
            ],
        });
    return (0, r.jsx)("div", { className: a()({ [c.k]: g }), children: I });
}
