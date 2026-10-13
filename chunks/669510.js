l.d(t, { _: () => u });
var n = l(477900),
    a = l(582128),
    r = l(503698),
    s = l.n(r),
    i = l(834730),
    o = l(580630),
    c = l(777485),
    d = l(564082);
function u(e) {
    let {
            label: t,
            totalLineItemLabel: l,
            totalLineItemLabelSubText: r,
            totalLineItemValueSubText: u,
            showTotalWhenCollapsed: m = !1,
            lineItems: x,
            intervalType: f,
            intervalCount: p,
            currency: h,
            defaultExpanded: j = !1,
        } = e,
        [v, g] = a.useState(j),
        E = a.useMemo(() => {
            let e = x.reduce((e, t) => e + t.amount, 0),
                t = (0, o.$g)(e, h);
            return (0, o.CE)(t, f, p);
        }, [x, h, f, p]),
        N = (0, n.jsxs)(c.h, {
            label: t,
            defaultExpanded: j,
            isDisabled: x.length <= 0,
            onExpandedChange: g,
            collapsedContent: m
                ? (0, n.jsx)(i.E, { variant: "text-md/normal", color: "text-subtle", children: E })
                : null,
            children: [
                x.map((e) => {
                    let { formatWithoutRate: t, amount: l, ...a } = e,
                        r = (0, o.$g)(l, h),
                        s = t ? r : (0, o.CE)(r, f, p);
                    return (0, n.jsx)(c.i, { value: s, ...a }, a.id);
                }),
                (0, n.jsx)("div", { className: d.m }),
                (0, n.jsx)(c.i, {
                    label: l ?? t,
                    labelSubText: r,
                    value: E,
                    subText: u,
                    color: "text-strong",
                    valueColor: "text-strong",
                }),
            ],
        });
    return (0, n.jsx)("div", { className: s()({ [d.k]: v }), children: N });
}
