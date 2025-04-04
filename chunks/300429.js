n.d(t, {
    S: () => _,
    Z: () => N
}),
    n(47120);
var r,
    i = n(442837),
    o = n(846519),
    a = n(570140),
    s = n(70956),
    l = n(592125),
    c = n(496675),
    u = n(981631);
function d(e, t, n) {
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
let f = 100;
var _ = (function (e) {
    return (e[(e.SendMessage = 0)] = 'SendMessage'), (e[(e.CreateThread = 1)] = 'CreateThread'), e;
})({});
let p = {
    0: {},
    1: {}
};
function h(e, t, n) {
    if ((m(e, t), E(e, t) || n <= 0)) return;
    let r = n + Date.now();
    (p[t][e.id] = {
        rateLimitPerUser: e.rateLimitPerUser,
        cooldownMs: n,
        cooldownEndTimestamp: r,
        timer: new o.V7()
    }),
        p[t][e.id].timer.start(
            1000,
            () => {
                a.Z.dispatch({
                    type: 'SLOWMODE_SET_COOLDOWN',
                    channelId: e.id,
                    slowmodeType: t,
                    cooldownMs: Math.max(r - Date.now(), 0)
                });
            },
            !0
        );
}
function m(e, t) {
    null != p[t][e.id] && (p[t][e.id].timer.stop(), delete p[t][e.id]);
}
function g(e, t) {
    let n = l.Z.getChannel(e);
    if (null == n) return !1;
    h(n, t, 0 === n.rateLimitPerUser ? 0 : n.rateLimitPerUser * s.Z.Millis.SECOND + f);
}
function E(e, t) {
    return 0 === t ? c.Z.can(u.Plq.MANAGE_CHANNELS, e) || c.Z.can(u.Plq.MANAGE_MESSAGES, e) : c.Z.can(u.Plq.MANAGE_THREADS, e);
}
function b(e) {
    let { channelId: t } = e;
    return g(t, 0);
}
function y(e) {
    let { file: t } = e,
        n = l.Z.getChannel(t.channelId);
    return null != n && h(n, 0, 0);
}
function v(e) {
    let { channelId: t, slowmodeType: n } = e;
    return g(t, n);
}
function O(e) {
    let { channelId: t, slowmodeType: n, cooldownMs: r } = e,
        i = l.Z.getChannel(t);
    if (null == i) return !1;
    h(i, n, 0 === r ? 0 : r + f);
}
function I(e) {
    let { channels: t } = e;
    [0, 1].forEach((e) => {
        for (let r of t) {
            var n;
            let t = p[e][r.id],
                i = r.rateLimitPerUser;
            null != t && t.rateLimitPerUser !== i && h(r, e, Math.min(null != (n = null == t ? void 0 : t.cooldownMs) ? n : 0, i * s.Z.Millis.SECOND));
        }
    });
}
function S() {
    [0, 1].forEach((e) => {
        Object.keys(p[e]).forEach((t) => p[e][t].timer.stop()), (p[e] = {});
    });
}
class T extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(l.Z);
    }
    getSlowmodeCooldownGuess(e, t) {
        let n = p[null != t ? t : 0][e];
        return null != n ? n.cooldownMs : 0;
    }
    isChannelOnCooldown(e, t) {
        return this.getSlowmodeCooldownGuess(e.id, t) > 0 && e.rateLimitPerUser > 0;
    }
}
d(T, 'displayName', 'SlowmodeStore');
let N = new T(a.Z, {
    SLOWMODE_RESET_COOLDOWN: v,
    SLOWMODE_SET_COOLDOWN: O,
    UPLOAD_START: b,
    UPLOAD_FAIL: y,
    UPLOAD_CANCEL_REQUEST: y,
    CHANNEL_UPDATES: I,
    LOGOUT: S
});
