"use strict";
n.d(t, { O: () => s });
var r = n(723702),
    i = n(652215);
function s() {
    switch ((0, r.getPlatform)()) {
        case r.PlatformTypes.WINDOWS:
            let e = "x86";
            if ((null != window.DiscordNative && (e = window.DiscordNative.os.arch), "x86" === e || "ia32" === e))
                return i.lM6.WIN32;
            return i.lM6.WIN64;
        case r.PlatformTypes.OSX:
            return i.lM6.MACOS;
        case r.PlatformTypes.LINUX:
            return i.lM6.LINUX;
        default:
            throw Error("Unsupported build type");
    }
}
