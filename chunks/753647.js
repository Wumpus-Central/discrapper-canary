n.d(t, { u: () => a });
var i = n(185833),
    r = n(239189);
function a(e) {
    var t;
    return 'number' == typeof e ? (e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null) : (t = i.g7.exec(e)) ? parseInt(t[1] + 'ff', 16) >>> 0 : r.colorNames && void 0 !== r.colorNames[e] ? r.colorNames[e] : (t = i.B8.exec(e)) ? ((l(t[1]) << 24) | (l(t[2]) << 16) | (l(t[3]) << 8) | 255) >>> 0 : (t = i.m4.exec(e)) ? ((l(t[1]) << 24) | (l(t[2]) << 16) | (l(t[3]) << 8) | c(t[4])) >>> 0 : (t = i.wb.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + 'ff', 16) >>> 0 : (t = i.sA.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = i.L_.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = i.Ym.exec(e)) ? (255 | o(u(t[1]), d(t[2]), d(t[3]))) >>> 0 : (t = i.Jn.exec(e)) ? (o(u(t[1]), d(t[2]), d(t[3])) | c(t[4])) >>> 0 : null;
}
function s(e, t, n) {
    return e < 60 ? [t, n, 0] : e < 120 ? [n, t, 0] : e < 180 ? [0, t, n] : e < 240 ? [0, n, t] : e < 300 ? [n, 0, t] : [t, 0, n];
}
function o(e, t, n) {
    var i = (1 - Math.abs(2 * n - 1)) * t,
        r = i * (1 - Math.abs(((e / 60) % 2) - 1)),
        a = n - i / 2,
        o = s(e, i, r);
    return (Math.round((o[0] + a) * 255) << 24) | (Math.round((o[1] + a) * 255) << 16) | (Math.round((o[2] + a) * 255) << 8);
}
function l(e) {
    var t = parseInt(e, 10);
    return t < 0 ? 0 : t > 255 ? 255 : t;
}
function u(e) {
    return (((parseFloat(e) % 360) + 360) % 360) / 360;
}
function c(e) {
    var t = parseFloat(e);
    return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t);
}
function d(e) {
    var t = parseFloat(e);
    return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
