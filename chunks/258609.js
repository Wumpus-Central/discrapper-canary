var i,
    a = r(47120);
var o = r(442837),
    s = r(570140),
    l = r(797258),
    u = r(979651);
function c(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let d = null,
    f = null,
    p = new Set(),
    h = {},
    _ = {},
    m = new Set();
function g(e) {
    let { sessionId: n } = e;
    (d = n), (f = null);
}
function E() {
    (d = null), (f = null);
}
function v(e) {
    let { sessionType: n, nonce: r, channelId: i, deviceId: a, commandId: o } = e;
    f = {
        type: n,
        nonce: r,
        channelId: i,
        startedAt: Date.now(),
        deviceId: a,
        commandId: o
    };
}
function y(e) {
    let { platform: n } = e;
    m.add(n);
}
function b(e) {
    let { platform: n, devices: r } = e;
    m.delete(n);
    let i = (h[n] = {}),
        a = {};
    for (let e of r) (i[e.id] = e), _[n] === e.id && (a[n] = e.id);
    _ = a;
}
function I(e) {
    let { platform: n } = e;
    m.delete(n);
}
function T(e) {
    let { platform: n, deviceId: r } = e;
    _[n] = r;
}
let S = Object.freeze({});
class A extends (i = o.ZP.DeviceSettingsStore) {
    initialize(e) {
        null != e && (_ = e.lastSelectedDeviceByPlatform), this.waitFor(l.Z, u.Z);
    }
    getUserAgnosticState() {
        return { lastSelectedDeviceByPlatform: _ };
    }
    getDevicesForPlatform(e) {
        var n;
        return null !== (n = h[e]) && void 0 !== n ? n : S;
    }
    getLastSelectedDeviceByPlatform(e) {
        return _[e];
    }
    getDevice(e, n) {
        var r;
        return null === (r = h[e]) || void 0 === r ? void 0 : r[n];
    }
    getFetchingDevices(e) {
        return m.has(e);
    }
    getPendingDeviceCommands() {
        return p;
    }
    getRemoteSessionId() {
        return d;
    }
    getAwaitingRemoteSessionInfo() {
        return f;
    }
}
c(A, 'displayName', 'GameConsoleStore'),
    c(A, 'persistKey', 'GameConsoleStore'),
    (n.Z = new A(s.Z, {
        REMOTE_SESSION_CONNECT: g,
        REMOTE_SESSION_DISCONNECT: E,
        WAIT_FOR_REMOTE_SESSION: v,
        GAME_CONSOLE_FETCH_DEVICES_START: y,
        GAME_CONSOLE_FETCH_DEVICES_SUCCESS: b,
        GAME_CONSOLE_FETCH_DEVICES_FAIL: I,
        GAME_CONSOLE_SELECT_DEVICE: T
    }));
