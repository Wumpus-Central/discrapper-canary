n.d(t, { Z: () => l }), n(177593), n(47120);
var i = n(147913),
    r = n(695346);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let s = !1;
class o extends i.Z {
    maybeShowChangeLanguageToast() {}
    setVerifyTimezone() {
        s = !0;
    }
    ensureTimezoneUpdated() {
        if (!s) return;
        s = !1;
        let e = new Date().getTimezoneOffset();
        r.rN.getSetting() !== e && setImmediate(() => r.rN.updateSetting(e));
    }
    constructor(...e) {
        super(...e),
            a(this, 'actions', {
                POST_CONNECTION_OPEN: () => {
                    this.setVerifyTimezone(), this.maybeShowChangeLanguageToast();
                },
                OVERLAY_INITIALIZE: this.setVerifyTimezone,
                USER_SETTINGS_PROTO_UPDATE: this.ensureTimezoneUpdated
            });
    }
}
let l = new o();
