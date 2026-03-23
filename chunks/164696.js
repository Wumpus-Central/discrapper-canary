"use strict";
n.d(t, { Ay: () => o, Zb: () => a });
var r = n(600975),
    i = n(688151);
let s = (0, r.C)({
    kind: "guild",
    id: "2026-02_past_vc_activity_messages",
    label: "Past VC Activity Messages",
    commonTriggerPoint: i.$G.VOICE_CALL,
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Show past VC activity messages in system channel", config: { enabled: !0 } }],
});
function a(e, t) {
    let { enabled: n } = s.useExperiment({ guildId: e, location: t }, { autoTrackExposure: !0 });
    return n;
}
let o = s;
