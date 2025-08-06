var r = n(77025),
    i = n(998627),
    o = n(840991),
    a = n(117895);
e.exports = function (e, t, n) {
    for (var s = i(t), l = a.f, c = o.f, u = 0; u < s.length; u++) {
        var d = s[u];
        r(e, d) || (n && r(n, d)) || l(e, d, c(t, d));
    }
};
