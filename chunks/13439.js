n.d(t, { eg: () => a });
var r = n(818083),
    i = n(987338);
let l = (0, r.B)({
    kind: "user",
    id: "2025-11-guild-powerups-mobile",
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    label: "Guild Powerups Mobile",
    defaultConfig: {
        enabled: !1,
        notificationsEnabled: !1,
    },
    treatments: [
        {
            id: 1,
            label: "Enable Guild Powerups Mobile",
            config: {
                enabled: !0,
                notificationsEnabled: !1,
            },
        },
        {
            id: 2,
            label: "Enable Guild Powerups Mobile with Notifications",
            config: {
                enabled: !0,
                notificationsEnabled: !0,
            },
        },
    ],
});
function a(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return l.useExperiment(
        { location: e },
        {
            autoTrackExposure: !1,
            disable: t,
        },
    ).enabled;
}
