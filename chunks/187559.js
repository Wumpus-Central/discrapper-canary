n.d(t, { MH: () => o, j6: () => s });
var i = n(954571),
    r = n(324593),
    l = n(652215);
function s() {
    i.default.track(l.HAw.USER_SETTINGS_SEARCH_QUERY_ENTERED, { search_session_id: r.A.getSearchSessionId() });
}
function o(e) {
    let { searchSessionDuration: t } = e;
    i.default.track(l.HAw.USER_SETTINGS_SEARCH_CLOSED, {
        search_session_id: r.A.getSearchSessionId(),
        search_session_duration_ms: t,
    });
}
