var n = e(503199),
    o = e(120394),
    i = RangeError;
r.exports = function (r, t, e, a) {
    var u = n(r),
        c = o(e),
        f = c < 0 ? u + c : c;
    if (f >= u || f < 0) throw new i("Incorrect index");
    for (var p = new t(u), s = 0; s < u; s++) p[s] = s === f ? a : r[s];
    return p;
};
