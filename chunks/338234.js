i.d(t, { Uw: () => l, fC: () => a });
let n = (0, i(600975).C)({
    kind: "guild",
    id: "2026-02_voice_user_hover_activities",
    label: "Voice User Activities on Hover",
    defaultConfig: { enableUserHoverActivities: !1 },
    treatments: [{ id: 1, label: "Enable activities on user hover", config: { enableUserHoverActivities: !0 } }],
});
function a(e) {
    let { guildId: t, location: i } = e;
    return n.useExperiment({ guildId: t, location: i }, { autoTrackExposure: !0 });
}
function l(e) {
    let { guildId: t, location: i } = e;
    return n.getCurrentConfig({ guildId: t, location: i }, { autoTrackExposure: !0 });
}
