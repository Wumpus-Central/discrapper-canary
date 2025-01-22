r.d(n, {
    u: function () {
        return o;
    }
});
var i = r(185833),
    a = r(239189);
function o(e) {
    var n;
    return 'number' == typeof e ? (e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null) : (n = i.g7.exec(e)) ? parseInt(n[1] + 'ff', 16) >>> 0 : a.colorNames && void 0 !== a.colorNames[e] ? a.colorNames[e] : (n = i.B8.exec(e)) ? ((u(n[1]) << 24) | (u(n[2]) << 16) | (u(n[3]) << 8) | 255) >>> 0 : (n = i.m4.exec(e)) ? ((u(n[1]) << 24) | (u(n[2]) << 16) | (u(n[3]) << 8) | d(n[4])) >>> 0 : (n = i.wb.exec(e)) ? parseInt(n[1] + n[1] + n[2] + n[2] + n[3] + n[3] + 'ff', 16) >>> 0 : (n = i.sA.exec(e)) ? parseInt(n[1], 16) >>> 0 : (n = i.L_.exec(e)) ? parseInt(n[1] + n[1] + n[2] + n[2] + n[3] + n[3] + n[4] + n[4], 16) >>> 0 : (n = i.Ym.exec(e)) ? (255 | l(c(n[1]), f(n[2]), f(n[3]))) >>> 0 : (n = i.Jn.exec(e)) ? (l(c(n[1]), f(n[2]), f(n[3])) | d(n[4])) >>> 0 : null;
}
function s(e, n, r) {
    return e < 60 ? [n, r, 0] : e < 120 ? [r, n, 0] : e < 180 ? [0, n, r] : e < 240 ? [0, r, n] : e < 300 ? [r, 0, n] : [n, 0, r];
}
function l(e, n, r) {
    var i = (1 - Math.abs(2 * r - 1)) * n,
        a = i * (1 - Math.abs(((e / 60) % 2) - 1)),
        o = r - i / 2,
        l = s(e, i, a);
    return (Math.round((l[0] + o) * 255) << 24) | (Math.round((l[1] + o) * 255) << 16) | (Math.round((l[2] + o) * 255) << 8);
}
function u(e) {
    var n = parseInt(e, 10);
    return n < 0 ? 0 : n > 255 ? 255 : n;
}
function c(e) {
    return (((parseFloat(e) % 360) + 360) % 360) / 360;
}
function d(e) {
    var n = parseFloat(e);
    return n < 0 ? 0 : n > 1 ? 255 : Math.round(255 * n);
}
function f(e) {
    var n = parseFloat(e);
    return n < 0 ? 0 : n > 100 ? 1 : n / 100;
}
