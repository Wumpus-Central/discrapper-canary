l.d(t, { Qf: () => f, Vm: () => h });
var s = l(627968),
    n = l(64700),
    a = l(503698),
    r = l.n(a),
    i = l(450873),
    d = l.n(i),
    c = l(834730),
    u = l(580630);
l(717201);
var o = l(777485),
    m = l(327105),
    x = l(375708),
    j = l(961100);
function h(e) {
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)("div", { className: j.y }), (0, s.jsx)(g, { ...e })] });
}
function v(e) {
    return "tax" === e.id;
}
function g(e) {
    let { label: t, lineItems: l, currency: a, collapsedContentLabelOverride: r, defaultExpanded: i = !1 } = e,
        m = l.length > 0,
        { hasAdjustments: x, totalAdjustmentsOrSavings: j } = n.useMemo(
            () => ({
                hasAdjustments: l.some(
                    (e) => "adjustment" === e.lineItemType || ("string" == typeof e.id && e.id.includes("adjustment")),
                ),
                totalAdjustmentsOrSavings: l.reduce(
                    (e, t) =>
                        "adjustment" === t.lineItemType ||
                        "discount" === t.lineItemType ||
                        ("string" == typeof t.id && (t.id.includes("discount") || t.id.includes("adjustment")))
                            ? e + t.amount
                            : e,
                    0,
                ),
            }),
            [l],
        ),
        h = (function (e) {
            let t = e.filter((e) => !(v(e) && 0 === e.amount)),
                { tax: l = 0, other: s = 0 } = d()(t, (e) => (v(e) ? "tax" : "other"));
            if (1 === s) {
                if (0 === l) return [];
                if (1 === l) return [t.find(v)];
            }
            return t;
        })(l);
    if (0 === h.length) return null;
    if (1 === h.length) {
        let { amount: e, ...t } = h[0],
            l = (0, u.$g)(e, a);
        return (0, s.jsx)(o.i, { value: l, valueColor: e < 0 ? "text-feedback-positive" : "text-muted", ...t });
    }
    return (0, s.jsx)(o.h, {
        label: t,
        defaultExpanded: i,
        isDisabled: !m,
        collapsedContent:
            null != r
                ? (0, s.jsx)(c.E, { variant: "text-md/medium", color: "text-feedback-positive", children: r })
                : (0, s.jsx)(p, {
                      amount: j < 0 ? Math.abs(j) : null,
                      currency: a,
                      labelType: x ? "adjustments" : "savings",
                  }),
        children: h.map((e) => {
            let { id: t, label: l, amount: n, ...r } = e,
                i = (0, u.$g)(n, a);
            return (0, s.jsx)(
                o.i,
                { label: l, value: i, valueColor: n < 0 ? "text-feedback-positive" : "text-muted", ...r },
                t,
            );
        }),
    });
}
function p(e) {
    let { amount: t, currency: l, labelType: n } = e;
    if (0 === t || null == t) return null;
    let a = (0, u.$g)(t, l);
    return (0, s.jsx)(c.E, {
        variant: "text-md/medium",
        color: "text-feedback-positive",
        children: x.intl.format("adjustments" === n ? m.default["i3Q/6S"] : m.default.pDVleg, { amount: a }),
    });
}
function f(e) {
    let { label: t, value: l, className: n } = e;
    return (0, s.jsxs)(c.E, {
        variant: "text-lg/semibold",
        color: "text-strong",
        className: r()(j.p, n),
        children: [
            (0, s.jsx)("span", { children: t ?? x.intl.string(m.default.Zxav97) }),
            (0, s.jsx)("span", { children: l }),
        ],
    });
}
