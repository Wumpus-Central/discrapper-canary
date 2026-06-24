"use strict";
n.d(t, { fU: () => u, i: () => c, je: () => d });
var i,
    r = n(627968);
n(64700);
var s = n(323384),
    a = n(834730),
    o = n(375708),
    l = n(554518),
    u =
        (((i = {}).SELECT_PAYMENT_METHOD = "SELECT_PAYMENT_METHOD"),
        (i.ADD_NEW_PAYMENT_METHOD = "ADD_NEW_PAYMENT_METHOD"),
        i);
function c(e) {
    switch (e) {
        case "SELECT_PAYMENT_METHOD":
            return o.intl.string(o.t.Tdb5qb);
        case "ADD_NEW_PAYMENT_METHOD":
            return o.intl.string(o.t["6d44F5"]);
    }
}
function d(e) {
    let { paymentRestrictionBannerType: t } = e;
    if (null == t) return null;
    let n = c(t);
    return (0, r.jsxs)("div", {
        className: l.Y4,
        children: [
            (0, r.jsxs)("div", {
                className: l.NX,
                children: [
                    (0, r.jsx)(s.k, { size: "md", color: "white", className: l.Kk }),
                    (0, r.jsx)(s.k, { size: "md", color: "currentColor", className: l.kV }),
                ],
            }),
            (0, r.jsx)(a.E, { variant: "text-sm/normal", children: n }),
            (0, r.jsx)("div", { className: l.u }),
        ],
    });
}
