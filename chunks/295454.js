n.d(t, { K: () => o });
var r = n(818083),
    i = n(987338);
let s = (0, r.B)({
    kind: 'user',
    id: '2025-06_guild_sidebar_voice_stage_in_suggested',
    label: 'voice and stage channels appear in suggested if user mentioned in them',
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'voice and stage channels are shown in suggested',
            config: { enabled: !0 }
        }
    ]
});
function o(e) {
    return s.getCurrentConfig({ location: e }, { autoTrackExposure: !1 }).enabled;
}
