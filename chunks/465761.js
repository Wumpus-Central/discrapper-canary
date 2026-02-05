"use strict";
n.d(t, { A: () => o }), n(142703);
var r = n(439372),
    i = n(253932);
let a = !1;
class s extends r.A {
    actions = {
        POST_CONNECTION_OPEN: () => {
            this.setVerifyTimezone();
        },
        OVERLAY_INITIALIZE: this.setVerifyTimezone,
        USER_SETTINGS_PROTO_UPDATE: this.ensureTimezoneUpdated,
    };
    setVerifyTimezone() {
        a = !0;
    }
    ensureTimezoneUpdated() {
        if (!a) return;
        a = !1;
        let e = new Date().getTimezoneOffset();
        i.JI.getSetting() !== e && setImmediate(() => i.JI.updateSetting(e));
    }
}
let o = new s();
