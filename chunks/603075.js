n.d(t, { b: () => l });
var r = n(818083),
    i = n(987338);
let l = (0, r.B)({
    kind: 'user',
    id: '2025-04_app_dm_new_mute_ux',
    label: 'App DM New Mute UX',
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: 'Enables new App DM management experience',
            config: { enabled: !0 }
        }
    ]
});
