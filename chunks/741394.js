"use strict";
n.d(t, { CN: () => r, kh: () => s, uk: () => a });
var i = n(723702);
function r() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    let r = (0, i.isWindows)() ? "\\" : "/";
    return t.filter((e) => e.length > 0).join(r);
}
function a(e, t) {
    let n = e.split(/[/\\]/),
        i = "" !== n[n.length - 1] ? n[n.length - 1] : e;
    return null != t && i.endsWith(t) && (i = i.slice(0, -t.length)), i;
}
function s(e) {
    let t = a(e),
        n = t.lastIndexOf(".");
    return n <= 0 ? t : t.slice(0, n);
}
