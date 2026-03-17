t.d(i, { A: () => d });
var n = t(627968);
t(64700);
var r = t(937008),
    s = t(672525),
    a = t(802246),
    l = t(788868),
    o = t(751690);
let d = function (e) {
    let { onSelectSku: i, priceOptions: t, giftRecipient: d, onWishlistItemClick: c } = e,
        { claimableRewards: _ } = (0, r.Pv)(),
        u = null != _ && _.length > 0;
    return (0, n.jsxs)("div", {
        className: o.H,
        children: [
            (0, n.jsxs)("div", {
                className: o.u,
                children: [
                    (0, n.jsx)(s.D3, {
                        onClick: () => i(l.pe.TIER_2),
                        isGift: !0,
                        priceOptions: t,
                        showPromotionalGiftBanner: u,
                    }),
                    (0, n.jsx)(s.Ls, {
                        onClick: () => i(l.pe.TIER_0),
                        isGift: !0,
                        priceOptions: t,
                        removeTopMargin: !0,
                    }),
                ],
            }),
            (0, n.jsx)(a.s, { giftRecipient: d, onWishlistItemClick: c }),
        ],
    });
};
