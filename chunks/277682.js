"use strict";
n.d(t, { A: () => c });
var r = n(311907),
    i = n(73153),
    a = n(954571),
    s = n(765682),
    o = n(652215);
let l = { permissionStates: {} };
class u extends r.Ay.DeviceSettingsStore {
    static displayName = "NativePermissionStore";
    static persistKey = "NativePermissionsStore";
    constructor() {
        super(i.h, { SET_NATIVE_PERMISSION: (e) => this.handleSetNativePermission(e) });
    }
    initialize(e) {
        l = e ?? l;
    }
    getUserAgnosticState() {
        return l;
    }
    hasPermission(e) {
        let t = l.permissionStates[e];
        return null != t && t === s.hL.ACCEPTED;
    }
    handleSetNativePermission(e) {
        let { state: t, permissionType: n } = e,
            r = l.permissionStates,
            i = r[n];
        (r[n] = t),
            i !== t &&
                a.default.track(o.HAw.PERMISSIONS_ACKED, { type: n, action: t, previous_action: i ?? s.hL.NONE });
    }
}
let c = u;
