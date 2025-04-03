n.d(t, {
    L: () => a,
    d: () => l
});
var r = n(818083),
    i = n(987338);
let l = (0, r.B)({
    kind: 'user',
    id: '2025-03_desktop_deeplinks',
    label: 'Desktop Deeplinks',
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'On',
            config: { enabled: !0 }
        }
    ]
});
function a() {
    let { enabled: e } = l.useExperiment({ location: 'DesktopDeeplinkExperiment' }, { autoTrackExposure: !1 });
    return e;
}
