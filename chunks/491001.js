"use strict";
n.d(t, { K: () => a });
let r = (0, n(945810).mj)({
        name: "2026-01-ios-push-notif-json-fix",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    i = null;
function a() {
    return null == i && (i = r.getConfig({ location: "isIOSPushNotificationRawPayloadFixExperiment" }).enabled), i;
}
