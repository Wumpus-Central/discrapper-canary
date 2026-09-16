r.d(e, { _: () => o });
var i = r(477900),
    n = r(17928),
    l = r(139146),
    u = r(280450),
    a = r(471505);
function o(t) {
    let { sku: e, location: r, isCardHovered: o = !0, trackButtonClick: s, ..._ } = t,
        d = (0, n.bG)([u.default], () => u.default.getId()),
        {
            isWishlisted: T,
            isBusy: c,
            isFirstTimeWishlister: b,
            handleToggle: O,
        } = (0, a.G)({ userId: d, sku: e, location: r, trackButtonClick: s });
    return (0, i.jsx)(l._, {
        skuId: e.id,
        productName: e.name,
        isWishlisted: T,
        isBusy: c,
        isFirstTimeWishlister: b,
        isVisuallyHidden: !o && !T,
        onClick: O,
        ..._,
    });
}
