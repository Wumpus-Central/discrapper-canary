t.exports = function (t, r, e, u) {
    var n = -1,
        o = null == t ? 0 : t.length;
    for (u && o && (e = t[++n]); ++n < o; ) e = r(e, t[n], n, t);
    return e;
};
