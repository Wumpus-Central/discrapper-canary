"use strict";
n.d(t, { A: () => u });
var r = n(157559),
    i = n(723702),
    a = n(837921),
    s = n(325639),
    o = n(765682);
class l extends s.V {
    nativeUtils = a.Ay.getDiscordUtils();
    platformAlwaysPermits = (0, i.isLinux)() || (0, i.isWindows)();
    static requestTypeLookup = {
        [o.iL.CAMERA]: a.kw.Camera,
        [o.iL.AUDIO]: a.kw.Microphone,
        [o.iL.PHOTOS]: a.kw.Photo,
        [o.iL.INPUT_MONITORING]: a.kw.InputMonitoring,
        [o.iL.SCREEN_RECORDING]: a.kw.ScreenRecording,
    };
    requestPermissionCore(e, t) {
        return this.asyncify(
            this.platformAlwaysPermits ? void 0 : this.nativeUtils?.nativePermssionRequestAuthorization,
            e,
            t,
        );
    }
    hasPermissionCore(e, t) {
        return this.asyncify(
            this.platformAlwaysPermits ? void 0 : this.nativeUtils?.nativePermssionHasAuthorization,
            e,
            t,
        );
    }
    asyncify(e, t, n) {
        let r = l.requestTypeLookup[t];
        if (void 0 === r) return Promise.resolve(!0);
        let i = () => (null == e ? Promise.resolve(o.F5.AUTHORIZED) : new Promise((t, n) => e(t, r)));
        return this.requestAuthorization(t, i, n);
    }
    openSettings(e) {
        if (this.nativeUtils?.nativePermissionOpenSettings == null) return;
        let t = l.requestTypeLookup[e];
        void 0 !== t && this.nativeUtils.nativePermissionOpenSettings(t);
    }
    didHavePermission(e) {
        return this.storage.hasPermission(e);
    }
    openAlertModal(e) {
        let { title: t, body: n, onConfirm: i, cancelText: a, confirmText: s } = e;
        r.A.show({ title: t, body: n, onConfirm: i, cancelText: a, confirmText: s });
    }
}
let u = new l();
