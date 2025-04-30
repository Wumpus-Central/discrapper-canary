n.d(t, { Z: () => l }), n(358797), n(388685);
var r = n(147913),
    i = n(695346);
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
let o = !1;
class s extends r.Z {
    maybeShowChangeLanguageToast() {}
    setVerifyTimezone() {
        o = !0;
    }
    ensureTimezoneUpdated() {
        if (!o) return;
        o = !1;
        let e = new Date().getTimezoneOffset();
        i.rN.getSetting() !== e && setImmediate(() => i.rN.updateSetting(e));
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
let l = new s();
