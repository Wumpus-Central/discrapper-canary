"use strict";
n.d(t, { A: () => i });
var r = n(837921);
let i = {
    clearNavigationHistory() {
        r.Ay.clearNavigationHistory();
    },
    flushDNSCache() {
        r.Ay.flushDNSCache();
    },
    flushCookies: () => r.Ay.flushCookies(),
    setApplicationBackgroundColor(e) {
        r.Ay.setApplicationBackgroundColor(e);
    },
    setZoomFactor: (e) => r.Ay.setZoomFactor(e),
    focus(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        r.Ay.focus(e, t);
    },
    submitLiveCrashReport: (e) => r.Ay.submitLiveCrashReport(e),
    getPidFromDesktopSource: (e) => r.Ay.getPidFromDesktopSource(e),
    getAudioPid: (e) => r.Ay.getAudioPid(e),
    generateSessionFromPid: (e) => r.Ay.generateSessionFromPid(e),
    getAppHardwareAccelerationEnabled: () => r.Ay.getEnableHardwareAcceleration(),
    getDiscordIsElevated: () => r.Ay.getDiscordIsElevated(),
};
