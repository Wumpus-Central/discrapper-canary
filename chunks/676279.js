"use strict";
n.d(t, { EL: () => c, TM: () => E, Z5: () => o, cy: () => h, gm: () => p, nr: () => f });
var i = n(481613),
    r = n.n(i);
let s = (r().name ?? "unknown").toLowerCase(),
    a = "chrome" === s.toLowerCase() ? parseInt(r().version ?? "", 10) : -1;
function o() {
    return a;
}
let l = "electron" === s.toLowerCase() ? parseInt(r().version ?? "", 10) : -1,
    u = "firefox" === s.toLowerCase() ? parseInt(r().version ?? "", 10) : -1;
function c() {
    return u;
}
let d = "edge" === s.toLowerCase() ? parseInt(r().version ?? "", 10) : -1,
    _ = "safari" === s.toLowerCase() ? parseInt(r().version ?? "", 10) : -1;
function h() {
    return -1 !== a || -1 !== l || -1 !== u || -1 !== d || _ >= 14;
}
function f() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : navigator.userAgent,
        t = e.toLowerCase();
    return -1 !== t.indexOf("safari") && -1 === t.indexOf("chrome") && -1 !== t.indexOf("version/");
}
function p() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : navigator.userAgent;
    return -1 !== e.toLowerCase().indexOf("firefox");
}
function E() {
    let e = window.navigator,
        t = e.mediaCapabilities?.decodingInfo != null;
    return f(e.userAgent) && t;
}
