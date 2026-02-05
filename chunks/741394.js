"use strict";
function r(e, t) {
    let n = e.split(/[/\\]/),
        r = "" !== n[n.length - 1] ? n[n.length - 1] : e;
    return null != t && r.endsWith(t) && (r = r.slice(0, -t.length)), r;
}
function i(e) {
    let t = r(e),
        n = t.lastIndexOf(".");
    return n <= 0 ? t : t.slice(0, n);
}
n.d(t, { kh: () => i, uk: () => r }), n(723702);
