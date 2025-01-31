n.d(t, { t: () => l });
let i = (0, n(818083).B)({
    kind: 'user',
    id: '2024-09_likely_atoed_connections',
    label: 'Likely ATO Warning',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable Likely ATO Warning',
            config: { enabled: !0 }
        }
    ]
});
function l(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { enabled: l } = i.useExperiment({ location: t }, { autoTrackExposure: n });
    return l;
}
