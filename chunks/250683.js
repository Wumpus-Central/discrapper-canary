(t.byteLength = u), (t.toByteArray = d), (t.fromByteArray = p);
for (var n = [], i = [], r = 'undefined' != typeof Uint8Array ? Uint8Array : Array, a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/', s = 0, o = a.length; s < o; ++s) (n[s] = a[s]), (i[a.charCodeAt(s)] = s);
function l(e) {
    var t = e.length;
    if (t % 4 > 0) throw Error('Invalid string. Length must be a multiple of 4');
    var n = e.indexOf('=');
    -1 === n && (n = t);
    var i = n === t ? 0 : 4 - (n % 4);
    return [n, i];
}
function u(e) {
    var t = l(e),
        n = t[0],
        i = t[1];
    return ((n + i) * 3) / 4 - i;
}
function c(e, t, n) {
    return ((t + n) * 3) / 4 - n;
}
function d(e) {
    var t,
        n,
        a = l(e),
        s = a[0],
        o = a[1],
        u = new r(c(e, s, o)),
        d = 0,
        f = o > 0 ? s - 4 : s;
    for (n = 0; n < f; n += 4) (t = (i[e.charCodeAt(n)] << 18) | (i[e.charCodeAt(n + 1)] << 12) | (i[e.charCodeAt(n + 2)] << 6) | i[e.charCodeAt(n + 3)]), (u[d++] = (t >> 16) & 255), (u[d++] = (t >> 8) & 255), (u[d++] = 255 & t);
    return 2 === o && ((t = (i[e.charCodeAt(n)] << 2) | (i[e.charCodeAt(n + 1)] >> 4)), (u[d++] = 255 & t)), 1 === o && ((t = (i[e.charCodeAt(n)] << 10) | (i[e.charCodeAt(n + 1)] << 4) | (i[e.charCodeAt(n + 2)] >> 2)), (u[d++] = (t >> 8) & 255), (u[d++] = 255 & t)), u;
}
function f(e) {
    return n[(e >> 18) & 63] + n[(e >> 12) & 63] + n[(e >> 6) & 63] + n[63 & e];
}
function _(e, t, n) {
    for (var i = [], r = t; r < n; r += 3) i.push(f(((e[r] << 16) & 16711680) + ((e[r + 1] << 8) & 65280) + (255 & e[r + 2])));
    return i.join('');
}
function p(e) {
    for (var t, i = e.length, r = i % 3, a = [], s = 16383, o = 0, l = i - r; o < l; o += s) a.push(_(e, o, o + s > l ? l : o + s));
    return 1 === r ? a.push(n[(t = e[i - 1]) >> 2] + n[(t << 4) & 63] + '==') : 2 === r && a.push(n[(t = (e[i - 2] << 8) + e[i - 1]) >> 10] + n[(t >> 4) & 63] + n[(t << 2) & 63] + '='), a.join('');
}
(i['-'.charCodeAt(0)] = 62), (i['_'.charCodeAt(0)] = 63);
