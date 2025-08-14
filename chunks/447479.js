u.exports = function (u, t, f, n) {
    var r = -1,
        e = null == u ? 0 : u.length;
    for (n && e && (f = u[++r]); ++r < e; ) f = t(f, u[r], r, u);
    return f;
};
