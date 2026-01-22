n.d(t, { H: () => d }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(937615),
    c = n(576929),
    u = n(224319);
function d(e) {
    let {
            label: t,
            totalLineItemLabel: n,
            lineItems: a,
            intervalType: d,
            intervalCount: f,
            currency: p,
            defaultExpanded: _ = !1,
        } = e,
        [h, m] = i.useState(_),
        g = i.useMemo(() => a.reduce((e, t) => e + t.amount, 0), [a]),
        E = (0, l.T4)(g, p),
        b = (0, l.og)(E, d, f),
        y = (0, r.jsxs)(c.O, {
            label: t,
            defaultExpanded: _,
            isDisabled: a.length <= 0,
            onExpandedChange: m,
            collapsedContent: (0, r.jsx)(s.Text, {
                variant: "text-md/normal",
                color: "text-subtle",
                children: b,
            }),
            children: [
                a.map((e) => {
                    let { id: t, label: n, amount: i, icon: a, tooltip: o } = e,
                        s = (0, l.T4)(i, p),
                        u = (0, l.og)(s, d, f);
                    return (0, r.jsx)(
                        c.r,
                        {
                            label: n,
                            value: u,
                            icon: a,
                            tooltip: o,
                        },
                        t,
                    );
                }),
                (0, r.jsx)("div", { className: u.separator }),
                (0, r.jsx)(c.r, {
                    label: null != n ? n : t,
                    value: b,
                    color: "text-strong",
                }),
            ],
        });
    return (0, r.jsx)("div", {
        className: o()({ [u.container]: h }),
        children: y,
    });
}
