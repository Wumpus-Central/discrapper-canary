n.d(t, { H: () => c });
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(937615),
    s = n(576929),
    l = n(224319);
function c(e) {
    let { label: t, lineItems: n, intervalType: c, intervalCount: u, currency: d, defaultExpanded: f = !1 } = e,
        p = i.useMemo(() => n.reduce((e, t) => e + t.amount, 0), [n]),
        _ = (0, o.T4)(p, d),
        h = (0, o.og)(_, c, u);
    return (0, r.jsxs)(s.O, {
        label: t,
        defaultExpanded: f,
        isDisabled: n.length <= 1,
        collapsedContent: (0, r.jsx)(a.Text, {
            variant: "text-md/normal",
            color: "text-subtle",
            children: h,
        }),
        children: [
            n.map((e) => {
                let { id: t, label: n, amount: i, icon: a, tooltip: l } = e,
                    f = (0, o.T4)(i, d),
                    p = (0, o.og)(f, c, u);
                return (0, r.jsx)(
                    s.r,
                    {
                        label: n,
                        value: p,
                        icon: a,
                        tooltip: l,
                    },
                    t,
                );
            }),
            (0, r.jsx)("div", { className: l.separator }),
            (0, r.jsx)(s.r, {
                label: t,
                value: h,
                color: "text-strong",
            }),
        ],
    });
}
