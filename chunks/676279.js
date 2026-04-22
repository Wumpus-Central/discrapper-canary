"use strict";
n.d(t, { EL: () => d, TM: () => p, Z5: () => o, cy: () => f, gm: () => h, nr: () => E });
var r = n(481613),
    i = n.n(r);
let s = (i().name ?? "unknown").toLowerCase(),
    a = "chrome" === s.toLowerCase() ? parseInt(i().version ?? "", 10) : -1;
function o() {
    return a;
}
let l = "electron" === s.toLowerCase() ? parseInt(i().version ?? "", 10) : -1,
    u = "firefox" === s.toLowerCase() ? parseInt(i().version ?? "", 10) : -1;
function d() {
    return u;
}
let c = "edge" === s.toLowerCase() ? parseInt(i().version ?? "", 10) : -1,
    _ = "safari" === s.toLowerCase() ? parseInt(i().version ?? "", 10) : -1;
function f() {
    return -1 !== a || -1 !== l || -1 !== u || -1 !== c || _ >= 14;
}
function E() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : navigator.userAgent,
        t = e.toLowerCase();
    return -1 !== t.indexOf("safari") && -1 === t.indexOf("chrome") && -1 !== t.indexOf("version/");
}
function h() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : navigator.userAgent;
    return -1 !== e.toLowerCase().indexOf("firefox");
}
function p() {
    let e = window.navigator,
        t = e.mediaCapabilities?.decodingInfo != null;
    return E(e.userAgent) && t;
}
