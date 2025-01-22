r.d(n, {
    G: function () {
        return l;
    },
    s: function () {
        return s;
    }
});
var i = r(818083),
    a = r(987338);
let o = (0, i.B)({
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
function s() {
    return o.getCurrentConfig({ location: 'getIsContextlessActivitiesExperimentEnabled' }).enabled;
}
function l() {
    return o.useExperiment({ location: 'useIsContextlessActivitiesExperimentEnabled' }).enabled;
}
