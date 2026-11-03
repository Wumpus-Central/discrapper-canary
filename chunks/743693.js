n.d(e, { _: () => l });
var r = n(477900),
    o = n(17928),
    i = n(753704),
    s = n(280450),
    a = n(471505);
function l(t) {
    let { sku: e, location: n, isCardHovered: l = !0, trackButtonClick: u, ..._ } = t,
        d = (0, o.bG)([s.default], () => s.default.getId()),
        {
            isWishlisted: c,
            isBusy: T,
            isFirstTimeWishlister: b,
            handleToggle: O,
        } = (0, a.G)({ userId: d, sku: e, location: n, trackButtonClick: u });
    return (0, r.jsx)(i._, {
        skuId: e.id,
        productName: e.name,
        isWishlisted: c,
        isBusy: T,
        isFirstTimeWishlister: b,
        isVisuallyHidden: !l && !c,
        onClick: O,
        ..._,
    });
}
