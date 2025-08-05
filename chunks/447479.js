e.exports = function (e, t, u, r) {
    var n = -1,
        f = null == e ? 0 : e.length;
    for (r && f && (u = e[++n]); ++n < f; ) u = t(u, e[n], n, e);
    return u;
};
