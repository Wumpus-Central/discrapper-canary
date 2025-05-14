var e = r(914331),
    o = r(77826),
    i = RangeError;
t.exports = function (t, n, r, u) {
    var c = e(t),
        a = o(r),
        f = a < 0 ? c + a : a;
    if (f >= c || f < 0) throw new i('Incorrect index');
    for (var s = new n(c), l = 0; l < c; l++) s[l] = l === f ? u : t[l];
    return s;
};
