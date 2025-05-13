n.d(t, {
    Yd: () => s,
    o0: () => o
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
    a = (0, r.B)({
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
    o = (e) => i.getCurrentConfig({ location: e }, { autoTrackExposure: !1 }).enabled || a.getCurrentConfig({ location: e }, { autoTrackExposure: !1 }).enabled,
    s = (e) => {
        let t = i.useExperiment({ location: e }, { autoTrackExposure: !1 }).enabled,
            n = a.useExperiment({ location: e }, { autoTrackExposure: !1 }).enabled;
        return t || n;
    };
