n.d(t, { A: () => r });
var i = n(835245),
    l = n(187559);
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
        (this.searchSessionId = (0, i.A)()),
            (this.searchSessionStartTime = Date.now()),
            (this.isQueryEnteredTracked = !1);
    }
    maybeTrackQueryEntered() {
        this.isQueryEnteredTracked || ((0, l.j6)(), (this.isQueryEnteredTracked = !0));
    }
    terminate() {
        null != this.searchSessionId &&
            null != this.searchSessionStartTime &&
            ((0, l.MH)({ searchSessionDuration: Date.now() - this.searchSessionStartTime }),
            (this.searchSessionId = null),
            (this.searchSessionStartTime = null),
            (this.isQueryEnteredTracked = !1));
    }
})();
