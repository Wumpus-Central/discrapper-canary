n.d(t, { O: () => r });
var i = n(723702),
    a = n(652215);
function r() {
    switch ((0, i.getPlatform)()) {
        case i.PlatformTypes.WINDOWS:
            let e = "x86";
            if ((null != window.DiscordNative && (e = window.DiscordNative.os.arch), "x86" === e || "ia32" === e))
                return a.lM6.WIN32;
            return a.lM6.WIN64;
        case i.PlatformTypes.OSX:
            return a.lM6.MACOS;
        case i.PlatformTypes.LINUX:
            return a.lM6.LINUX;
        default:
            throw Error("Unsupported build type");
    }
}
