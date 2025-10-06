n.d(t, { Z: () => s });
var r = n(951288);
n(647438);
var i = n(973007),
    a = n(474936),
    o = n(414548);
function l() {
    return (0, r.jsx)("div", { className: o.wishlistBanner });
}
let s = function (e) {
    let { onSelectSku: t, isGift: n, priceOptions: s, showPromotionalGiftBanner: d } = e;
    return (0, r.jsxs)("div", {
        className: o.giftOptionContainer,
        children: [
            (0, r.jsxs)("div", {
                className: o.cardsRow,
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
            (0, r.jsx)(l, {}),
        ],
    });
};
