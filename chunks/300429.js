r.d(n, {
    S: function () {
        return i;
    }
});
var i,
    a,
    s = r(47120);
var o = r(442837),
    l = r(846519),
    u = r(570140),
    c = r(70956),
    d = r(592125),
    f = r(496675),
    _ = r(981631);
function h(e, n, r) {
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
let p = 100;
!(function (e) {
    (e[(e.SendMessage = 0)] = 'SendMessage'), (e[(e.CreateThread = 1)] = 'CreateThread');
})(i || (i = {}));
let m = {
    0: {},
    1: {}
};
function g(e, n, r) {
    if ((E(e, n), I(e, n) || r <= 0)) return;
    let i = r + Date.now();
    (m[n][e.id] = {
        rateLimitPerUser: e.rateLimitPerUser,
        cooldownMs: r,
        cooldownEndTimestamp: i,
        timer: new l.V7()
    }),
        m[n][e.id].timer.start(
            1000,
            () => {
                u.Z.dispatch({
                    type: 'SLOWMODE_SET_COOLDOWN',
                    channelId: e.id,
                    slowmodeType: n,
                    cooldownMs: Math.max(i - Date.now(), 0)
                });
            },
            !0
        );
}
function E(e, n) {
    null != m[n][e.id] && (m[n][e.id].timer.stop(), delete m[n][e.id]);
}
function v(e, n) {
    let r = d.Z.getChannel(e);
    if (null == r) return !1;
    g(r, n, 0 === r.rateLimitPerUser ? 0 : r.rateLimitPerUser * c.Z.Millis.SECOND + p);
}
function I(e, n) {
    return 0 === n ? f.Z.can(_.Plq.MANAGE_CHANNELS, e) || f.Z.can(_.Plq.MANAGE_MESSAGES, e) : f.Z.can(_.Plq.MANAGE_THREADS, e);
}
function T(e) {
    let { channelId: n } = e;
    return v(n, 0);
}
function b(e) {
    let { file: n } = e,
        r = d.Z.getChannel(n.channelId);
    return null != r && g(r, 0, 0);
}
function y(e) {
    let { channelId: n, slowmodeType: r } = e;
    return v(n, r);
}
function S(e) {
    let { channelId: n, slowmodeType: r, cooldownMs: i } = e,
        a = d.Z.getChannel(n);
    if (null == a) return !1;
    g(a, r, 0 === i ? 0 : i + p);
}
function A(e) {
    let { channels: n } = e;
    [0, 1].forEach((e) => {
        for (let i of n) {
            var r;
            let n = m[e][i.id],
                a = i.rateLimitPerUser;
            if (null != n && n.rateLimitPerUser !== a) g(i, e, Math.min(null !== (r = null == n ? void 0 : n.cooldownMs) && void 0 !== r ? r : 0, a * c.Z.Millis.SECOND));
        }
    });
}
function N() {
    [0, 1].forEach((e) => {
        Object.keys(m[e]).forEach((n) => m[e][n].timer.stop()), (m[e] = {});
    });
}
class C extends (a = o.ZP.Store) {
    initialize() {
        this.waitFor(d.Z);
    }
    getSlowmodeCooldownGuess(e, n) {
        let r = m[null != n ? n : 0][e];
        return null != r ? r.cooldownMs : 0;
    }
    isChannelOnCooldown(e, n) {
        return this.getSlowmodeCooldownGuess(e.id, n) > 0 && e.rateLimitPerUser > 0;
    }
}
h(C, 'displayName', 'SlowmodeStore'),
    (n.Z = new C(u.Z, {
        SLOWMODE_RESET_COOLDOWN: y,
        SLOWMODE_SET_COOLDOWN: S,
        UPLOAD_START: T,
        UPLOAD_FAIL: b,
        UPLOAD_CANCEL_REQUEST: b,
        CHANNEL_UPDATES: A,
        LOGOUT: N
    }));
