n.d(t, { MH: () => d, f1: () => r, j6: () => a });
var i = n(954571),
    s = n(324593),
    l = n(652215);
function r() {
    i.default.track(l.HAw.USER_SETTINGS_SEARCH_PRESS);
}
function a() {
    i.default.track(l.HAw.USER_SETTINGS_SEARCH_QUERY_ENTERED, { search_session_id: s.A.getSearchSessionId() });
}
function d(e) {
    let { searchSessionDuration: t } = e;
    i.default.track(l.HAw.USER_SETTINGS_SEARCH_CLOSED, {
        search_session_id: s.A.getSearchSessionId(),
        search_session_duration_ms: t,
    });
}
