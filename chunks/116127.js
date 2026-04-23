n.d(t, { A: () => o });
var i = n(311907),
    r = n(73153),
    a = n(596720);
let l = {};
class s extends i.Ay.DeviceSettingsStore {
    static displayName = "ICYMIFiltersStore";
    static persistKey = "ICYMIFiltersStore";
    initialize(e) {
        l = e ?? {};
    }
    filterStaffContent() {
        return !0 === l.filterStaffContent;
    }
    getDoubleTapBehavior() {
        return l.doubleTapBehavior ?? a.Ai.DEFAULT;
    }
    getState() {
        return l;
    }
    getUserAgnosticState() {
        return l;
    }
}
let o = new s(r.h, {
    SET_ICYMI_FILTERS: function (e) {
        l = e.filters;
    },
});
