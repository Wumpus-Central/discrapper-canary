r.d(n, {
    DG: function () {
        return u;
    },
    m6: function () {
        return _;
    },
    mN: function () {
        return h;
    },
    nP: function () {
        return p;
    },
    sA: function () {
        return c;
    },
    wm: function () {
        return d;
    }
});
var i,
    a = r(818083),
    o = r(109911),
    s = r(70956),
    l = r(987338);
!(function (e) {
    (e[(e.THREE_DAYS = 3 * s.Z.Millis.DAY)] = 'THREE_DAYS'), (e[(e.SIXTEEN_HOURS = 16 * s.Z.Millis.HOUR)] = 'SIXTEEN_HOURS');
})(i || (i = {}));
let u = (0, a.B)({
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
function c(e) {
    let { enabled: n } = u.getCurrentConfig({ location: e }, { autoTrackExposure: !0 }),
        r = (0, o.Ji)(e, !1);
    return n || r;
}
function d(e) {
    let { enabled: n, impressionCappingEnabled: r } = u.getCurrentConfig({ location: e }, { autoTrackExposure: !0 });
    return n && !0 === r;
}
let f = (0, a.B)({
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
function p(e) {
    return f.getCurrentConfig({ location: e }, { autoTrackExposure: !0 });
}
let h = (0, a.B)({
    kind: 'user',
    id: '2024-12_hotwheels_activity_feed_inventory_thresholds',
    label: 'Hotwheels Activity Feed (Inventory Options)',
    commonTriggerPoint: l.$P.CONNECTION_OPEN,
    defaultConfig: { impressionAge: i.SIXTEEN_HOURS },
    treatments: [
        {
            id: 11,
            label: 'Relaxed impression capping. (16 hours -> 3 days)',
            config: { impressionAge: i.THREE_DAYS }
        },
        {
            id: 12,
            label: 'All previous treatments combined.',
            config: { impressionAge: i.THREE_DAYS }
        }
    ]
});
function _(e) {
    return h.getCurrentConfig({ location: e }, { autoTrackExposure: !0 });
}
