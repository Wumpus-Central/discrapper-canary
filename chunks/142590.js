n.d(t, { z: () => i });
let r = (0, n(818083).B)({
    id: '2025-06_video_quest_card_short_description',
    kind: 'user',
    label: 'Video Quest Card Description',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Video Quest Card Short Description',
            config: { enabled: !0 }
        }
    ]
});
function i(e) {
    let { location: t, autoTrackExposure: n = !0 } = e;
    return r.useExperiment({ location: t }, { autoTrackExposure: n }).enabled;
}
