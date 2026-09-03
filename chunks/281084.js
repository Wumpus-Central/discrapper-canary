n.d(t, { A: () => l }), n(142703);
var i = n(439372),
    r = n(885386);
let a = !1;
class s extends i.A {
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
        r.JI.getSetting() !== e && setImmediate(() => r.JI.updateSetting(e));
    }
}
let l = new s();
