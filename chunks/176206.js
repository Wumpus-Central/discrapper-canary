e.exports = function (e, t) {
    for (var n = -1, r = null == e ? 0 : e.length, i = 0, a = []; ++n < r; ) {
        var s = e[n];
        t(s, n, e) && (a[i++] = s);
    }
    return a;
};
