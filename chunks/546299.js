var i = r(21841),
    a = r(689118);
function o(e, n) {
    return (64512 & e.charCodeAt(n)) == 55296 && !(n < 0) && !(n + 1 >= e.length) && (64512 & e.charCodeAt(n + 1)) == 56320;
}
function s(e, n) {
    if (Array.isArray(e)) return e.slice();
    if (!e) return [];
    var r = [];
    if ('string' == typeof e) {
        if (n) {
            if ('hex' === n) for ((e = e.replace(/[^a-z0-9]+/gi, '')).length % 2 != 0 && (e = '0' + e), a = 0; a < e.length; a += 2) r.push(parseInt(e[a] + e[a + 1], 16));
        } else {
            for (var i = 0, a = 0; a < e.length; a++) {
                var s = e.charCodeAt(a);
                s < 128 ? (r[i++] = s) : (s < 2048 ? (r[i++] = (s >> 6) | 192) : (o(e, a) ? ((s = 65536 + ((1023 & s) << 10) + (1023 & e.charCodeAt(++a))), (r[i++] = (s >> 18) | 240), (r[i++] = ((s >> 12) & 63) | 128)) : (r[i++] = (s >> 12) | 224), (r[i++] = ((s >> 6) & 63) | 128)), (r[i++] = (63 & s) | 128));
            }
        }
    } else for (a = 0; a < e.length; a++) r[a] = 0 | e[a];
    return r;
}
function l(e) {
    for (var n = '', r = 0; r < e.length; r++) n += d(e[r].toString(16));
    return n;
}
function u(e) {
    return ((e >>> 24) | ((e >>> 8) & 65280) | ((e << 8) & 16711680) | ((255 & e) << 24)) >>> 0;
}
function c(e, n) {
    for (var r = '', i = 0; i < e.length; i++) {
        var a = e[i];
        'little' === n && (a = u(a)), (r += f(a.toString(16)));
    }
    return r;
}
function d(e) {
    return 1 === e.length ? '0' + e : e;
}
function f(e) {
    if (7 === e.length) return '0' + e;
    if (6 === e.length) return '00' + e;
    if (5 === e.length) return '000' + e;
    else if (4 === e.length) return '0000' + e;
    else if (3 === e.length) return '00000' + e;
    else if (2 === e.length) return '000000' + e;
    else if (1 === e.length) return '0000000' + e;
    else return e;
}
function p(e, n, r, a) {
    var o,
        s = r - n;
    i(s % 4 == 0);
    for (var l = Array(s / 4), u = 0, c = n; u < l.length; u++, c += 4) (o = 'big' === a ? (e[c] << 24) | (e[c + 1] << 16) | (e[c + 2] << 8) | e[c + 3] : (e[c + 3] << 24) | (e[c + 2] << 16) | (e[c + 1] << 8) | e[c]), (l[u] = o >>> 0);
    return l;
}
function h(e, n) {
    for (var r = Array(4 * e.length), i = 0, a = 0; i < e.length; i++, a += 4) {
        var o = e[i];
        'big' === n ? ((r[a] = o >>> 24), (r[a + 1] = (o >>> 16) & 255), (r[a + 2] = (o >>> 8) & 255), (r[a + 3] = 255 & o)) : ((r[a + 3] = o >>> 24), (r[a + 2] = (o >>> 16) & 255), (r[a + 1] = (o >>> 8) & 255), (r[a] = 255 & o));
    }
    return r;
}
function _(e, n) {
    return (e >>> n) | (e << (32 - n));
}
function m(e, n) {
    return (e << n) | (e >>> (32 - n));
}
function g(e, n) {
    return (e + n) >>> 0;
}
function E(e, n, r) {
    return (e + n + r) >>> 0;
}
function v(e, n, r, i) {
    return (e + n + r + i) >>> 0;
}
function y(e, n, r, i, a) {
    return (e + n + r + i + a) >>> 0;
}
function b(e, n, r, i) {
    var a = e[n],
        o = (i + e[n + 1]) >>> 0,
        s = (o < i ? 1 : 0) + r + a;
    (e[n] = s >>> 0), (e[n + 1] = o);
}
function I(e, n, r, i) {
    return (((n + i) >>> 0 < n ? 1 : 0) + e + r) >>> 0;
}
function T(e, n, r, i) {
    return (n + i) >>> 0;
}
function S(e, n, r, i, a, o, s, l) {
    var u,
        c = n;
    return (u = 0 + ((c = (c + i) >>> 0) < n ? 1 : 0)), (u += (c = (c + o) >>> 0) < o ? 1 : 0), (e + r + a + s + (u += (c = (c + l) >>> 0) < l ? 1 : 0)) >>> 0;
}
function A(e, n, r, i, a, o, s, l) {
    return (n + i + o + l) >>> 0;
}
function C(e, n, r, i, a, o, s, l, u, c) {
    var d,
        f = n;
    return (d = 0 + ((f = (f + i) >>> 0) < n ? 1 : 0)), (d += (f = (f + o) >>> 0) < o ? 1 : 0), (d += (f = (f + l) >>> 0) < l ? 1 : 0), (e + r + a + s + u + (d += (f = (f + c) >>> 0) < c ? 1 : 0)) >>> 0;
}
function N(e, n, r, i, a, o, s, l, u, c) {
    return (n + i + o + l + c) >>> 0;
}
function R(e, n, r) {
    return ((n << (32 - r)) | (e >>> r)) >>> 0;
}
function O(e, n, r) {
    return ((e << (32 - r)) | (n >>> r)) >>> 0;
}
function D(e, n, r) {
    return e >>> r;
}
function x(e, n, r) {
    return ((e << (32 - r)) | (n >>> r)) >>> 0;
}
(n.inherits = a), (n.toArray = s), (n.toHex = l), (n.htonl = u), (n.toHex32 = c), (n.zero2 = d), (n.zero8 = f), (n.join32 = p), (n.split32 = h), (n.rotr32 = _), (n.rotl32 = m), (n.sum32 = g), (n.sum32_3 = E), (n.sum32_4 = v), (n.sum32_5 = y), (n.sum64 = b), (n.sum64_hi = I), (n.sum64_lo = T), (n.sum64_4_hi = S), (n.sum64_4_lo = A), (n.sum64_5_hi = C), (n.sum64_5_lo = N), (n.rotr64_hi = R), (n.rotr64_lo = O), (n.shr64_hi = D), (n.shr64_lo = x);
