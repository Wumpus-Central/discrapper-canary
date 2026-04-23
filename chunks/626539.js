"use strict";
n.d(t, { A: () => d });
var i = n(157559),
    r = n(723702),
    s = n(19575),
    a = n(187522),
    o = n(765682);
class l extends a.V {
    nativeUtils = s.Ay.getDiscordUtils();
    platformAlwaysPermits = (0, r.isLinux)() || (0, r.isWindows)();
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
        let i = l.requestTypeLookup[t];
        return void 0 === i
            ? Promise.resolve(!0)
            : this.requestAuthorization(
                  t,
                  () => (null == e ? Promise.resolve(o.F5.AUTHORIZED) : new Promise((t, n) => e(t, i))),
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
        let { title: t, body: n, onConfirm: r, cancelText: s, confirmText: a } = e;
        i.A.show({ title: t, body: n, onConfirm: r, cancelText: s, confirmText: a });
    }
}
let d = new l();
