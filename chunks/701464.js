n.d(t, { Z: () => s });
var r = n(951288);
n(647438);
var i = n(973007),
    a = n(474936),
    l = n(391763);
function o() {
    return (0, r.jsx)("div", { className: l.wishlistBanner });
}
let s = function (e) {
    let { onSelectSku: t, isGift: n, priceOptions: s, showPromotionalGiftBanner: d } = e;
    return (0, r.jsxs)("div", {
        className: l.giftOptionContainer,
        children: [
            (0, r.jsxs)("div", {
                className: l.cardsRow,
                children: [
                    (0, r.jsx)(i.jB, {
                        onClick: () => t(a.Si.TIER_2),
                        isGift: n,
                        priceOptions: s,
                        showPromotionalGiftBanner: d,
                        enablePremiumBrandRefresh: !0,
                    }),
                    (0, r.jsx)(i.j8, {
                        onClick: () => t(a.Si.TIER_0),
                        isGift: n,
                        priceOptions: s,
                        enablePremiumBrandRefresh: !0,
                    }),
                ],
            }),
            (0, r.jsx)(o, {}),
        ],
    });
};
