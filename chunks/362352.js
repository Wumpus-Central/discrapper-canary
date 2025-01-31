n.d(t, {
    Yd: () => o,
    o0: () => s
});
var i = n(818083);
let r = (0, i.B)({
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
    a = (0, i.B)({
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
    s = (e) => r.getCurrentConfig({ location: e }, { autoTrackExposure: !1 }).enabled || a.getCurrentConfig({ location: e }, { autoTrackExposure: !1 }).enabled,
    o = (e) => {
        let t = r.useExperiment({ location: e }, { autoTrackExposure: !1 }).enabled,
            n = a.useExperiment({ location: e }, { autoTrackExposure: !1 }).enabled;
        return t || n;
    };
