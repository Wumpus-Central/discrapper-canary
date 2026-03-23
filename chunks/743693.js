n.d(t, { _: () => o });
var a = n(627968),
    l = n(311907),
    s = n(139146),
    r = n(961350),
    i = n(471505);
function o(e) {
    let { sku: t, location: n, isCardHovered: o = !0, trackButtonClick: d, ...c } = e,
        u = (0, l.bG)([r.default], () => r.default.getId()),
        {
            isWishlisted: _,
            isBusy: m,
            isFirstTimeWishlister: h,
            handleToggle: p,
        } = (0, i.G)({ userId: u, sku: t, location: n, trackButtonClick: d });
    return o || _
        ? (0, a.jsx)(s._, {
              skuId: t.id,
              productName: t.name,
              isWishlisted: _,
              isBusy: m,
              isFirstTimeWishlister: h,
              onClick: p,
              ...c,
          })
        : null;
}
