n.d(t, { Dm: () => s, aC: () => r, kY: () => l });
var i = n(600975),
    a = n(688151);
let r = (0, i.C)({
    kind: "guild",
    id: "2026-02_hangout_window",
    label: "Hangout Window",
    defaultConfig: { enableHangoutWindow: !1 },
    commonTriggerPoint: a.$G.VOICE_CALL,
    treatments: [{ id: 1, label: "Enable Hangout Window", config: { enableHangoutWindow: !0 } }],
});
function s(e) {
    let { guildId: t, location: n } = e;
    return r.useExperiment({ guildId: t, location: n }, { autoTrackExposure: !0 });
}
function l(e) {
    let { guildId: t, location: n } = e;
    return r.getCurrentConfig({ guildId: t, location: n }, { autoTrackExposure: !0 });
}
