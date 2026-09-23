n.d(t, { Qf: () => E, Vm: () => v });
var l = n(477900),
    r = n(582128),
    s = n(503698),
    a = n.n(s),
    i = n(338209),
    o = n.n(i),
    c = n(834730),
    d = n(580630);
n(717201);
var u = n(725836),
    m = n(777485),
    x = n(583741),
    j = n(375708),
    h = n(801067);
function v(e) {
    let t = (0, u.I6)(),
        { lineItems: n } = e,
        r = (function (e) {
            let t = e.filter((e) => !(f(e) && 0 === e.amount)),
                { tax: n = 0, other: l = 0 } = o()(t, (e) => (f(e) ? "tax" : "other"));
            if (1 === l) {
                if (0 === n) return [];
                if (1 === n) return [t.find(f)];
            }
            return t;
        })(n);
    return 1 === r.length && null != t
        ? (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)("div", { className: h.yF }),
                  (0, l.jsx)(u.gw, {
                      children: (0, l.jsx)("div", {
                          className: h.sR,
                          children: (0, l.jsx)(p, { ...e, displayItems: r }),
                      }),
                  }),
              ],
          })
        : (0, l.jsxs)(l.Fragment, {
              children: [(0, l.jsx)("div", { className: a()(h.yF, h.s3) }), (0, l.jsx)(p, { ...e, displayItems: r })],
          });
}
function f(e) {
    return "tax" === e.id;
}
function p(e) {
    let {
            label: t,
            lineItems: n,
            displayItems: s,
            currency: a,
            collapsedContentLabelOverride: i,
            defaultExpanded: o = !1,
        } = e,
        u = n.length > 0,
        { hasAdjustments: x, totalAdjustmentsOrSavings: j } = r.useMemo(
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
        );
    if (0 === s.length) return null;
    if (1 === s.length) {
        let { amount: e, ...t } = s[0],
            n = (0, d.$g)(e, a);
        return (0, l.jsx)(m.i, { value: n, valueColor: e < 0 ? "text-feedback-positive" : "text-muted", ...t });
    }
    return (0, l.jsx)(m.h, {
        label: t,
        defaultExpanded: o,
        isDisabled: !u,
        collapsedContent:
            null != i
                ? (0, l.jsx)(c.E, { variant: "text-md/medium", color: "text-feedback-positive", children: i })
                : (0, l.jsx)(g, {
                      amount: j < 0 ? Math.abs(j) : null,
                      currency: a,
                      labelType: x ? "adjustments" : "savings",
                  }),
        children: s.map((e) => {
            let { id: t, label: n, amount: r, ...s } = e,
                i = (0, d.$g)(r, a);
            return (0, l.jsx)(
                m.i,
                { label: n, value: i, valueColor: r < 0 ? "text-feedback-positive" : "text-muted", ...s },
                t,
            );
        }),
    });
}
function g(e) {
    let { amount: t, currency: n, labelType: r } = e;
    if (0 === t || null == t) return null;
    let s = (0, d.$g)(t, n);
    return (0, l.jsx)(c.E, {
        variant: "text-md/medium",
        color: "text-feedback-positive",
        children: j.intl.format("adjustments" === r ? x.default["i3Q/6S"] : x.default.pDVleg, { amount: s }),
    });
}
function E(e) {
    let { label: t, value: n, className: r } = e;
    return (0, l.jsxs)(c.E, {
        variant: "text-lg/semibold",
        color: "text-strong",
        className: a()(h.p8, r),
        children: [
            (0, l.jsx)("span", { children: t ?? j.intl.string(x.default.Zxav97) }),
            (0, l.jsx)("span", { children: n }),
        ],
    });
}
