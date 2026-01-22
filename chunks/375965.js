n.d(t, {
    j: () => i,
});
let r = (0, n(250105).Ay)({
    name: "2025-12-boosting-marketing-page-refresh",
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

function i(e) {
    return r.useConfig({
        location: e,
    }).enabled;
}
