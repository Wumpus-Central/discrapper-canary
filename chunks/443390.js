s.d(t, { A: () => l }), s(321073);
var n = s(822382),
    r = s(145331),
    i = s(132500);
function a() {
    return { sessionId: (0, i.A)(), searchQueryId: null };
}
class c {
    sessions = new Map();
    getSession(e) {
        return this.sessions.get((0, n.bS)(e)) ?? null;
    }
    setSession(e, t) {
        let s = (0, n.bS)(e),
            r = this.sessions.get(s) ?? a();
        this.sessions.set(s, { ...r, ...t });
    }
    deleteSession(e) {
        this.sessions.delete((0, n.bS)(e));
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
        for (var t = arguments.length, s = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) s[n - 1] = arguments[n];
        this._initialize(e, ...s), this.setSession(e, { sessionId: (0, i.A)(), searchQueryId: null });
    }
    terminate(e) {
        this._terminate(e), this.deleteSession(e);
    }
    transferSession(e, t) {
        this._transferSession(e, t);
        let s = this.getSession(e);
        this.sessions.set((0, n.bS)(t), s ?? a()), this.deleteSession(e);
    }
}
class o extends c {
    viewStates = new Map();
    pendingTimeouts = new Map();
    pendingEvents = new Map();
    _initialize(e) {}
    _terminate(e) {
        let t = (0, n.bS)(e);
        clearTimeout(this.pendingTimeouts.get(t)),
            this.pendingTimeouts.delete(t),
            this.viewStates.delete(t),
            this.pendingEvents.delete(t);
    }
    _transferSession(e, t) {
        let s = (0, n.bS)(e),
            r = (0, n.bS)(t),
            i = this.getViewState(e);
        this.setViewState(t, i), this.viewStates.delete(s);
        let a = this.pendingTimeouts.get(s);
        null != a && (clearTimeout(a), this.pendingTimeouts.delete(s), this.schedule(t));
        let c = this.pendingEvents.get(s);
        null != c && (this.pendingEvents.set(r, c), this.pendingEvents.delete(s));
    }
    getViewState(e) {
        let t = (0, n.bS)(e);
        return this.viewStates.get(t) ?? { isFocused: !1, isSidebarOpen: !1, isFiltersModalOpen: !1, didTrackOpen: !1 };
    }
    setViewState(e, t) {
        let s = (0, n.bS)(e);
        this.viewStates.set(s, { ...this.getViewState(e), ...t });
    }
    schedule(e) {
        let t = (0, n.bS)(e);
        clearTimeout(this.pendingTimeouts.get(t));
        let s = setTimeout(() => {
            this.pendingTimeouts.delete(t), this.evaluateViewState(e);
        }, 0);
        this.pendingTimeouts.set(t, s);
    }
    evaluateViewState(e) {
        let t = this.getViewState(e),
            s = t.isFocused || t.isSidebarOpen || t.isFiltersModalOpen;
        s && !t.didTrackOpen
            ? (this.setViewState(e, { didTrackOpen: !0 }), (0, r.pY)({ searchContext: e }), this.flushPendingEvents(e))
            : !s && t.didTrackOpen && (0, r.gp)({ searchContext: e });
    }
    setFocused(e, t) {
        this.setViewState(e, { isFocused: t }), this.schedule(e);
    }
    setSidebarOpen(e, t) {
        this.setViewState(e, { isSidebarOpen: t }), this.schedule(e);
    }
    setFiltersModalOpen(e, t) {
        this.setViewState(e, { isFiltersModalOpen: t }), this.schedule(e);
    }
    enqueueEvent(e, t) {
        let s = (0, n.bS)(e),
            r = this.pendingEvents.get(s) ?? [];
        r.push(t), this.pendingEvents.set(s, r);
    }
    flushPendingEvents(e) {
        let t = (0, n.bS)(e),
            s = this.pendingEvents.get(t);
        null != s && s.forEach((e) => e()), this.pendingEvents.delete(t);
    }
}
let l = new o();
