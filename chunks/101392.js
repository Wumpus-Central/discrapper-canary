"use strict";
n.d(t, { A: () => f, R: () => u });
var i,
    r = n(17928),
    a = n(451988),
    s = n(228366),
    l = n(960850),
    o = n(927813),
    d = n(734057),
    c = n(576705),
    u = (((i = {})[(i.SendMessage = 0)] = "SendMessage"), (i[(i.CreateThread = 1)] = "CreateThread"), i);
let _ = { 0: {}, 1: {} };
function E(e, t, n) {
    var i, r;
    if (((i = e), null != _[(r = t)][i.id] && (_[r][i.id].timer.stop(), delete _[r][i.id]), (0, l.F3)(e) || n <= 0))
        return;
    let o = n + Date.now();
    (_[t][e.id] = { rateLimitPerUser: e.rateLimitPerUser, cooldownMs: n, cooldownEndTimestamp: o, timer: new a.Ep() }),
        _[t][e.id].timer.start(
            1e3,
            () => {
                s.h.dispatch({
                    type: "SLOWMODE_SET_COOLDOWN",
                    channelId: e.id,
                    slowmodeType: t,
                    cooldownMs: Math.max(o - Date.now(), 0),
                });
            },
            !0,
        );
}
function A(e, t) {
    let n = d.A.getChannel(e);
    if (null == n) return !1;
    E(n, t, 0 === n.rateLimitPerUser ? 0 : n.rateLimitPerUser * o.A.Millis.SECOND + 100);
}
function h(e) {
    let { channelId: t } = e,
        n = d.A.getChannel(t);
    return null != n && E(n, 0, 0);
}
class I extends r.Ay.Store {
    static displayName = "SlowmodeStore";
    initialize() {
        this.waitFor(d.A, c.A);
    }
    getSlowmodeCooldownGuess(e, t) {
        let n = _[t ?? 0][e];
        return null != n ? n.cooldownMs : 0;
    }
    isChannelOnCooldown(e, t) {
        return this.getSlowmodeCooldownGuess(e.id, t) > 0 && e.rateLimitPerUser > 0;
    }
}
let f = new I(s.h, {
    SLOWMODE_RESET_COOLDOWN: function (e) {
        let { channelId: t, slowmodeType: n } = e;
        return A(t, n);
    },
    SLOWMODE_SET_COOLDOWN: function (e) {
        let { channelId: t, slowmodeType: n, cooldownMs: i } = e,
            r = d.A.getChannel(t);
        if (null == r) return !1;
        E(r, n, 0 === i ? 0 : i + 100);
    },
    UPLOAD_START: function (e) {
        let { channelId: t } = e;
        return A(t, 0);
    },
    UPLOAD_FAIL: h,
    UPLOAD_CANCEL_REQUEST: h,
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e;
        [0, 1].forEach((e) => {
            for (let n of t) {
                let t = _[e][n.id],
                    i = n.rateLimitPerUser;
                null != t && t.rateLimitPerUser !== i && E(n, e, Math.min(t?.cooldownMs ?? 0, i * o.A.Millis.SECOND));
            }
        });
    },
    LOGOUT: function () {
        [0, 1].forEach((e) => {
            Object.keys(_[e]).forEach((t) => _[e][t].timer.stop()), (_[e] = {});
        });
    },
});
