n.d(t, { q: () => r });
let i = (0, n(600975).C)({
    kind: "user",
    id: "2023-04_null_experiment",
    label: "Null Experiment",
    defaultConfig: { inUse: !1 },
    treatments: [{ id: 1, label: "On", config: { inUse: !0 } }],
});
function r() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return i.useExperiment({ location: "a9e81b_1" }, { autoTrackExposure: e });
}
