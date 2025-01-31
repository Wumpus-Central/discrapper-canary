n.d(t, {
    DB: () => o,
    TZ: () => s,
    sf: () => a
});
var i = n(818083),
    r = n(987338);
let a = (0, i.B)({
    id: '2025-01_valentines_gifting_2025',
    label: 'Valentines Gifting 2025',
    kind: 'user',
    defaultConfig: {
        enableGiftingFlow: !1,
        enableCoachmark: !1
    },
    commonTriggerPoint: r.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: 'Show Valentines Coachmark and Gifting Flow',
            config: {
                enableGiftingFlow: !0,
                enableCoachmark: !0
            }
        },
        {
            id: 2,
            label: 'Show Valentines Gifting Flow only. No Coachmark.',
            config: {
                enableGiftingFlow: !0,
                enableCoachmark: !1
            }
        }
    ]
});
function s() {
    let { enableGiftingFlow: e, enableCoachmark: t } = a.useExperiment({ location: 'useIsValentinesGiftingActive' }, { autoTrackExposure: !1 });
    return e || t;
}
function o() {
    let { enableCoachmark: e } = a.useExperiment({ location: 'useIsValentinesCoachmarkEnabled' }, { autoTrackExposure: !1 });
    return e;
}
