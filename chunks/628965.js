"use strict";
n.d(t, { A: () => _ });
var r = n(311907),
    i = n(73153),
    s = n(287809);
let a = null,
    o = {},
    l = [];
function u(e) {
    if (null == s.default.getCurrentUser()) return c();
    (a = e.section ?? a), null != e.subsection && null != a && (o[a] = e.subsection), (l = e.analyticsLocations ?? []);
}
function c() {
    (a = null), (o = {}), (l = []);
}
class d extends r.Ay.Store {
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
    getAnalyticsLocations() {
        return l;
    }
}
let _ = new d(i.h, {
    USER_SETTINGS_MODAL_OPEN: function (e) {
        u(e);
    },
    USER_SETTINGS_MODAL_INIT: u,
    USER_SETTINGS_MODAL_CLOSE: c,
    LOGOUT: c,
    USER_SETTINGS_MODAL_SET_SECTION: function (e) {
        (a = e.section), (l = e.analyticsLocations ?? []), null != e.subsection && (o[a] = e.subsection);
    },
    USER_SETTINGS_MODAL_CLEAR_SUBSECTION: function (e) {
        let { forSection: t } = e;
        null != t ? delete o[t] : null != a && delete o[a];
    },
    USER_SETTINGS_MODAL_CLEAR_LOCATION: function () {
        l = [];
    },
});
