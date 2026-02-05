"use strict";
function r(e) {
    return e.map((e) => String.fromCharCode(e)).join("");
}
function i(e) {
    if (e.length >= 8) {
        let t = r(e.slice(0, 8));
        if ("ASCII\0\0\0" === t) return r(e.slice(8));
        if ("JIS\0\0\0\0\0" === t) return "[JIS encoded text]";
        if ("UNICODE\0" === t) return "[Unicode encoded text]";
        else if ("\0\0\0\0\0\0\0\0" === t) return "[Undefined encoding]";
    }
    return "Undefined";
}
function a(e) {
    return e[0][0] / e[0][1] + e[1][0] / e[1][1] / 60 + e[2][0] / e[2][1] / 3600;
}
n.d(t, { Cn: () => i, Jn: () => r, e7: () => a });
