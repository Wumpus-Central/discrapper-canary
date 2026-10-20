n.d(t, { T: () => i, m: () => o });
var r = n(73153),
    s = n(975189);
let o = {
    browser_sessions(e, t) {
        let { projectId: n } = t;
        r.h.dispatch({ type: "CONJURE_BROWSER_SESSIONS_SET", projectId: n, sessions: e.sessions });
    },
};
function i(e) {
    (0, s.KY)(e)?.sendRefreshBrowserSessions();
}
