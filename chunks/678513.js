n.d(t, { Z: () => g }), n(388685);
var r,
    i,
    l,
    o = n(442837),
    s = n(570140),
    a = n(445507);
let c = {
        'valorant-user': a.qJ,
        'valorant-admin': a.xQ,
        'genshin-user': a.Zl,
        'genshin-admin': a.Q3
    },
    u = null,
    d = {},
    h = new Set();
function p() {
    for (let e in ((u = null), d)) delete d[e];
}
class f extends (r = o.ZP.Store) {
    getActiveUserSignUp() {
        return u;
    }
    getActiveGuildSignUp(e) {
        var t;
        return null != (t = d[e]) ? t : null;
    }
    hasCompletedTarget(e) {
        return h.has(e);
    }
}
(l = 'SignUpStore'),
    (i = 'displayName') in f
        ? Object.defineProperty(f, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (f[i] = l);
let g = new f(s.Z, {
    ENABLE_USER_SIGN_UP: function (e) {
        let { key: t } = e,
            n = c[t];
        (0, a.u9)(n) && 0 === Object.keys(d).length && (u = n);
    },
    ENABLE_GUILD_SIGN_UP: function (e) {
        let { key: t, guildId: n } = e,
            r = c[t];
        (0, a.mC)(r) && ((d[n] = r), (u = null));
    },
    COMPLETE_SIGN_UP: function (e) {
        let { targetKey: t } = e;
        h.add(t), p();
    },
    DISMISS_SIGN_UP: p
});
