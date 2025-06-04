var r = n(914331),
    i = n(77826),
    a = RangeError;
e.exports = function (e, t, n, o) {
    var s = r(e),
        l = i(n),
        c = l < 0 ? s + l : l;
    if (c >= s || c < 0) throw new a('Incorrect index');
    for (var u = new t(s), d = 0; d < s; d++) u[d] = d === c ? o : e[d];
    return u;
};
