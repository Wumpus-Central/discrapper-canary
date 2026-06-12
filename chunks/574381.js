"use strict";
n.d(t, {
    Aq: () => h,
    Av: () => a,
    Ct: () => f,
    HZ: () => _,
    Ls: () => I,
    R0: () => N,
    Sn: () => p,
    cX: () => u,
    cZ: () => v,
    fg: () => r,
    j9: () => c,
    m0: () => E,
    q4: () => g,
    r_: () => y,
    t1: () => S,
    tn: () => A,
    uF: () => l,
    un: () => m,
    uo: () => T,
    xl: () => d,
});
var i,
    r = (((i = {}).WINDOWS = "WINDOWS"), (i.OSX = "OSX"), (i.LINUX = "LINUX"), (i.WEB = "WEB"), i);
let s = window.DiscordNative,
    a = null != s,
    o = null != s ? s.process.platform : "";
function l() {
    return /^win/.test(o);
}
function u() {
    return "darwin" === o;
}
function c() {
    return "linux" === o;
}
function d() {
    return l() || u() || c();
}
function _() {
    return "WEB" === T();
}
function h() {
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
function E() {
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
    return d() || g() || a;
}
function T() {
    return l() ? "WINDOWS" : u() ? "OSX" : c() ? "LINUX" : "WEB";
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
function v() {
    return l() ? "win" : u() ? "osx" : void 0;
}
