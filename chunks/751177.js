t.exports = function (t, e) {
    for (var a = -1, r = null == t ? 0 : t.length, n = 0, _ = []; ++a < r; ) {
        var o = t[a];
        e(o, a, t) && (_[n++] = o);
    }
    return _;
};
