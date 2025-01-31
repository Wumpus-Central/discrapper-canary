n.d(t, { Z: () => S }), n(47120);
var i,
    r = n(442837),
    a = n(570140),
    s = n(797258),
    o = n(979651);
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
let u = null,
    c = null,
    d = new Set(),
    f = {},
    _ = {},
    p = new Set();
function h(e) {
    let { sessionId: t } = e;
    (u = t), (c = null);
}
function m() {
    (u = null), (c = null);
}
function g(e) {
    let { sessionType: t, nonce: n, channelId: i, deviceId: r, commandId: a } = e;
    c = {
        type: t,
        nonce: n,
        channelId: i,
        startedAt: Date.now(),
        deviceId: r,
        commandId: a
    };
}
function E(e) {
    let { platform: t } = e;
    p.add(t);
}
function v(e) {
    let { platform: t, devices: n } = e;
    p.delete(t);
    let i = (f[t] = {}),
        r = {};
    for (let e of n) (i[e.id] = e), _[t] === e.id && (r[t] = e.id);
    _ = r;
}
function y(e) {
    let { platform: t } = e;
    p.delete(t);
}
function I(e) {
    let { platform: t, deviceId: n } = e;
    _[t] = n;
}
let b = Object.freeze({});
class T extends (i = r.ZP.DeviceSettingsStore) {
    initialize(e) {
        null != e && (_ = e.lastSelectedDeviceByPlatform), this.waitFor(s.Z, o.Z);
    }
    getUserAgnosticState() {
        return { lastSelectedDeviceByPlatform: _ };
    }
    getDevicesForPlatform(e) {
        var t;
        return null !== (t = f[e]) && void 0 !== t ? t : b;
    }
    getLastSelectedDeviceByPlatform(e) {
        return _[e];
    }
    getDevice(e, t) {
        var n;
        return null === (n = f[e]) || void 0 === n ? void 0 : n[t];
    }
    getFetchingDevices(e) {
        return p.has(e);
    }
    getPendingDeviceCommands() {
        return d;
    }
    getRemoteSessionId() {
        return u;
    }
    getAwaitingRemoteSessionInfo() {
        return c;
    }
}
l(T, 'displayName', 'GameConsoleStore'), l(T, 'persistKey', 'GameConsoleStore');
let S = new T(a.Z, {
    REMOTE_SESSION_CONNECT: h,
    REMOTE_SESSION_DISCONNECT: m,
    WAIT_FOR_REMOTE_SESSION: g,
    GAME_CONSOLE_FETCH_DEVICES_START: E,
    GAME_CONSOLE_FETCH_DEVICES_SUCCESS: v,
    GAME_CONSOLE_FETCH_DEVICES_FAIL: y,
    GAME_CONSOLE_SELECT_DEVICE: I
});
