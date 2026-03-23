"use strict";
n.d(t, { _: () => d });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(397927),
    l = n(580630),
    u = n(381247),
    c = n(361728);
function d(e) {
    let {
            label: t,
            totalLineItemLabel: n,
            totalLineItemLabelSubText: s,
            totalLineItemValueSubText: d,
            showTotalWhenCollapsed: _ = !1,
            lineItems: f,
            intervalType: p,
            intervalCount: h,
            currency: m,
            defaultExpanded: E = !1,
        } = e,
        [g, A] = i.useState(E),
        I = i.useMemo(() => {
            let e = f.reduce((e, t) => e + t.amount, 0),
                t = (0, l.$g)(e, m);
            return (0, l.CE)(t, p, h);
        }, [f, m, p, h]),
        T = (0, r.jsxs)(u.h, {
            label: t,
            defaultExpanded: E,
            isDisabled: f.length <= 0,
            onExpandedChange: A,
            collapsedContent: _
                ? (0, r.jsx)(o.Text, { variant: "text-md/normal", color: "text-subtle", children: I })
                : null,
            children: [
                f.map((e) => {
                    let { formatWithoutRate: t, amount: n, ...i } = e,
                        s = (0, l.$g)(n, m),
                        a = t ? s : (0, l.CE)(s, p, h);
                    return (0, r.jsx)(u.i, { value: a, ...i }, i.id);
                }),
                (0, r.jsx)("div", { className: c.m }),
                (0, r.jsx)(u.i, {
                    label: n ?? t,
                    labelSubText: s,
                    value: I,
                    subText: d,
                    color: "text-strong",
                    valueColor: "text-strong",
                }),
            ],
        });
    return (0, r.jsx)("div", { className: a()({ [c.k]: g }), children: T });
}
