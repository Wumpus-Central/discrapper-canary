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
            showTotalWhenCollapsed: d = !1,
            lineItems: _,
            intervalType: f,
            intervalCount: p,
            currency: h,
            defaultExpanded: m = !1,
        } = e,
        [E, g] = i.useState(m),
        A = i.useMemo(() => _.reduce((e, t) => e + t.amount, 0), [_]),
        I = (0, l.$g)(A, h),
        T = (0, l.CE)(I, f, p),
        S = (0, r.jsxs)(u.h, {
            label: t,
            defaultExpanded: m,
            isDisabled: _.length <= 0,
            onExpandedChange: g,
            collapsedContent: d
                ? (0, r.jsx)(o.Text, { variant: "text-md/normal", color: "text-subtle", children: T })
                : null,
            children: [
                _.map((e) => {
                    let { formatWithoutRate: t, amount: n, ...i } = e,
                        s = (0, l.$g)(n, h),
                        a = t ? s : (0, l.CE)(s, f, p);
                    return (0, r.jsx)(u.i, { value: a, ...i }, i.id);
                }),
                (0, r.jsx)("div", { className: c.m }),
                (0, r.jsx)(u.i, {
                    label: n ?? t,
                    labelSubText: s,
                    value: T,
                    color: "text-strong",
                    valueColor: "text-strong",
                }),
            ],
        });
    return (0, r.jsx)("div", { className: a()({ [c.k]: E }), children: S });
}
