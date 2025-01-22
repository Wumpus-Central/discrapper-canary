(n.byteLength = c), (n.toByteArray = f), (n.fromByteArray = _);
for (var r = [], i = [], a = 'undefined' != typeof Uint8Array ? Uint8Array : Array, o = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/', s = 0, l = o.length; s < l; ++s) (r[s] = o[s]), (i[o.charCodeAt(s)] = s);
function u(e) {
    var n = e.length;
    if (n % 4 > 0) throw Error('Invalid string. Length must be a multiple of 4');
    var r = e.indexOf('=');
    -1 === r && (r = n);
    var i = r === n ? 0 : 4 - (r % 4);
    return [r, i];
}
function c(e) {
    var n = u(e),
        r = n[0],
        i = n[1];
    return ((r + i) * 3) / 4 - i;
}
function d(e, n, r) {
    return ((n + r) * 3) / 4 - r;
}
function f(e) {
    var n,
        r,
        o = u(e),
        s = o[0],
        l = o[1],
        c = new a(d(e, s, l)),
        f = 0,
        p = l > 0 ? s - 4 : s;
    for (r = 0; r < p; r += 4) (n = (i[e.charCodeAt(r)] << 18) | (i[e.charCodeAt(r + 1)] << 12) | (i[e.charCodeAt(r + 2)] << 6) | i[e.charCodeAt(r + 3)]), (c[f++] = (n >> 16) & 255), (c[f++] = (n >> 8) & 255), (c[f++] = 255 & n);
    return 2 === l && ((n = (i[e.charCodeAt(r)] << 2) | (i[e.charCodeAt(r + 1)] >> 4)), (c[f++] = 255 & n)), 1 === l && ((n = (i[e.charCodeAt(r)] << 10) | (i[e.charCodeAt(r + 1)] << 4) | (i[e.charCodeAt(r + 2)] >> 2)), (c[f++] = (n >> 8) & 255), (c[f++] = 255 & n)), c;
}
function p(e) {
    return r[(e >> 18) & 63] + r[(e >> 12) & 63] + r[(e >> 6) & 63] + r[63 & e];
}
function h(e, n, r) {
    for (var i, a = [], o = n; o < r; o += 3) (i = ((e[o] << 16) & 16711680) + ((e[o + 1] << 8) & 65280) + (255 & e[o + 2])), a.push(p(i));
    return a.join('');
}
function _(e) {
    for (var n, i = e.length, a = i % 3, o = [], s = 16383, l = 0, u = i - a; l < u; l += s) o.push(h(e, l, l + s > u ? u : l + s));
    return 1 === a ? ((n = e[i - 1]), o.push(r[n >> 2] + r[(n << 4) & 63] + '==')) : 2 === a && ((n = (e[i - 2] << 8) + e[i - 1]), o.push(r[n >> 10] + r[(n >> 4) & 63] + r[(n << 2) & 63] + '=')), o.join('');
}
(i['-'.charCodeAt(0)] = 62), (i['_'.charCodeAt(0)] = 63);
