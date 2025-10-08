n.d(t, {
    PO: () => s,
    vE: () => o,
    yI: () => a,
});
var r = n(818083),
    i = n(987338);
let a = (0, r.B)({
    kind: "user",
    id: "2025-07_family_center_v2",
    label: "Family Center V2",
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: "Enabled",
            config: { enabled: !0 },
        },
    ],
});
function o(e) {
    return a.getCurrentConfig({ location: e }, { autoTrackExposure: !1 }).enabled;
}
function s(e) {
    return a.useExperiment({ location: e }, { autoTrackExposure: !1 }).enabled;
}
