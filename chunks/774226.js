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
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: a.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: 'Enable contextless activities',
            config: { enabled: !0 }
        }
    ]
});
function l() {
    return s.getCurrentConfig({ location: 'getIsContextlessActivitiesExperimentEnabled' }).enabled;
}
function c() {
    return s.useExperiment({ location: 'useIsContextlessActivitiesExperimentEnabled' }).enabled;
}
function u(e) {
    return (0, i.yE)(e.flags, o.udG.CONTEXTLESS_ACTIVITY) && l();
}
