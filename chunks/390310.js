n.d(e, { r: () => g, Y: () => p });
var s = n(64700),
    i = n(989349),
    a = n.n(i),
    r = n(17928),
    l = n(495544),
    c = n(228366);
let d = [];
function o() {
    d = [];
}
class u extends r.Ay.Store {
    static displayName = "AuthSessionsStore";
    getSessions() {
        return d;
    }
}
let h = new u(c.h, {
    LOGOUT: o,
    LOGIN_SUCCESS: o,
    FETCH_AUTH_SESSIONS_SUCCESS: function (t) {
        let { sessions: e } = t;
        d = e.map((t) => ({ ...t, approx_last_used_time: new Date(t.approx_last_used_time) }));
    },
    LOGOUT_AUTH_SESSIONS_SUCCESS: function (t) {
        let { sessionIdHashes: e } = t,
            n = [...d],
            s = !1;
        for (let t of e) {
            let e = n.findIndex((e) => e.id_hash === t);
            e >= 0 && (n.splice(e, 1), (s = !0));
        }
        if (!s) return !1;
        d = n;
    },
});
var x = n(985018);
function g() {
    let t = (0, r.cf)([h], () => h.getSessions());
    return s.useMemo(() => {
        let e = [...t],
            n = null,
            s = l.default.getAuthSessionIdHash();
        if (null != s) {
            let t = e.findIndex((t) => t.id_hash === s);
            t >= 0 && (n = e.splice(t, 1)[0]);
        }
        return (
            e.sort((t, e) => e.approx_last_used_time.valueOf() - t.approx_last_used_time.valueOf()),
            { currentSession: n, otherSessions: e }
        );
    }, [t]);
}
function p(t) {
    return (Date.now() - t.valueOf()) / 1e3 / 60 / 60 < 1 ? x.intl.string(x.t.TXCmfL) : a()(t).fromNow();
}
