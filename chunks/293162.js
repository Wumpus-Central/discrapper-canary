n.d(t, { Z: () => l });
var r = n(818083),
    i = n(987338);
let l = (0, r.B)({
    kind: 'user',
    id: '2025-05_activity_popout__popin',
    label: 'Activity Pop-Out & Pop-In Experiment',
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: 'Enable popping out an activity to another window and popping it back into the main Discord app window',
            config: { enabled: !0 }
        }
    ]
});
