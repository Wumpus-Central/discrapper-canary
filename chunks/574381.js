"use strict";
n.d(t, {
    Aq: () => f,
    Av: () => a,
    Ct: () => E,
    HZ: () => _,
    Ls: () => I,
    R0: () => N,
    Sn: () => h,
    cX: () => u,
    cZ: () => O,
    fg: () => i,
    j9: () => d,
    m0: () => p,
    q4: () => g,
    r_: () => y,
    t1: () => S,
    tn: () => A,
    uF: () => l,
    un: () => m,
    uo: () => T,
    xl: () => c,
});
var r,
    i = (((r = {}).WINDOWS = "WINDOWS"), (r.OSX = "OSX"), (r.LINUX = "LINUX"), (r.WEB = "WEB"), r);
let s = window.DiscordNative,
    a = null != s,
    o = null != s ? s.process.platform : "";
function l() {
    return /^win/.test(o);
}
function u() {
    return "darwin" === o;
}
function d() {
    return "linux" === o;
}
function c() {
    return l() || u() || d();
}
function _() {
    return "WEB" === T();
}
function f() {
    return (
        null != navigator.userAgent &&
        null != navigator.userAgent.toLowerCase().match("(android ).+chrome/[.0-9]* mobile")
    );
}
function E() {
    return navigator.userAgent?.match(/android/i) != null;
}
function h() {
    return navigator.userAgent?.match(/Macintosh/i) != null;
}
function p() {
    return "android" === o;
}
function m() {
    return "ios" === o;
}
function g() {
    return navigator.userAgent?.match(/OculusBrowser/i) != null;
}
function A() {
    return g();
}
function I() {
    return c() || g() || a;
}
function T() {
    return l() ? "WINDOWS" : u() ? "OSX" : d() ? "LINUX" : "WEB";
}
function S() {
    return o;
}
function y() {
    switch (o) {
        case "ios":
        case "android":
            return o;
        default:
            return "web";
    }
}
function N() {
    let { userAgent: e } = window.navigator;
    if (/Windows/i.test(e)) return /Phone/.test(e) ? "windows mobile" : "windows";
    if (/(iPhone|iPad|iPod)/.test(e)) return "ios";
    if (/Android/.test(e)) return "android";
    if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return "blackberry";
    if (/Mac/i.test(e))
        return null != window.navigator.maxTouchPoints && window.navigator.maxTouchPoints > 2 ? "ios" : "macos";
    else if (/Linux/i.test(e)) return "linux";
}
function O() {
    return l() ? "win" : u() ? "osx" : void 0;
}
