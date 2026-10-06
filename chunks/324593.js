s.d(t, { A: () => r });
var i = s(132500),
    n = s(174459),
    a = s(652215);
let r = new (class {
    searchSessionId = null;
    searchSessionStartTime = null;
    isQueryEnteredTracked = !1;
    getSearchSessionId() {
        return this.searchSessionId;
    }
    isSessionActive() {
        return null != this.searchSessionId;
    }
    initialize() {
        ((this.searchSessionId = (0, i.A)()),
            (this.searchSessionStartTime = Date.now()),
            (this.isQueryEnteredTracked = !1));
    }
    maybeTrackQueryEntered() {
        this.isQueryEnteredTracked || (this.trackQueryEntered(), (this.isQueryEnteredTracked = !0));
    }
    terminate() {
        null != this.searchSessionId &&
            null != this.searchSessionStartTime &&
            (this.trackClosed(Date.now() - this.searchSessionStartTime),
            (this.searchSessionId = null),
            (this.searchSessionStartTime = null),
            (this.isQueryEnteredTracked = !1));
    }
    trackQueryEntered() {
        n.default.track(a.HAw.USER_SETTINGS_SEARCH_QUERY_ENTERED, { search_session_id: this.getSearchSessionId() });
    }
    trackClosed(e) {
        n.default.track(a.HAw.USER_SETTINGS_SEARCH_CLOSED, {
            search_session_id: this.getSearchSessionId(),
            search_session_duration_ms: e,
        });
    }
})();
