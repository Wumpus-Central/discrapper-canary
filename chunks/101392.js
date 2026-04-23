"use strict";
n.d(t, { A: () => m, R: () => d });
var r,
    i = n(311907),
    s = n(451988),
    a = n(73153),
    o = n(960850),
    l = n(927813),
    u = n(734057),
    c = n(576705),
    d = (((r = {})[(r.SendMessage = 0)] = "SendMessage"), (r[(r.CreateThread = 1)] = "CreateThread"), r);
let _ = { 0: {}, 1: {} };
function f(e, t, n) {
    var r, i;
    if (((r = e), null != _[(i = t)][r.id] && (_[i][r.id].timer.stop(), delete _[i][r.id]), (0, o.F)(e, t) || n <= 0))
        return;
    let l = n + Date.now();
    (_[t][e.id] = { rateLimitPerUser: e.rateLimitPerUser, cooldownMs: n, cooldownEndTimestamp: l, timer: new s.Ep() }),
        _[t][e.id].timer.start(
            1e3,
            () => {
                a.h.dispatch({
                    type: "SLOWMODE_SET_COOLDOWN",
                    channelId: e.id,
                    slowmodeType: t,
                    cooldownMs: Math.max(l - Date.now(), 0),
                });
            },
            !0,
        );
}
function p(e, t) {
    let n = u.A.getChannel(e);
    if (null == n) return !1;
    f(n, t, 0 === n.rateLimitPerUser ? 0 : n.rateLimitPerUser * l.A.Millis.SECOND + 100);
}
function h(e) {
    let { channelId: t } = e,
        n = u.A.getChannel(t);
    return null != n && f(n, 0, 0);
}
class E extends i.Ay.Store {
    static displayName = "SlowmodeStore";
    initialize() {
        this.waitFor(u.A, c.A);
    }
    getSlowmodeCooldownGuess(e, t) {
        let n = _[t ?? 0][e];
        return null != n ? n.cooldownMs : 0;
    }
    isChannelOnCooldown(e, t) {
        return this.getSlowmodeCooldownGuess(e.id, t) > 0 && e.rateLimitPerUser > 0;
    }
}
let m = new E(a.h, {
    SLOWMODE_RESET_COOLDOWN: function (e) {
        let { channelId: t, slowmodeType: n } = e;
        return p(t, n);
    },
    SLOWMODE_SET_COOLDOWN: function (e) {
        let { channelId: t, slowmodeType: n, cooldownMs: r } = e,
            i = u.A.getChannel(t);
        if (null == i) return !1;
        f(i, n, 0 === r ? 0 : r + 100);
    },
    UPLOAD_START: function (e) {
        let { channelId: t } = e;
        return p(t, 0);
    },
    UPLOAD_FAIL: h,
    UPLOAD_CANCEL_REQUEST: h,
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e;
        [0, 1].forEach((e) => {
            for (let n of t) {
                let t = _[e][n.id],
                    r = n.rateLimitPerUser;
                null != t && t.rateLimitPerUser !== r && f(n, e, Math.min(t?.cooldownMs ?? 0, r * l.A.Millis.SECOND));
            }
        });
    },
    LOGOUT: function () {
        [0, 1].forEach((e) => {
            Object.keys(_[e]).forEach((t) => _[e][t].timer.stop()), (_[e] = {});
        });
    },
});
