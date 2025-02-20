var r = n(49693),
    i = n(959318),
    o = RangeError;
e.exports = function (e, t, n, a) {
    var s = r(e),
        l = i(n),
        c = l < 0 ? s + l : l;
    if (c >= s || c < 0) throw o('Incorrect index');
    for (var u = new t(s), d = 0; d < s; d++) u[d] = d === c ? a : e[d];
    return u;
};
