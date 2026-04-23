"use strict";
n.d(t, { A: () => g, R: () => u });
var i,
    r = n(17928),
    s = n(451988),
    a = n(228366),
    o = n(960850),
    l = n(927813),
    d = n(734057),
    _ = n(576705),
    u = (((i = {})[(i.SendMessage = 0)] = "SendMessage"), (i[(i.CreateThread = 1)] = "CreateThread"), i);
let c = { 0: {}, 1: {} };
function E(e, t, n) {
    var i, r;
    if (((i = e), null != c[(r = t)][i.id] && (c[r][i.id].timer.stop(), delete c[r][i.id]), (0, o.F)(e, t) || n <= 0))
        return;
    let l = n + Date.now();
    (c[t][e.id] = { rateLimitPerUser: e.rateLimitPerUser, cooldownMs: n, cooldownEndTimestamp: l, timer: new s.Ep() }),
        c[t][e.id].timer.start(
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
    let n = d.A.getChannel(e);
    if (null == n) return !1;
    E(n, t, 0 === n.rateLimitPerUser ? 0 : n.rateLimitPerUser * l.A.Millis.SECOND + 100);
}
function m(e) {
    let { channelId: t } = e,
        n = d.A.getChannel(t);
    return null != n && E(n, 0, 0);
}
class f extends r.Ay.Store {
    static displayName = "SlowmodeStore";
    initialize() {
        this.waitFor(d.A, _.A);
    }
    getSlowmodeCooldownGuess(e, t) {
        let n = c[t ?? 0][e];
        return null != n ? n.cooldownMs : 0;
    }
    isChannelOnCooldown(e, t) {
        return this.getSlowmodeCooldownGuess(e.id, t) > 0 && e.rateLimitPerUser > 0;
    }
}
let g = new f(a.h, {
    SLOWMODE_RESET_COOLDOWN: function (e) {
        let { channelId: t, slowmodeType: n } = e;
        return h(t, n);
    },
    SLOWMODE_SET_COOLDOWN: function (e) {
        let { channelId: t, slowmodeType: n, cooldownMs: i } = e,
            r = d.A.getChannel(t);
        if (null == r) return !1;
        E(r, n, 0 === i ? 0 : i + 100);
    },
    UPLOAD_START: function (e) {
        let { channelId: t } = e;
        return h(t, 0);
    },
    UPLOAD_FAIL: m,
    UPLOAD_CANCEL_REQUEST: m,
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e;
        [0, 1].forEach((e) => {
            for (let n of t) {
                let t = c[e][n.id],
                    i = n.rateLimitPerUser;
                null != t && t.rateLimitPerUser !== i && E(n, e, Math.min(t?.cooldownMs ?? 0, i * l.A.Millis.SECOND));
            }
        });
    },
    LOGOUT: function () {
        [0, 1].forEach((e) => {
            Object.keys(c[e]).forEach((t) => c[e][t].timer.stop()), (c[e] = {});
        });
    },
});
