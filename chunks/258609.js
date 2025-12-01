n.r(t), n.d(t, { default: () => I }), n(388685);
var r,
    i = n(442837),
    a = n(570140),
    o = n(797258),
    s = n(979651);
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
let c = null,
    u = null,
    d = new Set(),
    f = {},
    p = {},
    _ = new Set();
function m(e) {
    let { sessionId: t } = e;
    (c = t), (u = null);
}
function h() {
    (c = null), (u = null);
}
function g(e) {
    let { sessionType: t, nonce: n, channelId: r, deviceId: i, commandId: a } = e;
    u = {
        type: t,
        nonce: n,
        channelId: r,
        startedAt: Date.now(),
        deviceId: i,
        commandId: a,
    };
}
function E(e) {
    let { platform: t } = e;
    _.add(t);
}
function b(e) {
    let { platform: t, devices: n } = e;
    _.delete(t);
    let r = (f[t] = {}),
        i = {};
    for (let e of n) (r[e.id] = e), p[t] === e.id && (i[t] = e.id);
    p = i;
}
function y(e) {
    let { platform: t } = e;
    _.delete(t);
}
function O(e) {
    let { platform: t, deviceId: n } = e;
    p[t] = n;
}
let v = Object.freeze({});
class S extends (r = i.ZP.DeviceSettingsStore) {
    initialize(e) {
        null != e && (p = e.lastSelectedDeviceByPlatform), this.waitFor(o.Z, s.Z);
    }
    getUserAgnosticState() {
        return { lastSelectedDeviceByPlatform: p };
    }
    getDevicesForPlatform(e) {
        var t;
        return null != (t = f[e]) ? t : v;
    }
    getLastSelectedDeviceByPlatform(e) {
        return p[e];
    }
    getDevice(e, t) {
        var n;
        return null == (n = f[e]) ? void 0 : n[t];
    }
    getFetchingDevices(e) {
        return _.has(e);
    }
    getPendingDeviceCommands() {
        return d;
    }
    getRemoteSessionId() {
        return c;
    }
    getAwaitingRemoteSessionInfo() {
        return u;
    }
}
l(S, "displayName", "GameConsoleStore"), l(S, "persistKey", "GameConsoleStore");
let I = new S(a.Z, {
    REMOTE_SESSION_CONNECT: m,
    REMOTE_SESSION_DISCONNECT: h,
    WAIT_FOR_REMOTE_SESSION: g,
    GAME_CONSOLE_FETCH_DEVICES_START: E,
    GAME_CONSOLE_FETCH_DEVICES_SUCCESS: b,
    GAME_CONSOLE_FETCH_DEVICES_FAIL: y,
    GAME_CONSOLE_SELECT_DEVICE: O,
});
