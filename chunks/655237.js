n.d(t, { A: () => f });
var l,
    r,
    i = n(311907),
    a = n(73153),
    s = n(600975),
    o = n(961350);
let c = {},
    u = (0, s.C)({
        kind: "user",
        id: "2025-03_slayer_notif_supression_killswitch",
        label: "Disable suppressing notifications with slayer game active",
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: "Disable suppressing",
                config: { enabled: !0 },
            },
        ],
    });
class d extends (r = i.Ay.Store) {
    initialize() {
        this.waitFor(o.default);
    }
    areSlayerNotificationsSuppressed() {
        if (u.getCurrentConfig({ location: "Store" }, { autoTrackExposure: !1 }).enabled) return !1;
        for (let e in c) if (c[e] === o.default.getId()) return !0;
        return !1;
    }
}
(l = "displayName") in d
    ? Object.defineProperty(d, l, {
          value: "RpcNotificationSettingsStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (d[l] = "RpcNotificationSettingsStore");
let f = new d(a.h, {
    RPC_APP_DISCONNECTED: function (e) {
        delete c[e.socketId];
    },
    SET_RPC_NOTIFICATION_SETTINGS: function (e) {
        delete c[e.socketId], e.suppressNotifications && (c[e.socketId] = e.targetUserId);
    },
});
