"use strict";
n.d(t, { A: () => c });
var i = n(17928),
    r = n(228366),
    s = n(287809);
let a = null,
    o = {},
    l = [];
function d(e) {
    if (null == s.default.getCurrentUser()) return _();
    (a = e.section ?? a), null != e.subsection && null != a && (o[a] = e.subsection), (l = e.analyticsLocations ?? []);
}
function _() {
    (a = null), (o = {}), (l = []);
}
class u extends i.Ay.Store {
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
let c = new u(r.h, {
    USER_SETTINGS_MODAL_OPEN: function (e) {
        d(e);
    },
    USER_SETTINGS_MODAL_INIT: d,
    USER_SETTINGS_MODAL_CLOSE: _,
    LOGOUT: _,
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
