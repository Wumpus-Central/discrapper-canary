e.exports = function (e) {
    for (var t = -1, n = null == e ? 0 : e.length, r = 0, i = []; ++t < n; ) {
        var l = e[t];
        l && (i[r++] = l);
    }
    return i;
};
