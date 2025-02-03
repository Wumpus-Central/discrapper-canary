var i = n(21841),
    r = n(689118);
function a(e, t) {
    return (64512 & e.charCodeAt(t)) == 55296 && !(t < 0) && !(t + 1 >= e.length) && (64512 & e.charCodeAt(t + 1)) == 56320;
}
function s(e, t) {
    if (Array.isArray(e)) return e.slice();
    if (!e) return [];
    var n = [];
    if ('string' == typeof e) {
        if (t) {
            if ('hex' === t) for ((e = e.replace(/[^a-z0-9]+/gi, '')).length % 2 != 0 && (e = '0' + e), r = 0; r < e.length; r += 2) n.push(parseInt(e[r] + e[r + 1], 16));
        } else
            for (var i = 0, r = 0; r < e.length; r++) {
                var s = e.charCodeAt(r);
                s < 128 ? (n[i++] = s) : (s < 2048 ? (n[i++] = (s >> 6) | 192) : (a(e, r) ? ((s = 65536 + ((1023 & s) << 10) + (1023 & e.charCodeAt(++r))), (n[i++] = (s >> 18) | 240), (n[i++] = ((s >> 12) & 63) | 128)) : (n[i++] = (s >> 12) | 224), (n[i++] = ((s >> 6) & 63) | 128)), (n[i++] = (63 & s) | 128));
            }
    } else for (r = 0; r < e.length; r++) n[r] = 0 | e[r];
    return n;
}
function o(e) {
    for (var t = '', n = 0; n < e.length; n++) t += c(e[n].toString(16));
    return t;
}
function l(e) {
    return ((e >>> 24) | ((e >>> 8) & 65280) | ((e << 8) & 16711680) | ((255 & e) << 24)) >>> 0;
}
function u(e, t) {
    for (var n = '', i = 0; i < e.length; i++) {
        var r = e[i];
        'little' === t && (r = l(r)), (n += d(r.toString(16)));
    }
    return n;
}
function c(e) {
    return 1 === e.length ? '0' + e : e;
}
function d(e) {
    if (7 === e.length) return '0' + e;
    if (6 === e.length) return '00' + e;
    if (5 === e.length) return '000' + e;
    if (4 === e.length) return '0000' + e;
    if (3 === e.length) return '00000' + e;
    else if (2 === e.length) return '000000' + e;
    else if (1 === e.length) return '0000000' + e;
    else return e;
}
function f(e, t, n, r) {
    var a,
        s = n - t;
    i(s % 4 == 0);
    for (var o = Array(s / 4), l = 0, u = t; l < o.length; l++, u += 4) (a = 'big' === r ? (e[u] << 24) | (e[u + 1] << 16) | (e[u + 2] << 8) | e[u + 3] : (e[u + 3] << 24) | (e[u + 2] << 16) | (e[u + 1] << 8) | e[u]), (o[l] = a >>> 0);
    return o;
}
function _(e, t) {
    for (var n = Array(4 * e.length), i = 0, r = 0; i < e.length; i++, r += 4) {
        var a = e[i];
        'big' === t ? ((n[r] = a >>> 24), (n[r + 1] = (a >>> 16) & 255), (n[r + 2] = (a >>> 8) & 255), (n[r + 3] = 255 & a)) : ((n[r + 3] = a >>> 24), (n[r + 2] = (a >>> 16) & 255), (n[r + 1] = (a >>> 8) & 255), (n[r] = 255 & a));
    }
    return n;
}
function p(e, t) {
    return (e >>> t) | (e << (32 - t));
}
function h(e, t) {
    return (e << t) | (e >>> (32 - t));
}
function m(e, t) {
    return (e + t) >>> 0;
}
function g(e, t, n) {
    return (e + t + n) >>> 0;
}
function E(e, t, n, i) {
    return (e + t + n + i) >>> 0;
}
function v(e, t, n, i, r) {
    return (e + t + n + i + r) >>> 0;
}
function y(e, t, n, i) {
    var r = e[t],
        a = (i + e[t + 1]) >>> 0,
        s = (a < i ? 1 : 0) + n + r;
    (e[t] = s >>> 0), (e[t + 1] = a);
}
function I(e, t, n, i) {
    return (((t + i) >>> 0 < t ? 1 : 0) + e + n) >>> 0;
}
function b(e, t, n, i) {
    return (t + i) >>> 0;
}
function T(e, t, n, i, r, a, s, o) {
    var l,
        u = t;
    return (e + n + r + s + (l = 0 + ((u = (u + i) >>> 0) < t ? 1 : 0) + ((u = (u + a) >>> 0) < a ? 1 : 0) + ((u = (u + o) >>> 0) < o ? 1 : 0))) >>> 0;
}
function S(e, t, n, i, r, a, s, o) {
    return (t + i + a + o) >>> 0;
}
function A(e, t, n, i, r, a, s, o, l, u) {
    var c,
        d = t;
    return (e + n + r + s + l + (c = 0 + ((d = (d + i) >>> 0) < t ? 1 : 0) + ((d = (d + a) >>> 0) < a ? 1 : 0) + ((d = (d + o) >>> 0) < o ? 1 : 0) + ((d = (d + u) >>> 0) < u ? 1 : 0))) >>> 0;
}
function N(e, t, n, i, r, a, s, o, l, u) {
    return (t + i + a + o + u) >>> 0;
}
function C(e, t, n) {
    return ((t << (32 - n)) | (e >>> n)) >>> 0;
}
function R(e, t, n) {
    return ((e << (32 - n)) | (t >>> n)) >>> 0;
}
function O(e, t, n) {
    return e >>> n;
}
function D(e, t, n) {
    return ((e << (32 - n)) | (t >>> n)) >>> 0;
}
(t.inherits = r), (t.toArray = s), (t.toHex = o), (t.htonl = l), (t.toHex32 = u), (t.zero2 = c), (t.zero8 = d), (t.join32 = f), (t.split32 = _), (t.rotr32 = p), (t.rotl32 = h), (t.sum32 = m), (t.sum32_3 = g), (t.sum32_4 = E), (t.sum32_5 = v), (t.sum64 = y), (t.sum64_hi = I), (t.sum64_lo = b), (t.sum64_4_hi = T), (t.sum64_4_lo = S), (t.sum64_5_hi = A), (t.sum64_5_lo = N), (t.rotr64_hi = C), (t.rotr64_lo = R), (t.shr64_hi = O), (t.shr64_lo = D);
