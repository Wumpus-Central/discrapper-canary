var i = r(47120);
var a = r(668781),
    o = r(998502),
    s = r(58406),
    l = r(761274);
function u(e, n, r) {
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
class c extends s.g {
    requestPermissionCore(e, n) {
        var r;
        return this.asyncify(null === (r = this.nativeUtils) || void 0 === r ? void 0 : r.nativePermssionRequestAuthorization, e, n);
    }
    hasPermissionCore(e, n) {
        var r;
        return this.asyncify(null === (r = this.nativeUtils) || void 0 === r ? void 0 : r.nativePermssionHasAuthorization, e, n);
    }
    asyncify(e, n, r) {
        let i = c.requestTypeLookup[n];
        if (void 0 === i) return Promise.resolve(!0);
        let a = () => (null == e ? Promise.resolve(l.NZ.AUTHORIZED) : new Promise((n, r) => e(n, i)));
        return this.requestAuthorization(n, a, r);
    }
    openSettings(e) {
        var n;
        if ((null === (n = this.nativeUtils) || void 0 === n ? void 0 : n.nativePermissionOpenSettings) == null) return;
        let r = c.requestTypeLookup[e];
        void 0 !== r && this.nativeUtils.nativePermissionOpenSettings(r);
    }
    didHavePermission(e) {
        return this.storage.hasPermission(e);
    }
    openAlertModal(e) {
        let { title: n, body: r, onConfirm: i, cancelText: o, confirmText: s } = e;
        a.Z.show({
            title: n,
            body: r,
            onConfirm: i,
            cancelText: o,
            confirmText: s
        });
    }
    constructor(...e) {
        super(...e), u(this, 'nativeUtils', o.ZP.getDiscordUtils());
    }
}
u(c, 'requestTypeLookup', {
    [l.Eu.CAMERA]: o.jK.Camera,
    [l.Eu.AUDIO]: o.jK.Microphone,
    [l.Eu.PHOTOS]: o.jK.Photo,
    [l.Eu.INPUT_MONITORING]: o.jK.InputMonitoring,
    [l.Eu.SCREEN_RECORDING]: o.jK.ScreenRecording
}),
    (n.Z = new c());
