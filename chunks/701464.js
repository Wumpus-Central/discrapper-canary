i.d(t, { Z: () => c });
var r = i(54381);
i(473749);
var n = i(987209),
    a = i(973007),
    l = i(170731),
    s = i(474936),
    o = i(391763);
let c = function (e) {
    let { onSelectSku: t, priceOptions: i, giftRecipient: c, onWishlistItemClick: d } = e,
        { claimableRewards: u } = (0, n.wD)(),
        m = null != u && u.length > 0;
    return (0, r.jsxs)("div", {
        className: o.giftOptionContainer,
        children: [
            (0, r.jsxs)("div", {
                className: o.cardsRow,
                children: [
                    (0, r.jsx)(a.jB, {
                        onClick: () => t(s.Si.TIER_2),
                        isGift: !0,
                        priceOptions: i,
                        showPromotionalGiftBanner: m,
                        enablePremiumBrandRefresh: !0,
                    }),
                    (0, r.jsx)(a.j8, {
                        onClick: () => t(s.Si.TIER_0),
                        isGift: !0,
                        priceOptions: i,
                        enablePremiumBrandRefresh: !0,
                        removeTopMargin: !0,
                    }),
                ],
            }),
            (0, r.jsx)(l.Z, {
                giftRecipient: c,
                onWishlistItemClick: d,
            }),
        ],
    });
};
