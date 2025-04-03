var r = n(141603),
    o = n(688313),
    a = n(65007),
    i = n(349446);
e.exports = function (e, t, n) {
    for (var s = o(t), c = i.f, l = a.f, u = 0; u < s.length; u++) {
        var d = s[u];
        r(e, d) || (n && r(n, d)) || c(e, d, l(t, d));
    }
};
