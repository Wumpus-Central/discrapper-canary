var r = n(670820),
    i = n(915124),
    a = n(865757),
    s = Math.ceil,
    o = Math.max;
e.exports = function (e, t, n) {
    t = (n ? i(e, t, n) : void 0 === t) ? 1 : o(a(t), 0);
    var l = null == e ? 0 : e.length;
    if (!l || t < 1) return [];
    for (var c = 0, u = 0, d = Array(s(l / t)); c < l; ) d[u++] = r(e, c, (c += t));
    return d;
};
