"use strict";
n.d(t, { A: () => o }), n(142703);
var i = n(439372),
    r = n(253932);
let s = !1;
class a extends i.A {
    actions = {
        POST_CONNECTION_OPEN: () => {
            this.setVerifyTimezone();
        },
        OVERLAY_INITIALIZE: this.setVerifyTimezone,
        USER_SETTINGS_PROTO_UPDATE: this.ensureTimezoneUpdated,
    };
    setVerifyTimezone() {
        s = !0;
    }
    ensureTimezoneUpdated() {
        if (!s) return;
        s = !1;
        let e = new Date().getTimezoneOffset();
        r.JI.getSetting() !== e && setImmediate(() => r.JI.updateSetting(e));
    }
}
let o = new a();
