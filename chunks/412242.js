n.d(t, { n: () => i });
let r = (0, n(600975).C)({
        kind: "user",
        id: "2025-03_activity_status_descriptive_text",
        label: "Activity Status Descriptive Text",
        defaultConfig: { descriptiveTextEnabled: !1 },
        treatments: [
            {
                id: 1,
                label: "Descriptive text enabled",
                config: { descriptiveTextEnabled: !0 },
            },
        ],
    }),
    i = (e) => {
        let { location: t, autoTrackExposure: n = !0 } = e;
        return r.useExperiment({ location: t }, { autoTrackExposure: n });
    };
