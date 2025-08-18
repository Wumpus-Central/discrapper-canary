n.d(t, {
    PO: () => a,
    yI: () => s,
});
var i = n(818083),
    r = n(987338);
let s = (0, i.B)({
    kind: "user",
    id: "2025-07_family_center_v2",
    label: "Family Center V2",
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: r.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: "Enabled",
            config: { enabled: !0 },
        },
    ],
});
function a(e) {
    return s.useExperiment({ location: e }, { autoTrackExposure: !1 }).enabled;
}
