t.exports = function (t, e) {
    for (var a = -1, r = null == t ? 0 : t.length, n = Array(r); ++a < r; ) n[a] = e(t[a], a, t);
    return n;
};
