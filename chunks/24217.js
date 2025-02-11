e.exports = function (e) {
    for (var t = -1, n = null == e ? 0 : e.length, r = 0, l = []; ++t < n; ) {
        var a = e[t];
        a && (l[r++] = a);
    }
    return l;
};
