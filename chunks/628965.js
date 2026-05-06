"use strict";
n.d(t, { A: () => c });
var i = n(17928),
    r = n(228366),
    s = n(287809);
let a = null;
function o(e) {
    if (null == s.default.getCurrentUser()) return l();
    a = e.section ?? a;
}
function l() {
    a = null;
}
class u extends i.Ay.Store {
    static displayName = "UserSettingsModalStore";
    initialize() {
        this.waitFor(s.default);
    }
    getSection() {
        return a;
    }
}
let c = new u(r.h, {
    USER_SETTINGS_MODAL_OPEN: function (e) {
        o(e);
    },
    USER_SETTINGS_MODAL_INIT: o,
    USER_SETTINGS_MODAL_CLOSE: l,
    LOGOUT: l,
    USER_SETTINGS_MODAL_SET_SECTION: function (e) {
        a = e.section;
    },
});
