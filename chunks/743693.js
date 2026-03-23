"use strict";
n.d(t, { _: () => l });
var r = n(627968),
    i = n(311907),
    s = n(139146),
    a = n(961350),
    o = n(471505);
function l(e) {
    let {
            sku: t,
            location: n,
            isCardHovered: l = !0,
            showIfWishlisted: u = !0,
            trackButtonClick: c,
            onError: d,
            ..._
        } = e,
        f = (0, i.bG)([a.default], () => a.default.getId()),
        {
            isWishlisted: p,
            isBusy: h,
            isFirstTimeWishlister: m,
            handleToggle: E,
        } = (0, o.G)({ userId: f, sku: t, location: n, trackButtonClick: c, onError: d });
    return l || (p && u)
        ? (0, r.jsx)(s._, {
              skuId: t.id,
              productName: t.name,
              isWishlisted: p,
              isBusy: h,
              isFirstTimeWishlister: m,
              onClick: E,
              ..._,
          })
        : null;
}
