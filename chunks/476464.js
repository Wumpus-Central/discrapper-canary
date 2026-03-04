"use strict";
n.d(t, { _: () => i, z: () => r });
let r = (0, n(945810).mj)({
    name: "2025-12-game-profiles-v2",
    kind: "user",
    defaultConfig: { enabled: !1, canToggle: !1 },
    variations: { 1: { enabled: !0, canToggle: !1 }, 2: { enabled: !0, canToggle: !0 } },
});
function i(e) {
    return r.useConfig({ location: e }).enabled;
}
