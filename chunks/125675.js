n.d(t, {
    Mu: () => i,
    ar: () => a,
});
let r = (0, n(427164).le)({
    name: "2025-12-server-trending-notification",
    kind: "user",
    defaultConfig: { showSettingsToggle: !1 },
    variations: {
        1: { showSettingsToggle: !0 },
        2: { showSettingsToggle: !0 },
    },
});
function i(e) {
    return r.useConfig({ location: e });
}
function a(e) {
    return r.getConfig({ location: e }).showSettingsToggle;
}
