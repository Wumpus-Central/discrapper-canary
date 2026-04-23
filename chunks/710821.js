var n = e(503199),
    o = e(120394),
    a = RangeError;
r.exports = function (r, t, e, i) {
    var p = n(r),
        u = o(e),
        y = u < 0 ? p + u : u;
    if (y >= p || y < 0) throw new a("Incorrect index");
    for (var f = new t(p), c = 0; c < p; c++) f[c] = c === y ? i : r[c];
    return f;
};
