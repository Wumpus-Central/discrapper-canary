l.d(t, { _: () => o });
var n = l(627968),
    a = l(311907),
    i = l(139146),
    r = l(961350),
    s = l(471505);
function o(e) {
    let { sku: t, location: l, isCardHovered: o = !0, trackButtonClick: d, ...c } = e,
        u = (0, a.bG)([r.default], () => r.default.getId()),
        {
            isWishlisted: _,
            isBusy: m,
            isFirstTimeWishlister: h,
            handleToggle: p,
        } = (0, s.G)({ userId: u, sku: t, location: l, trackButtonClick: d });
    return o || _
        ? (0, n.jsx)(i._, {
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
