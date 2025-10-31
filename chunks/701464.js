n.d(t, { Z: () => o });
var r = n(951288);
n(647438);
var i = n(973007),
    l = n(170731),
    a = n(474936),
    s = n(391763);
let o = function (e) {
    let {
        onSelectSku: t,
        isGift: n,
        priceOptions: o,
        showPromotionalGiftBanner: d,
        giftRecipient: c,
        onWishlistItemClick: C,
    } = e;
    return (0, r.jsxs)("div", {
        className: s.giftOptionContainer,
        children: [
            (0, r.jsxs)("div", {
                className: s.cardsRow,
                children: [
                    (0, r.jsx)(i.jB, {
                        onClick: () => t(a.Si.TIER_2),
                        isGift: n,
                        priceOptions: o,
                        showPromotionalGiftBanner: d,
                        enablePremiumBrandRefresh: !0,
                    }),
                    (0, r.jsx)(i.j8, {
                        onClick: () => t(a.Si.TIER_0),
                        isGift: n,
                        priceOptions: o,
                        enablePremiumBrandRefresh: !0,
                        removeTopMargin: !0,
                    }),
                ],
            }),
            (0, r.jsx)(l.Z, {
                giftRecipient: c,
                onWishlistItemClick: C,
            }),
        ],
    });
};
