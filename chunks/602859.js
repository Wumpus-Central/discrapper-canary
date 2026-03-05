"use strict";
n.d(t, { s: () => l });
let a = (0, n(945810).mj)({
    name: "2026-03-game-profile-claim-game-cta",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function l(e) {
    return a.useConfig({ location: e }).enabled;
}
