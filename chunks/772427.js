"use strict";
n.d(t, { QW: () => r, rV: () => s });
let i = (0, n(945810).mj)({
    name: "2026-04-profile-frame-gifting",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function r(e) {
    return i.getConfig({ location: e }).enabled;
}
function s(e) {
    return i.useConfig({ location: e }).enabled;
}
