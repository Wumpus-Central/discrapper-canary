n.d(t, {
    B: () => m,
});
var r = n(627968),
    l = n(397927),
    i = n(501664),
    a = n(882342),
    s = n(219103),
    o = n(818348),
    c = n(985018),
    u = n(969061);

function d(e) {
    let { orbPrice: t, isProductDisabled: n, hasSufficientOrbs: i } = e,
        a = n ? c.intl.string(c.t.wu4gyV) : c.intl.string(c.t.eFNRzU),
        o = n || !i;
    return (0, r.jsxs)("div", {
        className: u.eg,
        children: [
            (0, r.jsx)("div", {
                className: u.zR,
                children: (0, r.jsx)(l.Text, {
                    variant: "text-xs/normal",
                    className: o ? u.r9 : void 0,
                    children: a,
                }),
            }),
            (0, r.jsx)(s.x, {
                priceAmount: t.amount,
                priceCurrency: t.currency,
                className: o ? u.r9 : void 0,
            }),
        ],
    });
}

function m(e) {
    let {
            prices: t,
            isPremiumUser: n,
            discount: l,
            product: c,
            hasSufficientOrbs: m,
            isProductDisabled: p,
            discountOfferAmount: f,
        } = e,
        x = null != f;
    return 0 === t.length
        ? null
        : t[0].currency === o.Yr.DISCORD_ORB
          ? (0, r.jsx)(d, {
                orbPrice: t[0],
                isProductDisabled: p,
                hasSufficientOrbs: m,
            })
          : (0, r.jsxs)("div", {
                className: u.eg,
                children: [
                    (0, r.jsxs)("div", {
                        className: u.pw,
                        children: [
                            (0, r.jsx)(i.A, {
                                product: c,
                                discount: l,
                                isPremiumUser: n,
                                hideStrikethroughPrice: !n || x,
                                nitroIconType: "tooltip",
                                nitroIconSize: "xs",
                                discountOfferAmount: f,
                            }),
                            n || x
                                ? null
                                : (0, r.jsx)(a.A, {
                                      product: c,
                                  }),
                        ],
                    }),
                    t.length > 1 &&
                        t[1].currency === o.Yr.DISCORD_ORB &&
                        (0, r.jsx)(s.x, {
                            priceAmount: t[1].amount,
                            priceCurrency: t[1].currency,
                            className: p || !m ? u.r9 : void 0,
                        }),
                ],
            });
}
