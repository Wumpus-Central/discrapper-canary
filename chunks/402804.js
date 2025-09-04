n.d(t, { Z: () => d }), n(388685);
var r = n(147913),
    i = n(594174),
    a = n(451478),
    o = n(70956),
    s = n(709054),
    l = n(55937);
function c(e, t, n) {
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
class u extends r.Z {
    handleConnectionOpen() {
        let e = i.default.getCurrentUser();
        null != e &&
            l.x("user_opened_desktop_app", {
                user_id: e.id,
                age_minutes: s.default.age(e.id) / o.Z.Millis.MINUTE,
            });
    }
    handleWindowChange() {
        let e = i.default.getCurrentUser();
        null != e &&
            a.Z.isAppFocused() &&
            l.x("user_focussed_desktop_app", {
                user_id: e.id,
                age_minutes: s.default.age(e.id) / o.Z.Millis.MINUTE,
            });
    }
    constructor(...e) {
        super(...e),
            c(this, "actions", { POST_CONNECTION_OPEN: this.handleConnectionOpen }),
            c(this, "stores", new Map([[a.Z, this.handleWindowChange]]));
    }
}
let d = new u();
