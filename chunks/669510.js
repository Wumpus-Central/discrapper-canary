"use strict";
n.d(t, { _: () => d });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(834730),
    l = n(580630),
    u = n(381247),
    c = n(303519);
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
            currency: E,
            defaultExpanded: m = !1,
        } = e,
        [g, A] = i.useState(m),
        I = i.useMemo(() => {
            let e = f.reduce((e, t) => e + t.amount, 0),
                t = (0, l.$g)(e, E);
            return (0, l.CE)(t, p, h);
        }, [f, E, p, h]),
        T = (0, r.jsxs)(u.h, {
            label: t,
            defaultExpanded: m,
            isDisabled: f.length <= 0,
            onExpandedChange: A,
            collapsedContent: _
                ? (0, r.jsx)(o.E, { variant: "text-md/normal", color: "text-subtle", children: I })
                : null,
            children: [
                f.map((e) => {
                    let { formatWithoutRate: t, amount: n, ...i } = e,
                        s = (0, l.$g)(n, E),
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
