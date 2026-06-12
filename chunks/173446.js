e.exports = function (e, t, n, i) {
    var r = -1,
        s = null == e ? 0 : e.length;
    for (i && s && (n = e[++r]); ++r < s; ) n = t(n, e[r], r, e);
    return n;
};
