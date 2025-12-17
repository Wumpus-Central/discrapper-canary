n.d(t, { Z: () => d });
var r,
    i = n(442837),
    l = n(570140),
    a = n(518929),
    o = n(797394);
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
let c = {};
class u extends (r = i.ZP.DeviceSettingsStore) {
    initialize(e) {
        c = null != e ? e : {};
    }
    filterStaffContent() {
        return !0 === c.filterStaffContent;
    }
    onlyShowRecentGeneratedCandidates() {
        return (
            !!(0, a.q3)("processRawItems", !1).contentGenerationEnabled && !0 === c.onlyShowRecentGeneratedCandidates
        );
    }
    getDoubleTapBehavior() {
        var e;
        return null != (e = c.doubleTapBehavior) ? e : o.m.DEFAULT;
    }
    getState() {
        return c;
    }
    getUserAgnosticState() {
        return c;
    }
}
s(u, "displayName", "ICYMIFiltersStore"), s(u, "persistKey", "ICYMIFiltersStore");
let d = new u(l.Z, {
    SET_ICYMI_FILTERS: function (e) {
        c = e.filters;
    },
});
