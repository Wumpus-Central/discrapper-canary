n.d(t, { T: () => a });
var r = n(945810),
    i = n(916023);
let l = (0, r.mj)({
    name: "2025-12-social-layer-storefront-rtc-entrypoint-user-experiment",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: {
        0: { enabled: !1 },
        1: { enabled: !0 },
    },
});
function a(e) {
    let { location: t } = e,
        n = (0, i.kt)({ location: t }),
        r = l.useConfig({ location: t }).enabled;
    return n && r;
}
