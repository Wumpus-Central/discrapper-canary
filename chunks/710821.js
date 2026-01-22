var r = n(503199),
    i = n(120394),
    a = RangeError;
e.exports = function (e, t, n, s) {
    var o = r(e),
        l = i(n),
        c = l < 0 ? o + l : l;
    if (c >= o || c < 0) throw new a("Incorrect index");
    for (var u = new t(o), d = 0; d < o; d++) u[d] = d === c ? s : e[d];
    return u;
};
