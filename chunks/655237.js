"use strict";
n.d(t, { A: () => _ });
var r = n(311907),
    i = n(73153),
    a = n(600975),
    s = n(961350);
let o = {},
    l = (0, a.C)({
        kind: "user",
        id: "2025-03_slayer_notif_supression_killswitch",
        label: "Disable suppressing notifications with slayer game active",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Disable suppressing", config: { enabled: !0 } }],
    });
function u(e) {
    delete o[e.socketId];
}
function c(e) {
    delete o[e.socketId], e.suppressNotifications && (o[e.socketId] = e.targetUserId);
}
class d extends r.Ay.Store {
    initialize() {
        this.waitFor(s.default);
    }
    static displayName = "RpcNotificationSettingsStore";
    areSlayerNotificationsSuppressed() {
        if (l.getCurrentConfig({ location: "Store" }, { autoTrackExposure: !1 }).enabled) return !1;
        for (let e in o) if (o[e] === s.default.getId()) return !0;
        return !1;
    }
}
let _ = new d(i.h, { RPC_APP_DISCONNECTED: u, SET_RPC_NOTIFICATION_SETTINGS: c });
