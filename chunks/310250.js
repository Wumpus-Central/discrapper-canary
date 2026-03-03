"use strict";
n.d(t, { T: () => s });
let i = (0, n(945810).mj)({
    name: "2026-01-wishlist-new-recommendations",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function s(e) {
    return i.useConfig({ location: e }).enabled;
}
