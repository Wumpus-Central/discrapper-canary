t.exports = function (t, e) {
    for (var a = -1, r = Array(t); ++a < t; ) r[a] = e(a);
    return r;
};
