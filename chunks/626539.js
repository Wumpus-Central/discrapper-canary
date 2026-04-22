"use strict";
n.d(t, { A: () => u });
var r = n(157559),
    i = n(723702),
    s = n(837921),
    a = n(325639),
    o = n(765682);
class l extends a.V {
    nativeUtils = s.Ay.getDiscordUtils();
    platformAlwaysPermits = (0, i.isLinux)() || (0, i.isWindows)();
    static requestTypeLookup = {
        [o.iL.CAMERA]: s.kw.Camera,
        [o.iL.AUDIO]: s.kw.Microphone,
        [o.iL.PHOTOS]: s.kw.Photo,
        [o.iL.INPUT_MONITORING]: s.kw.InputMonitoring,
        [o.iL.SCREEN_RECORDING]: s.kw.ScreenRecording,
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
        return void 0 === r
            ? Promise.resolve(!0)
            : this.requestAuthorization(
                  t,
                  () => (null == e ? Promise.resolve(o.F5.AUTHORIZED) : new Promise((t, n) => e(t, r))),
                  n,
              );
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
        let { title: t, body: n, onConfirm: i, cancelText: s, confirmText: a } = e;
        r.A.show({ title: t, body: n, onConfirm: i, cancelText: s, confirmText: a });
    }
}
let u = new l();
