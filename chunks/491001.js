let i = (0, n(945810).mj)({
        name: "2026-01-ios-push-notif-json-fix",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    r = null;
n.d(
    t,
    {},
    {
        K: function () {
            return (
                null == r && (r = i.getConfig({ location: "isIOSPushNotificationRawPayloadFixExperiment" }).enabled), r
            );
        },
    },
);
