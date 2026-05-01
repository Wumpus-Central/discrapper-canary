"use strict";
n.d(t, { O: () => s });
var i = n(723702),
    r = n(652215);
function s() {
    switch ((0, i.getPlatform)()) {
        case i.PlatformTypes.WINDOWS:
            let e = "x86";
            if ((null != window.DiscordNative && (e = window.DiscordNative.os.arch), "x86" === e || "ia32" === e))
                return r.lM6.WIN32;
            return r.lM6.WIN64;
        case i.PlatformTypes.OSX:
            return r.lM6.MACOS;
        case i.PlatformTypes.LINUX:
            return r.lM6.LINUX;
        default:
            throw Error("Unsupported build type");
    }
}
