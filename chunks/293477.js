n.d(t, { B: () => _ });
var i = n(627968),
    r = n(834730),
    a = n(501664),
    l = n(882342),
    s = n(219103),
    o = n(818348),
    c = n(985018),
    d = n(752274);
function u(e) {
    let { orbPrice: t, isProductDisabled: n, hasSufficientOrbs: a } = e,
        l = n ? c.intl.string(c.t.wu4gyV) : c.intl.string(c.t.eFNRzU),
        o = n || !a;
    return (0, i.jsxs)("div", {
        className: d.eg,
        children: [
            (0, i.jsx)("div", {
                className: d.zR,
                children: (0, i.jsx)(r.E, { variant: "text-xs/normal", className: o ? d.r9 : void 0, children: l }),
            }),
            (0, i.jsx)(s.x, { priceAmount: t.amount, priceCurrency: t.currency, className: o ? d.r9 : void 0 }),
        ],
    });
}
function _(e) {
    let {
            prices: t,
            isPremiumUser: n,
            discount: r,
            product: c,
            hasSufficientOrbs: _,
            onTrackClick: m,
            isProductDisabled: p,
            discountOfferAmount: h,
        } = e,
        f = null != h;
    return 0 === t.length
        ? null
        : t[0].currency === o.Yr.DISCORD_ORB
          ? (0, i.jsx)(u, { orbPrice: t[0], isProductDisabled: p, hasSufficientOrbs: _ })
          : (0, i.jsxs)("div", {
                className: d.eg,
                children: [
                    (0, i.jsxs)("div", {
                        className: d.pw,
                        children: [
                            (0, i.jsx)(a.A, {
                                product: c,
                                discount: r,
                                isPremiumUser: n,
                                hideStrikethroughPrice: !n || f,
                                nitroIconType: "tooltip",
                                nitroIconSize: "xs",
                                discountOfferAmount: h,
                            }),
                            n || f ? null : (0, i.jsx)(l.A, { product: c, onTrackClick: m }),
                        ],
                    }),
                    t.length > 1 &&
                        t[1].currency === o.Yr.DISCORD_ORB &&
                        (0, i.jsx)(s.x, {
                            priceAmount: t[1].amount,
                            priceCurrency: t[1].currency,
                            className: p || !_ ? d.r9 : void 0,
                        }),
                ],
            });
}
