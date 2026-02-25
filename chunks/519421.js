"use strict";
n.d(t, { A: () => a });
var r = n(945810),
    i = n(178213);
let s = (0, r.mj)({
    name: "2026-02-wishlist-show-prices",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function a(e) {
    let t = (0, i.G)(e),
        n = s.useConfig({ location: e }).enabled;
    return t && n;
}
