n.r(t),
    n.d(t, {
        PlatformTypes: () => r,
        getNativePlatform: () => v,
        getOS: () => b,
        getPlatform: () => g,
        getPlatformName: () => E,
        isAndroid: () => h,
        isAndroidChrome: () => f,
        isAndroidWeb: () => p,
        isDesktop: () => u,
        isIOS: () => m,
        isLinux: () => c,
        isMac: () => l,
        isMacWeb: () => _,
        isPlatformEmbedded: () => o,
        isWeb: () => d,
        isWindows: () => s
    }),
    n(301563);
var r = (function (e) {
    return (e.WINDOWS = 'WINDOWS'), (e.OSX = 'OSX'), (e.LINUX = 'LINUX'), (e.WEB = 'WEB'), e;
})({});
let i = window.DiscordNative,
    o = null != i,
    a = null != i ? i.process.platform : '';
function s() {
    return /^win/.test(a);
}
function l() {
    return 'darwin' === a;
}
function c() {
    return 'linux' === a;
}
function u() {
    return s() || l() || c();
}
function d() {
    return 'WEB' === g();
}
function f() {
    return null != navigator.userAgent && null != navigator.userAgent.toLowerCase().match('(android ).+chrome/[.0-9]* mobile');
}
function p() {
    var e;
    return (null === (e = navigator.userAgent) || void 0 === e ? void 0 : e.match(/android/i)) != null;
}
function _() {
    var e;
    return (null === (e = navigator.userAgent) || void 0 === e ? void 0 : e.match(/Macintosh/i)) != null;
}
function h() {
    return 'android' === a;
}
function m() {
    return 'ios' === a;
}
function g() {
    return s() ? 'WINDOWS' : l() ? 'OSX' : c() ? 'LINUX' : 'WEB';
}
function E() {
    return a;
}
function v() {
    switch (a) {
        case 'ios':
        case 'android':
            return a;
        default:
            return 'web';
    }
}
function b() {
    let { userAgent: e } = window.navigator;
    if (/Windows/i.test(e)) return /Phone/.test(e) ? 'windows mobile' : 'windows';
    if (/(iPhone|iPad|iPod)/.test(e)) return 'ios';
    if (/Android/.test(e)) return 'android';
    if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return 'blackberry';
    if (/Mac/i.test(e)) return null != window.navigator.maxTouchPoints && window.navigator.maxTouchPoints > 2 ? 'ios' : 'macos';
    else if (/Linux/i.test(e)) return 'linux';
}
