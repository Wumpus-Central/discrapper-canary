n.d(t, {
    A: () => _,
});
var r,
    i = n(311907),
    a = n(73153),
    o = n(600975),
    s = n(961350);

function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let c = {},
    u = (0, o.C)({
        kind: "user",
        id: "2025-03_slayer_notif_supression_killswitch",
        label: "Disable suppressing notifications with slayer game active",
        defaultConfig: {
            enabled: !1,
        },
        treatments: [
            {
                id: 1,
                label: "Disable suppressing",
                config: {
                    enabled: !0,
                },
            },
        ],
    });

function d(e) {
    delete c[e.socketId];
}

function f(e) {
    delete c[e.socketId], e.suppressNotifications && (c[e.socketId] = e.targetUserId);
}
class p extends (r = i.Ay.Store) {
    initialize() {
        this.waitFor(s.default);
    }
    areSlayerNotificationsSuppressed() {
        if (
            u.getCurrentConfig(
                {
                    location: "Store",
                },
                {
                    autoTrackExposure: !1,
                },
            ).enabled
        )
            return !1;
        for (let e in c) if (c[e] === s.default.getId()) return !0;
        return !1;
    }
}
l(p, "displayName", "RpcNotificationSettingsStore");
let _ = new p(a.h, {
    RPC_APP_DISCONNECTED: d,
    SET_RPC_NOTIFICATION_SETTINGS: f,
});
