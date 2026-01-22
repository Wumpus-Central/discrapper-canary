n.d(t, {
    X: () => l,
});
let r = (0, n(945810).mj)({
    name: "2026-01-social-layer-storefront-recommendations-on-profile-modal",
    kind: "user",
    defaultConfig: {
        enabled: !1,
    },
    variations: {
        0: {
            enabled: !1,
        },
        1: {
            enabled: !0,
        },
    },
});

function l(e) {
    let { location: t } = e;
    return r.useConfig({
        location: t,
    }).enabled;
}
