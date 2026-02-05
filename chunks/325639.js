"use strict";
n.d(t, { V: () => u });
var r = n(954571),
    i = n(988276),
    a = n(277682),
    s = n(765682),
    o = n(652215),
    l = n(985018);
class u {
    storage = new a.A();
    async requestAuthorization(e, t, n) {
        if ("function" != typeof t) throw Error(`requestAuthorization: Was provided with not a function for ${e}.`);
        r.default.track(o.HAw.PERMISSIONS_REQUESTED, { type: e });
        let a = await t(),
            l = a === s.F5.AUTHORIZED || a === s.F5.LIMITED,
            u = l ? s.hL.ACCEPTED : s.hL.DENIED;
        return i.A.setPermission(e, u), !l && n.showAuthorizationError && this.showAlert(e), l;
    }
    requestPermission(e, t) {
        let n = u.defaultNativePermissionsRequestOptions(t);
        return this.requestPermissionCore(e, n);
    }
    hasPermission(e, t) {
        let n = u.defaultNativePermissionsRequestOptions(t);
        return this.hasPermissionCore(e, n);
    }
    showAlert(e) {
        let t = {
            [s.iL.CAMERA]: `${l.intl.string(l.t["68G7fD"])}. ${l.intl.string(l.t["5Jvu1R"])}`,
            [s.iL.AUDIO]: `${l.intl.string(l.t.xisTfe)}. ${l.intl.string(l.t["5Jvu1R"])}`,
            [s.iL.PHOTOS]: `${l.intl.string(l.t.jQHU4M)}. ${l.intl.string(l.t["5Jvu1R"])}`,
            [s.iL.INPUT_MONITORING]: `${l.intl.string(l.t.UIBqsS)}. ${l.intl.string(l.t["5Jvu1R"])}`,
            [s.iL.CONTACTS]: `${l.intl.string(l.t.kTtf7o)}. ${l.intl.string(l.t["5Jvu1R"])}`,
        }[e];
        null != t &&
            this.openAlertModal({
                title: l.intl.string(l.t.u1Gxpu),
                body: t,
                onConfirm: () => this.openSettings(e),
                cancelText: l.intl.string(l.t["ETE/oC"]),
                confirmText: l.intl.string(l.t["XgZk+u"]),
            });
    }
    static defaultNativePermissionsRequestOptions(e) {
        let t = { showAuthorizationError: !0 };
        return null == e ? t : { ...t, ...e };
    }
}
