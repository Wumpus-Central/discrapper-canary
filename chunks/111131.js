n.d(t, { R: () => i });
let r = (0, n(818083).B)({
        id: "2025-04_quest_block_on_enrollment",
        kind: "user",
        label: "Video Quest Block On Enrollment",
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 0,
                label: "Control",
                config: { enabled: !1 },
            },
            {
                id: 1,
                label: "Enabled",
                config: { enabled: !0 },
            },
        ],
    }),
    i = (e) => r.getCurrentConfig({ location: e }, { autoTrackExposure: !0 }).enabled;
