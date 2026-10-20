r.d(e, { _: () => u });
var n = r(477900),
    i = r(17928),
    o = r(753704),
    l = r(280450),
    a = r(471505);
function u(t) {
    let { sku: e, location: r, isCardHovered: u = !0, trackButtonClick: s, ..._ } = t,
        d = (0, i.bG)([l.default], () => l.default.getId()),
        {
            isWishlisted: c,
            isBusy: T,
            isFirstTimeWishlister: b,
            handleToggle: N,
        } = (0, a.G)({ userId: d, sku: e, location: r, trackButtonClick: s });
    return (0, n.jsx)(o._, {
        skuId: e.id,
        productName: e.name,
        isWishlisted: c,
        isBusy: T,
        isFirstTimeWishlister: b,
        isVisuallyHidden: !u && !c,
        onClick: N,
        ..._,
    });
}
