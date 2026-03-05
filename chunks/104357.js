n.d(t, { T: () => r });
let i = (0, n(945810).mj)({
    name: "2025-12-social-layer-storefront-rtc-entrypoint-user-experiment",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function r(e) {
    let { location: t } = e;
    return i.useConfig({ location: t }).enabled;
}
