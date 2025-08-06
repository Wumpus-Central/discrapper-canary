n.d(t, { u: () => o });
var r = n(185833),
    i = n(239189);
function o(e) {
    var t;
    return 'number' == typeof e ? (e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null) : (t = r.g7.exec(e)) ? parseInt(t[1] + 'ff', 16) >>> 0 : i.colorNames && void 0 !== i.colorNames[e] ? i.colorNames[e] : (t = r.B8.exec(e)) ? ((l(t[1]) << 24) | (l(t[2]) << 16) | (l(t[3]) << 8) | 255) >>> 0 : (t = r.m4.exec(e)) ? ((l(t[1]) << 24) | (l(t[2]) << 16) | (l(t[3]) << 8) | u(t[4])) >>> 0 : (t = r.wb.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + 'ff', 16) >>> 0 : (t = r.sA.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = r.L_.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = r.Ym.exec(e)) ? (255 | s(c(t[1]), d(t[2]), d(t[3]))) >>> 0 : (t = r.Jn.exec(e)) ? (s(c(t[1]), d(t[2]), d(t[3])) | u(t[4])) >>> 0 : null;
}
function a(e, t, n) {
    return e < 60 ? [t, n, 0] : e < 120 ? [n, t, 0] : e < 180 ? [0, t, n] : e < 240 ? [0, n, t] : e < 300 ? [n, 0, t] : [t, 0, n];
}
function s(e, t, n) {
    var r = (1 - Math.abs(2 * n - 1)) * t,
        i = r * (1 - Math.abs(((e / 60) % 2) - 1)),
        o = n - r / 2,
        s = a(e, r, i);
    return (Math.round((s[0] + o) * 255) << 24) | (Math.round((s[1] + o) * 255) << 16) | (Math.round((s[2] + o) * 255) << 8);
}
function l(e) {
    var t = parseInt(e, 10);
    return t < 0 ? 0 : t > 255 ? 255 : t;
}
function c(e) {
    return (((parseFloat(e) % 360) + 360) % 360) / 360;
}
function u(e) {
    var t = parseFloat(e);
    return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t);
}
function d(e) {
    var t = parseFloat(e);
    return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
