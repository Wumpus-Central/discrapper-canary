n.r(t),
    n.d(t, {
        PlatformTypes: () => i,
        getNativePlatform: () => v,
        getOS: () => y,
        getPlatform: () => g,
        getPlatformName: () => E,
        isAndroid: () => h,
        isAndroidChrome: () => f,
        isAndroidWeb: () => _,
        isDesktop: () => c,
        isIOS: () => m,
        isLinux: () => u,
        isMac: () => l,
        isMacWeb: () => p,
        isPlatformEmbedded: () => a,
        isWeb: () => d,
        isWindows: () => o
    });
var i = (function (e) {
    return (e.WINDOWS = 'WINDOWS'), (e.OSX = 'OSX'), (e.LINUX = 'LINUX'), (e.WEB = 'WEB'), e;
})({});
let r = window.DiscordNative,
    a = null != r,
    s = null != r ? r.process.platform : '';
function o() {
    return /^win/.test(s);
}
function l() {
    return 'darwin' === s;
}
function u() {
    return 'linux' === s;
}
function c() {
    return o() || l() || u();
}
function d() {
    return 'WEB' === g();
}
function f() {
    return null != navigator.userAgent && null != navigator.userAgent.toLowerCase().match('(android ).+chrome/[.0-9]* mobile');
}
function _() {
    var e;
    return (null === (e = navigator.userAgent) || void 0 === e ? void 0 : e.match(/android/i)) != null;
}
function p() {
    var e;
    return (null === (e = navigator.userAgent) || void 0 === e ? void 0 : e.match(/Macintosh/i)) != null;
}
function h() {
    return 'android' === s;
}
function m() {
    return 'ios' === s;
}
function g() {
    return o() ? 'WINDOWS' : l() ? 'OSX' : u() ? 'LINUX' : 'WEB';
}
function E() {
    return s;
}
function v() {
    switch (s) {
        case 'ios':
        case 'android':
            return s;
        default:
            return 'web';
    }
}
function y() {
    let { userAgent: e } = window.navigator;
    if (/Windows/i.test(e)) return /Phone/.test(e) ? 'windows mobile' : 'windows';
    if (/(iPhone|iPad|iPod)/.test(e)) return 'ios';
    if (/Android/.test(e)) return 'android';
    if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return 'blackberry';
    if (/Mac/i.test(e)) return null != window.navigator.maxTouchPoints && window.navigator.maxTouchPoints > 2 ? 'ios' : 'macos';
    else if (/Linux/i.test(e)) return 'linux';
}
