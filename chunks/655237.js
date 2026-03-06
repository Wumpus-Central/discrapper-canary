"use strict";
n.d(t, { A: () => c });
var r = n(311907),
    i = n(73153),
    s = n(961350);
let a = {};
function o(e) {
    delete a[e.socketId];
}
function l(e) {
    delete a[e.socketId], e.suppressNotifications && (a[e.socketId] = e.targetUserId);
}
class u extends r.Ay.Store {
    initialize() {
        this.waitFor(s.default);
    }
    static displayName = "RpcNotificationSettingsStore";
    areSlayerNotificationsSuppressed() {
        for (let e in a) if (a[e] === s.default.getId()) return !0;
        return !1;
    }
}
let c = new u(i.h, { RPC_APP_DISCONNECTED: o, SET_RPC_NOTIFICATION_SETTINGS: l });
