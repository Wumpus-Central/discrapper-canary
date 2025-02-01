e.exports = function (e, t, n, i) {
    var s = -1,
        l = null == e ? 0 : e.length;
    for (i && l && (n = e[++s]); ++s < l; ) n = t(n, e[s], s, e);
    return n;
};
