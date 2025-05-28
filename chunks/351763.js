n.d(t, {
    S: () => o,
    i: () => a
});
var r = n(818083),
    i = n(987338);
let a = (0, r.B)({
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
function o(e) {
    return a.useExperiment(e, { autoTrackExposure: !1 });
}
