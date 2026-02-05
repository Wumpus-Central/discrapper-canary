n.d(t, { A: () => d });
var i = n(311907),
    r = n(73153),
    a = n(335934),
    l = n(596720);
let s = {};
class o extends i.Ay.DeviceSettingsStore {
    static displayName = "ICYMIFiltersStore";
    static persistKey = "ICYMIFiltersStore";
    initialize(e) {
        s = e ?? {};
    }
    filterStaffContent() {
        return !0 === s.filterStaffContent;
    }
    onlyShowRecentGeneratedCandidates() {
        return (
            !!(0, a.o$)("processRawItems", !1).contentGenerationEnabled && !0 === s.onlyShowRecentGeneratedCandidates
        );
    }
    getDoubleTapBehavior() {
        return s.doubleTapBehavior ?? l.Ai.DEFAULT;
    }
    getState() {
        return s;
    }
    getUserAgnosticState() {
        return s;
    }
}
let d = new o(r.h, {
    SET_ICYMI_FILTERS: function (e) {
        s = e.filters;
    },
});
