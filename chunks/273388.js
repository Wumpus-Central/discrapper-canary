n.d(t, {
    C: () => s,
    L: () => a
});
var r = n(818083),
    i = n(987338);
let s = (0, r.B)({
        kind: 'user',
        id: '2025-04_unread_dm_dots_desktop',
        label: 'Unread DM Dots (Desktop)',
        defaultConfig: { showUnreadDots: !1 },
        commonTriggerPoint: i.$P.CONNECTION_OPEN,
        treatments: [
            {
                id: 1,
                label: 'Show DM Dots',
                config: { showUnreadDots: !0 }
            }
        ]
    }),
    a = (e) => s.useExperiment({ location: e }, { autoTrackExposure: !1 }).showUnreadDots;
