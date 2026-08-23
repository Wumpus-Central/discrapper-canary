"use strict";
n.d(t, {
    Aq: () => E,
    Av: () => s,
    Ct: () => A,
    HZ: () => _,
    Ls: () => m,
    R0: () => C,
    Sn: () => h,
    cX: () => d,
    cZ: () => R,
    fg: () => r,
    j9: () => c,
    m0: () => I,
    q4: () => p,
    r_: () => N,
    t1: () => S,
    tn: () => T,
    uF: () => o,
    un: () => f,
    uo: () => g,
    xl: () => u,
});
var i,
    r = (((i = {}).WINDOWS = "WINDOWS"), (i.OSX = "OSX"), (i.LINUX = "LINUX"), (i.WEB = "WEB"), i);
let a = window.DiscordNative,
    s = null != a,
    l = null != a ? a.process.platform : "";
function o() {
    return /^win/.test(l);
}
function d() {
    return "darwin" === l;
}
function c() {
    return "linux" === l;
}
function u() {
    return o() || d() || c();
}
function _() {
    return "WEB" === g();
}
function E() {
    return (
        null != navigator.userAgent &&
        null != navigator.userAgent.toLowerCase().match("(android ).+chrome/[.0-9]* mobile")
    );
}
function A() {
    return navigator.userAgent?.match(/android/i) != null;
}
function h() {
    return navigator.userAgent?.match(/Macintosh/i) != null;
}
function I() {
    return "android" === l;
}
function f() {
    return "ios" === l;
}
function p() {
    return navigator.userAgent?.match(/OculusBrowser/i) != null;
}
function T() {
    return p();
}
function m() {
    return u() || p() || s;
}
function g() {
    return o() ? "WINDOWS" : d() ? "OSX" : c() ? "LINUX" : "WEB";
}
function S() {
    return l;
}
function N() {
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
