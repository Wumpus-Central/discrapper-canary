n(47120);
var i,
    s,
    r,
    a,
    l = n(442837),
    o = n(570140);
let c = [];
function d() {
    c = [];
}
class u extends (i = l.ZP.Store) {
    getSessions() {
        return c;
    }
}
(a = 'AuthSessionsStore'),
    (r = 'displayName') in (s = u)
        ? Object.defineProperty(s, r, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[r] = a),
    (t.Z = new u(o.Z, {
        LOGOUT: d,
        LOGIN_SUCCESS: d,
        FETCH_AUTH_SESSIONS_SUCCESS: function (e) {
            let { sessions: t } = e;
            c = t.map((e) => ({
                ...e,
                approx_last_used_time: new Date(e.approx_last_used_time)
            }));
        },
        LOGOUT_AUTH_SESSIONS_SUCCESS: function (e) {
            let { sessionIdHashes: t } = e,
                n = [...c],
                i = !1;
            for (let e of t) {
                let t = n.findIndex((t) => t.id_hash === e);
                t >= 0 && (n.splice(t, 1), (i = !0));
            }
            if (!i) return !1;
            c = n;
        }
    }));
