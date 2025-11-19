n.d(t, { j: () => u });
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(462566),
    s = n(603421),
    l = n(388032),
    c = n(605352);
let u = (e) => {
    let { billingError: t, onCardInfoChange: n } = e,
        u = null != t && (null == t.code || (0, s.ly)(t) === s.Rg.CREDIT_CARD_INFORMATION);
    return (0, r.jsxs)(i.Fragment, {
        children: [
            u
                ? (0, r.jsx)("div", {
                      className: c.errorBlock,
                      children: (0, r.jsx)(a.M14, {
                          type: "critical",
                          children: l.intl.string(l.t["4vnhKV"]),
                      }),
                  })
                : null,
            (0, r.jsx)(o.Z, {
                onCardInfoChange: n,
                error: t,
            }),
        ],
    });
};
