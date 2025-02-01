n.d(t, { Z: () => u }), n(47120);
var i = n(668781),
    r = n(998502),
    a = n(58406),
    s = n(761274);
function o(e, t, n) {
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
class l extends a.g {
    requestPermissionCore(e, t) {
        var n;
        return this.asyncify(null === (n = this.nativeUtils) || void 0 === n ? void 0 : n.nativePermssionRequestAuthorization, e, t);
    }
    hasPermissionCore(e, t) {
        var n;
        return this.asyncify(null === (n = this.nativeUtils) || void 0 === n ? void 0 : n.nativePermssionHasAuthorization, e, t);
    }
    asyncify(e, t, n) {
        let i = l.requestTypeLookup[t];
        if (void 0 === i) return Promise.resolve(!0);
        let r = () => (null == e ? Promise.resolve(s.NZ.AUTHORIZED) : new Promise((t, n) => e(t, i)));
        return this.requestAuthorization(t, r, n);
    }
    openSettings(e) {
        var t;
        if ((null === (t = this.nativeUtils) || void 0 === t ? void 0 : t.nativePermissionOpenSettings) == null) return;
        let n = l.requestTypeLookup[e];
        void 0 !== n && this.nativeUtils.nativePermissionOpenSettings(n);
    }
    didHavePermission(e) {
        return this.storage.hasPermission(e);
    }
    openAlertModal(e) {
        let { title: t, body: n, onConfirm: r, cancelText: a, confirmText: s } = e;
        i.Z.show({
            title: t,
            body: n,
            onConfirm: r,
            cancelText: a,
            confirmText: s
        });
    }
    constructor(...e) {
        super(...e), o(this, 'nativeUtils', r.ZP.getDiscordUtils());
    }
}
o(l, 'requestTypeLookup', {
    [s.Eu.CAMERA]: r.jK.Camera,
    [s.Eu.AUDIO]: r.jK.Microphone,
    [s.Eu.PHOTOS]: r.jK.Photo,
    [s.Eu.INPUT_MONITORING]: r.jK.InputMonitoring,
    [s.Eu.SCREEN_RECORDING]: r.jK.ScreenRecording
});
let u = new l();
