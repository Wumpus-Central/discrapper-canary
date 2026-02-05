"use strict";
n.d(t, { G: () => i });
let r = (0, n(945810).mj)({
    name: "2026-01-wishlist-sku-preview",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function i(e) {
    return r.useConfig({ location: e }).enabled;
}
