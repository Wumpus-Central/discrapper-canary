n.d(t, { B: () => m });
var r = n(627968),
    a = n(397927),
    i = n(501664),
    s = n(882342),
    l = n(219103),
    o = n(818348),
    c = n(985018),
    d = n(610306);
function u(e) {
    let { orbPrice: t, isProductDisabled: n, hasSufficientOrbs: i } = e,
        s = n ? c.intl.string(c.t.wu4gyV) : c.intl.string(c.t.eFNRzU),
        o = n || !i;
    return (0, r.jsxs)("div", {
        className: d.eg,
        children: [
            (0, r.jsx)("div", {
                className: d.zR,
                children: (0, r.jsx)(a.Text, { variant: "text-xs/normal", className: o ? d.r9 : void 0, children: s }),
            }),
            (0, r.jsx)(l.x, { priceAmount: t.amount, priceCurrency: t.currency, className: o ? d.r9 : void 0 }),
        ],
    });
}
function m(e) {
    let {
            prices: t,
            isPremiumUser: n,
            discount: a,
            product: c,
            hasSufficientOrbs: m,
            isProductDisabled: p,
            discountOfferAmount: h,
        } = e,
        x = null != h;
    return 0 === t.length
        ? null
        : t[0].currency === o.Yr.DISCORD_ORB
          ? (0, r.jsx)(u, { orbPrice: t[0], isProductDisabled: p, hasSufficientOrbs: m })
          : (0, r.jsxs)("div", {
                className: d.eg,
                children: [
                    (0, r.jsxs)("div", {
                        className: d.pw,
                        children: [
                            (0, r.jsx)(i.A, {
                                product: c,
                                discount: a,
                                isPremiumUser: n,
                                hideStrikethroughPrice: !n || x,
                                nitroIconType: "tooltip",
                                nitroIconSize: "xs",
                                discountOfferAmount: h,
                            }),
                            n || x ? null : (0, r.jsx)(s.A, { product: c }),
                        ],
                    }),
                    t.length > 1 &&
                        t[1].currency === o.Yr.DISCORD_ORB &&
                        (0, r.jsx)(l.x, {
                            priceAmount: t[1].amount,
                            priceCurrency: t[1].currency,
                            className: p || !m ? d.r9 : void 0,
                        }),
                ],
            });
}
