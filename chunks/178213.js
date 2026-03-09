"use strict";
n.d(t, { AZ: () => s, GG: () => i });
let r = (0, n(945810).mj)({
    name: "2026-01-wishlist-sku-preview",
    kind: "user",
    defaultConfig: { isSkuPreviewEnabled: !1, isShowPricesEnabled: !1 },
    variations: {
        0: { isSkuPreviewEnabled: !1, isShowPricesEnabled: !1 },
        1: { isSkuPreviewEnabled: !0, isShowPricesEnabled: !0 },
        2: { isSkuPreviewEnabled: !0, isShowPricesEnabled: !1 },
    },
});
function i(e) {
    return r.useConfig({ location: e }).isSkuPreviewEnabled;
}
function s(e) {
    return r.useConfig({ location: e }).isShowPricesEnabled;
}
