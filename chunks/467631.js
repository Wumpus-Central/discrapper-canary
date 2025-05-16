e.exports = function (e, t) {
    for (var n = -1, r = null == e ? 0 : e.length, i = Array(r); ++n < r; ) i[n] = t(e[n], n, e);
    return i;
};
