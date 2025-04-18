n.d(t, { g: () => d }), n(415506);
var r = n(626135),
    i = n(823967),
    a = n(281058),
    o = n(761274),
    s = n(981631),
    l = n(388032);
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
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                c(e, t, n[t]);
            });
    }
    return e;
}
class d {
    async requestAuthorization(e, t, n) {
        if ('function' != typeof t) throw Error('requestAuthorization: Was provided with not a function for '.concat(e, '.'));
        r.default.track(s.rMx.PERMISSIONS_REQUESTED, { type: e });
        let a = await t(),
            l = a === o.NZ.AUTHORIZED || a === o.NZ.LIMITED,
            c = l ? o.PQ.ACCEPTED : o.PQ.DENIED;
        return i.Z.setPermission(e, c), !l && n.showAuthorizationError && this.showAlert(e), l;
    }
    requestPermission(e, t) {
        let n = d.defaultNativePermissionsRequestOptions(t);
        return this.requestPermissionCore(e, n);
    }
    hasPermission(e, t) {
        let n = d.defaultNativePermissionsRequestOptions(t);
        return this.hasPermissionCore(e, n);
    }
    showAlert(e) {
        let t = {
            [o.Eu.CAMERA]: ''.concat(l.NW.string(l.t['68G7fH']), '. ').concat(l.NW.string(l.t['5Jvu1d'])),
            [o.Eu.AUDIO]: ''.concat(l.NW.string(l.t.xisTfX), '. ').concat(l.NW.string(l.t['5Jvu1d'])),
            [o.Eu.PHOTOS]: ''.concat(l.NW.string(l.t.jQHU4O), '. ').concat(l.NW.string(l.t['5Jvu1d'])),
            [o.Eu.INPUT_MONITORING]: ''.concat(l.NW.string(l.t.UIBqsb), '. ').concat(l.NW.string(l.t['5Jvu1d'])),
            [o.Eu.CONTACTS]: ''.concat(l.NW.string(l.t.kTtf7u), '. ').concat(l.NW.string(l.t['5Jvu1d']))
        }[e];
        null != t &&
            this.openAlertModal({
                title: l.NW.string(l.t.u1Gxpq),
                body: t,
                onConfirm: () => this.openSettings(e),
                cancelText: l.NW.string(l.t['ETE/oK']),
                confirmText: l.NW.string(l.t['XgZk+v'])
            });
    }
    static defaultNativePermissionsRequestOptions(e) {
        let t = { showAuthorizationError: !0 };
        return null == e ? t : u({}, t, e);
    }
    constructor() {
        c(this, 'storage', new a.Z());
    }
}
