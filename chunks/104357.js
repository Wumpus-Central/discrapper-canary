n.d(t, { T: () => l });
var i = n(945810),
    r = n(916023);
let a = (0, i.mj)({
    name: "2025-12-social-layer-storefront-rtc-entrypoint-user-experiment",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function l(e) {
    let { location: t } = e,
        n = (0, r.kt)({ location: t }),
        i = a.useConfig({ location: t }).enabled;
    return n && i;
}
