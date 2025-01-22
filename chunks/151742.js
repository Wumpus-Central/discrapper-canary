var i = r(177593);
var a = r(47120);
var o = r(147913),
    s = r(695346);
function l(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let u = !1;
class c extends o.Z {
    maybeShowChangeLanguageToast() {}
    setVerifyTimezone() {
        u = !0;
    }
    ensureTimezoneUpdated() {
        if (!u) return;
        u = !1;
        let e = new Date().getTimezoneOffset();
        s.rN.getSetting() !== e && setImmediate(() => s.rN.updateSetting(e));
    }
    constructor(...e) {
        super(...e),
            l(this, 'actions', {
                POST_CONNECTION_OPEN: () => {
                    this.setVerifyTimezone(), this.maybeShowChangeLanguageToast();
                },
                OVERLAY_INITIALIZE: this.setVerifyTimezone,
                USER_SETTINGS_PROTO_UPDATE: this.ensureTimezoneUpdated
            });
    }
}
n.Z = new c();
