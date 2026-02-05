"use strict";
n.d(t, {
    Aq: () => _,
    Av: () => a,
    Ct: () => f,
    HZ: () => d,
    Ls: () => A,
    R0: () => S,
    Sn: () => p,
    cX: () => l,
    fg: () => r,
    j9: () => u,
    m0: () => h,
    q4: () => g,
    r_: () => y,
    t1: () => T,
    tn: () => E,
    uF: () => o,
    un: () => m,
    uo: () => I,
    xl: () => c,
});
var r = (function (e) {
    return (e.WINDOWS = "WINDOWS"), (e.OSX = "OSX"), (e.LINUX = "LINUX"), (e.WEB = "WEB"), e;
})({});
let i = window.DiscordNative,
    a = null != i,
    s = null != i ? i.process.platform : "";
function o() {
    return /^win/.test(s);
}
function l() {
    return "darwin" === s;
}
function u() {
    return "linux" === s;
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
    return "android" === s;
}
function m() {
    return "ios" === s;
}
function g() {
    return navigator.userAgent?.match(/OculusBrowser/i) != null;
}
function E() {
    return g();
}
function A() {
    return c() || g() || a;
}
function I() {
    return o() ? "WINDOWS" : l() ? "OSX" : u() ? "LINUX" : "WEB";
}
function T() {
    return s;
}
function y() {
    switch (s) {
        case "ios":
        case "android":
            return s;
        default:
            return "web";
    }
}
function S() {
    let { userAgent: e } = window.navigator;
    if (/Windows/i.test(e)) return /Phone/.test(e) ? "windows mobile" : "windows";
    if (/(iPhone|iPad|iPod)/.test(e)) return "ios";
    if (/Android/.test(e)) return "android";
    if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return "blackberry";
    if (/Mac/i.test(e))
        return null != window.navigator.maxTouchPoints && window.navigator.maxTouchPoints > 2 ? "ios" : "macos";
    else if (/Linux/i.test(e)) return "linux";
}
