"use strict";
n.d(t, { A: () => m, R: () => d });
var i,
    r = n(17928),
    s = n(451988),
    a = n(228366),
    o = n(960850),
    l = n(927813),
    u = n(734057),
    c = n(576705),
    d = (((i = {})[(i.SendMessage = 0)] = "SendMessage"), (i[(i.CreateThread = 1)] = "CreateThread"), i);
let _ = { 0: {}, 1: {} };
function f(e, t, n) {
    var i, r;
    if (((i = e), null != _[(r = t)][i.id] && (_[r][i.id].timer.stop(), delete _[r][i.id]), (0, o.F3)(e, t) || n <= 0))
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
function h(e, t) {
    let n = u.A.getChannel(e);
    if (null == n) return !1;
    f(n, t, 0 === n.rateLimitPerUser ? 0 : n.rateLimitPerUser * l.A.Millis.SECOND + 100);
}
function p(e) {
    let { channelId: t } = e,
        n = u.A.getChannel(t);
    return null != n && f(n, 0, 0);
}
class E extends r.Ay.Store {
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
        return h(t, n);
    },
    SLOWMODE_SET_COOLDOWN: function (e) {
        let { channelId: t, slowmodeType: n, cooldownMs: i } = e,
            r = u.A.getChannel(t);
        if (null == r) return !1;
        f(r, n, 0 === i ? 0 : i + 100);
    },
    UPLOAD_START: function (e) {
        let { channelId: t } = e;
        return h(t, 0);
    },
    UPLOAD_FAIL: p,
    UPLOAD_CANCEL_REQUEST: p,
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e;
        [0, 1].forEach((e) => {
            for (let n of t) {
                let t = _[e][n.id],
                    i = n.rateLimitPerUser;
                null != t && t.rateLimitPerUser !== i && f(n, e, Math.min(t?.cooldownMs ?? 0, i * l.A.Millis.SECOND));
            }
        });
    },
    LOGOUT: function () {
        [0, 1].forEach((e) => {
            Object.keys(_[e]).forEach((t) => _[e][t].timer.stop()), (_[e] = {});
        });
    },
});
