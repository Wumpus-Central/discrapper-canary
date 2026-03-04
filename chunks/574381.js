"use strict";
n.d(t, {
    Aq: () => _,
    Av: () => s,
    Ct: () => f,
    HZ: () => d,
    Ls: () => A,
    R0: () => y,
    Sn: () => p,
    cX: () => l,
    cZ: () => v,
    fg: () => r,
    j9: () => u,
    m0: () => h,
    q4: () => E,
    r_: () => S,
    t1: () => T,
    tn: () => g,
    uF: () => o,
    un: () => m,
    uo: () => I,
    xl: () => c,
});
var r = (function (e) {
    return (e.WINDOWS = "WINDOWS"), (e.OSX = "OSX"), (e.LINUX = "LINUX"), (e.WEB = "WEB"), e;
})({});
let i = window.DiscordNative,
    s = null != i,
    a = null != i ? i.process.platform : "";
function o() {
    return /^win/.test(a);
}
function l() {
    return "darwin" === a;
}
function u() {
    return "linux" === a;
}
function c() {
    return o() || l() || u();
}
function d() {
    return "WEB" === I();
}
function _() {
    return (
        null != navigator.userAgent &&
        null != navigator.userAgent.toLowerCase().match("(android ).+chrome/[.0-9]* mobile")
    );
}
function f() {
    return navigator.userAgent?.match(/android/i) != null;
}
function p() {
    return navigator.userAgent?.match(/Macintosh/i) != null;
}
function h() {
    return "android" === a;
}
function m() {
    return "ios" === a;
}
function E() {
    return navigator.userAgent?.match(/OculusBrowser/i) != null;
}
function g() {
    return E();
}
function A() {
    return c() || E() || s;
}
function I() {
    return o() ? "WINDOWS" : l() ? "OSX" : u() ? "LINUX" : "WEB";
}
function T() {
    return a;
}
function S() {
    switch (a) {
        case "ios":
        case "android":
            return a;
        default:
            return "web";
    }
}
function y() {
    let { userAgent: e } = window.navigator;
    if (/Windows/i.test(e)) return /Phone/.test(e) ? "windows mobile" : "windows";
    if (/(iPhone|iPad|iPod)/.test(e)) return "ios";
    if (/Android/.test(e)) return "android";
    if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return "blackberry";
    if (/Mac/i.test(e))
        return null != window.navigator.maxTouchPoints && window.navigator.maxTouchPoints > 2 ? "ios" : "macos";
    else if (/Linux/i.test(e)) return "linux";
}
function v() {
    return o() ? "win" : l() ? "osx" : void 0;
}
