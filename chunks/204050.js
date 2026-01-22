n.d(t, {
    i: () => d,
    p: () => u,
}),
    n(747238),
    n(812715),
    n(65821);
var r = n(299855),
    i = n.n(r),
    a = n(77729),
    s = n(723702);
let o = ">=10.0.22000",
    l = /\{65E8773D-8F56-11D0-A3B9-00A0C9223196\}/i,
    c = "{E5323777-F976-4f5b-9B55-B94699C46E44}";

function u() {
    return !!(0, s.isWindows)() && !!s.isPlatformEmbedded && i().satisfies(a.A.os.release, o);
}

function d(e) {
    return (0, s.getPlatform)() === s.PlatformTypes.WINDOWS
        ? "ms-settings:camera" + (null != e ? "?cameraId=".concat(encodeURIComponent(e.replace(l, c))) : "")
        : "";
}
