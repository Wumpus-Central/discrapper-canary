i.d(t, { A: () => u });
var n = i(627968);
i(64700);
var r = i(937008),
    l = i(672525),
    s = i(802246),
    a = i(788868),
    o = i(751690);
let u = function (e) {
    let { onSelectSku: t, priceOptions: i, giftRecipient: u, onWishlistItemClick: d } = e,
        { claimableRewards: c } = (0, r.Pv)(),
        m = null != c && c.length > 0;
    return (0, n.jsxs)("div", {
        className: o.H,
        children: [
            (0, n.jsxs)("div", {
                className: o.u,
                children: [
                    (0, n.jsx)(l.D3, {
                        onClick: () => t(a.pe.TIER_2),
                        isGift: !0,
                        priceOptions: i,
                        showPromotionalGiftBanner: m,
                    }),
                    (0, n.jsx)(l.Ls, {
                        onClick: () => t(a.pe.TIER_0),
                        isGift: !0,
                        priceOptions: i,
                        removeTopMargin: !0,
                    }),
                ],
            }),
            (0, n.jsx)(s.A, { giftRecipient: u, onWishlistItemClick: d }),
        ],
    });
};
