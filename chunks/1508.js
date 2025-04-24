n.d(t, { Z: () => i });
var l = n(818083),
    r = n(987338);
let i = (0, l.B)({
    kind: 'user',
    id: '2025-03_activity_notification_improvements',
    label: 'Activity Notification Improvements',
    defaultConfig: { disableCurrentActivityNotifications: !1 },
    treatments: [
        {
            id: 1,
            label: 'Disable notifications for current activity',
            config: { disableCurrentActivityNotifications: !0 }
        }
    ],
    commonTriggerPoint: r.$P.CONNECTION_OPEN
});
