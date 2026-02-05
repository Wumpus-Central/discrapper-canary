"use strict";
n.d(t, { A: () => S, R: () => d });
var r = n(311907),
    i = n(451988),
    a = n(73153),
    s = n(960850),
    o = n(927813),
    l = n(734057),
    u = n(576705);
let c = 100;
var d = (function (e) {
    return (e[(e.SendMessage = 0)] = "SendMessage"), (e[(e.CreateThread = 1)] = "CreateThread"), e;
})({});
let _ = { 0: {}, 1: {} };
function f(e, t, n) {
    if ((p(e, t), (0, s.F)(e, t) || n <= 0)) return;
    let r = n + Date.now();
    (_[t][e.id] = { rateLimitPerUser: e.rateLimitPerUser, cooldownMs: n, cooldownEndTimestamp: r, timer: new i.Ep() }),
        _[t][e.id].timer.start(
            1e3,
            () => {
                a.h.dispatch({
                    type: "SLOWMODE_SET_COOLDOWN",
                    channelId: e.id,
                    slowmodeType: t,
                    cooldownMs: Math.max(r - Date.now(), 0),
                });
            },
            !0,
        );
}
function p(e, t) {
    null != _[t][e.id] && (_[t][e.id].timer.stop(), delete _[t][e.id]);
}
function h(e, t) {
    let n = l.A.getChannel(e);
    if (null == n) return !1;
    f(n, t, 0 === n.rateLimitPerUser ? 0 : n.rateLimitPerUser * o.A.Millis.SECOND + c);
}
function m(e) {
    let { channelId: t } = e;
    return h(t, 0);
}
function g(e) {
    let { channelId: t } = e,
        n = l.A.getChannel(t);
    return null != n && f(n, 0, 0);
}
function E(e) {
    let { channelId: t, slowmodeType: n } = e;
    return h(t, n);
}
function A(e) {
    let { channelId: t, slowmodeType: n, cooldownMs: r } = e,
        i = l.A.getChannel(t);
    if (null == i) return !1;
    f(i, n, 0 === r ? 0 : r + c);
}
function I(e) {
    let { channels: t } = e;
    [0, 1].forEach((e) => {
        for (let n of t) {
            let t = _[e][n.id],
                r = n.rateLimitPerUser;
            null != t && t.rateLimitPerUser !== r && f(n, e, Math.min(t?.cooldownMs ?? 0, r * o.A.Millis.SECOND));
        }
    });
}
function T() {
    [0, 1].forEach((e) => {
        Object.keys(_[e]).forEach((t) => _[e][t].timer.stop()), (_[e] = {});
    });
}
class y extends r.Ay.Store {
    static displayName = "SlowmodeStore";
    initialize() {
        this.waitFor(l.A, u.A);
    }
    getSlowmodeCooldownGuess(e, t) {
        let n = _[t ?? 0][e];
        return null != n ? n.cooldownMs : 0;
    }
    isChannelOnCooldown(e, t) {
        return this.getSlowmodeCooldownGuess(e.id, t) > 0 && e.rateLimitPerUser > 0;
    }
}
let S = new y(a.h, {
    SLOWMODE_RESET_COOLDOWN: E,
    SLOWMODE_SET_COOLDOWN: A,
    UPLOAD_START: m,
    UPLOAD_FAIL: g,
    UPLOAD_CANCEL_REQUEST: g,
    CHANNEL_UPDATES: I,
    LOGOUT: T,
});
