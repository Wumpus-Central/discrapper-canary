i.d(t, { A: () => c });
var n = i(627968);
i(64700);
var s = i(937008),
    r = i(310250),
    l = i(672525),
    a = i(802246),
    o = i(788868),
    d = i(751690);
let c = function (e) {
    let { onSelectSku: t, priceOptions: i, giftRecipient: c, onWishlistItemClick: u } = e,
        { claimableRewards: _ } = (0, s.Pv)(),
        m = null != _ && _.length > 0,
        I = (0, r.T)("Select Gift Option");
    return (0, n.jsxs)("div", {
        className: d.H,
        children: [
            (0, n.jsxs)("div", {
                className: d.u,
                children: [
                    (0, n.jsx)(l.D3, {
                        onClick: () => t(o.pe.TIER_2),
                        isGift: !0,
                        priceOptions: i,
                        showPromotionalGiftBanner: m,
                    }),
                    (0, n.jsx)(l.Ls, {
                        onClick: () => t(o.pe.TIER_0),
                        isGift: !0,
                        priceOptions: i,
                        removeTopMargin: !0,
                    }),
                ],
            }),
            I
                ? (0, n.jsx)(a.s, { giftRecipient: c, onWishlistItemClick: u })
                : (0, n.jsx)(a.A, { giftRecipient: c, onWishlistItemClick: u }),
        ],
    });
};
