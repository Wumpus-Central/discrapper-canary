r.d(e, { _: () => a });
var i = r(477900),
    n = r(17928),
    l = r(139146),
    o = r(280450),
    u = r(471505);
function a(t) {
    let { sku: e, location: r, isCardHovered: a = !0, trackButtonClick: s, ..._ } = t,
        d = (0, n.bG)([o.default], () => o.default.getId()),
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
        isVisuallyHidden: !a && !T,
        onClick: N,
        ..._,
    });
}
