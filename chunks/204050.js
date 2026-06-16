s.d(t, { i: () => c, p: () => r });
var n = s(299855),
    l = s.n(n),
    i = s(77729),
    a = s(723702);
let o = /\{65E8773D-8F56-11D0-A3B9-00A0C9223196\}/i;
function r() {
    return !!(0, a.isWindows)() && !!a.isPlatformEmbedded && l().satisfies(i.A.os.release, ">=10.0.22000");
}
function c(e) {
    return (0, a.getPlatform)() === a.PlatformTypes.WINDOWS
        ? "ms-settings:camera" +
              (null != e
                  ? `?cameraId=${encodeURIComponent(e.replace(o, "{E5323777-F976-4f5b-9B55-B94699C46E44}"))}`
                  : "")
        : "";
}
