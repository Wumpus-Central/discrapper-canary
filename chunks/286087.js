var r = n(512008),
    a = n(457990),
    o = n(965746),
    i = n(164336);
e.exports = function (e, t, n) {
    for (var s = a(t), l = i.f, c = o.f, u = 0; u < s.length; u++) {
        var d = s[u];
        r(e, d) || (n && r(n, d)) || l(e, d, c(t, d));
    }
};
