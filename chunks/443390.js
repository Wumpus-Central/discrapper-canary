(s.d(t, { A: () => d }), s(321073));
var r = s(95561),
    a = s(822382),
    n = s(963144),
    i = s(132500);
function _() {
    return { sessionId: (0, i.A)(), searchQueryId: null };
}
class c {
    sessions = new Map();
    getSession(e) {
        return this.sessions.get((0, a.bS)(e)) ?? null;
    }
    setSession(e, t) {
        let s = (0, a.bS)(e),
            r = this.sessions.get(s) ?? _();
        this.sessions.set(s, { ...r, ...t });
    }
    deleteSession(e) {
        this.sessions.delete((0, a.bS)(e));
    }
    getSessionId(e) {
        return this.getSession(e)?.sessionId ?? null;
    }
    getQueryId(e) {
        return this.getSession(e)?.searchQueryId ?? null;
    }
    refreshQueryId(e) {
        this.setSession(e, { searchQueryId: (0, i.A)() });
    }
    initialize(e) {
        for (var t = arguments.length, s = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) s[r - 1] = arguments[r];
        (this._initialize(e, ...s), this.setSession(e, { sessionId: (0, i.A)(), searchQueryId: null }));
    }
    terminate(e) {
        (this._terminate(e), this.deleteSession(e));
    }
    transferSession(e, t) {
        this._transferSession(e, t);
        let s = this.getSession(e);
        (this.sessions.set((0, a.bS)(t), s ?? _()), this.deleteSession(e));
    }
}
var l = s(652215);
class h extends c {
    viewStates = new Map();
    pendingTimeouts = new Map();
    pendingEvents = new Map();
    _initialize(e) {}
    _terminate(e) {
        let t = (0, a.bS)(e);
        (clearTimeout(this.pendingTimeouts.get(t)),
            this.pendingTimeouts.delete(t),
            this.viewStates.delete(t),
            this.pendingEvents.delete(t));
    }
    _transferSession(e, t) {
        let s = (0, a.bS)(e),
            r = (0, a.bS)(t),
            n = this.getViewState(e);
        (this.setViewState(t, n), this.viewStates.delete(s));
        let i = this.pendingTimeouts.get(s);
        null != i && (clearTimeout(i), this.pendingTimeouts.delete(s), this.schedule(t));
        let _ = this.pendingEvents.get(s);
        null != _ && (this.pendingEvents.set(r, _), this.pendingEvents.delete(s));
    }
    getViewState(e) {
        let t = (0, a.bS)(e);
        return this.viewStates.get(t) ?? { isFocused: !1, isSidebarOpen: !1, isFiltersModalOpen: !1, didTrackOpen: !1 };
    }
    setViewState(e, t) {
        let s = (0, a.bS)(e);
        this.viewStates.set(s, { ...this.getViewState(e), ...t });
    }
    schedule(e) {
        let t = (0, a.bS)(e);
        clearTimeout(this.pendingTimeouts.get(t));
        let s = setTimeout(() => {
            (this.pendingTimeouts.delete(t), this.evaluateViewState(e));
        }, 0);
        this.pendingTimeouts.set(t, s);
    }
    evaluateViewState(e) {
        let t = this.getViewState(e),
            s = t.isFocused || t.isSidebarOpen || t.isFiltersModalOpen;
        s && !t.didTrackOpen
            ? (this.setViewState(e, { didTrackOpen: !0 }), this.trackSearchOpened(e), this.flushPendingEvents(e))
            : !s && t.didTrackOpen && this.trackSearchClosed(e);
    }
    trackSearchOpened(e) {
        (this.initialize(e),
            r.Ay.trackWithMetadata(l.HAw.SEARCH_OPENED, {
                search_id: (0, n.l)(e),
                search_session_id: this.getSessionId(e),
                search_type: e.type,
            }));
    }
    trackSearchClosed(e) {
        (r.Ay.trackWithMetadata(l.HAw.SEARCH_CLOSED, {
            search_id: (0, n.l)(e),
            search_session_id: this.getSessionId(e),
            search_query_id: this.getQueryId(e),
            search_type: e.type,
        }),
            this.terminate(e));
    }
    setFocused(e, t) {
        (this.setViewState(e, { isFocused: t }), this.schedule(e));
    }
    setSidebarOpen(e, t) {
        (this.setViewState(e, { isSidebarOpen: t }), this.schedule(e));
    }
    setFiltersModalOpen(e, t) {
        (this.setViewState(e, { isFiltersModalOpen: t }), this.schedule(e));
    }
    enqueueEvent(e, t) {
        let s = (0, a.bS)(e),
            r = this.pendingEvents.get(s) ?? [];
        (r.push(t), this.pendingEvents.set(s, r));
    }
    getLocation(e) {}
    flushPendingEvents(e) {
        let t = (0, a.bS)(e),
            s = this.pendingEvents.get(t);
        (null != s && s.forEach((e) => e()), this.pendingEvents.delete(t));
    }
}
let d = new h();
