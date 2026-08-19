var n = e(503199),
    o = e(120394),
    a = RangeError;
r.exports = function (r, t, e, i) {
    var p = n(r),
        f = o(e),
        u = f < 0 ? p + f : f;
    if (u >= p || u < 0) throw new a("Incorrect index");
    for (var y = new t(p), c = 0; c < p; c++) y[c] = c === u ? i : r[c];
    return y;
};
