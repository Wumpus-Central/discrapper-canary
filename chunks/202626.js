"use strict";
n.d(t, { A: () => c });
var r = n(627968),
    i = n(64700),
    s = n(683071),
    a = n(502639),
    o = n(493822),
    l = n(985018),
    u = n(723429);
let c = (e) => {
    let { billingError: t, onCardInfoChange: n } = e,
        c = null != t && (null == t.code || (0, o.ou)(t) === o.gj.CREDIT_CARD_INFORMATION);
    return (0, r.jsxs)(i.Fragment, {
        children: [
            c
                ? (0, r.jsx)("div", {
                      className: u.QK,
                      children: (0, r.jsx)(s.w, { type: "critical", children: l.intl.string(l.t["4vnhKV"]) }),
                  })
                : null,
            (0, r.jsx)(a.A, { onCardInfoChange: n, error: t }),
        ],
    });
};
