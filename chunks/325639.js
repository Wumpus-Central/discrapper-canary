"use strict";
n.d(t, { V: () => u });
var r = n(954571),
    i = n(988276),
    s = n(277682),
    a = n(765682),
    o = n(652215),
    l = n(985018);
class u {
    storage = new s.A();
    async requestAuthorization(e, t, n) {
        if ("function" != typeof t) throw Error(`requestAuthorization: Was provided with not a function for ${e}.`);
        r.default.track(o.HAw.PERMISSIONS_REQUESTED, { type: e });
        let s = await t(),
            l = s === a.F5.AUTHORIZED || s === a.F5.LIMITED,
            u = l ? a.hL.ACCEPTED : a.hL.DENIED;
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
        let t = `${l.intl.string(l.t["68G7fD"])}. ${l.intl.string(l.t["5Jvu1R"])}`,
            n = {
                [a.iL.CAMERA]: t,
                [a.iL.HEADSET_CAMERA]: t,
                [a.iL.AUDIO]: `${l.intl.string(l.t.xisTfe)}. ${l.intl.string(l.t["5Jvu1R"])}`,
                [a.iL.PHOTOS]: `${l.intl.string(l.t.jQHU4M)}. ${l.intl.string(l.t["5Jvu1R"])}`,
                [a.iL.INPUT_MONITORING]: `${l.intl.string(l.t.UIBqsS)}. ${l.intl.string(l.t["5Jvu1R"])}`,
                [a.iL.CONTACTS]: `${l.intl.string(l.t.kTtf7o)}. ${l.intl.string(l.t["5Jvu1R"])}`,
            }[e];
        null != n &&
            this.openAlertModal({
                title: l.intl.string(l.t.u1Gxpu),
                body: n,
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
