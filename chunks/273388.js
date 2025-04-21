n.d(t, {
    C: () => s,
    L: () => l
});
var i = n(818083),
    r = n(987338);
let s = (0, i.B)({
        kind: 'user',
        id: '2025-04_unread_dm_dots_desktop',
        label: 'Unread DM Dots (Desktop)',
        defaultConfig: { showUnreadDots: !1 },
        commonTriggerPoint: r.$P.CONNECTION_OPEN,
        treatments: [
            {
                id: 1,
                label: 'Show DM Dots',
                config: { showUnreadDots: !0 }
            }
        ]
    }),
    l = (e) => s.useExperiment({ location: e }, { autoTrackExposure: !1 }).showUnreadDots;
