r.d(e, { _: () => o });
var i = r(477900),
    n = r(17928),
    l = r(139146),
    a = r(280450),
    u = r(471505);
function o(t) {
    let { sku: e, location: r, isCardHovered: o = !0, trackButtonClick: s, ..._ } = t,
        d = (0, n.bG)([a.default], () => a.default.getId()),
        {
            isWishlisted: T,
            isBusy: c,
            isFirstTimeWishlister: b,
            handleToggle: N,
        } = (0, u.G)({ userId: d, sku: e, location: r, trackButtonClick: s });
    return (0, i.jsx)(l._, {
        skuId: e.id,
        productName: e.name,
        isWishlisted: T,
        isBusy: c,
        isFirstTimeWishlister: b,
        isVisuallyHidden: !o && !T,
        onClick: N,
        ..._,
    });
}
