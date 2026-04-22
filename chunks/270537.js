n.d(t, { Qf: () => x, Vm: () => f });
var a = n(627968),
    r = n(64700),
    l = n(503698),
    i = n.n(l),
    s = n(450873),
    o = n.n(s),
    u = n(834730),
    c = n(580630);
n(717201);
var d = n(381247),
    m = n(327105),
    p = n(985018),
    _ = n(961100);
function f(e) {
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)("div", { className: _.y }), (0, a.jsx)(b, { ...e })] });
}
function g(e) {
    return "tax" === e.id;
}
function b(e) {
    let { label: t, lineItems: n, currency: l, collapsedContentLabelOverride: i, defaultExpanded: s = !1 } = e,
        m = n.length > 0,
        { hasAdjustments: p, totalAdjustmentsOrSavings: _ } = r.useMemo(
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
        f = (function (e) {
            let t = e.filter((e) => !(g(e) && 0 === e.amount)),
                { tax: n = 0, other: a = 0 } = o()(t, (e) => (g(e) ? "tax" : "other"));
            if (1 === a) {
                if (0 === n) return [];
                if (1 === n) return [t.find(g)];
            }
            return t;
        })(n);
    if (0 === f.length) return null;
    if (1 === f.length) {
        let { amount: e, ...t } = f[0],
            n = (0, c.$g)(e, l);
        return (0, a.jsx)(d.i, { value: n, valueColor: e < 0 ? "text-feedback-positive" : "text-muted", ...t });
    }
    return (0, a.jsx)(d.h, {
        label: t,
        defaultExpanded: s,
        isDisabled: !m,
        collapsedContent:
            null != i
                ? (0, a.jsx)(u.E, { variant: "text-md/medium", color: "text-feedback-positive", children: i })
                : (0, a.jsx)(v, {
                      amount: _ < 0 ? Math.abs(_) : null,
                      currency: l,
                      labelType: p ? "adjustments" : "savings",
                  }),
        children: f.map((e) => {
            let { id: t, label: n, amount: r, ...i } = e,
                s = (0, c.$g)(r, l);
            return (0, a.jsx)(
                d.i,
                { label: n, value: s, valueColor: r < 0 ? "text-feedback-positive" : "text-muted", ...i },
                t,
            );
        }),
    });
}
function v(e) {
    let { amount: t, currency: n, labelType: r } = e;
    if (0 === t || null == t) return null;
    let l = (0, c.$g)(t, n);
    return (0, a.jsx)(u.E, {
        variant: "text-md/medium",
        color: "text-feedback-positive",
        children: p.intl.format("adjustments" === r ? m.default["i3Q/6S"] : m.default.pDVleg, { amount: l }),
    });
}
function x(e) {
    let { label: t, value: n, className: r } = e;
    return (0, a.jsxs)(u.E, {
        variant: "text-lg/semibold",
        color: "text-strong",
        className: i()(_.p, r),
        children: [
            (0, a.jsx)("span", { children: t ?? p.intl.string(m.default.Zxav97) }),
            (0, a.jsx)("span", { children: n }),
        ],
    });
}
