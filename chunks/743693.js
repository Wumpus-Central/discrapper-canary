n.d(t, { _: () => _ });
var i = n(627968),
    a = n(17928),
    r = n(139146),
    s = n(495544),
    u = n(471505);
function _(e) {
    let { sku: t, location: n, isCardHovered: _ = !0, trackButtonClick: l, ...o } = e,
        d = (0, a.bG)([s.default], () => s.default.getId()),
        {
            isWishlisted: T,
            isBusy: b,
            isFirstTimeWishlister: c,
            handleToggle: O,
        } = (0, u.G)({ userId: d, sku: t, location: n, trackButtonClick: l });
    return (0, i.jsx)(r._, {
        skuId: t.id,
        productName: t.name,
        isWishlisted: T,
        isBusy: b,
        isFirstTimeWishlister: c,
        isVisuallyHidden: !_ && !T,
        onClick: O,
        ...o,
    });
}
