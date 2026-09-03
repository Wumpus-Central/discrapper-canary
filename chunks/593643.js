n.d(t, { D8: () => s, _U: () => a });
var i = n(600975),
    r = n(688151);
let a = (0, i.C)({
    id: "2026-03_voice_badge",
    kind: "guild",
    commonTriggerPoint: r.$G.VOICE_CALL,
    label: "Display Voice Channel Badge",
    defaultConfig: { enabled: !1 },
    treatments: [
        { id: 0, label: "Control", config: { enabled: !1 } },
        { id: 1, label: "Show voice badges", config: { enabled: !0 } },
    ],
});
function s(e) {
    let { guildId: t, location: n } = e;
    return a.useExperiment({ guildId: t, location: n }, { autoTrackExposure: !0 });
}
