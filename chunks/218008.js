r.exports = function (r, n, t, u) {
    for (var o = -1, e = null == r ? 0 : r.length; ++o < e; ) {
        var p = r[o];
        n(u, p, t(p), r);
    }
    return u;
};
