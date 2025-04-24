n.d(t, {
    DG: () => o,
    Mc: () => s,
    iC: () => f,
    nP: () => d,
    sA: () => l,
    wm: () => c
});
var r = n(818083),
    i = n(109911),
    a = n(987338);
let o = (0, r.B)({
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
    }),
    s = (0, r.B)({
        kind: 'user',
        id: '2025-04_hotwheels_v3_model',
        label: 'Next iteration of the activity feed ranking model.',
        commonTriggerPoint: a.$P.CONNECTION_OPEN,
        defaultConfig: {},
        treatments: [
            {
                id: 3,
                label: 'Noteworthy',
                config: {}
            },
            {
                id: 15,
                label: 'ML model V3',
                config: {}
            }
        ]
    });
function l(e) {
    let { enabled: t } = o.getCurrentConfig({ location: e }, { autoTrackExposure: !0 }),
        n = (0, i.Ji)(e, !1);
    return t || n;
}
function c(e) {
    let { enabled: t, impressionCappingEnabled: n } = o.getCurrentConfig({ location: e }, { autoTrackExposure: !1 });
    return t && !0 === n;
}
let u = (0, r.B)({
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
function d(e) {
    return u.getCurrentConfig({ location: e }, { autoTrackExposure: !0 });
}
let f = (0, r.B)({
    kind: 'user',
    id: '2025-02_game_profile_reenable',
    label: 'Re-enable content inventory on game profile',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Re-enable',
            config: { enabled: !0 }
        }
    ]
});
