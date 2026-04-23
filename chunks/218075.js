"use strict";
n.d(t, { fU: () => u, i: () => c, je: () => d });
var r,
    i = n(627968);
n(64700);
var s = n(323384),
    a = n(834730),
    o = n(985018),
    l = n(554518),
    u =
        (((r = {}).SELECT_PAYMENT_METHOD = "SELECT_PAYMENT_METHOD"),
        (r.ADD_NEW_PAYMENT_METHOD = "ADD_NEW_PAYMENT_METHOD"),
        r);
let c = (e) => {
    switch (e) {
        case "SELECT_PAYMENT_METHOD":
            return o.intl.string(o.t.Tdb5qb);
        case "ADD_NEW_PAYMENT_METHOD":
            return o.intl.string(o.t["6d44F5"]);
    }
};
function d(e) {
    let { paymentRestrictionBannerType: t } = e;
    if (null == t) return null;
    let n = c(t);
    return (0, i.jsxs)("div", {
        className: l.Y4,
        children: [
            (0, i.jsxs)("div", {
                className: l.NX,
                children: [
                    (0, i.jsx)(s.k, { size: "md", color: "white", className: l.Kk }),
                    (0, i.jsx)(s.k, { size: "md", color: "currentColor", className: l.kV }),
                ],
            }),
            (0, i.jsx)(a.E, { variant: "text-sm/normal", children: n }),
            (0, i.jsx)("div", { className: l.u }),
        ],
    });
}
