r.d(t, { _: () => u });
var i = r(477900),
    l = r(17928),
    a = r(139146),
    n = r(280450),
    s = r(471505);
function u(e) {
    let { sku: t, location: r, isCardHovered: u = !0, trackButtonClick: d, ...o } = e,
        c = (0, l.bG)([n.default], () => n.default.getId()),
        {
            isWishlisted: m,
            isBusy: f,
            isFirstTimeWishlister: v,
            handleToggle: x,
        } = (0, s.G)({ userId: c, sku: t, location: r, trackButtonClick: d });
    return (0, i.jsx)(a._, {
        skuId: t.id,
        productName: t.name,
        isWishlisted: m,
        isBusy: f,
        isFirstTimeWishlister: v,
        isVisuallyHidden: !u && !m,
        onClick: x,
        ...o,
    });
}
