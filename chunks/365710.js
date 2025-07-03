n.d(t, {
    U: () => o,
    Z: () => s
});
var r = n(818083),
    i = n(987338);
let a = (0, r.B)({
    kind: 'user',
    id: '2025-07_skill_trees_remove_top_perks',
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    label: 'Remove top perks from marketing page',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'remove top perks',
            config: { enabled: !0 }
        }
    ]
});
function o(e) {
    return a.useExperiment({ location: e }, { autoTrackExposure: !1 }).enabled;
}
let s = a;
