"use strict";
n.d(t, { A: () => i });
let r = (0, n(945810).mj)({
    name: "2026-01-wishlist-sku-preview",
    kind: "user",
    defaultConfig: { isShowPricesEnabled: !1 },
    variations: { 0: { isShowPricesEnabled: !1 }, 1: { isShowPricesEnabled: !0 }, 2: { isShowPricesEnabled: !1 } },
});
function i(e) {
    return r.useConfig({ location: e }).isShowPricesEnabled;
}
