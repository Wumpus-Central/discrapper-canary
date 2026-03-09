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
            lineItems: s,
            intervalType: d,
            intervalCount: _,
            currency: f,
            defaultExpanded: p = !1,
        } = e,
        [h, m] = i.useState(p),
        E = i.useMemo(() => s.reduce((e, t) => e + t.amount, 0), [s]),
        g = (0, l.$g)(E, f),
        A = (0, l.CE)(g, d, _),
        I = (0, r.jsxs)(u.h, {
            label: t,
            defaultExpanded: p,
            isDisabled: s.length <= 0,
            onExpandedChange: m,
            collapsedContent: (0, r.jsx)(o.Text, { variant: "text-md/normal", color: "text-subtle", children: A }),
            children: [
                s.map((e) => {
                    let { formatWithoutRate: t, amount: n, ...i } = e,
                        s = (0, l.$g)(n, f),
                        a = t ? s : (0, l.CE)(s, d, _);
                    return (0, r.jsx)(u.i, { value: a, ...i }, i.id);
                }),
                (0, r.jsx)("div", { className: c.m }),
                (0, r.jsx)(u.i, { label: n ?? t, value: A, color: "text-strong" }),
            ],
        });
    return (0, r.jsx)("div", { className: a()({ [c.k]: h }), children: I });
}
