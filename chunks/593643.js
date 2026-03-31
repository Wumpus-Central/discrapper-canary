"use strict";
n.d(t, { D8: () => i });
let l = (0, n(600975).C)({
    id: "2026-03_voice_badge",
    kind: "guild",
    label: "Display Voice Channel Badge",
    defaultConfig: { enabled: !1 },
    treatments: [
        { id: 0, label: "Control", config: { enabled: !1 } },
        { id: 1, label: "Show voice badges", config: { enabled: !0 } },
    ],
});
function i(e) {
    let { guildId: t, location: n } = e;
    return l.useExperiment({ guildId: t, location: n }, { autoTrackExposure: !0 });
}
