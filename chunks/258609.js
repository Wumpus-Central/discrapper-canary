n.d(t, { Z: () => I }), n(47120);
var r,
    i = n(442837),
    o = n(570140),
    a = n(797258),
    s = n(979651);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
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
function h(e) {
    let { sessionId: t } = e;
    (c = t), (u = null);
}
function m() {
    (c = null), (u = null);
}
function g(e) {
    let { sessionType: t, nonce: n, channelId: r, deviceId: i, commandId: o } = e;
    u = {
        type: t,
        nonce: n,
        channelId: r,
        startedAt: Date.now(),
        deviceId: i,
        commandId: o
    };
}
function E(e) {
    let { platform: t } = e;
    _.add(t);
}
function v(e) {
    let { platform: t, devices: n } = e;
    _.delete(t);
    let r = (f[t] = {}),
        i = {};
    for (let e of n) (r[e.id] = e), p[t] === e.id && (i[t] = e.id);
    p = i;
}
function b(e) {
    let { platform: t } = e;
    _.delete(t);
}
function y(e) {
    let { platform: t, deviceId: n } = e;
    p[t] = n;
}
let O = Object.freeze({});
class S extends (r = i.ZP.DeviceSettingsStore) {
    initialize(e) {
        null != e && (p = e.lastSelectedDeviceByPlatform), this.waitFor(a.Z, s.Z);
    }
    getUserAgnosticState() {
        return { lastSelectedDeviceByPlatform: p };
    }
    getDevicesForPlatform(e) {
        var t;
        return null !== (t = f[e]) && void 0 !== t ? t : O;
    }
    getLastSelectedDeviceByPlatform(e) {
        return p[e];
    }
    getDevice(e, t) {
        var n;
        return null === (n = f[e]) || void 0 === n ? void 0 : n[t];
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
l(S, 'displayName', 'GameConsoleStore'), l(S, 'persistKey', 'GameConsoleStore');
let I = new S(o.Z, {
    REMOTE_SESSION_CONNECT: h,
    REMOTE_SESSION_DISCONNECT: m,
    WAIT_FOR_REMOTE_SESSION: g,
    GAME_CONSOLE_FETCH_DEVICES_START: E,
    GAME_CONSOLE_FETCH_DEVICES_SUCCESS: v,
    GAME_CONSOLE_FETCH_DEVICES_FAIL: b,
    GAME_CONSOLE_SELECT_DEVICE: y
});
