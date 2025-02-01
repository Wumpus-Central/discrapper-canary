function t(e, t, n) {
    for (var i = -1, r = null == e ? 0 : e.length; ++i < r; ) if (n(t, e[i])) return !0;
    return !1;
}
e.exports = t;
