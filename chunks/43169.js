n.d(t, {
    jX: () => a,
    kF: () => l,
});
var r = n(818083),
    i = n(987338);
let l = (0, r.B)({
    kind: "user",
    id: "2025-08_cpfc_holdout",
    label: "CPFC Holdout",
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    defaultConfig: { inHoldout: !1 },
    treatments: [
        {
            id: 1,
            label: "In Holdout",
            config: { inHoldout: !0 },
        },
    ],
});
function a(e) {
    let { inHoldout: t } = l.useExperiment({ location: e }, { autoTrackExposure: !1 });
    return t;
}
