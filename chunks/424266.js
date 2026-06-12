var h = t(325041),
    i = t(841891),
    n = t(89582),
    p = Math.ceil,
    e = Math.max;
r.exports = function (r, a, t) {
    a = (t ? i(r, a, t) : void 0 === a) ? 1 : e(n(a), 0);
    var u = null == r ? 0 : r.length;
    if (!u || a < 1) return [];
    for (var c = 0, o = 0, s = Array(p(u / a)); c < u; ) s[o++] = h(r, c, (c += a));
    return s;
};
