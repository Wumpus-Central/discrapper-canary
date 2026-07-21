"use strict";
n.d(t, { Bv: () => a, SV: () => r });
let i = (0, n(945810).mj)({
    name: "2026-05-user-settings-redesign-4d",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function r(e) {
    return i.useConfig({ location: e }).enabled;
}
function a(e) {
    return i.getConfig({ location: e }).enabled;
}
