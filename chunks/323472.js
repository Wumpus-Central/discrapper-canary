"use strict";
n.d(t, { A: () => s, H: () => r });
let i = (0, n(240921).Ay)({
    name: "2026-05-expiring-boosts",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function r(e) {
    return i.useConfig({ location: e }).enabled;
}
let s = i;
