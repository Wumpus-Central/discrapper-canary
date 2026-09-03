n.d(t, { default: () => h });
var i = n(17928),
    r = n(228366),
    a = n(528767),
    s = n(977997);
let l = null,
    o = null,
    d = new Set(),
    c = {},
    u = {},
    _ = new Set(),
    E = Object.freeze({});
class A extends i.Ay.DeviceSettingsStore {
    static displayName = "GameConsoleStore";
    static persistKey = "GameConsoleStore";
    initialize(e) {
        null != e && (u = e.lastSelectedDeviceByPlatform), this.waitFor(a.A, s.A);
    }
    getUserAgnosticState() {
        return { lastSelectedDeviceByPlatform: u };
    }
    getDevicesForPlatform(e) {
        return c[e] ?? E;
    }
    getLastSelectedDeviceByPlatform(e) {
        return u[e];
    }
    getDevice(e, t) {
        return c[e]?.[t];
    }
    getFetchingDevices(e) {
        return _.has(e);
    }
    getPendingDeviceCommands() {
        return d;
    }
    getRemoteSessionId() {
        return l;
    }
    getAwaitingRemoteSessionInfo() {
        return o;
    }
}
let h = new A(r.h, {
    REMOTE_SESSION_CONNECT: function (e) {
        let { sessionId: t } = e;
        (l = t), (o = null);
    },
    REMOTE_SESSION_DISCONNECT: function () {
        (l = null), (o = null);
    },
    WAIT_FOR_REMOTE_SESSION: function (e) {
        let { sessionType: t, nonce: n, channelId: i, deviceId: r, commandId: a } = e;
        o = { type: t, nonce: n, channelId: i, startedAt: Date.now(), deviceId: r, commandId: a };
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
        for (let e of n) (i[e.id] = e), u[t] === e.id && (r[t] = e.id);
        u = r;
    },
    GAME_CONSOLE_FETCH_DEVICES_FAIL: function (e) {
        let { platform: t } = e;
        _.delete(t);
    },
    GAME_CONSOLE_SELECT_DEVICE: function (e) {
        let { platform: t, deviceId: n } = e;
        u[t] = n;
    },
});
