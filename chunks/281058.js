var i,
    a = r(442837),
    o = r(570140),
    s = r(626135),
    l = r(761274),
    u = r(981631);
function c(e, n, r) {
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
let d = { permissionStates: {} };
class f extends (i = a.ZP.DeviceSettingsStore) {
    initialize(e) {
        d = null != e ? e : d;
    }
    getUserAgnosticState() {
        return d;
    }
    hasPermission(e) {
        let n = d.permissionStates[e];
        return null != n && n === l.PQ.ACCEPTED;
    }
    handleSetNativePermission(e) {
        let { state: n, permissionType: r } = e,
            i = d.permissionStates,
            a = i[r];
        (i[r] = n),
            a !== n &&
                s.default.track(u.rMx.PERMISSIONS_ACKED, {
                    type: r,
                    action: n,
                    previous_action: null != a ? a : l.PQ.NONE
                });
    }
    constructor() {
        super(o.Z, { SET_NATIVE_PERMISSION: (e) => this.handleSetNativePermission(e) });
    }
}
c(f, 'displayName', 'NativePermissionStore'), c(f, 'persistKey', 'NativePermissionsStore'), (n.Z = f);
