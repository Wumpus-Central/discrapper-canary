n.d(t, {
    F: function () {
        return a;
    }
});
var i = n(818083),
    r = n(984134);
let s = (0, i.B)({
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
    let { location: t } = e,
        { isInHoldout: n } = r.h.useExperiment({ location: t }, { autoTrackExposure: !0 });
    return s.useExperiment(
        { location: t },
        {
            disable: n,
            autoTrackExposure: !0
        }
    );
}
