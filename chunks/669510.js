n.d(t, {
    _: () => d,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(580630),
    c = n(381247),
    u = n(361728);

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
        E = (0, l.$g)(g, p),
        b = (0, l.CE)(E, d, f),
        y = (0, r.jsxs)(c.h, {
            label: t,
            defaultExpanded: _,
            isDisabled: a.length <= 0,
            onExpandedChange: m,
            collapsedContent: (0, r.jsx)(o.Text, {
                variant: "text-md/normal",
                color: "text-subtle",
                children: b,
            }),
            children: [
                a.map((e) => {
                    let { id: t, label: n, amount: i, icon: a, tooltip: s } = e,
                        o = (0, l.$g)(i, p),
                        u = (0, l.CE)(o, d, f);
                    return (0, r.jsx)(
                        c.i,
                        {
                            label: n,
                            value: u,
                            icon: a,
                            tooltip: s,
                        },
                        t,
                    );
                }),
                (0, r.jsx)("div", {
                    className: u.m,
                }),
                (0, r.jsx)(c.i, {
                    label: null != n ? n : t,
                    value: b,
                    color: "text-strong",
                }),
            ],
        });
    return (0, r.jsx)("div", {
        className: s()({
            [u.k]: h,
        }),
        children: y,
    });
}
