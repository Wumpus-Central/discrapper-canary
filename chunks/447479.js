e.exports = function (e, t, n, i) {
    var r = -1,
        l = null == e ? 0 : e.length;
    for (i && l && (n = e[++r]); ++r < l; ) n = t(n, e[r], r, e);
    return n;
};
