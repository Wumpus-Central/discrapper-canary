n.d(t, {
    wy: () => a,
    yP: () => i
});
let r = (0, n(818083).B)({
        kind: 'user',
        id: '2025-06_user_settings_redesign',
        label: 'User Settings Redesign',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Enable user settings redesign',
                config: { enabled: !0 }
            }
        ]
    }),
    i = (e) => r.getCurrentConfig({ location: e }, { autoTrackExposure: !1 }).enabled,
    a = (e) => r.useExperiment({ location: e }, { autoTrackExposure: !1 }).enabled;
