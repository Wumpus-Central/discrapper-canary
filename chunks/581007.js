"use strict";
n.d(t, { Dm: () => a, aC: () => s, kY: () => o });
var r = n(600975),
    i = n(688151);
let s = (0, r.C)({
    kind: "guild",
    id: "2026-02_hangout_window",
    label: "Hangout Window",
    defaultConfig: { enableHangoutWindow: !1 },
    commonTriggerPoint: i.$G.VOICE_CALL,
    treatments: [{ id: 1, label: "Enable Hangout Window", config: { enableHangoutWindow: !0 } }],
});
function a(e) {
    let { guildId: t, location: n } = e;
    return s.useExperiment({ guildId: t, location: n }, { autoTrackExposure: !0 });
}
function o(e) {
    let { guildId: t, location: n } = e;
    return s.getCurrentConfig({ guildId: t, location: n }, { autoTrackExposure: !0 });
}
