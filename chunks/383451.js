n.d(t, {
    H: () => s,
    f: () => o,
});
var r = n(818083),
    i = n(984134);
let a = (0, r.B)({
    kind: "user",
    id: "2025-05_push_to_talk_latching",
    label: "Push to Talk Latching",
    defaultConfig: { enableLatching: !1 },
    treatments: [
        {
            id: 1,
            label: "Enable latching feature",
            config: { enableLatching: !0 },
        },
    ],
});
function o(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { isInHoldout: r } = i.Y.getCurrentConfig({ location: t }, { autoTrackExposure: n });
    return a.getCurrentConfig(
        { location: t },
        {
            disable: r,
            autoTrackExposure: n,
        },
    );
}
function s(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { isInHoldout: r } = i.Y.useExperiment({ location: t }, { autoTrackExposure: n });
    return a.useExperiment(
        { location: t },
        {
            disable: r,
            autoTrackExposure: n,
        },
    );
}
