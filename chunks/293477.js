"use strict";
r.d(t, { B: () => m });
var n = r(627968),
    i = r(397927),
    s = r(501664),
    a = r(882342),
    l = r(219103),
    c = r(818348),
    o = r(985018),
    d = r(969061);
function u(e) {
    let { orbPrice: t, isProductDisabled: r, hasSufficientOrbs: s } = e,
        a = r ? o.intl.string(o.t.wu4gyV) : o.intl.string(o.t.eFNRzU),
        c = r || !s;
    return (0, n.jsxs)("div", {
        className: d.eg,
        children: [
            (0, n.jsx)("div", {
                className: d.zR,
                children: (0, n.jsx)(i.Text, { variant: "text-xs/normal", className: c ? d.r9 : void 0, children: a }),
            }),
            (0, n.jsx)(l.x, { priceAmount: t.amount, priceCurrency: t.currency, className: c ? d.r9 : void 0 }),
        ],
    });
}
function m(e) {
    let {
            prices: t,
            isPremiumUser: r,
            discount: i,
            product: o,
            hasSufficientOrbs: m,
            isProductDisabled: h,
            discountOfferAmount: p,
        } = e,
        x = null != p;
    return 0 === t.length
        ? null
        : t[0].currency === c.Yr.DISCORD_ORB
          ? (0, n.jsx)(u, { orbPrice: t[0], isProductDisabled: h, hasSufficientOrbs: m })
          : (0, n.jsxs)("div", {
                className: d.eg,
                children: [
                    (0, n.jsxs)("div", {
                        className: d.pw,
                        children: [
                            (0, n.jsx)(s.A, {
                                product: o,
                                discount: i,
                                isPremiumUser: r,
                                hideStrikethroughPrice: !r || x,
                                nitroIconType: "tooltip",
                                nitroIconSize: "xs",
                                discountOfferAmount: p,
                            }),
                            r || x ? null : (0, n.jsx)(a.A, { product: o }),
                        ],
                    }),
                    t.length > 1 &&
                        t[1].currency === c.Yr.DISCORD_ORB &&
                        (0, n.jsx)(l.x, {
                            priceAmount: t[1].amount,
                            priceCurrency: t[1].currency,
                            className: h || !m ? d.r9 : void 0,
                        }),
                ],
            });
}
