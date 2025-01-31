n.d(t, { t: () => l });
let i = (0, n(818083).B)({
    kind: 'user',
    id: '2023-04_null_experiment',
    label: 'Null Experiment',
    defaultConfig: { inUse: !1 },
    treatments: [
        {
            id: 1,
            label: 'On',
            config: { inUse: !0 }
        }
    ]
});
function l() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return i.useExperiment({ location: 'a9e81b_1' }, { autoTrackExposure: e });
}
