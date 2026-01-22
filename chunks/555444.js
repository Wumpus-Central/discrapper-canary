n.d(t, {
    H: () => s,
    y: () => o,
});
var r = n(600975),
    i = n(128319);
let a = (0, r.C)({
    kind: "user",
    id: "2025-05_push_to_talk_latching",
    label: "Push to Talk Latching",
    defaultConfig: {
        enableLatching: !1,
    },
    treatments: [
        {
            id: 1,
            label: "Enable latching feature",
            config: {
                enableLatching: !0,
            },
        },
    ],
});

function s(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { isInHoldout: r } = i.p.getCurrentConfig(
            {
                location: t,
            },
            {
                autoTrackExposure: n,
            },
        );
    return a.getCurrentConfig(
        {
            location: t,
        },
        {
            disable: r,
            autoTrackExposure: n,
        },
    );
}

function o(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { isInHoldout: r } = i.p.useExperiment(
            {
                location: t,
            },
            {
                autoTrackExposure: n,
            },
        );
    return a.useExperiment(
        {
            location: t,
        },
        {
            disable: r,
            autoTrackExposure: n,
        },
    );
}
