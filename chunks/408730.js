r.d(t, {
    A: () => o,
}),
    r(321073),
    r(896048);
var n = r(822382),
    l = r(145331),
    s = r(554931);

function a(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
class i extends s.A {
    _initialize(e) {}
    _terminate(e) {
        let t = (0, n.bS)(e);
        clearTimeout(this.pendingTimeouts.get(t)),
            this.pendingTimeouts.delete(t),
            this.viewStates.delete(t),
            this.pendingEvents.delete(t);
    }
    _transferSession(e, t) {
        let r = (0, n.bS)(e),
            l = (0, n.bS)(t),
            s = this.getViewState(e);
        this.setViewState(t, s), this.viewStates.delete(r);
        let a = this.pendingTimeouts.get(r);
        null != a && (clearTimeout(a), this.pendingTimeouts.delete(r), this.schedule(t));
        let i = this.pendingEvents.get(r);
        null != i && (this.pendingEvents.set(l, i), this.pendingEvents.delete(r));
    }
    getViewState(e) {
        var t;
        let r = (0, n.bS)(e);
        return null != (t = this.viewStates.get(r))
            ? t
            : {
                  isFocused: !1,
                  isSidebarOpen: !1,
                  isFiltersModalOpen: !1,
                  didTrackOpen: !1,
              };
    }
    setViewState(e, t) {
        let r = (0, n.bS)(e);
        this.viewStates.set(
            r,
            (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (n = n.concat(
                            Object.getOwnPropertySymbols(r).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable;
                            }),
                        )),
                        n.forEach(function (t) {
                            a(e, t, r[t]);
                        });
                }
                return e;
            })({}, this.getViewState(e), t),
        );
    }
    schedule(e) {
        let t = (0, n.bS)(e);
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
            ? (this.setViewState(e, {
                  didTrackOpen: !0,
              }),
              (0, l.pY)({
                  searchContext: e,
              }),
              this.flushPendingEvents(e))
            : !r &&
              t.didTrackOpen &&
              (0, l.gp)({
                  searchContext: e,
              });
    }
    setFocused(e, t) {
        this.setViewState(e, {
            isFocused: t,
        }),
            this.schedule(e);
    }
    setSidebarOpen(e, t) {
        this.setViewState(e, {
            isSidebarOpen: t,
        }),
            this.schedule(e);
    }
    setFiltersModalOpen(e, t) {
        this.setViewState(e, {
            isFiltersModalOpen: t,
        }),
            this.schedule(e);
    }
    enqueueEvent(e, t) {
        var r;
        let l = (0, n.bS)(e),
            s = null != (r = this.pendingEvents.get(l)) ? r : [];
        s.push(t), this.pendingEvents.set(l, s);
    }
    flushPendingEvents(e) {
        let t = (0, n.bS)(e),
            r = this.pendingEvents.get(t);
        null != r && r.forEach((e) => e()), this.pendingEvents.delete(t);
    }
    constructor(...e) {
        super(...e),
            a(this, "viewStates", new Map()),
            a(this, "pendingTimeouts", new Map()),
            a(this, "pendingEvents", new Map());
    }
}
let o = new i();
