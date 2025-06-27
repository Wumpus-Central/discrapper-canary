n.d(t, { _: () => o });
var r = n(818083),
    i = n(984134);
let a = (0, r.B)({
    kind: 'user',
    id: '2025-06_device_affinity',
    label: 'Device affinity experiment',
    defaultConfig: { shouldSortDevicesByFrecency: !1 },
    treatments: [
        {
            id: 1,
            label: 'Sort devices by frecency',
            config: { shouldSortDevicesByFrecency: !0 }
        }
    ]
});
function o(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { isInHoldout: r } = i.h.useExperiment({ location: t }, { autoTrackExposure: n });
    return a.useExperiment(
        { location: t },
        {
            disable: r,
            autoTrackExposure: n
        }
    );
}
