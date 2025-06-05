n.d(t, { H: () => l });
var i = n(818083),
    a = n(984134);
let o = (0, i.B)({
    kind: 'user',
    id: '2025-05_per_device_detection_modal',
    label: 'Per-device detection modal experiment',
    defaultConfig: { optOutPerDevice: !1 },
    treatments: [
        {
            id: 1,
            label: 'Opt-out of the detection modal on a per-device basis',
            config: { optOutPerDevice: !0 }
        }
    ]
});
function l(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { isInHoldout: i } = a.h.useExperiment({ location: t }, { autoTrackExposure: n });
    return o.useExperiment(
        { location: t },
        {
            disable: i,
            autoTrackExposure: n
        }
    );
}
