n.d(t, { j: () => r });
let i = (0, n(818083).B)({
    kind: 'user',
    id: '2023-09_trigger_debugging_aa',
    label: 'trigger debugging aa mobile',
    defaultConfig: { inUse: !1 },
    treatments: [
        {
            id: 1,
            label: 'On',
            config: { inUse: !0 }
        }
    ]
});
function r(e) {
    let { autoTrackExposure: t = !1, location: n } = e;
    return i.useExperiment({ location: n }, { autoTrackExposure: t });
}
