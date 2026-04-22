n.d(t, { A: () => c });
var l = n(627968),
    i = n(64700),
    a = n(683071),
    r = n(502639),
    s = n(493822),
    o = n(985018),
    u = n(723429);
let c = (e) => {
    let { billingError: t, onCardInfoChange: n } = e,
        c = null != t && (null == t.code || (0, s.ou)(t) === s.gj.CREDIT_CARD_INFORMATION);
    return (0, l.jsxs)(i.Fragment, {
        children: [
            c
                ? (0, l.jsx)("div", {
                      className: u.QK,
                      children: (0, l.jsx)(a.w, { type: "critical", children: o.intl.string(o.t["4vnhKV"]) }),
                  })
                : null,
            (0, l.jsx)(r.A, { onCardInfoChange: n, error: t }),
        ],
    });
};
