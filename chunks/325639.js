n.d(t, { V: () => d }), n(65821);
var r = n(954571),
    i = n(988276),
    a = n(277682),
    s = n(765682),
    o = n(652215),
    l = n(985018);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                c(e, t, n[t]);
            });
    }
    return e;
}
class d {
    async requestAuthorization(e, t, n) {
        if ("function" != typeof t)
            throw Error("requestAuthorization: Was provided with not a function for ".concat(e, "."));
        r.default.track(o.HAw.PERMISSIONS_REQUESTED, { type: e });
        let a = await t(),
            l = a === s.F5.AUTHORIZED || a === s.F5.LIMITED,
            c = l ? s.hL.ACCEPTED : s.hL.DENIED;
        return i.A.setPermission(e, c), !l && n.showAuthorizationError && this.showAlert(e), l;
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
            [s.iL.CAMERA]: "".concat(l.intl.string(l.t["68G7fD"]), ". ").concat(l.intl.string(l.t["5Jvu1R"])),
            [s.iL.AUDIO]: "".concat(l.intl.string(l.t.xisTfe), ". ").concat(l.intl.string(l.t["5Jvu1R"])),
            [s.iL.PHOTOS]: "".concat(l.intl.string(l.t.jQHU4M), ". ").concat(l.intl.string(l.t["5Jvu1R"])),
            [s.iL.INPUT_MONITORING]: "".concat(l.intl.string(l.t.UIBqsS), ". ").concat(l.intl.string(l.t["5Jvu1R"])),
            [s.iL.CONTACTS]: "".concat(l.intl.string(l.t.kTtf7o), ". ").concat(l.intl.string(l.t["5Jvu1R"])),
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
        return null == e ? t : u({}, t, e);
    }
    constructor() {
        c(this, "storage", new a.A());
    }
}
