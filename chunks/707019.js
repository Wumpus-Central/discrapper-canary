var r = n(801282),
    i = n(900013),
    o = n(730179),
    a = Math.ceil,
    s = Math.max;
e.exports = function (e, t, n) {
    t = (n ? i(e, t, n) : void 0 === t) ? 1 : s(o(t), 0);
    var l = null == e ? 0 : e.length;
    if (!l || t < 1) return [];
    for (var c = 0, u = 0, d = Array(a(l / t)); c < l; ) d[u++] = r(e, c, (c += t));
    return d;
};
