e.exports = function (e, t, n, r) {
    var i = -1,
        l = null == e ? 0 : e.length;
    for (r && l && (n = e[++i]); ++i < l; ) n = t(n, e[i], i, e);
    return n;
};
