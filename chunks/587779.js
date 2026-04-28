t.exports = function (t, r) {
    for (var e = -1, n = null == t ? 0 : t.length, o = Array(n); ++e < n; ) o[e] = r(t[e], e, t);
    return o;
};
