n.d(e, { _: () => u });
var r = n(477900),
    i = n(17928),
    o = n(753704),
    s = n(280450),
    a = n(471505);
function u(t) {
    let { sku: e, location: n, isCardHovered: u = !0, trackButtonClick: l, ..._ } = t,
        d = (0, i.bG)([s.default], () => s.default.getId()),
        {
            isWishlisted: T,
            isBusy: c,
            isFirstTimeWishlister: O,
            handleToggle: b,
        } = (0, a.G)({ userId: d, sku: e, location: n, trackButtonClick: l });
    return (0, r.jsx)(o._, {
        skuId: e.id,
        productName: e.name,
        isWishlisted: T,
        isBusy: c,
        isFirstTimeWishlister: O,
        isVisuallyHidden: !u && !T,
        onClick: b,
        ..._,
    });
}
