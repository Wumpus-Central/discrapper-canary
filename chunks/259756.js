n.d(t, { Xi: () => i });
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2024-02_family_center_vc_join',
    label: 'Family Center VC Join',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable VC Join in Family Center',
            config: { enabled: !0 }
        }
    ]
});
function i(e) {
    let { location: t, autoTrackExposure: n = !1 } = e,
        { enabled: i } = r.useExperiment({ location: t }, { autoTrackExposure: n });
    return i;
}
