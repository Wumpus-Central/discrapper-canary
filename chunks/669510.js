"use strict";
n.d(t, { _: () => d });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(580630),
    u = n(381247),
    c = n(361728);
function d(e) {
    let {
            label: t,
            totalLineItemLabel: n,
            lineItems: a,
            intervalType: d,
            intervalCount: _,
            currency: f,
            defaultExpanded: h = !1,
        } = e,
        [p, g] = i.useState(h),
        E = i.useMemo(() => a.reduce((e, t) => e + t.amount, 0), [a]),
        A = (0, l.$g)(E, f),
        I = (0, l.CE)(A, d, _),
        T = (0, r.jsxs)(u.h, {
            label: t,
            defaultExpanded: h,
            isDisabled: a.length <= 0,
            onExpandedChange: g,
            collapsedContent: (0, r.jsx)(o.Text, { variant: "text-md/normal", color: "text-subtle", children: I }),
            children: [
                a.map((e) => {
                    let { id: t, label: n, amount: i, icon: a, tooltip: s } = e,
                        o = (0, l.$g)(i, f),
                        c = (0, l.CE)(o, d, _);
                    return (0, r.jsx)(u.i, { label: n, value: c, icon: a, tooltip: s }, t);
                }),
                (0, r.jsx)("div", { className: c.m }),
                (0, r.jsx)(u.i, { label: n ?? t, value: I, color: "text-strong" }),
            ],
        });
    return (0, r.jsx)("div", { className: s()({ [c.k]: p }), children: T });
}
