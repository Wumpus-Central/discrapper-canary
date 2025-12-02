t.d(i, { Z: () => c });
var n = t(54381);
t(473749);
var r = t(987209),
    a = t(973007),
    l = t(170731),
    s = t(474936),
    o = t(391763);
let c = function (e) {
    let { onSelectSku: i, priceOptions: t, giftRecipient: c, onWishlistItemClick: d } = e,
        { claimableRewards: u } = (0, r.wD)(),
        m = null != u && u.length > 0;
    return (0, n.jsxs)("div", {
        className: o.giftOptionContainer,
        children: [
            (0, n.jsxs)("div", {
                className: o.cardsRow,
                children: [
                    (0, n.jsx)(a.jB, {
                        onClick: () => i(s.Si.TIER_2),
                        isGift: !0,
                        priceOptions: t,
                        showPromotionalGiftBanner: m,
                        enablePremiumBrandRefresh: !0,
                    }),
                    (0, n.jsx)(a.j8, {
                        onClick: () => i(s.Si.TIER_0),
                        isGift: !0,
                        priceOptions: t,
                        enablePremiumBrandRefresh: !0,
                        removeTopMargin: !0,
                    }),
                ],
            }),
            (0, n.jsx)(l.Z, {
                giftRecipient: c,
                onWishlistItemClick: d,
            }),
        ],
    });
};
