n.d(t, { fU: () => u, i: () => c, je: () => d });
var l,
    i = n(627968);
n(64700);
var a = n(323384),
    r = n(834730),
    s = n(985018),
    o = n(554518),
    u =
        (((l = {}).SELECT_PAYMENT_METHOD = "SELECT_PAYMENT_METHOD"),
        (l.ADD_NEW_PAYMENT_METHOD = "ADD_NEW_PAYMENT_METHOD"),
        l);
let c = (e) => {
    switch (e) {
        case "SELECT_PAYMENT_METHOD":
            return s.intl.string(s.t.Tdb5qb);
        case "ADD_NEW_PAYMENT_METHOD":
            return s.intl.string(s.t["6d44F5"]);
    }
};
function d(e) {
    let { paymentRestrictionBannerType: t } = e;
    if (null == t) return null;
    let n = c(t);
    return (0, i.jsxs)("div", {
        className: o.Y4,
        children: [
            (0, i.jsxs)("div", {
                className: o.NX,
                children: [
                    (0, i.jsx)(a.k, { size: "md", color: "white", className: o.Kk }),
                    (0, i.jsx)(a.k, { size: "md", color: "currentColor", className: o.kV }),
                ],
            }),
            (0, i.jsx)(r.E, { variant: "text-sm/normal", children: n }),
            (0, i.jsx)("div", { className: o.u }),
        ],
    });
}
