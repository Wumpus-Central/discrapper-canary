n.d(t, {
    DG: () => s,
    MY: () => o,
    iC: () => f,
    nP: () => d,
    sA: () => l,
    wm: () => u
});
var i = n(818083),
    r = n(109911),
    a = n(987338);
let s = (0, i.B)({
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
    o = (0, i.B)({
        kind: 'user',
        id: '2025-02_hotwheels_v2_model',
        label: 'Next iteration of the activity feed ranking model.',
        commonTriggerPoint: a.$P.CONNECTION_OPEN,
        defaultConfig: {},
        treatments: [
            {
                id: 5,
                label: 'ML model V1',
                config: {}
            },
            {
                id: 13,
                label: 'ML model V2',
                config: {}
            }
        ]
    });
function l(e) {
    let { enabled: t } = s.getCurrentConfig({ location: e }, { autoTrackExposure: !0 }),
        n = (0, r.Ji)(e, !1);
    return t || n;
}
function u(e) {
    let { enabled: t, impressionCappingEnabled: n } = s.getCurrentConfig({ location: e }, { autoTrackExposure: !0 });
    return t && !0 === n;
}
let c = (0, i.B)({
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
    return c.getCurrentConfig({ location: e }, { autoTrackExposure: !0 });
}
let f = (0, i.B)({
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
