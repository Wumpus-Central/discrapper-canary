n.d(t, {
    X0: () => s,
    uH: () => o,
    zv: () => a
});
var r = n(818083),
    i = n(987338);
let a = (0, r.B)({
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
function o(e) {
    let { location: t } = e;
    return a.getCurrentConfig({ location: t }, { autoTrackExposure: !1 }).enabled;
}
function s(e) {
    let { location: t } = e;
    return a.useExperiment({ location: t }, { autoTrackExposure: !1 }).enabled;
}
