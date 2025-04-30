var r = n(812639),
    i = n(757209),
    a = n(105890),
    o = Math.ceil,
    s = Math.max;
e.exports = function (e, t, n) {
    t = (n ? i(e, t, n) : void 0 === t) ? 1 : s(a(t), 0);
    var l = null == e ? 0 : e.length;
    if (!l || t < 1) return [];
    for (var c = 0, u = 0, d = Array(o(l / t)); c < l; ) d[u++] = r(e, c, (c += t));
    return d;
};
