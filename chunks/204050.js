n.d(t, {
    i: () => c,
    p: () => o,
}),
    n(747238),
    n(812715),
    n(65821);
var r = n(299855),
    i = n.n(r),
    l = n(77729),
    s = n(723702);
let a = /\{65E8773D-8F56-11D0-A3B9-00A0C9223196\}/i;

function o() {
    return !!(0, s.isWindows)() && !!s.isPlatformEmbedded && i().satisfies(l.A.os.release, ">=10.0.22000");
}

function c(e) {
    return (0, s.getPlatform)() === s.PlatformTypes.WINDOWS
        ? "ms-settings:camera" +
              (null != e
                  ? "?cameraId=".concat(encodeURIComponent(e.replace(a, "{E5323777-F976-4f5b-9B55-B94699C46E44}")))
                  : "")
        : "";
}
