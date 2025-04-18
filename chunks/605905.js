e.exports = function (e, t, n, r) {
    var i = -1,
        a = null == e ? 0 : e.length;
    for (r && a && (n = e[++i]); ++i < a; ) n = t(n, e[i], i, e);
    return n;
};
