n.d(t, {
    A: () => f,
});
var r,
    i = n(311907),
    a = n(73153),
    s = n(954571),
    o = n(765682),
    l = n(652215);

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
let u = {
    permissionStates: {},
};
class d extends (r = i.Ay.DeviceSettingsStore) {
    initialize(e) {
        u = null != e ? e : u;
    }
    getUserAgnosticState() {
        return u;
    }
    hasPermission(e) {
        let t = u.permissionStates[e];
        return null != t && t === o.hL.ACCEPTED;
    }
    handleSetNativePermission(e) {
        let { state: t, permissionType: n } = e,
            r = u.permissionStates,
            i = r[n];
        (r[n] = t),
            i !== t &&
                s.default.track(l.HAw.PERMISSIONS_ACKED, {
                    type: n,
                    action: t,
                    previous_action: null != i ? i : o.hL.NONE,
                });
    }
    constructor() {
        super(a.h, {
            SET_NATIVE_PERMISSION: (e) => this.handleSetNativePermission(e),
        });
    }
}
c(d, "displayName", "NativePermissionStore"), c(d, "persistKey", "NativePermissionsStore");
let f = d;
