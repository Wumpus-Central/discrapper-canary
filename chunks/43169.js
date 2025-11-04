n.d(t, {
    F4: () => s,
    jX: () => o,
    kF: () => a,
});
var r = n(818083),
    i = n(987338);
let a = (0, r.B)({
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
function o(e) {
    let { inHoldout: t } = a.useExperiment({ location: e }, { autoTrackExposure: !1 });
    return t;
}
function s(e) {
    let { inHoldout: t } = a.getCurrentConfig({ location: e }, { autoTrackExposure: !1 });
    return t;
}
