n.d(t, { Qf: () => g, Vm: () => p });
var l = n(627968),
    r = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(338209),
    u = n.n(s),
    o = n(834730),
    c = n(580630);
n(717201);
var d = n(777485),
    m = n(982772),
    x = n(375708),
    f = n(18572);
function p(e) {
    return (0, l.jsxs)(l.Fragment, { children: [(0, l.jsx)("div", { className: f.y }), (0, l.jsx)(v, { ...e })] });
}
function h(e) {
    return "tax" === e.id;
}
function v(e) {
    let { label: t, lineItems: n, currency: a, collapsedContentLabelOverride: i, defaultExpanded: s = !1 } = e,
        m = n.length > 0,
        { hasAdjustments: x, totalAdjustmentsOrSavings: f } = r.useMemo(
            () => ({
                hasAdjustments: n.some(
                    (e) => "adjustment" === e.lineItemType || ("string" == typeof e.id && e.id.includes("adjustment")),
                ),
                totalAdjustmentsOrSavings: n.reduce(
                    (e, t) =>
                        "adjustment" === t.lineItemType ||
                        "discount" === t.lineItemType ||
                        ("string" == typeof t.id && (t.id.includes("discount") || t.id.includes("adjustment")))
                            ? e + t.amount
                            : e,
                    0,
                ),
            }),
            [n],
        ),
        p = (function (e) {
            let t = e.filter((e) => !(h(e) && 0 === e.amount)),
                { tax: n = 0, other: l = 0 } = u()(t, (e) => (h(e) ? "tax" : "other"));
            if (1 === l) {
                if (0 === n) return [];
                if (1 === n) return [t.find(h)];
            }
            return t;
        })(n);
    if (0 === p.length) return null;
    if (1 === p.length) {
        let { amount: e, ...t } = p[0],
            n = (0, c.$g)(e, a);
        return (0, l.jsx)(d.i, { value: n, valueColor: e < 0 ? "text-feedback-positive" : "text-muted", ...t });
    }
    return (0, l.jsx)(d.h, {
        label: t,
        defaultExpanded: s,
        isDisabled: !m,
        collapsedContent:
            null != i
                ? (0, l.jsx)(o.E, { variant: "text-md/medium", color: "text-feedback-positive", children: i })
                : (0, l.jsx)(j, {
                      amount: f < 0 ? Math.abs(f) : null,
                      currency: a,
                      labelType: x ? "adjustments" : "savings",
                  }),
        children: p.map((e) => {
            let { id: t, label: n, amount: r, ...i } = e,
                s = (0, c.$g)(r, a);
            return (0, l.jsx)(
                d.i,
                { label: n, value: s, valueColor: r < 0 ? "text-feedback-positive" : "text-muted", ...i },
                t,
            );
        }),
    });
}
function j(e) {
    let { amount: t, currency: n, labelType: r } = e;
    if (0 === t || null == t) return null;
    let a = (0, c.$g)(t, n);
    return (0, l.jsx)(o.E, {
        variant: "text-md/medium",
        color: "text-feedback-positive",
        children: x.intl.format("adjustments" === r ? m.default["i3Q/6S"] : m.default.pDVleg, { amount: a }),
    });
}
function g(e) {
    let { label: t, value: n, className: r } = e;
    return (0, l.jsxs)(o.E, {
        variant: "text-lg/semibold",
        color: "text-strong",
        className: i()(f.p, r),
        children: [
            (0, l.jsx)("span", { children: t ?? x.intl.string(m.default.Zxav97) }),
            (0, l.jsx)("span", { children: n }),
        ],
    });
}
