"use strict";
n.d(t, { A: () => r });
var i = n(19575);
let r = {
    clearNavigationHistory() {
        i.Ay.clearNavigationHistory();
    },
    flushDNSCache() {
        i.Ay.flushDNSCache();
    },
    flushCookies: () => i.Ay.flushCookies(),
    setApplicationBackgroundColor(e) {
        i.Ay.setApplicationBackgroundColor(e);
    },
    setZoomFactor: (e) => i.Ay.setZoomFactor(e),
    focus(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        i.Ay.focus(e, t);
    },
    submitLiveCrashReport: (e) => i.Ay.submitLiveCrashReport(e),
    getPidFromDesktopSource: (e) => i.Ay.getPidFromDesktopSource(e),
    getAudioPid: (e) => i.Ay.getAudioPid(e),
    generateSessionFromPid: (e) => i.Ay.generateSessionFromPid(e),
    getAppHardwareAccelerationEnabled: () => i.Ay.getEnableHardwareAcceleration(),
    getDiscordIsElevated: () => i.Ay.getDiscordIsElevated(),
};
