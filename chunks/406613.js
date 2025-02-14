n.d(t, { F: () => l });
var i = n(818083),
    s = n(984134);
let r = (0, i.B)({
    kind: 'user',
    id: '2025-01_voice_and_video_settings_refresh',
    label: 'Voice and Video Settings Refresh',
    defaultConfig: { showRefreshedSettings: !1 },
    treatments: [
        {
            id: 1,
            label: 'Show refreshed settings',
            config: { showRefreshedSettings: !0 }
        }
    ]
});
function l(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { isInHoldout: i } = s.h.useExperiment({ location: t }, { autoTrackExposure: n });
    return r.useExperiment(
        { location: t },
        {
            disable: i,
            autoTrackExposure: n
        }
    );
}
