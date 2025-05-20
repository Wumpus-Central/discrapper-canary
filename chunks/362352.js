n.d(t, {
    Yd: () => s,
    o0: () => a
});
var r = n(818083);
let i = (0, r.B)({
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
    o = (0, r.B)({
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
    a = (e) => i.getCurrentConfig({ location: e }, { autoTrackExposure: !1 }).enabled || o.getCurrentConfig({ location: e }, { autoTrackExposure: !1 }).enabled,
    s = (e) => {
        let t = i.useExperiment({ location: e }, { autoTrackExposure: !1 }).enabled,
            n = o.useExperiment({ location: e }, { autoTrackExposure: !1 }).enabled;
        return t || n;
    };
