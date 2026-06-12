"use strict";
n.d(t, { default: () => p });
var i = n(17928),
    r = n(228366),
    s = n(528767),
    a = n(977997);
let o = null,
    l = null,
    u = new Set(),
    c = {},
    d = {},
    _ = new Set(),
    h = Object.freeze({});
class f extends i.Ay.DeviceSettingsStore {
    static displayName = "GameConsoleStore";
    static persistKey = "GameConsoleStore";
    initialize(e) {
        null != e && (d = e.lastSelectedDeviceByPlatform), this.waitFor(s.A, a.A);
    }
    getUserAgnosticState() {
        return { lastSelectedDeviceByPlatform: d };
    }
    getDevicesForPlatform(e) {
        return c[e] ?? h;
    }
    getLastSelectedDeviceByPlatform(e) {
        return d[e];
    }
    getDevice(e, t) {
        return c[e]?.[t];
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
let p = new f(r.h, {
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
        _.add(t);
    },
    GAME_CONSOLE_FETCH_DEVICES_SUCCESS: function (e) {
        let { platform: t, devices: n } = e;
        _.delete(t);
        let i = (c[t] = {}),
            r = {};
        for (let e of n) (i[e.id] = e), d[t] === e.id && (r[t] = e.id);
        d = r;
    },
    GAME_CONSOLE_FETCH_DEVICES_FAIL: function (e) {
        let { platform: t } = e;
        _.delete(t);
    },
    GAME_CONSOLE_SELECT_DEVICE: function (e) {
        let { platform: t, deviceId: n } = e;
        d[t] = n;
    },
});
