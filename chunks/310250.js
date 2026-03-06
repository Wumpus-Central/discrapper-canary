"use strict";
i.d(e, { T: () => s });
let n = (0, i(945810).mj)({
    name: "2026-01-wishlist-new-recommendations",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function s(t) {
    return n.useConfig({ location: t }).enabled;
}
