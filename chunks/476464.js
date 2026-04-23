n.d(t, { _: () => a, y: () => i });
let l = (0, n(945810).mj)({
    name: "2025-12-game-profiles-v2",
    kind: "user",
    defaultConfig: { enabled: !1, storeLinksEnabled: !1 },
    variations: { 1: { enabled: !0, storeLinksEnabled: !1 }, 2: { enabled: !0, storeLinksEnabled: !0 } },
});
function a(e) {
    return l.useConfig({ location: e }).enabled;
}
function i(e) {
    return l.useConfig({ location: e }).storeLinksEnabled;
}
