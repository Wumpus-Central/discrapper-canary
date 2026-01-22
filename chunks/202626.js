n.d(t, {
    A: () => u,
});
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(502639),
    o = n(493822),
    l = n(985018),
    c = n(182468);
let u = (e) => {
    let { billingError: t, onCardInfoChange: n } = e,
        u = null != t && (null == t.code || (0, o.ou)(t) === o.gj.CREDIT_CARD_INFORMATION);
    return (0, r.jsxs)(i.Fragment, {
        children: [
            u
                ? (0, r.jsx)("div", {
                      className: c.QK,
                      children: (0, r.jsx)(a.wx6, {
                          type: "critical",
                          children: l.intl.string(l.t["4vnhKV"]),
                      }),
                  })
                : null,
            (0, r.jsx)(s.A, {
                onCardInfoChange: n,
                error: t,
            }),
        ],
    });
};
