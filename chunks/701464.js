t.d(e, { Z: () => c });
var n = t(54381);
t(473749);
var s = t(987209),
    r = t(973007),
    l = t(170731),
    a = t(474936),
    o = t(427365);
let c = function (i) {
    let { onSelectSku: e, priceOptions: t, giftRecipient: c, onWishlistItemClick: d } = i,
        { claimableRewards: u } = (0, s.wD)(),
        m = null != u && u.length > 0;
    return (0, n.jsxs)("div", {
        className: o.giftOptionContainer,
        children: [
            (0, n.jsxs)("div", {
                className: o.cardsRow,
                children: [
                    (0, n.jsx)(r.jB, {
                        onClick: () => e(a.Si.TIER_2),
                        isGift: !0,
                        priceOptions: t,
                        showPromotionalGiftBanner: m,
                    }),
                    (0, n.jsx)(r.j8, {
                        onClick: () => e(a.Si.TIER_0),
                        isGift: !0,
                        priceOptions: t,
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
