n.d(t, {
    V: () => o,
    Z: () => a
});
var r = n(818083),
    i = n(987338);
let l = (0, r.B)({
    kind: 'user',
    id: '2025-06_skill_trees_progress_bar',
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    label: 'Skill Trees New Progress Bar',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'enabled',
            config: { enabled: !0 }
        }
    ]
});
function o(e) {
    return l.useExperiment({ location: e }, { autoTrackExposure: !1 }).enabled;
}
let a = l;
