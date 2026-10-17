l.d(t, { Qf: () => E, Vm: () => h });
var n = l(477900),
    a = l(582128),
    r = l(503698),
    s = l.n(r),
    i = l(338209),
    o = l.n(i),
    c = l(834730),
    d = l(580630);
l(717201);
var u = l(725836),
    m = l(777485),
    x = l(649975),
    f = l(105292),
    p = l(801067);
function h(e) {
    let t = (0, u.I6)(),
        { lineItems: l } = e,
        a = (function (e) {
            let t = e.filter((e) => !(j(e) && 0 === e.amount)),
                { tax: l = 0, other: n = 0 } = o()(t, (e) => (j(e) ? "tax" : "other"));
            if (1 === n) {
                if (0 === l) return [];
                if (1 === l) return [t.find(j)];
            }
            return t;
        })(l);
    return 1 === a.length && null != t
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)("div", { className: p.yF }),
                  (0, n.jsx)(u.gw, {
                      children: (0, n.jsx)("div", {
                          className: p.sR,
                          children: (0, n.jsx)(v, { ...e, displayItems: a }),
                      }),
                  }),
              ],
          })
        : (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsx)("div", { className: s()(p.yF, p.s3) }), (0, n.jsx)(v, { ...e, displayItems: a })],
          });
}
function j(e) {
    return "tax" === e.id;
}
function v(e) {
    let {
            label: t,
            lineItems: l,
            displayItems: r,
            currency: s,
            collapsedContentLabelOverride: i,
            defaultExpanded: o = !1,
        } = e,
        u = l.length > 0,
        { hasAdjustments: x, totalAdjustmentsOrSavings: f } = a.useMemo(
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
    if (0 === r.length) return null;
    if (1 === r.length) {
        let { amount: e, ...t } = r[0],
            l = (0, d.$g)(e, s);
        return (0, n.jsx)(m.i, { value: l, valueColor: e < 0 ? "text-feedback-positive" : "text-muted", ...t });
    }
    return (0, n.jsx)(m.h, {
        label: t,
        defaultExpanded: o,
        isDisabled: !u,
        collapsedContent:
            null != i
                ? (0, n.jsx)(c.E, { variant: "text-md/medium", color: "text-feedback-positive", children: i })
                : (0, n.jsx)(g, {
                      amount: f < 0 ? Math.abs(f) : null,
                      currency: s,
                      labelType: x ? "adjustments" : "savings",
                  }),
        children: r.map((e) => {
            let { id: t, label: l, amount: a, ...r } = e,
                i = (0, d.$g)(a, s);
            return (0, n.jsx)(
                m.i,
                { label: l, value: i, valueColor: a < 0 ? "text-feedback-positive" : "text-muted", ...r },
                t,
            );
        }),
    });
}
function g(e) {
    let { amount: t, currency: l, labelType: a } = e;
    if (0 === t || null == t) return null;
    let r = (0, d.$g)(t, l);
    return (0, n.jsx)(c.E, {
        variant: "text-md/medium",
        color: "text-feedback-positive",
        children: f.intl.format("adjustments" === a ? x.default["i3Q/6S"] : x.default.pDVleg, { amount: r }),
    });
}
function E(e) {
    let { label: t, value: l, className: a } = e;
    return (0, n.jsxs)(c.E, {
        variant: "text-lg/semibold",
        color: "text-strong",
        className: s()(p.p8, a),
        children: [
            (0, n.jsx)("span", { children: t ?? f.intl.string(x.default.Zxav97) }),
            (0, n.jsx)("span", { children: l }),
        ],
    });
}
