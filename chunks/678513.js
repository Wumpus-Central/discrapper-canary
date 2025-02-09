n.d(t, { Z: () => g }), n(47120);
var i,
    l,
    r,
    a = n(442837),
    o = n(570140),
    s = n(445507);
let c = {
        'valorant-user': s.qJ,
        'valorant-admin': s.xQ,
        'genshin-user': s.Zl,
        'genshin-admin': s.Q3
    },
    d = null,
    u = {},
    h = new Set();
function p() {
    for (let e in ((d = null), u)) delete u[e];
}
class m extends (i = a.ZP.Store) {
    getActiveUserSignUp() {
        return d;
    }
    getActiveGuildSignUp(e) {
        var t;
        return null !== (t = u[e]) && void 0 !== t ? t : null;
    }
    hasCompletedTarget(e) {
        return h.has(e);
    }
}
(r = 'SignUpStore'),
    (l = 'displayName') in m
        ? Object.defineProperty(m, l, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (m[l] = r);
let g = new m(o.Z, {
    ENABLE_USER_SIGN_UP: function (e) {
        let { key: t } = e,
            n = c[t];
        (0, s.u9)(n) && 0 === Object.keys(u).length && (d = n);
    },
    ENABLE_GUILD_SIGN_UP: function (e) {
        let { key: t, guildId: n } = e,
            i = c[t];
        (0, s.mC)(i) && ((u[n] = i), (d = null));
    },
    COMPLETE_SIGN_UP: function (e) {
        let { targetKey: t } = e;
        h.add(t), p();
    },
    DISMISS_SIGN_UP: p
});
