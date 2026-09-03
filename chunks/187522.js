n.d(t, { V: () => _ });
var i = n(174459),
    r = n(228366);
let a = class {
    static setPermission(e, t) {
        r.h.dispatch({ type: "SET_NATIVE_PERMISSION", permissionType: e, state: t });
    }
};
var s = n(17928),
    l = n(765682),
    o = n(652215);
let d = { permissionStates: {} };
class c extends s.Ay.DeviceSettingsStore {
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
        return null != t && t === l.hL.ACCEPTED;
    }
    handleSetNativePermission(e) {
        let { state: t, permissionType: n } = e,
            r = d.permissionStates,
            a = r[n];
        (r[n] = t),
            a !== t &&
                i.default.track(o.HAw.PERMISSIONS_ACKED, { type: n, action: t, previous_action: a ?? l.hL.NONE });
    }
}
var u = n(375708);
class _ {
    storage = new c();
    async requestAuthorization(e, t, n) {
        if ("function" != typeof t) throw Error(`requestAuthorization: Was provided with not a function for ${e}.`);
        i.default.track(o.HAw.PERMISSIONS_REQUESTED, { type: e });
        let r = await t(),
            s = r === l.F5.AUTHORIZED || r === l.F5.LIMITED,
            d = s ? l.hL.ACCEPTED : l.hL.DENIED;
        return a.setPermission(e, d), !s && n.showAuthorizationError && this.showAlert(e), s;
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
        let t = `${u.intl.string(u.t["68G7fD"])}. ${u.intl.string(u.t["5Jvu1R"])}`,
            n = {
                [l.iL.CAMERA]: t,
                [l.iL.HEADSET_CAMERA]: t,
                [l.iL.AUDIO]: `${u.intl.string(u.t.xisTfe)}. ${u.intl.string(u.t["5Jvu1R"])}`,
                [l.iL.PHOTOS]: `${u.intl.string(u.t.jQHU4M)}. ${u.intl.string(u.t["5Jvu1R"])}`,
                [l.iL.INPUT_MONITORING]: `${u.intl.string(u.t.UIBqsS)}. ${u.intl.string(u.t["5Jvu1R"])}`,
                [l.iL.CONTACTS]: `${u.intl.string(u.t.kTtf7o)}. ${u.intl.string(u.t["5Jvu1R"])}`,
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
