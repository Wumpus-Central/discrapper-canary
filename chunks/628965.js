"use strict";
n.d(t, { A: () => f });
var r = n(311907),
    i = n(73153),
    s = n(287809);
let a = null,
    o = {},
    l = null,
    u = [];
function d(e) {
    if (null == s.default.getCurrentUser()) return c();
    (a = e.section ?? a),
        null != e.subsection && null != a && (o[a] = e.subsection),
        (l = e.analyticsLocation ?? null),
        (u = e.analyticsLocations ?? []);
}
function c() {
    (a = null), (o = {}), (l = null), (u = []);
}
class _ extends r.Ay.Store {
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
let f = new _(i.h, {
    USER_SETTINGS_MODAL_OPEN: function (e) {
        d(e);
    },
    USER_SETTINGS_MODAL_INIT: d,
    USER_SETTINGS_MODAL_CLOSE: c,
    LOGOUT: c,
    USER_SETTINGS_MODAL_SET_SECTION: function (e) {
        (a = e.section), (l = null), (u = e.analyticsLocations ?? []), null != e.subsection && (o[a] = e.subsection);
    },
    USER_SETTINGS_MODAL_CLEAR_SUBSECTION: function (e) {
        let { forSection: t } = e;
        null != t ? delete o[t] : null != a && delete o[a];
    },
    USER_SETTINGS_MODAL_CLEAR_LOCATION: function () {
        (l = null), (u = []);
    },
});
