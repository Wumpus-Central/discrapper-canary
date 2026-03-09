"use strict";
n.d(t, { D8: () => a, _U: () => s });
var l = n(600975),
    i = n(688151);
let s = (0, l.C)({
    id: "2026-03_voice_badge",
    kind: "guild",
    label: "Display Voice Channel Badge",
    commonTriggerPoint: i.$G.CONNECTION_OPEN,
    defaultConfig: { enabled: !1 },
    treatments: [
        { id: 0, label: "Control", config: { enabled: !1 } },
        { id: 1, label: "Show voice badges", config: { enabled: !0 } },
    ],
});
function a(e) {
    let { guildId: t, location: n } = e;
    return s.useExperiment({ guildId: t, location: n }, { autoTrackExposure: !0 });
}
