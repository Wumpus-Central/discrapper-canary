var i = n(141603),
    r = n(688313),
    a = n(65007),
    s = n(349446);
e.exports = function (e, t, n) {
    for (var o = r(t), l = s.f, u = a.f, c = 0; c < o.length; c++) {
        var d = o[c];
        i(e, d) || (n && i(n, d)) || l(e, d, u(t, d));
    }
};
