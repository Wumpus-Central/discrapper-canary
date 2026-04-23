"use strict";
n.d(t, { A: () => l });
var r = n(311907),
    i = n(73153),
    s = n(961350);
let a = {};
class o extends r.Ay.Store {
    initialize() {
        this.waitFor(s.default);
    }
    static displayName = "RpcNotificationSettingsStore";
    areSlayerNotificationsSuppressed() {
        for (let e in a) if (a[e] === s.default.getId()) return !0;
        return !1;
    }
}
let l = new o(i.h, {
    RPC_APP_DISCONNECTED: function (e) {
        delete a[e.socketId];
    },
    SET_RPC_NOTIFICATION_SETTINGS: function (e) {
        delete a[e.socketId], e.suppressNotifications && (a[e.socketId] = e.targetUserId);
    },
});
