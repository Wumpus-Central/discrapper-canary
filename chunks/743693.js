n.d(e, { _: () => u });
var i = n(477900),
    r = n(17928),
    o = n(753704),
    _ = n(280450),
    s = n(471505);
function u(t) {
    let { sku: e, location: n, isCardHovered: u = !0, trackButtonClick: a, ...l } = t,
        d = (0, r.bG)([_.default], () => _.default.getId()),
        {
            isWishlisted: T,
            isBusy: c,
            isFirstTimeWishlister: b,
            handleToggle: O,
        } = (0, s.G)({ userId: d, sku: e, location: n, trackButtonClick: a });
    return (0, i.jsx)(o._, {
        skuId: e.id,
        productName: e.name,
        isWishlisted: T,
        isBusy: c,
        isFirstTimeWishlister: b,
        isVisuallyHidden: !u && !T,
        onClick: O,
        ...l,
    });
}
