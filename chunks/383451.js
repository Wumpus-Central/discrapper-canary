n.d(t, {
    H: () => a,
    f: () => l
});
var i = n(818083),
    r = n(984134);
let s = (0, i.B)({
    kind: 'user',
    id: '2025-05_push_to_talk_latching',
    label: 'Push to Talk Latching',
    defaultConfig: { enableLatching: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable latching feature',
            config: { enableLatching: !0 }
        }
    ]
});
function l(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { isInHoldout: i } = r.Y.getCurrentConfig({ location: t }, { autoTrackExposure: n });
    return s.getCurrentConfig(
        { location: t },
        {
            disable: i,
            autoTrackExposure: n
        }
    );
}
function a(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { isInHoldout: i } = r.Y.useExperiment({ location: t }, { autoTrackExposure: n });
    return s.useExperiment(
        { location: t },
        {
            disable: i,
            autoTrackExposure: n
        }
    );
}
