n.d(t, { Z: () => g }), n(47120);
var r,
    i,
    l,
    o = n(442837),
    a = n(570140),
    s = n(445507);
let c = {
        'valorant-user': s.qJ,
        'valorant-admin': s.xQ,
        'genshin-user': s.Zl,
        'genshin-admin': s.Q3
    },
    u = null,
    d = {},
    p = new Set();
function h() {
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
        return p.has(e);
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
let g = new f(a.Z, {
    ENABLE_USER_SIGN_UP: function (e) {
        let { key: t } = e,
            n = c[t];
        (0, s.u9)(n) && 0 === Object.keys(d).length && (u = n);
    },
    ENABLE_GUILD_SIGN_UP: function (e) {
        let { key: t, guildId: n } = e,
            r = c[t];
        (0, s.mC)(r) && ((d[n] = r), (u = null));
    },
    COMPLETE_SIGN_UP: function (e) {
        let { targetKey: t } = e;
        p.add(t), h();
    },
    DISMISS_SIGN_UP: h
});
