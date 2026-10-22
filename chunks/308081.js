n.d(t, { T: () => i, m: () => o });
var s = n(73153),
    r = n(975189);
let o = {
    browser_sessions(e, t) {
        let { projectId: n } = t;
        s.h.dispatch({ type: "CONJURE_BROWSER_SESSIONS_SET", projectId: n, sessions: e.sessions });
    },
};
function i(e) {
    (0, r.KY)(e)?.sendRefreshBrowserSessions();
}
