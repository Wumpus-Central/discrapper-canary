n.d(t, {
    Bf: () => i,
    Oi: () => a,
});
let r = (0, n(945810).mj)({
    kind: "user",
    name: "2026-01-friend-is-online-notif-rate-limits",
    defaultConfig: { showSettingsToggle: !1 },
    variations: {
        1: { showSettingsToggle: !0 },
        2: { showSettingsToggle: !0 },
        3: { showSettingsToggle: !0 },
    },
});
function i(e) {
    return r.useConfig({ location: e });
}
function a(e) {
    return r.getConfig({ location: e }).showSettingsToggle;
}
