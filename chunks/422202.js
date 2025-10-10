n.d(t, {
    P: () => o,
    _: () => a,
});
var r = n(818083),
    i = n(751823);
let l = (0, r.B)({
    kind: "user",
    id: "2025-08_device_changed_notification",
    label: "Device-changed notification experiment",
    defaultConfig: { shouldShowDeviceChangedNotifications: !1 },
    treatments: [
        {
            id: 1,
            label: "Show device-changed notifications",
            config: { shouldShowDeviceChangedNotifications: !0 },
        },
    ],
});
function a(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { isInHoldout: r } = i.L.getCurrentConfig({ location: t }, { autoTrackExposure: n });
    return l.getCurrentConfig(
        { location: t },
        {
            disable: r,
            autoTrackExposure: n,
        },
    );
}
function o(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { isInHoldout: r } = i.L.useExperiment({ location: t }, { autoTrackExposure: n });
    return l.useExperiment(
        { location: t },
        {
            disable: r,
            autoTrackExposure: n,
        },
    );
}
