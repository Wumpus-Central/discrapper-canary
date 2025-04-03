n.d(t, {
    $Z: () => l,
    L$: () => o,
    fw: () => a
});
var r = n(544891),
    i = n(570140),
    s = n(981631);
async function a() {
    var e;
    let t = await r.tn.get({
        url: s.ANM.AUTH_SESSIONS,
        rejectWithError: !1
    });
    return (
        (null == t ? void 0 : t.ok) &&
            (null == (e = t.body) ? void 0 : e.user_sessions) != null &&
            i.Z.dispatch({
                type: 'FETCH_AUTH_SESSIONS_SUCCESS',
                sessions: t.body.user_sessions
            }),
        t
    );
}
function l() {
    i.Z.dispatch({
        type: 'FETCH_AUTH_SESSIONS_SUCCESS',
        sessions: []
    });
}
async function o(e) {
    if (Array.isArray(e)) {
        if (0 === e.length) return;
    } else e = [e];
    let t = await r.tn.post({
        url: s.ANM.AUTH_SESSIONS_LOGOUT,
        body: { session_id_hashes: e },
        rejectWithError: !1
    });
    return (
        (null == t ? void 0 : t.ok) &&
            i.Z.dispatch({
                type: 'LOGOUT_AUTH_SESSIONS_SUCCESS',
                sessionIdHashes: e
            }),
        t
    );
}
