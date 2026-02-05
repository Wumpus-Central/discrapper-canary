n.d(e, { A: () => c });
var i = n(311907),
    s = n(73153);
let a = [];
function r() {
    a = [];
}
class l extends i.Ay.Store {
    static displayName = "AuthSessionsStore";
    getSessions() {
        return a;
    }
}
let c = new l(s.h, {
    LOGOUT: r,
    LOGIN_SUCCESS: r,
    FETCH_AUTH_SESSIONS_SUCCESS: function (t) {
        let { sessions: e } = t;
        a = e.map((t) => ({ ...t, approx_last_used_time: new Date(t.approx_last_used_time) }));
    },
    LOGOUT_AUTH_SESSIONS_SUCCESS: function (t) {
        let { sessionIdHashes: e } = t,
            n = [...a],
            i = !1;
        for (let t of e) {
            let e = n.findIndex((e) => e.id_hash === t);
            e >= 0 && (n.splice(e, 1), (i = !0));
        }
        if (!i) return !1;
        a = n;
    },
});
