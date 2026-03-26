"use strict";
n.d(t, { A: () => E });
var r = n(311907),
    i = n(73153),
    s = n(287809);
let a = null,
    o = {},
    l = null,
    u = [];
function c(e) {
    d(e);
}
function d(e) {
    if (null == s.default.getCurrentUser()) return _();
    (a = e.section ?? a),
        null != e.subsection && null != a && (o[a] = e.subsection),
        (l = e.analyticsLocation ?? null),
        (u = e.analyticsLocations ?? []);
}
function _() {
    (a = null), (o = {}), (l = null), (u = []);
}
function f(e) {
    (a = e.section), (l = null), (u = e.analyticsLocations ?? []), null != e.subsection && (o[a] = e.subsection);
}
function p(e) {
    let { forSection: t } = e;
    null != t ? delete o[t] : null != a && delete o[a];
}
function h() {
    (l = null), (u = []);
}
class m extends r.Ay.Store {
    static displayName = "UserSettingsModalStore";
    initialize() {
        this.waitFor(s.default);
    }
    getSection() {
        return a;
    }
    getSubsection() {
        return null != a ? o[a] : null;
    }
    getAnalyticsLocation() {
        return l;
    }
    getAnalyticsLocations() {
        return u;
    }
}
let E = new m(i.h, {
    USER_SETTINGS_MODAL_OPEN: c,
    USER_SETTINGS_MODAL_INIT: d,
    USER_SETTINGS_MODAL_CLOSE: _,
    LOGOUT: _,
    USER_SETTINGS_MODAL_SET_SECTION: f,
    USER_SETTINGS_MODAL_CLEAR_SUBSECTION: p,
    USER_SETTINGS_MODAL_CLEAR_LOCATION: h,
});
