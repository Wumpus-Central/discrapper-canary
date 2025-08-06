n.d(t, { _: () => a });
var r = n(818083),
    i = n(984134);
let o = (0, r.B)({
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
function a(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { isInHoldout: r } = i.Y.useExperiment({ location: t }, { autoTrackExposure: n });
    return o.useExperiment(
        { location: t },
        {
            disable: r,
            autoTrackExposure: n
        }
    );
}
