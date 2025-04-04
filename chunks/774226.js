n.d(t, {
    GK: () => c,
    Kb: () => u,
    sq: () => l
}),
    n(789020);
var r = n(818083),
    i = n(630388),
    o = n(981631),
    a = n(987338);
let s = (0, r.B)({
    kind: 'user',
    id: '2024-11_activities_contextless',
    label: 'Contextless Activities Experiment',
    defaultConfig: {
        enabledOnDesktop: !1,
        enabledOnMobile: !1
    },
    commonTriggerPoint: a.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: 'Enable contextless activities on desktop only',
            config: {
                enabledOnDesktop: !0,
                enabledOnMobile: !1
            }
        },
        {
            id: 2,
            label: 'Enable contextless activities on desktop and mobile',
            config: {
                enabledOnDesktop: !0,
                enabledOnMobile: !0
            }
        }
    ]
});
function l() {
    return s.getCurrentConfig({ location: 'getIsContextlessActivitiesExperimentEnabled' }).enabledOnDesktop;
}
function c(e) {
    return l() && null != e && (0, i.yE)(e.flags, o.udG.CONTEXTLESS_ACTIVITY);
}
function u(e) {
    var t;
    return (0, i.yE)(null != (t = e.flags) ? t : 0, o.udG.CONTEXTLESS_ACTIVITY) && l();
}
