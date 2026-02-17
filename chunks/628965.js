"use strict";
n.d(t, { A: () => I });
var r = n(311907),
    i = n(73153),
    a = n(287809);
let s = null,
    o = {},
    l = {},
    u = null,
    c = [],
    d = null;
function _(e) {
    f(e);
}
function f(e) {
    if (null == a.default.getCurrentUser()) return h();
    (s = e.section ?? s),
        null != e.subsection && null != s && (o[s] = e.subsection),
        null != e.scrollPosition && null != s && (l[s] = e.scrollPosition),
        (u = e.analyticsLocation ?? null),
        (c = e.analyticsLocations ?? []),
        (d = e.searchParams ?? null);
}
function h() {
    (s = null), (o = {}), (l = {}), (u = null), (c = []), (d = null);
}
function p(e) {
    (s = e.section), (u = null), (c = e.analyticsLocations ?? []), null != e.subsection && (o[s] = e.subsection);
}
function g(e) {
    let { forSection: t } = e;
    null != t ? delete o[t] : null != s && delete o[s];
}
function E(e) {
    let { forSection: t } = e;
    null != t ? delete l[t] : null != s && delete l[s];
}
class A extends r.Ay.Store {
    static displayName = "UserSettingsModalStore";
    initialize() {
        this.waitFor(a.default);
    }
    getSection() {
        return s;
    }
    getSubsection() {
        return null != s ? o[s] : null;
    }
    getScrollPosition() {
        return null != s ? l[s] : null;
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
    USER_SETTINGS_MODAL_CLOSE: h,
    LOGOUT: h,
    USER_SETTINGS_MODAL_SET_SECTION: p,
    USER_SETTINGS_MODAL_CLEAR_SUBSECTION: g,
    USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: E,
});
