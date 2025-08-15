n.d(t, { K: () => l });
var i = n(818083),
    r = n(987338);
let s = (0, i.B)({
    kind: "user",
    id: "2025-06_guild_sidebar_voice_stage_in_suggested",
    label: "voice and stage channels appear in suggested if user mentioned in them",
    commonTriggerPoint: r.$P.CONNECTION_OPEN,
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: "voice and stage channels are shown in suggested",
            config: { enabled: !0 },
        },
    ],
});
function l(e) {
    return s.getCurrentConfig({ location: e }, { autoTrackExposure: !1 }).enabled;
}
