n.d(t, { L: () => s });
let i = (0, n(600975).C)({
    kind: "user",
    id: "2025-03_toggle_camera_keybind",
    label: "Toggle Camera Keybind",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Keybind is enabled", config: { enabled: !0 } }],
});
function s() {
    let { enabled: e } = i.getCurrentConfig({ location: "keybinds" }, { autoTrackExposure: !1 });
    return e;
}
