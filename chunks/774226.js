n.d(t, {
    GK: () => u,
    Kb: () => c,
    sq: () => l
}),
    n(789020);
var i = n(818083),
    r = n(630388),
    a = n(981631),
    s = n(987338);
let o = (0, i.B)({
    kind: 'user',
    id: '2024-11_activities_contextless',
    label: 'Contextless Activities Experiment',
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: s.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: 'Enable contextless activities',
            config: { enabled: !0 }
        }
    ]
});
function l() {
    return o.getCurrentConfig({ location: 'getIsContextlessActivitiesExperimentEnabled' }).enabled;
}
function u() {
    return o.useExperiment({ location: 'useIsContextlessActivitiesExperimentEnabled' }).enabled;
}
function c(e) {
    return (0, r.yE)(e.flags, a.udG.CONTEXTLESS_ACTIVITY) && l();
}
