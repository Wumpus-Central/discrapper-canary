r.d(n, {
    g: function () {
        return f;
    }
});
var i = r(411104);
var a = r(626135),
    o = r(823967),
    s = r(281058),
    l = r(761274),
    u = r(981631),
    c = r(388032);
function d(e, n, r) {
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
class f {
    async requestAuthorization(e, n, r) {
        if ('function' != typeof n) throw Error('requestAuthorization: Was provided with not a function for '.concat(e, '.'));
        a.default.track(u.rMx.PERMISSIONS_REQUESTED, { type: e });
        let i = (await n()) === l.NZ.AUTHORIZED,
            s = i ? l.PQ.ACCEPTED : l.PQ.DENIED;
        return o.Z.setPermission(e, s), !i && r.showAuthorizationError && this.showAlert(e), i;
    }
    requestPermission(e, n) {
        let r = f.defaultNativePermissionsRequestOptions(n);
        return this.requestPermissionCore(e, r);
    }
    hasPermission(e, n) {
        let r = f.defaultNativePermissionsRequestOptions(n);
        return this.hasPermissionCore(e, r);
    }
    showAlert(e) {
        let n = {
            [l.Eu.CAMERA]: ''.concat(c.intl.string(c.t['68G7fH']), '. ').concat(c.intl.string(c.t['5Jvu1d'])),
            [l.Eu.AUDIO]: ''.concat(c.intl.string(c.t.xisTfX), '. ').concat(c.intl.string(c.t['5Jvu1d'])),
            [l.Eu.PHOTOS]: ''.concat(c.intl.string(c.t.jQHU4O), '. ').concat(c.intl.string(c.t['5Jvu1d'])),
            [l.Eu.INPUT_MONITORING]: ''.concat(c.intl.string(c.t.UIBqsb), '. ').concat(c.intl.string(c.t['5Jvu1d'])),
            [l.Eu.CONTACTS]: ''.concat(c.intl.string(c.t.kTtf7u), '. ').concat(c.intl.string(c.t['5Jvu1d']))
        }[e];
        if (null != n)
            this.openAlertModal({
                title: c.intl.string(c.t.u1Gxpq),
                body: n,
                onConfirm: () => this.openSettings(e),
                cancelText: c.intl.string(c.t['ETE/oK']),
                confirmText: c.intl.string(c.t['XgZk+v'])
            });
    }
    static defaultNativePermissionsRequestOptions(e) {
        let n = { showAuthorizationError: !0 };
        return null == e
            ? n
            : {
                  ...n,
                  ...e
              };
    }
    constructor() {
        d(this, 'storage', new s.Z());
    }
}
