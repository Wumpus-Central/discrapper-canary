n.d(t, {
    L: () => i,
});
let r = (0, n(600975).C)({
    kind: "user",
    id: "2025-03_toggle_camera_keybind",
    label: "Toggle Camera Keybind",
    defaultConfig: {
        enabled: !1,
    },
    treatments: [
        {
            id: 1,
            label: "Keybind is enabled",
            config: {
                enabled: !0,
            },
        },
    ],
});

function i() {
    let { enabled: e } = r.getCurrentConfig(
        {
            location: "keybinds",
        },
        {
            autoTrackExposure: !1,
        },
    );
    return e;
}
