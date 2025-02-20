n.d(t, { w: () => i });
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2024-03_web_audio_api_rollout',
    label: 'Web Audio API Rollout',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable Web Audio API usage',
            config: { enabled: !0 }
        }
    ]
});
function i(e) {
    let { location: t } = e,
        { enabled: n } = r.getCurrentConfig({ location: t }, { autoTrackExposure: !1 });
    return n;
}
