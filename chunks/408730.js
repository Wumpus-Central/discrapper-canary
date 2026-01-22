n.d(t, { A: () => u }), n(321073), n(896048);
var r = n(822382),
    i = n(145331),
    a = n(554931);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function o(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                s(e, t, n[t]);
            });
    }
    return e;
}
function l() {
    return {
        isFocused: !1,
        isSidebarOpen: !1,
        isFiltersModalOpen: !1,
        didTrackOpen: !1,
    };
}
class c extends a.A {
    _initialize(e) {}
    _terminate(e) {
        let t = (0, r.bS)(e);
        clearTimeout(this.pendingTimeouts.get(t)),
            this.pendingTimeouts.delete(t),
            this.viewStates.delete(t),
            this.pendingEvents.delete(t);
    }
    _transferSession(e, t) {
        let n = (0, r.bS)(e),
            i = (0, r.bS)(t),
            a = this.getViewState(e);
        this.setViewState(t, a), this.viewStates.delete(n);
        let s = this.pendingTimeouts.get(n);
        null != s && (clearTimeout(s), this.pendingTimeouts.delete(n), this.schedule(t));
        let o = this.pendingEvents.get(n);
        null != o && (this.pendingEvents.set(i, o), this.pendingEvents.delete(n));
    }
    getViewState(e) {
        var t;
        let n = (0, r.bS)(e);
        return null != (t = this.viewStates.get(n)) ? t : l();
    }
    setViewState(e, t) {
        let n = (0, r.bS)(e);
        this.viewStates.set(n, o({}, this.getViewState(e), t));
    }
    schedule(e) {
        let t = (0, r.bS)(e);
        clearTimeout(this.pendingTimeouts.get(t));
        let n = setTimeout(() => {
            this.pendingTimeouts.delete(t), this.evaluateViewState(e);
        }, 0);
        this.pendingTimeouts.set(t, n);
    }
    evaluateViewState(e) {
        let t = this.getViewState(e),
            n = t.isFocused || t.isSidebarOpen || t.isFiltersModalOpen;
        n && !t.didTrackOpen
            ? (this.setViewState(e, { didTrackOpen: !0 }), (0, i.pY)({ searchContext: e }), this.flushPendingEvents(e))
            : !n && t.didTrackOpen && (0, i.gp)({ searchContext: e });
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
        var n;
        let i = (0, r.bS)(e),
            a = null != (n = this.pendingEvents.get(i)) ? n : [];
        a.push(t), this.pendingEvents.set(i, a);
    }
    flushPendingEvents(e) {
        let t = (0, r.bS)(e),
            n = this.pendingEvents.get(t);
        null != n && n.forEach((e) => e()), this.pendingEvents.delete(t);
    }
    constructor(...e) {
        super(...e),
            s(this, "viewStates", new Map()),
            s(this, "pendingTimeouts", new Map()),
            s(this, "pendingEvents", new Map());
    }
}
let u = new c();
