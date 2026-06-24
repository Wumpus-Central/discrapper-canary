"use strict";
n.d(t, { Bv: () => u, SB: () => a, SV: () => l, ri: () => s });
var i = n(945810);
let r = (0, i.mj)({
    name: "2026-04-user-settings-redesign-4c",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function s(e) {
    return r.useConfig({ location: e }).enabled;
}
function a(e) {
    return r.getConfig({ location: e }).enabled;
}
let o = (0, i.mj)({
    name: "2026-05-user-settings-redesign-4d",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function l(e) {
    return o.useConfig({ location: e }).enabled;
}
function u(e) {
    return o.getConfig({ location: e }).enabled;
}
