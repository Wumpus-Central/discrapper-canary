"use strict";
n.d(t, { EL: () => d, TM: () => A, Z5: () => o, cy: () => m, gm: () => E, nr: () => g });
var r = n(481613),
    i = n.n(r);
let a = (i().name ?? "unknown").toLowerCase(),
    s = "chrome" === a.toLowerCase() ? parseInt(i().version ?? "", 10) : -1;
function o() {
    return s;
}
let l = "electron" === a.toLowerCase() ? parseInt(i().version ?? "", 10) : -1;
function u() {
    return l;
}
let c = "firefox" === a.toLowerCase() ? parseInt(i().version ?? "", 10) : -1;
function d() {
    return c;
}
let _ = "edge" === a.toLowerCase() ? parseInt(i().version ?? "", 10) : -1;
function f() {
    return _;
}
let p = "safari" === a.toLowerCase() ? parseInt(i().version ?? "", 10) : -1;
function h() {
    return p;
}
function m() {
    return -1 !== o() || -1 !== u() || -1 !== d() || -1 !== f() || h() >= 14;
}
function g() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : navigator.userAgent,
        t = e.toLowerCase();
    return -1 !== t.indexOf("safari") && -1 === t.indexOf("chrome") && -1 !== t.indexOf("version/");
}
function E() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : navigator.userAgent;
    return -1 !== e.toLowerCase().indexOf("firefox");
}
function A() {
    let e = window.navigator,
        t = e.mediaCapabilities?.decodingInfo != null;
    return g(e.userAgent) && t;
}
