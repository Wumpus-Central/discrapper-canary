n.d(t, {
    A: () => u,
}),
    n(896048);
var r = n(157559),
    i = n(723702),
    a = n(837921),
    s = n(325639),
    o = n(765682);

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
class c extends s.V {
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
        let i = () => (null == e ? Promise.resolve(o.F5.AUTHORIZED) : new Promise((t, n) => e(t, r)));
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
        let { title: t, body: n, onConfirm: i, cancelText: a, confirmText: s } = e;
        r.A.show({
            title: t,
            body: n,
            onConfirm: i,
            cancelText: a,
            confirmText: s,
        });
    }
    constructor(...e) {
        super(...e),
            l(this, "nativeUtils", a.Ay.getDiscordUtils()),
            l(this, "platformAlwaysPermits", (0, i.isLinux)() || (0, i.isWindows)());
    }
}
l(c, "requestTypeLookup", {
    [o.iL.CAMERA]: a.kw.Camera,
    [o.iL.AUDIO]: a.kw.Microphone,
    [o.iL.PHOTOS]: a.kw.Photo,
    [o.iL.INPUT_MONITORING]: a.kw.InputMonitoring,
    [o.iL.SCREEN_RECORDING]: a.kw.ScreenRecording,
});
let u = new c();
