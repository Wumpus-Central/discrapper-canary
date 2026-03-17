"use strict";
n.d(t, { A: () => I });
var r = n(311907),
    i = n(73153),
    s = n(287809);
let a = null,
    o = {},
    l = {},
    u = null,
    c = [],
    d = null;
function _(e) {
    f(e);
}
function f(e) {
    if (null == s.default.getCurrentUser()) return p();
    (a = e.section ?? a),
        null != e.subsection && null != a && (o[a] = e.subsection),
        null != e.scrollPosition && null != a && (l[a] = e.scrollPosition),
        (u = e.analyticsLocation ?? null),
        (c = e.analyticsLocations ?? []),
        (d = e.searchParams ?? null);
}
function p() {
    (a = null), (o = {}), (l = {}), (u = null), (c = []), (d = null);
}
function h(e) {
    (a = e.section),
        (u = null),
        (c = e.analyticsLocations ?? []),
        (d = null),
        null != e.subsection && (o[a] = e.subsection);
}
function m(e) {
    let { forSection: t } = e;
    null != t ? delete o[t] : null != a && delete o[a];
}
function E() {
    (u = null), (c = []), (d = null);
}
function g(e) {
    let { forSection: t } = e;
    null != t ? delete l[t] : null != a && delete l[a];
}
class A extends r.Ay.Store {
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
    getScrollPosition() {
        return null != a ? l[a] : null;
    }
    getAnalyticsLocation() {
        return u;
    }
    getAnalyticsLocations() {
        return c;
    }
    getSearchParams() {
        return d;
    }
}
let I = new A(i.h, {
    USER_SETTINGS_MODAL_OPEN: _,
    USER_SETTINGS_MODAL_INIT: f,
    USER_SETTINGS_MODAL_CLOSE: p,
    LOGOUT: p,
    USER_SETTINGS_MODAL_SET_SECTION: h,
    USER_SETTINGS_MODAL_CLEAR_SUBSECTION: m,
    USER_SETTINGS_MODAL_CLEAR_LOCATION: E,
    USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: g,
});
