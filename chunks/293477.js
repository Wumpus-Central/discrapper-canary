n.d(t, { B: () => m });
var r = n(627968),
    l = n(397927),
    a = n(501664),
    i = n(882342),
    s = n(219103),
    c = n(818348),
    o = n(985018),
    d = n(969061);
function u(e) {
    let { orbPrice: t, isProductDisabled: n, hasSufficientOrbs: a } = e,
        i = n ? o.intl.string(o.t.wu4gyV) : o.intl.string(o.t.eFNRzU),
        c = n || !a;
    return (0, r.jsxs)("div", {
        className: d.eg,
        children: [
            (0, r.jsx)("div", {
                className: d.zR,
                children: (0, r.jsx)(l.Text, {
                    variant: "text-xs/normal",
                    className: c ? d.r9 : void 0,
                    children: i,
                }),
            }),
            (0, r.jsx)(s.x, {
                price: t,
                className: c ? d.r9 : void 0,
            }),
        ],
    });
}
function m(e) {
    let {
            prices: t,
            isPremiumUser: n,
            discount: l,
            product: o,
            hasSufficientOrbs: m,
            isProductDisabled: f,
            discountOfferAmount: b,
        } = e,
        p = null != b;
    return 0 === t.length
        ? null
        : t[0].currency === c.Yr.DISCORD_ORB
          ? (0, r.jsx)(u, {
                orbPrice: t[0],
                isProductDisabled: f,
                hasSufficientOrbs: m,
            })
          : (0, r.jsxs)("div", {
                className: d.eg,
                children: [
                    (0, r.jsxs)("div", {
                        className: d.pw,
                        children: [
                            (0, r.jsx)(a.A, {
                                product: o,
                                discount: l,
                                isPremiumUser: n,
                                hideStrikethroughPrice: !n || p,
                                nitroIconType: "tooltip",
                                nitroIconSize: "xs",
                                discountOfferAmount: b,
                            }),
                            n || p ? null : (0, r.jsx)(i.A, { product: o }),
                        ],
                    }),
                    t.length > 1 &&
                        t[1].currency === c.Yr.DISCORD_ORB &&
                        (0, r.jsx)(s.x, {
                            price: t[1],
                            className: f || !m ? d.r9 : void 0,
                        }),
                ],
            });
}
