n.d(t, { Dm: () => s, aC: () => a, kY: () => _ });
var i = n(600975),
    r = n(688151);
let a = (0, i.C)({
    kind: "guild",
    id: "2026-02_hangout_window",
    label: "Hangout Window",
    defaultConfig: { enableHangoutWindow: !1 },
    commonTriggerPoint: r.$G.VOICE_CALL,
    treatments: [{ id: 1, label: "Enable Hangout Window", config: { enableHangoutWindow: !0 } }],
});
function s(e) {
    let { guildId: t, location: n } = e;
    return a.useExperiment({ guildId: t, location: n }, { autoTrackExposure: !0 });
}
function _(e) {
    let { guildId: t, location: n } = e;
    return a.getCurrentConfig({ guildId: t, location: n }, { autoTrackExposure: !0 });
}
