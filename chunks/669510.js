l.d(t, { _: () => d });
var n = l(627968),
    a = l(64700),
    r = l(503698),
    s = l.n(r),
    i = l(834730),
    c = l(580630),
    o = l(777485),
    u = l(303519);
function d(e) {
    let {
            label: t,
            totalLineItemLabel: l,
            totalLineItemLabelSubText: r,
            totalLineItemValueSubText: d,
            showTotalWhenCollapsed: m = !1,
            lineItems: x,
            intervalType: h,
            intervalCount: g,
            currency: v,
            defaultExpanded: j = !1,
        } = e,
        [p, f] = a.useState(j),
        N = a.useMemo(() => {
            let e = x.reduce((e, t) => e + t.amount, 0),
                t = (0, c.$g)(e, v);
            return (0, c.CE)(t, h, g);
        }, [x, v, h, g]),
        b = (0, n.jsxs)(o.h, {
            label: t,
            defaultExpanded: j,
            isDisabled: x.length <= 0,
            onExpandedChange: f,
            collapsedContent: m
                ? (0, n.jsx)(i.E, { variant: "text-md/normal", color: "text-subtle", children: N })
                : null,
            children: [
                x.map((e) => {
                    let { formatWithoutRate: t, amount: l, ...a } = e,
                        r = (0, c.$g)(l, v),
                        s = t ? r : (0, c.CE)(r, h, g);
                    return (0, n.jsx)(o.i, { value: s, ...a }, a.id);
                }),
                (0, n.jsx)("div", { className: u.m }),
                (0, n.jsx)(o.i, {
                    label: l ?? t,
                    labelSubText: r,
                    value: N,
                    subText: d,
                    color: "text-strong",
                    valueColor: "text-strong",
                }),
            ],
        });
    return (0, n.jsx)("div", { className: s()({ [u.k]: p }), children: b });
}
