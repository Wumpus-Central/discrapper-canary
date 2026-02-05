"use strict";
n.d(t, { T: () => i });
let r = (0, n(945810).mj)({
    name: "2026-01-social-layer-storefront-sku-purchase-eligibility-user-experiment",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function i(e) {
    let { location: t } = e;
    return r.getConfig({ location: t }).enabled;
}
