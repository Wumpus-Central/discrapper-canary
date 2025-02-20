n.d(t, { F: () => a });
var r = n(818083),
    i = n(984134);
let s = (0, r.B)({
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
function a(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { isInHoldout: r } = i.h.useExperiment({ location: t }, { autoTrackExposure: n });
    return s.useExperiment(
        { location: t },
        {
            disable: r,
            autoTrackExposure: n
        }
    );
}
