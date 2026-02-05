"use strict";
n.d(t, { H: () => a, s: () => i });
let r = (0, n(600975).C)({
        id: "2023-12_quests",
        kind: "user",
        label: "Quests",
        defaultConfig: { enabled: !1 },
        treatments: [
            { id: 0, label: "Control", config: { enabled: !1 } },
            { id: 1, label: "Quests enabled", config: { enabled: !0 } },
        ],
    }),
    i = (e) => {
        let { location: t } = e;
        return r.getCurrentConfig({ location: t }, { autoTrackExposure: !1 }).enabled;
    },
    a = (e) => {
        let { location: t } = e;
        return r.useExperiment({ location: t }, { autoTrackExposure: !1 }).enabled;
    };
