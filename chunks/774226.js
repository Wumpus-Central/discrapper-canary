r.d(n, {
    G: function () {
        return l;
    },
    s: function () {
        return o;
    }
});
var i = r(818083),
    a = r(987338);
let s = (0, i.B)({
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
function o() {
    return s.getCurrentConfig({ location: 'getIsContextlessActivitiesExperimentEnabled' }).enabled;
}
function l() {
    return s.useExperiment({ location: 'useIsContextlessActivitiesExperimentEnabled' }).enabled;
}
