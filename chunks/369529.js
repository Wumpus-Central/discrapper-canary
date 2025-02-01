function t(e, t) {
    for (var n = -1, i = null == e ? 0 : e.length, r = 0, a = []; ++n < i; ) {
        var s = e[n];
        t(s, n, e) && (a[r++] = s);
    }
    return a;
}
e.exports = t;
