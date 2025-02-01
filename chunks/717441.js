var i = n(49693),
    r = n(959318),
    a = RangeError;
e.exports = function (e, t, n, s) {
    var o = i(e),
        l = r(n),
        u = l < 0 ? o + l : l;
    if (u >= o || u < 0) throw a('Incorrect index');
    for (var c = new t(o), d = 0; d < o; d++) c[d] = d === u ? s : e[d];
    return c;
};
