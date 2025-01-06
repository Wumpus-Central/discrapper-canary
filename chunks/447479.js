e.exports = function (e, t, n, i) {
    var s = -1,
        r = null == e ? 0 : e.length;
    for (i && r && (n = e[++s]); ++s < r; ) n = t(n, e[s], s, e);
    return n;
};
