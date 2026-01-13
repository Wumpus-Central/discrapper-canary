n.d(t, { R: () => i });
let r = (0, n(427164).le)({
    name: "2026-01-social-layer-storefront-recommendations-on-profile-modal",
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
