"use strict";
n.d(t, { EL: () => c, TM: () => I, Z5: () => l, cy: () => E, gm: () => h, nr: () => A });
var i = n(481613),
    r = n.n(i);
let a = (r().name ?? "unknown").toLowerCase(),
    s = "chrome" === a.toLowerCase() ? parseInt(r().version ?? "", 10) : -1;
function l() {
    return s;
}
let o = "electron" === a.toLowerCase() ? parseInt(r().version ?? "", 10) : -1,
    d = "firefox" === a.toLowerCase() ? parseInt(r().version ?? "", 10) : -1;
function c() {
    return d;
}
let u = "edge" === a.toLowerCase() ? parseInt(r().version ?? "", 10) : -1,
    _ = "safari" === a.toLowerCase() ? parseInt(r().version ?? "", 10) : -1;
function E() {
    return -1 !== s || -1 !== o || -1 !== d || -1 !== u || _ >= 14;
}
function A() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : navigator.userAgent,
        t = e.toLowerCase();
    return -1 !== t.indexOf("safari") && -1 === t.indexOf("chrome") && -1 !== t.indexOf("version/");
}
function h() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : navigator.userAgent;
    return -1 !== e.toLowerCase().indexOf("firefox");
}
function I() {
    let e = window.navigator,
        t = e.mediaCapabilities?.decodingInfo != null;
    return A(e.userAgent) && t;
}
