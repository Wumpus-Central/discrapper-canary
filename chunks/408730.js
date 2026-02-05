r.d(t, { A: () => i }), r(321073);
var s = r(822382),
    n = r(145331),
    l = r(554931);
class a extends l.A {
    viewStates = new Map();
    pendingTimeouts = new Map();
    pendingEvents = new Map();
    _initialize(e) {}
    _terminate(e) {
        let t = (0, s.bS)(e);
        clearTimeout(this.pendingTimeouts.get(t)),
            this.pendingTimeouts.delete(t),
            this.viewStates.delete(t),
            this.pendingEvents.delete(t);
    }
    _transferSession(e, t) {
        let r = (0, s.bS)(e),
            n = (0, s.bS)(t),
            l = this.getViewState(e);
        this.setViewState(t, l), this.viewStates.delete(r);
        let a = this.pendingTimeouts.get(r);
        null != a && (clearTimeout(a), this.pendingTimeouts.delete(r), this.schedule(t));
        let i = this.pendingEvents.get(r);
        null != i && (this.pendingEvents.set(n, i), this.pendingEvents.delete(r));
    }
    getViewState(e) {
        let t = (0, s.bS)(e);
        return this.viewStates.get(t) ?? { isFocused: !1, isSidebarOpen: !1, isFiltersModalOpen: !1, didTrackOpen: !1 };
    }
    setViewState(e, t) {
        let r = (0, s.bS)(e);
        this.viewStates.set(r, { ...this.getViewState(e), ...t });
    }
    schedule(e) {
        let t = (0, s.bS)(e);
        clearTimeout(this.pendingTimeouts.get(t));
        let r = setTimeout(() => {
            this.pendingTimeouts.delete(t), this.evaluateViewState(e);
        }, 0);
        this.pendingTimeouts.set(t, r);
    }
    evaluateViewState(e) {
        let t = this.getViewState(e),
            r = t.isFocused || t.isSidebarOpen || t.isFiltersModalOpen;
        r && !t.didTrackOpen
            ? (this.setViewState(e, { didTrackOpen: !0 }), (0, n.pY)({ searchContext: e }), this.flushPendingEvents(e))
            : !r && t.didTrackOpen && (0, n.gp)({ searchContext: e });
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
        let r = (0, s.bS)(e),
            n = this.pendingEvents.get(r) ?? [];
        n.push(t), this.pendingEvents.set(r, n);
    }
    flushPendingEvents(e) {
        let t = (0, s.bS)(e),
            r = this.pendingEvents.get(t);
        null != r && r.forEach((e) => e()), this.pendingEvents.delete(t);
    }
}
let i = new a();
