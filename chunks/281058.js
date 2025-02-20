n.d(t, { Z: () => f });
var r,
    i = n(442837),
    o = n(570140),
    a = n(626135),
    s = n(761274),
    l = n(981631);
function c(e, t, n) {
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
let u = { permissionStates: {} };
class d extends (r = i.ZP.DeviceSettingsStore) {
    initialize(e) {
        u = null != e ? e : u;
    }
    getUserAgnosticState() {
        return u;
    }
    hasPermission(e) {
        let t = u.permissionStates[e];
        return null != t && t === s.PQ.ACCEPTED;
    }
    handleSetNativePermission(e) {
        let { state: t, permissionType: n } = e,
            r = u.permissionStates,
            i = r[n];
        (r[n] = t),
            i !== t &&
                a.default.track(l.rMx.PERMISSIONS_ACKED, {
                    type: n,
                    action: t,
                    previous_action: null != i ? i : s.PQ.NONE
                });
    }
    constructor() {
        super(o.Z, { SET_NATIVE_PERMISSION: (e) => this.handleSetNativePermission(e) });
    }
}
c(d, 'displayName', 'NativePermissionStore'), c(d, 'persistKey', 'NativePermissionsStore');
let f = d;
