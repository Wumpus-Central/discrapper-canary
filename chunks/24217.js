e.exports = function (e) {
    for (var t = -1, r = null == e ? 0 : e.length, a = 0, n = []; ++t < r; ) {
        var o = e[t];
        o && (n[a++] = o);
    }
    return n;
};
