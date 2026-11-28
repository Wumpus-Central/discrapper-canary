var i = e(477900);
e(582128);
var r = e(834730),
    l = e(816252),
    a = e(916974),
    s = e(88001),
    o = e(483769),
    u = e(792996),
    c = e(130428),
    d = e(67423);
function m(t) {
    let { userDiscountOffer: n, offerState: e } = t,
        { discountedPrice: c, fullPrice: d } = (0, a.X)();
    switch (e) {
        case l.b.APPLIED:
            return (0, i.jsx)(r.E, {
                variant: "body-md/normal",
                color: "text-subtle",
                children: u.intl.formatToPlainString(o.default["9IpDKy"], {
                    premiumGroupProductName: (0, s.DP)(),
                    discountedPrice: c,
                    regularPrice: d,
                }),
            });
        case l.b.NONE:
            if (null == n.expiresAt) return null;
            return (0, i.jsx)(r.E, {
                variant: "body-md/normal",
                color: "text-subtle",
                children: u.intl.formatToPlainString(o.default.j1KrK1, {
                    premiumGroupProductName: (0, s.DP)(),
                    endDate: n.expiresAt,
                }),
            });
        default:
            return null;
    }
}
e.d(
    n,
    {},
    {
        o: function (t) {
            let { userDiscountOffer: n, offerState: e = l.b.NONE } = t;
            return (0, i.jsxs)("div", {
                className: c.j2,
                children: [
                    (0, i.jsx)("img", { alt: "", src: d, className: c.oU }),
                    (0, i.jsxs)("div", {
                        className: c.br,
                        children: [
                            (0, i.jsx)(r.E, {
                                variant: "body-md/semibold",
                                children: u.intl.format(o.default.zFqLyY, { percent: n.discount.amount }),
                            }),
                            (0, i.jsx)(m, { userDiscountOffer: n, offerState: e }),
                        ],
                    }),
                ],
            });
        },
    },
);
