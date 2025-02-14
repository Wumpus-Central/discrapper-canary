e.exports = function (e, t, n, i) {
    var r = -1,
        a = null == e ? 0 : e.length;
    for (i && a && (n = e[++r]); ++r < a; ) n = t(n, e[r], r, e);
    return n;
};
