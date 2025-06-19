n.d(t, { _: () => a });
var r = n(818083),
    i = n(984134);
let l = (0, r.B)({
    kind: 'user',
    id: '2025-06_device_affinity',
    label: 'Device affinity experiment',
    defaultConfig: { sortDevicesByFrecency: !1 },
    treatments: [
        {
            id: 1,
            label: 'Sort devices by frecency',
            config: { sortDevicesByFrecency: !0 }
        }
    ]
});
function a(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { isInHoldout: r } = i.h.useExperiment({ location: t }, { autoTrackExposure: n });
    return l.useExperiment(
        { location: t },
        {
            disable: r,
            autoTrackExposure: n
        }
    );
}
