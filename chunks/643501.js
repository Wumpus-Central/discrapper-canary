"use strict";
n.d(t, { default: () => m });
var i = n(17928),
    r = n(228366),
    s = n(528767),
    a = n(977997);
let o = null,
    l = null,
    d = new Set(),
    _ = {},
    u = {},
    c = new Set(),
    E = Object.freeze({});
class h extends i.Ay.DeviceSettingsStore {
    static displayName = "GameConsoleStore";
    static persistKey = "GameConsoleStore";
    initialize(e) {
        null != e && (u = e.lastSelectedDeviceByPlatform), this.waitFor(s.A, a.A);
    }
    getUserAgnosticState() {
        return { lastSelectedDeviceByPlatform: u };
    }
    getDevicesForPlatform(e) {
        return _[e] ?? E;
    }
    getLastSelectedDeviceByPlatform(e) {
        return u[e];
    }
    getDevice(e, t) {
        return _[e]?.[t];
    }
    getFetchingDevices(e) {
        return c.has(e);
    }
    getPendingDeviceCommands() {
        return d;
    }
    getRemoteSessionId() {
        return o;
    }
    getAwaitingRemoteSessionInfo() {
        return l;
    }
}
let m = new h(r.h, {
    REMOTE_SESSION_CONNECT: function (e) {
        let { sessionId: t } = e;
        (o = t), (l = null);
    },
    REMOTE_SESSION_DISCONNECT: function () {
        (o = null), (l = null);
    },
    WAIT_FOR_REMOTE_SESSION: function (e) {
        let { sessionType: t, nonce: n, channelId: i, deviceId: r, commandId: s } = e;
        l = { type: t, nonce: n, channelId: i, startedAt: Date.now(), deviceId: r, commandId: s };
    },
    GAME_CONSOLE_FETCH_DEVICES_START: function (e) {
        let { platform: t } = e;
        c.add(t);
    },
    GAME_CONSOLE_FETCH_DEVICES_SUCCESS: function (e) {
        let { platform: t, devices: n } = e;
        c.delete(t);
        let i = (_[t] = {}),
            r = {};
        for (let e of n) (i[e.id] = e), u[t] === e.id && (r[t] = e.id);
        u = r;
    },
    GAME_CONSOLE_FETCH_DEVICES_FAIL: function (e) {
        let { platform: t } = e;
        c.delete(t);
    },
    GAME_CONSOLE_SELECT_DEVICE: function (e) {
        let { platform: t, deviceId: n } = e;
        u[t] = n;
    },
});
