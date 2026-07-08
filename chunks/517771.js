var n = e(210140),
    o = e(501346),
    i = e(873078),
    a = e(4940);
r.exports = function (r, t, e) {
    for (var u = o(t), c = a.f, f = i.f, p = 0; p < u.length; p++) {
        var s = u[p];
        n(r, s) || (e && n(e, s)) || c(r, s, f(t, s));
    }
};
