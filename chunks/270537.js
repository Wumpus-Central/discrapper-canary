n.d(t, { Qf: () => E, Vm: () => p });
var l = n(477900),
    a = n(582128),
    r = n(503698),
    s = n.n(r),
    i = n(338209),
    o = n.n(i),
    c = n(834730),
    d = n(580630);
n(717201);
var u = n(725836),
    m = n(777485),
    x = n(649975),
    f = n(660183),
    h = n(801067);
function p(e) {
    let t = (0, u.I6)(),
        { lineItems: n } = e,
        a = (function (e) {
            let t = e.filter((e) => !(j(e) && 0 === e.amount)),
                { tax: n = 0, other: l = 0 } = o()(t, (e) => (j(e) ? "tax" : "other"));
            if (1 === l) {
                if (0 === n) return [];
                if (1 === n) return [t.find(j)];
            }
            return t;
        })(n);
    return 1 === a.length && null != t
        ? (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)("div", { className: h.yF }),
                  (0, l.jsx)(u.gw, {
                      children: (0, l.jsx)("div", {
                          className: h.sR,
                          children: (0, l.jsx)(v, { ...e, displayItems: a }),
                      }),
                  }),
              ],
          })
        : (0, l.jsxs)(l.Fragment, {
              children: [(0, l.jsx)("div", { className: s()(h.yF, h.s3) }), (0, l.jsx)(v, { ...e, displayItems: a })],
          });
}
function j(e) {
    return "tax" === e.id;
}
function v(e) {
    let {
            label: t,
            lineItems: n,
            displayItems: r,
            currency: s,
            collapsedContentLabelOverride: i,
            defaultExpanded: o = !1,
        } = e,
        u = n.length > 0,
        { hasAdjustments: x, totalAdjustmentsOrSavings: f } = a.useMemo(
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
    if (0 === r.length) return null;
    if (1 === r.length) {
        let { amount: e, ...t } = r[0],
            n = (0, d.$g)(e, s);
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
                      amount: f < 0 ? Math.abs(f) : null,
                      currency: s,
                      labelType: x ? "adjustments" : "savings",
                  }),
        children: r.map((e) => {
            let { id: t, label: n, amount: a, ...r } = e,
                i = (0, d.$g)(a, s);
            return (0, l.jsx)(
                m.i,
                { label: n, value: i, valueColor: a < 0 ? "text-feedback-positive" : "text-muted", ...r },
                t,
            );
        }),
    });
}
function g(e) {
    let { amount: t, currency: n, labelType: a } = e;
    if (0 === t || null == t) return null;
    let r = (0, d.$g)(t, n);
    return (0, l.jsx)(c.E, {
        variant: "text-md/medium",
        color: "text-feedback-positive",
        children: f.intl.format("adjustments" === a ? x.default["i3Q/6S"] : x.default.pDVleg, { amount: r }),
    });
}
function E(e) {
    let { label: t, value: n, className: a } = e;
    return (0, l.jsxs)(c.E, {
        variant: "text-lg/semibold",
        color: "text-strong",
        className: s()(h.p8, a),
        children: [
            (0, l.jsx)("span", { children: t ?? f.intl.string(x.default.Zxav97) }),
            (0, l.jsx)("span", { children: n }),
        ],
    });
}
