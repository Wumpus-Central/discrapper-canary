n.d(t, { A: () => l }), n(142703), n(896048);
var r = n(439372),
    i = n(253932);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let s = !1;
class o extends r.A {
    setVerifyTimezone() {
        s = !0;
    }
    ensureTimezoneUpdated() {
        if (!s) return;
        s = !1;
        let e = new Date().getTimezoneOffset();
        i.JI.getSetting() !== e && setImmediate(() => i.JI.updateSetting(e));
    }
    constructor(...e) {
        super(...e),
            a(this, "actions", {
                POST_CONNECTION_OPEN: () => {
                    this.setVerifyTimezone();
                },
                OVERLAY_INITIALIZE: this.setVerifyTimezone,
                USER_SETTINGS_PROTO_UPDATE: this.ensureTimezoneUpdated,
            });
    }
}
let l = new o();
