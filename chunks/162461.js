n.d(t, {
    DG: () => l,
    m6: () => p,
    mN: () => _,
    nP: () => f,
    sA: () => u,
    wm: () => c
});
var i = n(818083),
    r = n(109911),
    a = n(70956),
    s = n(987338),
    o = (function (e) {
        return (e[(e.THREE_DAYS = 3 * a.Z.Millis.DAY)] = 'THREE_DAYS'), (e[(e.SIXTEEN_HOURS = 16 * a.Z.Millis.HOUR)] = 'SIXTEEN_HOURS'), e;
    })(o || {});
let l = (0, i.B)({
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
function u(e) {
    let { enabled: t } = l.getCurrentConfig({ location: e }, { autoTrackExposure: !0 }),
        n = (0, r.Ji)(e, !1);
    return t || n;
}
function c(e) {
    let { enabled: t, impressionCappingEnabled: n } = l.getCurrentConfig({ location: e }, { autoTrackExposure: !0 });
    return t && !0 === n;
}
let d = (0, i.B)({
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
function f(e) {
    return d.getCurrentConfig({ location: e }, { autoTrackExposure: !0 });
}
let _ = (0, i.B)({
    kind: 'user',
    id: '2024-12_hotwheels_activity_feed_inventory_thresholds',
    label: 'Hotwheels Activity Feed (Inventory Options)',
    commonTriggerPoint: s.$P.CONNECTION_OPEN,
    defaultConfig: { impressionAge: o.SIXTEEN_HOURS },
    treatments: [
        {
            id: 11,
            label: 'Relaxed impression capping. (16 hours -> 3 days)',
            config: { impressionAge: o.THREE_DAYS }
        },
        {
            id: 12,
            label: 'All previous treatments combined.',
            config: { impressionAge: o.THREE_DAYS }
        }
    ]
});
function p(e) {
    return _.getCurrentConfig({ location: e }, { autoTrackExposure: !0 });
}
