n.d(t, { B: () => _ });
var r = n(627968),
    i = n(834730),
    a = n(501664),
    l = n(882342),
    s = n(219103),
    c = n(818348),
    o = n(985018),
    d = n(752274);
function u(e) {
    let { orbPrice: t, isProductDisabled: n, hasSufficientOrbs: a } = e,
        l = n ? o.intl.string(o.t.wu4gyV) : o.intl.string(o.t.eFNRzU),
        c = n || !a;
    return (0, r.jsxs)("div", {
        className: d.eg,
        children: [
            (0, r.jsx)("div", {
                className: d.zR,
                children: (0, r.jsx)(i.E, { variant: "text-xs/normal", className: c ? d.r9 : void 0, children: l }),
            }),
            (0, r.jsx)(s.x, { priceAmount: t.amount, priceCurrency: t.currency, className: c ? d.r9 : void 0 }),
        ],
    });
}
function _(e) {
    let {
            prices: t,
            isPremiumUser: n,
            discount: i,
            product: o,
            hasSufficientOrbs: _,
            onTrackClick: m,
            isProductDisabled: p,
            discountOfferAmount: h,
        } = e,
        f = null != h;
    return 0 === t.length
        ? null
        : t[0].currency === c.Yr.DISCORD_ORB
          ? (0, r.jsx)(u, { orbPrice: t[0], isProductDisabled: p, hasSufficientOrbs: _ })
          : (0, r.jsxs)("div", {
                className: d.eg,
                children: [
                    (0, r.jsxs)("div", {
                        className: d.pw,
                        children: [
                            (0, r.jsx)(a.A, {
                                product: o,
                                discount: i,
                                isPremiumUser: n,
                                hideStrikethroughPrice: !n || f,
                                nitroIconType: "tooltip",
                                nitroIconSize: "xs",
                                discountOfferAmount: h,
                            }),
                            n || f ? null : (0, r.jsx)(l.A, { product: o, onTrackClick: m }),
                        ],
                    }),
                    t.length > 1 &&
                        t[1].currency === c.Yr.DISCORD_ORB &&
                        (0, r.jsx)(s.x, {
                            priceAmount: t[1].amount,
                            priceCurrency: t[1].currency,
                            className: p || !_ ? d.r9 : void 0,
                        }),
                ],
            });
}
