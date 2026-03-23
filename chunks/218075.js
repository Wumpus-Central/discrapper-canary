"use strict";
n.d(t, { fU: () => o, i: () => l, je: () => u });
var r = n(627968);
n(64700);
var i = n(397927),
    s = n(985018),
    a = n(39919),
    o = (function (e) {
        return (
            (e.SELECT_PAYMENT_METHOD = "SELECT_PAYMENT_METHOD"),
            (e.ADD_NEW_PAYMENT_METHOD = "ADD_NEW_PAYMENT_METHOD"),
            e
        );
    })({});
let l = (e) => {
    switch (e) {
        case "SELECT_PAYMENT_METHOD":
            return s.intl.string(s.t.Tdb5qb);
        case "ADD_NEW_PAYMENT_METHOD":
            return s.intl.string(s.t["6d44F5"]);
    }
};
function u(e) {
    let { paymentRestrictionBannerType: t } = e;
    if (null == t) return null;
    let n = l(t);
    return (0, r.jsxs)("div", {
        className: a.Y4,
        children: [
            (0, r.jsxs)("div", {
                className: a.NX,
                children: [
                    (0, r.jsx)(i.k9F, { size: "md", color: "white", className: a.Kk }),
                    (0, r.jsx)(i.k9F, { size: "md", color: "currentColor", className: a.kV }),
                ],
            }),
            (0, r.jsx)(i.Text, { variant: "text-sm/normal", children: n }),
            (0, r.jsx)("div", { className: a.u }),
        ],
    });
}
