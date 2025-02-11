e.exports = function (e) {
    for (var t = -1, n = null == e ? 0 : e.length, l = 0, r = []; ++t < n; ) {
        var i = e[t];
        i && (r[l++] = i);
    }
    return r;
};
