i.d(e, { _: () => r });
var n = i(627968),
    s = i(17928),
    _ = i(139146),
    a = i(495544),
    u = i(471505);
function r(t) {
    let { sku: e, location: i, isCardHovered: r = !0, trackButtonClick: o, ...T } = t,
        l = (0, s.bG)([a.default], () => a.default.getId()),
        {
            isWishlisted: d,
            isBusy: c,
            isFirstTimeWishlister: b,
            handleToggle: O,
        } = (0, u.G)({ userId: l, sku: e, location: i, trackButtonClick: o });
    return (0, n.jsx)(_._, {
        skuId: e.id,
        productName: e.name,
        isWishlisted: d,
        isBusy: c,
        isFirstTimeWishlister: b,
        isVisuallyHidden: !r && !d,
        onClick: O,
        ...T,
    });
}
