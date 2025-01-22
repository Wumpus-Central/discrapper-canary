var i = r(812639),
    a = r(757209),
    o = r(105890),
    s = Math.ceil,
    l = Math.max;
function u(e, n, r) {
    n = (r ? a(e, n, r) : void 0 === n) ? 1 : l(o(n), 0);
    var u = null == e ? 0 : e.length;
    if (!u || n < 1) return [];
    for (var c = 0, d = 0, f = Array(s(u / n)); c < u; ) f[d++] = i(e, c, (c += n));
    return f;
}
e.exports = u;
