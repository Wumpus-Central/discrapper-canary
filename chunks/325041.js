e.exports = function (e, t, r) {
    var n = -1,
        o = e.length;
    t < 0 && (t = -t > o ? 0 : o + t), (r = r > o ? o : r) < 0 && (r += o), (o = t > r ? 0 : (r - t) >>> 0), (t >>>= 0);
    for (var i = Array(o); ++n < o; ) i[n] = e[n + t];
    return i;
};
