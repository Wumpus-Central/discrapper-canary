n.d(t, { A: () => d });
var r,
    i = n(311907),
    l = n(73153),
    a = n(335934),
    s = n(596720);
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
let c = {};
class u extends (r = i.Ay.DeviceSettingsStore) {
    initialize(e) {
        c = null != e ? e : {};
    }
    filterStaffContent() {
        return !0 === c.filterStaffContent;
    }
    onlyShowRecentGeneratedCandidates() {
        return (
            !!(0, a.o$)("processRawItems", !1).contentGenerationEnabled && !0 === c.onlyShowRecentGeneratedCandidates
        );
    }
    getDoubleTapBehavior() {
        var e;
        return null != (e = c.doubleTapBehavior) ? e : s.Ai.DEFAULT;
    }
    getState() {
        return c;
    }
    getUserAgnosticState() {
        return c;
    }
}
o(u, "displayName", "ICYMIFiltersStore"), o(u, "persistKey", "ICYMIFiltersStore");
let d = new u(l.h, {
    SET_ICYMI_FILTERS: function (e) {
        c = e.filters;
    },
});
