n.d(t, { Z: () => s }), n(388685);
var r = n(772848),
    i = n(259443),
    l = n(416638);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function o(e) {
    return {
        sessionId: (0, r.Z)(),
        selectedSearchTab: null != e ? e : null,
        searchCount: 0,
        searchWithFiltersCount: 0
    };
}
new i.Yd('SearchSessionAnalyticsManager');
let s = new (class {
    upsertState(e, t) {
        let n = (0, l.Tm)(e),
            r = this.sessions.get(n),
            i = null != r ? r : o();
        this.sessions.set(
            n,
            (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        r.forEach(function (t) {
                            a(e, t, n[t]);
                        });
                }
                return e;
            })({}, i, t)
        );
    }
    getState(e) {
        let t = (0, l.Tm)(e);
        return this.sessions.get(t);
    }
    incrementSearchCount(e, t) {
        var n, r;
        let i = this.getState(e),
            l = {};
        (l.searchCount = (null != (n = null == i ? void 0 : i.searchCount) ? n : 0) + 1), t && (l.searchWithFiltersCount = (null != (r = null == i ? void 0 : i.searchWithFiltersCount) ? r : 0) + 1), this.upsertState(e, l);
    }
    getSearchCount(e) {
        var t, n;
        return null != (n = null == (t = this.getState(e)) ? void 0 : t.searchCount) ? n : 0;
    }
    getSearchWithFiltersCount(e) {
        var t, n;
        return null != (n = null == (t = this.getState(e)) ? void 0 : t.searchWithFiltersCount) ? n : 0;
    }
    getSearchCountWithoutFilters(e) {
        return Math.max(0, this.getSearchCount(e) - this.getSearchWithFiltersCount(e));
    }
    setSelectedSearchTab(e, t) {
        null != t && this.upsertState(e, { selectedSearchTab: t });
    }
    getSessionId(e) {
        var t;
        return null == (t = this.getState(e)) ? void 0 : t.sessionId;
    }
    getSelectedSearchTab(e) {
        var t;
        return null == (t = this.getState(e)) ? void 0 : t.selectedSearchTab;
    }
    initialize(e, t) {
        let n = (0, l.Tm)(e);
        this.sessions.has(n) || this.sessions.set(n, o(t));
    }
    terminate(e) {
        let t = (0, l.Tm)(e);
        this.sessions.delete(t);
    }
    constructor() {
        a(this, 'sessions', new Map());
    }
})();
