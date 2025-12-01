i.d(t, { Z: () => c });
var n = i(54381);
i(473749);
var r = i(987209),
    l = i(973007),
    a = i(170731),
    s = i(474936),
    o = i(391763);
let c = function (e) {
    let { onSelectSku: t, priceOptions: i, giftRecipient: c, onWishlistItemClick: d } = e,
        { claimableRewards: u } = (0, r.wD)(),
        m = null != u && u.length > 0;
    return (0, n.jsxs)("div", {
        className: o.giftOptionContainer,
        children: [
            (0, n.jsxs)("div", {
                className: o.cardsRow,
                children: [
                    (0, n.jsx)(l.jB, {
                        onClick: () => t(s.Si.TIER_2),
                        isGift: !0,
                        priceOptions: i,
                        showPromotionalGiftBanner: m,
                        enablePremiumBrandRefresh: !0,
                    }),
                    (0, n.jsx)(l.j8, {
                        onClick: () => t(s.Si.TIER_0),
                        isGift: !0,
                        priceOptions: i,
                        enablePremiumBrandRefresh: !0,
                        removeTopMargin: !0,
                    }),
                ],
            }),
            (0, n.jsx)(a.Z, {
                giftRecipient: c,
                onWishlistItemClick: d,
            }),
        ],
    });
};
