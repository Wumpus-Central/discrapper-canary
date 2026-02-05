"use strict";
n.d(t, { L0: () => s, MH: () => o, s2: () => a });
var r = n(600975),
    i = n(688151);
let a = (0, r.C)({
    kind: "user",
    id: "2024-06_game_profile_experiment",
    label: "Enables the Game Profile",
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: i.$G.CONNECTION_OPEN,
    treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
});
function s(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        { enabled: n } = a.getCurrentConfig({ location: e }, { autoTrackExposure: t });
    return n;
}
function o(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        { enabled: n } = a.useExperiment({ location: e }, { autoTrackExposure: t });
    return n;
}
