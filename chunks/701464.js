t.d(i, { Z: () => c });
var n = t(951288);
t(647438);
var r = t(987209),
    s = t(973007),
    a = t(170731),
    l = t(474936),
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
                    (0, n.jsx)(s.jB, {
                        onClick: () => i(l.Si.TIER_2),
                        isGift: !0,
                        priceOptions: t,
                        showPromotionalGiftBanner: m,
                        enablePremiumBrandRefresh: !0,
                    }),
                    (0, n.jsx)(s.j8, {
                        onClick: () => i(l.Si.TIER_0),
                        isGift: !0,
                        priceOptions: t,
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
