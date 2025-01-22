r.d(n, {
    GK: function () {
        return u;
    },
    Kb: function () {
        return c;
    },
    sq: function () {
        return l;
    }
});
var i = r(818083),
    a = r(701488),
    o = r(987338);
let s = (0, i.B)({
    kind: 'user',
    id: '2024-11_activities_contextless',
    label: 'Contextless Activities Experiment',
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: o.$P.CONNECTION_OPEN,
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
function u() {
    return s.useExperiment({ location: 'useIsContextlessActivitiesExperimentEnabled' }).enabled;
}
function c(e) {
    return a.AU.includes(e) && l();
}
