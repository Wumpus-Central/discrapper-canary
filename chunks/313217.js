n.d(t, { F: () => r, s: () => a });
let i = (0, n(945810).mj)({
    name: "2026-10-collectibles-storefront-pricing-integration",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function r(e) {
    return i.getConfig({ location: e }).enabled;
}
function a(e) {
    return i.useConfig({ location: e }).enabled;
}
