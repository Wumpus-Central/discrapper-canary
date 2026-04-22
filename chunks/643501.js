"use strict";
n.d(t, { default: () => h });
var r = n(311907),
    i = n(73153),
    s = n(528767),
    a = n(977997);
let o = null,
    l = null,
    u = new Set(),
    d = {},
    c = {},
    _ = new Set(),
    f = Object.freeze({});
class E extends r.Ay.DeviceSettingsStore {
    static displayName = "GameConsoleStore";
    static persistKey = "GameConsoleStore";
    initialize(e) {
        null != e && (c = e.lastSelectedDeviceByPlatform), this.waitFor(s.A, a.A);
    }
    getUserAgnosticState() {
        return { lastSelectedDeviceByPlatform: c };
    }
    getDevicesForPlatform(e) {
        return d[e] ?? f;
    }
    getLastSelectedDeviceByPlatform(e) {
        return c[e];
    }
    getDevice(e, t) {
        return d[e]?.[t];
    }
    getFetchingDevices(e) {
        return _.has(e);
    }
    getPendingDeviceCommands() {
        return u;
    }
    getRemoteSessionId() {
        return o;
    }
    getAwaitingRemoteSessionInfo() {
        return l;
    }
}
let h = new E(i.h, {
    REMOTE_SESSION_CONNECT: function (e) {
        let { sessionId: t } = e;
        (o = t), (l = null);
    },
    REMOTE_SESSION_DISCONNECT: function () {
        (o = null), (l = null);
    },
    WAIT_FOR_REMOTE_SESSION: function (e) {
        let { sessionType: t, nonce: n, channelId: r, deviceId: i, commandId: s } = e;
        l = { type: t, nonce: n, channelId: r, startedAt: Date.now(), deviceId: i, commandId: s };
    },
    GAME_CONSOLE_FETCH_DEVICES_START: function (e) {
        let { platform: t } = e;
        _.add(t);
    },
    GAME_CONSOLE_FETCH_DEVICES_SUCCESS: function (e) {
        let { platform: t, devices: n } = e;
        _.delete(t);
        let r = (d[t] = {}),
            i = {};
        for (let e of n) (r[e.id] = e), c[t] === e.id && (i[t] = e.id);
        c = i;
    },
    GAME_CONSOLE_FETCH_DEVICES_FAIL: function (e) {
        let { platform: t } = e;
        _.delete(t);
    },
    GAME_CONSOLE_SELECT_DEVICE: function (e) {
        let { platform: t, deviceId: n } = e;
        c[t] = n;
    },
});
