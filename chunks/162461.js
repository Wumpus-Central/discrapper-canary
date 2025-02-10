n.d(t, {
    DG: () => a,
    nP: () => u,
    sA: () => s,
    wm: () => o
});
var i = n(818083),
    r = n(109911);
let a = (0, i.B)({
    kind: 'user',
    id: '2024-03_content_inventory_memberlist_and_ranker',
    label: 'Enables the memberlist content feed',
    defaultConfig: {
        enabled: !0,
        impressionCappingEnabled: !0
    },
    treatments: [
        {
            id: -1,
            label: 'Not in experiment',
            config: { enabled: !1 }
        },
        {
            id: 0,
            label: 'Holdout',
            config: { enabled: !1 }
        }
    ]
});
function s(e) {
    let { enabled: t } = a.getCurrentConfig({ location: e }, { autoTrackExposure: !0 }),
        n = (0, r.Ji)(e, !1);
    return t || n;
}
function o(e) {
    let { enabled: t, impressionCappingEnabled: n } = a.getCurrentConfig({ location: e }, { autoTrackExposure: !0 });
    return t && !0 === n;
}
let l = (0, i.B)({
    kind: 'user',
    id: '2024-08_content_inventory_analytics_sampling',
    label: 'Content Inventory Analytics Sampling',
    defaultConfig: { trackingEnabled: !0 },
    treatments: [
        {
            id: 1,
            label: 'Tracking disabled',
            config: { trackingEnabled: !1 }
        }
    ]
});
function u(e) {
    return l.getCurrentConfig({ location: e }, { autoTrackExposure: !0 });
}
