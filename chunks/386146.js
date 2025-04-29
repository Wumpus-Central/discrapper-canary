n.d(t, {
    H3: () => l,
    JN: () => a,
    tc: () => s
});
var r = n(818083),
    i = n(984134);
let o = (0, r.B)({
    kind: 'user',
    id: '2025-02_av_error_codes',
    label: 'AV error new UI',
    defaultConfig: { avErrorUIEnabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Show new AV error UI',
            config: { avErrorUIEnabled: !0 }
        }
    ]
});
function a(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { isInHoldout: r } = i.h.useExperiment({ location: t }, { autoTrackExposure: n });
    return o.useExperiment(
        { location: t },
        {
            disable: r,
            autoTrackExposure: n
        }
    );
}
function s(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { isInHoldout: r } = i.h.getCurrentConfig({ location: t }, { autoTrackExposure: n });
    return o.getCurrentConfig(
        { location: t },
        {
            disable: r,
            autoTrackExposure: n
        }
    ).avErrorUIEnabled;
}
function l(e) {
    o.trackExposure({ location: e });
}
