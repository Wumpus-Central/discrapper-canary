n.d(e, { A: () => c });
var s = n(311907),
    i = n(73153);
let a = [];
function r() {
    a = [];
}
class l extends s.Ay.Store {
    static displayName = "AuthSessionsStore";
    getSessions() {
        return a;
    }
}
let c = new l(i.h, {
    LOGOUT: r,
    LOGIN_SUCCESS: r,
    FETCH_AUTH_SESSIONS_SUCCESS: function (t) {
        let { sessions: e } = t;
        a = e.map((t) => ({ ...t, approx_last_used_time: new Date(t.approx_last_used_time) }));
    },
    LOGOUT_AUTH_SESSIONS_SUCCESS: function (t) {
        let { sessionIdHashes: e } = t,
            n = [...a],
            s = !1;
        for (let t of e) {
            let e = n.findIndex((e) => e.id_hash === t);
            e >= 0 && (n.splice(e, 1), (s = !0));
        }
        if (!s) return !1;
        a = n;
    },
});
