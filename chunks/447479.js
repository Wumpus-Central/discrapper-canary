e.exports = function (e, t, n, i) {
    var o = -1,
        r = null == e ? 0 : e.length;
    for (i && r && (n = e[++o]); ++o < r; ) n = t(n, e[o], o, e);
    return n;
};
