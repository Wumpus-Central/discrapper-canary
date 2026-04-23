"use strict";
n.d(t, { V: () => c });
var i = n(954571),
    r = n(228366);
let s = class {
    static setPermission(e, t) {
        r.h.dispatch({ type: "SET_NATIVE_PERMISSION", permissionType: e, state: t });
    }
};
var a = n(17928),
    o = n(765682),
    l = n(652215);
let d = { permissionStates: {} };
class _ extends a.Ay.DeviceSettingsStore {
    static displayName = "NativePermissionStore";
    static persistKey = "NativePermissionsStore";
    constructor() {
        super(r.h, { SET_NATIVE_PERMISSION: (e) => this.handleSetNativePermission(e) });
    }
    initialize(e) {
        d = e ?? d;
    }
    getUserAgnosticState() {
        return d;
    }
    hasPermission(e) {
        let t = d.permissionStates[e];
        return null != t && t === o.hL.ACCEPTED;
    }
    handleSetNativePermission(e) {
        let { state: t, permissionType: n } = e,
            r = d.permissionStates,
            s = r[n];
        (r[n] = t),
            s !== t &&
                i.default.track(l.HAw.PERMISSIONS_ACKED, { type: n, action: t, previous_action: s ?? o.hL.NONE });
    }
}
var u = n(985018);
class c {
    storage = new _();
    async requestAuthorization(e, t, n) {
        if ("function" != typeof t) throw Error(`requestAuthorization: Was provided with not a function for ${e}.`);
        i.default.track(l.HAw.PERMISSIONS_REQUESTED, { type: e });
        let r = await t(),
            a = r === o.F5.AUTHORIZED || r === o.F5.LIMITED,
            d = a ? o.hL.ACCEPTED : o.hL.DENIED;
        return s.setPermission(e, d), !a && n.showAuthorizationError && this.showAlert(e), a;
    }
    requestPermission(e, t) {
        let n = c.defaultNativePermissionsRequestOptions(t);
        return this.requestPermissionCore(e, n);
    }
    hasPermission(e, t) {
        let n = c.defaultNativePermissionsRequestOptions(t);
        return this.hasPermissionCore(e, n);
    }
    showAlert(e) {
        let t = `${u.intl.string(u.t["68G7fD"])}. ${u.intl.string(u.t["5Jvu1R"])}`,
            n = {
                [o.iL.CAMERA]: t,
                [o.iL.HEADSET_CAMERA]: t,
                [o.iL.AUDIO]: `${u.intl.string(u.t.xisTfe)}. ${u.intl.string(u.t["5Jvu1R"])}`,
                [o.iL.PHOTOS]: `${u.intl.string(u.t.jQHU4M)}. ${u.intl.string(u.t["5Jvu1R"])}`,
                [o.iL.INPUT_MONITORING]: `${u.intl.string(u.t.UIBqsS)}. ${u.intl.string(u.t["5Jvu1R"])}`,
                [o.iL.CONTACTS]: `${u.intl.string(u.t.kTtf7o)}. ${u.intl.string(u.t["5Jvu1R"])}`,
            }[e];
        null != n &&
            this.openAlertModal({
                title: u.intl.string(u.t.u1Gxpu),
                body: n,
                onConfirm: () => this.openSettings(e),
                cancelText: u.intl.string(u.t["ETE/oC"]),
                confirmText: u.intl.string(u.t["XgZk+u"]),
            });
    }
    static defaultNativePermissionsRequestOptions(e) {
        let t = { showAuthorizationError: !0 };
        return null == e ? t : { ...t, ...e };
    }
}
