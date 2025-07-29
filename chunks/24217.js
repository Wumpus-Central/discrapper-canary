e.exports = function (e) {
    for (var t = -1, r = null == e ? 0 : e.length, n = 0, i = []; ++t < r; ) {
        var l = e[t];
        l && (i[n++] = l);
    }
    return i;
};
