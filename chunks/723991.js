n.d(t, { q: () => i });
let r = (0, n(600975).C)({
    kind: "user",
    id: "2025-07_camera_toggle_sound",
    label: "Camera Toggle Sound",
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 0,
            label: "Sound does not play when camera is toggled",
            config: { enabled: !1 },
        },
        {
            id: 1,
            label: "Sound plays when camera is toggled",
            config: { enabled: !0 },
        },
    ],
});
function i() {
    let { enabled: e } = r.getCurrentConfig({ location: "soundpacks" }, { autoTrackExposure: !0 });
    return e;
}
