l.d(t, { Qf: () => g, Vm: () => p });
var n = l(477900),
    r = l(582128),
    i = l(503698),
    s = l.n(i),
    a = l(338209),
    u = l.n(a),
    c = l(834730),
    o = l(580630);
l(717201);
var d = l(777485),
    m = l(583741),
    x = l(375708),
    h = l(801067);
function p(e) {
    return (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)("div", { className: h.y }), (0, n.jsx)(f, { ...e })] });
}
function v(e) {
    return "tax" === e.id;
}
function f(e) {
    let { label: t, lineItems: l, currency: i, collapsedContentLabelOverride: s, defaultExpanded: a = !1 } = e,
        m = l.length > 0,
        { hasAdjustments: x, totalAdjustmentsOrSavings: h } = r.useMemo(
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
        p = (function (e) {
            let t = e.filter((e) => !(v(e) && 0 === e.amount)),
                { tax: l = 0, other: n = 0 } = u()(t, (e) => (v(e) ? "tax" : "other"));
            if (1 === n) {
                if (0 === l) return [];
                if (1 === l) return [t.find(v)];
            }
            return t;
        })(l);
    if (0 === p.length) return null;
    if (1 === p.length) {
        let { amount: e, ...t } = p[0],
            l = (0, o.$g)(e, i);
        return (0, n.jsx)(d.i, { value: l, valueColor: e < 0 ? "text-feedback-positive" : "text-muted", ...t });
    }
    return (0, n.jsx)(d.h, {
        label: t,
        defaultExpanded: a,
        isDisabled: !m,
        collapsedContent:
            null != s
                ? (0, n.jsx)(c.E, { variant: "text-md/medium", color: "text-feedback-positive", children: s })
                : (0, n.jsx)(j, {
                      amount: h < 0 ? Math.abs(h) : null,
                      currency: i,
                      labelType: x ? "adjustments" : "savings",
                  }),
        children: p.map((e) => {
            let { id: t, label: l, amount: r, ...s } = e,
                a = (0, o.$g)(r, i);
            return (0, n.jsx)(
                d.i,
                { label: l, value: a, valueColor: r < 0 ? "text-feedback-positive" : "text-muted", ...s },
                t,
            );
        }),
    });
}
function j(e) {
    let { amount: t, currency: l, labelType: r } = e;
    if (0 === t || null == t) return null;
    let i = (0, o.$g)(t, l);
    return (0, n.jsx)(c.E, {
        variant: "text-md/medium",
        color: "text-feedback-positive",
        children: x.intl.format("adjustments" === r ? m.default["i3Q/6S"] : m.default.pDVleg, { amount: i }),
    });
}
function g(e) {
    let { label: t, value: l, className: r } = e;
    return (0, n.jsxs)(c.E, {
        variant: "text-lg/semibold",
        color: "text-strong",
        className: s()(h.p, r),
        children: [
            (0, n.jsx)("span", { children: t ?? x.intl.string(m.default.Zxav97) }),
            (0, n.jsx)("span", { children: l }),
        ],
    });
}
