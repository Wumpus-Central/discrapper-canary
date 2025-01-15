n(47120);
var i,
    l,
    r,
    a,
    o = n(442837),
    s = n(570140),
    c = n(445507);
let u = {
        'valorant-user': c.qJ,
        'valorant-admin': c.xQ,
        'genshin-user': c.Zl,
        'genshin-admin': c.Q3
    },
    d = null,
    h = {},
    p = new Set();
function m() {
    for (let e in ((d = null), h)) delete h[e];
}
class f extends (i = o.ZP.Store) {
    getActiveUserSignUp() {
        return d;
    }
    getActiveGuildSignUp(e) {
        var t;
        return null !== (t = h[e]) && void 0 !== t ? t : null;
    }
    hasCompletedTarget(e) {
        return p.has(e);
    }
}
(a = 'SignUpStore'),
    (r = 'displayName') in (l = f)
        ? Object.defineProperty(l, r, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[r] = a),
    (t.Z = new f(s.Z, {
        ENABLE_USER_SIGN_UP: function (e) {
            let { key: t } = e,
                n = u[t];
            (0, c.u9)(n) && 0 === Object.keys(h).length && (d = n);
        },
        ENABLE_GUILD_SIGN_UP: function (e) {
            let { key: t, guildId: n } = e,
                i = u[t];
            (0, c.mC)(i) && ((h[n] = i), (d = null));
        },
        COMPLETE_SIGN_UP: function (e) {
            let { targetKey: t } = e;
            p.add(t), m();
        },
        DISMISS_SIGN_UP: m
    }));
