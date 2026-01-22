n.d(t, {
    A: () => I,
    R: () => p,
}),
    n(896048);
var r,
    i = n(311907),
    a = n(451988),
    s = n(73153),
    o = n(960850),
    l = n(927813),
    c = n(734057),
    u = n(576705);

function d(e, t, n) {
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
let f = 100;
var p = (function (e) {
    return (e[(e.SendMessage = 0)] = "SendMessage"), (e[(e.CreateThread = 1)] = "CreateThread"), e;
})({});
let _ = {
    0: {},
    1: {},
};

function h(e, t, n) {
    if ((m(e, t), (0, o.F)(e, t) || n <= 0)) return;
    let r = n + Date.now();
    (_[t][e.id] = {
        rateLimitPerUser: e.rateLimitPerUser,
        cooldownMs: n,
        cooldownEndTimestamp: r,
        timer: new a.Ep(),
    }),
        _[t][e.id].timer.start(
            1e3,
            () => {
                s.h.dispatch({
                    type: "SLOWMODE_SET_COOLDOWN",
                    channelId: e.id,
                    slowmodeType: t,
                    cooldownMs: Math.max(r - Date.now(), 0),
                });
            },
            !0,
        );
}

function m(e, t) {
    null != _[t][e.id] && (_[t][e.id].timer.stop(), delete _[t][e.id]);
}

function g(e, t) {
    let n = c.A.getChannel(e);
    if (null == n) return !1;
    h(n, t, 0 === n.rateLimitPerUser ? 0 : n.rateLimitPerUser * l.A.Millis.SECOND + f);
}

function E(e) {
    let { channelId: t } = e;
    return g(t, 0);
}

function b(e) {
    let { channelId: t } = e,
        n = c.A.getChannel(t);
    return null != n && h(n, 0, 0);
}

function y(e) {
    let { channelId: t, slowmodeType: n } = e;
    return g(t, n);
}

function O(e) {
    let { channelId: t, slowmodeType: n, cooldownMs: r } = e,
        i = c.A.getChannel(t);
    if (null == i) return !1;
    h(i, n, 0 === r ? 0 : r + f);
}

function A(e) {
    let { channels: t } = e;
    [0, 1].forEach((e) => {
        for (let r of t) {
            var n;
            let t = _[e][r.id],
                i = r.rateLimitPerUser;
            null != t &&
                t.rateLimitPerUser !== i &&
                h(r, e, Math.min(null != (n = null == t ? void 0 : t.cooldownMs) ? n : 0, i * l.A.Millis.SECOND));
        }
    });
}

function v() {
    [0, 1].forEach((e) => {
        Object.keys(_[e]).forEach((t) => _[e][t].timer.stop()), (_[e] = {});
    });
}
class S extends (r = i.Ay.Store) {
    initialize() {
        this.waitFor(c.A, u.A);
    }
    getSlowmodeCooldownGuess(e, t) {
        let n = _[null != t ? t : 0][e];
        return null != n ? n.cooldownMs : 0;
    }
    isChannelOnCooldown(e, t) {
        return this.getSlowmodeCooldownGuess(e.id, t) > 0 && e.rateLimitPerUser > 0;
    }
}
d(S, "displayName", "SlowmodeStore");
let I = new S(s.h, {
    SLOWMODE_RESET_COOLDOWN: y,
    SLOWMODE_SET_COOLDOWN: O,
    UPLOAD_START: E,
    UPLOAD_FAIL: b,
    UPLOAD_CANCEL_REQUEST: b,
    CHANNEL_UPDATES: A,
    LOGOUT: v,
});
