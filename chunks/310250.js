n.d(t, { T: () => r });
let s = (0, n(945810).mj)({
    name: "2026-01-wishlist-new-recommendations",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function r(e) {
    return s.useConfig({ location: e }).enabled;
}
