l.d(t, { Qf: () => N, Vm: () => v });
var n = l(477900),
    r = l(582128),
    s = l(503698),
    i = l.n(s),
    a = l(338209),
    u = l.n(a),
    c = l(834730),
    o = l(580630);
l(717201);
var d = l(725836),
    m = l(777485),
    x = l(649975),
    h = l(375708),
    p = l(801067);
function v(e) {
    let t = (0, d.I6)(),
        { lineItems: l } = e,
        r = (function (e) {
            let t = e.filter((e) => !(j(e) && 0 === e.amount)),
                { tax: l = 0, other: n = 0 } = u()(t, (e) => (j(e) ? "tax" : "other"));
            if (1 === n) {
                if (0 === l) return [];
                if (1 === l) return [t.find(j)];
            }
            return t;
        })(l);
    return 1 === r.length && null != t
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)("div", { className: p.yF }),
                  (0, n.jsx)(d.gw, {
                      children: (0, n.jsx)("div", {
                          className: p.sR,
                          children: (0, n.jsx)(f, { ...e, displayItems: r }),
                      }),
                  }),
              ],
          })
        : (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsx)("div", { className: i()(p.yF, p.s3) }), (0, n.jsx)(f, { ...e, displayItems: r })],
          });
}
function j(e) {
    return "tax" === e.id;
}
function f(e) {
    let {
            label: t,
            lineItems: l,
            displayItems: s,
            currency: i,
            collapsedContentLabelOverride: a,
            defaultExpanded: u = !1,
        } = e,
        d = l.length > 0,
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
        );
    if (0 === s.length) return null;
    if (1 === s.length) {
        let { amount: e, ...t } = s[0],
            l = (0, o.$g)(e, i);
        return (0, n.jsx)(m.i, { value: l, valueColor: e < 0 ? "text-feedback-positive" : "text-muted", ...t });
    }
    return (0, n.jsx)(m.h, {
        label: t,
        defaultExpanded: u,
        isDisabled: !d,
        collapsedContent:
            null != a
                ? (0, n.jsx)(c.E, { variant: "text-md/medium", color: "text-feedback-positive", children: a })
                : (0, n.jsx)(g, {
                      amount: h < 0 ? Math.abs(h) : null,
                      currency: i,
                      labelType: x ? "adjustments" : "savings",
                  }),
        children: s.map((e) => {
            let { id: t, label: l, amount: r, ...s } = e,
                a = (0, o.$g)(r, i);
            return (0, n.jsx)(
                m.i,
                { label: l, value: a, valueColor: r < 0 ? "text-feedback-positive" : "text-muted", ...s },
                t,
            );
        }),
    });
}
function g(e) {
    let { amount: t, currency: l, labelType: r } = e;
    if (0 === t || null == t) return null;
    let s = (0, o.$g)(t, l);
    return (0, n.jsx)(c.E, {
        variant: "text-md/medium",
        color: "text-feedback-positive",
        children: h.intl.format("adjustments" === r ? x.default["i3Q/6S"] : x.default.pDVleg, { amount: s }),
    });
}
function N(e) {
    let { label: t, value: l, className: r } = e;
    return (0, n.jsxs)(c.E, {
        variant: "text-lg/semibold",
        color: "text-strong",
        className: i()(p.p8, r),
        children: [
            (0, n.jsx)("span", { children: t ?? h.intl.string(x.default.Zxav97) }),
            (0, n.jsx)("span", { children: l }),
        ],
    });
}
