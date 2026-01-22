n.d(t, {
    GY: () => s,
    U0: () => l,
    ZQ: () => o,
});
var r = n(562465),
    i = n(73153),
    a = n(652215);
async function s() {
    var e;
    let t = await r.Bo.get({
        url: a.Rsh.AUTH_SESSIONS,
        rejectWithError: !1,
    });
    return (
        (null == t ? void 0 : t.ok) &&
            (null == (e = t.body) ? void 0 : e.user_sessions) != null &&
            i.h.dispatch({
                type: "FETCH_AUTH_SESSIONS_SUCCESS",
                sessions: t.body.user_sessions,
            }),
        t
    );
}
function o() {
    i.h.dispatch({
        type: "FETCH_AUTH_SESSIONS_SUCCESS",
        sessions: [],
    });
}
async function l(e) {
    if (Array.isArray(e)) {
        if (0 === e.length) return;
    } else e = [e];
    let t = await r.Bo.post({
        url: a.Rsh.AUTH_SESSIONS_LOGOUT,
        body: { session_id_hashes: e },
        rejectWithError: !1,
    });
    return (
        (null == t ? void 0 : t.ok) &&
            i.h.dispatch({
                type: "LOGOUT_AUTH_SESSIONS_SUCCESS",
                sessionIdHashes: e,
            }),
        t
    );
}
