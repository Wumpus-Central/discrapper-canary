e.exports = function (e) {
    for (var t = -1, r = null == e ? 0 : e.length, n = 0, l = []; ++t < r; ) {
        var i = e[t];
        i && (l[n++] = i);
    }
    return l;
};
