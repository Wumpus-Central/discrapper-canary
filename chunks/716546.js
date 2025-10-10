n.d(t, { Z: () => u }), n(388685);
var r = n(668781),
    i = n(358085),
    a = n(998502),
    o = n(58406),
    s = n(761274);
function l(e, t, n) {
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
class c extends o.g {
    requestPermissionCore(e, t) {
        var n;
        return this.asyncify(
            this.platformAlwaysPermits || null == (n = this.nativeUtils)
                ? void 0
                : n.nativePermssionRequestAuthorization,
            e,
            t,
        );
    }
    hasPermissionCore(e, t) {
        var n;
        return this.asyncify(
            this.platformAlwaysPermits || null == (n = this.nativeUtils) ? void 0 : n.nativePermssionHasAuthorization,
            e,
            t,
        );
    }
    asyncify(e, t, n) {
        let r = c.requestTypeLookup[t];
        if (void 0 === r) return Promise.resolve(!0);
        let i = () => (null == e ? Promise.resolve(s.NZ.AUTHORIZED) : new Promise((t, n) => e(t, r)));
        return this.requestAuthorization(t, i, n);
    }
    openSettings(e) {
        var t;
        if ((null == (t = this.nativeUtils) ? void 0 : t.nativePermissionOpenSettings) == null) return;
        let n = c.requestTypeLookup[e];
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
            confirmText: o,
        });
    }
    constructor(...e) {
        super(...e),
            l(this, "nativeUtils", a.ZP.getDiscordUtils()),
            l(this, "platformAlwaysPermits", (0, i.isLinux)() || (0, i.isWindows)());
    }
}
l(c, "requestTypeLookup", {
    [s.Eu.CAMERA]: a.jK.Camera,
    [s.Eu.AUDIO]: a.jK.Microphone,
    [s.Eu.PHOTOS]: a.jK.Photo,
    [s.Eu.INPUT_MONITORING]: a.jK.InputMonitoring,
    [s.Eu.SCREEN_RECORDING]: a.jK.ScreenRecording,
});
let u = new c();
