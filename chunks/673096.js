n.d(t, { Z: () => u }), n(47120);
var i,
    s,
    r,
    l = n(442837),
    a = n(570140);
let o = [];
function c() {
    o = [];
}
class d extends (i = l.ZP.Store) {
    getSessions() {
        return o;
    }
}
(r = 'AuthSessionsStore'),
    (s = 'displayName') in d
        ? Object.defineProperty(d, s, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (d[s] = r);
let u = new d(a.Z, {
    LOGOUT: c,
    LOGIN_SUCCESS: c,
    FETCH_AUTH_SESSIONS_SUCCESS: function (e) {
        let { sessions: t } = e;
        o = t.map((e) => ({
            ...e,
            approx_last_used_time: new Date(e.approx_last_used_time)
        }));
    },
    LOGOUT_AUTH_SESSIONS_SUCCESS: function (e) {
        let { sessionIdHashes: t } = e,
            n = [...o],
            i = !1;
        for (let e of t) {
            let t = n.findIndex((t) => t.id_hash === e);
            t >= 0 && (n.splice(t, 1), (i = !0));
        }
        if (!i) return !1;
        o = n;
    }
});
