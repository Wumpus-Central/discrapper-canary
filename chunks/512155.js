n.d(t, { Tc: () => l, tz: () => r });
var i = n(600975);
let r = (0, i.C)({
        kind: "user",
        id: "2023-10_triggerdebuggingaa",
        label: "Trigger Debugging User AA Experiment",
        defaultConfig: { inUse: !1 },
        treatments: [{ id: 1, label: "On", config: { inUse: !0 } }],
    }),
    a = (0, i.C)({
        kind: "guild",
        id: "2023-10_guildaa",
        label: "Trigger Debugging Guild AA Experiment",
        defaultConfig: { inUse: !1 },
        treatments: [{ id: 1, label: "On", config: { inUse: !0 } }],
    }),
    l = (e) => {
        let t = "guild trigger debug",
            n = "user trigger debug";
        a.useExperiment({ location: t, guildId: e }, { autoTrackExposure: !1 }),
            a.trackExposure({ location: t, guildId: e }),
            r.useExperiment({ location: n }, { autoTrackExposure: !1 }),
            r.trackExposure({ location: n });
    };
