n.d(t, { P3: () => r });
let i = (0, n(600975).C)({
    id: "2025-05_safety_flows",
    label: "Safety Flows",
    kind: "user",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
});
function r(e) {
    let { location: t } = e;
    return i.getCurrentConfig({ location: t }, { autoTrackExposure: !1 }).enabled;
}
