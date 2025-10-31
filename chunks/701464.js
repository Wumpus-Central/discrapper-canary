n.d(t, { Z: () => s });
var r = n(951288);
n(647438);
var i = n(973007),
    a = n(170731),
    l = n(474936),
    o = n(391763);
let s = function (e) {
    let {
        onSelectSku: t,
        isGift: n,
        priceOptions: s,
        showPromotionalGiftBanner: d,
        giftRecipient: C,
        onWishlistItemClick: c,
    } = e;
    return (0, r.jsxs)("div", {
        className: o.giftOptionContainer,
        children: [
            (0, r.jsxs)("div", {
                className: o.cardsRow,
                children: [
                    (0, r.jsx)(i.jB, {
                        onClick: () => t(l.Si.TIER_2),
                        isGift: n,
                        priceOptions: s,
                        showPromotionalGiftBanner: d,
                        enablePremiumBrandRefresh: !0,
                    }),
                    (0, r.jsx)(i.j8, {
                        onClick: () => t(l.Si.TIER_0),
                        isGift: n,
                        priceOptions: s,
                        enablePremiumBrandRefresh: !0,
                        removeTopMargin: !0,
                    }),
                ],
            }),
            (0, r.jsx)(a.Z, {
                giftRecipient: C,
                onWishlistItemClick: c,
            }),
        ],
    });
};
