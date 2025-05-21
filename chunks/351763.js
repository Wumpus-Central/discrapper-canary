n.d(t, {
    S: () => a,
    i: () => o
});
var r = n(818083),
    i = n(987338);
let o = (0, r.B)({
    kind: 'user',
    id: '2025-05_hide_rtc_buttons_experiment',
    label: 'RTC Buttons Negative Test',
    defaultConfig: {
        isActivityButtonHidden: !1,
        isSoundboardButtonHidden: !1
    },
    commonTriggerPoint: i.$P.VOICE_CALL,
    treatments: [
        {
            id: 1,
            label: 'Hide activity button',
            config: {
                isActivityButtonHidden: !0,
                isSoundboardButtonHidden: !1
            }
        },
        {
            id: 2,
            label: 'Hide soundboard button',
            config: {
                isActivityButtonHidden: !1,
                isSoundboardButtonHidden: !0
            }
        }
    ]
});
function a(e) {
    return o.useExperiment(e, { autoTrackExposure: !1 });
}
