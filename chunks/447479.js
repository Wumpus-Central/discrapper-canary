e.exports = function (e, t, n, r) {
    var i = -1,
        s = null == e ? 0 : e.length;
    for (r && s && (n = e[++i]); ++i < s; ) n = t(n, e[i], i, e);
    return n;
};
