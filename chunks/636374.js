o.d(i, { P: () => u });
var n = o(666810),
    e = o(662349);
function u(t) {
    let { wishlistOwner: i, isOwned: o, shortText: u, onDetailsClick: r, onPurchaseClick: c } = t,
        { clickRoutesToGift: s, showGiftButton: a } = (0, n.X)(),
        { label: l, icon: d, isPromptingPurchase: f } = (0, e.h)({ wishlistOwner: i, isOwned: o, shortText: u }),
        h = s && f;
    return {
        onBodyClick: h ? c : r,
        onOverlayClick: f ? c : r,
        showOverlayButton: !f || a,
        routesToGift: h,
        label: l,
        icon: d,
    };
}
