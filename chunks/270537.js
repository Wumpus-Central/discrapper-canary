"use strict";
n.d(t, { Qf: () => A, Vm: () => h });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(450873),
    l = n.n(o),
    u = n(834730),
    c = n(580630);
n(717201);
var d = n(381247),
    _ = n(327105),
    f = n(985018),
    p = n(961100);
function h(e) {
    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)("div", { className: p.y }), (0, r.jsx)(m, { ...e })] });
}
function E(e) {
    return "tax" === e.id;
}
function m(e) {
    let { label: t, lineItems: n, currency: s, collapsedContentLabelOverride: a, defaultExpanded: o = !1 } = e,
        _ = n.length > 0,
        { hasAdjustments: f, totalAdjustmentsOrSavings: p } = i.useMemo(
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
        h = (function (e) {
            let t = e.filter((e) => !(E(e) && 0 === e.amount)),
                { tax: n = 0, other: r = 0 } = l()(t, (e) => (E(e) ? "tax" : "other"));
            if (1 === r) {
                if (0 === n) return [];
                if (1 === n) return [t.find(E)];
            }
            return t;
        })(n);
    if (0 === h.length) return null;
    if (1 === h.length) {
        let { amount: e, ...t } = h[0],
            n = (0, c.$g)(e, s);
        return (0, r.jsx)(d.i, { value: n, valueColor: e < 0 ? "text-feedback-positive" : "text-muted", ...t });
    }
    return (0, r.jsx)(d.h, {
        label: t,
        defaultExpanded: o,
        isDisabled: !_,
        collapsedContent:
            null != a
                ? (0, r.jsx)(u.E, { variant: "text-md/medium", color: "text-feedback-positive", children: a })
                : (0, r.jsx)(g, {
                      amount: p < 0 ? Math.abs(p) : null,
                      currency: s,
                      labelType: f ? "adjustments" : "savings",
                  }),
        children: h.map((e) => {
            let { id: t, label: n, amount: i, ...a } = e,
                o = (0, c.$g)(i, s);
            return (0, r.jsx)(
                d.i,
                { label: n, value: o, valueColor: i < 0 ? "text-feedback-positive" : "text-muted", ...a },
                t,
            );
        }),
    });
}
function g(e) {
    let { amount: t, currency: n, labelType: i } = e;
    if (0 === t || null == t) return null;
    let s = (0, c.$g)(t, n);
    return (0, r.jsx)(u.E, {
        variant: "text-md/medium",
        color: "text-feedback-positive",
        children: f.intl.format("adjustments" === i ? _.default["i3Q/6S"] : _.default.pDVleg, { amount: s }),
    });
}
function A(e) {
    let { label: t, value: n, className: i } = e;
    return (0, r.jsxs)(u.E, {
        variant: "text-lg/semibold",
        color: "text-strong",
        className: a()(p.p, i),
        children: [
            (0, r.jsx)("span", { children: t ?? f.intl.string(_.default.Zxav97) }),
            (0, r.jsx)("span", { children: n }),
        ],
    });
}
