n.d(t, { So: () => i });
let l = (0, n(600975).C)({
    kind: "user",
    id: "2023-09_iar_user_reporting",
    label: "Safety Experience IAR User Reporting",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
});
function i(e) {
    return l.useExperiment({ location: e }, { autoTrackExposure: !0 }).enabled;
}
