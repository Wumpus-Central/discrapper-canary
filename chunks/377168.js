n.d(t, {
    A: () => s,
    q: () => a,
});
var r = n(600975),
    i = n(996744),
    l = n(688151);
let a = (0, r.C)({
    kind: "user",
    id: "2025-06_voice_filters_ea",
    label: "Voice Filters EA",
    defaultConfig: { enabled: null },
    commonTriggerPoint: l.$G.CONNECTION_OPEN,
    treatments: [
        {
            id: 0,
            label: "User don't see voice filters EA",
            config: { enabled: null },
        },
        {
            id: 1,
            label: "User sees voice filters EA",
            config: { enabled: !0 },
        },
    ],
});
function s(e) {
    let { location: t } = e,
        { enabled: n } = a.useExperiment({ location: t }, { autoTrackExposure: !1 }),
        r = (0, i.Cg)({
            location: "VoiceFiltersEarlyAccess",
            autoTrackExposure: !0,
        });
    return n && r;
}
