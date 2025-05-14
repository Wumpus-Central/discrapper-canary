var e = r(77025),
    o = r(998627),
    i = r(840991),
    u = r(117895);
t.exports = function (t, n, r) {
    for (var c = o(n), a = u.f, f = i.f, s = 0; s < c.length; s++) {
        var l = c[s];
        e(t, l) || (r && e(r, l)) || a(t, l, f(n, l));
    }
};
