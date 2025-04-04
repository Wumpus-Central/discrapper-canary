var r = n(185698),
    o = n(491959),
    a = n(378105),
    i = n(85328);
e.exports = function (e, t, n) {
    for (var s = o(t), c = i.f, l = a.f, u = 0; u < s.length; u++) {
        var d = s[u];
        r(e, d) || (n && r(n, d)) || c(e, d, l(t, d));
    }
};
