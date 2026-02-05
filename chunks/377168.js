n.d(t, { A: () => s, q: () => l });
var i = n(600975),
    r = n(996744),
    a = n(688151);
let l = (0, i.C)({
    kind: "user",
    id: "2025-06_voice_filters_ea",
    label: "Voice Filters EA",
    defaultConfig: { enabled: null },
    commonTriggerPoint: a.$G.CONNECTION_OPEN,
    treatments: [
        { id: 0, label: "User don't see voice filters EA", config: { enabled: null } },
        { id: 1, label: "User sees voice filters EA", config: { enabled: !0 } },
    ],
});
function s(e) {
    let { location: t } = e,
        { enabled: n } = l.useExperiment({ location: t }, { autoTrackExposure: !1 }),
        i = (0, r.Cg)({ location: "VoiceFiltersEarlyAccess", autoTrackExposure: !0 });
    return n && i;
}
