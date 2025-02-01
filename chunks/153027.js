function t(e, t) {
    for (var n = -1, i = null == e ? 0 : e.length; ++n < i; ) if (t(e[n], n, e)) return !0;
    return !1;
}
e.exports = t;
