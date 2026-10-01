n.d(t, { Qf: () => E, Vm: () => h });
var l = n(477900),
    r = n(582128),
    a = n(503698),
    i = n.n(a),
    s = n(338209),
    o = n.n(s),
    u = n(834730),
    c = n(580630);
n(717201);
var d = n(725836),
    m = n(777485),
    x = n(583741),
    f = n(375708),
    p = n(801067);
function h(e) {
    let t = (0, d.I6)(),
        { lineItems: n } = e,
        r = (function (e) {
            let t = e.filter((e) => !(v(e) && 0 === e.amount)),
                { tax: n = 0, other: l = 0 } = o()(t, (e) => (v(e) ? "tax" : "other"));
            if (1 === l) {
                if (0 === n) return [];
                if (1 === n) return [t.find(v)];
            }
            return t;
        })(n);
    return 1 === r.length && null != t
        ? (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)("div", { className: p.yF }),
                  (0, l.jsx)(d.gw, {
                      children: (0, l.jsx)("div", {
                          className: p.sR,
                          children: (0, l.jsx)(j, { ...e, displayItems: r }),
                      }),
                  }),
              ],
          })
        : (0, l.jsxs)(l.Fragment, {
              children: [(0, l.jsx)("div", { className: i()(p.yF, p.s3) }), (0, l.jsx)(j, { ...e, displayItems: r })],
          });
}
function v(e) {
    return "tax" === e.id;
}
function j(e) {
    let {
            label: t,
            lineItems: n,
            displayItems: a,
            currency: i,
            collapsedContentLabelOverride: s,
            defaultExpanded: o = !1,
        } = e,
        d = n.length > 0,
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
        );
    if (0 === a.length) return null;
    if (1 === a.length) {
        let { amount: e, ...t } = a[0],
            n = (0, c.$g)(e, i);
        return (0, l.jsx)(m.i, { value: n, valueColor: e < 0 ? "text-feedback-positive" : "text-muted", ...t });
    }
    return (0, l.jsx)(m.h, {
        label: t,
        defaultExpanded: o,
        isDisabled: !d,
        collapsedContent:
            null != s
                ? (0, l.jsx)(u.E, { variant: "text-md/medium", color: "text-feedback-positive", children: s })
                : (0, l.jsx)(g, {
                      amount: f < 0 ? Math.abs(f) : null,
                      currency: i,
                      labelType: x ? "adjustments" : "savings",
                  }),
        children: a.map((e) => {
            let { id: t, label: n, amount: r, ...a } = e,
                s = (0, c.$g)(r, i);
            return (0, l.jsx)(
                m.i,
                { label: n, value: s, valueColor: r < 0 ? "text-feedback-positive" : "text-muted", ...a },
                t,
            );
        }),
    });
}
function g(e) {
    let { amount: t, currency: n, labelType: r } = e;
    if (0 === t || null == t) return null;
    let a = (0, c.$g)(t, n);
    return (0, l.jsx)(u.E, {
        variant: "text-md/medium",
        color: "text-feedback-positive",
        children: f.intl.format("adjustments" === r ? x.default["i3Q/6S"] : x.default.pDVleg, { amount: a }),
    });
}
function E(e) {
    let { label: t, value: n, className: r } = e;
    return (0, l.jsxs)(u.E, {
        variant: "text-lg/semibold",
        color: "text-strong",
        className: i()(p.p8, r),
        children: [
            (0, l.jsx)("span", { children: t ?? f.intl.string(x.default.Zxav97) }),
            (0, l.jsx)("span", { children: n }),
        ],
    });
}
