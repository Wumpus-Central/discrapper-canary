n.d(t, { S: () => i });
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2025-02_activity_sharing_popout',
    label: 'Enables the rtc popout',
    defaultConfig: { rtcPopoutEnabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'RTC Popout',
            config: { rtcPopoutEnabled: !0 }
        }
    ]
});
function i(e) {
    return r.useExperiment({ location: e }, { autoTrackExposure: !0 });
}
