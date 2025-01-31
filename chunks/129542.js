n.d(t, { D: () => a }), n(411104);
var i = n(358085),
    r = n(981631);
function a() {
    switch ((0, i.getPlatform)()) {
        case i.PlatformTypes.WINDOWS:
            let e = 'x86';
            if ((null != window.DiscordNative && (e = window.DiscordNative.os.arch), 'x86' === e || 'ia32' === e)) return r.QR$.WIN32;
            return r.QR$.WIN64;
        case i.PlatformTypes.OSX:
            return r.QR$.MACOS;
        case i.PlatformTypes.LINUX:
            return r.QR$.LINUX;
        default:
            throw Error('Unsupported build type');
    }
}
