n.d(t, { Z: () => u }), n(539854), n(388685);
var r = n(607802),
    i = n(315322),
    a = n(881262);
function o(e, t, n) {
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
function s(e) {
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
                o(e, t, n[t]);
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
class c extends a.Z {
    _initialize(e) {}
    _terminate(e) {
        let t = (0, r.Tm)(e);
        clearTimeout(this.pendingTimeouts.get(t)),
            this.pendingTimeouts.delete(t),
            this.viewStates.delete(t),
            this.pendingEvents.delete(t);
    }
    _transferSession(e, t) {
        let n = (0, r.Tm)(e),
            i = (0, r.Tm)(t),
            a = this.getViewState(e);
        this.setViewState(t, a), this.viewStates.delete(n);
        let o = this.pendingTimeouts.get(n);
        null != o && (clearTimeout(o), this.pendingTimeouts.delete(n), this.schedule(t));
        let s = this.pendingEvents.get(n);
        null != s && (this.pendingEvents.set(i, s), this.pendingEvents.delete(n));
    }
    getViewState(e) {
        var t;
        let n = (0, r.Tm)(e);
        return null != (t = this.viewStates.get(n)) ? t : l();
    }
    setViewState(e, t) {
        let n = (0, r.Tm)(e);
        this.viewStates.set(n, s({}, this.getViewState(e), t));
    }
    schedule(e) {
        let t = (0, r.Tm)(e);
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
            ? (this.setViewState(e, { didTrackOpen: !0 }), (0, i.I1)({ searchContext: e }), this.flushPendingEvents(e))
            : !n && t.didTrackOpen && (0, i.IZ)({ searchContext: e });
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
        let i = (0, r.Tm)(e),
            a = null != (n = this.pendingEvents.get(i)) ? n : [];
        a.push(t), this.pendingEvents.set(i, a);
    }
    flushPendingEvents(e) {
        let t = (0, r.Tm)(e),
            n = this.pendingEvents.get(t);
        null != n && n.forEach((e) => e()), this.pendingEvents.delete(t);
    }
    constructor(...e) {
        super(...e),
            o(this, "viewStates", new Map()),
            o(this, "pendingTimeouts", new Map()),
            o(this, "pendingEvents", new Map());
    }
}
let u = new c();
