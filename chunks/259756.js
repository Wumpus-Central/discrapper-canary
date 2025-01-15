n.d(t, {
    Xi: function () {
        return r;
    }
});
let i = (0, n(818083).B)({
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
function r(e) {
    let { location: t, autoTrackExposure: n = !1 } = e,
        { enabled: r } = i.useExperiment({ location: t }, { autoTrackExposure: n });
    return r;
}
