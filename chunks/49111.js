n.d(t, {
    LK: () => a,
    _9: () => i,
});
let r = (0, n(945810).mj)({
    name: "2025-12-server-trending-notification",
    kind: "user",
    defaultConfig: {
        showSettingsToggle: !1,
    },
    variations: {
        1: {
            showSettingsToggle: !0,
        },
        2: {
            showSettingsToggle: !0,
        },
    },
});

function i(e) {
    return r.useConfig({
        location: e,
    });
}

function a(e) {
    return r.getConfig({
        location: e,
    }).showSettingsToggle;
}
