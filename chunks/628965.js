"use strict";
n.d(t, { A: () => g });
var r = n(311907),
    i = n(73153),
    s = n(287809);
let a = null,
    o = {},
    l = null,
    u = [],
    c = null;
function d(e) {
    _(e);
}
function _(e) {
    if (null == s.default.getCurrentUser()) return f();
    (a = e.section ?? a),
        null != e.subsection && null != a && (o[a] = e.subsection),
        (l = e.analyticsLocation ?? null),
        (u = e.analyticsLocations ?? []),
        (c = e.searchParams ?? null);
}
function f() {
    (a = null), (o = {}), (l = null), (u = []), (c = null);
}
function p(e) {
    (a = e.section),
        (l = null),
        (u = e.analyticsLocations ?? []),
        (c = null),
        null != e.subsection && (o[a] = e.subsection);
}
function h(e) {
    let { forSection: t } = e;
    null != t ? delete o[t] : null != a && delete o[a];
}
function m() {
    (l = null), (u = []), (c = null);
}
class E extends r.Ay.Store {
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
    getSearchParams() {
        return c;
    }
}
let g = new E(i.h, {
    USER_SETTINGS_MODAL_OPEN: d,
    USER_SETTINGS_MODAL_INIT: _,
    USER_SETTINGS_MODAL_CLOSE: f,
    LOGOUT: f,
    USER_SETTINGS_MODAL_SET_SECTION: p,
    USER_SETTINGS_MODAL_CLEAR_SUBSECTION: h,
    USER_SETTINGS_MODAL_CLEAR_LOCATION: m,
});
