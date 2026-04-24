"use strict";
n.d(t, { _: () => c });
var a = n(627968),
    i = n(17928),
    l = n(139146),
    r = n(495544),
    s = n(471505);
function c(e) {
    let { sku: t, location: n, isCardHovered: c = !0, trackButtonClick: o, ...d } = e,
        u = (0, i.bG)([r.default], () => r.default.getId()),
        {
            isWishlisted: m,
            isBusy: f,
            isFirstTimeWishlister: h,
            handleToggle: _,
        } = (0, s.G)({ userId: u, sku: t, location: n, trackButtonClick: o });
    return c || m
        ? (0, a.jsx)(l._, {
              skuId: t.id,
              productName: t.name,
              isWishlisted: m,
              isBusy: f,
              isFirstTimeWishlister: h,
              onClick: _,
              ...d,
          })
        : null;
}
