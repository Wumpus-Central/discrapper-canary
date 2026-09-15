l.d(t, { Qf: () => N, Vm: () => v });
var s = l(477900),
    n = l(582128),
    a = l(503698),
    r = l.n(a),
    i = l(338209),
    c = l.n(i),
    d = l(834730),
    u = l(580630);
l(717201);
var o = l(725836),
    m = l(777485),
    x = l(649975),
    j = l(375708),
    h = l(801067);
function v(e) {
    let t = (0, o.I6)(),
        { lineItems: l } = e,
        n = (function (e) {
            let t = e.filter((e) => !(g(e) && 0 === e.amount)),
                { tax: l = 0, other: s = 0 } = c()(t, (e) => (g(e) ? "tax" : "other"));
            if (1 === s) {
                if (0 === l) return [];
                if (1 === l) return [t.find(g)];
            }
            return t;
        })(l);
    return 1 === n.length && null != t
        ? (0, s.jsxs)(s.Fragment, {
              children: [
                  (0, s.jsx)("div", { className: h.yF }),
                  (0, s.jsx)(o.gw, {
                      children: (0, s.jsx)("div", {
                          className: h.sR,
                          children: (0, s.jsx)(p, { ...e, displayItems: n }),
                      }),
                  }),
              ],
          })
        : (0, s.jsxs)(s.Fragment, {
              children: [(0, s.jsx)("div", { className: r()(h.yF, h.s3) }), (0, s.jsx)(p, { ...e, displayItems: n })],
          });
}
function g(e) {
    return "tax" === e.id;
}
function p(e) {
    let {
            label: t,
            lineItems: l,
            displayItems: a,
            currency: r,
            collapsedContentLabelOverride: i,
            defaultExpanded: c = !1,
        } = e,
        o = l.length > 0,
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
        );
    if (0 === a.length) return null;
    if (1 === a.length) {
        let { amount: e, ...t } = a[0],
            l = (0, u.$g)(e, r);
        return (0, s.jsx)(m.i, { value: l, valueColor: e < 0 ? "text-feedback-positive" : "text-muted", ...t });
    }
    return (0, s.jsx)(m.h, {
        label: t,
        defaultExpanded: c,
        isDisabled: !o,
        collapsedContent:
            null != i
                ? (0, s.jsx)(d.E, { variant: "text-md/medium", color: "text-feedback-positive", children: i })
                : (0, s.jsx)(f, {
                      amount: j < 0 ? Math.abs(j) : null,
                      currency: r,
                      labelType: x ? "adjustments" : "savings",
                  }),
        children: a.map((e) => {
            let { id: t, label: l, amount: n, ...a } = e,
                i = (0, u.$g)(n, r);
            return (0, s.jsx)(
                m.i,
                { label: l, value: i, valueColor: n < 0 ? "text-feedback-positive" : "text-muted", ...a },
                t,
            );
        }),
    });
}
function f(e) {
    let { amount: t, currency: l, labelType: n } = e;
    if (0 === t || null == t) return null;
    let a = (0, u.$g)(t, l);
    return (0, s.jsx)(d.E, {
        variant: "text-md/medium",
        color: "text-feedback-positive",
        children: j.intl.format("adjustments" === n ? x.default["i3Q/6S"] : x.default.pDVleg, { amount: a }),
    });
}
function N(e) {
    let { label: t, value: l, className: n } = e;
    return (0, s.jsxs)(d.E, {
        variant: "text-lg/semibold",
        color: "text-strong",
        className: r()(h.p8, n),
        children: [
            (0, s.jsx)("span", { children: t ?? j.intl.string(x.default.Zxav97) }),
            (0, s.jsx)("span", { children: l }),
        ],
    });
}
