var i = n(620632),
    l = n(73153),
    s = n(652215);
n.d(
    t,
    {},
    {
        GY: async function () {
            let e = await i.Bo.get({ url: s.Rsh.AUTH_SESSIONS, rejectWithError: !1 });
            return (
                e.body?.user_sessions != null &&
                    l.h.dispatch({ type: "FETCH_AUTH_SESSIONS_SUCCESS", sessions: e.body.user_sessions }),
                e
            );
        },
        U0: async function (e) {
            if (Array.isArray(e)) {
                if (0 === e.length) return;
            } else e = [e];
            let t = await i.Bo.post({
                url: s.Rsh.AUTH_SESSIONS_LOGOUT,
                body: { session_id_hashes: e },
                rejectWithError: !1,
            });
            return (l.h.dispatch({ type: "LOGOUT_AUTH_SESSIONS_SUCCESS", sessionIdHashes: e }), t);
        },
        ZQ: function () {
            l.h.dispatch({ type: "FETCH_AUTH_SESSIONS_SUCCESS", sessions: [] });
        },
    },
);
