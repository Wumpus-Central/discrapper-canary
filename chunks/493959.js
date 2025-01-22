r.d(n, {
    TZ: function () {
        return s;
    },
    sf: function () {
        return o;
    }
});
var i = r(818083),
    a = r(987338);
let o = (0, i.B)({
    id: '2025-01_valentines_gifting_2025',
    label: 'Valentines Gifting 2025',
    kind: 'user',
    defaultConfig: {
        enableGiftingFlow: !1,
        enableCoachmark: !1
    },
    commonTriggerPoint: a.$P.CONNECTION_OPEN,
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
    let { enableGiftingFlow: e, enableCoachmark: n } = o.useExperiment({ location: 'useIsValentinesGiftingActive' }, { autoTrackExposure: !1 });
    return e || n;
}
