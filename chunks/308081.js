n.d(t, { T: () => o, m: () => i });
var r = n(73153),
    s = n(975189);
let i = {
    browser_sessions(e, t) {
        let { projectId: n } = t;
        r.h.dispatch({ type: "CONJURE_BROWSER_SESSIONS_SET", projectId: n, sessions: e.sessions });
    },
};
function o(e) {
    (0, s.KY)(e)?.sendRefreshBrowserSessions();
}
