"use strict";
n.d(t, { V: () => _ });
var i = n(174459),
    r = n(228366);
let s = class {
    static setPermission(e, t) {
        r.h.dispatch({ type: "SET_NATIVE_PERMISSION", permissionType: e, state: t });
    }
};
var a = n(17928),
    o = n(765682),
    l = n(652215);
let u = { permissionStates: {} };
class c extends a.Ay.DeviceSettingsStore {
    static displayName = "NativePermissionStore";
    static persistKey = "NativePermissionsStore";
    constructor() {
        super(r.h, { SET_NATIVE_PERMISSION: (e) => this.handleSetNativePermission(e) });
    }
    initialize(e) {
        u = e ?? u;
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
            s = r[n];
        (r[n] = t),
            s !== t &&
                i.default.track(l.HAw.PERMISSIONS_ACKED, { type: n, action: t, previous_action: s ?? o.hL.NONE });
    }
}
var d = n(375708);
class _ {
    storage = new c();
    async requestAuthorization(e, t, n) {
        if ("function" != typeof t) throw Error(`requestAuthorization: Was provided with not a function for ${e}.`);
        i.default.track(l.HAw.PERMISSIONS_REQUESTED, { type: e });
        let r = await t(),
            a = r === o.F5.AUTHORIZED || r === o.F5.LIMITED,
            u = a ? o.hL.ACCEPTED : o.hL.DENIED;
        return s.setPermission(e, u), !a && n.showAuthorizationError && this.showAlert(e), a;
    }
    requestPermission(e, t) {
        let n = _.defaultNativePermissionsRequestOptions(t);
        return this.requestPermissionCore(e, n);
    }
    hasPermission(e, t) {
        let n = _.defaultNativePermissionsRequestOptions(t);
        return this.hasPermissionCore(e, n);
    }
    showAlert(e) {
        let t = `${d.intl.string(d.t["68G7fD"])}. ${d.intl.string(d.t["5Jvu1R"])}`,
            n = {
                [o.iL.CAMERA]: t,
                [o.iL.HEADSET_CAMERA]: t,
                [o.iL.AUDIO]: `${d.intl.string(d.t.xisTfe)}. ${d.intl.string(d.t["5Jvu1R"])}`,
                [o.iL.PHOTOS]: `${d.intl.string(d.t.jQHU4M)}. ${d.intl.string(d.t["5Jvu1R"])}`,
                [o.iL.INPUT_MONITORING]: `${d.intl.string(d.t.UIBqsS)}. ${d.intl.string(d.t["5Jvu1R"])}`,
                [o.iL.CONTACTS]: `${d.intl.string(d.t.kTtf7o)}. ${d.intl.string(d.t["5Jvu1R"])}`,
            }[e];
        null != n &&
            this.openAlertModal({
                title: d.intl.string(d.t.u1Gxpu),
                body: n,
                onConfirm: () => this.openSettings(e),
                cancelText: d.intl.string(d.t["ETE/oC"]),
                confirmText: d.intl.string(d.t["XgZk+u"]),
            });
    }
    static defaultNativePermissionsRequestOptions(e) {
        let t = { showAuthorizationError: !0 };
        return null == e ? t : { ...t, ...e };
    }
}
