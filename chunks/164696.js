"use strict";
n.d(t, { Zb: () => s });
let i = (0, n(600975).C)({
    kind: "guild",
    id: "2026-02_past_vc_activity_messages",
    label: "Past VC Activity Messages",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Show past VC activity messages in system channel", config: { enabled: !0 } }],
});
function s(e, t) {
    let { enabled: n } = i.useExperiment({ guildId: e, location: t }, { autoTrackExposure: !0 });
    return n;
}
