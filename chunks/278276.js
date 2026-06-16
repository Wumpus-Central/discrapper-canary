e.exports = function (e, t) {
    for (var n = -1, i = Array(e); ++n < e; ) i[n] = t(n);
    return i;
};
