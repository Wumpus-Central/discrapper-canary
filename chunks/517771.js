var r = n(210140),
    i = n(501346),
    a = n(873078),
    s = n(4940);
e.exports = function (e, t, n) {
    for (var o = i(t), l = s.f, c = a.f, u = 0; u < o.length; u++) {
        var d = o[u];
        r(e, d) || (n && r(n, d)) || l(e, d, c(t, d));
    }
};
