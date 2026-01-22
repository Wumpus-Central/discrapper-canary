var n = r(325041),
    o = r(841891),
    i = r(89582),
    a = Math.ceil,
    s = Math.max;
e.exports = function (e, t, r) {
    t = (r ? o(e, t, r) : void 0 === t) ? 1 : s(i(t), 0);
    var c = null == e ? 0 : e.length;
    if (!c || t < 1) return [];
    for (var u = 0, d = 0, p = Array(a(c / t)); u < c; ) p[d++] = n(e, u, (u += t));
    return p;
};
