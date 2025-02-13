t.exports = function (t, e) {
    for (var a = -1, r = null == t ? 0 : t.length, n = 0, o = []; ++a < r; ) {
        var _ = t[a];
        e(_, a, t) && (o[n++] = _);
    }
    return o;
};
