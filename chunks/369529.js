e.exports = function (e, t) {
    for (var n = -1, r = null == e ? 0 : e.length, i = 0, o = []; ++n < r; ) {
        var a = e[n];
        t(a, n, e) && (o[i++] = a);
    }
    return o;
};
