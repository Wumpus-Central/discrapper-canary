n.d(t, { _: () => c });
var r = n(627968),
    a = n(64700),
    i = n(503698),
    o = n.n(i),
    l = n(834730),
    s = n(580630),
    d = n(777485),
    u = n(303519);
function c(e) {
    let {
            label: t,
            totalLineItemLabel: n,
            totalLineItemLabelSubText: i,
            totalLineItemValueSubText: c,
            showTotalWhenCollapsed: _ = !1,
            lineItems: p,
            intervalType: C,
            intervalCount: h,
            currency: E,
            defaultExpanded: m = !1,
        } = e,
        [A, I] = a.useState(m),
        T = a.useMemo(() => {
            let e = p.reduce((e, t) => e + t.amount, 0),
                t = (0, s.$g)(e, E);
            return (0, s.CE)(t, C, h);
        }, [p, E, C, h]),
        y = (0, r.jsxs)(d.h, {
            label: t,
            defaultExpanded: m,
            isDisabled: p.length <= 0,
            onExpandedChange: I,
            collapsedContent: _
                ? (0, r.jsx)(l.E, { variant: "text-md/normal", color: "text-subtle", children: T })
                : null,
            children: [
                p.map((e) => {
                    let { formatWithoutRate: t, amount: n, ...a } = e,
                        i = (0, s.$g)(n, E),
                        o = t ? i : (0, s.CE)(i, C, h);
                    return (0, r.jsx)(d.i, { value: o, ...a }, a.id);
                }),
                (0, r.jsx)("div", { className: u.m }),
                (0, r.jsx)(d.i, {
                    label: n ?? t,
                    labelSubText: i,
                    value: T,
                    subText: c,
                    color: "text-strong",
                    valueColor: "text-strong",
                }),
            ],
        });
    return (0, r.jsx)("div", { className: o()({ [u.k]: A }), children: y });
}
