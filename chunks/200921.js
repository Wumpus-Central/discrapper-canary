n.d(t, { GY: () => r, U0: () => o, ZQ: () => a });
var i = n(636537),
    s = n(228366),
    l = n(652215);
async function r() {
    let e = await i.Bo.get({ url: l.Rsh.AUTH_SESSIONS, rejectWithError: !1 });
    return (
        e.body?.user_sessions != null &&
            s.h.dispatch({ type: "FETCH_AUTH_SESSIONS_SUCCESS", sessions: e.body.user_sessions }),
        e
    );
}
function a() {
    s.h.dispatch({ type: "FETCH_AUTH_SESSIONS_SUCCESS", sessions: [] });
}
async function o(e) {
    if (Array.isArray(e)) {
        if (0 === e.length) return;
    } else e = [e];
    let t = await i.Bo.post({ url: l.Rsh.AUTH_SESSIONS_LOGOUT, body: { session_id_hashes: e }, rejectWithError: !1 });
    return (s.h.dispatch({ type: "LOGOUT_AUTH_SESSIONS_SUCCESS", sessionIdHashes: e }), t);
}
