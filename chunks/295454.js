n.d(t, { K: () => r });
var i = n(818083),
    s = n(987338);
let l = (0, i.B)({
    kind: "user",
    id: "2025-06_guild_sidebar_voice_stage_in_suggested",
    label: "voice and stage channels appear in suggested if user mentioned in them",
    commonTriggerPoint: s.$P.CONNECTION_OPEN,
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: "voice and stage channels are shown in suggested",
            config: { enabled: !0 },
        },
    ],
});
function r(e) {
    return l.getCurrentConfig({ location: e }, { autoTrackExposure: !1 }).enabled;
}
