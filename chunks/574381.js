n.d(t, {
    Aq: () => u,
    Av: () => s,
    Ct: () => A,
    HZ: () => E,
    Ls: () => f,
    R0: () => C,
    Sn: () => I,
    cX: () => d,
    cZ: () => R,
    fg: () => a,
    j9: () => c,
    m0: () => T,
    q4: () => S,
    r_: () => O,
    t1: () => m,
    tn: () => N,
    uF: () => o,
    un: () => h,
    uo: () => p,
    xl: () => _,
});
var i,
    a = (((i = {}).WINDOWS = "WINDOWS"), (i.OSX = "OSX"), (i.LINUX = "LINUX"), (i.WEB = "WEB"), i);
let r = window.DiscordNative,
    s = null != r,
    l = null != r ? r.process.platform : "";
function o() {
    return /^win/.test(l);
}
function d() {
    return "darwin" === l;
}
function c() {
    return "linux" === l;
}
function _() {
    return o() || d() || c();
}
function E() {
    return "WEB" === p();
}
function u() {
    return (
        null != navigator.userAgent &&
        null != navigator.userAgent.toLowerCase().match("(android ).+chrome/[.0-9]* mobile")
    );
}
function A() {
    return navigator.userAgent?.match(/android/i) != null;
}
function I() {
    return navigator.userAgent?.match(/Macintosh/i) != null;
}
function T() {
    return "android" === l;
}
function h() {
    return "ios" === l;
}
function S() {
    return navigator.userAgent?.match(/OculusBrowser/i) != null;
}
function N() {
    return S();
}
function f() {
    return _() || S() || s;
}
function p() {
    return o() ? "WINDOWS" : d() ? "OSX" : c() ? "LINUX" : "WEB";
}
function m() {
    return l;
}
function O() {
    switch (l) {
        case "ios":
        case "android":
            return l;
        default:
            return "web";
    }
}
function C() {
    let { userAgent: e } = window.navigator;
    if (/Windows/i.test(e)) return /Phone/.test(e) ? "windows mobile" : "windows";
    if (/(iPhone|iPad|iPod)/.test(e)) return "ios";
    if (/Android/.test(e)) return "android";
    if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return "blackberry";
    if (/Mac/i.test(e))
        return null != window.navigator.maxTouchPoints && window.navigator.maxTouchPoints > 2 ? "ios" : "macos";
    else if (/Linux/i.test(e)) return "linux";
}
function R() {
    return o() ? "win" : d() ? "osx" : void 0;
}
