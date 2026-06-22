"use strict";
n.d(t, { Qf: () => A, Vm: () => p });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(450873),
    l = n.n(o),
    u = n(834730),
    c = n(580630);
n(717201);
var d = n(777485),
    _ = n(327105),
    h = n(375708),
    f = n(961100);
function p(e) {
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)("div", { className: f.y }), (0, i.jsx)(m, { ...e })] });
}
function E(e) {
    return "tax" === e.id;
}
function m(e) {
    let { label: t, lineItems: n, currency: s, collapsedContentLabelOverride: a, defaultExpanded: o = !1 } = e,
        _ = n.length > 0,
        { hasAdjustments: h, totalAdjustmentsOrSavings: f } = r.useMemo(
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
            let t = e.filter((e) => !(E(e) && 0 === e.amount)),
                { tax: n = 0, other: i = 0 } = l()(t, (e) => (E(e) ? "tax" : "other"));
            if (1 === i) {
                if (0 === n) return [];
                if (1 === n) return [t.find(E)];
            }
            return t;
        })(n);
    if (0 === p.length) return null;
    if (1 === p.length) {
        let { amount: e, ...t } = p[0],
            n = (0, c.$g)(e, s);
        return (0, i.jsx)(d.i, { value: n, valueColor: e < 0 ? "text-feedback-positive" : "text-muted", ...t });
    }
    return (0, i.jsx)(d.h, {
        label: t,
        defaultExpanded: o,
        isDisabled: !_,
        collapsedContent:
            null != a
                ? (0, i.jsx)(u.E, { variant: "text-md/medium", color: "text-feedback-positive", children: a })
                : (0, i.jsx)(g, {
                      amount: f < 0 ? Math.abs(f) : null,
                      currency: s,
                      labelType: h ? "adjustments" : "savings",
                  }),
        children: p.map((e) => {
            let { id: t, label: n, amount: r, ...a } = e,
                o = (0, c.$g)(r, s);
            return (0, i.jsx)(
                d.i,
                { label: n, value: o, valueColor: r < 0 ? "text-feedback-positive" : "text-muted", ...a },
                t,
            );
        }),
    });
}
function g(e) {
    let { amount: t, currency: n, labelType: r } = e;
    if (0 === t || null == t) return null;
    let s = (0, c.$g)(t, n);
    return (0, i.jsx)(u.E, {
        variant: "text-md/medium",
        color: "text-feedback-positive",
        children: h.intl.format("adjustments" === r ? _.default["i3Q/6S"] : _.default.pDVleg, { amount: s }),
    });
}
function A(e) {
    let { label: t, value: n, className: r } = e;
    return (0, i.jsxs)(u.E, {
        variant: "text-lg/semibold",
        color: "text-strong",
        className: a()(f.p, r),
        children: [
            (0, i.jsx)("span", { children: t ?? h.intl.string(_.default.Zxav97) }),
            (0, i.jsx)("span", { children: n }),
        ],
    });
}
