"use strict";
n.d(t, { default: () => y });
var r = n(311907),
    i = n(73153),
    a = n(528767),
    s = n(977997);
let o = null,
    l = null,
    u = new Set(),
    c = {},
    d = {},
    _ = new Set();
function f(e) {
    let { sessionId: t } = e;
    (o = t), (l = null);
}
function p() {
    (o = null), (l = null);
}
function h(e) {
    let { sessionType: t, nonce: n, channelId: r, deviceId: i, commandId: a } = e;
    l = { type: t, nonce: n, channelId: r, startedAt: Date.now(), deviceId: i, commandId: a };
}
function m(e) {
    let { platform: t } = e;
    _.add(t);
}
function g(e) {
    let { platform: t, devices: n } = e;
    _.delete(t);
    let r = (c[t] = {}),
        i = {};
    for (let e of n) (r[e.id] = e), d[t] === e.id && (i[t] = e.id);
    d = i;
}
function E(e) {
    let { platform: t } = e;
    _.delete(t);
}
function A(e) {
    let { platform: t, deviceId: n } = e;
    d[t] = n;
}
let I = Object.freeze({});
class T extends r.Ay.DeviceSettingsStore {
    static displayName = "GameConsoleStore";
    static persistKey = "GameConsoleStore";
    initialize(e) {
        null != e && (d = e.lastSelectedDeviceByPlatform), this.waitFor(a.A, s.A);
    }
    getUserAgnosticState() {
        return { lastSelectedDeviceByPlatform: d };
    }
    getDevicesForPlatform(e) {
        return c[e] ?? I;
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
let y = new T(i.h, {
    REMOTE_SESSION_CONNECT: f,
    REMOTE_SESSION_DISCONNECT: p,
    WAIT_FOR_REMOTE_SESSION: h,
    GAME_CONSOLE_FETCH_DEVICES_START: m,
    GAME_CONSOLE_FETCH_DEVICES_SUCCESS: g,
    GAME_CONSOLE_FETCH_DEVICES_FAIL: E,
    GAME_CONSOLE_SELECT_DEVICE: A,
});
