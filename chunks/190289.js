var r = n(77025),
    i = n(998627),
    a = n(840991),
    o = n(117895);
e.exports = function (e, t, n) {
    for (var s = i(t), l = o.f, c = a.f, u = 0; u < s.length; u++) {
        var d = s[u];
        r(e, d) || (n && r(n, d)) || l(e, d, c(t, d));
    }
};
