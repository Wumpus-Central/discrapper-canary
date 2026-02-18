"use strict";
i.d(t, { T: () => s });
let n = (0, i(945810).mj)({
    name: "2026-01-wishlist-new-recommendations",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function s(e) {
    return n.useConfig({ location: e }).enabled;
}
