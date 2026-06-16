e.exports = function (e, t, n) {
    var i = -1,
        r = e.length;
    t < 0 && (t = -t > r ? 0 : r + t), (n = n > r ? r : n) < 0 && (n += r), (r = t > n ? 0 : (n - t) >>> 0), (t >>>= 0);
    for (var s = Array(r); ++i < r; ) s[i] = e[i + t];
    return s;
};
