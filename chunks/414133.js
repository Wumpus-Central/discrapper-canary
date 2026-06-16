"use strict";
n.d(t, { OS: () => s, ht: () => r });
let i = (0, n(945810).mj)({
    kind: "user",
    name: "2026-05-server-theme-user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function r(e) {
    return i.getConfig({ location: e }).enabled;
}
function s(e) {
    return i.useConfig({ location: e }).enabled;
}
