r.d(n, {
    Yd: function () {
        return l;
    },
    o0: function () {
        return s;
    }
});
var i = r(818083);
let a = (0, i.B)({
        kind: 'user',
        id: '2025-01_default_activity_status',
        label: 'Guild activity status defaults',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Enable new defaults',
                config: { enabled: !0 }
            }
        ]
    }),
    o = (0, i.B)({
        kind: 'user',
        id: '2025-01_default_activity_status_new_users',
        label: 'Guild activity status defaults',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Enable new defaults',
                config: { enabled: !0 }
            }
        ]
    }),
    s = (e) => a.getCurrentConfig({ location: e }, { autoTrackExposure: !1 }).enabled || o.getCurrentConfig({ location: e }, { autoTrackExposure: !1 }).enabled,
    l = (e) => {
        let n = a.useExperiment({ location: e }, { autoTrackExposure: !1 }).enabled,
            r = o.useExperiment({ location: e }, { autoTrackExposure: !1 }).enabled;
        return n || r;
    };
