n.d(t, {
    J_: () => a,
    R6: () => i,
});
var r = n(818083);
let i = (0, r.B)({
        kind: "user",
        id: "2023-10_triggerdebuggingaa",
        label: "Trigger Debugging User AA Experiment",
        defaultConfig: { inUse: !1 },
        treatments: [
            {
                id: 1,
                label: "On",
                config: { inUse: !0 },
            },
        ],
    }),
    l = (0, r.B)({
        kind: "guild",
        id: "2023-10_guildaa",
        label: "Trigger Debugging Guild AA Experiment",
        defaultConfig: { inUse: !1 },
        treatments: [
            {
                id: 1,
                label: "On",
                config: { inUse: !0 },
            },
        ],
    }),
    a = (e) => {
        let t = "guild trigger debug",
            n = "user trigger debug";
        l.useExperiment(
            {
                location: t,
                guildId: e,
            },
            { autoTrackExposure: !1 },
        ),
            l.trackExposure({
                location: t,
                guildId: e,
            }),
            i.useExperiment({ location: n }, { autoTrackExposure: !1 }),
            i.trackExposure({ location: n });
    };
