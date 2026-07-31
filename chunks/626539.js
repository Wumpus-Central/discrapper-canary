"use strict";
n.d(t, { A: () => d });
var i = n(157559),
    r = n(723702),
    a = n(19575),
    s = n(187522),
    l = n(765682);
class o extends s.V {
    nativeUtils = a.Ay.getDiscordUtils();
    get platformAlwaysPermits() {
        return !!(0, r.isLinux)();
    }
    static requestTypeLookup = {
        [l.iL.CAMERA]: a.kw.Camera,
        [l.iL.AUDIO]: a.kw.Microphone,
        [l.iL.PHOTOS]: a.kw.Photo,
        [l.iL.INPUT_MONITORING]: a.kw.InputMonitoring,
        [l.iL.SCREEN_RECORDING]: a.kw.ScreenRecording,
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
        let i = o.requestTypeLookup[t];
        return void 0 === i
            ? Promise.resolve(!0)
            : this.requestAuthorization(
                  t,
                  () => (null == e ? Promise.resolve(l.F5.AUTHORIZED) : new Promise((t, n) => e(t, i))),
                  n,
              );
    }
    openSettings(e) {
        if ((0, r.isWindows)())
            switch (e) {
                case l.iL.AUDIO:
                    window.open("ms-settings:privacy-microphone");
                    return;
                case l.iL.CAMERA:
                    window.open("ms-settings:privacy-webcam");
                    return;
                default:
                    return;
            }
        if (this.nativeUtils?.nativePermissionOpenSettings == null) return;
        let t = o.requestTypeLookup[e];
        void 0 !== t && this.nativeUtils.nativePermissionOpenSettings(t);
    }
    didHavePermission(e) {
        return this.storage.hasPermission(e);
    }
    openAlertModal(e) {
        let { title: t, body: n, onConfirm: r, cancelText: a, confirmText: s } = e;
        i.A.show({ title: t, body: n, onConfirm: r, cancelText: a, confirmText: s });
    }
}
let d = new o();
