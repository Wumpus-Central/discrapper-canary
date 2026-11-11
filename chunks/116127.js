var i = n(855986),
    r = n(73153),
    a = n(596720);
let s = {};
class l extends i.Ay.DeviceSettingsStore {
    static displayName = "ICYMIFiltersStore";
    static persistKey = "ICYMIFiltersStore";
    initialize(e) {
        s = e ?? {};
    }
    filterStaffContent() {
        return !0 === s.filterStaffContent;
    }
    getDoubleTapBehavior() {
        return s.doubleTapBehavior ?? a.Ai.DEFAULT;
    }
    getState() {
        return s;
    }
    getUserAgnosticState() {
        return s;
    }
}
let o = new l(r.h, {
    SET_ICYMI_FILTERS: function (e) {
        s = e.filters;
    },
});
n.d(t, {}, { A: o });
