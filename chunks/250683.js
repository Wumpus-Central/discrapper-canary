(t.byteLength = c), (t.toByteArray = d), (t.fromByteArray = p);
for (var n = [], r = [], i = 'undefined' != typeof Uint8Array ? Uint8Array : Array, o = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/', a = 0, s = o.length; a < s; ++a) (n[a] = o[a]), (r[o.charCodeAt(a)] = a);
function l(e) {
    var t = e.length;
    if (t % 4 > 0) throw Error('Invalid string. Length must be a multiple of 4');
    var n = e.indexOf('=');
    -1 === n && (n = t);
    var r = n === t ? 0 : 4 - (n % 4);
    return [n, r];
}
function c(e) {
    var t = l(e),
        n = t[0],
        r = t[1];
    return ((n + r) * 3) / 4 - r;
}
function u(e, t, n) {
    return ((t + n) * 3) / 4 - n;
}
function d(e) {
    var t,
        n,
        o = l(e),
        a = o[0],
        s = o[1],
        c = new i(u(e, a, s)),
        d = 0,
        f = s > 0 ? a - 4 : a;
    for (n = 0; n < f; n += 4) (t = (r[e.charCodeAt(n)] << 18) | (r[e.charCodeAt(n + 1)] << 12) | (r[e.charCodeAt(n + 2)] << 6) | r[e.charCodeAt(n + 3)]), (c[d++] = (t >> 16) & 255), (c[d++] = (t >> 8) & 255), (c[d++] = 255 & t);
    return 2 === s && ((t = (r[e.charCodeAt(n)] << 2) | (r[e.charCodeAt(n + 1)] >> 4)), (c[d++] = 255 & t)), 1 === s && ((t = (r[e.charCodeAt(n)] << 10) | (r[e.charCodeAt(n + 1)] << 4) | (r[e.charCodeAt(n + 2)] >> 2)), (c[d++] = (t >> 8) & 255), (c[d++] = 255 & t)), c;
}
function f(e) {
    return n[(e >> 18) & 63] + n[(e >> 12) & 63] + n[(e >> 6) & 63] + n[63 & e];
}
function _(e, t, n) {
    for (var r = [], i = t; i < n; i += 3) r.push(f(((e[i] << 16) & 16711680) + ((e[i + 1] << 8) & 65280) + (255 & e[i + 2])));
    return r.join('');
}
function p(e) {
    for (var t, r = e.length, i = r % 3, o = [], a = 16383, s = 0, l = r - i; s < l; s += a) o.push(_(e, s, s + a > l ? l : s + a));
    return 1 === i ? o.push(n[(t = e[r - 1]) >> 2] + n[(t << 4) & 63] + '==') : 2 === i && o.push(n[(t = (e[r - 2] << 8) + e[r - 1]) >> 10] + n[(t >> 4) & 63] + n[(t << 2) & 63] + '='), o.join('');
}
(r[45] = 62), (r[95] = 63);
