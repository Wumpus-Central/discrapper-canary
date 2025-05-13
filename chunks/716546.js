n.d(t, { Z: () => c }), n(388685);
var r = n(668781),
    i = n(998502),
    a = n(58406),
    o = n(761274);
function s(e, t, n) {
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
        return this.asyncify(null == (n = this.nativeUtils) ? void 0 : n.nativePermssionRequestAuthorization, e, t);
    }
    hasPermissionCore(e, t) {
        var n;
        return this.asyncify(null == (n = this.nativeUtils) ? void 0 : n.nativePermssionHasAuthorization, e, t);
    }
    asyncify(e, t, n) {
        let r = l.requestTypeLookup[t];
        if (void 0 === r) return Promise.resolve(!0);
        let i = () => (null == e ? Promise.resolve(o.NZ.AUTHORIZED) : new Promise((t, n) => e(t, r)));
        return this.requestAuthorization(t, i, n);
    }
    openSettings(e) {
        var t;
        if ((null == (t = this.nativeUtils) ? void 0 : t.nativePermissionOpenSettings) == null) return;
        let n = l.requestTypeLookup[e];
        void 0 !== n && this.nativeUtils.nativePermissionOpenSettings(n);
    }
    didHavePermission(e) {
        return this.storage.hasPermission(e);
    }
    openAlertModal(e) {
        let { title: t, body: n, onConfirm: i, cancelText: a, confirmText: o } = e;
        r.Z.show({
            title: t,
            body: n,
            onConfirm: i,
            cancelText: a,
            confirmText: o
        });
    }
    constructor(...e) {
        super(...e), s(this, 'nativeUtils', i.ZP.getDiscordUtils());
    }
}
s(l, 'requestTypeLookup', {
    [o.Eu.CAMERA]: i.jK.Camera,
    [o.Eu.AUDIO]: i.jK.Microphone,
    [o.Eu.PHOTOS]: i.jK.Photo,
    [o.Eu.INPUT_MONITORING]: i.jK.InputMonitoring,
    [o.Eu.SCREEN_RECORDING]: i.jK.ScreenRecording
});
let c = new l();
