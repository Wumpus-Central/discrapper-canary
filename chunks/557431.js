u.exports = function (u, f, e, r) {
    var t = -1,
        n = null == u ? 0 : u.length;
    for (r && n && (e = u[++t]); ++t < n; ) e = f(e, u[t], t, u);
    return e;
};
