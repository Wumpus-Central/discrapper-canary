var r = n(21841),
    i = n(689118);
function o(e, t) {
    return (64512 & e.charCodeAt(t)) == 55296 && !(t < 0) && !(t + 1 >= e.length) && (64512 & e.charCodeAt(t + 1)) == 56320;
}
function a(e, t) {
    if (Array.isArray(e)) return e.slice();
    if (!e) return [];
    var n = [];
    if ('string' == typeof e) {
        if (t) {
            if ('hex' === t) for ((e = e.replace(/[^a-z0-9]+/gi, '')).length % 2 != 0 && (e = '0' + e), i = 0; i < e.length; i += 2) n.push(parseInt(e[i] + e[i + 1], 16));
        } else
            for (var r = 0, i = 0; i < e.length; i++) {
                var a = e.charCodeAt(i);
                a < 128 ? (n[r++] = a) : (a < 2048 ? (n[r++] = (a >> 6) | 192) : (o(e, i) ? ((a = 65536 + ((1023 & a) << 10) + (1023 & e.charCodeAt(++i))), (n[r++] = (a >> 18) | 240), (n[r++] = ((a >> 12) & 63) | 128)) : (n[r++] = (a >> 12) | 224), (n[r++] = ((a >> 6) & 63) | 128)), (n[r++] = (63 & a) | 128));
            }
    } else for (i = 0; i < e.length; i++) n[i] = 0 | e[i];
    return n;
}
function s(e) {
    for (var t = '', n = 0; n < e.length; n++) t += u(e[n].toString(16));
    return t;
}
function l(e) {
    return ((e >>> 24) | ((e >>> 8) & 65280) | ((e << 8) & 16711680) | ((255 & e) << 24)) >>> 0;
}
function c(e, t) {
    for (var n = '', r = 0; r < e.length; r++) {
        var i = e[r];
        'little' === t && (i = l(i)), (n += d(i.toString(16)));
    }
    return n;
}
function u(e) {
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
function f(e, t, n, i) {
    var o,
        a = n - t;
    r(a % 4 == 0);
    for (var s = Array(a / 4), l = 0, c = t; l < s.length; l++, c += 4) (o = 'big' === i ? (e[c] << 24) | (e[c + 1] << 16) | (e[c + 2] << 8) | e[c + 3] : (e[c + 3] << 24) | (e[c + 2] << 16) | (e[c + 1] << 8) | e[c]), (s[l] = o >>> 0);
    return s;
}
function p(e, t) {
    for (var n = Array(4 * e.length), r = 0, i = 0; r < e.length; r++, i += 4) {
        var o = e[r];
        'big' === t ? ((n[i] = o >>> 24), (n[i + 1] = (o >>> 16) & 255), (n[i + 2] = (o >>> 8) & 255), (n[i + 3] = 255 & o)) : ((n[i + 3] = o >>> 24), (n[i + 2] = (o >>> 16) & 255), (n[i + 1] = (o >>> 8) & 255), (n[i] = 255 & o));
    }
    return n;
}
function _(e, t) {
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
function E(e, t, n, r) {
    return (e + t + n + r) >>> 0;
}
function v(e, t, n, r, i) {
    return (e + t + n + r + i) >>> 0;
}
function b(e, t, n, r) {
    var i = e[t],
        o = (r + e[t + 1]) >>> 0,
        a = +(o < r) + n + i;
    (e[t] = a >>> 0), (e[t + 1] = o);
}
function y(e, t, n, r) {
    return (+((t + r) >>> 0 < t) + e + n) >>> 0;
}
function O(e, t, n, r) {
    return (t + r) >>> 0;
}
function S(e, t, n, r, i, o, a, s) {
    var l,
        c = t;
    return (e + n + i + a + (l = 0 + +((c = (c + r) >>> 0) < t) + +((c = (c + o) >>> 0) < o) + +((c = (c + s) >>> 0) < s))) >>> 0;
}
function I(e, t, n, r, i, o, a, s) {
    return (t + r + o + s) >>> 0;
}
function T(e, t, n, r, i, o, a, s, l, c) {
    var u,
        d = t;
    return (e + n + i + a + l + (u = 0 + +((d = (d + r) >>> 0) < t) + +((d = (d + o) >>> 0) < o) + +((d = (d + s) >>> 0) < s) + +((d = (d + c) >>> 0) < c))) >>> 0;
}
function N(e, t, n, r, i, o, a, s, l, c) {
    return (t + r + o + s + c) >>> 0;
}
function A(e, t, n) {
    return ((t << (32 - n)) | (e >>> n)) >>> 0;
}
function C(e, t, n) {
    return ((e << (32 - n)) | (t >>> n)) >>> 0;
}
function R(e, t, n) {
    return e >>> n;
}
function P(e, t, n) {
    return ((e << (32 - n)) | (t >>> n)) >>> 0;
}
(t.inherits = i), (t.toArray = a), (t.toHex = s), (t.htonl = l), (t.toHex32 = c), (t.zero2 = u), (t.zero8 = d), (t.join32 = f), (t.split32 = p), (t.rotr32 = _), (t.rotl32 = h), (t.sum32 = m), (t.sum32_3 = g), (t.sum32_4 = E), (t.sum32_5 = v), (t.sum64 = b), (t.sum64_hi = y), (t.sum64_lo = O), (t.sum64_4_hi = S), (t.sum64_4_lo = I), (t.sum64_5_hi = T), (t.sum64_5_lo = N), (t.rotr64_hi = A), (t.rotr64_lo = C), (t.shr64_hi = R), (t.shr64_lo = P);
