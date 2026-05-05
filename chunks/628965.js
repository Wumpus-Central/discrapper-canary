"use strict";
n.d(t, { A: () => d });
var i = n(17928),
    r = n(228366),
    s = n(287809);
let a = null,
    o = [];
function l(e) {
    if (null == s.default.getCurrentUser()) return u();
    (a = e.section ?? a), (o = e.analyticsLocations ?? []);
}
function u() {
    (a = null), (o = []);
}
class c extends i.Ay.Store {
    static displayName = "UserSettingsModalStore";
    initialize() {
        this.waitFor(s.default);
    }
    getSection() {
        return a;
    }
    getAnalyticsLocations() {
        return o;
    }
}
let d = new c(r.h, {
    USER_SETTINGS_MODAL_OPEN: function (e) {
        l(e);
    },
    USER_SETTINGS_MODAL_INIT: l,
    USER_SETTINGS_MODAL_CLOSE: u,
    LOGOUT: u,
    USER_SETTINGS_MODAL_SET_SECTION: function (e) {
        (a = e.section), (o = e.analyticsLocations ?? []);
    },
    USER_SETTINGS_MODAL_CLEAR_LOCATION: function () {
        o = [];
    },
});
