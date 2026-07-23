s.d(t, { A: () => _ }), s(321073);
var r = s(822382),
    n = s(145331),
    i = s(554931);
class a extends i.A {
    viewStates = new Map();
    pendingTimeouts = new Map();
    pendingEvents = new Map();
    _initialize(e) {}
    _terminate(e) {
        let t = (0, r.bS)(e);
        clearTimeout(this.pendingTimeouts.get(t)),
            this.pendingTimeouts.delete(t),
            this.viewStates.delete(t),
            this.pendingEvents.delete(t);
    }
    _transferSession(e, t) {
        let s = (0, r.bS)(e),
            n = (0, r.bS)(t),
            i = this.getViewState(e);
        this.setViewState(t, i), this.viewStates.delete(s);
        let a = this.pendingTimeouts.get(s);
        null != a && (clearTimeout(a), this.pendingTimeouts.delete(s), this.schedule(t));
        let _ = this.pendingEvents.get(s);
        null != _ && (this.pendingEvents.set(n, _), this.pendingEvents.delete(s));
    }
    getViewState(e) {
        let t = (0, r.bS)(e);
        return this.viewStates.get(t) ?? { isFocused: !1, isSidebarOpen: !1, isFiltersModalOpen: !1, didTrackOpen: !1 };
    }
    setViewState(e, t) {
        let s = (0, r.bS)(e);
        this.viewStates.set(s, { ...this.getViewState(e), ...t });
    }
    schedule(e) {
        let t = (0, r.bS)(e);
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
            ? (this.setViewState(e, { didTrackOpen: !0 }), (0, n.pY)({ searchContext: e }), this.flushPendingEvents(e))
            : !s && t.didTrackOpen && (0, n.gp)({ searchContext: e });
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
        let s = (0, r.bS)(e),
            n = this.pendingEvents.get(s) ?? [];
        n.push(t), this.pendingEvents.set(s, n);
    }
    flushPendingEvents(e) {
        let t = (0, r.bS)(e),
            s = this.pendingEvents.get(t);
        null != s && s.forEach((e) => e()), this.pendingEvents.delete(t);
    }
}
let _ = new a();
