l.d(t, { _: () => u });
var a = l(477900),
    n = l(582128),
    r = l(503698),
    s = l.n(r),
    i = l(834730),
    o = l(580630),
    d = l(777485),
    c = l(564082);
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
            defaultExpanded: v = !1,
        } = e,
        [j, b] = n.useState(v),
        E = n.useMemo(() => {
            let e = x.reduce((e, t) => e + t.amount, 0),
                t = (0, o.$g)(e, h);
            return (0, o.CE)(t, f, p);
        }, [x, h, f, p]),
        N = (0, a.jsxs)(d.h, {
            label: t,
            defaultExpanded: v,
            isDisabled: x.length <= 0,
            onExpandedChange: b,
            collapsedContent: m
                ? (0, a.jsx)(i.E, { variant: "body-md/normal", color: "text-subtle", children: E })
                : null,
            children: [
                x.map((e) => {
                    let { formatWithoutRate: t, amount: l, ...n } = e,
                        r = (0, o.$g)(l, h),
                        s = t ? r : (0, o.CE)(r, f, p);
                    return (0, a.jsx)(d.i, { value: s, ...n }, n.id);
                }),
                (0, a.jsx)("div", { className: c.m }),
                (0, a.jsx)(d.i, {
                    label: l ?? t,
                    labelSubText: r,
                    value: E,
                    subText: u,
                    color: "text-strong",
                    valueColor: "text-strong",
                }),
            ],
        });
    return (0, a.jsx)("div", { className: s()({ [c.k]: j }), children: N });
}
