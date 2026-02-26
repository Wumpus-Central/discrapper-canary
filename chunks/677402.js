"use strict";
n.d(t, { H: () => a, s: () => s });
var r = n(809733);
let i = (0, n(600975).C)({
        id: "2023-12_quests",
        kind: "user",
        label: "Quests",
        defaultConfig: { enabled: !1 },
        treatments: [
            { id: 0, label: "Control", config: { enabled: !1 } },
            { id: 1, label: "Quests enabled", config: { enabled: !0 } },
        ],
    }),
    s = (e) => {
        let { location: t } = e;
        return !(0, r.I)() && i.getCurrentConfig({ location: t }, { autoTrackExposure: !1 }).enabled;
    },
    a = (e) => {
        let { location: t } = e,
            n = i.useExperiment({ location: t }, { autoTrackExposure: !1 });
        return !(0, r.I)() && n.enabled;
    };
