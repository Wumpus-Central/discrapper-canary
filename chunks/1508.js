n.d(t, { Z: () => a });
var i = n(818083),
    l = n(987338);
let a = (0, i.B)({
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
    commonTriggerPoint: l.$P.CONNECTION_OPEN
});
