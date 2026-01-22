n.d(t, { h: () => i });
let r = (0, n(600975).C)({
    kind: "user",
    id: "2025-03_custom_status_prompts",
    label: "Custom Status Prompts Experiment",
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: "Enable custom status prompts",
            config: { enabled: !0 },
        },
    ],
});
function i(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { enabled: i } = r.useExperiment({ location: t }, { autoTrackExposure: n });
    return i;
}
