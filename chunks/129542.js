r.d(n, {
    D: function () {
        return l;
    }
});
var i,
    a = r(411104);
var o = r(358085),
    s = r(981631);
function l() {
    switch ((0, o.getPlatform)()) {
        case o.PlatformTypes.WINDOWS:
            let e = 'x86';
            if ((null != window.DiscordNative && (e = window.DiscordNative.os.arch), 'x86' === e || 'ia32' === e)) return s.QR$.WIN32;
            return s.QR$.WIN64;
        case o.PlatformTypes.OSX:
            return s.QR$.MACOS;
        case o.PlatformTypes.LINUX:
            return s.QR$.LINUX;
        default:
            throw Error('Unsupported build type');
    }
}
!(function (e) {
    (e.X86 = 'x86'), (e.IA32 = 'ia32');
})(i || (i = {}));
