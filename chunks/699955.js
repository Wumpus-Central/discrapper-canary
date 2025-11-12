n.d(t, {
    c: () => i,
    n: () => a,
});
let r = (0, n(427164).le)({
    name: "2025-12-social-layer-storefront-user-experiment",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: {
        0: { enabled: !1 },
        1: { enabled: !0 },
    },
});
function i(e) {
    let { location: t } = e;
    return r.useConfig({ location: t }).enabled;
}
function a(e) {
    let { location: t } = e;
    return r.getConfig({ location: t }).enabled;
}
