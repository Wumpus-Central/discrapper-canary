n.d(t, {
    X0: () => s,
    uH: () => a,
    zv: () => o
});
var r = n(818083),
    i = n(987338);
let o = (0, r.B)({
    id: '2024-11_soundmoji_rendering',
    label: 'Render soundmojis',
    kind: 'user',
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: 'Enabled',
            config: { enabled: !0 }
        }
    ]
});
function a(e) {
    let { location: t } = e;
    return o.getCurrentConfig({ location: t }, { autoTrackExposure: !1 }).enabled;
}
function s(e) {
    let { location: t } = e;
    return o.useExperiment({ location: t }, { autoTrackExposure: !1 }).enabled;
}
